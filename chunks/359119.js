"use strict";
n.d(t, {
  ny: function() {
    return r
  },
  pj: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(592125);
let _ = 5 * n(70956).Z.Millis.SECOND;
(s = i || (i = {}))[s.STRANGER_DANGER = 1] = "STRANGER_DANGER", s[s.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", s[s.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (o = r || (r = {}))[o.UPVOTE = 0] = "UPVOTE", o[o.DOWNVOTE = 1] = "DOWNVOTE";
let c = [],
  d = {},
  E = new Set;

function I(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (d[e.id] = t, t.some(e => {
    var t;
    return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
      return new Date(e).getTime() > Date.now() - _
    }(e.dismiss_timestamp)
  }) ? E.add(e.id) : E.delete(e.id)), null == t && (null != d[e.id] && delete d[e.id], E.delete(e.id))
}

function T() {
  d = {}, Object.values(u.Z.getMutablePrivateChannels()).forEach(e => {
    I(e)
  })
}
class h extends a.ZP.Store {
  initialize() {
    this.waitFor(u.Z)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : c
  }
  hasShownInitialTooltipForChannel(e) {
    return E.has(e)
  }
}
t.ZP = new h(l.Z, {
  CHANNEL_CREATE: function(e) {
    I(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null != d[t.id] && delete d[t.id], E.delete(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      I(e)
    })
  },
  CONNECTION_OPEN: T,
  CONNECTION_OPEN_SUPPLEMENTAL: T,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
    let {
      channelId: t,
      warningId: n,
      feedbackType: i
    } = e, r = d[t];
    if (null != r) d[t] = r.map(e => e.id === n ? {
      ...e,
      feedback_type: i
    } : e)
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t
    } = e, n = d[t];
    if (E.delete(t), null != n) d[t] = n.map(e => ({
      ...e,
      dismiss_timestamp: void 0
    }))
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t,
      warningIds: n
    } = e, i = d[t];
    if (null == i) return;
    let r = new Date().toISOString();
    d[t] = i.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: r
    } : e)
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
    let {
      channelId: t
    } = e;
    E.add(t)
  }
})