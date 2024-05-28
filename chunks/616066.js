"use strict";
a.r(t), a.d(t, {
  AvatarDecorationPreview: function() {
    return b
  }
});
var r = a("735250");
a("470079");
var s = a("120356"),
  n = a.n(s),
  o = a("979554"),
  l = a("481060"),
  i = a("1585"),
  c = a("125988"),
  u = a("998502"),
  d = a("266386"),
  f = a("689938"),
  C = a("956308");
let p = u.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar,
  b = e => {
    let {
      item: t,
      user: a,
      isHighlighted: s = !1,
      isPurchased: u = !1,
      avatarSize: b = l.AvatarSizes.SIZE_152
    } = e, g = (0, i.getDecorationSizeForAvatarSize)(b), E = (0, d.useCollectiblesHoverPreviewExperiment)("AvatarDecorationPreview"), {
      avatarDecorationSrc: I,
      eventHandlers: T,
      avatarPlaceholderSrc: S
    } = (0, c.default)({
      user: a,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === o.CollectiblesItemType.AVATAR_DECORATION ? t : void 0,
      size: g,
      animateOnHover: !s
    });
    return (0, r.jsx)(p, {
      ...T,
      avatarDecoration: I,
      src: E && s ? null == a ? void 0 : a.getAvatarURL(void 0, 152, !0) : S,
      imageClassName: E && s ? C.fadeInAvatarImg : void 0,
      className: n()(C.avatar, {
        [C.avatarPurchased]: u
      }),
      size: b,
      "aria-label": f.default.Messages.USER_SETTINGS_AVATAR
    })
  }