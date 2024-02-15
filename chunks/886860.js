"use strict";
n.r(t), n.d(t, {
  ActivitiesAutoSuggestExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "user",
  id: "2022-12_activities_auto_suggest",
  label: "Activities Auto Suggest",
  defaultConfig: {
    enableCenterControlTrayMiniShelf: !1
  },
  treatments: [{
    id: 1,
    label: "Enable VC Activities Mini Shelf",
    config: {
      enableCenterControlTrayMiniShelf: !0
    }
  }]
})