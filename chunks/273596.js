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
    o = n(392711),
    s = n.n(o),
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
    S = n(294330),
    N = n(981631),
    T = n(841787);
let b = Object.freeze({
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
    A = {
        page: N.ZY5.GUILD_DISCOVERY,
        object: N.qAy.CARD,
        section: N.jXE.DISCOVER_SEARCH
    },
    Z = s().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: s, loading: m, searchResultsQuery: N, loadMore: L, searchCategoryId: y, isBlockedSearchQuery: P } = (0, _.f)({ loadId: t }),
        O = 0 === s.length && !m,
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
                if (P || O || m) return;
                let n = null === (t = H.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight <= e.height && L();
            },
            [P, L, m, O]
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
    }, [F, s, V]),
        r.useEffect(() => {
            D((0, f.PM)());
        }, [N]),
        r.useEffect(() => {
            Z({
                loadId: t,
                searchId: j,
                query: N,
                guildResults: s.map(p.Z.getGuild).filter(h.lm),
                analyticsContext: R,
                categoryId: y
            });
        }, [R, s, t, y, j, N]);
    let z = r.useCallback((e) => n(e, y), [n, y]),
        W = r.useMemo(() => (m && !P ? [s.length, 0] : [s.length]), [s.length, P, m]),
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
                                className: a()(T.heading, { [T.headingTopbar]: !M }),
                                children: [
                                    !M &&
                                        (0, i.jsxs)('div', {
                                            className: T.headingFilters,
                                            children: [(0, i.jsx)(I.Z, { loadId: t }), (0, i.jsx)(v.Z, { loadId: t })]
                                        }),
                                    (O || P) && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            r
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: a()(T.spinner, { [T.spinnerWithSidebar]: M }) }, r);
                }
            },
            [P, O, M, t]
        ),
        K = r.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = M ? 16 : 50;
                        return O ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [O, M]
        ),
        q = r.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return s[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [s]
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
                let o = null === (a = H.current) || void 0 === a ? void 0 : null === (r = a.getScrollerState()) || void 0 === r ? void 0 : r.scrollTop;
                null != o && g.Z.setState({ scrollPosition: o });
            },
            [l]
        ),
        J = r.useCallback(
            (e, t, n, r) => {
                if (0 === e) {
                    let e = s[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(S.ZP, {
                                guildId: e,
                                onClick: async (e) => await Q(e, t, y, A),
                                onView: (e) => z(e)
                            })
                        },
                        r
                    );
                }
                return null;
            },
            [s, Q, z, y]
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
            if (!P)
                return (0, o.debounce)(
                    () => {
                        var e;
                        let t = null === (e = H.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && L();
                    },
                    100,
                    { leading: !0 }
                );
        }, [P, L]),
        ee = M ? b : x;
    return (0, i.jsx)('div', {
        className: T.container,
        ref: F,
        children: (0, i.jsx)(c.MasonryList, {
            ref: H,
            className: T.masonryList,
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
                          className: T.sidebar,
                          style: { height: e },
                          children: (0, i.jsxs)('div', {
                              className: T.sidebarContent,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: T.sidebarLanguageSelect,
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
