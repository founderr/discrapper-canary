"use strict";
n.r(t), n.d(t, {
  SafetyWarningTypes: function() {
    return s
  },
  SafetyWarningFeedbackTypes: function() {
    return l
  },
  default: function() {
    return _
  }
});
var a, u, s, l, i = n("446674"),
  d = n("913144"),
  r = n("42203");
(a = s || (s = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (u = l || (l = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
let o = [],
  E = {};

function f(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (E[e.id] = t), null == t && null != E[e.id] && delete E[e.id]
}

function c() {
  E = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
    f(e)
  })
}
class N extends i.default.Store {
  initialize() {
    this.waitFor(r.default)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null === (n = E[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : o
  }
}
var _ = new N(d.default, {
  CHANNEL_CREATE: function(e) {
    f(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    null != E[e.channel.id] && delete E[e.channel.id]
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      f(e)
    })
  },
  CONNECTION_OPEN: c,
  CONNECTION_OPEN_SUPPLEMENTAL: c,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
    let {
      channelId: t,
      warningId: n,
      feedbackType: a
    } = e, u = E[t];
    null != u && (E[t] = u.map(e => e.id === n ? {
      ...e,
      feedback_type: a
    } : e))
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t
    } = e, n = E[t];
    null != n && (E[t] = n.map(e => ({
      ...e,
      dismiss_timestamp: void 0
    })))
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t,
      warningIds: n
    } = e, a = E[t];
    if (null == a) return;
    let u = Date.now().toString();
    E[t] = a.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: u
    } : e)
  }
})