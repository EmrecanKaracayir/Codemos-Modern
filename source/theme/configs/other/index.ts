import { ThemeContext } from "../../../@types";
import { configureExtensionSettings as configureMaterialIconThemeSettings } from "./extensions/materialIconTheme";

export function configureExtensionSettings(
  themeContext: ThemeContext | null,
): void {
  configureMaterialIconThemeSettings(themeContext);
}
