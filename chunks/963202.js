n.d(t, {
    C3: function () {
        return f;
    },
    It: function () {
        return h;
    },
    iN: function () {
        return d;
    },
    nk: function () {
        return _;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(818083),
    s = n(430824),
    o = n(496675),
    l = n(981631);
let u = (0, a.B)({
        kind: 'guild',
        id: '2024-07_rapidash_m3_guilds',
        label: 'Rapidash M3 Guilds',
        defaultConfig: { enableClanCreation: !1 },
        treatments: [
            {
                id: 1,
                label: 'Targeted guilds',
                config: { enableClanCreation: !0 }
            },
            {
                id: 2,
                label: '(Defunct -- do not use) Targeted guilds',
                config: { enableClanCreation: !0 }
            }
        ]
    }),
    c = (0, a.B)({
        kind: 'user',
        id: '2024-07_rapidash_m3_joiners',
        label: 'Rapidash M3 Users',
        defaultConfig: { enableM3Experience: !1 },
        treatments: [
            {
                id: 1,
                label: 'Targeted users',
                config: { enableM3Experience: !0 }
            }
        ]
    });
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return c.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
function f(e) {
    let { location: t, includeConverted: n, autoTrackExposure: a = !0 } = e,
        c = (0, i.Wu)([s.Z], () => Object.values(s.Z.getGuilds())),
        d = r.useMemo(() => {
            let e = { enableClanCreation: !1 };
            return (
                c.forEach((n) => {
                    let r = u.getCurrentConfig(
                            {
                                guildId: n.id,
                                location: t
                            },
                            { autoTrackExposure: a }
                        ),
                        i = m.getCurrentConfig(
                            {
                                guildId: n.id,
                                location: t
                            },
                            { autoTrackExposure: a }
                        ).enableSignups;
                    e.enableClanCreation = e.enableClanCreation || r.enableClanCreation || i;
                }),
                e
            );
        }, [c, t, a]);
    return (function (e) {
        let { guilds: t, m3GuildConfig: n, includeConverted: r } = e,
            a = (0, i.Wu)([o.Z], () => t.filter((e) => o.Z.can(l.Plq.ADMINISTRATOR, e))).filter((e) =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (
                        null != e &&
                        e.hasFeature(l.oNc.RAPIDASH_TEST) &&
                        u.getCurrentConfig(
                            {
                                guildId: e.id,
                                location: 'isM3TargetedGuild'
                            },
                            { autoTrackExposure: !1 }
                        ).enableClanCreation &&
                        (t || !e.hasFeature(l.oNc.CLAN))
                    );
                })(e, r)
            ),
            s = a.length > 0 && n.enableClanCreation,
            c = new Map();
        return (
            s && a.forEach((e) => c.set(e.id, e)),
            {
                guilds: [...c.values()],
                enableClanCreation: s,
                defaultGameId: null
            }
        );
    })({
        guilds: c,
        m3GuildConfig: d,
        includeConverted: n
    });
}
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return {
        clanDiscoveryEnabled: d(e, t),
        defaultGameId: null
    };
}
let p = (0, a.B)({
    kind: 'user',
    id: '2024-05_clans_general',
    label: 'Clans General',
    defaultConfig: { clanTagsVisible: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show clan tags',
            config: { clanTagsVisible: !0 }
        }
    ]
});
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = d(e, t),
        r = p.useExperiment({ location: e }, { autoTrackExposure: t });
    return n ? { clanTagsVisible: !0 } : r;
}
(0, a.B)({
    kind: 'user',
    id: '2024-06_clans_mobile_tags',
    label: 'Clans - Mobile',
    defaultConfig: { clanTagsVisible: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show tags on mobile',
            config: { clanTagsVisible: !0 }
        }
    ]
});
let m = (0, a.B)({
    kind: 'guild',
    id: '2024-10_rapidash_discovery_sign_up',
    label: 'Rapidash Discovery Early Sign Up',
    defaultConfig: { enableSignups: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable',
            config: { enableSignups: !0 }
        }
    ]
});
