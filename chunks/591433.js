n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(411104);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(260034),
    o = n(481060),
    c = n(393903),
    d = n(410030),
    u = n(117496),
    _ = n(225784),
    h = n(229765),
    E = n(626135),
    m = n(900849),
    I = n(540742),
    g = n(143021),
    p = n(393596),
    T = n(35448),
    f = n(458203),
    S = n(692420),
    C = n(689938),
    N = n(992945);
let A = 56,
    v = 94,
    L = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    Z = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    O = r().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function R(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        m = (0, d.ZP)(),
        { guilds: R, loading: x, searchResultsQuery: b, loadMore: P, searchCategoryId: M } = (0, g.f)({ loadId: t }),
        D = a.useContext(E.AnalyticsContext),
        [y, j] = a.useState((0, u.P)()),
        [U, G] = a.useState(!0),
        k = a.useRef(U),
        [w, B] = a.useState(3),
        H = a.useRef(w),
        V = (0, c.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && k.current ? ((k.current = !1), G(!1)) : n > 1024 && !k.current && ((k.current = !0), G(!0));
            let i = 1;
            for (n -= U ? 420 : 0, n -= 250; n > 0; ) (n -= 234), (i += 1);
            i !== H.current && ((H.current = i), B(i));
        });
    a.useEffect(() => {
        j((0, u.P)());
    }, [b]),
        a.useEffect(() => {
            O({
                loadId: t,
                searchId: y,
                query: b,
                guildResults: R,
                analyticsContext: D,
                categoryId: M,
                isTagSearch: !1
            });
        }, [D, R, t, M, y, b]);
    let F = a.useCallback((e) => n(e, M), [n, M]),
        Y = a.useMemo(() => (x ? [R.length, 0] : [R.length]), [R.length, x]),
        W = 0 === R.length && !x,
        z = a.useCallback(
            (e, n, a) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                children: [
                                    (0, i.jsx)(l.X, {
                                        variant: 'heading-lg/semibold',
                                        className: N.heading,
                                        children: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: b })
                                    }),
                                    !U &&
                                        (0, i.jsxs)('div', {
                                            className: N.headingFilters,
                                            children: [(0, i.jsx)(T.Z, { loadId: t }), (0, i.jsx)(S.Z, { loadId: t })]
                                        }),
                                    W && (0, i.jsx)(f.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(o.Spinner, { className: N.spinner }, a);
                }
            },
            [W, U, t, b]
        ),
        K = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = U ? A : v;
                        return W ? t + 400 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [W, U]
        ),
        q = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return R[t].id;
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [R]
        ),
        Q = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        X = a.useCallback(
            (e, t, n) => {
                var i, a;
                r(e, t, n);
                let s = null === (a = $.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != s && I.B.setState({ searchScrollPosition: s });
            },
            [r]
        ),
        J = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = R[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(
                                _.Z,
                                {
                                    guild: e,
                                    onView: (e) => X(e, t, M),
                                    onGuildCardSeen: F,
                                    theme: m
                                },
                                e.id
                            )
                        },
                        a
                    );
                }
                return null;
            },
            [R, X, F, M, m]
        ),
        $ = a.useRef(null);
    a.useEffect(() => {
        let e = $.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && I.B.setState({ searchScrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let { searchScrollPosition: e } = I.B.getState();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = $.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                I.B.setState({ searchScrollPosition: null });
                            }
                        });
                });
        }, []);
    let ee = a.useMemo(
            () =>
                (0, s.debounce)(() => {
                    var e;
                    let t = null === (e = $.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null == t) return;
                    let n = t.scrollTop + t.offsetHeight;
                    t.scrollHeight - n < 200 && P();
                }, 250),
            [P]
        ),
        et = U ? L : Z;
    return (0, i.jsxs)('div', {
        className: N.container,
        ref: V,
        children: [
            (0, i.jsx)(h.KY, {
                location: 'global_discovery_search',
                query: b
            }),
            (0, i.jsx)(o.MasonryList, {
                ref: $,
                className: N.masonryList,
                sections: Y,
                columns: w,
                itemGutter: 16,
                padding: et,
                renderItem: J,
                renderSection: z,
                getSectionHeight: K,
                getItemKey: q,
                getItemHeight: Q,
                chunkSize: 24,
                onScroll: ee,
                renderAccessory: (e) =>
                    U
                        ? (0, i.jsx)('div', {
                              className: N.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: N.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: N.sidebarLanguageSelect,
                                          children: (0, i.jsx)(S.Z, { loadId: t })
                                      }),
                                      (0, i.jsx)(p.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
