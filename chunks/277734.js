"use strict";
s.r(t), s.d(t, {
  dismissChannelSafetyWarnings: function() {
    return r
  },
  setChannelSafetyWarningFeedback: function() {
    return i
  },
  clearChannelSafetyWarnings: function() {
    return l
  }
});
var n = s("872717"),
  a = s("913144"),
  o = s("49111");

function r(e, t) {
  return a.default.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), n.default.post({
    url: o.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function i(e, t, s) {
  a.default.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: s
  })
}

function l(e) {
  a.default.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}