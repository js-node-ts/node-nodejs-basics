import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { spawn } from "child_process";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const path = join(__dirname, "files", "script.js");
  const childProcess = spawn("node", [path, ...(args ?? [])]);

  await Promise.all([
    pipeline(process.stdin, childProcess.stdin),
    pipeline(childProcess.stdout, process.stdout),
  ]);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
