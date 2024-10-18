n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(470079),
    s = n(26033),
    a = n(897674),
    l = n(561308),
    r = n(206583);
function o(e) {
    let t = (0, a.Z)(r.YN.GLOBAL_FEED);
    return (0, i.useMemo)(() => (null == t ? void 0 : t.filter((t) => !(0, l.kr)(t) && (0, s.LP)(t) && t.author_id === e)), [t, e]);
}
