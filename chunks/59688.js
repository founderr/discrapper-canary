"use strict";
n.r(t), n.d(t, {
  useCanShowNewGuildTooltip: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_server_peek",
  label: "Change the guild tooltip",
  defaultConfig: {
    showNewGuildTooltip: !1
  },
  treatments: [{
    id: 1,
    label: "Show new tooltip",
    config: {
      showNewGuildTooltip: !0
    }
  }]
});

function r() {
  let {
    showNewGuildTooltip: e
  } = i.useExperiment({
    location: "useCanShowNewGuildTooltip"
  }, {
    autoTrackExposure: !0
  });
  return e
}