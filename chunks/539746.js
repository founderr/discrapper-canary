"use strict";
n.d(t, {
  xG: function() {
    return o
  }
});
var i = n(818083);
let r = (0, i.B)({
    kind: "user",
    id: "2024-06_game_profile",
    label: "Enables the Game Profile",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = (0, i.B)({
    kind: "user",
    id: "2024-06_game_profile_experiment",
    label: "Enables the Game Profile",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  });

function o(e) {
  r.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  let {
    enabled: t
  } = s.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}