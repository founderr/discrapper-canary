n.d(t, {
    $s: function () {
        return m;
    },
    Cg: function () {
        return h;
    },
    XB: function () {
        return _;
    },
    jc: function () {
        return E;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(108131),
    a = n.n(i),
    s = n(544891),
    r = n(570140),
    l = n(229893),
    o = n(286083),
    c = n(976757),
    d = n(981631);
let u = new Worker(new URL('/assets/' + n.u('59546'), n.b));
function _() {
    return (
        r.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        s.tn
            .get({ url: d.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(c.Gh);
                r.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: (function (e) {
                        let t = new Set();
                        return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
                    })(t)
                });
            })
            .catch((e) => {
                r.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
async function E(e) {
    var t, n, i;
    if ('loaded' === l.Z.getSearchResult(e).status) return;
    let s = a().v3(JSON.stringify(e)),
        o = l.Z.getStaticClans();
    let c = await ((t = o),
        (n = s),
        (i = e),
        new Promise((e) => {
            let a = (t) => {
                let {
                    data: { id: i, sortedClans: s }
                } = t;
                n === i && e(s), null == u || u.removeEventListener('message', a);
            };
            null == u || u.addEventListener('message', a);
            null == u ||
                u.postMessage({
                    id: n,
                    unsortedClans: t,
                    criteria: i
                });
        })),
        d = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: c,
            guildIds: c.map((e) => e.id)
        };
    r.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: s,
        searchResult: d,
        recommendationId: 'static:'.concat(s)
    });
}
async function h(e) {
    let t = l.Z.getSearchResult(e);
    if ('loaded' === t.status) return t;
    let n = a().v3(JSON.stringify(e));
    try {
        var i, u;
        let t = await s.tn.post({
                url: d.ANM.DISCOVERY_RECOMMENDATIONS,
                body: {
                    game_application_ids: e.games,
                    traits: e.traits,
                    playstyle: e.playstyle
                }
            }),
            a = t.body.guilds.map(c.Gh),
            l = null !== (i = t.body.guild_ids) && void 0 !== i ? i : [];
        o.$.getState().resetPagination();
        let _ = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: a,
            guildIds: l
        };
        return (
            r.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: n,
                searchResult: _,
                recommendationId: null !== (u = t.body.recommendation_id) && void 0 !== u ? u : ''
            }),
            _
        );
    } catch (e) {
        return {
            status: 'error',
            error: e
        };
    }
}
async function m(e, t) {
    let n = e.slice(0, 99);
    try {
        let e = (
                await s.tn.post({
                    url: d.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(c.Gh),
            i = n.filter((t) => !e.some((e) => e.id === t));
        await r.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: e,
            failedGuildIds: i
        });
    } catch (e) {
        await r.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
