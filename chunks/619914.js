"use strict";
i.r(t), i.d(t, {
  isUserRecentGamesExperimentEnabled: function() {
    return l
  },
  useUserIsRecentGamesExperimentEnabled: function() {
    return n
  }
});
let s = (0, i("818083").createExperiment)({
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

function l(e) {
  let {
    location: t,
    autoTrackExposure: i = !1
  } = e;
  return s.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: i
  }).enabled
}

function n(e) {
  let {
    location: t,
    autoTrackExposure: i = !1
  } = e;
  return s.useExperiment({
    location: t
  }, {
    autoTrackExposure: i
  }).enabled
}