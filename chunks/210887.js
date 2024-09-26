let r;
var i,
    a,
    o = n(442837),
    s = n(524437),
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
    m = n(238514),
    I = n(740492),
    T = n(581883),
    g = n(874893),
    S = n(981631),
    A = n(469115);
function v(e, t, n) {
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
let N = null !== (i = (0, f.Z)()) && void 0 !== i ? i : S.BRd.DARK,
    O = null,
    R = !1;
function C() {
    var e, t;
    if (__OVERLAY__) return S.BRd.DARK;
    if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != r) return r;
    let n = I.ZP.useSystemTheme;
    if (n === g.K.ON && null != r) return r;
    let i = null === (e = m.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != i) return i;
    let a = null === (t = T.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == a) return N;
    if (!E.i.getCurrentConfig({ location: 'ThemeStore' }).enabled) return a === s.Q2.LIGHT ? S.BRd.LIGHT : S.BRd.DARK;
    switch (a) {
        case s.Q2.LIGHT:
            return S.BRd.LIGHT;
        case s.Q2.DARK:
            return S.BRd.DARK;
        case s.Q2.DARKER:
            return S.BRd.DARKER;
        case s.Q2.MIDNIGHT:
            return S.BRd.MIDNIGHT;
        default:
            return S.BRd.DARK;
    }
}
function y() {
    let e = C();
    return e;
}
function L() {
    return G();
}
function b() {
    return G();
}
function D() {
    return (0, u.ap)(y());
}
function M(e) {
    return !e.isSwitchingAccount && N !== S.BRd.DARK && ((N = S.BRd.DARK), k(), G());
}
function P(e) {
    let { systemTheme: t } = e;
    return (O = t), G();
}
function U(e) {
    return (r = e.systemPrefersColorScheme), G();
}
function w(e) {
    var t, n;
    let { presetId: r } = e;
    N = null != r && null !== (n = null === (t = A.qt[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : y();
    let i = null != r;
    return R !== i ? ((R = i), !0) : x();
}
function x() {
    let e = y();
    return !(0, _.qu)(N, e) && ((N = e), !0);
}
function G() {
    let e = y();
    return e !== N && ((N = e), !0);
}
function k() {
    !__OVERLAY__ && p.isPlatformEmbedded && h.Z.setApplicationBackgroundColor((0, u.wj)(y()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: d.Z.saturation }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: d.Z.saturation }).hsl());
}
class B extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (N = e.theme), this.waitFor(I.ZP, m.Z, T.Z, d.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, u.ap)(this.theme) && I.ZP.darkSidebar && !R;
    }
    get theme() {
        return y();
    }
    get systemTheme() {
        return O;
    }
    get systemPrefersColorScheme() {
        return r;
    }
    get isSystemThemeAvailable() {
        return null !== O;
    }
}
v(B, 'displayName', 'ThemeStore'),
    v(B, 'persistKey', 'ThemeStore'),
    v(B, 'migrations', [
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
    (t.Z = new B(c.Z, {
        CACHE_LOADED: L,
        CONNECTION_OPEN: L,
        LOGOUT: M,
        OVERLAY_INITIALIZE: L,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: b,
        UNSYNCED_USER_SETTINGS_UPDATE: b,
        USER_SETTINGS_PROTO_UPDATE: L,
        UPDATE_BACKGROUND_GRADIENT_PRESET: w,
        RESET_PREVIEW_CLIENT_THEME: L,
        SYSTEM_THEME_CHANGE: P,
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: U,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: D
    }));
