"use strict";
n.r(t);
var s = n("735250");
n("470079");
var i = n("960259"),
  l = n("902190"),
  a = n("325767");
t.default = (0, i.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: i = "currentColor",
    className: l,
    foreground: r,
    ...u
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, a.default)(u),
    className: l,
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      className: r,
      fill: i,
      d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
    })
  })
}, l.CompassIcon, void 0, {
  size: 24
})