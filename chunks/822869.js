"use strict";
n.r(t), n.d(t, {
  trackForwardCancel: function() {
    return i
  },
  trackForwardSent: function() {
    return r
  },
  trackForwardStart: function() {
    return l
  }
});
var s = n("626135"),
  a = n("981631");

function l(e, t, n) {
  s.default.track(a.AnalyticEvents.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: t,
    source: n
  })
}

function i(e, t) {
  s.default.track(a.AnalyticEvents.FORWARD_MESSAGE_CANCELLED, {
    channel_id: e,
    message_id: t
  })
}

function r(e, t, n, l) {
  s.default.track(a.AnalyticEvents.FORWARD_MESSAGE_SENT, {
    channel_id: e,
    message_id: t,
    has_error: n,
    num_destinations: l
  })
}