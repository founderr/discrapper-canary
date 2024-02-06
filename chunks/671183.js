"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("884691"),
  s = n("627445"),
  u = n.n(s),
  o = n("642906"),
  l = n("134666"),
  i = n("273093");

function a(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: s
  } = (0, i.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: a
  } = (0, o.usePaymentContext)();
  return r.useEffect(() => {
    u(null != a, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: s,
      guildProductListingId: n.id,
      skuPricePreview: a
    }), t()
  }, []), null
}