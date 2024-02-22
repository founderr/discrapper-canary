"use strict";
n.r(e), n.d(e, {
  subscribeMembers: function() {
    return r
  },
  unsubscribeMembers: function() {
    return a
  },
  subscribeToMemberUpdates: function() {
    return d
  },
  unsubscribeFromMemberUpdates: function() {
    return l
  },
  subscribeChannel: function() {
    return o
  },
  subscribeChannelDimensions: function() {
    return s
  }
}), n("424973");
var i = n("913144"),
  u = n("696605");

function r(t, e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: t,
    userIds: e
  })
}

function a(t, e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: t,
    userIds: e
  })
}

function d(t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: t
  })
}

function l(t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: t
  })
}

function o(t, e, n) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: t,
    channelId: e,
    ranges: n
  })
}

function s(t) {
  let {
    guildId: e,
    channelId: n,
    y: i,
    height: r,
    rowHeight: a
  } = t;

  function d(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(t / a)) + e)
  }
  let l = [];

  function s(t) {
    let e = t + (u.MINIMUM_RANGE - 1);
    return l.push([t, e]), e + 1
  }
  let I = d(.5 * r),
    E = d(i, -I),
    c = d(i + r, I);
  for (E > 0 && (E = Math.max(s(0), E)), E = Math.floor(E / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; E <= c;) E = s(E);
  o(e, n, l)
}