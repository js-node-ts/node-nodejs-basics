import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rename as renameFile, access, constants } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, "files", "wrongFilename.txt");
  const newPath = join(__dirname, "files", "properFilename.md");
  const errorMessage = "FS operation failed";

  return access(newPath, constants.F_OK)
    .then(() => {
      throw new Error();
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        return renameFile(oldPath, newPath);
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await rename();
