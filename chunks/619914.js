"use strict";
n.r(t), n.d(t, {
  isUserRecentGamesExperimentEnabled: function() {
    return s
  },
  useUserIsRecentGamesExperimentEnabled: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
  id: "2024-03_user_recent_games",
  kind: "user",
  label: "Recent Games",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }, {
    id: 4,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e;
  return a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  }).enabled
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }).enabled
}