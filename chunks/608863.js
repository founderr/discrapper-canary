"use strict";
n.r(t), n.d(t, {
  HamburgerButton: function() {
    return a
  }
});
var r = n("735250");
n("470079");
var l = n("557533"),
  o = n.n(l),
  i = n("864533");
let a = e => {
  let {
    open: t = !1,
    className: n,
    ...l
  } = e;
  return (0, r.jsxs)("button", {
    type: "button",
    className: o()(i.btnHamburger, {
      [i.btnHamburgerOpen]: t
    }, n),
    ...l,
    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
  })
}