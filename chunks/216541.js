n.d(t, {
  d: function() {
return C;
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  l = n(780384),
  i = n(481060),
  s = n(410030),
  c = n(876917),
  d = n(328456),
  u = n(616066),
  f = n(562643),
  p = n(63243),
  g = n(244488);
let C = e => {
  let {
product: t,
isPurchased: n,
isHighlighted: a,
user: C,
forCollectedModal: v,
profileEffectClassName: E
  } = e, {
firstProfileEffect: b,
firstAvatarDecoration: h
  } = (0, d.R)(t), m = (0, s.ZP)(), A = (0, l.ap)(m);
  return (0, r.jsxs)('div', {
className: f.container,
children: [
  null != b ? (0, r.jsx)('div', {
    className: o()(f.profileEffectShopPreview, E),
    children: (0, r.jsx)(c.Z, {
      isHovering: a,
      profileEffectId: b.id,
      isPurchased: n,
      forCollectedModal: v,
      removeSetHeight: !0
    })
  }) : null,
  null != h ? (0, r.jsx)('div', {
    className: f.avatarDecorationPreview,
    children: (0, r.jsx)(u.R, {
      item: h,
      user: C,
      avatarSize: i.AvatarSizes.SIZE_120,
      isPurchased: n,
      isHighlighted: a,
      avatarPlaceholderSrc: A ? g : p
    })
  }) : null
]
  });
};