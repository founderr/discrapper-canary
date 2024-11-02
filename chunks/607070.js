var r,
    i = n(442837),
    a = n(433517),
    s = n(780384),
    o = n(570140),
    l = n(695346),
    u = n(581883),
    c = n(12647),
    d = n(981631),
    f = n(959517);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = {
        fontSize: d.yqN.FONT_SIZE_DEFAULT,
        zoom: d.yqN.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        desaturateUserColors: !1,
        forcedColorsModalSeen: !1,
        keyboardNavigationExplainerModalSeen: !1,
        messageGroupSpacing: null,
        systemPrefersReducedMotion: 'no-preference',
        systemPrefersCrossfades: !1,
        prefersReducedMotion: 'auto',
        systemForcedColors: 'none',
        syncForcedColors: !0,
        systemPrefersContrast: 'no-preference',
        alwaysShowLinkDecorations: !1,
        roleStyle: 'username',
        submitButtonEnabled: !1,
        syncProfileThemeWithUserTheme: !1,
        hideGuildTags: !1
    },
    p = h,
    m = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
class g extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z),
            isNaN(
                (p = {
                    ...h,
                    ...(null != e ? e : null)
                }).fontSize
            ) && (p.fontSize = d.yqN.FONT_SIZE_DEFAULT),
            0 > f.fP.indexOf(null != p.messageGroupSpacing ? p.messageGroupSpacing : -1) && (p.messageGroupSpacing = null);
    }
    get fontScale() {
        return (p.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return p.fontSize;
    }
    get isFontScaledUp() {
        return p.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return p.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null !== (e = m[this.fontSize]) && void 0 !== e ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(t) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(t) : ''.concat(t);
    }
    get zoom() {
        return p.zoom;
    }
    get isZoomedIn() {
        return p.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return p.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return p.keyboardModeEnabled;
    }
    get colorblindMode() {
        return p.colorblindMode;
    }
    get lowContrastMode() {
        return p.lowContrastMode;
    }
    get saturation() {
        return p.saturation;
    }
    get contrast() {
        return p.contrast;
    }
    get desaturateUserColors() {
        return p.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return p.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return p.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != p.messageGroupSpacing ? p.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return p.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return p.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return p.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return p.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (p.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === p.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return p.systemForcedColors;
    }
    get syncForcedColors() {
        return p.syncForcedColors;
    }
    get useForcedColors() {
        return (!!p.syncForcedColors && 'active' === p.systemForcedColors) || !1;
    }
    get systemPrefersContrast() {
        return p.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return p.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return p.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return p.roleStyle;
    }
    get hideTags() {
        return p.hideGuildTags;
    }
    getUserAgnosticState() {
        return p;
    }
}
_(g, 'displayName', 'AccessibilityStore'),
    _(g, 'persistKey', 'AccessibilityStore'),
    _(g, 'migrations', [
        () => {
            let e = 'a11yFontScale',
                t = 'a11yZoom',
                n = 'a11yColorblindMode',
                r = a.K.get(e) || 100,
                i = a.K.get(t) || d.yqN.ZOOM_DEFAULT,
                s = a.K.get(n) || !1;
            return (
                a.K.remove(e),
                a.K.remove(t),
                a.K.remove(n),
                {
                    fontScale: r,
                    zoom: i,
                    colorblindMode: s,
                    keyboardModeEnabled: !1
                }
            );
        },
        (e) => {
            let { fontScale: t, ...n } = e,
                r = 16;
            switch (t) {
                case 82:
                    r = 12;
                    break;
                case 92:
                    r = 15;
                    break;
                case 100:
                    r = 16;
                    break;
                case 110:
                    r = 18;
                    break;
                case 125:
                    r = 20;
                    break;
                case 150:
                    r = 24;
            }
            return {
                ...n,
                fontSize: r
            };
        },
        (e) => ({
            ...e,
            darkSidebar: !1
        }),
        (e) => ({
            ...e,
            messageGroupSpacing: null
        }),
        (e) => ({
            ...e,
            systemPrefersReducedMotion: 'no-preference',
            prefersReducedMotion: 'auto'
        }),
        (e) => ({
            ...e,
            alwaysShowLinkDecorations: e.saturation <= s.AE
        }),
        (e) => ({
            ...e,
            disableVoiceBackgrounds: !1
        }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        }
    ]);
let E = new g(o.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), d.yqN.FONT_SIZES.indexOf(t) >= 0 ? t : d.yqN.FONT_SIZE_DEFAULT);
        if (n > d.yqN.FONT_SIZE_MAX || n < d.yqN.FONT_SIZE_MIN || p.fontSize === n) return !1;
        (p = { ...p }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || p.zoom === e.zoom) return !1;
        ((p = { ...p }).zoom = e.zoom), c.Z.setZoomFactor(p.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = p.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
            t = p.zoom !== d.yqN.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (p = { ...p }).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (p.fontSize = d.yqN.FONT_SIZE_DEFAULT), p.zoom !== d.yqN.ZOOM_DEFAULT && ((p.zoom = d.yqN.ZOOM_DEFAULT), c.Z.setZoomFactor(p.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (p.keyboardModeEnabled) return !1;
        (p = { ...p }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!p.keyboardModeEnabled) return !1;
        (p = { ...p }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (p = { ...p }).colorblindMode = !p.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (p = { ...p }).lowContrastMode = !p.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (p = { ...p }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (p = { ...p }).desaturateUserColors = !p.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        var t;
        return (
            (p = {
                ...p,
                systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : 'none'
            }),
            !0
        );
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (p.systemPrefersContrast === e.systemPrefersContrast) return !1;
        p = {
            ...p,
            systemPrefersContrast: e.systemPrefersContrast
        };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (p.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        p = {
            ...p,
            systemPrefersReducedMotion: e.systemPrefersReducedMotion
        };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (p.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        p = {
            ...p,
            systemPrefersCrossfades: e.systemPrefersCrossfades
        };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (p.prefersReducedMotion === e.prefersReducedMotion) return !1;
        p = {
            ...p,
            prefersReducedMotion: e.prefersReducedMotion
        };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        p.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        p = {
            ...p,
            alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
        };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        p.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        p.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        p = {
            ...p,
            keyboardNavigationExplainerModalSeen: !0
        };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        p = {
            ...p,
            messageGroupSpacing: t
        };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (p = { ...p }).submitButtonEnabled = !p.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (p = { ...p }).syncProfileThemeWithUserTheme = !p.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        p = {
            ...p,
            contrast: t
        };
    },
    ACCESSIBILITY_SET_HIDE_TAGS: function (e) {
        let { hideTags: t } = e;
        p = {
            ...p,
            hideGuildTags: t
        };
    }
});
t.Z = E;
