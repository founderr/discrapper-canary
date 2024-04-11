"use strict";
r.r(t), r.d(t, {
  HamburgerButton: function() {
    return o
  }
});
var a = r("735250");
r("470079");
var n = r("557533"),
  i = r.n(n),
  l = r("50459");
let o = e => {
  let {
    open: t = !1,
    className: r,
    ...n
  } = e;
  return (0, a.jsxs)("button", {
    type: "button",
    className: i()(l.btnHamburger, {
      [l.btnHamburgerOpen]: t
    }, r),
    ...n,
    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
  })
}