import { ThemeContext } from "../../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Named entities
    {
      scope: ["constant.character.entity"],
      settings: {
        foreground: colors.scope15,
        fontStyle: "",
      },
    },
  ];
}
