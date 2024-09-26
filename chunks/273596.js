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
    h = n(900849),
    E = n(356164),
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
    R = r().throttle(h.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function O(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        { guildIds: h, loading: O, searchResultsQuery: x, searchFetchedQuery: b, loadMore: P, searchCategoryId: M, isBlockedSearchQuery: D } = (0, I.f)({ loadId: t }),
        y = 0 === h.length && !O,
        j = a.useContext(u.AnalyticsContext),
        [U, G] = a.useState((0, c.P)()),
        [w, k] = a.useState(!0),
        B = a.useRef(w),
        [H, V] = a.useState(3),
        F = a.useRef(H),
        Y = a.useRef(null),
        W = a.useCallback(
            (e) => {
                var t;
                if (D) return;
                let n = null === (t = Y.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && P();
            },
            [D, P]
        ),
        z = (0, o.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && B.current ? ((B.current = !1), k(!1)) : n > 1024 && !B.current && ((B.current = !0), k(!0));
            let i = 1;
            for (n -= w ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== F.current && ((F.current = i), V(i)), W(t);
        });
    a.useLayoutEffect(() => {
        var e;
        W(null === (e = z.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [z, h, W]),
        a.useEffect(() => {
            G((0, c.P)());
        }, [x]),
        a.useEffect(() => {
            R({
                loadId: t,
                searchId: U,
                query: x,
                guildResults: h.map(E.Z.getGuild).filter(_.lm),
                analyticsContext: j,
                categoryId: M
            });
        }, [j, h, t, M, U, x]);
    let K = a.useCallback((e) => n(e, M), [n, M]),
        q = a.useMemo(() => (O && !D ? [h.length, 0] : [h.length]), [h.length, D, O]),
        Q = a.useCallback(
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
                                        children: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: b })
                                    }),
                                    !w &&
                                        (0, i.jsxs)('div', {
                                            className: N.headingFilters,
                                            children: [(0, i.jsx)(p.Z, { loadId: t }), (0, i.jsx)(S.Z, { loadId: t })]
                                        }),
                                    (y || D) && (0, i.jsx)(T.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(l.Spinner, { className: N.spinner }, a);
                }
            },
            [D, y, w, t, b]
        ),
        X = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = w ? A : v;
                        return y ? t + 400 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [y, w]
        ),
        J = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return h[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [h]
        ),
        $ = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        ee = a.useCallback(
            async (e, t, n) => {
                var i, a;
                await r(e, t, n);
                let s = null === (a = Y.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != s && (0, m.LD)({ scrollPosition: s });
            },
            [r]
        ),
        et = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = h[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(f.ZP, {
                                guildId: e,
                                onClick: async (e) => await ee(e, t, M),
                                onView: (e) => K(e)
                            })
                        },
                        a
                    );
                }
                return null;
            },
            [h, ee, K, M]
        );
    a.useEffect(() => {
        let e = Y.current;
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
                    null === (t = Y.current) ||
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
    let en = a.useMemo(() => {
            if (!D)
                return (0, s.debounce)(
                    () => {
                        var e;
                        let t = null === (e = Y.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && P();
                    },
                    100,
                    { leading: !0 }
                );
        }, [D, P]),
        ei = w ? Z : L;
    return (0, i.jsxs)('div', {
        className: N.container,
        ref: z,
        children: [
            (0, i.jsx)(d.KY, {
                location: 'global_discovery_search',
                query: x
            }),
            (0, i.jsx)(l.MasonryList, {
                ref: Y,
                className: N.masonryList,
                sections: q,
                columns: H,
                itemGutter: 16,
                padding: ei,
                renderItem: et,
                renderSection: Q,
                getSectionHeight: X,
                getItemKey: J,
                getItemHeight: $,
                chunkSize: 24,
                onScroll: en,
                renderAccessory: (e) =>
                    w
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
