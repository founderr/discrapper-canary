"use strict";
n.r(t), n("47120");
var i, r, a, s, o = n("442837"),
  l = n("433517"),
  u = n("570140"),
  d = n("695346"),
  _ = n("581883"),
  c = n("314897"),
  E = n("592125"),
  I = n("885110"),
  T = n("981631");
let f = "IncomingCallStore",
  S = {
    width: 232,
    height: 315
  },
  h = new Set,
  A = [],
  m = new Map,
  N = new Set,
  p = 0,
  O = 0,
  C = !1;

function R(e) {
  if (null == e || null == m.get(e)) return !1;
  m.delete(e), (N = new Set(N)).delete(e)
}

function g(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = n.includes(c.default.getId());
  if (!N.has(t) && i) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * N.size;
    m.set(t, {
      channel: e,
      x: p + n,
      y: O + n
    }), (N = new Set(N)).add(t)
  } else {
    if (!N.has(t) || i) return !1;
    R(t)
  }
}! function() {
  let e = l.Storage.get(f);
  if (null != e) p = +e.x, O = +e.y;
  else {
    let e = n("451478").default.windowSize();
    p = e.width / 2 - S.width / 2, O = e.height / 2 - S.height / 2
  }
}();

function L() {
  C = I.default.getStatus() === T.StatusTypes.DND || d.FocusMode.getSetting()
}
class v extends(i = o.default.Store) {
  initialize() {
    this.waitFor(E.default, I.default), this.syncWith([I.default], L), this.syncWith([_.default], L)
  }
  getIncomingCalls() {
    return C ? A : Array.from(m.values())
  }
  getIncomingCallChannelIds() {
    return C ? h : N
  }
  getFirstIncomingCallId() {
    return C ? null : N.values().next().value
  }
  hasIncomingCalls() {
    return !C && N.size > 0
  }
}
s = "IncomingCallStore", (a = "displayName") in(r = v) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new v(u.default, {
  CALL_CREATE: g,
  CALL_UPDATE: g,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return R(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return R(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return p = t, O = n, l.Storage.set(f, {
      x: p,
      y: O
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return R(t.id)
  }
})