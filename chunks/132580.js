"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("44315"),
  i = a("26290"),
  s = a("981631"),
  l = a("689938");

function o(e) {
  let {
    className: t,
    color: a = (0, r.getColor)(s.Color.BRAND_500),
    ...o
  } = e;
  return (0, n.jsx)(i.TextBadge, {
    ...o,
    text: l.default.Messages.ALPHA,
    color: a,
    className: t
  })
}