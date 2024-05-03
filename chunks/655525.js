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
  s = a("248042"),
  l = a("673591"),
  o = a("372775");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, a = (0, s.useIsEligibleForBogoPromotion)(), r = (0, s.getBOGOPillCopy)();
  return a ? (0, n.jsx)(l.default, {
    className: i()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}