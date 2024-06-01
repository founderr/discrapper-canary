"use strict";
n.r(t), n.d(t, {
  logVoiceMessagePlaybackEnded: function() {
    return s
  },
  logVoiceMessagePlaybackFailed: function() {
    return u
  },
  logVoiceMessagePlaybackStarted: function() {
    return o
  }
});
var r, i, a = n("626135"),
  l = n("981631");

function o(e, t, n, r) {
  a.default.track(l.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: r
  })
}

function s(e, t, n, r, i) {
  a.default.track(l.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: r,
    duration_listening_secs: i
  })
}

function u(e, t) {
  a.default.track(l.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}(r = i || (i = {})).SENT = "sent", r.CANCELLED_DURATION = "cancelled_duration", r.CANCELLED_USER_REQUESTED = "cancelled_user_requested", r.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict", r.CANCELLED_ON_BACKGROUND = "cancelled_on_background"