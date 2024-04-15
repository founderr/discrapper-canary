"use strict";
t.r(r), t.d(r, {
  HamburgerButton: function() {
    return o
  }
});
var a = t("735250");
t("470079");
var n = t("557533"),
  i = t.n(n),
  l = t("50459");
let o = e => {
  let {
    open: r = !1,
    className: t,
    ...n
  } = e;
  return (0, a.jsxs)("button", {
    type: "button",
    className: i()(l.btnHamburger, {
      [l.btnHamburgerOpen]: r
    }, t),
    ...n,
    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
  })
}