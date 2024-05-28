"use strict";
a.r(t), a.d(t, {
  BundlePreview: function() {
    return d
  }
});
var r = a("735250");
a("470079");
var s = a("120356"),
  n = a.n(s),
  o = a("481060"),
  l = a("876917"),
  i = a("328456"),
  c = a("616066"),
  u = a("141169");
let d = e => {
  let {
    product: t,
    isPurchased: a,
    isHighlighted: s,
    user: d,
    forCollectedModal: f,
    profileEffectClassName: C
  } = e, {
    firstProfileEffect: p,
    firstAvatarDecoration: b
  } = (0, i.useShopProductItems)(t);
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [null != p ? (0, r.jsx)("div", {
      className: n()(u.profileEffectShopPreview, C),
      children: (0, r.jsx)(l.default, {
        isHovering: s,
        profileEffectId: p.id,
        isPurchased: a,
        forCollectedModal: f,
        removeSetHeight: !0
      })
    }) : null, null != b ? (0, r.jsx)("div", {
      className: u.avatarDecorationPreview,
      children: (0, r.jsx)(c.AvatarDecorationPreview, {
        item: b,
        user: d,
        avatarSize: o.AvatarSizes.SIZE_120,
        isPurchased: a,
        isHighlighted: s
      })
    }) : null]
  })
}