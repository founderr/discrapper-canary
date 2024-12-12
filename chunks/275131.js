var i = r(47120);
var a = r(664751),
    s = r(544891),
    o = r(570140),
    l = r(147913),
    u = r(900849),
    c = r(356164),
    d = r(726115),
    f = r(128449),
    _ = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class p extends l.Z {
    constructor(...e) {
        super(...e),
            h(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            h(this, 'queue', new Set()),
            h(this, 'isFetchEnabled', !1),
            h(this, 'handleConnectionOpen', () => {
                (this.isFetchEnabled = !0),
                    this.queue.forEach((e) => {
                        e === f.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
                    });
            }),
            h(this, 'fetchFeaturedGuilds', async (e) => {
                var n;
                if (!this.isFetchEnabled) {
                    this.queue.add(f.Hk);
                    return;
                }
                let r = null !== (n = null == e ? void 0 : e.forceRefresh) && void 0 !== n && n,
                    i = c.Z.getLastFetchTimestamp({ categoryId: f.Hk });
                if (r || (0, d.Ew)(i)) {
                    o.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: f.Hk,
                        reset: !0
                    });
                    try {
                        let e = await s.tn.get({
                                url: _.ANM.GUILD_DISCOVERY,
                                query: a.stringify({
                                    offset: 0,
                                    limit: 30
                                }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            n = e.body.total,
                            r = e.body.guilds.map(d.Uv);
                        o.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: f.Hk,
                            guilds: r,
                            total: n
                        });
                    } catch (e) {
                        o.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: f.Hk,
                            error: e
                        }),
                            u.rC({ categoryId: f.Hk });
                    }
                }
            }),
            h(this, 'fetchCategoryFeaturedGuilds', async (e) => {
                let { categoryId: n, forceRefresh: r = !1 } = e;
                if (!this.isFetchEnabled) {
                    this.queue.add(n);
                    return;
                }
                let i = c.Z.getLastFetchTimestamp({ categoryId: n });
                if (r || (0, d.Ew)(i)) {
                    o.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
                        categoryId: n,
                        reset: !0
                    });
                    try {
                        let e = await s.tn.get({
                                url: _.ANM.GUILD_DISCOVERY,
                                query: a.stringify({ categories: [n] }),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            }),
                            r = e.body.total,
                            i = e.body.guilds.map(d.Uv);
                        o.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                            categoryId: n,
                            guilds: i,
                            total: r
                        });
                    } catch (e) {
                        o.Z.dispatch({
                            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                            categoryId: n,
                            error: e
                        }),
                            u.rC({ categoryId: n });
                    }
                }
            });
    }
}
n.Z = new p();
