r.d(n, {
    PK: function () {
        return u;
    },
    tu: function () {
        return _;
    },
    xJ: function () {
        return d;
    }
});
var i = r(442837),
    a = r(430824),
    s = r(979651),
    o = r(565799),
    l = r(501655);
function u(e) {
    let n = c(e);
    return (0, i.e7)([s.Z], () => s.Z.hasVideo(e), [e]) || n;
}
function c(e) {
    return (0, i.e7)([o.Z], () => null != o.Z.getMutableParticipants(e, l.pV.SPEAKER).find((e) => e.type === l.Ui.STREAM), [e]);
}
function d(e) {
    return f(e) || s.Z.hasVideo(e);
}
function f(e) {
    return null != o.Z.getMutableParticipants(e, l.pV.SPEAKER).find((e) => e.type === l.Ui.STREAM);
}
function _(e) {
    var n;
    let r = a.Z.getGuild(e);
    return null != r && (null !== (n = null == r ? void 0 : r.maxStageVideoChannelUsers) && void 0 !== n ? n : 0) > 0;
}
