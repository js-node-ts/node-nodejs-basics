import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const text = "I am fresh and young";
  const path = join(__dirname, "files", "fresh.txt");
  const options = {
    flag: "wx",
  };

  return writeFile(path, text, options).catch(() => {
    throw new Error("FS operation failed");
  });
};

await create();
