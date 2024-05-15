"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  l = a("248042"),
  s = a("673591"),
  o = a("591815");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, a = (0, l.useIsEligibleForBogoPromotion)(), r = (0, l.getBOGOPillCopy)();
  return a ? (0, n.jsx)(s.default, {
    className: i()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}