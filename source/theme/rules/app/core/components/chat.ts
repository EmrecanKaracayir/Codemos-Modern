import { ThemeContext } from "../../../../../@types";
import { getMixedColorHex9 } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "chat.avatarBackground": getMixedColorHex9(styles.fill.control.rest, styles.bg.solid.surface),
    "chat.avatarForeground": styles.fill.accentText.pri,
    "chat.checkpointSeparator": "#FF0000FF", // 🔵 Unknown attribute
    "chat.editedFileForeground": "#FF0000FF", // 🔵 Unknown attribute
    "chat.linesAddedForeground": "#FF0000FF", // 🔵 Unknown attribute
    "chat.linesRemovedForeground": "#FF0000FF", // 🔵 Unknown attribute
    "chat.requestBackground": styles.fill.control.subtle,
    "chat.requestBorder": styles.stroke.divider.default,
    "chat.requestBubbleBackground": styles.fill.control.rest,
    "chat.requestBubbleHoverBackground": styles.fill.control.hover,
    "chat.requestCodeBorder": styles.stroke.control.default,
    "chat.slashCommandBackground": styles.fill.control.rest,
    "chat.slashCommandForeground": styles.fill.accentText.pri,
    "chatManagement.sashBorder": "#FF0000FF", // 🔵 Unknown attribute
  };
};
