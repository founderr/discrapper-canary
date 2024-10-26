n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(481060),
    d = n(393903),
    u = n(117496),
    _ = n(229765),
    E = n(626135),
    h = n(823379),
    m = n(900849),
    I = n(356164),
    p = n(164991),
    g = n(28494),
    T = n(746728),
    S = n(140700),
    C = n(665807),
    f = n(188493),
    N = n(294330),
    A = n(981631),
    v = n(179596);
let Z = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    L = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    R = {
        page: A.ZY5.GUILD_DISCOVERY,
        object: A.qAy.CARD,
        section: A.jXE.DISCOVER_SEARCH
    },
    O = o().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function x(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: s } = e,
        { guildIds: o, loading: m, searchResultsQuery: A, loadMore: x, searchCategoryId: b, isBlockedSearchQuery: M } = (0, g.f)({ loadId: t }),
        P = 0 === o.length && !m,
        D = a.useContext(E.AnalyticsContext),
        [y, j] = a.useState((0, u.P)()),
        [U, G] = a.useState(!0),
        w = a.useRef(U),
        [k, B] = a.useState(3),
        H = a.useRef(k),
        V = a.useRef(null),
        F = a.useCallback(
            (e) => {
                var t;
                if (M) return;
                let n = null === (t = V.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && x();
            },
            [M, x]
        ),
        Y = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && w.current ? ((w.current = !1), G(!1)) : n > 1024 && !w.current && ((w.current = !0), G(!0));
            let i = 1;
            for (n -= U ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== H.current && ((H.current = i), B(i)), F(t);
        });
    a.useLayoutEffect(() => {
        var e;
        F(null === (e = Y.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [Y, o, F]),
        a.useEffect(() => {
            j((0, u.P)());
        }, [A]),
        a.useEffect(() => {
            O({
                loadId: t,
                searchId: y,
                query: A,
                guildResults: o.map(I.Z.getGuild).filter(h.lm),
                analyticsContext: D,
                categoryId: b
            });
        }, [D, o, t, b, y, A]);
    let z = a.useCallback((e) => n(e, b), [n, b]),
        W = a.useMemo(() => (m && !M ? [o.length, 0] : [o.length]), [o.length, M, m]),
        K = a.useCallback(
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
                                className: r()({ [v.heading]: !U || P }),
                                children: [
                                    !U &&
                                        (0, i.jsxs)('div', {
                                            className: v.headingFilters,
                                            children: [(0, i.jsx)(S.Z, { loadId: t }), (0, i.jsx)(f.Z, { loadId: t })]
                                        }),
                                    (P || M) && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: r()(v.spinner, { [v.spinnerWithSidebar]: U }) }, a);
                }
            },
            [M, P, U, t]
        ),
        q = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = U ? 16 : 50;
                        return P ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [P, U]
        ),
        Q = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return o[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [o]
        ),
        X = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        J = a.useCallback(
            async (e, t, n, i) => {
                var a, r;
                await s(e, t, n, i);
                let l = null === (r = V.current) || void 0 === r ? void 0 : null === (a = r.getScrollerState()) || void 0 === a ? void 0 : a.scrollTop;
                null != l && (0, p.LD)({ scrollPosition: l });
            },
            [s]
        ),
        $ = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(N.ZP, {
                                guildId: e,
                                onClick: async (e) => await J(e, t, b, R),
                                onView: (e) => z(e)
                            })
                        },
                        a
                    );
                }
                return null;
            },
            [o, J, z, b]
        );
    a.useEffect(() => {
        let e = V.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && (0, p.LD)({ scrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = (0, p.BK)();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = V.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                (0, p.LD)({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let ee = a.useMemo(() => {
            if (!M)
                return (0, l.debounce)(
                    () => {
                        var e;
                        let t = null === (e = V.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && x();
                    },
                    100,
                    { leading: !0 }
                );
        }, [M, x]),
        et = U ? Z : L;
    return (0, i.jsxs)('div', {
        className: v.container,
        ref: Y,
        children: [
            (0, i.jsx)(_.KY, {
                location: 'global_discovery_search',
                query: A
            }),
            (0, i.jsx)(c.MasonryList, {
                ref: V,
                className: v.masonryList,
                sections: W,
                columns: k,
                itemGutter: 16,
                padding: et,
                renderItem: $,
                renderSection: K,
                getSectionHeight: q,
                getItemKey: Q,
                getItemHeight: X,
                chunkSize: 24,
                onScroll: ee,
                renderAccessory: (e) =>
                    U
                        ? (0, i.jsx)('div', {
                              className: v.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: v.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: v.sidebarLanguageSelect,
                                          children: (0, i.jsx)(f.Z, { loadId: t })
                                      }),
                                      (0, i.jsx)(T.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
