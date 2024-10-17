s.r(t), s(47120);
var a = s(735250),
    r = s(470079),
    n = s(120356),
    i = s.n(n),
    l = s(180650),
    o = s(979554),
    c = s(399606),
    d = s(704215),
    u = s(952265),
    m = s(481060),
    C = s(150063),
    f = s(434650),
    p = s(100527),
    h = s(906732),
    g = s(702486),
    _ = s(605236),
    b = s(977395),
    x = s(214852),
    E = s(479446),
    I = s(981632),
    T = s(290026),
    L = s(819640),
    v = s(594174),
    S = s(626135),
    N = s(74538),
    k = s(335131),
    B = s(597688),
    j = s(328347),
    O = s(307043),
    Z = s(223143),
    y = s(298228),
    P = s(937510),
    R = s(309956),
    A = s(853748),
    w = s(426171),
    M = s(823941),
    H = s(752053),
    D = s(963102),
    F = s(508498),
    U = s(38900),
    W = s(709999),
    V = s(373113),
    z = s(802022),
    G = s(558117),
    K = s(141594),
    Y = s(566564),
    $ = s(531864),
    X = s(302800),
    q = s(215023),
    J = s(981631),
    Q = s(921944),
    ee = s(420212),
    et = s(474936),
    es = s(213731);
function ea(e) {
    let { products: t, handleShopCardMount: s, header: r, category: n, isPremiumUser: i, isGiftEasterEggEnabled: l, showMysteryCard: o = !1 } = e,
        d = (0, c.e7)([v.default], () => v.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  null != r
                      ? (0, a.jsx)(m.Text, {
                            className: es.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, a.jsx)(m.Spacer, { size: 24 }),
                  (0, a.jsx)('div', {
                      className: es.cardsContainer,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(
                                      W.Z,
                                      {
                                          onMount: s(e),
                                          isPremiumUser: i,
                                          category: n,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: l
                                      },
                                      e.skuId
                                  ),
                                  1 === t && o && (0, a.jsx)(z.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function er(e) {
    let { category: t, initialItemCardRef: s, ...n } = e,
        i = (0, P.l)(t.products),
        o = (0, c.e7)([j.Z], () => j.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                e.skuId === o && (s.current = t.current);
            },
            [o, s]
        ),
        { revealed: u } = (0, G.R)('CollectiblesShop'),
        m = !u && t.skuId === l.T.STORM && i.length <= 15;
    return (0, a.jsx)(ea, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: m,
        ...n
    });
}
function en(e) {
    let { category: t, isPremiumUser: s, initialItemCardRef: n, isGiftEasterEggEnabled: l, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        u = r.useRef(10 + 70 * Math.random()),
        [C, p] = r.useState(!1),
        h = (0, X.M7)(t.skuId),
        g = (0, f.O)(
            (e) => {
                p(e && null != h);
            },
            d ? 0.13 : 0.15
        );
    return (0, a.jsxs)('div', {
        className: es.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, a.jsx)(m.Clickable, {
                    className: i()(es.hiddenWumpus, { [es.hiddenWumpusEnabled]: l }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, a.jsx)(I.Z, {
                        idleAnimationState: E.SR.IDLE,
                        giftStyle: et.Cj.BOX
                    })
                }),
            (0, a.jsx)(M.Z, {
                category: t,
                hideLimitedTimeBadge: null != h
            }),
            (0, a.jsx)(er, {
                category: t,
                initialItemCardRef: n,
                isPremiumUser: s,
                isGiftEasterEggEnabled: l
            }),
            null != h &&
                null != t.unpublishedAt &&
                (0, a.jsx)(A.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: C,
                    displayOptions: h,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, x.z)(b.f);
    let s = (0, O.u)('CollectiblesShop'),
        { analyticsSource: n, analyticsLocations: l } = (0, c.cj)([j.Z], () => j.Z.getAnalytics()),
        { analyticsLocations: f } = (0, h.ZP)([...l, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: E, scrollerRef: I, scrollHandler: P } = (0, g._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, n),
        { feedState: A, catalogState: M, transitionToCatalog: W, transitionToFeed: z } = (0, R.B)(s, I),
        [G, X] = r.useState(!1),
        [ea, er] = r.useState(q.IV),
        [ei, el] = r.useState(),
        [eo, ec] = r.useState(),
        ed = (0, c.e7)([L.Z], () => L.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eu = (0, u.f9)(),
        { onClose: em } = (0, F.Db)(),
        eC = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        ef = N.ZP.canUseCollectibles(eC),
        { categories: ep, isFetchingCategories: eh, error: eg, refreshCategories: e_ } = (0, Z.Z)();
    (0, T.P)();
    let eb = (0, y.O)(ep),
        ex = r.useRef(null),
        [eE, eI] = r.useState(!1);
    (0, w.Kp)({
        categories: ep,
        isFetchingCategories: eh,
        isLayer: ed,
        initialItemCardRef: ex
    }),
        r.useEffect(() => {
            if (A === q.f7.VISIBLE || M === q.f7.VISIBLE) {
                var e;
                let t;
                (t = s ? (M === q.f7.VISIBLE ? eo : n) : n),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: f,
                        source: t,
                        page_session_id: E,
                        page_type: A === q.f7.VISIBLE ? 'home' : 'full',
                        category: A === q.f7.VISIBLE ? void 0 : null === (e = B.Z.getCategory(ei)) || void 0 === e ? void 0 : e.name
                    });
            }
            !ef &&
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: et.cd.COLLECTIBLES_SHOP,
                    location_stack: f
                });
        }, [s, ef, f, n, E, A, M, ei, el, eo]);
    let { dismissCollectiblesShopTabNewBadge: eT } = (0, K.Z)();
    r.useEffect(() => {
        if ((eT(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: Q.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eT]),
        r.useEffect(() => {
            !t && (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        r.useEffect(
            () => () => {
                (0, k.K$)({
                    categories: [...ep.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [ep]
        ),
        r.useEffect(() => {
            if (!t || ed || eu) return;
            let e = (e) => {
                if (e.key === ee.mR.Escape) em();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, ed, eu, em]);
    let eL = r.useCallback(() => {
            e_();
        }, [e_]),
        { setCategoryRef: ev, handleScrollToCategory: eS } = (0, w.xV)(I.current),
        { reducedMotion: eN } = r.useContext(m.AccessibilityPreferencesContext),
        ek = r.useRef(null),
        eB = r.useRef(null);
    (0, m.useFocusLock)(ek),
        r.useEffect(() => {
            if (!t) {
                var e;
                null === (e = eB.current) || void 0 === e || e.focus();
            }
        }, [t]);
    let ej = r.useCallback(
        async (e, s, a) => {
            let r = a && !t && !eN.enabled;
            ec(e), el(s), await W(r), s && eS(s);
        },
        [W, eS, t, eN]
    );
    return (0, a.jsxs)(h.Gt, {
        value: f,
        children: [
            (0, a.jsx)('div', {
                className: es.shop,
                ref: t ? ek : eB,
                tabIndex: -1,
                children: (0, a.jsxs)(m.AdvancedScroller, {
                    className: es.shopScroll,
                    ref: I,
                    onScroll: () => {
                        if ((P(), null != I.current)) {
                            let e = I.current.getDistanceFromBottom();
                            ea >= q.iA ? X(e < 20) : e <= 200 && er(ea + q.IV);
                        }
                    },
                    children: [
                        A !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(es.shopViewWrapper, {
                                    [es.visible]: A === q.f7.VISIBLE,
                                    [es.in]: A === q.f7.IN,
                                    [es.out]: A === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(D.I, {
                                        isFullScreen: t,
                                        isLayer: ed,
                                        onClose: em,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(Y.Z, {
                                        handleTransition: ej,
                                        numVisibleItems: ea
                                    })
                                ]
                            }),
                        M !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(es.shopViewWrapper, {
                                    [es.visible]: M === q.f7.VISIBLE,
                                    [es.in]: M === q.f7.IN,
                                    [es.out]: M === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(D.I, {
                                        isFullScreen: t,
                                        isLayer: ed,
                                        onClose: em,
                                        isCatalogView: s,
                                        transparent: s,
                                        handleTransition: z
                                    }),
                                    (0, a.jsx)('div', {
                                        className: es.pageWrapper,
                                        children: (0, a.jsx)('main', {
                                            className: i()(es.page, { [es.pageFullscreen]: t }),
                                            children: eh
                                                ? (0, a.jsx)(U.Z, {})
                                                : null != eg
                                                  ? (0, a.jsx)(H.Z, { onRetry: eL })
                                                  : (0, a.jsx)('div', {
                                                        className: es.categories,
                                                        children: eb
                                                            .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                            .filter((e) => {
                                                                let { products: t } = e;
                                                                return t.length > 0;
                                                            })
                                                            .map((e) =>
                                                                (0, a.jsx)(
                                                                    'div',
                                                                    {
                                                                        ref: (t) => ev(e.skuId, t),
                                                                        children: (0, a.jsx)(en, {
                                                                            isPremiumUser: ef,
                                                                            category: e,
                                                                            initialItemCardRef: ex,
                                                                            setIsGiftEasterEggEnabled: eI,
                                                                            isGiftEasterEggEnabled: eE,
                                                                            isFullScreen: t
                                                                        })
                                                                    },
                                                                    e.skuId
                                                                )
                                                            )
                                                    })
                                        })
                                    })
                                ]
                            })
                    ]
                })
            }),
            eE && (0, a.jsx)(V.Z, {}),
            !t &&
                M !== q.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)($.Z, {
                            peaking: G,
                            transitioning: A === q.f7.OUT
                        }),
                        (0, a.jsx)($.Z, {
                            style: { left: 1850 },
                            peaking: G,
                            transitioning: A === q.f7.OUT
                        })
                    ]
                })
        ]
    });
};
