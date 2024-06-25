t.d(n, {
  Z: function() {
    return c
  }
});
var r = t(470079),
  o = t(512722),
  a = t.n(o),
  l = t(598),
  s = t(390917),
  i = t(464797);

function c(e) {
  let {
    handleClose: n
  } = e, {
    guildProductListing: t,
    guildId: o
  } = (0, i._)(), {
    selectedSkuPricePreview: c
  } = (0, l.usePaymentContext)();
  return r.useEffect(() => {
    a()(null != c, "selectedSkuPricePreview cannot be null"), (0, s.u)({
      guildId: o,
      guildProductListingId: t.id,
      skuPricePreview: c
    }), n()
  }, []), null
}