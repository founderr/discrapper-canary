"use strict";
n.r(t), n.d(t, {
  useAnyClanPrepilotExperiment: function() {
    return _
  },
  useAnyClanPrepilotExperimentEnabled: function() {
    return E
  },
  useClanGeneralExperiment: function() {
    return A
  },
  useClanPilotExperiment: function() {
    return S
  },
  useClanPrepilotExperiment: function() {
    return c
  },
  useClanPrepilotExperimentDefaultGameId: function() {
    return I
  }
}), n("653041");
var i = n("818083"),
  r = n("308083"),
  a = n("981631");
let s = (0, i.createExperiment)({
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
  o = (0, i.createExperiment)({
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

function l(e) {
  var t, n;
  let {
    valorantConfig: i,
    genshinConfig: r
  } = e;
  return null !== (n = null !== (t = null == r ? void 0 : r.defaultGameId) && void 0 !== t ? t : null == i ? void 0 : i.defaultGameId) && void 0 !== n ? n : null
}

function u(e) {
  return (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT)) === !0 && (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN)) === !1
}

function d(e) {
  return (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN)) === !0 && (null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN)) === !1
}

function _(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
  return function(e) {
    let {
      guilds: t,
      valorantConfig: n,
      genshinConfig: i
    } = e, r = t.filter(d), a = r.length > 0 && i.enableClanCreation, s = t.filter(u), o = s.length > 0 && n.enableClanCreation, _ = [];
    return a && r.forEach(e => _.push(e)), o && s.forEach(e => _.push(e)), {
      guilds: _,
      enableClanCreation: o || a,
      defaultGameId: l({
        valorantConfig: n,
        genshinConfig: i
      })
    }
  }({
    guilds: e,
    valorantConfig: i,
    genshinConfig: o.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  })
}

function c(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
  return function(e) {
    let {
      guild: t,
      valorantConfig: n,
      genshinConfig: i
    } = e;
    if (null == t) return {
      defaultGameId: null,
      enableClanCreation: !1
    };
    let r = d(t),
      a = u(t),
      s = r && i.enableClanCreation;
    return {
      enableClanCreation: a && n.enableClanCreation || s,
      defaultGameId: l({
        genshinConfig: r ? i : void 0,
        valorantConfig: a ? n : void 0
      })
    }
  }({
    guild: e,
    valorantConfig: i,
    genshinConfig: o.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  })
}

function E(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return _(e, t, n).enableClanCreation
}

function I(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = s.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return l({
    valorantConfig: n,
    genshinConfig: o.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    })
  })
}
let T = (0, i.createExperiment)({
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
  f = (0, i.createExperiment)({
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

function S(e) {
  var t, n;
  let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = T.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    }),
    a = f.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    });
  return {
    clanDiscoveryEnabled: r.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
    defaultGameId: null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  }
}
let h = (0, i.createExperiment)({
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

function A(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return h.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  })
}