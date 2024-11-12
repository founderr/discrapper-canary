n(47120), n(724458), n(653041);
var r,
    i = n(108131),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(70956),
    u = n(823379);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = [],
    f = {},
    _ = !1,
    p = !1,
    h = null,
    m = { status: 'unloaded' },
    g = {},
    E = new Set(),
    v = !1,
    I = [],
    b = !1;
function S(e) {
    return (
        E.has(e.id) && E.delete(e.id),
        (f[e.id] = {
            lastFetchTimestamp: Date.now(),
            guild: e
        }),
        !0
    );
}
class T extends (r = s.ZP.Store) {
    getSearchResult(e) {
        let t = g[a().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - l.Z.Millis.HOUR ? m : t;
    }
    hasLoadedStaticClanDiscovery() {
        return _;
    }
    getStaticClans() {
        return d;
    }
    isLoading() {
        return p;
    }
    hasError() {
        return v;
    }
    shouldFetchGuild(e) {
        if (E.has(e)) return !1;
        let t = f[e];
        return null == t || t.lastFetchTimestamp < Date.now() - l.Z.Millis.HOUR;
    }
    getGuildProfile(e) {
        var t, n;
        return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.guild) && void 0 !== n ? n : null;
    }
    getCurrentRecommendationId() {
        return h;
    }
    hasLoadedSavedGuilds() {
        return b;
    }
    getSavedGuildIds() {
        return I;
    }
    getSavedGuilds() {
        return I.map((e) => {
            var t;
            return null === (t = f[e]) || void 0 === t ? void 0 : t.guild;
        }).filter(u.lm);
    }
    isSavedGuildId(e) {
        return I.includes(e);
    }
}
c(T, 'displayName', 'ClanDiscoveryStore'),
    c(T, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new T(o.Z, {
        FETCH_STATIC_CLAN_LIST_START: function () {
            (p = !0), (v = !1);
        },
        FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
            (d = e.clans), (_ = !0), (p = !1), e.clans.forEach(S), (v = !1);
        },
        FETCH_STATIC_CLAN_LIST_FAILURE: function () {
            (p = !1), (v = !0);
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
            let { searchResult: t, criteriaHash: n, recommendationId: r } = e;
            return (v = !1), (g[n] = t), (h = r), t.items.forEach(S), (t.guildIds = t.guildIds.reduce((e, t) => (E.has(t) ? e : (e.push(t), e)), [])), !0;
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE: function () {
            v = !0;
        },
        FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS: function (e) {
            var t;
            let { guilds: n, failedGuildIds: r } = e;
            return (
                n.forEach(S),
                (t = r).forEach((e) => {
                    delete f[e], E.add(e);
                }),
                Object.keys(g).forEach((e) => {
                    let n = g[e];
                    g[e] = {
                        ...n,
                        items: n.items.filter((e) => !t.includes(e.id)),
                        guildIds: n.guildIds.filter((e) => !t.includes(e))
                    };
                }),
                (g = { ...g }),
                (d = d.filter((e) => !t.includes(e.id))),
                !0
            );
        },
        FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS: function (e) {
            let { guilds: t } = e;
            t.forEach(S), (I = t.map((e) => e.id)), (b = !0);
        },
        DISCOVERY_SAVED_GUILD_ADD: function (e) {
            let { guildId: t } = e;
            I = [t, ...I];
        },
        DISCOVERY_SAVED_GUILD_DELETE: function (e) {
            let { guildId: t } = e;
            I = I.filter((e) => e !== t);
        },
        DISCOVERY_SAVED_GUILD_BULK_ADD: function (e) {
            let { guildIds: t } = e;
            I = [...t, ...I];
        },
        DISCOVERY_SAVED_GUILD_BULK_DELETE: function (e) {
            let { guildIds: t } = e;
            I = I.filter((e) => !t.includes(e));
        },
        LOGOUT: function () {
            b = !1;
        }
    }));
