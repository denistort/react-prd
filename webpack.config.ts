import path from "node:path";
import "webpack-dev-server";

import { buildWebpackConfig } from "./config/webpack";
import { ModeType } from "config/webpack/types/buildOptions";

interface EnvType {
	port: string;
	mode: ModeType
}
export default (env: EnvType) => {
	const indexHtmlPath = path.join(__dirname, "public/index.html");
	const entryFile = path.resolve(__dirname, "src", "main.tsx");
	const output = path.resolve(__dirname, "build");
	// mode
	const mode = env.mode ?? 'development';
	const isDev = mode === 'development';
	
	// dev-server-port
	const port = parseInt(env.port, 10) ?? 3000;
	console.log('PORT IS ', port);
	// public folder
	const publicFolder = path.join(__dirname, 'public');
	console.log(isDev)
	const config = buildWebpackConfig({
		paths: {
			entry: entryFile,
			html: indexHtmlPath,
			output,
		},
		mode: 'development',
		isDev,
		port,
		staticFolder: publicFolder,
	})
	return config;
};
