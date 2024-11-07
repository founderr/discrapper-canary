t.d(n, {
    U: function () {
        return u;
    }
});
var i = t(192379),
    r = t(695346),
    l = t(73346),
    o = t(834431);
function u(e, n) {
    let { shouldAnimate: t = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = r.QK.useSetting(),
        a = (0, o.n)(),
        s = t && a && u;
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, n, s ? void 0 : 'webp');
    }, [n, e, s]);
}
