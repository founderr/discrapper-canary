var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(112724),
    s = n(241915),
    l = n(981631);
let u = 48,
    c = 32,
    d = 32,
    _ = 32;
function E(e) {
    let { className: t, defaultPosition: n = l.VD2.BOTTOM_RIGHT, children: r, width: o, height: E } = e,
        [f, h] = a.useState(n);
    return (0, i.jsx)(s._, {
        className: t,
        position: f,
        id: 0,
        onMove: (e, t) => h(t),
        maxX: o,
        maxY: E,
        edgeOffsetTop: u,
        edgeOffsetBottom: c,
        edgeOffsetLeft: d,
        edgeOffsetRight: _,
        children: r
    });
}
t.Z = (0, o.Z)(E);
