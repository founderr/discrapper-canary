t.d(n, {
    Bo: function () {
        return o;
    },
    Ct: function () {
        return s;
    },
    LA: function () {
        return a;
    },
    NB: function () {
        return r;
    },
    cP: function () {
        return i;
    }
});
var c = t(570140);
function i(e, n, t, i, a) {
    c.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: n,
        maxLength: t,
        onStart: i,
        onEnd: a
    });
}
function a(e, n) {
    c.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: n
    });
}
function o(e, n) {
    c.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: n
    });
}
function r() {
    c.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function s(e) {
    c.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
