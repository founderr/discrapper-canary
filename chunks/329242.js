"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("51144"),
  u = s("757024");
t.default = e => {
  let {
    user: t,
    fill: s
  } = e, n = "\xa0(@".concat(r.default.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, a.jsxs)(i.Text, {
    className: l()([u.text, {
      [u.fill]: s
    }]),
    variant: "text-md/medium",
    children: [(0, a.jsx)("span", {
      className: u.username,
      children: r.default.getName(t)
    }), (0, a.jsx)("span", {
      className: u.discriminator,
      children: n
    })]
  })
}