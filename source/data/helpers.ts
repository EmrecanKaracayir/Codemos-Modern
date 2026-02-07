import { AuxThemeId, AuxThemeRegId } from "../@types/index";

export function getAuxThemeRegIds(auxThemeRegs: string[]): AuxThemeRegId[] {
  return auxThemeRegs.map((auxThemeReg) => {
    const [owner, repo] = auxThemeReg.split("/");
    if (!owner || !repo) {
      throw new Error(`Invalid auxiliary theme registry: ${auxThemeReg}`);
    }
    return { owner, repo };
  });
}

export function getAuxThemeId(auxTheme: string): AuxThemeId {
  const [owner, repo, publisher, extension, theme] = auxTheme.split("/");
  if (!owner || !repo || !publisher || !extension || !theme) {
    throw new Error(`Invalid auxiliary theme: ${auxTheme}`);
  }
  return { owner, repo, publisher, extension, theme };
}
