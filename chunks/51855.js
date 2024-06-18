"use strict";
t.d(s, {
  Q: function() {
    return o
  }
});
var n = t(470079),
  a = t(100527),
  r = t(818083),
  l = t(329067);
let i = (0, r.B)({
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
        location: a.Z.COLLECTIBLES_SHOP
      }, {
        autoTrackExposure: !1
      }),
      {
        userIsEligible: s
      } = (0, l.N)();
    return n.useEffect(() => {
      s && i.trackExposure({
        location: a.Z.COLLECTIBLES_SHOP
      })
    }, [s]), e.enabled && s
  }