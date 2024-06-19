n.d(t, {
  R: function() {
    return v
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
  p = n(514174);
let g = d.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  v = e => {
    let {
      item: t,
      user: n,
      isHighlighted: a = !1,
      isPurchased: d = !1,
      avatarSize: v = i.AvatarSizes.SIZE_152,
      avatarPlaceholderSrc: C
    } = e, h = (0, s.y9)(v), E = (0, u.c)("AvatarDecorationPreview"), {
      avatarDecorationSrc: b,
      eventHandlers: m,
      avatarPlaceholderSrc: y
    } = (0, c.Z)({
      user: n,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === l.Z.AVATAR_DECORATION ? t : void 0,
      size: h,
      animateOnHover: !a
    });
    return (0, r.jsx)(g, {
      ...m,
      avatarDecoration: b,
      src: E && a ? null == n ? void 0 : n.getAvatarURL(void 0, 152, !0) : null != C ? C : y,
      imageClassName: E && a ? p.fadeInAvatarImg : void 0,
      className: o()(p.avatar, {
        [p.avatarPurchased]: d
      }),
      size: v,
      "aria-label": f.Z.Messages.USER_SETTINGS_AVATAR
    })
  }