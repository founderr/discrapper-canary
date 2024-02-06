"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return o
  },
  unsubscribeMembers: function() {
    return s
  },
  subscribeToMemberUpdates: function() {
    return l
  },
  unsubscribeFromMemberUpdates: function() {
    return a
  },
  subscribeChannel: function() {
    return u
  },
  subscribeChannelDimensions: function() {
    return c
  }
}), n("424973");
var i = n("913144"),
  r = n("696605");

function o(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function s(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function l(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function a(e) {
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
    height: o,
    rowHeight: s
  } = e;

  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / s)) + t)
  }
  let a = [];

  function c(e) {
    let t = e + (r.MINIMUM_RANGE - 1);
    return a.push([e, t]), t + 1
  }
  let d = l(.5 * o),
    f = l(i, -d),
    E = l(i + o, d);
  for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= E;) f = c(f);
  u(t, n, a)
}