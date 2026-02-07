import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope15;
  return {
    // Regular expressions
    regexp: color,
  };
}
