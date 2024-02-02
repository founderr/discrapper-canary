"use strict";
n.r(t), n.d(t, {
  useActivitiesRolloutExperiments: function() {
    return u
  }
});
var a, s, l = n("884691"),
  i = n("862205");
let r = (a = "Watch Together", s = "2021-09_watch_together_rollout", (0, i.createExperiment)({
    kind: "guild",
    id: s,
    label: "Exposure tracking for ".concat(a, " (do not override)"),
    defaultConfig: {},
    treatments: []
  })),
  o = [r];

function u(e) {
  l.useEffect(() => {
    null != e && o.forEach(t => {
      t.trackExposure({
        guildId: e,
        location: "508ef2_1"
      })
    })
  }, [e])
}