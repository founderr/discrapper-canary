n.d(t, {
    C3: function () {
        return m;
    },
    It: function () {
        return S;
    },
    St: function () {
        return g;
    },
    iN: function () {
        return f;
    },
    io: function () {
        return N;
    },
    nk: function () {
        return I;
    },
    r3: function () {
        return y;
    }
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(442837),
    a = n(818083),
    s = n(430824),
    o = n(496675),
    l = n(308083),
    u = n(981631);
let c = (0, a.B)({
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
    d = (0, a.B)({
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
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
let _ = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_valorant_prepilot',
        label: 'Clans Valorant Prepilot',
        defaultConfig: {
            enableClanCreation: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Enable creation of clan guilds - Valorant',
                config: {
                    enableClanCreation: !0,
                    defaultGameId: l.nJ
                }
            }
        ]
    }),
    p = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_genshin_prepilot',
        label: 'Clans Genshin Prepilot',
        defaultConfig: {
            enableClanCreation: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Enable creation of clan guilds - Genshin',
                config: {
                    enableClanCreation: !0,
                    defaultGameId: l.xn
                }
            }
        ]
    });
function h(e) {
    let { guilds: t, valorantConfig: n, genshinConfig: r, m3GuildConfig: a, includeConverted: s } = e,
        l = (0, i.Wu)([o.Z], () => t.filter((e) => o.Z.can(u.Plq.ADMINISTRATOR, e))),
        d = l.filter((e) =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && e.hasFeature(u.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(u.oNc.CLAN));
            })(e, s)
        ),
        f = l.filter((e) =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && e.hasFeature(u.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(u.oNc.CLAN));
            })(e, s)
        ),
        _ = l.filter((e) =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (
                    null != e &&
                    e.hasFeature(u.oNc.RAPIDASH_TEST) &&
                    c.getCurrentConfig(
                        {
                            guildId: e.id,
                            location: 'isM3TargetedGuild'
                        },
                        { autoTrackExposure: !1 }
                    ).enableClanCreation &&
                    (t || !e.hasFeature(u.oNc.CLAN))
                );
            })(e, s)
        ),
        p = d.length > 0 && r.enableClanCreation,
        h = f.length > 0 && n.enableClanCreation,
        m = _.length > 0 && a.enableClanCreation,
        g = new Map();
    return (
        p && d.forEach((e) => g.set(e.id, e)),
        h && f.forEach((e) => g.set(e.id, e)),
        m && _.forEach((e) => g.set(e.id, e)),
        {
            guilds: [...g.values()],
            enableClanCreation: p || h || m,
            defaultGameId: (function (e) {
                var t, n;
                let { valorantConfig: r, genshinConfig: i } = e;
                return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
            })({
                genshinConfig: p ? r : void 0,
                valorantConfig: h ? n : void 0
            })
        }
    );
}
function m(e) {
    let { location: t, includeConverted: n, autoTrackExposure: a = !0 } = e,
        o = (0, i.Wu)([s.Z], () => Object.values(s.Z.getGuilds())),
        l = _.useExperiment({ location: t }, { autoTrackExposure: a }),
        u = p.useExperiment({ location: t }, { autoTrackExposure: a }),
        d = r.useMemo(() => {
            let e = { enableClanCreation: !1 };
            return (
                o.forEach((n) => {
                    let r = c.getCurrentConfig(
                            {
                                guildId: n.id,
                                location: t
                            },
                            { autoTrackExposure: a }
                        ),
                        i = C.getCurrentConfig(
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
        }, [o, t, a]);
    return h({
        guilds: o,
        valorantConfig: l,
        genshinConfig: u,
        m3GuildConfig: d,
        includeConverted: n
    });
}
function g(e) {
    let { guild: t, location: n, includeConverted: r, autoTrackExposure: i = !0 } = e,
        a = _.useExperiment({ location: n }, { autoTrackExposure: i }),
        s = p.useExperiment({ location: n }, { autoTrackExposure: i }),
        o = c.useExperiment(
            {
                guildId: null == t ? void 0 : t.id,
                location: n
            },
            { autoTrackExposure: i }
        );
    return h({
        guilds: [t],
        valorantConfig: a,
        genshinConfig: s,
        m3GuildConfig: o,
        includeConverted: r
    });
}
let E = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_valorant_pilot',
        label: 'Clans Valorant Pilot',
        defaultConfig: {
            clanDiscoveryEnabled: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Show clan discovery (Valorant)',
                config: {
                    clanDiscoveryEnabled: !0,
                    defaultGameId: l.nJ
                }
            }
        ]
    }),
    v = (0, a.B)({
        kind: 'user',
        id: '2024-05_clans_genshin_pilot',
        label: 'Clans Genshin Pilot',
        defaultConfig: {
            clanDiscoveryEnabled: !1,
            defaultGameId: null
        },
        treatments: [
            {
                id: 1,
                label: 'Show clan discovery (Genshin Impact)',
                config: {
                    clanDiscoveryEnabled: !0,
                    defaultGameId: l.xn
                }
            }
        ]
    });
function I(e) {
    var t, n;
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = E.useExperiment({ location: e }, { autoTrackExposure: r }),
        a = v.useExperiment({ location: e }, { autoTrackExposure: r }),
        s = f(e, r);
    return {
        clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled || s,
        defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
    };
}
let b = (0, a.B)({
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
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = f(e, t),
        r = b.useExperiment({ location: e }, { autoTrackExposure: t });
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
let T = (0, a.B)({
    kind: 'user',
    id: '2024-08_load_test_guild_recs',
    label: 'Guild Recs Load Testing',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable',
            config: { enabled: !0 }
        }
    ]
});
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return T.useExperiment({ location: e }, { autoTrackExposure: t }).enabled;
}
(0, a.B)({
    kind: 'user',
    id: '2024-07_rapidash_m3_admins_browse',
    label: 'Rapidash M3 Admins Browse',
    defaultConfig: { canAdminsBrowse: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable',
            config: { canAdminsBrowse: !0 }
        }
    ]
});
let A = (0, a.B)({
    kind: 'user',
    id: '2024-10_rapidash_discovery_entrypoint',
    label: 'Rapidash Discovery Entrypoint',
    defaultConfig: { showDiscovery: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable',
            config: { showDiscovery: !0 }
        }
    ]
});
function N(e) {
    return A.useExperiment({ location: e }).showDiscovery;
}
let C = (0, a.B)({
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
