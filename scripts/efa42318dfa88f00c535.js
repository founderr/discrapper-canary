(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93710"], {
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
        489847: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ab3468632852f3725893.png"
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
                        className: l,
                        style: C,
                        children: m
                    } = e, E = (0, n.default)([i.default], () => i.default.saturation);
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
                            let s = (0, c.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - E);
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
                    return E
                },
                useProductDetailsDeepLinking: function() {
                    return p
                }
            }), a("781738"), a("222007"), a("424973");
            var s = a("884691"),
                l = a("803182"),
                r = a("446674"),
                n = a("812204"),
                o = a("685665"),
                i = a("805172"),
                c = a("216719"),
                u = a("54809"),
                d = a("49111");
            let f = "".concat("#").concat("itemSkuId", "="),
                C = new RegExp("^".concat(f, "(\\d+)$")),
                m = [d.Routes.COLLECTIBLES_SHOP, d.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
                E = e => {
                    let {
                        marketingEnabled: t
                    } = (0, i.default)({
                        location: "useProductDetailsDeepLinking"
                    }), a = (0, l.useLocation)();
                    s.useEffect(() => {
                        if (t && null != e && m.includes(a.pathname)) return window.location.replace("".concat(f).concat(e.skuId)), () => {
                            window.location.hash.startsWith(f) && window.location.replace("#")
                        }
                    }, [])
                },
                g = e => {
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
                                a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
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
                p = e => {
                    let {
                        categories: t,
                        isFetchingCategories: a,
                        isLayer: u,
                        initialItemCardRef: f
                    } = e, {
                        marketingEnabled: m
                    } = (0, i.default)({
                        location: "useProductDetailsDeepLinking"
                    }), E = s.useRef(null), p = (0, l.useLocation)(), S = p.pathname === d.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : p.pathname === d.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: L
                    } = (0, o.default)(S);
                    s.useEffect(() => {
                        if (u) return;
                        let e = C.exec(p.hash);
                        if (null != e) {
                            let t = e[1];
                            E.current = t
                        }
                    }, []);
                    let T = (0, r.useStateFromStores)([c.default], () => c.default.initialProductSkuId);
                    s.useEffect(() => {
                        if (!m || a) return;
                        let e = null;
                        if (u && null != T && (e = T), !u && null != E.current && (e = E.current), null != e) {
                            let a = [],
                                s = setTimeout(() => {
                                    let s = g({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: L,
                                        analyticsSource: S,
                                        initialItemCardRef: f
                                    });
                                    a.push(s)
                                }, 250);
                            return a.push(() => clearTimeout(s)), () => {
                                a.forEach(e => e())
                            }
                        }
                    }, [u, L, S, t, a, T, f, m])
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
                o = a.n(n),
                i = a("506838"),
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

                function S(e) {
                    return (0, r.jsx)(d.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: o(E.badge, s)
                    })
                }
                return (0, i.match)([a, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: p
                    });
                    return S(e)
                }).with(["modal", !0], () => {
                    let e = m.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: p
                    });
                    return S(e)
                }).otherwise(() => {
                    let e = m.default.Messages.COLLECTIBLES_LAST_DAY;
                    return S(e)
                })
            }
        },
        258556: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return Q
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
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
                S = a("10641"),
                L = a("509802"),
                T = a("539938"),
                h = a("393414"),
                x = a("778588"),
                I = a("697218"),
                _ = a("764490"),
                b = a("29557"),
                v = a("956089"),
                N = a("599110"),
                O = a("719923"),
                A = a("439932"),
                R = a("21526"),
                j = a("853987"),
                P = a("805172"),
                k = a("216719"),
                y = a("491232"),
                B = a("235898"),
                D = a("296304"),
                F = a("334820"),
                M = a("89569"),
                H = a("419513"),
                U = a("434393"),
                w = a("571464"),
                W = a("43525"),
                G = a("931262"),
                z = a("695824"),
                V = a("594849"),
                K = a("49111"),
                Y = a("994428"),
                X = a("646718"),
                Z = a("782340"),
                q = a("451594");
            let $ = [u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_INTERACTIVE_MODAL_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_ACCOUNT_POPOUT_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_NITRO_ONLY_COACHMARK, u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK];

            function J(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r,
                    initialItemCardRef: o
                } = e, f = j.default.getProductsByItemType(t.skuId), C = (0, F.usePurchasedProductsSort)(null != f && i.CollectiblesItemType.AVATAR_DECORATION in f ? f[i.CollectiblesItemType.AVATAR_DECORATION] : []), m = (0, F.usePurchasedProductsSort)(null != f && i.CollectiblesItemType.PROFILE_EFFECT in f ? f[i.CollectiblesItemType.PROFILE_EFFECT] : []), E = m.length > 0, g = (0, y.isPremiumCollectiblesCategory)(t), p = [...E ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...E && g ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [S, T] = (0, L.useDismissibleContentGroup)(p);
                l.useEffect(() => () => {
                    null != S && T(Y.ContentDismissActionType.USER_DISMISS)
                }, [S, T]);
                let h = (0, c.default)([k.default], () => k.default.initialProductSkuId),
                    x = l.useCallback(e => t => {
                        e.skuId === h && (o.current = t.current)
                    }, [h, o]);
                return null == f || 0 === C.length ? null : (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(H.default, {
                        category: t
                    }), C.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(d.Text, {
                            className: q.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: Z.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, s.jsx)("div", {
                            className: n(q.cardsContainer, a),
                            children: C.map(e => (0, s.jsx)(U.default, {
                                onMount: x(e),
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    }), m.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)("div", {
                            className: q.itemTypeTitleContainer,
                            children: [(0, s.jsx)(d.Text, {
                                className: q.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: Z.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != S && (0, s.jsx)(v.PremiumBadge, {
                                className: q.newItemTypeBadge,
                                text: Z.default.Messages.NEW
                            })]
                        }), (0, s.jsx)("div", {
                            className: n(q.cardsContainer, a),
                            children: m.map(e => (0, s.jsx)(U.default, {
                                onMount: x(e),
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    })]
                })
            }
            var Q = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([k.default], () => k.default.getAnalytics()), {
                    AnalyticsLocationProvider: u,
                    analyticsLocations: L
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), v = (0, c.default)([x.default], () => x.default.getLayers().includes(K.Layers.COLLECTIBLES_SHOP)), {
                    source: j
                } = (0, G.useCollectiblesShopRouting)(), F = (0, c.default)([I.default], () => I.default.getCurrentUser()), H = O.default.canUseCollectibles(F), {
                    categories: U,
                    isFetchingCategories: Q,
                    error: ee
                } = (0, B.default)(), et = (0, D.usePurchasedCategoriesSort)(U), {
                    shopForAllEnabled: ea
                } = (0, P.default)({
                    location: "CollectiblesShop"
                }), es = l.useRef(null);
                (0, M.useProductDetailsDeepLinking)({
                    categories: U,
                    isFetchingCategories: Q,
                    isLayer: v,
                    initialItemCardRef: es
                }), l.useEffect(() => {
                    N.default.track(K.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: L,
                        source: a
                    }), !H && N.default.track(K.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: X.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: L
                    })
                }, [H, L, a]), l.useEffect(() => {
                    $.forEach(e => {
                        !(0, S.isDismissibleContentDismissed)(e) && (0, S.markDismissibleContentAsDismissed)(e, {
                            dismissAction: Y.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), l.useEffect(() => {
                    !t && (0, f.setHomeLink)(K.Routes.COLLECTIBLES_SHOP)
                }, [t]), l.useEffect(() => () => {
                    (0, R.setCollectiblesCategoryItemsViewed)({
                        categories: [...U.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [U]);
                let el = () => {
                        (0, R.fetchCollectiblesCategories)()
                    },
                    er = (0, E.default)(),
                    en = [...U.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === o.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, s.jsx)(u, {
                    children: (0, s.jsxs)("div", {
                        className: q.shop,
                        children: [t ? null : (0, s.jsxs)(T.default, {
                            className: n((0, A.getThemeClass)(er), q.headerBar),
                            toolbar: !0,
                            children: [(0, s.jsx)(b.default, {
                                className: q.logo
                            }), (0, s.jsx)(T.default.Title, {
                                className: q.title,
                                children: Z.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, s.jsx)(d.ScrollerAuto, {
                            className: q.shopScroll,
                            children: (0, s.jsxs)("div", {
                                className: n(q.pageWrapper, {
                                    [q.pageWrapperFullscreen]: t
                                }),
                                children: [(0, s.jsxs)("main", {
                                    className: q.page,
                                    children: [t ? (0, s.jsx)(_.default, {
                                        title: Z.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, (0, s.jsx)(W.default, {
                                        isFullScreen: t
                                    }), ea || H || null == en ? null : (0, s.jsx)(V.default, {
                                        category: en
                                    }), Q ? (0, s.jsx)(z.default, {}) : ee ? (0, s.jsx)(w.default, {
                                        onRetry: el
                                    }) : (0, s.jsx)("div", {
                                        children: et.map(e => !(0, y.isPremiumCollectiblesCategory)(e) || ea || H ? (0, s.jsx)(J, {
                                            isPremiumUser: H,
                                            category: e,
                                            initialItemCardRef: es
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, s.jsx)("div", {
                                    children: (0, s.jsx)(m.default, {
                                        className: q.close,
                                        closeAction: () => {
                                            if (v) {
                                                (0, R.closeCollectiblesShop)();
                                                return
                                            }
                                            j === G.CollectiblesShopSourceParam.SETTINGS && ((0, h.back)(), (0, C.pushLayer)(K.Layers.USER_SETTINGS)), 0 === (0, h.getHistory)().length ? (0, h.transitionTo)(K.Routes.APP) : (0, h.back)()
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
                    return b
                }
            });
            var s = a("37983"),
                l = a("884691"),
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
                S = a("408381"),
                L = a("57940"),
                T = a("646718"),
                h = a("782340"),
                x = a("927694");
            let I = (0, S.getLogoSize)(96),
                _ = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, i.default)(), r = l.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, m.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || C.default.canUseCollectibles(d) ? (0, s.jsx)(s.Fragment, {
                        children: t.summary
                    }) : (0, s.jsx)(s.Fragment, {
                        children: h.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, s.jsx)(o.Clickable, {
                                innerRef: r,
                                className: x.getPremiumHook,
                                onClick: () => {
                                    (0, c.default)({
                                        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, s.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function b(e) {
                let {
                    category: t
                } = e, {
                    backgroundColors: a
                } = (0, L.default)(t);
                return (0, s.jsxs)(g.default, {
                    asset: t.banner,
                    className: x.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, S.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, s.jsxs)("div", {
                        className: x.discordLogo,
                        children: [(0, s.jsx)(d.default, {
                            className: x.discordIcon
                        }), (0, s.jsx)(f.default, {
                            className: x.discordWordmark
                        })]
                    }), (0, s.jsx)("img", {
                        className: x.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: I
                        }),
                        alt: t.name
                    }), (0, s.jsx)(o.Text, {
                        className: x.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, s.jsx)(p.default, {
                        category: t,
                        className: x.limitedTimeBadge,
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
                S = a("38766"),
                L = a("662286"),
                T = a("601095"),
                h = a("493390"),
                x = a("697218"),
                I = a("944441"),
                _ = a("462579"),
                b = a("216422"),
                v = a("956089"),
                N = a("50885"),
                O = a("21526"),
                A = a("417313"),
                R = a("775416"),
                j = a("805172"),
                P = a("491232"),
                k = a("730297"),
                y = a("806410"),
                B = a("342676"),
                D = a("450492"),
                F = a("920580"),
                M = a("54809"),
                H = a("408381"),
                U = a("264579"),
                w = a("57940"),
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
                    isPremiumUser: _ = !1
                } = e, {
                    analyticsLocations: N
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), q = l.useRef(null), $ = (0, d.default)(q), [J, Q] = l.useState(!1), ee = $ || J, et = (0, o.default)([x.default], () => x.default.getCurrentUser()), ea = t.items.find(k.isAvatarDecorationRecord), es = t.items.find(y.isProfileEffectRecord), {
                    avatarDecorationSrc: el,
                    eventHandlers: er,
                    avatarPlaceholderSrc: en
                } = (0, E.default)({
                    user: et,
                    avatarDecorationOverride: ea,
                    size: Y,
                    animateOnHover: !ee
                }), {
                    buttonColors: eo,
                    backgroundColors: ei
                } = (0, w.default)(a), ec = (0, P.getFormattedPriceForCollectiblesProduct)(t, _), eu = (0, P.isPremiumCollectiblesCategory)(a), [ed, ef, eC] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), em = (0, L.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eE
                } = (0, j.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eg
                } = (0, A.default)({
                    location: "CollectiblesShopCard"
                });
                l.useEffect(() => {
                    let {
                        current: e
                    } = q;
                    if (null == e) return;
                    let t = () => Q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ep = (0, S.default)({
                        analyticsLocations: N
                    }),
                    eS = () => {
                        (0, u.popLayer)(), ep(), null != ea ? (0, m.openAvatarDecorationModal)({
                            analyticsLocations: N,
                            initialSelectedDecoration: t.items.find(k.isAvatarDecorationRecord)
                        }) : null != es && (0, h.openProfileEffectModal)({
                            analyticsLocations: N,
                            initialSelectedEffectID: null == es ? void 0 : es.id
                        })
                    },
                    eL = e => () => {
                        (0, M.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: N,
                            analyticsSource: e,
                            returnRef: q
                        })
                    },
                    eT = eL(f.default.COLLECTIBLES_SHOP_CARD),
                    eh = eL(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    ex = () => (0, s.jsxs)("div", {
                        className: z.hoverUpsellContainer,
                        children: [!eE && (0, s.jsx)(c.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: z.description,
                            children: null != es ? G.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(p.default, {
                                fullWidth: !0,
                                className: z.premiumSubscribeButton,
                                disabled: eC,
                                onClick: e => e.stopPropagation(),
                                buttonText: eE ? G.default.Messages.UNLOCK_WITH_NITRO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
                            }), (0, s.jsx)(Z, {
                                className: z.defaultPreviewButtonColor,
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: eh
                            })]
                        })]
                    });
                l.useEffect(() => {
                    null == r || r(q)
                }, [r]);
                let eI = () => null != ed ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eu ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, s.jsx)(F.default, {
                        product: t,
                        className: z.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    e_ = () => {
                        if (eE && eu && !_ || !_ && !eE && null == ed) return ex();
                        let e = null != eo ? {
                                background: (0, H.getBackgroundGradient)(eo, 90),
                                color: eo.text.toHslString()
                            } : void 0,
                            l = null != eo ? {
                                background: eo.secondary.toHslString(),
                                color: eo.text.toHslString()
                            } : void 0;
                        return null == ed && eu ? (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                className: z.purchaseButton,
                                submitting: ef,
                                submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                disabled: eC,
                                onClick: async () => {
                                    await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: N
                                    })
                                },
                                children: G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }), (0, s.jsx)(Z, {
                                style: l,
                                onClick: eh
                            })]
                        }) : null == ed ? (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                className: z.purchaseButton,
                                disabled: eC,
                                onClick: () => (0, g.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: N,
                                    returnRef: q
                                }),
                                children: G.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ec
                                })
                            }), eg ? (0, s.jsx)(D.default, {
                                product: t,
                                returnRef: q
                            }) : (0, s.jsx)(Z, {
                                style: l,
                                onClick: eh
                            })]
                        }) : (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                disabled: eC,
                                onClick: eS,
                                children: G.default.Messages.COLLECTIBLES_USE_NOW
                            }), eg ? (0, s.jsx)(D.default, {
                                product: t,
                                returnRef: q
                            }) : (0, s.jsx)(Z, {
                                style: l,
                                className: z.defaultPreviewButtonColor,
                                onClick: eh
                            })]
                        })
                    };
                if (void 0 === ea && null != es && !1 === em) return null;
                let eb = null != ei ? {
                    background: "".concat((0, H.getBackgroundGradient)(ei), " border-box border-box"),
                    borderColor: ei.border.toHslString(),
                    boxShadow: ee ? "0 0 25px 1px ".concat(ei.primary.toHslString()) : "none"
                } : void 0;
                return (0, s.jsx)(c.FocusRing, {
                    children: (0, s.jsxs)(c.Clickable, {
                        innerRef: q,
                        className: z.shopCard,
                        onBlur: () => Q(!1),
                        onClick: eT,
                        style: eb,
                        id: "shop-item-".concat(t.skuId),
                        children: [eu && (0, s.jsx)(c.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, s.jsx)(v.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, s.jsx)(b.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), null != es && (0, s.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, s.jsx)(T.default, {
                                isHovering: ee,
                                profileEffectId: null == es ? void 0 : es.id,
                                isPurchased: null != ed
                            })
                        }), null != ea && (0, s.jsx)(V, {
                            ...er,
                            avatarDecoration: el,
                            src: en,
                            className: n(z.avatar, {
                                [z.avatarPurchased]: null != ed
                            }),
                            size: K,
                            "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ed ? (0, s.jsx)("div", {
                            className: null != ea ? z.checkmarkWrapper : z.profileEffectCheckmarkWrapper,
                            children: (0, s.jsx)(I.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, s.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextProfileEffect]: null != es
                            }),
                            children: [(0, s.jsx)("div", {
                                className: z.productName,
                                children: (_ || eE) && (0, s.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, s.jsxs)("div", {
                                className: z.detailsWrapper,
                                children: [(0, s.jsxs)("div", {
                                    className: z.innerBlur,
                                    children: [!_ && !eE && (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        className: z.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eI()]
                                }), (0, s.jsx)("div", {
                                    className: z.innerHover,
                                    children: e_()
                                })]
                            })]
                        }), (0, s.jsx)(B.default, {
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
                o = a("782340"),
                i = a("139948"),
                c = a("321220"),
                u = a("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, a = (0, n.default)();
                    return (0, s.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, s.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, l.isThemeDark)(a) ? c : u,
                            alt: ""
                        }), (0, s.jsx)(r.Heading, {
                            className: i.heading1,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, s.jsx)(r.Button, {
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
                    return C
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                r = a("446674"),
                n = a("685665"),
                o = a("946964"),
                i = a("978679"),
                c = a("853987"),
                u = a("57940"),
                d = a("782340"),
                f = a("436752"),
                C = e => {
                    let {
                        product: t,
                        returnRef: a,
                        onSuccess: C
                    } = e, {
                        analyticsLocations: m
                    } = (0, n.default)(), E = (0, r.useStateFromStores)([c.default], () => c.default.getCategoryForProduct(t.skuId)), {
                        buttonColors: g
                    } = (0, u.default)(E), p = null != g ? {
                        background: g.secondary.toHslString(),
                        color: g.text.toHslString()
                    } : void 0;
                    return (0, s.jsx)(l.Button, {
                        style: p,
                        className: f.giftButton,
                        color: l.ButtonColors.CUSTOM,
                        look: l.Button.Looks.FILLED,
                        size: l.ButtonSizes.ICON,
                        innerClassName: f.giftButtonInner,
                        "aria-label": d.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, o.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: m,
                                returnRef: a,
                                onClose: null != C ? e => {
                                    e && C()
                                } : void 0
                            })
                        },
                        children: (0, s.jsx)(i.default, {
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
                    return T
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                S = a("399637"),
                L = a("976076"),
                T = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), l = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: T
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), h = T && !l;
                    return (0, s.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: h
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!h && (0, s.jsxs)(o.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: E.premiumBadgeWrapper,
                                children: [(0, s.jsx)(u.default, {
                                    className: E.premiumBadge
                                }), (0, s.jsx)("span", {
                                    className: E.premiumBadgeText,
                                    children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, s.jsx)(o.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(o.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: T ? m.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : m.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), T || l ? null : (0, s.jsx)(i.default, {
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
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeTopSparkle),
                            alt: "",
                            src: L
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallTopSparkle),
                            alt: "",
                            src: L
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeLeftSparkle),
                            alt: "",
                            src: L
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallLeftSparkle),
                            alt: "",
                            src: L
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeRightSparkle),
                            alt: "",
                            src: L
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallRightSparkle),
                            alt: "",
                            src: L
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
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
                    disableTooltipPointerEvents: l
                } = e, p = (0, n.default)([i.default], () => i.default.getCurrentUser()), {
                    shopForAllEnabled: S
                } = (0, d.default)({
                    location: "CollectiblesPriceTag"
                }), L = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == L) return null;
                let T = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    h = !u.default.canUseCollectibles(p) && S;
                return (0, s.jsxs)("div", {
                    className: r(g.priceTagsContainer, a),
                    children: [(0, s.jsx)(C.default, {
                        price: L,
                        className: h ? void 0 : g.strikedPrice
                    }), null != T && (0, s.jsx)(C.default, {
                        price: T,
                        renderPrice: h ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: h ? g.fullPrice : void 0,
                        variant: h ? "text-xs/semibold" : void 0,
                        icon: (0, s.jsx)(o.Tooltip, {
                            text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: l,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, s.jsx)(c.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: h
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
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("77078"),
                o = a("153160"),
                i = a("846367"),
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
                        variant: f = "heading-md/semibold"
                    } = e, C = (0, o.formatPrice)(a, l);
                    return (0, s.jsxs)(n.Heading, {
                        variant: f,
                        color: "always-white",
                        className: i.heading,
                        children: [u, (0, s.jsx)("span", {
                            className: r(i.price, d),
                            children: null !== (t = null == c ? void 0 : c(C)) && void 0 !== t ? t : C
                        })]
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
            var s = a("37983");
            a("884691");
            var l = a("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: o,
                        analyticsLocations: i,
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
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: c
                        })
                    }, {
                        modalKey: r
                    })
                },
                o = () => {
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
                    return o
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var s, l, r = a("884691"),
                n = a("90915");

            function o() {
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
                o = a("927694"),
                i = a("395535"),
                c = a("492666");
            let u = () => 4 * Math.random() + 8,
                d = [u(), u(), u()];
            var f = () => (0, s.jsx)(s.Fragment, {
                children: d.map(e => (0, s.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, s.jsx)("div", {
                        className: r(c.skeleton, o.shopBanner),
                        children: (0, s.jsx)("div", {
                            className: c.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, s.jsx)("div", {
                        className: r(c.skeleton, i.shopCard),
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
                S = a("716120"),
                L = a("408381"),
                T = a("57940"),
                h = a("646718"),
                x = a("782340"),
                I = a("601664"),
                _ = a("725015");
            let b = n.AvatarSizes.SIZE_120,
                v = (0, L.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: O
                } = e, {
                    analyticsLocations: A
                } = (0, i.default)(), {
                    backgroundColors: R
                } = (0, T.default)(O), j = (0, r.default)([f.default], () => f.default.getCurrentUser()), P = l.useRef(null), k = (0, o.default)(P), y = {
                    size: (0, c.getDecorationSizeForAvatarSize)(b),
                    animateOnHover: !k
                }, B = O.products.map(e => {
                    var t;
                    return {
                        user: j,
                        avatarDecorationOverride: null !== (t = e.items.find(p.isAvatarDecorationRecord)) && void 0 !== t ? t : null,
                        ...y
                    }
                }), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (t = B[1]) && void 0 !== t ? t : y), {
                    avatarDecorationSrc: F
                } = (0, u.default)(null !== (a = B[0]) && void 0 !== a ? a : y), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = B[2]) && void 0 !== N ? N : y);
                return (0, s.jsxs)("div", {
                    ref: P,
                    className: I.bannerCard,
                    children: [(0, s.jsx)(S.default, {
                        asset: O.banner,
                        className: I.bannerBackground,
                        style: null != R ? {
                            background: (0, L.getBackgroundGradient)(R)
                        } : void 0
                    }), (0, s.jsxs)("div", {
                        className: I.contentSection,
                        children: [(0, s.jsxs)("div", {
                            className: I.discordLogo,
                            children: [(0, s.jsx)(C.default, {
                                className: I.discordIcon
                            }), (0, s.jsx)(m.default, {
                                className: I.discordWordmark
                            })]
                        }), (0, s.jsx)("img", {
                            className: I.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(O.logo, {
                                size: v
                            }),
                            alt: O.name
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            className: I.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: x.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, s.jsx)(n.Clickable, {
                                    className: I.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: A,
                                        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
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
                        className: I.decoSection,
                        children: [(0, s.jsx)("div", {
                            className: I.pinkInterface,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: b
                            })
                        }), (0, s.jsx)("div", {
                            className: I.blueHeadset,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: F,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: b
                            })
                        }), (0, s.jsx)("div", {
                            className: I.greenSmoke,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": x.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: b
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: I.badge,
                        children: (0, s.jsx)(E.default, {
                            className: I.premiumIcon
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
                default: function() {
                    return S
                }
            }), a("222007");
            var s = a("656280"),
                l = a.n(s),
                r = a("635058"),
                n = a("65597"),
                o = a("669491"),
                i = a("206230"),
                c = a("388491"),
                u = a("172858");
            let d = l(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = l(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                C = (e, t) => {
                    let a = e.toRgb(),
                        s = t.toRgb(),
                        [r, n, o] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [s.r, s.g, s.b], 50);
                    return l({
                        r,
                        g: n,
                        b: o
                    })
                },
                m = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = C(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        border: r.setAlpha(.4)
                    }
                },
                E = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = C(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        text: l(r.isLight() ? f : d)
                    }
                },
                g = (e, t) => {
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
                p = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: m("#146144", "#021A0E"),
                        buttonColors: E("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: m("#4B79B0", "#0F0E3A"),
                        buttonColors: E("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: m("#E8B26B", "#7A3A00"),
                        buttonColors: E("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: m("#732565", "#111D40"),
                        buttonColors: E(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: m("#5280DC", "#060F25"),
                        buttonColors: E("#496BDB", "#3E41B5"),
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: m("#FFC267", "#6C1A00"),
                        buttonColors: E("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: m("#467FFF", "#154ECF"),
                        buttonColors: E("#44C7FF", "#009DFF"),
                        confettiSprites: [a("770704"), a("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    }
                };
            var S = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let a = p[e.skuId];
                return (null == a ? void 0 : a.backgroundColors) == null || 1 === t ? null != a ? a : {} : {
                    ...a,
                    backgroundColors: {
                        primary: g(a.backgroundColors.primary, t),
                        secondary: g(a.backgroundColors.secondary, t),
                        border: g(a.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: g(a.buttonColors.primary, t),
                        secondary: g(a.buttonColors.secondary, t),
                        text: a.buttonColors.text
                    },
                    confettiColors: a.confettiColors.map(e => g(l(e), t).toHexString())
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
                } = e, p = !1, S = (0, l.v4)();
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
                            loadId: S,
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
                            load_id: S,
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
            var s = a("37983"),
                l = a("884691"),
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
                        isPurchased: d
                    } = e, f = r ? 250 : .1, [C, m] = l.useState(!0);
                    return (l.useEffect(() => {
                        if (!0 !== r) m(!1);
                        else {
                            let e = setTimeout(() => {
                                m(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, r]), null != t) ? (0, s.jsxs)("div", {
                        className: n(c.previewContainer, {
                            [c.previewContainerAnimation]: r
                        }),
                        children: [(0, s.jsx)("img", {
                            src: u,
                            alt: " ",
                            className: r ? c.previewForCollected : c.preview,
                            "aria-hidden": !0
                        }), !C && (0, s.jsx)("div", {
                            className: d ? c.purchasedEffect : void 0,
                            children: (0, s.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: r,
                                restartMethod: o.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: a,
                                introDelay: f,
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
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("469563"),
                r = a("269096"),
                n = a("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, n.default)(o),
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