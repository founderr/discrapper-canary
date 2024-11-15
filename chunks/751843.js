var i,
    l,
    a = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(481060),
    c = n(871499),
    d = n(32947);
function u(e) {
    let { direction: t, className: n, themeable: i, ...l } = e;
    return (0, a.jsx)(c.Z, {
        className: s()(n, d.arrow, { [d.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...l
    });
}
((i = l || (l = {}))[(i.UP = 0)] = 'UP'), (i[(i.DOWN = 1)] = 'DOWN'), (u.Directions = l), (t.Z = u);
