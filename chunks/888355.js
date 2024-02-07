"use strict";
n.r(t), n.d(t, {
  useIsDMsToClydeEnabled: function() {
    return s
  }
});
var l = n("446674"),
  i = n("862205"),
  o = n("305961"),
  a = n("980215");
let r = (0, i.createExperiment)({
  kind: "user",
  id: "2023-05_clyde_ai_dm",
  label: "DMs to Clyde",
  defaultConfig: {
    isDMsToClydeEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "enable dms to clyde",
    config: {
      isDMsToClydeEnabled: !0
    }
  }]
});

function s() {
  let {
    isDMsToClydeEnabled: e
  } = r.useExperiment({
    location: "dbd3ac_1"
  }, {
    autoTrackExposure: !1
  }), t = (0, l.useStateFromStoresArray)([o.default], () => o.default.getGuildIds()), n = t.some(e => (0, a.getClydeExperimentEnabled)(o.default.getGuild(e)));
  return e && n
}