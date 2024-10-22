r.r(t), r(47120);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(180650),
    o = r(979554),
    c = r(399606),
    d = r(704215),
    u = r(952265),
    m = r(481060),
    f = r(150063),
    p = r(434650),
    C = r(100527),
    h = r(906732),
    g = r(702486),
    _ = r(605236),
    b = r(977395),
    x = r(214852),
    E = r(479446),
    I = r(981632),
    v = r(290026),
    T = r(819640),
    L = r(594174),
    S = r(626135),
    k = r(74538),
    N = r(335131),
    B = r(381585),
    j = r(597688),
    O = r(328347),
    Z = r(307043),
    y = r(223143),
    P = r(298228),
    R = r(937510),
    A = r(309956),
    w = r(853748),
    M = r(426171),
    H = r(823941),
    D = r(752053),
    F = r(963102),
    U = r(508498),
    W = r(38900),
    V = r(709999),
    z = r(373113),
    G = r(802022),
    K = r(558117),
    Y = r(141594),
    $ = r(566564),
    X = r(531864),
    q = r(302800),
    J = r(215023),
    Q = r(981631),
    ee = r(921944),
    et = r(420212),
    er = r(474936),
    es = r(213731);
function en(e) {
    let { products: t, handleShopCardMount: r, header: n, category: a, isPremiumUser: i, isGiftEasterEggEnabled: l, showMysteryCard: o = !1 } = e,
        d = (0, c.e7)([L.default], () => L.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, s.jsxs)('div', {
              children: [
                  null != n
                      ? (0, s.jsx)(m.Text, {
                            className: es.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: n
                        })
                      : (0, s.jsx)(m.Spacer, { size: 24 }),
                  (0, s.jsx)('div', {
                      className: es.cardsContainer,
                      children: t.map((e, t) =>
                          (0, s.jsxs)(
                              B.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: [
                                      (0, s.jsx)(
                                          V.Z,
                                          {
                                              onMount: r(e),
                                              isPremiumUser: i,
                                              category: a,
                                              product: e,
                                              user: d,
                                              isGiftEasterEggEnabled: l
                                          },
                                          e.skuId
                                      ),
                                      1 === t && o && (0, s.jsx)(G.Z, {})
                                  ]
                              },
                              e.skuId
                          )
                      )
                  })
              ]
          });
}
function ea(e) {
    let { category: t, initialItemCardRef: r, ...a } = e,
        i = (0, R.l)(t.products),
        o = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId),
        d = n.useCallback(
            (e) => (t) => {
                e.skuId === o && (r.current = t.current);
            },
            [o, r]
        ),
        { revealed: u } = (0, K.R)('CollectiblesShop'),
        m = !u && t.skuId === l.T.STORM && i.length <= 15;
    return (0, s.jsx)(en, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: m,
        ...a
    });
}
function ei(e) {
    let { category: t, isPremiumUser: r, initialItemCardRef: a, isGiftEasterEggEnabled: l, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        u = n.useRef(10 + 70 * Math.random()),
        [f, C] = n.useState(!1),
        h = (0, q.M7)(t.skuId),
        g = (0, p.O)(
            (e) => {
                C(e && null != h);
            },
            d ? 0.13 : 0.15
        );
    return (0, s.jsxs)('div', {
        className: es.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, s.jsx)(m.Clickable, {
                    className: i()(es.hiddenWumpus, { [es.hiddenWumpusEnabled]: l }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, s.jsx)(I.Z, {
                        idleAnimationState: E.SR.IDLE,
                        giftStyle: er.Cj.BOX
                    })
                }),
            (0, s.jsx)(H.Z, {
                category: t,
                hideLimitedTimeBadge: null != h
            }),
            (0, s.jsx)(ea, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: r,
                isGiftEasterEggEnabled: l
            }),
            null != h &&
                null != t.unpublishedAt &&
                (0, s.jsx)(w.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: h,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    var t;
    let { isFullScreen: r = !0 } = e;
    (0, x.z)(b.f);
    let a = (0, Z.u)('CollectiblesShop'),
        { analyticsSource: l, analyticsLocations: p } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()),
        { analyticsLocations: E } = (0, h.ZP)([...p, C.Z.COLLECTIBLES_SHOP]),
        { sessionId: I, scrollerRef: R, scrollHandler: w } = (0, g._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, l),
        { feedState: H, catalogState: V, transitionToCatalog: G, transitionToFeed: K } = (0, A.B)(a, R),
        [q, en] = n.useState(!1),
        [ea, el] = n.useState(J.IV),
        [eo, ec] = n.useState(),
        [ed, eu] = n.useState(),
        em = (0, c.e7)([T.Z], () => T.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
        ef = (0, u.f9)(),
        { onClose: ep } = (0, U.Db)(),
        eC = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
        eh = k.ZP.canUseCollectibles(eC),
        { categories: eg, isFetchingCategories: e_, fetchCategoriesError: eb, fetchPurchasesError: ex, claimError: eE, refreshCategories: eI } = (0, y.Z)(),
        ev = null !== (t = null != eb ? eb : ex) && void 0 !== t ? t : eE;
    (0, v.P)();
    let eT = (0, P.O)(eg),
        eL = n.useRef(null),
        [eS, ek] = n.useState(!1);
    (0, M.Kp)({
        categories: eg,
        isFetchingCategories: e_,
        isLayer: em,
        initialItemCardRef: eL
    }),
        n.useEffect(() => {
            if (H === J.f7.VISIBLE || V === J.f7.VISIBLE) {
                var e;
                let t;
                (t = a ? (V === J.f7.VISIBLE ? ed : l) : l),
                    S.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: E,
                        source: t,
                        page_session_id: I,
                        page_type: H === J.f7.VISIBLE ? 'home' : 'full',
                        category: H === J.f7.VISIBLE ? void 0 : null === (e = j.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !eh &&
                S.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: er.cd.COLLECTIBLES_SHOP,
                    location_stack: E
                });
        }, [a, eh, E, l, I, H, V, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eN } = (0, Y.Z)();
    n.useEffect(() => {
        if ((eN(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ee.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eN]),
        n.useEffect(() => {
            !r && (0, f.Y)(Q.Z5c.COLLECTIBLES_SHOP);
        }, [r]),
        n.useEffect(
            () => () => {
                (0, N.K$)({
                    categories: [...eg.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eg]
        ),
        n.useEffect(() => {
            if (!r || em || ef) return;
            let e = (e) => {
                if (e.key === et.mR.Escape) ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [r, em, ef, ep]);
    let eB = n.useCallback(() => {
            eI();
        }, [eI]),
        { setCategoryRef: ej, handleScrollToCategory: eO } = (0, M.xV)(R.current),
        { reducedMotion: eZ } = n.useContext(m.AccessibilityPreferencesContext),
        ey = n.useRef(null),
        eP = n.useRef(null);
    (0, m.useFocusLock)(ey),
        n.useEffect(() => {
            if (!r) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [r]);
    let eR = n.useCallback(
            async (e, t, s) => {
                let n = s && !r && !eZ.enabled;
                eu(e), ec(t), await G(n), t && eO(t);
            },
            [G, eO, r, eZ]
        ),
        eA = (0, c.e7)([j.Z], () => {
            var e;
            return null === (e = j.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, s.jsx)(h.Gt, {
        value: E,
        children: (0, s.jsxs)(B.k0, {
            newValue: {
                sessionId: I,
                pageCategory: eA
            },
            children: [
                (0, s.jsx)('div', {
                    className: es.shop,
                    ref: r ? ey : eP,
                    tabIndex: -1,
                    children: (0, s.jsxs)(m.AdvancedScroller, {
                        className: es.shopScroll,
                        ref: R,
                        onScroll: () => {
                            if ((w(), null != R.current)) {
                                let e = R.current.getDistanceFromBottom();
                                ea >= J.iA ? en(e < 20) : e <= 200 && el(ea + J.IV);
                            }
                        },
                        children: [
                            H !== J.f7.HIDDEN &&
                                (0, s.jsxs)('div', {
                                    className: i()(es.shopViewWrapper, {
                                        [es.visible]: H === J.f7.VISIBLE,
                                        [es.in]: H === J.f7.IN,
                                        [es.out]: H === J.f7.OUT
                                    }),
                                    children: [
                                        (0, s.jsx)(F.I, {
                                            isFullScreen: r,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, s.jsx)($.Z, {
                                            handleTransition: eR,
                                            numVisibleItems: ea
                                        })
                                    ]
                                }),
                            V !== J.f7.HIDDEN &&
                                (0, s.jsxs)('div', {
                                    className: i()(es.shopViewWrapper, {
                                        [es.visible]: V === J.f7.VISIBLE,
                                        [es.in]: V === J.f7.IN,
                                        [es.out]: V === J.f7.OUT
                                    }),
                                    children: [
                                        (0, s.jsx)(F.I, {
                                            isFullScreen: r,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: a,
                                            transparent: a,
                                            handleTransition: K
                                        }),
                                        (0, s.jsx)('div', {
                                            className: es.pageWrapper,
                                            children: (0, s.jsx)('main', {
                                                className: i()(es.page, { [es.pageFullscreen]: r }),
                                                children: e_
                                                    ? (0, s.jsx)(W.Z, {})
                                                    : null != ev
                                                      ? (0, s.jsx)(D.Z, { onRetry: eB })
                                                      : (0, s.jsx)('div', {
                                                            className: es.categories,
                                                            children: eT
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, t) =>
                                                                    (0, s.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ej(e.skuId, t),
                                                                            children: (0, s.jsx)(B.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, s.jsx)(ei, {
                                                                                    isPremiumUser: eh,
                                                                                    category: e,
                                                                                    initialItemCardRef: eL,
                                                                                    setIsGiftEasterEggEnabled: ek,
                                                                                    isGiftEasterEggEnabled: eS,
                                                                                    isFullScreen: r
                                                                                })
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
                eS && (0, s.jsx)(z.Z, {}),
                !r &&
                    V !== J.f7.VISIBLE &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(X.Z, {
                                peaking: q,
                                transitioning: H === J.f7.OUT
                            }),
                            (0, s.jsx)(X.Z, {
                                style: { left: 1850 },
                                peaking: q,
                                transitioning: H === J.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
