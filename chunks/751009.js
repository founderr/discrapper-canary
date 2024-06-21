"use strict";
n.d(t, {
  K: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-06_enhanced_custom_status",
    label: "Enhanced Custom Status Experiment",
    defaultConfig: {
      modifyStatusEnabled: !1,
      permanentStatusEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Modifiable custom status",
      config: {
        modifyStatusEnabled: !0,
        permanentStatusEnabled: !1
      }
    }, {
      id: 2,
      label: "Permanent custom status",
      config: {
        modifyStatusEnabled: !1,
        permanentStatusEnabled: !0
      }
    }, {
      id: 3,
      label: "Modifiable and permament custom status",
      config: {
        modifyStatusEnabled: !0,
        permanentStatusEnabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: r = {}
    } = e;
    return i.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: r
    })
  }