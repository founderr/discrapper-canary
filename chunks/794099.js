"use strict";
a.r(t), a.d(t, {
  hasRegistrationUsernameSuggestions: function() {
    return n
  },
  useUURegistrationExperiment: function() {
    return i
  }
});
let s = (0, a("818083").createExperiment)({
    kind: "user",
    id: "2023-06_unique_username_registration",
    label: "Unique Username Registration",
    defaultConfig: {
      livecheckEnabled: !0,
      suggestions: !0
    },
    treatments: [{
      id: 1,
      label: "Unique Username Registration enabled -livecheck -suggestions",
      config: {
        livecheckEnabled: !1,
        suggestions: !1
      }
    }, {
      id: 2,
      label: "Unique Username Registration enabled -livecheck +suggestions",
      config: {
        livecheckEnabled: !1,
        suggestions: !0
      }
    }, {
      id: 3,
      label: "Unique Username Registration enabled +livecheck -suggestions",
      config: {
        livecheckEnabled: !0,
        suggestions: !1
      }
    }, {
      id: 4,
      label: "Unique Username Registration enabled +livecheck +suggestions",
      config: {
        livecheckEnabled: !0,
        suggestions: !0
      }
    }]
  }),
  i = () => s.useExperiment({
    location: "83ca1a_3"
  }, {
    autoTrackExposure: !1
  }),
  n = () => s.getCurrentConfig({
    location: "83ca1a_4"
  }, {
    autoTrackExposure: !1
  }).suggestions