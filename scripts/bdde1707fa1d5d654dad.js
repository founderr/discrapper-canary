(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5422"], {
        437083: function(t, e, n) {
            var r = n("561449"),
                u = n("877297");
            t.exports = function(t) {
                return u(r(t))
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                u = n("164099");
            t.exports = function(t) {
                return r(u(t))
            }
        },
        957478: function(t, e, n) {
            var r = n("626785");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        561449: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    u = t.length,
                    a = u - 1;
                for (e = void 0 === e ? u : e; ++n < e;) {
                    var i = r(n, a),
                        o = t[i];
                    t[i] = t[n], t[n] = o
                }
                return t.length = e, t
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                u = n("329252"),
                a = n("725502");
            t.exports = function(t) {
                return (a(t) ? r : u)(t)
            }
        },
        164099: function(t, e, n) {
            var r = n("957478"),
                u = n("466731");
            t.exports = function(t) {
                return null == t ? [] : r(t, u(t))
            }
        },
        53708: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        431036: function(t, e, n) {
            "use strict";
            t.exports = n.p + "d8d77824c450981d7ec3.svg"
        },
        723251: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                thumbHashToApproximateAspectRatio: function() {
                    return r
                },
                rgbaToDataURL: function() {
                    return u
                },
                thumbHashToDataURL: function() {
                    return a
                }
            }), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

            function r(t) {
                let e = t[3],
                    n = 128 & t[2],
                    r = 128 & t[4];
                return (r ? n ? 5 : 7 : 7 & e) / (r ? 7 & e : n ? 5 : 7)
            }

            function u(t, e, n) {
                let r = 4 * t + 1,
                    u = 6 + e * (5 + r),
                    a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, 255 & t, 0, 0, e >> 8, 255 & e, 8, 6, 0, 0, 0, 0, 0, 0, 0, u >>> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, 73, 68, 65, 84, 120, 1],
                    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    o = 1,
                    l = 0;
                for (let t = 0, u = 0, i = r - 1; t < e; t++, i += r - 1)
                    for (a.push(t + 1 < e ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), l = (l + o) % 65521; u < i; u++) {
                        let t = 255 & n[u];
                        a.push(t), l = (l + (o = (o + t) % 65521)) % 65521
                    }
                for (let [t, e] of(a.push(l >> 8, 255 & l, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + u]
                    ])) {
                    let n = -1;
                    for (let r = t; r < e; r++) n ^= a[r], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
                    n = ~n, a[e++] = n >>> 24, a[e++] = n >> 16 & 255, a[e++] = n >> 8 & 255, a[e++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...a))
            }

            function a(t) {
                let e = function(t) {
                    let {
                        PI: e,
                        min: n,
                        max: u,
                        cos: a,
                        round: i
                    } = Math, o = t[0] | t[1] << 8 | t[2] << 16, l = t[3] | t[4] << 8, s = (63 & o) / 63, c = (o >> 6 & 63) / 31.5 - 1, d = (o >> 12 & 63) / 31.5 - 1, f = o >> 23, E = l >> 15, _ = u(3, E ? f ? 5 : 7 : 7 & l), S = u(3, E ? 7 & l : f ? 5 : 7), T = f ? (15 & t[5]) / 15 : 1, p = (t[5] >> 4) / 15, I = f ? 6 : 5, A = 0, C = (e, n, r) => {
                        let u = [];
                        for (let a = 0; a < n; a++)
                            for (let i = a ? 0 : 1; i * n < e * (n - a); i++) u.push(((t[I + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * r);
                        return u
                    }, h = C(_, S, (o >> 18 & 31) / 31), y = C(3, 3, 1.25 * ((l >> 3 & 63) / 63)), N = C(3, 3, 1.25 * ((l >> 9 & 63) / 63)), P = f && C(5, 5, p), m = r(t), R = i(m > 1 ? 32 : 32 * m), U = i(m > 1 ? 32 / m : 32), v = new Uint8Array(R * U * 4), O = [], g = [];
                    for (let t = 0, r = 0; t < U; t++)
                        for (let i = 0; i < R; i++, r += 4) {
                            let o = s,
                                l = c,
                                E = d,
                                p = T;
                            for (let t = 0, n = u(_, f ? 5 : 3); t < n; t++) O[t] = a(e / R * (i + .5) * t);
                            for (let n = 0, r = u(S, f ? 5 : 3); n < r; n++) g[n] = a(e / U * (t + .5) * n);
                            for (let t = 0, e = 0; t < S; t++)
                                for (let n = t ? 0 : 1, r = 2 * g[t]; n * S < _ * (S - t); n++, e++) o += h[e] * O[n] * r;
                            for (let t = 0, e = 0; t < 3; t++)
                                for (let n = t ? 0 : 1, r = 2 * g[t]; n < 3 - t; n++, e++) {
                                    let t = O[n] * r;
                                    l += y[e] * t, E += N[e] * t
                                }
                            if (f)
                                for (let t = 0, e = 0; t < 5; t++)
                                    for (let n = t ? 0 : 1, r = 2 * g[t]; n < 5 - t; n++, e++) p += P[e] * O[n] * r;
                            let I = o - 2 / 3 * l,
                                A = (3 * o - I + E) / 2,
                                C = A - E;
                            v[r] = u(0, 255 * n(1, A)), v[r + 1] = u(0, 255 * n(1, C)), v[r + 2] = u(0, 255 * n(1, I)), v[r + 3] = u(0, 255 * n(1, p))
                        }
                    return {
                        w: R,
                        h: U,
                        rgba: v
                    }
                }(t);
                return u(e.w, e.h, e.rgba)
            }
        },
        316718: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchUserEntitlementsForApplication: function() {
                    return o
                },
                fetchUserEntitlements: function() {
                    return l
                },
                fetchGiftableEntitlements: function() {
                    return s
                }
            });
            var r = n("872717"),
                u = n("913144"),
                a = n("271560"),
                i = n("49111");

            function o(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return u.default.wait(() => {
                    u.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: t
                    })
                }), r.default.get({
                    url: i.Endpoints.ENTITLEMENTS_FOR_APPLICATION(t),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: e
                    }
                }).then(e => (u.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: t,
                    entitlements: e.body
                }), e.body)).catch(() => {
                    u.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: t
                    })
                })
            }
            async function l(t) {
                let {
                    withSku: e = !1,
                    withApplication: n = !1,
                    entitlementType: a
                } = t;
                u.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let t = await r.default.get({
                        url: i.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: e,
                            with_application: n,
                            entitlement_type: a
                        }
                    });
                    u.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                u.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let t = await (0, a.httpGetWithCountryCodeQuery)({
                        url: i.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    u.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateStripePaymentRequest: function() {
                    return u
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return i
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return l
                }
            });
            var r = n("913144");

            function u(t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: t
                })
            }

            function a(t, e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function i() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(t, e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function l() {
                r.default.wait(() => r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearPurchaseTokenAuthState: function() {
                    return u
                }
            });
            var r = n("913144");

            function u() {
                r.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return S
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return I
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return C
                },
                requestHarvest: function() {
                    return h
                },
                setPendingAvatar: function() {
                    return y
                },
                setPendingGlobalNameName: function() {
                    return N
                },
                setPendingAvatarDecoration: function() {
                    return P
                },
                setPendingProfileEffectId: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return v
                },
                resetAndCloseUserProfileForm: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var r = n("872717"),
                u = n("95410"),
                a = n("819855"),
                i = n("913144"),
                o = n("393414"),
                l = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function S() {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(t, e) {
                let n = e ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    u = e ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(e => r.default.post({
                    url: u,
                    body: {
                        password: t,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function I(t) {
                let e = await r.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, i.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && i.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return i.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function A(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: r,
                    emailToken: a,
                    password: o,
                    avatar: d,
                    avatarDecoration: S,
                    newPassword: T,
                    globalName: p
                } = t;
                return i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(t => {
                    let i = {
                        username: e,
                        email: r,
                        email_token: a,
                        password: o,
                        avatar: d,
                        discriminator: n,
                        global_name: p,
                        new_password: T,
                        ...t
                    };
                    null === S && (i.avatar_decoration_id = null), null != S && (i.avatar_decoration_id = S.id, i.avatar_decoration_sku_id = S.skuId);
                    let l = u.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != l && (i.push_provider = s, i.push_token = l);
                    let c = u.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (i.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = c), I(i)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => i.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return l.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(e.avatar)
                    }), i.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function C() {
                return r.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h() {
                return r.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function y(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function N(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function P(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function m(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function R() {
                i.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function v() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function g(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        998460: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GiftIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: o
                    })]
                })
            }
        },
        125094: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ScreenArrowIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: o
                    })]
                })
            }
        },
        252744: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("222007");
            var r = n("884691");

            function u(t) {
                let [e, n] = (0, r.useState)(!1), u = (0, r.useRef)(t.current);
                return (0, r.useEffect)(() => {
                    u.current = t.current
                }, [t]), (0, r.useEffect)(() => {
                    let t = u.current;
                    if (null == t) return;
                    let e = () => n(!0),
                        r = () => n(!1);
                    return t.addEventListener("mouseenter", e), t.addEventListener("mouseleave", r), () => {
                        t.removeEventListener("mouseenter", e), t.removeEventListener("mouseleave", r)
                    }
                }, [u]), e
            }
        },
        606292: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getDecorationSizeForAvatarSize: function() {
                    return l
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("393414");
            n("103603");
            var i = n("573135"),
                o = n("49111");

            function l(t) {
                return "number" != typeof t ? (0, u.getAvatarSize)(t) * i.DECORATION_TO_AVATAR_RATIO : t * i.DECORATION_TO_AVATAR_RATIO
            }
            let s = t => {
                let {
                    analyticsLocations: e,
                    initialSelectedDecoration: i,
                    isTryItOutFlow: l
                } = t;
                (0, u.openModalLazy)(async () => {
                    (0, a.getHistory)().location.pathname === o.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.transitionTo)(o.Routes.APP);
                    let {
                        default: t
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, r.jsx)(t, {
                        ...n,
                        analyticsLocations: e,
                        initialSelectedDecoration: i,
                        isTryItOutFlow: l
                    })
                }, {})
            }
        },
        619935: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useBlockedPaymentsConfig: function() {
                    return o
                },
                default: function() {
                    return l
                }
            });
            var r = n("862205"),
                u = n("15733");
            let a = (0, r.createExperiment)({
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
                i = (0, r.createExperiment)({
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

            function o() {
                let {
                    paymentsBlocked: t
                } = a.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: e
                } = i.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, u.default)();
                return t || e && "RU" === n
            }
            var l = a
        },
        308592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscriptionPlansLoaded: function() {
                    return c
                },
                getSubscriptionPlansLoaded: function() {
                    return d
                }
            }), n("222007");
            var r = n("446674"),
                u = n("605250"),
                a = n("357957"),
                i = n("10514"),
                o = n("521012"),
                l = n("646718");
            new u.default("useSubscriptionPlansLoaded");
            let s = t => {};

            function c() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS];
                return (0, r.useStateFromStores)([a.default, i.default, o.default], () => d(t, [a.default, i.default, o.default]), [t])
            }

            function d() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS],
                    [n, r, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, i.default, o.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    f = r.isLoadedForSKUs(e),
                    E = null === (t = u.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
                if (null != E && !r.hasPaymentSourceForSKUIds(E, e)) return s("subscription payment source ".concat(E, " not loaded for ").concat(e)), !1;
                if (null != d && !r.hasPaymentSourceForSKUIds(d, e)) return s("default payment source ".concat(d, " not loaded for ").concat(e)), !1;
                for (let t of c)
                    if (!r.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
                return s("isLoadedForSKUs ".concat(f)), f
            }
        },
        854381: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("446674"),
                u = n("10514"),
                a = n("713518"),
                i = n("646718"),
                o = n("843455");

            function l(t) {
                var e, n;
                let {
                    activeSubscription: l,
                    skuIDs: s,
                    paymentSourceId: c,
                    isGift: d
                } = t;
                s = s.filter(t => t !== i.PremiumSubscriptionSKUs.NONE);
                let f = (0, r.useStateFromStores)([u.default], () => {
                        let t = u.default.getPlanIdsForSkus(s).filter(t => !d || i.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? u.default.get(t[0]) : null
                    }),
                    E = null == f ? [] : (0, a.getCurrencies)(f.id, c, d),
                    _ = null !== (n = null !== (e = E.find(t => t === (null == l ? void 0 : l.currency))) && void 0 !== e ? e : E[0]) && void 0 !== n ? n : o.CurrencyCodes.USD;
                return {
                    ...(0, a.useCurrencyWithPaymentSourceChange)(_, null == f ? void 0 : f.id, c, d, s),
                    currencies: E
                }
            }
        },
        986681: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            }), n("222007");
            var r = n("884691"),
                u = n("446674"),
                a = n("850068"),
                i = n("357957");

            function o(t) {
                let {
                    isGift: e,
                    activeSubscription: n
                } = t, {
                    defaultPaymentSourceId: o,
                    paymentSources: l,
                    hasFetchedPaymentSources: s
                } = (0, u.useStateFromStoresObject)([i.default], () => ({
                    defaultPaymentSourceId: i.default.defaultPaymentSourceId,
                    paymentSources: i.default.paymentSources,
                    hasFetchedPaymentSources: i.default.hasFetchedPaymentSources
                })), c = (t, e, n) => t || (null == e ? void 0 : e.paymentSourceId) == null ? n : e.paymentSourceId, [d, f] = r.useState(() => c(e, n, o));
                return r.useEffect(() => {
                    s ? f(c(e, n, o)) : (0, a.fetchPaymentSources)()
                }, [s, e, n, o]), {
                    paymentSources: l,
                    hasPaymentSources: Object.keys(l).length > 0,
                    paymentSourceId: d,
                    setPaymentSourceId: f,
                    hasFetchedPaymentSources: s
                }
            }
        },
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("748820"),
                a = n("77078"),
                i = n("112679"),
                o = n("55689"),
                l = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                _ = n("646718");

            function S(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: S,
                    onClose: T,
                    onComplete: p,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: A,
                    analyticsObject: C,
                    analyticsLocation: h,
                    analyticsSourceLocation: y,
                    isGift: N = !1,
                    giftMessage: P,
                    subscriptionTier: m,
                    trialId: R,
                    postSuccessGuild: U,
                    openInvoiceId: v,
                    applicationId: O,
                    referralTrialOfferId: g,
                    giftRecipient: L,
                    returnRef: D,
                    subscription: b
                } = null != t ? t : {}, M = !1, F = (0, u.v4)(), G = s.default.getCurrentUser(), w = (0, f.isPremiumExactly)(G, _.PremiumTypes.TIER_2);
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: u,
                            ...a
                        } = n;
                        return (0, r.jsx)(t, {
                            ...a,
                            loadId: F,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: N,
                            giftMessage: P,
                            giftRecipient: L,
                            initialPlanId: e,
                            followupSKUInfo: S,
                            onClose: (t, e) => {
                                u(), null == T || T(t), t && (null == I || I(), !N && null != e && e === _.PremiumSubscriptionSKUs.TIER_2 && !w && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                M = !0, null == p || p(), !N && (0, l.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: A,
                            analyticsObject: C,
                            analyticsLocation: h,
                            analyticsSourceLocation: y,
                            trialId: R,
                            postSuccessGuild: U,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: v,
                            applicationId: O,
                            referralTrialOfferId: g,
                            returnRef: D,
                            subscription: b
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !M && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: F,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : C,
                            source: y,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != R,
                            application_id: O,
                            location_stack: A
                        }), (0, i.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == T || T(M), M && (null == I || I())
                    }
                })
            }
        },
        809071: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return S
                },
                useGetSubscriptionInvoice: function() {
                    return T
                },
                getItemUnitPriceWithDiscount: function() {
                    return p
                }
            }), n("222007");
            var r = n("884691"),
                u = n("446674"),
                a = n("872717"),
                i = n("448993"),
                o = n("195358"),
                l = n("521012"),
                s = n("719923"),
                c = n("49111");
            async function d(t) {
                let {
                    items: e,
                    paymentSourceId: n,
                    trialId: r,
                    code: u,
                    applyEntitlements: l = !1,
                    currency: d,
                    renewal: f,
                    metadata: E
                } = t;
                e = (0, s.coerceExistingItemsToNewItemInterval)(e);
                let _ = {
                    items: e.map(t => {
                        let {
                            planId: e,
                            ...n
                        } = t;
                        return {
                            ...n,
                            plan_id: e
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: u,
                    apply_entitlements: l,
                    currency: d,
                    renewal: f,
                    metadata: E
                };
                try {
                    let t = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return o.default.createInvoiceFromServer(t.body)
                } catch (t) {
                    throw new i.BillingError(t)
                }
            }
            async function f(t) {
                let {
                    subscriptionId: e,
                    items: n,
                    paymentSourceId: r,
                    renewal: u,
                    currency: l,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: E
                } = t;
                null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
                    items: null == n ? void 0 : n.map(t => {
                        let {
                            planId: e,
                            ...n
                        } = t;
                        return {
                            ...n,
                            plan_id: e
                        }
                    }),
                    payment_source_id: r,
                    renewal: u,
                    apply_entitlements: d,
                    currency: l
                };
                try {
                    let t = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(e),
                        query: {
                            location: E,
                            location_stack: f
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return o.default.createInvoiceFromServer(t.body)
                } catch (t) {
                    throw new i.BillingError(t)
                }
            }
            async function E(t) {
                let {
                    subscriptionId: e,
                    preventFetch: n
                } = t;
                if (n) return null;
                let r = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(e),
                    oldFormErrors: !0
                });
                return o.default.createInvoiceFromServer(r.body)
            }

            function _(t, e) {
                let {
                    preventFetch: n = !1
                } = t, [a, i] = (0, r.useState)(null), [o, s] = (0, r.useState)(null), c = (0, u.useStateFromStores)([l.default], () => l.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let t = !1;
                    async function r() {
                        try {
                            s(null), i(null);
                            let n = await e();
                            !t && i(n)
                        } catch (e) {
                            !t && s(e)
                        }
                    }
                    return !n && r(), () => {
                        t = !0
                    }
                }, [n, e, c]), [a, o]
            }

            function S(t) {
                if ("subscriptionId" in t && null == t.subscriptionId) {
                    let {
                        subscriptionId: e,
                        ...n
                    } = t;
                    t = n
                }
                let e = (0, r.useCallback)(() => "subscriptionId" in t ? f(t) : "items" in t ? d(t) : null, [JSON.stringify(t)]);
                return _(t, e)
            }

            function T(t) {
                let e = (0, r.useCallback)(() => E(t), [JSON.stringify(t)]);
                return _(t, e)
            }

            function p(t) {
                let e = t.subscriptionPlanPrice;
                return t.discounts.forEach(n => {
                    let r = n.amount / t.quantity;
                    e -= r
                }), e
            }
        },
        676379: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                setCanPlayWowMoment: function() {
                    return u
                }
            });
            var r = n("913144");
            let u = t => {
                r.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: t
                })
            }
        },
        15733: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("884691"),
                u = n("446674"),
                a = n("913144"),
                i = n("850068"),
                o = n("271938"),
                l = n("160299"),
                s = n("357957");

            function c() {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    e = (0, u.useStateFromStores)([l.default], () => l.default.ipCountryCode),
                    n = (0, u.useStateFromStores)([o.default], () => o.default.isAuthenticated());
                return r.useEffect(() => {
                    a.default.wait(() => {
                        n && !l.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && i.fetchPaymentSources()
                    })
                }, [n]), r.useEffect(() => {
                    n && !l.default.ipCountryCodeLoaded && i.fetchIpCountryCode()
                }, [e, n]), {
                    defaultBillingCountryCode: t,
                    ipCountryCode: e
                }
            }
        },
        497296: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("626301"),
                a = n("552917"),
                i = n("843647"),
                o = n("789946"),
                l = n("646718"),
                s = n("49111"),
                c = n("782340"),
                d = n("718116"),
                f = n("431036");

            function E(t) {
                let {
                    onClose: e,
                    analyticsSource: n,
                    onLearnMore: E,
                    ..._
                } = t;

                function S() {
                    null == E || E(), e(), (0, u.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: T,
                    suggestedPremiumType: p
                } = (0, i.default)({
                    autoTrackExposure: !0,
                    experiment: a.default,
                    location: "video_backgrounds_upsell"
                }), I = p === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, A = I === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: S
                }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: S
                });
                return (0, r.jsx)(o.default, {
                    artURL: f,
                    artContainerClassName: d.videoBackgroundArt,
                    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: A,
                    glowUp: A,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: s.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: e,
                    subscriptionTier: I,
                    isLoading: T,
                    ..._
                })
            }
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return l
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectId: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return S
                }
            }), n("424973");
            var r = n("884691"),
                u = n("152584"),
                a = n("234251"),
                i = n("783142"),
                o = n("26989");

            function l(t) {
                return r.useMemo(() => {
                    let e = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let u in e) {
                        var r;
                        let a = e[u],
                            i = null === (r = a[t]) || void 0 === r ? void 0 : r.avatar;
                        null != i && (null == n[i] && (n[i] = []), n[i].push(u))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function s(t, e) {
                (0, i.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, u.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, a.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, u.setPendingAvatarDecoration)(void 0);
                    return
                }(0, u.setPendingAvatarDecoration)(t)
            }

            function f(t, e) {
                if (t === e) {
                    (0, u.setPendingProfileEffectId)(void 0);
                    return
                }(0, u.setPendingProfileEffectId)(t)
            }

            function E(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: r ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: r
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function _(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function S(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        783142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return C
                },
                setTryItOutAvatar: function() {
                    return h
                },
                setTryItOutAvatarDecoration: function() {
                    return y
                },
                setTryItOutBanner: function() {
                    return N
                },
                setTryItOutThemeColors: function() {
                    return P
                }
            });
            var r = n("872717"),
                u = n("913144"),
                a = n("448993"),
                i = n("884351"),
                o = n("845579"),
                l = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function f(t) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(t, e) {
                var n, s;
                let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != t.bio && f && (t.bio = i.default.parse(void 0, t.bio).content);
                try {
                    u.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await r.default.patch({
                        url: null != e ? c.Endpoints.GUILD_PROFILE(e, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        u.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: t,
                            ...n.body
                        })
                    } else {
                        let t = new a.APIError(n);
                        u.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new a.APIError(e);
                    u.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function _() {
                u.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function S() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function p(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function I(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function A(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function C(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function h(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function y(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function N(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function P(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        181114: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Shine: function() {
                    return T
                },
                default: function() {
                    return I
                }
            });
            var r, u, a = n("37983"),
                i = n("884691"),
                o = n("414456"),
                l = n.n(o),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (r = u || (u = {})).DEFAULT = "default", r.SMALL = "small";
            let _ = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                S = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class T extends i.PureComponent {
                render() {
                    let {
                        className: t,
                        shineSize: e,
                        shinePaused: n,
                        ...r
                    } = this.props;
                    return (0, a.jsx)(s.default.div, {
                        ...r,
                        className: l(E.shineContainer, t, {
                            [E.shinePaused]: n
                        }),
                        children: (0, a.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[e],
                            children: (0, a.jsx)("div", {
                                className: S[e]
                            })
                        })
                    })
                }
            }
            T.defaultProps = {
                shineSize: "default"
            };
            let p = t => {
                let {
                    children: e,
                    className: n,
                    disabled: r,
                    submitting: u,
                    pauseAnimation: o,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: S,
                    ...p
                } = t, I = i.createRef(), A = (0, d.default)(I), C = !r && !u && !0 !== o && (!S || A);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: I,
                    ...p,
                    className: l(E.shinyButton, n),
                    disabled: r,
                    submitting: u,
                    children: [e, C ? (0, a.jsx)(T, {
                        shinePaused: f,
                        className: l(E.buttonShine, S ? E.onlyShineOnHover : void 0, _),
                        shineSize: s
                    }) : null]
                })
            };
            p.ShineSizes = u;
            var I = p
        },
        978679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("998460"),
                i = n("75196"),
                o = (0, u.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        width: e,
                        height: n,
                        ...(0, i.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: u,
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
        713518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return E
                },
                getCurrencies: function() {
                    return _
                },
                planHasCurrency: function() {
                    return S
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return T
                }
            }), n("222007");
            var r = n("884691"),
                u = n("627445"),
                a = n.n(u),
                i = n("913144"),
                o = n("775433"),
                l = n("308592"),
                s = n("10514"),
                c = n("719923"),
                d = n("49111"),
                f = n("646718");

            function E(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
                return null == t || s.default.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise(t => {
                    i.default.wait(async () => {
                        await (0, o.fetchSubscriptionPlansBySKUs)(e), t()
                    })
                })
            }

            function _(t, e, n) {
                let r, u = [],
                    i = [],
                    o = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return a(r = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, r.skuId) && (o.paymentSourceId = e), (u = (i = (0, c.experimentalGetPrices)(r.id, o)).map(t => t.currency)).length < 1 && (u = [d.CurrencyCodes.USD]), u
            }

            function S(t, e, n) {
                let r = s.default.get(t);
                a(null != r, "plan is undefined");
                let u = _(r, n, !1);
                return u.includes(e)
            }

            function T(t, e, n, u, a) {
                let [i, o] = r.useReducer((t, e) => ({
                    ...t,
                    ...e
                }), null != n ? {
                    paymentSourceId: n,
                    currency: t,
                    loaded: !1
                } : {
                    currency: t,
                    loaded: !1
                }), c = (0, l.useSubscriptionPlansLoaded)(a);
                r.useEffect(() => {
                    let t = async () => {
                        await E(n, a);
                        let t = [];
                        null != e && null != s.default.get(e) && (t = _(e, n, u)), t.length > 0 ? o({
                            paymentSourceId: n,
                            currency: t[0],
                            loaded: !0
                        }) : o({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    t()
                }, [n, JSON.stringify(a), e, u, c]);
                let d = i.paymentSourceId !== n || null == e || !c || !0 !== i.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: i,
                    setCurrency: t => {
                        o({
                            currency: t
                        })
                    },
                    currencyLoading: d
                }
            }
        }
    }
]);