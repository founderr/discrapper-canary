"use strict";
n.r(t), n("47120");
var a, s, i, l, r = n("442837"),
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
  g = new Map,
  I = new Set,
  T = 0,
  A = 0,
  N = !1;

function v(e) {
  if (null == e || null == g.get(e)) return !1;
  g.delete(e), (I = new Set(I)).delete(e)
}

function R(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(f.default.getId());
  if (!I.has(t) && a) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * I.size;
    g.set(t, {
      channel: e,
      x: T + n,
      y: A + n
    }), (I = new Set(I)).add(t)
  } else {
    if (!I.has(t) || a) return !1;
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

function O() {
  N = h.default.getStatus() === _.StatusTypes.DND || d.FocusMode.getSetting()
}
class L extends(a = r.default.Store) {
  initialize() {
    this.waitFor(E.default, h.default), this.syncWith([h.default], O), this.syncWith([c.default], O)
  }
  getIncomingCalls() {
    return N ? p : Array.from(g.values())
  }
  getIncomingCallChannelIds() {
    return N ? S : I
  }
  getFirstIncomingCallId() {
    return N ? null : I.values().next().value
  }
  hasIncomingCalls() {
    return !N && I.size > 0
  }
}
l = "IncomingCallStore", (i = "displayName") in(s = L) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.default = new L(u.default, {
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