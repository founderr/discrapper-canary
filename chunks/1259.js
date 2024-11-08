t.d(n, {
    _: function () {
        return m;
    },
    t: function () {
        return u;
    }
}),
    t(47120);
var r = t(192379),
    a = t(442837),
    i = t(818083),
    o = t(650774),
    s = t(430824),
    l = t(496675),
    c = t(946314),
    d = t(981631);
let u = (0, i.B)({
    kind: 'guild',
    id: '2021-12_discovery_requirements_m2',
    label: 'Lower Server Discovery member count requirements',
    defaultConfig: { enableLowerMemberCountReq: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allow a server to become discoverable with lower member count requirements',
            config: { enableLowerMemberCountReq: !0 }
        }
    ]
});
function m(e) {
    let n = (0, a.e7)([s.Z], () => s.Z.getGuild(e)),
        t = (0, a.e7)([l.Z], () => l.Z.can(d.Plq.ADMINISTRATOR, n)),
        i = null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY),
        [m] = (0, a.Wu)([o.Z], () => [o.Z.getMemberCount(e)], [e]),
        f = (null != m ? m : 0) >= c.WZ && (null != m ? m : 0) < c.TN,
        h = t && i && f;
    r.useEffect(() => {
        h &&
            u.trackExposure({
                guildId: e,
                location: '747eb3_1'
            });
    }, [e, h]);
    let { enableLowerMemberCountReq: x } = u.useExperiment(
        {
            guildId: e,
            location: '747eb3_2'
        },
        {
            autoTrackExposure: !1,
            disable: !h
        }
    );
    return x;
}
