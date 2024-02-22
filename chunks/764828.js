"use strict";
n.r(t), n.d(t, {
  SafetyWarningTypes: function() {
    return r
  },
  SafetyWarningFeedbackTypes: function() {
    return s
  },
  default: function() {
    return _
  }
});
var i, a, r, s, l = n("446674"),
  u = n("913144"),
  o = n("42203");
(i = r || (r = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", i[i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", i[i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (a = s || (s = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
let d = [],
  c = {};

function f(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
}

function E() {
  c = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
    f(e)
  })
}
class p extends l.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : d
  }
}
var _ = new p(u.default, {
  CHANNEL_CREATE: function(e) {
    f(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    null != c[e.channel.id] && delete c[e.channel.id]
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      f(e)
    })
  },
  CONNECTION_OPEN: E,
  CONNECTION_OPEN_SUPPLEMENTAL: E,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
    let {
      channelId: t,
      warningId: n,
      feedbackType: i
    } = e, a = c[t];
    null != a && (c[t] = a.map(e => e.id === n ? {
      ...e,
      feedback_type: i
    } : e))
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t
    } = e, n = c[t];
    null != n && (c[t] = n.map(e => ({
      ...e,
      dismiss_timestamp: void 0
    })))
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t,
      warningIds: n
    } = e, i = c[t];
    if (null == i) return;
    let a = Date.now().toString();
    c[t] = i.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: a
    } : e)
  }
})