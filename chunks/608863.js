"use strict";
n.r(t), n.d(t, {
  HamburgerButton: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var r = n("557533"),
  a = n.n(r),
  i = n("50459");
let o = e => {
  let {
    open: t = !1,
    className: n,
    ...r
  } = e;
  return (0, l.jsxs)("button", {
    type: "button",
    className: a()(i.btnHamburger, {
      [i.btnHamburgerOpen]: t
    }, n),
    ...r,
    children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
  })
}