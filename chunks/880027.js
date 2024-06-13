"use strict";
n.r(t), n.d(t, {
  isEligibleForLeaderboard: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-06_leaderboard",
  label: "Leaderboard",
  defaultConfig: {
    hasLeaderboard: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Leaderboard",
    config: {
      hasLeaderboard: !0
    }
  }]
});

function r(e) {
  let {
    hasLeaderboard: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}