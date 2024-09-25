var r,
    i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(108131),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(70956),
    _ = n(823379);
function E(e, t, n) {
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
let f = [],
    h = {},
    p = !1,
    m = !1,
    I = null,
    T = { status: 'unloaded' },
    g = {},
    S = new Set(),
    A = !1,
    v = [],
    N = !1;
function O(e) {
    return (
        S.has(e.id) && S.delete(e.id),
        (h[e.id] = {
            lastFetchTimestamp: Date.now(),
            guild: e
        }),
        !0
    );
}
function R(e) {
    return (
        e.forEach((e) => {
            delete h[e], S.add(e);
        }),
        Object.keys(g).forEach((t) => {
            let n = t,
                r = g[n];
            g[n] = {
                ...r,
                items: r.items.filter((t) => !e.includes(t.id)),
                guildIds: r.guildIds.filter((t) => !e.includes(t))
            };
        }),
        (g = { ...g }),
        (f = f.filter((t) => !e.includes(t.id))),
        !0
    );
}
function C() {
    (m = !0), (A = !1);
}
function y(e) {
    (f = e.clans), (p = !0), (m = !1), e.clans.forEach(O), (A = !1);
}
function b() {
    (m = !1), (A = !0);
}
function L(e) {
    let { searchResult: t, criteriaHash: n, recommendationId: r } = e;
    return (A = !1), (g[n] = t), (I = r), t.items.forEach(O), (t.guildIds = t.guildIds.reduce((e, t) => (S.has(t) ? e : (e.push(t), e)), [])), !0;
}
function D() {
    A = !0;
}
function M(e) {
    let { guilds: t, failedGuildIds: n } = e;
    return t.forEach(O), R(n), !0;
}
function P() {
    N = !1;
}
function U(e) {
    let { guilds: t } = e;
    t.forEach(O), (v = t.map((e) => e.id)), (N = !0);
}
function w(e) {
    let { guildId: t } = e;
    v = [t, ...v];
}
function x(e) {
    let { guildIds: t } = e;
    v = [...t, ...v];
}
function G(e) {
    let { guildIds: t } = e;
    v = v.filter((e) => !t.includes(e));
}
function k(e) {
    let { guildId: t } = e;
    v = v.filter((e) => e !== t);
}
class B extends (r = u.ZP.Store) {
    getSearchResult(e) {
        let t = g[l().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - d.Z.Millis.HOUR ? T : t;
    }
    hasLoadedStaticClanDiscovery() {
        return p;
    }
    getStaticClans() {
        return f;
    }
    isLoading() {
        return m;
    }
    hasError() {
        return A;
    }
    shouldFetchGuild(e) {
        if (S.has(e)) return !1;
        let t = h[e];
        return null == t || t.lastFetchTimestamp < Date.now() - d.Z.Millis.HOUR;
    }
    getGuildProfile(e) {
        var t, n;
        return null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.guild) && void 0 !== n ? n : null;
    }
    getCurrentRecommendationId() {
        return I;
    }
    hasLoadedSavedGuilds() {
        return N;
    }
    getSavedGuildIds() {
        return v;
    }
    getSavedGuilds() {
        return v
            .map((e) => {
                var t;
                return null === (t = h[e]) || void 0 === t ? void 0 : t.guild;
            })
            .filter(_.lm);
    }
    isSavedGuildId(e) {
        return v.includes(e);
    }
}
E(B, 'displayName', 'ClanDiscoveryStore'),
    E(B, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new B(c.Z, {
        FETCH_STATIC_CLAN_LIST_START: C,
        FETCH_STATIC_CLAN_LIST_SUCCESS: y,
        FETCH_STATIC_CLAN_LIST_FAILURE: b,
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: L,
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE: D,
        FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS: M,
        FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS: U,
        DISCOVERY_SAVED_GUILD_ADD: w,
        DISCOVERY_SAVED_GUILD_DELETE: k,
        DISCOVERY_SAVED_GUILD_BULK_ADD: x,
        DISCOVERY_SAVED_GUILD_BULK_DELETE: G,
        LOGOUT: P
    }));
