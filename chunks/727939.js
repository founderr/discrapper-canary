var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(112724),
    s = n(241915),
    l = n(981631),
    u = n(354459);
let c = 48,
    d = 32,
    _ = 32,
    E = 32;
function f(e) {
    let { className: t, defaultPosition: n = l.VD2.BOTTOM_RIGHT, children: r, width: o, height: f } = e,
        [h, p] = a.useState(n);
    return (0, i.jsx)(s._, {
        className: t,
        position: h,
        id: 0,
        type: u.cL.VIDEO,
        onMove: (e, t) => p(t),
        maxX: o,
        maxY: f,
        edgeOffsetTop: c,
        edgeOffsetBottom: d,
        edgeOffsetLeft: _,
        edgeOffsetRight: E,
        children: r
    });
}
t.Z = (0, o.Z)(f);
