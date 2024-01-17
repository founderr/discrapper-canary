(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70524"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, u = 0; i < r; i++) {
                    for (var l = e.charCodeAt(i); u < n;)
                        if (t.charCodeAt(u++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        437083: function(e, t, n) {
            var r = n("561449"),
                i = n("877297");
            e.exports = function(e) {
                return i(r(e))
            }
        },
        329252: function(e, t, n) {
            var r = n("877297"),
                i = n("164099");
            e.exports = function(e) {
                return r(i(e))
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
                    i = e.length,
                    u = i - 1;
                for (t = void 0 === t ? i : t; ++n < t;) {
                    var l = r(n, u),
                        a = e[l];
                    e[l] = e[n], e[n] = a
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, n) {
            var r = n("437083"),
                i = n("329252"),
                u = n("725502");
            e.exports = function(e) {
                return (u(e) ? r : i)(e)
            }
        },
        164099: function(e, t, n) {
            var r = n("957478"),
                i = n("466731");
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        190389: function(e, t, n) {
            "use strict";
            e.exports = n.p + "10edc9054f6bb1a7de74.svg"
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
                    return u
                }
            }), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function i(e, t, n) {
                let r = 4 * e + 1,
                    i = 6 + t * (5 + r),
                    u = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    l = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    o = 0;
                for (let e = 0, i = 0, l = r - 1; e < t; e++, l += r - 1)
                    for (u.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + a) % 65521; i < l; i++) {
                        let e = 255 & n[i];
                        u.push(e), o = (o + (a = (a + e) % 65521)) % 65521
                    }
                for (let [e, t] of(u.push(o >> 8, 255 & o, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= u[r], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
                    n = ~n, u[t++] = n >>> 24, u[t++] = n >> 16 & 255, u[t++] = n >> 8 & 255, u[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...u))
            }

            function u(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: i,
                        cos: u,
                        round: l
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, s = (63 & a) / 63, c = (a >> 6 & 63) / 31.5 - 1, d = (a >> 12 & 63) / 31.5 - 1, _ = a >> 23, E = o >> 15, f = i(3, E ? _ ? 5 : 7 : 7 & o), T = i(3, E ? 7 & o : _ ? 5 : 7), S = _ ? (15 & e[5]) / 15 : 1, I = (e[5] >> 4) / 15, p = _ ? 6 : 5, A = 0, R = (t, n, r) => {
                        let i = [];
                        for (let u = 0; u < n; u++)
                            for (let l = u ? 0 : 1; l * n < t * (n - u); l++) i.push(((e[p + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, N = R(f, T, (a >> 18 & 31) / 31), C = R(3, 3, 1.25 * ((o >> 3 & 63) / 63)), P = R(3, 3, 1.25 * ((o >> 9 & 63) / 63)), O = _ && R(5, 5, I), U = r(e), m = l(U > 1 ? 32 : 32 * U), h = l(U > 1 ? 32 / U : 32), L = new Uint8Array(m * h * 4), M = [], v = [];
                    for (let e = 0, r = 0; e < h; e++)
                        for (let l = 0; l < m; l++, r += 4) {
                            let a = s,
                                o = c,
                                E = d,
                                I = S;
                            for (let e = 0, n = i(f, _ ? 5 : 3); e < n; e++) M[e] = u(t / m * (l + .5) * e);
                            for (let n = 0, r = i(T, _ ? 5 : 3); n < r; n++) v[n] = u(t / h * (e + .5) * n);
                            for (let e = 0, t = 0; e < T; e++)
                                for (let n = e ? 0 : 1, r = 2 * v[e]; n * T < f * (T - e); n++, t++) a += N[t] * M[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * v[e]; n < 3 - e; n++, t++) {
                                    let e = M[n] * r;
                                    o += C[t] * e, E += P[t] * e
                                }
                            if (_)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * v[e]; n < 5 - e; n++, t++) I += O[t] * M[n] * r;
                            let p = a - 2 / 3 * o,
                                A = (3 * a - p + E) / 2,
                                R = A - E;
                            L[r] = i(0, 255 * n(1, A)), L[r + 1] = i(0, 255 * n(1, R)), L[r + 2] = i(0, 255 * n(1, p)), L[r + 3] = i(0, 255 * n(1, I))
                        }
                    return {
                        w: m,
                        h,
                        rgba: L
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
        583367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return c
                },
                fetchGuildBoostSlots: function() {
                    return d
                },
                applyToGuild: function() {
                    return _
                },
                unapplyFromGuild: function() {
                    return E
                },
                cancelGuildBoostSlot: function() {
                    return f
                },
                uncancelGuildBoostSlot: function() {
                    return T
                }
            });
            var r = n("872717"),
                i = n("913144"),
                u = n("448993"),
                l = n("783111"),
                a = n("522308"),
                o = n("521012"),
                s = n("49111");
            async function c(e) {
                let t = await r.default.get({
                        url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    n = t.body.map(e => l.default.createFromServer(e));
                return i.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: n
                }), n
            }
            async function d() {
                let e = await r.default.get({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => a.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function _(e, t) {
                i.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let n = await r.default.put({
                            url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        u = Array.isArray(n.body) ? n.body.map(l.default.createFromServer) : [l.default.createFromServer(n.body)];
                    return i.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: u
                    }), d(), u
                } catch (t) {
                    let e = new u.AppliedGuildBoostError(t);
                    throw i.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function E(e, t) {
                i.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await r.default.delete({
                        url: s.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), d()
                } catch (t) {
                    let e = new u.AppliedGuildBoostError(t);
                    throw i.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                i.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function f(e) {
                let t = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: n
                }), n
            }
            async function T(e) {
                let t = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: n
                }), n
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return u
                },
                clearCardInfo: function() {
                    return l
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

            function u(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
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
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return I
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return R
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return P
                },
                setPendingAvatarDecoration: function() {
                    return O
                },
                setPendingProfileEffectId: function() {
                    return U
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return h
                },
                resetAllPending: function() {
                    return L
                },
                resetAndCloseUserProfileForm: function() {
                    return M
                },
                setDisableSubmit: function() {
                    return v
                }
            });
            var r = n("872717"),
                i = n("95410"),
                u = n("819855"),
                l = n("913144"),
                a = n("393414"),
                o = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                _ = n("49111"),
                E = n("191349"),
                f = n("782340");

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function I(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    i = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => r.default.post({
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
                    d.default.logoutInternal(), (0, a.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(e) {
                let t = await r.default.patch({
                        url: _.Endpoints.ME,
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
                    email: r,
                    emailToken: u,
                    password: a,
                    avatar: d,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: I
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let l = {
                        username: t,
                        email: r,
                        email_token: u,
                        password: a,
                        avatar: d,
                        discriminator: n,
                        global_name: I,
                        new_password: S,
                        ...e
                    };
                    null === T && (l.avatar_decoration_id = null), null != T && (l.avatar_decoration_id = T.id, l.avatar_decoration_sku_id = T.skuId);
                    let o = i.default.get(_.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != o && (l.push_provider = s, l.push_token = o);
                    let c = i.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (l.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = c), p(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function R() {
                return r.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return r.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? u.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function P(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function m() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function M() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, i, u, l, a = n("37983"),
                o = n("884691"),
                s = n("414456"),
                c = n.n(s),
                d = n("145131"),
                _ = n("298754");
            (r = u || (u = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = l || (l = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
            let E = {
                    primary: _.colorPrimary,
                    secondary: _.colorSecondary,
                    warning: _.colorWarning,
                    error: _.colorError
                },
                f = {
                    small: _.small,
                    large: _.large,
                    none: null
                };
            class T extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: i,
                        iconClassName: u
                    } = this.props;
                    return (0, a.jsxs)(d.default, {
                        className: c(_.note, E[t], i),
                        align: d.default.Align.CENTER,
                        children: [(0, a.jsx)(e, {
                            className: c(_.icon, f[r], u)
                        }), (0, a.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            T.Colors = u, T.Sizes = l;
            var S = T
        },
        470131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier2SimpleIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                        className: a
                    })
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        65969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: a
                    })]
                })
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
            var i = n("77078"),
                u = n("393414");
            n("103603");
            var l = n("573135"),
                a = n("49111");

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
                    (0, u.getHistory)().location.pathname === a.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, u.transitionTo)(a.Routes.APP);
                    let {
                        default: e
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        analyticsLocations: t,
                        initialSelectedDecoration: l,
                        isTryItOutFlow: o
                    })
                }, {})
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return u
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return S
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return p
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return A
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return P
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return O
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return U
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return m
                },
                MessageTypes: function() {
                    return l
                }
            });
            var r, i, u, l, a = n("917219");
            (r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let o = 568,
                s = 2400,
                c = 848,
                d = 2400,
                _ = 1350,
                E = 2400,
                f = 960,
                T = 2400,
                S = 600,
                I = 17 / 6,
                p = 16 / 9,
                A = 2.5,
                R = 4,
                N = o / I,
                C = o / p,
                P = o / A,
                O = o / R,
                U = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                m = o / U;
            (i = l || (l = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        153727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("881410");
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("454589"),
                a = n("642906"),
                o = n("85336"),
                s = n("109872");

            function c(e) {
                let {
                    className: t,
                    isEligibleForTrial: n = !1
                } = e, {
                    step: i,
                    breadcrumbs: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, a.usePaymentContext)();
                if (null == c || 0 === c.length) return null;
                let _ = c.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === _.length ? null : (_ = _.filter(e => {
                    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
                        r = e.id === o.Step.ADD_PAYMENT_STEPS && !d.current;
                    return !n || n && (t || r)
                }), (0, r.jsx)("div", {
                    className: u("breadcrumb", s.wrapper, t),
                    children: (0, r.jsx)(l.default, {
                        activeId: i,
                        breadcrumbs: _
                    })
                }))
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                u = n("77078"),
                l = n("112679"),
                a = n("55689"),
                o = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                _ = n("719923"),
                E = n("49111"),
                f = n("646718");

            function T(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: T,
                    onClose: S,
                    onComplete: I,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: A,
                    analyticsObject: R,
                    analyticsLocation: N,
                    analyticsSourceLocation: C,
                    isGift: P = !1,
                    giftMessage: O,
                    subscriptionTier: U,
                    trialId: m,
                    postSuccessGuild: h,
                    openInvoiceId: L,
                    applicationId: M,
                    referralTrialOfferId: v,
                    giftRecipient: y,
                    returnRef: D,
                    subscription: g
                } = null != e ? e : {}, G = !1, b = (0, i.v4)(), B = s.default.getCurrentUser(), x = (0, _.isPremiumExactly)(B, f.PremiumTypes.TIER_2);
                (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...u
                        } = n;
                        return (0, r.jsx)(e, {
                            ...u,
                            loadId: b,
                            subscriptionTier: U,
                            skuId: U,
                            isGift: P,
                            giftMessage: O,
                            giftRecipient: y,
                            initialPlanId: t,
                            followupSKUInfo: T,
                            onClose: (e, t) => {
                                i(), null == S || S(e), e && (null == p || p(), !P && null != t && t === f.PremiumSubscriptionSKUs.TIER_2 && !x && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                G = !0, null == I || I(), !P && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: A,
                            analyticsObject: R,
                            analyticsLocation: N,
                            analyticsSourceLocation: C,
                            trialId: m,
                            postSuccessGuild: h,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: M,
                            referralTrialOfferId: v,
                            returnRef: D,
                            subscription: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !G && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : R,
                            source: C,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: P,
                            eligible_for_trial: null != m,
                            application_id: M,
                            location_stack: A
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == S || S(G), G && (null == p || p())
                    }
                })
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return _
                },
                useSubscriptionInvoicePreview: function() {
                    return T
                },
                useGetSubscriptionInvoice: function() {
                    return S
                },
                getItemUnitPriceWithDiscount: function() {
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                u = n("872717"),
                l = n("448993"),
                a = n("195358"),
                o = n("521012"),
                s = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: _,
                    metadata: E
                } = e;
                t = (0, s.coerceExistingItemsToNewItemInterval)(t);
                let f = {
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
                    code: i,
                    apply_entitlements: o,
                    currency: d,
                    renewal: _,
                    metadata: E
                };
                try {
                    let e = await u.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: i,
                    currency: o,
                    applyEntitlements: d = !1,
                    analyticsLocations: _,
                    analyticsLocation: E
                } = e;
                null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
                let f = {
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
                    renewal: i,
                    apply_entitlements: d,
                    currency: o
                };
                try {
                    let e = await u.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: E,
                            location_stack: _
                        },
                        body: f,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await u.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return a.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [u, l] = (0, r.useState)(null), [a, s] = (0, r.useState)(null), c = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            s(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && s(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [u, a]
            }

            function T(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? _(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function S(e) {
                let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function I(e) {
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
                    return i
                }
            });
            var r = n("913144");
            let i = e => {
                r.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                u = n("41092"),
                l = n("414456"),
                a = n.n(l),
                o = n("862337"),
                s = n("77078"),
                c = n("812952"),
                d = n("448993"),
                _ = n("736978"),
                E = n("642906"),
                f = n("85336");
            n("153727"), n("650484");
            var T = n("454589"),
                S = n("978679"),
                I = n("745279"),
                p = n("718517"),
                A = n("49111"),
                R = n("782340"),
                N = n("129429");
            let C = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

            function P(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: l,
                    paymentError: P,
                    header: O,
                    footer: U,
                    isGift: m = !1,
                    giftMessage: h = R.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: L = !1,
                    isLoading: M = !1,
                    purchaseError: v,
                    purchaseErrorBlockRef: y,
                    planError: D,
                    onScroll: g,
                    scrollerClassName: G,
                    hasCurrencies: b = !1
                } = e, B = null;
                null != P && null == (0, f.errorToStep)(P) ? B = P : null != v ? B = v : null != D && (B = D);
                let x = null != B ? B.message : "";
                null != B && B instanceof d.BillingError && (B.code === _.ErrorCodes.CARD_DECLINED && b && (x += " ".concat(R.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === _.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (x = R.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === A.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (x = R.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: H
                } = (0, E.usePaymentContext)();
                M = M || null == H;
                let F = i.useRef(new o.Timeout);
                i.useEffect(() => {
                    let e = F.current;
                    return null != H || e.isStarted() ? null != H && e.stop() : e.start(10 * p.default.Millis.SECOND, () => {
                        let e = Error("Stripe took too long to load");
                        (0, I.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [H]);
                let w = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(u.Elements, {
                    options: A.StripeElementsOptions,
                    stripe: H,
                    children: [O, (0, r.jsxs)("div", {
                        className: a("paymentModalContent", N.content),
                        children: [m && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
                            className: N.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: S.default,
                            color: null == h ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: h
                        }) : null, L ? null : (0, r.jsx)("div", {
                            className: N.breadcrumbsWrapper,
                            children: (0, r.jsx)(T.default, {
                                activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? w : n,
                                breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !C.has(e)).map(e => ({
                                    id: e,
                                    label: (0, f.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: N.bodyWrapper,
                            children: [null == B ? null : (0, r.jsx)("div", {
                                className: N.errorBlockWrapper,
                                children: (0, r.jsx)(s.FormErrorBlock, {
                                    ref: y,
                                    children: x
                                })
                            }), M ? (0, r.jsx)(s.Spinner, {
                                className: N.loadingBlock
                            }) : (0, r.jsx)(s.Sequencer, {
                                className: N.sequencer,
                                staticClassName: N.sequencerStatic,
                                animatedNodeClassName: N.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(s.AdvancedScrollerThin, {
                                    onScroll: g,
                                    className: a(N.scroller, G),
                                    children: l
                                })
                            })]
                        })]
                    }), U]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("288264");

            function a(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: i,
                    color: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: l.perkRow,
                    children: [(0, r.jsx)("div", {
                        className: l.perkIconContainer,
                        children: (0, r.jsx)(t, {
                            color: a,
                            className: u(l.perkIcon, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: l.perkDescription,
                        children: i
                    })]
                })
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
                    return _
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return T
                }
            }), n("424973");
            var r = n("884691"),
                i = n("152584"),
                u = n("234251"),
                l = n("783142"),
                a = n("26989");

            function o(e) {
                return r.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in t) {
                        var r;
                        let u = t[i],
                            l = null === (r = u[e]) || void 0 === r ? void 0 : r.avatar;
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
                if ((0, u.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, i.setPendingProfileEffectId)(void 0);
                    return
                }(0, i.setPendingProfileEffectId)(e)
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

            function f(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        122846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var r = n("37983"),
                i = n("884691"),
                u = n("414456"),
                l = n.n(u),
                a = n("446674"),
                o = n("77078"),
                s = n("913144"),
                c = n("850068"),
                d = n("775433"),
                _ = n("308592"),
                E = n("642906"),
                f = n("85336"),
                T = n("552917"),
                S = n("843647"),
                I = n("154889"),
                p = n("917247"),
                A = n("956597"),
                R = n("635956"),
                N = n("273619"),
                C = n("674158"),
                P = n("915639"),
                O = n("357957"),
                U = n("326880"),
                m = n("46829"),
                h = n("595086"),
                L = n("719923"),
                M = n("153160"),
                v = n("49111"),
                y = n("646718"),
                D = n("782340"),
                g = n("643076");
            let G = e => {
                let {
                    locale: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(C.default, {
                        icon: h.default,
                        iconClassName: g.iconColorPurple,
                        description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, r.jsx)(C.default, {
                        icon: U.default,
                        iconClassName: g.iconColorPink,
                        description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: y.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            discountPercent: (0, M.formatPercent)(t, y.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, r.jsx)(C.default, {
                        icon: m.default,
                        iconClassName: g.iconColorYellow,
                        description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function b() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(C.default, {
                        icon: h.default,
                        iconClassName: g.iconColorPurple,
                        description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, r.jsx)(C.default, {
                        icon: m.default,
                        iconClassName: g.iconColorYellow,
                        description: D.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            let B = e => {
                    let {
                        trialOffer: t,
                        discountOffer: i,
                        isTier0Upsell: u,
                        isLoading: s,
                        price: c,
                        onClose: d
                    } = e, _ = (0, a.useStateFromStores)([P.default], () => P.default.locale), E = null != t || null != i;
                    return (0, r.jsxs)("div", {
                        className: g.wrapper,
                        children: [(0, r.jsx)(o.ModalCloseButton, {
                            onClick: d,
                            className: g.closeButton
                        }), E && (0, r.jsx)(A.PremiumTrialGradientBadge, {
                            className: g.premiumTrialBadge
                        }), (0, r.jsx)("img", {
                            className: l(g.heroImage, {
                                [g.heroImageWithTrialOffer]: E
                            }),
                            src: n("190389"),
                            alt: ""
                        }), s ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: g.heading,
                                children: null == c ? (0, r.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : u ? D.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, L.getTierDisplayName)(y.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
                                }) : D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
                                })
                            }), (0, r.jsx)("div", {
                                className: g.perks,
                                children: u ? (0, r.jsx)(b, {}) : (0, r.jsx)(G, {
                                    locale: _
                                })
                            })]
                        })]
                    })
                },
                x = e => {
                    let {
                        trialOffer: t,
                        discountOffer: n,
                        isTier0Upsell: i,
                        onClose: u
                    } = e, l = {
                        section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                    };
                    return (0, r.jsxs)(o.ModalFooter, {
                        className: g.footer,
                        children: [(0, r.jsx)(o.Button, {
                            onClick: u,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: D.default.Messages.CLOSE
                        }), (0, r.jsx)(R.default, {
                            buttonText: null != t || null != n ? i ? D.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : D.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: l,
                            subscriptionTier: i ? y.PremiumSubscriptionSKUs.TIER_0 : y.PremiumSubscriptionSKUs.TIER_2,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.GREEN,
                            onClick: () => {
                                u()
                            }
                        })]
                    })
                };

            function H(e) {
                let {
                    onClose: t,
                    ...n
                } = e, u = (0, _.useSubscriptionPlansLoaded)(), l = (0, a.useStateFromStores)([O.default], () => O.default.hasFetchedPaymentSources), A = u && l, R = (0, p.usePremiumTrialOffer)(), C = (0, I.usePremiumDiscountOffer)(), {
                    isLoading: P,
                    suggestedPremiumType: U
                } = (0, S.default)({
                    autoTrackExposure: A,
                    experiment: T.default,
                    location: "stickers_upsell"
                });
                i.useEffect(() => {
                    s.default.wait(() => {
                        (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let m = U === y.PremiumTypes.TIER_0 && null == C,
                    h = A ? L.default.getDefaultPrice(m ? y.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : y.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
                return (0, r.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, r.jsx)(o.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, r.jsx)(N.default, {
                            hideBreadcrumbs: !0,
                            body: (0, r.jsx)(B, {
                                trialOffer: R,
                                discountOffer: C,
                                isTier0Upsell: m,
                                isLoading: !A || P,
                                price: h,
                                onClose: t
                            }),
                            footer: (0, r.jsx)(x, {
                                trialOffer: R,
                                discountOffer: C,
                                isTier0Upsell: m,
                                onClose: t
                            }),
                            steps: [f.Step.PREMIUM_UPSELL],
                            currentStep: f.Step.PREMIUM_UPSELL
                        })
                    })
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return R
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return P
                },
                setTryItOutThemeColors: function() {
                    return O
                }
            });
            var r = n("872717"),
                i = n("913144"),
                u = n("448993"),
                l = n("884351"),
                a = n("845579"),
                o = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function _(e) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, s;
                let d = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let _ = a.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await r.default.patch({
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
                        let e = new u.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new u.APIError(t);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function f() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function p(e) {
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

            function R(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function P(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function O(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        783111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("666038");
            class i extends r.default {
                static createFromServer(e) {
                    return new i({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var u = i
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                u = n("414456"),
                l = n.n(u),
                a = n("77078"),
                o = n("145131"),
                s = n("461380"),
                c = n("298619");
            class d extends i.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, r.jsx)(o.default, {
                        justify: o.default.Justify.START,
                        className: l(c.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: i,
                            breadcrumbs: u,
                            renderCustomBreadcrumb: o,
                            separatorClassName: d
                        } = this.props, _ = e.id === n, E = t === u.length - 1, f = null != o ? o(e, _) : (0, r.jsx)("span", {
                            className: l(c.breadcrumb, {
                                [c.activeBreadcrumb]: _,
                                [c.interactiveBreadcrumb]: null != i
                            }),
                            children: e.label
                        });
                        return (0, r.jsxs)("div", {
                            className: l(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != i ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: f
                            }) : f, E ? null : (0, r.jsx)(s.default, {
                                className: l(c.breadcrumbArrow, d),
                                direction: s.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var _ = d
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return o
                }
            });
            var r = n("995008"),
                i = n.n(r),
                u = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                a = () => (0, u.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("470131"),
                l = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, r.jsxs)("g", {
                            fill: i,
                            fillRule: "evenodd",
                            className: u,
                            children: [(0, r.jsx)("path", {
                                d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                            }), (0, r.jsx)("path", {
                                d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                            })]
                        })
                    })
                }, u.BoostTier2SimpleIcon, void 0, {
                    size: 11
                })
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function u(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = "currentColor",
                    foreground: l,
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: u,
                        className: l
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: u,
                        className: l
                    })]
                })
            }
        },
        595086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("469563"),
                a = n("65969"),
                o = n("75196"),
                s = n("76150"),
                c = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        winking: l = !1,
                        foreground: a,
                        ...c
                    } = e;
                    return (0, r.jsxs)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(c),
                        viewBox: "0 0 20 20",
                        children: [(0, r.jsx)("path", {
                            fill: i,
                            className: u(a, {
                                [s.hidden]: l
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: u(a, {
                                [s.hidden]: !l
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                        })]
                    })
                }, a.StickerIcon, {
                    winking: "remove"
                }, {
                    size: 24
                })
        },
        719347: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return u
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return l
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return a
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let u = 550,
                l = 350,
                a = 40;
            (i = r || (r = {})).STATIC = "STATIC", i.RESPONSIVE = "RESPONSIVE", i.MOSAIC = "MOSAIC";
            let o = 20
        }
    }
]);