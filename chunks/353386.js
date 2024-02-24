"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var a = r("37983");
r("884691");
var n = r("421898"),
  i = r.n(n),
  l = r("401921"),
  o = e => {
    let {
      open: t = !1,
      className: r,
      ...n
    } = e;
    return (0, a.jsxs)("button", {
      type: "button",
      className: i(l.btnHamburger, {
        [l.btnHamburgerOpen]: t
      }, r),
      ...n,
      children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
    })
  }