var r,
    i = n(442837),
    a = n(433517),
    o = n(780384),
    s = n(570140),
    l = n(695346),
    u = n(581883),
    c = n(12647),
    d = n(981631),
    _ = n(959517);
function E(e, t, n) {
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
let f = {
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
    h = f,
    p = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
function m(e) {
    return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT;
}
function I(e) {
    let t = m(e.fontSize);
    if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || h.fontSize === t) return !1;
    (h = { ...h }).fontSize = t;
}
function T(e) {
    if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || h.zoom === e.zoom) return !1;
    ((h = { ...h }).zoom = e.zoom), c.Z.setZoomFactor(h.zoom);
}
function g() {
    let e = h.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
        t = h.zoom !== d.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (h = { ...h }).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (h.fontSize = d.yqN.FONT_SIZE_DEFAULT), h.zoom !== d.yqN.ZOOM_DEFAULT && ((h.zoom = d.yqN.ZOOM_DEFAULT), c.Z.setZoomFactor(h.zoom));
}
function S() {
    if (h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !0;
}
function A() {
    if (!h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !1;
}
function v() {
    (h = { ...h }).colorblindMode = !h.colorblindMode;
}
function N() {
    (h = { ...h }).lowContrastMode = !h.lowContrastMode;
}
function O(e) {
    h.syncForcedColors = e.syncForcedColors;
}
function R(e) {
    (h = { ...h }).saturation = e.saturation;
}
function C() {
    (h = { ...h }).desaturateUserColors = !h.desaturateUserColors;
}
function y(e) {
    h.roleStyle = e.roleStyle;
}
function L() {
    (h = { ...h }).submitButtonEnabled = !h.submitButtonEnabled;
}
function b() {
    (h = { ...h }).syncProfileThemeWithUserTheme = !h.syncProfileThemeWithUserTheme;
}
function D(e) {
    if (h.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    h = {
        ...h,
        systemPrefersReducedMotion: e.systemPrefersReducedMotion
    };
}
function M(e) {
    if (h.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    h = {
        ...h,
        systemPrefersCrossfades: e.systemPrefersCrossfades
    };
}
function P(e) {
    if (h.prefersReducedMotion === e.prefersReducedMotion) return !1;
    h = {
        ...h,
        prefersReducedMotion: e.prefersReducedMotion
    };
}
function U(e) {
    if (h.systemPrefersContrast === e.systemPrefersContrast) return !1;
    h = {
        ...h,
        systemPrefersContrast: e.systemPrefersContrast
    };
}
function w(e) {
    h = {
        ...h,
        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
    };
}
function x(e) {
    var t;
    return (
        (h = {
            ...h,
            systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : 'none'
        }),
        !0
    );
}
function G() {
    h.forcedColorsModalSeen = !0;
}
function k() {
    h = {
        ...h,
        keyboardNavigationExplainerModalSeen: !0
    };
}
function B(e) {
    let { messageGroupSpacing: t } = e;
    h = {
        ...h,
        messageGroupSpacing: t
    };
}
function F(e) {
    let { contrast: t } = e;
    h = {
        ...h,
        contrast: t
    };
}
function Z(e) {
    let { hideTags: t } = e;
    h = {
        ...h,
        hideGuildTags: t
    };
}
class V extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z),
            isNaN(
                (h = {
                    ...f,
                    ...(null != e ? e : null)
                }).fontSize
            ) && (h.fontSize = d.yqN.FONT_SIZE_DEFAULT),
            0 > _.fP.indexOf(null != h.messageGroupSpacing ? h.messageGroupSpacing : -1) && (h.messageGroupSpacing = null);
    }
    get fontScale() {
        return (h.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return h.fontSize;
    }
    get isFontScaledUp() {
        return h.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return h.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null !== (e = p[this.fontSize]) && void 0 !== e ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(t) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(t) : ''.concat(t);
    }
    get zoom() {
        return h.zoom;
    }
    get isZoomedIn() {
        return h.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return h.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return h.keyboardModeEnabled;
    }
    get colorblindMode() {
        return h.colorblindMode;
    }
    get lowContrastMode() {
        return h.lowContrastMode;
    }
    get saturation() {
        return h.saturation;
    }
    get contrast() {
        return h.contrast;
    }
    get desaturateUserColors() {
        return h.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return h.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return h.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != h.messageGroupSpacing ? h.messageGroupSpacing : l.jU.getSetting() ? _.c8 : _.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = l.jU.getSetting() ? _.c8 : _.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = l.jU.getSetting() ? _.c8 : _.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return h.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return h.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return h.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return h.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (h.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === h.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return h.systemForcedColors;
    }
    get syncForcedColors() {
        return h.syncForcedColors;
    }
    get useForcedColors() {
        return (!!h.syncForcedColors && 'active' === h.systemForcedColors) || !1;
    }
    get systemPrefersContrast() {
        return h.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return h.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return h.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return h.roleStyle;
    }
    get hideTags() {
        return h.hideGuildTags;
    }
    getUserAgnosticState() {
        return h;
    }
}
E(V, 'displayName', 'AccessibilityStore'),
    E(V, 'persistKey', 'AccessibilityStore'),
    E(V, 'migrations', [
        () => {
            let e = 'a11yFontScale',
                t = 'a11yZoom',
                n = 'a11yColorblindMode',
                r = a.K.get(e) || 100,
                i = a.K.get(t) || d.yqN.ZOOM_DEFAULT,
                o = a.K.get(n) || !1;
            return (
                a.K.remove(e),
                a.K.remove(t),
                a.K.remove(n),
                {
                    fontScale: r,
                    zoom: i,
                    colorblindMode: o,
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
            alwaysShowLinkDecorations: e.saturation <= o.AE
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
let H = new V(s.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: I,
    ACCESSIBILITY_SET_ZOOM: T,
    ACCESSIBILITY_RESET_TO_DEFAULT: g,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: S,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: A,
    ACCESSIBILITY_COLORBLIND_TOGGLE: v,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: N,
    ACCESSIBILITY_SET_SATURATION: R,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: C,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: x,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: U,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: D,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: M,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: P,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: O,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: w,
    ACCESSIBILITY_SET_ROLE_STYLE: y,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: G,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: k,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: B,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: L,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: b,
    ACCESSIBILITY_SET_CONTRAST: F,
    ACCESSIBILITY_SET_HIDE_TAGS: Z
});
t.Z = H;
