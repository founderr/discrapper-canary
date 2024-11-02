n.d(t, {
    Bo: function () {
        return a;
    },
    Ct: function () {
        return s;
    },
    LA: function () {
        return l;
    },
    NB: function () {
        return o;
    },
    cP: function () {
        return r;
    }
});
var i = n(570140);
function r(e, t, n, r, l) {
    i.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: r,
        onEnd: l
    });
}
function l(e, t) {
    i.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function o() {
    i.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function s(e) {
    i.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
