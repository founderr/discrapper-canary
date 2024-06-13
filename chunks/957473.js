"use strict";
l.r(e), l.d(e, {
  TimerIcon: function() {
    return n
  }
});
var s = l("735250");
l("470079");
var r = l("692547"),
  a = l("331595");
let n = t => {
  let {
    width: e = 24,
    height: l = 24,
    color: n = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = t;
  return (0, s.jsx)("svg", {
    ...(0, a.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      fillRule: "evenodd",
      d: "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
      clipRule: "evenodd",
      className: i
    })
  })
}