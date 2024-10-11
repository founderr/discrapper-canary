t.d(n, {
    EW: function () {
        return o;
    },
    Np: function () {
        return s;
    },
    tb: function () {
        return u;
    }
});
var i,
    r,
    a = t(626135),
    l = t(981631);
function u(e, n, t, i) {
    a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: n,
        start_duration_secs: Math.min(null != n ? n : t, t),
        sender_user_id: i
    });
}
function o(e, n, t, i, r) {
    a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: n,
        end_duration_secs: Math.min(null != n ? n : t, t),
        sender_user_id: i,
        duration_listening_secs: r
    });
}
function s(e, n) {
    a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: n
    });
}
((i = r || (r = {})).SENT = 'sent'), (i.CANCELLED_DURATION = 'cancelled_duration'), (i.CANCELLED_USER_REQUESTED = 'cancelled_user_requested'), (i.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict'), (i.CANCELLED_ON_BACKGROUND = 'cancelled_on_background');
