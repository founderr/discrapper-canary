n.d(t, {
    Z: function () {
        return T;
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
    s = n(288385),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(674588),
    h = n(264043),
    m = n(809547),
    p = n(34674),
    g = n(125909),
    f = n(374939),
    _ = n(283293),
    E = n(797908),
    I = n(133743),
    C = n(120549),
    v = n(753511),
    N = n(979007),
    S = n(378105);
function T(e) {
    var t;
    let { onSelectApplication: n } = e,
        T = r.useRef(null),
        b = (0, l.TH)(),
        x = r.useRef(null),
        {
            query: A,
            page: Z,
            categoryId: L
        } = r.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(b.search),
                i = n.get('page'),
                r = null != i ? Number(i) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: r,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : p.MU
            };
        }, [b.search]);
    r.useEffect(() => {
        var e;
        null === (e = T.current) || void 0 === e || e.scrollTo({ to: 0 }),
            A !== x.current &&
                ((x.current = A),
                u.yC({
                    query: A,
                    options: { source: s.F.APP_DIRECTORY }
                })),
            u.yC({
                query: A,
                options: {
                    categoryId: L,
                    page: Z,
                    pageSize: N.PAGE_SIZE,
                    source: s.F.APP_DIRECTORY
                }
            });
    }, [L, Z, A]);
    let { fetchState: y, searchResults: P } = (0, o.cj)([m.Z], () => ({
            fetchState: m.Z.getFetchState({
                query: A,
                categoryId: L,
                page: Z,
                pageSize: N.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: m.Z.getSearchResults({
                query: A,
                categoryId: L,
                page: Z,
                pageSize: N.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            })
        })),
        O = (0, o.cj)([m.Z], () => {
            let e = m.Z.getSearchResults({
                query: A,
                source: s.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [p.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        R = (0, d.Z)(P),
        j = r.useMemo(() => (y === h.M.FETCHING ? R : P), [y, R, P]),
        D = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: A,
                    categoryId: L,
                    page: e
                });
            },
            [L, A]
        ),
        M = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: A,
                    categoryId: e
                });
            },
            [A]
        );
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(_.Z, {
                ref: T,
                children: (0, i.jsx)(f.Z, {
                    children: (0, i.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: S.topFilterContainer,
                                children: (0, i.jsx)(C.V, {
                                    countsByCategory: O,
                                    selectedCategoryId: L,
                                    onSelectCategory: M
                                })
                            }),
                            (0, i.jsx)(g.Z, {
                                loading: y === h.M.FETCHING,
                                children:
                                    y === h.M.FETCHED && (null == j || (null == j ? void 0 : j.results.length) === 0)
                                        ? (0, i.jsx)(v.Z, {
                                              selectedCategoryId: null != L ? L : p.MU,
                                              searchAllCategories: () => M(p.MU)
                                          })
                                        : (0, i.jsx)('div', {
                                              className: S.content,
                                              children:
                                                  null == j
                                                      ? void 0
                                                      : j.results.map((e) => {
                                                            if (e.type === a.s.APPLICATION) {
                                                                let t = e.data;
                                                                return (0, i.jsx)(
                                                                    E.Z,
                                                                    {
                                                                        application: t,
                                                                        onSelectApplication: n,
                                                                        showCategory: !0
                                                                    },
                                                                    t.id
                                                                );
                                                            }
                                                            return null;
                                                        })
                                          })
                            }),
                            (0, i.jsx)(c.Paginator, {
                                className: S.paginationInput,
                                totalCount: Math.min((null !== (t = null == j ? void 0 : j.totalPages) && void 0 !== t ? t : 0) * N.PAGE_SIZE, N.MAX_PAGES * N.PAGE_SIZE),
                                pageSize: N.PAGE_SIZE,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: Z,
                                onPageChange: D
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: S.sideFilterContainer,
                children: (0, i.jsx)('div', {
                    className: S.sideFilterContent,
                    children: (0, i.jsx)(C.Z, {
                        countsByCategory: O,
                        selectedCategoryId: L,
                        onSelectCategory: M
                    })
                })
            })
        ]
    });
}
