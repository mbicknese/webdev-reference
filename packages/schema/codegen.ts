import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "./schema.graphql",
	generates: {
		"./dist/client/": {
			preset: "client",
		},
		"./dist/types.ts": {
			plugins: ["typescript"],
		},
	},
	config: {
		scalars: {
			Date: "number",
		},
	},
};
export default config;
