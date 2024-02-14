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
  i = s("782340"),
  a = s("518377");
let u = Object.freeze({
  DEFAULT: a.default,
  FILLED: a.filled
});

function c(e) {
  let {
    className: t,
    onClick: s,
    "aria-label": l,
    look: c = u.DEFAULT
  } = e;
  return (0, n.jsx)(r.Clickable, {
    "aria-label": null != l ? l : i.default.Messages.REMOVE,
    className: o(a.button, c, t),
    onClick: s
  })
}
c.Looks = u