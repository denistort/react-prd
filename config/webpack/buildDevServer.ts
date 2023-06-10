import { Configuration } from 'webpack-dev-server';

export type BuildDevServerOptions = { static: string } & Pick<Configuration, 'port'>;

export const buildDevServer = (options: BuildDevServerOptions): Configuration => {
	return {
		port: options.port,
		open: true,
		static: {
			directory: options.static
		},
		historyApiFallback: true,
		client: {
			progress: true,
		}
	}
}