import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface BuildPluginListProps {
	htmlPluginTemplatePath: string;
}

export const buildPluginsList = ({
	htmlPluginTemplatePath,
}: BuildPluginListProps): WebpackPluginInstance[] => {
	return [
		new ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: htmlPluginTemplatePath,
		}),
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash:8].css",
			chunkFilename: "[name]-[contenthash:8].css",
		}),
	];
};
