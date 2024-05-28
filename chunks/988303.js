"use strict";
n.r(t), n.d(t, {
  QuestBarExperiment: function() {
    return i
  },
  QuestBarExperimentVariants: function() {
    return s
  }
});
var a, s, l = n("818083");
(a = s || (s = {}))[a.V1 = 0] = "V1", a[a.V2 = 1] = "V2";
let i = (0, l.createExperiment)({
  id: "2024-05_quest_bar",
  kind: "user",
  label: "Quest Bar",
  defaultConfig: {
    primaryVariant: 0,
    progressVariant: 0
  },
  treatments: [{
    id: 1,
    label: "Quest Bar V2 with V1 Progress",
    config: {
      primaryVariant: 1,
      progressVariant: 0
    }
  }, {
    id: 2,
    label: "Quest Bar V2",
    config: {
      primaryVariant: 1,
      progressVariant: 1
    }
  }]
})