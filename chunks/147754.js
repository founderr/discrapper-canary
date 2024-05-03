"use strict";
n.r(t);
var l = n("818083");
t.default = (0, l.createExperiment)({
  kind: "guild",
  id: "2021-11_hub_events",
  label: "Hub Events",
  defaultConfig: {
    showHubEventsList: !1
  },
  treatments: [{
    id: 1,
    label: "Show Hub Events List",
    config: {
      showHubEventsList: !0
    }
  }]
})