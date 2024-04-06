"use strict";
a.r(t), a.d(t, {
  isInPomeloSuggestionsExperiment: function() {
    return i
  }
});
let s = (0, a("818083").createExperiment)({
    kind: "user",
    label: "Pomelo Suggestions",
    id: "2023-04_pomelo_suggestions",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = () => s.getCurrentConfig({
    location: "1907ae_1"
  }, {
    autoTrackExposure: !1
  }).enabled