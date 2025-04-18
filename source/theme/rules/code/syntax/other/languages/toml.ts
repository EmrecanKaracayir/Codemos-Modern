import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Properties
    {
      scope: [
        "meta.embedded.block.toml support.type.property-name",
        "source.toml support.type.property-name",
      ],
      settings: {
        foreground: colors.scope05,
        fontStyle: "",
      },
    },
    // Inline tables
    {
      scope: [
        "meta.embedded.block.toml punctuation.definition.table.inline",
        "source.toml punctuation.definition.table.inline",
      ],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
    // Arrays
    {
      scope: [
        "meta.embedded.block.toml punctuation.definition.array.table",
        "meta.embedded.block.toml punctuation.definition.table",
        "source.toml punctuation.definition.array.table",
        "source.toml punctuation.definition.table",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Array items
    {
      scope: [
        "meta.embedded.block.toml meta.table punctuation.separator.dot",
        "meta.embedded.block.toml meta.array punctuation.separator.dot",
        "meta.embedded.block.toml support.type.property-name.array",
        "meta.embedded.block.toml support.type.property-name.table",
        "source.toml meta.table punctuation.separator.dot",
        "source.toml meta.array punctuation.separator.dot",
        "source.toml support.type.property-name.array",
        "source.toml support.type.property-name.table",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Date
    {
      scope: [
        "meta.embedded.block.toml constant.other.time.date",
        "source.toml constant.other.time.date",
      ],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Time
    {
      scope: [
        "meta.embedded.block.toml constant.other.time.time",
        "source.toml constant.other.time.time",
      ],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
    // Date-time
    {
      scope: [
        "meta.embedded.block.toml constant.other.time.datetime",
        "source.toml constant.other.time.datetime",
      ],
      settings: {
        foreground: colors.scope15,
        fontStyle: "",
      },
    },
    // Date-time (offset)
    {
      scope: [
        "meta.embedded.block.toml constant.other.time.datetime.offset",
        "source.toml constant.other.time.datetime.offset",
      ],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
  ];
};
