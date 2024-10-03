n.d(t, {
    An: function () {
        return N;
    },
    C3: function () {
        return A;
    },
    It: function () {
        return L;
    },
    St: function () {
        return v;
    },
    YH: function () {
        return U;
    },
    iN: function () {
        return E;
    },
    io: function () {
        return x;
    },
    nk: function () {
        return C;
    },
    r3: function () {
        return M;
    },
    rx: function () {
        return f;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(818083),
    s = n(430824),
    l = n(496675),
    u = n(308083),
    c = n(981631);
let d = (0, o.B)({
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
    _ = (0, o.B)({
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
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
let h = (0, o.B)({
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
                    defaultGameId: u.nJ
                }
            }
        ]
    }),
    p = (0, o.B)({
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
                    defaultGameId: u.xn
                }
            }
        ]
    });
function m(e) {
    var t, n;
    let { valorantConfig: r, genshinConfig: i } = e;
    return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(c.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(c.oNc.CLAN));
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(c.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(c.oNc.CLAN));
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        null != e &&
        e.hasFeature(c.oNc.RAPIDASH_TEST) &&
        d.getCurrentConfig(
            {
                guildId: e.id,
                location: 'isM3TargetedGuild'
            },
            { autoTrackExposure: !1 }
        ).enableClanCreation &&
        (t || !e.hasFeature(c.oNc.CLAN))
    );
}
function S(e) {
    let { guilds: t, valorantConfig: n, genshinConfig: r, m3GuildConfig: i, includeConverted: o } = e,
        s = (0, a.Wu)([l.Z], () => t.filter((e) => l.Z.can(c.Plq.ADMINISTRATOR, e))),
        u = s.filter((e) => T(e, o)),
        d = s.filter((e) => I(e, o)),
        _ = s.filter((e) => g(e, o)),
        E = u.length > 0 && r.enableClanCreation,
        f = d.length > 0 && n.enableClanCreation,
        h = _.length > 0 && i.enableClanCreation,
        p = new Map();
    return (
        E && u.forEach((e) => p.set(e.id, e)),
        f && d.forEach((e) => p.set(e.id, e)),
        h && _.forEach((e) => p.set(e.id, e)),
        {
            guilds: [...p.values()],
            enableClanCreation: E || f || h,
            defaultGameId: m({
                genshinConfig: E ? r : void 0,
                valorantConfig: f ? n : void 0
            })
        }
    );
}
function A(e) {
    let { location: t, includeConverted: n, autoTrackExposure: r = !0 } = e,
        o = (0, a.Wu)([s.Z], () => Object.values(s.Z.getGuilds())),
        l = h.useExperiment({ location: t }, { autoTrackExposure: r }),
        u = p.useExperiment({ location: t }, { autoTrackExposure: r }),
        c = i.useMemo(() => {
            let e = { enableClanCreation: !1 };
            return (
                o.forEach((n) => {
                    let i = d.getCurrentConfig(
                        {
                            guildId: n.id,
                            location: t
                        },
                        { autoTrackExposure: r }
                    );
                    e.enableClanCreation = e.enableClanCreation || i.enableClanCreation;
                }),
                e
            );
        }, [o, t, r]);
    return S({
        guilds: o,
        valorantConfig: l,
        genshinConfig: u,
        m3GuildConfig: c,
        includeConverted: n
    });
}
function v(e) {
    let { guild: t, location: n, includeConverted: r, autoTrackExposure: i = !0 } = e,
        a = h.useExperiment({ location: n }, { autoTrackExposure: i }),
        o = p.useExperiment({ location: n }, { autoTrackExposure: i }),
        s = d.useExperiment(
            {
                guildId: null == t ? void 0 : t.id,
                location: n
            },
            { autoTrackExposure: i }
        );
    return S({
        guilds: [t],
        valorantConfig: a,
        genshinConfig: o,
        m3GuildConfig: s,
        includeConverted: r
    });
}
function N(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = h.useExperiment({ location: t }, { autoTrackExposure: n });
    return m({
        valorantConfig: r,
        genshinConfig: p.useExperiment({ location: t }, { autoTrackExposure: n })
    });
}
let O = (0, o.B)({
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
                    defaultGameId: u.nJ
                }
            }
        ]
    }),
    R = (0, o.B)({
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
                    defaultGameId: u.xn
                }
            }
        ]
    });
function C(e) {
    var t, n;
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = O.useExperiment({ location: e }, { autoTrackExposure: r }),
        a = R.useExperiment({ location: e }, { autoTrackExposure: r }),
        o = E(e, r);
    return {
        clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled || o,
        defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
    };
}
let y = (0, o.B)({
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
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = E(e, t),
        r = y.useExperiment({ location: e }, { autoTrackExposure: t });
    return n ? { clanTagsVisible: !0 } : r;
}
let b = (0, o.B)({
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
    }),
    D = (0, o.B)({
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
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return D.useExperiment({ location: e }, { autoTrackExposure: t }).enabled;
}
let P = (0, o.B)({
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
function U(e) {
    return P.useExperiment({ location: e }).canAdminsBrowse;
}
let w = (0, o.B)({
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
function x(e) {
    return w.useExperiment({ location: e }).showDiscovery;
}
