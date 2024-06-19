var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(780384),
  l = t(481060),
  o = t(410030),
  _ = t(197115),
  c = t(474936),
  E = t(689938),
  u = t(48162);
s.Z = e => {
  let {
    className: s,
    forceWhite: t,
    giftMessage: a,
    subscriptionTier: d,
    ...R
  } = e, I = (0, o.ZP)(), T = (0, i.wj)(I) || t, A = T ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, M = d === c.Si.TIER_0 ? E.Z.Messages.GIFT_NITRO_TIER_0 : E.Z.Messages.GIFT_NITRO;
  return (0, n.jsx)(_.Z, {
    isGift: !0,
    color: A,
    look: l.ButtonLooks.OUTLINED,
    buttonText: M,
    giftMessage: a,
    className: r()(s, u.giftButton, T ? u.buttonWhite : u.buttonBrand),
    subscriptionTier: d,
    ...R
  })
}