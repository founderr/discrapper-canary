n.d(t, {
    Z: function () {
        return x;
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
    d = n(117496),
    u = n(229765),
    _ = n(626135),
    E = n(823379),
    h = n(900849),
    m = n(356164),
    I = n(164991),
    g = n(28494),
    p = n(746728),
    T = n(140700),
    S = n(665807),
    f = n(882126),
    C = n(294330),
    N = n(689938),
    A = n(179596);
let v = 56,
    L = 94,
    Z = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    R = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    O = r().throttle(h.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function x(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        { guildIds: h, loading: x, searchResultsQuery: b, loadMore: P, searchCategoryId: M } = (0, g.f)({ loadId: t }),
        D = a.useContext(_.AnalyticsContext),
        [y, j] = a.useState((0, d.P)()),
        [U, G] = a.useState(!0),
        k = a.useRef(U),
        [w, B] = a.useState(3),
        H = a.useRef(w),
        V = a.useRef(null),
        F = a.useCallback(
            (e) => {
                var t;
                let n = null === (t = V.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && P();
            },
            [P]
        ),
        Y = (0, c.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && k.current ? ((k.current = !1), G(!1)) : n > 1024 && !k.current && ((k.current = !0), G(!0));
            let i = 1;
            for (n -= U ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== H.current && ((H.current = i), B(i)), F(t);
        });
    a.useLayoutEffect(() => {
        var e;
        F(null === (e = Y.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [Y, h, F]),
        a.useEffect(() => {
            j((0, d.P)());
        }, [b]),
        a.useEffect(() => {
            O({
                loadId: t,
                searchId: y,
                query: b,
                guildResults: h.map(m.Z.getGuild).filter(E.lm),
                analyticsContext: D,
                categoryId: M,
                isTagSearch: !1
            });
        }, [D, h, t, M, y, b]);
    let W = a.useCallback((e) => n(e, M), [n, M]),
        z = a.useMemo(() => (x ? [h.length, 0] : [h.length]), [h.length, x]),
        K = (0, I.NL)(),
        q = 0 === h.length && !x,
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
                                    (0, i.jsx)(l.X, {
                                        variant: 'heading-lg/semibold',
                                        className: A.heading,
                                        children: N.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: K })
                                    }),
                                    !U &&
                                        (0, i.jsxs)('div', {
                                            className: A.headingFilters,
                                            children: [(0, i.jsx)(T.Z, { loadId: t }), (0, i.jsx)(f.Z, { loadId: t })]
                                        }),
                                    q && (0, i.jsx)(S.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(o.Spinner, { className: A.spinner }, a);
                }
            },
            [q, U, t, K]
        ),
        X = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = U ? v : L;
                        return q ? t + 400 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [q, U]
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
                let s = null === (a = V.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != s && (0, I.LD)({ scrollPosition: s });
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
                            children: (0, i.jsx)(C.Z, {
                                guildId: e,
                                onClick: async (e) => await ee(e, t, M),
                                onView: (e) => W(e)
                            })
                        },
                        a
                    );
                }
                return null;
            },
            [h, ee, W, M]
        );
    a.useEffect(() => {
        let e = V.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && (0, I.LD)({ scrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = (0, I.BK)();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = V.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                (0, I.LD)({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let en = a.useMemo(
            () =>
                (0, s.debounce)(() => {
                    var e;
                    let t = null === (e = V.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null == t) return;
                    let n = t.scrollTop + t.offsetHeight;
                    t.scrollHeight - n < 300 && P();
                }, 250),
            [P]
        ),
        ei = U ? Z : R;
    return (0, i.jsxs)('div', {
        className: A.container,
        ref: Y,
        children: [
            (0, i.jsx)(u.KY, {
                location: 'global_discovery_search',
                query: b
            }),
            (0, i.jsx)(o.MasonryList, {
                ref: V,
                className: A.masonryList,
                sections: z,
                columns: w,
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
                    U
                        ? (0, i.jsx)('div', {
                              className: A.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: A.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: A.sidebarLanguageSelect,
                                          children: (0, i.jsx)(f.Z, { loadId: t })
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
