import { ThemeContext } from "../../../../../@types";
import { getMixedColorHex9 } from "../../../../../color";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "chat.avatarBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.bg.solid.surface,
    ),
    "chat.avatarForeground": styles.fill.accent.pri,
    "chat.checkpointSeparator": styles.fill.accent.pri,
    "chat.editedFileForeground": "#FF0000FF", // 🔵 Unknown attribute
    "chat.linesAddedForeground": styles.basic.def.green.pri,
    "chat.linesRemovedForeground": styles.basic.def.red.pri,
    "chat.requestBackground": styles.fill.control.subtle,
    "chat.requestBorder": styles.stroke.divider.default,
    "chat.requestBubbleBackground": styles.fill.control.rest,
    "chat.requestBubbleHoverBackground": styles.fill.control.hover,
    "chat.requestCodeBorder": styles.stroke.control.default,
    "chat.slashCommandBackground": styles.fill.control.rest,
    "chat.slashCommandForeground": styles.fill.accent.pri,
    "chat.thinkingShimmer": styles.fill.text.active,
    "chatManagement.sashBorder": "#FF0000FF", // 🔵 Unknown attribute
  };
}
