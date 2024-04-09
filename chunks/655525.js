"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  a = n.n(r),
  s = n("248042"),
  l = n("673591"),
  o = n("712634");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, s.useIsEligibleForBogoPromotion)(), r = (0, s.getBOGOPillCopy)();
  return n ? (0, i.jsx)(l.default, {
    className: a()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}