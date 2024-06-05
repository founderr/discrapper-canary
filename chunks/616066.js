"use strict";
r.r(t), r.d(t, {
  AvatarDecorationPreview: function() {
    return g
  }
});
var a = r("735250");
r("470079");
var n = r("120356"),
  o = r.n(n),
  l = r("979554"),
  s = r("481060"),
  i = r("1585"),
  c = r("125988"),
  u = r("998502"),
  d = r("266386"),
  f = r("689938"),
  p = r("956308");
let C = u.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
  g = e => {
    let {
      item: t,
      user: r,
      isHighlighted: n = !1,
      isPurchased: u = !1,
      avatarSize: g = s.AvatarSizes.SIZE_152,
      avatarPlaceholderSrc: v
    } = e, b = (0, i.getDecorationSizeForAvatarSize)(g), m = (0, d.useCollectiblesHoverPreviewExperiment)("AvatarDecorationPreview"), {
      avatarDecorationSrc: h,
      eventHandlers: y,
      avatarPlaceholderSrc: E
    } = (0, c.default)({
      user: r,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === l.CollectiblesItemType.AVATAR_DECORATION ? t : void 0,
      size: b,
      animateOnHover: !n
    });
    return (0, a.jsx)(C, {
      ...y,
      avatarDecoration: h,
      src: m && n ? null == r ? void 0 : r.getAvatarURL(void 0, 152, !0) : null != v ? v : E,
      imageClassName: m && n ? p.fadeInAvatarImg : void 0,
      className: o()(p.avatar, {
        [p.avatarPurchased]: u
      }),
      size: g,
      "aria-label": f.default.Messages.USER_SETTINGS_AVATAR
    })
  }