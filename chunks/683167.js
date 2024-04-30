"use strict";
a.r(t), a.d(t, {
  useShopNewBadgeCoachtipEdition: function() {
    return i
  }
});
var n = a("818083"),
  s = a("302800");
let l = (0, n.createExperiment)({
    kind: "user",
    id: "2024-04_shop_marketing_badge",
    label: "Shop Marketing New Badge Design Experiment",
    defaultConfig: {
      coachtipEdition: s.ShopCoachtipEditions.NONE
    },
    treatments: [{
      id: 1,
      label: "Shy",
      config: {
        coachtipEdition: s.ShopCoachtipEditions.SHY
      }
    }, {
      id: 2,
      label: "Lofi Vibes",
      config: {
        coachtipEdition: s.ShopCoachtipEditions.LOFI_VIBES
      }
    }, {
      id: 3,
      label: "Galaxy",
      config: {
        coachtipEdition: s.ShopCoachtipEditions.GALAXY
      }
    }]
  }),
  i = e => l.useExperiment({
    location: e
  }).coachtipEdition