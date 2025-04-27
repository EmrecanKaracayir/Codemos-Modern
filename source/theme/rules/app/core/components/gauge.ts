import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "gauge.background": styles.fill.accent.pri,
    "gauge.border": styles.stroke.control.default,
    "gauge.errorBackground": styles.basic.def.red.pri,
    "gauge.errorForeground": styles.basic.def.red.qua,
    "gauge.foreground": styles.fill.control.rest,
    "gauge.warningBackground": styles.basic.def.orange.pri,
    "gauge.warningForeground": styles.basic.def.orange.qua,
  };
};
