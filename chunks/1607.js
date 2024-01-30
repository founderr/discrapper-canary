"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var i = a("862205");
let s = (0, i.createExperiment)({
  kind: "user",
  id: "2023-02_referral_trials",
  label: "Referral Trials",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Nitro users can send a Nitro trial offer to another user.",
    config: {
      enabled: !0
    }
  }]
});
var r = s