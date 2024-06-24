"use strict";
n.d(t, {
  t: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-06_profile_react_reply",
    label: "Simplified Profile React Reply",
    defaultConfig: {
      statusReactReplyEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Status React / Reply",
      config: {
        statusReactReplyEnabled: !0
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