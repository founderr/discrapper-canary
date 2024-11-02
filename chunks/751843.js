var i,
    l,
    r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    o = n(481060),
    c = n(871499),
    u = n(246441);
function d(e) {
    let { direction: t, className: n, themeable: i, ...l } = e;
    return (0, r.jsx)(c.Z, {
        className: s()(n, u.arrow, { [u.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...l
    });
}
((i = l || (l = {}))[(i.UP = 0)] = 'UP'), (i[(i.DOWN = 1)] = 'DOWN'), (d.Directions = l), (t.Z = d);
