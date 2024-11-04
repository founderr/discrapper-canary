n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(382790),
    s = n(430036),
    l = n(518084),
    a = n(240038);
function o(e) {
    let { dragStart: t, dragging: n, pinned: o, locked: c } = e;
    return (0, i.jsxs)(l.ZP, {
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
                pinned: o,
                dragging: n,
                contained: !0
            })
        ]
    });
}
