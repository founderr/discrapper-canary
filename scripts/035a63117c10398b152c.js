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
            var s = a("884691"),
                l = a("748820"),
                r = a("560103"),
                n = a("599110");
            let i = (e, t, a, s) => {
                    let {
                        scrollTop: l = 0,
                        scrollOffset: r = 0,
                        scrollHeight: i = 0,
                        scrollWidth: o = 0
                    } = s;
                    if (i > 0) {
                        let s = (l + r) / i;
                        s > 0 && n.default.track(e, {
                            scroll_visible_percent: s,
                            source: a,
                            page_height: Math.round(i),
                            page_width: Math.round(o),
                            page_session_id: t
                        })
                    }
                },
                o = (e, t) => {
                    let a = s.useRef(null),
                        n = s.useRef((0, l.v4)()),
                        o = (0, r.useThrottledFunction)(i, 5e3, [], {
                            trailing: !0
                        }),
                        c = s.useCallback(() => {
                            var s;
                            let l = null === (s = a.current) || void 0 === s ? void 0 : s.getScrollerNode();
                            null != l && o(e, n.current, t, {
                                scrollTop: l.scrollTop,
                                scrollOffset: l.offsetHeight,
                                scrollHeight: l.scrollHeight,
                                scrollWidth: l.scrollWidth
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
            var s = a("862205");
            let l = (0, s.createExperiment)({
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
                    return l.useExperiment({
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
            var s = a("884691"),
                l = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, l.default)([r.default], () => r.default.purchases),
                    a = (0, s.useMemo)(() => {
                        let a = [],
                            s = [];
                        for (let l of e.values()) {
                            let e = l.products.every(e => !!t.get(e.skuId));
                            e ? a.push(l) : s.push(l)
                        }
                        return s.concat(a)
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
            var s = a("884691"),
                l = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, l.default)([r.default], () => r.default.purchases),
                    a = (0, s.useMemo)(() => {
                        let a = [],
                            s = [];
                        for (let l of e.values()) void 0 !== t.get(l.skuId) ? a.push(l) : s.push(l);
                        return s.concat(a)
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                        className: l,
                        style: C,
                        children: m
                    } = e, E = (0, n.default)([o.default], () => o.default.saturation);
                    return (0, s.jsx)("div", {
                        className: r(f.banner, l),
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
                            let s = (0, c.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(s, ", ").concat(s, "), url(").concat(e, ")"),
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
            var s = a("884691"),
                l = a("803182"),
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
                    let t = (0, l.useLocation)();
                    s.useEffect(() => {
                        if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
                            window.location.hash.startsWith(d) && window.location.replace("#")
                        }
                    }, [])
                },
                E = e => {
                    let {
                        categories: t,
                        productSkuId: a,
                        analyticsLocations: s,
                        analyticsSource: l,
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
                                    analyticsSource: l,
                                    analyticsLocations: s,
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
                    } = e, C = s.useRef(null), m = (0, l.useLocation)(), g = m.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: p
                    } = (0, i.default)(g);
                    s.useEffect(() => {
                        if (c) return;
                        let e = f.exec(m.hash);
                        if (null != e) {
                            let t = e[1];
                            C.current = t
                        }
                    }, []);
                    let h = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
                    s.useEffect(() => {
                        if (a) return;
                        let e = null;
                        if (c && null != h && (e = h), !c && null != C.current && (e = C.current), null != e) {
                            let a = [],
                                s = setTimeout(() => {
                                    let s = E({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: p,
                                        analyticsSource: g,
                                        initialItemCardRef: d
                                    });
                                    a.push(s)
                                }, 250);
                            return a.push(() => clearTimeout(s)), () => {
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
            var s, l, r = a("37983");
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
            (l = s || (s = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
            var g = e => {
                let {
                    category: t,
                    display: a,
                    className: s
                } = e, l = (0, c.default)([u.default], () => u.default.getCurrentUser()), n = f.default.canUseCollectibles(l), {
                    shopForAllEnabled: g
                } = (0, C.default)({
                    location: "CollectiblesLimitedTimeBadge"
                });
                if (!n && !g || null == t.unpublishedAt) return null;
                let p = function(e) {
                    let t = new Date,
                        a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((s - a) / 864e5)
                }(t.unpublishedAt);

                function h(e) {
                    return (0, r.jsx)(d.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: i(E.badge, s)
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
            var s = a("37983"),
                l = a("884691"),
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
                j = a("29557"),
                A = a("956089"),
                R = a("599110"),
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
                es = a("782340"),
                el = a("451594");
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
                } = e, E = l.useRef(10 + 70 * Math.random()), g = F.default.getProductsByItemType(t.skuId), p = (0, W.usePurchasedProductsSort)(null != g && o.CollectiblesItemType.AVATAR_DECORATION in g ? g[o.CollectiblesItemType.AVATAR_DECORATION] : []), h = (0, W.usePurchasedProductsSort)(null != g && o.CollectiblesItemType.PROFILE_EFFECT in g ? g[o.CollectiblesItemType.PROFILE_EFFECT] : []), S = h.length > 0, L = (0, w.isPremiumCollectiblesCategory)(t), I = [...S ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...S && L ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [v, N] = (0, x.useDismissibleContentGroup)(I), {
                    tallerCardsEnabled: O
                } = (0, M.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                });
                l.useEffect(() => () => {
                    null != v && N(et.ContentDismissActionType.USER_DISMISS)
                }, [v, N]);
                let j = (0, c.default)([y.default], () => y.default.initialProductSkuId),
                    R = l.useCallback(e => t => {
                        e.skuId === j && (i.current = t.current)
                    }, [j, i]);
                if (null == g || 0 === p.length) return null;
                let B = O ? $.default : V.default;
                return (0, s.jsxs)("div", {
                    className: el.categoryWrapper,
                    children: [m && (0, s.jsx)(d.Clickable, {
                        className: n(el.hiddenWumpus, {
                            [el.hiddenWumpusEnabled]: f
                        }),
                        onClick: () => C(!0),
                        style: {
                            left: "".concat(E.current, "%")
                        },
                        children: (0, s.jsx)(_.default, {
                            idleAnimationState: b.AnimationState.IDLE,
                            giftStyle: T.PremiumGiftStyles.BOX
                        })
                    }), (0, s.jsx)(z.default, {
                        category: t
                    }), p.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(d.Text, {
                            className: el.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: es.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, s.jsx)("div", {
                            className: n(el.cardsContainer, O ? el.tallerShopCard : el.regularShopCard, a),
                            children: p.map(e => (0, s.jsx)(B, {
                                onMount: R(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: f
                            }, e.storeListingId))
                        })]
                    }), h.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)("div", {
                            className: el.itemTypeTitleContainer,
                            children: [(0, s.jsx)(d.Text, {
                                className: el.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: es.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != v && (0, s.jsx)(A.PremiumBadge, {
                                className: el.newItemTypeBadge,
                                text: es.default.Messages.NEW
                            })]
                        }), (0, s.jsx)("div", {
                            className: n(el.cardsContainer, O ? el.tallerShopCard : el.regularShopCard, a),
                            children: h.map(e => (0, s.jsx)(B, {
                                onMount: R(e),
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
                } = (0, Z.useCollectiblesShopRouting)(), _ = (0, c.default)([N.default], () => N.default.getCurrentUser()), A = B.default.canUseCollectibles(_), {
                    categories: F,
                    isFetchingCategories: M,
                    error: W
                } = (0, H.default)(), z = (0, U.usePurchasedCategoriesSort)(F), V = l.useRef(Math.random()), {
                    shopForAllEnabled: $,
                    marketingEnabled: ei
                } = (0, D.default)({
                    location: "CollectiblesShop"
                }), eo = l.useRef(null), [ec, eu] = l.useState(!1);
                (0, G.useProductDetailsDeepLinking)({
                    categories: F,
                    isFetchingCategories: M,
                    isLayer: b,
                    initialItemCardRef: eo
                });
                let {
                    sessionId: ed,
                    scrollerRef: ef,
                    scrollHandler: eC
                } = (0, h.usePageScrollPosition)(ee.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                l.useEffect(() => {
                    R.default.track(ee.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: a,
                        page_session_id: ed
                    }), !A && R.default.track(ee.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: ea.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: x
                    })
                }, [A, x, a, ed]), l.useEffect(() => {
                    er.forEach(e => {
                        !(0, S.isDismissibleContentDismissed)(e) && (0, S.markDismissibleContentAsDismissed)(e, {
                            dismissAction: et.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), l.useEffect(() => {
                    !t && (0, f.setHomeLink)(ee.Routes.COLLECTIBLES_SHOP)
                }, [t]), l.useEffect(() => () => {
                    (0, P.setCollectiblesCategoryItemsViewed)({
                        categories: [...F.values()],
                        itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [F]);
                let em = () => {
                        (0, P.fetchCollectiblesCategories)()
                    },
                    eE = (0, E.default)(),
                    eg = [...F.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === i.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, s.jsxs)(u, {
                    children: [(0, s.jsxs)("div", {
                        className: el.shop,
                        children: [t ? null : (0, s.jsxs)(L.default, {
                            className: n((0, k.getThemeClass)(eE), el.headerBar),
                            toolbar: !0,
                            children: [(0, s.jsx)(j.default, {
                                className: el.logo
                            }), (0, s.jsx)(L.default.Title, {
                                className: el.title,
                                children: es.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, s.jsx)(d.AdvancedScroller, {
                            className: el.shopScroll,
                            ref: ef,
                            onScroll: eC,
                            children: (0, s.jsxs)("div", {
                                className: n(el.pageWrapper, {
                                    [el.pageWrapperFullscreen]: t
                                }),
                                children: [(0, s.jsxs)("main", {
                                    className: el.page,
                                    children: [t ? (0, s.jsx)(O.default, {
                                        title: es.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, ei ? (0, s.jsx)(X.default, {
                                        isFullScreen: t
                                    }) : (0, s.jsx)(Y.default, {
                                        isFullScreen: t
                                    }), $ || A || null == eg ? null : (0, s.jsx)(J.default, {
                                        category: eg
                                    }), M ? (0, s.jsx)(q.default, {}) : W ? (0, s.jsx)(K.default, {
                                        onRetry: em
                                    }) : (0, s.jsx)("div", {
                                        children: z.map((e, t) => !(0, w.isPremiumCollectiblesCategory)(e) || $ || A ? (0, s.jsx)(en, {
                                            isPremiumUser: A,
                                            category: e,
                                            initialItemCardRef: eo,
                                            setIsGiftEasterEggEnabled: eu,
                                            isGiftEasterEggEnabled: ec,
                                            showEasterEggToggle: t === Math.floor(V.current * z.length)
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, s.jsx)("div", {
                                    children: (0, s.jsx)(m.default, {
                                        className: el.close,
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
                    }), ec && (0, s.jsx)(Q.default, {})]
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
            var s = a("37983"),
                l = a("884691"),
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
                    } = (0, o.default)(), r = l.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, m.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || C.default.canUseCollectibles(d) ? (0, s.jsx)(s.Fragment, {
                        children: t.summary
                    }) : (0, s.jsx)(s.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, s.jsx)(i.Clickable, {
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
                                children: (0, s.jsx)(i.Text, {
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
                return (0, s.jsxs)(g.default, {
                    asset: t.banner,
                    className: b.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, h.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, s.jsxs)("div", {
                        className: b.discordLogo,
                        children: [(0, s.jsx)(d.default, {
                            className: b.discordIcon
                        }), (0, s.jsx)(f.default, {
                            className: b.discordWordmark
                        })]
                    }), (0, s.jsx)("img", {
                        className: b.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: T
                        }),
                        alt: t.name
                    }), (0, s.jsx)(i.Text, {
                        className: b.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, s.jsx)(p.default, {
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
                    return q
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("65597"),
                o = a("669491"),
                c = a("77078"),
                u = a("54239"),
                d = a("252744"),
                f = a("812204"),
                C = a("685665"),
                m = a("606292"),
                E = a("688318"),
                g = a("946964"),
                p = a("635956"),
                h = a("38766"),
                S = a("662286"),
                x = a("601095"),
                L = a("493390"),
                b = a("697218"),
                T = a("944441"),
                _ = a("462579"),
                I = a("216422"),
                v = a("956089"),
                N = a("50885"),
                O = a("21526"),
                j = a("417313"),
                A = a("775416"),
                R = a("805172"),
                B = a("491232"),
                k = a("730297"),
                P = a("806410"),
                F = a("342676"),
                D = a("450492"),
                y = a("920580"),
                M = a("54809"),
                w = a("408381"),
                H = a("264579"),
                U = a("57940"),
                W = a("646718"),
                G = a("782340"),
                z = a("395535");
            let V = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                K = c.AvatarSizes.SIZE_120,
                Y = (0, m.getDecorationSizeForAvatarSize)(K),
                X = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...l
                    } = e;
                    return (0, s.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...l,
                        children: t
                    })
                },
                Z = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, s.jsx)(c.Button, {
                        color: c.ButtonColors.CUSTOM,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(z.previewButton, t),
                        innerClassName: z.previewButtonInner,
                        "aria-label": G.default.Messages.PREVIEW,
                        ...a,
                        children: (0, s.jsx)(_.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var q = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: _ = !1,
                    isGiftEasterEggEnabled: N
                } = e, {
                    analyticsLocations: q
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), $ = l.useRef(null), J = (0, d.default)($), [Q, ee] = l.useState(!1), et = J || Q, ea = (0, i.default)([b.default], () => b.default.getCurrentUser()), es = t.items.find(k.isAvatarDecorationRecord), el = t.items.find(P.isProfileEffectRecord), {
                    avatarDecorationSrc: er,
                    eventHandlers: en,
                    avatarPlaceholderSrc: ei
                } = (0, E.default)({
                    user: ea,
                    avatarDecorationOverride: es,
                    size: Y,
                    animateOnHover: !et
                }), {
                    buttonColors: eo,
                    backgroundColors: ec
                } = (0, U.default)(a), eu = (0, B.getFormattedPriceForCollectiblesProduct)(t, _), ed = (0, B.isPremiumCollectiblesCategory)(a), [ef, eC, em] = (0, i.useStateFromStoresArray)([A.default], () => [A.default.getPurchase(t.skuId), A.default.isClaiming === t.skuId, null != A.default.isClaiming && A.default.isClaiming !== t.skuId]), eE = (0, S.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eg
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: ep
                } = (0, j.default)({
                    location: "CollectiblesShopCard"
                });
                l.useEffect(() => {
                    let {
                        current: e
                    } = $;
                    if (null == e) return;
                    let t = () => ee(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eh = (0, h.default)({
                        analyticsLocations: q
                    }),
                    eS = () => {
                        (0, u.popLayer)(), eh(), null != es ? (0, m.openAvatarDecorationModal)({
                            analyticsLocations: q,
                            initialSelectedDecoration: t.items.find(k.isAvatarDecorationRecord)
                        }) : null != el && (0, L.openProfileEffectModal)({
                            analyticsLocations: q,
                            initialSelectedEffectID: null == el ? void 0 : el.id
                        })
                    },
                    ex = e => () => {
                        (0, M.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: q,
                            analyticsSource: e
                        })
                    },
                    eL = ex(f.default.COLLECTIBLES_SHOP_CARD),
                    eb = ex(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eT = () => (0, s.jsxs)("div", {
                        className: z.hoverUpsellContainer,
                        children: [!eg && (0, s.jsx)(c.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: z.description,
                            children: null != el ? G.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(p.default, {
                                fullWidth: !0,
                                className: z.premiumSubscribeButton,
                                disabled: em,
                                onClick: e => e.stopPropagation(),
                                buttonText: eg ? G.default.Messages.UNLOCK_WITH_NITRO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
                            }), (0, s.jsx)(Z, {
                                className: z.defaultPreviewButtonColor,
                                style: {
                                    color: o.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: eb
                            })]
                        })]
                    });
                l.useEffect(() => {
                    null == r || r($)
                }, [r]);
                let e_ = () => null != ef ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : ed ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, s.jsx)(y.default, {
                        product: t,
                        className: z.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eI = () => {
                        if (ed) return null;
                        let e = null != eo ? {
                            background: eo.secondary.toHslString(),
                            color: eo.text.toHslString()
                        } : void 0;
                        return ep ? (0, s.jsx)(D.default, {
                            product: t,
                            returnRef: $,
                            isGiftEasterEggEnabled: N
                        }) : (0, s.jsx)(Z, {
                            style: e,
                            className: z.defaultPreviewButtonColor,
                            onClick: eb
                        })
                    },
                    ev = () => {
                        if (eg && ed && !_ || !_ && !eg && null == ef) return eT();
                        let e = null != eo ? {
                                background: (0, w.getBackgroundGradient)(eo, 90),
                                color: eo.text.toHslString()
                            } : void 0,
                            l = ed ? {
                                submitting: eC,
                                submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, H.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: q
                                    })
                                }
                            } : {
                                onClick: () => (0, g.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: q,
                                    returnRef: $
                                })
                            };
                        return (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [null == ef ? (0, s.jsx)(X, {
                                style: e,
                                disabled: em,
                                className: z.purchaseButton,
                                ...l,
                                children: ed ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: eu
                                })
                            }) : (0, s.jsx)(X, {
                                style: e,
                                disabled: em,
                                onClick: eS,
                                children: G.default.Messages.COLLECTIBLES_USE_NOW
                            }), eI()]
                        })
                    };
                if (void 0 === es && null != el && !1 === eE) return null;
                let eN = null != ec ? {
                    background: "".concat((0, w.getBackgroundGradient)(ec), " border-box border-box"),
                    borderColor: ec.border.toHslString(),
                    boxShadow: et ? "0 0 25px 1px ".concat(ec.primary.toHslString()) : "none"
                } : void 0;
                return (0, s.jsx)(c.FocusRing, {
                    children: (0, s.jsxs)(c.Clickable, {
                        innerRef: $,
                        className: z.shopCard,
                        onBlur: () => ee(!1),
                        onClick: eL,
                        style: eN,
                        id: "shop-item-".concat(t.skuId),
                        children: [ed && (0, s.jsx)(c.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, s.jsx)(v.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, s.jsx)(I.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), null != el && (0, s.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, s.jsx)(x.default, {
                                isHovering: et,
                                profileEffectId: null == el ? void 0 : el.id,
                                isPurchased: null != ef
                            })
                        }), null != es && (0, s.jsx)(V, {
                            ...en,
                            avatarDecoration: er,
                            src: ei,
                            className: n(z.avatar, {
                                [z.avatarPurchased]: null != ef
                            }),
                            size: K,
                            "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ef ? (0, s.jsx)("div", {
                            className: null != es ? z.checkmarkWrapper : z.profileEffectCheckmarkWrapper,
                            children: (0, s.jsx)(T.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, s.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextProfileEffect]: null != el
                            }),
                            children: [(0, s.jsx)("div", {
                                className: z.productName,
                                children: (_ || eg) && (0, s.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, s.jsxs)("div", {
                                className: z.detailsWrapper,
                                children: [(0, s.jsxs)("div", {
                                    className: z.innerBlur,
                                    children: [!_ && !eg && (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        className: z.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), e_()]
                                }), (0, s.jsx)("div", {
                                    className: z.innerHover,
                                    children: ev()
                                })]
                            })]
                        }), (0, s.jsx)(F.default, {
                            category: a,
                            className: z.limitedTimeBadge,
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
            var s = a("37983");
            a("884691");
            var l = a("819855"),
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
                    return (0, s.jsxs)("div", {
                        className: o.wrapper,
                        children: [(0, s.jsx)("img", {
                            className: o.loadIssueImg,
                            src: (0, l.isThemeDark)(a) ? c : u,
                            alt: ""
                        }), (0, s.jsx)(r.Heading, {
                            className: o.heading1,
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, s.jsx)(r.Button, {
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
            var s = a("37983"),
                l = a("884691"),
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
                } = (0, o.default)(), b = (0, n.useStateFromStores)([f.default], () => f.default.getCategoryForProduct(t.skuId)), T = l.useRef(null), _ = (0, i.default)(T), {
                    buttonColors: I
                } = (0, C.default)(b), v = null == I || x ? void 0 : {
                    background: I.secondary.toHslString(),
                    color: I.text.toHslString()
                }, N = x ? m.ThemeTypes.DARK : (null == I ? void 0 : I.text.isDark()) ? m.ThemeTypes.LIGHT : m.ThemeTypes.DARK;
                return (0, s.jsx)(r.Button, {
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
                    children: S ? (0, s.jsx)(c.SeasonalGiftIcon, {
                        hovered: _,
                        isContentDismissed: !0,
                        themeOverride: N,
                        boxColors: p
                    }) : (0, s.jsx)(d.default, {
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), l = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: x
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), L = x && !l;
                    return (0, s.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: L
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!L && (0, s.jsxs)(i.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: E.premiumBadgeWrapper,
                                children: [(0, s.jsx)(u.default, {
                                    className: E.premiumBadge
                                }), (0, s.jsx)("span", {
                                    className: E.premiumBadgeText,
                                    children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, s.jsx)(i.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(i.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: x ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), x || l ? null : (0, s.jsx)(o.default, {
                                className: E.subscribeButton,
                                isTrialCTA: !0,
                                buttonText: m.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2
                            })]
                        }), (0, s.jsx)("div", {
                            className: E.bannerBackgroundWrapper,
                            children: (0, s.jsx)("img", {
                                className: E.bannerBackground,
                                alt: "",
                                src: g
                            })
                        }), (0, s.jsx)("img", {
                            className: E.bannerForeground,
                            alt: "",
                            src: p
                        }), (0, s.jsx)("img", {
                            className: E.bannerHand,
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeTopSparkle),
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallTopSparkle),
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeLeftSparkle),
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallLeftSparkle),
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeRightSparkle),
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                    return (0, s.jsxs)("div", {
                        className: r(o.heroBanner, t ? o.heroBannerFullScreen : o.heroBannerWithSidebar),
                        children: [(0, s.jsxs)("div", {
                            className: o.heroDescription,
                            children: [(0, s.jsx)(n.Heading, {
                                className: o.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(n.Text, {
                                className: o.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, s.jsxs)("div", {
                            className: o.bannerArt,
                            children: [(0, s.jsx)("img", {
                                className: o.bannerGrid,
                                alt: "",
                                src: c,
                                width: "484",
                                height: "402"
                            }), (0, s.jsx)("img", {
                                className: o.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, s.jsx)("img", {
                                className: o.bannerGridMedium,
                                alt: "",
                                src: u,
                                width: "178",
                                height: "106"
                            }), (0, s.jsx)("img", {
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                    disableTooltipPointerEvents: l,
                    alwaysWhiteText: S = !0
                } = e, x = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                    shopForAllEnabled: L
                } = (0, C.default)({
                    location: "CollectiblesPriceTag"
                }), b = (0, n.default)([c.default], () => (0, i.isThemeDark)(c.default.theme)), T = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == T) return null;
                let _ = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    I = !f.default.canUseCollectibles(x) && L;
                return (0, s.jsxs)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: [(0, s.jsx)(E.default, {
                        alwaysWhiteText: S,
                        price: T,
                        className: I ? void 0 : h.strikedPrice
                    }), null != _ && (0, s.jsx)(E.default, {
                        price: _,
                        alwaysWhiteText: S,
                        renderPrice: I ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: I ? h.fullPrice : void 0,
                        variant: I ? "text-xs/semibold" : void 0,
                        icon: (0, s.jsx)(o.Tooltip, {
                            text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: l,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, s.jsx)(d.default, {
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("77078"),
                i = a("153160"),
                o = a("846367"),
                c = e => {
                    var t;
                    let {
                        price: {
                            amount: a,
                            currency: l
                        },
                        renderPrice: c,
                        icon: u,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, m = (0, i.formatPrice)(a, l);
                    return (0, s.jsxs)(n.Heading, {
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
            var s = a("37983");
            a("884691");
            var l = a("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: i,
                        analyticsLocations: o,
                        returnRef: c
                    } = e;
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("179047").then(a.bind(a, "179047"));
                        return a => (0, s.jsx)(e, {
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
                    (0, l.closeModal)(r)
                }
        },
        931262: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CollectiblesShopSourceParam: function() {
                    return s
                },
                useCollectiblesShopRouting: function() {
                    return i
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var s, l, r = a("884691"),
                n = a("90915");

            function i() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), s = a.get("source"), l = null != s ? parseInt(s, 10) : null;
                return {
                    source: l,
                    ...t
                }
            }(l = s || (s = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"
        },
        695824: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("451594"),
                i = a("927694"),
                o = a("395535"),
                c = a("492666");
            let u = () => 4 * Math.random() + 8,
                d = [u(), u(), u()];
            var f = () => (0, s.jsx)(s.Fragment, {
                children: d.map(e => (0, s.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, s.jsx)("div", {
                        className: r(c.skeleton, i.shopBanner),
                        children: (0, s.jsx)("div", {
                            className: c.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, s.jsx)("div", {
                        className: r(c.skeleton, o.shopCard),
                        children: (0, s.jsxs)("div", {
                            className: c.cardBody,
                            children: [(0, s.jsx)("div", {
                                className: c.cardAvatar
                            }), (0, s.jsx)("div", {
                                className: c.cardTitle
                            }), (0, s.jsx)("div", {
                                className: c.cardDescription
                            }), (0, s.jsx)("div", {
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
            var s = a("37983"),
                l = a("884691"),
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
                j = a("50885"),
                A = a("21526"),
                R = a("417313"),
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
            let K = j.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
                Y = u.AvatarSizes.SIZE_152,
                X = (0, E.getDecorationSizeForAvatarSize)(Y),
                Z = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...l
                    } = e;
                    return (0, s.jsx)(u.Button, {
                        fullWidth: !0,
                        look: u.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...l,
                        children: t
                    })
                },
                q = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, s.jsx)(u.Button, {
                        color: u.ButtonColors.BRAND,
                        look: u.Button.Looks.FILLED,
                        size: u.ButtonSizes.ICON,
                        className: n(V.previewButton, t),
                        innerClassName: V.previewButtonInner,
                        "aria-label": z.default.Messages.PREVIEW,
                        ...a,
                        children: (0, s.jsx)(v.default, {
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
                    isGiftEasterEggEnabled: j
                } = e, {
                    analyticsLocations: $
                } = (0, m.default)(C.default.COLLECTIBLES_SHOP_CARD), J = l.useRef(null), Q = (0, f.default)(J), [ee, et] = l.useState(!1), ea = Q || ee, es = (0, i.default)([_.default], () => _.default.getCurrentUser()), el = t.items.find(F.isAvatarDecorationRecord), er = t.items.find(D.isProfileEffectRecord), {
                    avatarDecorationSrc: en,
                    eventHandlers: ei,
                    avatarPlaceholderSrc: eo
                } = (0, g.default)({
                    user: es,
                    avatarDecorationOverride: el,
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
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), eh = (0, i.default)([T.default], () => (0, c.isThemeDark)(T.default.theme));
                l.useEffect(() => {
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
                        (0, d.popLayer)(), eS(), null != el ? (0, E.openAvatarDecorationModal)({
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
                    e_ = () => (0, s.jsxs)("div", {
                        className: V.hoverUpsellContainer,
                        children: [!eg && (0, s.jsx)(u.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: V.description,
                            children: null != er ? z.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : z.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, s.jsxs)("div", {
                            className: V.buttonsContainer,
                            children: [(0, s.jsx)(h.default, {
                                fullWidth: !0,
                                className: V.premiumSubscribeButton,
                                disabled: em,
                                onClick: e => e.stopPropagation(),
                                buttonText: eg ? z.default.Messages.UNLOCK_WITH_NITRO : z.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2
                            }), (0, s.jsx)(q, {
                                style: {
                                    color: o.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: eT
                            })]
                        })]
                    });
                l.useEffect(() => {
                    null == r || r(J)
                }, [r]);
                let eI = () => null != ef ? (0, s.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: V.priceTag,
                        children: z.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : ed ? (0, s.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: V.priceTag,
                        children: z.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, s.jsx)(w.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: V.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    ev = () => ed ? null : ep ? (0, s.jsx)(M.default, {
                        product: t,
                        returnRef: J,
                        isGiftEasterEggEnabled: j,
                        disableCustomColor: !0
                    }) : (0, s.jsx)(q, {
                        onClick: eT
                    }),
                    eN = () => {
                        if (eg && ed && !v || !v && !eg && null == ef) return e_();
                        let e = ed ? {
                            submitting: eC,
                            submittingStartedLabel: z.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: z.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
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
                        return (0, s.jsxs)("div", {
                            className: V.buttonsContainer,
                            children: [null == ef ? (0, s.jsx)(Z, {
                                disabled: em,
                                className: V.purchaseButton,
                                ...e,
                                children: ed ? z.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : z.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: eu
                                })
                            }) : (0, s.jsx)(Z, {
                                disabled: em,
                                onClick: ex,
                                children: z.default.Messages.COLLECTIBLES_USE_NOW
                            }), ev()]
                        })
                    };
                if (void 0 === el && null != er && !1 === eE) return null;
                let eO = eh ? "0 0 15px 1px ".concat(o.default.unsafe_rawColors.WHITE_800.css) : "var(--elevation-high)";
                return (0, s.jsx)(u.FocusRing, {
                    children: (0, s.jsxs)(u.Clickable, {
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
                        children: [ed && (0, s.jsx)(u.Tooltip, {
                            tooltipContentClassName: V.premiumWheelTooltipContent,
                            color: u.Tooltip.Colors.PRIMARY,
                            text: z.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, s.jsx)(O.TextBadge, {
                                ...e,
                                className: V.premiumWheelBadge,
                                text: (0, s.jsx)(N.default, {
                                    className: V.premiumWheel
                                })
                            })
                        }), null != er && (0, s.jsx)("div", {
                            className: V.profileEffectShopPreview,
                            children: (0, s.jsx)(L.default, {
                                isHovering: ea,
                                profileEffectId: null == er ? void 0 : er.id,
                                isPurchased: null != ef,
                                removeSetHeight: !0
                            })
                        }), null != el && (0, s.jsx)("div", {
                            className: V.avatarContainer,
                            children: (0, s.jsx)(K, {
                                ...ei,
                                avatarDecoration: en,
                                src: eo,
                                className: n(V.avatar, {
                                    [V.avatarPurchased]: null != ef
                                }),
                                size: Y,
                                "aria-label": z.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ef ? (0, s.jsx)("div", {
                            className: V.checkmarkWrapper,
                            children: (0, s.jsx)(I.default, {
                                width: 38,
                                height: 38,
                                className: V.checkmark
                            })
                        }) : null, (0, s.jsxs)("div", {
                            className: n(V.cardText, {
                                [V.cardTextBlur]: null != er
                            }),
                            children: [(0, s.jsx)("div", {
                                className: n(V.cardBackground, eh ? V.darkCardBackground : V.lightCardBackground, null != er ? V.cardLowOpacity : null)
                            }), (0, s.jsx)("div", {
                                className: V.productName,
                                children: (v || eg) && (0, s.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, s.jsxs)("div", {
                                className: V.detailsWrapper,
                                children: [!v && !eg && (0, s.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                }), (0, s.jsx)(u.Text, {
                                    className: V.description,
                                    variant: "text-md/normal",
                                    children: t.summary
                                }), (0, s.jsx)("div", {
                                    className: V.innerBlur,
                                    children: eI()
                                }), (0, s.jsx)("div", {
                                    className: V.innerHover,
                                    children: eN()
                                })]
                            })]
                        }), (0, s.jsx)(y.default, {
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
            var s = a("37983"),
                l = a("884691"),
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
                    analyticsLocations: j
                } = (0, o.default)(), {
                    backgroundColors: A
                } = (0, x.default)(O), R = (0, r.default)([f.default], () => f.default.getCurrentUser()), B = l.useRef(null), k = (0, i.default)(B), P = {
                    size: (0, c.getDecorationSizeForAvatarSize)(I),
                    animateOnHover: !k
                }, F = O.products.map(e => {
                    var t;
                    return {
                        user: R,
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
                return (0, s.jsxs)("div", {
                    ref: B,
                    className: T.bannerCard,
                    children: [(0, s.jsx)(h.default, {
                        asset: O.banner,
                        className: T.bannerBackground,
                        style: null != A ? {
                            background: (0, S.getBackgroundGradient)(A)
                        } : void 0
                    }), (0, s.jsxs)("div", {
                        className: T.contentSection,
                        children: [(0, s.jsxs)("div", {
                            className: T.discordLogo,
                            children: [(0, s.jsx)(C.default, {
                                className: T.discordIcon
                            }), (0, s.jsx)(m.default, {
                                className: T.discordWordmark
                            })]
                        }), (0, s.jsx)("img", {
                            className: T.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(O.logo, {
                                size: v
                            }),
                            alt: O.name
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            className: T.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: b.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, s.jsx)(n.Clickable, {
                                    className: T.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: j,
                                        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
                                    }),
                                    tag: "span",
                                    children: (0, s.jsx)(n.Text, {
                                        variant: "text-md/normal",
                                        color: "always-white",
                                        tag: "span",
                                        children: e
                                    })
                                })
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: T.decoSection,
                        children: [(0, s.jsx)("div", {
                            className: T.pinkInterface,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, s.jsx)("div", {
                            className: T.blueHeadset,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: y,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, s.jsx)("div", {
                            className: T.greenSmoke,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": b.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: T.badge,
                        children: (0, s.jsx)(E.default, {
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
                    return s
                },
                getLogoSize: function() {
                    return l
                },
                getBackgroundGradient: function() {
                    return r
                }
            });
            let s = 1060,
                l = e => 3.8 * e,
                r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: a,
                            secondary: s
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(s.toHslString(), ")")
                }
        },
        368560: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("4881");

            function r() {
                return (0, s.jsxs)("div", {
                    className: l.snowflakes,
                    children: [(0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
                        children: "❅"
                    }), (0, s.jsx)("div", {
                        className: l.snowflake,
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
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                r = e => {
                    let {
                        product: t,
                        category: r,
                        analyticsLocations: n
                    } = e;
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("658756").then(a.bind(a, "658756"));
                        return a => (0, s.jsx)(e, {
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
            var s = a("656280"),
                l = a.n(s),
                r = a("635058"),
                n = a("65597"),
                i = a("669491"),
                o = a("206230"),
                c = a("388491"),
                u = a("172858");
            let d = u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = l(i.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                m = l(i.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                E = (e, t) => {
                    let a = e.toRgb(),
                        s = t.toRgb(),
                        [r, n, i] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [s.r, s.g, s.b], 50);
                    return l({
                        r,
                        g: n,
                        b: i
                    })
                },
                g = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = E(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        border: r.setAlpha(.4)
                    }
                },
                p = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = E(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        text: l(r.isLight() ? m : C)
                    }
                },
                h = (e, t) => {
                    let {
                        h: a,
                        s,
                        l: r
                    } = e.toHsl();
                    return l({
                        h: a,
                        s: s * t,
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
                    confettiColors: a.confettiColors.map(e => h(l(e), t).toHexString())
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
            var s = a("37983");
            a("884691");
            var l = a("748820"),
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
                } = e, p = !1, h = (0, l.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("894742").then(a.bind(a, "894742"));
                    return a => {
                        let {
                            onClose: l,
                            returnRef: r,
                            ...n
                        } = a;
                        return (0, s.jsx)(e, {
                            ...n,
                            loadId: h,
                            skuId: t,
                            isGift: d,
                            giftMessage: f,
                            analyticsLocations: E,
                            onClose: e => {
                                l(), null == C || C(e)
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
            var s = a("37983"),
                l = a("884691"),
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
                    } = e, C = r ? 250 : .1, [m, E] = l.useState(!0);
                    return (l.useEffect(() => {
                        if (!0 !== r) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, C);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [C, r]), null != t) ? (0, s.jsxs)("div", {
                        className: n(c.previewContainer, {
                            [c.previewContainerAnimation]: r,
                            [c.previewContainerSetHeight]: !f
                        }),
                        children: [(0, s.jsx)("img", {
                            src: u,
                            alt: " ",
                            className: r ? c.previewForCollected : c.preview,
                            "aria-hidden": !0
                        }), !m && (0, s.jsx)("div", {
                            className: d ? c.purchasedEffect : void 0,
                            children: (0, s.jsx)(o.default, {
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
            var s = a("37983");
            a("884691");
            var l = a("77078");
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedEffectID: r
                } = e;
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("889793").then(a.bind(a, "889793"));
                    return a => (0, s.jsx)(e, {
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
            var s = a("37983");
            a("884691");
            var l = a("469563"),
                r = a("269096"),
                n = a("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, n.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: l,
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