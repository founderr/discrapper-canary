"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("248042"),
  l = n("673591"),
  o = n("372775");

function c(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, s.useIsEligibleForBogoPromotion)(), i = (0, s.getBOGOPillCopy)();
  return n ? (0, a.jsx)(l.default, {
    className: r()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}