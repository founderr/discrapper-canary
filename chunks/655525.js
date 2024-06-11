"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var r = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  a = s("248042"),
  l = s("673591"),
  o = s("591815");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, s = (0, a.useIsEligibleForBogoPromotion)(), n = (0, a.getBOGOPillCopy)();
  return s ? (0, r.jsx)(l.default, {
    className: i()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: n
  }) : null
}