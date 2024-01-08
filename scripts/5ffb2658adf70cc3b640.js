(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1223"], {
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
                    } = Math, o = t[0] | t[1] << 8 | t[2] << 16, l = t[3] | t[4] << 8, s = (63 & o) / 63, c = (o >> 6 & 63) / 31.5 - 1, d = (o >> 12 & 63) / 31.5 - 1, f = o >> 23, E = l >> 15, _ = u(3, E ? f ? 5 : 7 : 7 & l), T = u(3, E ? 7 & l : f ? 5 : 7), p = f ? (15 & t[5]) / 15 : 1, S = (t[5] >> 4) / 15, A = f ? 6 : 5, C = 0, N = (e, n, r) => {
                        let u = [];
                        for (let a = 0; a < n; a++)
                            for (let i = a ? 0 : 1; i * n < e * (n - a); i++) u.push(((t[A + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * r);
                        return u
                    }, I = N(_, T, (o >> 18 & 31) / 31), R = N(3, 3, 1.25 * ((l >> 3 & 63) / 63)), h = N(3, 3, 1.25 * ((l >> 9 & 63) / 63)), U = f && N(5, 5, S), P = r(t), y = i(P > 1 ? 32 : 32 * P), O = i(P > 1 ? 32 / P : 32), v = new Uint8Array(y * O * 4), m = [], g = [];
                    for (let t = 0, r = 0; t < O; t++)
                        for (let i = 0; i < y; i++, r += 4) {
                            let o = s,
                                l = c,
                                E = d,
                                S = p;
                            for (let t = 0, n = u(_, f ? 5 : 3); t < n; t++) m[t] = a(e / y * (i + .5) * t);
                            for (let n = 0, r = u(T, f ? 5 : 3); n < r; n++) g[n] = a(e / O * (t + .5) * n);
                            for (let t = 0, e = 0; t < T; t++)
                                for (let n = t ? 0 : 1, r = 2 * g[t]; n * T < _ * (T - t); n++, e++) o += I[e] * m[n] * r;
                            for (let t = 0, e = 0; t < 3; t++)
                                for (let n = t ? 0 : 1, r = 2 * g[t]; n < 3 - t; n++, e++) {
                                    let t = m[n] * r;
                                    l += R[e] * t, E += h[e] * t
                                }
                            if (f)
                                for (let t = 0, e = 0; t < 5; t++)
                                    for (let n = t ? 0 : 1, r = 2 * g[t]; n < 5 - t; n++, e++) S += U[e] * m[n] * r;
                            let A = o - 2 / 3 * l,
                                C = (3 * o - A + E) / 2,
                                N = C - E;
                            v[r] = u(0, 255 * n(1, C)), v[r + 1] = u(0, 255 * n(1, N)), v[r + 2] = u(0, 255 * n(1, A)), v[r + 3] = u(0, 255 * n(1, S))
                        }
                    return {
                        w: y,
                        h: O,
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
                    return T
                },
                accountDetailsClose: function() {
                    return p
                },
                disableAccount: function() {
                    return S
                },
                saveAccountRequest: function() {
                    return A
                },
                saveAccountChanges: function() {
                    return C
                },
                getHarvestStatus: function() {
                    return N
                },
                requestHarvest: function() {
                    return I
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return h
                },
                setPendingAvatarDecoration: function() {
                    return U
                },
                setPendingProfileEffectId: function() {
                    return P
                },
                clearErrors: function() {
                    return y
                },
                resetPendingAccountChanges: function() {
                    return O
                },
                resetAllPending: function() {
                    return v
                },
                resetAndCloseUserProfileForm: function() {
                    return m
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

            function T() {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function p() {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(t, e) {
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
            async function A(t) {
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

            function C(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: r,
                    emailToken: a,
                    password: o,
                    avatar: d,
                    avatarDecoration: T,
                    newPassword: p,
                    globalName: S
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
                        global_name: S,
                        new_password: p,
                        ...t
                    };
                    null === T && (i.avatar_decoration_id = null), null != T && (i.avatar_decoration_id = T.id, i.avatar_decoration_sku_id = T.skuId);
                    let l = u.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != l && (i.push_provider = s, i.push_token = l);
                    let c = u.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (i.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = c), A(i)
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

            function N() {
                return r.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I() {
                return r.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function h(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function U(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function P(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function y() {
                i.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function v() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
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
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return T
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

            function T(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: T,
                    onClose: p,
                    onComplete: S,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: C,
                    analyticsObject: N,
                    analyticsLocation: I,
                    analyticsSourceLocation: R,
                    isGift: h = !1,
                    giftMessage: U,
                    subscriptionTier: P,
                    trialId: y,
                    postSuccessGuild: O,
                    openInvoiceId: v,
                    applicationId: m,
                    referralTrialOfferId: g,
                    giftRecipient: L,
                    returnRef: D,
                    subscription: M
                } = null != t ? t : {}, b = !1, F = (0, u.v4)(), G = s.default.getCurrentUser(), w = (0, f.isPremiumExactly)(G, _.PremiumTypes.TIER_2);
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
                            subscriptionTier: P,
                            skuId: P,
                            isGift: h,
                            giftMessage: U,
                            giftRecipient: L,
                            initialPlanId: e,
                            followupSKUInfo: T,
                            onClose: (t, e) => {
                                u(), null == p || p(t), t && (null == A || A(), !h && null != e && e === _.PremiumSubscriptionSKUs.TIER_2 && !w && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                b = !0, null == S || S(), !h && (0, l.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: C,
                            analyticsObject: N,
                            analyticsLocation: I,
                            analyticsSourceLocation: R,
                            trialId: y,
                            postSuccessGuild: O,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: v,
                            applicationId: m,
                            referralTrialOfferId: g,
                            returnRef: D,
                            subscription: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: F,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : N,
                            source: R,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: h,
                            eligible_for_trial: null != y,
                            application_id: m,
                            location_stack: C
                        }), (0, i.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == p || p(b), b && (null == A || A())
                    }
                })
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

                function T() {
                    null == E || E(), e(), (0, u.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: p,
                    suggestedPremiumType: S
                } = (0, i.default)({
                    autoTrackExposure: !0,
                    experiment: a.default,
                    location: "video_backgrounds_upsell"
                }), A = S === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, C = A === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: T
                }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: T
                });
                return (0, r.jsx)(o.default, {
                    artURL: f,
                    artContainerClassName: d.videoBackgroundArt,
                    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: C,
                    glowUp: C,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: s.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: e,
                    subscriptionTier: A,
                    isLoading: p,
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
                    return T
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

            function T(t, e) {
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
                    return T
                },
                setPendingBanner: function() {
                    return p
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return C
                },
                setPendingThemeColors: function() {
                    return N
                },
                setTryItOutAvatar: function() {
                    return I
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return h
                },
                setTryItOutThemeColors: function() {
                    return U
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

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function S(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function A(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function C(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function N(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function I(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function h(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function U(t) {
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
                    return p
                },
                default: function() {
                    return A
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
                T = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class p extends i.PureComponent {
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
                                className: T[e]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let S = t => {
                let {
                    children: e,
                    className: n,
                    disabled: r,
                    submitting: u,
                    pauseAnimation: o,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: T,
                    ...S
                } = t, A = i.createRef(), C = (0, d.default)(A), N = !r && !u && !0 !== o && (!T || C);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: A,
                    ...S,
                    className: l(E.shinyButton, n),
                    disabled: r,
                    submitting: u,
                    children: [e, N ? (0, a.jsx)(p, {
                        shinePaused: f,
                        className: l(E.buttonShine, T ? E.onlyShineOnHover : void 0, _),
                        shineSize: s
                    }) : null]
                })
            };
            S.ShineSizes = u;
            var A = S
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
        }
    }
]);