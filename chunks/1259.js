"use strict";
n.r(t), n.d(t, {
  DiscoveryRequirementsM2Experiment: function() {
    return u
  },
  useLowerMemberCountRequirements: function() {
    return f
  }
}), n("47120");
var a = n("470079"),
  i = n("442837"),
  r = n("818083"),
  s = n("650774"),
  l = n("430824"),
  o = n("496675"),
  c = n("946314"),
  d = n("981631");
let u = (0, r.createExperiment)({
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
  let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuild(e)),
    n = (0, i.useStateFromStores)([o.default], () => o.default.can(d.Permissions.ADMINISTRATOR, t)),
    r = null == t ? void 0 : t.hasFeature(d.GuildFeatures.COMMUNITY),
    [f] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.getMemberCount(e)], [e]),
    m = (null != f ? f : 0) >= c.LOWERED_MINIMUM_SIZE && (null != f ? f : 0) < c.DEFAULT_MINIMUM_SIZE,
    h = n && r && m;
  a.useEffect(() => {
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