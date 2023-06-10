import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const buildLoadersList = ({
	isDev,
}: {
	isDev: boolean;
}): ModuleOptions["rules"] => {
	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	const cssLoader = {
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: { modules: true },
			},
		],
	};
	const loaderScss = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader",
		],
	};
	const scssLoader = {
		test: /\.scss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (p: string) => Boolean(p.includes(".module.")),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:8]"
							: "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	};
	return [tsLoader, cssLoader, scssLoader];
};
