import path from "path";
import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildRules } from "./buildRules";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildRules(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
}
