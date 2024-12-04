n(47120);
var i = n(200651),
    r = n(192379),
    l = n(209173),
    a = n(399606),
    s = n(481060),
    o = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    h = n(125909),
    m = n(797908),
    p = n(292191),
    g = n(979007),
    f = n(76413);
let _ = {
    results: [],
    totalPages: 0
};
t.Z = function (e) {
    var t;
    let { categoryId: n, onSelectApplication: E, resetScroll: I } = e,
        [C, v] = r.useState(1),
        N = r.useCallback((e) => {
            v(e);
        }, []);
    r.useEffect(() => {
        v(1);
    }, [n]);
    let S = r.useMemo(
            () => ({
                query: g.EMPTY_QUERY,
                page: C,
                pageSize: g.PAGE_SIZE,
                categoryId: n
            }),
            [C, n]
        ),
        T = (0, a.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: g.EMPTY_QUERY,
                page: C,
                pageSize: g.PAGE_SIZE,
                categoryId: n
            })
        ),
        b = (0, a.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(S)) && void 0 !== e ? e : _;
        }),
        A = null !== (t = (0, o.Z)(b)) && void 0 !== t ? t : _,
        { results: x, totalPages: Z } = r.useMemo(() => (T === d.M.FETCHING ? A : b), [T, A, b]),
        L = r.useMemo(() => (null == x ? void 0 : x.filter((e) => !(e.type !== l.s.APPLICATION))), [x]),
        y = r.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: r, fetchCounts: l } = e;
            l &&
                c.yC({
                    query: g.EMPTY_QUERY,
                    guildId: r
                }),
                c.yC({
                    query: g.EMPTY_QUERY,
                    guildId: r,
                    options: {
                        page: t,
                        pageSize: g.PAGE_SIZE,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (r.useEffect(() => {
        I(),
            y({
                page: C,
                activeCategoryId: n,
                onSuccessCallback: () => {}
            });
    }, [n, I, y, C]),
    T === d.M.ERROR)
        ? (0, i.jsx)('div', {
              className: f.errorContainer,
              children: (0, i.jsx)(p.Z, { className: f.error })
          })
        : (0, i.jsxs)(h.Z, {
              loading: T === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: f.content,
                      children:
                          null == L
                              ? void 0
                              : L.map((e) => {
                                    if (e.type === l.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, i.jsx)(
                                            m.Z,
                                            {
                                                application: t,
                                                onSelectApplication: E
                                            },
                                            t.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(s.Paginator, {
                      className: f.paginationInput,
                      totalCount: Math.min(Z * g.PAGE_SIZE, g.MAX_PAGES * g.PAGE_SIZE),
                      pageSize: g.PAGE_SIZE,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: C,
                      onPageChange: N
                  })
              ]
          });
};
