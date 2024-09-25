t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(470079),
    r = t(442837),
    l = t(339085),
    s = t(889564);
let o = [];
function u(e) {
    let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == n ? o : n.filter((n) => (0, s.Kt)(n, e))), [n, e]);
}
