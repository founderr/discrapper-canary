"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("44315"),
  s = n("26290"),
  a = n("981631"),
  l = n("689938");

function o(e) {
  let {
    className: t,
    color: n = (0, r.getColor)(a.Color.BRAND_500),
    ...o
  } = e;
  return (0, i.jsx)(s.TextBadge, {
    ...o,
    text: l.default.Messages.ALPHA,
    color: n,
    className: t
  })
}