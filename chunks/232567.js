r.d(n, {
    In: function () {
        return T;
    },
    Lr: function () {
        return E;
    },
    PR: function () {
        return I;
    },
    k: function () {
        return g;
    },
    mB: function () {
        return v;
    }
});
var i = r(789020);
var a = r(512722),
    s = r.n(a),
    o = r(525769),
    l = r(259443),
    u = r(544891),
    c = r(570140),
    d = r(881052),
    f = r(598077),
    _ = r(594174),
    h = r(573261),
    p = r(981631);
let m = new l.Yd('UserProfileModalActionCreators');
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: n = !1 } = e;
    return u.tn
        .get({
            url: p.ANM.ME,
            query: { with_analytics_token: n },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => (
                c.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: e.body,
                    analyticsToken: n ? e.body.analytics_token : void 0
                }),
                new f.Z(e.body)
            )
        );
}
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return h.Z.patch({
        url: p.ANM.USER_AGREEMENTS,
        trackedActionData: { event: o.a.USER_ACCEPT_AGREEMENTS },
        body: {
            terms: e,
            privacy: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(
        () => !0,
        () => !1
    );
}
function v(e, n) {
    let r = _.default.getCurrentUser();
    s()(null != r, 'setFlag: user cannot be undefined');
    let i = n ? r.flags | e : r.flags & ~e;
    return u.tn.patch({
        url: p.ANM.ME,
        oldFormErrors: !0,
        body: { flags: i },
        rejectWithError: !1
    });
}
function I(e) {
    let n = _.default.getUser(e);
    return null != n
        ? Promise.resolve(n)
        : u.tn
              .get({
                  url: p.ANM.USER(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (n) => (
                      c.Z.dispatch({
                          type: 'USER_UPDATE',
                          user: n.body
                      }),
                      _.default.getUser(e)
                  )
              );
}
async function T(e) {
    let { friendToken: n, withMutualGuilds: r, withMutualFriendsCount: i, withMutualFriends: a, guildId: s, connectionsRoleId: o, joinRequestId: l, abortSignal: f } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0;
    c.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: s
    });
    try {
        let d = await u.tn.get({
            url: p.ANM.USER_PROFILE(e),
            query: {
                friend_token: n,
                with_mutual_guilds: r,
                with_mutual_friends: a,
                with_mutual_friends_count: i && (null == a || !a),
                guild_id: s,
                connections_role_id: o,
                join_request_id: l
            },
            signal: f,
            rejectWithError: !0
        });
        return (
            null == _ || _(d.body, s),
            c.Z.dispatch({
                type: 'USER_UPDATE',
                user: d.body.user
            }),
            c.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                ...d.body
            }),
            null != s &&
                null != d.body.guild_member &&
                c.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: s,
                    guildMember: d.body.guild_member
                }),
            d.body
        );
    } catch (n) {
        throw (
            (null != n && (null == n ? void 0 : n.body) != null && m.warn('fetchProfile error: '.concat(n.body.code, ' - ').concat(n.body.message)),
            c.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new d.Hx(n),
                userId: e,
                guildId: s
            }),
            n)
        );
    }
}
