"use strict";
n.d(t, {
  An: function() {
    return f
  },
  C3: function() {
    return T
  },
  Fg: function() {
    return d
  },
  It: function() {
    return O
  },
  St: function() {
    return h
  },
  nk: function() {
    return A
  }
}), n(653041);
var i = n(442837),
  r = n(818083),
  s = n(430824),
  o = n(496675),
  a = n(308083),
  l = n(981631);
let u = (0, r.B)({
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
        defaultGameId: a.nJ
      }
    }]
  }),
  _ = (0, r.B)({
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
        defaultGameId: a.xn
      }
    }]
  }),
  c = (0, r.B)({
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

function d(e) {
  return c.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  })
}

function E(e) {
  var t, n;
  let {
    valorantConfig: i,
    genshinConfig: r
  } = e;
  return null !== (n = null !== (t = null == r ? void 0 : r.defaultGameId) && void 0 !== t ? t : null == i ? void 0 : i.defaultGameId) && void 0 !== n ? n : null
}

function I(e) {
  let {
    guilds: t,
    valorantConfig: n,
    genshinConfig: r,
    includeConverted: s
  } = e, a = (0, i.Wu)([o.Z], () => t.filter(e => o.Z.can(l.Plq.ADMINISTRATOR, e))), u = a.filter(e => (function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(l.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(l.oNc.CLAN))
  })(e, s)), _ = a.filter(e => (function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(l.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(l.oNc.CLAN))
  })(e, s)), c = u.length > 0 && r.enableClanCreation, d = _.length > 0 && n.enableClanCreation, I = [];
  return c && u.forEach(e => I.push(e)), d && _.forEach(e => I.push(e)), {
    guilds: I,
    enableClanCreation: c || d,
    defaultGameId: E({
      genshinConfig: c ? r : void 0,
      valorantConfig: d ? n : void 0
    })
  }
}

function T(e) {
  let {
    location: t,
    includeConverted: n,
    autoTrackExposure: r = !0
  } = e, o = (0, i.Wu)([s.Z], () => Object.values(s.Z.getGuilds())), a = u.useExperiment({
    location: t
  }, {
    autoTrackExposure: r
  });
  return I({
    guilds: o,
    valorantConfig: a,
    genshinConfig: _.useExperiment({
      location: t
    }, {
      autoTrackExposure: r
    }),
    includeConverted: n
  })
}

function h(e) {
  let {
    guild: t,
    location: n,
    includeConverted: i,
    autoTrackExposure: r = !0
  } = e, s = u.useExperiment({
    location: n
  }, {
    autoTrackExposure: r
  });
  return I({
    guilds: [t],
    valorantConfig: s,
    genshinConfig: _.useExperiment({
      location: n
    }, {
      autoTrackExposure: r
    }),
    includeConverted: i
  })
}

function f(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, i = u.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return E({
    valorantConfig: i,
    genshinConfig: _.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  })
}
let S = (0, r.B)({
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
        defaultGameId: a.nJ
      }
    }]
  }),
  N = (0, r.B)({
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
        defaultGameId: a.xn
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
    s = N.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    });
  return {
    clanDiscoveryEnabled: r.clanDiscoveryEnabled || s.clanDiscoveryEnabled,
    defaultGameId: null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : s.defaultGameId) && void 0 !== n ? n : null
  }
}
let m = (0, r.B)({
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

function O(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return m.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  })
}(0, r.B)({
  kind: "user",
  id: "2024-06_clans_mobile_tags",
  label: "Clans - Mobile",
  defaultConfig: {
    clanTagsVisible: !1
  },
  treatments: [{
    id: 1,
    label: "Show tags on mobile",
    config: {
      clanTagsVisible: !0
    }
  }]
})