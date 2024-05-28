"use strict";
n.r(t), n.d(t, {
  logVoiceMessagePlaybackEnded: function() {
    return o
  },
  logVoiceMessagePlaybackFailed: function() {
    return u
  },
  logVoiceMessagePlaybackStarted: function() {
    return r
  }
});
var s, a, l = n("626135"),
  i = n("981631");

function r(e, t, n, s) {
  l.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: s
  })
}

function o(e, t, n, s, a) {
  l.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: s,
    duration_listening_secs: a
  })
}

function u(e, t) {
  l.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}(s = a || (a = {})).SENT = "sent", s.CANCELLED_DURATION = "cancelled_duration", s.CANCELLED_USER_REQUESTED = "cancelled_user_requested", s.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict", s.CANCELLED_ON_BACKGROUND = "cancelled_on_background"