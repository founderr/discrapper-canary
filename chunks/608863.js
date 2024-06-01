"use strict";
n.r(t), n.d(t, {
  HamburgerButton: function() {
    return i
  }
});
var r = n("735250");
n("470079");
var l = n("557533"),
  o = n.n(l),
  a = n("864533");
let i = e => {
  let {
    open: t = !1,
    className: n,
    ...l
  } = e;
  return (0, r.jsxs)("button", {
    type: "button",
    className: o()(a.btnHamburger, {
      [a.btnHamburgerOpen]: t
    }, n),
    ...l,
    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
  })
}