import { ThemeContext } from "../../@types";
import { configureExtensionSettings } from "./other";

export function configureSettings(themeContext: ThemeContext | null): void {
  configureExtensionSettings(themeContext);
}
