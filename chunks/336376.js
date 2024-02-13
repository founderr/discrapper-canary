"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("233069"),
  i = n("117362"),
  r = n("42203"),
  u = n("660478"),
  o = n("18494"),
  d = n("287850");
let c = [];

function f() {
  let e = d.default.getPrivateChannelIds().filter(e => u.default.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, i.areArraysShallowlyEqual)(e, c) && (c = e, !0)
}

function h() {
  return f()
}

function C(e) {
  let {
    channelId: t
  } = e, n = r.default.getChannel(t);
  return !!(null != n && (0, s.isPrivate)(n.type)) && f()
}
class p extends l.default.Store {
  initialize() {
    this.waitFor(d.default, r.default, o.default, u.default)
  }
  getUnreadPrivateChannelIds() {
    return c
  }
}
p.displayName = "PrivateChannelReadStateStore";
var m = new p(a.default, {
  CONNECTION_OPEN: h,
  OVERLAY_INITIALIZE: h,
  MESSAGE_CREATE: C,
  MESSAGE_ACK: C,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = r.default.getChannel(t);
    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = r.default.getChannel(t);
    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
  },
  WINDOW_FOCUS: function() {
    let e = r.default.getChannel(o.default.getChannelId());
    return !!(null != e && (0, s.isPrivate)(e.type)) && f()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = r.default.getChannel(t);
    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = r.default.getChannel(e);
      null != t && (0, s.isPrivate)(t.type) && (n = !0)
    }
    return !!n && f()
  }
})