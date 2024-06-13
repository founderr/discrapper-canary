"use strict";
n.r(t), n.d(t, {
  RecordPlayerIcon: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var r = n("692547"),
  l = n("331595");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, l.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      className: o
    }), (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
      clipRule: "evenodd",
      className: o
    })]
  })
}