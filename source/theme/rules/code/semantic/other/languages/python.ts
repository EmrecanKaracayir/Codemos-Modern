import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Magic functions
    magicFunction: colors.scope07,
    // Self parameters
    selfParameter: colors.scope03,
    // Class parameters
    clsParameter: colors.scope03,
    // Decorator functions
    "function.decorator": colors.scope01,
    // Decorator methods
    "method.decorator": colors.scope01,
    // decorator variables
    "variable.decorator": colors.scope09,
    // Builtin constants
    builtinConstant: colors.scope06,
    // Class decorators
    "class.decorator:python": colors.scope01,
  };
};
