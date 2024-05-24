"use strict";
r.r(t), r.d(t, {
  BundlePreview: function() {
    return d
  }
});
var a = r("735250");
r("470079");
var o = r("120356"),
  l = r.n(o),
  n = r("481060"),
  s = r("876917"),
  i = r("328456"),
  c = r("616066"),
  u = r("141169");
let d = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: o,
    user: d,
    forCollectedModal: f,
    profileEffectClassName: C
  } = e, {
    firstProfileEffect: p,
    firstAvatarDecoration: g
  } = (0, i.useShopProductItems)(t);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [null != p ? (0, a.jsx)("div", {
      className: l()(u.profileEffectShopPreview, C),
      children: (0, a.jsx)(s.default, {
        isHovering: o,
        profileEffectId: p.id,
        isPurchased: r,
        forCollectedModal: f,
        removeSetHeight: !0
      })
    }) : null, null != g ? (0, a.jsx)("div", {
      className: u.avatarDecorationPreview,
      children: (0, a.jsx)(c.AvatarDecorationPreview, {
        item: g,
        user: d,
        avatarSize: n.AvatarSizes.SIZE_120,
        isPurchased: r,
        isHighlighted: o
      })
    }) : null]
  })
}