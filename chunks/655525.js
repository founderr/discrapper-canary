"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("735250");
n("470079");
var i = n("803997"),
  s = n.n(i),
  a = n("248042"),
  l = n("673591"),
  o = n("712634");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, a.useIsEligibleForBogoPromotion)(), i = (0, a.getBOGOPillCopy)();
  return n ? (0, r.jsx)(l.default, {
    className: s()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}