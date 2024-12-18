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
    N = n(294330),
    S = n(981631),
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
        page: S.ZY5.GUILD_DISCOVERY,
        object: S.qAy.CARD,
        section: S.jXE.DISCOVER_SEARCH
    },
    Z = s().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: s, loading: m, searchResultsQuery: S, loadMore: L, searchCategoryId: P } = (0, _.f)({ loadId: t }),
        y = 0 === s.length && !m,
        O = r.useContext(u.AnalyticsContext),
        [R, j] = r.useState((0, f.PM)()),
        [D, M] = r.useState(!0),
        w = r.useRef(D),
        [k, U] = r.useState(3),
        G = r.useRef(k),
        B = r.useRef(null),
        H = r.useCallback(
            (e) => {
                if (null == e || y || m) return;
                let t = s.length / k;
                336 * t <= e.height && L();
            },
            [y, m, s.length, k, L]
        ),
        V = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && w.current ? ((w.current = !1), M(!1)) : n > 1024 && !w.current && ((w.current = !0), M(!0));
            let i = 1;
            for (n -= D ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== G.current && ((G.current = i), U(i)), H(t);
        });
    r.useLayoutEffect(() => {
        var e;
        H(null === (e = V.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [V, H]),
        r.useEffect(() => {
            j((0, f.PM)());
        }, [S]),
        r.useEffect(() => {
            Z({
                loadId: t,
                searchId: R,
                query: S,
                guildResults: s.map(p.Z.getGuild).filter(h.lm),
                analyticsContext: O,
                categoryId: P
            });
        }, [O, s, t, P, R, S]);
    let F = r.useCallback((e) => n(e, P), [n, P]),
        z = r.useMemo(() => (m ? [s.length, 0] : [s.length]), [s.length, m]),
        W = r.useCallback(
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
                                className: a()(T.heading, { [T.headingTopbar]: !D }),
                                children: [
                                    !D &&
                                        (0, i.jsxs)('div', {
                                            className: T.headingFilters,
                                            children: [(0, i.jsx)(I.Z, { loadId: t }), (0, i.jsx)(v.Z, { loadId: t })]
                                        }),
                                    y && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            r
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: a()(T.spinner, { [T.spinnerWithSidebar]: D }) }, r);
                }
            },
            [y, D, t]
        ),
        Y = r.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = D ? 16 : 50;
                        return y ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [y, D]
        ),
        K = r.useCallback(
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
        q = r.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        X = r.useCallback(
            async (e, t, n, i) => {
                var r, a;
                await l(e, t, n, i);
                let o = null === (a = B.current) || void 0 === a ? void 0 : null === (r = a.getScrollerState()) || void 0 === r ? void 0 : r.scrollTop;
                null != o && g.Z.setState({ scrollPosition: o });
            },
            [l]
        ),
        Q = r.useCallback(
            (e, t, n, r) => {
                if (0 === e) {
                    let e = s[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(N.ZP, {
                                guildId: e,
                                onClick: async (e) => await X(e, t, P, A),
                                onView: (e) => F(e)
                            })
                        },
                        r
                    );
                }
                return null;
            },
            [s, X, F, P]
        );
    r.useEffect(() => {
        let e = B.current;
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
                    null === (t = B.current) ||
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
    let J = r.useMemo(
            () =>
                (0, o.debounce)(
                    () => {
                        var e;
                        let t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && L();
                    },
                    100,
                    { leading: !0 }
                ),
            [L]
        ),
        $ = D ? b : x;
    return (0, i.jsx)('div', {
        className: T.container,
        ref: V,
        children: (0, i.jsx)(c.MasonryList, {
            ref: B,
            className: T.masonryList,
            sections: z,
            columns: k,
            itemGutter: 16,
            padding: $,
            renderItem: Q,
            renderSection: W,
            getSectionHeight: Y,
            getItemKey: K,
            getItemHeight: q,
            chunkSize: 24,
            onScroll: J,
            renderAccessory: (e) =>
                D
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
