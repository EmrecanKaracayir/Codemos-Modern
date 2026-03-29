import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { ThemeContext, Variant } from "../@types";
import { STYLES_DIR_PATH } from "../data/paths";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getStyles as getDarkModernStyles } from "../modern/variants/dark/modern";
import { getThemeObj } from "../theme";

// Export styles of all designs
mkdirSync(join(STYLES_DIR_PATH, "dark"), { recursive: true });
writeFileSync(
  join(STYLES_DIR_PATH, "dark/flat.json"),
  JSON.stringify(getStyles("dark", defaultConfig), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "dark/minimal.json"),
  JSON.stringify(getStyles("dark", defaultConfig), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "dark/modern.json"),
  JSON.stringify(getDarkModernStyles(defaultConfig.dark), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "dark/natural.json"),
  JSON.stringify(getStyles("dark", defaultConfig), null, 2),
);
mkdirSync(join(STYLES_DIR_PATH, "light"), { recursive: true });
writeFileSync(
  join(STYLES_DIR_PATH, "light/flat.json"),
  JSON.stringify(getStyles("light", defaultConfig), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "light/minimal.json"),
  JSON.stringify(getStyles("light", defaultConfig), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "light/modern.json"),
  JSON.stringify(getStyles("light", defaultConfig), null, 2),
);
writeFileSync(
  join(STYLES_DIR_PATH, "light/natural.json"),
  JSON.stringify(getStyles("light", defaultConfig), null, 2),
);

// Export themes
const themePaths = getThemePaths();

//  Export default vscode themes
const variants: Variant[] = ["dark", "light"];
variants.forEach((variant) => {
  const themeContext: ThemeContext = {
    textDecorations: defaultConfig.textDecorations,
    variant: variant,
    variantConfig: defaultConfig[variant],
    styles: getStyles(variant, defaultConfig),
    auxUiThemeObj: null,
    auxCodeThemeObj: null,
  };
  writeFileSync(
    themePaths.vscode[variant],
    JSON.stringify(getThemeObj(themeContext), null, 2),
  );
});
