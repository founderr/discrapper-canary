n.d(t, {
  O: function() {
    return i
  }
});
let s = (0, n(818083).B)({
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

function i() {
  return s.useExperiment({
    location: "acbeda_1"
  }, {
    autoTrackExposure: !1
  }).enabled
}