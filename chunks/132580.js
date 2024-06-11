"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("44315"),
  i = s("981631"),
  r = s("689938");

function o(e) {
  let {
    className: t,
    color: s = (0, n.getColor)(i.Color.BRAND_500),
    ...o
  } = e;
  return (0, a.jsx)(l.TextBadge, {
    ...o,
    text: r.default.Messages.ALPHA,
    color: s,
    className: t
  })
}