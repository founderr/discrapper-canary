"use strict";
l.r(t), l.d(t, {
  useLightningCheckoutExperimentEnabled: function() {
    return o
  }
});
var a = l("470079"),
  s = l("100527"),
  r = l("818083"),
  n = l("329067");
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
        location: s.default.COLLECTIBLES_SHOP
      }, {
        autoTrackExposure: !1
      }),
      {
        userIsEligible: t
      } = (0, n.useLightningCheckoutEligibility)();
    return a.useEffect(() => {
      t && i.trackExposure({
        location: s.default.COLLECTIBLES_SHOP
      })
    }, [t]), e.enabled && t
  }