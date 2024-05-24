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

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      showNewGuildTooltip: n
    } = i.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}
t.default = i