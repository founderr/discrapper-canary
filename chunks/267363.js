"use strict";
n.r(t), n.d(t, {
  ack: function() {
    return c
  },
  ackChannel: function() {
    return _
  },
  bulkAck: function() {
    return f
  },
  localAck: function() {
    return h
  },
  enableAutomaticAck: function() {
    return g
  },
  disableAutomaticAck: function() {
    return p
  },
  ackGuildFeature: function() {
    return m
  },
  ackUserFeature: function() {
    return E
  }
}), n("222007"), n("424973");
var i = n("249654"),
  l = n("913144"),
  u = n("401690"),
  o = n("233069"),
  s = n("42203"),
  r = n("245997"),
  a = n("697218"),
  d = n("49111");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0,
    u = arguments.length > 4 ? arguments[4] : void 0;
  l.default.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: i,
    immediate: t,
    force: n,
    context: d.CURRENT_APP_CONTEXT,
    location: u
  })
}

function _(e) {
  e.isCategory() ? ! function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = s.default.getChannel(e);
    if (null == i || null == i.guild_id) return;
    let l = r.default.getCategories(i.guild_id);
    if (null == l[e]) return;
    let a = l[e].filter(e => {
        let {
          channel: t
        } = e;
        return (0, o.isGuildReadableType)(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      d = [...a];
    for (let e of (a.forEach(e => {
        let t = u.default.getActiveJoinedThreadsForParent(i.guild_id, e);
        for (let e in t) d.push(e)
      }), d)) c(e, t, n)
  }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, i.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
}

function f(e, t) {
  l.default.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: d.CURRENT_APP_CONTEXT,
    onFinished: t
  })
}

function h(e) {
  l.default.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function g(e, t) {
  l.default.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function p(e, t) {
  l.default.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function m(e, t, n) {
  l.default.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: !1
  })
}

function E(e, t) {
  var n;
  let i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  null != i && l.default.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: !1
  })
}