"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140),
  _ = n(695346),
  c = n(581883),
  d = n(314897),
  E = n(592125),
  I = n(885110),
  T = n(981631);
let h = "IncomingCallStore",
  S = {
    width: 232,
    height: 315
  },
  f = new Set,
  N = [],
  A = new Map,
  m = new Set,
  O = 0,
  R = 0,
  p = !1;

function g(e) {
  if (null == e || null == A.get(e)) return !1;
  A.delete(e), (m = new Set(m)).delete(e)
}

function C(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = n.includes(d.default.getId());
  if (!m.has(t) && i) {
    let e = E.Z.getChannel(t);
    if (null == e) return !1;
    let n = 10 * m.size;
    A.set(t, {
      channel: e,
      x: O + n,
      y: R + n
    }), (m = new Set(m)).add(t)
  } else {
    if (!m.has(t) || i) return !1;
    g(t)
  }
}! function() {
  let e = l.K.get(h);
  if (null != e) O = +e.x, R = +e.y;
  else {
    let e = n(451478).Z.windowSize();
    O = e.width / 2 - S.width / 2, R = e.height / 2 - S.height / 2
  }
}();

function v() {
  p = I.Z.getStatus() === T.Skl.DND || _.QZ.getSetting()
}
class L extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, I.Z), this.syncWith([I.Z], v), this.syncWith([c.Z], v)
  }
  getIncomingCalls() {
    return p ? N : Array.from(A.values())
  }
  getIncomingCallChannelIds() {
    return p ? f : m
  }
  getFirstIncomingCallId() {
    return p ? null : m.values().next().value
  }
  hasIncomingCalls() {
    return !p && m.size > 0
  }
}
o = "IncomingCallStore", (s = "displayName") in(r = L) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new L(u.Z, {
  CALL_CREATE: C,
  CALL_UPDATE: C,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return g(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return g(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return O = t, R = n, l.K.set(h, {
      x: O,
      y: R
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return g(t.id)
  }
})