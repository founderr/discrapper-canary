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
    C = n(870411);
function v(e) {
    var t;
    let { query: n, initialCategoryId: v, onSelectApplication: S } = e,
        [N, T] = r.useState(v),
        [x, A] = r.useState(1),
        { fetchState: b, searchResults: Z } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
                query: n,
                categoryId: N,
                page: x,
                pageSize: I.IV,
                source: a.F.APP_DIRECTORY
            }),
            searchResults: h.Z.getSearchResults({
                query: n,
                categoryId: N,
                page: x,
                pageSize: I.IV,
                source: a.F.APP_DIRECTORY
            })
        })),
        y = (0, s.cj)([h.Z], () => {
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
        L = (0, c.Z)(Z),
        R = r.useMemo(() => (b === u.M.FETCHING ? L : Z), [b, L, Z]);
    r.useEffect(() => {
        A(1);
    }, [n]);
    let j = r.useCallback(
            (e) => {
                d.yC({
                    query: n,
                    options: {
                        page: e,
                        pageSize: I.IV,
                        source: a.F.APP_DIRECTORY,
                        categoryId: N
                    }
                }),
                    A(e);
            },
            [n, N]
        ),
        O = r.useCallback(
            (e) => {
                A(1),
                    T(e),
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
                                    countsByCategory: y,
                                    selectedCategoryId: null != N ? N : m.MU,
                                    onSelectCategory: O
                                })
                            }),
                            (0, i.jsx)(p.Z, {
                                loading: b === u.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: C.content,
                                    children:
                                        null == R
                                            ? void 0
                                            : R.results.map((e) => {
                                                  if (e.type === l.s.APPLICATION) {
                                                      let t = e.data;
                                                      return (0, i.jsx)(
                                                          _.Z,
                                                          {
                                                              application: t,
                                                              onSelectApplication: S,
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
                                totalCount: Math.min((null !== (t = null == R ? void 0 : R.totalPages) && void 0 !== t ? t : 0) * I.IV, I.Et * I.IV),
                                pageSize: I.IV,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: x,
                                onPageChange: j
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
                        countsByCategory: y,
                        selectedCategoryId: null != N ? N : m.MU,
                        onSelectCategory: O
                    })
                })
            })
        ]
    });
}
