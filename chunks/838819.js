n.r(t), n(47120);
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(180650),
    o = n(979554),
    c = n(399606),
    d = n(704215),
    u = n(952265),
    m = n(481060),
    f = n(150063),
    p = n(434650),
    C = n(100527),
    h = n(906732),
    g = n(702486),
    _ = n(605236),
    b = n(977395),
    x = n(214852),
    E = n(479446),
    v = n(981632),
    I = n(290026),
    T = n(819640),
    L = n(594174),
    S = n(626135),
    k = n(74538),
    N = n(335131),
    B = n(381585),
    j = n(597688),
    O = n(328347),
    Z = n(307043),
    y = n(223143),
    P = n(298228),
    R = n(937510),
    A = n(309956),
    w = n(853748),
    M = n(426171),
    H = n(823941),
    D = n(752053),
    F = n(963102),
    U = n(508498),
    W = n(38900),
    V = n(709999),
    z = n(373113),
    G = n(802022),
    K = n(558117),
    Y = n(141594),
    $ = n(566564),
    X = n(531864),
    q = n(302800),
    J = n(215023),
    Q = n(981631),
    ee = n(921944),
    et = n(420212),
    en = n(474936),
    er = n(213731);
function es(e) {
    let { products: t, handleShopCardMount: n, header: s, category: a, isPremiumUser: i, isGiftEasterEggEnabled: l, showMysteryCard: o = !1 } = e,
        d = (0, c.e7)([L.default], () => L.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != s
                      ? (0, r.jsx)(m.Text, {
                            className: er.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: s
                        })
                      : (0, r.jsx)(m.Spacer, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: er.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsxs)(
                              B.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: [
                                      (0, r.jsx)(
                                          V.Z,
                                          {
                                              onMount: n(e),
                                              isPremiumUser: i,
                                              category: a,
                                              product: e,
                                              user: d,
                                              isGiftEasterEggEnabled: l
                                          },
                                          e.skuId
                                      ),
                                      1 === t && o && (0, r.jsx)(G.Z, {})
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
    let { category: t, initialItemCardRef: n, ...a } = e,
        i = (0, R.l)(t.products),
        o = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId),
        d = s.useCallback(
            (e) => (t) => {
                e.skuId === o && (n.current = t.current);
            },
            [o, n]
        ),
        { revealed: u } = (0, K.R)('CollectiblesShop'),
        m = !u && t.skuId === l.T.STORM && i.length <= 15;
    return (0, r.jsx)(es, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: m,
        ...a
    });
}
function ei(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: l, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        u = s.useRef(10 + 70 * Math.random()),
        [f, C] = s.useState(!1),
        h = (0, q.M7)(t.skuId),
        g = (0, p.O)(
            (e) => {
                C(e && null != h);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: er.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, r.jsx)(m.Clickable, {
                    className: i()(er.hiddenWumpus, { [er.hiddenWumpusEnabled]: l }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, r.jsx)(v.Z, {
                        idleAnimationState: E.SR.IDLE,
                        giftStyle: en.Cj.BOX
                    })
                }),
            (0, r.jsx)(H.Z, {
                category: t,
                hideLimitedTimeBadge: null != h
            }),
            (0, r.jsx)(ea, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: l
            }),
            null != h &&
                null != t.unpublishedAt &&
                (0, r.jsx)(w.$, {
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
    let { isFullScreen: n = !0 } = e;
    (0, x.z)(b.f);
    let a = (0, Z.u)('CollectiblesShop'),
        { analyticsSource: l, analyticsLocations: p } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()),
        { analyticsLocations: E } = (0, h.ZP)([...p, C.Z.COLLECTIBLES_SHOP]),
        { sessionId: v, scrollerRef: R, scrollHandler: w } = (0, g._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, l),
        { feedState: H, catalogState: V, transitionToCatalog: G, transitionToFeed: K } = (0, A.B)(a, R),
        [q, es] = s.useState(!1),
        [ea, el] = s.useState(J.IV),
        [eo, ec] = s.useState(),
        [ed, eu] = s.useState(),
        em = (0, c.e7)([T.Z], () => T.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
        ef = (0, u.f9)(),
        { onClose: ep } = (0, U.Db)(),
        eC = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
        eh = k.ZP.canUseCollectibles(eC),
        { categories: eg, isFetchingCategories: e_, fetchCategoriesError: eb, fetchPurchasesError: ex, claimError: eE, refreshCategories: ev } = (0, y.Z)(),
        eI = null !== (t = null != eb ? eb : ex) && void 0 !== t ? t : eE;
    (0, I.P)();
    let eT = (0, P.O)(eg),
        eL = s.useRef(null),
        [eS, ek] = s.useState(!1);
    (0, M.Kp)({
        categories: eg,
        isFetchingCategories: e_,
        isLayer: em,
        initialItemCardRef: eL
    }),
        s.useEffect(() => {
            if (H === J.f7.VISIBLE || V === J.f7.VISIBLE) {
                var e;
                let t;
                (t = a ? (V === J.f7.VISIBLE ? ed : l) : l),
                    S.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: E,
                        source: t,
                        page_session_id: v,
                        page_type: H === J.f7.VISIBLE ? 'home' : 'full',
                        category: H === J.f7.VISIBLE ? void 0 : null === (e = j.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !eh &&
                S.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: en.cd.COLLECTIBLES_SHOP,
                    location_stack: E
                });
        }, [a, eh, E, l, v, H, V, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eN } = (0, Y.Z)();
    s.useEffect(() => {
        if ((eN(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ee.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eN]),
        s.useEffect(() => {
            !n && (0, f.Y)(Q.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        s.useEffect(
            () => () => {
                (0, N.K$)({
                    categories: [...eg.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eg]
        ),
        s.useEffect(() => {
            if (!n || em || ef) return;
            let e = (e) => {
                if (e.key === et.mR.Escape) ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, ef, ep]);
    let eB = s.useCallback(() => {
            ev();
        }, [ev]),
        { setCategoryRef: ej, handleScrollToCategory: eO } = (0, M.xV)(R.current),
        { reducedMotion: eZ } = s.useContext(m.AccessibilityPreferencesContext),
        ey = s.useRef(null),
        eP = s.useRef(null);
    (0, m.useFocusLock)(ey),
        s.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eR = s.useCallback(
            async (e, t, r) => {
                let s = r && !n && !eZ.enabled;
                eu(e), ec(t), await G(s), t && eO(t);
            },
            [G, eO, n, eZ]
        ),
        eA = (0, c.e7)([j.Z], () => {
            var e;
            return null === (e = j.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(h.Gt, {
        value: E,
        children: (0, r.jsxs)(B.k0, {
            newValue: {
                sessionId: v,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: er.shop,
                    ref: n ? ey : eP,
                    tabIndex: -1,
                    children: (0, r.jsxs)(m.AdvancedScroller, {
                        className: er.shopScroll,
                        ref: R,
                        onScroll: () => {
                            if ((w(), null != R.current)) {
                                let e = R.current.getDistanceFromBottom();
                                ea >= J.iA ? es(e < 20) : e <= 200 && el(ea + J.IV);
                            }
                        },
                        children: [
                            H !== J.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: i()(er.shopViewWrapper, {
                                        [er.visible]: H === J.f7.VISIBLE,
                                        [er.in]: H === J.f7.IN,
                                        [er.out]: H === J.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(F.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, r.jsx)($.Z, {
                                            handleTransition: eR,
                                            numVisibleItems: ea
                                        })
                                    ]
                                }),
                            V !== J.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: i()(er.shopViewWrapper, {
                                        [er.visible]: V === J.f7.VISIBLE,
                                        [er.in]: V === J.f7.IN,
                                        [er.out]: V === J.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(F.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: a,
                                            transparent: a,
                                            handleTransition: K
                                        }),
                                        (0, r.jsx)('div', {
                                            className: er.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: i()(er.page, { [er.pageFullscreen]: n }),
                                                children: e_
                                                    ? (0, r.jsx)(W.Z, {})
                                                    : null != eI
                                                      ? (0, r.jsx)(D.Z, { onRetry: eB })
                                                      : (0, r.jsx)('div', {
                                                            className: er.categories,
                                                            children: eT
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, t) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ej(e.skuId, t),
                                                                            children: (0, r.jsx)(B.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, r.jsx)(ei, {
                                                                                    isPremiumUser: eh,
                                                                                    category: e,
                                                                                    initialItemCardRef: eL,
                                                                                    setIsGiftEasterEggEnabled: ek,
                                                                                    isGiftEasterEggEnabled: eS,
                                                                                    isFullScreen: n
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
                eS && (0, r.jsx)(z.Z, {}),
                !n &&
                    V !== J.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(X.Z, {
                                peaking: q,
                                transitioning: H === J.f7.OUT
                            }),
                            (0, r.jsx)(X.Z, {
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
