import { ResolveOptions } from "webpack";

export const buildResolversList = (): ResolveOptions["extensions"] => {
	return [".tsx", ".ts", ".js", ".scss", ".css"];
};
