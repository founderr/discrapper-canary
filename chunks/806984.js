t.d(n, {
  Z: function() {
    return c
  }
});
var r = t(470079),
  s = t(512722),
  l = t.n(s),
  a = t(598),
  o = t(390917),
  i = t(464797);

function c(e) {
  let {
    handleClose: n
  } = e, {
    guildProductListing: t,
    guildId: s
  } = (0, i._)(), {
    selectedSkuPricePreview: c
  } = (0, a.usePaymentContext)();
  return r.useEffect(() => {
    l()(null != c, "selectedSkuPricePreview cannot be null"), (0, o.u)({
      guildId: s,
      guildProductListingId: t.id,
      skuPricePreview: c
    }), n()
  }, []), null
}