"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("470079"),
  s = n("512722"),
  a = n.n(s),
  u = n("598"),
  l = n("390917"),
  i = n("464797");

function c(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: s
  } = (0, i.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: c
  } = (0, u.usePaymentContext)();
  return r.useEffect(() => {
    a()(null != c, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: s,
      guildProductListingId: n.id,
      skuPricePreview: c
    }), t()
  }, []), null
}