"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("446674"),
  l = n("913144"),
  a = n("718517"),
  i = n("299039"),
  r = n("290723");
let o = 14 * a.default.Millis.DAY,
  u = Object.freeze([]),
  d = {},
  c = {};

function E() {
  d = {}, c = {}
}
class f extends s.default.Store {
  getFpMessageInfo(e) {
    return d[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : u
  }
  canSubmitFpReport(e) {
    let t = d[e];
    if (null == t) return !1;
    let n = (0, r.getExplicitMediaSenderFalsePositiveExpirationOverride)();
    return !t.reportSubmit && i.default.age(t.messageId) < (null != n ? n : o)
  }
}
f.displayName = "FalsePositiveStore";
var _ = new f(l.default, {
  LOGOUT: function() {
    (function() {
      d = {}, c = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      d = {}, c = {}
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
    }, i = null !== (t = c[s]) && void 0 !== t ? t : u;
    c[s] = [...i, a], d[n] = a
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, s = c[n];
    null != s && (c[n] = s.map(e => e.messageId === t ? {
      ...e,
      reportSubmit: !0
    } : e), d[t] = {
      ...d[t],
      reportSubmit: !0
    })
  }
})