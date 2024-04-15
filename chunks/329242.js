"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("51144"),
  o = a("42545");
t.default = e => {
  let {
    user: t,
    fill: a
  } = e, s = "\xa0(@".concat(r.default.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, n.jsxs)(i.Text, {
    className: l()([o.text, {
      [o.fill]: a
    }]),
    variant: "text-md/medium",
    children: [(0, n.jsx)("span", {
      className: o.username,
      children: r.default.getName(t)
    }), (0, n.jsx)("span", {
      className: o.discriminator,
      children: s
    })]
  })
}