import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
import { createHash } from "crypto";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const path = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const readStream = createReadStream(path);

  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const hash = createHash("sha256").update(chunk).digest("hex");

      callback(null, hash);
    },
  });

  pipeline(readStream, transformStream, process.stdout);
};

await calculateHash();
