import { EOL } from "os";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const transformed = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("")
        .concat(EOL);

      callback(null, transformed);
    },
  });

  pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
