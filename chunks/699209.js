"use strict";
l.r(t), l.d(t, {
  HangStatusExperiment: function() {
    return n
  }
});
var a = l("862205");
let n = (0, a.createExperiment)({
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