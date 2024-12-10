n(47120);
var i = n(544891),
    r = n(900849),
    l = n(999916),
    a = n(762692),
    o = n(331114),
    s = n(356164),
    c = n(164991),
    d = n(981631),
    u = n(231338);
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
let m = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return e.split(' ').some((e) => u.sL.includes(e.toLowerCase()));
};
class p {}
class g extends p {
    constructor(...e) {
        super(...e),
            h(
                this,
                'isValidSearchQuery',
                async (e) =>
                    !m(e) &&
                    (
                        await i.tn.get({
                            url: d.ANM.GUILD_DISCOVERY_VALID_TERM,
                            query: { term: e },
                            oldFormErrors: !0,
                            rejectWithError: !1
                        })
                    ).body.valid
            ),
            h(this, 'fetch', async (e) => {
                let { query: t, categoryId: n, languageCode: i, offset: l } = e;
                await a.Z.fetchAlgoliaSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: l,
                    length: 12,
                    filters: { approximate_member_count: r.sq }
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
                let { loadId: t, query: n, categoryId: i, languageCode: l } = e;
                if (s.Z.getIsBlocked(n) || !(await this.isValidSearchQuery(n))) {
                    a.Z.handleBlockedSearchQuery(n);
                    return;
                }
                await a.Z.fetchAlgoliaSearchResultCounts({
                    query: n,
                    algoliaFilters: { approximate_member_count: r.sq }
                }),
                    await this.fetch({
                        loadId: t,
                        categoryId: i,
                        query: n,
                        languageCode: l,
                        offset: 0
                    });
            });
    }
}
class f extends p {
    constructor(...e) {
        super(...e),
            h(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i, offset: r } = e;
                await a.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: r,
                    limit: 12,
                    withCounts: !1
                });
            }),
            h(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                await a.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: 0,
                    limit: 12,
                    withCounts: !1
                });
            }),
            h(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                await a.Z.fetchSearchResults(t, {
                    categoryId: n,
                    languageCode: i,
                    offset: 0,
                    limit: 12,
                    withCounts: !0
                });
            });
    }
}
t.Z = new (class e extends p {
    get manager() {
        return (0, l.P)({ location: 'GlobalDiscoverySearchManagerImpl' }) ? this._backendSearchManager : this._algoliaSearchManager;
    }
    constructor(...e) {
        super(...e),
            h(this, '_backendSearchManager', new f()),
            h(this, '_algoliaSearchManager', new g()),
            h(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e;
                if (
                    !s.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    })
                )
                    s.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    }) && (await this.manager.loadMoreCategoryResults(e));
            }),
            h(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: i } = e,
                    r = s.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    }),
                    l = s.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: i
                    });
                !r && !l && (await this.manager.loadCategoryResults(e));
            }),
            h(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: i } = e;
                if ('' === t.trim()) return;
                let l = o.Z.getIsFetchingCounts(t),
                    a = o.Z.getIsFetchingCounts(t);
                !l &&
                    !a &&
                    (c.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    r.tI(n, i),
                    await this.manager.loadCategoryResultsAndCounts(e),
                    c.Z.setState({ resultsQuery: t }));
            });
    }
})();
