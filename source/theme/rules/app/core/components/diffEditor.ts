import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "diffEditor.border": styles.stroke.divider.default,
    "diffEditor.diagonalFill": styles.stroke.divider.default,
    "diffEditor.insertedLineBackground": styles.basic.def.green.sen,
    "diffEditor.insertedTextBackground": styles.basic.def.green.sen,
    "diffEditor.insertedTextBorder": TRANSPARENT,
    "diffEditor.move.border": styles.stroke.focus.default,
    "diffEditor.moveActive.border": styles.fill.system.fg.yellow,
    "diffEditor.removedLineBackground": styles.basic.def.red.sen,
    "diffEditor.removedTextBackground": styles.basic.def.red.sen,
    "diffEditor.removedTextBorder": TRANSPARENT,
    "diffEditor.unchangedCodeBackground": styles.basic.neutral.sep,
    "diffEditor.unchangedRegionBackground": styles.bg.solid.flyout,
    "diffEditor.unchangedRegionForeground": styles.fill.text.sec,
    "diffEditor.unchangedRegionShadow": styles.effect.shadow.default,
    "diffEditorGutter.insertedLineBackground": TRANSPARENT,
    "diffEditorGutter.removedLineBackground": TRANSPARENT,
    "diffEditorOverview.insertedForeground": styles.basic.def.green.sec,
    "diffEditorOverview.removedForeground": styles.basic.def.red.sec,
    "multiDiffEditor.background": styles.bg.solid.base,
    "multiDiffEditor.border": styles.stroke.focus.default,
    "multiDiffEditor.headerBackground": styles.bg.solid.flyout,
  };
};
