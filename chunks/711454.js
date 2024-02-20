"use strict";
n.r(t), n.d(t, {
  GamingStatsSetupExperiment: function() {
    return a
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "guild",
  id: "2023-09_gaming_stats_setup",
  label: "Gaming stats exposure setup",
  defaultConfig: {
    trackGamingStats: !1
  },
  treatments: [{
    id: 1,
    label: "trigger gaming stats data",
    config: {
      trackGamingStats: !0
    }
  }]
})