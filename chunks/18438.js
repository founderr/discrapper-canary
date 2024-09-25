n.d(t, {
    Cf: function () {
        return h;
    },
    Fq: function () {
        return u;
    },
    HP: function () {
        return l;
    },
    I5: function () {
        return d;
    },
    ID: function () {
        return p;
    },
    IO: function () {
        return T;
    },
    It: function () {
        return c;
    },
    W3: function () {
        return S;
    },
    b9: function () {
        return A;
    },
    cV: function () {
        return _;
    },
    g_: function () {
        return f;
    },
    iq: function () {
        return s;
    },
    pG: function () {
        return g;
    },
    sr: function () {
        return m;
    },
    xn: function () {
        return E;
    },
    z5: function () {
        return I;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140);
n(37234);
var o = n(981631);
async function s(e, t) {
    let { nick: n, avatar: r, avatarDecoration: s } = t;
    if (null == e) throw Error('Need guildId');
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let l = {
        nick: n,
        avatar: r,
        avatar_decoration_id: null === s ? null : null == s ? void 0 : s.id,
        avatar_decoration_sku_id: null === s ? null : null == s ? void 0 : s.skuId
    };
    try {
        let t = await i.tn.patch({
            url: o.ANM.SET_GUILD_MEMBER(e),
            body: l,
            oldFormErrors: !0
        });
        return (
            a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            a.Z.dispatch({
                type: 'GUILD_MEMBER_PROFILE_UPDATE',
                guildMember: t.body,
                guildId: e
            }),
            t
        );
    } catch (t) {
        let e = t.body;
        return (
            (null == e ? void 0 : e.username) != null && ((e.nick = e.username), delete e.username),
            a.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
                errors: t.body
            }),
            t
        );
    }
}
function l(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function u(e, t) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function c() {
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function d(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function _(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function E(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function f(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function h(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function p(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function m(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function I(e) {
    a.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function T() {
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function g() {
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function S() {
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function A() {
    a.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
