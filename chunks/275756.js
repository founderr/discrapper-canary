"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("960259"),
  s = n("552075"),
  a = n("325767");
t.default = (0, r.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: r = "currentColor",
    className: s,
    foreground: o,
    ...l
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, a.default)(l),
    className: s,
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      className: o,
      fill: r,
      d: "M6 22H2v-4h4v4Zm8-7h-4v7h4v-7Zm8-3h-4v10h4V12ZM16 2v2h2.59L14 8.59l-5-5-6.71 6.7 1.42 1.42L9 6.41l5 5 6-6V8h2V2h-6Z"
    })
  })
}, s.AnalyticsIcon, void 0, {
  size: 24
})