"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("884691"),
  u = n("627445"),
  s = n.n(u),
  i = n("642906"),
  l = n("134666"),
  o = n("273093");

function a(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: u
  } = (0, o.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: a
  } = (0, i.usePaymentContext)();
  return r.useEffect(() => {
    s(null != a, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: u,
      guildProductListingId: n.id,
      skuPricePreview: a
    }), t()
  }, []), null
}