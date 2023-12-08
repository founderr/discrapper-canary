(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84008"], {
        247329: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d7f558364208761f7a1f.png"
        },
        333838: function(e, t, a) {
            "use strict";
            e.exports = a.p + "f42f024b20ca1139f6e8.png"
        },
        399637: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a4d34e0beb715b3ae5ca.png"
        },
        725015: function(e, t, a) {
            "use strict";
            e.exports = a.p + "815b57292b07014e96a2.png"
        },
        976076: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7fe8141f020d02e97188.png"
        },
        200406: function(e, t, a) {
            "use strict";
            e.exports = a.p + "da2e3e6f963314b6a1e7.png"
        },
        283045: function(e, t, a) {
            "use strict";
            e.exports = a.p + "26da69d314fb3ced9795.png"
        },
        718297: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5d06cba0502c778b92e5.png"
        },
        929880: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bdc1b9ae0098085fe138.png"
        },
        204173: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e67f00e8b56d263737a6.jpg"
        },
        489847: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ab3468632852f3725893.png"
        },
        330825: function(e, t, a) {
            "use strict";
            e.exports = a.p + "79903b7cc64eb6d55aa8.png"
        },
        165057: function(e, t, a) {
            "use strict";
            e.exports = a.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, a) {
            "use strict";
            e.exports = a.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, a) {
            "use strict";
            e.exports = a.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ac20c9a7b69e25e9d680.png"
        },
        125221: function(e, t, a) {
            "use strict";
            e.exports = a.p + "8ffd6f59392e09ba0fe4.png"
        },
        770704: function(e, t, a) {
            "use strict";
            e.exports = a.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, a) {
            "use strict";
            e.exports = a.p + "1616ba0a324e68a4fff7.png"
        },
        321220: function(e, t, a) {
            "use strict";
            e.exports = a.p + "0e8e3e9463a4afbcd15a.svg"
        },
        684386: function(e, t, a) {
            "use strict";
            e.exports = a.p + "44b2c2b3210b29c00990.svg"
        },
        93902: function(e, t, a) {
            "use strict";
            e.exports = a.p + "de1981a6479d060d8ebd.png"
        },
        481120: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePageScrollPosition: function() {
                    return o
                }
            });
            var l = a("884691"),
                s = a("748820"),
                r = a("560103"),
                n = a("599110");
            let i = (e, t, a, l) => {
                    let {
                        scrollTop: s = 0,
                        scrollOffset: r = 0,
                        scrollHeight: i = 0,
                        scrollWidth: o = 0
                    } = l;
                    if (i > 0) {
                        let l = (s + r) / i;
                        l > 0 && n.default.track(e, {
                            scroll_visible_percent: l,
                            source: a,
                            page_height: Math.round(i),
                            page_width: Math.round(o),
                            page_session_id: t
                        })
                    }
                },
                o = (e, t) => {
                    let a = l.useRef(null),
                        n = l.useRef((0, s.v4)()),
                        o = (0, r.useThrottledFunction)(i, 5e3, [], {
                            trailing: !0
                        }),
                        c = l.useCallback(() => {
                            var l;
                            let s = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
                            null != s && o(e, n.current, t, {
                                scrollTop: s.scrollTop,
                                scrollOffset: s.offsetHeight,
                                scrollHeight: s.scrollHeight,
                                scrollWidth: s.scrollWidth
                            })
                        }, [o, e, t]);
                    return {
                        scrollerRef: a,
                        scrollHandler: c,
                        sessionId: n.current
                    }
                }
        },
        702953: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useCollectiblesShopTallerCardsExperiment: function() {
                    return r
                }
            });
            var l = a("862205");
            let s = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-11_collectibles_shop_taller_cards",
                    label: "Collectibles Shop Taller Cards",
                    defaultConfig: {
                        tallerCardsEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables taller cards in shop",
                        config: {
                            tallerCardsEnabled: !0
                        }
                    }]
                }),
                r = e => {
                    let {
                        location: t
                    } = e;
                    return s.useExperiment({
                        location: t
                    })
                }
        },
        296304: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePurchasedCategoriesSort: function() {
                    return n
                }
            }), a("222007"), a("424973");
            var l = a("884691"),
                s = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, s.default)([r.default], () => r.default.purchases),
                    a = (0, l.useMemo)(() => {
                        let a = [],
                            l = [];
                        for (let s of e.values()) {
                            let e = s.products.every(e => !!t.get(e.skuId));
                            e ? a.push(s) : l.push(s)
                        }
                        return l.concat(a)
                    }, [e, t]);
                return a
            }
        },
        334820: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePurchasedProductsSort: function() {
                    return n
                }
            }), a("222007"), a("424973");
            var l = a("884691"),
                s = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, s.default)([r.default], () => r.default.purchases),
                    a = (0, l.useMemo)(() => {
                        let a = [],
                            l = [];
                        for (let s of e.values()) void 0 !== t.get(s.skuId) ? a.push(s) : l.push(s);
                        return l.concat(a)
                    }, [e, t]);
                return a
            }
        },
        716120: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                i = a("854588"),
                o = a("206230"),
                c = a("284679"),
                u = a("491232"),
                d = a("408381"),
                f = a("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: a = d.MAX_CONTENT_WIDTH,
                        className: s,
                        style: C,
                        children: m
                    } = e, E = (0, n.default)([o.default], () => o.default.saturation);
                    return (0, l.jsx)("div", {
                        className: r(f.banner, s),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, u.getCollectiblesAssetURL)(t, {
                                size: a,
                                format: "jpg"
                            });
                            if (1 === E) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let l = (0, c.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: m
                    })
                }
        },
        89569: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useProductDetailsLinkableRoute: function() {
                    return m
                },
                useProductDetailsDeepLinking: function() {
                    return g
                }
            }), a("781738"), a("222007"), a("424973");
            var l = a("884691"),
                s = a("803182"),
                r = a("446674"),
                n = a("812204"),
                i = a("685665"),
                o = a("216719"),
                c = a("54809"),
                u = a("49111");
            let d = "".concat("#").concat("itemSkuId", "="),
                f = new RegExp("^".concat(d, "(\\d+)$")),
                C = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
                m = e => {
                    let t = (0, s.useLocation)();
                    l.useEffect(() => {
                        if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
                            window.location.hash.startsWith(d) && window.location.replace("#")
                        }
                    }, [])
                },
                E = e => {
                    let {
                        categories: t,
                        productSkuId: a,
                        analyticsLocations: l,
                        analyticsSource: s,
                        initialItemCardRef: r
                    } = e;
                    for (let e of t.values()) {
                        let t = e.products.find(e => e.skuId === a);
                        if (null != t) {
                            var n;
                            null === (n = r.current) || void 0 === n || n.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            });
                            let a = setTimeout(() => {
                                let a = document.getElementById("shop-item-".concat(t.skuId));
                                a !== document.activeElement && (null == a || a.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: e,
                                    analyticsSource: s,
                                    analyticsLocations: l,
                                    returnRef: r
                                })
                            }, 750);
                            return () => clearTimeout(a)
                        }
                    }
                    return () => {}
                },
                g = e => {
                    let {
                        categories: t,
                        isFetchingCategories: a,
                        isLayer: c,
                        initialItemCardRef: d
                    } = e, C = l.useRef(null), m = (0, s.useLocation)(), g = m.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: p
                    } = (0, i.default)(g);
                    l.useEffect(() => {
                        if (c) return;
                        let e = f.exec(m.hash);
                        if (null != e) {
                            let t = e[1];
                            C.current = t
                        }
                    }, []);
                    let h = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
                    l.useEffect(() => {
                        if (a) return;
                        let e = null;
                        if (c && null != h && (e = h), !c && null != C.current && (e = C.current), null != e) {
                            let a = [],
                                l = setTimeout(() => {
                                    let l = E({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: p,
                                        analyticsSource: g,
                                        initialItemCardRef: d
                                    });
                                    a.push(l)
                                }, 250);
                            return a.push(() => clearTimeout(l)), () => {
                                a.forEach(e => e())
                            }
                        }
                    }, [c, p, g, t, a, h, d])
                }
        },
        342676: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            }), a("794252");
            var l, s, r = a("37983");
            a("884691");
            var n = a("414456"),
                i = a.n(n),
                o = a("506838"),
                c = a("65597"),
                u = a("697218"),
                d = a("956089"),
                f = a("719923"),
                C = a("805172"),
                m = a("782340"),
                E = a("224609");
            (s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
            var g = e => {
                let {
                    category: t,
                    display: a,
                    className: l
                } = e, s = (0, c.default)([u.default], () => u.default.getCurrentUser()), n = f.default.canUseCollectibles(s), {
                    shopForAllEnabled: g
                } = (0, C.default)({
                    location: "CollectiblesLimitedTimeBadge"
                });
                if (!n && !g || null == t.unpublishedAt) return null;
                let p = function(e) {
                    let t = new Date,
                        a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        l = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((l - a) / 864e5)
                }(t.unpublishedAt);

                function h(e) {
                    return (0, r.jsx)(d.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: i(E.badge, l)
                    })
                }
                return (0, o.match)([a, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: p
                    });
                    return h(e)
                }).with(["modal", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: p
                    });
                    return h(e)
                }).otherwise(() => {
                    let e = m.default.Messages.COLLECTIBLES_LAST_DAY;
                    return h(e)
                })
            }
        },
        258556: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return ei
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("635058"),
                o = a("265586"),
                c = a("65597"),
                u = a("151426"),
                d = a("77078"),
                f = a("939488"),
                C = a("54239"),
                m = a("304580"),
                E = a("841098"),
                g = a("812204"),
                p = a("685665"),
                h = a("481120"),
                S = a("10641"),
                x = a("509802"),
                L = a("539938"),
                b = a("210721"),
                T = a("78345"),
                _ = a("65324"),
                I = a("393414"),
                v = a("778588"),
                N = a("697218"),
                O = a("764490"),
                A = a("29557"),
                R = a("956089"),
                j = a("599110"),
                B = a("719923"),
                k = a("439932"),
                P = a("21526"),
                F = a("853987"),
                D = a("805172"),
                y = a("216719"),
                M = a("702953"),
                w = a("491232"),
                H = a("235898"),
                U = a("296304"),
                W = a("334820"),
                G = a("89569"),
                z = a("419513"),
                V = a("434393"),
                K = a("571464"),
                Y = a("43525"),
                X = a("798235"),
                Z = a("931262"),
                q = a("695824"),
                $ = a("518907"),
                J = a("594849"),
                Q = a("368560"),
                ee = a("49111"),
                et = a("994428"),
                ea = a("646718"),
                el = a("782340"),
                es = a("451594");
            let er = [u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_INTERACTIVE_MODAL_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_ACCOUNT_POPOUT_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_NITRO_ONLY_COACHMARK, u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK];

            function en(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r,
                    initialItemCardRef: i,
                    isGiftEasterEggEnabled: f,
                    setIsGiftEasterEggEnabled: C,
                    showEasterEggToggle: m
                } = e, E = s.useRef(10 + 70 * Math.random()), g = F.default.getProductsByItemType(t.skuId), p = (0, W.usePurchasedProductsSort)(null != g && o.CollectiblesItemType.AVATAR_DECORATION in g ? g[o.CollectiblesItemType.AVATAR_DECORATION] : []), h = (0, W.usePurchasedProductsSort)(null != g && o.CollectiblesItemType.PROFILE_EFFECT in g ? g[o.CollectiblesItemType.PROFILE_EFFECT] : []), S = h.length > 0, L = (0, w.isPremiumCollectiblesCategory)(t), I = [...S ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...S && L ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [v, N] = (0, x.useDismissibleContentGroup)(I), {
                    tallerCardsEnabled: O
                } = (0, M.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                });
                s.useEffect(() => () => {
                    null != v && N(et.ContentDismissActionType.USER_DISMISS)
                }, [v, N]);
                let A = (0, c.default)([y.default], () => y.default.initialProductSkuId),
                    j = s.useCallback(e => t => {
                        e.skuId === A && (i.current = t.current)
                    }, [A, i]);
                if (null == g || 0 === p.length) return null;
                let B = O ? $.default : V.default;
                return (0, l.jsxs)("div", {
                    className: es.categoryWrapper,
                    children: [m && (0, l.jsx)(d.Clickable, {
                        className: n(es.hiddenWumpus, {
                            [es.hiddenWumpusEnabled]: f
                        }),
                        onClick: () => C(!0),
                        style: {
                            left: "".concat(E.current, "%")
                        },
                        children: (0, l.jsx)(_.default, {
                            idleAnimationState: b.AnimationState.IDLE,
                            giftStyle: T.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(z.default, {
                        category: t
                    }), p.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(d.Text, {
                            className: es.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: el.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, l.jsx)("div", {
                            className: n(es.cardsContainer, O ? es.tallerShopCard : es.regularShopCard, a),
                            children: p.map(e => (0, l.jsx)(B, {
                                onMount: j(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: f
                            }, e.storeListingId))
                        })]
                    }), h.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: es.itemTypeTitleContainer,
                            children: [(0, l.jsx)(d.Text, {
                                className: es.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: el.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != v && (0, l.jsx)(R.PremiumBadge, {
                                className: es.newItemTypeBadge,
                                text: el.default.Messages.NEW
                            })]
                        }), (0, l.jsx)("div", {
                            className: n(es.cardsContainer, O ? es.tallerShopCard : es.regularShopCard, a),
                            children: h.map(e => (0, l.jsx)(B, {
                                onMount: j(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: f
                            }, e.storeListingId))
                        })]
                    })]
                })
            }
            var ei = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([y.default], () => y.default.getAnalytics()), {
                    AnalyticsLocationProvider: u,
                    analyticsLocations: x
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), b = (0, c.default)([v.default], () => v.default.getLayers().includes(ee.Layers.COLLECTIBLES_SHOP)), {
                    source: T
                } = (0, Z.useCollectiblesShopRouting)(), _ = (0, c.default)([N.default], () => N.default.getCurrentUser()), R = B.default.canUseCollectibles(_), {
                    categories: F,
                    isFetchingCategories: W,
                    error: z
                } = (0, H.default)(), V = (0, U.usePurchasedCategoriesSort)(F), $ = s.useRef(Math.random()), {
                    shopForAllEnabled: ei,
                    marketingEnabled: eo
                } = (0, D.default)({
                    location: "CollectiblesShop"
                }), {
                    tallerCardsEnabled: ec
                } = (0, M.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), eu = s.useRef(null), [ed, ef] = s.useState(!1);
                (0, G.useProductDetailsDeepLinking)({
                    categories: F,
                    isFetchingCategories: W,
                    isLayer: b,
                    initialItemCardRef: eu
                });
                let {
                    sessionId: eC,
                    scrollerRef: em,
                    scrollHandler: eE
                } = (0, h.usePageScrollPosition)(ee.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                s.useEffect(() => {
                    j.default.track(ee.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: a,
                        page_session_id: eC
                    }), !R && j.default.track(ee.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: ea.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: x
                    })
                }, [R, x, a, eC]), s.useEffect(() => {
                    er.forEach(e => {
                        !(0, S.isDismissibleContentDismissed)(e) && (0, S.markDismissibleContentAsDismissed)(e, {
                            dismissAction: et.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), s.useEffect(() => {
                    !t && (0, f.setHomeLink)(ee.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, P.setCollectiblesCategoryItemsViewed)({
                        categories: [...F.values()],
                        itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [F]);
                let eg = () => {
                        (0, P.fetchCollectiblesCategories)()
                    },
                    ep = (0, E.default)(),
                    eh = [...F.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === i.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, l.jsxs)(u, {
                    children: [(0, l.jsxs)("div", {
                        className: es.shop,
                        children: [t ? null : (0, l.jsxs)(L.default, {
                            className: n((0, k.getThemeClass)(ep), es.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(A.default, {
                                className: es.logo
                            }), (0, l.jsx)(L.default.Title, {
                                className: es.title,
                                children: el.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, l.jsx)(d.AdvancedScroller, {
                            className: es.shopScroll,
                            ref: em,
                            onScroll: eE,
                            children: (0, l.jsxs)("div", {
                                className: n(es.pageWrapper, {
                                    [es.pageWrapperFullscreen]: t,
                                    [es.pageWrapperBackgroundPrimary]: ec
                                }),
                                children: [(0, l.jsxs)("main", {
                                    className: es.page,
                                    children: [t ? (0, l.jsx)(O.default, {
                                        title: el.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, eo ? (0, l.jsx)(X.default, {
                                        isFullScreen: t
                                    }) : (0, l.jsx)(Y.default, {
                                        isFullScreen: t
                                    }), ei || R || null == eh ? null : (0, l.jsx)(J.default, {
                                        category: eh
                                    }), W ? (0, l.jsx)(q.default, {}) : z ? (0, l.jsx)(K.default, {
                                        onRetry: eg
                                    }) : (0, l.jsx)("div", {
                                        children: V.map((e, t) => !(0, w.isPremiumCollectiblesCategory)(e) || ei || R ? (0, l.jsx)(en, {
                                            isPremiumUser: R,
                                            category: e,
                                            initialItemCardRef: eu,
                                            setIsGiftEasterEggEnabled: ef,
                                            isGiftEasterEggEnabled: ed,
                                            showEasterEggToggle: t === Math.floor($.current * V.length)
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(m.default, {
                                        className: es.close,
                                        closeAction: () => {
                                            if (b) {
                                                (0, P.closeCollectiblesShop)();
                                                return
                                            }
                                            T === Z.CollectiblesShopSourceParam.SETTINGS && ((0, I.back)(), (0, C.pushLayer)(ee.Layers.USER_SETTINGS)), 0 === (0, I.getHistory)().length ? (0, I.transitionTo)(ee.Routes.APP) : (0, I.back)()
                                        },
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), ed && (0, l.jsx)(Q.default, {})]
                })
            }
        },
        419513: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("635058"),
                n = a("65597"),
                i = a("77078"),
                o = a("685665"),
                c = a("649844"),
                u = a("697218"),
                d = a("153769"),
                f = a("270227"),
                C = a("719923"),
                m = a("805172"),
                E = a("491232"),
                g = a("716120"),
                p = a("342676"),
                h = a("408381"),
                S = a("57940"),
                x = a("646718"),
                L = a("782340"),
                b = a("927694");
            let T = (0, h.getLogoSize)(96),
                _ = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, o.default)(), r = s.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, m.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || C.default.canUseCollectibles(d) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(i.Clickable, {
                                innerRef: r,
                                className: b.getPremiumHook,
                                onClick: () => {
                                    (0, c.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function I(e) {
                let {
                    category: t
                } = e, {
                    backgroundColors: a
                } = (0, S.default)(t);
                return (0, l.jsxs)(g.default, {
                    asset: t.banner,
                    className: b.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, h.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, l.jsxs)("div", {
                        className: b.discordLogo,
                        children: [(0, l.jsx)(d.default, {
                            className: b.discordIcon
                        }), (0, l.jsx)(f.default, {
                            className: b.discordWordmark
                        })]
                    }), (0, l.jsx)("img", {
                        className: b.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: T
                        }),
                        alt: t.name
                    }), (0, l.jsx)(i.Text, {
                        className: b.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, l.jsx)(p.default, {
                        category: t,
                        className: b.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }
        },
        434393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return Z
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("65597"),
                o = a("77078"),
                c = a("54239"),
                u = a("252744"),
                d = a("812204"),
                f = a("685665"),
                C = a("606292"),
                m = a("688318"),
                E = a("946964"),
                g = a("635956"),
                p = a("38766"),
                h = a("662286"),
                S = a("601095"),
                x = a("493390"),
                L = a("697218"),
                b = a("944441"),
                T = a("462579"),
                _ = a("216422"),
                I = a("956089"),
                v = a("50885"),
                N = a("21526"),
                O = a("417313"),
                A = a("775416"),
                R = a("805172"),
                j = a("491232"),
                B = a("730297"),
                k = a("806410"),
                P = a("342676"),
                F = a("450492"),
                D = a("920580"),
                y = a("54809"),
                M = a("408381"),
                w = a("264579"),
                H = a("57940"),
                U = a("646718"),
                W = a("782340"),
                G = a("395535");
            let z = v.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar,
                V = o.AvatarSizes.SIZE_120,
                K = (0, C.getDecorationSizeForAvatarSize)(V),
                Y = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...s
                    } = e;
                    return (0, l.jsx)(o.Button, {
                        fullWidth: !0,
                        look: o.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...s,
                        children: t
                    })
                },
                X = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(o.Button, {
                        color: o.ButtonColors.CUSTOM,
                        look: o.Button.Looks.FILLED,
                        size: o.ButtonSizes.ICON,
                        className: n(G.previewButton, t),
                        innerClassName: G.previewButtonInner,
                        "aria-label": W.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(T.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var Z = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: T = !1,
                    isGiftEasterEggEnabled: v
                } = e, {
                    analyticsLocations: Z
                } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), q = s.useRef(null), $ = (0, u.default)(q), [J, Q] = s.useState(!1), ee = $ || J, et = (0, i.default)([L.default], () => L.default.getCurrentUser()), ea = t.items.find(B.isAvatarDecorationRecord), el = t.items.find(k.isProfileEffectRecord), {
                    avatarDecorationSrc: es,
                    eventHandlers: er,
                    avatarPlaceholderSrc: en
                } = (0, m.default)({
                    user: et,
                    avatarDecorationOverride: ea,
                    size: K,
                    animateOnHover: !ee
                }), {
                    buttonColors: ei,
                    backgroundColors: eo
                } = (0, H.default)(a), ec = (0, j.getFormattedPriceForCollectiblesProduct)(t, T), eu = (0, j.isPremiumCollectiblesCategory)(a), [ed, ef, eC] = (0, i.useStateFromStoresArray)([A.default], () => [A.default.getPurchase(t.skuId), A.default.isClaiming === t.skuId, null != A.default.isClaiming && A.default.isClaiming !== t.skuId]), em = (0, h.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eE
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eg
                } = (0, O.default)({
                    location: "CollectiblesShopCard"
                });
                s.useEffect(() => {
                    let {
                        current: e
                    } = q;
                    if (null == e) return;
                    let t = () => Q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ep = (0, p.default)({
                        analyticsLocations: Z
                    }),
                    eh = () => {
                        (0, c.popLayer)(), ep(), null != ea ? (0, C.openAvatarDecorationModal)({
                            analyticsLocations: Z,
                            initialSelectedDecoration: t.items.find(B.isAvatarDecorationRecord)
                        }) : null != el && (0, x.openProfileEffectModal)({
                            analyticsLocations: Z,
                            initialSelectedEffectID: null == el ? void 0 : el.id
                        })
                    },
                    eS = e => () => {
                        (0, y.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: Z,
                            analyticsSource: e
                        })
                    },
                    ex = eS(d.default.COLLECTIBLES_SHOP_CARD),
                    eL = eS(d.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eb = () => (0, l.jsxs)("div", {
                        className: G.hoverUpsellContainer,
                        children: [!eE && (0, l.jsx)(o.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: G.description,
                            children: null != el ? W.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : W.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsx)(g.default, {
                            fullWidth: !0,
                            className: G.premiumSubscribeButton,
                            disabled: eC,
                            onClick: e => e.stopPropagation(),
                            buttonText: eE ? W.default.Messages.UNLOCK_WITH_NITRO : W.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                            subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2
                        })]
                    });
                s.useEffect(() => {
                    null == r || r(q)
                }, [r]);
                let eT = () => null != ed ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: G.priceTag,
                        children: W.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eu ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: G.priceTag,
                        children: W.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(D.default, {
                        product: t,
                        className: G.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    e_ = () => {
                        if (eu) return null;
                        let e = null != ei ? {
                            background: ei.secondary.toHslString(),
                            color: ei.text.toHslString()
                        } : void 0;
                        return eg ? (0, l.jsx)(F.default, {
                            product: t,
                            returnRef: q,
                            isGiftEasterEggEnabled: v
                        }) : (0, l.jsx)(X, {
                            style: e,
                            className: G.defaultPreviewButtonColor,
                            onClick: eL
                        })
                    },
                    eI = () => {
                        if (eE && eu && !T || !T && !eE && null == ed) return eb();
                        let e = null != ei ? {
                                background: (0, M.getBackgroundGradient)(ei, 90),
                                color: ei.text.toHslString()
                            } : void 0,
                            s = eu ? {
                                submitting: ef,
                                submittingStartedLabel: W.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: W.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, N.claimPremiumCollectiblesProduct)(t.skuId), (0, w.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: Z
                                    })
                                }
                            } : {
                                onClick: () => (0, E.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: Z,
                                    returnRef: q
                                })
                            };
                        return (0, l.jsxs)("div", {
                            className: G.buttonsContainer,
                            children: [null == ed ? (0, l.jsx)(Y, {
                                style: e,
                                disabled: eC,
                                className: G.purchaseButton,
                                ...s,
                                children: eu ? W.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : W.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ec
                                })
                            }) : (0, l.jsx)(Y, {
                                style: e,
                                disabled: eC,
                                onClick: eh,
                                children: W.default.Messages.COLLECTIBLES_USE_NOW
                            }), e_()]
                        })
                    };
                if (void 0 === ea && null != el && !1 === em) return null;
                let ev = null != eo ? {
                    background: "".concat((0, M.getBackgroundGradient)(eo), " border-box border-box"),
                    borderColor: eo.border.toHslString(),
                    boxShadow: ee ? "0 0 25px 1px ".concat(eo.primary.toHslString()) : "none"
                } : void 0;
                return (0, l.jsx)(o.FocusRing, {
                    children: (0, l.jsxs)(o.Clickable, {
                        innerRef: q,
                        className: G.shopCard,
                        onBlur: () => Q(!1),
                        onClick: ex,
                        style: ev,
                        id: "shop-item-".concat(t.skuId),
                        children: [eu && (0, l.jsx)(o.Tooltip, {
                            tooltipContentClassName: G.premiumWheelTooltipContent,
                            color: o.Tooltip.Colors.PRIMARY,
                            text: W.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(I.TextBadge, {
                                ...e,
                                className: G.premiumWheelBadge,
                                text: (0, l.jsx)(_.default, {
                                    className: G.premiumWheel
                                })
                            })
                        }), null != el && (0, l.jsx)("div", {
                            className: G.profileEffectShopPreview,
                            children: (0, l.jsx)(S.default, {
                                isHovering: ee,
                                profileEffectId: null == el ? void 0 : el.id,
                                isPurchased: null != ed
                            })
                        }), null != ea && (0, l.jsx)(z, {
                            ...er,
                            avatarDecoration: es,
                            src: en,
                            className: n(G.avatar, {
                                [G.avatarPurchased]: null != ed
                            }),
                            size: V,
                            "aria-label": W.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ed ? (0, l.jsx)("div", {
                            className: null != ea ? G.checkmarkWrapper : G.profileEffectCheckmarkWrapper,
                            children: (0, l.jsx)(b.default, {
                                width: 38,
                                height: 38,
                                className: G.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(G.cardText, {
                                [G.cardTextProfileEffect]: null != el
                            }),
                            children: [(0, l.jsx)("div", {
                                className: G.productName,
                                children: (T || eE) && (0, l.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: G.detailsWrapper,
                                children: [(0, l.jsxs)("div", {
                                    className: G.innerBlur,
                                    children: [!T && !eE && (0, l.jsx)(o.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, l.jsx)(o.Text, {
                                        color: "always-white",
                                        className: G.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eT()]
                                }), (0, l.jsx)("div", {
                                    className: G.innerHover,
                                    children: eI()
                                })]
                            })]
                        }), (0, l.jsx)(P.default, {
                            category: a,
                            className: G.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        571464: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("819855"),
                r = a("77078"),
                n = a("841098"),
                i = a("782340"),
                o = a("139948"),
                c = a("321220"),
                u = a("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, a = (0, n.default)();
                    return (0, l.jsxs)("div", {
                        className: o.wrapper,
                        children: [(0, l.jsx)("img", {
                            className: o.loadIssueImg,
                            src: (0, s.isThemeDark)(a) ? c : u,
                            alt: ""
                        }), (0, l.jsx)(r.Heading, {
                            className: o.heading1,
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, l.jsx)(r.Button, {
                            className: o.reload,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND_NEW,
                            onClick: t,
                            children: i.default.Messages.ERRORS_RELOAD
                        })]
                    })
                }
        },
        450492: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("77078"),
                n = a("446674"),
                i = a("252744"),
                o = a("685665"),
                c = a("108486"),
                u = a("946964"),
                d = a("978679"),
                f = a("853987"),
                C = a("57940"),
                m = a("843455"),
                E = a("782340"),
                g = a("436752");
            let p = {
                dark: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#FFE1A6",
                    ribbon: "#C29CFF"
                }, {
                    box: "#60DA81",
                    ribbon: "#FFF597"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                light: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#025D90",
                    ribbon: "#70FFF8"
                }, {
                    box: "#C29CFF",
                    ribbon: "#255FA3"
                }, {
                    box: "#6AC082",
                    ribbon: "#DED052"
                }, {
                    box: "#AC448B",
                    ribbon: "#4845B8"
                }, {
                    box: "#175B82",
                    ribbon: "#F9D249"
                }, {
                    box: "#B54141",
                    ribbon: "#026530"
                }]
            };
            var h = e => {
                let {
                    product: t,
                    returnRef: a,
                    onSuccess: h,
                    isGiftEasterEggEnabled: S,
                    disableCustomColor: x = !1
                } = e, {
                    analyticsLocations: L
                } = (0, o.default)(), b = (0, n.useStateFromStores)([f.default], () => f.default.getCategoryForProduct(t.skuId)), T = s.useRef(null), _ = (0, i.default)(T), {
                    buttonColors: I
                } = (0, C.default)(b), v = null == I || x ? void 0 : {
                    background: I.secondary.toHslString(),
                    color: I.text.toHslString()
                }, N = x ? m.ThemeTypes.DARK : (null == I ? void 0 : I.text.isDark()) ? m.ThemeTypes.LIGHT : m.ThemeTypes.DARK;
                return (0, l.jsx)(r.Button, {
                    buttonRef: T,
                    style: v,
                    className: g.giftButton,
                    color: x ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                    look: r.Button.Looks.FILLED,
                    size: r.ButtonSizes.ICON,
                    innerClassName: g.giftButtonInner,
                    "aria-label": E.default.Messages.PREMIUM_GIFTING_BUTTON,
                    onClick: e => {
                        e.stopPropagation(), (0, u.default)({
                            skuId: t.skuId,
                            isGift: !0,
                            analyticsLocations: L,
                            returnRef: a,
                            onClose: null != h ? e => {
                                e && h()
                            } : void 0
                        })
                    },
                    children: S ? (0, l.jsx)(c.SeasonalGiftIcon, {
                        hovered: _,
                        isContentDismissed: !0,
                        themeOverride: N,
                        boxColors: p
                    }) : (0, l.jsx)(d.default, {
                        width: 24,
                        height: 24
                    })
                })
            }
        },
        43525: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                i = a("77078"),
                o = a("635956"),
                c = a("697218"),
                u = a("216422"),
                d = a("719923"),
                f = a("805172"),
                C = a("646718"),
                m = a("782340"),
                E = a("98881"),
                g = a("247329"),
                p = a("333838"),
                h = a("399637"),
                S = a("976076"),
                x = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), s = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: x
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), L = x && !s;
                    return (0, l.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: L
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!L && (0, l.jsxs)(i.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: E.premiumBadgeWrapper,
                                children: [(0, l.jsx)(u.default, {
                                    className: E.premiumBadge
                                }), (0, l.jsx)("span", {
                                    className: E.premiumBadgeText,
                                    children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, l.jsx)(i.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(i.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: x ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), x || s ? null : (0, l.jsx)(o.default, {
                                className: E.subscribeButton,
                                isTrialCTA: !0,
                                buttonText: m.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2
                            })]
                        }), (0, l.jsx)("div", {
                            className: E.bannerBackgroundWrapper,
                            children: (0, l.jsx)("img", {
                                className: E.bannerBackground,
                                alt: "",
                                src: g
                            })
                        }), (0, l.jsx)("img", {
                            className: E.bannerForeground,
                            alt: "",
                            src: p
                        }), (0, l.jsx)("img", {
                            className: E.bannerHand,
                            alt: "",
                            src: h
                        }), (0, l.jsx)("img", {
                            className: r(E.largeSparkle, E.largeTopSparkle),
                            alt: "",
                            src: S
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallTopSparkle),
                            alt: "",
                            src: S
                        }), (0, l.jsx)("img", {
                            className: r(E.largeSparkle, E.largeLeftSparkle),
                            alt: "",
                            src: S
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallLeftSparkle),
                            alt: "",
                            src: S
                        }), (0, l.jsx)("img", {
                            className: r(E.largeSparkle, E.largeRightSparkle),
                            alt: "",
                            src: S
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallRightSparkle),
                            alt: "",
                            src: S
                        })]
                    })
                }
        },
        798235: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("77078"),
                i = a("782340"),
                o = a("60109"),
                c = a("200406"),
                u = a("283045"),
                d = a("718297"),
                f = a("929880"),
                C = function(e) {
                    let {
                        isFullScreen: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(o.heroBanner, t ? o.heroBannerFullScreen : o.heroBannerWithSidebar),
                        children: [(0, l.jsxs)("div", {
                            className: o.heroDescription,
                            children: [(0, l.jsx)(n.Heading, {
                                className: o.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(n.Text, {
                                className: o.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, l.jsxs)("div", {
                            className: o.bannerArt,
                            children: [(0, l.jsx)("img", {
                                className: o.bannerGrid,
                                alt: "",
                                src: c,
                                width: "484",
                                height: "402"
                            }), (0, l.jsx)("img", {
                                className: o.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, l.jsx)("img", {
                                className: o.bannerGridMedium,
                                alt: "",
                                src: u,
                                width: "178",
                                height: "106"
                            }), (0, l.jsx)("img", {
                                className: o.bannerHand,
                                alt: "",
                                src: f,
                                width: "265",
                                height: "238"
                            })]
                        })]
                    })
                }
        },
        920580: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                i = a("755854"),
                o = a("77078"),
                c = a("161778"),
                u = a("697218"),
                d = a("216422"),
                f = a("719923"),
                C = a("805172"),
                m = a("491232"),
                E = a("791309"),
                g = a("49111"),
                p = a("782340"),
                h = a("173046");

            function S(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: S = !0
                } = e, x = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                    shopForAllEnabled: L
                } = (0, C.default)({
                    location: "CollectiblesPriceTag"
                }), b = (0, n.default)([c.default], () => (0, i.isThemeDark)(c.default.theme)), T = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == T) return null;
                let _ = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    I = !f.default.canUseCollectibles(x) && L;
                return (0, l.jsxs)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: [(0, l.jsx)(E.default, {
                        alwaysWhiteText: S,
                        price: T,
                        className: I ? void 0 : h.strikedPrice
                    }), null != _ && (0, l.jsx)(E.default, {
                        price: _,
                        alwaysWhiteText: S,
                        renderPrice: I ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: I ? h.fullPrice : void 0,
                        variant: I ? "text-xs/semibold" : void 0,
                        icon: (0, l.jsx)(o.Tooltip, {
                            text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, l.jsx)(d.default, {
                                    ...t,
                                    className: r(h.premiumIcon, {
                                        [h.fullPrice]: I
                                    }),
                                    color: S || b ? "white" : "black"
                                })
                            }
                        })
                    })]
                })
            }
        },
        791309: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("77078"),
                i = a("153160"),
                o = a("846367"),
                c = e => {
                    var t;
                    let {
                        price: {
                            amount: a,
                            currency: s
                        },
                        renderPrice: c,
                        icon: u,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, m = (0, i.formatPrice)(a, s);
                    return (0, l.jsxs)(n.Heading, {
                        variant: f,
                        color: C ? "always-white" : "none",
                        className: r(o.heading, d),
                        children: [u, null !== (t = null == c ? void 0 : c(m)) && void 0 !== t ? t : m]
                    })
                }
        },
        54809: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openCollectiblesShopProductDetailsModal: function() {
                    return n
                },
                closeCollectiblesShopProductDetailsModal: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: i,
                        analyticsLocations: o,
                        returnRef: c
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("179047").then(a.bind(a, "179047"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            product: t,
                            category: n,
                            analyticsSource: i,
                            analyticsLocations: o,
                            returnRef: c
                        })
                    }, {
                        modalKey: r
                    })
                },
                i = () => {
                    (0, s.closeModal)(r)
                }
        },
        931262: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CollectiblesShopSourceParam: function() {
                    return l
                },
                useCollectiblesShopRouting: function() {
                    return i
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var l, s, r = a("884691"),
                n = a("90915");

            function i() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), l = a.get("source"), s = null != l ? parseInt(l, 10) : null;
                return {
                    source: s,
                    ...t
                }
            }(s = l || (l = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"
        },
        695824: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("451594"),
                i = a("927694"),
                o = a("395535"),
                c = a("492666");
            let u = () => 4 * Math.random() + 8,
                d = [u(), u(), u()];
            var f = () => (0, l.jsx)(l.Fragment, {
                children: d.map(e => (0, l.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, l.jsx)("div", {
                        className: r(c.skeleton, i.shopBanner),
                        children: (0, l.jsx)("div", {
                            className: c.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, l.jsx)("div", {
                        className: r(c.skeleton, o.shopCard),
                        children: (0, l.jsxs)("div", {
                            className: c.cardBody,
                            children: [(0, l.jsx)("div", {
                                className: c.cardAvatar
                            }), (0, l.jsx)("div", {
                                className: c.cardTitle
                            }), (0, l.jsx)("div", {
                                className: c.cardDescription
                            }), (0, l.jsx)("div", {
                                className: c.cardSummary
                            })]
                        })
                    }, e))]
                }, e))
            })
        },
        518907: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return $
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("65597"),
                o = a("669491"),
                c = a("755854"),
                u = a("77078"),
                d = a("54239"),
                f = a("252744"),
                C = a("812204"),
                m = a("685665"),
                E = a("606292"),
                g = a("688318"),
                p = a("946964"),
                h = a("635956"),
                S = a("38766"),
                x = a("662286"),
                L = a("601095"),
                b = a("493390"),
                T = a("161778"),
                _ = a("697218"),
                I = a("944441"),
                v = a("462579"),
                N = a("216422"),
                O = a("956089"),
                A = a("50885"),
                R = a("21526"),
                j = a("417313"),
                B = a("775416"),
                k = a("805172"),
                P = a("491232"),
                F = a("730297"),
                D = a("806410"),
                y = a("342676"),
                M = a("450492"),
                w = a("920580"),
                H = a("54809"),
                U = a("264579"),
                W = a("57940"),
                G = a("646718"),
                z = a("782340"),
                V = a("216365");
            let K = A.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
                Y = u.AvatarSizes.SIZE_152,
                X = (0, E.getDecorationSizeForAvatarSize)(Y),
                Z = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...s
                    } = e;
                    return (0, l.jsx)(u.Button, {
                        fullWidth: !0,
                        look: u.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...s,
                        children: t
                    })
                },
                q = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(u.Button, {
                        color: u.ButtonColors.BRAND,
                        look: u.Button.Looks.FILLED,
                        size: u.ButtonSizes.ICON,
                        className: n(V.previewButton, t),
                        innerClassName: V.previewButtonInner,
                        "aria-label": z.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(v.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var $ = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: v = !1,
                    isGiftEasterEggEnabled: A
                } = e, {
                    analyticsLocations: $
                } = (0, m.default)(C.default.COLLECTIBLES_SHOP_CARD), J = s.useRef(null), Q = (0, f.default)(J), [ee, et] = s.useState(!1), ea = Q || ee, el = (0, i.default)([_.default], () => _.default.getCurrentUser()), es = t.items.find(F.isAvatarDecorationRecord), er = t.items.find(D.isProfileEffectRecord), {
                    avatarDecorationSrc: en,
                    eventHandlers: ei,
                    avatarPlaceholderSrc: eo
                } = (0, g.default)({
                    user: el,
                    avatarDecorationOverride: es,
                    size: X,
                    animateOnHover: !ea
                }), {
                    backgroundColors: ec
                } = (0, W.default)(a), eu = (0, P.getFormattedPriceForCollectiblesProduct)(t, v), ed = (0, P.isPremiumCollectiblesCategory)(a), [ef, eC, em] = (0, i.useStateFromStoresArray)([B.default], () => [B.default.getPurchase(t.skuId), B.default.isClaiming === t.skuId, null != B.default.isClaiming && B.default.isClaiming !== t.skuId]), eE = (0, x.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eg
                } = (0, k.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: ep
                } = (0, j.default)({
                    location: "CollectiblesShopCard"
                }), eh = (0, i.default)([T.default], () => (0, c.isThemeDark)(T.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = J;
                    if (null == e) return;
                    let t = () => et(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eS = (0, S.default)({
                        analyticsLocations: $
                    }),
                    ex = () => {
                        (0, d.popLayer)(), eS(), null != es ? (0, E.openAvatarDecorationModal)({
                            analyticsLocations: $,
                            initialSelectedDecoration: t.items.find(F.isAvatarDecorationRecord)
                        }) : null != er && (0, b.openProfileEffectModal)({
                            analyticsLocations: $,
                            initialSelectedEffectID: null == er ? void 0 : er.id
                        })
                    },
                    eL = e => () => {
                        (0, H.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: $,
                            analyticsSource: e
                        })
                    },
                    eb = eL(C.default.COLLECTIBLES_SHOP_CARD),
                    eT = eL(C.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    e_ = () => (0, l.jsxs)("div", {
                        className: V.hoverUpsellContainer,
                        children: [!eg && (0, l.jsx)(u.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: V.description,
                            children: null != er ? z.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : z.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsx)(h.default, {
                            fullWidth: !0,
                            className: V.premiumSubscribeButton,
                            disabled: em,
                            onClick: e => e.stopPropagation(),
                            buttonText: eg ? z.default.Messages.UNLOCK_WITH_NITRO : z.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2
                        })]
                    });
                s.useEffect(() => {
                    null == r || r(J)
                }, [r]);
                let eI = () => null != ef ? (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: V.priceTag,
                        children: z.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : ed ? (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: V.priceTag,
                        children: z.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(w.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: V.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    ev = () => ed ? null : ep ? (0, l.jsx)(M.default, {
                        product: t,
                        returnRef: J,
                        isGiftEasterEggEnabled: A,
                        disableCustomColor: !0
                    }) : (0, l.jsx)(q, {
                        onClick: eT
                    }),
                    eN = () => {
                        if (eg && ed && !v || !v && !eg && null == ef) return e_();
                        let e = ed ? {
                            submitting: eC,
                            submittingStartedLabel: z.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: z.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, R.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
                                    product: t,
                                    category: a,
                                    analyticsLocations: $
                                })
                            }
                        } : {
                            onClick: () => (0, p.default)({
                                skuId: t.skuId,
                                analyticsLocations: $,
                                returnRef: J
                            })
                        };
                        return (0, l.jsxs)("div", {
                            className: V.buttonsContainer,
                            children: [null == ef ? (0, l.jsx)(Z, {
                                disabled: em,
                                className: V.purchaseButton,
                                ...e,
                                children: ed ? z.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : z.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: eu
                                })
                            }) : (0, l.jsx)(Z, {
                                disabled: em,
                                onClick: ex,
                                children: z.default.Messages.COLLECTIBLES_USE_NOW
                            }), ev()]
                        })
                    };
                if (void 0 === es && null != er && !1 === eE) return null;
                let eO = eh ? "0 0 15px 1px ".concat(o.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, l.jsx)(u.FocusRing, {
                    children: (0, l.jsxs)(u.Clickable, {
                        innerRef: J,
                        className: V.shopCard,
                        onBlur: () => et(!1),
                        onClick: eb,
                        style: null != ec ? {
                            backgroundColor: eh ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: ea ? eO : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [ed && (0, l.jsx)(u.Tooltip, {
                            tooltipContentClassName: V.premiumWheelTooltipContent,
                            color: u.Tooltip.Colors.PRIMARY,
                            text: z.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(O.TextBadge, {
                                ...e,
                                className: V.premiumWheelBadge,
                                text: (0, l.jsx)(N.default, {
                                    className: V.premiumWheel
                                })
                            })
                        }), null != er && (0, l.jsx)("div", {
                            className: V.profileEffectShopPreview,
                            children: (0, l.jsx)(L.default, {
                                isHovering: ea,
                                profileEffectId: null == er ? void 0 : er.id,
                                isPurchased: null != ef,
                                removeSetHeight: !0
                            })
                        }), null != es && (0, l.jsx)("div", {
                            className: V.avatarContainer,
                            children: (0, l.jsx)(K, {
                                ...ei,
                                avatarDecoration: en,
                                src: eo,
                                className: n(V.avatar, {
                                    [V.avatarPurchased]: null != ef
                                }),
                                size: Y,
                                "aria-label": z.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ef ? (0, l.jsx)("div", {
                            className: V.checkmarkWrapper,
                            children: (0, l.jsx)(I.default, {
                                width: 38,
                                height: 38,
                                className: V.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(V.cardText, {
                                [V.cardTextBlur]: null != er
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(V.cardBackground, eh ? V.darkCardBackground : V.lightCardBackground, null != er ? V.cardLowOpacity : null)
                            }), (0, l.jsx)("div", {
                                className: V.productName,
                                children: (v || eg) && (0, l.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: V.detailsWrapper,
                                children: [!v && !eg && (0, l.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                }), (0, l.jsx)(u.Text, {
                                    className: V.description,
                                    variant: "text-md/normal",
                                    children: t.summary
                                }), (0, l.jsx)("div", {
                                    className: V.innerBlur,
                                    children: eI()
                                }), (0, l.jsx)("div", {
                                    className: V.innerHover,
                                    children: eN()
                                })]
                            })]
                        }), (0, l.jsx)(y.default, {
                            category: a,
                            className: V.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        594849: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("65597"),
                n = a("77078"),
                i = a("252744"),
                o = a("685665"),
                c = a("606292"),
                u = a("688318"),
                d = a("649844"),
                f = a("697218"),
                C = a("153769"),
                m = a("270227"),
                E = a("216422"),
                g = a("491232"),
                p = a("730297"),
                h = a("716120"),
                S = a("408381"),
                x = a("57940"),
                L = a("646718"),
                b = a("782340"),
                T = a("601664"),
                _ = a("725015");
            let I = n.AvatarSizes.SIZE_120,
                v = (0, S.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: O
                } = e, {
                    analyticsLocations: A
                } = (0, o.default)(), {
                    backgroundColors: R
                } = (0, x.default)(O), j = (0, r.default)([f.default], () => f.default.getCurrentUser()), B = s.useRef(null), k = (0, i.default)(B), P = {
                    size: (0, c.getDecorationSizeForAvatarSize)(I),
                    animateOnHover: !k
                }, F = O.products.map(e => {
                    var t;
                    return {
                        user: j,
                        avatarDecorationOverride: null !== (t = e.items.find(p.isAvatarDecorationRecord)) && void 0 !== t ? t : null,
                        ...P
                    }
                }), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (t = F[1]) && void 0 !== t ? t : P), {
                    avatarDecorationSrc: y
                } = (0, u.default)(null !== (a = F[0]) && void 0 !== a ? a : P), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = F[2]) && void 0 !== N ? N : P);
                return (0, l.jsxs)("div", {
                    ref: B,
                    className: T.bannerCard,
                    children: [(0, l.jsx)(h.default, {
                        asset: O.banner,
                        className: T.bannerBackground,
                        style: null != R ? {
                            background: (0, S.getBackgroundGradient)(R)
                        } : void 0
                    }), (0, l.jsxs)("div", {
                        className: T.contentSection,
                        children: [(0, l.jsxs)("div", {
                            className: T.discordLogo,
                            children: [(0, l.jsx)(C.default, {
                                className: T.discordIcon
                            }), (0, l.jsx)(m.default, {
                                className: T.discordWordmark
                            })]
                        }), (0, l.jsx)("img", {
                            className: T.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(O.logo, {
                                size: v
                            }),
                            alt: O.name
                        }), (0, l.jsx)(n.Text, {
                            color: "always-white",
                            className: T.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: b.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, l.jsx)(n.Clickable, {
                                    className: T.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: A,
                                        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
                                    }),
                                    tag: "span",
                                    children: (0, l.jsx)(n.Text, {
                                        variant: "text-md/normal",
                                        color: "always-white",
                                        tag: "span",
                                        children: e
                                    })
                                })
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: T.decoSection,
                        children: [(0, l.jsx)("div", {
                            className: T.pinkInterface,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, l.jsx)("div", {
                            className: T.blueHeadset,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: y,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, l.jsx)("div", {
                            className: T.greenSmoke,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: T.badge,
                        children: (0, l.jsx)(E.default, {
                            className: T.premiumIcon
                        })
                    })]
                })
            }
        },
        408381: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return l
                },
                getLogoSize: function() {
                    return s
                },
                getBackgroundGradient: function() {
                    return r
                }
            });
            let l = 1060,
                s = e => 3.8 * e,
                r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: a,
                            secondary: l
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(l.toHslString(), ")")
                }
        },
        368560: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("4881");

            function r() {
                return (0, l.jsxs)("div", {
                    className: s.snowflakes,
                    children: [(0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, l.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    })]
                })
            }
        },
        264579: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                r = e => {
                    let {
                        product: t,
                        category: r,
                        analyticsLocations: n
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("658756").then(a.bind(a, "658756"));
                        return a => (0, l.jsx)(e, {
                            analyticsLocations: n,
                            ...a,
                            product: t,
                            category: r
                        })
                    })
                }
        },
        57940: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return f
                },
                default: function() {
                    return x
                }
            }), a("222007");
            var l = a("656280"),
                s = a.n(l),
                r = a("635058"),
                n = a("65597"),
                i = a("669491"),
                o = a("206230"),
                c = a("388491"),
                u = a("172858");
            let d = u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(i.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                m = s(i.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                E = (e, t) => {
                    let a = e.toRgb(),
                        l = t.toRgb(),
                        [r, n, i] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
                    return s({
                        r,
                        g: n,
                        b: i
                    })
                },
                g = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = E(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        border: r.setAlpha(.4)
                    }
                },
                p = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = E(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        text: s(r.isLight() ? m : C)
                    }
                },
                h = (e, t) => {
                    let {
                        h: a,
                        s: l,
                        l: r
                    } = e.toHsl();
                    return s({
                        h: a,
                        s: l * t,
                        l: r
                    })
                },
                S = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: g("#146144", "#021A0E"),
                        buttonColors: p("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: g("#4B79B0", "#0F0E3A"),
                        buttonColors: p("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: g("#E8B26B", "#7A3A00"),
                        buttonColors: p("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: g("#732565", "#111D40"),
                        buttonColors: p(i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: f
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: g("#5280DC", "#060F25"),
                        buttonColors: p("#496BDB", "#3E41B5"),
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: g("#FFC267", "#6C1A00"),
                        buttonColors: p("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: g("#467FFF", "#154ECF"),
                        buttonColors: p("#44C7FF", "#009DFF"),
                        confettiSprites: [a("770704"), a("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [r.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: g("#00475E", "#002B39"),
                        buttonColors: p("#00E6B2", "#009B7C"),
                        confettiSprites: [a("330825"), a("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var x = e => {
                let t = (0, n.default)([o.default], () => o.default.saturation);
                if (null == e) return {};
                let a = S[e.skuId];
                return (null == a ? void 0 : a.backgroundColors) == null || 1 === t ? null != a ? a : {} : {
                    ...a,
                    backgroundColors: {
                        primary: h(a.backgroundColors.primary, t),
                        secondary: h(a.backgroundColors.secondary, t),
                        border: h(a.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(a.buttonColors.primary, t),
                        secondary: h(a.buttonColors.secondary, t),
                        text: a.buttonColors.text
                    },
                    confettiColors: a.confettiColors.map(e => h(s(e), t).toHexString())
                }
            }
        },
        946964: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("748820"),
                r = a("77078"),
                n = a("112679"),
                i = a("55689"),
                o = a("21526"),
                c = a("599110"),
                u = a("49111");

            function d(e) {
                let {
                    skuId: t,
                    isGift: d = !1,
                    giftMessage: f,
                    onClose: C,
                    onComplete: m,
                    analyticsLocations: E,
                    analyticsObject: g
                } = e, p = !1, h = (0, s.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("894742").then(a.bind(a, "894742"));
                    return a => {
                        let {
                            onClose: s,
                            returnRef: r,
                            ...n
                        } = a;
                        return (0, l.jsx)(e, {
                            ...n,
                            loadId: h,
                            skuId: t,
                            isGift: d,
                            giftMessage: f,
                            analyticsLocations: E,
                            onClose: e => {
                                s(), null == C || C(e)
                            },
                            onComplete: () => {
                                p = !0, null == m || m()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !p && c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: h,
                            payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
                            location: g,
                            is_gift: !1,
                            location_stack: E
                        }), (0, n.clearError)(), (0, i.clearPurchaseTokenAuthState)(), null == C || C(p), p && (0, o.fetchCollectiblesPurchases)()
                    },
                    onCloseRequest: u.NOOP
                })
            }
        },
        601095: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("859498"),
                o = a("635471"),
                c = a("825054"),
                u = a("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: a,
                        forCollectedModal: r = !1,
                        isPurchased: d,
                        removeSetHeight: f = !1
                    } = e, C = r ? 250 : .1, [m, E] = s.useState(!0);
                    return (s.useEffect(() => {
                        if (!0 !== r) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, C);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [C, r]), null != t) ? (0, l.jsxs)("div", {
                        className: n(c.previewContainer, {
                            [c.previewContainerAnimation]: r,
                            [c.previewContainerSetHeight]: !f
                        }),
                        children: [(0, l.jsx)("img", {
                            src: u,
                            alt: " ",
                            className: r ? c.previewForCollected : c.preview,
                            "aria-hidden": !0
                        }), !m && (0, l.jsx)("div", {
                            className: d ? c.purchasedEffect : void 0,
                            children: (0, l.jsx)(o.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: r,
                                restartMethod: i.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: a,
                                introDelay: C,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        493390: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openProfileEffectModal: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078");
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedEffectID: r
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("889793").then(a.bind(a, "889793"));
                    return a => (0, l.jsx)(e, {
                        ...a,
                        initialSelectedEffectID: r,
                        analyticsLocations: t
                    })
                }, {})
            }
        },
        944441: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                r = a("269096"),
                n = a("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, n.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.00043 14.0491L19.5904 3.46912L23.1212 6.99994L8.99993 21.1213L1.28485 13.4062L4.83367 9.88236L9.00043 14.0491Z"
                        })
                    })
                }, r.CheckmarkLargeIcon, void 0, {
                    size: 24
                })
        }
    }
]);