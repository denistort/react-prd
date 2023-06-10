import {
	createContext,
	FC,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export enum Theme {
	"Light" = "light",
	"Dark" = "dark",
}
export type ThemeContextProps = {
	theme?: Theme;
	setTheme?: () => void;
};
const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = `-app-color-theme-`;

const initialTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ??
	window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark: Theme.Light;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, setTheme] = useState(initialTheme);

	const hanlder = useCallback(() => {
		setTheme((theme) => (theme === Theme.Dark ? Theme.Light : Theme.Dark));
	}, [setTheme]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, state);
	}, [state, setTheme]);

	const memoValue = useMemo<ThemeContextProps>(
		() => ({ theme: state, setTheme: hanlder }),
		[state, setTheme]
	);
	return (
		<ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const themeContext = useContext(ThemeContext);
	if (!themeContext) {
		throw new Error("useTheme was called outside from ThemeContext");
	}

	return themeContext;
};
