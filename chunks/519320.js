"use strict";
n.r(t), n.d(t, {
  logVoiceMessagePlaybackEnded: function() {
    return r
  },
  logVoiceMessagePlaybackFailed: function() {
    return u
  },
  logVoiceMessagePlaybackStarted: function() {
    return s
  }
});
var i, l, a = n("626135"),
  o = n("981631");

function s(e, t, n, i) {
  a.default.track(o.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: i
  })
}

function r(e, t, n, i, l) {
  a.default.track(o.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: i,
    duration_listening_secs: l
  })
}

function u(e, t) {
  a.default.track(o.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}(i = l || (l = {})).SENT = "sent", i.CANCELLED_DURATION = "cancelled_duration", i.CANCELLED_USER_REQUESTED = "cancelled_user_requested", i.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict", i.CANCELLED_ON_BACKGROUND = "cancelled_on_background"