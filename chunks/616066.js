n.d(t, {
  R: function() {
return C;
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  i = n(979554),
  l = n(481060),
  s = n(1585),
  c = n(125988),
  d = n(998502),
  u = n(266386),
  f = n(689938),
  g = n(949727);
let p = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar,
  C = e => {
let {
  item: t,
  user: n,
  isHighlighted: a = !1,
  isPurchased: d = !1,
  avatarSize: C = l.AvatarSizes.SIZE_152,
  avatarPlaceholderSrc: m
} = e, v = (0, s.y9)(C), E = (0, u.c)('AvatarDecorationPreview'), {
  avatarDecorationSrc: h,
  eventHandlers: b,
  avatarPlaceholderSrc: y
} = (0, c.Z)({
  user: n,
  avatarDecorationOverride: (null == t ? void 0 : t.type) === i.Z.AVATAR_DECORATION ? t : void 0,
  size: v,
  onlyAnimateOnHover: !a
});
return (0, r.jsx)(p, {
  ...b,
  avatarDecoration: h,
  src: E && a ? null == n ? void 0 : n.getAvatarURL(void 0, 152, !0) : null != m ? m : y,
  imageClassName: E && a ? g.fadeInAvatarImg : void 0,
  className: o()(g.avatar, {
    [g.avatarPurchased]: d
  }),
  size: C,
  'aria-label': f.Z.Messages.USER_SETTINGS_AVATAR
});
  };