"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("37983");
s("884691");
var l = s("414456"),
  o = s.n(l),
  r = s("77078"),
  a = s("782340"),
  i = s("518377");
let u = Object.freeze({
  DEFAULT: i.default,
  FILLED: i.filled
});

function c(e) {
  let {
    className: t,
    onClick: s,
    "aria-label": l,
    look: c = u.DEFAULT
  } = e;
  return (0, n.jsx)(r.Clickable, {
    "aria-label": null != l ? l : a.default.Messages.REMOVE,
    className: o(i.button, c, t),
    onClick: s
  })
}
c.Looks = u