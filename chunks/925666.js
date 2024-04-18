"use strict";
a.r(t);
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2024-04_collectibles_lofi_vibes_marketing",
  label: "Lofi Vibes marketing experiment",
  defaultConfig: {
    coachtipEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables coachtip",
    config: {
      coachtipEnabled: !0
    }
  }]
});
t.default = e => {
  let {
    location: t
  } = e;
  return n.useExperiment({
    location: t
  })
}