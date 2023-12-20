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
        237020: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CheckmarkBoldIcon: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("669491"),
                r = a("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
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
        235898: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var l = a("884691"),
                s = a("65597"),
                r = a("875212"),
                n = a("21526"),
                i = a("853987"),
                o = a("775416");

            function c() {
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
                    categories: c,
                    error: u
                } = function() {
                    let e = "useMaybeFetchCollectiblesCategories";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, a, o, c] = (0, s.useStateFromStoresArray)([i.default], () => {
                        var e;
                        return [i.default.isFetching, i.default.error, null !== (e = i.default.lastFetched) && void 0 !== e ? e : 0, i.default.categories]
                    });
                    return (0, l.useEffect)(() => {
                        !(t || a || Date.now() - o < 6e5) && (0, n.fetchCollectiblesCategories)()
                    }, [t, o, a]), {
                        isFetching: t,
                        categories: c,
                        error: a
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: C,
                    isFetching: m,
                    purchases: E
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, a, i, c, u] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, l.useEffect)(() => {
                        (0, n.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: a,
                        fetchError: i,
                        claimError: c,
                        isFetching: t,
                        purchases: u
                    }
                }(), g = null !== (e = null != u ? u : f) && void 0 !== e ? e : C;
                return {
                    isFetching: a || m,
                    isFetchingCategories: a,
                    isFetchingPurchases: m,
                    isClaiming: d,
                    categories: c,
                    purchases: E,
                    error: g
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
                    return el
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
                T = a("10641"),
                b = a("539938"),
                x = a("210721"),
                S = a("78345"),
                L = a("65324"),
                I = a("393414"),
                v = a("778588"),
                _ = a("697218"),
                N = a("764490"),
                A = a("29557"),
                O = a("599110"),
                R = a("719923"),
                F = a("439932"),
                j = a("21526"),
                k = a("853987"),
                y = a("805172"),
                B = a("216719"),
                P = a("702953"),
                D = a("235898"),
                M = a("296304"),
                w = a("334820"),
                H = a("89569"),
                U = a("419513"),
                W = a("434393"),
                G = a("571464"),
                z = a("43525"),
                V = a("798235"),
                K = a("931262"),
                Y = a("695824"),
                X = a("518907"),
                Z = a("594849"),
                q = a("368560"),
                $ = a("49111"),
                J = a("994428"),
                Q = a("646718"),
                ee = a("782340"),
                et = a("451594");

            function ea(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r,
                    initialItemCardRef: i,
                    isGiftEasterEggEnabled: u,
                    setIsGiftEasterEggEnabled: f,
                    showEasterEggToggle: C
                } = e, m = s.useRef(10 + 70 * Math.random()), E = k.default.getProductsByItemType(t.skuId), g = (0, w.usePurchasedProductsSort)(null != E && o.CollectiblesItemType.AVATAR_DECORATION in E ? E[o.CollectiblesItemType.AVATAR_DECORATION] : []), p = (0, w.usePurchasedProductsSort)(null != E && o.CollectiblesItemType.PROFILE_EFFECT in E ? E[o.CollectiblesItemType.PROFILE_EFFECT] : []), {
                    tallerCardsEnabled: h
                } = (0, P.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), T = (0, c.default)([B.default], () => B.default.initialProductSkuId), b = s.useCallback(e => t => {
                    e.skuId === T && (i.current = t.current)
                }, [T, i]);
                if (null == E || 0 === g.length) return null;
                let I = h ? X.default : W.default;
                return (0, l.jsxs)("div", {
                    className: et.categoryWrapper,
                    children: [C && (0, l.jsx)(d.Clickable, {
                        className: n(et.hiddenWumpus, {
                            [et.hiddenWumpusEnabled]: u
                        }),
                        onClick: () => f(!0),
                        style: {
                            left: "".concat(m.current, "%")
                        },
                        children: (0, l.jsx)(L.default, {
                            idleAnimationState: x.AnimationState.IDLE,
                            giftStyle: S.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(U.default, {
                        category: t,
                        className: h ? et.tallerShopCardBanner : void 0
                    }), g.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(d.Text, {
                            className: n(et.itemTypeTitle, {
                                [et.itemTypeTitleForTallerCard]: h
                            }),
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, l.jsx)("div", {
                            className: n(et.cardsContainer, h ? et.tallerShopCard : et.regularShopCard, a),
                            children: g.map(e => (0, l.jsx)(I, {
                                onMount: b(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: u
                            }, e.storeListingId))
                        })]
                    }), p.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            className: et.itemTypeTitleContainer,
                            children: (0, l.jsx)(d.Text, {
                                className: n(et.itemTypeTitle, {
                                    [et.itemTypeTitleForTallerCard]: h
                                }),
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: ee.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            })
                        }), (0, l.jsx)("div", {
                            className: n(et.cardsContainer, h ? et.tallerShopCard : et.regularShopCard, a),
                            children: p.map(e => (0, l.jsx)(I, {
                                onMount: b(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: u
                            }, e.storeListingId))
                        })]
                    })]
                })
            }
            var el = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([B.default], () => B.default.getAnalytics()), {
                    AnalyticsLocationProvider: x,
                    analyticsLocations: S
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), L = (0, c.default)([v.default], () => v.default.getLayers().includes($.Layers.COLLECTIBLES_SHOP)), {
                    source: k
                } = (0, K.useCollectiblesShopRouting)(), w = (0, c.default)([_.default], () => _.default.getCurrentUser()), U = R.default.canUseCollectibles(w), {
                    categories: W,
                    isFetchingCategories: X,
                    error: el
                } = (0, D.default)(), es = (0, M.usePurchasedCategoriesSort)(W), er = s.useRef(Math.random()), {
                    shopForAllEnabled: en,
                    marketingEnabled: ei
                } = (0, y.default)({
                    location: "CollectiblesShop"
                }), {
                    tallerCardsEnabled: eo
                } = (0, P.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), ec = s.useRef(null), [eu, ed] = s.useState(!1);
                (0, H.useProductDetailsDeepLinking)({
                    categories: W,
                    isFetchingCategories: X,
                    isLayer: L,
                    initialItemCardRef: ec
                });
                let {
                    sessionId: ef,
                    scrollerRef: eC,
                    scrollHandler: em
                } = (0, h.usePageScrollPosition)($.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                s.useEffect(() => {
                    O.default.track($.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: S,
                        source: a,
                        page_session_id: ef
                    }), !U && O.default.track($.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: S
                    })
                }, [U, S, a, ef]), s.useEffect(() => {
                    !(0, T.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: J.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, f.setHomeLink)($.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, j.setCollectiblesCategoryItemsViewed)({
                        categories: [...W.values()],
                        itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [W]);
                let eE = () => {
                        (0, j.fetchCollectiblesCategories)()
                    },
                    eg = (0, E.default)(),
                    ep = [...W.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === i.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, l.jsxs)(x, {
                    children: [(0, l.jsxs)("div", {
                        className: et.shop,
                        children: [t ? null : (0, l.jsxs)(b.default, {
                            className: n((0, F.getThemeClass)(eg), et.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(A.default, {
                                className: et.logo
                            }), (0, l.jsx)(b.default.Title, {
                                className: et.title,
                                children: ee.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, l.jsx)(d.AdvancedScroller, {
                            className: n(et.shopScroll, {
                                [et.shopScrollBackgroundPrimary]: eo
                            }),
                            ref: eC,
                            onScroll: em,
                            children: (0, l.jsxs)("div", {
                                className: n(et.pageWrapper, {
                                    [et.pageWrapperFullscreen]: t,
                                    [et.pageWrapperBackgroundPrimary]: eo
                                }),
                                children: [(0, l.jsxs)("main", {
                                    className: et.page,
                                    children: [t ? (0, l.jsx)(N.default, {
                                        title: ee.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, ei ? (0, l.jsx)(V.default, {
                                        isFullScreen: t
                                    }) : (0, l.jsx)(z.default, {
                                        isFullScreen: t
                                    }), en || U || null == ep ? null : (0, l.jsx)(Z.default, {
                                        category: ep
                                    }), X ? (0, l.jsx)(Y.default, {}) : el ? (0, l.jsx)(G.default, {
                                        onRetry: eE
                                    }) : (0, l.jsx)("div", {
                                        className: et.categories,
                                        children: es.map((e, t) => (0, l.jsx)(ea, {
                                            isPremiumUser: U,
                                            category: e,
                                            initialItemCardRef: ec,
                                            setIsGiftEasterEggEnabled: ed,
                                            isGiftEasterEggEnabled: eu,
                                            showEasterEggToggle: t === Math.floor(er.current * es.length)
                                        }, e.storeListingId))
                                    })]
                                }), t && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(m.default, {
                                        className: et.close,
                                        closeAction: () => {
                                            if (L) {
                                                (0, j.closeCollectiblesShop)();
                                                return
                                            }
                                            k === K.CollectiblesShopSourceParam.SETTINGS && ((0, I.back)(), (0, C.pushLayer)($.Layers.USER_SETTINGS)), 0 === (0, I.getHistory)().length ? (0, I.transitionTo)($.Routes.APP) : (0, I.back)()
                                        },
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), eu && (0, l.jsx)(q.default, {})]
                })
            }
        },
        419513: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("635058"),
                o = a("65597"),
                c = a("77078"),
                u = a("685665"),
                d = a("649844"),
                f = a("697218"),
                C = a("153769"),
                m = a("270227"),
                E = a("719923"),
                g = a("805172"),
                p = a("491232"),
                h = a("716120"),
                T = a("342676"),
                b = a("408381"),
                x = a("57940"),
                S = a("646718"),
                L = a("782340"),
                I = a("927694");
            let v = (0, b.getLogoSize)(96),
                _ = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, u.default)(), r = s.useRef(null), n = (0, o.default)([f.default], () => f.default.getCurrentUser()), {
                        shopForAllEnabled: i
                    } = (0, g.default)({
                        location: "DisxcoreSummary"
                    });
                    return !i || E.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(c.Clickable, {
                                innerRef: r,
                                className: I.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, l.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function N(e) {
                let {
                    category: t,
                    className: a
                } = e, {
                    backgroundColors: s
                } = (0, x.default)(t.skuId);
                return (0, l.jsxs)(h.default, {
                    asset: t.banner,
                    className: n(I.shopBanner, a),
                    style: null != s ? {
                        background: "".concat((0, b.getBackgroundGradient)(s), " border-box border-box"),
                        outlineColor: s.border.toHslString()
                    } : void 0,
                    children: [(0, l.jsxs)("div", {
                        className: I.discordLogo,
                        children: [(0, l.jsx)(C.default, {
                            className: I.discordIcon
                        }), (0, l.jsx)(m.default, {
                            className: I.discordWordmark
                        })]
                    }), (0, l.jsx)("img", {
                        className: I.categoryLogo,
                        src: (0, p.getCollectiblesAssetURL)(t.logo, {
                            size: v
                        }),
                        alt: t.name
                    }), (0, l.jsx)(c.Text, {
                        className: I.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, l.jsx)(T.default, {
                        category: t,
                        className: I.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }
        },
        434393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return X
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                i = a("65597"),
                o = a("77078"),
                c = a("265586"),
                u = a("54239"),
                d = a("252744"),
                f = a("812204"),
                C = a("685665"),
                m = a("606292"),
                E = a("688318"),
                g = a("946964"),
                p = a("635956"),
                h = a("38766"),
                T = a("662286"),
                b = a("601095"),
                x = a("493390"),
                S = a("697218"),
                L = a("944441"),
                I = a("462579"),
                v = a("216422"),
                _ = a("956089"),
                N = a("50885"),
                A = a("21526"),
                O = a("417313"),
                R = a("775416"),
                F = a("805172"),
                j = a("491232"),
                k = a("342676"),
                y = a("450492"),
                B = a("920580"),
                P = a("54809"),
                D = a("408381"),
                M = a("264579"),
                w = a("57940"),
                H = a("646718"),
                U = a("782340"),
                W = a("395535");
            let G = N.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar,
                z = o.AvatarSizes.SIZE_120,
                V = (0, m.getDecorationSizeForAvatarSize)(z),
                K = e => {
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
                Y = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(o.Button, {
                        color: o.ButtonColors.CUSTOM,
                        look: o.Button.Looks.FILLED,
                        size: o.ButtonSizes.ICON,
                        className: n(W.previewButton, t),
                        innerClassName: W.previewButtonInner,
                        "aria-label": U.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(I.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var X = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: I = !1,
                    isGiftEasterEggEnabled: N
                } = e, {
                    analyticsLocations: X
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), q = (0, d.default)(Z), [$, J] = s.useState(!1), Q = q || $, ee = (0, i.default)([S.default], () => S.default.getCurrentUser()), [et] = t.items, {
                    avatarDecorationSrc: ea,
                    eventHandlers: el,
                    avatarPlaceholderSrc: es
                } = (0, E.default)({
                    user: ee,
                    avatarDecorationOverride: (null == et ? void 0 : et.type) === c.CollectiblesItemType.AVATAR_DECORATION ? et : void 0,
                    size: V,
                    animateOnHover: !Q
                }), {
                    buttonColors: er,
                    backgroundColors: en
                } = (0, w.default)(t.categorySkuId), ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, I), eo = (0, j.isPremiumCollectiblesProduct)(t), ec = (0, j.isFreeCollectiblesProduct)(t), [eu, ed, ef] = (0, i.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, T.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: em
                } = (0, F.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eE
                } = (0, O.default)({
                    location: "CollectiblesShopCard"
                });
                s.useEffect(() => {
                    let {
                        current: e
                    } = Z;
                    if (null == e) return;
                    let t = () => J(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eg = (0, h.default)({
                        analyticsLocations: X
                    }),
                    ep = () => {
                        if ((0, u.popLayer)(), eg(), (null == et ? void 0 : et.type) === c.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, m.openAvatarDecorationModal)({
                                initialSelectedDecoration: et,
                                analyticsLocations: X
                            });
                            return
                        }(null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
                            initialSelectedEffectId: et.id,
                            analyticsLocations: X
                        })
                    },
                    eh = e => () => {
                        (0, P.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: X,
                            analyticsSource: e
                        })
                    },
                    eT = eh(f.default.COLLECTIBLES_SHOP_CARD),
                    eb = eh(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    ex = () => (0, l.jsxs)("div", {
                        className: W.hoverUpsellContainer,
                        children: [!em && (0, l.jsx)(o.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: W.description,
                            children: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT ? U.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : U.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsx)(p.default, {
                            fullWidth: !0,
                            className: W.premiumSubscribeButton,
                            disabled: ef,
                            onClick: e => e.stopPropagation(),
                            buttonText: em ? U.default.Messages.UNLOCK_WITH_NITRO : U.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2
                        })]
                    });
                s.useEffect(() => {
                    null == r || r(Z)
                }, [r]);
                let eS = () => null != eu ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eo ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(B.default, {
                        product: t,
                        className: W.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eL = () => eo ? null : eE && !ec ? (0, l.jsx)(y.default, {
                        product: t,
                        returnRef: Z,
                        isGiftEasterEggEnabled: N,
                        tooltipDelay: 250
                    }) : (0, l.jsx)(Y, {
                        style: null != er ? {
                            background: er.secondary.toHslString(),
                            color: er.text.toHslString()
                        } : void 0,
                        className: W.defaultPreviewButtonColor,
                        onClick: eb
                    }),
                    eI = () => {
                        if (em && eo && !I && !ec || !I && !em && !ec && null == eu) return ex();
                        let e = null != er ? {
                                background: (0, D.getBackgroundGradient)(er, 90),
                                color: er.text.toHslString()
                            } : void 0,
                            a = eo ? {
                                submitting: ed,
                                submittingStartedLabel: U.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: U.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, M.default)({
                                        product: t,
                                        analyticsLocations: X
                                    })
                                }
                            } : {
                                onClick: () => (0, g.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: X,
                                    returnRef: Z
                                })
                            };
                        return (0, l.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [null == eu ? (0, l.jsx)(K, {
                                style: e,
                                disabled: ef,
                                className: W.purchaseButton,
                                ...a,
                                children: eo ? U.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ei
                                })
                            }) : (0, l.jsx)(K, {
                                style: e,
                                disabled: ef,
                                onClick: ep,
                                children: U.default.Messages.COLLECTIBLES_USE_NOW
                            }), eL()]
                        })
                    };
                if (!1 === eC) return null;
                let ev = null != en ? {
                    background: "".concat((0, D.getBackgroundGradient)(en), " border-box border-box"),
                    borderColor: en.border.toHslString(),
                    boxShadow: Q ? "0 0 25px 1px ".concat(en.primary.toHslString()) : "none"
                } : void 0;
                return (0, l.jsx)(o.FocusRing, {
                    children: (0, l.jsxs)(o.Clickable, {
                        innerRef: Z,
                        className: W.shopCard,
                        onBlur: () => J(!1),
                        onClick: eT,
                        style: ev,
                        id: "shop-item-".concat(t.skuId),
                        children: [eo && (0, l.jsx)(o.Tooltip, {
                            tooltipContentClassName: W.premiumWheelTooltipContent,
                            color: o.Tooltip.Colors.PRIMARY,
                            text: U.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(_.TextBadge, {
                                ...e,
                                className: W.premiumWheelBadge,
                                text: (0, l.jsx)(v.default, {
                                    className: W.premiumWheel
                                })
                            })
                        }), (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: W.profileEffectShopPreview,
                            children: (0, l.jsx)(b.default, {
                                isHovering: Q,
                                profileEffectId: et.id,
                                isPurchased: null != eu
                            })
                        }), (null == et ? void 0 : et.type) === c.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(G, {
                            ...el,
                            avatarDecoration: ea,
                            src: es,
                            className: n(W.avatar, {
                                [W.avatarPurchased]: null != eu
                            }),
                            size: z,
                            "aria-label": U.default.Messages.USER_SETTINGS_AVATAR
                        }), null != eu ? (0, l.jsx)("div", {
                            className: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT ? W.profileEffectCheckmarkWrapper : W.checkmarkWrapper,
                            children: (0, l.jsx)(L.default, {
                                width: 38,
                                height: 38,
                                className: W.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(W.cardText, {
                                [W.cardTextProfileEffect]: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: W.productName,
                                children: (I || em) && (0, l.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: W.detailsWrapper,
                                children: [(0, l.jsxs)("div", {
                                    className: W.innerBlur,
                                    children: [!I && !em && (0, l.jsx)(o.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, l.jsx)(o.Text, {
                                        color: "always-white",
                                        className: W.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eS()]
                                }), (0, l.jsx)("div", {
                                    className: W.innerHover,
                                    children: eI()
                                })]
                            })]
                        }), (0, l.jsx)(k.default, {
                            category: a,
                            className: W.limitedTimeBadge,
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
                    return g
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("77078"),
                n = a("252744"),
                i = a("685665"),
                o = a("108486"),
                c = a("946964"),
                u = a("978679"),
                d = a("57940"),
                f = a("843455"),
                C = a("782340"),
                m = a("436752");
            let E = {
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
            var g = e => {
                let {
                    product: t,
                    returnRef: a,
                    onSuccess: g,
                    tooltipDelay: p,
                    isGiftEasterEggEnabled: h,
                    disableCustomColor: T = !1
                } = e, {
                    analyticsLocations: b
                } = (0, i.default)(), x = s.useRef(null), S = (0, n.default)(x), {
                    buttonColors: L
                } = (0, d.default)(t.categorySkuId), I = null == L || T ? void 0 : {
                    background: L.secondary.toHslString(),
                    color: L.text.toHslString()
                }, v = T || (null == L ? void 0 : L.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
                return (0, l.jsx)(r.Tooltip, {
                    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
                    delay: p,
                    children: e => (0, l.jsx)(r.Button, {
                        ...e,
                        buttonRef: x,
                        style: I,
                        className: m.giftButton,
                        color: T ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                        look: r.Button.Looks.FILLED,
                        size: r.ButtonSizes.ICON,
                        innerClassName: m.giftButtonInner,
                        "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, c.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: b,
                                returnRef: a,
                                onClose: null != g ? e => {
                                    e && g()
                                } : void 0
                            })
                        },
                        children: h ? (0, l.jsx)(o.SeasonalGiftIcon, {
                            hovered: S,
                            isContentDismissed: !0,
                            themeOverride: v,
                            boxColors: E
                        }) : (0, l.jsx)(u.default, {
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
                    return b
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
                T = a("976076"),
                b = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), s = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: b
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), x = b && !s;
                    return (0, l.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: x
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!x && (0, l.jsxs)(i.Text, {
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
                                children: b ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), b || s ? null : (0, l.jsx)(o.default, {
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
                            src: T
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallTopSparkle),
                            alt: "",
                            src: T
                        }), (0, l.jsx)("img", {
                            className: r(E.largeSparkle, E.largeLeftSparkle),
                            alt: "",
                            src: T
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallLeftSparkle),
                            alt: "",
                            src: T
                        }), (0, l.jsx)("img", {
                            className: r(E.largeSparkle, E.largeRightSparkle),
                            alt: "",
                            src: T
                        }), (0, l.jsx)("img", {
                            className: r(E.smallSparkle, E.smallRightSparkle),
                            alt: "",
                            src: T
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
                    return T
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

            function T(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: T = !0
                } = e, b = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                    shopForAllEnabled: x
                } = (0, C.default)({
                    location: "CollectiblesPriceTag"
                }), S = (0, n.default)([c.default], () => (0, i.isThemeDark)(c.default.theme)), L = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == L) return null;
                if (L.amount <= 0) return (0, l.jsx)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: (0, l.jsx)(E.default, {
                        alwaysWhiteText: T,
                        price: L
                    })
                });
                let I = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    v = !f.default.canUseCollectibles(b) && x;
                return (0, l.jsxs)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: [(0, l.jsx)(E.default, {
                        alwaysWhiteText: T,
                        price: L,
                        className: v ? void 0 : h.strikedPrice
                    }), null != I && (0, l.jsx)(E.default, {
                        price: I,
                        alwaysWhiteText: T,
                        renderPrice: v ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: v ? h.fullPrice : void 0,
                        variant: v ? "text-xs/semibold" : void 0,
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
                                        [h.fullPrice]: v
                                    }),
                                    color: T || S ? "white" : "black"
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
                    return q
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
                d = a("265586"),
                f = a("54239"),
                C = a("252744"),
                m = a("812204"),
                E = a("685665"),
                g = a("606292"),
                p = a("688318"),
                h = a("946964"),
                T = a("635956"),
                b = a("38766"),
                x = a("662286"),
                S = a("601095"),
                L = a("493390"),
                I = a("161778"),
                v = a("697218"),
                _ = a("944441"),
                N = a("462579"),
                A = a("216422"),
                O = a("956089"),
                R = a("50885"),
                F = a("21526"),
                j = a("417313"),
                k = a("775416"),
                y = a("805172"),
                B = a("491232"),
                P = a("342676"),
                D = a("450492"),
                M = a("920580"),
                w = a("54809"),
                H = a("264579"),
                U = a("57940"),
                W = a("646718"),
                G = a("782340"),
                z = a("216365");
            let V = R.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
                K = u.AvatarSizes.SIZE_152,
                Y = (0, g.getDecorationSizeForAvatarSize)(K),
                X = e => {
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
                Z = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(u.Button, {
                        color: u.ButtonColors.BRAND,
                        look: u.Button.Looks.FILLED,
                        size: u.ButtonSizes.ICON,
                        className: n(z.previewButton, t),
                        innerClassName: z.previewButtonInner,
                        "aria-label": G.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(N.default, {
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
                    isPremiumUser: N = !1,
                    isGiftEasterEggEnabled: R
                } = e, {
                    analyticsLocations: q
                } = (0, E.default)(m.default.COLLECTIBLES_SHOP_CARD), $ = s.useRef(null), J = (0, C.default)($), [Q, ee] = s.useState(!1), et = J || Q, ea = (0, i.default)([v.default], () => v.default.getCurrentUser()), [el] = t.items, {
                    avatarDecorationSrc: es,
                    eventHandlers: er,
                    avatarPlaceholderSrc: en
                } = (0, p.default)({
                    user: ea,
                    avatarDecorationOverride: (null == el ? void 0 : el.type) === d.CollectiblesItemType.AVATAR_DECORATION ? el : void 0,
                    size: Y,
                    animateOnHover: !et
                }), {
                    backgroundColors: ei
                } = (0, U.default)(t.categorySkuId), eo = (0, B.getFormattedPriceForCollectiblesProduct)(t, N), ec = (0, B.isPremiumCollectiblesProduct)(t), eu = (0, B.isFreeCollectiblesProduct)(t), [ed, ef, eC] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), em = (0, x.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eE
                } = (0, y.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eg
                } = (0, j.default)({
                    location: "CollectiblesShopCard"
                }), ep = (0, i.default)([I.default], () => (0, c.isThemeDark)(I.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = $;
                    if (null == e) return;
                    let t = () => ee(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eh = (0, b.default)({
                        analyticsLocations: q
                    }),
                    eT = () => {
                        if ((0, f.popLayer)(), eh(), (null == el ? void 0 : el.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, g.openAvatarDecorationModal)({
                                initialSelectedDecoration: el,
                                analyticsLocations: q
                            });
                            return
                        }(null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
                            initialSelectedEffectId: el.id,
                            analyticsLocations: q
                        })
                    },
                    eb = e => () => {
                        (0, w.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: q,
                            analyticsSource: e
                        })
                    },
                    ex = eb(m.default.COLLECTIBLES_SHOP_CARD),
                    eS = eb(m.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eL = () => (0, l.jsxs)("div", {
                        className: z.hoverUpsellContainer,
                        children: [!eE && (0, l.jsx)(u.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: z.description,
                            children: (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT ? G.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsx)(T.default, {
                            fullWidth: !0,
                            className: z.premiumSubscribeButton,
                            disabled: eC,
                            onClick: e => e.stopPropagation(),
                            buttonText: eE ? G.default.Messages.UNLOCK_WITH_NITRO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                            subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
                        })]
                    });
                s.useEffect(() => {
                    null == r || r($)
                }, [r]);
                let eI = () => null != ed ? (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : ec ? (0, l.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(M.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: z.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    ev = () => ec ? null : eg && !eu ? (0, l.jsx)(D.default, {
                        product: t,
                        returnRef: $,
                        isGiftEasterEggEnabled: R,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }) : (0, l.jsx)(Z, {
                        onClick: eS
                    }),
                    e_ = () => {
                        if (eE && ec && !N && !eu || !N && !eE && !eu && null == ed) return eL();
                        let e = ec ? {
                            submitting: ef,
                            submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, H.default)({
                                    product: t,
                                    analyticsLocations: q
                                })
                            }
                        } : {
                            onClick: () => (0, h.default)({
                                skuId: t.skuId,
                                analyticsLocations: q,
                                returnRef: $
                            })
                        };
                        return (0, l.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [null == ed ? (0, l.jsx)(X, {
                                disabled: eC,
                                className: z.purchaseButton,
                                ...e,
                                children: ec ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: eo
                                })
                            }) : (0, l.jsx)(X, {
                                disabled: eC,
                                onClick: eT,
                                children: G.default.Messages.COLLECTIBLES_USE_NOW
                            }), ev()]
                        })
                    };
                if (!1 === em) return null;
                let eN = ep ? "0 0 15px 1px ".concat(o.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, l.jsx)(u.FocusRing, {
                    children: (0, l.jsxs)(u.Clickable, {
                        innerRef: $,
                        className: z.shopCard,
                        onBlur: () => ee(!1),
                        onClick: ex,
                        style: null != ei ? {
                            backgroundColor: ep ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: et ? eN : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [ec && (0, l.jsx)(u.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: u.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(O.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, l.jsx)(A.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, l.jsx)(S.default, {
                                isHovering: et,
                                profileEffectId: el.id,
                                isPurchased: null != ed,
                                removeSetHeight: !0
                            })
                        }), (null == el ? void 0 : el.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
                            className: z.avatarContainer,
                            children: (0, l.jsx)(V, {
                                ...er,
                                avatarDecoration: es,
                                src: en,
                                className: n(z.avatar, {
                                    [z.avatarPurchased]: null != ed
                                }),
                                size: K,
                                "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ed ? (0, l.jsx)("div", {
                            className: z.checkmarkWrapper,
                            children: (0, l.jsx)(_.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextBlur]: (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(z.cardBackground, ep ? z.darkCardBackground : z.lightCardBackground, (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
                            }), (0, l.jsx)("div", {
                                className: z.productName,
                                children: (N || eE) && (0, l.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: z.detailsWrapper,
                                children: [!N && !eE && (0, l.jsx)(u.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                }), (0, l.jsx)(u.Text, {
                                    className: n(z.description, z.innerMask),
                                    variant: "text-md/normal",
                                    lineClamp: 3,
                                    children: t.summary
                                }), (0, l.jsx)("div", {
                                    className: z.innerBlur,
                                    children: eI()
                                }), (0, l.jsx)("div", {
                                    className: z.innerHover,
                                    children: e_()
                                })]
                            })]
                        }), (0, l.jsx)(P.default, {
                            category: a,
                            className: z.limitedTimeBadge,
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
            }), a("222007");
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
                T = a("408381"),
                b = a("57940"),
                x = a("646718"),
                S = a("782340"),
                L = a("601664"),
                I = a("725015");
            let v = n.AvatarSizes.SIZE_120,
                _ = (0, T.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: A
                } = e, {
                    analyticsLocations: O
                } = (0, o.default)(), {
                    backgroundColors: R
                } = (0, b.default)(A.skuId), F = (0, r.default)([f.default], () => f.default.getCurrentUser()), j = s.useRef(null), k = (0, i.default)(j), y = {
                    size: (0, c.getDecorationSizeForAvatarSize)(v),
                    animateOnHover: !k
                }, B = A.products.map(e => {
                    let [t] = e.items;
                    return {
                        user: F,
                        avatarDecorationOverride: (0, p.isAvatarDecorationRecord)(t) ? t : null,
                        ...y
                    }
                }), {
                    avatarDecorationSrc: P
                } = (0, u.default)(null !== (t = B[1]) && void 0 !== t ? t : y), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (a = B[0]) && void 0 !== a ? a : y), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = B[2]) && void 0 !== N ? N : y);
                return (0, l.jsxs)("div", {
                    ref: j,
                    className: L.bannerCard,
                    children: [(0, l.jsx)(h.default, {
                        asset: A.banner,
                        className: L.bannerBackground,
                        style: null != R ? {
                            background: (0, T.getBackgroundGradient)(R)
                        } : void 0
                    }), (0, l.jsxs)("div", {
                        className: L.contentSection,
                        children: [(0, l.jsxs)("div", {
                            className: L.discordLogo,
                            children: [(0, l.jsx)(C.default, {
                                className: L.discordIcon
                            }), (0, l.jsx)(m.default, {
                                className: L.discordWordmark
                            })]
                        }), (0, l.jsx)("img", {
                            className: L.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(A.logo, {
                                size: _
                            }),
                            alt: A.name
                        }), (0, l.jsx)(n.Text, {
                            color: "always-white",
                            className: L.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: S.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, l.jsx)(n.Clickable, {
                                    className: L.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: O,
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2
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
                        className: L.decoSection,
                        children: [(0, l.jsx)("div", {
                            className: L.pinkInterface,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: P,
                                "aria-label": S.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: v
                            })
                        }), (0, l.jsx)("div", {
                            className: L.blueHeadset,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": S.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: v
                            })
                        }), (0, l.jsx)("div", {
                            className: L.greenSmoke,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": S.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: v
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: L.badge,
                        children: (0, l.jsx)(E.default, {
                            className: L.premiumIcon
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
                getAssetSizeByHeight: function() {
                    return r
                },
                getLogoSize: function() {
                    return n
                },
                getBackgroundGradient: function() {
                    return i
                }
            });
            var l = a("547630");
            let s = 1060,
                r = e => e * (0, l.default)(),
                n = e => 3.8 * e,
                i = function(e) {
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
                    return b
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
                T = {
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
            var b = e => {
                let t = (0, n.default)([o.default], () => o.default.saturation);
                if (null == e) return {};
                let a = T[e];
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
                                profileEffectId: t,
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
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                r = a("237020"),
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
                }, r.CheckmarkBoldIcon, void 0, {
                    size: 24
                })
        }
    }
]);