"use strict";
s.r(t), s.d(t, {
  MicrophoneIcon: function() {
    return l
  }
});
var r = s("37983");
s("884691");
var a = s("669491"),
  n = s("82169");
let l = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: l = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = e;
  return (0, r.jsxs)("svg", {
    ...(0, n.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
      className: i
    }), (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
      className: i
    })]
  })
}