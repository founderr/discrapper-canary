"use strict";
s.r(t), s.d(t, {
  ReferralProgramWhatsNewCardExperiment: function() {
    return a
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-05_referral_program_whats_new_card",
  label: "Referral Program Whats New Card",
  defaultConfig: {
    shouldShowCard: !1,
    canFlipCard: !1
  },
  treatments: [{
    id: 1,
    label: "Can only see the locked card",
    config: {
      shouldShowCard: !0,
      canFlipCard: !1
    }
  }, {
    id: 2,
    label: "Can see the locked card and flip it",
    config: {
      shouldShowCard: !0,
      canFlipCard: !0
    }
  }]
})