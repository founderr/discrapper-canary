"use strict";
n.r(t), n.d(t, {
  useClanDiscoveryExperimentEnabled: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
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
      clanDiscoveryEnabled: n
    } = a.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}