(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22310"], {
        251472: function(e, t, n) {
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
                i = n("913144"),
                s = n("271560"),
                r = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), l.default.get({
                    url: r.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (i.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: s
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await l.default.get({
                        url: r.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: s
                        }
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, s.httpGetWithCountryCodeQuery)({
                        url: r.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
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
                    return i
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
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
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.629 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.5 2.5 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.161.41-.24.748-.632.827-1.1a5 5 0 0 1 1.394-2.704l4.829-4.828Z",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        265614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        className: a
                    })
                })
            }
        },
        49097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SparklesIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M18.139 2.793c-.392-1.057-1.886-1.057-2.278 0l-.51 1.377a2 2 0 0 1-1.18 1.182l-1.378.51c-1.057.39-1.057 1.885 0 2.277l1.377.51a2 2 0 0 1 1.182 1.18l.51 1.378c.39 1.057 1.885 1.057 2.277 0l.51-1.377a2 2 0 0 1 1.18-1.182l1.378-.51c1.057-.39 1.057-1.885 0-2.277l-1.377-.51a2 2 0 0 1-1.182-1.18l-.51-1.378ZM10.594 9.11c-.547-1.48-2.64-1.48-3.188 0l-.841 2.273a2 2 0 0 1-1.182 1.182l-2.273.841c-1.48.547-1.48 2.64 0 3.188l2.273.841a2 2 0 0 1 1.182 1.182l.841 2.273c.548 1.48 2.64 1.48 3.188 0l.841-2.273a2 2 0 0 1 1.182-1.182l2.273-.841c1.48-.547 1.48-2.64 0-3.188l-2.273-.841a2 2 0 0 1-1.182-1.182l-.841-2.273Z",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        449826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UndoIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M2 8a1 1 0 0 1 2 0v3.536C5.928 8.799 8.94 7 12.375 7c4.237 0 7.83 2.738 9.54 6.595a1 1 0 1 1-1.83.81C18.645 11.15 15.697 9 12.376 9c-2.816 0-5.364 1.546-6.952 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
                        className: a
                    })
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: a
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var l = n("884691"),
                i = n("599110");
            let s = () => l.useContext(i.AnalyticsContext)
        },
        248559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var l = n("884691"),
                i = () => {
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
                    return i
                }
            }), n("222007");
            var l = n("884691");

            function i(e) {
                let [t, n] = (0, l.useState)(!1), i = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [i]), t
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");
            let i = l.createContext(void 0);
            var s = i
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var l = n("49111");

            function i(e, t) {
                return t !== l.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("871388"),
                i = n("49111");

            function s(e) {
                return (0, l.default)(e, i.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return v
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("446674"),
                r = n("77078"),
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
                m = n("947399");

            function v(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: v,
                    isFetchingSettings: g,
                    isSavingSettings: _,
                    hasPendingChanges: N,
                    errors: S
                } = (0, s.useStateFromStoresObject)([d.default], () => ({
                    settings: d.default.getSettings(n),
                    isFetchingSettings: d.default.isFetchingSettings(n),
                    isSavingSettings: d.default.isSavingSettings(),
                    hasPendingChanges: d.default.hasPendingChanges(),
                    errors: d.default.getErrors()
                })), I = (0, s.useStateFromStores)([a.default], () => a.default.getGuild(n)), x = (0, f.useClydeProfilesEnabled)(I), [T, L] = i.useState(!1);
                i.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
                    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
                }), []), i.useEffect(() => {
                    (0, c.fetchClydeSettings)(n, !0)
                }, [n]), i.useEffect(() => {
                    (N || null != S) && L(!1)
                }, [N, S]);
                let R = async () => {
                    if (null == n || !d.default.hasPendingChanges()) return;
                    let e = d.default.getPendingUpdates();
                    await (0, c.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), L(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(r.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)("div", {
                            className: m.heading,
                            children: (0, l.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                children: C.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, l.jsx)(r.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, l.jsx)(r.ScrollerAuto, {
                        className: m.content,
                        children: g || null == v ? (0, l.jsx)(r.Spinner, {
                            type: r.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [x && (0, l.jsx)(E.default, {
                                guildId: n
                            }), null != v && (0, l.jsx)("div", {
                                className: m.section,
                                children: (0, l.jsx)(h.ClydeEditProfileModalPersonalitySection, {
                                    settings: v
                                })
                            })]
                        })
                    }), (0, l.jsxs)(r.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: m.footer,
                        children: [(0, l.jsx)("div", {
                            className: m.resetButtonContainer,
                            children: (0, l.jsx)(r.Button, {
                                onClick: () => {
                                    (0, c.resetPendingChanges)(), u.default.track(p.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: r.ButtonColors.PRIMARY,
                                size: r.ButtonSizes.SMALL,
                                disabled: !N,
                                children: C.default.Messages.RESET
                            })
                        }), N && null == S && (0, l.jsx)("div", {
                            className: m.pendingChangesMessage,
                            children: C.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), T && (0, l.jsx)("div", {
                            className: m.successfullSaveMessage,
                            children: C.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != S && (0, l.jsx)("div", {
                            className: m.errorMessage,
                            children: C.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(r.Button, {
                                onClick: R,
                                color: r.ButtonColors.GREEN,
                                size: r.ButtonSizes.SMALL,
                                submitting: _,
                                disabled: !N,
                                children: C.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: i
                } = e;
                return (0, l.jsx)(r.ModalRoot, {
                    transitionState: t,
                    size: r.ModalSize.LARGE,
                    children: (0, l.jsx)(v, {
                        onClose: n,
                        guildId: i
                    })
                })
            }
        },
        879253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("65597"),
                r = n("77078"),
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

            function m(e) {
                var t;
                let {
                    settings: n
                } = e, [m, v] = i.useState(!1), [g, _] = i.useState(), {
                    pendingPersonality: N,
                    errors: S
                } = (0, s.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [I, x] = i.useState(), T = null != N && g === N, L = null != S && Number(S.code) === E.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? S.message : void 0, R = T ? p.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : p.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, l.jsxs)(a.default, {
                    title: p.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, l.jsxs)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        className: C.description,
                        children: [p.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(r.Anchor, {
                            href: h.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: p.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, l.jsx)(r.TextArea, {
                        value: null !== (t = null != N ? N : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, d.setPendingPersonality)(e)
                        },
                        placeholder: p.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: h.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: m,
                        autosize: !0
                    }), null != L ? (0, l.jsx)(r.FormErrorBlock, {
                        className: C.errorBlock,
                        children: L
                    }) : null, (0, l.jsxs)("div", {
                        className: C.generateButtonContainer,
                        children: [(0, l.jsx)(r.Button, {
                            color: T ? r.ButtonColors.PRIMARY : r.ButtonColors.BRAND,
                            innerClassName: C.generateButton,
                            onClick: () => {
                                if (T && null != I) {
                                    (0, d.setPendingPersonality)(I), x(void 0);
                                    return
                                }
                                null != N && "" !== N.trim() && (c.default.track(E.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), v(!0), (0, d.generatePersonality)(N).then(e => {
                                    null != e && (x(N), _(e), (0, d.setPendingPersonality)(e, !0)), v(!1)
                                }))
                            },
                            disabled: null == N || "" === N.trim(),
                            submitting: m,
                            children: T ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: C.buttonIcon
                                }), p.default.Messages.UNDO]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: C.buttonIcon
                                }), p.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: R
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
            var i = n("627445"),
                s = n.n(i),
                r = n("446674"),
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
                m = n("473591"),
                v = n("680894"),
                g = n("782340"),
                _ = n("618641");

            function N(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: i,
                    pendingThemeColors: s
                } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getPendingUpdates()), a = (0, r.useStateFromStores)([h.default], () => h.default.getMember(t, v.CLYDE_AI_USER_ID));
                return (0, l.jsxs)("div", {
                    className: _.editProfileSections,
                    children: [(0, l.jsx)(c.default, {
                        placeholder: g.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: i,
                        onGlobalNameChange: C.setPendingNick
                    }), (0, l.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: C.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: g.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
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
                        pendingColors: null != s ? s : void 0,
                        onThemeColorsChange: C.setPendingThemeColors
                    })]
                })
            }

            function S(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: i,
                    pendingBanner: u,
                    pendingThemeColors: c
                } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getPendingUpdates()), d = (0, r.useStateFromStores)([p.default], () => p.default.getUser(v.CLYDE_AI_USER_ID));
                s(null != d, "Clyde User must exist");
                let f = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t));
                return (0, l.jsx)(o.default, {
                    className: _.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, l.jsx)(a.default, {
                        user: d,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: C.setPendingAvatar,
                        onBannerChange: C.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingThemeColors: null != c ? c : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, l.jsx)(N, {
                        guildId: t,
                        clydeUser: d
                    })
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("748820"),
                s = n("77078"),
                r = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function h(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: h,
                    onClose: E,
                    onComplete: p,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: m,
                    analyticsObject: v,
                    analyticsLocation: g,
                    analyticsSourceLocation: _,
                    isGift: N = !1,
                    giftMessage: S,
                    subscriptionTier: I,
                    trialId: x,
                    postSuccessGuild: T,
                    openInvoiceId: L,
                    applicationId: R,
                    referralTrialOfferId: M,
                    giftRecipient: A,
                    returnRef: P
                } = null != e ? e : {}, j = !1, b = (0, i.v4)();
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...s
                        } = n;
                        return (0, l.jsx)(e, {
                            ...s,
                            loadId: b,
                            subscriptionTier: I,
                            skuId: I,
                            isGift: N,
                            giftMessage: S,
                            giftRecipient: A,
                            initialPlanId: t,
                            followupSKUInfo: h,
                            onClose: e => {
                                i(), null == E || E(e), e && (null == C || C())
                            },
                            onComplete: () => {
                                j = !0, null == p || p(), !N && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: m,
                            analyticsObject: v,
                            analyticsLocation: g,
                            analyticsSourceLocation: _,
                            trialId: x,
                            postSuccessGuild: T,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: R,
                            referralTrialOfferId: M,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !j && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : v,
                            source: _,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != x,
                            application_id: R,
                            location_stack: m
                        }), (0, r.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == E || E(j), j && (!N && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == C || C())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return s
                },
                resetPremiumTutorialStore: function() {
                    return r
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var l = n("913144");
            let i = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                s = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        70723: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("446674"),
                r = n("913144");

            function a() {
                l = !1, i = null
            }
            a();
            class o extends s.default.Store {
                get hasCompletedStepDuringSession() {
                    return l
                }
                get activeSubstep() {
                    return i
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(r.default, {
                SET_HAS_COMPLETED_STEP: function() {
                    l = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    l = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    let {
                        substep: t
                    } = e;
                    i = t
                },
                LOGOUT: function() {
                    a()
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
                    return m
                }
            });
            var l = n("884691"),
                i = n("65597"),
                s = n("872717"),
                r = n("913144"),
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
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    r.default.dispatch({
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
                    404 === e.status ? r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : r.default.dispatch({
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
                }), l = d.default.shouldFetchPremiumLikelihood(), i = o.default.getCurrentUser();
                v(i, l, t, n)
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), r = (0, i.default)([o.default], () => o.default.getCurrentUser());
                l.useEffect(() => {
                    v(r, s, t, n)
                }, [r, s, t, n])
            }

            function v(e, t, n, l) {
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
                i = n("913144");
            let s = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = s;
            class a extends l.default.Store {
                initialize() {
                    r = s
                }
                getState() {
                    return r
                }
                shouldFetchPremiumLikelihood() {
                    return !r.isFetching && !r.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    r.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    r.premiumLikelihood = t, r.fetched = !0, r.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    r.isFetching = !1
                },
                LOGOUT: function() {
                    r.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
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
            var s = i
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                r = n.n(s),
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
                m = n("782340"),
                v = n("727125");

            function g(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: s,
                    suggestedColors: g,
                    disabled: _,
                    label: N,
                    colorPickerMiddle: S,
                    colorPickerFooter: I,
                    showEyeDropper: x
                } = e, T = i.useRef(null), L = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), R = u.default.colors.BACKGROUND_ACCENT.css, M = (0, p.isColorDark)(s), A = (0, o.int2hex)(s), P = A === L ? R : A, j = (0, f.getColor)(M ? C.Color.WHITE_500 : C.Color.PRIMARY_530), b = (0, d.default)(S), O = (0, d.default)(I), [y, w] = i.useState((0, a.v4)());
                return i.useEffect(() => {
                    (b !== S || O !== I) && w((0, a.v4)())
                }, [I, S, O, b]), (0, l.jsx)(c.Popout, {
                    positionKey: y,
                    renderPopout: e => (0, l.jsx)(h.CustomColorPicker, {
                        ...e,
                        value: s,
                        onChange: t,
                        suggestedColors: g,
                        middle: S,
                        footer: I,
                        showEyeDropper: x
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, l.jsxs)("div", {
                            ref: T,
                            className: r(v.colorSwatch, {
                                [v.disabled]: _
                            }),
                            children: [(0, l.jsx)(c.Clickable, {
                                ...n,
                                tabIndex: _ ? -1 : 0,
                                onClick: _ ? C.NOOP : t,
                                style: {
                                    backgroundColor: A,
                                    borderColor: P
                                },
                                className: v.swatch,
                                "aria-label": m.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: T
                                },
                                children: (0, l.jsx)(E.default, {
                                    className: v.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: j
                                })
                            }), N]
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
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function c(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t,
                    children: e => (0, l.jsx)(r.Clickable, {
                        ...e,
                        children: (0, l.jsx)(a.default, {
                            className: s(u.nitroWheel, n)
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
            var i = n("414456"),
                s = n.n(i),
                r = n("394846"),
                a = n("77078"),
                o = n("570697"),
                u = n("782340"),
                c = n("56438");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: i,
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
                        children: [r.isMobile && h(), (0, l.jsxs)("div", {
                            className: s(c.baseLayout, i),
                            children: [t, !r.isMobile && h()]
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
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
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
                    onAvatarChange: i,
                    sectionTitle: E,
                    changeAvatarButtonText: p,
                    guildId: C,
                    className: m,
                    disabled: v = !1,
                    isTryItOutFlow: g = !1,
                    forcedDivider: _,
                    withHighlight: N = !1
                } = e, S = N ? a.default : r.Button;
                return (0, l.jsx)(u.default, {
                    className: m,
                    title: E,
                    errors: n,
                    disabled: v,
                    forcedDivider: _,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(S, {
                            className: s({
                                [f.buttonHighlighted]: N
                            }),
                            size: r.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, C, g, g ? h : void 0),
                            children: null != p ? p : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, l.jsx)(r.Button, {
                            className: f.removeButton,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.SMALL,
                            onClick: () => i(null),
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
                    return p
                }
            }), n("781738");
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("65597"),
                a = n("77078"),
                o = n("70723"),
                u = n("254490"),
                c = n("891653"),
                d = n("632892"),
                f = n("646718"),
                h = n("326908");

            function E(e) {
                let {
                    errors: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: h.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, u.sizeString)(t)
                        })
                    }, t))
                })
            }

            function p(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: i,
                    description: u,
                    children: p,
                    className: C,
                    errors: m,
                    disabled: v = !1,
                    hideDivider: g = !1,
                    showBorder: _ = !1,
                    borderType: N,
                    hasBackground: S = !1,
                    forcedDivider: I = !1,
                    showPremiumIcon: x = !1
                } = e, T = (0, r.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, l.jsx)("div", {
                    className: s(h.customizationSection, C, {
                        [h.disabled]: v,
                        [h.hideDivider]: g,
                        [h.showBorder]: _,
                        [h.withDivider]: I
                    }),
                    children: (0, l.jsxs)(d.default, {
                        className: h.customizationSectionBorder,
                        backgroundClassName: h.customizationSectionBackground,
                        isShown: _ && !T,
                        type: N,
                        hasBackground: S,
                        children: [(0, l.jsxs)(a.FormTitle, {
                            className: h.title,
                            id: i,
                            children: [t, x && (0, l.jsx)(c.default, {}), n]
                        }), null != u ? (0, l.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: h.sectionDescription,
                            children: u
                        }) : null, p, null != m && (0, l.jsx)(E, {
                            errors: m
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
            var i = n("77078"),
                s = n("570697"),
                r = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, l.jsx)(s.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, l.jsx)("div", {
                        children: (0, l.jsx)(i.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: r.DISPLAY_NAME_MAX_LENGTH,
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
                    return i
                },
                default: function() {
                    return d
                }
            });
            var l, i, s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("623682");
            (l = i || (i = {})).PREMIUM = "premium", l.LIMITED = "limited";
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
            var d = r.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: l = "premium",
                    isShown: i,
                    hasBackground: r = !1,
                    className: a,
                    backgroundClassName: d
                } = e;
                if (!i) return (0, s.jsx)(s.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: h
                } = c[l];
                return (0, s.jsx)("div", {
                    ref: t,
                    className: o(f, a),
                    children: (0, s.jsx)("div", {
                        className: o(r ? h : u.background, d),
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
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
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
                    onBannerChange: i,
                    guildId: h,
                    className: E,
                    disabled: p = !1,
                    showPremiumIcon: C = !0,
                    isTryItOutFlow: m = !1,
                    forcedDivider: v,
                    withHighlight: g = !1
                } = e, _ = g ? a.default : r.Button;
                return (0, l.jsx)(u.default, {
                    className: E,
                    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: C,
                    errors: n,
                    disabled: p,
                    forcedDivider: v,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(_, {
                            className: s({
                                [f.buttonHighlighted]: g
                            }),
                            size: r.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, h, m, void 0),
                            children: d.default.Messages.CHANGE_BANNER
                        }), t && (0, l.jsx)(r.Button, {
                            className: f.removeButton,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.SMALL,
                            onClick: () => i(null),
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
                    return v
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("969176"),
                a = n.n(r),
                o = n("669491"),
                u = n("77078"),
                c = n("462274"),
                d = n("217513"),
                f = n("528438"),
                h = n("719923"),
                E = n("409214"),
                p = n("570697"),
                C = n("782340"),
                m = n("431416");

            function v(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: i,
                    onThemeColorsChange: r,
                    preventDisabled: v,
                    guildId: g,
                    className: _,
                    showPremiumIcon: N = !0,
                    showResetThemeButton: S = !1,
                    forcedDivider: I
                } = e, x = (0, d.default)(t.id, g), [T, L] = (0, f.default)(t, x, {
                    pendingThemeColors: i,
                    isPreview: !0
                }), R = h.default.canUsePremiumProfileCustomization(t), M = null != n ? n : t.getAvatarURL(g, 80), A = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), P = (0, c.useAvatarColors)(M, A, !1);
                if (null == T || null == L) return null;
                let j = e => {
                    let t = a(e, null == x ? void 0 : x.themeColors);
                    r(t ? void 0 : e)
                };
                return (0, l.jsx)(p.default, {
                    title: C.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !R && !v,
                    className: s(m.profileThemesSection, _),
                    showPremiumIcon: N,
                    forcedDivider: I,
                    children: (0, l.jsxs)("div", {
                        className: m.sectionContainer,
                        children: [(0, l.jsx)("div", {
                            className: m.sparkleContainer,
                            children: (0, l.jsx)(E.default, {
                                onChange: e => j([e, L]),
                                color: T,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: m.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: m.sparkleContainer,
                            children: (0, l.jsx)(E.default, {
                                onChange: e => j([T, e]),
                                color: L,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: m.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), S && null != g && (0, l.jsx)(u.Button, {
                            className: m.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => j([null, null]),
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
                    return i
                }
            });
            var l = n("49111");

            function i(e) {
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
                i = n("327037"),
                s = n("697218"),
                r = n("506885"),
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
                } = e, h = s.default.getUser(t), E = o !== a.ME ? o : void 0;
                if (null == h) return (0, i.fetchProfile)(t, {
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
                (0, r.default)(t, h.getAvatarURL(void 0, 80), {
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
                    return N
                },
                CustomColorButton: function() {
                    return S
                },
                CustomColorPicker: function() {
                    return I
                },
                default: function() {
                    return x
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                r = n.n(s),
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
                m = n("782340"),
                v = n("169225");
            let g = () => Promise.resolve();

            function _(e) {
                let {
                    color: t,
                    isDefault: n = !1,
                    isCustom: i = !1,
                    isSelected: s = !1,
                    disabled: c = !1,
                    style: f = {},
                    onClick: p,
                    "aria-label": m
                } = e, g = (0, a.useListItem)("color-".concat(t)), _ = null != t ? (0, o.int2hex)(t) : f.backgroundColor, N = !1;
                return i && !s ? N = !0 : (i || s) && (N = (0, o.getDarkness)(t) > .1), (0, l.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, l.jsxs)("button", {
                        type: "button",
                        className: r(v.colorPickerSwatch, {
                            [v.disabled]: c,
                            [v.default]: n,
                            [v.custom]: i,
                            [v.noColor]: null == t
                        }),
                        disabled: c,
                        onClick: () => null == p ? void 0 : p(t),
                        style: {
                            ...f,
                            backgroundColor: _
                        },
                        "aria-label": null != m ? m : _,
                        ...g,
                        children: [i ? (0, l.jsx)(E.default, {
                            className: v.colorPickerDropper,
                            foreground: v.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(N ? C.Color.WHITE_500 : C.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                t = 16;
                            if ((i || n) && (e = 32, t = 24), s) return (0, l.jsx)(h.default, {
                                width: e,
                                height: t,
                                color: (0, d.getColor)(N ? C.Color.WHITE_500 : C.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class N extends i.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: t,
                        value: n,
                        disabled: i
                    } = this.props;
                    return (0, l.jsx)(_, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === n || 0 === n,
                        onClick: t,
                        disabled: i
                    })
                }
            }
            class S extends i.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: t,
                        disabled: n,
                        "aria-label": i
                    } = this.props;
                    return (0, l.jsx)(_, {
                        isCustom: !0,
                        color: e,
                        isSelected: t === e,
                        disabled: n,
                        "aria-label": i
                    })
                }
            }
            let I = i.memo(e => {
                let {
                    value: t,
                    onChange: n,
                    onClose: s,
                    suggestedColors: r,
                    middle: a,
                    footer: d,
                    showEyeDropper: h
                } = e, C = (0, c.default)(), [g, _] = i.useState(() => {
                    let e = null != t ? t : 0,
                        n = (0, o.int2hex)(e);
                    return {
                        current: e,
                        pending: n,
                        input: n
                    }
                });
                i.useEffect(() => {
                    if (null == t || t === g.current) return;
                    let e = (0, o.int2hex)(t);
                    _({
                        current: t,
                        pending: e,
                        input: e
                    })
                }, [t, g]), i.useEffect(() => s, [s]);
                let N = e => {
                        let t = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, o.isValidHex)(t)) {
                            _(e => ({
                                ...e,
                                input: t
                            }));
                            return
                        }
                        let l = (0, o.hex2int)(t);
                        _({
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
                            N(e)
                        } catch {}
                    }, I = e => {
                        _(t => ({
                            ...t,
                            pending: e,
                            input: e
                        }))
                    }, x = e => {
                        n((0, o.hex2int)(e))
                    };
                return (0, l.jsxs)(u.Dialog, {
                    "aria-label": m.default.Messages.PICK_A_COLOR,
                    className: v.customColorPicker,
                    children: [(0, l.jsx)(f.default, {
                        onChange: e => {
                            let {
                                hex: t
                            } = e;
                            return I(t)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: t
                            } = e;
                            return x(t)
                        },
                        color: g.pending
                    }), a, (0, l.jsxs)("div", {
                        className: v.customColorPickerInputContainer,
                        children: [h && null != C && (0, l.jsx)(p.Icon, {
                            onClick: S,
                            tooltip: m.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: v.customColorPickerEyeDropper,
                            icon: E.default
                        }), (0, l.jsx)(u.TextInput, {
                            className: v.customColorPickerInput,
                            value: g.input,
                            onChange: N,
                            maxLength: 7
                        })]
                    }), null != r && r.length > 0 && (0, l.jsx)("div", {
                        className: v.suggestedColors,
                        children: r.map((e, t) => (0, l.jsx)(u.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: v.suggestedColor,
                            onClick: () => N(e)
                        }, "".concat(e, "-").concat(t)))
                    }), d]
                })
            });

            function x(e) {
                let {
                    className: t,
                    defaultColor: n,
                    customColor: i,
                    colors: s,
                    value: o,
                    disabled: u,
                    onChange: c,
                    renderDefaultButton: d,
                    renderCustomButton: f,
                    colorContainerClassName: h
                } = e, E = e => (0, l.jsx)("div", {
                    className: v.colorPickerRow,
                    children: e.map(e => (0, l.jsx)(_, {
                        color: e,
                        isSelected: e === o,
                        onClick: c,
                        disabled: u
                    }, e))
                }), p = s.slice(0, s.length / 2), C = s.slice(s.length / 2, s.length), m = (0, a.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: g,
                    scrollToEnd: g
                });
                return (0, l.jsx)(a.ListNavigatorProvider, {
                    navigator: m,
                    children: (0, l.jsx)(a.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: s,
                                ...a
                            } = e;
                            return (0, l.jsxs)("div", {
                                className: r(v.container, t),
                                ref: s,
                                ...a,
                                children: [(0, l.jsx)("div", {
                                    className: r(v.defaultContainer, h),
                                    children: d({
                                        value: o,
                                        color: n,
                                        onChange: c,
                                        disabled: u
                                    })
                                }), (0, l.jsx)("div", {
                                    className: r(v.customContainer, h),
                                    children: f({
                                        value: o,
                                        customColor: i,
                                        disabled: u
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: v.presets,
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
                i = n("884691"),
                s = n("266937"),
                r = n("286458"),
                a = n("29799");
            let o = (0, s.CustomPicker)(e => (0, l.jsxs)("div", {
                className: a.wrapper,
                children: [(0, l.jsx)("div", {
                    className: a.saturation,
                    children: (0, l.jsx)(r.Saturation, {
                        ...e
                    })
                }), (0, l.jsx)("div", {
                    className: a.hue,
                    children: (0, l.jsx)(r.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var u = i.memo(o)
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                r = n.n(s),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: r(u.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...d,
                        className: r(c, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: r(u.childContainer, {
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
                    return v
                }
            });
            var l, i, s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let E = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                p = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class C extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, s.jsx)(u.default.div, {
                        ...l,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, s.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, s.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: "default"
            };
            let m = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: i,
                    pauseAnimation: a,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: p,
                    ...m
                } = e, v = r.createRef(), g = (0, d.default)(v), _ = !l && !i && !0 !== a && (!p || g);
                return (0, s.jsxs)(c.Button, {
                    buttonRef: v,
                    ...m,
                    className: o(h.shinyButton, n),
                    disabled: l,
                    submitting: i,
                    children: [t, _ ? (0, s.jsx)(C, {
                        shinePaused: f,
                        className: o(h.buttonShine, p ? h.onlyShineOnHover : void 0, E),
                        shineSize: u
                    }) : null]
                })
            };
            m.ShineSizes = i;
            var v = m
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
            var i = n("414456"),
                s = n.n(i),
                r = n("384737"),
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
                        height: i = 24,
                        color: E = "currentColor",
                        transition: p = f.transition,
                        className: C,
                        foreground: m,
                        expanded: v,
                        ...g
                    } = e, {
                        enabled: _
                    } = (0, c.useRedesignIconContext)(), N = t;
                    if (!0 === v ? N = h.DOWN : !1 === v && (N = h.RIGHT), _) {
                        let e = {
                            [h.UP]: u.ChevronSmallUpIcon,
                            [h.DOWN]: r.ChevronSmallDownIcon,
                            [h.LEFT]: a.ChevronSmallLeftIcon,
                            [h.RIGHT]: o.ChevronSmallRightIcon
                        } [N];
                        return (0, l.jsx)(e, {
                            ...g,
                            className: C,
                            width: n,
                            height: i,
                            color: E,
                            colorClass: m
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: s(C, p, N),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(g),
                        children: (0, l.jsx)("path", {
                            className: m,
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
            var i = n("469563"),
                s = n("733154"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, s.ChatIcon)
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
            var i = n("469563"),
                s = n("505088"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon)
        },
        422403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("639055"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: s,
                        foreground: r
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, l.jsx)("path", {
                                className: r,
                                fill: i,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, s.EyeDropperIcon)
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
            var i = n("469563"),
                s = n("504318"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: i = 24,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: i,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: s,
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
            var i = n("469563"),
                s = n("998460"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, r.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, s.GiftIcon)
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
            var i = n("469563"),
                s = n("876726"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
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
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: i
                        })
                    })
                }, s.PlayIcon)
        },
        826432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("49097"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: s,
                        foreground: r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, s.SparklesIcon)
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
            var i = n("469563"),
                s = n("390300"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.VoiceNormalIcon)
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
            var i = n("469563"),
                s = n("287083"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, s.StageIcon)
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
            var i = n("469563"),
                s = n("449826"),
                r = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            fillRule: "evenodd",
                            d: "m18.984 2.345-2.473 2.603c2.67 1.564 4.473 4.456 4.473 7.766 0 4.624-3.507 8.441-8 8.941v-2.02c3.387-.488 6-3.4 6-6.92 0-2.745-1.592-5.12-3.898-6.266l-3.102 3.266v-7.37h7ZM6.733 8.085 5.235 6.762a8.976 8.976 0 0 0-2.139 4.583h2.027a7 7 0 0 1 1.61-3.26Zm-3.717 5.26h2a6.938 6.938 0 0 0 1.369 3.553l-1.426 1.427a8.945 8.945 0 0 1-1.943-4.98Zm7.968 8.31a8.918 8.918 0 0 1-4.61-1.916l1.425-1.425a6.964 6.964 0 0 0 3.185 1.321v2.02Z",
                            clipRule: "evenodd"
                        })
                    })
                }, s.UndoIcon)
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
                    return v
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                r = n.n(s),
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
                        children: i,
                        selected: s = !1,
                        disabled: a = !1,
                        showBadge: o = !1,
                        color: c,
                        foreground: d,
                        background: f,
                        icon: p,
                        onClick: C,
                        onContextMenu: m,
                        tooltip: v = null,
                        tooltipColor: g,
                        tooltipPosition: _ = "bottom",
                        hideOnClick: N = !0,
                        role: S,
                        "aria-label": I,
                        "aria-hidden": x,
                        "aria-checked": T,
                        "aria-expanded": L,
                        "aria-haspopup": R
                    } = e, M = (0, l.jsx)(p, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: r(n, E.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: c
                    }), A = I;
                    return null == A && "string" == typeof v && (A = v), (0, l.jsx)(u.Tooltip, {
                        text: v,
                        color: g,
                        position: _,
                        hideOnClick: N,
                        children: e => {
                            let {
                                onMouseEnter: v,
                                onMouseLeave: g,
                                onFocus: _,
                                onBlur: N
                            } = e;
                            return null == C ? (0, l.jsx)("div", {
                                className: r(t, [E.iconWrapper]),
                                children: (0, l.jsx)(p, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: r(n, E.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != f ? f : void 0,
                                    color: c,
                                    "aria-hidden": x,
                                    onMouseEnter: v,
                                    onMouseLeave: g,
                                    onFocus: _,
                                    onBlur: N
                                })
                            }) : (0, l.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : C,
                                onContextMenu: a ? void 0 : m,
                                onMouseEnter: v,
                                onMouseLeave: g,
                                onFocus: _,
                                onBlur: N,
                                className: r(t, {
                                    [E.iconWrapper]: !0,
                                    [E.clickable]: !a && null != C,
                                    [E.selected]: s
                                }),
                                role: S,
                                "aria-label": A,
                                "aria-hidden": x,
                                "aria-checked": T,
                                "aria-haspopup": R,
                                "aria-expanded": L,
                                tabIndex: a || null == C ? -1 : 0,
                                children: [o ? (0, l.jsx)(h.default, {
                                    mask: h.default.Masks.HEADER_BAR_BADGE,
                                    children: M
                                }) : M, o ? (0, l.jsx)("span", {
                                    className: E.iconBadge
                                }) : null, i]
                            })
                        }
                    })
                },
                C = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r(E.divider, t)
                    })
                },
                m = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: s,
                        childrenBottom: d,
                        toolbar: f,
                        onDoubleClick: h,
                        "aria-label": p,
                        "aria-labelledby": C,
                        role: m,
                        scrollable: v,
                        transparent: g = !1
                    } = e, _ = i.useRef(null), N = i.useContext(c.default);
                    return (0, l.jsx)("section", {
                        className: r(t, E.container, {
                            [E.themed]: !g,
                            [E.transparent]: g,
                            [E.themedMobile]: o.isMobile
                        }),
                        "aria-label": p,
                        "aria-labelledby": C,
                        role: m,
                        ref: _,
                        children: (0, l.jsxs)(u.FocusRingScope, {
                            containerRef: _,
                            children: [(0, l.jsxs)("div", {
                                className: E.upperContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: r(E.children, n, {
                                        [E.scrollable]: v
                                    }),
                                    onDoubleClick: h,
                                    children: [o.isMobile && null != N ? (0, l.jsx)(a.default, {
                                        onClick: N,
                                        className: E.hamburger
                                    }) : null, s]
                                }), null != f ? (0, l.jsx)("div", {
                                    className: E.toolbar,
                                    children: f
                                }) : null]
                            }), d]
                        })
                    })
                };
            m.Icon = p, m.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: i,
                    onContextMenu: s,
                    onClick: a,
                    id: o,
                    muted: c = !1,
                    level: d = 1
                } = e, f = (0, l.jsx)(u.HeadingLevel, {
                    forceLevel: d,
                    children: (0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: c ? "header-secondary" : void 0,
                        className: r(t, E.title),
                        id: o,
                        children: i
                    })
                });
                return null != a ? (0, l.jsx)(u.Clickable, {
                    onClick: a,
                    onContextMenu: s,
                    className: r(n, E.titleWrapper),
                    children: f
                }) : (0, l.jsx)("div", {
                    className: r(n, E.titleWrapper),
                    onContextMenu: s,
                    children: f
                })
            }, m.Divider = C, m.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, l.jsx)(f.default, {
                    className: E.caret
                }) : (0, l.jsx)(d.default, {
                    className: E.caret
                })
            };
            var v = m
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("446674"),
                s = n("244201"),
                r = n("471671");

            function a() {
                let {
                    windowId: e
                } = l.useContext(s.default);
                return (0, i.useStateFromStores)([r.default], () => r.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var l, i = n("817736"),
                s = n("118810");
            let r = {
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
                    let n = (0, i.findDOMNode)(e);
                    (0, s.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = r) {
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
                i = n("748820"),
                s = n("157590");
            let r = (0, i.v4)(),
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
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, i.v4)()) : this.elementId = r;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new s.default({
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
                    return i.default
                }
            }), n("6268");
            var l = n("157590"),
                i = n("235855")
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
            var i = n("580420"),
                s = n.n(i),
                r = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...i
                    } = e;
                    return (0, l.jsxs)("button", {
                        type: "button",
                        className: s(r.btnHamburger, {
                            [r.btnHamburgerOpen]: t
                        }, n),
                        ...i,
                        children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
                    })
                }
        }
    }
]);