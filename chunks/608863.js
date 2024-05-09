"use strict";
r.r(t), r.d(t, {
  HamburgerButton: function() {
    return o
  }
});
var a = r("735250");
r("470079");
var i = r("557533"),
  l = r.n(i),
  n = r("864533");
let o = e => {
  let {
    open: t = !1,
    className: r,
    ...i
  } = e;
  return (0, a.jsxs)("button", {
    type: "button",
    className: l()(n.btnHamburger, {
      [n.btnHamburgerOpen]: t
    }, r),
    ...i,
    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
  })
}