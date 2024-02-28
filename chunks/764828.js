"use strict";
n.r(t), n.d(t, {
  SafetyWarningTypes: function() {
    return i
  },
  SafetyWarningFeedbackTypes: function() {
    return a
  },
  default: function() {
    return C
  }
}), n("222007");
var i, a, r, l, s = n("446674"),
  u = n("913144"),
  o = n("42203");
(r = i || (i = {}))[r.STRANGER_DANGER = 1] = "STRANGER_DANGER", r[r.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", r[r.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (l = a || (a = {}))[l.UPVOTE = 0] = "UPVOTE", l[l.DOWNVOTE = 1] = "DOWNVOTE";
let d = [],
  c = {},
  f = new Set;

function E(e) {
  return 2 === e.type || 3 === e.type
}

function p(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (c[e.id] = t, t.some(e => E(e) && null != e.dismiss_timestamp) && f.add(e.id)), null == t && (null != c[e.id] && delete c[e.id], f.delete(e.id))
}

function _() {
  c = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
    p(e)
  })
}
class h extends s.default.Store {
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
  hasShownInitialTooltipForChannel(e) {
    return f.has(e)
  }
}
var C = new h(u.default, {
  CHANNEL_CREATE: function(e) {
    p(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null != c[t.id] && delete c[t.id], f.delete(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      p(e)
    })
  },
  CONNECTION_OPEN: _,
  CONNECTION_OPEN_SUPPLEMENTAL: _,
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
    let a = i.find(e => n.includes(e.id) && E(e));
    null != a && f.add(t);
    let r = new Date().toISOString();
    c[t] = i.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: r
    } : e)
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
    let {
      channelId: t
    } = e;
    f.add(t)
  }
})