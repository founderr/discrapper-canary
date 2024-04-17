"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("735250");
i("470079");
var r = i("44315"),
  s = i("26290"),
  a = i("981631"),
  l = i("689938");

function o(e) {
  let {
    className: t,
    color: i = (0, r.getColor)(a.Color.BRAND_500),
    ...o
  } = e;
  return (0, n.jsx)(s.TextBadge, {
    ...o,
    text: l.default.Messages.ALPHA,
    color: i,
    className: t
  })
}