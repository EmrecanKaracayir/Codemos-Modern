import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope05;
  return {
    // Namespaces
    namespace: color,
  };
}
