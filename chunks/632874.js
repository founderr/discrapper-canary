"use strict";
i.r(t), i.d(t, {
  PlusSmallIcon: function() {
    return r
  }
});
var s = i("37983");
i("884691");
var n = i("669491"),
  l = i("82169");
let r = e => {
  let {
    width: t = 24,
    height: i = 24,
    color: r = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...a
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
      className: o
    })
  })
}