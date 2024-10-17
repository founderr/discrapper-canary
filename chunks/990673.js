n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var s = n(382790),
    a = n(430036),
    r = n(518084),
    o = n(240038);
function l(e) {
    let { dragStart: t, dragging: n, pinned: l, locked: c } = e;
    return (0, i.jsxs)(r.ZP, {
        className: o.wrapper,
        children: [
            (0, i.jsx)(s.Z, {
                contained: !0,
                dragStart: t,
                locked: c
            }),
            (0, i.jsx)(a.Z, {
                dragStart: t,
                locked: c,
                pinned: l,
                dragging: n,
                contained: !0
            })
        ]
    });
}
