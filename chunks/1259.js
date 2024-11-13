n.d(t, {
    _: function () {
        return _;
    },
    t: function () {
        return d;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(818083),
    o = n(650774),
    l = n(430824),
    s = n(496675),
    c = n(946314),
    u = n(981631);
let d = (0, a.B)({
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
function _(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        n = (0, i.e7)([s.Z], () => s.Z.can(u.Plq.ADMINISTRATOR, t)),
        a = null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY),
        [_] = (0, i.Wu)([o.Z], () => [o.Z.getMemberCount(e)], [e]),
        m = (null != _ ? _ : 0) >= c.WZ && (null != _ ? _ : 0) < c.TN,
        p = n && a && m;
    r.useEffect(() => {
        p &&
            d.trackExposure({
                guildId: e,
                location: '747eb3_1'
            });
    }, [e, p]);
    let { enableLowerMemberCountReq: h } = d.useExperiment(
        {
            guildId: e,
            location: '747eb3_2'
        },
        {
            autoTrackExposure: !1,
            disable: !p
        }
    );
    return h;
}
