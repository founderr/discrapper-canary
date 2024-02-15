"use strict";
n.r(t), n.d(t, {
  dismissChannelSafetyWarnings: function() {
    return i
  },
  setChannelSafetyWarningFeedback: function() {
    return r
  },
  clearChannelSafetyWarnings: function() {
    return o
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("49111");

function i(e, t) {
  return s.default.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), a.default.post({
    url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function r(e, t, n) {
  s.default.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function o(e) {
  s.default.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}