"use strict";
n.d(t, {
  J: function() {
    return s
  },
  e: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-05_collectibles_shop_bundle",
    label: "Collectibles Shop Bundle",
    defaultConfig: {
      enabled: !1,
      showToastAfterUseBundle: !1
    },
    treatments: [{
      id: 1,
      label: "Shop with bundle",
      config: {
        enabled: !0,
        showToastAfterUseBundle: !1
      }
    }, {
      id: 2,
      label: "Bundle + Use Now Non-Bundle",
      config: {
        enabled: !0,
        showToastAfterUseBundle: !0
      }
    }]
  }),
  r = e => i.useExperiment({
    location: e
  }).enabled,
  s = e => i.useExperiment({
    location: e
  }).showToastAfterUseBundle