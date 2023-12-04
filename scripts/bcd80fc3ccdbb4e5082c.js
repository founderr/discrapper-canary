(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51638"], {
        437083: function(e, t, r) {
            var n = r("561449"),
                i = r("877297");
            e.exports = function(e) {
                return i(n(e))
            }
        },
        329252: function(e, t, r) {
            var n = r("877297"),
                i = r("164099");
            e.exports = function(e) {
                return n(i(e))
            }
        },
        957478: function(e, t, r) {
            var n = r("626785");
            e.exports = function(e, t) {
                return n(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, r) {
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }
        },
        877297: function(e, t, r) {
            var n = r("68421");
            e.exports = function(e, t) {
                var r = -1,
                    i = e.length,
                    a = i - 1;
                for (t = void 0 === t ? i : t; ++r < t;) {
                    var u = n(r, a),
                        l = e[u];
                    e[u] = e[r], e[r] = l
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, r) {
            var n = r("437083"),
                i = r("329252"),
                a = r("725502");
            e.exports = function(e) {
                return (a(e) ? n : i)(e)
            }
        },
        164099: function(e, t, r) {
            var n = r("957478"),
                i = r("466731");
            e.exports = function(e) {
                return null == e ? [] : n(e, i(e))
            }
        },
        668973: function(e, t, r) {
            "use strict";
            e.exports = r.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, r) {
            "use strict";
            e.exports = r.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, r) {
            "use strict";
            e.exports = r.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, r) {
            "use strict";
            e.exports = r.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, r) {
            "use strict";
            e.exports = r.p + "e9b67e80d0033605e8f4.svg"
        },
        723251: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return n
                },
                rgbaToDataURL: function() {
                    return i
                },
                thumbHashToDataURL: function() {
                    return a
                }
            }), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

            function n(e) {
                let t = e[3],
                    r = 128 & e[2],
                    n = 128 & e[4];
                return (n ? r ? 5 : 7 : 7 & t) / (n ? 7 & t : r ? 5 : 7)
            }

            function i(e, t, r) {
                let n = 4 * e + 1,
                    i = 6 + t * (5 + n),
                    a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    l = 1,
                    s = 0;
                for (let e = 0, i = 0, u = n - 1; e < t; e++, u += n - 1)
                    for (a.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), s = (s + l) % 65521; i < u; i++) {
                        let e = 255 & r[i];
                        a.push(e), s = (s + (l = (l + e) % 65521)) % 65521
                    }
                for (let [e, t] of(a.push(s >> 8, 255 & s, l >> 8, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let r = -1;
                    for (let n = e; n < t; n++) r ^= a[n], r = (r = r >>> 4 ^ u[15 & r]) >>> 4 ^ u[15 & r];
                    r = ~r, a[t++] = r >>> 24, a[t++] = r >> 16 & 255, a[t++] = r >> 8 & 255, a[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...a))
            }

            function a(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: i,
                        cos: a,
                        round: u
                    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, o = (63 & l) / 63, c = (l >> 6 & 63) / 31.5 - 1, d = (l >> 12 & 63) / 31.5 - 1, f = l >> 23, E = s >> 15, _ = i(3, E ? f ? 5 : 7 : 7 & s), C = i(3, E ? 7 & s : f ? 5 : 7), p = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, S = f ? 6 : 5, I = 0, T = (t, r, n) => {
                        let i = [];
                        for (let a = 0; a < r; a++)
                            for (let u = a ? 0 : 1; u * r < t * (r - a); u++) i.push(((e[S + (I >> 1)] >> ((1 & I++) << 2) & 15) / 7.5 - 1) * n);
                        return i
                    }, A = T(_, C, (l >> 18 & 31) / 31), m = T(3, 3, 1.25 * ((s >> 3 & 63) / 63)), v = T(3, 3, 1.25 * ((s >> 9 & 63) / 63)), L = f && T(5, 5, h), g = n(e), R = u(g > 1 ? 32 : 32 * g), O = u(g > 1 ? 32 / g : 32), N = new Uint8Array(R * O * 4), P = [], M = [];
                    for (let e = 0, n = 0; e < O; e++)
                        for (let u = 0; u < R; u++, n += 4) {
                            let l = o,
                                s = c,
                                E = d,
                                h = p;
                            for (let e = 0, r = i(_, f ? 5 : 3); e < r; e++) P[e] = a(t / R * (u + .5) * e);
                            for (let r = 0, n = i(C, f ? 5 : 3); r < n; r++) M[r] = a(t / O * (e + .5) * r);
                            for (let e = 0, t = 0; e < C; e++)
                                for (let r = e ? 0 : 1, n = 2 * M[e]; r * C < _ * (C - e); r++, t++) l += A[t] * P[r] * n;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, n = 2 * M[e]; r < 3 - e; r++, t++) {
                                    let e = P[r] * n;
                                    s += m[t] * e, E += v[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, n = 2 * M[e]; r < 5 - e; r++, t++) h += L[t] * P[r] * n;
                            let S = l - 2 / 3 * s,
                                I = (3 * l - S + E) / 2,
                                T = I - E;
                            N[n] = i(0, 255 * r(1, I)), N[n + 1] = i(0, 255 * r(1, T)), N[n + 2] = i(0, 255 * r(1, S)), N[n + 3] = i(0, 255 * r(1, h))
                        }
                    return {
                        w: R,
                        h: O,
                        rgba: N
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
        251472: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return l
                },
                fetchUserEntitlements: function() {
                    return s
                },
                fetchGiftableEntitlements: function() {
                    return o
                }
            });
            var n = r("872717"),
                i = r("913144"),
                a = r("271560"),
                u = r("49111");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), n.default.get({
                    url: u.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
            async function s(e) {
                let {
                    withSku: t = !1,
                    withApplication: r = !1,
                    entitlementType: a
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await n.default.get({
                        url: u.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: r,
                            entitlement_type: a
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
            async function o() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, a.httpGetWithCountryCodeQuery)({
                        url: u.Endpoints.ENTITLEMENTS_GIFTABLE
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
        112679: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return s
                }
            });
            var n = r("913144");

            function i(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var n = r("913144");

            function i() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        833222: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DenyIcon: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        998460: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GiftIcon: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: l
                    })]
                })
            }
        },
        202909: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                NitroWheelIcon: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: l
                    })]
                })
            }
        },
        125094: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ScreenArrowIcon: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: l
                    })]
                })
            }
        },
        422244: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ShopIcon: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
                        className: l
                    })]
                })
            }
        },
        875212: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return a
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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

            function a(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: r
                } = e;
                return i.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t
                })
            }
        },
        252744: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("222007");
            var n = r("884691");

            function i(e) {
                let [t, r] = (0, n.useState)(!1), i = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => r(!0),
                        n = () => r(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [i]), t
            }
        },
        791050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return P
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                a = r("265586"),
                u = r("446674"),
                l = r("77078"),
                s = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("805172"),
                f = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                C = r("170313"),
                p = r("635956"),
                h = r("91653"),
                S = r("697218"),
                I = r("599110"),
                T = r("719923"),
                A = r("234251"),
                m = r("659117"),
                v = r("765221"),
                L = r("49111"),
                g = r("646718"),
                R = r("782340"),
                O = r("705057");

            function N(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: a,
                    onClose: u,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: S,
                    setPendingAvatarDecoration: I
                } = (0, h.default)({
                    analyticsLocations: a,
                    isTryItOut: _
                }), [L, N] = i.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== S) return S;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let n = (0, f.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = n.find(e => (0, A.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    category: P,
                    purchase: M
                } = (0, E.default)(null == L ? void 0 : L.skuId), y = T.default.canUseCollectibles(t), D = i.useRef(null), H = (0, C.default)(a), {
                    shopForAllEnabled: U
                } = (0, d.default)({
                    location: "AvatarDecorationModal"
                }), x = (0, A.isEqualAvatarDecoration)(L, void 0 === S ? null == t ? void 0 : t.avatarDecoration : S), F = () => {
                    I(L), u()
                }, b = i.useCallback(() => {
                    u(), (0, c.openCollectiblesShop)({
                        analyticsLocations: a,
                        analyticsSource: s.default.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: null != L ? L.skuId : void 0
                    })
                }, [a, u, L]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: O.modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: O.modalHeadings,
                            children: (0, n.jsx)(l.HeadingLevel, {
                                component: (0, n.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !y && !U && (0, n.jsx)(l.Heading, {
                                    variant: "text-sm/normal",
                                    children: R.default.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            className: O.modalCloseButton,
                            onClick: u
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: O.modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(v.default, {
                            user: t,
                            pendingAvatarDecoration: L,
                            selectedAvatarDecorationRef: D,
                            onSelect: e => {
                                N(e), null != e && H(e)
                            },
                            onOpenShop: b
                        }), (0, n.jsx)(m.default, {
                            className: O.modalPreview,
                            user: t,
                            avatarDecorationOverride: L
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: O.modalFooter,
                        children: [(() => {
                            let e = null != M && (!(0, f.isPremiumCollectiblesPurchase)(M) || y);
                            if (e || null === L) return (0, n.jsx)(l.Button, {
                                onClick: F,
                                disabled: x,
                                children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = y || !(0, f.isPremiumCollectiblesCategory)(P);
                            return r ? (0, n.jsx)(l.Button, {
                                className: O.modalFooterShopButton,
                                onClick: b,
                                children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, n.jsx)(p.default, {
                                subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: T.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: u,
                            children: R.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function P(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: f,
                    isTryItOutFlow: E
                } = e, C = (0, u.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                    AnalyticsLocationProvider: p,
                    analyticsLocations: h
                } = (0, o.default)(r, s.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: T,
                    purchases: A,
                    isFetchingCategories: m,
                    isFetchingPurchases: v
                } = (0, _.default)(), g = m || v && 0 === A.size;
                return i.useEffect(() => {
                    I.default.track(L.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: h
                    })
                }, [h]), i.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...T.values()],
                        itemTypes: [a.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [T]), null == C ? null : (0, n.jsx)(p, {
                    children: (0, n.jsx)(l.ModalRoot, {
                        transitionState: t,
                        className: O.modal,
                        size: g ? l.ModalSize.DYNAMIC : l.ModalSize.MEDIUM,
                        children: g ? (0, n.jsx)(l.Spinner, {
                            className: O.spinner,
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(N, {
                            user: C,
                            categories: T,
                            analyticsLocations: h,
                            initialSelectedDecoration: f,
                            onClose: d,
                            isTryItOutFlow: E
                        })
                    })
                })
            }
        },
        659117: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            }), r("794252");
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                a = r.n(i),
                u = r("506838"),
                l = r("446674"),
                s = r("77078"),
                o = r("805172"),
                c = r("491232"),
                d = r("984002"),
                f = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                C = r("719923"),
                p = r("795158"),
                h = r("782340"),
                S = r("632000");
            let I = [{
                    avatarSize: s.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: s.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: s.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: s.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                T = e => {
                    let {
                        purchase: t
                    } = e, r = (0, l.useStateFromStores)([E.default], () => E.default.locale), i = (0, c.isPremiumCollectiblesPurchase)(t);
                    return (0, n.jsxs)("div", {
                        className: S.purchaseInfo,
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, n.jsxs)(s.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [h.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), i && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), h.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var A = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: i
                } = e, E = (0, l.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: A,
                    product: m,
                    purchase: v
                } = (0, d.default)(null == r ? void 0 : r.skuId), L = C.default.canUseCollectibles(t), g = (0, c.isPremiumCollectiblesPurchase)(v), R = (0, c.isPremiumCollectiblesCategory)(A), {
                    shopForAllEnabled: O
                } = (0, o.default)({
                    location: "AvatarDecorationModalPreview"
                }), N = !L && g;
                return null != m && (null == v || N) ? (0, n.jsxs)("div", {
                    className: a(S.modalPreview, S.shopPreviewContainer, i),
                    children: [(0, n.jsx)(f.default, {
                        asset: null == A ? void 0 : A.banner,
                        className: S.shopPreviewBanner,
                        children: (0, n.jsx)(p.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, n.jsxs)("div", {
                        className: S.shopPreviewTextContainer,
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            children: m.name
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: N ? h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, u.match)([R, L]).with([!0, !0], () => h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).with([!1, !0], () => h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM).with([!1, !1], () => O ? h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : h.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE).exhaustive()
                        })]
                    })]
                }) : (0, n.jsxs)("div", {
                    className: a(S.modalPreview, i),
                    children: [(0, n.jsxs)("div", {
                        className: S.previewSections,
                        children: [(0, n.jsx)("div", {
                            className: S.decorationPreview,
                            children: (0, n.jsx)(p.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, n.jsx)("div", {
                            className: S.smallDecorationPreviewsContainer,
                            children: I.map(e => {
                                let {
                                    avatarSize: i,
                                    showStatus: a
                                } = e;
                                return (0, n.jsx)("div", {
                                    className: S.smallDecorationPreview,
                                    children: (0, n.jsx)(p.default, {
                                        user: t,
                                        avatarSize: i,
                                        avatarDecorationOverride: r,
                                        status: a ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(a))
                            })
                        })]
                    }), null != v && (0, n.jsx)(T, {
                        purchase: v
                    })]
                })
            }
        },
        795158: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("77078"),
                a = r("106435"),
                u = r("50885"),
                l = r("782340");
            let s = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    status: u,
                    avatarSize: o = i.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: f,
                    eventHandlers: E
                } = (0, a.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, n.jsx)(s, {
                    avatarDecoration: d,
                    src: f,
                    size: o,
                    status: u,
                    "aria-label": c ? void 0 : l.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ...E
                })
            }
        },
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007"), r("794252");
            var n = r("37983"),
                i = r("884691"),
                a = r("414456"),
                u = r.n(a),
                l = r("506838"),
                s = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                f = r("853987"),
                E = r("426497"),
                _ = r("491232"),
                C = r("743826"),
                p = r("216422"),
                h = r("468759"),
                S = r("600785"),
                I = r("956089"),
                T = r("719923"),
                A = r("643070"),
                m = r("688318"),
                v = r("782340"),
                L = r("654353");
            let g = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: i,
                        isSelected: a = !1,
                        ...l
                    } = e;
                    return (0, n.jsx)(c.Clickable, {
                        className: u(L.decorationGridItem, a ? L.selected : void 0, r),
                        ...l,
                        onClick: i,
                        children: t
                    })
                },
                O = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: a,
                        section: u,
                        isSelected: l = !1,
                        ...c
                    } = e, C = (0, o.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(r.skuId);
                        return (0, _.isPremiumCollectiblesCategory)(e)
                    }), h = (0, o.default)([E.default], () => E.default.isItemViewed(r)), g = T.default.canUseCollectibles(t), O = u === A.Section.PREMIUM_PURCHASE && !g, [N, P] = i.useState(l);
                    i.useEffect(() => {
                        l && P(!0)
                    }, [l]);
                    let M = i.useRef(null),
                        y = (0, d.default)(null != a ? a : M),
                        {
                            avatarDecorationSrc: D
                        } = (0, m.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !y
                        });
                    return (0, n.jsxs)(R, {
                        className: O ? L.decorationGridItemChurned : void 0,
                        innerRef: null != a ? a : M,
                        isSelected: l,
                        ...c,
                        children: [(0, n.jsx)("img", {
                            className: L.presetDecorationImg,
                            src: D,
                            alt: r.label
                        }), (() => {
                            let e = u === A.Section.PURCHASE || u === A.Section.PREMIUM_PURCHASE && g;
                            if (e) return null;
                            let t = !h && !l && !N;
                            return t ? (0, n.jsx)(I.PremiumBadge, {
                                className: L.newBadge,
                                text: (0, n.jsxs)("div", {
                                    className: L.newBadgeText,
                                    children: [(0, n.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), v.default.Messages.NEW]
                                })
                            }) : (0, n.jsx)(I.IconBadge, {
                                icon: C ? () => (0, n.jsx)(p.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, n.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: s.default.BACKGROUND_ACCENT,
                                className: L.iconBadge
                            })
                        })()]
                    })
                };
            var N = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: i,
                    onSelect: a,
                    onOpenShop: u
                } = e, s = (0, A.default)();
                return (0, n.jsx)(c.MasonryList, {
                    fade: !0,
                    className: L.list,
                    columns: 3,
                    sections: s.map(e => {
                        let {
                            items: t
                        } = e;
                        return t.length
                    }),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: (e, o, d, f) => {
                        let {
                            section: E,
                            items: _
                        } = s[e];
                        return (0, l.match)(_[o]).with(A.NONE_ITEM, () => (0, n.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => a(null),
                            children: [(0, n.jsx)(h.default, {
                                className: L.notAllowedIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: v.default.Messages.NONE
                            })]
                        }, f)).with(A.SHOP_ITEM, () => (0, n.jsxs)(R, {
                            style: d,
                            onSelect: u,
                            children: [(0, n.jsx)(C.default, {
                                className: L.shopIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: v.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, f)).otherwise(e => {
                            let u = (null == r ? void 0 : r.id) === e.id;
                            return (0, n.jsx)(O, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: E,
                                innerRef: u ? i : void 0,
                                isSelected: u,
                                onSelect: () => a(e)
                            }, f)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = s[e];
                        return (0, n.jsx)("div", {
                            className: L.headings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, n.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => s[e].height,
                    getItemKey: (e, t) => s[e].items[t].id,
                    getItemHeight: g
                })
            }
        },
        643070: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Section: function() {
                    return n
                },
                NONE_ITEM: function() {
                    return C
                },
                SHOP_ITEM: function() {
                    return p
                },
                default: function() {
                    return h
                }
            }), r("222007"), r("808653"), r("424973");
            var n, i, a = r("884691"),
                u = r("917351"),
                l = r("65597"),
                s = r("853987"),
                o = r("775416"),
                c = r("805172"),
                d = r("491232"),
                f = r("697218"),
                E = r("719923"),
                _ = r("782340");
            (i = n || (n = {})).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview", i.PREMIUM_PREVIEW = "premium_preview";
            let C = {
                    id: "None"
                },
                p = {
                    id: "Shop"
                };
            var h = () => {
                let e = (0, l.default)([f.default], () => f.default.getCurrentUser()),
                    t = E.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: r
                    } = (0, c.default)({
                        location: "useAvatarDecorationSections"
                    }),
                    n = (0, l.default)([o.default], () => o.default.purchases),
                    [i, h] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.categories, s.default.categorySkuIdsByProductSkuId]);
                return (0, a.useMemo)(() => {
                    let e = (0, u.uniqBy)([...(0, d.getAvatarDecorationsFromPurchases)(n), ...(0, d.getAvatarDecorationsFromCategories)(i)], "id"),
                        a = e.reduce((e, r) => {
                            let a = n.get(r.skuId),
                                u = (0, d.isPremiumCollectiblesPurchase)(a);
                            if (u && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), u) return e.premium_purchase.push(r), e;
                            if (null != a) return e.purchase.push(r), e;
                            let l = i.get(h[r.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(l)) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(r), e
                            }
                            return e.preview.push(r), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        }),
                        l = !!t || !!r || a.purchase.length > 0;
                    return [{
                        section: "purchase",
                        items: l ? [C, p, ...a.purchase] : [],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: a.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
                        items: a.premium_purchase.length > 0 ? a.premium_purchase : a.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: "preview",
                        items: a.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [i, n, h, t, r])
            }
        },
        619935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useBlockedPaymentsConfig: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var n = r("862205"),
                i = r("15733");
            let a = (0, n.createExperiment)({
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
                u = (0, n.createExperiment)({
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
                } = a.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = u.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: r
                } = (0, i.default)();
                return e || t && "RU" === r
            }
            var s = a
        },
        473591: function(e, t, r) {
            "use strict";
            let n, i, a, u, l, s;
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            });
            var o = r("446674"),
                c = r("913144");
            let d = !1,
                f = !1,
                E = null,
                _ = {},
                C = {},
                p = {},
                h = {};

            function S() {
                n = void 0, i = void 0, a = void 0, u = void 0, l = void 0, E = null
            }
            class I extends o.default.Store {
                getSettings(e) {
                    if (null != e) return p[e]
                }
                getProfile(e) {
                    return null == e ? null : _[e]
                }
                getGeneratedPersonality() {
                    return s
                }
                getPendingPersonality() {
                    return n
                }
                getPendingNick() {
                    return i
                }
                getErrors() {
                    return E
                }
                hasPendingChanges() {
                    return void 0 !== n || void 0 !== i || void 0 !== a || void 0 !== u || void 0 !== l
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: a,
                        pendingNick: i,
                        pendingPersonality: n,
                        pendingBanner: u,
                        pendingThemeColors: l
                    }
                }
                isSavingSettings() {
                    return d
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = h[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, r;
                    let n = null !== (t = h[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now(),
                        a = i - (null !== (r = n.lastFetchTimestampMs) && void 0 !== r ? r : 0) > 36e5;
                    return !(null == n ? void 0 : n.isFetching) && a
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = C[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            I.displayName = "ClydeStore";
            var T = new I(c.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, r = h[t];
                    h[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: r
                    } = e;
                    h[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, p[t] = r
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, r = h[t];
                    h[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: r
                    } = e;
                    n = t, r && (s = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    i = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    a = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    u = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    l = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    E = null, d = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    d = !1, p[t.guild_id] = t, S()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    d = !1, E = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: S,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, r = C[t];
                    C[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    C[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, r = C[t];
                    C[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    f = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    f = !1
                }
            })
        },
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return d
                },
                closeCollectiblesShop: function() {
                    return f
                },
                productDetailsOpened: function() {
                    return E
                },
                fetchCollectiblesCategories: function() {
                    return _
                },
                fetchCollectiblesPurchases: function() {
                    return C
                },
                fetchCollectiblesProduct: function() {
                    return p
                },
                claimPremiumCollectiblesProduct: function() {
                    return h
                },
                validateCollectiblesRecipient: function() {
                    return S
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return I
                }
            });
            var n = r("872717"),
                i = r("913144"),
                a = r("54239"),
                u = r("448993"),
                l = r("514296"),
                s = r("407788"),
                o = r("489134"),
                c = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, a.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
                },
                f = () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, a.popLayer)()
                },
                E = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                _ = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await n.default.get(c.Endpoints.COLLECTIBLES_CATEGORIES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(l.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new u.APIError(e)
                    }
                }, C = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await n.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(o.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new u.APIError(e)
                    }
                }, p = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await n.default.get(c.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: s.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new u.APIError(e)
                    }
                }, h = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await n.default.put({
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(o.default.fromServer)
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new u.APIError(t)
                    }
                }, S = async (e, t) => {
                    try {
                        let r = await n.default.get({
                            url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        });
                        return r.body.valid
                    } catch (e) {
                        throw new u.APIError(e)
                    }
                }, I = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            }), r("808653");
            var n = r("635058"),
                i = r("265586"),
                a = r("446674"),
                u = r("913144"),
                l = r("853987");
            let s = new Date(2023, 8, 25),
                o = new Date(2023, 9, 5),
                c = () => ({
                    categoryItemViews: {
                        [n.CollectiblesCategorySkuId.FANTASY]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: s,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [n.CollectiblesCategorySkuId.ANIME]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: s,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [n.CollectiblesCategorySkuId.BREAKFAST]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: s,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [n.CollectiblesCategorySkuId.DISXCORE]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: s
                        }
                    }
                }),
                d = c();
            class f extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var t;
                    let r = l.default.getCategoryForProduct(e.skuId);
                    return null != r && (null === (t = d.categoryItemViews[r.skuId]) || void 0 === t ? void 0 : t[e.type]) != null
                }
                reset() {
                    d = c()
                }
            }
            f.displayName = "CollectiblesPersistedStore", f.persistKey = "CollectiblesPersistedStoreV2";
            var E = new f(u.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, n = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: i
                        } = t, a = r.reduce((e, t) => {
                            var r;
                            return (null === (r = d.categoryItemViews[i]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[i] && (d.categoryItemViews[i] = {}), d.categoryItemViews[i][t] = n, !0)
                        }, !1);
                        return e || a
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let n, i, a;
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            }), r("222007");
            var u = r("917351"),
                l = r("446674"),
                s = r("913144");
            let o = new Map,
                c = o,
                d = !1;
            class f extends l.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return n
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return i
                }
                get claimError() {
                    return a
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            f.displayName = "CollectiblesPurchaseStore";
            var E = new f(s.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = o : !(0, u.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    c = o, d = !1, i = t
                },
                COLLECTIBLES_CLAIM: e => {
                    n = e.skuId, a = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = o : !(0, u.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), n = void 0, a = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    n = r, a = t
                },
                LOGOUT: e => {
                    c = o, d = !1, n = void 0, i = void 0, a = void 0
                }
            })
        },
        805172: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1,
                    marketingEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enables Collectibles Shop For All with in-app DCF marketing",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !0
                    }
                }]
            });
            var a = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: n = {}
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                })
            }
        },
        216719: function(e, t, r) {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var i = r("446674"),
                a = r("913144");
            let u = [],
                l = u,
                s = null,
                o = e => {
                    l = u, s = null
                };
            class c extends i.default.Store {
                get analyticsLocations() {
                    return l
                }
                get analyticsSource() {
                    return s
                }
                get initialProductSkuId() {
                    return n
                }
                getAnalytics() {
                    return {
                        analyticsLocations: l,
                        analyticsSource: s
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(a.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    l = null !== (t = e.analyticsLocations) && void 0 !== t ? t : u, s = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, n = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: o,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === n && (n = void 0)
                },
                LOGOUT: o
            })
        },
        984002: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("222007");
            var n = r("65597"),
                i = r("853987"),
                a = r("775416"),
                u = e => {
                    let [t, r] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.getCategoryForProduct(e), i.default.getProduct(e)]), u = (0, n.default)([a.default], () => a.default.getPurchase(e));
                    return {
                        category: t,
                        product: r,
                        purchase: u
                    }
                }
        },
        235898: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useMaybeFetchCollectiblesCategories: function() {
                    return o
                },
                default: function() {
                    return c
                }
            }), r("222007");
            var n = r("884691"),
                i = r("65597"),
                a = r("875212"),
                u = r("21526"),
                l = r("853987"),
                s = r("775416");

            function o() {
                let e = "useMaybeFetchCollectiblesCategories";
                (0, a.useTriggerDebuggingAA)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                }), (0, a.useTriggerDebuggingAA)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                let [t, r, s, o] = (0, i.useStateFromStoresArray)([l.default], () => {
                    var e;
                    return [l.default.isFetching, l.default.error, null !== (e = l.default.lastFetched) && void 0 !== e ? e : 0, l.default.categories]
                });
                return (0, n.useEffect)(() => {
                    !(t || r || Date.now() - s < 6e5) && (0, u.fetchCollectiblesCategories)()
                }, [t, s, r]), {
                    isFetching: t,
                    categories: o,
                    error: r
                }
            }

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, a.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, a.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: r,
                    categories: l,
                    error: c
                } = o(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: E,
                    isFetching: _,
                    purchases: C
                } = function() {
                    let e = "useFetchPurchases";
                    (0, a.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, a.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, r, l, o, c] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.isClaiming, s.default.fetchError, s.default.claimError, s.default.purchases]);
                    return (0, n.useEffect)(() => {
                        (0, u.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: r,
                        fetchError: l,
                        claimError: o,
                        isFetching: t,
                        purchases: c
                    }
                }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : E;
                return {
                    isFetching: r || _,
                    isFetchingCategories: r,
                    isFetchingPurchases: _,
                    isClaiming: d,
                    categories: l,
                    purchases: C,
                    error: p
                }
            }
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            }), r("808653"), r("424973");
            var n, i = r("407788"),
                a = r("792382");
            n = class e extends a.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: n,
                        ...a
                    } = t;
                    return new e({
                        ...super.fromServer(a),
                        products: r.reduce((e, t) => {
                            let r = i.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: n
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }
        },
        407788: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            }), r("808653"), r("794252"), r("424973");
            var n, i = r("506838"),
                a = r("265586"),
                u = r("797647"),
                l = r("730297"),
                s = r("792382"),
                o = r("806410");
            n = class e extends s.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: n,
                        price: s,
                        prices: c,
                        ...d
                    } = t;
                    return new e({
                        ...super.fromServer(d),
                        currency: n,
                        price: s,
                        prices: null == (r = c) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let n = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: n.country_prices.country_code,
                                    prices: n.country_prices.prices.map(e => (0, u.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: d.items.reduce((e, t) => (0, i.match)(t).with({
                            type: a.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(l.default.fromServer(t)), e)).with({
                            type: a.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.items = e.items
                }
            }
        },
        489134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n, i = r("407788");
            n = class e extends i.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: n,
                        ...i
                    } = t;
                    return new e({
                        ...super.fromServer(i),
                        purchaseType: n,
                        purchasedAt: null != r ? new Date(r) : r
                    })
                }
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
            }
        },
        792382: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n, i = r("666038");
            n = class e extends i.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: n,
                        unpublished_at: i,
                        ...a
                    } = t, u = null != i ? new Date(i) : null;
                    return new e({
                        ...a,
                        storeListingId: r,
                        skuId: n,
                        unpublishedAt: u
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        716120: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                a = r.n(i),
                u = r("65597"),
                l = r("854588"),
                s = r("206230"),
                o = r("284679"),
                c = r("491232"),
                d = r("408381"),
                f = r("268779"),
                E = e => {
                    let {
                        asset: t,
                        size: r = d.MAX_CONTENT_WIDTH,
                        className: i,
                        style: E,
                        children: _
                    } = e, C = (0, u.default)([s.default], () => s.default.saturation);
                    return (0, n.jsx)("div", {
                        className: a(f.banner, i),
                        style: (() => {
                            if (null == t) return E;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === C) return {
                                ...E,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let n = (0, o.hexOpacityToRgba)(l.default.unsafe_rawColors.BLACK_500, 1 - C);
                            return {
                                ...E,
                                backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: _
                    })
                }
        },
        408381: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getLogoSize: function() {
                    return i
                },
                getBackgroundGradient: function() {
                    return a
                }
            });
            let n = 1060,
                i = e => 3.8 * e,
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: r,
                            secondary: n
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        75015: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UploadTypes: function() {
                    return a
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return s
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
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return _
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return C
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return p
                },
                BANNER_ASPECT_RATIO: function() {
                    return h
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return S
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return I
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return T
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return A
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return L
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return g
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return R
                },
                MessageTypes: function() {
                    return u
                }
            });
            var n, i, a, u, l = r("917219");
            (n = a || (a = {}))[n.AVATAR = 0] = "AVATAR", n[n.BANNER = 1] = "BANNER", n[n.GUILD_BANNER = 2] = "GUILD_BANNER", n[n.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", n[n.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", n[n.HOME_HEADER = 5] = "HOME_HEADER", n[n.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let s = 568,
                o = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                E = 2400,
                _ = 960,
                C = 2400,
                p = 600,
                h = 17 / 6,
                S = 16 / 9,
                I = 2.5,
                T = 4,
                A = s / h,
                m = s / S,
                v = s / I,
                L = s / T,
                g = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
                R = s / g;
            (i = u || (u = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        649844: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("748820"),
                a = r("77078"),
                u = r("112679"),
                l = r("55689"),
                s = r("855133"),
                o = r("599110"),
                c = r("659500"),
                d = r("49111"),
                f = r("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: C,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: h,
                    analyticsObject: S,
                    analyticsLocation: I,
                    analyticsSourceLocation: T,
                    isGift: A = !1,
                    giftMessage: m,
                    subscriptionTier: v,
                    trialId: L,
                    postSuccessGuild: g,
                    openInvoiceId: R,
                    applicationId: O,
                    referralTrialOfferId: N,
                    giftRecipient: P,
                    returnRef: M
                } = null != e ? e : {}, y = !1, D = (0, i.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await r.el("646139").then(r.bind(r, "646139"));
                    return r => {
                        let {
                            onClose: i,
                            ...a
                        } = r;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: D,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: A,
                            giftMessage: m,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == C || C(), !A && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: h,
                            analyticsObject: S,
                            analyticsLocation: I,
                            analyticsSourceLocation: T,
                            trialId: L,
                            postSuccessGuild: g,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: O,
                            referralTrialOfferId: N,
                            returnRef: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : S,
                            source: T,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != L,
                            application_id: O,
                            location_stack: h
                        }), (0, u.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return u
                },
                setCanPlayWowMoment: function() {
                    return l
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var n = r("913144");
            let i = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                u = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                l = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return h
                }
            });
            var n = r("884691"),
                i = r("65597"),
                a = r("872717"),
                u = r("913144"),
                l = r("775433"),
                s = r("697218"),
                o = r("10514"),
                c = r("764364"),
                d = r("676572"),
                f = r("646718"),
                E = r("49111");
            let _ = "nonSubscriber";
            async function C() {
                try {
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), n = d.default.shouldFetchPremiumLikelihood(), i = s.default.getCurrentUser();
                S(i, n, t, r)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), u = (0, i.default)([s.default], () => s.default.getCurrentUser());
                n.useEffect(() => {
                    S(u, a, t, r)
                }, [u, a, t, r])
            }

            function S(e, t, r, n) {
                null != e && !(0, c.isPremium)(e) && r && (t && C(), n && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("446674"),
                i = r("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                u = a;
            class l extends n.default.Store {
                initialize() {
                    u = a
                }
                getState() {
                    return u
                }
                shouldFetchPremiumLikelihood() {
                    return !u.isFetching && !u.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var s = new l(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    u.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    u.premiumLikelihood = t, u.fetched = !0, u.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    u.isFetching = !1
                },
                LOGOUT: function() {
                    u.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
            var a = i
        },
        15733: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                i = r("446674"),
                a = r("913144"),
                u = r("850068"),
                l = r("271938"),
                s = r("160299"),
                o = r("357957");

            function c() {
                let e = (0, i.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, i.useStateFromStores)([s.default], () => s.default.ipCountryCode),
                    r = (0, i.useStateFromStores)([l.default], () => l.default.isAuthenticated());
                return n.useEffect(() => {
                    a.default.wait(() => {
                        r && !s.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && u.fetchPaymentSources()
                    })
                }, [r]), n.useEffect(() => {
                    r && !s.default.ipCountryCodeLoaded && u.fetchIpCountryCode()
                }, [t, r]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        737403: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var n = r("913144");

            function i(e) {
                let {
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: a,
                    isTryItOutFlow: u = !1
                } = e;
                n.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: a,
                    isTryItOutFlow: u
                })
            }
        },
        453252: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return n
                }
            });
            let n = 10485760
        },
        771325: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                handleOpenSelectImageModal: function() {
                    return _
                },
                showFileSizeErrorModal: function() {
                    return C
                },
                getPreviewAvatar: function() {
                    return p
                },
                getPreviewNickname: function() {
                    return h
                },
                getPreviewDisplayName: function() {
                    return S
                },
                isColorDark: function() {
                    return I
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("509043"),
                a = r("77078"),
                u = r("336522"),
                l = r("473591"),
                s = r("315102"),
                o = r("254490"),
                c = r("737403"),
                d = r("453252"),
                f = r("75015"),
                E = r("782340");

            function _(e, t, i, u) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await r.el("420333").then(r.bind(r, "420333")), s = l.default.isEditingClydeProfile();
                    return r => (0, n.jsx)(a, {
                        filters: u,
                        maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === f.UploadTypes.BANNER && E.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (r, n) => (0, c.maybeOpenProfilePreviewModal)({
                            imageSrc: r,
                            file: n,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: i
                        }),
                        uploadType: e,
                        showUpsellHeader: !s,
                        ...r
                    })
                })
            }

            function C() {
                (0, u.openUploadError)({
                    title: E.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: E.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function p(e, t, r) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: a = !0
                } = n, u = null === e;
                return u && null == t ? s.default.getDefaultAvatarURL(r.id, r.discriminator) : u || (null == t ? void 0 : t.avatar) == null ? r.getAvatarURL(void 0, i, a) : r.getAvatarURL(null == t ? void 0 : t.guildId, i, a)
            }

            function h(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function S(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function I(e) {
                let t = null != e ? (0, i.getDarkness)(e) : 1;
                return t > .25
            }
        },
        106435: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("884691"),
                i = r("77078"),
                a = r("606292"),
                u = r("688318"),
                l = r("19287");

            function s(e) {
                let {
                    user: t,
                    guildId: r,
                    size: s,
                    showPending: o = !1,
                    showTryItOut: c = !1,
                    animateOnHover: d = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: E
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: C,
                    eventHandlers: p
                } = (0, l.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: r,
                    size: (0, i.getAvatarSize)(s),
                    showPending: o,
                    animateOnHover: d,
                    avatarOverride: E
                }), {
                    avatarPlaceholderSrc: h,
                    avatarDecorationSrc: S,
                    eventHandlers: I
                } = (0, u.default)({
                    user: t,
                    size: (0, a.getDecorationSizeForAvatarSize)(s),
                    showPending: o,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), T = n.useCallback(() => {
                    p.onMouseEnter(), I.onMouseEnter()
                }, [p, I]), A = n.useCallback(() => {
                    p.onMouseLeave(), I.onMouseLeave()
                }, [p, I]);
                return {
                    avatarPlaceholderSrc: h,
                    avatarDecorationSrc: S,
                    avatarSrc: _,
                    isAnimating: C,
                    eventHandlers: {
                        onMouseEnter: T,
                        onMouseLeave: A
                    }
                }
            }
        },
        19287: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useAnimatedAvatarSrc: function() {
                    return c
                }
            }), r("222007");
            var n = r("884691"),
                i = r("446674"),
                a = r("206230"),
                u = r("771325"),
                l = r("26989"),
                s = r("471671"),
                o = r("91653");

            function c(e) {
                let {
                    user: t,
                    guildId: r,
                    size: c,
                    showPending: d = !1,
                    animateOnHover: f = !1,
                    avatarOverride: E
                } = e, [_, C] = n.useState(!1), p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), h = (0, i.useStateFromStores)([s.default], () => s.default.isFocused()), S = h && (_ || !p && !f), {
                    pendingAvatar: I
                } = (0, o.default)({}), T = (0, i.useStateFromStores)([l.default], () => null != r && null != t ? l.default.getMember(r, t.id) : null), A = n.useMemo(() => null != t ? (0, u.getPreviewAvatar)(d ? null != E ? E : I : void 0, T, t, {
                    canAnimate: S,
                    size: c
                }) : void 0, [d, I, T, t, S, c, E]), m = n.useCallback(() => C(!0), []), v = n.useCallback(() => C(!1), []);
                return {
                    avatarSrc: A,
                    isAvatarAnimating: S,
                    eventHandlers: {
                        onMouseEnter: m,
                        onMouseLeave: v
                    }
                }
            }
        },
        181114: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return S
                }
            });
            var n, i, a = r("37983"),
                u = r("884691"),
                l = r("414456"),
                s = r.n(l),
                o = r("458960"),
                c = r("77078"),
                d = r("252744"),
                f = r("145131"),
                E = r("396792");
            (n = i || (i = {})).DEFAULT = "default", n.SMALL = "small";
            let _ = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                C = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class p extends u.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: r,
                        ...n
                    } = this.props;
                    return (0, a.jsx)(o.default.div, {
                        ...n,
                        className: s(E.shineContainer, e, {
                            [E.shinePaused]: r
                        }),
                        children: (0, a.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, a.jsx)("div", {
                                className: C[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let h = e => {
                let {
                    children: t,
                    className: r,
                    disabled: n,
                    submitting: i,
                    pauseAnimation: l,
                    shineSize: o = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: C,
                    ...h
                } = e, S = u.createRef(), I = (0, d.default)(S), T = !n && !i && !0 !== l && (!C || I);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: S,
                    ...h,
                    className: s(E.shinyButton, r),
                    disabled: n,
                    submitting: i,
                    children: [t, T ? (0, a.jsx)(p, {
                        shinePaused: f,
                        className: s(E.buttonShine, C ? E.onlyShineOnHover : void 0, _),
                        shineSize: o
                    }) : null]
                })
            };
            h.ShineSizes = i;
            var S = h
        },
        476765: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                uid: function() {
                    return u
                },
                useUID: function() {
                    return l
                },
                UID: function() {
                    return s
                }
            });
            var n = r("995008"),
                i = r.n(n),
                a = r("775560");
            let u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                l = () => (0, a.useLazyValue)(() => u()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(l())
                }
        },
        743826: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("422244"),
                u = r("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 23,
                        height: r = 18,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 23 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                            fill: i
                        })
                    })
                }, a.ShopIcon, void 0, {
                    size: 23
                })
        },
        978679: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("998460"),
                u = r("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: r,
                        ...(0, u.default)(l),
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("202909"),
                u = r("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        viewBox: a = "0 0 24 24",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: r,
                        viewBox: a,
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, a.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        468759: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("833222"),
                u = r("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: l,
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, u.default)(s),
                        className: a,
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }), (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                        })]
                    })
                }, a.DenyIcon, void 0, {
                    size: 24
                })
        },
        600785: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("434657"),
                u = r("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: i,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, a.LockIcon, void 0, {
                    size: 24
                })
        },
        719347: function(e, t, r) {
            "use strict";
            var n, i;
            r.r(t), r.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return a
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return u
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return l
                },
                MediaLayoutType: function() {
                    return n
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return s
                }
            });
            let a = 550,
                u = 350,
                l = 40;
            (i = n || (n = {})).STATIC = "STATIC", i.RESPONSIVE = "RESPONSIVE", i.MOSAIC = "MOSAIC";
            let s = 20
        }
    }
]);