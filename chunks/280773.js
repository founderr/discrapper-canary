"use strict";
a.r(t), a.d(t, {
  useCollectiblesUnifiedProductCatalogExperiment: function() {
    return r
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
  r = e => {
    let {
      location: t
    } = e;
    return s.useExperiment({
      location: t
    })
  }