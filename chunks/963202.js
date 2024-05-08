"use strict";
n.r(t), n.d(t, {
  useAnyClanPrepilotExperiment: function() {
    return c
  },
  useAnyClanPrepilotExperimentEnabled: function() {
    return I
  },
  useClanGeneralExperiment: function() {
    return m
  },
  useClanPilotExperiment: function() {
    return h
  },
  useClanPrepilotExperiment: function() {
    return E
  },
  useClanPrepilotExperimentDefaultGameId: function() {
    return T
  }
}), n("653041");
var i = n("818083"),
  r = n("308083"),
  a = n("981631");
let s = (0, i.createExperiment)({
    kind: "user",
    id: "2024-02_clans",
    label: "Clans",
    defaultConfig: {
      enableClanCreation: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Enable creation of clan guilds",
      config: {
        enableClanCreation: !0,
        defaultGameId: null
      }
    }, {
      id: 2,
      label: "Enable creation of clan guilds - Valorant",
      config: {
        enableClanCreation: !0,
        defaultGameId: r.VALORANT_ID
      }
    }, {
      id: 3,
      label: "Enable creation of clan guilds - Genshin Impact",
      config: {
        enableClanCreation: !0,
        defaultGameId: r.GENSHIN_ID
      }
    }]
  }),
  o = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_clans_valorant_prepilot",
    label: "Clans Valorant Prepilot",
    defaultConfig: {
      enableClanCreation: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Enable creation of clan guilds - Valorant",
      config: {
        enableClanCreation: !0,
        defaultGameId: r.VALORANT_ID
      }
    }]
  }),
  l = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_clans_genshin_prepilot",
    label: "Clans Genshin Prepilot",
    defaultConfig: {
      enableClanCreation: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Enable creation of clan guilds - Genshin",
      config: {
        enableClanCreation: !0,
        defaultGameId: r.GENSHIN_ID
      }
    }]
  });

function u(e) {
  var t, n, i;
  let {
    valorantConfig: r,
    genshinConfig: a,
    oldConfig: s
  } = e;
  return null !== (i = null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : s.defaultGameId) && void 0 !== i ? i : null
}

function d(e) {
  return (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT)) === !0
}

function _(e) {
  return (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN)) === !0
}

function c(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = o.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    }),
    r = l.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
  return function(e) {
    var t;
    let {
      guilds: n,
      valorantConfig: i,
      genshinConfig: r,
      oldConfig: a
    } = e, s = n.filter(_), o = s.length > 0 && r.enableClanCreation, l = n.filter(d), c = l.length > 0 && i.enableClanCreation, E = [];
    return o && s.forEach(e => E.push(e)), c && l.forEach(e => E.push(e)), {
      guilds: E,
      enableClanCreation: c || o || null !== (t = a.enableClanCreation) && void 0 !== t && t,
      defaultGameId: u({
        valorantConfig: i,
        genshinConfig: r,
        oldConfig: a
      })
    }
  }({
    guilds: e,
    valorantConfig: i,
    genshinConfig: r,
    oldConfig: s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  })
}

function E(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return c([e], t, n)
}

function I(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return c(e, t, n).enableClanCreation
}

function T(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = o.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    }),
    i = l.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return u({
    valorantConfig: n,
    genshinConfig: i,
    oldConfig: s.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    })
  })
}
let f = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_clans_valorant_pilot",
    label: "Clans Valorant Pilot",
    defaultConfig: {
      clanDiscoveryEnabled: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Show clan discovery (Valorant)",
      config: {
        clanDiscoveryEnabled: !0,
        defaultGameId: r.VALORANT_ID
      }
    }]
  }),
  S = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_clans_genshin_pilot",
    label: "Clans Genshin Pilot",
    defaultConfig: {
      clanDiscoveryEnabled: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Show clan discovery (Genshin Impact)",
      config: {
        clanDiscoveryEnabled: !0,
        defaultGameId: r.GENSHIN_ID
      }
    }]
  });

function h(e) {
  var t, n;
  let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = f.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    }),
    a = S.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    });
  return {
    clanDiscoveryEnabled: r.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
    defaultGameId: null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  }
}
let A = (0, i.createExperiment)({
  kind: "user",
  id: "2024-05_clans_general",
  label: "Clans General",
  defaultConfig: {
    clanTagsVisible: !1
  },
  treatments: [{
    id: 1,
    label: "Show clan tags",
    config: {
      clanTagsVisible: !0
    }
  }]
});

function m(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return A.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  })
}