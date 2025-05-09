import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Attributes (Properties)
    {
      scope: [
        "meta.embedded.block.lua entity.other.attribute",
        "source.lua entity.other.attribute",
      ],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
  ];
};
