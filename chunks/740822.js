"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("449918"),
  l = n("956089"),
  s = n("49111"),
  a = n("782340");

function o(e) {
  let {
    className: t,
    color: n = (0, i.getColor)(s.Color.BRAND_500),
    ...o
  } = e;
  return (0, r.jsx)(l.TextBadge, {
    ...o,
    text: a.default.Messages.ALPHA,
    color: n,
    className: t
  })
}