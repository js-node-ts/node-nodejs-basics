import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { cp } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const src = join(__dirname, "files");
  const dest = join(__dirname, "files_copy");
  const options = {
    force: false,
    recursive: true,
    errorOnExist: true,
  };

  return cp(src, dest, options).catch(() => {
    throw new Error("FS operation failed");
  });
};

await copy();
