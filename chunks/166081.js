e.d(n, {
    U: function () {
        return l;
    }
});
var a = e(192379),
    i = e(695346),
    r = e(73346),
    o = e(834431);
function l(t, n) {
    let { shouldAnimate: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = i.QK.useSetting(),
        c = (0, o.n)(),
        s = e && c && l;
    return a.useMemo(() => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, r._W)(t.application_id, t.image_asset, n, s ? void 0 : 'webp');
    }, [n, t, s]);
}
