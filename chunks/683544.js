n(47120);
var i = n(735250),
    a = n(470079),
    s = n(209173),
    r = n(399606),
    l = n(481060),
    o = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    _ = n(125909),
    E = n(797908),
    h = n(292191),
    m = n(854336);
let I = {
    results: [],
    totalPages: 0
};
t.Z = function (e) {
    var t;
    let { categoryId: n } = e,
        [p, g] = a.useState(1),
        T = a.useCallback((e) => {
            g(e);
        }, []);
    a.useEffect(() => {
        g(1);
    }, [n]);
    let f = a.useMemo(
            () => ({
                query: '',
                page: p,
                categoryId: n
            }),
            [p, n]
        ),
        S = (0, r.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: '',
                page: p,
                categoryId: n
            })
        ),
        C = (0, r.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(f)) && void 0 !== e ? e : I;
        }),
        N = null !== (t = (0, o.Z)(C)) && void 0 !== t ? t : I,
        { results: A, totalPages: v } = a.useMemo(() => (S === d.M.FETCHING ? N : C), [S, N, C]),
        Z = a.useMemo(() => (null == A ? void 0 : A.filter((e) => !(e.type !== s.s.APPLICATION))), [A]),
        L = a.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: a, fetchCounts: s } = e;
            s &&
                c.yC({
                    query: '',
                    guildId: a
                }),
                c.yC({
                    query: '',
                    guildId: a,
                    options: {
                        page: t,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (a.useEffect(() => {
        L({
            page: p,
            activeCategoryId: n,
            onSuccessCallback: () => {}
        });
    }, [n, L, p]),
    S === d.M.ERROR)
        ? (0, i.jsx)('div', {
              className: m.errorContainer,
              children: (0, i.jsx)(h.Z, { className: m.error })
          })
        : (0, i.jsxs)(_.Z, {
              loading: S === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: m.content,
                      children:
                          null == Z
                              ? void 0
                              : Z.map((e) => {
                                    if (e.type === s.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, i.jsx)(E.Z, { application: t }, t.id);
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(l.Paginator, {
                      className: m.paginationInput,
                      totalCount: Math.min(7 * v, 700),
                      pageSize: 7,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: p,
                      onPageChange: T
                  })
              ]
          });
};
