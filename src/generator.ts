import { convertFromDirectory } from "joi-to-typescript";

convertFromDirectory({
  schemaDirectory: "./src/schemas",
  typeOutputDirectory: "./src/@types",
}).then(() => {
  console.log(`interfaces are created...`);
});
