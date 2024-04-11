"use strict";
s.r(t), s.d(t, {
  ReferralProgramSender: function() {
    return l
  },
  SubscriberHomeVariant: function() {
    return i
  }
});
var a, i, r = s("818083");
(a = i || (i = {}))[a.VARIANT_1 = 0] = "VARIANT_1", a[a.VARIANT_2 = 1] = "VARIANT_2";
let l = (0, r.createExperiment)({
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