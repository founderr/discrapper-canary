"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var i = n("669491"),
  l = n("956089"),
  r = n("782340");

function d(e) {
  let {
    className: t,
    color: n = i.default.unsafe_rawColors.BRAND_500.css,
    ...d
  } = e;
  return (0, a.jsx)(l.TextBadge, {
    ...d,
    text: r.default.Messages.BETA,
    color: n,
    className: t
  })
}