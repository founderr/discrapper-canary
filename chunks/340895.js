"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("695346"),
  c = n("581883"),
  f = n("314897"),
  E = n("592125"),
  h = n("885110"),
  _ = n("981631");
let C = "IncomingCallStore",
  m = {
    width: 232,
    height: 315
  },
  S = new Set,
  p = [],
  I = new Map,
  g = new Set,
  T = 0,
  A = 0,
  N = !1;

function v(e) {
  if (null == e || null == I.get(e)) return !1;
  I.delete(e), (g = new Set(g)).delete(e)
}

function L(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(f.default.getId());
  if (!g.has(t) && a) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * g.size;
    I.set(t, {
      channel: e,
      x: T + n,
      y: A + n
    }), (g = new Set(g)).add(t)
  } else {
    if (!g.has(t) || a) return !1;
    v(t)
  }
}! function() {
  let e = o.Storage.get(C);
  if (null != e) T = +e.x, A = +e.y;
  else {
    let e = n("451478").default.windowSize();
    T = e.width / 2 - m.width / 2, A = e.height / 2 - m.height / 2
  }
}();

function R() {
  N = h.default.getStatus() === _.StatusTypes.DND || d.FocusMode.getSetting()
}
class O extends(a = r.default.Store) {
  initialize() {
    this.waitFor(E.default, h.default), this.syncWith([h.default], R), this.syncWith([c.default], R)
  }
  getIncomingCalls() {
    return N ? p : Array.from(I.values())
  }
  getIncomingCallChannelIds() {
    return N ? S : g
  }
  getFirstIncomingCallId() {
    return N ? null : g.values().next().value
  }
  hasIncomingCalls() {
    return !N && g.size > 0
  }
}
i = "IncomingCallStore", (l = "displayName") in(s = O) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new O(u.default, {
  CALL_CREATE: L,
  CALL_UPDATE: L,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return v(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return v(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return T = t, A = n, o.Storage.set(C, {
      x: T,
      y: A
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return v(t.id)
  }
})