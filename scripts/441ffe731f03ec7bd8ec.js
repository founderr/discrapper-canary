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
                o = a("854588"),
                i = a("206230"),
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
                    } = e, E = (0, n.default)([i.default], () => i.default.saturation);
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
                            let l = (0, c.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - E);
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
                o = a("685665"),
                i = a("216719"),
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
                    } = (0, o.default)(g);
                    l.useEffect(() => {
                        if (c) return;
                        let e = f.exec(m.hash);
                        if (null != e) {
                            let t = e[1];
                            C.current = t
                        }
                    }, []);
                    let h = (0, r.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
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
                o = a.n(n),
                i = a("506838"),
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
                        className: o(E.badge, l)
                    })
                }
                return (0, i.match)([a, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
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
                    return er
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("635058"),
                i = a("265586"),
                c = a("65597"),
                u = a("151426"),
                d = a("77078"),
                f = a("939488"),
                C = a("54239"),
                m = a("304580"),
                E = a("841098"),
                g = a("812204"),
                p = a("685665"),
                h = a("10641"),
                S = a("509802"),
                x = a("539938"),
                b = a("210721"),
                L = a("78345"),
                T = a("65324"),
                I = a("393414"),
                _ = a("778588"),
                v = a("697218"),
                N = a("764490"),
                O = a("29557"),
                A = a("956089"),
                j = a("599110"),
                R = a("719923"),
                B = a("439932"),
                P = a("21526"),
                k = a("853987"),
                F = a("805172"),
                y = a("216719"),
                D = a("702953"),
                M = a("491232"),
                w = a("235898"),
                H = a("296304"),
                U = a("334820"),
                W = a("89569"),
                G = a("419513"),
                z = a("434393"),
                V = a("571464"),
                K = a("43525"),
                Y = a("798235"),
                X = a("931262"),
                Z = a("695824"),
                q = a("518907"),
                $ = a("594849"),
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
                    initialItemCardRef: o,
                    isGiftEasterEggEnabled: f,
                    setIsGiftEasterEggEnabled: C,
                    showEasterEggToggle: m
                } = e, E = s.useRef(10 + 70 * Math.random()), g = k.default.getProductsByItemType(t.skuId), p = (0, U.usePurchasedProductsSort)(null != g && i.CollectiblesItemType.AVATAR_DECORATION in g ? g[i.CollectiblesItemType.AVATAR_DECORATION] : []), h = (0, U.usePurchasedProductsSort)(null != g && i.CollectiblesItemType.PROFILE_EFFECT in g ? g[i.CollectiblesItemType.PROFILE_EFFECT] : []), x = h.length > 0, I = (0, M.isPremiumCollectiblesCategory)(t), _ = [...x ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...x && I ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [v, N] = (0, S.useDismissibleContentGroup)(_), {
                    tallerCardsEnabled: O
                } = (0, D.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                });
                s.useEffect(() => () => {
                    null != v && N(Q.ContentDismissActionType.USER_DISMISS)
                }, [v, N]);
                let j = (0, c.default)([y.default], () => y.default.initialProductSkuId),
                    R = s.useCallback(e => t => {
                        e.skuId === j && (o.current = t.current)
                    }, [j, o]);
                if (null == g || 0 === p.length) return null;
                let B = O ? q.default : z.default;
                return (0, l.jsxs)("div", {
                    className: ea.categoryWrapper,
                    children: [m && (0, l.jsx)(d.Clickable, {
                        className: n(ea.hiddenWumpus, {
                            [ea.hiddenWumpusEnabled]: f
                        }),
                        onClick: () => C(!0),
                        style: {
                            left: "".concat(E.current, "%")
                        },
                        children: (0, l.jsx)(T.default, {
                            idleAnimationState: b.AnimationState.IDLE,
                            giftStyle: L.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(G.default, {
                        category: t
                    }), p.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(d.Text, {
                            className: ea.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, l.jsx)("div", {
                            className: n(ea.cardsContainer, O ? ea.tallerShopCard : ea.regularShopCard, a),
                            children: p.map(e => (0, l.jsx)(B, {
                                onMount: R(e),
                                isPremiumUser: r,
                                category: t,
                                product: e,
                                isGiftEasterEggEnabled: f
                            }, e.storeListingId))
                        })]
                    }), h.length > 0 && (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: ea.itemTypeTitleContainer,
                            children: [(0, l.jsx)(d.Text, {
                                className: ea.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != v && (0, l.jsx)(A.PremiumBadge, {
                                className: ea.newItemTypeBadge,
                                text: et.default.Messages.NEW
                            })]
                        }), (0, l.jsx)("div", {
                            className: n(ea.cardsContainer, O ? ea.tallerShopCard : ea.regularShopCard, a),
                            children: h.map(e => (0, l.jsx)(B, {
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
            var er = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([y.default], () => y.default.getAnalytics()), {
                    AnalyticsLocationProvider: u,
                    analyticsLocations: S
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), b = (0, c.default)([_.default], () => _.default.getLayers().includes(J.Layers.COLLECTIBLES_SHOP)), {
                    source: L
                } = (0, X.useCollectiblesShopRouting)(), T = (0, c.default)([v.default], () => v.default.getCurrentUser()), A = R.default.canUseCollectibles(T), {
                    categories: k,
                    isFetchingCategories: D,
                    error: U
                } = (0, w.default)(), G = (0, H.usePurchasedCategoriesSort)(k), z = s.useRef(Math.random()), {
                    shopForAllEnabled: q,
                    marketingEnabled: er
                } = (0, F.default)({
                    location: "CollectiblesShop"
                }), en = s.useRef(null), [eo, ei] = s.useState(!1);
                (0, W.useProductDetailsDeepLinking)({
                    categories: k,
                    isFetchingCategories: D,
                    isLayer: b,
                    initialItemCardRef: en
                }), s.useEffect(() => {
                    j.default.track(J.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: S,
                        source: a
                    }), !A && j.default.track(J.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: S
                    })
                }, [A, S, a]), s.useEffect(() => {
                    el.forEach(e => {
                        !(0, h.isDismissibleContentDismissed)(e) && (0, h.markDismissibleContentAsDismissed)(e, {
                            dismissAction: Q.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), s.useEffect(() => {
                    !t && (0, f.setHomeLink)(J.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, P.setCollectiblesCategoryItemsViewed)({
                        categories: [...k.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [k]);
                let ec = () => {
                        (0, P.fetchCollectiblesCategories)()
                    },
                    eu = (0, E.default)(),
                    ed = [...k.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === o.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, l.jsx)(u, {
                    children: (0, l.jsxs)("div", {
                        className: ea.shop,
                        children: [t ? null : (0, l.jsxs)(x.default, {
                            className: n((0, B.getThemeClass)(eu), ea.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(O.default, {
                                className: ea.logo
                            }), (0, l.jsx)(x.default.Title, {
                                className: ea.title,
                                children: et.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, l.jsx)(d.ScrollerAuto, {
                            className: ea.shopScroll,
                            children: (0, l.jsxs)("div", {
                                className: n(ea.pageWrapper, {
                                    [ea.pageWrapperFullscreen]: t
                                }),
                                children: [(0, l.jsxs)("main", {
                                    className: ea.page,
                                    children: [t ? (0, l.jsx)(N.default, {
                                        title: et.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, er ? (0, l.jsx)(Y.default, {
                                        isFullScreen: t
                                    }) : (0, l.jsx)(K.default, {
                                        isFullScreen: t
                                    }), q || A || null == ed ? null : (0, l.jsx)($.default, {
                                        category: ed
                                    }), D ? (0, l.jsx)(Z.default, {}) : U ? (0, l.jsx)(V.default, {
                                        onRetry: ec
                                    }) : (0, l.jsx)("div", {
                                        children: G.map((e, t) => !(0, M.isPremiumCollectiblesCategory)(e) || q || A ? (0, l.jsx)(es, {
                                            isPremiumUser: A,
                                            category: e,
                                            initialItemCardRef: en,
                                            setIsGiftEasterEggEnabled: ei,
                                            isGiftEasterEggEnabled: eo,
                                            showEasterEggToggle: t === Math.floor(z.current * G.length)
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(m.default, {
                                        className: ea.close,
                                        closeAction: () => {
                                            if (b) {
                                                (0, P.closeCollectiblesShop)();
                                                return
                                            }
                                            L === X.CollectiblesShopSourceParam.SETTINGS && ((0, I.back)(), (0, C.pushLayer)(J.Layers.USER_SETTINGS)), 0 === (0, I.getHistory)().length ? (0, I.transitionTo)(J.Routes.APP) : (0, I.back)()
                                        },
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    })
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
                r = a("635058"),
                n = a("65597"),
                o = a("77078"),
                i = a("685665"),
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
                b = a("782340"),
                L = a("927694");
            let T = (0, h.getLogoSize)(96),
                I = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, i.default)(), r = s.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, m.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || C.default.canUseCollectibles(d) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: b.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(o.Clickable, {
                                innerRef: r,
                                className: L.getPremiumHook,
                                onClick: () => {
                                    (0, c.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, l.jsx)(o.Text, {
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
                    category: t
                } = e, {
                    backgroundColors: a
                } = (0, S.default)(t);
                return (0, l.jsxs)(g.default, {
                    asset: t.banner,
                    className: L.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, h.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, l.jsxs)("div", {
                        className: L.discordLogo,
                        children: [(0, l.jsx)(d.default, {
                            className: L.discordIcon
                        }), (0, l.jsx)(f.default, {
                            className: L.discordWordmark
                        })]
                    }), (0, l.jsx)("img", {
                        className: L.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: T
                        }),
                        alt: t.name
                    }), (0, l.jsx)(o.Text, {
                        className: L.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(I, {
                            category: t
                        }) : t.summary
                    }), (0, l.jsx)(p.default, {
                        category: t,
                        className: L.limitedTimeBadge,
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
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("669491"),
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
                b = a("493390"),
                L = a("697218"),
                T = a("944441"),
                I = a("462579"),
                _ = a("216422"),
                v = a("956089"),
                N = a("50885"),
                O = a("21526"),
                A = a("417313"),
                j = a("775416"),
                R = a("805172"),
                B = a("491232"),
                P = a("730297"),
                k = a("806410"),
                F = a("342676"),
                y = a("450492"),
                D = a("920580"),
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
                Z = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(c.Button, {
                        color: c.ButtonColors.CUSTOM,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(z.previewButton, t),
                        innerClassName: z.previewButtonInner,
                        "aria-label": G.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(I.default, {
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
                    isPremiumUser: I = !1,
                    isGiftEasterEggEnabled: N
                } = e, {
                    analyticsLocations: q
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), $ = s.useRef(null), J = (0, d.default)($), [Q, ee] = s.useState(!1), et = J || Q, ea = (0, o.default)([L.default], () => L.default.getCurrentUser()), el = t.items.find(P.isAvatarDecorationRecord), es = t.items.find(k.isProfileEffectRecord), {
                    avatarDecorationSrc: er,
                    eventHandlers: en,
                    avatarPlaceholderSrc: eo
                } = (0, E.default)({
                    user: ea,
                    avatarDecorationOverride: el,
                    size: Y,
                    animateOnHover: !et
                }), {
                    buttonColors: ei,
                    backgroundColors: ec
                } = (0, U.default)(a), eu = (0, B.getFormattedPriceForCollectiblesProduct)(t, I), ed = (0, B.isPremiumCollectiblesCategory)(a), [ef, eC, em] = (0, o.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), eE = (0, S.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eg
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: ep
                } = (0, A.default)({
                    location: "CollectiblesShopCard"
                });
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
                let eh = (0, h.default)({
                        analyticsLocations: q
                    }),
                    eS = () => {
                        (0, u.popLayer)(), eh(), null != el ? (0, m.openAvatarDecorationModal)({
                            analyticsLocations: q,
                            initialSelectedDecoration: t.items.find(P.isAvatarDecorationRecord)
                        }) : null != es && (0, b.openProfileEffectModal)({
                            analyticsLocations: q,
                            initialSelectedEffectID: null == es ? void 0 : es.id
                        })
                    },
                    ex = e => () => {
                        (0, M.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: q,
                            analyticsSource: e,
                            returnRef: $
                        })
                    },
                    eb = ex(f.default.COLLECTIBLES_SHOP_CARD),
                    eL = ex(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eT = () => (0, l.jsxs)("div", {
                        className: z.hoverUpsellContainer,
                        children: [!eg && (0, l.jsx)(c.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: z.description,
                            children: null != es ? G.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, l.jsx)(p.default, {
                                fullWidth: !0,
                                className: z.premiumSubscribeButton,
                                disabled: em,
                                onClick: e => e.stopPropagation(),
                                buttonText: eg ? G.default.Messages.UNLOCK_WITH_NITRO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
                            }), (0, l.jsx)(Z, {
                                className: z.defaultPreviewButtonColor,
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: eL
                            })]
                        })]
                    });
                s.useEffect(() => {
                    null == r || r($)
                }, [r]);
                let eI = () => null != ef ? (0, l.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : ed ? (0, l.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(D.default, {
                        product: t,
                        className: z.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    e_ = () => {
                        if (ed) return null;
                        let e = null != ei ? {
                            background: ei.secondary.toHslString(),
                            color: ei.text.toHslString()
                        } : void 0;
                        return ep ? (0, l.jsx)(y.default, {
                            product: t,
                            returnRef: $,
                            isGiftEasterEggEnabled: N
                        }) : (0, l.jsx)(Z, {
                            style: e,
                            className: z.defaultPreviewButtonColor,
                            onClick: eL
                        })
                    },
                    ev = () => {
                        if (eg && ed && !I || !I && !eg && null == ef) return eT();
                        let e = null != ei ? {
                                background: (0, w.getBackgroundGradient)(ei, 90),
                                color: ei.text.toHslString()
                            } : void 0,
                            s = ed ? {
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
                        return (0, l.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [null == ef ? (0, l.jsx)(X, {
                                style: e,
                                disabled: em,
                                className: z.purchaseButton,
                                ...s,
                                children: ed ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: eu
                                })
                            }) : (0, l.jsx)(X, {
                                style: e,
                                disabled: em,
                                onClick: eS,
                                children: G.default.Messages.COLLECTIBLES_USE_NOW
                            }), e_()]
                        })
                    };
                if (void 0 === el && null != es && !1 === eE) return null;
                let eN = null != ec ? {
                    background: "".concat((0, w.getBackgroundGradient)(ec), " border-box border-box"),
                    borderColor: ec.border.toHslString(),
                    boxShadow: et ? "0 0 25px 1px ".concat(ec.primary.toHslString()) : "none"
                } : void 0;
                return (0, l.jsx)(c.FocusRing, {
                    children: (0, l.jsxs)(c.Clickable, {
                        innerRef: $,
                        className: z.shopCard,
                        onBlur: () => ee(!1),
                        onClick: eb,
                        style: eN,
                        id: "shop-item-".concat(t.skuId),
                        children: [ed && (0, l.jsx)(c.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(v.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, l.jsx)(_.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), null != es && (0, l.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, l.jsx)(x.default, {
                                isHovering: et,
                                profileEffectId: null == es ? void 0 : es.id,
                                isPurchased: null != ef
                            })
                        }), null != el && (0, l.jsx)(V, {
                            ...en,
                            avatarDecoration: er,
                            src: eo,
                            className: n(z.avatar, {
                                [z.avatarPurchased]: null != ef
                            }),
                            size: K,
                            "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ef ? (0, l.jsx)("div", {
                            className: null != el ? z.checkmarkWrapper : z.profileEffectCheckmarkWrapper,
                            children: (0, l.jsx)(T.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextProfileEffect]: null != es
                            }),
                            children: [(0, l.jsx)("div", {
                                className: z.productName,
                                children: (I || eg) && (0, l.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: z.detailsWrapper,
                                children: [(0, l.jsxs)("div", {
                                    className: z.innerBlur,
                                    children: [!I && !eg && (0, l.jsx)(c.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, l.jsx)(c.Text, {
                                        color: "always-white",
                                        className: z.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eI()]
                                }), (0, l.jsx)("div", {
                                    className: z.innerHover,
                                    children: ev()
                                })]
                            })]
                        }), (0, l.jsx)(F.default, {
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
            var l = a("37983");
            a("884691");
            var s = a("819855"),
                r = a("77078"),
                n = a("841098"),
                o = a("782340"),
                i = a("139948"),
                c = a("321220"),
                u = a("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, a = (0, n.default)();
                    return (0, l.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, l.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, s.isThemeDark)(a) ? c : u,
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
                    return h
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("77078"),
                n = a("446674"),
                o = a("252744"),
                i = a("685665"),
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
                    isGiftEasterEggEnabled: S
                } = e, {
                    analyticsLocations: x
                } = (0, i.default)(), b = (0, n.useStateFromStores)([f.default], () => f.default.getCategoryForProduct(t.skuId)), L = s.useRef(null), T = (0, o.default)(L), {
                    buttonColors: I
                } = (0, C.default)(b), _ = null != I ? {
                    background: I.secondary.toHslString(),
                    color: I.text.toHslString()
                } : void 0;
                return (0, l.jsx)(r.Button, {
                    buttonRef: L,
                    style: _,
                    className: g.giftButton,
                    color: r.ButtonColors.CUSTOM,
                    look: r.Button.Looks.FILLED,
                    size: r.ButtonSizes.ICON,
                    innerClassName: g.giftButtonInner,
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
                    children: S ? (0, l.jsx)(c.SeasonalGiftIcon, {
                        hovered: T,
                        isContentDismissed: !0,
                        themeOverride: (null == I ? void 0 : I.text.isDark()) ? m.ThemeTypes.LIGHT : m.ThemeTypes.DARK,
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
                o = a("77078"),
                i = a("635956"),
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
                    }), b = x && !s;
                    return (0, l.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: b
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!b && (0, l.jsxs)(o.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: E.premiumBadgeWrapper,
                                children: [(0, l.jsx)(u.default, {
                                    className: E.premiumBadge
                                }), (0, l.jsx)("span", {
                                    className: E.premiumBadgeText,
                                    children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, l.jsx)(o.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(o.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: x ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), x || s ? null : (0, l.jsx)(i.default, {
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
                o = a("782340"),
                i = a("60109"),
                c = a("200406"),
                u = a("283045"),
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
                                src: c,
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
                                src: u,
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
                c = a("216422"),
                u = a("719923"),
                d = a("805172"),
                f = a("491232"),
                C = a("791309"),
                m = a("49111"),
                E = a("782340"),
                g = a("173046");

            function p(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: s
                } = e, p = (0, n.default)([i.default], () => i.default.getCurrentUser()), {
                    shopForAllEnabled: h
                } = (0, d.default)({
                    location: "CollectiblesPriceTag"
                }), S = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == S) return null;
                let x = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    b = !u.default.canUseCollectibles(p) && h;
                return (0, l.jsxs)("div", {
                    className: r(g.priceTagsContainer, a),
                    children: [(0, l.jsx)(C.default, {
                        price: S,
                        className: b ? void 0 : g.strikedPrice
                    }), null != x && (0, l.jsx)(C.default, {
                        price: x,
                        renderPrice: b ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: b ? g.fullPrice : void 0,
                        variant: b ? "text-xs/semibold" : void 0,
                        icon: (0, l.jsx)(o.Tooltip, {
                            text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, l.jsx)(c.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: b
                                    }),
                                    color: "white"
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
                o = a("153160"),
                i = a("846367"),
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
                        variant: f = "heading-md/semibold"
                    } = e, C = (0, o.formatPrice)(a, s);
                    return (0, l.jsxs)(n.Heading, {
                        variant: f,
                        color: "always-white",
                        className: r(i.heading, d),
                        children: [u, null !== (t = null == c ? void 0 : c(C)) && void 0 !== t ? t : C]
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
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: c
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
                CollectiblesShopSourceParam: function() {
                    return l
                },
                useCollectiblesShopRouting: function() {
                    return o
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var l, s, r = a("884691"),
                n = a("90915");

            function o() {
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
                o = a("927694"),
                i = a("395535"),
                c = a("492666");
            let u = () => 4 * Math.random() + 8,
                d = [u(), u(), u()];
            var f = () => (0, l.jsx)(l.Fragment, {
                children: d.map(e => (0, l.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, l.jsx)("div", {
                        className: r(c.skeleton, o.shopBanner),
                        children: (0, l.jsx)("div", {
                            className: c.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, l.jsx)("div", {
                        className: r(c.skeleton, i.shopCard),
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
                    return J
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("669491"),
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
                b = a("601095"),
                L = a("493390"),
                T = a("161778"),
                I = a("697218"),
                _ = a("944441"),
                v = a("462579"),
                N = a("216422"),
                O = a("956089"),
                A = a("50885"),
                j = a("21526"),
                R = a("417313"),
                B = a("775416"),
                P = a("805172"),
                k = a("491232"),
                F = a("730297"),
                y = a("806410"),
                D = a("342676"),
                M = a("450492"),
                w = a("920580"),
                H = a("54809"),
                U = a("408381"),
                W = a("264579"),
                G = a("57940"),
                z = a("646718"),
                V = a("782340"),
                K = a("216365");
            let Y = A.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
                X = u.AvatarSizes.SIZE_152,
                Z = (0, E.getDecorationSizeForAvatarSize)(X),
                q = e => {
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
                $ = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(u.Button, {
                        color: u.ButtonColors.CUSTOM,
                        look: u.Button.Looks.FILLED,
                        size: u.ButtonSizes.ICON,
                        className: n(K.previewButton, t),
                        innerClassName: K.previewButtonInner,
                        "aria-label": V.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(v.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var J = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: v = !1,
                    isGiftEasterEggEnabled: A
                } = e, {
                    analyticsLocations: J
                } = (0, m.default)(C.default.COLLECTIBLES_SHOP_CARD), Q = s.useRef(null), ee = (0, f.default)(Q), [et, ea] = s.useState(!1), el = ee || et, es = (0, o.default)([I.default], () => I.default.getCurrentUser()), er = t.items.find(F.isAvatarDecorationRecord), en = t.items.find(y.isProfileEffectRecord), {
                    avatarDecorationSrc: eo,
                    eventHandlers: ei,
                    avatarPlaceholderSrc: ec
                } = (0, g.default)({
                    user: es,
                    avatarDecorationOverride: er,
                    size: Z,
                    animateOnHover: !el
                }), {
                    buttonColors: eu,
                    backgroundColors: ed
                } = (0, G.default)(a), ef = (0, k.getFormattedPriceForCollectiblesProduct)(t, v), eC = (0, k.isPremiumCollectiblesCategory)(a), [em, eE, eg] = (0, o.useStateFromStoresArray)([B.default], () => [B.default.getPurchase(t.skuId), B.default.isClaiming === t.skuId, null != B.default.isClaiming && B.default.isClaiming !== t.skuId]), ep = (0, x.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eh
                } = (0, P.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eS
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), ex = (0, o.default)([T.default], () => (0, c.isThemeDark)(T.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = Q;
                    if (null == e) return;
                    let t = () => ea(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eb = (0, S.default)({
                        analyticsLocations: J
                    }),
                    eL = () => {
                        (0, d.popLayer)(), eb(), null != er ? (0, E.openAvatarDecorationModal)({
                            analyticsLocations: J,
                            initialSelectedDecoration: t.items.find(F.isAvatarDecorationRecord)
                        }) : null != en && (0, L.openProfileEffectModal)({
                            analyticsLocations: J,
                            initialSelectedEffectID: null == en ? void 0 : en.id
                        })
                    },
                    eT = e => () => {
                        (0, H.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: J,
                            analyticsSource: e,
                            returnRef: Q
                        })
                    },
                    eI = eT(C.default.COLLECTIBLES_SHOP_CARD),
                    e_ = eT(C.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    ev = () => (0, l.jsxs)("div", {
                        className: K.hoverUpsellContainer,
                        children: [!eh && (0, l.jsx)(u.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: K.description,
                            children: null != en ? V.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : V.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, l.jsxs)("div", {
                            className: K.buttonsContainer,
                            children: [(0, l.jsx)(h.default, {
                                fullWidth: !0,
                                className: K.premiumSubscribeButton,
                                disabled: eg,
                                onClick: e => e.stopPropagation(),
                                buttonText: eh ? V.default.Messages.UNLOCK_WITH_NITRO : V.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: z.PremiumSubscriptionSKUs.TIER_2
                            }), (0, l.jsx)($, {
                                className: K.defaultPreviewButtonColor,
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: e_
                            })]
                        })]
                    });
                s.useEffect(() => {
                    null == r || r(Q)
                }, [r]);
                let eN = () => null != em ? (0, l.jsx)(u.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: K.priceTag,
                        children: V.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eC ? (0, l.jsx)(u.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: K.priceTag,
                        children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(w.default, {
                        product: t,
                        className: K.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eO = () => {
                        if (eh && eC && !v || !v && !eh && null == em) return ev();
                        let e = null != eu ? {
                                background: (0, U.getBackgroundGradient)(eu, 90),
                                color: eu.text.toHslString()
                            } : void 0,
                            s = null != eu ? {
                                background: eu.secondary.toHslString(),
                                color: eu.text.toHslString()
                            } : void 0;
                        return null == em && eC ? (0, l.jsxs)("div", {
                            className: K.buttonsContainer,
                            children: [(0, l.jsx)(q, {
                                style: e,
                                className: K.purchaseButton,
                                submitting: eE,
                                submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                disabled: eg,
                                onClick: async () => {
                                    await (0, j.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: J
                                    })
                                },
                                children: V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }), (0, l.jsx)($, {
                                style: s,
                                onClick: e_
                            })]
                        }) : null == em ? (0, l.jsxs)("div", {
                            className: K.buttonsContainer,
                            children: [(0, l.jsx)(q, {
                                style: e,
                                className: K.purchaseButton,
                                disabled: eg,
                                onClick: () => (0, p.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: J,
                                    returnRef: Q
                                }),
                                children: V.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ef
                                })
                            }), eS ? (0, l.jsx)(M.default, {
                                product: t,
                                returnRef: Q,
                                isGiftEasterEggEnabled: A
                            }) : (0, l.jsx)($, {
                                style: s,
                                onClick: e_
                            })]
                        }) : (0, l.jsxs)("div", {
                            className: K.buttonsContainer,
                            children: [(0, l.jsx)(q, {
                                style: e,
                                disabled: eg,
                                onClick: eL,
                                children: V.default.Messages.COLLECTIBLES_USE_NOW
                            }), eS ? (0, l.jsx)(M.default, {
                                product: t,
                                returnRef: Q,
                                isGiftEasterEggEnabled: A
                            }) : (0, l.jsx)($, {
                                style: s,
                                className: K.defaultPreviewButtonColor,
                                onClick: e_
                            })]
                        })
                    };
                if (void 0 === er && null != en && !1 === ep) return null;
                let eA = ex ? "0 0 15px 1px ".concat(i.default.unsafe_rawColors.WHITE_800.css) : "var(--elevation-high)";
                return (0, l.jsx)(u.FocusRing, {
                    children: (0, l.jsxs)(u.Clickable, {
                        innerRef: Q,
                        className: K.shopCard,
                        onBlur: () => ea(!1),
                        onClick: eI,
                        style: null != ed ? {
                            backgroundColor: ex ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: el ? eA : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [eC && (0, l.jsx)(u.Tooltip, {
                            tooltipContentClassName: K.premiumWheelTooltipContent,
                            color: u.Tooltip.Colors.PRIMARY,
                            text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(O.TextBadge, {
                                ...e,
                                className: K.premiumWheelBadge,
                                text: (0, l.jsx)(N.default, {
                                    className: K.premiumWheel
                                })
                            })
                        }), null != en && (0, l.jsx)("div", {
                            className: K.profileEffectShopPreview,
                            children: (0, l.jsx)(b.default, {
                                isHovering: el,
                                profileEffectId: null == en ? void 0 : en.id,
                                isPurchased: null != em,
                                removeSetHeight: !0
                            })
                        }), null != er && (0, l.jsx)("div", {
                            className: K.avatarContainer,
                            children: (0, l.jsx)(Y, {
                                ...ei,
                                avatarDecoration: eo,
                                src: ec,
                                className: n(K.avatar, {
                                    [K.avatarPurchased]: null != em
                                }),
                                size: X,
                                "aria-label": V.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != em ? (0, l.jsx)("div", {
                            className: K.checkmarkWrapper,
                            children: (0, l.jsx)(_.default, {
                                width: 38,
                                height: 38,
                                className: K.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(K.cardText, {
                                [K.cardTextBlur]: null != en
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(K.cardBackground, ex ? K.darkCardBackground : K.lightCardBackground, null != en ? K.cardLowOpacity : null)
                            }), (0, l.jsx)("div", {
                                className: K.productName,
                                children: (v || eh) && (0, l.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: K.detailsWrapper,
                                children: [!v && !eh && (0, l.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                }), (0, l.jsx)(u.Text, {
                                    color: "always-white",
                                    className: K.description,
                                    variant: "text-md/normal",
                                    children: t.summary
                                }), (0, l.jsx)("div", {
                                    className: K.innerBlur,
                                    children: eN()
                                }), (0, l.jsx)("div", {
                                    className: K.innerHover,
                                    children: eO()
                                })]
                            })]
                        }), (0, l.jsx)(D.default, {
                            category: a,
                            className: K.limitedTimeBadge,
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
                o = a("252744"),
                i = a("685665"),
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
                b = a("646718"),
                L = a("782340"),
                T = a("601664"),
                I = a("725015");
            let _ = n.AvatarSizes.SIZE_120,
                v = (0, S.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: O
                } = e, {
                    analyticsLocations: A
                } = (0, i.default)(), {
                    backgroundColors: j
                } = (0, x.default)(O), R = (0, r.default)([f.default], () => f.default.getCurrentUser()), B = s.useRef(null), P = (0, o.default)(B), k = {
                    size: (0, c.getDecorationSizeForAvatarSize)(_),
                    animateOnHover: !P
                }, F = O.products.map(e => {
                    var t;
                    return {
                        user: R,
                        avatarDecorationOverride: null !== (t = e.items.find(p.isAvatarDecorationRecord)) && void 0 !== t ? t : null,
                        ...k
                    }
                }), {
                    avatarDecorationSrc: y
                } = (0, u.default)(null !== (t = F[1]) && void 0 !== t ? t : k), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (a = F[0]) && void 0 !== a ? a : k), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = F[2]) && void 0 !== N ? N : k);
                return (0, l.jsxs)("div", {
                    ref: B,
                    className: T.bannerCard,
                    children: [(0, l.jsx)(h.default, {
                        asset: O.banner,
                        className: T.bannerBackground,
                        style: null != j ? {
                            background: (0, S.getBackgroundGradient)(j)
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
                            children: L.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, l.jsx)(n.Clickable, {
                                    className: T.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: A,
                                        subscriptionTier: b.PremiumSubscriptionSKUs.TIER_2
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
                                avatarDecoration: y,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
                            })
                        }), (0, l.jsx)("div", {
                            className: T.blueHeadset,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
                            })
                        }), (0, l.jsx)("div", {
                            className: T.greenSmoke,
                            children: (0, l.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: I,
                                size: _
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
                o = a("669491"),
                i = a("206230"),
                c = a("388491"),
                u = a("172858");
            let d = u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                m = s(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                E = (e, t) => {
                    let a = e.toRgb(),
                        l = t.toRgb(),
                        [r, n, o] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
                    return s({
                        r,
                        g: n,
                        b: o
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
                        buttonColors: p(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
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
                let t = (0, n.default)([i.default], () => i.default.saturation);
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
                o = a("55689"),
                i = a("21526"),
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
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(p), p && (0, i.fetchCollectiblesPurchases)()
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
                o = a("859498"),
                i = a("635471"),
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
                            children: (0, l.jsx)(i.default, {
                                profileEffectID: t,
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
                    return o
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                r = a("269096"),
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
                }, r.CheckmarkLargeIcon, void 0, {
                    size: 24
                })
        }
    }
]);