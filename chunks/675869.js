t.r(n),
    t.d(n, {
        default: function () {
            return D;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(392711),
    s = t.n(l),
    r = t(991637),
    c = t.n(r),
    o = t(266067),
    d = t(91192),
    u = t(209173),
    _ = t(375051),
    g = t(399606),
    m = t(481060),
    C = t(209613),
    p = t(626135),
    f = t(674588),
    h = t(463571),
    x = t(894653),
    I = t(809547),
    R = t(738130),
    b = t(34674),
    T = t(465082),
    A = t(33146),
    v = t(125909),
    E = t(190733),
    P = t(101741),
    N = t(132871),
    j = t(147890),
    S = t(166996),
    y = t(981631),
    O = t(609368),
    M = t(878428);
function D() {
    var e;
    let n;
    let t = (0, N.useApplicationDirectoryHistory)((e) => e.guildId),
        l = (0, g.e7)([x.Z], () => x.Z.getCategories()),
        r = (0, o.TH)(),
        {
            queryParam: c,
            pageParam: d,
            categoryIdParam: m
        } = i.useMemo(() => {
            let e = new URLSearchParams(r.search);
            return {
                queryParam: e.get('q'),
                pageParam: e.get('page'),
                categoryIdParam: e.get('category_id')
            };
        }, []),
        [C, h] = i.useState(null != d ? Number(d) : 1),
        [T, D] = i.useState(null != c ? c : ''),
        [L, Y] = i.useState(null !== (e = Number(m)) && void 0 !== e ? e : b.MU),
        k = i.useMemo(() => (null == l ? void 0 : l.find((e) => e.id === L)), [l, L]),
        H = i.useCallback((e) => {
            Y(e.id), h(1);
        }, []),
        U = i.useCallback((e) => {
            D(e), h(1), 0 === e.length && Y(b.MU);
        }, []),
        G = i.useCallback(
            (e) => {
                var n, t;
                let { query: a, categoryId: i, page: l } = e,
                    s = new URLSearchParams(r.search);
                '' === a ? s.delete('q') : s.set('q', a), i === b.MU ? s.delete('category_id') : s.set('category_id', null !== (n = null == i ? void 0 : i.toString()) && void 0 !== n ? n : ''), 1 === l ? s.delete('page') : s.set('page', null !== (t = null == l ? void 0 : l.toString()) && void 0 !== t ? t : ''), (0, j.replaceAppDirectoryURLWith)(''.concat(y.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(s.toString()));
            },
            [r.search]
        ),
        w = i.useMemo(() => s().debounce(G, 400), [G]);
    i.useEffect(() => {
        w({
            query: T,
            categoryId: L,
            page: C
        });
    }, [w, T, L, C]);
    let B = (0, g.e7)([I.Z], () =>
            I.Z.getFetchState({
                query: T,
                guildId: t,
                page: C,
                categoryId: L
            })
        ),
        F = i.useRef({
            query: '',
            guildId: void 0,
            page: void 0,
            categoryId: void 0
        }),
        V = (0, g.cj)([I.Z], () => {
            let e = I.Z.getSearchResults({
                query: T,
                guildId: t
            });
            return null != e
                ? {
                      [b.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        {
            pageResults: z,
            pageCount: W,
            searchResultsType: q,
            loadId: K
        } = (0, g.cj)([I.Z], () => {
            var e, n;
            let a = {
                    query: T,
                    guildId: t,
                    page: C,
                    categoryId: L
                },
                i = I.Z.getSearchResults(a);
            return (
                null == i ? (i = I.Z.getSearchResults(F.current)) : (F.current = a),
                {
                    pageResults: null == i ? void 0 : i.results,
                    pageCount: null !== (e = null == i ? void 0 : i.totalPages) && void 0 !== e ? e : 0,
                    searchResultsType: null !== (n = null == i ? void 0 : i.type) && void 0 !== n ? n : _.c.SEARCH_RESULTS,
                    loadId: null == i ? void 0 : i.loadId
                }
            );
        }),
        J = i.useMemo(() => (null == z ? void 0 : z.filter((e) => !(q === _.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION))), [z, q]),
        Q = i.useRef(null),
        X = (0, N.getCurrentView)(),
        $ = i.useCallback(
            (e) => {
                p.default.track(y.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: T,
                    num_results: e,
                    current_page: null == X ? void 0 : X.type,
                    result_page: C,
                    category: null == k ? void 0 : k.name,
                    category_id: null == k ? void 0 : k.id,
                    guild_id: t
                });
            },
            [null == k ? void 0 : k.id, null == k ? void 0 : k.name, C, t, T, X]
        ),
        ee = i.useCallback((e) => {
            let { query: n, page: t, activeCategoryId: a, onSuccessCallback: i, guildId: l, fetchCounts: s } = e;
            s &&
                f.yC({
                    query: n,
                    guildId: l
                }),
                f.yC({
                    query: n,
                    guildId: l,
                    options: {
                        page: t,
                        categoryId: a
                    },
                    onSuccessCallback: i
                }),
                (Q.current = n);
        }, []),
        [en] = i.useState(() =>
            s().debounce(ee, 400, {
                leading: !1,
                trailing: !0
            })
        ),
        et = i.useCallback(
            (e) => {
                h(e);
            },
            [h]
        ),
        ea = i.useCallback(
            (e) => {
                let { application: n, mutualGuilds: a } = e;
                p.default.track(y.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: N.ApplicationDirectoryViews.SEARCH,
                    application_id: n.id,
                    load_id: K,
                    search_term: T,
                    guild_id: t,
                    shown_mutual_guilds_count: a.length
                }),
                    (0, j.goToApplication)({ applicationId: n.id });
            },
            [K, T, t]
        );
    i.useEffect(() => {
        ee({
            query: T,
            page: C,
            activeCategoryId: L,
            guildId: t,
            fetchCounts: T !== Q.current,
            onSuccessCallback: $
        });
    }, [ee, k, t, C]),
        i.useEffect(() => {
            en({
                query: T,
                page: C,
                activeCategoryId: L,
                guildId: t,
                fetchCounts: T !== Q.current,
                onSuccessCallback: $
            });
        }, [T, en]);
    let ei = i.useMemo(() => Object.keys(V).length > 0, [V]);
    return (
        (null != J && 0 === W) || B === I.M.ERROR
            ? (n = (0, a.jsx)(A.Z, {
                  category: k,
                  onViewAll: () => {
                      h(1), Y(b.MU);
                  }
              }))
            : null != J && J.length > 0 && q === _.c.SEARCH_RESULTS
              ? (n = (0, a.jsx)(Z, {
                    items: J,
                    pageCount: W,
                    currentPage: C,
                    showPrimaryCategory: L === b.MU,
                    onItemClick: ea,
                    onChangePage: et
                }))
              : null != J &&
                J.length > 0 &&
                q === _.c.MUSIC &&
                (n = (0, a.jsx)(P.Z, {
                    guildId: t,
                    results: J
                })),
        (0, a.jsx)(R.Z, {
            children: (0, a.jsxs)('div', {
                className: O.page,
                children: [
                    (0, a.jsxs)('div', {
                        className: O.sidebar,
                        children: [
                            (0, a.jsx)('img', {
                                src: M,
                                alt: '',
                                className: O.sidebarImage
                            }),
                            (0, a.jsx)(S.Z, {
                                className: O.categoryList,
                                countsByCategory: ei ? V : void 0,
                                currentCategoryId: L,
                                onView: H
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: O.content,
                        children: [
                            (0, a.jsx)(E.Z, {
                                query: T,
                                onChange: U
                            }),
                            (0, a.jsx)(v.Z, {
                                loading: B === I.M.FETCHING,
                                children: (0, a.jsx)('div', {
                                    className: O.contentContainer,
                                    children: n
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function Z(e) {
    let { items: n, currentPage: t, pageCount: l, showPrimaryCategory: s, onItemClick: r, onChangePage: c } = e,
        o = (0, C.Z)('application-directory-search');
    return (0, a.jsxs)(i.Fragment, {
        children: [
            (0, a.jsx)(d.bG, {
                navigator: o,
                children: (0, a.jsx)(d.SJ, {
                    children: (e) => {
                        let { ref: t, ...i } = e;
                        return (0, a.jsx)('ul', {
                            ref: t,
                            ...i,
                            children: n.map((e) => {
                                if (e.type === u.s.APPLICATION) {
                                    var n;
                                    let t;
                                    let i = e.data;
                                    return (
                                        (null === (n = i.directory_entry) || void 0 === n ? void 0 : n.short_description) != null && i.directory_entry.short_description.length > 0 ? (t = i.directory_entry.short_description) : null != i.description && i.description.length > 0 && (t = i.description),
                                        (0, a.jsx)(
                                            h.Z,
                                            {
                                                href: y.Z5c.APPLICATION_DIRECTORY_PROFILE(i.id),
                                                children: (0, a.jsx)(T.Z, {
                                                    className: O.listing,
                                                    childrenClassName: O.listingDetails,
                                                    application: i,
                                                    onView: (e) => {
                                                        let { mutualGuilds: n } = e;
                                                        return r({
                                                            application: i,
                                                            mutualGuilds: n
                                                        });
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: s,
                                                    source: 'search',
                                                    children:
                                                        null != t
                                                            ? (0, a.jsx)(m.Text, {
                                                                  className: O.listingDescription,
                                                                  variant: 'text-md/normal',
                                                                  lineClamp: 3,
                                                                  children: t
                                                              })
                                                            : null
                                                })
                                            },
                                            i.id
                                        )
                                    );
                                }
                            })
                        });
                    }
                })
            }),
            (0, a.jsx)(m.Paginator, {
                currentPage: t,
                totalCount: Math.min(7 * l, 700),
                pageSize: 7,
                onPageChange: c,
                disablePaginationGap: !0
            })
        ]
    });
}
c().shim();
