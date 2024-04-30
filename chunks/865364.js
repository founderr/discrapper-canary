"use strict";
a.r(t), a.d(t, {
  useIsEligibleForQuestBarProgressCTA: function() {
    return i
  }
});
var n = a("818083"),
  s = a("977156");
let l = (0, n.createExperiment)({
    id: "2024-03_quest_bar_progress_cta",
    kind: "user",
    label: "Quest Bar Progress CTA",
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
      label: "Quest Bar Progress CTA enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: a = !1
    } = e, n = (0, s.useIsEligibleForQuests)({
      location: t
    }), {
      enabled: i
    } = l.useExperiment({
      location: t
    }, {
      autoTrackExposure: a
    });
    return n && i
  }