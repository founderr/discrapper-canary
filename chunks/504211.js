"use strict";
n.r(e), n.d(e, {
  StorefrontLinkCopiedArea: function() {
    return r
  },
  trackStorefrontLinkCopiedEvent: function() {
    return s
  }
});
var i, r, l = n("626135"),
  a = n("981631");

function s(t, e, n) {
  l.default.track(a.AnalyticEvents.STOREFRONT_COPY_LINK_CLICKED, {
    application_id: t,
    area: e,
    sku_id: n
  })
}(i = r || (r = {})).STORE_MODAL = "store_modal", i.DETAILS_MODAL = "details_modal", i.STORE_EMBED = "store_embed", i.SKU_EMBED = "sku_embed"