"use strict";
s.r(t), s.d(t, {
  useLightningCheckoutExperimentEnabled: function() {
    return o
  }
});
var a = s("470079"),
  l = s("100527"),
  r = s("818083"),
  n = s("329067");
let i = (0, r.createExperiment)({
    kind: "user",
    id: "2024-04_lightning_checkout",
    label: "Lightning Checkout Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Lightning Checkout Flow",
      config: {
        enabled: !0
      }
    }]
  }),
  o = () => {
    let e = i.useExperiment({
        location: l.default.COLLECTIBLES_SHOP
      }, {
        autoTrackExposure: !1
      }),
      {
        userIsEligible: t
      } = (0, n.useLightningCheckoutEligibility)();
    return a.useEffect(() => {
      t && i.trackExposure({
        location: l.default.COLLECTIBLES_SHOP
      })
    }, [t]), e.enabled && t
  }