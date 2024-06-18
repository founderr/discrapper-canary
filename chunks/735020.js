"use strict";
n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(786761),
  _ = n(651530),
  c = n(163268);
let d = {};

function E(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function I(e) {
  return !!(0, _.Kh)() && null != e.messages && (d = e.messages.reduce((e, t) => (t.forEach(t => {
    e[E(t)] = (0, u.e5)(t)
  }), e), {}), !0)
}

function T() {
  d = {}
}
class h extends(i = a.ZP.Store) {
  getMessage(e, t) {
    return d[E({
      id: e,
      channel_id: t
    })]
  }
}
o = "SearchMessageStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(l.Z, {
  SEARCH_FINISH: I,
  MOD_VIEW_SEARCH_FINISH: I,
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    if (!(0, _.Kh)() || null == t.id || null == t.channel_id) return !1;
    let n = E(t),
      i = d[n];
    return null != i && (d[n] = (0, u.wi)(i, {
      attachments: t.attachments,
      embeds: t.embeds
    }), !0)
  },
  LOGOUT: function() {
    (function() {
      d = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      d = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = E({
      id: t,
      channel_id: n
    }), r = d[i];
    null != r && (d[i] = (0, c.Cm)(r))
  }
})