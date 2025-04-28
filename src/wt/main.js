import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const path = join(__dirname, "worker.js");
  const cpusResult = cpus();

  return Promise.all(
    cpusResult.map((_, index) => {
      return new Promise((resolve) => {
        const workerData = 10 + index;
        const worker = new Worker(path, { workerData });
        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      });
    })
  ).then((data) => {
    console.log(data);
  });
};

await performCalculations();
