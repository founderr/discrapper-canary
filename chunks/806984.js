r.d(n, {
  Z: function() {
    return c
  }
});
var t = r(470079),
  o = r(512722),
  a = r.n(o),
  i = r(598),
  l = r(390917),
  s = r(464797);

function c(e) {
  let {
    handleClose: n
  } = e, {
    guildProductListing: r,
    guildId: o
  } = (0, s._)(), {
    selectedSkuPricePreview: c
  } = (0, i.usePaymentContext)();
  return t.useEffect(() => {
    a()(null != c, "selectedSkuPricePreview cannot be null"), (0, l.u)({
      guildId: o,
      guildProductListingId: r.id,
      skuPricePreview: c
    }), n()
  }, []), null
}