let r, i, a, s, o, l, u, c, d, f, _, h, p, m;
var g,
    E,
    v,
    I,
    S = n(979554),
    T = n(442837),
    b = n(570140),
    y = n(981631);
let A = y.QZA.CLOSED,
    N = {};
function C() {
    (A = y.QZA.OPEN), (N = {});
}
function R() {
    (A = y.QZA.CLOSED), (N = {});
}
function O() {
    D(), L(), (N = {});
}
function D() {
    (r = void 0), (i = void 0), (a = void 0), (s = void 0);
}
function L() {
    (o = void 0), (l = void 0), (u = void 0), (c = void 0), (d = void 0), (s = void 0);
}
function x() {
    (_ = void 0), (h = void 0), (p = void 0), (m = void 0), (f = void 0);
}
class w extends (I = T.ZP.Store) {
    getFormState() {
        return A;
    }
    getErrors() {
        return N;
    }
    showNotice() {
        return void 0 !== r || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== a || void 0 !== s || void 0 !== i;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > y.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingGlobalName() {
        return i;
    }
    getPendingBanner() {
        return o;
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
        return s;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingBanner: o,
            pendingBio: l,
            pendingPronouns: u,
            pendingAccentColor: c,
            pendingThemeColors: d,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: s,
            pendingGlobalName: i
        };
    }
    getTryItOutThemeColors() {
        return f;
    }
    getTryItOutAvatar() {
        return _;
    }
    getTryItOutAvatarDecoration() {
        return h;
    }
    getTryItOutProfileEffectId() {
        return p;
    }
    getTryItOutBanner() {
        return m;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: f,
            tryItOutAvatar: _,
            tryItOutAvatarDecoration: h,
            tryItOutProfileEffectId: p,
            tryItOutBanner: m
        };
    }
}
(v = 'UserSettingsAccountStore'),
    (E = 'displayName') in (g = w)
        ? Object.defineProperty(g, E, {
              value: v,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[E] = v),
    (t.Z = new w(b.Z, {
        USER_SETTINGS_ACCOUNT_INIT: C,
        USER_SETTINGS_MODAL_INIT: C,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
        USER_SETTINGS_MODAL_SET_SECTION: function (e) {
            let { section: t } = e;
            return t === y.oAB.ACCOUNT && C();
        },
        USER_SETTINGS_ACCOUNT_CLOSE: R,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function () {
            O(), x(), R();
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function () {
            (A = y.QZA.SUBMITTING), (N = {});
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function (e) {
            var t;
            if (A !== y.QZA.SUBMITTING) return !1;
            (A = y.QZA.OPEN), (N = null !== (t = e.errors) && void 0 !== t ? t : {});
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function (e) {
            let { avatar: t } = e;
            (r = t), (_ = void 0);
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function (e) {
            let { globalName: t } = e;
            i = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function (e) {
            let { avatarDecoration: t } = e;
            a = t;
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function (e) {
            let { item: t } = e;
            (null == t ? void 0 : t.type) === S.Z.PROFILE_EFFECT ? ((h = null), (p = null == t ? void 0 : t.id)) : ((p = null), (h = t));
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
            let { profileEffectId: t } = e;
            s = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function (e) {
            let { banner: t } = e;
            o = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function (e) {
            let { bio: t } = e;
            l = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function (e) {
            let { pronouns: t } = e;
            u = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function (e) {
            let { color: t } = e;
            c = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function (e) {
            let { themeColors: t } = e;
            d = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function (e) {
            let { avatar: t } = e;
            _ = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
            let { avatarDecoration: t } = e;
            h = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function (e) {
            let { profileEffectId: t } = e;
            p = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function (e) {
            let { banner: t } = e;
            m = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
            let { themeColors: t } = e;
            f = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: function (e) {
            let {
                preset: { themeColors: t, bannerImage: n, avatarDecoration: r }
            } = e;
            (f = t), (m = n), (h = r);
        },
        USER_SETTINGS_CLEAR_ERRORS: function () {
            N = {};
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: D,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
        USER_SETTINGS_RESET_ALL_PENDING: O,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: x,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function () {
            a = void 0;
        },
        LOGOUT: function () {
            r = void 0;
        }
    }));
