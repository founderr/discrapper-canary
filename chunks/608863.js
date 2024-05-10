"use strict";
e.r(s), e.d(s, {
  HamburgerButton: function() {
    return t
  }
});
var S = e("735250");
e("470079");
var i = e("557533"),
  n = e.n(i),
  _ = e("864533");
let t = E => {
  let {
    open: s = !1,
    className: e,
    ...i
  } = E;
  return (0, S.jsxs)("button", {
    type: "button",
    className: n()(_.btnHamburger, {
      [_.btnHamburgerOpen]: s
    }, e),
    ...i,
    children: [(0, S.jsx)("span", {}), (0, S.jsx)("span", {}), (0, S.jsx)("span", {}), (0, S.jsx)("span", {}), (0, S.jsx)("span", {}), (0, S.jsx)("span", {})]
  })
}