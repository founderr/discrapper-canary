"use strict";
a.r(t);
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-12_marketing_automation_experiment",
  label: "Marketing Automation",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Ask server for marketing content for rendering",
    config: {
      enabled: !0
    }
  }]
});
t.default = n