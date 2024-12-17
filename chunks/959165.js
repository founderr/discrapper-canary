n(47120);
var i = n(900849),
    r = n(762692),
    l = n(331114),
    a = n(356164),
    o = n(164991);
function s(e, t, n) {
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
class c {}
t.Z = new (class e extends c {
    constructor(...e) {
        super(...e),
            s(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l, offset: o } = e;
                if (
                    !a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    })
                )
                    a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }) &&
                        (i.qn({
                            withCounts: !1,
                            offset: o
                        }),
                        await r.Z.fetchSearchResults(t, {
                            categoryId: n,
                            languageCode: l,
                            offset: o,
                            limit: 12,
                            withCounts: !1
                        }));
            }),
            s(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l } = e,
                    o = a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }),
                    s = a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    });
                !o &&
                    !s &&
                    (i.qn({
                        withCounts: !1,
                        offset: 0
                    }),
                    await r.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: 0,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            s(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: a, languageCode: s } = e;
                if ('' === t.trim()) return;
                let c = l.Z.getIsFetchingCounts(t),
                    d = l.Z.getIsFetchingCounts(t);
                !c &&
                    !d &&
                    (o.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    i.tI(n, a),
                    i.qn({
                        withCounts: !0,
                        offset: 0
                    }),
                    await r.Z.fetchSearchResults(t, {
                        categoryId: a,
                        languageCode: s,
                        offset: 0,
                        limit: 12,
                        withCounts: !0
                    }),
                    o.Z.setState({ resultsQuery: t }));
            });
    }
})();
