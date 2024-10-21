var i,
    s,
    a = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    c = n(871499),
    u = n(246441);
function d(e) {
    let { direction: t, className: n, themeable: i, ...s } = e;
    return (0, a.jsx)(c.Z, {
        className: r()(n, u.arrow, { [u.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...s
    });
}
((i = s || (s = {}))[(i.UP = 0)] = 'UP'), (i[(i.DOWN = 1)] = 'DOWN'), (d.Directions = s), (t.Z = d);
