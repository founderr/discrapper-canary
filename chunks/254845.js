"use strict";
n.r(t), n.d(t, {
  LinkExternalMediumIcon: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var o = n("669491"),
  i = n("82169");
let u = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: u = o.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, i.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
      className: a
    })
  })
}