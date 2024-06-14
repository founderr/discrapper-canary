"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  i = s("481060"),
  r = s("51144"),
  o = s("757024");
t.default = e => {
  let {
    user: t,
    fill: s
  } = e, a = "\xa0(@".concat(r.default.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, n.jsxs)(i.Text, {
    className: l()([o.text, {
      [o.fill]: s
    }]),
    variant: "text-md/medium",
    children: [(0, n.jsx)("span", {
      className: o.username,
      children: r.default.getName(t)
    }), (0, n.jsx)("span", {
      className: o.discriminator,
      children: a
    })]
  })
}