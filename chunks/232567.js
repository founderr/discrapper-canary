n.d(t, {
    In: function () {
        return g;
    },
    Lr: function () {
        return m;
    },
    PR: function () {
        return T;
    },
    k: function () {
        return p;
    },
    mB: function () {
        return I;
    }
});
var r = n(789020);
var i = n(512722),
    a = n.n(i),
    o = n(525769),
    s = n(259443),
    l = n(544891),
    u = n(570140),
    c = n(881052),
    d = n(598077),
    _ = n(594174),
    E = n(573261),
    f = n(981631);
let h = new s.Y('UserProfileModalActionCreators');
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return l.tn
        .get({
            url: f.ANM.ME,
            query: { with_analytics_token: t },
            oldFormErrors: !0
        })
        .then(
            (e) => (
                u.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }),
                new d.Z(e.body)
            )
        );
}
function m() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return E.Z.patch({
        url: f.ANM.USER_AGREEMENTS,
        trackedActionData: { event: o.a.USER_ACCEPT_AGREEMENTS },
        body: {
            terms: e,
            privacy: t
        },
        oldFormErrors: !0
    }).then(
        () => !0,
        () => !1
    );
}
function I(e, t) {
    let n = _.default.getCurrentUser();
    a()(null != n, 'setFlag: user cannot be undefined');
    let r = t ? n.flags | e : n.flags & ~e;
    return l.tn.patch({
        url: f.ANM.ME,
        oldFormErrors: !0,
        body: { flags: r }
    });
}
function T(e) {
    let t = _.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : l.tn
              .get({
                  url: f.ANM.USER(e),
                  oldFormErrors: !0
              })
              .then(
                  (t) => (
                      u.Z.dispatch({
                          type: 'USER_UPDATE',
                          user: t.body
                      }),
                      _.default.getUser(e)
                  )
              );
}
async function g(e) {
    let { friendToken: t, withMutualGuilds: n, withMutualFriendsCount: r, withMutualFriends: i, guildId: a, connectionsRoleId: o, joinRequestId: s, abortSignal: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0;
    u.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: a
    });
    try {
        let c = await l.tn.get({
            url: f.ANM.USER_PROFILE(e),
            query: {
                friend_token: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: o,
                join_request_id: s
            },
            oldFormErrors: !0,
            signal: d
        });
        return (
            null == _ || _(c.body, a),
            u.Z.dispatch({
                type: 'USER_UPDATE',
                user: c.body.user
            }),
            u.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                ...c.body
            }),
            null != a &&
                null != c.body.guild_member &&
                u.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: a,
                    guildMember: c.body.guild_member
                }),
            c.body
        );
    } catch (t) {
        throw (
            (null != t && (null == t ? void 0 : t.body) != null && h.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            u.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new c.Hx(t),
                userId: e,
                guildId: a
            }),
            t)
        );
    }
}
