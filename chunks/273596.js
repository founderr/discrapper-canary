n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(411104);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(481060),
    o = n(393903),
    c = n(117496),
    d = n(229765),
    u = n(626135),
    _ = n(823379),
    E = n(900849),
    h = n(356164),
    m = n(164991),
    I = n(28494),
    g = n(746728),
    p = n(140700),
    T = n(665807),
    S = n(188493),
    f = n(294330),
    C = n(689938),
    N = n(179596);
let A = 56,
    v = 94,
    Z = Object.freeze({
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
    R = r().throttle(E.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function O(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        { guildIds: E, loading: O, searchResultsQuery: x, loadMore: b, searchCategoryId: P } = (0, I.f)({ loadId: t }),
        M = a.useContext(u.AnalyticsContext),
        [D, y] = a.useState((0, c.P)()),
        [j, U] = a.useState(!0),
        G = a.useRef(j),
        [w, k] = a.useState(3),
        B = a.useRef(w),
        H = a.useRef(null),
        V = a.useCallback(
            (e) => {
                var t;
                let n = null === (t = H.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && b();
            },
            [b]
        ),
        F = (0, o.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && G.current ? ((G.current = !1), U(!1)) : n > 1024 && !G.current && ((G.current = !0), U(!0));
            let i = 1;
            for (n -= j ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== B.current && ((B.current = i), k(i)), V(t);
        });
    a.useLayoutEffect(() => {
        var e;
        V(null === (e = F.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [F, E, V]),
        a.useEffect(() => {
            y((0, c.P)());
        }, [x]),
        a.useEffect(() => {
            R({
                loadId: t,
                searchId: D,
                query: x,
                guildResults: E.map(h.Z.getGuild).filter(_.lm),
                analyticsContext: M,
                categoryId: P
            });
        }, [M, E, t, P, D, x]);
    let Y = a.useCallback((e) => n(e, P), [n, P]),
        W = a.useMemo(() => (O ? [E.length, 0] : [E.length]), [E.length, O]),
        z = (0, m.NL)(),
        K = 0 === E.length && !O,
        q = a.useCallback(
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
                                    (0, i.jsx)(l.Heading, {
                                        variant: 'heading-lg/semibold',
                                        className: N.heading,
                                        children: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: z })
                                    }),
                                    !j &&
                                        (0, i.jsxs)('div', {
                                            className: N.headingFilters,
                                            children: [(0, i.jsx)(p.Z, { loadId: t }), (0, i.jsx)(S.Z, { loadId: t })]
                                        }),
                                    K && (0, i.jsx)(T.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(l.Spinner, { className: N.spinner }, a);
                }
            },
            [K, j, t, z]
        ),
        Q = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = j ? A : v;
                        return K ? t + 400 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [K, j]
        ),
        X = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return E[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [E]
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        $ = a.useCallback(
            async (e, t, n) => {
                var i, a;
                await r(e, t, n);
                let s = null === (a = H.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != s && (0, m.LD)({ scrollPosition: s });
            },
            [r]
        ),
        ee = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = E[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(f.ZP, {
                                guildId: e,
                                onClick: async (e) => await $(e, t, P),
                                onView: (e) => Y(e)
                            })
                        },
                        a
                    );
                }
                return null;
            },
            [E, $, Y, P]
        );
    a.useEffect(() => {
        let e = H.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && (0, m.LD)({ scrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = (0, m.BK)();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = H.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                (0, m.LD)({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let et = a.useMemo(
            () =>
                (0, s.debounce)(
                    () => {
                        var e;
                        let t = null === (e = H.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && b();
                    },
                    100,
                    { leading: !0 }
                ),
            [b]
        ),
        en = j ? Z : L;
    return (0, i.jsxs)('div', {
        className: N.container,
        ref: F,
        children: [
            (0, i.jsx)(d.KY, {
                location: 'global_discovery_search',
                query: x
            }),
            (0, i.jsx)(l.MasonryList, {
                ref: H,
                className: N.masonryList,
                sections: W,
                columns: w,
                itemGutter: 16,
                padding: en,
                renderItem: ee,
                renderSection: q,
                getSectionHeight: Q,
                getItemKey: X,
                getItemHeight: J,
                chunkSize: 24,
                onScroll: et,
                renderAccessory: (e) =>
                    j
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
                                      (0, i.jsx)(g.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
