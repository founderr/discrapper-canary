var i,
    l,
    r = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    o = n(481060),
    c = n(871499),
    u = n(246441);
function d(e) {
    let { direction: t, className: n, themeable: i, ...l } = e;
    return (0, r.jsx)(c.Z, {
        className: a()(n, u.arrow, { [u.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...l
    });
}
((i = l || (l = {}))[(i.UP = 0)] = 'UP'), (i[(i.DOWN = 1)] = 'DOWN'), (d.Directions = l), (t.Z = d);
