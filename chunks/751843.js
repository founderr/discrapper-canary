var l, i, s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(481060),
  c = n(871499),
  u = n(400639);

function d(e) {
  let {
    direction: t,
    className: n,
    themeable: l,
    ...i
  } = e;
  return (0, s.jsx)(c.Z, {
    className: r()(n, u.arrow, {
      [u.up]: 0 === t
    }),
    iconComponent: o.ChevronSmallDownIcon,
    themeable: l,
    ...i
  })
}(l = i || (i = {}))[l.UP = 0] = "UP", l[l.DOWN = 1] = "DOWN", d.Directions = i, t.Z = d