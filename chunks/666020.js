"use strict";
n.r(e), n.d(e, {
  subscribeMembers: function() {
    return a
  },
  unsubscribeMembers: function() {
    return r
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

function a(t, e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: t,
    userIds: e
  })
}

function r(t, e) {
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
    height: a,
    rowHeight: r
  } = t;

  function d(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(t / r)) + e)
  }
  let l = [];

  function s(t) {
    let e = t + (u.MINIMUM_RANGE - 1);
    return l.push([t, e]), e + 1
  }
  let c = d(.5 * a),
    E = d(i, -c),
    I = d(i + a, c);
  for (E > 0 && (E = Math.max(s(0), E)), E = Math.floor(E / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; E <= I;) E = s(E);
  o(e, n, l)
}