"use strict";
a.r(t), a.d(t, {
  useCollectiblesUnifiedProductCatalogExperiment: function() {
    return l
  }
});
let s = (0, a("818083").createExperiment)({
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
  l = e => s.useExperiment({
    location: e
  })