"use strict";
a.r(t), a.d(t, {
  BundlePreview: function() {
    return c
  }
});
var l = a("735250");
a("470079");
var s = a("481060"),
  r = a("876917"),
  n = a("539861"),
  i = a("616066"),
  o = a("141169");
let c = e => {
  let {
    product: t,
    isPurchased: a,
    isHighlighted: c,
    user: u
  } = e, {
    firstProfileEffect: d,
    firstAvatarDecoration: f
  } = (0, n.useProductItems)(t);
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [null != d ? (0, l.jsx)("div", {
      className: o.profileEffectShopPreview,
      children: (0, l.jsx)(r.default, {
        isHovering: c,
        profileEffectId: d.id,
        isPurchased: a,
        removeSetHeight: !0
      })
    }) : null, null != f ? (0, l.jsx)("div", {
      className: o.avatarDecorationPreview,
      children: (0, l.jsx)(i.AvatarDecorationPreview, {
        item: f,
        user: u,
        avatarSize: s.AvatarSizes.SIZE_120,
        isPurchased: a,
        isHighlighted: c
      })
    }) : null]
  })
}