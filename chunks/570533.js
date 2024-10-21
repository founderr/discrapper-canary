t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(192379),
    i = t(442837),
    l = t(339085),
    o = t(889564);
let u = [];
function s(e) {
    let n = (0, i.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == n ? u : n.filter((n) => (0, o.Kt)(n, e))), [n, e]);
}
