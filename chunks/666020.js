"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return r
  },
  unsubscribeMembers: function() {
    return o
  },
  subscribeToMemberUpdates: function() {
    return a
  },
  unsubscribeFromMemberUpdates: function() {
    return s
  },
  subscribeChannel: function() {
    return u
  },
  subscribeChannelDimensions: function() {
    return c
  }
}), n("424973");
var i = n("913144"),
  l = n("696605");

function r(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function o(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function a(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function s(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function u(e, t, n) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function c(e) {
  let {
    guildId: t,
    channelId: n,
    y: i,
    height: r,
    rowHeight: o
  } = e;

  function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
  }
  let s = [];

  function c(e) {
    let t = e + (l.MINIMUM_RANGE - 1);
    return s.push([e, t]), t + 1
  }
  let d = a(.5 * r),
    f = a(i, -d),
    E = a(i + r, d);
  for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; f <= E;) f = c(f);
  u(t, n, s)
}