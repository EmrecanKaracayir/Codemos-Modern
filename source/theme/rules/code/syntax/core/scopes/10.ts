import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope10;
  const decorations = themeContext.textDecorations;
  return [
    // Variables (read/write)
    {
      scope: [
        "entity.name.variable",
        "meta.block variable",
        "meta.function variable",
        "meta.method variable",
        "variable.other.readwrite",
        "variable",
      ],
      settings: {
        foreground: color,
        fontStyle: `${decorations.underline ? "underline" : ""}`,
      },
    },
    // Variables (read-only)
    {
      scope: [
        "entity.name.variable.constant",
        "meta.block variable.other.constant",
        "meta.function variable.other.constant",
        "meta.method variable.other.constant",
        "variable.other.constant",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Variables static
    {
      scope: ["entity.name.variable.static", "variable.other.static"],
      settings: {
        foreground: color,
        fontStyle: decorations.italic ? "italic" : "",
      },
    },
    // Parameters
    {
      scope: ["entity.name.variable.parameter", "variable.parameter"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Braces
    {
      scope: [
        "meta.brace.round",
        "punctuation.definition.arguments",
        "punctuation.definition.begin.bracket.round",
        "punctuation.definition.end.bracket.round",
        "punctuation.definition.group.begin",
        "punctuation.definition.group.end",
        "punctuation.definition.parameters",
        "punctuation.section.function.begin.bracket.round",
        "punctuation.section.function.end.bracket.round",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
