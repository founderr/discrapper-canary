n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    o = n(339085),
    l = n(889564);
let u = [];
function a(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == t ? u : t.filter((t) => (0, l.Kt)(t, e))), [t, e]);
}
