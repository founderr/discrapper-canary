"use strict";
a.r(t);
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2024-02_collectibles_anime_v2_marketing",
  label: "Anime V2 marketing Experiment",
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