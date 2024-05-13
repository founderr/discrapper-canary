"use strict";
n.r(t), n.d(t, {
  useAnyClanPrepilotExperiment: function() {
    return E
  },
  useAnyClanPrepilotExperimentEnabled: function() {
    return T
  },
  useClanGeneralExperiment: function() {
    return N
  },
  useClanPilotExperiment: function() {
    return A
  },
  useClanPrePilotApplicationExperiment: function() {
    return u
  },
  useClanPrepilotExperiment: function() {
    return I
  },
  useClanPrepilotExperimentDefaultGameId: function() {
    return f
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
  }),
  l = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_rapidash_prepilot_applications",
    label: "Rapidash Prepilot Application Gate",
    defaultConfig: {
      enableApplication: !1
    },
    treatments: [{
      id: 1,
      label: "Enable application of guilds",
      config: {
        enableApplication: !0
      }
    }]
  });

function u(e) {
  return l.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  })
}

function d(e) {
  var t, n;
  let {
    valorantConfig: i,
    genshinConfig: r
  } = e;
  return null !== (n = null !== (t = null == r ? void 0 : r.defaultGameId) && void 0 !== t ? t : null == i ? void 0 : i.defaultGameId) && void 0 !== n ? n : null
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(a.GuildFeatures.CLAN))
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(a.GuildFeatures.CLAN))
}

function E(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
  return function(e) {
    let {
      guilds: t,
      valorantConfig: n,
      genshinConfig: i,
      includeConverted: r = !1
    } = e, a = t.filter(e => c(e, r)), s = a.length > 0 && i.enableClanCreation, o = t.filter(e => _(e, r)), l = o.length > 0 && n.enableClanCreation, u = [];
    return s && a.forEach(e => u.push(e)), l && o.forEach(e => u.push(e)), {
      guilds: u,
      enableClanCreation: l || s,
      defaultGameId: d({
        valorantConfig: n,
        genshinConfig: i
      })
    }
  }({
    guilds: e,
    valorantConfig: r,
    genshinConfig: o.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    }),
    includeConverted: i
  })
}

function I(e, t) {
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
    let r = c(t),
      a = _(t),
      s = r && i.enableClanCreation;
    return {
      enableClanCreation: a && n.enableClanCreation || s,
      defaultGameId: d({
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

function T(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return E(e, t, n).enableClanCreation
}

function f(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = s.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return d({
    valorantConfig: n,
    genshinConfig: o.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    })
  })
}
let S = (0, i.createExperiment)({
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
  h = (0, i.createExperiment)({
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

function A(e) {
  var t, n;
  let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = S.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    }),
    a = h.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    });
  return {
    clanDiscoveryEnabled: r.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
    defaultGameId: null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  }
}
let m = (0, i.createExperiment)({
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

function N(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return m.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  })
}