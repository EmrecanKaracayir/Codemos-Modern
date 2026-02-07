import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope09;
  return {
    // Events
    event: color,
  };
}
