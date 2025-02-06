import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "testing.coverCountBadgeBackground": styles.fill.accent.pri,
    "testing.coverCountBadgeForeground": styles.fill.onAccent.pri,
    "testing.coveredBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.coveredBorder": "#FF0000FF", // 🔵 Unknown attribute
    "testing.coveredGutterBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconErrored.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconErrored": styles.basic.def.red.pri,
    "testing.iconFailed.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconFailed": styles.basic.def.red.pri,
    "testing.iconPassed.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconPassed": styles.basic.def.green.pri,
    "testing.iconQueued.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconQueued": styles.basic.def.yellow.pri,
    "testing.iconSkipped.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconSkipped": styles.basic.neutral.ter,
    "testing.iconUnset.retired": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconUnset": styles.basic.neutral.ter,
    "testing.message.error.badgeBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.message.error.badgeBorder": "#FF0000FF", // 🔵 Unknown attribute
    "testing.message.error.badgeForeground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.message.error.lineBackground": styles.basic.def.red.qua,
    "testing.message.info.decorationForeground": styles.basic.def.blue.pri,
    "testing.message.info.lineBackground": styles.basic.def.blue.qua,
    "testing.messagePeekBorder": "#FF0000FF", // 🔵 Unknown attribute
    "testing.messagePeekHeaderBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.peekBorder": styles.basic.alt.red.pri,
    "testing.peekHeaderBackground": styles.basic.loc.red.pri,
    "testing.runAction": styles.basic.def.green.pri,
    "testing.uncoveredBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.uncoveredBorder": "#FF0000FF", // 🔵 Unknown attribute
    "testing.uncoveredBranchBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.uncoveredGutterBackground": "#FF0000FF", // 🔵 Unknown attribute
  };
};
