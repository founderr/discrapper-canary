let r, i, a, s, o, l, u, c, d, f, _;
var h,
    p,
    m,
    g,
    E = n(442837),
    v = n(570140),
    I = n(981631);
let S = I.QZA.CLOSED,
    b = {};
function T() {
    y(), A(), (b = {}), (S = I.QZA.OPEN);
}
function y() {
    (r = void 0), (u = void 0), (i = void 0);
}
function A() {
    (s = void 0), (o = void 0), (l = void 0), (c = void 0), (a = void 0);
}
class N extends (g = E.ZP.Store) {
    getFormState() {
        return S;
    }
    getErrors() {
        return b;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== a || void 0 !== s || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== c;
    }
    getIsSubmitDisabled() {
        return void 0 !== o && o.length > I.tPV;
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
        return s;
    }
    getPendingBio() {
        return o;
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
            pendingBanner: s,
            pendingBio: o,
            pendingPronouns: l,
            pendingNickname: u,
            pendingThemeColors: c
        };
    }
    getGuild() {
        return d;
    }
    getSource() {
        return f;
    }
    getAnalyticsLocations() {
        return _;
    }
}
(m = 'GuildIdentitySettingsStore'),
    (p = 'displayName') in (h = N)
        ? Object.defineProperty(h, p, {
              value: m,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[p] = m),
    (t.Z = new N(v.Z, {
        GUILD_IDENTITY_SETTINGS_INIT: function (e) {
            (d = e.guild), (S = I.QZA.OPEN), (b = {}), (f = e.source), (_ = e.analyticsLocations);
        },
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function () {
            T(), (S = I.QZA.CLOSED), (b = {}), (f = void 0), (_ = []);
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function (e) {
            (d = e.guild), (b = {});
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function () {
            (S = I.QZA.SUBMITTING), (b = {});
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function (e) {
            var t;
            if (S !== I.QZA.SUBMITTING) return !1;
            (S = I.QZA.OPEN), (b = null !== (t = e.errors) && void 0 !== t ? t : {});
        },
        USER_PROFILE_UPDATE_FAILURE: function (e) {
            (S = I.QZA.OPEN), (b = e.errors);
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function (e) {
            let { avatar: t } = e;
            r = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function (e) {
            let { avatarDecoration: t } = e;
            i = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
            let { profileEffectId: t } = e;
            a = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function (e) {
            let { banner: t } = e;
            s = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function (e) {
            let { bio: t } = e;
            o = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function (e) {
            let { pronouns: t } = e;
            l = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function (e) {
            let { nickname: t } = e;
            u = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function (e) {
            let { themeColors: t } = e;
            c = t;
        },
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: y,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: T,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: T,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function () {
            b = {};
        }
    }));
