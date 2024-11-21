n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(393903),
    u = n(626135),
    h = n(823379),
    m = n(900849),
    p = n(356164),
    g = n(164991),
    f = n(726115),
    _ = n(28494),
    E = n(746728),
    I = n(140700),
    C = n(665807),
    v = n(188493),
    N = n(294330),
    T = n(981631),
    S = n(179596);
let A = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    x = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    b = {
        page: T.ZY5.GUILD_DISCOVERY,
        object: T.qAy.CARD,
        section: T.jXE.DISCOVER_SEARCH
    },
    Z = o().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: o, loading: m, searchResultsQuery: T, loadMore: L, searchCategoryId: y, isBlockedSearchQuery: O } = (0, _.f)({ loadId: t }),
        P = 0 === o.length && !m,
        R = r.useContext(u.AnalyticsContext),
        [j, D] = r.useState((0, f.PM)()),
        [M, w] = r.useState(!0),
        k = r.useRef(M),
        [U, G] = r.useState(3),
        B = r.useRef(U),
        H = r.useRef(null),
        V = r.useCallback(
            (e) => {
                var t;
                if (O) return;
                let n = null === (t = H.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && L();
            },
            [O, L]
        ),
        F = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && k.current ? ((k.current = !1), w(!1)) : n > 1024 && !k.current && ((k.current = !0), w(!0));
            let i = 1;
            for (n -= M ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== B.current && ((B.current = i), G(i)), V(t);
        });
    r.useLayoutEffect(() => {
        var e;
        V(null === (e = F.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [F, o, V]),
        r.useEffect(() => {
            D((0, f.PM)());
        }, [T]),
        r.useEffect(() => {
            Z({
                loadId: t,
                searchId: j,
                query: T,
                guildResults: o.map(p.Z.getGuild).filter(h.lm),
                analyticsContext: R,
                categoryId: y
            });
        }, [R, o, t, y, j, T]);
    let z = r.useCallback((e) => n(e, y), [n, y]),
        W = r.useMemo(() => (m && !O ? [o.length, 0] : [o.length]), [o.length, O, m]),
        Y = r.useCallback(
            (e, n, r) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: a()({ [S.heading]: !M || P }),
                                children: [
                                    !M &&
                                        (0, i.jsxs)('div', {
                                            className: S.headingFilters,
                                            children: [(0, i.jsx)(I.Z, { loadId: t }), (0, i.jsx)(v.Z, { loadId: t })]
                                        }),
                                    (P || O) && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            r
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: a()(S.spinner, { [S.spinnerWithSidebar]: M }) }, r);
                }
            },
            [O, P, M, t]
        ),
        K = r.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = M ? 16 : 50;
                        return P ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [P, M]
        ),
        q = r.useCallback(
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
        X = r.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        Q = r.useCallback(
            async (e, t, n, i) => {
                var r, a;
                await l(e, t, n, i);
                let s = null === (a = H.current) || void 0 === a ? void 0 : null === (r = a.getScrollerState()) || void 0 === r ? void 0 : r.scrollTop;
                null != s && g.Z.setState({ scrollPosition: s });
            },
            [l]
        ),
        J = r.useCallback(
            (e, t, n, r) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(N.ZP, {
                                guildId: e,
                                onClick: async (e) => await Q(e, t, y, b),
                                onView: (e) => z(e)
                            })
                        },
                        r
                    );
                }
                return null;
            },
            [o, Q, z, y]
        );
    r.useEffect(() => {
        let e = H.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && g.Z.setState({ scrollPosition: n });
        };
    }, []),
        r.useLayoutEffect(() => {
            let e = g.Z.getField('scrollPosition');
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = H.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                g.Z.setState({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let $ = r.useMemo(() => {
            if (!O)
                return (0, s.debounce)(
                    () => {
                        var e;
                        let t = null === (e = H.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && L();
                    },
                    100,
                    { leading: !0 }
                );
        }, [O, L]),
        ee = M ? A : x;
    return (0, i.jsx)('div', {
        className: S.container,
        ref: F,
        children: (0, i.jsx)(c.MasonryList, {
            ref: H,
            className: S.masonryList,
            sections: W,
            columns: U,
            itemGutter: 16,
            padding: ee,
            renderItem: J,
            renderSection: Y,
            getSectionHeight: K,
            getItemKey: q,
            getItemHeight: X,
            chunkSize: 24,
            onScroll: $,
            renderAccessory: (e) =>
                M
                    ? (0, i.jsx)('div', {
                          className: S.sidebar,
                          style: { height: e },
                          children: (0, i.jsxs)('div', {
                              className: S.sidebarContent,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.sidebarLanguageSelect,
                                      children: (0, i.jsx)(v.Z, { loadId: t })
                                  }),
                                  (0, i.jsx)(E.Z, { loadId: t })
                              ]
                          })
                      })
                    : null
        })
    });
}
