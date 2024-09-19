n.d(t, {
    $s: function () {
        return S;
    },
    Cg: function () {
        return T;
    },
    EV: function () {
        return N;
    },
    IS: function () {
        return g;
    },
    KY: function () {
        return I;
    },
    SI: function () {
        return R;
    },
    XB: function () {
        return h;
    },
    bO: function () {
        return A;
    },
    jc: function () {
        return p;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(470079),
    i = n(108131),
    a = n.n(i),
    s = n(544891),
    o = n(570140),
    l = n(963202),
    u = n(229893),
    c = n(286083),
    d = n(207796),
    _ = n(976757),
    E = n(981631);
let f = new Worker(new URL('/assets/' + n.u('59546'), n.b));
function h() {
    return (
        o.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        s.tn
            .get({ url: E.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(_.Gh);
                o.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: (function (e) {
                        let t = new Set();
                        return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
                    })(t)
                });
            })
            .catch((e) => {
                o.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
async function p(e) {
    var t, n, r;
    if ('loaded' === u.Z.getSearchResult(e).status) return;
    let i = a().v3(JSON.stringify(e)),
        s = u.Z.getStaticClans();
    let l = await ((t = s),
        (n = i),
        (r = e),
        new Promise((e) => {
            let i = (t) => {
                let {
                    data: { id: r, sortedClans: a }
                } = t;
                n === r && e(a), null == f || f.removeEventListener('message', i);
            };
            null == f || f.addEventListener('message', i);
            null == f ||
                f.postMessage({
                    id: n,
                    unsortedClans: t,
                    criteria: r
                });
        })),
        c = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: l,
            guildIds: l.map((e) => e.id)
        };
    o.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: i,
        searchResult: c,
        recommendationId: 'static:'.concat(i)
    });
}
function I(e) {
    let { location: t, query: n } = e,
        i = (0, l.r3)(t);
    return (
        r.useEffect(() => {
            if (!!i)
                m({
                    games: [],
                    traits: []
                });
        }, [i, n]),
        null
    );
}
function m(e) {
    return s.tn.post({
        url: E.ANM.DISCOVERY_RECOMMENDATIONS,
        body: {
            game_application_ids: e.games,
            traits: e.traits,
            playstyle: e.playstyle
        }
    });
}
async function T(e) {
    let t = u.Z.getSearchResult(e),
        { resetPagination: n, updatePaginationResults: r } = c.a.getState();
    if ('loaded' === t.status) return n({ pageMemoryEnabled: !0 }), r(t.guildIds), t;
    let i = a().v3(JSON.stringify(e));
    try {
        var s, l;
        let t = await m(e),
            a = t.body.guilds.map(_.Gh),
            u = null !== (s = t.body.guild_ids) && void 0 !== s ? s : [],
            c = {
                status: 'loaded',
                loadedAt: Date.now(),
                items: a,
                guildIds: u
            };
        return (
            n(),
            r(u),
            o.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: i,
                searchResult: c,
                recommendationId: null !== (l = t.body.recommendation_id) && void 0 !== l ? l : ''
            }),
            c
        );
    } catch (e) {
        return (
            o.Z.dispatch({ type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE' }),
            {
                status: 'error',
                error: e
            }
        );
    }
}
async function S(e, t) {
    let n = e.slice(0, 99);
    try {
        let e = (
                await s.tn.post({
                    url: E.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(_.Gh),
            r = n.filter((t) => !e.some((e) => e.id === t));
        r.length > 0 && c.a.getState().removeGuilds(r),
            await o.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
                guilds: e,
                failedGuildIds: r
            });
    } catch (e) {
        await o.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
async function g() {
    let e = (await s.tn.get({ url: E.ANM.GUILD_DISCOVERY_SAVED_GUILDS })).body.guilds.map(_.Gh);
    await o.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS',
        guilds: e
    });
}
async function A() {
    let e = new Set(u.Z.getSavedGuildIds()),
        t = new Set(d.GN.getState().savedGuildIds).difference(e);
    t.size > 0 && (await O(Array.from(t))), d.GN.setState({ savedGuildIds: [] });
}
async function N(e) {
    o.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_ADD',
        guildId: e
    });
    try {
        await s.tn.put({
            url: E.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_DELETE',
                guildId: e
            }),
            t)
        );
    }
}
async function O(e) {
    o.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_BULK_ADD',
        guildIds: e
    });
    try {
        await s.tn.put({
            url: E.ANM.GUILD_DISCOVERY_SAVED_GUILDS_BULK,
            body: { guild_ids: e }
        });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_BULK_DELETE',
                guildIds: e
            }),
            t)
        );
    }
}
async function R(e) {
    o.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_DELETE',
        guildId: e
    });
    try {
        await s.tn.del({
            url: E.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_ADD',
                guildId: e
            }),
            t)
        );
    }
}
