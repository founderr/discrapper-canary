"use strict";
n.r(t), n.d(t, {
  ReferralProgramSender: function() {
    return a
  },
  SubscriberHomeVariant: function() {
    return i
  }
});
var r, i, s = n("818083");
(r = i || (i = {}))[r.VARIANT_1 = 0] = "VARIANT_1", r[r.VARIANT_2 = 1] = "VARIANT_2";
let a = (0, s.createExperiment)({
  kind: "user",
  id: "2024-03_referral_program_sender",
  label: "Referral Program Sender Experience",
  defaultConfig: {
    enabled: !1,
    subscriberHomeVariant: null
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 0
    }
  }, {
    id: 2,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 1
    }
  }]
})