r.d(n, {
    FD: function () {
        return m;
    },
    I5: function () {
        return y;
    },
    Mn: function () {
        return I;
    },
    P6: function () {
        return D;
    },
    S2: function () {
        return v;
    },
    UZ: function () {
        return S;
    },
    V3: function () {
        return b;
    },
    W3: function () {
        return O;
    },
    Zy: function () {
        return g;
    },
    b9: function () {
        return C;
    },
    cV: function () {
        return A;
    },
    ol: function () {
        return T;
    },
    si: function () {
        return R;
    },
    ss: function () {
        return E;
    },
    xn: function () {
        return N;
    }
});
var i = r(544891),
    a = r(433517),
    s = r(780384),
    o = r(570140),
    l = r(703656),
    u = r(626135),
    c = r(768581),
    d = r(546796),
    f = r(893776),
    _ = r(981631),
    h = r(792101),
    p = r(388032);
function m() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function g() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function E(e, n) {
    let r = n ? p.intl.string(p.t['8lQ2ra']) : p.intl.string(p.t.jf5GGR),
        a = n ? _.ANM.DELETE_ACCOUNT : _.ANM.DISABLE_ACCOUNT,
        s = (n) =>
            i.tn.post({
                url: a,
                body: {
                    password: e,
                    ...n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
    return (0, d.Z)(s, {
        modalProps: { title: r },
        checkEnabled: !1
    }).then(() => {
        f.Z.logoutInternal(), (0, l.uL)(_.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function v(e) {
    let n = await i.tn.patch({
            url: _.ANM.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        r = n.body;
    if (r.token) {
        let n = r.token;
        delete r.token,
            o.Z.dispatch({
                type: 'UPDATE_TOKEN',
                token: n,
                userId: r.id
            }),
            (null == e ? void 0 : e.password) != null &&
                (null == e ? void 0 : e.new_password) != null &&
                o.Z.dispatch({
                    type: 'PASSWORD_UPDATED',
                    userId: r.id
                });
    }
    return (
        o.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: r
        }),
        n
    );
}
function I(e) {
    let { username: n, discriminator: r, email: i, emailToken: s, password: l, avatar: f, avatarDecoration: m, newPassword: g, globalName: E } = e;
    return (
        o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, d.Z)(
            (e) => {
                let o = {
                    username: n,
                    email: i,
                    email_token: s,
                    password: l,
                    avatar: f,
                    discriminator: r,
                    global_name: E,
                    new_password: g,
                    ...e
                };
                null === m && (o.avatar_decoration_id = null), null != m && ((o.avatar_decoration_id = m.id), (o.avatar_decoration_sku_id = m.skuId));
                let u = a.K.get(_.JkL),
                    c = (0, h.xJ)();
                null != c && null != u && ((o.push_provider = c), (o.push_token = u));
                let d = a.K.get(_.scU);
                return null != h.mv && null != d && ((o.push_voip_provider = h.mv), (o.push_voip_token = d)), v(o);
            },
            {
                checkEnabled: !1,
                modalProps: { title: p.intl.string(p.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        o.Z.dispatch({
                            type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let n = e.body;
                return u.default.track(_.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(n.avatar) }), o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), e;
            },
            (e) => (
                o.Z.dispatch({
                    type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        )
    );
}
function T() {
    return i.tn.get({
        url: _.ANM.USER_HARVEST,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function b(e) {
    return i.tn.post({
        url: _.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function y(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }),
        null == e ? s.uv.announce(p.intl.string(p.t['f1+oNj'])) : s.uv.announce(p.intl.string(p.t.NstziY));
}
function S(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function A(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function N(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function C() {
    o.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function R() {
    o.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function O() {
    o.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function D() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
