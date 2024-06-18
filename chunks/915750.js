"use strict";
n.d(t, {
  B: function() {
    return I
  },
  u: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(772848),
  o = n(286379),
  a = n(110924),
  l = n(797614),
  u = n(617136),
  _ = n(184309),
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E {
  constructor(e, t, n, i, r) {
    var a = this;
    d(this, "id", void 0), d(this, "quests", void 0), d(this, "questContent", void 0), d(this, "questContentPosition", void 0), d(this, "trackGuildAndChannelMetadata", void 0), d(this, "triggeredByStatusChange", void 0), d(this, "beatTimeout", void 0), d(this, "lastBeatTime", void 0), d(this, "minViewTimeReachedTimeout", void 0), d(this, "minViewTimeSecond", void 0), d(this, "minViewportPercentage", void 0), d(this, "onMinViewTimeReached", () => {
      this.quests.forEach(e => {
        (0, u.dA)({
          questId: e.id,
          event: c.rMx.QUEST_CONTENT_VIEWED,
          properties: {
            min_view_time_seconds: this.minViewTimeSecond,
            min_viewport_percentage: this.minViewportPercentage,
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      })
    }), d(this, "heartbeat", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      a.quests.forEach(t => {
        null != a.lastBeatTime && (0, u.dA)({
          questId: t.id,
          event: c.rMx.QUEST_CONTENT_VIEW_TIME,
          properties: {
            is_termination_beat: e,
            viewed_time_ms: Date.now() - a.lastBeatTime,
            triggered_by_status_change: a.triggeredByStatusChange,
            ...a.commonProperties(t)
          },
          trackGuildAndChannelMetadata: a.trackGuildAndChannelMetadata
        })
      }), a.lastBeatTime = Date.now()
    }), d(this, "commonProperties", e => ({
      impression_id: this.id,
      quest_status: (0, u.uk)(e),
      ...(0, u.mH)(this.questContent, this.questContentPosition)
    })), d(this, "start", () => {
      this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = window.setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.quests.forEach(e => {
        (0, u.dA)({
          questId: e.id,
          event: c.rMx.QUEST_CONTENT_LOADED,
          properties: {
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      }), (0, _.a)("QuestImpressionTracker") && l.Z.increment({
        name: o.V.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, u._b)(this.questContent))]
      })
    }), d(this, "stop", function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      e && a.heartbeat(!0), a.lastBeatTime = void 0, clearInterval(a.beatTimeout), clearTimeout(a.minViewTimeReachedTimeout)
    }), this.id = (0, s.Z)(), this.questContent = t, this.questContentPosition = n, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = r, this.triggeredByStatusChange = i
  }
}
let I = (e, t) => {
    let n = Array.isArray(e) ? e.sort().map(e => e.id).join("_") : e.id;
    return "".concat(n, "_").concat(t)
  },
  T = e => {
    let t = Array.isArray(e) ? null : (0, u.uk)(e),
      n = (0, a.Z)(t);
    return t !== n
  };

function h(e) {
  let {
    visible: t,
    visibleChanged: n,
    reference: s,
    focused: o,
    focusedChanged: a,
    impression: l
  } = e, u = T(e.questOrQuests);
  return r.useEffect(() => () => {
    null != l.current && l.current.stop()
  }, [l]), r.useEffect(() => {
    let i = o && t,
      r = (n || a || u) && i,
      s = (n || a) && !i || u;
    (r || s) && null != l.current && l.current.stop(), r && (l.current = new E(e.questOrQuests, e.questContent, e.questContentPosition, u, e.trackGuildAndChannelMetadata), l.current.start())
  }, [o, t, l, a, n, e.questOrQuests, e.questContent, e.questContentPosition, e.trackGuildAndChannelMetadata, u]), (0, i.jsx)(i.Fragment, {
    children: e.children(s)
  })
}