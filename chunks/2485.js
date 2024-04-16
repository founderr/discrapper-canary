"use strict";
n.r(t), n.d(t, {
  useClanDiscoveryExperimentDefaultGameId: function() {
    return r
  },
  useClanDiscoveryExperimentEnabled: function() {
    return i
  }
});
var l = n("818083"),
  a = n("308083");
let s = (0, l.createExperiment)({
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
      defaultGameId: a.VALORANT_ID
    }
  }, {
    id: 3,
    label: "Show clan discovery (Genshin locked)",
    config: {
      clanDiscoveryEnabled: !0,
      defaultGameId: a.GENSHIN_ID
    }
  }]
});

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      clanDiscoveryEnabled: n
    } = s.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}

function r(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      defaultGameId: n
    } = s.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}