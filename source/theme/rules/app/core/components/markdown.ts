import { ThemeContext } from "../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "markdownAlert.caution.foreground": styles.basic.def.red.pri,
    "markdownAlert.important.foreground": styles.basic.def.purple.pri,
    "markdownAlert.note.foreground": styles.basic.def.blue.pri,
    "markdownAlert.tip.foreground": styles.basic.def.green.pri,
    "markdownAlert.warning.foreground": styles.basic.def.orange.pri,
  };
}
