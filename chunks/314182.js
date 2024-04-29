"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  o = n.n(s),
  i = n("211053");
let l = r.forwardRef(function(e, t) {
  let {
    isActive: n,
    children: r
  } = e;
  return (0, a.jsx)("div", {
    className: o()(i.wrapper, {
      [i.wrapperActive]: n
    }),
    ref: t,
    children: r
  })
});
t.default = l