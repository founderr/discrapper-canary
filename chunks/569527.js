n.d(t, {
    Z: function () {
        return S;
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
    d = n(393903),
    u = n(674588),
    h = n(264043),
    m = n(809547),
    p = n(34674),
    g = n(125909),
    f = n(374939),
    _ = n(283293),
    E = n(797908),
    I = n(120549),
    C = n(979007),
    v = n(870411);
function S(e) {
    var t;
    let { query: n, initialCategoryId: S, onSelectApplication: N } = e,
        [T, x] = r.useState(S),
        [A, b] = r.useState(1),
        [Z, y] = r.useState(!0),
        L = r.useRef(Z),
        [R, j] = r.useState(0),
        O = r.useRef(null),
        { fetchState: P, searchResults: D } = (0, s.cj)([m.Z], () => ({
            fetchState: m.Z.getFetchState({
                query: n,
                categoryId: T,
                page: A,
                pageSize: C.IV,
                source: a.F.APP_DIRECTORY
            }),
            searchResults: m.Z.getSearchResults({
                query: n,
                categoryId: T,
                page: A,
                pageSize: C.IV,
                source: a.F.APP_DIRECTORY
            })
        })),
        M = (0, s.cj)([m.Z], () => {
            let e = m.Z.getSearchResults({
                query: n,
                page: 1,
                pageSize: C.IV,
                source: a.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [p.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        w = (0, c.Z)(D),
        k = r.useMemo(() => (P === h.M.FETCHING ? w : D), [P, w, D]);
    r.useEffect(() => {
        b(1);
    }, [n]);
    let U = r.useCallback(
            (e) => {
                u.yC({
                    query: n,
                    options: {
                        page: e,
                        pageSize: C.IV,
                        source: a.F.APP_DIRECTORY,
                        categoryId: T
                    }
                }),
                    b(e);
            },
            [n, T]
        ),
        G = (0, d.y)((e) => {
            var t;
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return;
            let i = n.width;
            i < 1024 && L.current ? ((L.current = !1), y(!1)) : i > 1024 && !L.current && ((L.current = !0), y(!0));
            let r = null === (t = O.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            null != r && j(r.width);
        }),
        B = r.useCallback(
            (e) => {
                b(1),
                    x(e),
                    u.yC({
                        query: n,
                        options: {
                            page: 1,
                            source: a.F.APP_DIRECTORY,
                            categoryId: e,
                            pageSize: C.IV
                        }
                    });
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                children: (0, i.jsxs)(f.Z, {
                    children: [
                        (0, i.jsx)(g.Z, {
                            loading: P === h.M.FETCHING,
                            children: (0, i.jsx)('div', {
                                ref: G,
                                children: (0, i.jsx)('div', {
                                    className: v.content,
                                    style: { paddingRight: Z ? R + 32 : void 0 },
                                    children:
                                        null == k
                                            ? void 0
                                            : k.results.map((e) => {
                                                  if (e.type === l.s.APPLICATION) {
                                                      let t = e.data;
                                                      return (0, i.jsx)(
                                                          E.Z,
                                                          {
                                                              application: t,
                                                              onSelectApplication: N,
                                                              showCategory: !0
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
                            className: v.paginationInput,
                            totalCount: Math.min((null !== (t = null == k ? void 0 : k.totalPages) && void 0 !== t ? t : 0) * C.IV, C.Et * C.IV),
                            pageSize: C.IV,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: A,
                            onPageChange: U
                        })
                    ]
                })
            }),
            Z &&
                (0, i.jsx)('div', {
                    className: v.sidebar,
                    ref: O,
                    children: (0, i.jsx)('div', {
                        className: v.sidebarContent,
                        children: (0, i.jsx)(I.Z, {
                            countsByCategory: M,
                            selectedCategoryId: null != T ? T : p.MU,
                            onSelectCategory: B
                        })
                    })
                })
        ]
    });
}
