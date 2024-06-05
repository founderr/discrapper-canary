"use strict";
n.r(t), n.d(t, {
  CTPAppOpenVanillaExperiment: function() {
    return s
  }
});
var i = n("987170"),
  r = n("987338");
let s = (0, i.default)({
  kind: "user",
  id: "2024-06_ctp_app_open_vanilla",
  label: "CTP app open - A/A test - Vanilla",
  defaultConfig: {
    doSomething: !1
  },
  commonTriggerPoint: r.CommonTriggerPoints.POST_CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Treatment",
    config: {
      doSomething: !0
    }
  }]
})