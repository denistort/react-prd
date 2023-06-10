import type { Configuration, ModuleOptions, ResolveOptions, WebpackPluginInstance } from "webpack";
import type { BuildOptions } from './types/buildOptions';

export class WebpackConfigBuilder {
	config: Configuration = {};

	constructor(options: BuildOptions) {
		const { mode, paths: { output, entry } } = options;

		this.config = {
			mode: mode,
			entry,
			output: {
				filename: "[name].[contenthash].js",
				path: output,
				clean: true,
			},
			plugins: [],
			module: {
				rules: [],
			},
			resolve: { extensions: [] },
		}
	}

	public buildLoaders(loaders: ModuleOptions["rules"]) {
		if (this.config.module?.rules) {
			this.config.module.rules = loaders;
		}
		return this;
	}

	public buildResolvers(resolvers: ResolveOptions["extensions"]) {
		if (this.config.resolve?.extensions) {
			this.config.resolve.extensions = resolvers;
		}
		return this;
	}

	public buildPlugins(plugins: WebpackPluginInstance[]) {
		if (this.config.plugins) {
			this.config.plugins = plugins
		}
		return this;
	}

	public getConfig() {
		return this.config;
	}
}