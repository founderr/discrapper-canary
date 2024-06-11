"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("470079"),
  s = n("512722"),
  u = n.n(s),
  a = n("598"),
  l = n("390917"),
  i = n("464797");

function o(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: s
  } = (0, i.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: o
  } = (0, a.usePaymentContext)();
  return r.useEffect(() => {
    u()(null != o, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: s,
      guildProductListingId: n.id,
      skuPricePreview: o
    }), t()
  }, []), null
}