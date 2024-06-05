"use strict";
s.r(t), s.d(t, {
  QuestBarExperiment: function() {
    return i
  },
  QuestBarExperimentVariants: function() {
    return n
  }
});
var a, n, l = s("818083");
(a = n || (n = {}))[a.V1 = 0] = "V1", a[a.V2 = 1] = "V2";
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