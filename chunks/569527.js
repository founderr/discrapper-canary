n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(209173),
    o = n(288385),
    s = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(674588),
    h = n(264043),
    m = n(894653),
    p = n(809547),
    g = n(34674),
    f = n(125909),
    _ = n(374939),
    E = n(283293),
    I = n(493646),
    C = n(881294),
    v = n(797908),
    S = n(258971),
    N = n(133743),
    T = n(120549),
    b = n(753511),
    x = n(979007),
    A = n(981631),
    Z = n(378105);
function L(e) {
    var t;
    let { onSelectApplication: n, onScroll: L } = e,
        P = r.useRef(null),
        y = (0, l.TH)(),
        O = r.useRef(null),
        {
            query: R,
            page: j,
            categoryId: D
        } = r.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(y.search),
                i = n.get('page'),
                r = null != i ? Number(i) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: r,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : x.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [y.search]),
        M = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        w = r.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        k = r.useCallback(
            (e) => {
                (0, C.z)(A.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: R,
                    num_results: e,
                    current_page: S.m_.SEARCH,
                    result_page: j,
                    category: null == w ? void 0 : w.name,
                    category_id: null == w ? void 0 : w.id
                });
            },
            [R, j, null == w ? void 0 : w.name, null == w ? void 0 : w.id]
        );
    r.useEffect(() => {
        var e;
        null === (e = P.current) || void 0 === e || e.scrollTo({ to: 0 }),
            R !== O.current &&
                ((O.current = R),
                u.yC({
                    query: R,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            u.yC({
                query: R,
                options: {
                    categoryId: D,
                    page: j,
                    pageSize: x.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: k
            });
    }, [D, j, R, k]);
    let { fetchState: U, searchResults: G } = (0, s.cj)([p.Z], () => ({
            fetchState: p.Z.getFetchState({
                query: R,
                categoryId: D,
                page: j,
                pageSize: x.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: p.Z.getSearchResults({
                query: R,
                categoryId: D,
                page: j,
                pageSize: x.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        B = (0, s.cj)([p.Z], () => {
            let e = p.Z.getSearchResults({
                query: R,
                source: o.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [g.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        H = (0, d.Z)(G),
        V = r.useMemo(() => (U === h.M.FETCHING ? H : G), [U, H, G]),
        F = r.useCallback(
            (e) => {
                (0, N.pR)({
                    query: R,
                    categoryId: D,
                    page: e
                });
            },
            [D, R]
        ),
        z = r.useCallback(
            (e) => {
                (0, C.z)(A.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: S.m_.SEARCH
                }),
                    (0, N.pR)({
                        query: R,
                        categoryId: e.id
                    });
            },
            [R]
        ),
        W = r.useCallback(
            (e, t) => {
                (0, C.z)(A.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: S.m_.SEARCH,
                    application_id: e,
                    load_id: null == V ? void 0 : V.loadId,
                    search_term: R,
                    position: t
                }),
                    n(e);
            },
            [null == V ? void 0 : V.loadId, n, R]
        ),
        Y = (0, I.K)();
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsx)(E.Z, {
                ref: P,
                onScroll: L,
                children: (0, i.jsx)(_.Z, {
                    children: (0, i.jsxs)('div', {
                        className: Z.contentContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: Z.topFilterContainer,
                                children: (0, i.jsx)(T.V, {
                                    countsByCategory: B,
                                    selectedCategoryId: D,
                                    onSelectCategory: z
                                })
                            }),
                            (0, i.jsx)(f.Z, {
                                loading: U === h.M.FETCHING,
                                children:
                                    U === h.M.FETCHED && (null == V || (null == V ? void 0 : V.results.length) === 0)
                                        ? (0, i.jsx)(b.Z, {
                                              selectedCategoryId: null != D ? D : Y.id,
                                              searchAllCategories: () => z(Y)
                                          })
                                        : (0, i.jsx)('div', {
                                              className: Z.content,
                                              children:
                                                  null == V
                                                      ? void 0
                                                      : V.results.map((e, t) => {
                                                            if (e.type === a.s.APPLICATION) {
                                                                let n = e.data;
                                                                return (0, i.jsx)(
                                                                    v.Z,
                                                                    {
                                                                        application: n,
                                                                        onSelectApplication: (e) => W(e, t),
                                                                        showCategory: !0
                                                                    },
                                                                    n.id
                                                                );
                                                            }
                                                            return null;
                                                        })
                                          })
                            }),
                            (0, i.jsx)(c.Paginator, {
                                className: Z.paginationInput,
                                totalCount: Math.min((null !== (t = null == V ? void 0 : V.totalPages) && void 0 !== t ? t : 0) * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                                pageSize: x.PAGE_SIZE,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: j,
                                onPageChange: F
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: Z.sideFilterContainer,
                children: (0, i.jsx)('div', {
                    className: Z.sideFilterContent,
                    children: (0, i.jsx)(T.Z, {
                        countsByCategory: B,
                        selectedCategoryId: D,
                        onSelectCategory: z
                    })
                })
            })
        ]
    });
}
