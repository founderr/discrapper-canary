"use strict";
a.r(t), a.d(t, {
  useNullExperiment: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-04_null_experiment",
  label: "Null Experiment",
  defaultConfig: {
    inUse: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      inUse: !0
    }
  }]
});

function s() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return n.useExperiment({
    location: "a9e81b_1"
  }, {
    autoTrackExposure: e
  })
}