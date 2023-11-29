(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10697"], {
        856670: function(t, e, n) {
            "use strict";
            t.exports = n.p + "018197f71e03e53562e7.svg"
        },
        693029: function(t, e, n) {
            "use strict";
            t.exports = n.p + "7e5dd7f59f96cc264184.svg"
        },
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function l(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function u(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function o(t, e, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function a(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: u
                } = t;

                function a(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / u)) + e)
                }
                let s = [];

                function c(t) {
                    let e = t + (r.MINIMUM_RANGE - 1);
                    return s.push([t, e]), e + 1
                }
                let d = a(.5 * l),
                    f = a(i, -d),
                    E = a(i + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= E;) f = c(f);
                o(e, n, s)
            }
        },
        112679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: t
                })
            }

            function l(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function u() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return C
                },
                accountDetailsClose: function() {
                    return I
                },
                disableAccount: function() {
                    return T
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return S
                },
                getHarvestStatus: function() {
                    return N
                },
                requestHarvest: function() {
                    return h
                },
                setPendingAvatar: function() {
                    return A
                },
                setPendingGlobalNameName: function() {
                    return v
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectID: function() {
                    return L
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return P
                },
                clearErrors: function() {
                    return g
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return O
                },
                resetAndCloseUserProfileForm: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                u = n("913144"),
                o = n("393414"),
                a = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function C() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function I() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function T(t, e) {
                let n = e ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    r = e ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(e => i.default.post({
                    url: r,
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
            async function p(t) {
                let e = await i.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function S(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: o,
                    avatar: d,
                    avatarDecoration: C,
                    newPassword: I,
                    globalName: T
                } = t;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(t => {
                    let u = {
                        username: e,
                        email: i,
                        email_token: l,
                        password: o,
                        avatar: d,
                        discriminator: n,
                        global_name: T,
                        new_password: I,
                        ...t
                    };
                    null === C && (u.avatar_decoration_id = null), null != C && (u.avatar_decoration_id = C.id, u.avatar_decoration_sku_id = C.skuId);
                    let a = r.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != a && (u.push_provider = s, u.push_token = a);
                    let c = r.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), p(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(e.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function N() {
                return i.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h() {
                return i.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function v(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function R(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function L(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function P(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: t
                })
            }

            function g() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function O() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        133403: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                o = n("782340"),
                a = n("239636");
            let s = Object.freeze({
                DEFAULT: a.default,
                FILLED: a.filled
            });

            function c(t) {
                let {
                    className: e,
                    onClick: n,
                    "aria-label": r,
                    look: c = s.DEFAULT
                } = t;
                return (0, i.jsx)(u.Clickable, {
                    "aria-label": null != r ? r : o.default.Messages.REMOVE,
                    className: l(a.button, c, e),
                    onClick: n
                })
            }
            c.Looks = s
        },
        733154: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47716 2 2 6.47715 2 12C2 13.9707 2.57006 15.8083 3.55427 17.3568C3.67702 17.5499 3.66393 17.8017 3.51347 17.9742L1.44658 20.3425C0.882052 20.9893 1.34145 22 2.2 22H12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })
                })
            }
        },
        31745: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CirclePlusIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H6.99999C6.44771 13 5.99999 12.5523 5.99999 12C5.99999 11.4477 6.44771 11 6.99999 11H11V7C11 6.44771 11.4477 6 12 6Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    })]
                })
            }
        },
        505088: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CircleXIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    })]
                })
            }
        },
        666031: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GifIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7.18016 15.8698C6.55491 15.8698 6.00152 15.7081 5.52001 15.3847C5.03849 15.0613 4.66478 14.6085 4.39887 14.0264C4.13296 13.4371 4 12.7615 4 11.9997C4 11.2451 4.14014 10.5767 4.42043 9.99461C4.7079 9.41248 5.12114 8.95612 5.66015 8.62553C6.20635 8.29494 6.85675 8.12964 7.61137 8.12964C8.25099 8.12964 8.82234 8.26619 9.32542 8.53929C9.83568 8.81239 10.2202 9.19688 10.4789 9.69277L9.26074 10.566C8.89421 9.89041 8.34802 9.55263 7.62215 9.55263C6.96096 9.55263 6.45429 9.76823 6.10214 10.1994C5.74999 10.6235 5.57391 11.2236 5.57391 11.9997C5.57391 12.7831 5.74999 13.3868 6.10214 13.8108C6.45429 14.2348 6.96096 14.4468 7.62215 14.4468C7.91681 14.4468 8.18631 14.3929 8.43066 14.2851C8.6822 14.1701 8.87625 14.0156 9.0128 13.8216V12.8945H7.29874V11.4931H10.5436V15.7189H9.27152L9.0667 15.0074C8.64267 15.5824 8.01383 15.8698 7.18016 15.8698ZM13.5198 15.7189H11.9459V8.28056H13.5198V15.7189ZM15.0304 15.7189H16.6043V12.8945H19.3641V11.4715H16.6043V9.70355H20.0001V8.28056H15.0304V15.7189Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })
                })
            }
        },
        504318: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PencilIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        125094: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ScreenArrowIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        197801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SettingsIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.558 1.09366C10.1049 1.153 9.85283 1.62553 9.92194 2.07732C10.1003 3.24346 9.73459 4.27926 8.93869 4.60893C8.14294 4.93854 7.15214 4.46496 6.45371 3.51461C6.1831 3.1464 5.67085 2.99054 5.30837 3.26877C4.54272 3.85645 3.85659 4.54257 3.2689 5.3082C2.99066 5.67069 3.14651 6.18296 3.51474 6.45356C4.46513 7.152 4.93874 8.14283 4.60912 8.93859C4.27944 9.73453 3.24356 10.1002 2.07736 9.92181C1.62557 9.85269 1.15302 10.1047 1.09368 10.5579C1.03188 11.0298 1 11.5112 1 12C1 12.4888 1.03188 12.9702 1.09369 13.4421C1.15303 13.8953 1.62558 14.1473 2.07736 14.0782C3.24356 13.8998 4.27944 14.2655 4.60913 15.0614C4.93874 15.8572 4.46514 16.848 3.51475 17.5465C3.14653 17.8171 2.99067 18.3293 3.26891 18.6918C3.85661 19.4575 4.54276 20.1436 5.30842 20.7313C5.67091 21.0095 6.18315 20.8536 6.45376 20.4854C7.15219 19.5351 8.143 19.0615 8.93875 19.3911C9.73465 19.7208 10.1004 20.7566 9.922 21.9227C9.85289 22.3745 10.1049 22.847 10.5581 22.9063C11.03 22.9681 11.5113 23 12 23C12.4889 23 12.9703 22.9681 13.4423 22.9063C13.8955 22.8469 14.1475 22.3744 14.0784 21.9226C13.9 20.7565 14.2657 19.7207 15.0616 19.391C15.8574 19.0614 16.8481 19.5349 17.5465 20.4852C17.8172 20.8534 18.3294 21.0093 18.6919 20.731C19.4574 20.1434 20.1435 19.4573 20.7311 18.6918C21.0094 18.3293 20.8535 17.817 20.4853 17.5464C19.5349 16.848 19.0613 15.8572 19.3909 15.0614C19.7206 14.2655 20.7565 13.8998 21.9226 14.0782C22.3744 14.1473 22.847 13.8953 22.9063 13.4421C22.9681 12.9702 23 12.4888 23 12C23 11.5112 22.9681 11.0299 22.9063 10.5579C22.847 10.1048 22.3744 9.85271 21.9227 9.92183C20.7565 10.1002 19.7206 9.73451 19.391 8.9386C19.0614 8.14284 19.5349 7.15204 20.4853 6.4536C20.8535 6.183 21.0094 5.67074 20.7311 5.30825C20.1435 4.54271 19.4575 3.85666 18.692 3.26903C18.3295 2.99079 17.8172 3.14662 17.5466 3.51482C16.8482 4.46508 15.8574 4.9386 15.0617 4.60901C14.2658 4.27933 13.9001 3.24352 14.0785 2.07737C14.1476 1.6256 13.8956 1.15308 13.4424 1.09372C12.9704 1.0319 12.4889 1 12 1C11.5112 1 11.0299 1.03188 10.558 1.09366ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })
                })
            }
        },
        287083: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                StageIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        390300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                VoiceNormalIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        206625: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(t, e) {
                let n = i.useRef(t);
                return i.useEffect(() => {
                    function t(t) {
                        null != n.current && !n.current.contains(t.target) && e()
                    }
                    return document.addEventListener("mousedown", t), () => {
                        document.removeEventListener("mousedown", t)
                    }
                }, [n, e]), n
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var u = n("666020");

            function o(t) {
                i.useEffect(() => (l.forEach(t, (t, e) => (0, u.subscribeMembers)(e, t)), () => {
                    l.forEach(t, (t, e) => (0, u.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        651057: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                r = n("913144"),
                l = n("568734"),
                u = n("299285"),
                o = n("49111"),
                a = {
                    async createApplication(t) {
                        let {
                            name: e,
                            guildId: n,
                            type: l,
                            teamId: u
                        } = t, a = await i.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: e,
                                type: l,
                                guild_id: n,
                                team_id: u
                            }
                        }), s = a.body;
                        return null != n && null != l && r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async getApplicationsForGuild(t) {
                        let {
                            includeTeam: e,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(t),
                            query: {
                                ...n,
                                include_team: e
                            }
                        }), u = l.body;
                        return r.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: u
                        }), u
                    },
                    async transferApplication(t) {
                        let {
                            applicationId: e,
                            teamId: n
                        } = t, l = await i.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(e),
                            body: {
                                team_id: n
                            }
                        }), u = l.body;
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async fetchApplications(t) {
                        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = t;
                        if (!e && (n = t.filter(t => {
                                var e, n;
                                let i = u.default.getApplication(t),
                                    r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    a = r && (null == i ? void 0 : null === (e = i.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null;
                                return !(null != i && !a) && !u.default.isFetchingApplication(t) && !u.default.didFetchingApplicationFail(t) && t.length > 0
                            })), n.length > 0) {
                            let t;
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                t = await i.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(t => ["application_ids", t])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (t) {
                                throw r.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), t
                            }
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: t.body
                            })
                        }
                    },
                    fetchApplication(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: t
                        }), i.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(t),
                            query: {
                                with_guild: e
                            },
                            oldFormErrors: !0
                        }).then(t => (r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: t.body
                        }), t.body)).catch(e => (r.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: t
                        }), Promise.reject(e)))
                    }
                }
        },
        526887: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                u = n("65597"),
                o = n("206230"),
                a = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                c = r.createContext(s);

            function d(t) {
                let {
                    children: e,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: E
                } = t, _ = (0, l.useConfettiCannon)(n, a), C = (0, u.default)([o.default], () => o.default.useReducedMotion), I = r.useMemo(() => C ? s : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (t, e) => _.createConfetti({
                        ...d,
                        ...t
                    }, e),
                    createConfettiAt: (t, e, n, i) => _.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: t,
                                y: e
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            ...t
                        }, e, n)
                    },
                    createMultipleConfettiAt: function(t, e, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: t,
                                    y: e
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, d, _, n, C, E]);
                return (0, i.jsx)(c.Provider, {
                    value: I,
                    children: e
                })
            }
        },
        384830: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                u = n("385976"),
                o = n("867805");

            function a(t) {
                let {
                    emojiId: e,
                    emojiName: n
                } = t, i = (0, l.useStateFromStores)([u.default], () => null != e ? u.default.getCustomEmojiById(e) : null);
                if (null != i || null != n) {
                    if (null == e) return r(null != n, "emojiName must be defined if emojiId is not defined"), o.default.convertSurrogateToName(n, !1);
                    else return null == i ? void 0 : i.name
                }
            }
        },
        208548: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("446674"),
                a = n("77078"),
                s = n("430568"),
                c = n("133403"),
                d = n("252744"),
                f = n("86678"),
                E = n("923959"),
                _ = n("882641"),
                C = n("384830"),
                I = n("958706"),
                T = n("782340"),
                p = n("545456");

            function S(t) {
                let {
                    className: e,
                    guildId: n,
                    error: l,
                    emojiId: S,
                    emojiName: N,
                    isRequiredField: h = !0,
                    shouldUpdateBothEmojiFields: A = !1,
                    setEmojiId: v,
                    setEmojiName: R
                } = t, L = (0, C.default)({
                    emojiId: S,
                    emojiName: N
                }), P = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), g = r.createRef(), U = (0, d.default)(g), O = () => {
                    R(void 0), v(void 0)
                }, m = t => (e, n) => {
                    let i = (null == e ? void 0 : e.id) == null;
                    O(), i ? R(null == e ? void 0 : e.optionallyDiverseSequence) : (A && R(null == e ? void 0 : e.name), v(null == e ? void 0 : e.id)), n && t()
                }, D = t => {
                    t.stopPropagation(), O()
                };
                return (0, i.jsx)(a.FormItem, {
                    required: h,
                    title: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: u(e, p.section),
                    error: l,
                    children: (0, i.jsx)(a.Popout, {
                        animation: a.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: t => {
                            let {
                                closePopout: e
                            } = t;
                            return (0, i.jsx)(f.default, {
                                closePopout: e,
                                pickerIntention: I.EmojiIntention.SOUNDBOARD,
                                onNavigateAway: e,
                                onSelectEmoji: m(e),
                                guildId: n,
                                channel: P
                            })
                        },
                        children: (t, e) => {
                            let {
                                isShown: n
                            } = e;
                            return (0, i.jsxs)("div", {
                                ...t,
                                className: p.emojiInput,
                                ref: g,
                                children: [(0, i.jsx)(_.default, {
                                    className: p.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != S || null != N ? () => (0, i.jsx)(s.default, {
                                        emojiName: N,
                                        emojiId: S
                                    }) : null
                                }), (0, i.jsx)(a.TextInput, {
                                    inputClassName: p.emojiText,
                                    placeholder: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != L ? ":".concat(L, ":") : "",
                                    readOnly: !0
                                }), U && null != L && (0, i.jsx)(c.default, {
                                    ...t,
                                    onClick: D,
                                    className: p.removeButton
                                })]
                            })
                        }
                    })
                })
            }
        },
        104945: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                a = n("371642"),
                s = n("775980");

            function c(t) {
                let {
                    filename: e,
                    className: n,
                    filters: l,
                    buttonText: c,
                    placeholder: d,
                    onFileSelect: f
                } = t, E = r.useRef(null);
                return (0, i.jsxs)("div", {
                    className: u(n, s.fileUpload),
                    children: [(0, i.jsx)("input", {
                        className: s.fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: d,
                        type: "text",
                        value: e
                    }), (0, i.jsxs)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: s.fileUploadButton,
                        children: [c, (0, i.jsx)(a.default, {
                            ref: E,
                            tabIndex: -1,
                            onChange: t => {
                                var e;
                                let n = null === (e = t.currentTarget.files) || void 0 === e ? void 0 : e[0];
                                f(n)
                            },
                            multiple: !1,
                            filters: l
                        })]
                    })]
                })
            }
        },
        390236: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return C
                }
            }), n("781738");
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                u = n("773336"),
                o = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()))),
                E = (t, e) => {
                    let {
                        id: n,
                        icon: i
                    } = t;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let u = l.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(i, ".").concat(u, "?").concat(d).concat(f) : "".concat(s).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                _ = t => t.startsWith(a) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                C = (t, e) => {
                    var n;
                    let i = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || t.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return C
                },
                setPendingNickname: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return p
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                resetAllPending: function() {
                    return N
                },
                clearErrors: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return A
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function o(t, e) {
                let {
                    nick: n,
                    avatar: l
                } = e;
                if (null == t) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function a(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function s(t, e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function E(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function _(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function C(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function T(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, r, l, u, o, a, s, c, d;
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            });
            var f = n("446674"),
                E = n("913144"),
                _ = n("49111");
            let C = _.FormStates.CLOSED,
                I = {},
                T = !1;

            function p() {
                C = _.FormStates.CLOSED, I = {}, s = null, c = void 0, d = []
            }

            function S() {
                N(), h(), I = {}, C = _.FormStates.OPEN
            }

            function N() {
                i = void 0, o = void 0
            }

            function h() {
                r = void 0, l = void 0, u = void 0, a = void 0
            }
            class A extends f.default.Store {
                getFormState() {
                    return C
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== u || void 0 !== o || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: u,
                        pendingNickname: o,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var v = new A(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    s = t.guild, C = _.FormStates.OPEN, I = {}, c = t.source, d = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: p,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    S(), p()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    s = t.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    C = _.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (C !== _.FormStates.SUBMITTING) return !1;
                    C = _.FormStates.OPEN, I = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    C = _.FormStates.OPEN, I = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: S,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: S,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    T = e
                }
            })
        },
        597517: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("599110"),
                l = n("49111");

            function u(t) {
                r.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: t
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: t
                    })
                })
            }

            function o(t, e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: t,
                    enabled: e
                })
            }

            function a(t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: t
                })
            }
        },
        269596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                l = n("197881"),
                u = n("492397");
            let o = new Set,
                a = {};
            class s extends i.default.PersistedStore {
                initialize(t) {
                    null != t && (Array.isArray(t.hiddenHotspots) && (o = new Set(t.hiddenHotspots)), null != t.hotspotOverrides && (a = t.hotspotOverrides))
                }
                hasHotspot(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && a[t];
                    return !(u.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(t))
                }
                hasHiddenHotspot(t) {
                    return o.has(t)
                }
                getHotspotOverride(t) {
                    return a[t]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: a
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [t => ({
                hiddenHotspots: null != t ? t : [],
                hotspotOverrides: {}
            })];
            var c = new s(r.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        hiddenHotspots: e
                    } = t;
                    o = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    let {
                        location: e
                    } = t;
                    if (o.has(e)) return !1;
                    o.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    let {
                        location: e,
                        enabled: n
                    } = t;
                    a[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    let {
                        location: e
                    } = t;
                    if (null == a[e]) return !1;
                    delete a[e]
                }
            })
        },
        139321: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var i = n("533613");
            n.es(i, e);
            var r = n("597517");
            n.es(r, e);
            var l = n("269596")
        },
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                u = n("112679"),
                o = n("55689"),
                a = n("855133"),
                s = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: C,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: T,
                    analyticsObject: p,
                    analyticsLocation: S,
                    analyticsSourceLocation: N,
                    isGift: h = !1,
                    giftMessage: A,
                    subscriptionTier: v,
                    trialId: R,
                    postSuccessGuild: L,
                    openInvoiceId: P,
                    applicationId: g,
                    referralTrialOfferId: U,
                    giftRecipient: O,
                    returnRef: m
                } = null != t ? t : {}, D = !1, y = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(t, {
                            ...l,
                            loadId: y,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: h,
                            giftMessage: A,
                            giftRecipient: O,
                            initialPlanId: e,
                            followupSKUInfo: E,
                            onClose: t => {
                                r(), null == _ || _(t), t && (null == I || I())
                            },
                            onComplete: () => {
                                D = !0, null == C || C(), !h && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: T,
                            analyticsObject: p,
                            analyticsLocation: S,
                            analyticsSourceLocation: N,
                            trialId: R,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: P,
                            applicationId: g,
                            referralTrialOfferId: U,
                            returnRef: m
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && s.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : p,
                            source: N,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: h,
                            eligible_for_trial: null != R,
                            application_id: g,
                            location_stack: T
                        }), (0, u.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == _ || _(D), D && (!h && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return u
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return s
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
                u = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: t
                    })
                },
                a = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: t
                    })
                },
                s = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: t
                    })
                }
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return a
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
                setNewPendingProfileEffectID: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return C
                }
            }), n("424973");
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                u = n("783142"),
                o = n("26989");

            function a(t) {
                return i.useMemo(() => {
                    let e = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in e) {
                        var i;
                        let l = e[r],
                            u = null === (i = l[t]) || void 0 === i ? void 0 : i.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(r))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function s(t, e) {
                (0, u.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, r.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, l.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(t)
            }

            function f(t, e) {
                if (t === e) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(t)
            }

            function E(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: i
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

            function C(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function s(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = t, {
                    analyticsLocations: f
                } = (0, l.default)(), E = (0, i.useCallback)(() => {
                    null != e && (0, u.initGuildIdentitySettings)(e, null != c ? c : f), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [e, n, s, c, d, f]);
                return E
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
                    return C
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                setTryItOutAvatar: function() {
                    return h
                },
                setTryItOutAvatarDecoration: function() {
                    return A
                },
                setTryItOutProfileEffect: function() {
                    return v
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                u = n("884351"),
                o = n("845579"),
                a = n("697218"),
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
                let d = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != t.bio && f && (t.bio = u.default.parse(void 0, t.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != e ? c.Endpoints.GUILD_PROFILE(e, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: t,
                            ...n.body
                        })
                    } else {
                        let t = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new l.APIError(e);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function _() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function T(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function p(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function N(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function h(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function A(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function v(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID",
                    profileEffectID: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT)
            }

            function R(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function L(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        882641: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("301165"),
                a = n("77078"),
                s = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                E = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var C = function(t) {
                let {
                    tabIndex: e,
                    className: n,
                    renderButtonContents: l,
                    active: C,
                    onClick: I,
                    "aria-controls": T,
                    focusProps: p
                } = t, [S, N] = r.useState(!1), [h, A] = r.useState(0), v = S || C, R = (0, c.getClass)(E, "emojiButton", v ? "Hovered" : "Normal"), L = function(t) {
                    let e = -t % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(t / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(e, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(h), P = r.useCallback(() => {
                    if (v) return;
                    let t = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    N(!0), A(t), s.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [v, N, A]), g = r.useCallback(() => {
                    N(!1)
                }, [N]), U = r.useCallback(() => {
                    s.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, i.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: e,
                    className: u(R, n),
                    onMouseEnter: P,
                    onMouseOver: P,
                    onMouseLeave: g,
                    onFocus: U,
                    onClick: I,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": T,
                    "aria-expanded": C,
                    "aria-haspopup": "dialog",
                    focusProps: p,
                    children: null != l ? l() : (0, i.jsx)(o.Spring, {
                        config: _,
                        to: {
                            value: v ? 1 : 0
                        },
                        children: t => {
                            let {
                                value: e
                            } = t;
                            return (0, i.jsx)(o.animated.div, {
                                className: E.sprite,
                                style: {
                                    ...L,
                                    transform: e.to([0, 1], [1, 1.14]).to(t => "scale(".concat(t, ")")),
                                    filter: e.to(t => "grayscale(".concat(100 - 100 * t, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        931138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                a = n("760607"),
                s = n("89976");

            function c(t) {
                let {
                    children: e,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = t, f = r.Children.only(e), E = (0, o.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: u(s.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...d,
                        className: u(c, s.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: u(s.childContainer, {
                            [s.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                u = n("393414"),
                o = n("49111"),
                a = r.forwardRef(function(t, e) {
                    let {
                        href: n,
                        children: a,
                        onClick: s,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = t, E = r.useCallback(t => {
                        !t.repeat && ((t.charCode === o.KeyboardKeys.SPACE || t.charCode === o.KeyboardKeys.ENTER) && (t.preventDefault(), null != n && (0, u.transitionTo)(n), null == s || s()), null == c || c(t))
                    }, [n, c, s]), _ = r.useCallback(t => {
                        !t.metaKey && !t.shiftKey && 0 === t.button && (t.preventDefault(), t.stopPropagation(), null != n && (0, u.transitionTo)(n), null == s || s())
                    }, [n, s]), C = (0, i.jsx)("a", {
                        ref: e,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: a
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...d,
                        children: C
                    })
                })
        },
        191814: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(t) {
                let {
                    size: e,
                    horizontal: n = !1
                } = t, r = n ? e : 1, l = n ? 1 : e;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        109264: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
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
        381546: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...a
                    } = t;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(a),
                        width: e,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
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
        760607: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: u,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return 16 === e || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
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
                        ...(0, u.default)(o),
                        width: e,
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
        987772: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
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
        351825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: u
                    } = t;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        368121: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
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
        228427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: e,
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
        811305: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Sizes: function() {
                    return p
                },
                default: function() {
                    return h
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("627445"),
                a = n.n(o),
                s = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                _ = n("368121"),
                C = n("523096"),
                I = n("587974"),
                T = n("494101");
            let p = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(t, e) {
                let n = t instanceof f.default ? t : null != t ? t.user : null;
                return null != n ? n.id : "user-".concat(e)
            }
            class N extends r.PureComponent {
                renderUsers() {
                    let {
                        users: t,
                        max: e,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, u = [], o = t.length === e ? t.length : e - 1, a = this.renderMoreUsers(o), s = 0;
                    for (; s < o && s < t.length;) {
                        var c;
                        let e = null == a && null == l && s === t.length - 1,
                            o = n(t[s], e, s);
                        u.push(e ? (0, i.jsx)("div", {
                            className: T.avatarContainer,
                            children: o
                        }, S(null !== (c = t[s]) && void 0 !== c ? c : null, s)) : (0, i.jsx)(I.default, {
                            className: T.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, S(t[s], s))), s++
                    }
                    return null != l ? u.push(l) : null != a && u.push(a), u
                }
                renderMoreUsers(t) {
                    let {
                        max: e,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: u,
                        users: o
                    } = this.props, a = Math.min(t, o.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= e) return (0, i.jsx)(r.Fragment, {
                                children: u("".concat(e, "+"), e)
                            }, "more-users");
                            if (n > o.length) {
                                let t = n - o.length;
                                return (0, i.jsx)(r.Fragment, {
                                    children: u("+".concat(t), t)
                                }, "more-users")
                            }
                        } else if (a < o.length) {
                            let t = Math.min(o.length - a, 99);
                            return (0, i.jsx)(r.Fragment, {
                                children: u("+".concat(t), t)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(_.default, {
                        foreground: T.foreground,
                        className: T.icon
                    }) : null
                }
                render() {
                    let {
                        className: t,
                        size: e,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(t => null != t && t.id === f), C = o && null == E.default.getUser(f);
                    return (0, i.jsx)(s.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: t => (a(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
                            ...this.props,
                            user: C && null != _ ? _ : void 0,
                            ...t,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: u(t, T.container, function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
                                switch (t) {
                                    case p.SIZE_16:
                                        return T.size16;
                                    case p.SIZE_24:
                                        return T.size24;
                                    case p.SIZE_32:
                                        return T.size32;
                                    case p.SIZE_56:
                                        return T.size56;
                                    default:
                                        return T.size24
                                }
                            }(e)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (t, e, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: u
                        } = this.props;
                        if (null == t) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: T.emptyUser
                            });
                            {
                                let t = (null != n ? n : 0) % C.default.DEFAULT_AVATARS.length,
                                    e = C.default.DEFAULT_AVATARS[t];
                                return (0, i.jsx)("img", {
                                    src: e,
                                    alt: "",
                                    className: T.avatar
                                })
                            }
                        }
                        let o = (0, i.jsx)("img", {
                            src: t.getAvatarURL(l, u),
                            alt: t.username,
                            className: T.avatar
                        }, t.id);
                        return r ? (0, i.jsx)(s.Clickable, {
                            className: T.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != t && this.setState({
                                    popoutUserId: t.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, t.id) : o
                    }
                }
            }
            N.defaultProps = {
                max: 10,
                renderMoreUsers: function(t) {
                    return (0, i.jsx)("div", {
                        className: T.moreUsers,
                        children: t
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: p.SIZE_24
            };
            var h = N
        }
    }
]);