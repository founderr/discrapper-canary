"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
});
var t = E("161778"),
  o = E("599110"),
  n = E("206230"),
  a = E("727538");
let r = a.AccessibilityFeatureFlags.NONE,
  i = window.matchMedia("(prefers-color-scheme: dark)"),
  I = window.matchMedia("(prefers-color-scheme: light)"),
  T = window.matchMedia("(inverted-colors: inverted)"),
  s = window.matchMedia("(prefers-contrast: more)"),
  S = window.matchMedia("(forced-colors: active)");

function N(e, _) {
  _ ? r |= e : r &= ~e
}
var O = {
  init() {
    n.default.addChangeListener(this.handleAccessibilityStoreChanged), t.default.addChangeListener(this.handleAccessibilityStoreChanged), i.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(i), I.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(I), s.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(s), S.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(S), T.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(T), o.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
  },
  getActiveFeatures: () => r,
  handlePrefersColorSchemeDarkChanged(e) {
    N(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
  },
  handlePrefersColorSchemeLightChanged(e) {
    N(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
  },
  handlePrefersMoreContrastChanged(e) {
    N(a.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
  },
  handlePrefersForcedColorsChanged(e) {
    N(a.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
  },
  handleInvertColorsChanged(e) {
    N(a.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
  },
  handleAccessibilityStoreChanged() {
    N(a.AccessibilityFeatureFlags.REDUCED_MOTION, n.default.useReducedMotion), N(a.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== n.default.rawPrefersReducedMotion), N(a.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, n.default.syncForcedColors), N(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, n.default.isFontScaledDown), N(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, n.default.isFontScaledUp), N(a.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, n.default.isZoomedOut), N(a.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, n.default.isZoomedIn), N(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, n.default.isMessageGroupSpacingDecreased), N(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, n.default.isMessageGroupSpacingIncreased), N(a.AccessibilityFeatureFlags.DARK_SIDEBAR, t.default.darkSidebar), N(a.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, n.default.saturation < 1), N(a.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== n.default.roleStyle), N(a.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, n.default.syncProfileThemeWithUserTheme)
  }
}