r.d(n, {
    Y: function () {
        return o;
    },
    o: function () {
        return l;
    }
});
var i = r(18323),
    a = r(358085),
    s = r(616922);
function o(e) {
    let n = null;
    !(0, a.isDesktop)() && (n = window.open('', '_blank')), null != n ? (n.location.href = e) : window.open(e);
}
function l(e, n) {
    o(i.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(e, n) : s.C7.WEB_OPEN(e, n));
}
