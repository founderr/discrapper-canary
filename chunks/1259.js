t.d(n, {
  _: function() {
    return m
  },
  t: function() {
    return u
  }
}), t(47120);
var a = t(470079),
  r = t(442837),
  s = t(818083),
  i = t(650774),
  l = t(430824),
  o = t(496675),
  c = t(946314),
  d = t(981631);
let u = (0, s.B)({
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

function m(e) {
  let n = (0, r.e7)([l.Z], () => l.Z.getGuild(e)),
    t = (0, r.e7)([o.Z], () => o.Z.can(d.Plq.ADMINISTRATOR, n)),
    s = null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY),
    [m] = (0, r.Wu)([i.Z], () => [i.Z.getMemberCount(e)], [e]),
    h = (null != m ? m : 0) >= c.WZ && (null != m ? m : 0) < c.TN,
    C = t && s && h;
  a.useEffect(() => {
    C && u.trackExposure({
      guildId: e,
      location: "747eb3_1"
    })
  }, [e, C]);
  let {
    enableLowerMemberCountReq: x
  } = u.useExperiment({
    guildId: e,
    location: "747eb3_2"
  }, {
    autoTrackExposure: !1,
    disable: !C
  });
  return x
}