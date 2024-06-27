var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(780384),
  l = n(481060),
  o = n(410030),
  c = n(197115),
  d = n(474936),
  _ = n(689938),
  E = n(48162);
t.Z = e => {
  let {
    className: t,
    forceWhite: n,
    giftMessage: a,
    subscriptionTier: u,
    ...T
  } = e, I = (0, o.ZP)(), R = (0, r.wj)(I) || n, C = R ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, g = u === d.Si.TIER_0 ? _.Z.Messages.GIFT_NITRO_TIER_0 : _.Z.Messages.GIFT_NITRO;
  return (0, s.jsx)(c.Z, {
    isGift: !0,
    color: C,
    look: l.ButtonLooks.OUTLINED,
    buttonText: g,
    giftMessage: a,
    className: i()(t, E.giftButton, R ? E.buttonWhite : E.buttonBrand),
    subscriptionTier: u,
    ...T
  })
}