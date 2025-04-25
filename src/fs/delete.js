import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rm } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const path = join(__dirname, "files", "fileToRemove.txt");

  return rm(path).catch(() => {
    throw new Error("FS operation failed");
  });
};

await remove();
