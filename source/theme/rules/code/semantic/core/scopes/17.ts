import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope17;
  return {
    // Operators
    operator: color,
  };
}
