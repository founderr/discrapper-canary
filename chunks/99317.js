"use strict";
n.r(t), n.d(t, {
  getNavYouBarExperiment: function() {
    return a
  }
});
var i = n("868493"),
  r = n("133337");
let s = (0, i.default)({
  kind: "user",
  id: "2024-02_navi_bar",
  label: "Mobile Redesign - Nav Experiment: You Bar",
  defaultConfig: {
    showYouBar: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      showYouBar: !1
    }
  }, {
    id: 1,
    label: "You Bar (2c)",
    config: {
      showYouBar: !0
    }
  }]
});

function a(e, t) {
  return (0, r.getMergedExperimentConfigs)(s.existingUsers, s.newUsers, e, t)
}