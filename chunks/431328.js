n.d(t, {
    Fd: function () {
        return c;
    },
    Io: function () {
        return d;
    },
    Rk: function () {
        return u;
    },
    w8: function () {
        return l;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(136015),
    o = n(565799),
    s = n(501655);
function l(e, t) {
    let [n] = (0, i.e7)([o.Z], () => [o.Z.getMutableParticipants(e, t), o.Z.getParticipantsVersion(e)], [e, t], a.Q);
    return n;
}
function u(e, t) {
    return (0, i.e7)([o.Z], () => o.Z.getParticipantCount(e, t), [e, t]);
}
function c(e) {
    let [t] = (0, i.e7)([o.Z], () => [o.Z.getMutableRequestToSpeakParticipants(e), o.Z.getRequestToSpeakParticipantsVersion(e)], [e], a.Q);
    return t;
}
function d(e) {
    return (0, i.e7)([o.Z], () => o.Z.getMutableParticipants(e, s.pV.SPEAKER).filter((e) => e.type === s.Ui.VOICE).length, [e]);
}
