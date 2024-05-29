"use strict";
r.r(t), r.d(t, {
  AvatarDecorationPreview: function() {
    return g
  }
});
var a = r("735250");
r("470079");
var o = r("120356"),
  l = r.n(o),
  n = r("979554"),
  s = r("481060"),
  i = r("1585"),
  c = r("125988"),
  u = r("998502"),
  d = r("266386"),
  f = r("689938"),
  C = r("956308");
let p = u.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
  g = e => {
    let {
      item: t,
      user: r,
      isHighlighted: o = !1,
      isPurchased: u = !1,
      avatarSize: g = s.AvatarSizes.SIZE_152,
      avatarPlaceholderSrc: v
    } = e, b = (0, i.getDecorationSizeForAvatarSize)(g), m = (0, d.useCollectiblesHoverPreviewExperiment)("AvatarDecorationPreview"), {
      avatarDecorationSrc: h,
      eventHandlers: y,
      avatarPlaceholderSrc: E
    } = (0, c.default)({
      user: r,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === n.CollectiblesItemType.AVATAR_DECORATION ? t : void 0,
      size: b,
      animateOnHover: !o
    });
    return (0, a.jsx)(p, {
      ...y,
      avatarDecoration: h,
      src: m && o ? null == r ? void 0 : r.getAvatarURL(void 0, 152, !0) : null != v ? v : E,
      imageClassName: m && o ? C.fadeInAvatarImg : void 0,
      className: l()(C.avatar, {
        [C.avatarPurchased]: u
      }),
      size: g,
      "aria-label": f.default.Messages.USER_SETTINGS_AVATAR
    })
  }