n.d(t, {
    CM: function () {
        return I;
    },
    Cf: function () {
        return E;
    },
    ID: function () {
        return v;
    },
    Xz: function () {
        return T;
    },
    Z: function () {
        return h;
    },
    c_: function () {
        return b;
    },
    f4: function () {
        return y;
    },
    g_: function () {
        return g;
    },
    ho: function () {
        return m;
    },
    pG: function () {
        return p;
    },
    rf: function () {
        return A;
    },
    x3: function () {
        return N;
    },
    z5: function () {
        return S;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    s = n(957730),
    o = n(695346),
    l = n(594174),
    u = n(626135),
    c = n(956664),
    d = n(981631),
    f = n(474936);
function _(e) {
    u.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: f.h1.PREMIUM_STANDARD
    });
}
async function h(e, t) {
    var n, u, c;
    let f = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == f) return;
    let _ = o.dN.getSetting();
    null != e.bio && _ && (e.bio = s.ZP.parse(void 0, e.bio).content);
    try {
        i.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: f
        });
        let n = await r.tn.patch({
            url: null != t ? d.ANM.GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
            body: e
        });
        if (n.ok) {
            let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id,
                t = null === (c = n.body.profile_effect) || void 0 === c ? void 0 : c.expires_at;
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_SUCCESS',
                userId: f,
                profileEffectId: e,
                profileEffectExpiresAt: t,
                ...n.body
            });
        } else {
            let e = new a.Hx(n);
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: n.body,
                apiError: e
            });
        }
        return n;
    } catch (t) {
        let e = new a.Hx(t);
        return (
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: {},
                apiError: e
            }),
            t
        );
    }
}
function p() {
    i.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function m(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, c.fD)(e))
              .then((e) => g(e))
        : null != e && g(e);
}
function g(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function E(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function v(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function I(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function S(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function b(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        _(f.QP.ANIMATED_AVATAR);
}
function T(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        _(f.QP.AVATAR_DECORATION);
}
function y(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        _(f.QP.PROFILE_BANNER);
}
function A(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        _(f.QP.PROFILE_THEME_COLOR);
}
function N(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET',
        preset: e
    }),
        _(f.QP.PRESET);
}
