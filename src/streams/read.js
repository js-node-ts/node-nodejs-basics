import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const path = join(__dirname, "files", "fileToRead.txt");
  const options = { encoding: "utf8" };

  createReadStream(path, options).pipe(process.stdout);
};

await read();
