(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72984"], {
        969176: function(e, t, n) {
            var r = n("354069");
            e.exports = function(e, t) {
                return r(e, t)
            }
        },
        188904: function(e, t, n) {
            "use strict";
            var r = {
                linear: function(e, t, n, r) {
                    return (n - t) * e / r + t
                },
                easeInQuad: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e + t
                },
                easeOutQuad: function(e, t, n, r) {
                    return -(n - t) * (e /= r) * (e - 2) + t
                },
                easeInOutQuad: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
                },
                easeInCubic: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e + t
                },
                easeOutCubic: function(e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e + 1) + t
                },
                easeInOutCubic: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
                },
                easeInQuart: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e + t
                },
                easeOutQuart: function(e, t, n, r) {
                    return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t
                },
                easeInOutQuart: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
                },
                easeInQuint: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e * e + t
                },
                easeOutQuint: function(e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t
                },
                easeInOutQuint: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
                },
                easeInSine: function(e, t, n, r) {
                    var i = n - t;
                    return -i * Math.cos(e / r * (Math.PI / 2)) + i + t
                },
                easeOutSine: function(e, t, n, r) {
                    return (n - t) * Math.sin(e / r * (Math.PI / 2)) + t
                },
                easeInOutSine: function(e, t, n, r) {
                    return -(n - t) / 2 * (Math.cos(Math.PI * e / r) - 1) + t
                },
                easeInExpo: function(e, t, n, r) {
                    return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t
                },
                easeOutExpo: function(e, t, n, r) {
                    var i = n - t;
                    return e == r ? t + i : i * (-Math.pow(2, -10 * e / r) + 1) + t
                },
                easeInOutExpo: function(e, t, n, r) {
                    var i = n - t;
                    return 0 === e ? t : e === r ? t + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                },
                easeInCirc: function(e, t, n, r) {
                    return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t
                },
                easeOutCirc: function(e, t, n, r) {
                    return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t
                },
                easeInOutCirc: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                },
                easeInElastic: function(e, t, n, r) {
                    var i, l, s, a = n - t;
                    return (s = 1.70158, l = 0, i = a, 0 === e) ? t : 1 == (e /= r) ? t + a : (!l && (l = .3 * r), i < Math.abs(a) ? (i = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / l)) + t)
                },
                easeOutElastic: function(e, t, n, r) {
                    var i, l, s, a = n - t;
                    return (s = 1.70158, l = 0, i = a, 0 === e) ? t : 1 == (e /= r) ? t + a : (!l && (l = .3 * r), i < Math.abs(a) ? (i = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / i), i * Math.pow(2, -10 * e) * Math.sin((e * r - s) * (2 * Math.PI) / l) + a + t)
                },
                easeInOutElastic: function(e, t, n, r) {
                    var i, l, s, a = n - t;
                    return (s = 1.70158, l = 0, i = a, 0 === e) ? t : 2 == (e /= r / 2) ? t + a : (!l && (l = r * (.3 * 1.5)), i < Math.abs(a) ? (i = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / i), e < 1) ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / l)) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / l) * .5 + a + t
                },
                easeInBack: function(e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158), (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
                },
                easeOutBack: function(e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158), (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
                },
                easeInOutBack: function(e, t, n, r, i) {
                    var l = n - t;
                    return (void 0 === i && (i = 1.70158), (e /= r / 2) < 1) ? l / 2 * (e * e * (((i *= 1.525) + 1) * e - i)) + t : l / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                },
                easeInBounce: function(e, t, n, i) {
                    var l, s = n - t;
                    return l = r.easeOutBounce(i - e, 0, s, i), s - l + t
                },
                easeOutBounce: function(e, t, n, r) {
                    var i = n - t;
                    if ((e /= r) < 1 / 2.75) return i * (7.5625 * e * e) + t;
                    if (e < 2 / 2.75) return i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
                    if (e < 2.5 / 2.75) return i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
                    else return i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOutBounce: function(e, t, n, i) {
                    var l, s = n - t;
                    return e < i / 2 ? .5 * (l = r.easeInBounce(2 * e, 0, s, i)) + t : .5 * (l = r.easeOutBounce(2 * e - i, 0, s, i)) + .5 * s + t
                }
            };
            e.exports = r
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return r
                },
                rgbaToDataURL: function() {
                    return i
                },
                thumbHashToDataURL: function() {
                    return l
                }
            });

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function i(e, t, n) {
                let r = 4 * e + 1,
                    i = 6 + t * (5 + r),
                    l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    o = 0;
                for (let e = 0, i = 0, s = r - 1; e < t; e++, s += r - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + a) % 65521; i < s; i++) {
                        let e = 255 & n[i];
                        l.push(e), o = (o + (a = (a + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(o >> 8, 255 & o, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= l[r], n = (n = n >>> 4 ^ s[15 & n]) >>> 4 ^ s[15 & n];
                    n = ~n, l[t++] = n >>> 24, l[t++] = n >> 16 & 255, l[t++] = n >> 8 & 255, l[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...l))
            }

            function l(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: i,
                        cos: l,
                        round: s
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, u = (63 & a) / 63, c = (a >> 6 & 63) / 31.5 - 1, d = (a >> 12 & 63) / 31.5 - 1, f = a >> 23, E = (o >> 3 & 63) / 63, h = (o >> 9 & 63) / 63, _ = o >> 15, I = i(3, _ ? f ? 5 : 7 : 7 & o), p = i(3, _ ? 7 & o : f ? 5 : 7), R = f ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, S = f ? 6 : 5, m = 0, v = (t, n, r) => {
                        let i = [];
                        for (let l = 0; l < n; l++)
                            for (let s = l ? 0 : 1; s * n < t * (n - l); s++) i.push(((e[S + (m >> 1)] >> ((1 & m++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, g = v(I, p, (a >> 18 & 31) / 31), T = v(3, 3, 1.25 * E), L = v(3, 3, 1.25 * h), N = f && v(5, 5, C), A = r(e), M = s(A > 1 ? 32 : 32 * A), x = s(A > 1 ? 32 / A : 32), O = new Uint8Array(M * x * 4), P = [], U = [];
                    for (let e = 0, r = 0; e < x; e++)
                        for (let s = 0; s < M; s++, r += 4) {
                            let a = u,
                                o = c,
                                E = d,
                                h = R;
                            for (let e = 0, n = i(I, f ? 5 : 3); e < n; e++) P[e] = l(t / M * (s + .5) * e);
                            for (let n = 0, r = i(p, f ? 5 : 3); n < r; n++) U[n] = l(t / x * (e + .5) * n);
                            for (let e = 0, t = 0; e < p; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n * p < I * (p - e); n++, t++) a += g[t] * P[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                                    let e = P[n] * r;
                                    o += T[t] * e, E += L[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) h += N[t] * P[n] * r;
                            let _ = a - 2 / 3 * o,
                                C = (3 * a - _ + E) / 2,
                                S = C - E;
                            O[r] = i(0, 255 * n(1, C)), O[r + 1] = i(0, 255 * n(1, S)), O[r + 2] = i(0, 255 * n(1, _)), O[r + 3] = i(0, 255 * n(1, h))
                        }
                    return {
                        w: M,
                        h: x,
                        rgba: O
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
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
            var r = n("872717"),
                i = n("913144"),
                l = n("271560"),
                s = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), r.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                    entitlementType: l
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await r.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: l
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
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return l
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
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                r.default.wait(() => r.default.dispatch({
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
            var r = n("913144");

            function i() {
                r.default.dispatch({
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
                    return l
                }
            });
            var r = n("884691"),
                i = n("599110");
            let l = () => r.useContext(i.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(e) {
                let [t, n] = (0, r.useState)(!1), i = (0, r.useRef)(e.current);
                return (0, r.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, r.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        r = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r)
                    }
                }, [i]), t
            }
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("49111");

            function i(e, t) {
                return t !== r.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("871388"),
                i = n("49111");

            function l(e) {
                return (0, r.default)(e, i.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return R
                },
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                a = n("305961"),
                o = n("145131"),
                u = n("599110"),
                c = n("335189"),
                d = n("473591"),
                f = n("980215"),
                E = n("879253"),
                h = n("709594"),
                _ = n("49111"),
                I = n("782340"),
                p = n("947399");

            function R(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: R,
                    isFetchingSettings: C,
                    isSavingSettings: S,
                    hasPendingChanges: m,
                    errors: v
                } = (0, l.useStateFromStoresObject)([d.default], () => ({
                    settings: d.default.getSettings(n),
                    isFetchingSettings: d.default.isFetchingSettings(n),
                    isSavingSettings: d.default.isSavingSettings(),
                    hasPendingChanges: d.default.hasPendingChanges(),
                    errors: d.default.getErrors()
                })), g = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(n)), T = (0, f.useClydeProfilesEnabled)(g), [L, N] = i.useState(!1);
                i.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
                    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
                }), []), i.useEffect(() => {
                    (0, c.fetchClydeSettings)(n, !0)
                }, [n]), i.useEffect(() => {
                    (m || null != v) && N(!1)
                }, [m, v]);
                let A = async () => {
                    if (null == n || !d.default.hasPendingChanges()) return;
                    let e = d.default.getPendingUpdates();
                    await (0, c.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), N(!0)
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: p.heading,
                            children: (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: I.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, r.jsx)(s.ScrollerAuto, {
                        className: p.content,
                        children: C || null == R ? (0, r.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [T && (0, r.jsx)(h.default, {
                                guildId: n
                            }), null != R && (0, r.jsx)("div", {
                                className: p.section,
                                children: (0, r.jsx)(E.ClydeEditProfileModalPersonalitySection, {
                                    settings: R
                                })
                            })]
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: p.footer,
                        children: [(0, r.jsx)("div", {
                            className: p.resetButtonContainer,
                            children: (0, r.jsx)(s.Button, {
                                onClick: () => {
                                    (0, c.resetPendingChanges)(), u.default.track(_.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !m,
                                children: I.default.Messages.RESET
                            })
                        }), m && null == v && (0, r.jsx)("div", {
                            className: p.pendingChangesMessage,
                            children: I.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), L && (0, r.jsx)("div", {
                            className: p.successfullSaveMessage,
                            children: I.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != v && (0, r.jsx)("div", {
                            className: p.errorMessage,
                            children: I.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(s.Button, {
                                onClick: A,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: S,
                                disabled: !m,
                                children: I.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: i
                } = e;
                return (0, r.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, r.jsx)(R, {
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
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("65597"),
                s = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                c = n("599110"),
                d = n("335189"),
                f = n("473591"),
                E = n("680894"),
                h = n("49111"),
                _ = n("782340"),
                I = n("192731");

            function p(e) {
                var t;
                let {
                    settings: n
                } = e, [p, R] = i.useState(!1), [C, S] = i.useState(), {
                    pendingPersonality: m,
                    errors: v
                } = (0, l.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [g, T] = i.useState(), L = null != m && C === m, N = null != v && Number(v.code) === h.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? v.message : void 0, A = L ? _.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : _.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, r.jsxs)(a.default, {
                    title: _.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, r.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: I.description,
                        children: [_.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, r.jsx)(s.Anchor, {
                            href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: _.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, r.jsx)(s.TextArea, {
                        value: null !== (t = null != m ? m : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, d.setPendingPersonality)(e)
                        },
                        placeholder: _.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: p,
                        autosize: !0
                    }), null != N ? (0, r.jsx)(s.FormErrorBlock, {
                        className: I.errorBlock,
                        children: N
                    }) : null, (0, r.jsxs)("div", {
                        className: I.generateButtonContainer,
                        children: [(0, r.jsx)(s.Button, {
                            color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: I.generateButton,
                            onClick: () => {
                                if (L && null != g) {
                                    (0, d.setPendingPersonality)(g), T(void 0);
                                    return
                                }
                                null != m && "" !== m.trim() && (c.default.track(h.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), R(!0), (0, d.generatePersonality)(m).then(e => {
                                    null != e && (T(m), S(e), (0, d.setPendingPersonality)(e, !0)), R(!1)
                                }))
                            },
                            disabled: null == m || "" === m.trim(),
                            submitting: p,
                            children: L ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.default, {
                                    className: I.buttonIcon
                                }), _.default.Messages.UNDO]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(o.default, {
                                    className: I.buttonIcon
                                }), _.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, r.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: A
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                l = n.n(i),
                s = n("446674"),
                a = n("184900"),
                o = n("11899"),
                u = n("447645"),
                c = n("569460"),
                d = n("52704"),
                f = n("121370"),
                E = n("26989"),
                h = n("305961"),
                _ = n("697218"),
                I = n("335189"),
                p = n("473591"),
                R = n("680894"),
                C = n("782340"),
                S = n("618641");

            function m(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: i,
                    pendingThemeColors: l
                } = (0, s.useStateFromStoresObject)([p.default], () => p.default.getPendingUpdates()), a = (0, s.useStateFromStores)([E.default], () => E.default.getMember(t, R.CLYDE_AI_USER_ID));
                return (0, r.jsxs)("div", {
                    className: S.editProfileSections,
                    children: [(0, r.jsx)(c.default, {
                        placeholder: C.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: i,
                        onGlobalNameChange: I.setPendingNick
                    }), (0, r.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: I.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: C.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, r.jsx)(d.default, {
                        guildId: t,
                        onBannerChange: I.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, r.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != l ? l : void 0,
                        onThemeColorsChange: I.setPendingThemeColors
                    })]
                })
            }

            function v(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: i,
                    pendingBanner: u,
                    pendingThemeColors: c
                } = (0, s.useStateFromStoresObject)([p.default], () => p.default.getPendingUpdates()), d = (0, s.useStateFromStores)([_.default], () => _.default.getUser(R.CLYDE_AI_USER_ID));
                l(null != d, "Clyde User must exist");
                let f = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(t));
                return (0, r.jsx)(o.default, {
                    className: S.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, r.jsx)(a.default, {
                        user: d,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: I.setPendingAvatar,
                        onBannerChange: I.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingThemeColors: null != c ? c : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, r.jsx)(m, {
                        guildId: t,
                        clydeUser: d
                    })
                })
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return _
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                o = n.n(a),
                u = n("77078"),
                c = n("159885"),
                d = n("694187"),
                f = n("49111"),
                E = n("782340"),
                h = n("911686");

            function _(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, r.jsx)("div", {
                    className: s(h.imageUploaderIcon, t),
                    children: n
                })
            }
            class I extends i.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, i, l;
                    let {
                        image: a,
                        hint: o,
                        name: I,
                        makeURL: p,
                        disabled: R,
                        onChange: C,
                        showIcon: S,
                        showIconDisabled: m,
                        className: v,
                        imageClassName: g,
                        iconClassName: T,
                        iconWrapperClassName: L,
                        icon: N,
                        hideSize: A,
                        imageStyle: M,
                        showRemoveButton: x,
                        maxFileSizeBytes: O,
                        onFileSizeError: P,
                        onOpenImageSelectModal: U,
                        "aria-label": y
                    } = this.props;
                    if (null != (t = null != a && /^data:/.test(a) ? a : p(a)) ? n = 'url("'.concat(t, '")') : null != I && (i = (0, r.jsx)("div", {
                            className: h.imageUploaderAcronym,
                            children: (0, c.getAcronym)(I)
                        })), R) return (0, r.jsx)("div", {
                        className: s(h.imageUploader, h.disabled, v),
                        children: (0, r.jsxs)("div", {
                            className: s(h.imageUploaderInner, g),
                            style: {
                                ...M,
                                backgroundImage: n
                            },
                            children: [i, m && (0, r.jsx)("div", {
                                className: s(h.imageUploaderIcon, h.imageUploaderIconDisabled, T),
                                children: N
                            })]
                        })
                    });
                    null != a ? l = (0, r.jsx)(u.Anchor, {
                        className: h.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !A && (l = (0, r.jsx)("small", {
                        className: h.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let b = null !== (e = null != y ? y : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: s(h.imageUploader, v),
                        children: [(0, r.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: S ? s(h.imageUploaderIconWrapper, L) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: s(h.imageUploaderInner, g),
                                    style: {
                                        ...M,
                                        backgroundImage: n
                                    },
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i
                                    }), null != U ? (0, r.jsx)(u.Clickable, {
                                        className: h.imageUploaderFileInput,
                                        "aria-label": b,
                                        onClick: U
                                    }) : (0, r.jsx)(d.default, {
                                        ref: this.inputRef,
                                        onChange: C,
                                        className: h.imageUploaderFileInput,
                                        "aria-label": b,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: P
                                    })]
                                }), null != o && (0, r.jsx)("div", {
                                    className: h.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), S && (0, r.jsx)(_, {
                                    className: T,
                                    icon: N
                                })]
                            })
                        }), x ? l : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            I.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var p = I
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                l = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: h,
                    onComplete: _,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: p,
                    analyticsObject: R,
                    analyticsLocation: C,
                    analyticsSourceLocation: S,
                    isGift: m = !1,
                    giftMessage: v,
                    subscriptionTier: g,
                    trialId: T,
                    postSuccessGuild: L,
                    openInvoiceId: N,
                    applicationId: A,
                    referralTrialOfferId: M,
                    giftRecipient: x,
                    returnRef: O
                } = null != e ? e : {}, P = !1, U = (0, i.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...l
                        } = n;
                        return (0, r.jsx)(e, {
                            ...l,
                            loadId: U,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: m,
                            giftMessage: v,
                            giftRecipient: x,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == h || h(e), e && (null == I || I())
                            },
                            onComplete: () => {
                                P = !0, null == _ || _(), !m && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: p,
                            analyticsObject: R,
                            analyticsLocation: C,
                            analyticsSourceLocation: S,
                            trialId: T,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: A,
                            referralTrialOfferId: M,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !P && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : R,
                            source: S,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != T,
                            application_id: A,
                            location_stack: p
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == h || h(P), P && (!m && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
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
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return s
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
            var r = n("913144");
            let i = () => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    r.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    r.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        70723: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                s = n("913144");

            function a() {
                r = !1, i = null
            }
            a();
            class o extends l.default.Store {
                get hasCompletedStepDuringSession() {
                    return r
                }
                get activeSubstep() {
                    return i
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(s.default, {
                SET_HAS_COMPLETED_STEP: function() {
                    r = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    r = !1
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
            var r = n("872717"),
                i = n("913144"),
                l = n("819689"),
                s = n("18494"),
                a = n("49111");
            let o = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), r.default.get({
                    url: a.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), r.default.post({
                    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    var t;
                    let n = await r.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (e) {
                    if (i.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function d(e) {
                try {
                    var t;
                    let n = await r.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (t) {
                    i.default.dispatch({
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
                    return T
                }
            });
            var r = n("637612"),
                i = n("446674"),
                l = n("913144"),
                s = n("697218"),
                a = n("179935"),
                o = n("49111");
            let u = null,
                c = {},
                d = [],
                f = new Set,
                E = !1,
                h = new Set,
                _ = new Set,
                I = {},
                p = 0,
                R = null,
                C = () => !0;

            function S(e) {
                h.add(e)
            }

            function m(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => v(e))
            }

            function v(e) {
                let t = e.type === r.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!_.has(t) && !h.has(t)) {
                    var n;
                    n = t, h.add(n), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class g extends i.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], C)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !E && p < 5 && (null == R || R < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == d ? [] : d
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return h.has(e)
                }
            }
            g.displayName = "ReferralTrialStore";
            var T = new g(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !h.has(t)) {
                        var r;
                        r = t, h.add(r), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    E = !1, u = t, d = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, p += 1, R = Date.now() + 1e3 * Math.pow(2, p)
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
                    (0, a.fetchReferralsRemaining)(), I[t.id] = t, d = [...d, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (h.delete(t.id), _.add(t.id), I[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    h.delete(t), _.add(t)
                },
                LOAD_MESSAGES_SUCCESS: m,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    v(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: m,
                LOGOUT: function() {
                    u = null, c = {}, d = [], f = new Set, E = !1, h = new Set, _ = new Set, I = {}, p = 0, R = null
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return h
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var r = n("884691"),
                i = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let h = "nonSubscriber";
            async function _() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [h]: e.non_subscriber,
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

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), i = o.default.getCurrentUser();
                R(i, r, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, i.default)([o.default], () => o.default.getCurrentUser());
                r.useEffect(() => {
                    R(s, l, t, n)
                }, [s, l, t, n])
            }

            function R(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), r && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends r.default.Store {
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
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(i.default, {
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
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var l = i
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("340412"),
                l = n("540692"),
                s = n("833516"),
                a = n("646718");

            function o(e) {
                var t, n, o, u;
                let c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    d = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, s.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    h = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    _ = (0, r.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (o = null !== (n = null !== (t = null != c ? c : _) && void 0 !== t ? t : d) && void 0 !== n ? n : f) && void 0 !== o ? o : E) && void 0 !== u ? u : h
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
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("862337"),
                s = n("697218"),
                a = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [n, c] = r.useState(u(t)),
                    d = (0, i.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            r = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !n && u(t) ? c(!0) : r()
                                })
                            };
                        return r(), () => e.stop()
                    }
                }, [n, t]), n || d ? null : t
            }
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("748820"),
                o = n("509043"),
                u = n("669491"),
                c = n("77078"),
                d = n("634634"),
                f = n("449918"),
                E = n("973262"),
                h = n("832132"),
                _ = n("771325"),
                I = n("49111"),
                p = n("782340"),
                R = n("727125");

            function C(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: l,
                    suggestedColors: C,
                    disabled: S,
                    label: m,
                    colorPickerMiddle: v,
                    colorPickerFooter: g,
                    showEyeDropper: T
                } = e, L = i.useRef(null), N = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), A = u.default.colors.BACKGROUND_ACCENT.css, M = (0, _.isColorDark)(l), x = (0, o.int2hex)(l), O = x === N ? A : x, P = (0, f.getColor)(M ? I.Color.WHITE_500 : I.Color.PRIMARY_530), U = (0, d.default)(v), y = (0, d.default)(g), [b, F] = i.useState((0, a.v4)());
                return i.useEffect(() => {
                    (U !== v || y !== g) && F((0, a.v4)())
                }, [g, v, y, U]), (0, r.jsx)(c.Popout, {
                    positionKey: b,
                    renderPopout: e => (0, r.jsx)(E.CustomColorPicker, {
                        ...e,
                        value: l,
                        onChange: t,
                        suggestedColors: C,
                        middle: v,
                        footer: g,
                        showEyeDropper: T
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)("div", {
                            ref: L,
                            className: s(R.colorSwatch, {
                                [R.disabled]: S
                            }),
                            children: [(0, r.jsx)(c.Clickable, {
                                ...n,
                                tabIndex: S ? -1 : 0,
                                onClick: S ? I.NOOP : t,
                                style: {
                                    backgroundColor: x,
                                    borderColor: O
                                },
                                className: R.swatch,
                                "aria-label": p.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: L
                                },
                                children: (0, r.jsx)(h.default, {
                                    className: R.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: P
                                })
                            }), m]
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
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function c(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(s.Clickable, {
                        ...e,
                        children: (0, r.jsx)(a.default, {
                            className: l(u.nitroWheel, n)
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
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("394846"),
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
                } = e, E = () => (0, r.jsx)(o.default, {
                    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: c.preview,
                    children: d
                });
                return (0, r.jsx)("div", {
                    className: n,
                    children: (0, r.jsxs)(a.FormSection, {
                        className: c.profileCustomizationSection,
                        children: [s.isMobile && E(), (0, r.jsxs)("div", {
                            className: l(c.baseLayout, i),
                            children: [t, !s.isMobile && E()]
                        })]
                    })
                })
            }
        },
        447645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("359223");
            let E = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function h(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: i,
                    sectionTitle: h,
                    changeAvatarButtonText: _,
                    guildId: I,
                    className: p,
                    disabled: R = !1,
                    isTryItOutFlow: C = !1,
                    forcedDivider: S,
                    withHighlight: m = !1
                } = e, v = m ? a.default : s.Button;
                return (0, r.jsx)(u.default, {
                    className: p,
                    title: h,
                    errors: n,
                    disabled: R,
                    forcedDivider: S,
                    children: (0, r.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, r.jsx)(v, {
                            className: l({
                                [f.buttonHighlighted]: m
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, I, C, C ? E : void 0),
                            children: null != _ ? _ : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, r.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => i(null),
                            children: null != I ? d.default.Messages.USER_SETTINGS_RESET_AVATAR : d.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("65597"),
                a = n("77078"),
                o = n("70723"),
                u = n("254490"),
                c = n("891653"),
                d = n("632892"),
                f = n("646718"),
                E = n("326908");

            function h(e) {
                let {
                    errors: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: E.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, u.sizeString)(t)
                        })
                    }, t))
                })
            }

            function _(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: i,
                    description: u,
                    children: _,
                    className: I,
                    errors: p,
                    disabled: R = !1,
                    hideDivider: C = !1,
                    showBorder: S = !1,
                    borderType: m,
                    hasBackground: v = !1,
                    forcedDivider: g = !1,
                    showPremiumIcon: T = !1
                } = e, L = (0, s.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: l(E.customizationSection, I, {
                        [E.disabled]: R,
                        [E.hideDivider]: C,
                        [E.showBorder]: S,
                        [E.withDivider]: g
                    }),
                    children: (0, r.jsxs)(d.default, {
                        className: E.customizationSectionBorder,
                        backgroundClassName: E.customizationSectionBackground,
                        isShown: S && !L,
                        type: m,
                        hasBackground: v,
                        children: [(0, r.jsxs)(a.FormTitle, {
                            className: E.title,
                            id: i,
                            children: [t, T && (0, r.jsx)(c.default, {}), n]
                        }), null != u ? (0, r.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: E.sectionDescription,
                            children: u
                        }) : null, _, null != p && (0, r.jsx)(h, {
                            errors: p
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
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("570697"),
                s = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, r.jsx)(l.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(i.TextInput, {
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
                    return i
                },
                default: function() {
                    return d
                }
            });
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("623682");
            (r = i || (i = {})).PREMIUM = "premium", r.LIMITED = "limited";
            let c = {
                [i.PREMIUM]: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                [i.LIMITED]: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var d = s.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = i.PREMIUM,
                    isShown: s,
                    hasBackground: a = !1,
                    className: d,
                    backgroundClassName: f
                } = e;
                if (!s) return (0, l.jsx)(l.Fragment, {
                    children: n
                });
                let {
                    border: E,
                    background: h
                } = c[r];
                return (0, l.jsx)("div", {
                    ref: t,
                    className: o(E, d),
                    children: (0, l.jsx)("div", {
                        className: o(a ? h : u.background, f),
                        children: n
                    })
                })
            })
        },
        52704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("650130");

            function E(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: i,
                    guildId: E,
                    className: h,
                    disabled: _ = !1,
                    showPremiumIcon: I = !0,
                    isTryItOutFlow: p = !1,
                    forcedDivider: R,
                    withHighlight: C = !1
                } = e, S = C ? a.default : s.Button;
                return (0, r.jsx)(u.default, {
                    className: h,
                    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: I,
                    errors: n,
                    disabled: _,
                    forcedDivider: R,
                    children: (0, r.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, r.jsx)(S, {
                            className: l({
                                [f.buttonHighlighted]: C
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, E, p, void 0),
                            children: d.default.Messages.CHANGE_BANNER
                        }), t && (0, r.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => i(null),
                            children: null != E ? d.default.Messages.USER_SETTINGS_RESET_BANNER : d.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("969176"),
                a = n.n(s),
                o = n("669491"),
                u = n("77078"),
                c = n("462274"),
                d = n("217513"),
                f = n("528438"),
                E = n("719923"),
                h = n("409214"),
                _ = n("570697"),
                I = n("782340"),
                p = n("431416");

            function R(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: i,
                    onThemeColorsChange: s,
                    preventDisabled: R,
                    guildId: C,
                    className: S,
                    showPremiumIcon: m = !0,
                    showResetThemeButton: v = !1,
                    forcedDivider: g
                } = e, T = (0, d.default)(t.id, C), [L, N] = (0, f.default)(t, T, {
                    pendingThemeColors: i,
                    isPreview: !0
                }), A = E.default.canUsePremiumProfileCustomization(t), M = null != n ? n : t.getAvatarURL(C, 80), x = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), O = (0, c.useAvatarColors)(M, x, !1);
                if (null == L || null == N) return null;
                let P = e => {
                    let t = a(e, null == T ? void 0 : T.themeColors);
                    s(t ? void 0 : e)
                };
                return (0, r.jsx)(_.default, {
                    title: I.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !A && !R,
                    className: l(p.profileThemesSection, S),
                    showPremiumIcon: m,
                    forcedDivider: g,
                    children: (0, r.jsxs)("div", {
                        className: p.sectionContainer,
                        children: [(0, r.jsx)("div", {
                            className: p.sparkleContainer,
                            children: (0, r.jsx)(h.default, {
                                onChange: e => P([e, N]),
                                color: L,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, r.jsx)(u.Text, {
                                    className: p.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: p.sparkleContainer,
                            children: (0, r.jsx)(h.default, {
                                onChange: e => P([L, e]),
                                color: N,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, r.jsx)(u.Text, {
                                    className: p.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), v && null != C && (0, r.jsx)(u.Button, {
                            className: p.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => P([null, null]),
                            children: I.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
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
            var r = n("49111");

            function i(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(r.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Endpoints.SOUNDBOARD_SOUND(e))
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
            var r = n("913144"),
                i = n("327037"),
                l = n("697218"),
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
                } = e, E = l.default.getUser(t), h = o !== a.ME ? o : void 0;
                if (null == E) return (0, i.fetchProfile)(t, {
                    friendToken: c,
                    guildId: h
                }).then(() => {
                    r.default.dispatch({
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
                (0, s.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: h
                }), r.default.dispatch({
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
                r.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
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
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), E = (0, a.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: s(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: E
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
                    return I
                },
                default: function() {
                    return R
                }
            });
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (r = i || (i = {})).DEFAULT = "default", r.SMALL = "small";
            let h = {
                    [i.DEFAULT]: E.shineDefault,
                    [i.SMALL]: E.shineSmall
                },
                _ = {
                    [i.DEFAULT]: E.shineInnerDefault,
                    [i.SMALL]: E.shineInnerSmall
                };
            class I extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...r
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...r,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: h[t],
                            children: (0, l.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            I.defaultProps = {
                shineSize: i.DEFAULT
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: r,
                    submitting: a,
                    pauseAnimation: u,
                    shineSize: f = i.DEFAULT,
                    shinePaused: h,
                    buttonShineClassName: _,
                    onlyShineOnHover: p,
                    ...R
                } = e, C = s.createRef(), S = (0, d.default)(C), m = !r && !a && !0 !== u && (!p || S);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: C,
                    ...R,
                    className: o(E.shinyButton, n),
                    disabled: r,
                    submitting: a,
                    children: [t, m ? (0, l.jsx)(I, {
                        shinePaused: h,
                        className: o(E.buttonShine, p ? E.onlyShineOnHover : void 0, _),
                        shineSize: f
                    }) : null]
                })
            };
            p.ShineSizes = i;
            var R = p
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                h = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: h = "currentColor",
                        transition: _ = f.transition,
                        className: I,
                        foreground: p,
                        expanded: R,
                        ...C
                    } = e, {
                        enabled: S
                    } = (0, c.useRedesignIconContext)(), m = t;
                    if (!0 === R ? m = E.DOWN : !1 === R && (m = E.RIGHT), S) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: s.ChevronSmallDownIcon,
                            [E.LEFT]: a.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [m];
                        return (0, r.jsx)(e, {
                            ...C,
                            className: I,
                            width: n,
                            height: i,
                            color: h,
                            colorClass: p
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(I, _, m),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(C),
                        children: (0, r.jsx)("path", {
                            className: p,
                            fill: "none",
                            stroke: h,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            h.Directions = E;
            var _ = h
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("733154"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("505088"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, r.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("504318"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: i = 24,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: i,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, l.PencilIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: l,
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
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("998460"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("876726"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: i
                        })
                    })
                }, l.PlayIcon)
        },
        826432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("49097"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: l,
                        foreground: s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, l.SparklesIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("390300"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("287083"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, l.StageIcon)
        },
        204203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("449826"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            d: "m18.984 2.345-2.473 2.603c2.67 1.564 4.473 4.456 4.473 7.766 0 4.624-3.507 8.441-8 8.941v-2.02c3.387-.488 6-3.4 6-6.92 0-2.745-1.592-5.12-3.898-6.266l-3.102 3.266v-7.37h7ZM6.733 8.085 5.235 6.762a8.976 8.976 0 0 0-2.139 4.583h2.027a7 7 0 0 1 1.61-3.26Zm-3.717 5.26h2a6.938 6.938 0 0 0 1.369 3.553l-1.426 1.427a8.945 8.945 0 0 1-1.943-4.98Zm7.968 8.31a8.918 8.918 0 0 1-4.61-1.916l1.425-1.425a6.964 6.964 0 0 0 3.185 1.321v2.02Z",
                            clipRule: "evenodd"
                        })
                    })
                }, l.UndoIcon)
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = r.useContext(l.default);
                return (0, i.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("817736"),
                i = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
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
                constructor(e = l) {
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
            });
            var r = n("884691"),
                i = n("748820"),
                l = n("157590");
            let s = (0, i.v4)(),
                a = new Map,
                o = new Map;
            class u extends r.Component {
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
                    return r.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: r
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, i.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: r
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: r.createElement("span"),
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
                    return r.default
                },
                VisibilitySensor: function() {
                    return i.default
                }
            }), n("6268");
            var r = n("157590"),
                i = n("235855")
        }
    }
]);