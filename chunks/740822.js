"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var l = s("449918"),
  n = s("956089"),
  i = s("49111"),
  r = s("782340");

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