"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("161778"),
  a = n("599110"),
  l = n("206230"),
  s = n("727538");
let r = s.AccessibilityFeatureFlags.NONE,
  o = window.matchMedia("(prefers-color-scheme: dark)"),
  u = window.matchMedia("(prefers-color-scheme: light)"),
  d = window.matchMedia("(inverted-colors: inverted)"),
  c = window.matchMedia("(prefers-contrast: more)"),
  f = window.matchMedia("(forced-colors: active)");

function E(e, t) {
  t ? r |= e : r &= ~e
}
var h = {
  init() {
    l.default.addChangeListener(this.handleAccessibilityStoreChanged), i.default.addChangeListener(this.handleAccessibilityStoreChanged), o.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(o), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), c.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(c), f.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(f), d.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(d), a.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
  },
  getActiveFeatures: () => r,
  handlePrefersColorSchemeDarkChanged(e) {
    E(s.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
  },
  handlePrefersColorSchemeLightChanged(e) {
    E(s.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
  },
  handlePrefersMoreContrastChanged(e) {
    E(s.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
  },
  handlePrefersForcedColorsChanged(e) {
    E(s.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
  },
  handleInvertColorsChanged(e) {
    E(s.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
  },
  handleAccessibilityStoreChanged() {
    E(s.AccessibilityFeatureFlags.REDUCED_MOTION, l.default.useReducedMotion), E(s.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== l.default.rawPrefersReducedMotion), E(s.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, l.default.syncForcedColors), E(s.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, l.default.isFontScaledDown), E(s.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, l.default.isFontScaledUp), E(s.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, l.default.isZoomedOut), E(s.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, l.default.isZoomedIn), E(s.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, l.default.isMessageGroupSpacingDecreased), E(s.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, l.default.isMessageGroupSpacingIncreased), E(s.AccessibilityFeatureFlags.DARK_SIDEBAR, i.default.darkSidebar), E(s.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, l.default.saturation < 1), E(s.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== l.default.roleStyle), E(s.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, l.default.syncProfileThemeWithUserTheme)
  }
}