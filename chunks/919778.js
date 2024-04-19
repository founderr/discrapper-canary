"use strict";
n.r(t), n.d(t, {
  checkNoPaymentTrialEnabled: function() {
    return a
  }
});
var i = n("818083"),
  s = n("74538");
let l = (0, i.createExperiment)({
    kind: "user",
    id: "2022-06_no_payment_info_trial",
    label: "No Payment Info Trial",
    defaultConfig: {
      bypassCheckout: !1
    },
    treatments: [{
      id: 1,
      label: "Bypass collecting payment info",
      config: {
        bypassCheckout: !0
      }
    }]
  }),
  r = (e, t, n) => {
    let i = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
    return null != e && null == t && i
  },
  a = (e, t, n) => {
    let {
      bypassCheckout: i
    } = l.useExperiment({
      location: "aeb070_1"
    }, {
      autoTrackExposure: !1
    }), s = r(e, t, n);
    return i && s
  }