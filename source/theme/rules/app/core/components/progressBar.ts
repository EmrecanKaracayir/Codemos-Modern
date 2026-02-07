import { ThemeContext } from "../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "progressBar.background": styles.fill.accent.pri,
  };
}
