"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("403681");
t.default = e => {
  let {
    value: t = 0,
    text: n,
    className: l,
    ...r
  } = e;
  return null != n ? (0, a.jsx)("div", {
    className: s()(i.wrapper, l),
    ...r,
    children: n
  }) : t > 0 ? (0, a.jsx)("div", {
    className: s()(i.wrapper, l),
    ...r,
    children: t
  }) : null
}