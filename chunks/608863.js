"use strict";
n.r(t), n.d(t, {
  HamburgerButton: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  s = n.n(r),
  a = n("864533");
let o = e => {
  let {
    open: t = !1,
    className: n,
    ...r
  } = e;
  return (0, i.jsxs)("button", {
    type: "button",
    className: s()(a.btnHamburger, {
      [a.btnHamburgerOpen]: t
    }, n),
    ...r,
    children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
  })
}