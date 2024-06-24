"use strict";
s.d(t, {
  Q: function() {
    return o
  }
});
var n = s(470079),
  r = s(100527),
  a = s(818083),
  i = s(329067);
let l = (0, a.B)({
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
    let e = l.useExperiment({
        location: r.Z.COLLECTIBLES_SHOP
      }, {
        autoTrackExposure: !1
      }),
      {
        userIsEligible: t
      } = (0, i.N)();
    return n.useEffect(() => {
      t && l.trackExposure({
        location: r.Z.COLLECTIBLES_SHOP
      })
    }, [t]), e.enabled && t
  }