n.d(t, {
  d: function() {
return C;
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  i = n(780384),
  l = n(481060),
  s = n(410030),
  c = n(876917),
  d = n(328456),
  u = n(616066),
  f = n(562643),
  g = n(63243),
  p = n(244488);
let C = e => {
  let {
product: t,
isPurchased: n,
isHighlighted: a,
user: C,
forCollectedModal: m,
profileEffectClassName: v
  } = e, {
firstProfileEffect: E,
firstAvatarDecoration: h
  } = (0, d.R)(t), b = (0, s.ZP)(), y = (0, i.ap)(b);
  return (0, r.jsxs)('div', {
className: f.container,
children: [
  null != E ? (0, r.jsx)('div', {
    className: o()(f.profileEffectShopPreview, v),
    children: (0, r.jsx)(c.Z, {
      isHovering: a,
      profileEffectId: E.id,
      isPurchased: n,
      forCollectedModal: m,
      removeSetHeight: !0
    })
  }) : null,
  null != h ? (0, r.jsx)('div', {
    className: f.avatarDecorationPreview,
    children: (0, r.jsx)(u.R, {
      item: h,
      user: C,
      avatarSize: l.AvatarSizes.SIZE_120,
      isPurchased: n,
      isHighlighted: a,
      avatarPlaceholderSrc: y ? p : g
    })
  }) : null
]
  });
};