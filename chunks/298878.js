"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("669491"),
  d = n("956089"),
  s = n("782340");

function i(e) {
  let {
    className: t,
    color: n = l.default.unsafe_rawColors.BRAND_500.css,
    ...i
  } = e;
  return (0, a.jsx)(d.TextBadge, {
    ...i,
    text: s.default.Messages.BETA,
    color: n,
    className: t
  })
}