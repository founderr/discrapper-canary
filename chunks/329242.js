var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  r = n(51144),
  c = n(452183);
t.Z = e => {
  let {
    user: t,
    fill: n
  } = e, a = "\xa0(@".concat(r.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, s.jsxs)(l.Text, {
    className: i()([c.text, {
      [c.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, s.jsx)("span", {
      className: c.username,
      children: r.ZP.getName(t)
    }), (0, s.jsx)("span", {
      className: c.discriminator,
      children: a
    })]
  })
}