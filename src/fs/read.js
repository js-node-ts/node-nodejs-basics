import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const path = join(__dirname, "files", "fileToRead.txt");
  const options = {
    encoding: "utf8",
  };

  return readFile(path, options)
    .then((data) => console.log(data))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await read();
