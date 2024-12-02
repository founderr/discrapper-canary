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
        T = (0, l.TH)(),
        b = r.useRef(null),
        {
            query: x,
            page: A,
            categoryId: Z
        } = r.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(T.search),
                i = n.get('page'),
                r = null != i ? Number(i) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: r,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : p.MU
            };
        }, [T.search]);
    r.useEffect(() => {
        x !== b.current &&
            ((b.current = x),
            u.yC({
                query: x,
                options: { source: s.F.APP_DIRECTORY }
            })),
            u.yC({
                query: x,
                options: {
                    categoryId: Z,
                    page: A,
                    pageSize: N.IV,
                    source: s.F.APP_DIRECTORY
                }
            });
    }, [Z, A, x]);
    let { fetchState: L, searchResults: y } = (0, o.cj)([m.Z], () => ({
            fetchState: m.Z.getFetchState({
                query: x,
                categoryId: Z,
                page: A,
                pageSize: N.IV,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: m.Z.getSearchResults({
                query: x,
                categoryId: Z,
                page: A,
                pageSize: N.IV,
                source: s.F.APP_DIRECTORY
            })
        })),
        P = (0, o.cj)([m.Z], () => {
            let e = m.Z.getSearchResults({
                query: x,
                source: s.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [p.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        O = (0, d.Z)(y),
        R = r.useMemo(() => (L === h.M.FETCHING ? O : y), [L, O, y]),
        j = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: x,
                    categoryId: Z,
                    page: e
                });
            },
            [Z, x]
        ),
        D = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: x,
                    categoryId: e
                });
            },
            [x]
        );
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(_.Z, {
                children: (0, i.jsx)(f.Z, {
                    children: (0, i.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: S.topFilterContainer,
                                children: (0, i.jsx)(C.V, {
                                    countsByCategory: P,
                                    selectedCategoryId: Z,
                                    onSelectCategory: D
                                })
                            }),
                            (0, i.jsx)(g.Z, {
                                loading: L === h.M.FETCHING,
                                children:
                                    L === h.M.FETCHED && (null == R || (null == R ? void 0 : R.results.length) === 0)
                                        ? (0, i.jsx)(v.Z, {
                                              selectedCategoryId: null != Z ? Z : p.MU,
                                              searchAllCategories: () => D(p.MU)
                                          })
                                        : (0, i.jsx)('div', {
                                              className: S.content,
                                              children:
                                                  null == R
                                                      ? void 0
                                                      : R.results.map((e) => {
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
                                totalCount: Math.min((null !== (t = null == R ? void 0 : R.totalPages) && void 0 !== t ? t : 0) * N.IV, N.Et * N.IV),
                                pageSize: N.IV,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: A,
                                onPageChange: j
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
                        countsByCategory: P,
                        selectedCategoryId: Z,
                        onSelectCategory: D
                    })
                })
            })
        ]
    });
}
