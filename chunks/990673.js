n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var r = n(382790),
    s = n(430036),
    o = n(518084),
    a = n(240038);
function l(e) {
    let { dragStart: t, dragging: n, pinned: l, locked: c } = e;
    return (0, i.jsxs)(o.ZP, {
        className: a.wrapper,
        children: [
            (0, i.jsx)(r.Z, {
                contained: !0,
                dragStart: t,
                locked: c
            }),
            (0, i.jsx)(s.Z, {
                dragStart: t,
                locked: c,
                pinned: l,
                dragging: n,
                contained: !0
            })
        ]
    });
}
