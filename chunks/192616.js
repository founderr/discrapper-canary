"use strict";
n.r(t), n.d(t, {
  CreatePollsGuildCoachmarkExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "guild",
  id: "2024-03_polls_coachmark",
  label: "Show coachmark for poll creation entry point in guild",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Can show coachmark for poll creation entry point in guild",
    config: {
      enabled: !0
    }
  }]
})