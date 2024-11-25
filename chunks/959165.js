n(47120);
var i = n(544891),
    r = n(401919),
    l = n(900849),
    a = n(999916),
    s = n(762692),
    o = n(331114),
    c = n(356164),
    d = n(164991),
    u = n(981631);
function h(e, t, n) {
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
class m {}
class p extends m {
    constructor(...e) {
        super(...e),
            h(
                this,
                'isValidSearchQuery',
                async (e) =>
                    !(0, r.x)(e) &&
                    (
                        await i.tn.get({
                            url: u.ANM.GUILD_DISCOVERY_VALID_TERM,
                            query: { term: e },
                            oldFormErrors: !0,
                            rejectWithError: !1
                        })
                    ).body.valid
            ),
            h(this, 'fetch', async (e) => {
                let { query: t, categoryId: n, languageCode: i, offset: r } = e;
                await s.Z.fetchAlgoliaSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: r,
                    length: 12,
                    filters: { approximate_member_count: l.sq }
                });
            }),
            h(this, 'loadMoreCategoryResults', async (e) => {
                let { loadId: t, query: n, offset: i, categoryId: r, languageCode: l } = e;
                await this.fetch({
                    loadId: t,
                    categoryId: r,
                    query: n,
                    languageCode: l,
                    offset: i
                });
            }),
            h(this, 'loadCategoryResults', async (e) => {
                let { query: t, loadId: n, categoryId: i, languageCode: r } = e;
                await this.fetch({
                    loadId: n,
                    categoryId: i,
                    query: t,
                    languageCode: r,
                    offset: 0
                });
            }),
            h(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { loadId: t, query: n, categoryId: i, languageCode: r } = e;
                if (c.Z.getIsBlocked(n) || !(await this.isValidSearchQuery(n))) {
                    s.Z.handleBlockedSearchQuery(n);
                    return;
                }
                await s.Z.fetchAlgoliaSearchResultCounts({
                    query: n,
                    algoliaFilters: { approximate_member_count: l.sq }
                }),
                    await this.fetch({
                        loadId: t,
                        categoryId: i,
                        query: n,
                        languageCode: r,
                        offset: 0
                    });
            });
    }
}
class g extends m {
    constructor(...e) {
        super(...e),
            h(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i, offset: r } = e;
                await s.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: r,
                    limit: 12,
                    withCounts: !1
                });
            }),
            h(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                await s.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: 0,
                    limit: 12,
                    withCounts: !1
                });
            }),
            h(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                await s.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: 0,
                    limit: 12,
                    withCounts: !0
                });
            });
    }
}
t.Z = new (class e extends m {
    get manager() {
        return (0, a.P)({ location: 'GlobalDiscoverySearchManagerImpl' }) ? this._backendSearchManager : this._algoliaSearchManager;
    }
    constructor(...e) {
        super(...e),
            h(this, '_backendSearchManager', new g()),
            h(this, '_algoliaSearchManager', new p()),
            h(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                if (
                    !c.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    })
                )
                    c.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    }) && (await this.manager.loadMoreCategoryResults(e));
            }),
            h(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e,
                    r = c.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    }),
                    l = c.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    });
                !r && !l && (await this.manager.loadCategoryResults(e));
            }),
            h(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: i } = e;
                if ('' === t.trim()) return;
                let r = o.Z.getIsFetchingCounts(t),
                    a = o.Z.getIsFetchingCounts(t);
                !r &&
                    !a &&
                    (d.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    l.tI(n, i),
                    await this.manager.loadCategoryResultsAndCounts(e),
                    d.Z.setState({ resultsQuery: t }));
            });
    }
})();
