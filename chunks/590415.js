n.d(t, {
    ZP: function () {
        return s;
    },
    gf: function () {
        return o;
    },
    xO: function () {
        return r;
    }
});
var r,
    i = n(442837),
    a = n(979651);
function o(e) {
    if (null == e) return 0;
    if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
    if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
    if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
    return 0;
}
function s(e, t) {
    return (0, i.e7)([a.Z], () => (null == e || null == t ? 0 : o(a.Z.getVoiceStateForChannel(t, e))), [e, t]);
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.REQUESTED_TO_SPEAK = 1)] = 'REQUESTED_TO_SPEAK'), (e[(e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'), (e[(e.ON_STAGE = 3)] = 'ON_STAGE');
})(r || (r = {}));
