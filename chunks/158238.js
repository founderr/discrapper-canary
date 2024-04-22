"use strict";
a.r(t), a.d(t, {
  QuietModeExperiment: function() {
    return n
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2024-01_quiet_mode",
  label: "Quiet Mode (dnd-equivalent) Experiment ",
  defaultConfig: {
    allowQuietMode: !1
  },
  treatments: [{
    id: 1,
    label: "allow quiet mode",
    config: {
      allowQuietMode: !0
    }
  }]
})