n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(470079),
    l = n(26033),
    r = n(897674),
    a = n(561308),
    s = n(206583);
function o(e) {
    let t = (0, r.Z)(s.YN.GLOBAL_FEED);
    return (0, i.useMemo)(() => (null == t ? void 0 : t.filter((t) => !(0, a.kr)(t) && (0, l.LP)(t) && t.author_id === e)), [t, e]);
}
