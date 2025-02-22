import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope05;
  return [
    // Namespaces
    {
      scope: [
        "entity.name.namespace",
        "entity.name.scope-resolution",
        "entity.name.type.namespace",
        "entity.other.attribute-name.namespace",
        "storage.modifier.namespace",
        "support.namespace",
        "support.other.namespace",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Modules
    {
      scope: [
        "entity.name.module",
        "entity.name.type.module",
        "entity.other.attribute-name.module",
        "storage.modifier.module",
        "support.module",
        "support.other.module",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Packages
    {
      scope: [
        "entity.name.package",
        "entity.name.type.package",
        "entity.other.attribute-name.package",
        "storage.modifier.import",
        "storage.modifier.package",
        "support.package",
        "support.other.package",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Tags
    {
      scope: [
        "entity.name.tag",
        "entity.name.type.tag",
        "entity.other.attribute-name.tag",
        "entity.tag",
        "storage.type.tag",
        "support.tag",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
