"use strict";
s.d(t, {
  n: function() {
    return r
  }
});
let n = (0, s(818083).B)({
    kind: "user",
    id: "2024-04_collectibles_unified_product_catalog",
    label: "Collectibles Unified Product Catalog",
    defaultConfig: {
      unifiedProductCatalogEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables the unified product catalog in the Shop",
      config: {
        unifiedProductCatalogEnabled: !0
      }
    }]
  }),
  r = e => n.useExperiment({
    location: e
  })