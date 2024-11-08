let r;
var i,
    a,
    s = n(442837),
    o = n(524437),
    l = n(692547),
    u = n(780384),
    c = n(570140),
    d = n(607070),
    f = n(47760),
    _ = n(540059);
n(57132);
var h = n(541049);
n(449934);
var p = n(12647),
    m = n(358085),
    g = n(238514),
    E = n(740492),
    v = n(581883),
    I = n(874893),
    S = n(981631),
    b = n(469115);
function T(e, t, n) {
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
let y = null !== (i = (0, h.Z)()) && void 0 !== i ? i : S.BRd.DARK,
    A = null,
    N = !1;
function C() {
    let e = (function () {
        var e, t;
        if (__OVERLAY__) return S.BRd.DARK;
        if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != r) return r;
        let n = E.ZP.useSystemTheme;
        if (n === I.K.ON && null != r) return r;
        let i = null === (e = g.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
        if (null != i) return i;
        let a = null === (t = v.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
        if (null == a) return y;
        if (!_.i.getCurrentConfig({ location: 'ThemeStore' }).enabled) return a === o.Q2.LIGHT ? S.BRd.LIGHT : S.BRd.DARK;
        switch (a) {
            case o.Q2.LIGHT:
                return S.BRd.LIGHT;
            case o.Q2.DARK:
                return S.BRd.DARK;
            case o.Q2.DARKER:
                return S.BRd.DARKER;
            case o.Q2.MIDNIGHT:
                return S.BRd.MIDNIGHT;
            default:
                return S.BRd.DARK;
        }
    })();
    return e;
}
function R() {
    return D();
}
function O() {
    return D();
}
function D() {
    let e = C();
    return e !== y && ((y = e), !0);
}
class L extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (y = e.theme), this.waitFor(E.ZP, g.Z, v.Z, d.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, u.ap)(this.theme) && E.ZP.darkSidebar && !N;
    }
    get theme() {
        return C();
    }
    get systemTheme() {
        return A;
    }
    get systemPrefersColorScheme() {
        return r;
    }
    get isSystemThemeAvailable() {
        return null !== A;
    }
}
T(L, 'displayName', 'ThemeStore'),
    T(L, 'persistKey', 'ThemeStore'),
    T(L, 'migrations', [
        (e) => {
            let t = e.theme;
            return (
                'amoled' === t && (t = 'midnight'),
                {
                    ...e,
                    theme: t
                }
            );
        }
    ]),
    (t.Z = new L(c.Z, {
        CACHE_LOADED: R,
        CONNECTION_OPEN: R,
        LOGOUT: function (e) {
            return (
                !e.isSwitchingAccount &&
                y !== S.BRd.DARK &&
                ((y = S.BRd.DARK),
                (function () {
                    !__OVERLAY__ && m.isPlatformEmbedded && p.Z.setApplicationBackgroundColor((0, u.wj)(C()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: d.Z.saturation }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: d.Z.saturation }).hsl());
                })(),
                D())
            );
        },
        OVERLAY_INITIALIZE: R,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: O,
        UNSYNCED_USER_SETTINGS_UPDATE: O,
        USER_SETTINGS_PROTO_UPDATE: R,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
            var t, n;
            let { presetId: r } = e;
            y = null != r && null !== (n = null === (t = b.qt[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : C();
            let i = null != r;
            return N !== i
                ? ((N = i), !0)
                : (function () {
                      let e = C();
                      return !(0, f.qu)(y, e) && ((y = e), !0);
                  })();
        },
        RESET_PREVIEW_CLIENT_THEME: R,
        SYSTEM_THEME_CHANGE: function (e) {
            let { systemTheme: t } = e;
            return (A = t), D();
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
            return (r = e.systemPrefersColorScheme), D();
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
            return (0, u.ap)(C());
        }
    }));
