"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("248042"),
  l = a("673591"),
  o = a("591815");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, a = (0, i.useIsEligibleForBogoPromotion)(), r = (0, i.getBOGOPillCopy)();
  return a ? (0, n.jsx)(l.default, {
    className: s()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}