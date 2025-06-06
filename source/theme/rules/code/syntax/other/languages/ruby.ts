import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Hash keys
    {
      scope: [
        "meta.embedded.block.ruby constant.other.symbol",
        "source.ruby constant.other.symbol",
      ],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
    // Properties
    {
      scope: [
        "meta.embedded.block.ruby variable.other.constant.instance",
        "meta.embedded.block.ruby variable.other.readwrite.instance",
        "source.ruby variable.other.constant.instance",
        "source.ruby variable.other.readwrite.instance",
      ],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
  ];
};
