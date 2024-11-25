n(47120);
var r = n(664751),
    i = n(544891),
    a = n(570140),
    s = n(147913),
    o = n(900849),
    l = n(356164),
    u = n(726115),
    c = n(981631),
    d = n(731455);
function f(e, t, n) {
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
class _ extends s.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            f(this, 'queue', new Set()),
            f(this, 'isFetchEnabled', !1),
            f(this, 'handleConnectionOpen', () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === d.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
                    });
            }),
            f(this, 'fetchFeaturedGuilds', async (e) => {
                var t;
                if (!this.isFetchEnabled) {
                    this.queue.add(d.Hk);
                    return;
                }
                let n = null !== (t = null == e ? void 0 : e.forceRefresh) && void 0 !== t && t,
                    s = l.Z.getLastFetchTimestamp({ categoryId: d.Hk });
                if (n || (0, u.Ew)(s)) {
                    a.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: d.Hk,
                        reset: !0
                    });
                    try {
                        let e = await i.tn.get({
                                url: c.ANM.GUILD_DISCOVERY,
                                query: r.stringify({
                                    offset: 0,
                                    limit: 30
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            t = e.body.total,
                            n = e.body.guilds.map(u.Uv);
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: d.Hk,
                            guilds: n,
                            total: t
                        });
                    } catch (e) {
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: d.Hk,
                            error: e
                        }),
                            o.rC({ categoryId: d.Hk });
                    }
                }
            }),
            f(this, 'fetchCategoryFeaturedGuilds', async (e) => {
                let { categoryId: t, forceRefresh: n = !1 } = e;
                if (!this.isFetchEnabled) {
                    this.queue.add(t);
                    return;
                }
                let s = l.Z.getLastFetchTimestamp({ categoryId: t });
                if (n || (0, u.Ew)(s)) {
                    a.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: t,
                        reset: !0
                    });
                    try {
                        let e = await i.tn.get({
                                url: c.ANM.GUILD_DISCOVERY,
                                query: r.stringify({ categories: [t] }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            n = e.body.total,
                            s = e.body.guilds.map(u.Uv);
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: t,
                            guilds: s,
                            total: n
                        });
                    } catch (e) {
                        a.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: t,
                            error: e
                        }),
                            o.rC({ categoryId: t });
                    }
                }
            });
    }
}
t.Z = new _();
