n.d(t, {
    $s: function () {
        return D;
    },
    Cg: function () {
        return L;
    },
    EV: function () {
        return U;
    },
    IS: function () {
        return M;
    },
    KY: function () {
        return y;
    },
    SI: function () {
        return x;
    },
    XB: function () {
        return O;
    },
    bO: function () {
        return P;
    },
    jc: function () {
        return C;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(470079),
    c = n(392711),
    d = n.n(c),
    _ = n(108131),
    E = n.n(_),
    f = n(544891),
    h = n(570140),
    p = n(963202),
    m = n(229893),
    I = n(286083),
    T = n(207796),
    g = n(976757),
    S = n(981631);
let A = new Worker(new URL('/assets/' + n.u('59546'), n.b)),
    v = 100;
function N(e) {
    let t = new Set();
    return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
}
function O() {
    return (
        h.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        f.tn
            .get({ url: S.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(g.Gh);
                h.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: N(t)
                });
            })
            .catch((e) => {
                h.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
function R(e, t, n) {
    return new Promise((r) => {
        let i = (e) => {
            let {
                data: { id: n, sortedClans: a }
            } = e;
            t === n && r(a), null == A || A.removeEventListener('message', i);
        };
        null == A || A.addEventListener('message', i);
        let a = {
            id: t,
            unsortedClans: e,
            criteria: n
        };
        null == A || A.postMessage(a);
    });
}
async function C(e) {
    if ('loaded' === m.Z.getSearchResult(e).status) return;
    let t = E().v3(JSON.stringify(e)),
        n = m.Z.getStaticClans(),
        r = await R(n, t, e),
        i = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: r,
            guildIds: r.map((e) => e.id)
        };
    h.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: t,
        searchResult: i,
        recommendationId: 'static:'.concat(t)
    });
}
function y(e) {
    let { location: t, query: n } = e,
        r = (0, p.r3)(t);
    return (
        u.useEffect(() => {
            if (!!r)
                b({
                    games: [],
                    traits: []
                });
        }, [r, n]),
        null
    );
}
function b(e) {
    return f.tn.post({
        url: S.ANM.DISCOVERY_RECOMMENDATIONS,
        body: {
            game_application_ids: e.games,
            traits: e.traits,
            playstyle: e.playstyle
        }
    });
}
async function L(e) {
    let t = m.Z.getSearchResult(e),
        { resetPagination: n, updatePaginationResults: r } = I.a.getState();
    if ('loaded' === t.status) return n({ pageMemoryEnabled: !0 }), r(t.guildIds), t;
    let i = E().v3(JSON.stringify(e));
    try {
        var a, o;
        let t = await b(e),
            s = t.body.guilds.map(g.Gh),
            l = null !== (a = t.body.guild_ids) && void 0 !== a ? a : [],
            u = {
                status: 'loaded',
                loadedAt: Date.now(),
                items: s,
                guildIds: l
            };
        return (
            n(),
            r(l),
            h.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: i,
                searchResult: u,
                recommendationId: null !== (o = t.body.recommendation_id) && void 0 !== o ? o : ''
            }),
            u
        );
    } catch (e) {
        return (
            h.Z.dispatch({ type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE' }),
            {
                status: 'error',
                error: e
            }
        );
    }
}
async function D(e, t) {
    let n = e.slice(0, v - 1);
    try {
        let e = (
                await f.tn.post({
                    url: S.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(g.Gh),
            r = n.filter((t) => !e.some((e) => e.id === t));
        r.length > 0 && I.a.getState().removeGuilds(r),
            await h.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
                guilds: e,
                failedGuildIds: r
            });
    } catch (e) {
        await h.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
async function M() {
    let e = (await f.tn.get({ url: S.ANM.GUILD_DISCOVERY_SAVED_GUILDS })).body.guilds.map(g.Gh);
    await h.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS',
        guilds: e
    });
}
async function P() {
    let e = m.Z.getSavedGuildIds(),
        t = T.GN.getState().savedGuildIds,
        n = d().difference(t, e);
    n.length > 0 && (await w(n)), T.GN.setState({ savedGuildIds: [] });
}
async function U(e) {
    h.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_ADD',
        guildId: e
    });
    try {
        await f.tn.put({
            url: S.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (h.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_DELETE',
                guildId: e
            }),
            t)
        );
    }
}
async function w(e) {
    h.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_BULK_ADD',
        guildIds: e
    });
    try {
        await f.tn.put({
            url: S.ANM.GUILD_DISCOVERY_SAVED_GUILDS_BULK,
            body: { guild_ids: e }
        });
    } catch (t) {
        throw (
            (h.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_BULK_DELETE',
                guildIds: e
            }),
            t)
        );
    }
}
async function x(e) {
    h.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_DELETE',
        guildId: e
    });
    try {
        await f.tn.del({
            url: S.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (h.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_ADD',
                guildId: e
            }),
            t)
        );
    }
}
