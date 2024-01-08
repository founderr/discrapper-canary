(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39223"], {
        437083: function(e, t, n) {
            var a = n("561449"),
                i = n("877297");
            e.exports = function(e) {
                return i(a(e))
            }
        },
        329252: function(e, t, n) {
            var a = n("877297"),
                i = n("164099");
            e.exports = function(e) {
                return a(i(e))
            }
        },
        957478: function(e, t, n) {
            var a = n("626785");
            e.exports = function(e, t) {
                return a(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    a = e.length;
                for (t || (t = Array(a)); ++n < a;) t[n] = e[n];
                return t
            }
        },
        877297: function(e, t, n) {
            var a = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length,
                    r = i - 1;
                for (t = void 0 === t ? i : t; ++n < t;) {
                    var l = a(n, r),
                        u = e[l];
                    e[l] = e[n], e[n] = u
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, n) {
            var a = n("437083"),
                i = n("329252"),
                r = n("725502");
            e.exports = function(e) {
                return (r(e) ? a : i)(e)
            }
        },
        164099: function(e, t, n) {
            var a = n("957478"),
                i = n("466731");
            e.exports = function(e) {
                return null == e ? [] : a(e, i(e))
            }
        },
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        6916: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a13348dd889e2a36b788.gif"
        },
        12412: function(e, t, n) {
            "use strict";
            e.exports = n.p + "91d3c1acae2f11c57634.png"
        },
        54400: function(e, t, n) {
            "use strict";
            e.exports = n.p + "04c2807fcf052140a12f.gif"
        },
        122574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7548ee8ba4e2f2600b69.png"
        },
        463095: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f597cc1d129f34c8f135.gif"
        },
        733105: function(e, t, n) {
            "use strict";
            e.exports = n.p + "35d07cb23db04126d51b.png"
        },
        749003: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dbfa9f354f49f4a6a61e.gif"
        },
        918927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9b5c79ffc65b32de7d01.png"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return a
                },
                rgbaToDataURL: function() {
                    return i
                },
                thumbHashToDataURL: function() {
                    return r
                }
            }), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

            function a(e) {
                let t = e[3],
                    n = 128 & e[2],
                    a = 128 & e[4];
                return (a ? n ? 5 : 7 : 7 & t) / (a ? 7 & t : n ? 5 : 7)
            }

            function i(e, t, n) {
                let a = 4 * e + 1,
                    i = 6 + t * (5 + a),
                    r = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    l = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    o = 0;
                for (let e = 0, i = 0, l = a - 1; e < t; e++, l += a - 1)
                    for (r.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), o = (o + u) % 65521; i < l; i++) {
                        let e = 255 & n[i];
                        r.push(e), o = (o + (u = (u + e) % 65521)) % 65521
                    }
                for (let [e, t] of(r.push(o >> 8, 255 & o, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let n = -1;
                    for (let a = e; a < t; a++) n ^= r[a], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
                    n = ~n, r[t++] = n >>> 24, r[t++] = n >> 16 & 255, r[t++] = n >> 8 & 255, r[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...r))
            }

            function r(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: i,
                        cos: r,
                        round: l
                    } = Math, u = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, s = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, f = u >> 23, E = o >> 15, _ = i(3, E ? f ? 5 : 7 : 7 & o), p = i(3, E ? 7 & o : f ? 5 : 7), T = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, C = f ? 6 : 5, A = 0, S = (t, n, a) => {
                        let i = [];
                        for (let r = 0; r < n; r++)
                            for (let l = r ? 0 : 1; l * n < t * (n - r); l++) i.push(((e[C + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * a);
                        return i
                    }, N = S(_, p, (u >> 18 & 31) / 31), I = S(3, 3, 1.25 * ((o >> 3 & 63) / 63)), v = S(3, 3, 1.25 * ((o >> 9 & 63) / 63)), R = f && S(5, 5, h), m = a(e), y = l(m > 1 ? 32 : 32 * m), g = l(m > 1 ? 32 / m : 32), U = new Uint8Array(y * g * 4), O = [], P = [];
                    for (let e = 0, a = 0; e < g; e++)
                        for (let l = 0; l < y; l++, a += 4) {
                            let u = s,
                                o = c,
                                E = d,
                                h = T;
                            for (let e = 0, n = i(_, f ? 5 : 3); e < n; e++) O[e] = r(t / y * (l + .5) * e);
                            for (let n = 0, a = i(p, f ? 5 : 3); n < a; n++) P[n] = r(t / g * (e + .5) * n);
                            for (let e = 0, t = 0; e < p; e++)
                                for (let n = e ? 0 : 1, a = 2 * P[e]; n * p < _ * (p - e); n++, t++) u += N[t] * O[n] * a;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, a = 2 * P[e]; n < 3 - e; n++, t++) {
                                    let e = O[n] * a;
                                    o += I[t] * e, E += v[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, a = 2 * P[e]; n < 5 - e; n++, t++) h += R[t] * O[n] * a;
                            let C = u - 2 / 3 * o,
                                A = (3 * u - C + E) / 2,
                                S = A - E;
                            U[a] = i(0, 255 * n(1, A)), U[a + 1] = i(0, 255 * n(1, S)), U[a + 2] = i(0, 255 * n(1, C)), U[a + 3] = i(0, 255 * n(1, h))
                        }
                    return {
                        w: y,
                        h: g,
                        rgba: U
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
        316718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return u
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return s
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("271560"),
                l = n("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), a.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                    entitlementType: r
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await a.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: r
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
            async function s() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return r
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return o
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                a.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                a.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                a.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                a.default.wait(() => a.default.dispatch({
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
            var a = n("913144");

            function i() {
                a.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return p
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return h
                },
                saveAccountRequest: function() {
                    return C
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return S
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return I
                },
                setPendingGlobalNameName: function() {
                    return v
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectId: function() {
                    return m
                },
                clearErrors: function() {
                    return y
                },
                resetPendingAccountChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return U
                },
                resetAndCloseUserProfileForm: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var a = n("872717"),
                i = n("95410"),
                r = n("819855"),
                l = n("913144"),
                u = n("393414"),
                o = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function p() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function h(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => a.default.post({
                    url: i,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, u.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function C(e) {
                let t = await a.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: a,
                    emailToken: r,
                    password: u,
                    avatar: d,
                    avatarDecoration: p,
                    newPassword: T,
                    globalName: h
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let l = {
                        username: t,
                        email: a,
                        email_token: r,
                        password: u,
                        avatar: d,
                        discriminator: n,
                        global_name: h,
                        new_password: T,
                        ...e
                    };
                    null === p && (l.avatar_decoration_id = null), null != p && (l.avatar_decoration_id = p.id, l.avatar_decoration_sku_id = p.skuId);
                    let o = i.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != o && (l.push_provider = s, l.push_token = o);
                    let c = i.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (l.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = c), C(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function S() {
                return a.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return a.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function y() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function U() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: u
                    })]
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: u
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: u
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var a = n("884691");

            function i(e) {
                let [t, n] = (0, a.useState)(!1), i = (0, a.useRef)(e.current);
                return (0, a.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, a.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        a = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", a), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", a)
                    }
                }, [i]), t
            }
        },
        606292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return o
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("393414");
            n("103603");
            var l = n("573135"),
                u = n("49111");

            function o(e) {
                return "number" != typeof e ? (0, i.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    isTryItOutFlow: o
                } = e;
                (0, i.openModalLazy)(async () => {
                    (0, r.getHistory)().location.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, r.transitionTo)(u.Routes.APP);
                    let {
                        default: e
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        analyticsLocations: t,
                        initialSelectedDecoration: l,
                        isTryItOutFlow: o
                    })
                }, {})
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var a = n("862205"),
                i = n("15733");
            let r = (0, a.createExperiment)({
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
                l = (0, a.createExperiment)({
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
                } = r.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = l.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, i.default)();
                return e || t && "RU" === n
            }
            var o = r
        },
        634544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                l = n("77078"),
                u = n("118503"),
                o = n("427459"),
                s = n("782340"),
                c = n("884737"),
                d = e => {
                    let t, n, i, {
                            guildFeature: d,
                            guild: f,
                            className: E,
                            hideTooltip: _ = !1,
                            tooltipPosition: p = "left",
                            onClick: T
                        } = e,
                        h = f.hasFeature(d),
                        C = (0, o.minimumRequiredTierForGuildFeature)(d);
                    return (h ? (null != C && (i = s.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.default, {
                            className: c.unlockedIcon
                        }), (0, a.jsx)(l.Heading, {
                            variant: "eyebrow",
                            className: c.description,
                            children: s.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != C && (i = s.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.default, {
                            className: c.icon
                        }), (0, a.jsx)(l.Heading, {
                            variant: "eyebrow",
                            className: c.description,
                            children: null != C && (0, o.getShortenedTierName)(C)
                        })]
                    })), n = _ || null == i ? (0, a.jsx)("div", {
                        className: r(c.availabilityIndicator, E),
                        children: t
                    }) : (0, a.jsx)(l.Tooltip, {
                        position: p,
                        text: i,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            className: r(c.availabilityIndicator, E),
                            children: t
                        })
                    }), null == T || h) ? n : (0, a.jsx)(l.Clickable, {
                        onClick: T,
                        className: c.clickable,
                        children: n
                    })
                }
        },
        354460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGuildFeatureFromUploadType: function() {
                    return r
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return l
                }
            });
            var a = n("49111"),
                i = n("75015");

            function r(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === i.UploadTypes.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
            }

            function l(e) {
                return e === i.UploadTypes.AVATAR || e === i.UploadTypes.BANNER
            }
        },
        420333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983"),
                i = n("884691"),
                r = n("446674"),
                l = n("77078"),
                u = n("812204"),
                o = n("685665"),
                s = n("473591"),
                c = n("634544"),
                d = n("694187"),
                f = n("305961"),
                E = n("162771"),
                _ = n("697218"),
                p = n("471671"),
                T = n("887718"),
                h = n("818643"),
                C = n("216422"),
                A = n("599110"),
                S = n("719923"),
                N = n("354460"),
                I = n("424960"),
                v = n("49111"),
                R = n("75015"),
                m = n("991207"),
                y = n("782340"),
                g = n("461300");
            let U = [{
                gif: n("6916"),
                png: n("12412")
            }, {
                gif: n("463095"),
                png: n("733105")
            }, {
                gif: n("749003"),
                png: n("918927")
            }, {
                gif: n("54400"),
                png: n("122574")
            }];

            function O(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, r] = i.useState(!1);
                return (0, a.jsx)("div", {
                    className: g.gifGrid,
                    onMouseMove: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: U.map(e => (0, a.jsx)("div", {
                        className: g.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function P(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, a.jsx)("div", {
                    className: g.pillWrapper,
                    children: (0, a.jsx)(c.default, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function L(e) {
                let {
                    uploadType: t,
                    guild: n,
                    showNitroWheel: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: g.optionBoxText,
                    children: [(0, a.jsx)(P, {
                        guild: n,
                        guildFeature: (0, N.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, a.jsxs)("div", {
                        className: g.optionBoxDescription,
                        children: [(0, N.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(l.TooltipContainer, {
                            className: g.nitroWheelFlairContainer,
                            text: y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: i && (0, a.jsx)(C.default, {
                                className: g.nitroWheelFlair
                            })
                        }), y.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function x(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: g.optionBoxText,
                    children: [(0, a.jsx)(P, {
                        guildFeature: (0, N.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: i
                    }), (0, a.jsx)("div", {
                        className: g.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    onClose: c,
                    onComplete: C,
                    uploadType: N,
                    maxFileSizeBytes: U,
                    showUpsellHeader: P,
                    filters: M,
                    analyticsLocation: F,
                    analyticsLocations: D = [],
                    modalSubTitle: G,
                    imageSpecifications: b,
                    modalTitle: H = y.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: j = y.default.Messages.UPLOAD_IMAGE
                } = e, w = (0, r.useStateFromStores)([p.default], () => p.default.isFocused()), V = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), k = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId()), B = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(k)), Z = (0, r.useStateFromStores)([s.default], () => s.default.isEditingClydeProfile()), {
                    reducedMotion: W
                } = i.useContext(l.AccessibilityPreferencesContext), z = (0, l.useModalContext)(), Y = !S.default.canUseAnimatedAvatar(V) && N === R.UploadTypes.AVATAR && !Z, {
                    analyticsLocations: K
                } = (0, o.default)(D, u.default.SELECT_IMAGE_MODAL);

                function q(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    c(), C(e, t, n)
                }
                return i.useEffect(() => {
                    Y && A.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: v.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: K
                    }), A.default.track(v.AnalyticEvents.OPEN_MODAL, {
                        type: v.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: F
                    })
                }, [Y, F, K]), (0, a.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.SMALL,
                    children: [(0, a.jsxs)(l.ModalHeader, {
                        className: g.modalHeader,
                        separator: !1,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H1,
                                className: g.modalTitle,
                                children: H
                            }), null != G ? (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: G
                            }) : null]
                        }), (0, a.jsx)(l.ModalCloseButton, {
                            onClick: c,
                            className: g.modalCloseButton
                        })]
                    }), (0, a.jsxs)(l.ModalContent, {
                        className: g.modalContent,
                        children: [(0, a.jsxs)("div", {
                            className: g.imagePickerContainer,
                            children: [(0, a.jsxs)(l.Clickable, {
                                className: g.optionBox,
                                children: [(0, a.jsx)("div", {
                                    className: g.contentCircle,
                                    children: (0, a.jsx)(h.default, {
                                        className: g.uploadIcon
                                    })
                                }), (0, a.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, a.jsx)(x, {
                                        title: j,
                                        uploadType: N,
                                        guild: B
                                    })
                                }), (0, a.jsx)(d.default, {
                                    onChange: function(e, t) {
                                        if (t.type === m.FileTypes.MP4) return q(e, t);
                                        (0, l.openModalLazy)(async () => {
                                            let {
                                                default: i
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, a.jsx)(i, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: q,
                                                uploadType: N,
                                                showUpsellHeader: P,
                                                allowSkip: !0,
                                                analyticsPage: null == F ? void 0 : F.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: z
                                        })
                                    },
                                    maxFileSizeBytes: U,
                                    onFileSizeError: function() {
                                        c(), (0, I.default)(U)
                                    },
                                    filters: M
                                })]
                            }), (0, a.jsxs)(l.Clickable, {
                                className: g.optionBox,
                                onClick: function() {
                                    (0, l.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, a.jsx)(e, {
                                            uploadType: N,
                                            onComplete: (e, t) => q(e, t, !0),
                                            showUpsellHeader: P,
                                            analyticsPage: null == F ? void 0 : F.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: z
                                    })
                                },
                                children: [(0, a.jsxs)("div", {
                                    className: g.contentCircle,
                                    children: [(0, a.jsx)(O, {
                                        shouldAnimate: w && !W.enabled
                                    }), (0, a.jsx)("div", {
                                        className: g.gifIconContainer,
                                        children: (0, a.jsx)(T.default, {
                                            className: g.gifIcon
                                        })
                                    })]
                                }), (0, a.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, a.jsx)(L, {
                                        uploadType: N,
                                        guild: B,
                                        showNitroWheel: !Z
                                    })
                                })]
                            })]
                        }), null != b ? (0, a.jsx)(l.Text, {
                            className: g.imageSpecifications,
                            variant: "text-sm/normal",
                            children: b
                        }) : null]
                    })]
                })
            }
        },
        424960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("336522"),
                i = n("254490"),
                r = n("782340");

            function l(e) {
                (0, a.openUploadError)({
                    title: r.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, i.sizeString)(e)
                    })
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("748820"),
                r = n("77078"),
                l = n("112679"),
                u = n("55689"),
                o = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                _ = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: T,
                    onComplete: h,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: A,
                    analyticsObject: S,
                    analyticsLocation: N,
                    analyticsSourceLocation: I,
                    isGift: v = !1,
                    giftMessage: R,
                    subscriptionTier: m,
                    trialId: y,
                    postSuccessGuild: g,
                    openInvoiceId: U,
                    applicationId: O,
                    referralTrialOfferId: P,
                    giftRecipient: L,
                    returnRef: x,
                    subscription: M
                } = null != e ? e : {}, F = !1, D = (0, i.v4)(), G = s.default.getCurrentUser(), b = (0, f.isPremiumExactly)(G, _.PremiumTypes.TIER_2);
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...r
                        } = n;
                        return (0, a.jsx)(e, {
                            ...r,
                            loadId: D,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: v,
                            giftMessage: R,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                i(), null == T || T(e), e && (null == C || C(), !v && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !b && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                F = !0, null == h || h(), !v && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: A,
                            analyticsObject: S,
                            analyticsLocation: N,
                            analyticsSourceLocation: I,
                            trialId: y,
                            postSuccessGuild: g,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: U,
                            applicationId: O,
                            referralTrialOfferId: P,
                            returnRef: x,
                            subscription: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !F && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : S,
                            source: I,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: v,
                            eligible_for_trial: null != y,
                            application_id: O,
                            location_stack: A
                        }), (0, l.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == T || T(F), F && (null == C || C())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return i
                }
            });
            var a = n("913144");
            let i = e => {
                a.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                i = n("446674"),
                r = n("913144"),
                l = n("850068"),
                u = n("271938"),
                o = n("160299"),
                s = n("357957");

            function c() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    t = (0, i.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return a.useEffect(() => {
                    r.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && l.fetchPaymentSources()
                    })
                }, [n]), a.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && l.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
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
                    return p
                }
            }), n("424973");
            var a = n("884691"),
                i = n("152584"),
                r = n("234251"),
                l = n("783142"),
                u = n("26989");

            function o(e) {
                return a.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in t) {
                        var a;
                        let r = t[i],
                            l = null === (a = r[e]) || void 0 === a ? void 0 : a.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(i))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, i.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, i.setPendingProfileEffectId)(void 0);
                    return
                }(0, i.setPendingProfileEffectId)(e)
            }

            function E(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: a ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: a
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function _(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function p(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return h
                },
                setPendingPronouns: function() {
                    return C
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return S
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return I
                },
                setTryItOutBanner: function() {
                    return v
                },
                setTryItOutThemeColors: function() {
                    return R
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("448993"),
                l = n("884351"),
                u = n("845579"),
                o = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function f(e) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, s;
                let d = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let f = u.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await a.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new r.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new r.APIError(t);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function _() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function p() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function h(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function C(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function I(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function v(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function R(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return T
                },
                default: function() {
                    return C
                }
            });
            var a, i, r = n("37983"),
                l = n("884691"),
                u = n("414456"),
                o = n.n(u),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (a = i || (i = {})).DEFAULT = "default", a.SMALL = "small";
            let _ = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                p = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class T extends l.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...a
                    } = this.props;
                    return (0, r.jsx)(s.default.div, {
                        ...a,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, r.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            T.defaultProps = {
                shineSize: "default"
            };
            let h = e => {
                let {
                    children: t,
                    className: n,
                    disabled: a,
                    submitting: i,
                    pauseAnimation: u,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: p,
                    ...h
                } = e, C = l.createRef(), A = (0, d.default)(C), S = !a && !i && !0 !== u && (!p || A);
                return (0, r.jsxs)(c.Button, {
                    buttonRef: C,
                    ...h,
                    className: o(E.shinyButton, n),
                    disabled: a,
                    submitting: i,
                    children: [t, S ? (0, r.jsx)(T, {
                        shinePaused: f,
                        className: o(E.buttonShine, p ? E.onlyShineOnHover : void 0, _),
                        shineSize: s
                    }) : null]
                })
            };
            h.ShineSizes = i;
            var C = h
        },
        887718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("666031"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: n = 22,
                        color: i = "currentColor",
                        backgroundColor: r,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 29 22",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("rect", {
                                width: t,
                                height: n,
                                fill: r,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: i
                            }), (0, a.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: i
                            }), (0, a.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: i
                            })]
                        })
                    })
                }, r.GifIcon, void 0, {
                    size: 29
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("998460"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, l.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("851298"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: i
                        }), (0, a.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: i
                        })]
                    })
                }, r.ImagePlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);