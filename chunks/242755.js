"use strict";
n.r(t), n.d(t, {
  isEligibleForQuestPlaytime: function() {
    return a
  }
});
var i = n("818083");
n("977156");
let r = (0, i.createExperiment)({
    id: "2024-04_quest_playtime_task",
    kind: "user",
    label: "Quest Playtime Task",
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
      label: "Playtime enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  }