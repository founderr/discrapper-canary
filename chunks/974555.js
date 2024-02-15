"use strict";
n.r(t), n.d(t, {
  ExperimentKrunkerStrikeMiniShelfBanner: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "user",
  id: "2023-10_actvity_krunker_strike_mini_shelf_banner",
  label: "Actvity Krunker Strike Mini-Shelf Banner",
  defaultConfig: {
    enableKrunkerStrikeMiniShelfBanner: !1
  },
  treatments: [{
    id: 1,
    label: "Enable mini-shelf banner",
    config: {
      enableKrunkerStrikeMiniShelfBanner: !0
    }
  }]
})