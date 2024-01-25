"use strict";
n.r(t), n.d(t, {
  HangStatusExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "guild",
  id: "2023-11_enable_hang_status",
  label: "Hang Statuses",
  defaultConfig: {
    enableHangStatus: !1
  },
  treatments: [{
    id: 1,
    label: "enable hang statuses",
    config: {
      enableHangStatus: !0
    }
  }]
})