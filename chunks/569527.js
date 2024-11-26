n.d(t, {
    Z: function () {
        return S;
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
    v = n(979007),
    N = n(378105);
function S(e) {
    var t;
    let { onSelectApplication: n } = e,
        S = (0, l.TH)(),
        T = r.useRef(null),
        {
            query: x,
            page: b,
            categoryId: A
        } = r.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(S.search),
                i = n.get('page'),
                r = null != i ? Number(i) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: r,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : p.MU
            };
        }, [S.search]);
    r.useEffect(() => {
        x !== T.current &&
            ((T.current = x),
            u.yC({
                query: x,
                options: { source: s.F.APP_DIRECTORY }
            })),
            u.yC({
                query: x,
                options: {
                    categoryId: A,
                    page: b,
                    pageSize: v.IV,
                    source: s.F.APP_DIRECTORY
                }
            });
    }, [A, b, x]);
    let { fetchState: Z, searchResults: L } = (0, o.cj)([m.Z], () => ({
            fetchState: m.Z.getFetchState({
                query: x,
                categoryId: A,
                page: b,
                pageSize: v.IV,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: m.Z.getSearchResults({
                query: x,
                categoryId: A,
                page: b,
                pageSize: v.IV,
                source: s.F.APP_DIRECTORY
            })
        })),
        y = (0, o.cj)([m.Z], () => {
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
        P = (0, d.Z)(L),
        O = r.useMemo(() => (Z === h.M.FETCHING ? P : L), [Z, P, L]),
        R = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: x,
                    categoryId: A,
                    page: e
                });
            },
            [A, x]
        ),
        j = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: x,
                    categoryId: e
                });
            },
            [x]
        );
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsx)(_.Z, {
                children: (0, i.jsx)(f.Z, {
                    children: (0, i.jsxs)('div', {
                        className: N.contentContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: N.topFilterContainer,
                                children: (0, i.jsx)(C.V, {
                                    countsByCategory: y,
                                    selectedCategoryId: A,
                                    onSelectCategory: j
                                })
                            }),
                            (0, i.jsx)(g.Z, {
                                loading: Z === h.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: N.content,
                                    children:
                                        null == O
                                            ? void 0
                                            : O.results.map((e) => {
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
                                className: N.paginationInput,
                                totalCount: Math.min((null !== (t = null == O ? void 0 : O.totalPages) && void 0 !== t ? t : 0) * v.IV, v.Et * v.IV),
                                pageSize: v.IV,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: b,
                                onPageChange: R
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: N.sideFilterContainer,
                children: (0, i.jsx)('div', {
                    className: N.sideFilterContent,
                    children: (0, i.jsx)(C.Z, {
                        countsByCategory: y,
                        selectedCategoryId: A,
                        onSelectCategory: j
                    })
                })
            })
        ]
    });
}
