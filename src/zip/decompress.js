import { createUnzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const pathFile = join(__dirname, "files", "fileToCompress.txt");
  const pathFileZip = join(__dirname, "files", "archive.gz");
  const readableStream = createReadStream(pathFileZip);
  const writeableStream = createWriteStream(pathFile);
  const unzip = createUnzip();

  pipeline(readableStream, unzip, writeableStream);
};

await decompress();
