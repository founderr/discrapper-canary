let r, i, a, o, s, l, u, c, d, _, E, f, h, p;
var m,
    I = n(979554),
    T = n(442837),
    g = n(570140),
    S = n(981631);
function A(e, t, n) {
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
let v = S.QZA.CLOSED,
    N = {};
function O() {
    (v = S.QZA.OPEN), (N = {});
}
function R() {
    (v = S.QZA.CLOSED), (N = {});
}
function C() {
    (v = S.QZA.SUBMITTING), (N = {});
}
function y(e) {
    var t;
    if (v !== S.QZA.SUBMITTING) return !1;
    (v = S.QZA.OPEN), (N = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function L(e) {
    let { section: t } = e;
    return t === S.oAB.ACCOUNT && O();
}
function b(e) {
    let { avatar: t } = e;
    (r = t), (E = void 0);
}
function D(e) {
    let { globalName: t } = e;
    i = t;
}
function M(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function P(e) {
    let { profileEffectId: t } = e;
    o = t;
}
function U(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === I.Z.PROFILE_EFFECT ? ((f = null), (h = null == t ? void 0 : t.id)) : ((h = null), (f = t));
}
function w(e) {
    let { banner: t } = e;
    s = t;
}
function x(e) {
    let { bio: t } = e;
    l = t;
}
function G(e) {
    let { pronouns: t } = e;
    u = t;
}
function k(e) {
    let { color: t } = e;
    c = t;
}
function B(e) {
    let { themeColors: t } = e;
    d = t;
}
function F(e) {
    let { themeColors: t } = e;
    _ = t;
}
function Z(e) {
    let { avatar: t } = e;
    E = t;
}
function V(e) {
    let { avatarDecoration: t } = e;
    f = t;
}
function H(e) {
    let { profileEffectId: t } = e;
    h = t;
}
function Y(e) {
    let { banner: t } = e;
    p = t;
}
function j() {
    r = void 0;
}
function W() {
    N = {};
}
function K() {
    z(), q(), (N = {});
}
function z() {
    (r = void 0), (i = void 0), (a = void 0), (o = void 0);
}
function q() {
    (s = void 0), (l = void 0), (u = void 0), (c = void 0), (d = void 0), (o = void 0);
}
function Q() {
    (E = void 0), (f = void 0), (h = void 0), (p = void 0), (_ = void 0);
}
function X() {
    a = void 0;
}
function $() {
    K(), Q(), R();
}
class J extends (m = T.ZP.Store) {
    getFormState() {
        return v;
    }
    getErrors() {
        return N;
    }
    showNotice() {
        return void 0 !== r || void 0 !== s || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== a || void 0 !== o || void 0 !== i;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > S.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingGlobalName() {
        return i;
    }
    getPendingBanner() {
        return s;
    }
    getPendingBio() {
        return l;
    }
    getPendingPronouns() {
        return u;
    }
    getPendingAccentColor() {
        return c;
    }
    getPendingThemeColors() {
        return d;
    }
    getPendingAvatarDecoration() {
        return a;
    }
    getPendingProfileEffectId() {
        return o;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: u,
            pendingAccentColor: c,
            pendingThemeColors: d,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: o,
            pendingGlobalName: i
        };
    }
    getTryItOutThemeColors() {
        return _;
    }
    getTryItOutAvatar() {
        return E;
    }
    getTryItOutAvatarDecoration() {
        return f;
    }
    getTryItOutProfileEffectId() {
        return h;
    }
    getTryItOutBanner() {
        return p;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: _,
            tryItOutAvatar: E,
            tryItOutAvatarDecoration: f,
            tryItOutProfileEffectId: h,
            tryItOutBanner: p
        };
    }
}
A(J, 'displayName', 'UserSettingsAccountStore'),
    (t.Z = new J(g.Z, {
        USER_SETTINGS_ACCOUNT_INIT: O,
        USER_SETTINGS_MODAL_INIT: O,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: O,
        USER_SETTINGS_MODAL_SET_SECTION: L,
        USER_SETTINGS_ACCOUNT_CLOSE: R,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: $,
        USER_SETTINGS_ACCOUNT_SUBMIT: C,
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: y,
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: b,
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: D,
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: M,
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: U,
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: P,
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: w,
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: x,
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: G,
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: k,
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: B,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Z,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: V,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: H,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Y,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: F,
        USER_SETTINGS_CLEAR_ERRORS: W,
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: z,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: q,
        USER_SETTINGS_RESET_ALL_PENDING: K,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: Q,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: X,
        LOGOUT: j
    }));
