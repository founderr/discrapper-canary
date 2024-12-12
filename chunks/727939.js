var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(112724),
    l = r(241915),
    u = r(981631);
let c = 48,
    d = 32,
    f = 32,
    _ = 32;
function h(e) {
    let { className: n, defaultPosition: r = u.VD2.BOTTOM_RIGHT, children: i, width: o, height: h } = e,
        [p, m] = s.useState(r);
    return (0, a.jsx)(l._, {
        className: n,
        position: p,
        id: 0,
        onMove: (e, n) => m(n),
        maxX: o,
        maxY: h,
        edgeOffsetTop: c,
        edgeOffsetBottom: d,
        edgeOffsetLeft: f,
        edgeOffsetRight: _,
        children: i
    });
}
n.Z = (0, o.Z)(h);
