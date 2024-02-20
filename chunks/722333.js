"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var i, a = n("917351"),
  l = n.n(a),
  s = n("95410"),
  r = n("689988"),
  o = n("139321"),
  u = n("269596"),
  d = n("945956"),
  c = n("200521");
let f = {
    chance: .2,
    cooldown: 864e5
  },
  E = {
    [c.FeedbackType.VOICE]: {
      ...f,
      hotspot: o.HotspotLocations.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      eligibilityChecks: [function(e) {
        let t = d.default.getWasEverRtcConnected();
        return !t || d.default.getWasEverMultiParticipant()
      }]
    },
    [c.FeedbackType.STREAM]: {
      ...f,
      hotspot: o.HotspotLocations.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback"
    },
    [c.FeedbackType.VIDEO_BACKGROUND]: {
      ...f,
      hotspot: o.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK,
      storageKey: "lastVideoBackgroundFeedback"
    },
    [c.FeedbackType.ACTIVITY]: {
      cooldown: 0,
      chance: .5,
      hotspot: o.HotspotLocations.POST_ACTIVITY_FEEDBACK,
      storageKey: "lastActivityFeedback"
    },
    [c.FeedbackType.IN_APP_REPORTS]: {
      cooldown: 1728e5,
      chance: .5,
      hotspot: o.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
      storageKey: "inAppReportsFeedback"
    }
  };

function h(e) {
  return u.default.hasHotspot(e.hotspot)
}

function _(e) {
  return Math.random() < e.chance
}

function C(e) {
  if (null != e.storageKey) {
    let t = s.default.get(e.storageKey);
    if (null != t && Date.now() - t < e.cooldown) return !1
  }
  return !0
}
i = class extends r.default {
  possiblyShowFeedbackModal(e, t) {
    (function(e) {
      var t;
      if (__OVERLAY__) return !1;
      let n = E[e],
        i = null !== (t = n.eligibilityChecks) && void 0 !== t ? t : [];
      return [C, _, h].every(e => e(n)) && i.every(e => e(n))
    })(e) && (null == this.feedbackTypeToShow || !(c.FeedbackTypePrecedence[this.feedbackTypeToShow] < c.FeedbackTypePrecedence[e])) && (this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t))
  }
  constructor(...e) {
    super(...e), this.feedbackTypeToShow = null, this.showFeedbackModalDebounced = l.debounce(e => {
      null != this.feedbackTypeToShow && (! function(e) {
        let t = E[e];
        null != t.storageKey && s.default.set(t.storageKey, Date.now())
      }(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e())
    }, 200)
  }
}