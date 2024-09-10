n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(347469),
    s = n(354211);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: a } = e,
        l = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: a,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, r.jsx)('div', {
        onPointerDown: l,
        className: s.resizeHandle
    });
}
function u(e) {
    let { children: t, className: n, initialHeight: l, minHeight: o } = e,
        u = a.useRef(null),
        [d, h] = a.useState(l);
    return (0, r.jsxs)('div', {
        ref: u,
        className: s.container,
        style: {
            minHeight: o,
            height: d
        },
        children: [
            (0, r.jsx)(c, {
                resizableNode: u,
                minHeight: o,
                onResize: h
            }),
            (0, r.jsx)('div', {
                className: i()(s.subPanelContent, n),
                children: t
            })
        ]
    });
}
