"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("960259"),
  s = n("718671"),
  i = n("325767");
t.default = (0, l.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: l = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      className: s,
      fill: l,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"
    })
  })
}, s.ScreenIcon, void 0, {
  size: 24
})