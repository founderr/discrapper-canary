n.r(t), n(47120);
var s = n(735250),
    r = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
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
    O = n(594174),
    k = n(626135),
    j = n(74538),
    B = n(335131),
    Z = n(372047),
    P = n(328347),
    A = n(307043),
    R = n(223143),
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
    es = n(302800),
    er = n(215023),
    ea = n(981631),
    ei = n(921944),
    eo = n(420212),
    ec = n(474936),
    el = n(689938),
    ed = n(53824);
function eu(e) {
    let { products: t, handleShopCardMount: n, header: r, category: a, isPremiumUser: i, isGiftEasterEggEnabled: o, showMysteryCard: c = !1 } = e,
        d = (0, l.e7)([O.default], () => O.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, s.jsxs)('div', {
              children: [
                  null != r
                      ? (0, s.jsx)(p.Text, {
                            className: ed.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, s.jsx)(p.Spacer, { size: 24 }),
                  (0, s.jsx)('div', {
                      className: ed.cardsContainer,
                      children: t.map((e, t) =>
                          (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(
                                      K.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: i,
                                          category: a,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: o
                                      },
                                      e.skuId
                                  ),
                                  1 === t && c && (0, s.jsx)(q.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function ef(e) {
    let { category: t, initialItemCardRef: n, ...a } = e,
        i = (0, w.l)(t.products),
        c = (0, l.e7)([P.Z], () => P.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                e.skuId === c && (n.current = t.current);
            },
            [c, n]
        ),
        { revealed: u } = (0, J.R)('CollectiblesShop'),
        f = !u && t.skuId === o.T.STORM && i.length <= 15;
    return (0, s.jsx)(eu, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...a
    });
}
function ep(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: c, showEasterEggToggle: l, isFullScreen: d, index: u } = e,
        f = r.useRef(10 + 70 * Math.random()),
        [g, m] = r.useState(!1),
        _ = (0, es.M7)(t.skuId),
        b = (0, C.O)(
            (e) => {
                m(e && null != _);
            },
            d ? 0.13 : 0.15
        );
    return (0, s.jsxs)('div', {
        className: ed.categoryWrapper,
        ref: b,
        children: [
            l &&
                (0, s.jsx)(p.Clickable, {
                    className: i()(ed.hiddenWumpus, { [ed.hiddenWumpusEnabled]: o }),
                    onClick: () => c(!0),
                    style: { left: ''.concat(f.current, '%') },
                    children: (0, s.jsx)(S.Z, {
                        idleAnimationState: v.S.IDLE,
                        giftStyle: ec.Cj.BOX
                    })
                }),
            (0, s.jsx)(U.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, s.jsx)(ef, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: o
            }),
            null != _ &&
                null != t.unpublishedAt &&
                (0, s.jsx)(H.$, {
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
    let { analyticsSource: n, analyticsLocations: a } = (0, l.cj)([P.Z], () => P.Z.getAnalytics()),
        { analyticsLocations: o } = (0, _.ZP)([...a, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: C, scrollerRef: v, scrollHandler: S } = (0, b._)(ea.rMx.COLLECTIBLES_SHOP_SCROLLED, n),
        w = (0, A.u)('CollectiblesShop'),
        { feedState: H, catalogState: U, transitionToCatalog: K, transitionToFeed: q } = (0, D.B)(w, v),
        [J, es] = r.useState(!1),
        eu = (0, l.e7)([N.Z], () => N.Z.getLayers().includes(ea.S9g.COLLECTIBLES_SHOP)),
        ef = (0, u.f9)(),
        { onClose: eg } = (0, z.Db)(),
        eC = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        em = j.ZP.canUseCollectibles(eC),
        { categories: e_, isFetchingCategories: eb, error: eh, refreshCategories: ex } = (0, R.Z)();
    (0, L.P)();
    let eI = (0, M.O)(e_),
        { sortedPopularPickProducts: eE } = (0, y.a)(e_),
        ev = r.useRef(null),
        [eS, eL] = r.useState(!1);
    (0, F.Kp)({
        categories: e_,
        isFetchingCategories: eb,
        isLayer: eu,
        initialItemCardRef: ev
    }),
        r.useEffect(() => {
            k.default.track(ea.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: o,
                source: n,
                page_session_id: C
            }),
                !em &&
                    k.default.track(ea.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: ec.cd.COLLECTIBLES_SHOP,
                        location_stack: o
                    });
        }, [em, o, n, C]);
    let { dismissCollectiblesShopTabNewBadge: eT } = (0, ee.Z)();
    r.useEffect(() => {
        if ((eT(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ei.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eT]),
        r.useEffect(() => {
            !t && (0, g.Y)(ea.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        r.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...e_.values()],
                    itemTypes: [c.Z.AVATAR_DECORATION, c.Z.PROFILE_EFFECT]
                });
            },
            [e_]
        ),
        r.useEffect(() => {
            if (!t || eu || ef) return;
            let e = (e) => {
                if (e.key === eo.mR.Escape) eg();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, eu, ef, eg]);
    let eN = r.useCallback(() => {
            ex();
        }, [ex]),
        { containerRef: eO } = (function () {
            let e = r.useRef(null),
                t = r.useRef(null);
            return (
                (0, p.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: ek, handleScrollToCategory: ej } = (0, F.xV)(v.current),
        { condensedBannersAndDynamicHeadersEnabled: eB } = (0, Q.O)({ location: 'CollectiblesShop' }),
        { enabled: eZ } = (0, Z.Z)({ location: 'CollectiblesShop' }),
        eP = (0, l.e7)([h.Z], () => h.Z.gradientPreset),
        eA = !(0, l.e7)([T.Z], () => (0, f.wj)(T.Z.theme)) && null == eP;
    return (0, s.jsxs)(_.Gt, {
        value: o,
        children: [
            (0, s.jsx)('div', {
                className: ed.shop,
                ref: t ? eO : void 0,
                children: (0, s.jsxs)(p.AdvancedScroller, {
                    className: ed.shopScroll,
                    ref: v,
                    onScroll: () => {
                        S(), null != v.current && (100 >= v.current.getDistanceFromBottom() ? es(!0) : es(!1));
                    },
                    children: [
                        H !== er.f7.HIDDEN &&
                            (0, s.jsx)('div', {
                                className: i()(ed.shopViewWrapper, {
                                    [ed.visible]: H === er.f7.VISIBLE,
                                    [ed.in]: H === er.f7.IN,
                                    [ed.out]: H === er.f7.OUT
                                }),
                                children: (0, s.jsx)(et.Z, { handleTransition: K })
                            }),
                        U !== er.f7.HIDDEN &&
                            (0, s.jsxs)('div', {
                                className: i()(ed.shopViewWrapper, {
                                    [ed.visible]: U === er.f7.VISIBLE,
                                    [ed.in]: U === er.f7.IN,
                                    [ed.out]: U === er.f7.OUT
                                }),
                                children: [
                                    (0, s.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eu,
                                        onClose: eg,
                                        showBackButton: w,
                                        handleTransition: q
                                    }),
                                    (0, s.jsx)('div', {
                                        className: ed.pageWrapper,
                                        children: (0, s.jsxs)('main', {
                                            className: i()(ed.page, { [ed.pageFullscreen]: t }),
                                            children: [
                                                eB &&
                                                    eI.length > 0 &&
                                                    (0, s.jsx)(V.h, {
                                                        categories: eI,
                                                        handleScrollToCategory: ej
                                                    }),
                                                eZ &&
                                                    (0, s.jsxs)('div', {
                                                        className: i()(ed.popularPicksContainer, eA ? ed.defaultLightModeCustomGradient : ed.popularPicksGradient),
                                                        children: [
                                                            (0, s.jsx)(p.Text, {
                                                                className: ed.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: el.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, s.jsx)($.Z, {
                                                                products: eE,
                                                                user: eC
                                                            })
                                                        ]
                                                    }),
                                                eb
                                                    ? (0, s.jsx)(Y.Z, {})
                                                    : eh
                                                      ? (0, s.jsx)(G.Z, { onRetry: eN })
                                                      : (0, s.jsx)('div', {
                                                            className: ed.categories,
                                                            children: eI
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, n) =>
                                                                    (0, s.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ek(e.skuId, t),
                                                                            children: (0, s.jsx)(ep, {
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
            eS && (0, s.jsx)(X.Z, {}),
            U !== er.f7.VISIBLE &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(en.Z, {
                            peaking: J,
                            transitioning: H === er.f7.OUT
                        }),
                        (0, s.jsx)(en.Z, {
                            style: { left: 1208 },
                            peaking: J,
                            transitioning: H === er.f7.OUT
                        })
                    ]
                })
        ]
    });
};
