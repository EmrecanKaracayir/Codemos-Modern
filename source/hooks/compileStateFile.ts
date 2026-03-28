import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { defaultStateObj } from "../extension/state";

const DATA_DIR = join(__dirname, "..", "..", "data");

const stateStr = JSON.stringify(defaultStateObj, null, 2);
if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}
writeFileSync(join(DATA_DIR, ".state.json"), stateStr);
