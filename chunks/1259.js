"use strict";
a.r(t), a.d(t, {
  DiscoveryRequirementsM2Experiment: function() {
    return u
  },
  useLowerMemberCountRequirements: function() {
    return f
  }
}), a("47120");
var n = a("470079"),
  r = a("442837"),
  i = a("818083"),
  s = a("650774"),
  l = a("430824"),
  o = a("496675"),
  d = a("946314"),
  c = a("981631");
let u = (0, i.createExperiment)({
  kind: "guild",
  id: "2021-12_discovery_requirements_m2",
  label: "Lower Server Discovery member count requirements",
  defaultConfig: {
    enableLowerMemberCountReq: !1
  },
  treatments: [{
    id: 1,
    label: "Allow a server to become discoverable with lower member count requirements",
    config: {
      enableLowerMemberCountReq: !0
    }
  }]
});

function f(e) {
  let t = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e)),
    a = (0, r.useStateFromStores)([o.default], () => o.default.can(c.Permissions.ADMINISTRATOR, t)),
    i = null == t ? void 0 : t.hasFeature(c.GuildFeatures.COMMUNITY),
    [f] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.getMemberCount(e)], [e]),
    m = (null != f ? f : 0) >= d.LOWERED_MINIMUM_SIZE && (null != f ? f : 0) < d.DEFAULT_MINIMUM_SIZE,
    h = a && i && m;
  n.useEffect(() => {
    h && u.trackExposure({
      guildId: e,
      location: "747eb3_1"
    })
  }, [e, h]);
  let {
    enableLowerMemberCountReq: E
  } = u.useExperiment({
    guildId: e,
    location: "747eb3_2"
  }, {
    autoTrackExposure: !1,
    disable: !h
  });
  return E
}