"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  l = n("913144"),
  i = n("845579"),
  r = n("374363"),
  o = n("271938"),
  u = n("42203"),
  d = n("101125"),
  c = n("49111");
let f = "IncomingCallStore",
  E = {
    width: 232,
    height: 315
  },
  _ = new Set,
  h = [],
  C = new Map,
  I = new Set,
  T = 0,
  S = 0,
  p = !1;

function m(e) {
  if (null == e || null == C.get(e)) return !1;
  C.delete(e), (I = new Set(I)).delete(e)
}

function g(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(o.default.getId());
  if (!I.has(t) && a) {
    let e = u.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * I.size;
    C.set(t, {
      channel: e,
      x: T + n,
      y: S + n
    }), (I = new Set(I)).add(t)
  } else {
    if (!I.has(t) || a) return !1;
    m(t)
  }
}! function() {
  let e = s.default.get(f);
  if (null != e) T = +e.x, S = +e.y;
  else {
    let e = n("471671").default.windowSize();
    T = e.width / 2 - E.width / 2, S = e.height / 2 - E.height / 2
  }
}();

function A() {
  p = d.default.getStatus() === c.StatusTypes.DND || i.QuietMode.getSetting()
}
class N extends a.default.Store {
  initialize() {
    this.waitFor(u.default, d.default), this.syncWith([d.default], A), this.syncWith([r.default], A)
  }
  getIncomingCalls() {
    return p ? h : Array.from(C.values())
  }
  getIncomingCallChannelIds() {
    return p ? _ : I
  }
  getFirstIncomingCallId() {
    return p ? null : I.values().next().value
  }
  hasIncomingCalls() {
    return !p && I.size > 0
  }
}
N.displayName = "IncomingCallStore";
var R = new N(l.default, {
  CALL_CREATE: g,
  CALL_UPDATE: g,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return m(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return m(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return T = t, S = n, s.default.set(f, {
      x: T,
      y: S
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return m(t.id)
  }
})