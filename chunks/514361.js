let r, i;
var a,
    o = n(47120);
var s = n(442837),
    l = n(704215),
    u = n(570140),
    c = n(605236),
    d = n(238514),
    _ = n(781391),
    E = n(210887),
    f = n(740492),
    h = n(695346),
    p = n(581883),
    m = n(131704),
    I = n(592125),
    T = n(594174),
    g = n(74538),
    S = n(51144),
    A = n(47760),
    v = n(469115),
    N = n(874893);
function O(e, t, n) {
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
let R = !1,
    C = !0,
    y = !1,
    b = (e) => {
        let { presetId: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = v.qt[t];
    },
    L = (e) => {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            i = void 0;
            return;
        }
        i = t;
    },
    D = (e) => {
        x();
    },
    M = (e) => {
        G();
    },
    P = (e) => {
        r = void 0;
    },
    U = (e) => {
        let { channelId: t, guildId: n } = e,
            r = T.default.getCurrentUser();
        if (null == t || null == n || (0, c.un)(l.z.CLIENT_THEMES_COACHMARK) || !(0, S.Fc)(r)) return;
        let i = I.Z.getChannel(t);
        null != i && (0, m.zi)(i.type) && ((y = !0), x());
    };
function w() {
    G();
}
function x() {
    R = !0;
}
function G() {
    C && (r = void 0), (y = !1), (R = !1);
}
let k = () => {
        C = !g.ZP.canUseClientThemes(T.default.getCurrentUser());
    },
    B = () => {
        let e = h.L1.getSetting().backgroundGradientPresetId;
        if (d.Z.shouldSync('appearance')) {
            if (null == e) {
                null != r && (r = void 0);
                return;
            }
            r = v.qt[e];
        }
    },
    F = () => {
        if (!d.Z.shouldSync('appearance')) return;
        let e = h.L1.getSetting().backgroundGradientPresetId;
        if ((f.ZP.useSystemTheme === N.K.ON && null != e && (0, _.hi)(N.K.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = v.qt[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        if (null != t && !n) r = t;
    };
class Z extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? v.qt[e.gradientPresetId] : void 0), this.waitFor(T.default, E.Z, I.Z, d.Z, p.Z), this.syncWith([T.default], k), this.syncWith([d.Z], B), this.syncWith([p.Z], F);
    }
    getState() {
        return C ? {} : { gradientPresetId: null == r ? void 0 : r.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, A.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return R;
    }
    get isPreview() {
        return C;
    }
    get isCoachmark() {
        return y;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            O(this, 'migrations', [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id };
                }
            ]);
    }
}
O(Z, 'displayName', 'ClientThemesBackgroundStore'),
    O(Z, 'persistKey', 'ClientThemesBackgroundStore'),
    (t.Z = new Z(u.Z, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: b,
        UPDATE_MOBILE_PENDING_THEME_INDEX: L,
        CLIENT_THEMES_EDITOR_OPEN: D,
        CLIENT_THEMES_EDITOR_CLOSE: M,
        RESET_PREVIEW_CLIENT_THEME: P,
        CHANNEL_SELECT: U,
        LOGOUT: w
    }));
