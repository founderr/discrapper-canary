"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("248042"),
  l = n("673591"),
  o = n("591815");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, i.useIsEligibleForBogoPromotion)(), r = (0, i.getBOGOPillCopy)();
  return n ? (0, a.jsx)(l.default, {
    className: s()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}