"use strict";
l.r(t), l.d(t, {
  useCollectiblesCondensedBannersExperiment: function() {
    return s
  }
});
let a = (0, l("818083").createExperiment)({
    kind: "user",
    id: "2024-05_shop_condensed_category_banners",
    label: "Collectibles Shop Dynamic Header & Condensed Category Banners",
    defaultConfig: {
      condensedBannersEnabled: !1,
      condensedBannersAndDynamicHeadersEnabled: !1,
      newShopLogoEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables condensed banners in the Shop",
      config: {
        condensedBannersEnabled: !0,
        condensedBannersAndDynamicHeadersEnabled: !1,
        newShopLogoEnabled: !0
      }
    }, {
      id: 2,
      label: "Enables dynamic headers and condensed banners in the Shop",
      config: {
        condensedBannersEnabled: !0,
        condensedBannersAndDynamicHeadersEnabled: !0,
        newShopLogoEnabled: !0
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