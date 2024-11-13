n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(209173),
    a = n(288385),
    s = n(442837),
    o = n(481060),
    c = n(110924),
    d = n(674588),
    u = n(264043),
    h = n(809547),
    m = n(34674),
    p = n(125909),
    g = n(374939),
    f = n(283293),
    _ = n(797908),
    E = n(120549),
    I = n(979007),
    C = n(463051);
function v(e) {
    var t;
    let { query: n, onSelectApplication: v } = e,
        [S, N] = r.useState(),
        [T, x] = r.useState(1),
        { fetchState: A, searchResults: b } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
                query: n,
                categoryId: S,
                page: T,
                pageSize: I.IV,
                source: a.F.APP_DIRECTORY
            }),
            searchResults: h.Z.getSearchResults({
                query: n,
                categoryId: S,
                page: T,
                pageSize: I.IV,
                source: a.F.APP_DIRECTORY
            })
        })),
        Z = (0, s.cj)([h.Z], () => {
            let e = h.Z.getSearchResults({
                query: n,
                page: 1,
                pageSize: I.IV,
                source: a.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [m.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        y = (0, c.Z)(b),
        L = r.useMemo(() => (A === u.M.FETCHING ? y : b), [A, y, b]);
    r.useEffect(() => {
        x(1);
    }, [n]);
    let R = r.useCallback(
            (e) => {
                d.yC({
                    query: n,
                    options: {
                        page: e,
                        pageSize: I.IV,
                        source: a.F.APP_DIRECTORY,
                        categoryId: S
                    }
                }),
                    x(e);
            },
            [n, S]
        ),
        O = r.useCallback(
            (e) => {
                x(1),
                    N(e),
                    d.yC({
                        query: n,
                        options: {
                            page: 1,
                            source: a.F.APP_DIRECTORY,
                            categoryId: e,
                            pageSize: I.IV
                        }
                    });
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, {
                children: (0, i.jsx)(g.Z, {
                    children: (0, i.jsxs)('div', {
                        className: C.container,
                        children: [
                            (0, i.jsx)('div', {
                                className: C.topFilterContainer,
                                children: (0, i.jsx)(E.V, {
                                    countsByCategory: Z,
                                    selectedCategoryId: null != S ? S : m.MU,
                                    onSelectCategory: O
                                })
                            }),
                            (0, i.jsx)(p.Z, {
                                loading: A === u.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: C.content,
                                    children:
                                        null == L
                                            ? void 0
                                            : L.results.map((e) => {
                                                  if (e.type === l.s.APPLICATION) {
                                                      let t = e.data;
                                                      return (0, i.jsx)(
                                                          _.Z,
                                                          {
                                                              application: t,
                                                              onSelectApplication: v,
                                                              showCategory: !0
                                                          },
                                                          t.id
                                                      );
                                                  }
                                                  return null;
                                              })
                                })
                            }),
                            (0, i.jsx)(o.Paginator, {
                                className: C.paginationInput,
                                totalCount: Math.min((null !== (t = null == L ? void 0 : L.totalPages) && void 0 !== t ? t : 0) * I.IV, I.Et * I.IV),
                                pageSize: I.IV,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: T,
                                onPageChange: R
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: C.sideFilterContainer,
                children: (0, i.jsx)('div', {
                    className: C.sideFilterContent,
                    children: (0, i.jsx)(E.Z, {
                        countsByCategory: Z,
                        selectedCategoryId: null != S ? S : m.MU,
                        onSelectCategory: O
                    })
                })
            })
        ]
    });
}
