"use strict";
l.r(t), l.d(t, {
  useCollectiblesCondensedBannersExperiment: function() {
    return s
  }
});
let a = (0, l("818083").createExperiment)({
    kind: "user",
    id: "2024-05_shop_condensed_category_banners",
    label: "Collectibles Shop Condensed Category Banners",
    defaultConfig: {
      condensedBannersEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables condensed banners in the Shop",
      config: {
        condensedBannersEnabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }