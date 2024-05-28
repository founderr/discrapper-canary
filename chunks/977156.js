"use strict";
n.r(t), n.d(t, {
  getIsEligibleForQuests: function() {
    return s
  },
  isQuestPreviewToolEnabled: function() {
    return l
  },
  useIsEligibleForQuests: function() {
    return a
  }
});
var i = n("818083");
let r = (0, i.createExperiment)({
    id: "2023-12_quests",
    kind: "user",
    label: "Quests",
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
      label: "Quests enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: !1
    }).enabled
  },
  a = e => {
    let {
      location: t
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: !1
    }).enabled
  },
  o = (0, i.createExperiment)({
    id: "2024-04_quest_preview_tool",
    kind: "user",
    label: "Quest Preview Tool",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Preview tool enabled",
      config: {
        enabled: !0
      }
    }]
  });

function l(e) {
  let {
    location: t
  } = e;
  return o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !1
  }).enabled
}