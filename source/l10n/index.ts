import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { env } from "vscode";
import { L10N_DIR_NAME } from "../extension/constants";

const L10N_DIR = join(__dirname, `../../assets/${L10N_DIR_NAME}`);

let cache: Record<string, string>;

export function l10nT(
  key: string,
  args?: Array<string | number | boolean>,
): string {
  if (!cache) {
    const filePath = join(L10N_DIR, `/bundle.l10n.${env.language}.json`);
    if (existsSync(filePath)) {
      cache = JSON.parse(readFileSync(filePath, "utf-8"));
    } else {
      cache = JSON.parse(
        readFileSync(join(L10N_DIR, "bundle.l10n.json"), "utf-8"),
      );
    }
  }
  let value: string =
    cache[key] ??
    `🌐 Translation missing for key: "${key}"! Report to Codemos.`;
  if (value.startsWith("@{") && value.endsWith("}")) {
    value = value.slice(2, -1);
    value =
      cache[value] ??
      `🌐 Translation missing for key: "${value}"! Report to Codemos.`;
  }
  if (args) {
    args.forEach((arg, index) => {
      value = value.replace(new RegExp(`\\{${index}\\}`, "g"), String(arg));
    });
  }
  return value;
}
