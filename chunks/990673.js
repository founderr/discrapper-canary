n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(382790),
    r = n(430036),
    a = n(518084),
    l = n(176259);
function o(e) {
    let { dragStart: t, dragging: n, pinned: o, locked: c } = e;
    return (0, i.jsxs)(a.ZP, {
        className: l.wrapper,
        children: [
            (0, i.jsx)(s.Z, {
                contained: !0,
                dragStart: t,
                locked: c
            }),
            (0, i.jsx)(r.Z, {
                dragStart: t,
                locked: c,
                pinned: o,
                dragging: n,
                contained: !0
            })
        ]
    });
}
