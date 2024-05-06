"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("44315"),
  n = s("26290"),
  i = s("981631"),
  r = s("689938");

function o(e) {
  let {
    className: t,
    color: s = (0, l.getColor)(i.Color.BRAND_500),
    ...o
  } = e;
  return (0, a.jsx)(n.TextBadge, {
    ...o,
    text: r.default.Messages.ALPHA,
    color: s,
    className: t
  })
}