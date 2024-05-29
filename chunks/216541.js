"use strict";
r.r(t), r.d(t, {
  BundlePreview: function() {
    return g
  }
});
var a = r("735250");
r("470079");
var o = r("120356"),
  l = r.n(o),
  n = r("780384"),
  s = r("481060"),
  i = r("410030"),
  c = r("876917"),
  u = r("328456"),
  d = r("616066"),
  f = r("141169"),
  C = r("63243"),
  p = r("244488");
let g = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: o,
    user: g,
    forCollectedModal: v,
    profileEffectClassName: b
  } = e, {
    firstProfileEffect: m,
    firstAvatarDecoration: h
  } = (0, u.useShopProductItems)(t), y = (0, i.default)(), E = (0, n.isThemeLight)(y);
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [null != m ? (0, a.jsx)("div", {
      className: l()(f.profileEffectShopPreview, b),
      children: (0, a.jsx)(c.default, {
        isHovering: o,
        profileEffectId: m.id,
        isPurchased: r,
        forCollectedModal: v,
        removeSetHeight: !0
      })
    }) : null, null != h ? (0, a.jsx)("div", {
      className: f.avatarDecorationPreview,
      children: (0, a.jsx)(d.AvatarDecorationPreview, {
        item: h,
        user: g,
        avatarSize: s.AvatarSizes.SIZE_120,
        isPurchased: r,
        isHighlighted: o,
        avatarPlaceholderSrc: E ? p : C
      })
    }) : null]
  })
}