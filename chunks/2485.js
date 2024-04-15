"use strict";
a.r(t), a.d(t, {
  useClanDiscoveryExperimentDefaultGameId: function() {
    return r
  },
  useClanDiscoveryExperimentEnabled: function() {
    return i
  }
});
var n = a("818083"),
  s = a("308083");
let l = (0, n.createExperiment)({
  kind: "user",
  id: "2024-03_clan_discovery",
  label: "Clan discovery",
  defaultConfig: {
    clanDiscoveryEnabled: !1,
    defaultGameId: null
  },
  treatments: [{
    id: 1,
    label: "Show clan discovery",
    config: {
      clanDiscoveryEnabled: !0,
      defaultGameId: null
    }
  }, {
    id: 2,
    label: "Show clan discovery (Valorant locked)",
    config: {
      clanDiscoveryEnabled: !0,
      defaultGameId: s.VALORANT_ID
    }
  }, {
    id: 3,
    label: "Show clan discovery (Genshin locked)",
    config: {
      clanDiscoveryEnabled: !0,
      defaultGameId: s.GENSHIN_ID
    }
  }]
});

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      clanDiscoveryEnabled: a
    } = l.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return a
}

function r(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      defaultGameId: a
    } = l.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return a
}