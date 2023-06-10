import { createRoot } from "react-dom/client";

import "./styles/index.scss";

import { App } from "./App";
import { ThemeProvider } from "./theme/theme";

let rootElement = document.querySelector("#root");

if (!rootElement) {
	const div = document.createElement("div");
	div.id = "root";
	document.body.appendChild(div);
	rootElement = div;
}

const Entry = (
	<ThemeProvider>
		<App />
	</ThemeProvider>
)

createRoot(rootElement).render(Entry);
