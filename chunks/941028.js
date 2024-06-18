"use strict";
n.d(t, {
  TV: function() {
    return _
  },
  b8: function() {
    return u
  },
  k$: function() {
    return a
  },
  kr: function() {
    return l
  },
  w5: function() {
    return o
  },
  ym: function() {
    return s
  }
}), n(653041);
var i = n(570140),
  r = n(509848);

function s(e, t) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function o(e, t) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function a(e) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function l(e) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function u(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function _(e) {
  let {
    guildId: t,
    channelId: n,
    y: i,
    height: s,
    rowHeight: o
  } = e;

  function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
  }
  let l = [];

  function _(e) {
    let t = e + (r.dj - 1);
    return l.push([e, t]), t + 1
  }
  let c = a(.5 * s),
    d = a(i, -c),
    E = a(i + s, c);
  for (d > 0 && (d = Math.max(_(0), d)), d = Math.floor(d / r.dj) * r.dj; d <= E;) d = _(d);
  u(t, n, l)
}