(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66243"], {
        437083: function(e, t, n) {
            var r = n("561449"),
                a = n("877297");
            e.exports = function(e) {
                return a(r(e))
            }
        },
        329252: function(e, t, n) {
            var r = n("877297"),
                a = n("164099");
            e.exports = function(e) {
                return r(a(e))
            }
        },
        957478: function(e, t, n) {
            var r = n("626785");
            e.exports = function(e, t) {
                return r(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        877297: function(e, t, n) {
            var r = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    a = e.length,
                    i = a - 1;
                for (t = void 0 === t ? a : t; ++n < t;) {
                    var u = r(n, i),
                        l = e[u];
                    e[u] = e[n], e[n] = l
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, n) {
            var r = n("437083"),
                a = n("329252"),
                i = n("725502");
            e.exports = function(e) {
                return (i(e) ? r : a)(e)
            }
        },
        164099: function(e, t, n) {
            var r = n("957478"),
                a = n("466731");
            e.exports = function(e) {
                return null == e ? [] : r(e, a(e))
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
                    return r
                },
                rgbaToDataURL: function() {
                    return a
                },
                thumbHashToDataURL: function() {
                    return i
                }
            }), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function a(e, t, n) {
                let r = 4 * e + 1,
                    a = 6 + t * (5 + r),
                    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, a >>> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 73, 68, 65, 84, 120, 1],
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    l = 1,
                    o = 0;
                for (let e = 0, a = 0, u = r - 1; e < t; e++, u += r - 1)
                    for (i.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + l) % 65521; a < u; a++) {
                        let e = 255 & n[a];
                        i.push(e), o = (o + (l = (l + e) % 65521)) % 65521
                    }
                for (let [e, t] of(i.push(o >> 8, 255 & o, l >> 8, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + a]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= i[r], n = (n = n >>> 4 ^ u[15 & n]) >>> 4 ^ u[15 & n];
                    n = ~n, i[t++] = n >>> 24, i[t++] = n >> 16 & 255, i[t++] = n >> 8 & 255, i[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...i))
            }

            function i(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: a,
                        cos: i,
                        round: u
                    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, s = (63 & l) / 63, c = (l >> 6 & 63) / 31.5 - 1, d = (l >> 12 & 63) / 31.5 - 1, f = l >> 23, E = o >> 15, p = a(3, E ? f ? 5 : 7 : 7 & o), _ = a(3, E ? 7 & o : f ? 5 : 7), T = f ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, h = f ? 6 : 5, I = 0, C = (t, n, r) => {
                        let a = [];
                        for (let i = 0; i < n; i++)
                            for (let u = i ? 0 : 1; u * n < t * (n - i); u++) a.push(((e[h + (I >> 1)] >> ((1 & I++) << 2) & 15) / 7.5 - 1) * r);
                        return a
                    }, A = C(p, _, (l >> 18 & 31) / 31), m = C(3, 3, 1.25 * ((o >> 3 & 63) / 63)), N = C(3, 3, 1.25 * ((o >> 9 & 63) / 63)), y = f && C(5, 5, S), v = r(e), R = u(v > 1 ? 32 : 32 * v), P = u(v > 1 ? 32 / v : 32), g = new Uint8Array(R * P * 4), U = [], O = [];
                    for (let e = 0, r = 0; e < P; e++)
                        for (let u = 0; u < R; u++, r += 4) {
                            let l = s,
                                o = c,
                                E = d,
                                S = T;
                            for (let e = 0, n = a(p, f ? 5 : 3); e < n; e++) U[e] = i(t / R * (u + .5) * e);
                            for (let n = 0, r = a(_, f ? 5 : 3); n < r; n++) O[n] = i(t / P * (e + .5) * n);
                            for (let e = 0, t = 0; e < _; e++)
                                for (let n = e ? 0 : 1, r = 2 * O[e]; n * _ < p * (_ - e); n++, t++) l += A[t] * U[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * O[e]; n < 3 - e; n++, t++) {
                                    let e = U[n] * r;
                                    o += m[t] * e, E += N[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * O[e]; n < 5 - e; n++, t++) S += y[t] * U[n] * r;
                            let h = l - 2 / 3 * o,
                                I = (3 * l - h + E) / 2,
                                C = I - E;
                            g[r] = a(0, 255 * n(1, I)), g[r + 1] = a(0, 255 * n(1, C)), g[r + 2] = a(0, 255 * n(1, h)), g[r + 3] = a(0, 255 * n(1, S))
                        }
                    return {
                        w: R,
                        h: P,
                        rgba: g
                    }
                }(e);
                return a(t.w, t.h, t.rgba)
            }
        },
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
            var r = n("872717"),
                a = n("913144"),
                i = n("271560"),
                u = n("49111");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return a.default.wait(() => {
                    a.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), r.default.get({
                    url: u.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (a.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    a.default.dispatch({
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
                a.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await r.default.get({
                        url: u.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: i
                        }
                    });
                    a.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                a.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: u.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    a.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return a
                },
                updateCardInfo: function() {
                    return i
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return o
                }
            });
            var r = n("913144");

            function a(e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
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
                    return a
                }
            });
            var r = n("913144");

            function a() {
                r.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return _
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return S
                },
                saveAccountRequest: function() {
                    return h
                },
                saveAccountChanges: function() {
                    return I
                },
                getHarvestStatus: function() {
                    return C
                },
                requestHarvest: function() {
                    return A
                },
                setPendingAvatar: function() {
                    return m
                },
                setPendingGlobalNameName: function() {
                    return N
                },
                setPendingAvatarDecoration: function() {
                    return y
                },
                setPendingProfileEffectId: function() {
                    return v
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return P
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return U
                },
                setDisableSubmit: function() {
                    return O
                }
            });
            var r = n("872717"),
                a = n("95410"),
                i = n("819855"),
                u = n("913144"),
                l = n("393414"),
                o = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                p = n("782340");

            function _() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(e, t) {
                let n = t ? p.default.Messages.DELETE_ACCOUNT : p.default.Messages.DISABLE_ACCOUNT,
                    a = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => r.default.post({
                    url: a,
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
                    d.default.logoutInternal(), (0, l.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function h(e) {
                let t = await r.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function I(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: r,
                    emailToken: i,
                    password: l,
                    avatar: d,
                    avatarDecoration: _,
                    newPassword: T,
                    globalName: S
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let u = {
                        username: t,
                        email: r,
                        email_token: i,
                        password: l,
                        avatar: d,
                        discriminator: n,
                        global_name: S,
                        new_password: T,
                        ...e
                    };
                    null === _ && (u.avatar_decoration_id = null), null != _ && (u.avatar_decoration_id = _.id, u.avatar_decoration_sku_id = _.skuId);
                    let o = a.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != o && (u.push_provider = s, u.push_token = o);
                    let c = a.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), h(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: p.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function C() {
                return r.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A() {
                return r.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function m(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? i.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function N(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function y(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function v(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function R() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function P() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function O(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
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
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: l
                    })]
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: l
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: l
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691");

            function a(e) {
                let [t, n] = (0, r.useState)(!1), a = (0, r.useRef)(e.current);
                return (0, r.useEffect)(() => {
                    a.current = e.current
                }, [e]), (0, r.useEffect)(() => {
                    let e = a.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        r = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r)
                    }
                }, [a]), t
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
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("393414");
            n("103603");
            var u = n("573135"),
                l = n("49111");

            function o(e) {
                return "number" != typeof e ? (0, a.getAvatarSize)(e) * u.DECORATION_TO_AVATAR_RATIO : e * u.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: u,
                    isTryItOutFlow: o
                } = e;
                (0, a.openModalLazy)(async () => {
                    (0, i.getHistory)().location.pathname === l.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, i.transitionTo)(l.Routes.APP);
                    let {
                        default: e
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        analyticsLocations: t,
                        initialSelectedDecoration: u,
                        isTryItOutFlow: o
                    })
                }, {})
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
            var r = n("862205"),
                a = n("15733");
            let i = (0, r.createExperiment)({
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
                u = (0, r.createExperiment)({
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
                } = u.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, a.default)();
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
            var r = n("446674"),
                a = n("605250"),
                i = n("357957"),
                u = n("10514"),
                l = n("521012"),
                o = n("646718");
            new a.default("useSubscriptionPlansLoaded");
            let s = e => {};

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, r.useStateFromStores)([i.default, u.default, l.default], () => d(e, [i.default, u.default, l.default]), [e])
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, r, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, u.default, l.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    f = r.isLoadedForSKUs(t),
                    E = null === (e = a.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
                if (null != E && !r.hasPaymentSourceForSKUIds(E, t)) return s("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
                if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return s("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
                for (let e of c)
                    if (!r.hasPaymentSourceForSKUIds(e, t)) return s("payment source ".concat(e, " not loaded for ").concat(t)), !1;
                return s("isLoadedForSKUs ".concat(f)), f
            }
        },
        634544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                u = n("77078"),
                l = n("118503"),
                o = n("427459"),
                s = n("782340"),
                c = n("884737"),
                d = e => {
                    let t, n, a, {
                            guildFeature: d,
                            guild: f,
                            className: E,
                            hideTooltip: p = !1,
                            tooltipPosition: _ = "left",
                            onClick: T
                        } = e,
                        S = f.hasFeature(d),
                        h = (0, o.minimumRequiredTierForGuildFeature)(d);
                    return (S ? (null != h && (a = s.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.default, {
                            className: c.unlockedIcon
                        }), (0, r.jsx)(u.Heading, {
                            variant: "eyebrow",
                            className: c.description,
                            children: s.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != h && (a = s.default.Messages.CLICK_TO_LEARN_MORE), t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.default, {
                            className: c.icon
                        }), (0, r.jsx)(u.Heading, {
                            variant: "eyebrow",
                            className: c.description,
                            children: null != h && (0, o.getShortenedTierName)(h)
                        })]
                    })), n = p || null == a ? (0, r.jsx)("div", {
                        className: i(c.availabilityIndicator, E),
                        children: t
                    }) : (0, r.jsx)(u.Tooltip, {
                        position: _,
                        text: a,
                        children: e => (0, r.jsx)("div", {
                            ...e,
                            className: i(c.availabilityIndicator, E),
                            children: t
                        })
                    }), null == T || S) ? n : (0, r.jsx)(u.Clickable, {
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
                    return i
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return u
                }
            });
            var r = n("49111"),
                a = n("75015");

            function i(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === a.UploadTypes.GUILD_BANNER) return n ? r.GuildFeatures.ANIMATED_BANNER : r.GuildFeatures.BANNER
            }

            function u(e) {
                return e === a.UploadTypes.AVATAR || e === a.UploadTypes.BANNER
            }
        },
        420333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                i = n("446674"),
                u = n("77078"),
                l = n("812204"),
                o = n("685665"),
                s = n("473591"),
                c = n("634544"),
                d = n("694187"),
                f = n("305961"),
                E = n("162771"),
                p = n("697218"),
                _ = n("471671"),
                T = n("887718"),
                S = n("818643"),
                h = n("216422"),
                I = n("599110"),
                C = n("719923"),
                A = n("354460"),
                m = n("424960"),
                N = n("49111"),
                y = n("75015"),
                v = n("991207"),
                R = n("782340"),
                P = n("461300");
            let g = [{
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

            function U(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, i] = a.useState(!1);
                return (0, r.jsx)("div", {
                    className: P.gifGrid,
                    onMouseMove: () => i(!0),
                    onMouseLeave: () => i(!1),
                    children: g.map(e => (0, r.jsx)("div", {
                        className: P.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function O(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, r.jsx)("div", {
                    className: P.pillWrapper,
                    children: (0, r.jsx)(c.default, {
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
                    showNitroWheel: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: P.optionBoxText,
                    children: [(0, r.jsx)(O, {
                        guild: n,
                        guildFeature: (0, A.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, r.jsxs)("div", {
                        className: P.optionBoxDescription,
                        children: [(0, A.shouldShowPremiumIconForGIFPickerOption)(t) && (0, r.jsx)(u.TooltipContainer, {
                            className: P.nitroWheelFlairContainer,
                            text: R.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: a && (0, r.jsx)(h.default, {
                                className: P.nitroWheelFlair
                            })
                        }), R.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function x(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: P.optionBoxText,
                    children: [(0, r.jsx)(O, {
                        guildFeature: (0, A.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: a
                    }), (0, r.jsx)("div", {
                        className: P.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    onClose: c,
                    onComplete: h,
                    uploadType: A,
                    maxFileSizeBytes: g,
                    showUpsellHeader: O,
                    filters: M,
                    analyticsLocation: F,
                    analyticsLocations: b = [],
                    modalSubTitle: D,
                    imageSpecifications: G,
                    modalTitle: w = R.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: H = R.default.Messages.UPLOAD_IMAGE
                } = e, j = (0, i.useStateFromStores)([_.default], () => _.default.isFocused()), V = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser()), B = (0, i.useStateFromStores)([E.default], () => E.default.getGuildId()), k = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(B)), Z = (0, i.useStateFromStores)([s.default], () => s.default.isEditingClydeProfile()), {
                    reducedMotion: W
                } = a.useContext(u.AccessibilityPreferencesContext), K = (0, u.useModalContext)(), z = !C.default.canUseAnimatedAvatar(V) && A === y.UploadTypes.AVATAR && !Z, {
                    analyticsLocations: Y
                } = (0, o.default)(b, l.default.SELECT_IMAGE_MODAL);

                function q(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    c(), h(e, t, n)
                }
                return a.useEffect(() => {
                    z && I.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Y
                    }), I.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: F
                    })
                }, [z, F, Y]), (0, r.jsxs)(u.ModalRoot, {
                    transitionState: t,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: P.modalHeader,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H1,
                                className: P.modalTitle,
                                children: w
                            }), null != D ? (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: D
                            }) : null]
                        }), (0, r.jsx)(u.ModalCloseButton, {
                            onClick: c,
                            className: P.modalCloseButton
                        })]
                    }), (0, r.jsxs)(u.ModalContent, {
                        className: P.modalContent,
                        children: [(0, r.jsxs)("div", {
                            className: P.imagePickerContainer,
                            children: [(0, r.jsxs)(u.Clickable, {
                                className: P.optionBox,
                                children: [(0, r.jsx)("div", {
                                    className: P.contentCircle,
                                    children: (0, r.jsx)(S.default, {
                                        className: P.uploadIcon
                                    })
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(x, {
                                        title: H,
                                        uploadType: A,
                                        guild: k
                                    })
                                }), (0, r.jsx)(d.default, {
                                    onChange: function(e, t) {
                                        if (t.type === v.FileTypes.MP4) return q(e, t);
                                        (0, u.openModalLazy)(async () => {
                                            let {
                                                default: a
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, r.jsx)(a, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: q,
                                                uploadType: A,
                                                showUpsellHeader: O,
                                                allowSkip: !0,
                                                analyticsPage: null == F ? void 0 : F.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: K
                                        })
                                    },
                                    maxFileSizeBytes: g,
                                    onFileSizeError: function() {
                                        c(), (0, m.default)(g)
                                    },
                                    filters: M
                                })]
                            }), (0, r.jsxs)(u.Clickable, {
                                className: P.optionBox,
                                onClick: function() {
                                    (0, u.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, r.jsx)(e, {
                                            uploadType: A,
                                            onComplete: (e, t) => q(e, t, !0),
                                            showUpsellHeader: O,
                                            analyticsPage: null == F ? void 0 : F.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: K
                                    })
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: P.contentCircle,
                                    children: [(0, r.jsx)(U, {
                                        shouldAnimate: j && !W.enabled
                                    }), (0, r.jsx)("div", {
                                        className: P.gifIconContainer,
                                        children: (0, r.jsx)(T.default, {
                                            className: P.gifIcon
                                        })
                                    })]
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(L, {
                                        uploadType: A,
                                        guild: k,
                                        showNitroWheel: !Z
                                    })
                                })]
                            })]
                        }), null != G ? (0, r.jsx)(u.Text, {
                            className: P.imageSpecifications,
                            variant: "text-sm/normal",
                            children: G
                        }) : null]
                    })]
                })
            }
        },
        424960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("336522"),
                a = n("254490"),
                i = n("782340");

            function u(e) {
                (0, r.openUploadError)({
                    title: i.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: i.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, a.sizeString)(e)
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
            var r = n("446674"),
                a = n("10514"),
                i = n("713518"),
                u = n("646718"),
                l = n("843455");

            function o(e) {
                var t, n;
                let {
                    activeSubscription: o,
                    skuIDs: s,
                    paymentSourceId: c,
                    isGift: d
                } = e;
                s = s.filter(e => e !== u.PremiumSubscriptionSKUs.NONE);
                let f = (0, r.useStateFromStores)([a.default], () => {
                        let e = a.default.getPlanIdsForSkus(s).filter(e => !d || u.PREMIUM_PLANS.has(e));
                        return e.length > 0 ? a.default.get(e[0]) : null
                    }),
                    E = null == f ? [] : (0, i.getCurrencies)(f.id, c, d),
                    p = null !== (n = null !== (t = E.find(e => e === (null == o ? void 0 : o.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : l.CurrencyCodes.USD;
                return {
                    ...(0, i.useCurrencyWithPaymentSourceChange)(p, null == f ? void 0 : f.id, c, d, s),
                    currencies: E
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
            var r = n("884691"),
                a = n("446674"),
                i = n("850068"),
                u = n("357957");

            function l(e) {
                let {
                    isGift: t,
                    activeSubscription: n
                } = e, {
                    defaultPaymentSourceId: l,
                    paymentSources: o,
                    hasFetchedPaymentSources: s
                } = (0, a.useStateFromStoresObject)([u.default], () => ({
                    defaultPaymentSourceId: u.default.defaultPaymentSourceId,
                    paymentSources: u.default.paymentSources,
                    hasFetchedPaymentSources: u.default.hasFetchedPaymentSources
                })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = r.useState(() => c(t, n, l));
                return r.useEffect(() => {
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
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("748820"),
                i = n("77078"),
                u = n("112679"),
                l = n("55689"),
                o = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                p = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: T,
                    onComplete: S,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: I,
                    analyticsObject: C,
                    analyticsLocation: A,
                    analyticsSourceLocation: m,
                    isGift: N = !1,
                    giftMessage: y,
                    subscriptionTier: v,
                    trialId: R,
                    postSuccessGuild: P,
                    openInvoiceId: g,
                    applicationId: U,
                    referralTrialOfferId: O,
                    giftRecipient: L,
                    returnRef: x,
                    subscription: M
                } = null != e ? e : {}, F = !1, b = (0, a.v4)(), D = s.default.getCurrentUser(), G = (0, f.isPremiumExactly)(D, p.PremiumTypes.TIER_2);
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: a,
                            ...i
                        } = n;
                        return (0, r.jsx)(e, {
                            ...i,
                            loadId: b,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: N,
                            giftMessage: y,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: (e, t) => {
                                a(), null == T || T(e), e && (null == h || h(), !N && null != t && t === p.PremiumSubscriptionSKUs.TIER_2 && !G && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                F = !0, null == S || S(), !N && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: I,
                            analyticsObject: C,
                            analyticsLocation: A,
                            analyticsSourceLocation: m,
                            trialId: R,
                            postSuccessGuild: P,
                            planGroup: p.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: g,
                            applicationId: U,
                            referralTrialOfferId: O,
                            returnRef: x,
                            subscription: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !F && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : C,
                            source: m,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != R,
                            application_id: U,
                            location_stack: I
                        }), (0, u.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == T || T(F), F && (null == h || h())
                    }
                })
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return _
                },
                useGetSubscriptionInvoice: function() {
                    return T
                },
                getItemUnitPriceWithDiscount: function() {
                    return S
                }
            }), n("222007");
            var r = n("884691"),
                a = n("446674"),
                i = n("872717"),
                u = n("448993"),
                l = n("195358"),
                o = n("521012"),
                s = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: a,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: f,
                    metadata: E
                } = e;
                t = (0, s.coerceExistingItemsToNewItemInterval)(t);
                let p = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: a,
                    apply_entitlements: o,
                    currency: d,
                    renewal: f,
                    metadata: E
                };
                try {
                    let e = await i.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: p,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: a,
                    currency: o,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: E
                } = e;
                null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
                let p = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: a,
                    apply_entitlements: d,
                    currency: o
                };
                try {
                    let e = await i.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: E,
                            location_stack: f
                        },
                        body: p,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await i.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return l.default.createInvoiceFromServer(r.body)
            }

            function p(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [i, u] = (0, r.useState)(null), [l, s] = (0, r.useState)(null), c = (0, a.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            s(null), u(null);
                            let n = await t();
                            !e && u(n)
                        } catch (t) {
                            !e && s(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [i, l]
            }

            function _(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return p(e, t)
            }

            function T(e) {
                let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function S(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return a
                }
            });
            var r = n("913144");
            let a = e => {
                r.default.dispatch({
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
            var r = n("884691"),
                a = n("446674"),
                i = n("913144"),
                u = n("850068"),
                l = n("271938"),
                o = n("160299"),
                s = n("357957");

            function c() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    t = (0, a.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.isAuthenticated());
                return r.useEffect(() => {
                    i.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && u.fetchPaymentSources()
                    })
                }, [n]), r.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && u.fetchIpCountryCode()
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
                    return p
                },
                showRemoveBanner: function() {
                    return _
                }
            }), n("424973");
            var r = n("884691"),
                a = n("152584"),
                i = n("234251"),
                u = n("783142"),
                l = n("26989");

            function o(e) {
                return r.useMemo(() => {
                    let t = l.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let a in t) {
                        var r;
                        let i = t[a],
                            u = null === (r = i[e]) || void 0 === r ? void 0 : r.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(a))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, u.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, a.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, i.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, a.setPendingAvatarDecoration)(void 0);
                    return
                }(0, a.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, a.setPendingProfileEffectId)(void 0);
                    return
                }(0, a.setPendingProfileEffectId)(e)
            }

            function E(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: r ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: r
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function p(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function _(e, t) {
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
                    return p
                },
                resetPendingProfileChanges: function() {
                    return _
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return h
                },
                setPendingAccentColor: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return C
                },
                setTryItOutAvatar: function() {
                    return A
                },
                setTryItOutAvatarDecoration: function() {
                    return m
                },
                setTryItOutBanner: function() {
                    return N
                },
                setTryItOutThemeColors: function() {
                    return y
                }
            });
            var r = n("872717"),
                a = n("913144"),
                i = n("448993"),
                u = n("884351"),
                l = n("845579"),
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
                let f = l.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = u.default.parse(void 0, e.bio).content);
                try {
                    a.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await r.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        a.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new i.APIError(n);
                        a.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new i.APIError(t);
                    a.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function p() {
                a.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function _() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function h(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function I(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function C(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function N(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function y(e) {
                a.default.dispatch({
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
                    return h
                }
            });
            var r, a, i = n("37983"),
                u = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (r = a || (a = {})).DEFAULT = "default", r.SMALL = "small";
            let p = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                _ = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class T extends u.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...r
                    } = this.props;
                    return (0, i.jsx)(s.default.div, {
                        ...r,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, i.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: p[t],
                            children: (0, i.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            T.defaultProps = {
                shineSize: "default"
            };
            let S = e => {
                let {
                    children: t,
                    className: n,
                    disabled: r,
                    submitting: a,
                    pauseAnimation: l,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: p,
                    onlyShineOnHover: _,
                    ...S
                } = e, h = u.createRef(), I = (0, d.default)(h), C = !r && !a && !0 !== l && (!_ || I);
                return (0, i.jsxs)(c.Button, {
                    buttonRef: h,
                    ...S,
                    className: o(E.shinyButton, n),
                    disabled: r,
                    submitting: a,
                    children: [t, C ? (0, i.jsx)(T, {
                        shinePaused: f,
                        className: o(E.buttonShine, _ ? E.onlyShineOnHover : void 0, p),
                        shineSize: s
                    }) : null]
                })
            };
            S.ShineSizes = a;
            var h = S
        },
        887718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("666031"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: n = 22,
                        color: a = "currentColor",
                        backgroundColor: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 29 22",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("rect", {
                                width: t,
                                height: n,
                                fill: i,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, r.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: a
                            }), (0, r.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: a
                            }), (0, r.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: a
                            })]
                        })
                    })
                }, i.GifIcon, void 0, {
                    size: 29
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("998460"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, u.default)(l),
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
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
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("851298"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: a
                        }), (0, r.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: a
                        })]
                    })
                }, i.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        713518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return E
                },
                getCurrencies: function() {
                    return p
                },
                planHasCurrency: function() {
                    return _
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return T
                }
            }), n("222007");
            var r = n("884691"),
                a = n("627445"),
                i = n.n(a),
                u = n("913144"),
                l = n("775433"),
                o = n("308592"),
                s = n("10514"),
                c = n("719923"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
                return null == e || s.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
                    u.default.wait(async () => {
                        await (0, l.fetchSubscriptionPlansBySKUs)(t), e()
                    })
                })
            }

            function p(e, t, n) {
                let r, a = [],
                    u = [],
                    l = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return i(r = "string" == typeof e ? s.default.get(e) : e, "subscription plan not loaded"), null != t && s.default.hasPaymentSourceForSKUId(t, r.skuId) && (l.paymentSourceId = t), (a = (u = (0, c.experimentalGetPrices)(r.id, l)).map(e => e.currency)).length < 1 && (a = [d.CurrencyCodes.USD]), a
            }

            function _(e, t, n) {
                let r = s.default.get(e);
                i(null != r, "plan is undefined");
                let a = p(r, n, !1);
                return a.includes(t)
            }

            function T(e, t, n, a, i) {
                let [u, l] = r.useReducer((e, t) => ({
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
                r.useEffect(() => {
                    let e = async () => {
                        await E(n, i);
                        let e = [];
                        null != t && null != s.default.get(t) && (e = p(t, n, a)), e.length > 0 ? l({
                            paymentSourceId: n,
                            currency: e[0],
                            loaded: !0
                        }) : l({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    e()
                }, [n, JSON.stringify(i), t, a, c]);
                let d = u.paymentSourceId !== n || null == t || !c || !0 !== u.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: u,
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