"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("393586"),
  s = n("481060"),
  a = n("795548");

function o(e) {
  let {
    children: t,
    className: n,
    size: o = s.Button.Sizes.SMALL,
    ...l
  } = e;
  return (0, i.jsx)(s.Button, {
    ...l,
    color: s.Button.Colors.BRAND,
    size: o,
    className: n,
    children: (0, i.jsxs)("div", {
      className: a.button,
      children: [(0, i.jsx)(r.ShopIcon, {
        color: "white",
        height: 16,
        width: 16
      }), t]
    })
  })
}