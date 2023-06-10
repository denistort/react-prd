import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./theme/theme";
import { cls } from "./utils/cls";

export const App: FC = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className={cls('app', theme)}>
			<BrowserRouter>
				<button onClick={setTheme}>ToggleTheme</button>
				<Suspense fallback={<div>Loading</div>}>
					<Routes>
						<Route path="/wewe" element={<div>Wewe page</div>} />
						<Route
							path="/"
							element={
								<div>
									<p>Index page</p>
								</div>
							}
						/>
						<Route path="/about" element={<div>About page</div>} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};
