n(47120);
var i = n(200651),
    r = n(192379),
    l = n(209173),
    a = n(399606),
    o = n(481060),
    s = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    h = n(125909),
    m = n(881294),
    p = n(797908),
    g = n(292191),
    f = n(258971),
    _ = n(979007),
    E = n(981631),
    I = n(76413);
let C = {
    results: [],
    totalPages: 0,
    loadId: ''
};
t.Z = function (e) {
    var t;
    let { categoryId: n, onSelectApplication: v, resetScroll: S } = e,
        [N, T] = r.useState(1),
        b = r.useCallback((e) => {
            T(e);
        }, []);
    r.useEffect(() => {
        T(1);
    }, [n]);
    let A = r.useMemo(
            () => ({
                query: _.EMPTY_QUERY,
                page: N,
                pageSize: _.PAGE_SIZE,
                categoryId: n
            }),
            [N, n]
        ),
        x = (0, a.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: _.EMPTY_QUERY,
                page: N,
                pageSize: _.PAGE_SIZE,
                categoryId: n
            })
        ),
        Z = (0, a.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(A)) && void 0 !== e ? e : C;
        }),
        L = null !== (t = (0, s.Z)(Z)) && void 0 !== t ? t : C,
        { results: y, totalPages: P, loadId: O } = r.useMemo(() => (x === d.M.FETCHING ? L : Z), [x, L, Z]),
        R = r.useMemo(() => (null == y ? void 0 : y.filter((e) => !(e.type !== l.s.APPLICATION))), [y]),
        j = r.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: r, fetchCounts: l } = e;
            l &&
                c.yC({
                    query: _.EMPTY_QUERY,
                    guildId: r
                }),
                c.yC({
                    query: _.EMPTY_QUERY,
                    guildId: r,
                    options: {
                        page: t,
                        pageSize: _.PAGE_SIZE,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    r.useEffect(() => {
        S(),
            j({
                page: N,
                activeCategoryId: n,
                onSuccessCallback: () => {}
            });
    }, [n, S, j, N]);
    let D = r.useCallback(
        (e, t) => {
            (0, m.z)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: f.m_.SEARCH,
                application_id: e,
                load_id: O,
                position: t
            }),
                v(e);
        },
        [O, v]
    );
    return x === d.M.ERROR
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(g.Z, { className: I.error })
          })
        : (0, i.jsxs)(h.Z, {
              loading: x === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: I.content,
                      children:
                          null == R
                              ? void 0
                              : R.map((e, t) => {
                                    if (e.type === l.s.APPLICATION) {
                                        let n = e.data;
                                        return (0, i.jsx)(
                                            p.Z,
                                            {
                                                application: n,
                                                onSelectApplication: (e) => D(e, t)
                                            },
                                            n.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(o.Paginator, {
                      className: I.paginationInput,
                      totalCount: Math.min(P * _.PAGE_SIZE, _.MAX_PAGES * _.PAGE_SIZE),
                      pageSize: _.PAGE_SIZE,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: N,
                      onPageChange: b
                  })
              ]
          });
};
