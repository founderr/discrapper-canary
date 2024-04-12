"use strict";
n.r(t), n("47120");
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("70956"),
  d = n("709054");
let c = 14 * u.default.Millis.DAY,
  E = Object.freeze([]),
  f = {},
  _ = {};

function T() {
  f = {}, _ = {}
}
class I extends(s = r.default.Store) {
  getFpMessageInfo(e) {
    return f[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : E
  }
  canSubmitFpReport(e) {
    let t = f[e];
    return null != t && !t.reportSubmit && d.default.age(t.messageId) < c
  }
}
i = "FalsePositiveStore", (l = "displayName") in(a = I) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new I(o.default, {
  LOGOUT: function() {
    (function() {
      f = {}, _ = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      f = {}, _ = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    var t;
    let {
      messageId: n,
      channelId: s,
      attachments: a
    } = e, l = {
      messageId: n,
      channelId: s,
      attachments: a,
      reportSubmit: !1
    }, i = null !== (t = _[s]) && void 0 !== t ? t : E;
    _[s] = [...i, l], f[n] = l
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, s = _[n];
    null != s && (_[n] = s.map(e => e.messageId === t ? {
      ...e,
      reportSubmit: !0
    } : e), f[t] = {
      ...f[t],
      reportSubmit: !0
    })
  }
})