import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { StateObj } from "../@types";
import { defaultConfig } from "../modern";

const DATA_DIR = join(__dirname, "..", "..", "data");

export const defaultStateObj: StateObj = {
  isUntouched: true,
  config: defaultConfig,
};

export function getStateObj(): StateObj {
  try {
    const stateStr = readFileSync(join(DATA_DIR, ".state.json"), "utf-8");
    const stateObj = JSON.parse(stateStr);
    return stateObj as StateObj;
  } catch (error) {
    console.log(error);
    // 🔴 Write to output
    console.warn(
      "Codemos Modern: Unexpected error occurred while trying to read state file, recreating it with default values.",
    );
    writeStateFile(defaultStateObj);
    return defaultStateObj;
  }
}

export function updateState(stateObj: StateObj) {
  writeStateFile(stateObj);
}

function writeStateFile(stateObj: StateObj) {
  const stateStr = JSON.stringify(stateObj, null, 2);
  const path = join(DATA_DIR, ".state.json");
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, {
      recursive: true,
    });
  }
  writeFileSync(path, stateStr);
}
