(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83930"], {
        32974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return u
                },
                fetchUserEntitlements: function() {
                    return a
                },
                fetchGiftableEntitlements: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("271560"),
                s = n("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
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
            async function a(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: l
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: l
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
            async function o() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
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
                    return l
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
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
            var i = n("913144");

            function r() {
                i.default.dispatch({
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47716 2 2 6.47715 2 12C2 13.9707 2.57006 15.8083 3.55427 17.3568C3.67702 17.5499 3.66393 17.8017 3.51347 17.9742L1.44658 20.3425C0.882052 20.9893 1.34145 22 2.2 22H12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: u = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    })]
                })
            }
        },
        833222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DenyIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C9.87499 21 7.92199 20.2635 6.38231 19.0319L19.0319 6.38231C20.2635 7.92199 21 9.87499 21 12ZM4.9681 17.6177L17.6177 4.9681C16.078 3.73647 14.125 3 12 3C7.02944 3 3 7.02944 3 12C3 14.125 3.73647 16.078 4.9681 17.6177Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M15 14C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8L5.5 8C4.94772 8 4.5 8.44772 4.5 9C4.5 9.55229 4.94772 10 5.5 10L8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12H6C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H7.25204C8.14012 17.4505 11.2723 20 15 20C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H7ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M2.5 10C3.05228 10 3.5 9.55228 3.5 9C3.5 8.44772 3.05228 8 2.5 8H2C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10H2.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M9.24787 3.34758C7.87224 2.45523 6 3.38448 6 4.95959V19.0404C6 20.6155 7.87224 21.5448 9.24787 20.6524L20.1013 13.612C21.2996 12.8347 21.2996 11.1653 20.1013 10.388L9.24787 3.34758Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })
                })
            }
        },
        828049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RetryIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M4 12C4 7.58172 7.58172 4 12 4C14.9597 4 17.5456 5.60707 18.93 8H15C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10H21C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2C20.4477 2 20 2.44772 20 3V5.9993C18.1764 3.57195 15.2724 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.3805 22 16.5691 21.167 18.2864 19.7774C18.7157 19.43 18.7821 18.8003 18.4347 18.371C18.0873 17.9416 17.4576 17.8752 17.0283 18.2226C15.6541 19.3346 13.9061 20 12 20C7.58172 20 4 16.4183 4 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.558 1.09366C10.1049 1.153 9.85283 1.62553 9.92194 2.07732C10.1003 3.24346 9.73459 4.27926 8.93869 4.60893C8.14294 4.93854 7.15214 4.46496 6.45371 3.51461C6.1831 3.1464 5.67085 2.99054 5.30837 3.26877C4.54272 3.85645 3.85659 4.54257 3.2689 5.3082C2.99066 5.67069 3.14651 6.18296 3.51474 6.45356C4.46513 7.152 4.93874 8.14283 4.60912 8.93859C4.27944 9.73453 3.24356 10.1002 2.07736 9.92181C1.62557 9.85269 1.15302 10.1047 1.09368 10.5579C1.03188 11.0298 1 11.5112 1 12C1 12.4888 1.03188 12.9702 1.09369 13.4421C1.15303 13.8953 1.62558 14.1473 2.07736 14.0782C3.24356 13.8998 4.27944 14.2655 4.60913 15.0614C4.93874 15.8572 4.46514 16.848 3.51475 17.5465C3.14653 17.8171 2.99067 18.3293 3.26891 18.6918C3.85661 19.4575 4.54276 20.1436 5.30842 20.7313C5.67091 21.0095 6.18315 20.8536 6.45376 20.4854C7.15219 19.5351 8.143 19.0615 8.93875 19.3911C9.73465 19.7208 10.1004 20.7566 9.922 21.9227C9.85289 22.3745 10.1049 22.847 10.5581 22.9063C11.03 22.9681 11.5113 23 12 23C12.4889 23 12.9703 22.9681 13.4423 22.9063C13.8955 22.8469 14.1475 22.3744 14.0784 21.9226C13.9 20.7565 14.2657 19.7207 15.0616 19.391C15.8574 19.0614 16.8481 19.5349 17.5465 20.4852C17.8172 20.8534 18.3294 21.0093 18.6919 20.731C19.4574 20.1434 20.1435 19.4573 20.7311 18.6918C21.0094 18.3293 20.8535 17.817 20.4853 17.5464C19.5349 16.848 19.0613 15.8572 19.3909 15.0614C19.7206 14.2655 20.7565 13.8998 21.9226 14.0782C22.3744 14.1473 22.847 13.8953 22.9063 13.4421C22.9681 12.9702 23 12.4888 23 12C23 11.5112 22.9681 11.0299 22.9063 10.5579C22.847 10.1048 22.3744 9.85271 21.9227 9.92183C20.7565 10.1002 19.7206 9.73451 19.391 8.9386C19.0614 8.14284 19.5349 7.15204 20.4853 6.4536C20.8535 6.183 21.0094 5.67074 20.7311 5.30825C20.1435 4.54271 19.4575 3.85666 18.692 3.26903C18.3295 2.99079 17.8172 3.14662 17.5466 3.51482C16.8482 4.46508 15.8574 4.9386 15.0617 4.60901C14.2658 4.27933 13.9001 3.24352 14.0785 2.07737C14.1476 1.6256 13.8956 1.15308 13.4424 1.09372C12.9704 1.0319 12.4889 1 12 1C11.5112 1 11.0299 1.03188 10.558 1.09366ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M2.63465 4.18776C2.99854 2.89392 4.17856 2 5.5226 2H6.99996C7.55224 2 7.99996 2.44772 7.99996 3V6.98282C7.99996 6.99819 7.99984 7.01354 7.99961 7.02886C7.99988 7.03058 8.00002 7.03234 8.00002 7.03414C8.00002 7.50023 7.8925 7.94121 7.70092 8.33363C7.21922 9.32031 6.20606 10 5.03415 10C5.02557 10 5.017 9.99996 5.00844 9.99989C4.9999 9.99996 4.99134 10 4.98278 10C2.98341 10 1.53697 8.09062 2.07829 6.16593L2.63465 4.18776Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M9.99996 2C9.44767 2 8.99996 2.44772 8.99996 3V7C8.99996 8.5533 10.1805 9.83088 11.6932 9.98451C11.7941 9.99475 11.8964 10 12 10C11.9999 10 12 10 12 10C13.1797 10 14.2005 9.31899 14.6905 8.32862C14.8839 7.93771 14.9946 7.49859 14.9998 7.03414C14.9998 7.0335 14.9998 7.03288 14.9998 7.03225C14.9999 7.02151 15 7.01076 15 7V3C15 2.44772 14.5522 2 14 2H9.99996Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M17 2C16.4477 2 16 2.44772 16 3V6.98282C16 6.99845 16.0001 7.01406 16.0003 7.02963C16.0001 7.03111 16 7.03261 16 7.03414C16 7.50023 16.1075 7.94121 16.2991 8.33363C16.7808 9.32031 17.794 10 18.9659 10C18.9744 10 18.983 9.99996 18.9915 9.99989C19.0001 9.99996 19.0086 10 19.0171 10C21.0165 10 22.4629 8.09062 21.9216 6.16593L21.3653 4.18776C21.0014 2.89392 19.8213 2 18.4773 2H17Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M21 11.4226V19C21 20.6569 19.6569 22 18 22H15.25C15.1119 22 15 21.8881 15 21.75V16C15 14.8954 14.1046 14 13 14H11C9.89543 14 9 14.8954 9 16V21.75C9 21.8881 8.88807 22 8.75 22H6C4.34315 22 3 20.6569 3 19V11.4226C3 11.2357 3.19858 11.1135 3.37213 11.183C3.88154 11.3868 4.4411 11.5 5.03415 11.5C6.32707 11.5 7.49166 10.9506 8.30718 10.0725C8.41524 9.95611 8.60309 9.95576 8.71151 10.0718C9.53279 10.9506 10.7022 11.5 12 11.5C13.2978 11.5 14.4672 10.9506 15.2885 10.0718C15.3969 9.95576 15.5848 9.9561 15.6929 10.0725C16.5084 10.9506 17.673 11.5 18.9659 11.5C19.5589 11.5 20.1185 11.3868 20.6279 11.183C20.8014 11.1135 21 11.2357 21 11.4226Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    })]
                })
            }
        },
        875212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTriggerDebuggingAA: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-09_trigger_debugging_aa",
                label: "trigger debugging aa mobile",
                defaultConfig: {
                    inUse: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        inUse: !0
                    }
                }]
            });

            function l(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: n
                } = e;
                return r.useExperiment({
                    location: n
                }, {
                    autoTrackExposure: t
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var i = n("49111");

            function r(e, t) {
                return t !== i.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("871388"),
                r = n("49111");

            function l(e) {
                return (0, i.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return s
                }
            });
            var i = n("65597"),
                r = n("42203"),
                l = n("337026");

            function s(e) {
                let t = (0, i.default)([r.default], () => r.default.getChannel(e)),
                    {
                        enabled: n
                    } = l.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return u
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205"),
                r = n("15733");
            let l = (0, i.createExperiment)({
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
                s = (0, i.createExperiment)({
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

            function u() {
                let {
                    paymentsBlocked: e
                } = l.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = s.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var a = l
        },
        473591: function(e, t, n) {
            "use strict";
            let i, r, l, s, u, a;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var o = n("446674"),
                c = n("913144");
            let d = !1,
                f = !1,
                C = null,
                E = {},
                h = {},
                _ = {},
                p = {};

            function I() {
                i = void 0, r = void 0, l = void 0, s = void 0, u = void 0, C = null
            }
            class g extends o.default.Store {
                getSettings(e) {
                    if (null != e) return _[e]
                }
                getProfile(e) {
                    return null == e ? null : E[e]
                }
                getGeneratedPersonality() {
                    return a
                }
                getPendingPersonality() {
                    return i
                }
                getPendingNick() {
                    return r
                }
                getErrors() {
                    return C
                }
                hasPendingChanges() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== s || void 0 !== u
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: l,
                        pendingNick: r,
                        pendingPersonality: i,
                        pendingBanner: s,
                        pendingThemeColors: u
                    }
                }
                isSavingSettings() {
                    return d
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = p[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let i = null !== (t = p[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        r = Date.now(),
                        l = r - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == i ? void 0 : i.isFetching) && l
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = h[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            g.displayName = "ClydeStore";
            var v = new g(c.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = p[t];
                    p[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    p[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = p[t];
                    p[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    i = t, n && (a = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    r = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    s = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    C = null, d = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    d = !1, _[t.guild_id] = t, I()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    d = !1, C = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: I,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = h[t];
                    h[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    h[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, E[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = h[t];
                    h[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    E[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    f = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    f = !1
                }
            })
        },
        161009: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("189293"),
                s = n("845962"),
                u = n("235898");

            function a() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: a
                } = (0, u.default)(), [o, c, d] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
                return (0, i.useEffect)(() => {
                    (0, l.fetchUserProfileEffects)()
                }, []), {
                    isFetching: e || o,
                    error: null != t ? t : c,
                    profileEffects: d,
                    categories: n,
                    purchases: a
                }
            }
        },
        235898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMaybeFetchCollectiblesCategories: function() {
                    return o
                },
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("884691"),
                r = n("65597"),
                l = n("875212"),
                s = n("21526"),
                u = n("853987"),
                a = n("775416");

            function o() {
                let e = "useMaybeFetchCollectiblesCategories";
                (0, l.useTriggerDebuggingAA)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                }), (0, l.useTriggerDebuggingAA)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                let [t, n, a, o] = (0, r.useStateFromStoresArray)([u.default], () => {
                    var e;
                    return [u.default.isFetching, u.default.error, null !== (e = u.default.lastFetched) && void 0 !== e ? e : 0, u.default.categories]
                });
                return (0, i.useEffect)(() => {
                    !(t || n || Date.now() - a < 6e5) && (0, s.fetchCollectiblesCategories)()
                }, [t, a, n]), {
                    isFetching: t,
                    categories: o,
                    error: n
                }
            }

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, l.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, l.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: n,
                    categories: u,
                    error: c
                } = o(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: C,
                    isFetching: E,
                    purchases: h
                } = function() {
                    let e = "useFetchPurchases";
                    (0, l.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, l.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, n, u, o, c] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.isFetching, a.default.isClaiming, a.default.fetchError, a.default.claimError, a.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, s.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: u,
                        claimError: o,
                        isFetching: t,
                        purchases: c
                    }
                }(), _ = null !== (e = null != c ? c : f) && void 0 !== e ? e : C;
                return {
                    isFetching: n || E,
                    isFetchingCategories: n,
                    isFetchingPurchases: E,
                    isClaiming: d,
                    categories: u,
                    purchases: h,
                    error: _
                }
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return l
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return C
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return E
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return h
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return _
                },
                BANNER_ASPECT_RATIO: function() {
                    return p
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return I
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return g
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return v
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return T
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return L
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return m
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return A
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return N
                },
                MessageTypes: function() {
                    return s
                }
            });
            var i, r, l, s, u = n("917219");
            (i = l || (l = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                o = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                C = 2400,
                E = 960,
                h = 2400,
                _ = 600,
                p = 17 / 6,
                I = 16 / 9,
                g = 2.5,
                v = 4,
                S = a / p,
                T = a / I,
                L = a / g,
                m = a / v,
                A = u.BACKGROUND_REPLACEMENT_SIZE.width / u.BACKGROUND_REPLACEMENT_SIZE.height,
                N = a / A;
            (r = s || (s = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                s = n("112679"),
                u = n("55689"),
                a = n("855133"),
                o = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function C(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: C,
                    onClose: E,
                    onComplete: h,
                    onSubscriptionConfirmation: _,
                    analyticsLocations: p,
                    analyticsObject: I,
                    analyticsLocation: g,
                    analyticsSourceLocation: v,
                    isGift: S = !1,
                    giftMessage: T,
                    subscriptionTier: L,
                    trialId: m,
                    postSuccessGuild: A,
                    openInvoiceId: N,
                    applicationId: R,
                    referralTrialOfferId: M,
                    giftRecipient: P,
                    returnRef: O
                } = null != e ? e : {}, x = !1, F = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: F,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: S,
                            giftMessage: T,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: C,
                            onClose: e => {
                                r(), null == E || E(e), e && (null == _ || _())
                            },
                            onComplete: () => {
                                x = !0, null == h || h(), !S && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: _,
                            analyticsLocations: p,
                            analyticsObject: I,
                            analyticsLocation: g,
                            analyticsSourceLocation: v,
                            trialId: m,
                            postSuccessGuild: A,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: R,
                            referralTrialOfferId: M,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !x && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: F,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : I,
                            source: v,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: S,
                            eligible_for_trial: null != m,
                            application_id: R,
                            location_stack: p
                        }), (0, s.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == E || E(x), x && (!S && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == _ || _())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return _
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                u = n("775433"),
                a = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                C = n("49111");
            let E = "nonSubscriber";
            async function h() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: C.Endpoints.USER_PREMIUM_LIKELIHOOD
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

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                I(r, i, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    I(s, l, t, n)
                }, [s, l, t, n])
            }

            function I(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && h(), i && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class u extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var a = new u(r.default, {
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
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var l = r
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("913144"),
                s = n("850068"),
                u = n("271938"),
                a = n("160299"),
                o = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([a.default], () => a.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return i.useEffect(() => {
                    l.default.wait(() => {
                        n && !a.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !a.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return a
                },
                fetchPrivateChannelIntegrations: function() {
                    return o
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                r = n("872717"),
                l = n("913144");
            n("253981");
            var s = n("140596"),
                u = n("49111");
            n("843455"), n("782340");

            function a() {
                s.default.getApplicationsShelfFetchState() === s.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(u.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function o(e) {
                let t = new i.default(1e3, 5e3);
                l.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), r.default.get({
                    url: u.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function c(e, t) {
                return r.default.delete(u.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("201155"),
                s = n("21121"),
                u = n("970755"),
                a = n("140596");

            function o(e) {
                let {
                    channelId: t
                } = e;
                (0, s.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: o,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, r.useStateFromStoresObject)([a.default], () => ({
                        installedIntegrations: a.default.getIntegrations(t),
                        applicationsShelf: a.default.getApplicationsShelf(),
                        integrationsFetchState: a.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: a.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === a.FetchState.NOT_FETCHED || d === a.FetchState.FETCH_FAILED) && (0, u.fetchPrivateChannelIntegrations)(t), (f === a.FetchState.NOT_FETCHED || f === a.FetchState.FETCH_FAILED) && (0, u.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let C = new Set(o.map(e => e.application.id)),
                    E = c.filter(e => !C.has(e.id));
                return {
                    installedIntegrations: o,
                    availableApplications: E,
                    applicationsShelf: c,
                    fetched: d !== a.FetchState.NOT_FETCHED && d !== a.FetchState.FETCHING && f !== a.FetchState.NOT_FETCHED && f !== a.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return r
                }
            });
            var i = n("913144");

            function r(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: r,
                    guildId: l,
                    isTryItOutFlow: s = !1
                } = e;
                i.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: r,
                    guildId: l,
                    isTryItOutFlow: s
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return i
                }
            });
            let i = 10485760
        },
        771325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleOpenSelectImageModal: function() {
                    return E
                },
                showFileSizeErrorModal: function() {
                    return h
                },
                getPreviewAvatar: function() {
                    return _
                },
                getPreviewNickname: function() {
                    return p
                },
                getPreviewDisplayName: function() {
                    return I
                },
                isColorDark: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("509043"),
                l = n("77078"),
                s = n("336522"),
                u = n("473591"),
                a = n("315102"),
                o = n("254490"),
                c = n("737403"),
                d = n("453252"),
                f = n("75015"),
                C = n("782340");

            function E(e, t, r, s) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("420333").then(n.bind(n, "420333")), a = u.default.isEditingClydeProfile();
                    return n => (0, i.jsx)(l, {
                        filters: s,
                        maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === f.UploadTypes.BANNER && C.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, i) => (0, c.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: i,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: r
                        }),
                        uploadType: e,
                        showUpsellHeader: !a,
                        ...n
                    })
                })
            }

            function h() {
                (0, s.openUploadError)({
                    title: C.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: C.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function _(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: r = 80,
                    canAnimate: l = !0
                } = i, s = null === e;
                return s && null == t ? a.default.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, l)
            }

            function p(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function g(e) {
                let t = null != e ? (0, r.getDarkness)(e) : 1;
                return t > .25
            }
        },
        189293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserProfileEffects: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993");
            n("845962");
            var s = n("49111");
            let u = e => {
                    let {
                        sku_id: t,
                        ...n
                    } = e;
                    return {
                        id: n.id,
                        skuId: t,
                        config: {
                            ...n,
                            skuId: t
                        }
                    }
                },
                a = async () => {
                    r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH"
                    });
                    try {
                        let {
                            body: e
                        } = await i.default.get(s.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(u);
                        r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                            profileEffects: n
                        })
                    } catch (e) {
                        throw r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }
        },
        889793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("265586"),
                s = n("446674"),
                u = n("77078"),
                a = n("812204"),
                o = n("685665"),
                c = n("21526"),
                d = n("853987"),
                f = n("775416"),
                C = n("805172"),
                E = n("491232"),
                h = n("161009"),
                _ = n("635956"),
                p = n("906932"),
                I = n("217513"),
                g = n("790618"),
                v = n("697218"),
                S = n("599110"),
                T = n("719923"),
                L = n("717262"),
                m = n("598854"),
                A = n("49111"),
                N = n("646718"),
                R = n("782340"),
                M = n("811855");

            function P(e) {
                let {
                    user: t,
                    purchase: n,
                    onApply: l,
                    onClose: s,
                    disableApplyButton: o,
                    category: d,
                    canUseCollectibles: f,
                    selectedProfileEffectID: C,
                    selectedProfileEffectItem: h,
                    analyticsLocations: p
                } = e, I = r.useCallback(() => {
                    s(), (0, c.openCollectiblesShop)({
                        analyticsLocations: p,
                        analyticsSource: a.default.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: null != h ? h.skuId : void 0
                    })
                }, [s, p, h]);
                return (0, i.jsx)(u.ModalFooter, {
                    className: M.modalFooter,
                    children: (0, i.jsxs)("div", {
                        className: M.buttonsRight,
                        children: [(0, i.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            children: R.default.Messages.CANCEL
                        }), (() => {
                            let e = null != n && (!(0, E.isPremiumCollectiblesPurchase)(n) || f);
                            if (e || null === C) return (0, i.jsx)(u.Button, {
                                onClick: l,
                                disabled: o,
                                children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = f || !(0, E.isPremiumCollectiblesCategory)(d);
                            return r ? (0, i.jsx)(u.Button, {
                                className: M.modalFooterShopButton,
                                onClick: I,
                                children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, i.jsx)(_.default, {
                                subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: T.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })()]
                    })
                })
            }

            function O(e) {
                let {
                    user: t,
                    categories: n,
                    purchases: l,
                    onClose: a,
                    initialSelectedProfileEffectID: o,
                    currentSavedEffectID: c,
                    analyticsLocations: h
                } = e, _ = (0, s.useStateFromStores)([g.default], () => g.default.getPendingProfileEffectID()), [I, v] = r.useMemo(() => {
                    let e = (0, E.groupProfileEffects)(n, l);
                    return [e.purchased, e.shopPreviews]
                }, [n, l]), [S, A] = r.useState(() => null != o ? o : void 0 !== _ ? _ : null == c ? null : null != c ? c : null), [N, O] = r.useMemo(() => {
                    var e;
                    let t = I.find(e => (null == e ? void 0 : e.id) === S),
                        n = null != t || null === S,
                        i = null !== (e = null != t ? t : v.find(e => (null == e ? void 0 : e.id) === S)) && void 0 !== e ? e : null;
                    return [i, n]
                }, [S, I, v]), {
                    category: x,
                    purchase: F
                } = (0, s.useStateFromStoresObject)([d.default, f.default], () => ({
                    category: d.default.getCategoryForProduct(null == N ? void 0 : N.skuId),
                    purchase: f.default.getPurchase(null == N ? void 0 : N.skuId)
                }), [N]), H = r.useRef(null), y = T.default.canUseCollectibles(t), {
                    shopForAllEnabled: D
                } = (0, C.default)({
                    location: "AvatarDecorationModal"
                }), U = S === (void 0 === _ ? null != c ? c : null : _), w = r.useCallback(e => {
                    A(e)
                }, [A]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: M.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: M.modalHeadings,
                            children: (0, i.jsx)(u.HeadingLevel, {
                                component: (0, i.jsxs)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [R.default.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !y && !D && (0, i.jsx)(u.Heading, {
                                    variant: "text-sm/normal",
                                    children: R.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, i.jsx)(u.ModalCloseButton, {
                            className: M.modalCloseButton,
                            onClick: a
                        })]
                    }), (0, i.jsxs)(u.ModalContent, {
                        className: M.modalContent,
                        children: [(0, i.jsx)(m.default, {
                            user: t,
                            pendingProfileEffect: S,
                            selectedProfileEffectRef: H,
                            onSelect: w,
                            onClose: a
                        }), (0, i.jsx)(L.default, {
                            user: t,
                            canApplySelectedChange: O,
                            pendingProfileEffectRecord: N,
                            category: x,
                            purchase: F
                        })]
                    }), (0, i.jsx)(P, {
                        user: t,
                        onApply: () => {
                            (0, p.setNewPendingProfileEffectID)(S, c), a()
                        },
                        onClose: a,
                        category: x,
                        purchase: F,
                        canUseCollectibles: y,
                        selectedProfileEffectID: S,
                        selectedProfileEffectItem: N,
                        disableApplyButton: U,
                        analyticsLocations: h
                    })]
                })
            }

            function x(e) {
                var t;
                let {
                    transitionState: n,
                    analyticsLocations: d,
                    initialSelectedEffectID: f,
                    onClose: C
                } = e, {
                    isFetching: E,
                    categories: _,
                    purchases: p
                } = (0, h.default)(), g = (0, s.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
                    AnalyticsLocationProvider: T,
                    analyticsLocations: L
                } = (0, o.default)(d, a.default.EDIT_PROFILE_EFFECT_MODAL), m = (0, I.default)(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : ""), N = null == m ? void 0 : m.profileEffectID;
                return r.useEffect(() => {
                    S.default.track(A.AnalyticEvents.OPEN_MODAL, {
                        type: A.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: L
                    })
                }, [L]), r.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [..._.values()],
                        itemTypes: [l.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [_]), null == g ? null : (0, i.jsx)(T, {
                    children: (0, i.jsx)(u.ModalRoot, {
                        transitionState: n,
                        size: u.ModalSize.DYNAMIC,
                        className: M.modal,
                        children: E ? (0, i.jsx)(u.Spinner, {
                            className: M.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(O, {
                            user: g,
                            categories: _,
                            purchases: p,
                            initialSelectedProfileEffectID: f,
                            currentSavedEffectID: N,
                            onClose: C,
                            analyticsLocations: L
                        })
                    })
                })
            }
        },
        717262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                s = n("152584"),
                u = n("853987"),
                a = n("805172"),
                o = n("491232"),
                c = n("884351"),
                d = n("184900"),
                f = n("783142"),
                C = n("217513"),
                E = n("915639"),
                h = n("845579"),
                _ = n("415167"),
                p = n("790618"),
                I = n("697218");
            n("550515");
            var g = n("719923"),
                v = n("782340"),
                S = n("146252");
            let T = e => {
                    var t;
                    let {
                        effectIsOwned: n,
                        pendingProfileEffectRecord: s,
                        category: c,
                        purchase: d
                    } = e, f = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), C = (0, r.useStateFromStores)([u.default], () => u.default.getProduct(null == s ? void 0 : s.skuId)), h = (0, r.useStateFromStores)([E.default], () => E.default.locale), {
                        shopForAllEnabled: _
                    } = (0, a.default)({
                        location: "ProfileEffectPreview"
                    }), p = g.default.canUseCollectibles(f), T = (0, o.isPremiumCollectiblesPurchase)(d), m = (0, o.isPremiumCollectiblesCategory)(c), A = L(!p && T, m, p, _);
                    return null != s ? (0, i.jsx)("div", {
                        className: n ? S.effectDescriptionNoGradient : S.effectDescriptionBorderWithGradient,
                        children: (0, i.jsxs)("div", {
                            className: S.effectDescriptionContainer,
                            children: [(0, i.jsx)(l.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                className: S.effectName,
                                children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == C ? void 0 : C.name
                            }), (0, i.jsx)(l.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                className: S.effectDescription,
                                children: null != d ? d.summary : A
                            }), null != d && (0, i.jsxs)(l.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                className: S.effectPurchasedAt,
                                children: [v.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                    date: d.purchasedAt.toLocaleDateString(h, {
                                        month: "long",
                                        year: "numeric"
                                    })
                                }), T && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("br", {}), v.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                                })]
                            })]
                        })
                    }) : null
                },
                L = (e, t, n, i) => e ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? v.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : !t && n || i ? v.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : v.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
            var m = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: l,
                    canApplySelectedChange: u,
                    category: a,
                    purchase: o
                } = e, {
                    pendingAvatar: E,
                    pendingBanner: I,
                    pendingBio: v,
                    pendingPronouns: L,
                    pendingGlobalName: m,
                    pendingAccentColor: A,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: R
                } = (0, r.useStateFromStoresObject)([p.default], () => {
                    let e = p.default.getAllPending(),
                        t = p.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), M = g.default.isPremium(n), P = (0, C.default)(n.id), O = !!(null == P ? void 0 : P.getPreviewBio(v).value), x = h.UseLegacyChatInput.useSetting(), F = x && null != v ? c.default.parse(void 0, v).content : v, H = g.default.canUsePremiumProfileCustomization(n), y = (null == P ? void 0 : P.canUsePremiumProfileCustomization) || H, D = {
                    user: n,
                    canUsePremiumCustomization: H,
                    onUpsellClick: _.default,
                    onAvatarChange: s.setPendingAvatar,
                    onBannerChange: f.setPendingBanner,
                    pendingBanner: I,
                    pendingBio: F,
                    pendingPronouns: L,
                    pendingAvatar: E,
                    pendingGlobalName: m,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: R,
                    pendingAccentColor: A,
                    pendingProfileEffectID: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
                    hideFakeActivity: O
                };
                return (0, i.jsxs)("div", {
                    className: y ? S.previewContainerWithTheme : S.previewContainerWithoutTheme,
                    children: [(0, i.jsx)(d.default, {
                        ...D,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, i.jsx)(T, {
                        effectIsOwned: u,
                        pendingProfileEffectRecord: l,
                        category: a,
                        purchase: o,
                        userIsPremium: M
                    })]
                })
            }
        },
        598854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("794252");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("506838"),
                a = n("171210"),
                o = n("65597"),
                c = n("77078"),
                d = n("54239"),
                f = n("853987"),
                C = n("426497"),
                E = n("491232"),
                h = n("743826"),
                _ = n("216422"),
                p = n("468759"),
                I = n("600785"),
                g = n("956089"),
                v = n("719923"),
                S = n("845962"),
                T = n("326054"),
                L = n("49111"),
                m = n("782340"),
                A = n("361451"),
                N = n("513002");
            let R = () => 80,
                M = e => {
                    let {
                        children: t,
                        className: n,
                        isSelected: r = !1,
                        ...l
                    } = e;
                    return (0, i.jsx)(c.Clickable, {
                        className: s(A.effectGridItem, n, {
                            [A.selected]: r
                        }),
                        ...l,
                        onClick: l.onSelect,
                        children: t
                    })
                },
                P = e => {
                    var t;
                    let {
                        user: n,
                        profileEffect: l,
                        innerRef: s,
                        section: u,
                        isSelected: c,
                        ...d
                    } = e, h = (0, o.default)([S.default], () => S.default.getProfileEffectById(l.id)), p = (0, o.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(l.skuId);
                        return (0, E.isPremiumCollectiblesCategory)(e)
                    }), L = (0, o.default)([C.default], () => C.default.isItemViewed(l)), R = r.useRef(null), {
                        accessibilityLabel: P,
                        thumbnailPreviewSrc: O,
                        title: x
                    } = null !== (t = null == h ? void 0 : h.config) && void 0 !== t ? t : {}, F = v.default.canUseCollectibles(n), H = u === T.Section.PREMIUM_PURCHASE && !F, [y, D] = r.useState(c);
                    return r.useEffect(() => {
                        c && D(!0)
                    }, [c]), (0, i.jsxs)(M, {
                        className: H && !c ? A.decorationGridItemChurned : void 0,
                        innerRef: null != s ? s : R,
                        isSelected: c,
                        ...d,
                        children: [(0, i.jsx)("img", {
                            src: N,
                            alt: P,
                            className: A.presetEffectBackground
                        }), (0, i.jsx)("img", {
                            className: A.presetEffectImg,
                            src: O,
                            alt: x
                        }), (() => {
                            let e = u === T.Section.PURCHASE || u === T.Section.PREMIUM_PURCHASE && F;
                            if (e) return null;
                            let t = !L && !c && !y;
                            return t ? (0, i.jsx)(g.PremiumBadge, {
                                className: A.newBadge,
                                text: (0, i.jsxs)("div", {
                                    className: A.newBadgeText,
                                    children: [(0, i.jsx)(I.default, {
                                        width: 12,
                                        height: 12
                                    }), m.default.Messages.NEW]
                                })
                            }) : (0, i.jsx)(g.IconBadge, {
                                icon: p ? () => (0, i.jsx)(_.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, i.jsx)(I.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: a.default.BACKGROUND_ACCENT,
                                className: A.lockBadge
                            })
                        })()]
                    })
                };
            var O = e => {
                let {
                    user: t,
                    pendingProfileEffect: n,
                    selectedProfileEffectRef: r,
                    onSelect: l,
                    onClose: s
                } = e, a = () => {
                    s(), (0, d.pushLayer)(L.Layers.COLLECTIBLES_SHOP)
                }, o = (0, T.default)(), f = null != n;
                return (0, i.jsx)("section", {
                    children: (0, i.jsx)(c.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: A.list,
                        columns: 3,
                        sections: o.map(e => {
                            let {
                                items: t
                            } = e;
                            return t.length
                        }),
                        renderItem: (e, s, d, C) => {
                            let {
                                section: E,
                                items: _
                            } = o[e];
                            return (0, u.match)(_[s]).with(T.NONE_ITEM, () => (0, i.jsxs)(M, {
                                style: {
                                    ...d
                                },
                                isSelected: !f,
                                onSelect: () => l(null),
                                children: [(0, i.jsx)(p.default, {
                                    className: A.notAllowedIcon
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: m.default.Messages.NONE
                                })]
                            }, C)).with(T.SHOP_ITEM, () => (0, i.jsxs)(M, {
                                style: d,
                                onSelect: a,
                                children: [(0, i.jsx)(h.default, {
                                    className: A.shopIcon
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: m.default.Messages.COLLECTIBLES_SHOP
                                })]
                            }, C)).otherwise(e => {
                                let s = n === e.id;
                                return (0, i.jsx)(P, {
                                    user: t,
                                    style: {
                                        ...d
                                    },
                                    section: E,
                                    profileEffect: e,
                                    innerRef: s ? r : void 0,
                                    isSelected: s,
                                    onSelect: () => l(e.id)
                                }, C)
                            })
                        },
                        renderSection: e => {
                            let {
                                header: t
                            } = o[e];
                            return (0, i.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, i.jsx)(c.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: () => 16,
                        getItemKey: (e, t) => {
                            var n, i;
                            return null !== (i = null === (n = o[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null
                        },
                        getItemHeight: R,
                        removeEdgeItemGutters: !0
                    })
                })
            }
        },
        326054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Section: function() {
                    return i
                },
                NONE_ITEM: function() {
                    return h
                },
                SHOP_ITEM: function() {
                    return _
                },
                default: function() {
                    return p
                }
            }), n("222007"), n("808653"), n("424973");
            var i, r, l = n("884691"),
                s = n("917351"),
                u = n("65597"),
                a = n("853987"),
                o = n("775416"),
                c = n("805172"),
                d = n("491232"),
                f = n("697218"),
                C = n("719923"),
                E = n("782340");
            (r = i || (i = {})).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview";
            let h = {
                    id: "None"
                },
                _ = {
                    id: "Shop"
                };
            var p = () => {
                let e = (0, u.default)([f.default], () => f.default.getCurrentUser()),
                    t = C.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: n
                    } = (0, c.default)({
                        location: "useProfileEffectSections"
                    }),
                    i = (0, u.default)([o.default], () => o.default.purchases),
                    [r, p] = (0, u.useStateFromStoresArray)([a.default], () => [a.default.categories, a.default.categorySkuIdsByProductSkuId]);
                return (0, l.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, d.getProfileEffectsFromPurchases)(i), ...(0, d.getProfileEffectsFromCategories)(r)], "id"),
                        l = e.reduce((e, n) => {
                            let l = i.get(n.skuId),
                                s = (0, d.isPremiumCollectiblesPurchase)(l);
                            if (s) return e.premium_purchase.push(n), e;
                            if (null != l) return e.purchase.push(n), e;
                            let u = r.get(p[n.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(u)) {
                                let t = e.premium_purchase;
                                return t.push(n), e
                            }
                            return e.preview.push(n), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: []
                        }),
                        u = !!t || !!n || l.purchase.length > 0;
                    return [{
                        section: "purchase",
                        items: u ? [h, _, ...l.purchase] : [],
                        height: 12,
                        header: E.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: "premium_purchase",
                        items: l.premium_purchase,
                        height: 12,
                        header: E.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: "preview",
                        items: l.preview,
                        height: 12,
                        header: E.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [r, i, p, t, n])
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        590456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserProfileSections: function() {
                    return l
                },
                UserProfileTypes: function() {
                    return s
                },
                getBadgeAsset: function() {
                    return a
                }
            });
            var i, r, l, s, u = n("49111");

            function a(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(u.Endpoints.BADGE_ICON(e))
            }(i = l || (l = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (r = s || (s = {})).POPOUT = "POPOUT", r.MODAL = "MODAL", r.SETTINGS = "SETTINGS", r.PANEL = "PANEL", r.CARD = "CARD", r.POMELO_POPOUT = "POMELO_POPOUT", r.CANCEL_MODAL = "CANCEL_MODAL"
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return a
                },
                closeUserProfileModal: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("327037"),
                l = n("697218"),
                s = n("506885"),
                u = n("49111");

            function a(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: a = u.ME,
                    channelId: o,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, C = l.default.getUser(t), E = a !== u.ME ? a : void 0;
                if (null == C) return (0, r.fetchProfile)(t, {
                    friendToken: c,
                    guildId: E
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: a,
                        channelId: o,
                        friendToken: c,
                        autoFocusNote: d,
                        analyticsLocation: f
                    })
                });
                (0, s.default)(t, C.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: E
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: a,
                    channelId: o,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                })
            }

            function o() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        106435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("77078"),
                l = n("606292"),
                s = n("688318"),
                u = n("19287");

            function a(e) {
                let {
                    user: t,
                    guildId: n,
                    size: a,
                    showPending: o = !1,
                    showTryItOut: c = !1,
                    animateOnHover: d = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: C
                } = e, {
                    avatarSrc: E,
                    isAvatarAnimating: h,
                    eventHandlers: _
                } = (0, u.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, r.getAvatarSize)(a),
                    showPending: o,
                    animateOnHover: d,
                    avatarOverride: C
                }), {
                    avatarPlaceholderSrc: p,
                    avatarDecorationSrc: I,
                    eventHandlers: g
                } = (0, s.default)({
                    user: t,
                    size: (0, l.getDecorationSizeForAvatarSize)(a),
                    showPending: o,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), v = i.useCallback(() => {
                    _.onMouseEnter(), g.onMouseEnter()
                }, [_, g]), S = i.useCallback(() => {
                    _.onMouseLeave(), g.onMouseLeave()
                }, [_, g]);
                return {
                    avatarPlaceholderSrc: p,
                    avatarDecorationSrc: I,
                    avatarSrc: E,
                    isAnimating: h,
                    eventHandlers: {
                        onMouseEnter: v,
                        onMouseLeave: S
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return c
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("206230"),
                s = n("771325"),
                u = n("26989"),
                a = n("471671"),
                o = n("91653");

            function c(e) {
                let {
                    user: t,
                    guildId: n,
                    size: c,
                    showPending: d = !1,
                    animateOnHover: f = !1,
                    avatarOverride: C
                } = e, [E, h] = i.useState(!1), _ = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion), p = (0, r.useStateFromStores)([a.default], () => a.default.isFocused()), I = p && (E || !_ && !f), {
                    pendingAvatar: g
                } = (0, o.default)({}), v = (0, r.useStateFromStores)([u.default], () => null != n && null != t ? u.default.getMember(n, t.id) : null), S = i.useMemo(() => null != t ? (0, s.getPreviewAvatar)(d ? null != C ? C : g : void 0, v, t, {
                    canAnimate: I,
                    size: c
                }) : void 0, [d, g, v, t, I, c, C]), T = i.useCallback(() => h(!0), []), L = i.useCallback(() => h(!1), []);
                return {
                    avatarSrc: S,
                    isAvatarAnimating: I,
                    eventHandlers: {
                        onMouseEnter: T,
                        onMouseLeave: L
                    }
                }
            }
        },
        415167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("49111");

            function s() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("920067").then(n.bind(n, "920067"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        source: {
                            page: l.AnalyticsPages.USER_SETTINGS,
                            section: l.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                            object: l.AnalyticsObjects.BUTTON_CTA,
                            type: l.AnalyticsObjectTypes.BUY
                        }
                    })
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("77078"),
                a = n("760607"),
                o = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), C = (0, u.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: s(o.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...d,
                        className: s(c, o.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: s(o.childContainer, {
                            [o.redesignIconChildContainer]: C
                        }),
                        children: f
                    })]
                })
            }
        },
        275623: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("164538");

            function u(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)("div", {
                    className: l(s.gifTag, t),
                    ...n
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return _
                },
                default: function() {
                    return I
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                u = n("414456"),
                a = n.n(u),
                o = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                C = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let E = {
                    default: C.shineDefault,
                    small: C.shineSmall
                },
                h = {
                    default: C.shineInnerDefault,
                    small: C.shineInnerSmall
                };
            class _ extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(o.default.div, {
                        ...i,
                        className: a(C.shineContainer, e, {
                            [C.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, l.jsx)("div", {
                                className: h[t]
                            })
                        })
                    })
                }
            }
            _.defaultProps = {
                shineSize: "default"
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: u,
                    shineSize: o = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: h,
                    ...p
                } = e, I = s.createRef(), g = (0, d.default)(I), v = !i && !r && !0 !== u && (!h || g);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: I,
                    ...p,
                    className: a(C.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, v ? (0, l.jsx)(_, {
                        shinePaused: f,
                        className: a(C.buttonShine, h ? C.onlyShineOnHover : void 0, E),
                        shineSize: o
                    }) : null]
                })
            };
            p.ShineSizes = r;
            var I = p
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return a
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                u = () => (0, l.useLazyValue)(() => s()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("384737"),
                u = n("448052"),
                a = n("748802"),
                o = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let C = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = C.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: E = "currentColor",
                        transition: h = f.transition,
                        className: _,
                        foreground: p,
                        expanded: I,
                        ...g
                    } = e, {
                        enabled: v
                    } = (0, c.useRedesignIconContext)(), S = t;
                    if (!0 === I ? S = C.DOWN : !1 === I && (S = C.RIGHT), v) {
                        let e = {
                            [C.UP]: o.ChevronSmallUpIcon,
                            [C.DOWN]: s.ChevronSmallDownIcon,
                            [C.LEFT]: u.ChevronSmallLeftIcon,
                            [C.RIGHT]: a.ChevronSmallRightIcon
                        } [S];
                        return (0, i.jsx)(e, {
                            ...g,
                            className: _,
                            width: n,
                            height: r,
                            color: E,
                            colorClass: p
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(_, h, S),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(g),
                        children: (0, i.jsx)("path", {
                            className: p,
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
            E.Directions = C;
            var h = E
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: u,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != u ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: u
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        743826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("422244"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 23,
                        height: n = 18,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 23 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                            fill: r
                        })
                    })
                }, l.ShopIcon, void 0, {
                    size: 23
                })
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: r,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        468759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("833222"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: u,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(a),
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }), (0, i.jsx)("path", {
                            className: u,
                            fill: r,
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                        })]
                    })
                }, l.DenyIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: r
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon, void 0, {
                    size: 16
                })
        },
        550515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("828049"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z"
                        })
                    })
                }, l.RetryIcon, void 0, {
                    size: 24
                })
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, l.LockIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function u() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("817736"),
                l = n("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, r.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
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
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                u = new Map,
                a = new Map;
            class o extends i.Component {
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
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, r.v4)()) : this.elementId = s;
                    let o = this.getVisibilityObserverId();
                    !a.has(o) && a.set(o, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = o
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);