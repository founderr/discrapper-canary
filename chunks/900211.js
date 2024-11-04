n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(347469),
    s = n(136824);
function a(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, minHeight: o, maxHeight: c } = e,
        [u, d] = l.useState(null);
    l.useEffect(() => {
        var e, n;
        d(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null);
    }, [t]);
    let h = (0, r.Z)({
        initialElementDimension: u,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: a,
        orientation: r.y.VERTICAL_BOTTOM
    });
    return (0, i.jsx)('div', {
        onMouseDown: h,
        className: s.resizeHandle
    });
}
