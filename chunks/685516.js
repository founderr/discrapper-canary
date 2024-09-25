n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(740078),
    i = n(365100),
    a = n(558376),
    o = n(620720),
    s = n(343713),
    l = n(285363),
    u = n(874900),
    c = n(882159),
    d = n(175922),
    _ = n(660027),
    E = n(67966),
    f = n(316138),
    h = n(6138),
    p = n(894417);
function m(e, t) {
    var n = (0, d.Z)(e, !1, 'fixed' === t);
    return (n.top = n.top + e.clientTop), (n.left = n.left + e.clientLeft), (n.bottom = n.top + e.clientHeight), (n.right = n.left + e.clientWidth), (n.width = e.clientWidth), (n.height = e.clientHeight), (n.x = n.left), (n.y = n.top), n;
}
function I(e, t, n) {
    return t === r.Pj ? (0, h.Z)((0, i.Z)(e, n)) : (0, c.kK)(t) ? m(t, n) : (0, h.Z)((0, a.Z)((0, l.Z)(e)));
}
function T(e) {
    var t = (0, o.Z)((0, _.Z)(e)),
        n = ['absolute', 'fixed'].indexOf((0, u.Z)(e).position) >= 0 && (0, c.Re)(e) ? (0, s.Z)(e) : e;
    return (0, c.kK)(n)
        ? t.filter(function (e) {
              return (0, c.kK)(e) && (0, E.Z)(e, n) && 'body' !== (0, f.Z)(e);
          })
        : [];
}
function g(e, t, n, r) {
    var i = [].concat('clippingParents' === t ? T(e) : [].concat(t), [n]),
        a = i[0],
        o = i.reduce(
            function (t, n) {
                var i = I(e, n, r);
                return (t.top = (0, p.Fp)(i.top, t.top)), (t.right = (0, p.VV)(i.right, t.right)), (t.bottom = (0, p.VV)(i.bottom, t.bottom)), (t.left = (0, p.Fp)(i.left, t.left)), t;
            },
            I(e, a, r)
        );
    return (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o;
}
