"use strict";
n.d(t, {
  In: function() {
    return S
  },
  Lr: function() {
    return T
  },
  PR: function() {
    return f
  },
  k: function() {
    return I
  },
  mB: function() {
    return h
  }
}), n(789020);
var i = n(512722),
  r = n.n(i),
  s = n(525769),
  o = n(259443),
  a = n(544891),
  l = n(570140),
  u = n(598077),
  _ = n(594174),
  c = n(573261),
  d = n(981631);
let E = new o.Y("UserProfileModalActionCreators");

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      withAnalyticsToken: t = !1
    } = e;
  return a.tn.get({
    url: d.ANM.ME,
    query: {
      with_analytics_token: t
    },
    oldFormErrors: !0
  }).then(e => (l.Z.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: e.body,
    analyticsToken: t ? e.body.analytics_token : void 0
  }), new u.Z(e.body)))
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return c.Z.patch({
    url: d.ANM.USER_AGREEMENTS,
    trackedActionData: {
      event: s.a.USER_ACCEPT_AGREEMENTS
    },
    body: {
      terms: e,
      privacy: t
    },
    oldFormErrors: !0
  }).then(() => !0, () => !1)
}

function h(e, t) {
  let n = _.default.getCurrentUser();
  r()(null != n, "setFlag: user cannot be undefined");
  let i = t ? n.flags | e : n.flags & ~e;
  return a.tn.patch({
    url: d.ANM.ME,
    oldFormErrors: !0,
    body: {
      flags: i
    }
  })
}

function f(e) {
  let t = _.default.getUser(e);
  return null != t ? Promise.resolve(t) : a.tn.get({
    url: d.ANM.USER(e),
    oldFormErrors: !0
  }).then(t => (l.Z.dispatch({
    type: "USER_UPDATE",
    user: t.body
  }), _.default.getUser(e)))
}
async function S(e) {
  let {
    friendToken: t,
    withMutualGuilds: n,
    withMutualFriendsCount: i,
    withMutualFriends: r,
    guildId: s,
    connectionsRoleId: o,
    abortSignal: u
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ = arguments.length > 2 ? arguments[2] : void 0;
  l.Z.dispatch({
    type: "USER_PROFILE_FETCH_START",
    userId: e
  });
  try {
    let c = await a.tn.get({
      url: d.ANM.USER_PROFILE(e),
      query: {
        friend_token: t,
        with_mutual_guilds: n,
        with_mutual_friends: r,
        with_mutual_friends_count: i && (null == r || !r),
        guild_id: s,
        connections_role_id: o
      },
      oldFormErrors: !0,
      signal: u
    });
    return null == _ || _(c.body, s), l.Z.dispatch({
      type: "USER_UPDATE",
      user: c.body.user
    }), l.Z.dispatch({
      type: "USER_PROFILE_FETCH_SUCCESS",
      ...c.body
    }), null != s && null != c.body.guild_member && l.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildId: s,
      guildMember: c.body.guild_member
    }), c.body
  } catch (t) {
    throw null != t && (null == t ? void 0 : t.body) != null && E.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.Z.dispatch({
      type: "USER_PROFILE_FETCH_FAILURE",
      userId: e
    }), t
  }
}