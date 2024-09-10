t.d(n, {
    EW: function () {
        return l;
    },
    Np: function () {
        return s;
    },
    tb: function () {
        return r;
    }
});
var i,
    o,
    a = t(626135),
    c = t(981631);
function r(e, n, t, i) {
    a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: n,
        start_duration_secs: Math.min(null != n ? n : t, t),
        sender_user_id: i
    });
}
function l(e, n, t, i, o) {
    a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: n,
        end_duration_secs: Math.min(null != n ? n : t, t),
        sender_user_id: i,
        duration_listening_secs: o
    });
}
function s(e, n) {
    a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: n
    });
}
((i = o || (o = {})).SENT = 'sent'), (i.CANCELLED_DURATION = 'cancelled_duration'), (i.CANCELLED_USER_REQUESTED = 'cancelled_user_requested'), (i.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict'), (i.CANCELLED_ON_BACKGROUND = 'cancelled_on_background');
