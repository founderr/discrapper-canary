"use strict";
n.r(t), n.d(t, {
  useCanSeeGameProfile: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
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
});

function r(e) {
  let {
    enabled: t
  } = i.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}