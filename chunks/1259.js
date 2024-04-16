"use strict";
i.r(t), i.d(t, {
  DiscoveryRequirementsM2Experiment: function() {
    return d
  },
  useLowerMemberCountRequirements: function() {
    return f
  }
}), i("47120");
var n = i("470079"),
  r = i("442837"),
  s = i("818083"),
  a = i("650774"),
  l = i("430824"),
  o = i("496675"),
  c = i("946314"),
  u = i("981631");
let d = (0, s.createExperiment)({
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
    i = (0, r.useStateFromStores)([o.default], () => o.default.can(u.Permissions.ADMINISTRATOR, t)),
    s = null == t ? void 0 : t.hasFeature(u.GuildFeatures.COMMUNITY),
    [f] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.getMemberCount(e)], [e]),
    p = (null != f ? f : 0) >= c.LOWERED_MINIMUM_SIZE && (null != f ? f : 0) < c.DEFAULT_MINIMUM_SIZE,
    C = i && s && p;
  n.useEffect(() => {
    C && d.trackExposure({
      guildId: e,
      location: "747eb3_1"
    })
  }, [e, C]);
  let {
    enableLowerMemberCountReq: m
  } = d.useExperiment({
    guildId: e,
    location: "747eb3_2"
  }, {
    autoTrackExposure: !1,
    disable: !C
  });
  return m
}