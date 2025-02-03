import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Aliases
    {
      scope: ["source.php entity.other.alias"],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Enum Access
    {
      scope: ["constant.other.class.php"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
    // Constants
    {
      scope: ["meta.embedded.block.php constant.other", "source.php constant.other"],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.php string punctuation.definition.variable",
        "source.php string punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Variables
    {
      scope: ["variable.other.php"],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated variables
    {
      scope: [
        "meta.embedded.block.php string variable punctuation.definition.variable",
        "source.php string variable punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated language variables
    {
      scope: [
        "meta.embedded.block.php string variable.language punctuation.definition.variable",
        "source.php string variable.language punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Heredoc/Nowdoc operator
    {
      scope: [
        "meta.embedded.block.php keyword.operator.heredoc",
        "meta.embedded.block.php keyword.operator.nowdoc",
        "source.php keyword.operator.heredoc",
        "source.php keyword.operator.nowdoc",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Logical operators
    {
      scope: [
        "meta.embedded.block.php keyword.operator.logical",
        "source.php keyword.operator.logical",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Other operators
    {
      scope: [
        "meta.embedded.block.php keyword.operator.arithmetic",
        "source.php keyword.definition.arrow",
        "source.php meta.attribute punctuation.definition.arguments",
        "source.php punctuation.section.array",
      ],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
    // Blade keywords
    {
      scope: ["keyword.blade"],
      settings: {
        foreground: colors.scope08,
        fontStyle: "",
      },
    },
    // Blade php constructs
    {
      scope: ["support.function.construct"],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
    // Blade functions fix
    {
      scope: ["source.php meta.attribute entity.name.function"],
      settings: {
        foreground: colors.scope02,
        fontStyle: "",
      },
    },
    // Embedded SQL
    {
      scope: ["source.sql.embedded"],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
  ];
};
