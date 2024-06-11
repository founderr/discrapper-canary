"use strict";
n.r(t);
var i = n("735250");
n("470079");
var a = n("960259"),
  s = n("718671"),
  r = n("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: a = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      className: s,
      fill: a,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"
    })
  })
}, s.ScreenIcon, void 0, {
  size: 24
})