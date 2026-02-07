import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope01;
  return {
    // Decorators
    decorator: color,
  };
}
