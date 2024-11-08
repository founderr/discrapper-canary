t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(192379),
    r = t(442837),
    l = t(339085),
    o = t(889564);
let u = [];
function a(e) {
    let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == n ? u : n.filter((n) => (0, o.Kt)(n, e))), [n, e]);
}
