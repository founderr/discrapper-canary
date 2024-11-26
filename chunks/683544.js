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
    let { categoryId: n, onSelectApplication: I } = e,
        [E, C] = r.useState(1),
        v = r.useCallback((e) => {
            C(e);
        }, []);
    r.useEffect(() => {
        C(1);
    }, [n]);
    let N = r.useMemo(
            () => ({
                query: g.Mm,
                page: E,
                pageSize: g.IV,
                categoryId: n
            }),
            [E, n]
        ),
        S = (0, a.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: g.Mm,
                page: E,
                pageSize: g.IV,
                categoryId: n
            })
        ),
        T = (0, a.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(N)) && void 0 !== e ? e : _;
        }),
        x = null !== (t = (0, o.Z)(T)) && void 0 !== t ? t : _,
        { results: b, totalPages: A } = r.useMemo(() => (S === d.M.FETCHING ? x : T), [S, x, T]),
        Z = r.useMemo(() => (null == b ? void 0 : b.filter((e) => !(e.type !== l.s.APPLICATION))), [b]),
        L = r.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: r, fetchCounts: l } = e;
            l &&
                c.yC({
                    query: g.Mm,
                    guildId: r
                }),
                c.yC({
                    query: g.Mm,
                    guildId: r,
                    options: {
                        page: t,
                        pageSize: g.IV,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (r.useEffect(() => {
        L({
            page: E,
            activeCategoryId: n,
            onSuccessCallback: () => {}
        });
    }, [n, L, E]),
    S === d.M.ERROR)
        ? (0, i.jsx)('div', {
              className: f.errorContainer,
              children: (0, i.jsx)(p.Z, { className: f.error })
          })
        : (0, i.jsxs)(h.Z, {
              loading: S === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: f.content,
                      children:
                          null == Z
                              ? void 0
                              : Z.map((e) => {
                                    if (e.type === l.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, i.jsx)(
                                            m.Z,
                                            {
                                                application: t,
                                                onSelectApplication: I
                                            },
                                            t.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(s.Paginator, {
                      className: f.paginationInput,
                      totalCount: Math.min(A * g.IV, g.Et * g.IV),
                      pageSize: g.IV,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: E,
                      onPageChange: v
                  })
              ]
          });
};
