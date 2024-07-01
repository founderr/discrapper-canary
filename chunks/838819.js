n.r(t), n(47120);
var r = n(735250), s = n(470079), a = n(120356), o = n.n(a), i = n(392711), l = n(979554), c = n(399606), d = n(704215), u = n(952265), p = n(481060), g = n(150063), f = n(434650), C = n(100527), m = n(906732), h = n(702486), _ = n(605236), b = n(479446), x = n(981632), I = n(290026), E = n(819640), L = n(594174), S = n(626135), v = n(74538), T = n(335131), N = n(372047), O = n(328347), j = n(280773), R = n(617452), Z = n(223143), k = n(675052), A = n(298228), P = n(937510), B = n(853748), M = n(426171), y = n(823941), w = n(752053), F = n(963102), D = n(128185), H = n(508498), U = n(38900), G = n(709999), W = n(373113), V = n(399033), z = n(994896), Y = n(141594), K = n(302800), X = n(981631), q = n(921944), $ = n(420212), J = n(474936), Q = n(689938), ee = n(4477);
function et(e) {
    let {
            products: t,
            handleShopCardMount: n,
            header: s,
            category: a,
            isPremiumUser: o,
            isGiftEasterEggEnabled: i
        } = e, l = (0, c.e7)([L.default], () => L.default.getCurrentUser());
    return null == l || 0 === t.length ? null : (0, r.jsxs)('div', {
        children: [
            null != s ? (0, r.jsx)(p.Text, {
                className: ee.itemTypeTitle,
                color: 'header-secondary',
                variant: 'text-sm/bold',
                children: s
            }) : (0, r.jsx)(p.Spacer, { size: 24 }),
            (0, r.jsx)('div', {
                className: ee.cardsContainer,
                children: t.map(e => (0, r.jsx)(G.Z, {
                    onMount: n(e),
                    isPremiumUser: o,
                    category: a,
                    product: e,
                    user: l,
                    isGiftEasterEggEnabled: i
                }, e.skuId))
            })
        ]
    });
}
function en(e) {
    let {
            category: t,
            initialItemCardRef: n,
            includeBundles: a = !1,
            ...o
        } = e, d = (0, P.l)(t.products), u = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId), p = s.useCallback(e => t => {
            e.skuId === u && (n.current = t.current);
        }, [
            u,
            n
        ]), {unifiedProductCatalogEnabled: g} = (0, j.n)('CollectiblesShop');
    if (g || a)
        return (0, r.jsx)(et, {
            products: d,
            handleShopCardMount: p,
            category: t,
            ...o
        });
    {
        var f, C;
        let e = (0, i.groupBy)(d, 'type');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(et, {
                    products: null !== (f = e[l.Z.AVATAR_DECORATION]) && void 0 !== f ? f : [],
                    handleShopCardMount: p,
                    category: t,
                    header: Q.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
                    ...o
                }),
                (0, r.jsx)(et, {
                    products: null !== (C = e[l.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
                    handleShopCardMount: p,
                    category: t,
                    header: Q.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                    ...o
                })
            ]
        });
    }
}
function er(e) {
    let {
            category: t,
            isPremiumUser: n,
            initialItemCardRef: a,
            isGiftEasterEggEnabled: i,
            setIsGiftEasterEggEnabled: l,
            showEasterEggToggle: c,
            isFullScreen: d,
            index: u,
            includeBundles: g = !1
        } = e, C = s.useRef(10 + 70 * Math.random()), [m, h] = s.useState(!1), _ = (0, K.M7)(t.skuId), I = (0, f.O)(e => {
            h(e && null != _);
        }, d ? 0.13 : 0.15);
    return (0, r.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: I,
        children: [
            c && (0, r.jsx)(p.Clickable, {
                className: o()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: i }),
                onClick: () => l(!0),
                style: { left: ''.concat(C.current, '%') },
                children: (0, r.jsx)(x.Z, {
                    idleAnimationState: b.S.IDLE,
                    giftStyle: J.Cj.BOX
                })
            }),
            (0, r.jsx)(y.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, r.jsx)(en, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i,
                includeBundles: g
            }),
            null != _ && null != t.unpublishedAt && (0, r.jsx)(B.$, {
                unpublishedAt: t.unpublishedAt,
                isVisible: m,
                displayOptions: _,
                isFullScreen: d
            })
        ]
    });
}
t.default = function (e) {
    let {
            isFullScreen: t = !0
        } = e, {
            analyticsSource: n,
            analyticsLocations: a
        } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()), {analyticsLocations: i} = (0, m.ZP)([
            ...a,
            C.Z.COLLECTIBLES_SHOP
        ]), f = (0, c.e7)([E.Z], () => E.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)), b = (0, u.f9)(), {onClose: x} = (0, H.Db)(), j = (0, c.e7)([L.default], () => L.default.getCurrentUser()), P = v.ZP.canUseCollectibles(j), {
            categories: B,
            isFetchingCategories: y,
            error: G,
            refreshCategories: K
        } = (0, Z.Z)();
    (0, I.P)();
    let et = (0, A.O)(B), {
            sortedPopularPickProducts: en,
            popularProductToCategoryMap: es
        } = (0, k.a)(B), ea = (0, R.e)('CollectiblesShop'), eo = s.useRef(null), [ei, el] = s.useState(!1);
    (0, M.Kp)({
        categories: B,
        isFetchingCategories: y,
        isLayer: f,
        initialItemCardRef: eo
    });
    let {
        sessionId: ec,
        scrollerRef: ed,
        scrollHandler: eu
    } = (0, h._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
    s.useEffect(() => {
        S.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: i,
            source: n,
            page_session_id: ec
        }), !P && S.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
            type: J.cd.COLLECTIBLES_SHOP,
            location_stack: i
        });
    }, [
        P,
        i,
        n,
        ec
    ]);
    let {dismissCollectiblesShopTabNewBadge: ep} = (0, Y.Z)();
    s.useEffect(() => {
        if (ep(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: q.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [ep]), s.useEffect(() => {
        !t && (0, g.Y)(X.Z5c.COLLECTIBLES_SHOP);
    }, [t]), s.useEffect(() => () => {
        (0, T.K$)({
            categories: [...B.values()],
            itemTypes: [
                l.Z.AVATAR_DECORATION,
                l.Z.PROFILE_EFFECT
            ]
        });
    }, [B]), s.useEffect(() => {
        if (!t || f || b)
            return;
        let e = e => {
            if (e.key === $.mR.Escape)
                x();
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [
        t,
        f,
        b,
        x
    ]);
    let eg = s.useCallback(() => {
            K();
        }, [K]), {containerRef: ef} = function () {
            let e = s.useRef(null), t = s.useRef(null);
            return (0, p.useFocusLock)(e, { returnRef: t }), {
                containerRef: e,
                returnRef: t
            };
        }(), {
            setCategoryRef: eC,
            handleScrollToCategory: em
        } = (0, M.xV)(ed.current), {condensedBannersAndDynamicHeadersEnabled: eh} = (0, z.O)({ location: 'CollectiblesShop' }), {enabled: e_} = (0, N.Z)({ location: 'CollectiblesShop' });
    return (0, r.jsxs)(m.Gt, {
        value: i,
        children: [
            (0, r.jsx)('div', {
                className: ee.shop,
                ref: t ? ef : void 0,
                children: (0, r.jsxs)(p.AdvancedScroller, {
                    className: ee.shopScroll,
                    ref: ed,
                    onScroll: eu,
                    children: [
                        (0, r.jsx)(F.I, {
                            isFullScreen: t,
                            isLayer: f,
                            onClose: x
                        }),
                        (0, r.jsx)('div', {
                            className: ee.pageWrapper,
                            children: (0, r.jsxs)('main', {
                                className: o()(ee.page, { [ee.pageFullscreen]: t }),
                                children: [
                                    eh && et.length > 0 && (0, r.jsx)(D.h, {
                                        categories: et,
                                        handleScrollToCategory: em
                                    }),
                                    e_ && (0, r.jsxs)('div', {
                                        className: ee.popularPicksContainer,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                className: ee.popularPicksHeader,
                                                variant: 'text-lg/medium',
                                                children: Q.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                            }),
                                            (0, r.jsx)(V.Z, {
                                                products: en,
                                                user: j,
                                                productToCategoryMap: es
                                            })
                                        ]
                                    }),
                                    y ? (0, r.jsx)(U.Z, {}) : G ? (0, r.jsx)(w.Z, { onRetry: eg }) : (0, r.jsx)('div', {
                                        className: ee.categories,
                                        children: et.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                                            let {products: t} = e;
                                            return t.length > 0;
                                        }).map((e, n) => (0, r.jsx)('div', {
                                            ref: t => eC(e.skuId, t),
                                            children: (0, r.jsx)(er, {
                                                isPremiumUser: P,
                                                category: e,
                                                initialItemCardRef: eo,
                                                setIsGiftEasterEggEnabled: el,
                                                isGiftEasterEggEnabled: ei,
                                                isFullScreen: t,
                                                includeBundles: ea,
                                                index: n
                                            })
                                        }, e.skuId))
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            ei && (0, r.jsx)(W.Z, {})
        ]
    });
};
