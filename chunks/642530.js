var l = s(735250);
s(470079);
var t = s(987209),
  i = s(598),
  a = s(248042),
  r = s(196567),
  c = s(474936),
  o = s(689938),
  u = s(430597);
n.Z = () => {
  let e = (0, a.Vi)(),
{
  selectedSkuId: n
} = (0, i.usePaymentContext)(),
{
  isGift: s
} = (0, t.wD)();
  return s || n !== c.Si.TIER_2 || !e ? null : (0, l.jsx)(r.Z, {
copy: o.Z.Messages.BOGO_PAYMENT_MODAL_BANNER_2024,
bannerImage: u,
hideGiftIcon: !0
  });
};