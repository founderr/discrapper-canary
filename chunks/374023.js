"use strict";
E.r(_), E.d(_, {
  default: function() {
    return n
  }
});
var t = E("862205");
let o = (0, t.createExperiment)({
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
});
var n = o