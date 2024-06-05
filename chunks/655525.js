"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var s = r("735250");
r("470079");
var n = r("120356"),
  l = r.n(n),
  i = r("248042"),
  a = r("673591"),
  o = r("591815");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, r = (0, i.useIsEligibleForBogoPromotion)(), n = (0, i.getBOGOPillCopy)();
  return r ? (0, s.jsx)(a.default, {
    className: l()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: n
  }) : null
}