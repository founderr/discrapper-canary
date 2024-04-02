"use strict";
s.r(t), s.d(t, {
  ReferralProgramSender: function() {
    return a
  }
});
let a = (0, s("818083").createExperiment)({
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