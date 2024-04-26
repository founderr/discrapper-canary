"use strict";
a.r(t), a("47120");
var n, s, l, i, r = a("442837"),
  o = a("433517"),
  u = a("570140"),
  d = a("695346"),
  c = a("581883"),
  f = a("314897"),
  E = a("592125"),
  h = a("885110"),
  _ = a("981631");
let C = "IncomingCallStore",
  m = {
    width: 232,
    height: 315
  },
  S = new Set,
  p = [],
  I = new Map,
  T = new Set,
  g = 0,
  A = 0,
  N = !1;

function v(e) {
  if (null == e || null == I.get(e)) return !1;
  I.delete(e), (T = new Set(T)).delete(e)
}

function R(e) {
  let {
    channelId: t,
    ringing: a
  } = e, n = a.includes(f.default.getId());
  if (!T.has(t) && n) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let a = 10 * T.size;
    I.set(t, {
      channel: e,
      x: g + a,
      y: A + a
    }), (T = new Set(T)).add(t)
  } else {
    if (!T.has(t) || n) return !1;
    v(t)
  }
}! function() {
  let e = o.Storage.get(C);
  if (null != e) g = +e.x, A = +e.y;
  else {
    let e = a("451478").default.windowSize();
    g = e.width / 2 - m.width / 2, A = e.height / 2 - m.height / 2
  }
}();

function L() {
  N = h.default.getStatus() === _.StatusTypes.DND || d.FocusMode.getSetting()
}
class O extends(n = r.default.Store) {
  initialize() {
    this.waitFor(E.default, h.default), this.syncWith([h.default], L), this.syncWith([c.default], L)
  }
  getIncomingCalls() {
    return N ? p : Array.from(I.values())
  }
  getIncomingCallChannelIds() {
    return N ? S : T
  }
  getFirstIncomingCallId() {
    return N ? null : T.values().next().value
  }
  hasIncomingCalls() {
    return !N && T.size > 0
  }
}
i = "IncomingCallStore", (l = "displayName") in(s = O) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new O(u.default, {
  CALL_CREATE: R,
  CALL_UPDATE: R,
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
      y: a
    } = e;
    return g = t, A = a, o.Storage.set(C, {
      x: g,
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