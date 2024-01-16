(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73829"], {
        316718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return l
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return s
                }
            });
            var u = n("872717"),
                r = n("913144"),
                i = n("271560"),
                a = n("49111");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), u.default.get({
                    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: i
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await u.default.get({
                        url: a.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: i
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: a.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return i
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return o
                }
            });
            var u = n("913144");

            function r(e) {
                u.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                u.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                u.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                u.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                u.default.wait(() => u.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var u = n("913144");

            function r() {
                u.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        833222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DenyIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, u.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: l
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: l
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: l
                    })]
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
                        className: l
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
                        className: l
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var u = n("884691");

            function r(e) {
                let [t, n] = (0, u.useState)(!1), r = (0, u.useRef)(e.current);
                return (0, u.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, u.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        u = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", u), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", u)
                    }
                }, [r]), t
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return l
                },
                default: function() {
                    return o
                }
            });
            var u = n("862205"),
                r = n("15733");
            let i = (0, u.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                a = (0, u.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function l() {
                let {
                    paymentsBlocked: e
                } = i.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = a.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var o = i
        },
        308592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscriptionPlansLoaded: function() {
                    return c
                },
                getSubscriptionPlansLoaded: function() {
                    return d
                }
            }), n("222007");
            var u = n("446674"),
                r = n("605250"),
                i = n("357957"),
                a = n("10514"),
                l = n("521012"),
                o = n("646718");
            new r.default("useSubscriptionPlansLoaded");
            let s = e => {};

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, u.useStateFromStores)([i.default, a.default, l.default], () => d(e, [i.default, a.default, l.default]), [e])
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, u, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default, l.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    f = u.isLoadedForSKUs(t),
                    h = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
                if (null != h && !u.hasPaymentSourceForSKUIds(h, t)) return s("subscription payment source ".concat(h, " not loaded for ").concat(t)), !1;
                if (null != d && !u.hasPaymentSourceForSKUIds(d, t)) return s("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
                for (let e of c)
                    if (!u.hasPaymentSourceForSKUIds(e, t)) return s("payment source ".concat(e, " not loaded for ").concat(t)), !1;
                return s("isLoadedForSKUs ".concat(f)), f
            }
        },
        984002: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var u = n("65597"),
                r = n("853987"),
                i = n("775416"),
                a = e => {
                    let [t, n] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]), a = (0, u.default)([i.default], () => i.default.getPurchase(e));
                    return {
                        category: t,
                        product: n,
                        purchase: a
                    }
                }
        },
        235898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var u = n("884691"),
                r = n("65597"),
                i = n("875212"),
                a = n("21526"),
                l = n("853987"),
                o = n("775416");

            function s() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, i.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, i.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: n,
                    categories: s,
                    error: c
                } = function() {
                    let e = "useMaybeFetchCollectiblesCategories";
                    (0, i.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, i.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, n, o, s] = (0, r.useStateFromStoresArray)([l.default], () => {
                        var e;
                        return [l.default.isFetching, l.default.error, null !== (e = l.default.lastFetched) && void 0 !== e ? e : 0, l.default.categories]
                    });
                    return (0, u.useEffect)(() => {
                        !(t || n || Date.now() - o < 6e5) && (0, a.fetchCollectiblesCategories)()
                    }, [t, o, n]), {
                        isFetching: t,
                        categories: s,
                        error: n
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: h,
                    isFetching: C,
                    purchases: p
                } = function() {
                    let e = "useFetchPurchases";
                    (0, i.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, i.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, n, l, s, c] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, u.useEffect)(() => {
                        (0, a.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: l,
                        claimError: s,
                        isFetching: t,
                        purchases: c
                    }
                }(), E = null !== (e = null != c ? c : f) && void 0 !== e ? e : h;
                return {
                    isFetching: n || C,
                    isFetchingCategories: n,
                    isFetchingPurchases: C,
                    isClaiming: d,
                    categories: s,
                    purchases: p,
                    error: E
                }
            }
        },
        854381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("446674"),
                r = n("10514"),
                i = n("713518"),
                a = n("646718"),
                l = n("843455");

            function o(e) {
                var t, n;
                let {
                    activeSubscription: o,
                    skuIDs: s,
                    paymentSourceId: c,
                    isGift: d
                } = e;
                s = s.filter(e => e !== a.PremiumSubscriptionSKUs.NONE);
                let f = (0, u.useStateFromStores)([r.default], () => {
                        let e = r.default.getPlanIdsForSkus(s).filter(e => !d || a.PREMIUM_PLANS.has(e));
                        return e.length > 0 ? r.default.get(e[0]) : null
                    }),
                    h = null == f ? [] : (0, i.getCurrencies)(f.id, c, d),
                    C = null !== (n = null !== (t = h.find(e => e === (null == o ? void 0 : o.currency))) && void 0 !== t ? t : h[0]) && void 0 !== n ? n : l.CurrencyCodes.USD;
                return {
                    ...(0, i.useCurrencyWithPaymentSourceChange)(C, null == f ? void 0 : f.id, c, d, s),
                    currencies: h
                }
            }
        },
        986681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var u = n("884691"),
                r = n("446674"),
                i = n("850068"),
                a = n("357957");

            function l(e) {
                let {
                    isGift: t,
                    activeSubscription: n
                } = e, {
                    defaultPaymentSourceId: l,
                    paymentSources: o,
                    hasFetchedPaymentSources: s
                } = (0, r.useStateFromStoresObject)([a.default], () => ({
                    defaultPaymentSourceId: a.default.defaultPaymentSourceId,
                    paymentSources: a.default.paymentSources,
                    hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
                })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = u.useState(() => c(t, n, l));
                return u.useEffect(() => {
                    s ? f(c(t, n, l)) : (0, i.fetchPaymentSources)()
                }, [s, t, n, l]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: d,
                    setPaymentSourceId: f,
                    hasFetchedPaymentSources: s
                }
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("748820"),
                i = n("77078"),
                a = n("112679"),
                l = n("55689"),
                o = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                h = n("49111"),
                C = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: E,
                    onComplete: S,
                    onSubscriptionConfirmation: m,
                    analyticsLocations: _,
                    analyticsObject: I,
                    analyticsLocation: T,
                    analyticsSourceLocation: g,
                    isGift: y = !1,
                    giftMessage: v,
                    subscriptionTier: L,
                    trialId: P,
                    postSuccessGuild: R,
                    openInvoiceId: N,
                    applicationId: A,
                    referralTrialOfferId: U,
                    giftRecipient: M,
                    returnRef: F,
                    subscription: b
                } = null != e ? e : {}, x = !1, w = (0, r.v4)(), H = s.default.getCurrentUser(), O = (0, f.isPremiumExactly)(H, C.PremiumTypes.TIER_2);
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...i
                        } = n;
                        return (0, u.jsx)(e, {
                            ...i,
                            loadId: w,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: y,
                            giftMessage: v,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                r(), null == E || E(e), e && (null == m || m(), !y && null != t && t === C.PremiumSubscriptionSKUs.TIER_2 && !O && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                x = !0, null == S || S(), !y && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: _,
                            analyticsObject: I,
                            analyticsLocation: T,
                            analyticsSourceLocation: g,
                            trialId: P,
                            postSuccessGuild: R,
                            planGroup: C.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: A,
                            referralTrialOfferId: U,
                            returnRef: F,
                            subscription: b
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !x && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: w,
                            payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                            location: null != T ? T : I,
                            source: g,
                            subscription_type: h.SubscriptionTypes.PREMIUM,
                            is_gift: y,
                            eligible_for_trial: null != P,
                            application_id: A,
                            location_stack: _
                        }), (0, a.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == E || E(x), x && (null == m || m())
                    }
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return r
                }
            });
            var u = n("913144");
            let r = e => {
                u.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return C
                },
                maybeFetchPremiumLikelihood: function() {
                    return E
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var u = n("884691"),
                r = n("65597"),
                i = n("872717"),
                a = n("913144"),
                l = n("775433"),
                o = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                h = n("49111");
            let C = "nonSubscriber";
            async function p() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [C]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function E(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), u = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                m(r, u, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([o.default], () => o.default.getCurrentUser());
                u.useEffect(() => {
                    m(a, i, t, n)
                }, [a, i, t, n])
            }

            function m(e, t, n, u) {
                null != e && !(0, c.isPremium)(e) && n && (t && p(), u && (!s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("446674"),
                r = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = i;
            class l extends u.default.Store {
                initialize() {
                    a = i
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var o = new l(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var u = n("862205");
            let r = (0, u.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var i = r
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("884691"),
                r = n("446674"),
                i = n("913144"),
                a = n("850068"),
                l = n("271938"),
                o = n("160299"),
                s = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([l.default], () => l.default.isAuthenticated());
                return u.useEffect(() => {
                    i.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && a.fetchPaymentSources()
                    })
                }, [n]), u.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return E
                },
                default: function() {
                    return m
                }
            });
            var u, r, i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (u = r || (r = {})).DEFAULT = "default", u.SMALL = "small";
            let C = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                p = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class E extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...u
                    } = this.props;
                    return (0, i.jsx)(s.default.div, {
                        ...u,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, i.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: C[t],
                            children: (0, i.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            E.defaultProps = {
                shineSize: "default"
            };
            let S = e => {
                let {
                    children: t,
                    className: n,
                    disabled: u,
                    submitting: r,
                    pauseAnimation: l,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: C,
                    onlyShineOnHover: p,
                    ...S
                } = e, m = a.createRef(), _ = (0, d.default)(m), I = !u && !r && !0 !== l && (!p || _);
                return (0, i.jsxs)(c.Button, {
                    buttonRef: m,
                    ...S,
                    className: o(h.shinyButton, n),
                    disabled: u,
                    submitting: r,
                    children: [t, I ? (0, i.jsx)(E, {
                        shinePaused: f,
                        className: o(h.buttonShine, p ? h.onlyShineOnHover : void 0, C),
                        shineSize: s
                    }) : null]
                })
            };
            S.ShineSizes = r;
            var m = S
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return l
                },
                UID: function() {
                    return o
                }
            });
            var u = n("995008"),
                r = n.n(u),
                i = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                l = () => (0, i.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(l())
                }
        },
        743826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("422244"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 23,
                        height: n = 18,
                        color: r = "currentColor",
                        ...i
                    } = e;
                    return (0, u.jsx)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 23 18",
                        fill: "none",
                        children: (0, u.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                            fill: r
                        })
                    })
                }, i.ShopIcon, void 0, {
                    size: 23
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("998460"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, u.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(l),
                        viewBox: "0 0 24 24",
                        children: (0, u.jsx)("path", {
                            fill: r,
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, i.GiftIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("202909"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: i = "0 0 24 24",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, u.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: i,
                        children: (0, u.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, i.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        468759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("833222"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: i,
                        foreground: l,
                        ...o
                    } = e;
                    return (0, u.jsxs)("svg", {
                        ...(0, a.default)(o),
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, u.jsx)("path", {
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }), (0, u.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                        })]
                    })
                }, i.DenyIcon, void 0, {
                    size: 24
                })
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("434657"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, u.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, u.jsx)("path", {
                            className: i,
                            fill: r,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, i.LockIcon, void 0, {
                    size: 24
                })
        },
        713518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return h
                },
                getCurrencies: function() {
                    return C
                },
                planHasCurrency: function() {
                    return p
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return E
                }
            }), n("222007");
            var u = n("884691"),
                r = n("627445"),
                i = n.n(r),
                a = n("913144"),
                l = n("775433"),
                o = n("308592"),
                s = n("10514"),
                c = n("719923"),
                d = n("49111"),
                f = n("646718");

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
                return null == e || s.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
                    a.default.wait(async () => {
                        await (0, l.fetchSubscriptionPlansBySKUs)(t), e()
                    })
                })
            }

            function C(e, t, n) {
                let u, r = [],
                    a = [],
                    l = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return i(u = "string" == typeof e ? s.default.get(e) : e, "subscription plan not loaded"), null != t && s.default.hasPaymentSourceForSKUId(t, u.skuId) && (l.paymentSourceId = t), (r = (a = (0, c.experimentalGetPrices)(u.id, l)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
            }

            function p(e, t, n) {
                let u = s.default.get(e);
                i(null != u, "plan is undefined");
                let r = C(u, n, !1);
                return r.includes(t)
            }

            function E(e, t, n, r, i) {
                let [a, l] = u.useReducer((e, t) => ({
                    ...e,
                    ...t
                }), null != n ? {
                    paymentSourceId: n,
                    currency: e,
                    loaded: !1
                } : {
                    currency: e,
                    loaded: !1
                }), c = (0, o.useSubscriptionPlansLoaded)(i);
                u.useEffect(() => {
                    let e = async () => {
                        await h(n, i);
                        let e = [];
                        null != t && null != s.default.get(t) && (e = C(t, n, r)), e.length > 0 ? l({
                            paymentSourceId: n,
                            currency: e[0],
                            loaded: !0
                        }) : l({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    e()
                }, [n, JSON.stringify(i), t, r, c]);
                let d = a.paymentSourceId !== n || null == t || !c || !0 !== a.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: a,
                    setCurrency: e => {
                        l({
                            currency: e
                        })
                    },
                    currencyLoading: d
                }
            }
        }
    }
]);