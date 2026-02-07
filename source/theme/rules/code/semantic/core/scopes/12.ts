import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope12;
  return {
    // Number literals
    number: color,
  };
}
