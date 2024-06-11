"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  o = n("825303");
let l = e => {
  let {
    data: t,
    disabled: n
  } = e, {
    content: r,
    className: l,
    onClick: u,
    disabled: d
  } = t;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsx)("button", {
      type: "button",
      className: s()(o.item, l),
      onClick: u,
      disabled: n || d,
      children: r
    })
  })
};
t.default = e => {
  let {
    buttons: t,
    disabled: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    role: "group",
    className: s()(o.group, r),
    children: t.map((e, t) => (0, i.jsx)(l, {
      data: e,
      disabled: n
    }, t))
  })
}