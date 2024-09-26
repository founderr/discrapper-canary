let r, i, a, o, s, l, u, c, d, _, E;
var f,
    h = n(442837),
    p = n(570140),
    m = n(981631);
function I(e, t, n) {
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
let T = m.QZA.CLOSED,
    g = {};
function S(e) {
    (d = e.guild), (T = m.QZA.OPEN), (g = {}), (_ = e.source), (E = e.analyticsLocations);
}
function A() {
    (T = m.QZA.CLOSED), (g = {}), (_ = void 0), (E = []);
}
function v() {
    (T = m.QZA.SUBMITTING), (g = {});
}
function N(e) {
    (d = e.guild), (g = {});
}
function O(e) {
    var t;
    if (T !== m.QZA.SUBMITTING) return !1;
    (T = m.QZA.OPEN), (g = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function R(e) {
    (T = m.QZA.OPEN), (g = e.errors);
}
function C(e) {
    let { avatar: t } = e;
    r = t;
}
function y(e) {
    let { avatarDecoration: t } = e;
    i = t;
}
function L(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function b(e) {
    let { banner: t } = e;
    o = t;
}
function D(e) {
    let { bio: t } = e;
    s = t;
}
function M(e) {
    let { pronouns: t } = e;
    l = t;
}
function P(e) {
    let { nickname: t } = e;
    u = t;
}
function U(e) {
    let { themeColors: t } = e;
    c = t;
}
function w() {
    x(), G(), (g = {}), (T = m.QZA.OPEN);
}
function x() {
    (r = void 0), (u = void 0), (i = void 0);
}
function G() {
    (o = void 0), (s = void 0), (l = void 0), (c = void 0), (a = void 0);
}
function k() {
    g = {};
}
function B() {
    w(), A();
}
class F extends (f = h.ZP.Store) {
    getFormState() {
        return T;
    }
    getErrors() {
        return g;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== a || void 0 !== o || void 0 !== s || void 0 !== l || void 0 !== u || void 0 !== c;
    }
    getIsSubmitDisabled() {
        return void 0 !== s && s.length > m.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffectId() {
        return a;
    }
    getPendingBanner() {
        return o;
    }
    getPendingBio() {
        return s;
    }
    getPendingNickname() {
        return u;
    }
    getPendingPronouns() {
        return l;
    }
    getPendingAccentColor() {
        return u;
    }
    getPendingThemeColors() {
        return c;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffectId: a,
            pendingBanner: o,
            pendingBio: s,
            pendingPronouns: l,
            pendingNickname: u,
            pendingThemeColors: c
        };
    }
    getGuild() {
        return d;
    }
    getSource() {
        return _;
    }
    getAnalyticsLocations() {
        return E;
    }
}
I(F, 'displayName', 'GuildIdentitySettingsStore'),
    (t.Z = new F(p.Z, {
        GUILD_IDENTITY_SETTINGS_INIT: S,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: B,
        GUILD_IDENTITY_SETTINGS_SET_GUILD: N,
        GUILD_IDENTITY_SETTINGS_SUBMIT: v,
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: O,
        USER_PROFILE_UPDATE_FAILURE: R,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: C,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: y,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: L,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: b,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: M,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: P,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: U,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: x,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: w,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: w,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: k
    }));
