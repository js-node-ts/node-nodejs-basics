import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const pathFile = join(__dirname, "files", "fileToCompress.txt");
  const pathZip = join(__dirname, "files", "archive.gz");
  const readableStream = createReadStream(pathFile);
  const writeableStream = createWriteStream(pathZip);
  const gzip = createGzip();

  pipeline(readableStream, gzip, writeableStream);
};

await compress();
