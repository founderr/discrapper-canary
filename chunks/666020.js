"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return r
  },
  unsubscribeMembers: function() {
    return a
  },
  subscribeToMemberUpdates: function() {
    return s
  },
  unsubscribeFromMemberUpdates: function() {
    return u
  },
  subscribeChannel: function() {
    return o
  },
  subscribeChannelDimensions: function() {
    return d
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

function a(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function s(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function u(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function o(e, t, n) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function d(e) {
  let {
    guildId: t,
    channelId: n,
    y: i,
    height: r,
    rowHeight: a
  } = e;

  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
  }
  let u = [];

  function d(e) {
    let t = e + (l.MINIMUM_RANGE - 1);
    return u.push([e, t]), t + 1
  }
  let c = s(.5 * r),
    I = s(i, -c),
    _ = s(i + r, c);
  for (I > 0 && (I = Math.max(d(0), I)), I = Math.floor(I / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; I <= _;) I = d(I);
  o(t, n, u)
}