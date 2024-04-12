"use strict";
a.r(t), a.d(t, {
  useClanDiscoveryExperimentEnabled: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2024-03_clan_discovery",
  label: "Clan discovery",
  defaultConfig: {
    clanDiscoveryEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Show clan discovery",
    config: {
      clanDiscoveryEnabled: !0
    }
  }]
});

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      clanDiscoveryEnabled: a
    } = n.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return a
}