import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Value reference
    {
      scope: ["source.helm constant.other.value"],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
    // Mapping punctuation
    {
      scope: ["source.helm punctuation.definition.mapping"],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Pipe operator
    {
      scope: ["source.helm keyword.operator.pipe"],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
  ];
}
