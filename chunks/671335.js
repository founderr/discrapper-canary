"use strict";
n.r(t);
var i = n("818083");
t.default = (0, i.createExperiment)({
  kind: "user",
  id: "2024-05_hiding_window_disables_video",
  label: "Hiding Window Disables Incoming Video",
  defaultConfig: {
    stopVideoForHiddenWindow: !1
  },
  treatments: [{
    id: 1,
    label: "test",
    config: {
      stopVideoForHiddenWindow: !0
    }
  }]
})