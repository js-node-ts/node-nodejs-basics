import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const path = join(__dirname, "files");

  return readdir(path)
    .then((list) => console.log(list))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
