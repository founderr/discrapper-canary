n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(209173),
    r = n(288385),
    l = n(442837),
    o = n(481060),
    c = n(110924),
    d = n(393903),
    u = n(674588),
    _ = n(264043),
    E = n(809547),
    h = n(34674),
    m = n(125909),
    I = n(374939),
    p = n(283293),
    g = n(797908),
    T = n(120549),
    f = n(979007),
    C = n(463051);
function S(e) {
    var t;
    let { query: n, onSelectApplication: S } = e,
        [N, A] = a.useState(void 0),
        [v, Z] = a.useState(1),
        [L, R] = a.useState(!0),
        O = a.useRef(L),
        [x, b] = a.useState(0),
        M = a.useRef(null),
        { fetchState: P, searchResults: D } = (0, l.cj)([E.Z], () => ({
            fetchState: E.Z.getFetchState({
                query: n,
                categoryId: N,
                page: v,
                pageSize: f.IV,
                source: r.F.APP_DIRECTORY
            }),
            searchResults: E.Z.getSearchResults({
                query: n,
                categoryId: N,
                page: v,
                pageSize: f.IV,
                source: r.F.APP_DIRECTORY
            })
        })),
        y = (0, l.cj)([E.Z], () => {
            let e = E.Z.getSearchResults({
                query: n,
                page: 1,
                pageSize: f.IV,
                source: r.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [h.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        j = (0, c.Z)(D),
        U = a.useMemo(() => (P === _.M.FETCHING ? j : D), [P, j, D]);
    a.useEffect(() => {
        A(void 0), Z(1);
    }, [n]);
    let G = a.useCallback(
            (e) => {
                u.yC({
                    query: n,
                    options: {
                        page: e,
                        pageSize: f.IV,
                        source: r.F.APP_DIRECTORY,
                        categoryId: N
                    }
                }),
                    Z(e);
            },
            [n, N]
        ),
        w = (0, d.y)((e) => {
            var t;
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return;
            let i = n.width;
            i < 1024 && O.current ? ((O.current = !1), R(!1)) : i > 1024 && !O.current && ((O.current = !0), R(!0));
            let a = null === (t = M.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            null != a && b(a.width);
        }),
        k = a.useCallback(
            (e) => {
                Z(1),
                    A(e),
                    u.yC({
                        query: n,
                        options: {
                            page: 1,
                            source: r.F.APP_DIRECTORY,
                            categoryId: e
                        }
                    });
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.Z, {
                children: (0, i.jsxs)(I.Z, {
                    children: [
                        (0, i.jsx)(m.Z, {
                            loading: P === _.M.FETCHING,
                            children: (0, i.jsx)('div', {
                                ref: w,
                                children: (0, i.jsx)('div', {
                                    className: C.content,
                                    style: { paddingRight: L ? x + 32 : void 0 },
                                    children:
                                        null == U
                                            ? void 0
                                            : U.results.map((e) => {
                                                  if (e.type === s.s.APPLICATION) {
                                                      let t = e.data;
                                                      return (0, i.jsx)(
                                                          g.Z,
                                                          {
                                                              application: t,
                                                              onSelectApplication: S
                                                          },
                                                          t.id
                                                      );
                                                  }
                                                  return null;
                                              })
                                })
                            })
                        }),
                        (0, i.jsx)(o.Paginator, {
                            className: C.paginationInput,
                            totalCount: Math.min((null !== (t = null == U ? void 0 : U.totalPages) && void 0 !== t ? t : 0) * f.IV, f.Et * f.IV),
                            pageSize: f.IV,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: v,
                            onPageChange: G
                        })
                    ]
                })
            }),
            L &&
                (0, i.jsx)('div', {
                    className: C.sidebar,
                    ref: M,
                    children: (0, i.jsx)('div', {
                        className: C.sidebarContent,
                        children: (0, i.jsx)(T.Z, {
                            countsByCategory: y,
                            selectedCategoryId: null != N ? N : h.MU,
                            onSelectCategory: k
                        })
                    })
                })
        ]
    });
}
