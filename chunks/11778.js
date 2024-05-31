"use strict";
n.r(t), n.d(t, {
  ExperimentTuneInMiniShelfBanner: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_tunein_minishelf_banner",
  label: "Actvity TuneIn Mini-Shelf Banner",
  defaultConfig: {
    enableTuneInMiniShelfBanner: !1
  },
  treatments: [{
    id: 1,
    label: "Enable mini-shelf banner",
    config: {
      enableTuneInMiniShelfBanner: !0
    }
  }]
})