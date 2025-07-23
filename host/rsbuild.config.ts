import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(
      {
        name: "host",
        remotes: {
          dashboard_module:
            "dashboard_module@http://localhost:3001/mf-manifest.json",
        },
        shareStrategy: "loaded-first",
        shared: ["react", "react-dom", "react-router"],
      },
      {},
    ),
  ],
});
