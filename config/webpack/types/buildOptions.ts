export type ModeType = 'development' | 'production';
export type BuildOptionsPaths = {
	entry: string,
	output: string,
	html: string,
}
export interface BuildOptions {
	mode: ModeType,
	paths: BuildOptionsPaths,
	isDev: boolean,
	port: number,
	staticFolder: string,
}