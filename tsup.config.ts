import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["source/index.ts"],
	format: "esm",
});
