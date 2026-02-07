import * as fs from "fs";
import { join } from "path";

export function checkCacheForFile(
  category: string,
  directory: string,
  file: string,
): boolean {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(
    __dirname,
    "..",
    "..",
    "data",
    "cache",
    category,
    directory,
    file,
  );
  return fs.existsSync(path);
}

export function getCachedFileContent(
  category: string,
  directory: string,
  file: string,
): string {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(
    __dirname,
    "..",
    "..",
    "data",
    "cache",
    category,
    directory,
    file,
  );
  return fs.readFileSync(path, "utf-8");
}

export async function cacheFile(
  category: string,
  directory: string,
  file: string,
  contents: string,
): Promise<void> {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(
    __dirname,
    "..",
    "..",
    "data",
    "cache",
    category,
    directory,
    file,
  );
  if (
    !fs.existsSync(
      join(__dirname, "..", "..", "data", "cache", category, directory),
    )
  ) {
    fs.mkdirSync(
      join(__dirname, "..", "..", "data", "cache", category, directory),
      {
        recursive: true,
      },
    );
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contents, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function deleteCachedDir(
  category: string,
  directory: string,
): Promise<void> {
  directory = directory.toLowerCase();
  const path = join(
    __dirname,
    "..",
    "..",
    "data",
    "cache",
    category,
    directory,
  );
  return new Promise((resolve, reject) => {
    fs.rm(path, { recursive: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export function checkIfFileCached(
  category: string,
  directory: string,
  file: string,
): boolean {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(
    __dirname,
    "..",
    "..",
    "data",
    "cache",
    category,
    directory,
    file,
  );
  return fs.existsSync(path);
}
