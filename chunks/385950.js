"use strict";
i.r(l);
var n = i("735250");
i("470079");
var t = i("960259"),
  r = i("374583"),
  a = i("325767");
l.default = (0, t.replaceIcon)(function(e) {
  let {
    width: l = 24,
    height: i = 24,
    color: t = "currentColor",
    foreground: r,
    ...d
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(d),
    width: l,
    height: i,
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: t,
      className: r,
      d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    })
  })
}, r.KeyIcon, void 0, {
  size: 24
})