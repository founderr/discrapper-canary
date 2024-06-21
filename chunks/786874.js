"use strict";
n.d(t, {
  J: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-06_simplified_bot_profiles",
    label: "Simplified Bot Profiles Experiment",
    defaultConfig: {
      botProfilesEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Bot profiles enabled",
      config: {
        botProfilesEnabled: !0
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