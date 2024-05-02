"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("44315"),
  i = n("26290"),
  s = n("981631"),
  l = n("689938");

function o(e) {
  let {
    className: t,
    color: n = (0, r.getColor)(s.Color.BRAND_500),
    ...o
  } = e;
  return (0, a.jsx)(i.TextBadge, {
    ...o,
    text: l.default.Messages.ALPHA,
    color: n,
    className: t
  })
}