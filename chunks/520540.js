"use strict";
n.r(t), n.d(t, {
  ReferralProgramSender: function() {
    return s
  }
});
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-03_referral_program_sender",
  label: "Referral Program Sender Experience",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
})