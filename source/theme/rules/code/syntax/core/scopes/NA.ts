import type { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const decorations = themeContext.textDecorations;
  return [
    // Emphasis symbols
    {
      scope: ["emphasis"],
      settings: {
        fontStyle: "italic",
      },
    },
    // Strong symbols
    {
      scope: ["strong"],
      settings: {
        fontStyle: "bold",
      },
    },
    // Deleted symbols
    {
      scope: ["deleted"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    // Invalid symbols
    {
      scope: ["invalid", "support.invalid"],
      settings: {
        foreground: styles.basic.def.red.pri,
        fontStyle: "",
      },
    },
    // Static symbols
    {
      scope: "meta.method-call.static",
      settings: {
        foreground: styles.basic.def.orange.pri,
        fontStyle: decorations.italic ? "italic" : "",
      },
    },
    // Deprecated symbols
    {
      scope: ["invalid.deprecated", "support.invalid.deprecated"],
      settings: {
        foreground: styles.basic.def.red.pri,
        fontStyle: decorations.strikeThrough ? "strikethrough" : "",
      },
    },
  ];
};
