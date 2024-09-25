n.d(t, {
    EW: function () {
        return s;
    },
    Np: function () {
        return l;
    },
    tb: function () {
        return o;
    }
});
var r,
    i = n(626135),
    a = n(981631);
function o(e, t, n, r) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: r
    });
}
function s(e, t, n, r, o) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: r,
        duration_listening_secs: o
    });
}
function l(e, t) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
!(function (e) {
    (e.SENT = 'sent'), (e.CANCELLED_DURATION = 'cancelled_duration'), (e.CANCELLED_USER_REQUESTED = 'cancelled_user_requested'), (e.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict'), (e.CANCELLED_ON_BACKGROUND = 'cancelled_on_background');
})(r || (r = {}));
