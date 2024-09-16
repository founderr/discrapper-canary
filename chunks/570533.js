t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(470079),
    r = t(442837),
    l = t(339085),
    o = t(889564);
let u = [];
function s(e) {
    let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == n ? u : n.filter((n) => (0, o.Kt)(n, e))), [n, e]);
}
