"use strict";
s.r(t);
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-03_nitro_home_header_experiment",
  label: "Nitro Home Header",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Users see the original Nitro Home header asset",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Users see the updated Nitro Home header asset",
    config: {
      enabled: !0
    }
  }]
});
t.default = a