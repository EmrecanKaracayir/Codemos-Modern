import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const color = themeContext.variantConfig.codeColors.scope03;
  return {
    // Classes
    class: color,
    // Enums
    enum: color,
    // Interfaces
    interface: color,
    // Structs
    struct: color,
    // Types
    type: color,
  };
}
