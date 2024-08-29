n.r(t), n(47120);
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    c = n(979554),
    l = n(399606),
    d = n(704215),
    u = n(952265),
    f = n(780384),
    p = n(481060),
    g = n(150063),
    C = n(434650),
    m = n(100527),
    _ = n(906732),
    b = n(702486),
    h = n(514361),
    x = n(605236),
    I = n(977395),
    E = n(214852),
    v = n(479446),
    S = n(981632),
    L = n(290026),
    T = n(210887),
    N = n(819640),
    k = n(594174),
    O = n(626135),
    j = n(74538),
    B = n(335131),
    Z = n(372047),
    P = n(328347),
    R = n(307043),
    A = n(223143),
    y = n(675052),
    M = n(298228),
    w = n(937510),
    D = n(309956),
    H = n(853748),
    F = n(426171),
    U = n(823941),
    G = n(752053),
    W = n(963102),
    V = n(128185),
    z = n(508498),
    Y = n(38900),
    K = n(709999),
    X = n(373113),
    q = n(802022),
    $ = n(399033),
    Q = n(994896),
    J = n(558117),
    ee = n(141594),
    et = n(566564),
    en = n(531864),
    er = n(302800),
    ea = n(215023),
    es = n(981631),
    eo = n(921944),
    ei = n(420212),
    ec = n(474936),
    el = n(689938),
    ed = n(53824);
function eu(e) {
    let { products: t, handleShopCardMount: n, header: a, category: s, isPremiumUser: o, isGiftEasterEggEnabled: i, showMysteryCard: c = !1 } = e,
        d = (0, l.e7)([k.default], () => k.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != a
                      ? (0, r.jsx)(p.Text, {
                            className: ed.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: a
                        })
                      : (0, r.jsx)(p.Spacer, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: ed.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      K.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: s,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: i
                                      },
                                      e.skuId
                                  ),
                                  1 === t && c && (0, r.jsx)(q.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function ef(e) {
    let { category: t, initialItemCardRef: n, ...s } = e,
        o = (0, w.l)(t.products),
        c = (0, l.e7)([P.Z], () => P.Z.initialProductSkuId),
        d = a.useCallback(
            (e) => (t) => {
                e.skuId === c && (n.current = t.current);
            },
            [c, n]
        ),
        { revealed: u } = (0, J.R)('CollectiblesShop'),
        f = !u && t.skuId === i.T.STORM && o.length <= 15;
    return (0, r.jsx)(eu, {
        products: o,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...s
    });
}
function ep(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: s, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: c, showEasterEggToggle: l, isFullScreen: d, index: u } = e,
        f = a.useRef(10 + 70 * Math.random()),
        [g, m] = a.useState(!1),
        _ = (0, er.M7)(t.skuId),
        b = (0, C.O)(
            (e) => {
                m(e && null != _);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ed.categoryWrapper,
        ref: b,
        children: [
            l &&
                (0, r.jsx)(p.Clickable, {
                    className: o()(ed.hiddenWumpus, { [ed.hiddenWumpusEnabled]: i }),
                    onClick: () => c(!0),
                    style: { left: ''.concat(f.current, '%') },
                    children: (0, r.jsx)(S.Z, {
                        idleAnimationState: v.S.IDLE,
                        giftStyle: ec.Cj.BOX
                    })
                }),
            (0, r.jsx)(U.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, r.jsx)(ef, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != _ &&
                null != t.unpublishedAt &&
                (0, r.jsx)(H.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: g,
                    displayOptions: _,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, E.z)(I.f);
    let { analyticsSource: n, analyticsLocations: s } = (0, l.cj)([P.Z], () => P.Z.getAnalytics()),
        { analyticsLocations: i } = (0, _.ZP)([...s, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: C, scrollerRef: v, scrollHandler: S } = (0, b._)(es.rMx.COLLECTIBLES_SHOP_SCROLLED, n),
        w = (0, R.u)('CollectiblesShop'),
        { feedState: H, catalogState: U, transitionToCatalog: K, transitionToFeed: q } = (0, D.B)(w, v),
        [J, er] = a.useState(!1),
        eu = (0, l.e7)([N.Z], () => N.Z.getLayers().includes(es.S9g.COLLECTIBLES_SHOP)),
        ef = (0, u.f9)(),
        { onClose: eg } = (0, z.Db)(),
        eC = (0, l.e7)([k.default], () => k.default.getCurrentUser()),
        em = j.ZP.canUseCollectibles(eC),
        { categories: e_, isFetchingCategories: eb, error: eh, refreshCategories: ex } = (0, A.Z)();
    (0, L.P)();
    let eI = (0, M.O)(e_),
        { sortedPopularPickProducts: eE } = (0, y.a)(e_),
        ev = a.useRef(null),
        [eS, eL] = a.useState(!1);
    (0, F.Kp)({
        categories: e_,
        isFetchingCategories: eb,
        isLayer: eu,
        initialItemCardRef: ev
    }),
        a.useEffect(() => {
            O.default.track(es.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: n,
                page_session_id: C
            }),
                !em &&
                    O.default.track(es.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: ec.cd.COLLECTIBLES_SHOP,
                        location_stack: i
                    });
        }, [em, i, n, C]);
    let { dismissCollectiblesShopTabNewBadge: eT } = (0, ee.Z)();
    a.useEffect(() => {
        if ((eT(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: eo.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eT]),
        a.useEffect(() => {
            !t && (0, g.Y)(es.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        a.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...e_.values()],
                    itemTypes: [c.Z.AVATAR_DECORATION, c.Z.PROFILE_EFFECT]
                });
            },
            [e_]
        ),
        a.useEffect(() => {
            if (!t || eu || ef) return;
            let e = (e) => {
                if (e.key === ei.mR.Escape) eg();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, eu, ef, eg]);
    let eN = a.useCallback(() => {
            ex();
        }, [ex]),
        { containerRef: ek } = (function () {
            let e = a.useRef(null),
                t = a.useRef(null);
            return (
                (0, p.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: eO, handleScrollToCategory: ej } = (0, F.xV)(v.current),
        { condensedBannersAndDynamicHeadersEnabled: eB } = (0, Q.O)({ location: 'CollectiblesShop' }),
        { enabled: eZ } = (0, Z.Z)({ location: 'CollectiblesShop' }),
        eP = (0, l.e7)([h.Z], () => h.Z.gradientPreset),
        eR = !(0, l.e7)([T.Z], () => (0, f.wj)(T.Z.theme)) && null == eP;
    return (0, r.jsxs)(_.Gt, {
        value: i,
        children: [
            (0, r.jsx)('div', {
                className: ed.shop,
                ref: t ? ek : void 0,
                children: (0, r.jsxs)(p.AdvancedScroller, {
                    className: ed.shopScroll,
                    ref: v,
                    onScroll: () => {
                        S(), null != v.current && (100 >= v.current.getDistanceFromBottom() ? er(!0) : er(!1));
                    },
                    children: [
                        H !== ea.f7.HIDDEN &&
                            (0, r.jsxs)('div', {
                                className: o()(ed.shopViewWrapper, {
                                    [ed.visible]: H === ea.f7.VISIBLE,
                                    [ed.in]: H === ea.f7.IN,
                                    [ed.out]: H === ea.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eu,
                                        onClose: eg,
                                        showBackButton: !1,
                                        transparent: !0
                                    }),
                                    (0, r.jsx)(et.Z, { handleTransition: K })
                                ]
                            }),
                        U !== ea.f7.HIDDEN &&
                            (0, r.jsxs)('div', {
                                className: o()(ed.shopViewWrapper, {
                                    [ed.visible]: U === ea.f7.VISIBLE,
                                    [ed.in]: U === ea.f7.IN,
                                    [ed.out]: U === ea.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eu,
                                        onClose: eg,
                                        showBackButton: w,
                                        handleTransition: q
                                    }),
                                    (0, r.jsx)('div', {
                                        className: ed.pageWrapper,
                                        children: (0, r.jsxs)('main', {
                                            className: o()(ed.page, { [ed.pageFullscreen]: t }),
                                            children: [
                                                eB &&
                                                    eI.length > 0 &&
                                                    (0, r.jsx)(V.h, {
                                                        categories: eI,
                                                        handleScrollToCategory: ej
                                                    }),
                                                eZ &&
                                                    (0, r.jsxs)('div', {
                                                        className: o()(ed.popularPicksContainer, eR ? ed.defaultLightModeCustomGradient : ed.popularPicksGradient),
                                                        children: [
                                                            (0, r.jsx)(p.Text, {
                                                                className: ed.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: el.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, r.jsx)($.Z, {
                                                                products: eE,
                                                                user: eC
                                                            })
                                                        ]
                                                    }),
                                                eb
                                                    ? (0, r.jsx)(Y.Z, {})
                                                    : eh
                                                      ? (0, r.jsx)(G.Z, { onRetry: eN })
                                                      : (0, r.jsx)('div', {
                                                            className: ed.categories,
                                                            children: eI
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, n) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => eO(e.skuId, t),
                                                                            children: (0, r.jsx)(ep, {
                                                                                isPremiumUser: em,
                                                                                category: e,
                                                                                initialItemCardRef: ev,
                                                                                setIsGiftEasterEggEnabled: eL,
                                                                                isGiftEasterEggEnabled: eS,
                                                                                isFullScreen: t,
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
            eS && (0, r.jsx)(X.Z, {}),
            U !== ea.f7.VISIBLE &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(en.Z, {
                            peaking: J,
                            transitioning: H === ea.f7.OUT
                        }),
                        (0, r.jsx)(en.Z, {
                            style: { left: 1208 },
                            peaking: J,
                            transitioning: H === ea.f7.OUT
                        })
                    ]
                })
        ]
    });
};
