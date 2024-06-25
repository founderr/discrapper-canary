n(47120);
var l, i, s, r, a = n(442837),
  o = n(570140),
  u = n(131704),
  c = n(251625),
  d = n(592125),
  h = n(306680),
  p = n(944486),
  g = n(55589);
let m = [];

function C() {
  let e = g.Z.getPrivateChannelIds().filter(e => h.ZP.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, c.EF)(e, m) && (m = e, !0)
}

function E() {
  return C()
}

function f(e) {
  let {
    channelId: t
  } = e, n = d.Z.getChannel(t);
  return !!(null != n && (0, u.hv)(n.type)) && C()
}
class _ extends(l = a.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, d.Z, p.Z, h.ZP)
  }
  getUnreadPrivateChannelIds() {
    return m
  }
}
r = "PrivateChannelReadStateStore", (s = "displayName") in(i = _) ? Object.defineProperty(i, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = r, t.Z = new _(o.Z, {
  CONNECTION_OPEN: E,
  OVERLAY_INITIALIZE: E,
  MESSAGE_CREATE: f,
  MESSAGE_ACK: f,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = d.Z.getChannel(t);
    return !!(null != n && (0, u.hv)(n.type)) && C()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = d.Z.getChannel(t);
    return !!(null != n && (0, u.hv)(n.type)) && C()
  },
  WINDOW_FOCUS: function() {
    let e = d.Z.getChannel(p.Z.getChannelId());
    return !!(null != e && (0, u.hv)(e.type)) && C()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = d.Z.getChannel(t);
    return !!(null != n && (0, u.hv)(n.type)) && C()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = d.Z.getChannel(e);
      null != t && (0, u.hv)(t.type) && (n = !0)
    }
    return !!n && C()
  }
})