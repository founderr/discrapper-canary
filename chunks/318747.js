var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(780384),
  l = s(481060),
  o = s(410030),
  c = s(197115),
  E = s(474936),
  _ = s(689938),
  u = s(48162);
t.Z = e => {
  let {
    className: t,
    forceWhite: s,
    giftMessage: a,
    subscriptionTier: d,
    ...T
  } = e, I = (0, o.ZP)(), R = (0, r.wj)(I) || s, A = R ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, N = d === E.Si.TIER_0 ? _.Z.Messages.GIFT_NITRO_TIER_0 : _.Z.Messages.GIFT_NITRO;
  return (0, n.jsx)(c.Z, {
    isGift: !0,
    color: A,
    look: l.ButtonLooks.OUTLINED,
    buttonText: N,
    giftMessage: a,
    className: i()(t, u.giftButton, R ? u.buttonWhite : u.buttonBrand),
    subscriptionTier: d,
    ...T
  })
}