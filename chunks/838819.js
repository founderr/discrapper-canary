n.r(t), n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(979554),
    c = n(399606),
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
    T = n(981632),
    L = n(290026),
    S = n(210887),
    N = n(819640),
    O = n(594174),
    k = n(626135),
    B = n(74538),
    j = n(335131),
    Z = n(372047),
    P = n(328347),
    A = n(307043),
    R = n(223143),
    y = n(675052),
    M = n(298228),
    w = n(937510),
    H = n(309956),
    D = n(853748),
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
    J = n(994896),
    Q = n(558117),
    ee = n(141594),
    et = n(566564),
    en = n(531864),
    ea = n(302800),
    er = n(215023),
    es = n(981631),
    eo = n(921944),
    ei = n(420212),
    el = n(474936),
    ec = n(689938),
    ed = n(53824);
function eu(e) {
    let { products: t, handleShopCardMount: n, header: r, category: s, isPremiumUser: o, isGiftEasterEggEnabled: i, showMysteryCard: l = !1 } = e,
        d = (0, c.e7)([O.default], () => O.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  null != r
                      ? (0, a.jsx)(p.Text, {
                            className: ed.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, a.jsx)(p.Spacer, { size: 24 }),
                  (0, a.jsx)('div', {
                      className: ed.cardsContainer,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(
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
                                  1 === t && l && (0, a.jsx)(q.Z, {})
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
        l = (0, c.e7)([P.Z], () => P.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                e.skuId === l && (n.current = t.current);
            },
            [l, n]
        ),
        { revealed: u } = (0, Q.R)('CollectiblesShop'),
        f = !u && t.skuId === i.T.STORM && o.length <= 15;
    return (0, a.jsx)(eu, {
        products: o,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...s
    });
}
function ep(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: s, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: l, showEasterEggToggle: c, isFullScreen: d, index: u } = e,
        f = r.useRef(10 + 70 * Math.random()),
        [g, m] = r.useState(!1),
        _ = (0, ea.M7)(t.skuId),
        b = (0, C.O)(
            (e) => {
                m(e && null != _);
            },
            d ? 0.13 : 0.15
        );
    return (0, a.jsxs)('div', {
        className: ed.categoryWrapper,
        ref: b,
        children: [
            c &&
                (0, a.jsx)(p.Clickable, {
                    className: o()(ed.hiddenWumpus, { [ed.hiddenWumpusEnabled]: i }),
                    onClick: () => l(!0),
                    style: { left: ''.concat(f.current, '%') },
                    children: (0, a.jsx)(T.Z, {
                        idleAnimationState: v.S.IDLE,
                        giftStyle: el.Cj.BOX
                    })
                }),
            (0, a.jsx)(U.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, a.jsx)(ef, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != _ &&
                null != t.unpublishedAt &&
                (0, a.jsx)(D.$, {
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
    let { analyticsSource: n, analyticsLocations: s } = (0, c.cj)([P.Z], () => P.Z.getAnalytics()),
        { analyticsLocations: i } = (0, _.ZP)([...s, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: C, scrollerRef: v, scrollHandler: T } = (0, b._)(es.rMx.COLLECTIBLES_SHOP_SCROLLED, n),
        w = (0, A.u)('CollectiblesShop'),
        { feedState: D, catalogState: U, transitionToCatalog: K, transitionToFeed: q } = (0, H.B)(w, v),
        [Q, ea] = r.useState(!1),
        [eu, ef] = r.useState(er.IV),
        eg = (0, c.e7)([N.Z], () => N.Z.getLayers().includes(es.S9g.COLLECTIBLES_SHOP)),
        eC = (0, u.f9)(),
        { onClose: em } = (0, z.Db)(),
        e_ = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        eb = B.ZP.canUseCollectibles(e_),
        { categories: eh, isFetchingCategories: ex, error: eI, refreshCategories: eE } = (0, R.Z)();
    (0, L.P)();
    let ev = (0, M.O)(eh),
        { sortedPopularPickProducts: eT } = (0, y.a)(eh),
        eL = r.useRef(null),
        [eS, eN] = r.useState(!1);
    (0, F.Kp)({
        categories: eh,
        isFetchingCategories: ex,
        isLayer: eg,
        initialItemCardRef: eL
    }),
        r.useEffect(() => {
            k.default.track(es.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: n,
                page_session_id: C
            }),
                !eb &&
                    k.default.track(es.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: el.cd.COLLECTIBLES_SHOP,
                        location_stack: i
                    });
        }, [eb, i, n, C]);
    let { dismissCollectiblesShopTabNewBadge: eO } = (0, ee.Z)();
    r.useEffect(() => {
        if ((eO(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: eo.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eO]),
        r.useEffect(() => {
            !t && (0, g.Y)(es.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        r.useEffect(
            () => () => {
                (0, j.K$)({
                    categories: [...eh.values()],
                    itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
                });
            },
            [eh]
        ),
        r.useEffect(() => {
            if (!t || eg || eC) return;
            let e = (e) => {
                if (e.key === ei.mR.Escape) em();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, eg, eC, em]);
    let ek = r.useCallback(() => {
            eE();
        }, [eE]),
        { containerRef: eB } = (function () {
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
        { setCategoryRef: ej, handleScrollToCategory: eZ } = (0, F.xV)(v.current),
        { condensedBannersAndDynamicHeadersEnabled: eP } = (0, J.O)({ location: 'CollectiblesShop' }),
        { enabled: eA } = (0, Z.Z)({ location: 'CollectiblesShop' }),
        eR = (0, c.e7)([h.Z], () => h.Z.gradientPreset),
        ey = !(0, c.e7)([S.Z], () => (0, f.wj)(S.Z.theme)) && null == eR,
        eM = r.useCallback(
            async (e, n) => {
                let a = n && !t;
                await K(a), e && eZ(e);
            },
            [K, eZ, t]
        );
    return (0, a.jsxs)(_.Gt, {
        value: i,
        children: [
            (0, a.jsx)('div', {
                className: ed.shop,
                ref: t ? eB : void 0,
                children: (0, a.jsxs)(p.AdvancedScroller, {
                    className: ed.shopScroll,
                    ref: v,
                    onScroll: () => {
                        if ((T(), null != v.current)) {
                            let e = v.current.getDistanceFromBottom();
                            eu >= er.iA ? ea(e < 20) : e <= 200 && ef(eu + er.IV);
                        }
                    },
                    children: [
                        D !== er.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: o()(ed.shopViewWrapper, {
                                    [ed.visible]: D === er.f7.VISIBLE,
                                    [ed.in]: D === er.f7.IN,
                                    [ed.out]: D === er.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eg,
                                        onClose: em,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(et.Z, {
                                        handleTransition: eM,
                                        numVisibleItems: eu
                                    })
                                ]
                            }),
                        U !== er.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: o()(ed.shopViewWrapper, {
                                    [ed.visible]: U === er.f7.VISIBLE,
                                    [ed.in]: U === er.f7.IN,
                                    [ed.out]: U === er.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eg,
                                        onClose: em,
                                        isCatalogView: w,
                                        transparent: w,
                                        handleTransition: q
                                    }),
                                    (0, a.jsx)('div', {
                                        className: ed.pageWrapper,
                                        children: (0, a.jsxs)('main', {
                                            className: o()(ed.page, { [ed.pageFullscreen]: t }),
                                            children: [
                                                eP &&
                                                    ev.length > 0 &&
                                                    (0, a.jsx)(V.h, {
                                                        categories: ev,
                                                        handleScrollToCategory: eZ
                                                    }),
                                                eA &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(ed.popularPicksContainer, ey ? ed.defaultLightModeCustomGradient : ed.popularPicksGradient),
                                                        children: [
                                                            (0, a.jsx)(p.Text, {
                                                                className: ed.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: ec.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, a.jsx)($.Z, {
                                                                products: eT,
                                                                user: e_
                                                            })
                                                        ]
                                                    }),
                                                ex
                                                    ? (0, a.jsx)(Y.Z, {})
                                                    : eI
                                                      ? (0, a.jsx)(G.Z, { onRetry: ek })
                                                      : (0, a.jsx)('div', {
                                                            className: ed.categories,
                                                            children: ev
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, n) =>
                                                                    (0, a.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ej(e.skuId, t),
                                                                            children: (0, a.jsx)(ep, {
                                                                                isPremiumUser: eb,
                                                                                category: e,
                                                                                initialItemCardRef: eL,
                                                                                setIsGiftEasterEggEnabled: eN,
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
            eS && (0, a.jsx)(X.Z, {}),
            !t &&
                U !== er.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(en.Z, {
                            peaking: Q,
                            transitioning: D === er.f7.OUT
                        }),
                        (0, a.jsx)(en.Z, {
                            style: { left: 1208 },
                            peaking: Q,
                            transitioning: D === er.f7.OUT
                        })
                    ]
                })
        ]
    });
};
