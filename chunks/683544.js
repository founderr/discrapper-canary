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
    m = n(979007),
    I = n(854336);
let p = {
    results: [],
    totalPages: 0
};
t.Z = function (e) {
    var t;
    let { categoryId: n, onSelectApplication: g } = e,
        [T, S] = a.useState(1),
        f = a.useCallback((e) => {
            S(e);
        }, []);
    a.useEffect(() => {
        S(1);
    }, [n]);
    let C = a.useMemo(
            () => ({
                query: m.Mm,
                page: T,
                categoryId: n
            }),
            [T, n]
        ),
        N = (0, r.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: m.Mm,
                page: T,
                categoryId: n
            })
        ),
        A = (0, r.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(C)) && void 0 !== e ? e : p;
        }),
        v = null !== (t = (0, o.Z)(A)) && void 0 !== t ? t : p,
        { results: Z, totalPages: L } = a.useMemo(() => (N === d.M.FETCHING ? v : A), [N, v, A]),
        O = a.useMemo(() => (null == Z ? void 0 : Z.filter((e) => !(e.type !== s.s.APPLICATION))), [Z]),
        R = a.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: a, fetchCounts: s } = e;
            s &&
                c.yC({
                    query: m.Mm,
                    guildId: a
                }),
                c.yC({
                    query: m.Mm,
                    guildId: a,
                    options: {
                        page: t,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (a.useEffect(() => {
        R({
            page: T,
            activeCategoryId: n,
            onSuccessCallback: () => {}
        });
    }, [n, R, T]),
    N === d.M.ERROR)
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(h.Z, { className: I.error })
          })
        : (0, i.jsxs)(_.Z, {
              loading: N === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: I.content,
                      children:
                          null == O
                              ? void 0
                              : O.map((e) => {
                                    if (e.type === s.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, i.jsx)(
                                            E.Z,
                                            {
                                                application: t,
                                                onSelectApplication: g
                                            },
                                            t.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(l.Paginator, {
                      className: I.paginationInput,
                      totalCount: Math.min(L * m.IV, m.Et * m.IV),
                      pageSize: m.IV,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: T,
                      onPageChange: f
                  })
              ]
          });
};
