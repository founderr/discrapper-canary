"use strict";
l.r(t), l.d(t, {
  useCollectiblesUnifiedProductCatalogExperiment: function() {
    return s
  }
});
let a = (0, l("818083").createExperiment)({
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
  s = e => a.useExperiment({
    location: e
  })