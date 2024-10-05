let r;
var i,
    a,
    s = n(442837),
    o = n(524437),
    l = n(692547),
    u = n(780384),
    c = n(570140),
    d = n(607070),
    _ = n(47760),
    E = n(540059);
n(57132);
var f = n(541049);
n(449934);
var h = n(12647),
    p = n(358085),
    I = n(238514),
    m = n(740492),
    T = n(581883),
    S = n(874893),
    g = n(981631),
    A = n(469115);
function N(e, t, n) {
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
let O = null !== (i = (0, f.Z)()) && void 0 !== i ? i : g.BRd.DARK,
    R = null,
    v = !1;
function C() {
    let e = (function () {
        var e, t;
        if (__OVERLAY__) return g.BRd.DARK;
        if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != r) return r;
        let n = m.ZP.useSystemTheme;
        if (n === S.K.ON && null != r) return r;
        let i = null === (e = I.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
        if (null != i) return i;
        let a = null === (t = T.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
        if (null == a) return O;
        if (!E.i.getCurrentConfig({ location: 'ThemeStore' }).enabled) return a === o.Q2.LIGHT ? g.BRd.LIGHT : g.BRd.DARK;
        switch (a) {
            case o.Q2.LIGHT:
                return g.BRd.LIGHT;
            case o.Q2.DARK:
                return g.BRd.DARK;
            case o.Q2.DARKER:
                return g.BRd.DARKER;
            case o.Q2.MIDNIGHT:
                return g.BRd.MIDNIGHT;
            default:
                return g.BRd.DARK;
        }
    })();
    return e;
}
function L() {
    return y();
}
function D() {
    return y();
}
function y() {
    let e = C();
    return e !== O && ((O = e), !0);
}
class b extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (O = e.theme), this.waitFor(m.ZP, I.Z, T.Z, d.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, u.ap)(this.theme) && m.ZP.darkSidebar && !v;
    }
    get theme() {
        return C();
    }
    get systemTheme() {
        return R;
    }
    get systemPrefersColorScheme() {
        return r;
    }
    get isSystemThemeAvailable() {
        return null !== R;
    }
}
N(b, 'displayName', 'ThemeStore'),
    N(b, 'persistKey', 'ThemeStore'),
    N(b, 'migrations', [
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
    (t.Z = new b(c.Z, {
        CACHE_LOADED: L,
        CONNECTION_OPEN: L,
        LOGOUT: function (e) {
            return (
                !e.isSwitchingAccount &&
                O !== g.BRd.DARK &&
                ((O = g.BRd.DARK),
                (function () {
                    !__OVERLAY__ && p.isPlatformEmbedded && h.Z.setApplicationBackgroundColor((0, u.wj)(C()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: d.Z.saturation }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: d.Z.saturation }).hsl());
                })(),
                y())
            );
        },
        OVERLAY_INITIALIZE: L,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
        UNSYNCED_USER_SETTINGS_UPDATE: D,
        USER_SETTINGS_PROTO_UPDATE: L,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
            var t, n;
            let { presetId: r } = e;
            O = null != r && null !== (n = null === (t = A.qt[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : C();
            let i = null != r;
            return v !== i
                ? ((v = i), !0)
                : (function () {
                      let e = C();
                      return !(0, _.qu)(O, e) && ((O = e), !0);
                  })();
        },
        RESET_PREVIEW_CLIENT_THEME: L,
        SYSTEM_THEME_CHANGE: function (e) {
            let { systemTheme: t } = e;
            return (R = t), y();
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
            return (r = e.systemPrefersColorScheme), y();
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
            return (0, u.ap)(C());
        }
    }));
