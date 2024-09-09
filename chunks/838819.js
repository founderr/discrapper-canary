r.r(t), r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(979554),
    c = r(399606),
    d = r(704215),
    u = r(952265),
    f = r(780384),
    p = r(481060),
    C = r(150063),
    _ = r(434650),
    m = r(100527),
    g = r(906732),
    h = r(702486),
    b = r(514361),
    E = r(605236),
    I = r(977395),
    x = r(214852),
    v = r(479446),
    T = r(981632),
    L = r(290026),
    S = r(210887),
    N = r(819640),
    O = r(594174),
    k = r(626135),
    B = r(74538),
    j = r(335131),
    P = r(597688),
    R = r(372047),
    Z = r(328347),
    A = r(307043),
    M = r(223143),
    y = r(675052),
    w = r(298228),
    H = r(937510),
    F = r(309956),
    D = r(853748),
    U = r(426171),
    G = r(823941),
    W = r(752053),
    V = r(963102),
    z = r(508498),
    Y = r(38900),
    K = r(709999),
    X = r(373113),
    $ = r(802022),
    q = r(399033),
    J = r(558117),
    Q = r(141594),
    ee = r(566564),
    et = r(531864),
    er = r(302800),
    ea = r(215023),
    en = r(981631),
    es = r(921944),
    ei = r(420212),
    eo = r(474936),
    el = r(689938),
    ec = r(53824);
function ed(e) {
    let { products: t, handleShopCardMount: r, header: n, category: s, isPremiumUser: i, isGiftEasterEggEnabled: o, showMysteryCard: l = !1 } = e,
        d = (0, c.e7)([O.default], () => O.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  null != n
                      ? (0, a.jsx)(p.Text, {
                            className: ec.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: n
                        })
                      : (0, a.jsx)(p.Spacer, { size: 24 }),
                  (0, a.jsx)('div', {
                      className: ec.cardsContainer,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(
                                      K.Z,
                                      {
                                          onMount: r(e),
                                          isPremiumUser: i,
                                          category: s,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: o
                                      },
                                      e.skuId
                                  ),
                                  1 === t && l && (0, a.jsx)($.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function eu(e) {
    let { category: t, initialItemCardRef: r, ...s } = e,
        i = (0, H.l)(t.products),
        l = (0, c.e7)([Z.Z], () => Z.Z.initialProductSkuId),
        d = n.useCallback(
            (e) => (t) => {
                e.skuId === l && (r.current = t.current);
            },
            [l, r]
        ),
        { revealed: u } = (0, J.R)('CollectiblesShop'),
        f = !u && t.skuId === o.T.STORM && i.length <= 15;
    return (0, a.jsx)(ed, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...s
    });
}
function ef(e) {
    let { category: t, isPremiumUser: r, initialItemCardRef: s, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: l, showEasterEggToggle: c, isFullScreen: d } = e,
        u = n.useRef(10 + 70 * Math.random()),
        [f, C] = n.useState(!1),
        m = (0, er.M7)(t.skuId),
        g = (0, _.O)(
            (e) => {
                C(e && null != m);
            },
            d ? 0.13 : 0.15
        );
    return (0, a.jsxs)('div', {
        className: ec.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, a.jsx)(p.Clickable, {
                    className: i()(ec.hiddenWumpus, { [ec.hiddenWumpusEnabled]: o }),
                    onClick: () => l(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, a.jsx)(T.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: eo.Cj.BOX
                    })
                }),
            (0, a.jsx)(G.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, a.jsx)(eu, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: r,
                isGiftEasterEggEnabled: o
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, a.jsx)(D.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: m,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, x.z)(I.f);
    let r = (0, A.u)('CollectiblesShop'),
        { analyticsSource: s, analyticsLocations: o } = (0, c.cj)([Z.Z], () => Z.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, g.ZP)([...o, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: v, scrollerRef: T, scrollHandler: H } = (0, h._)(en.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
        { feedState: D, catalogState: G, transitionToCatalog: K, transitionToFeed: $ } = (0, F.B)(r, T),
        [J, er] = n.useState(!1),
        [ed, eu] = n.useState(ea.IV),
        [ep, eC] = n.useState(),
        [e_, em] = n.useState(),
        eg = (0, c.e7)([N.Z], () => N.Z.getLayers().includes(en.S9g.COLLECTIBLES_SHOP)),
        eh = (0, u.f9)(),
        { onClose: eb } = (0, z.Db)(),
        eE = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        eI = B.ZP.canUseCollectibles(eE),
        { categories: ex, isFetchingCategories: ev, error: eT, refreshCategories: eL } = (0, M.Z)();
    (0, L.P)();
    let eS = (0, w.O)(ex),
        { sortedPopularPickProducts: eN } = (0, y.a)(ex),
        eO = n.useRef(null),
        [ek, eB] = n.useState(!1);
    (0, U.Kp)({
        categories: ex,
        isFetchingCategories: ev,
        isLayer: eg,
        initialItemCardRef: eO
    }),
        n.useEffect(() => {
            if (D === ea.f7.VISIBLE || G === ea.f7.VISIBLE) {
                var e;
                let t;
                (t = r ? (G === ea.f7.VISIBLE ? e_ : s) : s),
                    k.default.track(en.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: v,
                        page_type: D === ea.f7.VISIBLE ? 'home' : 'full',
                        category: D === ea.f7.VISIBLE ? void 0 : null === (e = P.Z.getCategory(ep)) || void 0 === e ? void 0 : e.name
                    });
            }
            !eI &&
                k.default.track(en.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: eo.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [r, eI, _, s, v, D, G, ep, eC, e_]);
    let { dismissCollectiblesShopTabNewBadge: ej } = (0, Q.Z)();
    n.useEffect(() => {
        if ((ej(), !(0, E.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, E.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: es.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [ej]),
        n.useEffect(() => {
            !t && (0, C.Y)(en.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        n.useEffect(
            () => () => {
                (0, j.K$)({
                    categories: [...ex.values()],
                    itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
                });
            },
            [ex]
        ),
        n.useEffect(() => {
            if (!t || eg || eh) return;
            let e = (e) => {
                if (e.key === ei.mR.Escape) eb();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, eg, eh, eb]);
    let eP = n.useCallback(() => {
            eL();
        }, [eL]),
        { containerRef: eR } = (function () {
            let e = n.useRef(null),
                t = n.useRef(null);
            return (
                (0, p.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: eZ, handleScrollToCategory: eA } = (0, U.xV)(T.current),
        { enabled: eM } = (0, R.Z)({ location: 'CollectiblesShop' }),
        ey = (0, c.e7)([b.Z], () => b.Z.gradientPreset),
        ew = !(0, c.e7)([S.Z], () => (0, f.wj)(S.Z.theme)) && null == ey,
        { reducedMotion: eH } = n.useContext(p.AccessibilityPreferencesContext),
        eF = n.useCallback(
            async (e, r, a) => {
                let n = a && !t && !eH.enabled;
                em(e), eC(r), await K(n), r && eA(r);
            },
            [K, eA, t, eH]
        );
    return (0, a.jsxs)(g.Gt, {
        value: _,
        children: [
            (0, a.jsx)('div', {
                className: ec.shop,
                ref: t ? eR : void 0,
                children: (0, a.jsxs)(p.AdvancedScroller, {
                    className: ec.shopScroll,
                    ref: T,
                    onScroll: () => {
                        if ((H(), null != T.current)) {
                            let e = T.current.getDistanceFromBottom();
                            ed >= ea.iA ? er(e < 20) : e <= 200 && eu(ed + ea.IV);
                        }
                    },
                    children: [
                        D !== ea.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(ec.shopViewWrapper, {
                                    [ec.visible]: D === ea.f7.VISIBLE,
                                    [ec.in]: D === ea.f7.IN,
                                    [ec.out]: D === ea.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(V.I, {
                                        isFullScreen: t,
                                        isLayer: eg,
                                        onClose: eb,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(ee.Z, {
                                        handleTransition: eF,
                                        numVisibleItems: ed
                                    })
                                ]
                            }),
                        G !== ea.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(ec.shopViewWrapper, {
                                    [ec.visible]: G === ea.f7.VISIBLE,
                                    [ec.in]: G === ea.f7.IN,
                                    [ec.out]: G === ea.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(V.I, {
                                        isFullScreen: t,
                                        isLayer: eg,
                                        onClose: eb,
                                        isCatalogView: r,
                                        transparent: r,
                                        handleTransition: $
                                    }),
                                    (0, a.jsx)('div', {
                                        className: ec.pageWrapper,
                                        children: (0, a.jsxs)('main', {
                                            className: i()(ec.page, { [ec.pageFullscreen]: t }),
                                            children: [
                                                eM &&
                                                    (0, a.jsxs)('div', {
                                                        className: i()(ec.popularPicksContainer, ew ? ec.defaultLightModeCustomGradient : ec.popularPicksGradient),
                                                        children: [
                                                            (0, a.jsx)(p.Text, {
                                                                className: ec.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: el.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, a.jsx)(q.Z, {
                                                                products: eN,
                                                                user: eE
                                                            })
                                                        ]
                                                    }),
                                                ev
                                                    ? (0, a.jsx)(Y.Z, {})
                                                    : eT
                                                      ? (0, a.jsx)(W.Z, { onRetry: eP })
                                                      : (0, a.jsx)('div', {
                                                            className: ec.categories,
                                                            children: eS
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e) =>
                                                                    (0, a.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => eZ(e.skuId, t),
                                                                            children: (0, a.jsx)(ef, {
                                                                                isPremiumUser: eI,
                                                                                category: e,
                                                                                initialItemCardRef: eO,
                                                                                setIsGiftEasterEggEnabled: eB,
                                                                                isGiftEasterEggEnabled: ek,
                                                                                isFullScreen: t
                                                                            })
                                                                        },
                                                                        e.skuId
                                                                    )
                                                                )
                                                        })
                                            ]
                                        })
                                    })
                                ]
                            })
                    ]
                })
            }),
            ek && (0, a.jsx)(X.Z, {}),
            !t &&
                G !== ea.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(et.Z, {
                            peaking: J,
                            transitioning: D === ea.f7.OUT
                        }),
                        (0, a.jsx)(et.Z, {
                            style: { left: 1850 },
                            peaking: J,
                            transitioning: D === ea.f7.OUT
                        })
                    ]
                })
        ]
    });
};
