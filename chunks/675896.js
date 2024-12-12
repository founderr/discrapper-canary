var i = r(210887),
    a = r(626135),
    s = r(607070),
    o = r(94752);
let l = o.E.NONE,
    u = window.matchMedia('(prefers-color-scheme: dark)'),
    c = window.matchMedia('(prefers-color-scheme: light)'),
    d = window.matchMedia('(inverted-colors: inverted)'),
    f = window.matchMedia('(prefers-contrast: more)'),
    _ = window.matchMedia('(forced-colors: active)');
function h(e, n) {
    n ? (l |= e) : (l &= ~e);
}
n.Z = {
    init() {
        s.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), u.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(u), c.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(c), f.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(f), _.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(_), d.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(d), a.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => l,
    handlePrefersColorSchemeDarkChanged(e) {
        h(o.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        h(o.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        h(o.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        h(o.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        h(o.E.INVERT_COLORS, e.matches);
    },
    handleAccessibilityStoreChanged() {
        h(o.E.REDUCED_MOTION, s.Z.useReducedMotion), h(o.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== s.Z.rawPrefersReducedMotion), h(o.E.FORCED_COLORS_FROM_USER_SETTINGS, s.Z.syncForcedColors), h(o.E.CHAT_FONT_SCALE_DECREASED, s.Z.isFontScaledDown), h(o.E.CHAT_FONT_SCALE_INCREASED, s.Z.isFontScaledUp), h(o.E.ZOOM_LEVEL_DECREASED, s.Z.isZoomedOut), h(o.E.ZOOM_LEVEL_INCREASED, s.Z.isZoomedIn), h(o.E.MESSAGE_GROUP_SPACING_DECREASED, s.Z.isMessageGroupSpacingDecreased), h(o.E.MESSAGE_GROUP_SPACING_INCREASED, s.Z.isMessageGroupSpacingIncreased), h(o.E.DARK_SIDEBAR, i.Z.darkSidebar), h(o.E.SATURATION_LEVEL_DECREASED, s.Z.saturation < 1), h(o.E.ROLE_STYLE_ADJUSTED, 'username' !== s.Z.roleStyle), h(o.E.SYNC_PROFILE_THEME_WITH_USER_THEME, s.Z.syncProfileThemeWithUserTheme);
    }
};
