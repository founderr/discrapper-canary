(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83350"], {
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        316718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var l = n("872717"),
                r = n("913144"),
                i = n("271560"),
                s = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), l.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                    let e = await l.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
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
            async function u() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return s
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var l = n("913144");

            function r(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                l.default.wait(() => l.default.dispatch({
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
            var l = n("913144");

            function r() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        639055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeDropperIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m16.25 2.25-2 2-.63-.63a3 3 0 0 0-4.24 0l-.85.85c-.3.3-.3.77 0 1.06l9.94 9.94c.3.3.77.3 1.06 0l.85-.85a3 3 0 0 0 0-4.24l-.63-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.3 9.7a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-4.84 4.84a5 5 0 0 1-2.7 1.39c-.47.08-.86.42-1.1.83a2.5 2.5 0 1 1-3.42-3.42c.41-.24.75-.63.83-1.1a5 5 0 0 1 1.4-2.7L9.28 9.7Z",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        49097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SparklesIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M18.14 2.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19l-.51-1.38ZM10.6 9.11a1.7 1.7 0 0 0-3.2 0l-.84 2.27a2 2 0 0 1-1.18 1.18l-2.27.85a1.7 1.7 0 0 0 0 3.18l2.27.85a2 2 0 0 1 1.18 1.18l.85 2.27a1.7 1.7 0 0 0 3.18 0l.85-2.27a2 2 0 0 1 1.18-1.18l2.27-.85a1.7 1.7 0 0 0 0-3.18l-2.27-.85a2 2 0 0 1-1.18-1.18l-.85-2.27Z",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: a
                    })]
                })
            }
        },
        449826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UndoIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
                        className: a
                    })
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: a
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return i
                }
            });
            var l = n("884691"),
                r = n("599110");
            let i = () => l.useContext(r.AnalyticsContext)
        },
        248559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var l = n("884691"),
                r = () => {
                    let [e, t] = (0, l.useState)(null);
                    return (0, l.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
                    }, []), e
                }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var l = n("884691");

            function r(e) {
                let [t, n] = (0, l.useState)(!1), r = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [r]), t
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691");
            let r = l.createContext(void 0);
            var i = r
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var l = n("49111");

            function r(e, t) {
                return t !== l.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("871388"),
                r = n("49111");

            function i(e) {
                return (0, l.default)(e, r.ActivityFlags.EMBEDDED)
            }
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
            var l = n("446674"),
                r = n("605250"),
                i = n("357957"),
                s = n("10514"),
                a = n("521012"),
                o = n("646718");
            new r.default("useSubscriptionPlansLoaded");
            let u = e => {};

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, l.useStateFromStores)([i.default, s.default, a.default], () => d(e, [i.default, s.default, a.default]), [e])
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, l, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, s.default, a.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    f = l.isLoadedForSKUs(t),
                    h = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
                if (null != h && !l.hasPaymentSourceForSKUIds(h, t)) return u("subscription payment source ".concat(h, " not loaded for ").concat(t)), !1;
                if (null != d && !l.hasPaymentSourceForSKUIds(d, t)) return u("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
                for (let e of c)
                    if (!l.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
                return u("isLoadedForSKUs ".concat(f)), f
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return m
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                i = n("446674"),
                s = n("77078"),
                a = n("305961"),
                o = n("145131"),
                u = n("599110"),
                c = n("335189"),
                d = n("473591"),
                f = n("980215"),
                h = n("879253"),
                E = n("709594"),
                p = n("49111"),
                C = n("782340"),
                _ = n("947399");

            function m(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: m,
                    isFetchingSettings: v,
                    isSavingSettings: I,
                    hasPendingChanges: g,
                    errors: S
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    settings: d.default.getSettings(n),
                    isFetchingSettings: d.default.isFetchingSettings(n),
                    isSavingSettings: d.default.isSavingSettings(),
                    hasPendingChanges: d.default.hasPendingChanges(),
                    errors: d.default.getErrors()
                })), R = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(n)), N = (0, f.useClydeProfilesEnabled)(R), [L, T] = r.useState(!1);
                r.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
                    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
                }), []), r.useEffect(() => {
                    (0, c.fetchClydeSettings)(n, !0)
                }, [n]), r.useEffect(() => {
                    (g || null != S) && T(!1)
                }, [g, S]);
                let x = async () => {
                    if (null == n || !d.default.hasPendingChanges()) return;
                    let e = d.default.getPendingUpdates();
                    await (0, c.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), T(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)("div", {
                            className: _.heading,
                            children: (0, l.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: C.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, l.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, l.jsx)(s.ScrollerAuto, {
                        className: _.content,
                        children: v || null == m ? (0, l.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [N && (0, l.jsx)(E.default, {
                                guildId: n
                            }), null != m && (0, l.jsx)("div", {
                                className: _.section,
                                children: (0, l.jsx)(h.ClydeEditProfileModalPersonalitySection, {
                                    settings: m
                                })
                            })]
                        })
                    }), (0, l.jsxs)(s.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: _.footer,
                        children: [(0, l.jsx)("div", {
                            className: _.resetButtonContainer,
                            children: (0, l.jsx)(s.Button, {
                                onClick: () => {
                                    (0, c.resetPendingChanges)(), u.default.track(p.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !g,
                                children: C.default.Messages.RESET
                            })
                        }), g && null == S && (0, l.jsx)("div", {
                            className: _.pendingChangesMessage,
                            children: C.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), L && (0, l.jsx)("div", {
                            className: _.successfullSaveMessage,
                            children: C.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != S && (0, l.jsx)("div", {
                            className: _.errorMessage,
                            children: C.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(s.Button, {
                                onClick: x,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: I,
                                disabled: !g,
                                children: C.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: r
                } = e;
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, l.jsx)(m, {
                        onClose: n,
                        guildId: r
                    })
                })
            }
        },
        879253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return _
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                i = n("65597"),
                s = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                c = n("599110"),
                d = n("335189"),
                f = n("473591"),
                h = n("680894"),
                E = n("49111"),
                p = n("782340"),
                C = n("192731");

            function _(e) {
                var t;
                let {
                    settings: n
                } = e, [_, m] = r.useState(!1), [v, I] = r.useState(), {
                    pendingPersonality: g,
                    errors: S
                } = (0, i.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [R, N] = r.useState(), L = null != g && v === g, T = null != S && Number(S.code) === E.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? S.message : void 0, x = L ? p.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : p.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, l.jsxs)(a.default, {
                    title: p.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, l.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: C.description,
                        children: [p.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(s.Anchor, {
                            href: h.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: p.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, l.jsx)(s.TextArea, {
                        value: null !== (t = null != g ? g : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, d.setPendingPersonality)(e)
                        },
                        placeholder: p.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: h.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: _,
                        autosize: !0
                    }), null != T ? (0, l.jsx)(s.FormErrorBlock, {
                        className: C.errorBlock,
                        children: T
                    }) : null, (0, l.jsxs)("div", {
                        className: C.generateButtonContainer,
                        children: [(0, l.jsx)(s.Button, {
                            color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: C.generateButton,
                            onClick: () => {
                                if (L && null != R) {
                                    (0, d.setPendingPersonality)(R), N(void 0);
                                    return
                                }
                                null != g && "" !== g.trim() && (c.default.track(E.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), m(!0), (0, d.generatePersonality)(g).then(e => {
                                    null != e && (N(g), I(e), (0, d.setPendingPersonality)(e, !0)), m(!1)
                                }))
                            },
                            disabled: null == g || "" === g.trim(),
                            submitting: _,
                            children: L ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: C.buttonIcon
                                }), p.default.Messages.UNDO]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: C.buttonIcon
                                }), p.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: x
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                s = n("446674"),
                a = n("184900"),
                o = n("11899"),
                u = n("447645"),
                c = n("569460"),
                d = n("52704"),
                f = n("121370"),
                h = n("26989"),
                E = n("305961"),
                p = n("697218"),
                C = n("335189"),
                _ = n("473591"),
                m = n("680894"),
                v = n("782340"),
                I = n("618641");

            function g(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: r,
                    pendingThemeColors: i
                } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), a = (0, s.useStateFromStores)([h.default], () => h.default.getMember(t, m.CLYDE_AI_USER_ID));
                return (0, l.jsxs)("div", {
                    className: I.editProfileSections,
                    children: [(0, l.jsx)(c.default, {
                        placeholder: v.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: r,
                        onGlobalNameChange: C.setPendingNick
                    }), (0, l.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: C.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: v.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, l.jsx)(d.default, {
                        guildId: t,
                        onBannerChange: C.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, l.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != i ? i : void 0,
                        onThemeColorsChange: C.setPendingThemeColors
                    })]
                })
            }

            function S(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: r,
                    pendingBanner: u,
                    pendingThemeColors: c
                } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), d = (0, s.useStateFromStores)([p.default], () => p.default.getUser(m.CLYDE_AI_USER_ID));
                i(null != d, "Clyde User must exist");
                let f = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(t));
                return (0, l.jsx)(o.default, {
                    className: I.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, l.jsx)(a.default, {
                        user: d,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: C.setPendingAvatar,
                        onBannerChange: C.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: r,
                        pendingBanner: u,
                        pendingThemeColors: null != c ? c : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, l.jsx)(g, {
                        guildId: t,
                        clydeUser: d
                    })
                })
            }
        },
        854381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                r = n("10514"),
                i = n("713518"),
                s = n("646718"),
                a = n("843455");

            function o(e) {
                var t, n;
                let {
                    activeSubscription: o,
                    skuIDs: u,
                    paymentSourceId: c,
                    isGift: d
                } = e;
                u = u.filter(e => e !== s.PremiumSubscriptionSKUs.NONE);
                let f = (0, l.useStateFromStores)([r.default], () => {
                        let e = r.default.getPlanIdsForSkus(u).filter(e => !d || s.PREMIUM_PLANS.has(e));
                        return e.length > 0 ? r.default.get(e[0]) : null
                    }),
                    h = null == f ? [] : (0, i.getCurrencies)(f.id, c, d),
                    E = null !== (n = null !== (t = h.find(e => e === (null == o ? void 0 : o.currency))) && void 0 !== t ? t : h[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
                return {
                    ...(0, i.useCurrencyWithPaymentSourceChange)(E, null == f ? void 0 : f.id, c, d, u),
                    currencies: h
                }
            }
        },
        986681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var l = n("884691"),
                r = n("446674"),
                i = n("850068"),
                s = n("357957");

            function a(e) {
                let {
                    isGift: t,
                    activeSubscription: n
                } = e, {
                    defaultPaymentSourceId: a,
                    paymentSources: o,
                    hasFetchedPaymentSources: u
                } = (0, r.useStateFromStoresObject)([s.default], () => ({
                    defaultPaymentSourceId: s.default.defaultPaymentSourceId,
                    paymentSources: s.default.paymentSources,
                    hasFetchedPaymentSources: s.default.hasFetchedPaymentSources
                })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = l.useState(() => c(t, n, a));
                return l.useEffect(() => {
                    u ? f(c(t, n, a)) : (0, i.fetchPaymentSources)()
                }, [u, t, n, a]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: d,
                    setPaymentSourceId: f,
                    hasFetchedPaymentSources: u
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
            var l = n("37983");
            n("884691");
            var r = n("748820"),
                i = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("676379"),
                u = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                h = n("49111"),
                E = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: C,
                    onComplete: _,
                    onSubscriptionConfirmation: m,
                    analyticsLocations: v,
                    analyticsObject: I,
                    analyticsLocation: g,
                    analyticsSourceLocation: S,
                    isGift: R = !1,
                    giftMessage: N,
                    subscriptionTier: L,
                    trialId: T,
                    postSuccessGuild: x,
                    openInvoiceId: A,
                    applicationId: M,
                    referralTrialOfferId: y,
                    giftRecipient: P,
                    returnRef: b,
                    subscription: j
                } = null != e ? e : {}, O = !1, F = (0, r.v4)(), w = u.default.getCurrentUser(), U = (0, f.isPremiumExactly)(w, E.PremiumTypes.TIER_2);
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...i
                        } = n;
                        return (0, l.jsx)(e, {
                            ...i,
                            loadId: F,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: R,
                            giftMessage: N,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                r(), null == C || C(e), e && (null == m || m(), !R && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                O = !0, null == _ || _(), !R && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: v,
                            analyticsObject: I,
                            analyticsLocation: g,
                            analyticsSourceLocation: S,
                            trialId: T,
                            postSuccessGuild: x,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: M,
                            referralTrialOfferId: y,
                            returnRef: b,
                            subscription: j
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: F,
                            payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : I,
                            source: S,
                            subscription_type: h.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != T,
                            application_id: M,
                            location_stack: v
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(O), O && (null == m || m())
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
            var l = n("913144");
            let r = e => {
                l.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return c
                },
                resolveReferralTrialOffer: function() {
                    return d
                }
            });
            var l = n("872717"),
                r = n("913144"),
                i = n("819689"),
                s = n("18494"),
                a = n("49111");
            let o = () => (r.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), l.default.get({
                    url: a.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), l.default.post({
                    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    var t;
                    let n = await l.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (e) {
                    if (r.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && i.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function d(e) {
                try {
                    var t;
                    let n = await l.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (t) {
                    r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("637612"),
                r = n("446674"),
                i = n("913144"),
                s = n("697218"),
                a = n("179935"),
                o = n("49111");
            let u = null,
                c = {},
                d = [],
                f = new Set,
                h = !1,
                E = new Set,
                p = new Set,
                C = {},
                _ = 0,
                m = null,
                v = () => !0;

            function I(e) {
                E.add(e)
            }

            function g(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => S(e))
            }

            function S(e) {
                let t = e.type === l.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!p.has(t) && !E.has(t)) {
                    var n;
                    n = t, E.add(n), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class R extends r.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], v)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !h && _ < 5 && (null == m || m < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == d ? [] : d
                }
                isFetchingReferralsRemaining() {
                    return h
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return C[e]
                }
                isResolving(e) {
                    return E.has(e)
                }
            }
            R.displayName = "ReferralTrialStore";
            var N = new R(i.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!h && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !E.has(t)) {
                        var l;
                        l = t, E.add(l), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    h = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    h = !1, u = t, d = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    h = !1, _ += 1, m = Date.now() + 1e3 * Math.pow(2, _)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    f.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    c[t] = n, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, a.fetchReferralsRemaining)(), C[t.id] = t, d = [...d, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (E.delete(t.id), p.add(t.id), C[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    E.delete(t), p.add(t)
                },
                LOAD_MESSAGES_SUCCESS: g,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    S(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: g,
                LOGOUT: function() {
                    u = null, c = {}, d = [], f = new Set, h = !1, E = new Set, p = new Set, C = {}, _ = 0, m = null
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return C
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return _
                }
            });
            var l = n("884691"),
                r = n("65597"),
                i = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                h = n("49111");
            let E = "nonSubscriber";
            async function p() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function C(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                m(r, l, t, n)
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                l.useEffect(() => {
                    m(s, i, t, n)
                }, [s, i, t, n])
            }

            function m(e, t, n, l) {
                null != e && !(0, c.isPremium)(e) && n && (t && p(), l && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                r = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = i;
            class a extends l.default.Store {
                initialize() {
                    s = i
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
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
            var l = n("862205");
            let r = (0, l.createExperiment)({
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
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var l = n("65597"),
                r = n("340412"),
                i = n("540692"),
                s = n("833516"),
                a = n("646718");

            function o(e) {
                var t, n, o;
                let u = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    d = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    f = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    h = (0, l.default)([i.default], () => void 0 === e ? null : i.default.getRelevantUserTrialOffer(e));
                return null !== (o = null !== (n = null !== (t = null != h ? h : u) && void 0 !== t ? t : c) && void 0 !== n ? n : d) && void 0 !== o ? o : f
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                r = n("446674"),
                i = n("862337"),
                s = n("697218"),
                a = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [n, c] = l.useState(u(t)),
                    d = (0, r.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new i.Timeout,
                            l = () => {
                                let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(r, () => {
                                    !n && u(t) ? c(!0) : l()
                                })
                            };
                        return l(), () => e.stop()
                    }
                }, [n, t]), n || d ? null : t
            }
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("748820"),
                o = n("509043"),
                u = n("669491"),
                c = n("77078"),
                d = n("634634"),
                f = n("449918"),
                h = n("973262"),
                E = n("832132"),
                p = n("771325"),
                C = n("49111"),
                _ = n("782340"),
                m = n("727125");

            function v(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: i,
                    suggestedColors: v,
                    disabled: I,
                    label: g,
                    colorPickerMiddle: S,
                    colorPickerFooter: R,
                    showEyeDropper: N
                } = e, L = r.useRef(null), T = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), x = u.default.colors.BACKGROUND_ACCENT.css, A = (0, p.isColorDark)(i), M = (0, o.int2hex)(i), y = M === T ? x : M, P = (0, f.getColor)(A ? C.Color.WHITE_500 : C.Color.PRIMARY_530), b = (0, d.default)(S), j = (0, d.default)(R), [O, F] = r.useState((0, a.v4)());
                return r.useEffect(() => {
                    (b !== S || j !== R) && F((0, a.v4)())
                }, [R, S, j, b]), (0, l.jsx)(c.Popout, {
                    positionKey: O,
                    renderPopout: e => (0, l.jsx)(h.CustomColorPicker, {
                        ...e,
                        value: i,
                        onChange: t,
                        suggestedColors: v,
                        middle: S,
                        footer: R,
                        showEyeDropper: N
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, l.jsxs)("div", {
                            ref: L,
                            className: s(m.colorSwatch, {
                                [m.disabled]: I
                            }),
                            children: [(0, l.jsx)(c.Clickable, {
                                ...n,
                                tabIndex: I ? -1 : 0,
                                onClick: I ? C.NOOP : t,
                                style: {
                                    backgroundColor: M,
                                    borderColor: y
                                },
                                className: m.swatch,
                                "aria-label": _.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: L
                                },
                                children: (0, l.jsx)(E.default, {
                                    className: m.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: P
                                })
                            }), g]
                        })
                    }
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function c(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, l.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, l.jsx)(s.Clickable, {
                        ...e,
                        children: (0, l.jsx)(a.default, {
                            className: i(u.nitroWheel, n)
                        })
                    })
                })
            }
        },
        11899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("394846"),
                a = n("77078"),
                o = n("570697"),
                u = n("782340"),
                c = n("56438");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: r,
                    profilePreview: d,
                    previewTitle: f
                } = e, h = () => (0, l.jsx)(o.default, {
                    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: c.preview,
                    children: d
                });
                return (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsxs)(a.FormSection, {
                        className: c.profileCustomizationSection,
                        children: [s.isMobile && h(), (0, l.jsxs)("div", {
                            className: i(c.baseLayout, r),
                            children: [t, !s.isMobile && h()]
                        })]
                    })
                })
            }
        },
        447645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("359223");
            let h = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function E(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: r,
                    sectionTitle: E,
                    changeAvatarButtonText: p,
                    guildId: C,
                    className: _,
                    disabled: m = !1,
                    isTryItOutFlow: v = !1,
                    forcedDivider: I,
                    withHighlight: g = !1
                } = e, S = g ? a.default : s.Button;
                return (0, l.jsx)(u.default, {
                    className: _,
                    title: E,
                    errors: n,
                    disabled: m,
                    forcedDivider: I,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(S, {
                            className: i({
                                [f.buttonHighlighted]: g
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, C, v, v ? h : void 0),
                            children: null != p ? p : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, l.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != C ? d.default.Messages.USER_SETTINGS_RESET_AVATAR : d.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("781738");
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("254490"),
                o = n("891653"),
                u = n("632892"),
                c = n("326908");

            function d(e) {
                let {
                    errors: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: c.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, a.sizeString)(t)
                        })
                    }, t))
                })
            }

            function f(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: a,
                    children: f,
                    className: h,
                    errors: E,
                    disabled: p = !1,
                    hideDivider: C = !1,
                    showBorder: _ = !1,
                    borderType: m,
                    hasBackground: v = !1,
                    forcedDivider: I = !1,
                    showPremiumIcon: g = !1
                } = e;
                return (0, l.jsx)("div", {
                    className: i(c.customizationSection, h, {
                        [c.disabled]: p,
                        [c.hideDivider]: C,
                        [c.showBorder]: _,
                        [c.withDivider]: I
                    }),
                    children: (0, l.jsxs)(u.default, {
                        className: c.customizationSectionBorder,
                        backgroundClassName: c.customizationSectionBackground,
                        isShown: _,
                        type: m,
                        hasBackground: v,
                        children: [(0, l.jsxs)(s.FormTitle, {
                            className: c.title,
                            id: r,
                            children: [t, g && (0, l.jsx)(o.default, {}), n]
                        }), null != a ? (0, l.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: c.sectionDescription,
                            children: a
                        }) : null, f, null != E && (0, l.jsx)(d, {
                            errors: E
                        })]
                    })
                })
            }
        },
        569460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("570697"),
                s = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, l.jsx)(i.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, l.jsx)("div", {
                        children: (0, l.jsx)(r.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: s.DISPLAY_NAME_MAX_LENGTH,
                            onChange: e.onGlobalNameChange,
                            value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ""
                        })
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var l, r, i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("623682");
            (l = r || (r = {})).PREMIUM = "premium", l.LIMITED = "limited";
            let c = {
                premium: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                limited: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var d = s.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: l = "premium",
                    isShown: r,
                    hasBackground: s = !1,
                    className: a,
                    backgroundClassName: d
                } = e;
                if (!r) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: h
                } = c[l];
                return (0, i.jsx)("div", {
                    ref: t,
                    className: o(f, a),
                    children: (0, i.jsx)("div", {
                        className: o(s ? h : u.background, d),
                        children: n
                    })
                })
            })
        },
        52704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("650130");

            function h(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: r,
                    guildId: h,
                    className: E,
                    disabled: p = !1,
                    showPremiumIcon: C = !0,
                    isTryItOutFlow: _ = !1,
                    forcedDivider: m,
                    withHighlight: v = !1
                } = e, I = v ? a.default : s.Button;
                return (0, l.jsx)(u.default, {
                    className: E,
                    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: C,
                    errors: n,
                    disabled: p,
                    forcedDivider: m,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(I, {
                            className: i({
                                [f.buttonHighlighted]: v
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, h, _, void 0),
                            children: d.default.Messages.CHANGE_BANNER
                        }), t && (0, l.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != h ? d.default.Messages.USER_SETTINGS_RESET_BANNER : d.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("969176"),
                a = n.n(s),
                o = n("669491"),
                u = n("77078"),
                c = n("462274"),
                d = n("217513"),
                f = n("528438"),
                h = n("719923"),
                E = n("409214"),
                p = n("570697"),
                C = n("782340"),
                _ = n("431416");

            function m(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: r,
                    onThemeColorsChange: s,
                    preventDisabled: m,
                    guildId: v,
                    className: I,
                    showPremiumIcon: g = !0,
                    showResetThemeButton: S = !1,
                    forcedDivider: R
                } = e, N = (0, d.default)(t.id, v), [L, T] = (0, f.default)(t, N, {
                    pendingThemeColors: r,
                    isPreview: !0
                }), x = h.default.canUsePremiumProfileCustomization(t), A = null != n ? n : t.getAvatarURL(v, 80), M = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), y = (0, c.useAvatarColors)(A, M, !1);
                if (null == L || null == T) return null;
                let P = e => {
                    let t = a(e, null == N ? void 0 : N.themeColors);
                    s(t ? void 0 : e)
                };
                return (0, l.jsx)(p.default, {
                    title: C.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !x && !m,
                    className: i(_.profileThemesSection, I),
                    showPremiumIcon: g,
                    forcedDivider: R,
                    children: (0, l.jsxs)("div", {
                        className: _.sectionContainer,
                        children: [(0, l.jsx)("div", {
                            className: _.sparkleContainer,
                            children: (0, l.jsx)(E.default, {
                                onChange: e => P([e, T]),
                                color: L,
                                suggestedColors: y,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: _.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: _.sparkleContainer,
                            children: (0, l.jsx)(E.default, {
                                onChange: e => P([L, e]),
                                color: T,
                                suggestedColors: y,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: _.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), S && null != v && (0, l.jsx)(u.Button, {
                            className: _.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => P([null, null]),
                            children: C.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return o
                },
                closeUserProfileModal: function() {
                    return u
                }
            });
            var l = n("913144"),
                r = n("327037"),
                i = n("697218"),
                s = n("506885"),
                a = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = a.ME,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, h = i.default.getUser(t), E = o !== a.ME ? o : void 0;
                if (null == h) return (0, r.fetchProfile)(t, {
                    friendToken: c,
                    guildId: E
                }).then(() => {
                    l.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: u,
                        friendToken: c,
                        autoFocusNote: d,
                        analyticsLocation: f
                    })
                });
                (0, s.default)(t, h.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: E
                }), l.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                })
            }

            function u() {
                l.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        973262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DefaultColorButton: function() {
                    return g
                },
                CustomColorButton: function() {
                    return S
                },
                CustomColorPicker: function() {
                    return R
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("974667"),
                o = n("509043"),
                u = n("77078"),
                c = n("248559"),
                d = n("449918"),
                f = n("526975"),
                h = n("36694"),
                E = n("422403"),
                p = n("664336"),
                C = n("49111"),
                _ = n("782340"),
                m = n("169225");
            let v = () => Promise.resolve();

            function I(e) {
                let {
                    color: t,
                    isDefault: n = !1,
                    isCustom: r = !1,
                    isSelected: i = !1,
                    disabled: c = !1,
                    style: f = {},
                    onClick: p,
                    "aria-label": _
                } = e, v = (0, a.useListItem)("color-".concat(t)), I = null != t ? (0, o.int2hex)(t) : f.backgroundColor, g = !1;
                return r && !i ? g = !0 : (r || i) && (g = (0, o.getDarkness)(t) > .1), (0, l.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, l.jsxs)("button", {
                        type: "button",
                        className: s(m.colorPickerSwatch, {
                            [m.disabled]: c,
                            [m.default]: n,
                            [m.custom]: r,
                            [m.noColor]: null == t
                        }),
                        disabled: c,
                        onClick: () => null == p ? void 0 : p(t),
                        style: {
                            ...f,
                            backgroundColor: I
                        },
                        "aria-label": null != _ ? _ : I,
                        ...v,
                        children: [r ? (0, l.jsx)(E.default, {
                            className: m.colorPickerDropper,
                            foreground: m.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(g ? C.Color.WHITE_500 : C.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                t = 16;
                            if ((r || n) && (e = 32, t = 24), i) return (0, l.jsx)(h.default, {
                                width: e,
                                height: t,
                                color: (0, d.getColor)(g ? C.Color.WHITE_500 : C.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class g extends r.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: t,
                        value: n,
                        disabled: r
                    } = this.props;
                    return (0, l.jsx)(I, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === n || 0 === n,
                        onClick: t,
                        disabled: r
                    })
                }
            }
            class S extends r.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: t,
                        disabled: n,
                        "aria-label": r
                    } = this.props;
                    return (0, l.jsx)(I, {
                        isCustom: !0,
                        color: e,
                        isSelected: t === e,
                        disabled: n,
                        "aria-label": r
                    })
                }
            }
            let R = r.memo(e => {
                let {
                    value: t,
                    onChange: n,
                    onClose: i,
                    suggestedColors: s,
                    middle: a,
                    footer: d,
                    showEyeDropper: h
                } = e, C = (0, c.default)(), [v, I] = r.useState(() => {
                    let e = null != t ? t : 0,
                        n = (0, o.int2hex)(e);
                    return {
                        current: e,
                        pending: n,
                        input: n
                    }
                });
                r.useEffect(() => {
                    if (null == t || t === v.current) return;
                    let e = (0, o.int2hex)(t);
                    I({
                        current: t,
                        pending: e,
                        input: e
                    })
                }, [t, v]), r.useEffect(() => i, [i]);
                let g = e => {
                        let t = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, o.isValidHex)(t)) {
                            I(e => ({
                                ...e,
                                input: t
                            }));
                            return
                        }
                        let l = (0, o.hex2int)(t);
                        I({
                            current: l,
                            pending: t,
                            input: t
                        }), n(l)
                    },
                    S = async () => {
                        if (null != C) try {
                            let {
                                sRGBHex: e
                            } = await C.open();
                            g(e)
                        } catch {}
                    }, R = e => {
                        I(t => ({
                            ...t,
                            pending: e,
                            input: e
                        }))
                    }, N = e => {
                        n((0, o.hex2int)(e))
                    };
                return (0, l.jsxs)(u.Dialog, {
                    "aria-label": _.default.Messages.PICK_A_COLOR,
                    className: m.customColorPicker,
                    children: [(0, l.jsx)(f.default, {
                        onChange: e => {
                            let {
                                hex: t
                            } = e;
                            return R(t)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: t
                            } = e;
                            return N(t)
                        },
                        color: v.pending
                    }), a, (0, l.jsxs)("div", {
                        className: m.customColorPickerInputContainer,
                        children: [h && null != C && (0, l.jsx)(p.Icon, {
                            onClick: S,
                            tooltip: _.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: m.customColorPickerEyeDropper,
                            icon: E.default
                        }), (0, l.jsx)(u.TextInput, {
                            className: m.customColorPickerInput,
                            value: v.input,
                            onChange: g,
                            maxLength: 7
                        })]
                    }), null != s && s.length > 0 && (0, l.jsx)("div", {
                        className: m.suggestedColors,
                        children: s.map((e, t) => (0, l.jsx)(u.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: m.suggestedColor,
                            onClick: () => g(e)
                        }, "".concat(e, "-").concat(t)))
                    }), d]
                })
            });

            function N(e) {
                let {
                    className: t,
                    defaultColor: n,
                    customColor: r,
                    colors: i,
                    value: o,
                    disabled: u,
                    onChange: c,
                    renderDefaultButton: d,
                    renderCustomButton: f,
                    colorContainerClassName: h
                } = e, E = e => (0, l.jsx)("div", {
                    className: m.colorPickerRow,
                    children: e.map(e => (0, l.jsx)(I, {
                        color: e,
                        isSelected: e === o,
                        onClick: c,
                        disabled: u
                    }, e))
                }), p = i.slice(0, i.length / 2), C = i.slice(i.length / 2, i.length), _ = (0, a.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: v,
                    scrollToEnd: v
                });
                return (0, l.jsx)(a.ListNavigatorProvider, {
                    navigator: _,
                    children: (0, l.jsx)(a.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: i,
                                ...a
                            } = e;
                            return (0, l.jsxs)("div", {
                                className: s(m.container, t),
                                ref: i,
                                ...a,
                                children: [(0, l.jsx)("div", {
                                    className: s(m.defaultContainer, h),
                                    children: d({
                                        value: o,
                                        color: n,
                                        onChange: c,
                                        disabled: u
                                    })
                                }), (0, l.jsx)("div", {
                                    className: s(m.customContainer, h),
                                    children: f({
                                        value: o,
                                        customColor: r,
                                        disabled: u
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: m.presets,
                                    children: [E(p), E(C)]
                                })]
                            })
                        }
                    })
                })
            }
        },
        526975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("266937"),
                s = n("286458"),
                a = n("29799");
            let o = (0, i.CustomPicker)(e => (0, l.jsxs)("div", {
                className: a.wrapper,
                children: [(0, l.jsx)("div", {
                    className: a.saturation,
                    children: (0, l.jsx)(s.Saturation, {
                        ...e
                    })
                }), (0, l.jsx)("div", {
                    className: a.hue,
                    children: (0, l.jsx)(s.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var u = r.memo(o)
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: i,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(u.flowerStarContainer, i),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return m
                }
            });
            var l, r, i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (l = r || (r = {})).DEFAULT = "default", l.SMALL = "small";
            let E = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                p = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class C extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, i.jsx)(u.default.div, {
                        ...l,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, i.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, i.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: "default"
            };
            let _ = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: r,
                    pauseAnimation: a,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: p,
                    ..._
                } = e, m = s.createRef(), v = (0, d.default)(m), I = !l && !r && !0 !== a && (!p || v);
                return (0, i.jsxs)(c.Button, {
                    buttonRef: m,
                    ..._,
                    className: o(h.shinyButton, n),
                    disabled: l,
                    submitting: r,
                    children: [t, I ? (0, i.jsx)(C, {
                        shinePaused: f,
                        className: o(h.buttonShine, p ? h.onlyShineOnHover : void 0, E),
                        shineSize: u
                    }) : null]
                })
            };
            _.ShineSizes = r;
            var m = _
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: E = "currentColor",
                        transition: p = f.transition,
                        className: C,
                        foreground: _,
                        expanded: m,
                        ...v
                    } = e, {
                        enabled: I
                    } = (0, c.useRedesignIconContext)(), g = t;
                    if (!0 === m ? g = h.DOWN : !1 === m && (g = h.RIGHT), I) {
                        let e = {
                            [h.UP]: u.ChevronSmallUpIcon,
                            [h.DOWN]: s.ChevronSmallDownIcon,
                            [h.LEFT]: a.ChevronSmallLeftIcon,
                            [h.RIGHT]: o.ChevronSmallRightIcon
                        } [g];
                        return (0, l.jsx)(e, {
                            ...v,
                            className: C,
                            width: n,
                            height: r,
                            color: E,
                            colorClass: _
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: i(C, p, g),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(v),
                        children: (0, l.jsx)("path", {
                            className: _,
                            fill: "none",
                            stroke: E,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            E.Directions = h;
            var p = E
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("733154"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, i.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("505088"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, l.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, i.CircleXIcon, void 0, {
                    size: 24
                })
        },
        422403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("639055"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, l.jsx)("path", {
                                className: s,
                                fill: r,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, i.EyeDropperIcon, void 0, {
                    size: 16
                })
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("504318"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: r,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, i.PencilIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("75196"),
                i = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("998460"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
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
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("75196");

            function i(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, l.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("876726"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, i.PlayIcon, void 0, {
                    size: 16
                })
        },
        826432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("49097"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, i.SparklesIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("390300"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, i.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("287083"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, i.StageIcon, void 0, {
                    size: 32
                })
        },
        204203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("449826"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: r,
                            className: i,
                            fillRule: "evenodd",
                            d: "m18.984 2.345-2.473 2.603c2.67 1.564 4.473 4.456 4.473 7.766 0 4.624-3.507 8.441-8 8.941v-2.02c3.387-.488 6-3.4 6-6.92 0-2.745-1.592-5.12-3.898-6.266l-3.102 3.266v-7.37h7ZM6.733 8.085 5.235 6.762a8.976 8.976 0 0 0-2.139 4.583h2.027a7 7 0 0 1 1.61-3.26Zm-3.717 5.26h2a6.938 6.938 0 0 0 1.369 3.553l-1.426 1.427a8.945 8.945 0 0 1-1.943-4.98Zm7.968 8.31a8.918 8.918 0 0 1-4.61-1.916l1.425-1.425a6.964 6.964 0 0 0 3.185 1.321v2.02Z",
                            clipRule: "evenodd"
                        })
                    })
                }, i.UndoIcon, void 0, {
                    size: 24
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return p
                },
                Divider: function() {
                    return C
                },
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("353386"),
                o = n("394846"),
                u = n("77078"),
                c = n("597590"),
                d = n("980428"),
                f = n("772280"),
                h = n("587974"),
                E = n("133934");
            let p = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: r,
                        selected: i = !1,
                        disabled: a = !1,
                        showBadge: o = !1,
                        color: c,
                        foreground: d,
                        background: f,
                        icon: p,
                        onClick: C,
                        onContextMenu: _,
                        tooltip: m = null,
                        tooltipColor: v,
                        tooltipPosition: I = "bottom",
                        hideOnClick: g = !0,
                        role: S,
                        "aria-label": R,
                        "aria-hidden": N,
                        "aria-checked": L,
                        "aria-expanded": T,
                        "aria-haspopup": x
                    } = e, A = (0, l.jsx)(p, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: s(n, E.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: c
                    }), M = R;
                    return null == M && "string" == typeof m && (M = m), (0, l.jsx)(u.Tooltip, {
                        text: m,
                        color: v,
                        position: I,
                        hideOnClick: g,
                        children: e => {
                            let {
                                onMouseEnter: m,
                                onMouseLeave: v,
                                onFocus: I,
                                onBlur: g
                            } = e;
                            return null == C ? (0, l.jsx)("div", {
                                className: s(t, [E.iconWrapper]),
                                children: (0, l.jsx)(p, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: s(n, E.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != f ? f : void 0,
                                    color: c,
                                    "aria-hidden": N,
                                    onMouseEnter: m,
                                    onMouseLeave: v,
                                    onFocus: I,
                                    onBlur: g
                                })
                            }) : (0, l.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : C,
                                onContextMenu: a ? void 0 : _,
                                onMouseEnter: m,
                                onMouseLeave: v,
                                onFocus: I,
                                onBlur: g,
                                className: s(t, {
                                    [E.iconWrapper]: !0,
                                    [E.clickable]: !a && null != C,
                                    [E.selected]: i
                                }),
                                role: S,
                                "aria-label": M,
                                "aria-hidden": N,
                                "aria-checked": L,
                                "aria-haspopup": x,
                                "aria-expanded": T,
                                tabIndex: a || null == C ? -1 : 0,
                                children: [o ? (0, l.jsx)(h.default, {
                                    mask: h.default.Masks.HEADER_BAR_BADGE,
                                    children: A
                                }) : A, o ? (0, l.jsx)("span", {
                                    className: E.iconBadge
                                }) : null, r]
                            })
                        }
                    })
                },
                C = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: s(E.divider, t)
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: i,
                        childrenBottom: d,
                        toolbar: f,
                        onDoubleClick: h,
                        "aria-label": p,
                        "aria-labelledby": C,
                        role: _,
                        scrollable: m,
                        transparent: v = !1
                    } = e, I = r.useRef(null), g = r.useContext(c.default);
                    return (0, l.jsx)("section", {
                        className: s(t, E.container, {
                            [E.themed]: !v,
                            [E.transparent]: v,
                            [E.themedMobile]: o.isMobile
                        }),
                        "aria-label": p,
                        "aria-labelledby": C,
                        role: _,
                        ref: I,
                        children: (0, l.jsxs)(u.FocusRingScope, {
                            containerRef: I,
                            children: [(0, l.jsxs)("div", {
                                className: E.upperContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: s(E.children, n, {
                                        [E.scrollable]: m
                                    }),
                                    onDoubleClick: h,
                                    children: [o.isMobile && null != g ? (0, l.jsx)(a.default, {
                                        onClick: g,
                                        className: E.hamburger
                                    }) : null, i]
                                }), null != f ? (0, l.jsx)("div", {
                                    className: E.toolbar,
                                    children: f
                                }) : null]
                            }), d]
                        })
                    })
                };
            _.Icon = p, _.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: r,
                    onContextMenu: i,
                    onClick: a,
                    id: o,
                    muted: c = !1,
                    level: d = 1
                } = e, f = (0, l.jsx)(u.HeadingLevel, {
                    forceLevel: d,
                    children: (0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: c ? "header-secondary" : void 0,
                        className: s(t, E.title),
                        id: o,
                        children: r
                    })
                });
                return null != a ? (0, l.jsx)(u.Clickable, {
                    onClick: a,
                    onContextMenu: i,
                    className: s(n, E.titleWrapper),
                    children: f
                }) : (0, l.jsx)("div", {
                    className: s(n, E.titleWrapper),
                    onContextMenu: i,
                    children: f
                })
            }, _.Divider = C, _.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, l.jsx)(f.default, {
                    className: E.caret
                }) : (0, l.jsx)(d.default, {
                    className: E.caret
                })
            };
            var m = _
        },
        713518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return h
                },
                getCurrencies: function() {
                    return E
                },
                planHasCurrency: function() {
                    return p
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return C
                }
            }), n("222007");
            var l = n("884691"),
                r = n("627445"),
                i = n.n(r),
                s = n("913144"),
                a = n("775433"),
                o = n("308592"),
                u = n("10514"),
                c = n("719923"),
                d = n("49111"),
                f = n("646718");

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
                return null == e || u.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
                    s.default.wait(async () => {
                        await (0, a.fetchSubscriptionPlansBySKUs)(t), e()
                    })
                })
            }

            function E(e, t, n) {
                let l, r = [],
                    s = [],
                    a = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return i(l = "string" == typeof e ? u.default.get(e) : e, "subscription plan not loaded"), null != t && u.default.hasPaymentSourceForSKUId(t, l.skuId) && (a.paymentSourceId = t), (r = (s = (0, c.experimentalGetPrices)(l.id, a)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
            }

            function p(e, t, n) {
                let l = u.default.get(e);
                i(null != l, "plan is undefined");
                let r = E(l, n, !1);
                return r.includes(t)
            }

            function C(e, t, n, r, i) {
                let [s, a] = l.useReducer((e, t) => ({
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
                l.useEffect(() => {
                    let e = async () => {
                        await h(n, i);
                        let e = [];
                        null != t && null != u.default.get(t) && (e = E(t, n, r)), e.length > 0 ? a({
                            paymentSourceId: n,
                            currency: e[0],
                            loaded: !0
                        }) : a({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    e()
                }, [n, JSON.stringify(i), t, r, c]);
                let d = s.paymentSourceId !== n || null == t || !c || !0 !== s.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: s,
                    setCurrency: e => {
                        a({
                            currency: e
                        })
                    },
                    currencyLoading: d
                }
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var l = n("884691"),
                r = n("446674"),
                i = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = l.useContext(i.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var l, r = n("817736"),
                i = n("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            l = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, r.findDOMNode)(e);
                    (0, i.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = s) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var l = n("884691"),
                r = n("748820"),
                i = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends l.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return l.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: l
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new i.default({
                        root: t,
                        rootMargin: n,
                        threshold: l
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: l.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return l.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var l = n("157590"),
                r = n("235855")
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("421898"),
                i = n.n(r),
                s = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...r
                    } = e;
                    return (0, l.jsxs)("button", {
                        type: "button",
                        className: i(s.btnHamburger, {
                            [s.btnHamburgerOpen]: t
                        }, n),
                        ...r,
                        children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
                    })
                }
        }
    }
]);