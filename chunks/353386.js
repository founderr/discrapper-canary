"use strict";
n.r(l), n.d(l, {
  default: function() {
    return i
  }
});
var r = n("37983");
n("884691");
var t = n("421898"),
  a = n.n(t),
  o = n("249907"),
  i = e => {
    let {
      open: l = !1,
      className: n,
      ...t
    } = e;
    return (0, r.jsxs)("button", {
      type: "button",
      className: a(o.btnHamburger, {
        [o.btnHamburgerOpen]: l
      }, n),
      ...t,
      children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
    })
  }