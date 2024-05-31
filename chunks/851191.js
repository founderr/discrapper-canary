"use strict";
l.r(t), l.d(t, {
  ExperimentTuneInShelfPromoBanner: function() {
    return i
  }
});
let i = (0, l("818083").createExperiment)({
  kind: "user",
  id: "2024-05_tunein_shelf_promo_banner",
  label: "Actvity TuneIn Shelf Promo Banner",
  defaultConfig: {
    enableTuneInShelfPromoBanner: !1
  },
  treatments: [{
    id: 1,
    label: "Enable shelf promo banner",
    config: {
      enableTuneInShelfPromoBanner: !0
    }
  }]
})