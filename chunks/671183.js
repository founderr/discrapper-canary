"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("884691"),
  r = n("627445"),
  a = n.n(r),
  i = n("642906"),
  l = n("134666"),
  s = n("273093");

function o(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: r
  } = (0, s.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: o
  } = (0, i.usePaymentContext)();
  return u.useEffect(() => {
    a(null != o, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: r,
      guildProductListingId: n.id,
      skuPricePreview: o
    }), t()
  }, []), null
}