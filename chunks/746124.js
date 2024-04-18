"use strict";
l.r(t);
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("132485");
let u = e => {
  let {
    data: t,
    disabled: l
  } = e, {
    content: n,
    className: u,
    onClick: o,
    disabled: d
  } = t;
  return (0, a.jsx)(i.FocusRing, {
    children: (0, a.jsx)("button", {
      type: "button",
      className: s()(r.item, u),
      onClick: o,
      disabled: l || d,
      children: n
    })
  })
};
t.default = e => {
  let {
    buttons: t,
    disabled: l,
    className: n
  } = e;
  return (0, a.jsx)("div", {
    role: "group",
    className: s()(r.group, n),
    children: t.map((e, t) => (0, a.jsx)(u, {
      data: e,
      disabled: l
    }, t))
  })
}