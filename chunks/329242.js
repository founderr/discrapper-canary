var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(51144),
  o = s(452183);
t.Z = e => {
  let {
    user: t,
    fill: s
  } = e, a = "\xa0(@".concat(l.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, n.jsxs)(r.Text, {
    className: i()([o.text, {
      [o.fill]: s
    }]),
    variant: "text-md/medium",
    children: [(0, n.jsx)("span", {
      className: o.username,
      children: l.ZP.getName(t)
    }), (0, n.jsx)("span", {
      className: o.discriminator,
      children: a
    })]
  })
}