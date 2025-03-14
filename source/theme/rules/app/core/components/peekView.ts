import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "peekView.border": styles.basic.def.mint.pri,
    "peekViewEditor.background": styles.bg.solid.surface,
    "peekViewEditor.matchHighlightBackground": styles.basic.def.mint.qua,
    "peekViewEditor.matchHighlightBorder": styles.stroke.control.default,
    "peekViewEditorGutter.background": styles.bg.solid.layer,
    "peekViewEditorStickyScroll.background": styles.bg.solid.flyout,
    "peekViewResult.background": styles.bg.solid.layer,
    "peekViewResult.fileForeground": styles.fill.text.sec,
    "peekViewResult.lineForeground": styles.fill.text.sec,
    "peekViewResult.matchHighlightBackground": styles.basic.def.mint.qua,
    "peekViewResult.selectionBackground": styles.fill.control.hover,
    "peekViewResult.selectionForeground": styles.fill.text.pri,
    "peekViewTitle.background": styles.basic.loc.mint.pri,
    "peekViewTitleDescription.foreground": styles.fill.text.sec,
    "peekViewTitleLabel.foreground": styles.fill.text.sec,
  };
};
