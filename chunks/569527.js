n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(209173),
    r = n(288385),
    l = n(442837),
    o = n(481060),
    c = n(110924),
    d = n(674588),
    u = n(264043),
    _ = n(809547),
    E = n(125909),
    h = n(374939),
    m = n(283293),
    I = n(797908),
    p = n(618508),
    g = n(979007),
    T = n(463051);
function f(e) {
    var t;
    let { query: n } = e,
        f = (0, p.k)(),
        [S, C] = a.useState(1),
        { fetchState: N, searchResults: A } = (0, l.cj)([_.Z], () => ({
            fetchState: _.Z.getFetchState({
                query: n,
                categoryId: null == f ? void 0 : f.id,
                page: S,
                source: r.F.APP_DIRECTORY
            }),
            searchResults: _.Z.getSearchResults({
                query: n,
                categoryId: null == f ? void 0 : f.id,
                page: S,
                source: r.F.APP_DIRECTORY
            })
        })),
        v = (0, c.Z)(A),
        Z = a.useMemo(() => (N === u.M.FETCHING ? v : A), [N, v, A]);
    a.useEffect(() => {
        C(1);
    }, [null == f ? void 0 : f.id, n]);
    let L = a.useCallback(
        (e) => {
            d.yC({
                query: n,
                options: {
                    page: e,
                    source: r.F.APP_DIRECTORY,
                    categoryId: null == f ? void 0 : f.id
                }
            }),
                C(e);
        },
        [n, f]
    );
    return (0, i.jsx)(m.Z, {
        children: (0, i.jsxs)(h.Z, {
            children: [
                (0, i.jsx)(E.Z, {
                    loading: N === u.M.FETCHING,
                    children: (0, i.jsx)('div', {
                        className: T.content,
                        children:
                            null == Z
                                ? void 0
                                : Z.results.map((e) => {
                                      if (e.type === s.s.APPLICATION) {
                                          let t = e.data;
                                          return (0, i.jsx)(I.Z, { application: t }, t.id);
                                      }
                                      return null;
                                  })
                    })
                }),
                (0, i.jsx)(o.Paginator, {
                    className: T.paginationInput,
                    totalCount: Math.min((null !== (t = null == Z ? void 0 : Z.totalPages) && void 0 !== t ? t : 0) * g.IV, g.Et * g.IV),
                    pageSize: g.IV,
                    disablePaginationGap: !0,
                    hideMaxPage: !0,
                    currentPage: S,
                    onPageChange: L
                })
            ]
        })
    });
}
