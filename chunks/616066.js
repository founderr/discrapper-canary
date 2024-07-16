n.d(t, {
  R: function() {
return C;
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  l = n(979554),
  i = n(481060),
  s = n(1585),
  c = n(125988),
  d = n(998502),
  u = n(266386),
  f = n(689938),
  p = n(949727);
let g = d.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  C = e => {
let {
  item: t,
  user: n,
  isHighlighted: a = !1,
  isPurchased: d = !1,
  avatarSize: C = i.AvatarSizes.SIZE_152,
  avatarPlaceholderSrc: v
} = e, E = (0, s.y9)(C), b = (0, u.c)('AvatarDecorationPreview'), {
  avatarDecorationSrc: h,
  eventHandlers: m,
  avatarPlaceholderSrc: A
} = (0, c.Z)({
  user: n,
  avatarDecorationOverride: (null == t ? void 0 : t.type) === l.Z.AVATAR_DECORATION ? t : void 0,
  size: E,
  onlyAnimateOnHover: !a
});
return (0, r.jsx)(g, {
  ...m,
  avatarDecoration: h,
  src: b && a ? null == n ? void 0 : n.getAvatarURL(void 0, 152, !0) : null != v ? v : A,
  imageClassName: b && a ? p.fadeInAvatarImg : void 0,
  className: o()(p.avatar, {
    [p.avatarPurchased]: d
  }),
  size: C,
  'aria-label': f.Z.Messages.USER_SETTINGS_AVATAR
});
  };