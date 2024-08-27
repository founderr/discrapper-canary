n.r(t), n(47120);
var s = n(735250),
    r = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(392711),
    c = n(180650),
    l = n(979554),
    d = n(399606),
    u = n(704215),
    f = n(952265),
    p = n(780384),
    g = n(481060),
    C = n(150063),
    _ = n(434650),
    m = n(100527),
    h = n(906732),
    b = n(702486),
    x = n(514361),
    E = n(605236),
    I = n(977395),
    v = n(214852),
    S = n(479446),
    L = n(981632),
    T = n(290026),
    N = n(210887),
    O = n(819640),
    k = n(594174),
    j = n(626135),
    R = n(74538),
    A = n(335131),
    P = n(372047),
    B = n(328347),
    Z = n(280773),
    M = n(617452),
    y = n(223143),
    w = n(675052),
    D = n(298228),
    F = n(937510),
    H = n(853748),
    U = n(426171),
    G = n(823941),
    W = n(752053),
    V = n(963102),
    Y = n(128185),
    z = n(508498),
    K = n(38900),
    X = n(709999),
    q = n(373113),
    $ = n(802022),
    Q = n(399033),
    J = n(994896),
    ee = n(558117),
    et = n(141594),
    en = n(302800),
    es = n(981631),
    er = n(921944),
    ea = n(420212),
    ei = n(474936),
    eo = n(689938),
    ec = n(53824);
function el(e) {
    let { products: t, handleShopCardMount: n, header: r, category: a, isPremiumUser: i, isGiftEasterEggEnabled: o, showMysteryCard: c = !1 } = e,
        l = (0, d.e7)([k.default], () => k.default.getCurrentUser());
    return null == l || 0 === t.length
        ? null
        : (0, s.jsxs)('div', {
              children: [
                  null != r
                      ? (0, s.jsx)(g.Text, {
                            className: ec.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, s.jsx)(g.Spacer, { size: 24 }),
                  (0, s.jsx)('div', {
                      className: ec.cardsContainer,
                      children: t.map((e, t) =>
                          (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(
                                      X.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: i,
                                          category: a,
                                          product: e,
                                          user: l,
                                          isGiftEasterEggEnabled: o
                                      },
                                      e.skuId
                                  ),
                                  1 === t && c && (0, s.jsx)($.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function ed(e) {
    let { category: t, initialItemCardRef: n, includeBundles: a = !1, ...i } = e,
        u = (0, F.l)(t.products),
        f = (0, d.e7)([B.Z], () => B.Z.initialProductSkuId),
        p = r.useCallback(
            (e) => (t) => {
                e.skuId === f && (n.current = t.current);
            },
            [f, n]
        ),
        { unifiedProductCatalogEnabled: g } = (0, Z.n)('CollectiblesShop'),
        { revealed: C } = (0, ee.R)('CollectiblesShop'),
        _ = !C && t.skuId === c.T.STORM && u.length <= 15;
    if (g || a)
        return (0, s.jsx)(el, {
            products: u,
            handleShopCardMount: p,
            category: t,
            showMysteryCard: _,
            ...i
        });
    {
        var m, h;
        let e = (0, o.groupBy)(u, 'type');
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(el, {
                    products: null !== (m = e[l.Z.AVATAR_DECORATION]) && void 0 !== m ? m : [],
                    handleShopCardMount: p,
                    category: t,
                    header: eo.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
                    showMysteryCard: _,
                    ...i
                }),
                (0, s.jsx)(el, {
                    products: null !== (h = e[l.Z.PROFILE_EFFECT]) && void 0 !== h ? h : [],
                    handleShopCardMount: p,
                    category: t,
                    header: eo.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                    ...i
                })
            ]
        });
    }
}
function eu(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: c, showEasterEggToggle: l, isFullScreen: d, index: u, includeBundles: f = !1 } = e,
        p = r.useRef(10 + 70 * Math.random()),
        [C, m] = r.useState(!1),
        h = (0, en.M7)(t.skuId),
        b = (0, _.O)(
            (e) => {
                m(e && null != h);
            },
            d ? 0.13 : 0.15
        );
    return (0, s.jsxs)('div', {
        className: ec.categoryWrapper,
        ref: b,
        children: [
            l &&
                (0, s.jsx)(g.Clickable, {
                    className: i()(ec.hiddenWumpus, { [ec.hiddenWumpusEnabled]: o }),
                    onClick: () => c(!0),
                    style: { left: ''.concat(p.current, '%') },
                    children: (0, s.jsx)(L.Z, {
                        idleAnimationState: S.S.IDLE,
                        giftStyle: ei.Cj.BOX
                    })
                }),
            (0, s.jsx)(G.Z, {
                category: t,
                hideLimitedTimeBadge: null != h,
                index: u
            }),
            (0, s.jsx)(ed, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: o,
                includeBundles: f
            }),
            null != h &&
                null != t.unpublishedAt &&
                (0, s.jsx)(H.$, {
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
    (0, v.z)(I.f);
    let { analyticsSource: n, analyticsLocations: a } = (0, d.cj)([B.Z], () => B.Z.getAnalytics()),
        { analyticsLocations: o } = (0, h.ZP)([...a, m.Z.COLLECTIBLES_SHOP]),
        c = (0, d.e7)([O.Z], () => O.Z.getLayers().includes(es.S9g.COLLECTIBLES_SHOP)),
        _ = (0, f.f9)(),
        { onClose: S } = (0, z.Db)(),
        L = (0, d.e7)([k.default], () => k.default.getCurrentUser()),
        Z = R.ZP.canUseCollectibles(L),
        { categories: F, isFetchingCategories: H, error: G, refreshCategories: X } = (0, y.Z)();
    (0, T.P)();
    let $ = (0, D.O)(F),
        { sortedPopularPickProducts: ee, popularProductToCategoryMap: en } = (0, w.a)(F),
        el = (0, M.e)('CollectiblesShop'),
        ed = r.useRef(null),
        [ef, ep] = r.useState(!1);
    (0, U.Kp)({
        categories: F,
        isFetchingCategories: H,
        isLayer: c,
        initialItemCardRef: ed
    });
    let { sessionId: eg, scrollerRef: eC, scrollHandler: e_ } = (0, b._)(es.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
    r.useEffect(() => {
        j.default.track(es.rMx.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: o,
            source: n,
            page_session_id: eg
        }),
            !Z &&
                j.default.track(es.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: ei.cd.COLLECTIBLES_SHOP,
                    location_stack: o
                });
    }, [Z, o, n, eg]);
    let { dismissCollectiblesShopTabNewBadge: em } = (0, et.Z)();
    r.useEffect(() => {
        if ((em(), !(0, E.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, E.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: er.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [em]),
        r.useEffect(() => {
            !t && (0, C.Y)(es.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        r.useEffect(
            () => () => {
                (0, A.K$)({
                    categories: [...F.values()],
                    itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
                });
            },
            [F]
        ),
        r.useEffect(() => {
            if (!t || c || _) return;
            let e = (e) => {
                if (e.key === ea.mR.Escape) S();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, c, _, S]);
    let eh = r.useCallback(() => {
            X();
        }, [X]),
        { containerRef: eb } = (function () {
            let e = r.useRef(null),
                t = r.useRef(null);
            return (
                (0, g.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: ex, handleScrollToCategory: eE } = (0, U.xV)(eC.current),
        { condensedBannersAndDynamicHeadersEnabled: eI } = (0, J.O)({ location: 'CollectiblesShop' }),
        { enabled: ev } = (0, P.Z)({ location: 'CollectiblesShop' }),
        eS = (0, d.e7)([x.Z], () => x.Z.gradientPreset),
        eL = !(0, d.e7)([N.Z], () => (0, p.wj)(N.Z.theme)) && null == eS;
    return (0, s.jsxs)(h.Gt, {
        value: o,
        children: [
            (0, s.jsx)('div', {
                className: ec.shop,
                ref: t ? eb : void 0,
                children: (0, s.jsxs)(g.AdvancedScroller, {
                    className: ec.shopScroll,
                    ref: eC,
                    onScroll: e_,
                    children: [
                        (0, s.jsx)(V.I, {
                            isFullScreen: t,
                            isLayer: c,
                            onClose: S
                        }),
                        (0, s.jsx)('div', {
                            className: ec.pageWrapper,
                            children: (0, s.jsxs)('main', {
                                className: i()(ec.page, { [ec.pageFullscreen]: t }),
                                children: [
                                    eI &&
                                        $.length > 0 &&
                                        (0, s.jsx)(Y.h, {
                                            categories: $,
                                            handleScrollToCategory: eE
                                        }),
                                    ev &&
                                        (0, s.jsxs)('div', {
                                            className: i()(ec.popularPicksContainer, eL ? ec.defaultLightModeCustomGradient : ec.popularPicksGradient),
                                            children: [
                                                (0, s.jsx)(g.Text, {
                                                    className: ec.popularPicksHeader,
                                                    variant: 'text-lg/medium',
                                                    children: eo.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                }),
                                                (0, s.jsx)(Q.Z, {
                                                    products: ee,
                                                    user: L,
                                                    productToCategoryMap: en
                                                })
                                            ]
                                        }),
                                    H
                                        ? (0, s.jsx)(K.Z, {})
                                        : G
                                          ? (0, s.jsx)(W.Z, { onRetry: eh })
                                          : (0, s.jsx)('div', {
                                                className: ec.categories,
                                                children: $.filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                    .filter((e) => {
                                                        let { products: t } = e;
                                                        return t.length > 0;
                                                    })
                                                    .map((e, n) =>
                                                        (0, s.jsx)(
                                                            'div',
                                                            {
                                                                ref: (t) => ex(e.skuId, t),
                                                                children: (0, s.jsx)(eu, {
                                                                    isPremiumUser: Z,
                                                                    category: e,
                                                                    initialItemCardRef: ed,
                                                                    setIsGiftEasterEggEnabled: ep,
                                                                    isGiftEasterEggEnabled: ef,
                                                                    isFullScreen: t,
                                                                    includeBundles: el,
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
            }),
            ef && (0, s.jsx)(q.Z, {})
        ]
    });
};
