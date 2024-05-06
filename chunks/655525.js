"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var i = a("120356"),
  r = a.n(i),
  s = a("248042"),
  l = a("673591"),
  o = a("372775");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, a = (0, s.useIsEligibleForBogoPromotion)(), i = (0, s.getBOGOPillCopy)();
  return a ? (0, n.jsx)(l.default, {
    className: r()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}