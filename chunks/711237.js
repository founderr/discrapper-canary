"use strict";
a.r(t), a.d(t, {
  UserTriggerAAExperiment: function() {
    return l
  },
  useGlobalTriggerDebugging: function() {
    return r
  }
});
var n = a("818083"),
  s = a("987338");
let l = (0, n.createExperiment)({
    kind: "user",
    id: s.userTriggerExperimentId,
    label: "Trigger Debugging User AA Experiment",
    defaultConfig: {
      inUse: !1
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: !0
      }
    }]
  }),
  i = (0, n.createExperiment)({
    kind: "guild",
    id: s.guildTriggerExperimentId,
    label: "Trigger Debugging Guild AA Experiment",
    defaultConfig: {
      inUse: !1
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: !0
      }
    }]
  }),
  r = e => {
    let t = "guild trigger debug",
      a = "user trigger debug";
    i.useExperiment({
      location: t,
      guildId: e
    }, {
      autoTrackExposure: !1
    }), i.trackExposure({
      location: t,
      guildId: e
    }), l.useExperiment({
      location: a
    }, {
      autoTrackExposure: !1
    }), l.trackExposure({
      location: a
    })
  }