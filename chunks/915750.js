"use strict";
n.r(t), n.d(t, {
  QuestContentImpressionTrackerInner: function() {
    return f
  },
  getQuestContentImpressionTrackerKey: function() {
    return I
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("153832"),
  a = n("286379"),
  o = n("110924"),
  l = n("797614"),
  u = n("617136"),
  d = n("184309"),
  _ = n("981631");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E {
  constructor(e, t, n, i, r) {
    var o = this;
    c(this, "id", void 0), c(this, "quests", void 0), c(this, "questContent", void 0), c(this, "questContentPosition", void 0), c(this, "trackGuildAndChannelMetadata", void 0), c(this, "triggeredByStatusChange", void 0), c(this, "beatTimeout", void 0), c(this, "lastBeatTime", void 0), c(this, "minViewTimeReachedTimeout", void 0), c(this, "minViewTimeSecond", void 0), c(this, "minViewportPercentage", void 0), c(this, "onMinViewTimeReached", () => {
      this.quests.forEach(e => {
        (0, u.trackQuestEvent)({
          questId: e.id,
          event: _.AnalyticEvents.QUEST_CONTENT_VIEWED,
          properties: {
            min_view_time_seconds: this.minViewTimeSecond,
            min_viewport_percentage: this.minViewportPercentage,
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      })
    }), c(this, "heartbeat", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      o.quests.forEach(t => {
        null != o.lastBeatTime && (0, u.trackQuestEvent)({
          questId: t.id,
          event: _.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
          properties: {
            is_termination_beat: e,
            viewed_time_ms: Date.now() - o.lastBeatTime,
            triggered_by_status_change: o.triggeredByStatusChange,
            ...o.commonProperties(t)
          },
          trackGuildAndChannelMetadata: o.trackGuildAndChannelMetadata
        })
      }), o.lastBeatTime = Date.now()
    }), c(this, "commonProperties", e => ({
      impression_id: this.id,
      quest_status: (0, u.getQuestStatus)(e),
      ...(0, u.getContentProperties)(this.questContent, this.questContentPosition)
    })), c(this, "start", () => {
      this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = window.setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.quests.forEach(e => {
        (0, u.trackQuestEvent)({
          questId: e.id,
          event: _.AnalyticEvents.QUEST_CONTENT_LOADED,
          properties: {
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      }), (0, d.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && l.default.increment({
        name: a.MetricEvents.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, u.getQuestContentName)(this.questContent))]
      })
    }), c(this, "stop", function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      e && o.heartbeat(!0), o.lastBeatTime = void 0, clearInterval(o.beatTimeout), clearTimeout(o.minViewTimeReachedTimeout)
    }), this.id = (0, s.v4)(), this.questContent = t, this.questContentPosition = n, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = r, this.triggeredByStatusChange = i
  }
}
let I = (e, t) => {
    let n = Array.isArray(e) ? e.sort().map(e => e.id).join("_") : e.id;
    return "".concat(n, "_").concat(t)
  },
  T = e => {
    let t = Array.isArray(e) ? null : (0, u.getQuestStatus)(e),
      n = (0, o.default)(t);
    return t !== n
  };

function f(e) {
  let {
    visible: t,
    visibleChanged: n,
    reference: s,
    focused: a,
    focusedChanged: o,
    impression: l
  } = e, u = T(e.questOrQuests);
  return r.useEffect(() => () => {
    null != l.current && l.current.stop()
  }, [l]), r.useEffect(() => {
    let i = a && t,
      r = (n || o || u) && i,
      s = (n || o) && !i || u;
    (r || s) && null != l.current && l.current.stop(), r && (l.current = new E(e.questOrQuests, e.questContent, e.questContentPosition, u, e.trackGuildAndChannelMetadata), l.current.start())
  }, [a, t, l, o, n, e.questOrQuests, e.questContent, e.questContentPosition, e.trackGuildAndChannelMetadata, u]), (0, i.jsx)(i.Fragment, {
    children: e.children(s)
  })
}