"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("442970");
t.default = s.memo(function(e) {
  let {
    onClick: t,
    children: a,
    className: s
  } = e;
  return (0, n.jsx)(r.Button, {
    className: i()(o.button, s),
    wrapperClassName: o.buttonWrapper,
    look: r.Button.Looks.FILLED,
    color: r.Button.Colors.BRAND_NEW,
    onClick: t,
    children: a
  })
})