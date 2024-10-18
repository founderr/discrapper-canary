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
    var t;
    let { isFullScreen: s = !0 } = e;
    (0, x.z)(b.f);
    let n = (0, O.u)('CollectiblesShop'),
        { analyticsSource: l, analyticsLocations: f } = (0, c.cj)([j.Z], () => j.Z.getAnalytics()),
        { analyticsLocations: E } = (0, h.ZP)([...f, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: I, scrollerRef: P, scrollHandler: A } = (0, g._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, l),
        { feedState: M, catalogState: W, transitionToCatalog: z, transitionToFeed: G } = (0, R.B)(n, P),
        [X, ea] = r.useState(!1),
        [er, ei] = r.useState(q.IV),
        [el, eo] = r.useState(),
        [ec, ed] = r.useState(),
        eu = (0, c.e7)([L.Z], () => L.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        em = (0, u.f9)(),
        { onClose: eC } = (0, F.Db)(),
        ef = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        ep = N.ZP.canUseCollectibles(ef),
        { categories: eh, isFetchingCategories: eg, fetchCategoriesError: e_, fetchPurchasesError: eb, claimError: ex, refreshCategories: eE } = (0, Z.Z)(),
        eI = null !== (t = null != e_ ? e_ : eb) && void 0 !== t ? t : ex;
    (0, T.P)();
    let eT = (0, y.O)(eh),
        eL = r.useRef(null),
        [ev, eS] = r.useState(!1);
    (0, w.Kp)({
        categories: eh,
        isFetchingCategories: eg,
        isLayer: eu,
        initialItemCardRef: eL
    }),
        r.useEffect(() => {
            if (M === q.f7.VISIBLE || W === q.f7.VISIBLE) {
                var e;
                let t;
                (t = n ? (W === q.f7.VISIBLE ? ec : l) : l),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: E,
                        source: t,
                        page_session_id: I,
                        page_type: M === q.f7.VISIBLE ? 'home' : 'full',
                        category: M === q.f7.VISIBLE ? void 0 : null === (e = B.Z.getCategory(el)) || void 0 === e ? void 0 : e.name
                    });
            }
            !ep &&
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: et.cd.COLLECTIBLES_SHOP,
                    location_stack: E
                });
        }, [n, ep, E, l, I, M, W, el, eo, ec]);
    let { dismissCollectiblesShopTabNewBadge: eN } = (0, K.Z)();
    r.useEffect(() => {
        if ((eN(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: Q.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eN]),
        r.useEffect(() => {
            !s && (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [s]),
        r.useEffect(
            () => () => {
                (0, k.K$)({
                    categories: [...eh.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eh]
        ),
        r.useEffect(() => {
            if (!s || eu || em) return;
            let e = (e) => {
                if (e.key === ee.mR.Escape) eC();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [s, eu, em, eC]);
    let ek = r.useCallback(() => {
            eE();
        }, [eE]),
        { setCategoryRef: eB, handleScrollToCategory: ej } = (0, w.xV)(P.current),
        { reducedMotion: eO } = r.useContext(m.AccessibilityPreferencesContext),
        eZ = r.useRef(null),
        ey = r.useRef(null);
    (0, m.useFocusLock)(eZ),
        r.useEffect(() => {
            if (!s) {
                var e;
                null === (e = ey.current) || void 0 === e || e.focus();
            }
        }, [s]);
    let eP = r.useCallback(
        async (e, t, a) => {
            let r = a && !s && !eO.enabled;
            ed(e), eo(t), await z(r), t && ej(t);
        },
        [z, ej, s, eO]
    );
    return (0, a.jsxs)(h.Gt, {
        value: E,
        children: [
            (0, a.jsx)('div', {
                className: es.shop,
                ref: s ? eZ : ey,
                tabIndex: -1,
                children: (0, a.jsxs)(m.AdvancedScroller, {
                    className: es.shopScroll,
                    ref: P,
                    onScroll: () => {
                        if ((A(), null != P.current)) {
                            let e = P.current.getDistanceFromBottom();
                            er >= q.iA ? ea(e < 20) : e <= 200 && ei(er + q.IV);
                        }
                    },
                    children: [
                        M !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(es.shopViewWrapper, {
                                    [es.visible]: M === q.f7.VISIBLE,
                                    [es.in]: M === q.f7.IN,
                                    [es.out]: M === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(D.I, {
                                        isFullScreen: s,
                                        isLayer: eu,
                                        onClose: eC,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(Y.Z, {
                                        handleTransition: eP,
                                        numVisibleItems: er
                                    })
                                ]
                            }),
                        W !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(es.shopViewWrapper, {
                                    [es.visible]: W === q.f7.VISIBLE,
                                    [es.in]: W === q.f7.IN,
                                    [es.out]: W === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(D.I, {
                                        isFullScreen: s,
                                        isLayer: eu,
                                        onClose: eC,
                                        isCatalogView: n,
                                        transparent: n,
                                        handleTransition: G
                                    }),
                                    (0, a.jsx)('div', {
                                        className: es.pageWrapper,
                                        children: (0, a.jsx)('main', {
                                            className: i()(es.page, { [es.pageFullscreen]: s }),
                                            children: eg
                                                ? (0, a.jsx)(U.Z, {})
                                                : null != eI
                                                  ? (0, a.jsx)(H.Z, { onRetry: ek })
                                                  : (0, a.jsx)('div', {
                                                        className: es.categories,
                                                        children: eT
                                                            .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                            .filter((e) => {
                                                                let { products: t } = e;
                                                                return t.length > 0;
                                                            })
                                                            .map((e) =>
                                                                (0, a.jsx)(
                                                                    'div',
                                                                    {
                                                                        ref: (t) => eB(e.skuId, t),
                                                                        children: (0, a.jsx)(en, {
                                                                            isPremiumUser: ep,
                                                                            category: e,
                                                                            initialItemCardRef: eL,
                                                                            setIsGiftEasterEggEnabled: eS,
                                                                            isGiftEasterEggEnabled: ev,
                                                                            isFullScreen: s
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
            ev && (0, a.jsx)(V.Z, {}),
            !s &&
                W !== q.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)($.Z, {
                            peaking: X,
                            transitioning: M === q.f7.OUT
                        }),
                        (0, a.jsx)($.Z, {
                            style: { left: 1850 },
                            peaking: X,
                            transitioning: M === q.f7.OUT
                        })
                    ]
                })
        ]
    });
};
