"use strict";
a.r(t), a.d(t, {
  AvatarDecorationPreview: function() {
    return p
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("979554"),
  i = a("481060"),
  o = a("1585"),
  c = a("125988"),
  u = a("998502"),
  d = a("266386"),
  f = a("689938"),
  C = a("956308");
let m = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  p = e => {
    let {
      item: t,
      user: a,
      isHighlighted: s = !1,
      isPurchased: u = !1,
      avatarSize: p = i.AvatarSizes.SIZE_152
    } = e, g = (0, o.getDecorationSizeForAvatarSize)(p), E = (0, d.useCollectiblesHoverPreviewExperiment)("AvatarDecorationPreview"), {
      avatarDecorationSrc: h,
      eventHandlers: b,
      avatarPlaceholderSrc: x
    } = (0, c.default)({
      user: a,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === n.CollectiblesItemType.AVATAR_DECORATION ? t : void 0,
      size: g,
      animateOnHover: !s
    });
    return (0, l.jsx)(m, {
      ...b,
      avatarDecoration: h,
      src: E && s ? null == a ? void 0 : a.getAvatarURL(void 0, 152, !0) : x,
      imageClassName: E && s ? C.fadeInAvatarImg : void 0,
      className: r()(C.avatar, {
        [C.avatarPurchased]: u
      }),
      size: p,
      "aria-label": f.default.Messages.USER_SETTINGS_AVATAR
    })
  }