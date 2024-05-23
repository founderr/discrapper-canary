"use strict";
r.r(t), r.d(t, {
  BundlePreview: function() {
    return d
  }
});
var a = r("735250");
r("470079");
var l = r("120356"),
  o = r.n(l),
  n = r("481060"),
  s = r("876917"),
  i = r("328456"),
  c = r("616066"),
  u = r("141169");
let d = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: l,
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
      className: o()(u.profileEffectShopPreview, C),
      children: (0, a.jsx)(s.default, {
        isHovering: l,
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
        isHighlighted: l
      })
    }) : null]
  })
}