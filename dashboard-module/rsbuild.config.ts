import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation(
			{
				name: "dashboard_module",
				exposes: {
					"./routes": "./src/routes.tsx",
				},
				shared: ["react", "react-dom", "react-router"],
			},
			{},
		),
	],
	server: {
		port: 3001,
	},
});
