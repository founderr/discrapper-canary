n.d(t, {
    Cf: function () {
        return p;
    },
    Fq: function () {
        return l;
    },
    HP: function () {
        return o;
    },
    I5: function () {
        return c;
    },
    ID: function () {
        return h;
    },
    IO: function () {
        return E;
    },
    It: function () {
        return u;
    },
    W3: function () {
        return I;
    },
    b9: function () {
        return T;
    },
    cV: function () {
        return d;
    },
    g_: function () {
        return _;
    },
    iq: function () {
        return s;
    },
    pG: function () {
        return v;
    },
    sr: function () {
        return m;
    },
    xn: function () {
        return f;
    },
    z5: function () {
        return g;
    }
}),
    n(411104);
var r = n(544891),
    i = n(570140);
n(37234);
var a = n(981631);
async function s(e, t) {
    let { nick: n, avatar: s, avatarDecoration: o } = t;
    if (null == e) throw Error('Need guildId');
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let l = {
        nick: n,
        avatar: s,
        avatar_decoration_id: null === o ? null : null == o ? void 0 : o.id,
        avatar_decoration_sku_id: null === o ? null : null == o ? void 0 : o.skuId
    };
    try {
        let t = await r.tn.patch({
            url: a.ANM.SET_GUILD_MEMBER(e),
            body: l,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            i.Z.dispatch({
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
            i.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
                errors: t.body
            }),
            t
        );
    }
}
function o(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function l(e, t) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function u() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function c(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function _(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function E() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function v() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function I() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function T() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
