n.d(t, {
    $s: function () {
        return b;
    },
    Cg: function () {
        return y;
    },
    EV: function () {
        return M;
    },
    IS: function () {
        return L;
    },
    KY: function () {
        return R;
    },
    SI: function () {
        return U;
    },
    XB: function () {
        return v;
    },
    bO: function () {
        return D;
    },
    jc: function () {
        return O;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(470079),
    c = n(108131),
    d = n.n(c),
    _ = n(544891),
    E = n(570140),
    f = n(963202),
    h = n(229893),
    p = n(286083),
    m = n(207796),
    I = n(976757),
    T = n(981631);
let g = new Worker(new URL('/assets/' + n.u('59546'), n.b)),
    S = 100;
function A(e) {
    let t = new Set();
    return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
}
function v() {
    return (
        E.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        _.tn
            .get({ url: T.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(I.Gh);
                E.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: A(t)
                });
            })
            .catch((e) => {
                E.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
function N(e, t, n) {
    return new Promise((r) => {
        let i = (e) => {
            let {
                data: { id: n, sortedClans: a }
            } = e;
            t === n && r(a), null == g || g.removeEventListener('message', i);
        };
        null == g || g.addEventListener('message', i);
        let a = {
            id: t,
            unsortedClans: e,
            criteria: n
        };
        null == g || g.postMessage(a);
    });
}
async function O(e) {
    if ('loaded' === h.Z.getSearchResult(e).status) return;
    let t = d().v3(JSON.stringify(e)),
        n = h.Z.getStaticClans(),
        r = await N(n, t, e),
        i = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: r,
            guildIds: r.map((e) => e.id)
        };
    E.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: t,
        searchResult: i,
        recommendationId: 'static:'.concat(t)
    });
}
function R(e) {
    let { location: t, query: n } = e,
        r = (0, f.r3)(t);
    return (
        u.useEffect(() => {
            if (!!r)
                C({
                    games: [],
                    traits: []
                });
        }, [r, n]),
        null
    );
}
function C(e) {
    return _.tn.post({
        url: T.ANM.DISCOVERY_RECOMMENDATIONS,
        body: {
            game_application_ids: e.games,
            traits: e.traits,
            playstyle: e.playstyle
        }
    });
}
async function y(e) {
    let t = h.Z.getSearchResult(e),
        { resetPagination: n, updatePaginationResults: r } = p.a.getState();
    if ('loaded' === t.status) return n({ pageMemoryEnabled: !0 }), r(t.guildIds), t;
    let i = d().v3(JSON.stringify(e));
    try {
        var a, o;
        let t = await C(e),
            s = t.body.guilds.map(I.Gh),
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
            E.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: i,
                searchResult: u,
                recommendationId: null !== (o = t.body.recommendation_id) && void 0 !== o ? o : ''
            }),
            u
        );
    } catch (e) {
        return (
            E.Z.dispatch({ type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE' }),
            {
                status: 'error',
                error: e
            }
        );
    }
}
async function b(e, t) {
    let n = e.slice(0, S - 1);
    try {
        let e = (
                await _.tn.post({
                    url: T.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(I.Gh),
            r = n.filter((t) => !e.some((e) => e.id === t));
        r.length > 0 && p.a.getState().removeGuilds(r),
            await E.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
                guilds: e,
                failedGuildIds: r
            });
    } catch (e) {
        await E.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
async function L() {
    let e = (await _.tn.get({ url: T.ANM.GUILD_DISCOVERY_SAVED_GUILDS })).body.guilds.map(I.Gh);
    await E.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS',
        guilds: e
    });
}
async function D() {
    let e = new Set(h.Z.getSavedGuildIds()),
        t = new Set(m.GN.getState().savedGuildIds).difference(e);
    t.size > 0 && (await P(Array.from(t))), m.GN.setState({ savedGuildIds: [] });
}
async function M(e) {
    E.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_ADD',
        guildId: e
    });
    try {
        await _.tn.put({
            url: T.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (E.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_DELETE',
                guildId: e
            }),
            t)
        );
    }
}
async function P(e) {
    E.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_BULK_ADD',
        guildIds: e
    });
    try {
        await _.tn.put({
            url: T.ANM.GUILD_DISCOVERY_SAVED_GUILDS_BULK,
            body: { guild_ids: e }
        });
    } catch (t) {
        throw (
            (E.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_BULK_DELETE',
                guildIds: e
            }),
            t)
        );
    }
}
async function U(e) {
    E.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_DELETE',
        guildId: e
    });
    try {
        await _.tn.del({
            url: T.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (E.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_ADD',
                guildId: e
            }),
            t)
        );
    }
}
