"use strict";
n.r(t), n.d(t, {
  dismissChannelSafetyWarnings: function() {
    return l
  },
  setChannelSafetyWarningFeedback: function() {
    return i
  },
  clearChannelSafetyWarnings: function() {
    return d
  }
});
var a = n("872717"),
  u = n("913144"),
  s = n("49111");

function l(e, t) {
  return u.default.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), a.default.post({
    url: s.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function i(e, t, n) {
  u.default.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function d(e) {
  u.default.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}