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
                    return i
                }
            });
            var l = a("884691"),
                s = a("748820"),
                r = a("560103"),
                n = a("599110");
            let o = (e, t, a, l) => {
                    let {
                        scrollTop: s = 0,
                        scrollOffset: r = 0,
                        scrollHeight: o = 0,
                        scrollWidth: i = 0
                    } = l;
                    if (o > 0) {
                        let l = (s + r) / o;
                        l > 0 && n.default.track(e, {
                            scroll_visible_percent: l,
                            source: a,
                            page_height: Math.round(o),
                            page_width: Math.round(i),
                            page_session_id: t
                        })
                    }
                },
                i = (e, t) => {
                    let a = l.useRef(null),
                        n = l.useRef((0, s.v4)()),
                        i = (0, r.useThrottledFunction)(o, 5e3, [], {
                            trailing: !0
                        }),
                        u = l.useCallback(() => {
                            var l;
                            let s = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
                            null != s && i(e, n.current, t, {
                                scrollTop: s.scrollTop,
                                scrollOffset: s.offsetHeight,
                                scrollHeight: s.scrollHeight,
                                scrollWidth: s.scrollWidth
                            })
                        }, [i, e, t]);
                    return {
                        scrollerRef: a,
                        scrollHandler: u,
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
        235898: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            }), a("222007");
            var l = a("884691"),
                s = a("65597"),
                r = a("875212"),
                n = a("21526"),
                o = a("853987"),
                i = a("775416");

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: a,
                    categories: u,
                    error: c
                } = function() {
                    let e = "useMaybeFetchCollectiblesCategories";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, a, i, u] = (0, s.useStateFromStoresArray)([o.default], () => {
                        var e;
                        return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                    });
                    return (0, l.useEffect)(() => {
                        !(t || a || Date.now() - i < 6e5) && (0, n.fetchCollectiblesCategories)()
                    }, [t, i, a]), {
                        isFetching: t,
                        categories: u,
                        error: a
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: C,
                    isFetching: E,
                    purchases: m
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, a, o, u, c] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.isFetching, i.default.isClaiming, i.default.fetchError, i.default.claimError, i.default.purchases]);
                    return (0, l.useEffect)(() => {
                        (0, n.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: a,
                        fetchError: o,
                        claimError: u,
                        isFetching: t,
                        purchases: c
                    }
                }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : C;
                return {
                    isFetching: a || E,
                    isFetchingCategories: a,
                    isFetchingPurchases: E,
                    isClaiming: d,
                    categories: u,
                    purchases: m,
                    error: p
                }
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
                o = a("854588"),
                i = a("206230"),
                u = a("284679"),
                c = a("491232"),
                d = a("408381"),
                f = a("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: a = d.MAX_CONTENT_WIDTH,
                        className: s,
                        style: C,
                        children: E
                    } = e, m = (0, n.default)([i.default], () => i.default.saturation);
                    return (0, l.jsx)("div", {
                        className: r(f.banner, s),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: a,
                                format: "jpg"
                            });
                            if (1 === m) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let l = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - m);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        89569: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useProductDetailsLinkableRoute: function() {
                    return E
                },
                useProductDetailsDeepLinking: function() {
                    return p
                }
            }), a("781738"), a("222007"), a("424973");
            var l = a("884691"),
                s = a("803182"),
                r = a("446674"),
                n = a("812204"),
                o = a("685665"),
                i = a("216719"),
                u = a("54809"),
                c = a("49111");
            let d = "".concat("#").concat("itemSkuId", "="),
                f = new RegExp("^".concat(d, "(\\d+)$")),
                C = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
                E = e => {
                    let t = (0, s.useLocation)();
                    l.useEffect(() => {
                        if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
                            window.location.hash.startsWith(d) && window.location.replace("#")
                        }
                    }, [])
                },
                m = e => {
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
                                a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
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
                p = e => {
                    let {
                        categories: t,
                        isFetchingCategories: a,
                        isLayer: u,
                        initialItemCardRef: d
                    } = e, C = l.useRef(null), E = (0, s.useLocation)(), p = E.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : E.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: g
                    } = (0, o.default)(p);
                    l.useEffect(() => {
                        if (u) return;
                        let e = f.exec(E.hash);
                        if (null != e) {
                            let t = e[1];
                            C.current = t
                        }
                    }, []);
                    let h = (0, r.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
                    l.useEffect(() => {
                        if (a) return;
                        let e = null;
                        if (u && null != h && (e = h), !u && null != C.current && (e = C.current), null != e) {
                            let a = [],
                                l = setTimeout(() => {
                                    let l = m({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: g,
                                        analyticsSource: p,
                                        initialItemCardRef: d
                                    });
                                    a.push(l)
                                }, 250);
                            return a.push(() => clearTimeout(l)), () => {
                                a.forEach(e => e())
                            }
                        }
                    }, [u, g, p, t, a, h, d])
                }
        },
        342676: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            }), a("794252");
            var l, s, r = a("37983");
            a("884691");
            var n = a("414456"),
                o = a.n(n),
                i = a("506838"),
                u = a("956089"),
                c = a("782340"),
                d = a("224609");
            (s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
            var f = e => {
                let {
                    category: t,
                    display: a,
                    className: l
                } = e;
                if (null == t.unpublishedAt) return null;
                let s = function(e) {
                    let t = new Date,
                        a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        l = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((l - a) / 864e5)
                }(t.unpublishedAt);

                function n(e) {
                    return (0, r.jsx)(u.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: o(d.badge, l)
                    })
                }
                return (0, i.match)([a, s > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: s
                    });
                    return n(e)
                }).with(["modal", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: s
                    });
                    return n(e)
                }).otherwise(() => {
                    let e = c.default.Messages.COLLECTIBLES_LAST_DAY;
                    return n(e)
                })
            }
        },
        258556: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return el
                }
            }), a("794252"), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("917351"),
                i = a("506838"),
                u = a("265586"),
                c = a("65597"),
                d = a("151426"),
                f = a("551042"),
                C = a("77078"),
                E = a("939488"),
                m = a("304580"),
                p = a("841098"),
                g = a("812204"),
                h = a("685665"),
                b = a("481120"),
                T = a("10641"),
                x = a("539938"),
                L = a("210721"),
                S = a("78345"),
                I = a("65324"),
                v = a("778588"),
                _ = a("697218"),
                N = a("764490"),
                A = a("29557"),
                k = a("599110"),
                F = a("719923"),
                O = a("439932"),
                y = a("21526"),
                R = a("411691"),
                j = a("216719"),
                B = a("702953"),
                P = a("235898"),
                D = a("296304"),
                M = a("334820"),
                w = a("89569"),
                H = a("419513"),
                U = a("434393"),
                W = a("571464"),
                G = a("43525"),
                z = a("798235"),
                V = a("931262"),
                K = a("695824"),
                Y = a("518907"),
                X = a("368560"),
                Z = a("49111"),
                q = a("994428"),
                $ = a("894282"),
                J = a("646718"),
                Q = a("782340"),
                ee = a("451594");

            function et(e) {
                let {
                    isFullScreen: t
                } = e, a = (0, R.default)("CollectiblesShop");
                return (0, i.match)(a).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(z.default, {
                    isFullScreen: t
                })).otherwise(() => (0, l.jsx)(G.default, {
                    isFullScreen: t
                }))
            }

            function ea(e) {
                var t, a;
                let {
                    category: r,
                    className: i,
                    isPremiumUser: d,
                    initialItemCardRef: f,
                    isGiftEasterEggEnabled: E,
                    setIsGiftEasterEggEnabled: m,
                    showEasterEggToggle: p
                } = e, g = s.useRef(10 + 70 * Math.random()), h = (0, M.usePurchasedProductsSort)(r.products), b = (0, o.groupBy)(h, "type"), T = (0, c.default)([j.default], () => j.default.initialProductSkuId), {
                    tallerCardsEnabled: x
                } = (0, B.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), v = x ? Y.default : U.default, _ = s.useCallback(e => t => {
                    e.skuId === T && (f.current = t.current)
                }, [T, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(C.Text, {
                        className: n(ee.itemTypeTitle, {
                            [ee.itemTypeTitleForTallerCard]: x
                        }),
                        color: "header-secondary",
                        variant: "text-sm/bold",
                        children: t
                    }), (0, l.jsx)("div", {
                        className: n(ee.cardsContainer, x ? ee.tallerShopCard : ee.regularShopCard, i),
                        children: e.map(e => (0, l.jsx)(v, {
                            onMount: _(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: E
                        }, e.skuId))
                    })]
                });
                return (0, l.jsxs)("div", {
                    className: ee.categoryWrapper,
                    children: [p && (0, l.jsx)(C.Clickable, {
                        className: n(ee.hiddenWumpus, {
                            [ee.hiddenWumpusEnabled]: E
                        }),
                        onClick: () => m(!0),
                        style: {
                            left: "".concat(g.current, "%")
                        },
                        children: (0, l.jsx)(I.default, {
                            idleAnimationState: L.AnimationState.IDLE,
                            giftStyle: S.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(H.default, {
                        category: r,
                        className: x ? ee.tallerShopCardBanner : void 0
                    }), N(null !== (t = b[u.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[u.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
                })
            }
            var el = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
                    AnalyticsLocationProvider: o,
                    analyticsLocations: i
                } = (0, h.default)([...r, g.default.COLLECTIBLES_SHOP]), L = (0, c.default)([v.default], () => v.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), S = (0, f.useHasAnyModalOpen)(), {
                    onClose: I
                } = (0, V.useCollectiblesShopRouting)(), R = (0, c.default)([_.default], () => _.default.getCurrentUser()), M = F.default.canUseCollectibles(R), {
                    categories: H,
                    isFetchingCategories: U,
                    error: G
                } = (0, P.default)(), z = (0, D.usePurchasedCategoriesSort)(H), Y = s.useRef(Math.random()), {
                    tallerCardsEnabled: el
                } = (0, B.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), es = s.useRef(null), [er, en] = s.useState(!1);
                (0, w.useProductDetailsDeepLinking)({
                    categories: H,
                    isFetchingCategories: U,
                    isLayer: L,
                    initialItemCardRef: es
                });
                let {
                    sessionId: eo,
                    scrollerRef: ei,
                    scrollHandler: eu
                } = (0, b.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                s.useEffect(() => {
                    k.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: i,
                        source: a,
                        page_session_id: eo
                    }), !M && k.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: i
                    })
                }, [M, i, a, eo]), s.useEffect(() => {
                    !(0, T.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, E.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, y.setCollectiblesCategoryItemsViewed)({
                        categories: [...H.values()],
                        itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION, u.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [H]), s.useEffect(() => {
                    if (!t || L || S) return;
                    let e = e => {
                        e.key === $.KeyboardEventKey.Escape && I()
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [t, L, S, I]);
                let ec = () => {
                        (0, y.fetchCollectiblesCategories)()
                    },
                    ed = (0, p.default)();
                return (0, l.jsxs)(o, {
                    children: [(0, l.jsxs)("div", {
                        className: ee.shop,
                        children: [t ? null : (0, l.jsxs)(x.default, {
                            className: n((0, O.getThemeClass)(ed), ee.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(A.default, {
                                className: ee.logo
                            }), (0, l.jsx)(x.default.Title, {
                                className: ee.title,
                                children: Q.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, l.jsx)(C.AdvancedScroller, {
                            className: n(ee.shopScroll, {
                                [ee.shopScrollBackgroundPrimary]: el
                            }),
                            ref: ei,
                            onScroll: eu,
                            children: (0, l.jsxs)("div", {
                                className: n(ee.pageWrapper, {
                                    [ee.pageWrapperFullscreen]: t,
                                    [ee.pageWrapperBackgroundPrimary]: el
                                }),
                                children: [(0, l.jsxs)("main", {
                                    className: ee.page,
                                    children: [t ? (0, l.jsx)(N.default, {
                                        title: Q.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, (0, l.jsx)(et, {
                                        isFullScreen: t
                                    }), U ? (0, l.jsx)(K.default, {}) : G ? (0, l.jsx)(W.default, {
                                        onRetry: ec
                                    }) : (0, l.jsx)("div", {
                                        className: ee.categories,
                                        children: z.filter(e => {
                                            let {
                                                products: t
                                            } = e;
                                            return t.length > 0
                                        }).map((e, t) => (0, l.jsx)(ea, {
                                            isPremiumUser: M,
                                            category: e,
                                            initialItemCardRef: es,
                                            setIsGiftEasterEggEnabled: en,
                                            isGiftEasterEggEnabled: er,
                                            showEasterEggToggle: t === Math.floor(Y.current * z.length)
                                        }, e.skuId))
                                    })]
                                }), t && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(m.default, {
                                        className: ee.close,
                                        closeAction: L ? y.closeCollectiblesShop : I,
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), er && (0, l.jsx)(X.default, {})]
                })
            }
        },
        419513: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("635058"),
                i = a("65597"),
                u = a("77078"),
                c = a("685665"),
                d = a("649844"),
                f = a("697218"),
                C = a("153769"),
                E = a("270227"),
                m = a("719923"),
                p = a("491232"),
                g = a("716120"),
                h = a("342676"),
                b = a("408381"),
                T = a("57940"),
                x = a("646718"),
                L = a("782340"),
                S = a("927694");
            let I = (0, b.getLogoSize)(96),
                v = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, c.default)(), r = s.useRef(null), n = (0, i.default)([f.default], () => f.default.getCurrentUser());
                    return m.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(u.Clickable, {
                                innerRef: r,
                                className: S.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function _(e) {
                let {
                    category: t,
                    className: a
                } = e, {
                    backgroundColors: s
                } = (0, T.default)(t.skuId);
                return (0, l.jsxs)(g.default, {
                    asset: t.banner,
                    className: n(S.shopBanner, a),
                    style: null != s ? {
                        background: "".concat((0, b.getBackgroundGradient)(s), " border-box border-box"),
                        outlineColor: s.border.toHslString()
                    } : void 0,
                    children: [(0, l.jsxs)("div", {
                        className: S.discordLogo,
                        children: [(0, l.jsx)(C.default, {
                            className: S.discordIcon
                        }), (0, l.jsx)(E.default, {
                            className: S.discordWordmark
                        })]
                    }), (0, l.jsx)("img", {
                        className: S.categoryLogo,
                        src: (0, p.getCollectiblesAssetURL)(t.logo, {
                            size: I
                        }),
                        alt: t.name
                    }), (0, l.jsx)(u.Text, {
                        className: S.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(v, {
                            category: t
                        }) : t.summary
                    }), (0, l.jsx)(h.default, {
                        category: t,
                        className: S.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }
        },
        434393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return V
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("77078"),
                u = a("265586"),
                c = a("54239"),
                d = a("252744"),
                f = a("812204"),
                C = a("685665"),
                E = a("606292"),
                m = a("688318"),
                p = a("946964"),
                g = a("635956"),
                h = a("38766"),
                b = a("601095"),
                T = a("493390"),
                x = a("697218"),
                L = a("944441"),
                S = a("462579"),
                I = a("216422"),
                v = a("956089"),
                _ = a("50885"),
                N = a("21526"),
                A = a("775416"),
                k = a("491232"),
                F = a("342676"),
                O = a("450492"),
                y = a("920580"),
                R = a("54809"),
                j = a("408381"),
                B = a("264579"),
                P = a("57940"),
                D = a("646718"),
                M = a("782340"),
                w = a("395535");
            let H = _.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
                U = i.AvatarSizes.SIZE_120,
                W = (0, E.getDecorationSizeForAvatarSize)(U),
                G = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...s
                    } = e;
                    return (0, l.jsx)(i.Button, {
                        fullWidth: !0,
                        look: i.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...s,
                        children: t
                    })
                },
                z = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(i.Button, {
                        color: i.ButtonColors.CUSTOM,
                        look: i.Button.Looks.FILLED,
                        size: i.ButtonSizes.ICON,
                        className: n(w.previewButton, t),
                        innerClassName: w.previewButtonInner,
                        "aria-label": M.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(S.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var V = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: S = !1,
                    isGiftEasterEggEnabled: _
                } = e, {
                    analyticsLocations: V
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [X, Z] = s.useState(!1), q = Y || X, $ = (0, o.default)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
                    avatarDecorationSrc: Q,
                    eventHandlers: ee,
                    avatarPlaceholderSrc: et
                } = (0, m.default)({
                    user: $,
                    avatarDecorationOverride: (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
                    size: W,
                    animateOnHover: !q
                }), {
                    buttonColors: ea,
                    backgroundColors: el
                } = (0, P.default)(t.categorySkuId), es = (0, k.getFormattedPriceForCollectiblesProduct)(t, S), er = (0, k.isPremiumCollectiblesProduct)(t), en = (0, k.isFreeCollectiblesProduct)(t), [eo, ei, eu] = (0, o.useStateFromStoresArray)([A.default], () => [A.default.getPurchase(t.skuId), A.default.isClaiming === t.skuId, null != A.default.isClaiming && A.default.isClaiming !== t.skuId]), ec = s.useRef(null);
                s.useEffect(() => {
                    let {
                        current: e
                    } = K;
                    if (null == e) return;
                    let t = () => Z(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ed = (0, h.default)({
                        analyticsLocations: V
                    }),
                    ef = () => {
                        if ((0, c.popLayer)(), ed(), (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, E.openAvatarDecorationModal)({
                                initialSelectedDecoration: J,
                                analyticsLocations: V
                            });
                            return
                        }(null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, T.openProfileEffectModal)({
                            initialSelectedEffectId: J.id,
                            analyticsLocations: V
                        })
                    },
                    eC = e => l => {
                        ec.current = l.currentTarget, (0, R.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: V,
                            analyticsSource: e,
                            returnRef: ec
                        })
                    },
                    eE = eC(f.default.COLLECTIBLES_SHOP_CARD),
                    em = eC(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    ep = () => (0, l.jsx)("div", {
                        className: w.hoverUpsellContainer,
                        children: (0, l.jsx)(g.default, {
                            fullWidth: !0,
                            className: w.premiumSubscribeButton,
                            disabled: eu,
                            onClick: e => e.stopPropagation(),
                            buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(K)
                }, [r]);
                let eg = () => null != eo ? (0, l.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: w.priceTag,
                        children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : er ? (0, l.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: w.priceTag,
                        children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(y.default, {
                        product: t,
                        className: w.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eh = () => er ? null : en ? (0, l.jsx)(z, {
                        style: null != ea ? {
                            background: ea.secondary.toHslString(),
                            color: ea.text.toHslString()
                        } : void 0,
                        className: w.defaultPreviewButtonColor,
                        onClick: em
                    }) : (0, l.jsx)(O.default, {
                        product: t,
                        returnRef: K,
                        isGiftEasterEggEnabled: _,
                        tooltipDelay: 250
                    }),
                    eb = () => {
                        if (er && !S && !en) return ep();
                        let e = null != ea ? {
                                background: (0, j.getBackgroundGradient)(ea, 90),
                                color: ea.text.toHslString()
                            } : void 0,
                            a = er ? {
                                submitting: ei,
                                submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, N.claimPremiumCollectiblesProduct)(t.skuId), (0, B.default)({
                                        product: t,
                                        analyticsLocations: V
                                    })
                                }
                            } : {
                                onClick: () => (0, p.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: V,
                                    returnRef: K
                                })
                            };
                        return (0, l.jsxs)("div", {
                            className: w.buttonsContainer,
                            children: [null == eo ? (0, l.jsx)(G, {
                                style: e,
                                disabled: eu,
                                className: w.purchaseButton,
                                ...a,
                                children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: es
                                })
                            }) : (0, l.jsx)(G, {
                                style: e,
                                disabled: eu,
                                onClick: ef,
                                children: M.default.Messages.COLLECTIBLES_USE_NOW
                            }), eh()]
                        })
                    },
                    eT = null != el ? {
                        background: "".concat((0, j.getBackgroundGradient)(el), " border-box border-box"),
                        borderColor: el.border.toHslString(),
                        boxShadow: q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
                    } : void 0;
                return (0, l.jsx)(i.FocusRing, {
                    children: (0, l.jsxs)(i.Clickable, {
                        innerRef: K,
                        className: w.shopCard,
                        onBlur: () => Z(!1),
                        onClick: eE,
                        style: eT,
                        id: "shop-item-".concat(t.skuId),
                        children: [er && (0, l.jsx)(i.Tooltip, {
                            tooltipContentClassName: w.premiumWheelTooltipContent,
                            color: i.Tooltip.Colors.PRIMARY,
                            text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(v.TextBadge, {
                                ...e,
                                className: w.premiumWheelBadge,
                                text: (0, l.jsx)(I.default, {
                                    className: w.premiumWheel
                                })
                            })
                        }), (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: w.profileEffectShopPreview,
                            children: (0, l.jsx)(b.default, {
                                isHovering: q,
                                profileEffectId: J.id,
                                isPurchased: null != eo
                            })
                        }), (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
                            ...ee,
                            avatarDecoration: Q,
                            src: et,
                            className: n(w.avatar, {
                                [w.avatarPurchased]: null != eo
                            }),
                            size: U,
                            "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
                        }), null != eo ? (0, l.jsx)("div", {
                            className: (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
                            children: (0, l.jsx)(L.default, {
                                width: 38,
                                height: 38,
                                className: w.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(w.cardText, {
                                [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: w.productName,
                                children: S && (0, l.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: w.detailsWrapper,
                                children: [(0, l.jsxs)("div", {
                                    className: w.innerBlur,
                                    children: [(0, l.jsx)(i.Text, {
                                        color: "always-white",
                                        className: w.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eg()]
                                }), (0, l.jsx)("div", {
                                    className: w.innerHover,
                                    children: eb()
                                })]
                            })]
                        }), (0, l.jsx)(F.default, {
                            category: a,
                            className: w.limitedTimeBadge,
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
                o = a("782340"),
                i = a("139948"),
                u = a("321220"),
                c = a("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, a = (0, n.default)();
                    return (0, l.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, l.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, s.isThemeDark)(a) ? u : c,
                            alt: ""
                        }), (0, l.jsx)(r.Heading, {
                            className: i.heading1,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, l.jsx)(r.Button, {
                            className: i.reload,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND_NEW,
                            onClick: t,
                            children: o.default.Messages.ERRORS_RELOAD
                        })]
                    })
                }
        },
        450492: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("77078"),
                n = a("252744"),
                o = a("685665"),
                i = a("108486"),
                u = a("946964"),
                c = a("978679"),
                d = a("57940"),
                f = a("843455"),
                C = a("782340"),
                E = a("436752");
            let m = {
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
            var p = e => {
                let {
                    product: t,
                    returnRef: a,
                    onSuccess: p,
                    tooltipDelay: g,
                    isGiftEasterEggEnabled: h,
                    disableCustomColor: b = !1
                } = e, {
                    analyticsLocations: T
                } = (0, o.default)(), x = s.useRef(null), L = (0, n.default)(x), {
                    buttonColors: S
                } = (0, d.default)(t.categorySkuId), I = null == S || b ? void 0 : {
                    background: S.secondary.toHslString(),
                    color: S.text.toHslString()
                }, v = b || (null == S ? void 0 : S.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
                return (0, l.jsx)(r.Tooltip, {
                    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
                    delay: g,
                    children: e => (0, l.jsx)(r.Button, {
                        ...e,
                        buttonRef: x,
                        style: I,
                        className: E.giftButton,
                        color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                        look: r.Button.Looks.FILLED,
                        size: r.ButtonSizes.ICON,
                        innerClassName: E.giftButtonInner,
                        "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, u.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: T,
                                returnRef: a,
                                onClose: null != p ? e => {
                                    e && p()
                                } : void 0
                            })
                        },
                        children: h ? (0, l.jsx)(i.SeasonalGiftIcon, {
                            hovered: L,
                            isContentDismissed: !0,
                            themeOverride: v,
                            boxColors: m
                        }) : (0, l.jsx)(c.default, {
                            width: 24,
                            height: 24
                        })
                    })
                })
            }
        },
        43525: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                o = a("77078"),
                i = a("697218"),
                u = a("719923"),
                c = a("782340"),
                d = a("98881"),
                f = a("247329"),
                C = a("333838"),
                E = a("399637"),
                m = a("976076"),
                p = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([i.default], () => i.default.getCurrentUser()), s = u.default.canUseCollectibles(a);
                    return (0, l.jsxs)("div", {
                        className: r(d.heroBanner, {
                            [d.heroBannerNonPremium]: !s
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(d.heroDescription, {
                                [d.heroDescriptionWithSidebar]: !t
                            }),
                            children: [(0, l.jsx)(o.Heading, {
                                className: d.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: c.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(o.Text, {
                                className: d.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: c.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
                            })]
                        }), (0, l.jsx)("div", {
                            className: d.bannerBackgroundWrapper,
                            children: (0, l.jsx)("img", {
                                className: d.bannerBackground,
                                alt: "",
                                src: f
                            })
                        }), (0, l.jsx)("img", {
                            className: d.bannerForeground,
                            alt: "",
                            src: C
                        }), (0, l.jsx)("img", {
                            className: d.bannerHand,
                            alt: "",
                            src: E
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeTopSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallTopSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeRightSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallRightSparkle),
                            alt: "",
                            src: m
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
                o = a("782340"),
                i = a("60109"),
                u = a("200406"),
                c = a("283045"),
                d = a("718297"),
                f = a("929880"),
                C = function(e) {
                    let {
                        isFullScreen: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(i.heroBanner, t ? i.heroBannerFullScreen : i.heroBannerWithSidebar),
                        children: [(0, l.jsxs)("div", {
                            className: i.heroDescription,
                            children: [(0, l.jsx)(n.Heading, {
                                className: i.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(n.Text, {
                                className: i.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, l.jsxs)("div", {
                            className: i.bannerArt,
                            children: [(0, l.jsx)("img", {
                                className: i.bannerGrid,
                                alt: "",
                                src: u,
                                width: "484",
                                height: "402"
                            }), (0, l.jsx)("img", {
                                className: i.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, l.jsx)("img", {
                                className: i.bannerGridMedium,
                                alt: "",
                                src: c,
                                width: "178",
                                height: "106"
                            }), (0, l.jsx)("img", {
                                className: i.bannerHand,
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
                    return h
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                o = a("755854"),
                i = a("77078"),
                u = a("161778"),
                c = a("697218"),
                d = a("216422"),
                f = a("719923"),
                C = a("491232"),
                E = a("791309"),
                m = a("49111"),
                p = a("782340"),
                g = a("173046");

            function h(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: h = !0
                } = e, b = (0, n.default)([c.default], () => c.default.getCurrentUser()), T = (0, n.default)([u.default], () => (0, o.isThemeDark)(u.default.theme)), x = (0, C.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == x) return null;
                if (x.amount <= 0) return (0, l.jsx)("div", {
                    className: r(g.priceTagsContainer, a),
                    children: (0, l.jsx)(E.default, {
                        alwaysWhiteText: h,
                        price: x
                    })
                });
                let L = (0, C.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    S = !f.default.canUseCollectibles(b);
                return (0, l.jsxs)("div", {
                    className: r(g.priceTagsContainer, a),
                    children: [(0, l.jsx)(E.default, {
                        alwaysWhiteText: h,
                        price: x,
                        className: S ? void 0 : g.strikedPrice
                    }), null != L && (0, l.jsx)(E.default, {
                        price: L,
                        alwaysWhiteText: h,
                        renderPrice: S ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: S ? g.fullPrice : void 0,
                        variant: S ? "text-xs/semibold" : void 0,
                        icon: (0, l.jsx)(i.Tooltip, {
                            text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, l.jsx)(d.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: S
                                    }),
                                    color: h || T ? "white" : "black"
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
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("77078"),
                o = a("153160"),
                i = a("846367"),
                u = e => {
                    var t;
                    let {
                        price: {
                            amount: a,
                            currency: s
                        },
                        renderPrice: u,
                        icon: c,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, E = (0, o.formatPrice)(a, s);
                    return (0, l.jsxs)(n.Heading, {
                        variant: f,
                        color: C ? "always-white" : "none",
                        className: r(i.heading, d),
                        children: [c, null !== (t = null == u ? void 0 : u(E)) && void 0 !== t ? t : E]
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
                    return o
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
                        analyticsSource: o,
                        analyticsLocations: i,
                        returnRef: u
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("179047").then(a.bind(a, "179047"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            product: t,
                            category: n,
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: u
                        })
                    }, {
                        modalKey: r
                    })
                },
                o = () => {
                    (0, s.closeModal)(r)
                }
        },
        931262: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useCollectiblesShopRouting: function() {
                    return c
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var l, s, r = a("884691"),
                n = a("90915"),
                o = a("54239"),
                i = a("393414"),
                u = a("49111");

            function c() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), l = a.get("source"), s = null != l ? parseInt(l, 10) : null, c = r.useCallback(() => {
                    if (0 === s) {
                        (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
                        return
                    }
                    if ((0, i.currentRouteHasBackNavigation)()) {
                        (0, i.back)();
                        return
                    }(0, i.transitionTo)(u.Routes.APP)
                }, [s]);
                return {
                    onClose: c,
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
                o = a("927694"),
                i = a("395535"),
                u = a("492666");
            let c = () => 4 * Math.random() + 8,
                d = [c(), c(), c()];
            var f = () => (0, l.jsx)(l.Fragment, {
                children: d.map(e => (0, l.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, l.jsx)("div", {
                        className: r(u.skeleton, o.shopBanner),
                        children: (0, l.jsx)("div", {
                            className: u.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, l.jsx)("div", {
                        className: r(u.skeleton, i.shopCard),
                        children: (0, l.jsxs)("div", {
                            className: u.cardBody,
                            children: [(0, l.jsx)("div", {
                                className: u.cardAvatar
                            }), (0, l.jsx)("div", {
                                className: u.cardTitle
                            }), (0, l.jsx)("div", {
                                className: u.cardDescription
                            }), (0, l.jsx)("div", {
                                className: u.cardSummary
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
                    return Y
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("669491"),
                u = a("755854"),
                c = a("77078"),
                d = a("265586"),
                f = a("54239"),
                C = a("252744"),
                E = a("812204"),
                m = a("685665"),
                p = a("606292"),
                g = a("688318"),
                h = a("946964"),
                b = a("635956"),
                T = a("38766"),
                x = a("601095"),
                L = a("493390"),
                S = a("161778"),
                I = a("697218"),
                v = a("944441"),
                _ = a("462579"),
                N = a("216422"),
                A = a("956089"),
                k = a("50885"),
                F = a("21526"),
                O = a("775416"),
                y = a("491232"),
                R = a("342676"),
                j = a("450492"),
                B = a("920580"),
                P = a("54809"),
                D = a("264579"),
                M = a("57940"),
                w = a("646718"),
                H = a("782340"),
                U = a("216365");
            let W = k.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                G = c.AvatarSizes.SIZE_152,
                z = (0, p.getDecorationSizeForAvatarSize)(G),
                V = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...s
                    } = e;
                    return (0, l.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...s,
                        children: t
                    })
                },
                K = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(c.Button, {
                        color: c.ButtonColors.BRAND,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(U.previewButton, t),
                        innerClassName: U.previewButtonInner,
                        "aria-label": H.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(_.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var Y = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: _ = !1,
                    isGiftEasterEggEnabled: k
                } = e, {
                    analyticsLocations: Y
                } = (0, m.default)(E.default.COLLECTIBLES_SHOP_CARD), X = s.useRef(null), Z = (0, C.default)(X), [q, $] = s.useState(!1), J = Z || q, Q = (0, o.default)([I.default], () => I.default.getCurrentUser()), [ee] = t.items, {
                    avatarDecorationSrc: et,
                    eventHandlers: ea,
                    avatarPlaceholderSrc: el
                } = (0, g.default)({
                    user: Q,
                    avatarDecorationOverride: (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ee : void 0,
                    size: z,
                    animateOnHover: !J
                }), {
                    backgroundColors: es
                } = (0, M.default)(t.categorySkuId), er = (0, y.getFormattedPriceForCollectiblesProduct)(t, _), en = (0, y.isPremiumCollectiblesProduct)(t), eo = (0, y.isFreeCollectiblesProduct)(t), [ei, eu, ec] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.getPurchase(t.skuId), O.default.isClaiming === t.skuId, null != O.default.isClaiming && O.default.isClaiming !== t.skuId]), ed = (0, o.default)([S.default], () => (0, u.isThemeDark)(S.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = X;
                    if (null == e) return;
                    let t = () => $(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ef = (0, T.default)({
                        analyticsLocations: Y
                    }),
                    eC = s.useRef(null),
                    eE = () => {
                        if ((0, f.popLayer)(), ef(), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, p.openAvatarDecorationModal)({
                                initialSelectedDecoration: ee,
                                analyticsLocations: Y
                            });
                            return
                        }(null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
                            initialSelectedEffectId: ee.id,
                            analyticsLocations: Y
                        })
                    },
                    em = e => l => {
                        eC.current = l.currentTarget, (0, P.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: Y,
                            analyticsSource: e,
                            returnRef: eC
                        })
                    },
                    ep = em(E.default.COLLECTIBLES_SHOP_CARD),
                    eg = em(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eh = () => (0, l.jsx)("div", {
                        className: U.hoverUpsellContainer,
                        children: (0, l.jsx)(b.default, {
                            fullWidth: !0,
                            className: U.premiumSubscribeButton,
                            disabled: ec,
                            onClick: e => e.stopPropagation(),
                            buttonText: H.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(X)
                }, [r]);
                let eb = () => null != ei ? (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: U.priceTag,
                        children: H.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : en ? (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: U.priceTag,
                        children: H.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(B.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: U.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eT = () => en ? null : eo ? (0, l.jsx)(K, {
                        onClick: eg
                    }) : (0, l.jsx)(j.default, {
                        product: t,
                        returnRef: X,
                        isGiftEasterEggEnabled: k,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
                    ex = () => {
                        if (en && !_ && !eo) return eh();
                        let e = en ? {
                            submitting: eu,
                            submittingStartedLabel: H.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: H.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, D.default)({
                                    product: t,
                                    analyticsLocations: Y
                                })
                            }
                        } : {
                            onClick: () => (0, h.default)({
                                skuId: t.skuId,
                                analyticsLocations: Y,
                                returnRef: X
                            })
                        };
                        return (0, l.jsxs)("div", {
                            className: U.buttonsContainer,
                            children: [null == ei ? (0, l.jsx)(V, {
                                disabled: ec,
                                className: U.purchaseButton,
                                ...e,
                                children: en ? H.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: er
                                })
                            }) : (0, l.jsx)(V, {
                                disabled: ec,
                                onClick: eE,
                                children: H.default.Messages.COLLECTIBLES_USE_NOW
                            }), eT()]
                        })
                    },
                    eL = ed ? "0 0 15px 1px ".concat(i.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, l.jsx)(c.FocusRing, {
                    children: (0, l.jsxs)(c.Clickable, {
                        innerRef: X,
                        className: U.shopCard,
                        onBlur: () => $(!1),
                        onClick: ep,
                        style: null != es ? {
                            backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: J ? eL : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [en && (0, l.jsx)(c.Tooltip, {
                            tooltipContentClassName: U.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: H.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(A.TextBadge, {
                                ...e,
                                className: U.premiumWheelBadge,
                                text: (0, l.jsx)(N.default, {
                                    className: U.premiumWheel
                                })
                            })
                        }), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: U.profileEffectShopPreview,
                            children: (0, l.jsx)(x.default, {
                                isHovering: J,
                                profileEffectId: ee.id,
                                isPurchased: null != ei,
                                removeSetHeight: !0
                            })
                        }), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
                            className: U.avatarContainer,
                            children: (0, l.jsx)(W, {
                                ...ea,
                                avatarDecoration: et,
                                src: el,
                                className: n(U.avatar, {
                                    [U.avatarPurchased]: null != ei
                                }),
                                size: G,
                                "aria-label": H.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ei ? (0, l.jsx)("div", {
                            className: U.checkmarkWrapper,
                            children: (0, l.jsx)(v.default, {
                                width: 38,
                                height: 38,
                                className: U.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(U.cardText, {
                                [U.cardTextBlur]: (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(U.cardBackground, ed ? U.darkCardBackground : U.lightCardBackground, (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT ? U.cardLowOpacity : null)
                            }), (0, l.jsx)("div", {
                                className: U.productName,
                                children: _ && (0, l.jsx)(c.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: U.detailsWrapper,
                                children: [(0, l.jsx)(c.Text, {
                                    className: n(U.description, U.innerMask),
                                    variant: "text-md/normal",
                                    lineClamp: 3,
                                    children: t.summary
                                }), (0, l.jsx)("div", {
                                    className: U.innerBlur,
                                    children: eb()
                                }), (0, l.jsx)("div", {
                                    className: U.innerHover,
                                    children: ex()
                                })]
                            })]
                        }), (0, l.jsx)(R.default, {
                            category: a,
                            className: U.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        408381: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return s
                },
                getAssetSizeByHeight: function() {
                    return r
                },
                getLogoSize: function() {
                    return n
                },
                getBackgroundGradient: function() {
                    return o
                }
            });
            var l = a("547630");
            let s = 1060,
                r = e => e * (0, l.default)(),
                n = e => 3.8 * e,
                o = function(e) {
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
                        analyticsLocations: r
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("658756").then(a.bind(a, "658756"));
                        return a => (0, l.jsx)(e, {
                            product: t,
                            analyticsLocations: r,
                            ...a
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
                    return T
                }
            }), a("222007");
            var l = a("656280"),
                s = a.n(l),
                r = a("635058"),
                n = a("65597"),
                o = a("669491"),
                i = a("206230"),
                u = a("388491"),
                c = a("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                E = s(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                m = (e, t) => {
                    let a = e.toRgb(),
                        l = t.toRgb(),
                        [r, n, o] = (0, u.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
                    return s({
                        r,
                        g: n,
                        b: o
                    })
                },
                p = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = m(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        border: r.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = m(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        text: s(r.isLight() ? E : C)
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
                b = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: p("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: p("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: p("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: p("#732565", "#111D40"),
                        buttonColors: g(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: f
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: p("#5280DC", "#060F25"),
                        buttonColors: g("#496BDB", "#3E41B5"),
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: p("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: p("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [a("770704"), a("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [r.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: p("#00475E", "#002B39"),
                        buttonColors: g("#00E6B2", "#009B7C"),
                        confettiSprites: [a("330825"), a("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var T = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let a = b[e];
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
                o = a("55689"),
                i = a("21526"),
                u = a("599110"),
                c = a("49111");

            function d(e) {
                let {
                    skuId: t,
                    isGift: d = !1,
                    giftMessage: f,
                    onClose: C,
                    onComplete: E,
                    analyticsLocations: m,
                    analyticsObject: p
                } = e, g = !1, h = (0, s.v4)();
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
                            analyticsLocations: m,
                            onClose: e => {
                                s(), null == C || C(e)
                            },
                            onComplete: () => {
                                g = !0, null == E || E()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !g && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: h,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
                            location: p,
                            is_gift: !1,
                            location_stack: m
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(g), g && (0, i.fetchCollectiblesPurchases)()
                    },
                    onCloseRequest: c.NOOP
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
                o = a("859498"),
                i = a("635471"),
                u = a("825054"),
                c = a("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: a,
                        forCollectedModal: r = !1,
                        isPurchased: d,
                        removeSetHeight: f = !1
                    } = e, C = r ? 250 : .1, [E, m] = s.useState(!0);
                    return (s.useEffect(() => {
                        if (!0 !== r) m(!1);
                        else {
                            let e = setTimeout(() => {
                                m(!1)
                            }, C);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [C, r]), null != t) ? (0, l.jsxs)("div", {
                        className: n(u.previewContainer, {
                            [u.previewContainerAnimation]: r,
                            [u.previewContainerSetHeight]: !f
                        }),
                        children: [(0, l.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: r ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !E && (0, l.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, l.jsx)(i.default, {
                                profileEffectId: t,
                                useThumbnail: !0,
                                autoPlay: r,
                                restartMethod: o.RestartMethod.FromStart,
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
                    initialSelectedEffectId: r
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("889793").then(a.bind(a, "889793"));
                    return a => (0, l.jsx)(e, {
                        ...a,
                        initialSelectedEffectId: r,
                        analyticsLocations: t
                    })
                }, {})
            }
        },
        944441: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                r = a("237020"),
                n = a("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, n.default)(o),
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
                }, r.CheckmarkBoldIcon, void 0, {
                    size: 24
                })
        }
    }
]);