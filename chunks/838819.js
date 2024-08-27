n.r(t), n(47120);
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(392711),
    l = n(180650),
    c = n(979554),
    d = n(399606),
    u = n(704215),
    f = n(952265),
    p = n(780384),
    g = n(481060),
    C = n(150063),
    m = n(434650),
    _ = n(100527),
    b = n(906732),
    h = n(702486),
    x = n(514361),
    I = n(605236),
    E = n(977395),
    v = n(214852),
    S = n(479446),
    T = n(981632),
    L = n(290026),
    N = n(210887),
    O = n(819640),
    k = n(594174),
    j = n(626135),
    B = n(74538),
    P = n(335131),
    Z = n(372047),
    A = n(328347),
    R = n(280773),
    y = n(307043),
    M = n(617452),
    w = n(223143),
    D = n(675052),
    H = n(298228),
    F = n(937510),
    U = n(309956),
    G = n(853748),
    W = n(426171),
    V = n(823941),
    z = n(752053),
    Y = n(963102),
    K = n(128185),
    X = n(508498),
    q = n(38900),
    $ = n(709999),
    Q = n(373113),
    J = n(802022),
    ee = n(399033),
    et = n(994896),
    en = n(558117),
    er = n(141594),
    es = n(566564),
    ea = n(531864),
    ei = n(302800),
    eo = n(215023),
    el = n(981631),
    ec = n(921944),
    ed = n(420212),
    eu = n(474936),
    ef = n(689938),
    ep = n(53824);
function eg(e) {
    let { products: t, handleShopCardMount: n, header: s, category: a, isPremiumUser: i, isGiftEasterEggEnabled: o, showMysteryCard: l = !1 } = e,
        c = (0, d.e7)([k.default], () => k.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != s
                      ? (0, r.jsx)(g.Text, {
                            className: ep.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: s
                        })
                      : (0, r.jsx)(g.Spacer, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: ep.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      $.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: i,
                                          category: a,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: o
                                      },
                                      e.skuId
                                  ),
                                  1 === t && l && (0, r.jsx)(J.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function eC(e) {
    let { category: t, initialItemCardRef: n, includeBundles: a = !1, ...i } = e,
        u = (0, F.l)(t.products),
        f = (0, d.e7)([A.Z], () => A.Z.initialProductSkuId),
        p = s.useCallback(
            (e) => (t) => {
                e.skuId === f && (n.current = t.current);
            },
            [f, n]
        ),
        { unifiedProductCatalogEnabled: g } = (0, R.n)('CollectiblesShop'),
        { revealed: C } = (0, en.R)('CollectiblesShop'),
        m = !C && t.skuId === l.T.STORM && u.length <= 15;
    if (g || a)
        return (0, r.jsx)(eg, {
            products: u,
            handleShopCardMount: p,
            category: t,
            showMysteryCard: m,
            ...i
        });
    {
        var _, b;
        let e = (0, o.groupBy)(u, 'type');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eg, {
                    products: null !== (_ = e[c.Z.AVATAR_DECORATION]) && void 0 !== _ ? _ : [],
                    handleShopCardMount: p,
                    category: t,
                    header: ef.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
                    showMysteryCard: m,
                    ...i
                }),
                (0, r.jsx)(eg, {
                    products: null !== (b = e[c.Z.PROFILE_EFFECT]) && void 0 !== b ? b : [],
                    handleShopCardMount: p,
                    category: t,
                    header: ef.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                    ...i
                })
            ]
        });
    }
}
function em(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: l, showEasterEggToggle: c, isFullScreen: d, index: u, includeBundles: f = !1 } = e,
        p = s.useRef(10 + 70 * Math.random()),
        [C, _] = s.useState(!1),
        b = (0, ei.M7)(t.skuId),
        h = (0, m.O)(
            (e) => {
                _(e && null != b);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ep.categoryWrapper,
        ref: h,
        children: [
            c &&
                (0, r.jsx)(g.Clickable, {
                    className: i()(ep.hiddenWumpus, { [ep.hiddenWumpusEnabled]: o }),
                    onClick: () => l(!0),
                    style: { left: ''.concat(p.current, '%') },
                    children: (0, r.jsx)(T.Z, {
                        idleAnimationState: S.S.IDLE,
                        giftStyle: eu.Cj.BOX
                    })
                }),
            (0, r.jsx)(V.Z, {
                category: t,
                hideLimitedTimeBadge: null != b,
                index: u
            }),
            (0, r.jsx)(eC, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: o,
                includeBundles: f
            }),
            null != b &&
                null != t.unpublishedAt &&
                (0, r.jsx)(G.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: C,
                    displayOptions: b,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, v.z)(E.f);
    let { analyticsSource: n, analyticsLocations: a } = (0, d.cj)([A.Z], () => A.Z.getAnalytics()),
        { analyticsLocations: o } = (0, b.ZP)([...a, _.Z.COLLECTIBLES_SHOP]),
        { sessionId: l, scrollerRef: m, scrollHandler: S } = (0, h._)(el.rMx.COLLECTIBLES_SHOP_SCROLLED, n),
        T = (0, y.u)('CollectiblesShop'),
        { feedState: R, catalogState: F, transitionToCatalog: G, transitionToFeed: V } = (0, U.B)(T, m),
        [$, J] = s.useState(!1),
        en = (0, d.e7)([O.Z], () => O.Z.getLayers().includes(el.S9g.COLLECTIBLES_SHOP)),
        ei = (0, f.f9)(),
        { onClose: eg } = (0, X.Db)(),
        eC = (0, d.e7)([k.default], () => k.default.getCurrentUser()),
        e_ = B.ZP.canUseCollectibles(eC),
        { categories: eb, isFetchingCategories: eh, error: ex, refreshCategories: eI } = (0, w.Z)();
    (0, L.P)();
    let eE = (0, H.O)(eb),
        { sortedPopularPickProducts: ev } = (0, D.a)(eb),
        eS = (0, M.e)('CollectiblesShop'),
        eT = s.useRef(null),
        [eL, eN] = s.useState(!1);
    (0, W.Kp)({
        categories: eb,
        isFetchingCategories: eh,
        isLayer: en,
        initialItemCardRef: eT
    }),
        s.useEffect(() => {
            j.default.track(el.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: o,
                source: n,
                page_session_id: l
            }),
                !e_ &&
                    j.default.track(el.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: eu.cd.COLLECTIBLES_SHOP,
                        location_stack: o
                    });
        }, [e_, o, n, l]);
    let { dismissCollectiblesShopTabNewBadge: eO } = (0, er.Z)();
    s.useEffect(() => {
        if ((eO(), !(0, I.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, I.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ec.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eO]),
        s.useEffect(() => {
            !t && (0, C.Y)(el.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        s.useEffect(
            () => () => {
                (0, P.K$)({
                    categories: [...eb.values()],
                    itemTypes: [c.Z.AVATAR_DECORATION, c.Z.PROFILE_EFFECT]
                });
            },
            [eb]
        ),
        s.useEffect(() => {
            if (!t || en || ei) return;
            let e = (e) => {
                if (e.key === ed.mR.Escape) eg();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, en, ei, eg]);
    let ek = s.useCallback(() => {
            eI();
        }, [eI]),
        { containerRef: ej } = (function () {
            let e = s.useRef(null),
                t = s.useRef(null);
            return (
                (0, g.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: eB, handleScrollToCategory: eP } = (0, W.xV)(m.current),
        { condensedBannersAndDynamicHeadersEnabled: eZ } = (0, et.O)({ location: 'CollectiblesShop' }),
        { enabled: eA } = (0, Z.Z)({ location: 'CollectiblesShop' }),
        eR = (0, d.e7)([x.Z], () => x.Z.gradientPreset),
        ey = !(0, d.e7)([N.Z], () => (0, p.wj)(N.Z.theme)) && null == eR;
    return (0, r.jsxs)(b.Gt, {
        value: o,
        children: [
            (0, r.jsx)('div', {
                className: ep.shop,
                ref: t ? ej : void 0,
                children: (0, r.jsxs)(g.AdvancedScroller, {
                    className: ep.shopScroll,
                    ref: m,
                    onScroll: () => {
                        S(), null != m.current && (100 >= m.current.getDistanceFromBottom() ? J(!0) : J(!1));
                    },
                    children: [
                        R !== eo.f7.HIDDEN &&
                            (0, r.jsx)('div', {
                                className: i()(ep.shopViewWrapper, {
                                    [ep.visible]: R === eo.f7.VISIBLE,
                                    [ep.in]: R === eo.f7.IN,
                                    [ep.out]: R === eo.f7.OUT
                                }),
                                children: (0, r.jsx)(es.Z, { handleTransition: G })
                            }),
                        F !== eo.f7.HIDDEN &&
                            (0, r.jsxs)('div', {
                                className: i()(ep.shopViewWrapper, {
                                    [ep.visible]: F === eo.f7.VISIBLE,
                                    [ep.in]: F === eo.f7.IN,
                                    [ep.out]: F === eo.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(Y.I, {
                                        isFullScreen: t,
                                        isLayer: en,
                                        onClose: eg,
                                        showBackButton: T,
                                        handleTransition: V
                                    }),
                                    (0, r.jsx)('div', {
                                        className: ep.pageWrapper,
                                        children: (0, r.jsxs)('main', {
                                            className: i()(ep.page, { [ep.pageFullscreen]: t }),
                                            children: [
                                                eZ &&
                                                    eE.length > 0 &&
                                                    (0, r.jsx)(K.h, {
                                                        categories: eE,
                                                        handleScrollToCategory: eP
                                                    }),
                                                eA &&
                                                    (0, r.jsxs)('div', {
                                                        className: i()(ep.popularPicksContainer, ey ? ep.defaultLightModeCustomGradient : ep.popularPicksGradient),
                                                        children: [
                                                            (0, r.jsx)(g.Text, {
                                                                className: ep.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: ef.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, r.jsx)(ee.Z, {
                                                                products: ev,
                                                                user: eC
                                                            })
                                                        ]
                                                    }),
                                                eh
                                                    ? (0, r.jsx)(q.Z, {})
                                                    : ex
                                                      ? (0, r.jsx)(z.Z, { onRetry: ek })
                                                      : (0, r.jsx)('div', {
                                                            className: ep.categories,
                                                            children: eE
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, n) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => eB(e.skuId, t),
                                                                            children: (0, r.jsx)(em, {
                                                                                isPremiumUser: e_,
                                                                                category: e,
                                                                                initialItemCardRef: eT,
                                                                                setIsGiftEasterEggEnabled: eN,
                                                                                isGiftEasterEggEnabled: eL,
                                                                                isFullScreen: t,
                                                                                includeBundles: eS,
                                                                                index: n
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
            eL && (0, r.jsx)(Q.Z, {}),
            F !== eo.f7.VISIBLE &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ea.Z, {
                            peaking: $,
                            transitioning: R === eo.f7.OUT
                        }),
                        (0, r.jsx)(ea.Z, {
                            style: { left: 1208 },
                            peaking: $,
                            transitioning: R === eo.f7.OUT
                        })
                    ]
                })
        ]
    });
};
