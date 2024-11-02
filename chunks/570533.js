e.d(n, {
    Z: function () {
        return a;
    }
});
var i = e(192379),
    r = e(442837),
    l = e(339085),
    o = e(889564);
let u = [];
function a(t) {
    let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
    return i.useMemo(() => (null == n ? u : n.filter((n) => (0, o.Kt)(n, t))), [n, t]);
}
