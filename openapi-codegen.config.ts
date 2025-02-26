import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  restoapp: {
    from: {
      relativePath: "./swagger.json",
      source: "file",
    },
    outputDir: "src/generated",
    to: async (context) => {
      const filenamePrefix = "restoapp";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
