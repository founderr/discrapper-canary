"use strict";
a.r(t), a.d(t, {
  useIsDmSpamFilterCoachmarkEnabled: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-04_dm_spam_filter_coachmark",
  label: "Safety DM Spam Filter Coachmark rollout",
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

function s() {
  return n.useExperiment({
    location: "acbeda_1"
  }, {
    autoTrackExposure: !1
  }).enabled
}