"use strict";
i.r(t), i.d(t, {
  ReferralProgramSender: function() {
    return a
  },
  SubscriberHomeVariant: function() {
    return r
  }
});
var n, r, s = i("818083");
(n = r || (r = {}))[n.VARIANT_1 = 0] = "VARIANT_1", n[n.VARIANT_2 = 1] = "VARIANT_2";
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