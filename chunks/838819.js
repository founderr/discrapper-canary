n.r(t), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(979554),
    c = n(399606),
    d = n(704215),
    u = n(952265),
    m = n(481060),
    h = n(150063),
    p = n(434650),
    g = n(100527),
    f = n(906732),
    C = n(702486),
    v = n(605236),
    b = n(977395),
    x = n(214852),
    _ = n(479446),
    k = n(981632),
    I = n(290026),
    E = n(819640),
    S = n(594174),
    j = n(626135),
    T = n(74538),
    N = n(335131),
    B = n(381585),
    y = n(597688),
    L = n(328347),
    P = n(307043),
    Z = n(223143),
    O = n(298228),
    w = n(937510),
    A = n(309956),
    R = n(853748),
    F = n(426171),
    H = n(823941),
    D = n(752053),
    V = n(963102),
    M = n(508498),
    W = n(38900),
    U = n(709999),
    G = n(373113),
    z = n(802022),
    $ = n(558117),
    K = n(141594),
    J = n(566564),
    Y = n(531864),
    q = n(302800),
    Q = n(215023),
    X = n(981631),
    ee = n(921944),
    et = n(420212),
    en = n(474936),
    er = n(697526);
function ea(e) {
    let { products: t, handleShopCardMount: n, header: a, category: i, isPremiumUser: l, isGiftEasterEggEnabled: s, showMysteryCard: o = !1 } = e,
        d = (0, c.e7)([S.default], () => S.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != a
                      ? (0, r.jsx)(m.Text, {
                            className: er.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: a
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
                                          U.Z,
                                          {
                                              onMount: n(e),
                                              isPremiumUser: l,
                                              category: i,
                                              product: e,
                                              user: d,
                                              isGiftEasterEggEnabled: s
                                          },
                                          e.skuId
                                      ),
                                      1 === t && o && (0, r.jsx)(z.Z, {})
                                  ]
                              },
                              e.skuId
                          )
                      )
                  })
              ]
          });
}
function ei(e) {
    let { category: t, initialItemCardRef: n, ...i } = e,
        l = (0, w.l)(t.products),
        o = (0, c.e7)([L.Z], () => L.Z.initialProductSkuId),
        d = a.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === o || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === o)) === !0) && (n.current = t.current);
            },
            [o, n]
        ),
        { revealed: u } = (0, $.R)('CollectiblesShop'),
        m = !u && t.skuId === s.T.STORM && l.length <= 15;
    return (0, r.jsx)(ea, {
        products: l,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: m,
        ...i
    });
}
function el(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        u = a.useRef(10 + 70 * Math.random()),
        [h, g] = a.useState(!1),
        f = (0, q.M7)(t.skuId),
        C = (0, p.O)(
            (e) => {
                g(e && null != f);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: er.categoryWrapper,
        ref: C,
        children: [
            c &&
                (0, r.jsx)(m.Clickable, {
                    className: l()(er.hiddenWumpus, { [er.hiddenWumpusEnabled]: s }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, r.jsx)(k.Z, {
                        idleAnimationState: _.SR.IDLE,
                        giftStyle: en.Cj.BOX
                    })
                }),
            (0, r.jsx)(H.Z, {
                category: t,
                hideLimitedTimeBadge: null != f
            }),
            (0, r.jsx)(ei, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != f &&
                null != t.unpublishedAt &&
                (0, r.jsx)(R.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: f,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    var t;
    let { isFullScreen: n = !0 } = e;
    (0, x.z)(b.f);
    let i = (0, P.u)('CollectiblesShop'),
        { analyticsSource: s, analyticsLocations: p } = (0, c.cj)([L.Z], () => L.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, f.ZP)([...p, g.Z.COLLECTIBLES_SHOP]),
        { sessionId: k, scrollerRef: w, scrollHandler: R } = (0, C._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
        { feedState: H, catalogState: U, transitionToCatalog: z, transitionToFeed: $ } = (0, A.B)(i, w),
        [q, ea] = a.useState(!1),
        [ei, es] = a.useState(Q.IV),
        [eo, ec] = a.useState(),
        [ed, eu] = a.useState(),
        em = (0, c.e7)([E.Z], () => E.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)),
        eh = (0, u.f9)(),
        { onClose: ep } = (0, M.Db)(),
        eg = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
        ef = T.ZP.canUseCollectibles(eg),
        { categories: eC, isFetchingCategories: ev, fetchCategoriesError: eb, fetchPurchasesError: ex, claimError: e_, refreshCategories: ek } = (0, Z.ZP)({ location: 'CollectiblesShop.web' }),
        eI = null !== (t = null != eb ? eb : ex) && void 0 !== t ? t : e_;
    (0, I.P)();
    let eE = (0, O.O)(eC),
        eS = a.useRef(null),
        [ej, eT] = a.useState(!1);
    (0, F.Kp)({
        isFetchingCategories: ev,
        isLayer: em,
        initialItemCardRef: eS
    }),
        a.useEffect(() => {
            if (H === Q.f7.VISIBLE || U === Q.f7.VISIBLE) {
                var e;
                let t;
                (t = i ? (U === Q.f7.VISIBLE ? ed : s) : s),
                    j.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: k,
                        page_type: H === Q.f7.VISIBLE ? 'home' : 'full',
                        category: H === Q.f7.VISIBLE ? void 0 : null === (e = y.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !ef &&
                j.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: en.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [i, ef, _, s, k, H, U, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eN } = (0, K.Z)();
    a.useEffect(() => {
        if ((eN(), !(0, v.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, v.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ee.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eN]),
        a.useEffect(() => {
            !n && (0, h.Y)(X.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        a.useEffect(
            () => () => {
                (0, N.K$)({
                    categories: [...eC.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eC]
        ),
        a.useEffect(() => {
            if (!n || em || eh) return;
            let e = (e) => {
                if (e.key === et.mR.Escape) ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, eh, ep]);
    let eB = a.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: ey, handleScrollToCategory: eL } = (0, F.xV)(w.current),
        { reducedMotion: eP } = a.useContext(m.AccessibilityPreferencesContext),
        eZ = a.useRef(null),
        eO = a.useRef(null);
    (0, m.useFocusLock)(eZ),
        a.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eO.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let ew = a.useCallback(
            async (e, t, r) => {
                let a = r && !n && !eP.enabled;
                eu(e), ec(t), await z(a), t && eL(t);
            },
            [z, eL, n, eP]
        ),
        eA = (0, c.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(f.Gt, {
        value: _,
        children: (0, r.jsxs)(B.k0, {
            newValue: {
                sessionId: k,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: er.shop,
                    ref: n ? eZ : eO,
                    tabIndex: -1,
                    children: (0, r.jsxs)(m.AdvancedScroller, {
                        className: er.shopScroll,
                        ref: w,
                        onScroll: () => {
                            if ((R(), null != w.current)) {
                                let e = w.current.getDistanceFromBottom();
                                ei >= Q.iA ? ea(e < 20) : e <= 200 && es(ei + Q.IV);
                            }
                        },
                        children: [
                            H !== Q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: l()(er.shopViewWrapper, {
                                        [er.visible]: H === Q.f7.VISIBLE,
                                        [er.in]: H === Q.f7.IN,
                                        [er.out]: H === Q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(V.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, r.jsx)(J.Z, {
                                            handleTransition: ew,
                                            numVisibleItems: ei
                                        })
                                    ]
                                }),
                            U !== Q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: l()(er.shopViewWrapper, {
                                        [er.visible]: U === Q.f7.VISIBLE,
                                        [er.in]: U === Q.f7.IN,
                                        [er.out]: U === Q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(V.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: i,
                                            transparent: i,
                                            handleTransition: $
                                        }),
                                        (0, r.jsx)('div', {
                                            className: er.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: l()(er.page, { [er.pageFullscreen]: n }),
                                                children: ev
                                                    ? (0, r.jsx)(W.Z, {})
                                                    : null != eI
                                                      ? (0, r.jsx)(D.Z, {
                                                            onRetry: eB,
                                                            errorOrigin: D.i.SHOP_PAGE
                                                        })
                                                      : (0, r.jsx)('div', {
                                                            className: er.categories,
                                                            children: eE
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, t) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ey(e.skuId, t),
                                                                            children: (0, r.jsx)(B.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, r.jsx)(el, {
                                                                                    isPremiumUser: ef,
                                                                                    category: e,
                                                                                    initialItemCardRef: eS,
                                                                                    setIsGiftEasterEggEnabled: eT,
                                                                                    isGiftEasterEggEnabled: ej,
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
                ej && (0, r.jsx)(G.Z, {}),
                !n &&
                    U !== Q.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Y.Z, {
                                peaking: q,
                                transitioning: H === Q.f7.OUT
                            }),
                            (0, r.jsx)(Y.Z, {
                                style: { left: 1850 },
                                peaking: q,
                                transitioning: H === Q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
