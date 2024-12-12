r.d(n, {
    Fd: function () {
        return d;
    },
    Io: function () {
        return f;
    },
    Rk: function () {
        return c;
    },
    w8: function () {
        return u;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(136015),
    o = r(565799),
    l = r(501655);
function u(e, n) {
    let [r] = (0, a.e7)([o.Z], () => [o.Z.getMutableParticipants(e, n), o.Z.getParticipantsVersion(e)], [e, n], s.Q);
    return r;
}
function c(e, n) {
    return (0, a.e7)([o.Z], () => o.Z.getParticipantCount(e, n), [e, n]);
}
function d(e) {
    let [n] = (0, a.e7)([o.Z], () => [o.Z.getMutableRequestToSpeakParticipants(e), o.Z.getRequestToSpeakParticipantsVersion(e)], [e], s.Q);
    return n;
}
function f(e) {
    return (0, a.e7)([o.Z], () => o.Z.getMutableParticipants(e, l.pV.SPEAKER).filter((e) => e.type === l.Ui.VOICE).length, [e]);
}
