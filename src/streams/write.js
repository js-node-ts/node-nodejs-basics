import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const path = join(__dirname, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(path);

  process.stdin.pipe(writeStream);
};

await write();
