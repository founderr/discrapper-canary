"use strict";
n.r(t), n.d(t, {
  usePrideMonthPerksExperiment: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
    kind: "user",
    id: "2024-05_pride_month_perks_experiment",
    label: "Pride Month Perks Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables new nitro perks related to Pride month",
      config: {
        enabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }