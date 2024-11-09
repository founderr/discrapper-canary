let r, i;
n(47120);
var a,
    s = n(442837),
    o = n(704215),
    l = n(570140),
    u = n(605236),
    c = n(238514),
    d = n(781391),
    f = n(210887),
    _ = n(740492),
    h = n(695346),
    p = n(581883),
    m = n(131704),
    g = n(592125),
    E = n(594174),
    v = n(74538),
    I = n(51144),
    S = n(47760),
    T = n(469115),
    b = n(874893);
function y(e, t, n) {
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
let A = !1,
    N = !0,
    C = !1;
function R() {
    A = !0;
}
function O() {
    N && (r = void 0), (C = !1), (A = !1);
}
let D = () => {
        N = !v.ZP.canUseClientThemes(E.default.getCurrentUser());
    },
    L = () => {
        let e = h.L1.getSetting().backgroundGradientPresetId;
        if (c.Z.shouldSync('appearance')) {
            if (null == e) {
                null != r && (r = void 0);
                return;
            }
            r = T.qt[e];
        }
    },
    x = () => {
        if (!c.Z.shouldSync('appearance')) return;
        let e = h.L1.getSetting().backgroundGradientPresetId;
        if ((_.ZP.useSystemTheme === b.K.ON && null != e && (0, d.hi)(b.K.OFF), null == e)) {
            null != r && (r = void 0);
            return;
        }
        let t = T.qt[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        if (null != t && !n) r = t;
    };
class w extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? T.qt[e.gradientPresetId] : void 0), this.waitFor(E.default, f.Z, g.Z, c.Z, p.Z), this.syncWith([E.default], D), this.syncWith([c.Z], L), this.syncWith([p.Z], x);
    }
    getState() {
        return N ? {} : { gradientPresetId: null == r ? void 0 : r.id };
    }
    get gradientPreset() {
        return r;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, S.VK)(this.gradientPreset);
    }
    get isEditorOpen() {
        return A;
    }
    get isPreview() {
        return N;
    }
    get isCoachmark() {
        return C;
    }
    get mobilePendingThemeIndex() {
        return i;
    }
    constructor(...e) {
        super(...e),
            y(this, 'migrations', [
                (e) => {
                    var t;
                    return { gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id };
                }
            ]);
    }
}
y(w, 'displayName', 'ClientThemesBackgroundStore'),
    y(w, 'persistKey', 'ClientThemesBackgroundStore'),
    (t.Z = new w(l.Z, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
            let { presetId: t } = e;
            if (null == t) {
                r = void 0;
                return;
            }
            r = T.qt[t];
        },
        UPDATE_MOBILE_PENDING_THEME_INDEX: (e) => {
            let { mobileThemesIndex: t } = e;
            if (null == t) {
                i = void 0;
                return;
            }
            i = t;
        },
        CLIENT_THEMES_EDITOR_OPEN: (e) => {
            (function () {
                A = !0;
            })();
        },
        CLIENT_THEMES_EDITOR_CLOSE: (e) => {
            O();
        },
        RESET_PREVIEW_CLIENT_THEME: (e) => {
            r = void 0;
        },
        CHANNEL_SELECT: (e) => {
            let { channelId: t, guildId: n } = e,
                r = E.default.getCurrentUser();
            if (null == t || null == n || (0, u.un)(o.z.CLIENT_THEMES_COACHMARK) || !(0, I.Fc)(r)) return;
            let i = g.Z.getChannel(t);
            null != i &&
                (0, m.zi)(i.type) &&
                ((C = !0),
                (function () {
                    A = !0;
                })());
        },
        LOGOUT: function () {
            O();
        }
    }));
