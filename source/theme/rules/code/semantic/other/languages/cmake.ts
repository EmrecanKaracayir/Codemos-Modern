import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Cmake language helper keywords
    "enum:cmake": colors.scope11,
  };
}
