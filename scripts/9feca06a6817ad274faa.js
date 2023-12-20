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
                    return p
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
                p = e => {
                    let {
                        categories: t,
                        isFetchingCategories: a,
                        isLayer: c,
                        initialItemCardRef: d
                    } = e, C = l.useRef(null), m = (0, s.useLocation)(), p = m.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: g
                    } = (0, i.default)(p);
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
                    }, [c, g, p, t, a, h, d])
                }
        },
        342676: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
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
            var p = e => {
                let {
                    category: t,
                    display: a,
                    className: l
                } = e, s = (0, c.default)([u.default], () => u.default.getCurrentUser()), n = f.default.canUseCollectibles(s), {
                    shopForAllEnabled: p
                } = (0, C.default)({
                    location: "CollectiblesLimitedTimeBadge"
                });
                if (!n && !p || null == t.unpublishedAt) return null;
                let g = function(e) {
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
                return (0, o.match)([a, g > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: g
                    });
                    return h(e)
                }).with(["modal", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: g
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
                    return er
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
                p = a("812204"),
                g = a("685665"),
                h = a("481120"),
                T = a("10641"),
                L = a("539938"),
                S = a("210721"),
                x = a("78345"),
                b = a("65324"),
                I = a("393414"),
                _ = a("778588"),
                v = a("697218"),
                N = a("764490"),
                O = a("29557"),
                A = a("599110"),
                R = a("719923"),
                j = a("439932"),
                F = a("21526"),
                y = a("853987"),
                B = a("805172"),
                k = a("216719"),
                P = a("702953"),
                D = a("491232"),
                M = a("235898"),
                w = a("296304"),
                H = a("334820"),
                U = a("89569"),
                W = a("419513"),
                G = a("434393"),
                z = a("571464"),
                V = a("43525"),
                Y = a("798235"),
                K = a("931262"),
                X = a("695824"),
                Z = a("518907"),
                q = a("594849"),
                $ = a("368560"),
                J = a("49111"),
                Q = a("994428"),
                ee = a("646718"),
                et = a("782340"),
                ea = a("451594");
            let el = [u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_INTERACTIVE_MODAL_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_ACCOUNT_POPOUT_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_NITRO_ONLY_COACHMARK, u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK];

            function es(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r,
                    initialItemCardRef: i,
                    isGiftEasterEggEnabled: u,
                    setIsGiftEasterEggEnabled: f,
                    showEasterEggToggle: C
                } = e, m = s.useRef(10 + 70 * Math.random()), E = y.default.getProductsByItemType(t.skuId), p = (0, H.usePurchasedProductsSort)(null != E && o.CollectiblesItemType.AVATAR_DECORATION in E ? E[o.CollectiblesItemType.AVATAR_DECORATION] : []), g = (0, H.usePurchasedProductsSort)(null != E && o.CollectiblesItemType.PROFILE_EFFECT in E ? E[o.CollectiblesItemType.PROFILE_EFFECT] : []), {
                    tallerCardsEnabled: h
                } = (0, P.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), T = (0, c.default)([k.default], () => k.default.initialProductSkuId), L = s.useCallback(e => t => {
                    e.skuId === T && (i.current = t.current)
                }, [T, i]);
                if (null == E || 0 === p.length) return null;
                let I = h ? Z.default : G.default;
                return (0, l.jsxs)("div", {
                    className: ea.categoryWrapper,
                    children: [C && (0, l.jsx)(d.Clickable, {
                        className: n(ea.hiddenWumpus, {
                            [ea.hiddenWumpusEnabled]: u
                        }),
                        onClick: () => f(!0),
                        style: {
                            left: "".concat(m.current, "%")
                        },
                        children: (0, l.jsx)(b.default, {
                            idleAnimationState: S.AnimationState.IDLE,
                            giftStyle: x.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(W.default, {
                        category: t,
                        className: h ? ea.tallerShopCardBanner : void 0
                    }), p.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(d.Text, {
                            className: n(ea.itemTypeTitle, {
                                [ea.itemTypeTitleForTallerCard]: h
                            }),
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, l.jsx)("div", {
                            className: n(ea.cardsContainer, h ? ea.tallerShopCard : ea.regularShopCard, a),
                            children: p.map(e => (0, l.jsx)(I, {
                                onMount: L(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: u
                            }, e.storeListingId))
                        })]
                    }), g.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            className: ea.itemTypeTitleContainer,
                            children: (0, l.jsx)(d.Text, {
                                className: n(ea.itemTypeTitle, {
                                    [ea.itemTypeTitleForTallerCard]: h
                                }),
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            })
                        }), (0, l.jsx)("div", {
                            className: n(ea.cardsContainer, h ? ea.tallerShopCard : ea.regularShopCard, a),
                            children: g.map(e => (0, l.jsx)(I, {
                                onMount: L(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: u
                            }, e.storeListingId))
                        })]
                    })]
                })
            }
            var er = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([k.default], () => k.default.getAnalytics()), {
                    AnalyticsLocationProvider: u,
                    analyticsLocations: S
                } = (0, g.default)([...r, p.default.COLLECTIBLES_SHOP]), x = (0, c.default)([_.default], () => _.default.getLayers().includes(J.Layers.COLLECTIBLES_SHOP)), {
                    source: b
                } = (0, K.useCollectiblesShopRouting)(), y = (0, c.default)([v.default], () => v.default.getCurrentUser()), H = R.default.canUseCollectibles(y), {
                    categories: W,
                    isFetchingCategories: G,
                    error: Z
                } = (0, M.default)(), er = (0, w.usePurchasedCategoriesSort)(W), en = s.useRef(Math.random()), {
                    shopForAllEnabled: ei,
                    marketingEnabled: eo
                } = (0, B.default)({
                    location: "CollectiblesShop"
                }), {
                    tallerCardsEnabled: ec
                } = (0, P.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), eu = s.useRef(null), [ed, ef] = s.useState(!1);
                (0, U.useProductDetailsDeepLinking)({
                    categories: W,
                    isFetchingCategories: G,
                    isLayer: x,
                    initialItemCardRef: eu
                });
                let {
                    sessionId: eC,
                    scrollerRef: em,
                    scrollHandler: eE
                } = (0, h.usePageScrollPosition)(J.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                s.useEffect(() => {
                    A.default.track(J.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: S,
                        source: a,
                        page_session_id: eC
                    }), !H && A.default.track(J.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: S
                    })
                }, [H, S, a, eC]), s.useEffect(() => {
                    el.forEach(e => {
                        !(0, T.isDismissibleContentDismissed)(e) && (0, T.markDismissibleContentAsDismissed)(e, {
                            dismissAction: Q.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), s.useEffect(() => {
                    !t && (0, f.setHomeLink)(J.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, F.setCollectiblesCategoryItemsViewed)({
                        categories: [...W.values()],
                        itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [W]);
                let ep = () => {
                        (0, F.fetchCollectiblesCategories)()
                    },
                    eg = (0, E.default)(),
                    eh = [...W.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === i.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, l.jsxs)(u, {
                    children: [(0, l.jsxs)("div", {
                        className: ea.shop,
                        children: [t ? null : (0, l.jsxs)(L.default, {
                            className: n((0, j.getThemeClass)(eg), ea.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(O.default, {
                                className: ea.logo
                            }), (0, l.jsx)(L.default.Title, {
                                className: ea.title,
                                children: et.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, l.jsx)(d.AdvancedScroller, {
                            className: n(ea.shopScroll, {
                                [ea.shopScrollBackgroundPrimary]: ec
                            }),
                            ref: em,
                            onScroll: eE,
                            children: (0, l.jsxs)("div", {
                                className: n(ea.pageWrapper, {
                                    [ea.pageWrapperFullscreen]: t,
                                    [ea.pageWrapperBackgroundPrimary]: ec
                                }),
                                children: [(0, l.jsxs)("main", {
                                    className: ea.page,
                                    children: [t ? (0, l.jsx)(N.default, {
                                        title: et.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, eo ? (0, l.jsx)(Y.default, {
                                        isFullScreen: t
                                    }) : (0, l.jsx)(V.default, {
                                        isFullScreen: t
                                    }), ei || H || null == eh ? null : (0, l.jsx)(q.default, {
                                        category: eh
                                    }), G ? (0, l.jsx)(X.default, {}) : Z ? (0, l.jsx)(z.default, {
                                        onRetry: ep
                                    }) : (0, l.jsx)("div", {
                                        className: ea.categories,
                                        children: er.map((e, t) => !(0, D.isPremiumCollectiblesCategory)(e) || ei || H ? (0, l.jsx)(es, {
                                            isPremiumUser: H,
                                            category: e,
                                            initialItemCardRef: eu,
                                            setIsGiftEasterEggEnabled: ef,
                                            isGiftEasterEggEnabled: ed,
                                            showEasterEggToggle: t === Math.floor(en.current * er.length)
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(m.default, {
                                        className: ea.close,
                                        closeAction: () => {
                                            if (x) {
                                                (0, F.closeCollectiblesShop)();
                                                return
                                            }
                                            b === K.CollectiblesShopSourceParam.SETTINGS && ((0, I.back)(), (0, C.pushLayer)(J.Layers.USER_SETTINGS)), 0 === (0, I.getHistory)().length ? (0, I.transitionTo)(J.Routes.APP) : (0, I.back)()
                                        },
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), ed && (0, l.jsx)($.default, {})]
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
                p = a("805172"),
                g = a("491232"),
                h = a("716120"),
                T = a("342676"),
                L = a("408381"),
                S = a("57940"),
                x = a("646718"),
                b = a("782340"),
                I = a("927694");
            let _ = (0, L.getLogoSize)(96),
                v = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, u.default)(), r = s.useRef(null), n = (0, o.default)([f.default], () => f.default.getCurrentUser()), {
                        shopForAllEnabled: i
                    } = (0, p.default)({
                        location: "DisxcoreSummary"
                    });
                    return !i || E.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: b.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(c.Clickable, {
                                innerRef: r,
                                className: I.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
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
                } = (0, S.default)(t);
                return (0, l.jsxs)(h.default, {
                    asset: t.banner,
                    className: n(I.shopBanner, a),
                    style: null != s ? {
                        background: "".concat((0, L.getBackgroundGradient)(s), " border-box border-box"),
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
                        src: (0, g.getCollectiblesAssetURL)(t.logo, {
                            size: _
                        }),
                        alt: t.name
                    }), (0, l.jsx)(c.Text, {
                        className: I.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(v, {
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
                p = a("946964"),
                g = a("635956"),
                h = a("38766"),
                T = a("662286"),
                L = a("601095"),
                S = a("493390"),
                x = a("697218"),
                b = a("944441"),
                I = a("462579"),
                _ = a("216422"),
                v = a("956089"),
                N = a("50885"),
                O = a("21526"),
                A = a("417313"),
                R = a("775416"),
                j = a("805172"),
                F = a("491232"),
                y = a("342676"),
                B = a("450492"),
                k = a("920580"),
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
                K = e => {
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
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), q = (0, d.default)(Z), [$, J] = s.useState(!1), Q = q || $, ee = (0, i.default)([x.default], () => x.default.getCurrentUser()), [et] = t.items, {
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
                } = (0, w.default)(a), ei = (0, F.getFormattedPriceForCollectiblesProduct)(t, I), eo = (0, F.isPremiumCollectiblesCategory)(a), ec = (0, F.isFreeCollectiblesProduct)(t), [eu, ed, ef] = (0, i.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, T.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: em
                } = (0, j.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eE
                } = (0, A.default)({
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
                let ep = (0, h.default)({
                        analyticsLocations: X
                    }),
                    eg = () => {
                        if ((0, u.popLayer)(), ep(), (null == et ? void 0 : et.type) === c.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, m.openAvatarDecorationModal)({
                                initialSelectedDecoration: et,
                                analyticsLocations: X
                            });
                            return
                        }(null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
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
                    eL = eh(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eS = () => (0, l.jsxs)("div", {
                        className: W.hoverUpsellContainer,
                        children: [!em && (0, l.jsx)(o.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: W.description,
                            children: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT ? U.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : U.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsx)(g.default, {
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
                let ex = () => null != eu ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eo ? (0, l.jsx)(o.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(k.default, {
                        product: t,
                        className: W.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eb = () => eo ? null : eE && !ec ? (0, l.jsx)(B.default, {
                        product: t,
                        returnRef: Z,
                        isGiftEasterEggEnabled: N,
                        tooltipDelay: 250
                    }) : (0, l.jsx)(K, {
                        style: null != er ? {
                            background: er.secondary.toHslString(),
                            color: er.text.toHslString()
                        } : void 0,
                        className: W.defaultPreviewButtonColor,
                        onClick: eL
                    }),
                    eI = () => {
                        if (em && eo && !I && !ec || !I && !em && !ec && null == eu) return eS();
                        let e = null != er ? {
                                background: (0, D.getBackgroundGradient)(er, 90),
                                color: er.text.toHslString()
                            } : void 0,
                            s = eo ? {
                                submitting: ed,
                                submittingStartedLabel: U.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: U.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, M.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: X
                                    })
                                }
                            } : {
                                onClick: () => (0, p.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: X,
                                    returnRef: Z
                                })
                            };
                        return (0, l.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [null == eu ? (0, l.jsx)(Y, {
                                style: e,
                                disabled: ef,
                                className: W.purchaseButton,
                                ...s,
                                children: eo ? U.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ei
                                })
                            }) : (0, l.jsx)(Y, {
                                style: e,
                                disabled: ef,
                                onClick: eg,
                                children: U.default.Messages.COLLECTIBLES_USE_NOW
                            }), eb()]
                        })
                    };
                if (!1 === eC) return null;
                let e_ = null != en ? {
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
                        style: e_,
                        id: "shop-item-".concat(t.skuId),
                        children: [eo && (0, l.jsx)(o.Tooltip, {
                            tooltipContentClassName: W.premiumWheelTooltipContent,
                            color: o.Tooltip.Colors.PRIMARY,
                            text: U.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(v.TextBadge, {
                                ...e,
                                className: W.premiumWheelBadge,
                                text: (0, l.jsx)(_.default, {
                                    className: W.premiumWheel
                                })
                            })
                        }), (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: W.profileEffectShopPreview,
                            children: (0, l.jsx)(L.default, {
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
                            children: (0, l.jsx)(b.default, {
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
                                    }), ex()]
                                }), (0, l.jsx)("div", {
                                    className: W.innerHover,
                                    children: eI()
                                })]
                            })]
                        }), (0, l.jsx)(y.default, {
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
                p = a("436752");
            let g = {
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
                    tooltipDelay: T,
                    isGiftEasterEggEnabled: L,
                    disableCustomColor: S = !1
                } = e, {
                    analyticsLocations: x
                } = (0, o.default)(), b = (0, n.useStateFromStores)([f.default], () => f.default.getCategory(t.categorySkuId)), I = s.useRef(null), _ = (0, i.default)(I), {
                    buttonColors: v
                } = (0, C.default)(b), N = null == v || S ? void 0 : {
                    background: v.secondary.toHslString(),
                    color: v.text.toHslString()
                }, O = S || (null == v ? void 0 : v.text.isDark()) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT;
                return (0, l.jsx)(r.Tooltip, {
                    text: E.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
                    delay: T,
                    children: e => (0, l.jsx)(r.Button, {
                        ...e,
                        buttonRef: I,
                        style: N,
                        className: p.giftButton,
                        color: S ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                        look: r.Button.Looks.FILLED,
                        size: r.ButtonSizes.ICON,
                        innerClassName: p.giftButtonInner,
                        "aria-label": E.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, u.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: x,
                                returnRef: a,
                                onClose: null != h ? e => {
                                    e && h()
                                } : void 0
                            })
                        },
                        children: L ? (0, l.jsx)(c.SeasonalGiftIcon, {
                            hovered: _,
                            isContentDismissed: !0,
                            themeOverride: O,
                            boxColors: g
                        }) : (0, l.jsx)(d.default, {
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
                    return L
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
                p = a("247329"),
                g = a("333838"),
                h = a("399637"),
                T = a("976076"),
                L = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), s = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: L
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), S = L && !s;
                    return (0, l.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: S
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!S && (0, l.jsxs)(i.Text, {
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
                                children: L ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), L || s ? null : (0, l.jsx)(o.default, {
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
                                src: p
                            })
                        }), (0, l.jsx)("img", {
                            className: E.bannerForeground,
                            alt: "",
                            src: g
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
                p = a("49111"),
                g = a("782340"),
                h = a("173046");

            function T(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: T = !0
                } = e, L = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                    shopForAllEnabled: S
                } = (0, C.default)({
                    location: "CollectiblesPriceTag"
                }), x = (0, n.default)([c.default], () => (0, i.isThemeDark)(c.default.theme)), b = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == b) return null;
                if (b.amount <= 0) return (0, l.jsx)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: (0, l.jsx)(E.default, {
                        alwaysWhiteText: T,
                        price: b
                    })
                });
                let I = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    _ = !f.default.canUseCollectibles(L) && S;
                return (0, l.jsxs)("div", {
                    className: r(h.priceTagsContainer, a),
                    children: [(0, l.jsx)(E.default, {
                        alwaysWhiteText: T,
                        price: b,
                        className: _ ? void 0 : h.strikedPrice
                    }), null != I && (0, l.jsx)(E.default, {
                        price: I,
                        alwaysWhiteText: T,
                        renderPrice: _ ? e => g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: _ ? h.fullPrice : void 0,
                        variant: _ ? "text-xs/semibold" : void 0,
                        icon: (0, l.jsx)(o.Tooltip, {
                            text: g.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, l.jsx)(d.default, {
                                    ...t,
                                    className: r(h.premiumIcon, {
                                        [h.fullPrice]: _
                                    }),
                                    color: T || x ? "white" : "black"
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
                p = a("606292"),
                g = a("688318"),
                h = a("946964"),
                T = a("635956"),
                L = a("38766"),
                S = a("662286"),
                x = a("601095"),
                b = a("493390"),
                I = a("161778"),
                _ = a("697218"),
                v = a("944441"),
                N = a("462579"),
                O = a("216422"),
                A = a("956089"),
                R = a("50885"),
                j = a("21526"),
                F = a("417313"),
                y = a("775416"),
                B = a("805172"),
                k = a("491232"),
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
                Y = u.AvatarSizes.SIZE_152,
                K = (0, p.getDecorationSizeForAvatarSize)(Y),
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
                } = (0, E.default)(m.default.COLLECTIBLES_SHOP_CARD), $ = s.useRef(null), J = (0, C.default)($), [Q, ee] = s.useState(!1), et = J || Q, ea = (0, i.default)([_.default], () => _.default.getCurrentUser()), [el] = t.items, {
                    avatarDecorationSrc: es,
                    eventHandlers: er,
                    avatarPlaceholderSrc: en
                } = (0, g.default)({
                    user: ea,
                    avatarDecorationOverride: (null == el ? void 0 : el.type) === d.CollectiblesItemType.AVATAR_DECORATION ? el : void 0,
                    size: K,
                    animateOnHover: !et
                }), {
                    backgroundColors: ei
                } = (0, U.default)(a), eo = (0, k.getFormattedPriceForCollectiblesProduct)(t, N), ec = (0, k.isPremiumCollectiblesCategory)(a), eu = (0, k.isFreeCollectiblesProduct)(t), [ed, ef, eC] = (0, i.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), em = (0, S.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eE
                } = (0, B.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: ep
                } = (0, F.default)({
                    location: "CollectiblesShopCard"
                }), eg = (0, i.default)([I.default], () => (0, c.isThemeDark)(I.default.theme));
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
                let eh = (0, L.default)({
                        analyticsLocations: q
                    }),
                    eT = () => {
                        if ((0, f.popLayer)(), eh(), (null == el ? void 0 : el.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, p.openAvatarDecorationModal)({
                                initialSelectedDecoration: el,
                                analyticsLocations: q
                            });
                            return
                        }(null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
                            initialSelectedEffectId: el.id,
                            analyticsLocations: q
                        })
                    },
                    eL = e => () => {
                        (0, w.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: q,
                            analyticsSource: e
                        })
                    },
                    eS = eL(m.default.COLLECTIBLES_SHOP_CARD),
                    ex = eL(m.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eb = () => (0, l.jsxs)("div", {
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
                    e_ = () => ec ? null : ep && !eu ? (0, l.jsx)(D.default, {
                        product: t,
                        returnRef: $,
                        isGiftEasterEggEnabled: R,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }) : (0, l.jsx)(Z, {
                        onClick: ex
                    }),
                    ev = () => {
                        if (eE && ec && !N && !eu || !N && !eE && !eu && null == ed) return eb();
                        let e = ec ? {
                            submitting: ef,
                            submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, j.claimPremiumCollectiblesProduct)(t.skuId), (0, H.default)({
                                    product: t,
                                    category: a,
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
                            }), e_()]
                        })
                    };
                if (!1 === em) return null;
                let eN = eg ? "0 0 15px 1px ".concat(o.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, l.jsx)(u.FocusRing, {
                    children: (0, l.jsxs)(u.Clickable, {
                        innerRef: $,
                        className: z.shopCard,
                        onBlur: () => ee(!1),
                        onClick: eS,
                        style: null != ei ? {
                            backgroundColor: eg ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: et ? eN : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [ec && (0, l.jsx)(u.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: u.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(A.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, l.jsx)(O.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, l.jsx)(x.default, {
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
                                size: Y,
                                "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ed ? (0, l.jsx)("div", {
                            className: z.checkmarkWrapper,
                            children: (0, l.jsx)(v.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextBlur]: (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(z.cardBackground, eg ? z.darkCardBackground : z.lightCardBackground, (null == el ? void 0 : el.type) === d.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
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
                                    children: ev()
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
                p = a("491232"),
                g = a("730297"),
                h = a("716120"),
                T = a("408381"),
                L = a("57940"),
                S = a("646718"),
                x = a("782340"),
                b = a("601664"),
                I = a("725015");
            let _ = n.AvatarSizes.SIZE_120,
                v = (0, T.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: O
                } = e, {
                    analyticsLocations: A
                } = (0, o.default)(), {
                    backgroundColors: R
                } = (0, L.default)(O), j = (0, r.default)([f.default], () => f.default.getCurrentUser()), F = s.useRef(null), y = (0, i.default)(F), B = {
                    size: (0, c.getDecorationSizeForAvatarSize)(_),
                    animateOnHover: !y
                }, k = O.products.map(e => {
                    let [t] = e.items;
                    return {
                        user: j,
                        avatarDecorationOverride: (0, g.isAvatarDecorationRecord)(t) ? t : null,
                        ...B
                    }
                }), {
                    avatarDecorationSrc: P
                } = (0, u.default)(null !== (t = k[1]) && void 0 !== t ? t : B), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (a = k[0]) && void 0 !== a ? a : B), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = k[2]) && void 0 !== N ? N : B);
                return (0, l.jsxs)("div", {
                    ref: F,
                    className: b.bannerCard,
                    children: [(0, l.jsx)(h.default, {
                        asset: O.banner,
                        className: b.bannerBackground,
                        style: null != R ? {
                            background: (0, T.getBackgroundGradient)(R)
                        } : void 0
                    }), (0, l.jsxs)("div", {
                        className: b.contentSection,
                        children: [(0, l.jsxs)("div", {
                            className: b.discordLogo,
                            children: [(0, l.jsx)(C.default, {
                                className: b.discordIcon
                            }), (0, l.jsx)(m.default, {
                                className: b.discordWordmark
                            })]
                        }), (0, l.jsx)("img", {
                            className: b.bannerFont,
                            src: (0, p.getCollectiblesAssetURL)(O.logo, {
                                size: v
                            }),
                            alt: O.name
                        }), (0, l.jsx)(n.Text, {
                            color: "always-white",
                            className: b.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: x.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, l.jsx)(n.Clickable, {
                                    className: b.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: A,
                                        subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2
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
                        className: b.decoSection,
                        children: [(0, l.jsx)("div", {
                            className: b.pinkInterface,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: P,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
                            })
                        }), (0, l.jsx)("div", {
                            className: b.blueHeadset,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
                            })
                        }), (0, l.jsx)("div", {
                            className: b.greenSmoke,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: b.badge,
                        children: (0, l.jsx)(E.default, {
                            className: b.premiumIcon
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
                    return L
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
                p = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = E(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        border: r.setAlpha(.4)
                    }
                },
                g = (e, t) => {
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
                        buttonColors: g(i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
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
            var L = e => {
                let t = (0, n.default)([o.default], () => o.default.saturation);
                if (null == e) return {};
                let a = T[e.skuId];
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
                            analyticsLocations: E,
                            onClose: e => {
                                s(), null == C || C(e)
                            },
                            onComplete: () => {
                                g = !0, null == m || m()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !g && c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: h,
                            payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
                            location: p,
                            is_gift: !1,
                            location_stack: E
                        }), (0, n.clearError)(), (0, i.clearPurchaseTokenAuthState)(), null == C || C(g), g && (0, o.fetchCollectiblesPurchases)()
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