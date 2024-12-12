r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(780384),
    s = r(410030),
    o = r(358221),
    l = r(944486),
    u = r(981631);
function c(e, n) {
    let r = (0, i.e7)([l.Z], () => l.Z.getVoiceChannelId()),
        c = (0, i.e7)([o.Z], () => (null != r ? o.Z.getMode(r) : null)),
        d = (0, s.ZP)();
    return null != e ? e : c === u.WtW.VOICE && (0, a.ap)(d) ? (n ? 'activeLight' : 'primaryLight') : n ? 'white' : 'primaryDark';
}
