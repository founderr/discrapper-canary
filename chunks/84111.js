"use strict";
s.r(t), s.d(t, {
  ChannelListIcon: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  i = s("331595");
let E = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: E = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ..._
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(_),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
      className: l
    })
  })
}