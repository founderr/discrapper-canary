"use strict";
s.r(t), s.d(t, {
  FileWarningIcon: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("692547"),
  n = s("331595");
let i = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: i = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M21.65 13.63c.1.17.35.1.35-.1V10.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5.49c.27 0 .5-.22.54-.5.06-.32.18-.65.37-.97l3.95-6.9a3.06 3.06 0 0 1 5.3 0Zm.05-5.7c.01.04 0 .07-.04.07H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Zm-7.57 13.6 3.96-6.9c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48Zm3.93-4.48a.5.5 0 0 1 .5-.55h.89c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd",
      className: r
    })
  })
}