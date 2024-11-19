n.d(t, {
    FD: function () {
        return h;
    },
    I5: function () {
        return T;
    },
    Mn: function () {
        return v;
    },
    P6: function () {
        return O;
    },
    S2: function () {
        return E;
    },
    UZ: function () {
        return S;
    },
    V3: function () {
        return I;
    },
    W3: function () {
        return R;
    },
    Zy: function () {
        return m;
    },
    b9: function () {
        return N;
    },
    cV: function () {
        return y;
    },
    ol: function () {
        return b;
    },
    si: function () {
        return C;
    },
    ss: function () {
        return g;
    },
    xn: function () {
        return A;
    }
});
var r = n(544891),
    i = n(433517),
    a = n(780384),
    s = n(570140),
    o = n(703656),
    l = n(626135),
    u = n(768581),
    c = n(546796),
    d = n(893776),
    f = n(981631),
    _ = n(792101),
    p = n(388032);
function h() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function m() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function g(e, t) {
    let n = t ? p.intl.string(p.t['8lQ2ra']) : p.intl.string(p.t.jf5GGR),
        i = t ? f.ANM.DELETE_ACCOUNT : f.ANM.DISABLE_ACCOUNT;
    return (0, c.Z)(
        (t) =>
            r.tn.post({
                url: i,
                body: {
                    password: e,
                    ...t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        {
            modalProps: { title: n },
            checkEnabled: !1
        }
    ).then(() => {
        d.Z.logoutInternal(), (0, o.uL)(f.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function E(e) {
    let t = await r.tn.patch({
            url: f.ANM.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            s.Z.dispatch({
                type: 'UPDATE_TOKEN',
                token: t,
                userId: n.id
            }),
            (null == e ? void 0 : e.password) != null &&
                (null == e ? void 0 : e.new_password) != null &&
                s.Z.dispatch({
                    type: 'PASSWORD_UPDATED',
                    userId: n.id
                });
    }
    return (
        s.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: n
        }),
        t
    );
}
function v(e) {
    let { username: t, discriminator: n, email: r, emailToken: a, password: o, avatar: d, avatarDecoration: h, newPassword: m, globalName: g } = e;
    return (
        s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, c.Z)(
            (e) => {
                let s = {
                    username: t,
                    email: r,
                    email_token: a,
                    password: o,
                    avatar: d,
                    discriminator: n,
                    global_name: g,
                    new_password: m,
                    ...e
                };
                null === h && (s.avatar_decoration_id = null), null != h && ((s.avatar_decoration_id = h.id), (s.avatar_decoration_sku_id = h.skuId));
                let l = i.K.get(f.JkL),
                    u = (0, _.xJ)();
                null != u && null != l && ((s.push_provider = u), (s.push_token = l));
                let c = i.K.get(f.scU);
                return null != _.mv && null != c && ((s.push_voip_provider = _.mv), (s.push_voip_token = c)), E(s);
            },
            {
                checkEnabled: !1,
                modalProps: { title: p.intl.string(p.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        s.Z.dispatch({
                            type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let t = e.body;
                return l.default.track(f.rMx.USER_AVATAR_UPDATED, { animated: (0, u.xR)(t.avatar) }), s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), e;
            },
            (e) => (
                s.Z.dispatch({
                    type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        )
    );
}
function b() {
    return r.tn.get({
        url: f.ANM.USER_HARVEST,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function I(e) {
    return r.tn.post({
        url: f.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function T(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }),
        null == e ? a.uv.announce(p.intl.string(p.t['f1+oNj'])) : a.uv.announce(p.intl.string(p.t.NstziY));
}
function S(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function y(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function A(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function N() {
    s.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function C() {
    s.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function R() {
    s.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function O() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
