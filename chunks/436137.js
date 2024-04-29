"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("108913");
t.default = s.memo(function(e) {
  let {
    onClick: t,
    children: a
  } = e;
  return (0, n.jsx)(l.Button, {
    className: i.button,
    wrapperClassName: i.buttonWrapper,
    look: l.Button.Looks.FILLED,
    color: l.Button.Colors.BRAND_NEW,
    onClick: t,
    children: a
  })
})