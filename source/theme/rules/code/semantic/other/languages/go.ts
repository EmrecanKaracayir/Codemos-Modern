import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Formatting symbols inside strings
    "string.format": colors.scope14,
    // nil, true, false
    "variable.defaultLibrary:go": colors.scope06,
  };
}
