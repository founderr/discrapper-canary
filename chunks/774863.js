"use strict";
n.r(t), n("47120");
var s, l, a, i, r = n("442837"),
  o = n("570140"),
  u = n("70956"),
  d = n("709054");
let c = 14 * u.default.Millis.DAY,
  f = Object.freeze([]),
  E = {},
  _ = {};

function m() {
  E = {}, _ = {}
}
class T extends(s = r.default.Store) {
  getFpMessageInfo(e) {
    return E[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : f
  }
  canSubmitFpReport(e) {
    let t = E[e];
    return null != t && !t.reportSubmit && d.default.age(t.messageId) < c
  }
}
i = "FalsePositiveStore", (a = "displayName") in(l = T) ? Object.defineProperty(l, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = i, t.default = new T(o.default, {
  LOGOUT: function() {
    (function() {
      E = {}, _ = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      E = {}, _ = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    var t;
    let {
      messageId: n,
      channelId: s,
      attachments: l
    } = e, a = {
      messageId: n,
      channelId: s,
      attachments: l,
      reportSubmit: !1
    }, i = null !== (t = _[s]) && void 0 !== t ? t : f;
    _[s] = [...i, a], E[n] = a
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, s = _[n];
    null != s && (_[n] = s.map(e => e.messageId === t ? {
      ...e,
      reportSubmit: !0
    } : e), E[t] = {
      ...E[t],
      reportSubmit: !0
    })
  }
})