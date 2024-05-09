"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("481060"),
  o = n("108913");
t.default = s.memo(function(e) {
  let {
    onClick: t,
    children: n,
    className: s
  } = e;
  return (0, a.jsx)(r.Button, {
    className: l()(o.button, s),
    wrapperClassName: o.buttonWrapper,
    look: r.Button.Looks.FILLED,
    color: r.Button.Colors.BRAND_NEW,
    onClick: t,
    children: n
  })
})