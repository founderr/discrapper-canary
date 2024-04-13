"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var n = i("735250");
i("470079");
var r = i("803997"),
  s = i.n(r),
  a = i("248042"),
  l = i("673591"),
  o = i("712634");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, i = (0, a.useIsEligibleForBogoPromotion)(), r = (0, a.getBOGOPillCopy)();
  return i ? (0, n.jsx)(l.default, {
    className: s()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}