var i, a, s = n(735250);
n(470079);
var l = n(120356), r = n.n(l), o = n(481060), c = n(871499), d = n(242460);
function u(e) {
    let {
        direction: t,
        className: n,
        themeable: i,
        ...a
    } = e;
    return (0, s.jsx)(c.Z, {
        className: r()(n, d.arrow, { [d.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...a
    });
}
(i = a || (a = {}))[i.UP = 0] = 'UP', i[i.DOWN = 1] = 'DOWN', u.Directions = a, t.Z = u;
