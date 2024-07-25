n.d(t, {
  An: function() {
return I;
  },
  C3: function() {
return p;
  },
  Fg: function() {
return E;
  },
  It: function() {
return N;
  },
  St: function() {
return m;
  },
  nk: function() {
return S;
  }
}), n(653041);
var r = n(442837),
  i = n(818083),
  a = n(430824),
  s = n(496675),
  o = n(308083),
  l = n(981631);
let u = (0, i.B)({
kind: 'guild',
id: '2024-07_rapidash_m3_guilds',
label: 'Rapidash M3 Guilds',
defaultConfig: {
  enableClanCreation: !1,
  requireTargeting: !1
},
treatments: [{
    id: 1,
    label: 'Targeted guilds',
    config: {
      enableClanCreation: !0,
      requireTargeting: !0
    }
  },
  {
    id: 2,
    label: 'Untargeted guilds',
    config: {
      enableClanCreation: !0,
      requireTargeting: !1
    }
  }
]
  }),
  c = (0, i.B)({
kind: 'user',
id: '2024-05_clans_valorant_prepilot',
label: 'Clans Valorant Prepilot',
defaultConfig: {
  enableClanCreation: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Enable creation of clan guilds - Valorant',
  config: {
    enableClanCreation: !0,
    defaultGameId: o.nJ
  }
}]
  }),
  d = (0, i.B)({
kind: 'user',
id: '2024-05_clans_genshin_prepilot',
label: 'Clans Genshin Prepilot',
defaultConfig: {
  enableClanCreation: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Enable creation of clan guilds - Genshin',
  config: {
    enableClanCreation: !0,
    defaultGameId: o.xn
  }
}]
  }),
  _ = (0, i.B)({
kind: 'user',
id: '2024-05_rapidash_prepilot_applications',
label: 'Rapidash Prepilot Application Gate',
defaultConfig: {
  enableApplication: !1
},
treatments: [{
  id: 1,
  label: 'Enable application of guilds',
  config: {
    enableApplication: !0
  }
}]
  });

function E(e) {
  return _.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  });
}

function f(e) {
  var t, n;
  let {
valorantConfig: r,
genshinConfig: i
  } = e;
  return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
}

function h(e) {
  let {
guilds: t,
valorantConfig: n,
genshinConfig: i,
m3GuildConfig: a,
includeConverted: o
  } = e, u = (0, r.Wu)([s.Z], () => t.filter(e => s.Z.can(l.Plq.ADMINISTRATOR, e))), c = u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)), d = u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)), _ = a.requireTargeting ? u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.RAPIDASH_TEST) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)) : u, E = c.length > 0 && i.enableClanCreation, h = d.length > 0 && n.enableClanCreation, p = _.length > 0 && a.enableClanCreation, m = [];
  return E && c.forEach(e => m.push(e)), h && d.forEach(e => m.push(e)), p && _.forEach(e => m.push(e)), {
guilds: m,
enableClanCreation: E || h,
defaultGameId: f({
  genshinConfig: E ? i : void 0,
  valorantConfig: h ? n : void 0
})
  };
}

function p(e) {
  let {
location: t,
includeConverted: n,
autoTrackExposure: i = !0
  } = e, s = (0, r.Wu)([a.Z], () => Object.values(a.Z.getGuilds())), o = c.useExperiment({
location: t
  }, {
autoTrackExposure: i
  }), l = d.useExperiment({
location: t
  }, {
autoTrackExposure: i
  });
  return h({
guilds: s,
valorantConfig: o,
genshinConfig: l,
m3GuildConfig: u.useExperiment({
  location: t
}, {
  autoTrackExposure: i
}),
includeConverted: n
  });
}

function m(e) {
  let {
guild: t,
location: n,
includeConverted: r,
autoTrackExposure: i = !0
  } = e, a = c.useExperiment({
location: n
  }, {
autoTrackExposure: i
  }), s = d.useExperiment({
location: n
  }, {
autoTrackExposure: i
  });
  return h({
guilds: [t],
valorantConfig: a,
genshinConfig: s,
m3GuildConfig: u.useExperiment({
  location: n
}, {
  autoTrackExposure: i
}),
includeConverted: r
  });
}

function I(e) {
  let {
location: t,
autoTrackExposure: n = !0
  } = e, r = c.useExperiment({
location: t
  }, {
autoTrackExposure: n
  });
  return f({
valorantConfig: r,
genshinConfig: d.useExperiment({
  location: t
}, {
  autoTrackExposure: n
})
  });
}
let T = (0, i.B)({
kind: 'user',
id: '2024-05_clans_valorant_pilot',
label: 'Clans Valorant Pilot',
defaultConfig: {
  clanDiscoveryEnabled: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Show clan discovery (Valorant)',
  config: {
    clanDiscoveryEnabled: !0,
    defaultGameId: o.nJ
  }
}]
  }),
  g = (0, i.B)({
kind: 'user',
id: '2024-05_clans_genshin_pilot',
label: 'Clans Genshin Pilot',
defaultConfig: {
  clanDiscoveryEnabled: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Show clan discovery (Genshin Impact)',
  config: {
    clanDiscoveryEnabled: !0,
    defaultGameId: o.xn
  }
}]
  });

function S(e) {
  var t, n;
  let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
i = T.useExperiment({
  location: e
}, {
  autoTrackExposure: r
}),
a = g.useExperiment({
  location: e
}, {
  autoTrackExposure: r
});
  return {
clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  };
}
let A = (0, i.B)({
  kind: 'user',
  id: '2024-05_clans_general',
  label: 'Clans General',
  defaultConfig: {
clanTagsVisible: !1
  },
  treatments: [{
id: 1,
label: 'Show clan tags',
config: {
  clanTagsVisible: !0
}
  }]
});

function N(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return A.useExperiment({
location: e
  }, {
autoTrackExposure: t
  });
}
(0, i.B)({
  kind: 'user',
  id: '2024-06_clans_mobile_tags',
  label: 'Clans - Mobile',
  defaultConfig: {
clanTagsVisible: !1
  },
  treatments: [{
id: 1,
label: 'Show tags on mobile',
config: {
  clanTagsVisible: !0
}
  }]
});