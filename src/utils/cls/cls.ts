export const cls = (...args: unknown[]) => {
	const allStrings = args.filter((item) => typeof item === "string");
	const objs = args.filter((item) => typeof item === "object" && !Array.isArray(item)) as Object[];
	let res: string[] = [];

	objs.forEach((obj) => {
		const entries = Object.entries(obj);

		const result = entries.filter((val) => Boolean(val[1])).map((val) => val[0]);
		res.push(...result);
	});
	const uniqClasses = new Set([...allStrings, ...res]);
	return [...uniqClasses].join(' ');
};
