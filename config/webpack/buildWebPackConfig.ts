import { buildDevServer } from "./buildDevServer";
import { buildLoadersList } from "./buildLoadersList";
import { buildPluginsList } from "./buildPluginsList";
import { buildResolversList } from "./buildResolversList";
import { BuildOptions } from "./types/buildOptions";
import type { Configuration } from "webpack";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
	const { mode, paths: { html, output, entry }, port, staticFolder, isDev } = options;

	const loaders = buildLoadersList({ isDev });
	const plugins = buildPluginsList({ htmlPluginTemplatePath: html });
	const resolvers = buildResolversList();
	const devServer = buildDevServer({ port, static: staticFolder });
	
	return {
		mode: mode,
		entry,
		output: {
			filename: "[name].[contenthash].js",
			path: output,
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		plugins: plugins,
		module: {
			rules: loaders,
		},
		devServer: isDev ? devServer : undefined,
		resolve: { extensions: resolvers },
	};
};
