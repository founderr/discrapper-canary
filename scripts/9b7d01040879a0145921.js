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
            });
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
            });
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
                    return m
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
                m = e => {
                    let {
                        asset: t,
                        size: a = d.MAX_CONTENT_WIDTH,
                        className: l,
                        style: m,
                        children: C
                    } = e, E = (0, n.default)([i.default], () => i.default.saturation);
                    return (0, s.jsx)("div", {
                        className: r(f.banner, l),
                        style: (() => {
                            if (null == t) return m;
                            let e = (0, u.getCollectiblesAssetURL)(t, {
                                size: a,
                                format: "jpg"
                            });
                            if (1 === E) return {
                                ...m,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let s = (0, c.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...m,
                                backgroundImage: "linear-gradient(".concat(s, ", ").concat(s, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: C
                    })
                }
        },
        342676: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s, l, r = a("37983");
            a("884691");
            var n = a("414456"),
                o = a.n(n),
                i = a("506838"),
                c = a("65597"),
                u = a("697218"),
                d = a("956089"),
                f = a("719923"),
                m = a("805172"),
                C = a("782340"),
                E = a("224609");
            (s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
            var g = e => {
                let {
                    category: t,
                    display: a,
                    className: s
                } = e, n = (0, c.default)([u.default], () => u.default.getCurrentUser()), g = f.default.canUseCollectibles(n), {
                    shopForAllEnabled: p
                } = (0, m.default)({
                    location: "CollectiblesLimitedTimeBadge"
                });
                if (!g && !p || null == t.unpublishedAt) return null;
                let x = function(e) {
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
                return (0, i.match)([a, x > 1]).with([l.CARD, !0], () => null).with([l.BANNER, !0], () => {
                    let e = C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: x
                    });
                    return S(e)
                }).with([l.MODAL, !0], () => {
                    let e = C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: x
                    });
                    return S(e)
                }).otherwise(() => {
                    let e = C.default.Messages.COLLECTIBLES_LAST_DAY;
                    return S(e)
                })
            }
        },
        781755: function(e, t, a) {
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
                o = a("77078"),
                i = a("697218"),
                c = a("216422"),
                u = a("719923"),
                d = a("153160"),
                f = a("805172"),
                m = a("491232"),
                C = a("49111"),
                E = a("782340"),
                g = a("477517");

            function p(e) {
                var t;
                let {
                    amount: a,
                    currency: l,
                    priceTextDecorator: n,
                    tooltip: i,
                    className: c,
                    variant: u = "heading-md/semibold"
                } = e, f = (0, d.formatPrice)(a, l);
                return (0, s.jsxs)(o.Heading, {
                    color: "always-white",
                    variant: u,
                    className: g.priceTag,
                    children: [i, (0, s.jsx)("span", {
                        className: r(c, g.price),
                        children: null !== (t = null == n ? void 0 : n(f)) && void 0 !== t ? t : f
                    })]
                })
            }

            function x(e) {
                let {
                    product: t,
                    purchase: a,
                    isPremiumCategory: l,
                    className: d,
                    disableTooltipPointerEvents: x
                } = e, S = (0, n.default)([i.default], () => i.default.getCurrentUser()), {
                    shopForAllEnabled: T
                } = (0, f.default)({
                    location: "CollectiblesPriceTag"
                });
                if (null != a) return (0, s.jsx)(o.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: d,
                    children: E.default.Messages.COLLECTIBLES_ALREADY_OWNED
                });
                if (l) return (0, s.jsx)(o.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: d,
                    children: E.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                });
                let h = u.default.canUseCollectibles(S),
                    L = (0, m.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.DEFAULT),
                    b = (0, m.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    _ = !h && T;
                return (0, s.jsxs)("div", {
                    className: r(g.priceTagsContainer, d),
                    children: [null != L ? (0, s.jsx)(p, {
                        amount: L.amount,
                        currency: L.currency,
                        className: _ ? void 0 : g.strikedPrice
                    }) : null, null != b ? (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(p, {
                            amount: b.amount,
                            currency: b.currency,
                            priceTextDecorator: _ ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                                price: e
                            }) : void 0,
                            className: _ ? g.fullPrice : void 0,
                            variant: _ ? "text-xs/semibold" : void 0,
                            tooltip: (0, s.jsx)(o.Tooltip, {
                                text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                disableTooltipPointerEvents: x,
                                children: e => {
                                    let {
                                        ...t
                                    } = e;
                                    return (0, s.jsx)(c.default, {
                                        ...t,
                                        className: r(g.premiumIcon, {
                                            [g.fullPrice]: _
                                        }),
                                        color: "white"
                                    })
                                }
                            })
                        })
                    }) : null]
                })
            }
        },
        258556: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return $
                }
            });
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
                m = a("54239"),
                C = a("304580"),
                E = a("841098"),
                g = a("812204"),
                p = a("685665"),
                x = a("10641"),
                S = a("509802"),
                T = a("539938"),
                h = a("662286"),
                L = a("393414"),
                b = a("778588"),
                _ = a("697218"),
                N = a("764490"),
                v = a("29557"),
                I = a("956089"),
                A = a("599110"),
                j = a("719923"),
                y = a("439932"),
                O = a("21526"),
                R = a("853987"),
                P = a("805172"),
                B = a("216719"),
                k = a("491232"),
                D = a("235898"),
                M = a("296304"),
                F = a("334820"),
                U = a("419513"),
                H = a("434393"),
                w = a("571464"),
                W = a("43525"),
                G = a("931262"),
                z = a("695824"),
                V = a("594849"),
                Y = a("49111"),
                K = a("994428"),
                X = a("646718"),
                Z = a("782340"),
                q = a("451594");

            function J(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r
                } = e, o = R.default.getProductsByItemType(t.skuId), c = (0, F.usePurchasedProductsSort)(null != o && i.CollectiblesItemType.AVATAR_DECORATION in o ? o[i.CollectiblesItemType.AVATAR_DECORATION] : []), f = (0, F.usePurchasedProductsSort)(null != o && i.CollectiblesItemType.PROFILE_EFFECT in o ? o[i.CollectiblesItemType.PROFILE_EFFECT] : []), m = f.length > 0, C = (0, k.isPremiumCollectiblesCategory)(t), E = [...m ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...m && C ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [g, p] = (0, S.useDismissibleContentGroup)(E);
                return (l.useEffect(() => () => {
                    null != g && p(K.ContentDismissActionType.USER_DISMISS)
                }, [g, p]), null == o || 0 === c.length) ? null : (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(U.default, {
                        category: t
                    }), c.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(d.Text, {
                            className: q.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: Z.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, s.jsx)("div", {
                            className: n(q.cardsContainer, a),
                            children: c.map(e => (0, s.jsx)(H.default, {
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    }), f.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)("div", {
                            className: q.itemTypeTitleContainer,
                            children: [(0, s.jsx)(d.Text, {
                                className: q.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: Z.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != g && (0, s.jsx)(I.PremiumBadge, {
                                className: q.newItemTypeBadge,
                                text: Z.default.Messages.NEW
                            })]
                        }), (0, s.jsx)("div", {
                            className: n(q.cardsContainer, a),
                            children: f.map(e => (0, s.jsx)(H.default, {
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    })]
                })
            }

            function Q(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: l
                } = e, r = (0, F.usePurchasedProductsSort)(t.products);
                return null == r || 0 === r.length ? null : (0, s.jsxs)("div", {
                    className: n(q.cardsContainer, a),
                    children: [(0, s.jsx)(U.default, {
                        category: t
                    }), r.map(e => (0, s.jsx)(H.default, {
                        isPremiumUser: l,
                        category: t,
                        product: e
                    }, e.storeListingId))]
                })
            }
            var $ = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([B.default], () => B.default.getAnalytics()), {
                    AnalyticsLocationProvider: S,
                    analyticsLocations: I
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), R = (0, c.default)([b.default], () => b.default.getLayers().includes(Y.Layers.COLLECTIBLES_SHOP)), {
                    source: F
                } = (0, G.useCollectiblesShopRouting)(), U = (0, c.default)([_.default], () => _.default.getCurrentUser()), H = j.default.canUseCollectibles(U), {
                    categories: $,
                    isFetchingCategories: ee,
                    error: et
                } = (0, D.default)(), ea = (0, M.usePurchasedCategoriesSort)($), es = (0, h.useCanUseProfileEffects)({
                    location: "CollectiblesShop"
                }), {
                    shopForAllEnabled: el
                } = (0, P.default)({
                    location: "CollectiblesShop"
                });
                l.useEffect(() => {
                    A.default.track(Y.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: I,
                        source: a
                    }), !H && A.default.track(Y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: X.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: I
                    })
                }, [H, I, a]), l.useEffect(() => {
                    (0, x.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_STATUS_POPOUT_UPSELL, {
                        dismissAction: K.ContentDismissActionType.AUTO
                    })
                }, []), l.useEffect(() => {
                    !t && (0, f.setHomeLink)(Y.Routes.COLLECTIBLES_SHOP)
                }, [t]), l.useEffect(() => () => {
                    (0, O.setCollectiblesCategoryItemsViewed)({
                        categories: [...$.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [$]);
                let er = () => {
                        (0, O.fetchCollectiblesCategories)()
                    },
                    en = (0, E.default)(),
                    eo = [...$.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === o.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, s.jsx)(S, {
                    children: (0, s.jsxs)("div", {
                        className: q.shop,
                        children: [t ? null : (0, s.jsxs)(T.default, {
                            className: n((0, y.getThemeClass)(en), q.headerBar),
                            toolbar: !0,
                            children: [(0, s.jsx)(v.default, {
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
                                    children: [t ? (0, s.jsx)(N.default, {
                                        title: Z.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, (0, s.jsx)(W.default, {
                                        isFullScreen: t
                                    }), el || H || null == eo ? null : (0, s.jsx)(V.default, {
                                        category: eo
                                    }), ee ? (0, s.jsx)(z.default, {}) : et ? (0, s.jsx)(w.default, {
                                        onRetry: er
                                    }) : (0, s.jsx)("div", {
                                        children: ea.map(e => !(0, k.isPremiumCollectiblesCategory)(e) || el || H ? es ? (0, s.jsx)(J, {
                                            isPremiumUser: H,
                                            category: e
                                        }, e.storeListingId) : (0, s.jsx)(Q, {
                                            isPremiumUser: H,
                                            category: e
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, s.jsx)("div", {
                                    children: (0, s.jsx)(C.default, {
                                        className: q.close,
                                        closeAction: () => {
                                            if (R) {
                                                (0, O.closeCollectiblesShop)();
                                                return
                                            }
                                            F === G.CollectiblesShopSourceParam.SETTINGS && ((0, L.back)(), (0, m.pushLayer)(Y.Layers.USER_SETTINGS)), 0 === (0, L.getHistory)().length ? (0, L.transitionTo)(Y.Routes.APP) : (0, L.back)()
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
                    return N
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
                m = a("719923"),
                C = a("805172"),
                E = a("491232"),
                g = a("716120"),
                p = a("342676"),
                x = a("408381"),
                S = a("57940"),
                T = a("646718"),
                h = a("782340"),
                L = a("927694");
            let b = (0, x.getLogoSize)(96),
                _ = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, i.default)(), r = l.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, C.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || m.default.canUseCollectibles(d) ? (0, s.jsx)(s.Fragment, {
                        children: t.summary
                    }) : (0, s.jsx)(s.Fragment, {
                        children: h.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, s.jsx)(o.Clickable, {
                                innerRef: r,
                                className: L.getPremiumHook,
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

            function N(e) {
                let {
                    category: t
                } = e, {
                    backgroundColors: a
                } = (0, S.default)(t);
                return (0, s.jsxs)(g.default, {
                    asset: t.banner,
                    className: L.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, x.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, s.jsxs)("div", {
                        className: L.discordLogo,
                        children: [(0, s.jsx)(d.default, {
                            className: L.discordIcon
                        }), (0, s.jsx)(f.default, {
                            className: L.discordWordmark
                        })]
                    }), (0, s.jsx)("img", {
                        className: L.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: b
                        }),
                        alt: t.name
                    }), (0, s.jsx)(o.Text, {
                        className: L.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, s.jsx)(p.default, {
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
                    return X
                }
            });
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
                m = a("685665"),
                C = a("606292"),
                E = a("688318"),
                g = a("946964"),
                p = a("635956"),
                x = a("38766"),
                S = a("662286"),
                T = a("601095"),
                h = a("493390"),
                L = a("697218"),
                b = a("944441"),
                _ = a("462579"),
                N = a("216422"),
                v = a("956089"),
                I = a("50885"),
                A = a("21526"),
                j = a("775416"),
                y = a("805172"),
                O = a("491232"),
                R = a("730297"),
                P = a("806410"),
                B = a("342676"),
                k = a("781755"),
                D = a("54809"),
                M = a("408381"),
                F = a("264579"),
                U = a("57940"),
                H = a("646718"),
                w = a("782340"),
                W = a("395535");
            let G = I.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                z = c.AvatarSizes.SIZE_120,
                V = (0, C.getDecorationSizeForAvatarSize)(z),
                Y = e => {
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
                K = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, s.jsx)(c.Button, {
                        color: c.ButtonColors.CUSTOM,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(W.previewButton, t),
                        innerClassName: W.previewButtonInner,
                        "aria-label": w.default.Messages.PREVIEW,
                        ...a,
                        children: (0, s.jsx)(_.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };

            function X(e) {
                let {
                    product: t,
                    category: a,
                    isPremiumUser: r = !1
                } = e, {
                    analyticsLocations: _
                } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), I = l.useRef(null), X = (0, d.default)(I), [Z, q] = l.useState(!1), J = X || Z, Q = (0, o.default)([L.default], () => L.default.getCurrentUser()), $ = t.items.find(R.isAvatarDecorationRecord), ee = t.items.find(P.isProfileEffectRecord), {
                    avatarDecorationSrc: et,
                    eventHandlers: ea,
                    avatarPlaceholderSrc: es
                } = (0, E.default)({
                    user: Q,
                    avatarDecorationOverride: $,
                    size: V,
                    animateOnHover: !J
                }), {
                    buttonColors: el,
                    backgroundColors: er
                } = (0, U.default)(a), en = (0, O.getFormattedPriceForCollectiblesProduct)(t, r), eo = (0, O.isPremiumCollectiblesCategory)(a), [ei, ec, eu] = (0, o.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), ed = (0, S.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: ef
                } = (0, y.default)({
                    location: "CollectiblesShopCard"
                });
                l.useEffect(() => {
                    let {
                        current: e
                    } = I;
                    if (null == e) return;
                    let t = () => q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let em = (0, x.default)({
                        analyticsLocations: _
                    }),
                    eC = () => {
                        if ((0, u.popLayer)(), em(), null != $)(0, C.openAvatarDecorationModal)({
                            analyticsLocations: _,
                            initialSelectedDecoration: t.items.find(R.isAvatarDecorationRecord)
                        });
                        else if (null != ee)(0, h.openProfileEffectModal)({
                            analyticsLocations: _,
                            initialSelectedEffectID: null == ee ? void 0 : ee.id
                        })
                    },
                    eE = e => () => {
                        (0, D.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: _,
                            analyticsSource: e,
                            returnRef: I
                        })
                    },
                    eg = eE(f.default.COLLECTIBLES_SHOP_CARD),
                    ep = eE(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    ex = () => (0, s.jsxs)("div", {
                        className: W.hoverUpsellContainer,
                        children: [!ef && (0, s.jsx)(c.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: W.description,
                            children: null != ee ? w.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : w.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, s.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [(0, s.jsx)(p.default, {
                                fullWidth: !0,
                                className: W.premiumSubscribeButton,
                                disabled: eu,
                                onClick: e => e.stopPropagation(),
                                buttonText: ef ? w.default.Messages.UNLOCK_WITH_NITRO : w.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2
                            }), (0, s.jsx)(K, {
                                className: W.defaultPreviewButtonColor,
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: ep
                            })]
                        })]
                    }),
                    eS = () => {
                        if (ef && eo && !r || !r && !ef && null == ei) return ex();
                        let e = null != el ? {
                                background: (0, M.getBackgroundGradient)(el, 90),
                                color: el.text.toHslString()
                            } : void 0,
                            l = null != el ? {
                                ...e,
                                background: el.secondary.toHslString()
                            } : void 0;
                        return null == ei && eo ? (0, s.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [(0, s.jsx)(Y, {
                                style: e,
                                className: W.purchaseButton,
                                submitting: ec,
                                submittingStartedLabel: w.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                disabled: eu,
                                onClick: async () => {
                                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, F.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: _
                                    })
                                },
                                children: w.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }), (0, s.jsx)(K, {
                                style: l,
                                onClick: ep
                            })]
                        }) : null == ei ? (0, s.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [(0, s.jsx)(Y, {
                                style: e,
                                className: W.purchaseButton,
                                disabled: eu,
                                onClick: () => (0, g.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: _,
                                    returnRef: I
                                }),
                                children: w.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: en
                                })
                            }), (0, s.jsx)(K, {
                                style: l,
                                onClick: ep
                            })]
                        }) : (0, s.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [(0, s.jsx)(Y, {
                                disabled: eu,
                                onClick: eC,
                                children: w.default.Messages.COLLECTIBLES_USE_NOW
                            }), (0, s.jsx)(K, {
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                className: W.defaultPreviewButtonColor,
                                onClick: ep
                            })]
                        })
                    };
                if (void 0 === $ && null != ee && !1 === ed) return null;
                let eT = null != er ? {
                    background: "".concat((0, M.getBackgroundGradient)(er), " border-box border-box"),
                    borderColor: er.border.toHslString(),
                    boxShadow: J ? "0 0 25px 1px ".concat(er.primary.toHslString()) : "none"
                } : void 0;
                return (0, s.jsx)(c.FocusRing, {
                    children: (0, s.jsxs)(c.Clickable, {
                        innerRef: I,
                        className: W.shopCard,
                        onBlur: () => q(!1),
                        onClick: eg,
                        style: eT,
                        children: [eo && (0, s.jsx)(c.Tooltip, {
                            tooltipContentClassName: W.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: w.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, s.jsx)(v.TextBadge, {
                                ...e,
                                className: W.premiumWheelBadge,
                                text: (0, s.jsx)(N.default, {
                                    className: W.premiumWheel
                                })
                            })
                        }), null != ee && (0, s.jsx)("div", {
                            className: W.profileEffectShopPreview,
                            children: (0, s.jsx)(T.default, {
                                isHovering: J,
                                profileEffectId: null == ee ? void 0 : ee.id,
                                isPurchased: null != ei
                            })
                        }), null != $ && (0, s.jsx)(G, {
                            ...ea,
                            avatarDecoration: et,
                            src: es,
                            className: n(W.avatar, {
                                [W.avatarPurchased]: null != ei
                            }),
                            size: z,
                            "aria-label": w.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ei ? (0, s.jsx)("div", {
                            className: null != $ ? W.checkmarkWrapper : W.profileEffectCheckmarkWrapper,
                            children: (0, s.jsx)(b.default, {
                                width: 38,
                                height: 38,
                                className: W.checkmark
                            })
                        }) : null, (0, s.jsxs)("div", {
                            className: n(W.cardText, {
                                [W.cardTextProfileEffect]: null != ee
                            }),
                            children: [(0, s.jsx)("div", {
                                className: W.productName,
                                children: (r || ef) && (0, s.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, s.jsxs)("div", {
                                className: W.detailsWrapper,
                                children: [(0, s.jsxs)("div", {
                                    className: W.innerBlur,
                                    children: [!r && !ef && (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        className: W.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), (0, s.jsx)(k.default, {
                                        className: W.price,
                                        product: t,
                                        purchase: ei,
                                        isPremiumCategory: eo,
                                        disableTooltipPointerEvents: !0
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: W.innerHover,
                                    children: eS()
                                })]
                            })]
                        }), (0, s.jsx)(B.default, {
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
                m = a("646718"),
                C = a("782340"),
                E = a("98881"),
                g = a("247329"),
                p = a("333838"),
                x = a("399637"),
                S = a("976076"),
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
                                    children: C.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, s.jsx)(o.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: C.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(o.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: T ? C.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : C.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), T || l ? null : (0, s.jsx)(i.default, {
                                className: E.subscribeButton,
                                isTrialCTA: !0,
                                buttonText: C.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2
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
                            src: x
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
                    return l
                },
                useCollectiblesShopRouting: function() {
                    return o
                }
            });
            var s, l, r = a("884691"),
                n = a("90915");
            a("49111");

            function o() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), s = a.get("source"), l = null != s ? parseInt(s, 10) : null;
                return {
                    source: l,
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
                    return I
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
                m = a("153769"),
                C = a("270227"),
                E = a("216422"),
                g = a("491232"),
                p = a("730297"),
                x = a("716120"),
                S = a("408381"),
                T = a("57940"),
                h = a("646718"),
                L = a("782340"),
                b = a("601664"),
                _ = a("725015");
            let N = n.AvatarSizes.SIZE_120,
                v = (0, S.getLogoSize)(96);
            var I = e => {
                var t, a, I;
                let {
                    category: A
                } = e, {
                    analyticsLocations: j
                } = (0, i.default)(), {
                    backgroundColors: y
                } = (0, T.default)(A), O = (0, r.default)([f.default], () => f.default.getCurrentUser()), R = l.useRef(null), P = (0, o.default)(R), B = {
                    size: (0, c.getDecorationSizeForAvatarSize)(N),
                    animateOnHover: !P
                }, k = A.products.map(e => {
                    var t;
                    return {
                        user: O,
                        avatarDecorationOverride: null !== (t = e.items.find(p.isAvatarDecorationRecord)) && void 0 !== t ? t : null,
                        ...B
                    }
                }), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (t = k[1]) && void 0 !== t ? t : B), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (a = k[0]) && void 0 !== a ? a : B), {
                    avatarDecorationSrc: F
                } = (0, u.default)(null !== (I = k[2]) && void 0 !== I ? I : B);
                return (0, s.jsxs)("div", {
                    ref: R,
                    className: b.bannerCard,
                    children: [(0, s.jsx)(x.default, {
                        asset: A.banner,
                        className: b.bannerBackground,
                        style: null != y ? {
                            background: (0, S.getBackgroundGradient)(y)
                        } : void 0
                    }), (0, s.jsxs)("div", {
                        className: b.contentSection,
                        children: [(0, s.jsxs)("div", {
                            className: b.discordLogo,
                            children: [(0, s.jsx)(m.default, {
                                className: b.discordIcon
                            }), (0, s.jsx)(C.default, {
                                className: b.discordWordmark
                            })]
                        }), (0, s.jsx)("img", {
                            className: b.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(A.logo, {
                                size: v
                            }),
                            alt: A.name
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            className: b.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: L.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, s.jsx)(n.Clickable, {
                                    className: b.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: j,
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
                        className: b.decoSection,
                        children: [(0, s.jsx)("div", {
                            className: b.pinkInterface,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: N
                            })
                        }), (0, s.jsx)("div", {
                            className: b.blueHeadset,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: N
                            })
                        }), (0, s.jsx)("div", {
                            className: b.greenSmoke,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: F,
                                "aria-label": L.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: N
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: b.badge,
                        children: (0, s.jsx)(E.default, {
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
                    return x
                }
            });
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
                m = (e, t) => {
                    let a = e.toRgb(),
                        s = t.toRgb(),
                        [r, n, o] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [s.r, s.g, s.b], 50);
                    return l({
                        r,
                        g: n,
                        b: o
                    })
                },
                C = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = m(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        border: r.setAlpha(.4)
                    }
                },
                E = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = m(a, s);
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
                        backgroundColors: C("#146144", "#021A0E"),
                        buttonColors: E("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: C("#4B79B0", "#0F0E3A"),
                        buttonColors: E("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: C("#E8B26B", "#7A3A00"),
                        buttonColors: E("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: C("#732565", "#111D40"),
                        buttonColors: E(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: C("#5280DC", "#060F25"),
                        buttonColors: E("#496BDB", "#3E41B5"),
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: C("#FFC267", "#6C1A00"),
                        buttonColors: E("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var x = e => {
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
                    onClose: d,
                    onComplete: f,
                    analyticsLocations: m,
                    analyticsObject: C
                } = e, E = !1, g = (0, l.v4)();
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
                            loadId: g,
                            skuId: t,
                            analyticsLocations: m,
                            onClose: e => {
                                l(), null == d || d(e)
                            },
                            onComplete: () => {
                                E = !0, null == f || f()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !E && c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: g,
                            payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
                            location: C,
                            is_gift: !1,
                            location_stack: m
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == d || d(E), E && (0, i.fetchCollectiblesPurchases)()
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
            });
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
                    } = e, f = r ? 250 : .1, [m, C] = l.useState(!0);
                    return (l.useEffect(() => {
                        if (!0 !== r) C(!1);
                        else {
                            let e = setTimeout(() => {
                                C(!1)
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
                        }), !m && (0, s.jsx)("div", {
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
        }
    }
]);