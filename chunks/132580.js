"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var E = s("735250");
s("470079");
var _ = s("44315"),
  a = s("26290"),
  n = s("981631"),
  T = s("689938");

function A(e) {
  let {
    className: t,
    color: s = (0, _.getColor)(n.Color.BRAND_500),
    ...A
  } = e;
  return (0, E.jsx)(a.TextBadge, {
    ...A,
    text: T.default.Messages.ALPHA,
    color: s,
    className: t
  })
}