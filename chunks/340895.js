"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("695346"),
  c = n("581883"),
  f = n("314897"),
  E = n("592125"),
  _ = n("885110"),
  h = n("981631");
let C = "IncomingCallStore",
  m = {
    width: 232,
    height: 315
  },
  S = new Set,
  I = [],
  T = new Map,
  p = new Set,
  g = 0,
  N = 0,
  A = !1;

function R(e) {
  if (null == e || null == T.get(e)) return !1;
  T.delete(e), (p = new Set(p)).delete(e)
}

function O(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(f.default.getId());
  if (!p.has(t) && a) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * p.size;
    T.set(t, {
      channel: e,
      x: g + n,
      y: N + n
    }), (p = new Set(p)).add(t)
  } else {
    if (!p.has(t) || a) return !1;
    R(t)
  }
}! function() {
  let e = o.Storage.get(C);
  if (null != e) g = +e.x, N = +e.y;
  else {
    let e = n("451478").default.windowSize();
    g = e.width / 2 - m.width / 2, N = e.height / 2 - m.height / 2
  }
}();

function v() {
  A = _.default.getStatus() === h.StatusTypes.DND || d.FocusMode.getSetting()
}
class L extends(a = r.default.Store) {
  initialize() {
    this.waitFor(E.default, _.default), this.syncWith([_.default], v), this.syncWith([c.default], v)
  }
  getIncomingCalls() {
    return A ? I : Array.from(T.values())
  }
  getIncomingCallChannelIds() {
    return A ? S : p
  }
  getFirstIncomingCallId() {
    return A ? null : p.values().next().value
  }
  hasIncomingCalls() {
    return !A && p.size > 0
  }
}
i = "IncomingCallStore", (l = "displayName") in(s = L) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new L(u.default, {
  CALL_CREATE: O,
  CALL_UPDATE: O,
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
    return g = t, N = n, o.Storage.set(C, {
      x: g,
      y: N
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return R(t.id)
  }
})