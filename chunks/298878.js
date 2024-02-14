"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var a = n("669491"),
  l = n("956089"),
  d = n("782340");

function s(e) {
  let {
    className: t,
    color: n = a.default.unsafe_rawColors.BRAND_500.css,
    ...s
  } = e;
  return (0, i.jsx)(l.TextBadge, {
    ...s,
    text: d.default.Messages.BETA,
    color: n,
    className: t
  })
}