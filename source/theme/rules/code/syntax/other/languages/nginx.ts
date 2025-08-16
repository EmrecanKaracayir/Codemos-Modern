import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Directive context keywords
    {
      scope: ["source.nginx storage.type.directive.context"],
      settings: {
        foreground: colors.scope08,
      },
    },
    // Locations
    {
      scope: ["source.nginx entity.name.context.location"],
      settings: {
        foreground: colors.scope16,
      },
    },
    // Variable punctuation
    {
      scope: ["source.nginx punctuation.definition.variable"],
      settings: {
        foreground: colors.scope10,
      },
    },
    // Raw text
    {
      scope: ["source.nginx meta.context"],
      settings: {
        foreground: colors.scope00,
      },
    },
  ];
};
