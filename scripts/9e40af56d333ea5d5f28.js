(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74941"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    l = e.length;
                if (l > n) return !1;
                if (l === n) return e === t;
                e: for (var i = 0, r = 0; i < l; i++) {
                    for (var s = e.charCodeAt(i); r < n;)
                        if (t.charCodeAt(r++) === s) continue e;
                    return !1
                }
                return !0
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
                    return s
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
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
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return _
                },
                accountDetailsClose: function() {
                    return h
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return v
                },
                saveAccountChanges: function() {
                    return S
                },
                getHarvestStatus: function() {
                    return T
                },
                requestHarvest: function() {
                    return g
                },
                setPendingAvatar: function() {
                    return I
                },
                setPendingGlobalNameName: function() {
                    return N
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectID: function() {
                    return A
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return R
                },
                clearErrors: function() {
                    return y
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return x
                },
                resetAndCloseUserProfileForm: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var l = n("872717"),
                i = n("95410"),
                r = n("819855"),
                s = n("913144"),
                o = n("393414"),
                a = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                f = n("49111"),
                C = n("191349"),
                E = n("782340");

            function _() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function h() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
                let n = t ? E.default.Messages.DELETE_ACCOUNT : E.default.Messages.DISABLE_ACCOUNT,
                    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => l.default.post({
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
                    c.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function v(e) {
                let t = await l.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, s.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && s.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return s.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function S(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: l,
                    emailToken: r,
                    password: o,
                    avatar: c,
                    avatarDecoration: _,
                    newPassword: h,
                    globalName: p
                } = e;
                return s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let s = {
                        username: t,
                        email: l,
                        email_token: r,
                        password: o,
                        avatar: c,
                        discriminator: n,
                        global_name: p,
                        new_password: h,
                        ...e
                    };
                    null === _ && (s.avatar_decoration_id = null), null != _ && (s.avatar_decoration_id = _.id, s.avatar_decoration_sku_id = _.skuId);
                    let a = i.default.get(f.DEVICE_TOKEN),
                        u = (0, C.getDevicePushProvider)();
                    null != u && null != a && (s.push_provider = u, s.push_token = a);
                    let d = i.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != C.DEVICE_PUSH_VOIP_PROVIDER && null != d && (s.push_voip_provider = C.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = d), v(s)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => s.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), s.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function T() {
                return l.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g() {
                return l.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function N(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function A(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: e
                })
            }

            function y() {
                s.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function x() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47716 2 2 6.47715 2 12C2 13.9707 2.57006 15.8083 3.55427 17.3568C3.67702 17.5499 3.66393 17.8017 3.51347 17.9742L1.44658 20.3425C0.882052 20.9893 1.34145 22 2.2 22H12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: o = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof a ? a : a.css,
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2C13.3114 2 12.2843 2.69119 11.7986 3.69355C11.5972 4.10932 11.8557 4.56448 12.2419 4.81816C13.3081 5.51868 14.0904 6.61601 14.3786 7.90013C14.3915 7.95754 14.4412 8 14.5 8Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M18.4373 17.2714C18.5906 17.6957 18.9807 18 19.4319 18H20.5C21.3284 18 22 17.3284 22 16.5C22 12.6961 19.1681 9.55362 15.4976 9.06577C14.9501 8.993 14.5104 9.45209 14.4013 9.99348C14.3406 10.2944 14.253 10.5855 14.1409 10.8641C13.9082 11.4429 14.0871 12.1554 14.6125 12.4916C16.3621 13.6108 17.7205 15.2876 18.4373 17.2714Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M12.5 9C12.5 10.6569 11.1569 12 9.5 12C7.84315 12 6.5 10.6569 6.5 9C6.5 7.34315 7.84315 6 9.5 6C11.1569 6 12.5 7.34315 12.5 9Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M2 20.5C2 16.3579 5.35786 13 9.5 13C13.6421 13 17 16.3579 17 20.5C17 21.3284 16.3284 22 15.5 22C15.4055 22 15.3242 21.9334 15.3038 21.841C15.0908 20.8768 14.7383 19.9711 14.42 19.2977C14.3117 19.0685 14 19.149 14 19.4026V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V19.4026C5 19.149 4.6883 19.0685 4.57996 19.2977C4.26174 19.9711 3.90923 20.8768 3.69619 21.841C3.6758 21.9334 3.59454 22 3.5 22C2.67157 22 2 21.3284 2 20.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M15 14C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8L5.5 8C4.94772 8 4.5 8.44772 4.5 9C4.5 9.55229 4.94772 10 5.5 10L8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12H6C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H7.25204C8.14012 17.4505 11.2723 20 15 20C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H7ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M2.5 10C3.05228 10 3.5 9.55228 3.5 9C3.5 8.44772 3.05228 8 2.5 8H2C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10H2.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M9.24787 3.34758C7.87224 2.45523 6 3.38448 6 4.95959V19.0404C6 20.6155 7.87224 21.5448 9.24787 20.6524L20.1013 13.612C21.2996 12.8347 21.2996 11.1653 20.1013 10.388L9.24787 3.34758Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
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
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                i = n("913144"),
                r = n("568734"),
                s = n("299285"),
                o = n("49111"),
                a = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: r,
                            teamId: s
                        } = e, a = await l.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: r,
                                guild_id: n,
                                team_id: s
                            }
                        }), u = a.body;
                        return null != n && null != r && i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await l.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), s = r.body;
                        return i.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: s
                        }), s
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, r = await l.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), s = r.body;
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let l = s.default.getApplication(e),
                                    i = (0, r.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    a = i && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !a) && !s.default.isFetchingApplication(e) && !s.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw i.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), l.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (i.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return o
                }
            }), n("222007");
            var l = n("697218"),
                i = n("315102"),
                r = n("449008"),
                s = n("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [o] = e.recipients.map(l.default.getUser).filter(r.isNotNullish);
                        if (null == o) return null;
                        return o.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        821393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("808653"), n("222007"), n("424973");
            var l = n("884691"),
                i = n("446674"),
                r = n("398604"),
                s = n("745049");

            function o(e, t) {
                let n = (0, i.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, null)), [e]),
                    o = (0, i.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, t)), [e, t]),
                    a = (0, l.useMemo)(() => {
                        let e = o.reduce((e, t) => (e[t.user_id] = t, e), {}),
                            t = n.filter(t => {
                                let n = e[t.user_id];
                                return null == n || n.response === s.GuildScheduledEventUserResponses.INTERESTED
                            }),
                            l = o.filter(e => e.response === s.GuildScheduledEventUserResponses.INTERESTED),
                            i = new Set,
                            r = [],
                            a = e => {
                                !i.has(e.user_id) && (r.push(e), i.add(e.user_id))
                            };
                        return t.forEach(a), l.forEach(a), r
                    }, [n, o]);
                return a
            }
        },
        833843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                s = n("77078"),
                o = n("922770"),
                a = n("267567"),
                u = n("42203"),
                d = n("476765"),
                c = n("599110"),
                f = n("686904"),
                C = n("933326"),
                E = n("398604"),
                _ = n("152475"),
                h = n("598639"),
                p = n("821393"),
                v = n("613767"),
                S = n("822516"),
                T = n("93550"),
                g = n("707916"),
                I = n("255050"),
                N = n("644189"),
                m = n("965353"),
                A = n("360538"),
                R = n("403901"),
                y = n("369404"),
                U = n("745049"),
                x = n("49111"),
                O = n("175244");

            function P(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: i,
                    onActionTaken: s,
                    isHub: o,
                    isMember: u,
                    recurrenceId: d
                } = e, c = (0, E.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([E.default], () => E.default.isInterestedInEventRecurrence(t.id, d), [d, t]), C = (0, _.default)(t), h = (0, r.useStateFromStores)([a.default], () => a.default.isLurking(n.id), [n.id]), p = (0, v.useIsChannelPublic)(null == i ? void 0 : i.id, t.id), S = (0, y.default)({
                    guild: n,
                    channel: i,
                    guildScheduledEvent: t,
                    isActive: c,
                    recurrenceId: d,
                    onActionTaken: s
                }), {
                    entity_type: T
                } = t;
                return o ? (0, l.jsx)(N.default, {
                    isActive: c,
                    isUserLurking: h,
                    rsvped: f,
                    isMember: u,
                    isDetailsView: !0,
                    guildName: null == n ? void 0 : n.name,
                    isChannelPublic: p,
                    canInvite: C,
                    ...S
                }) : (0, l.jsx)(g.default, {
                    isActive: c,
                    isUserLurking: h,
                    rsvped: f,
                    isChannelPublic: p,
                    canInvite: C,
                    entityType: T,
                    ...S
                })
            }
            var L = e => {
                let {
                    guildScheduledEventId: t,
                    parentGuildId: n,
                    transitionState: a,
                    initialRecurrenceId: _,
                    onClose: v
                } = e, [g, N] = i.useState(_), y = (0, r.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(t), [t]), L = null == y ? void 0 : y.id, b = null == y ? void 0 : y.guild_id, {
                    guild: w,
                    isMember: M
                } = (0, h.default)(b, L), D = (0, o.default)(n), j = null == y ? void 0 : y.channel_id, V = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(j), [j]), F = (0, d.useUID)(), [G, k] = i.useState(U.EventDetailSections.EVENT_INFO), H = (0, p.default)(L, g), B = (0, r.useStateFromStores)([E.default], () => E.default.getUserCount(L, g)), [Z, {
                    loading: W,
                    error: Y
                }] = (0, f.default)(() => C.default.getGuildEventUsers(null == y ? void 0 : y.id, g, b));
                i.useEffect(() => {
                    null == y ? v() : c.default.track(x.AnalyticEvents.OPEN_MODAL, {
                        type: U.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: y.guild_id
                    })
                }, [y, v]);
                let z = i.useRef(null),
                    [K, q] = i.useState(0);
                if (i.useLayoutEffect(() => {
                        var e, t;
                        let n = (null == y ? void 0 : y.recurrence_rule) != null ? 16 : 0;
                        q((null !== (t = null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
                    }, [z, null == y ? void 0 : y.recurrence_rule]), null == y || null == w || !M && !D) return null;
                let X = e => {
                        e !== G && (e === U.EventDetailSections.RSVP_LIST && Z(), k(e))
                    },
                    J = null != g ? g : (0, S.getNextRecurrenceIdInEvent)(y);
                return (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: a,
                    "aria-labelledby": F,
                    className: O.root,
                    children: [(null == y ? void 0 : y.image) != null && (0, l.jsx)(I.default, {
                        source: (0, T.default)(y),
                        className: O.banner
                    }), (0, l.jsx)(m.default, {
                        onClose: v,
                        selectedTab: G,
                        onTabSelected: X,
                        userCount: B,
                        hasBanner: (null == y ? void 0 : y.image) != null,
                        isHub: D
                    }), (0, l.jsx)("div", {
                        className: O.container,
                        children: (0, l.jsx)(s.ModalContent, {
                            className: O.contentContainer,
                            style: {
                                height: K
                            },
                            children: (0, l.jsxs)(s.Slides, {
                                activeSlide: G,
                                width: 600,
                                centered: !1,
                                children: [(0, l.jsx)(s.Slide, {
                                    id: U.EventDetailSections.EVENT_INFO,
                                    children: (0, l.jsx)(A.default, {
                                        guildEvent: y,
                                        guild: w,
                                        channel: V,
                                        headerId: F,
                                        onClose: v,
                                        onClickInterestedCount: () => X(U.EventDetailSections.RSVP_LIST),
                                        isHub: D,
                                        containerRef: z,
                                        recurrenceId: J,
                                        setRecurrenceId: N
                                    })
                                }), (0, l.jsx)(s.Slide, {
                                    id: U.EventDetailSections.RSVP_LIST,
                                    children: (0, l.jsx)(R.default, {
                                        guildEvent: y,
                                        recurrenceId: J,
                                        eventUsers: H,
                                        loading: W,
                                        containerHeight: K,
                                        error: Y
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)(s.ModalFooter, {
                        className: O.footer,
                        children: (0, l.jsx)(P, {
                            guildEvent: y,
                            isHub: D,
                            isMember: M,
                            guild: w,
                            channel: V,
                            onActionTaken: v,
                            recurrenceId: J
                        })
                    })]
                })
            }
        },
        965353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("77078"),
                a = n("945330"),
                u = n("745049"),
                d = n("782340"),
                c = n("475267");

            function f(e) {
                let {
                    onClose: t,
                    selectedTab: n,
                    onTabSelected: r,
                    userCount: f,
                    hasBanner: C,
                    isHub: E = !1
                } = e, _ = i.useRef(null);
                i.useEffect(() => {
                    var e, t, n;
                    return null === (n = _.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
                }, []);
                let h = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: f
                    }),
                    p = [(0, l.jsx)(o.TabBar.Item, {
                        className: c.tabBarItem,
                        id: u.EventDetailSections.EVENT_INFO,
                        children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                return !E && p.push((0, l.jsx)(o.TabBar.Item, {
                    className: c.tabBarItem,
                    id: u.EventDetailSections.RSVP_LIST,
                    children: h
                }, "is-hub")), (0, l.jsxs)("div", {
                    className: c.container,
                    children: [(0, l.jsx)(o.Clickable, {
                        ref: _,
                        onClick: t,
                        className: c.closeButton,
                        "aria-label": d.default.Messages.CLOSE,
                        children: (0, l.jsx)(a.default, {
                            className: s(c.closeIcon, C && c.closeIconBanner)
                        })
                    }), (0, l.jsx)(o.TabBar, {
                        className: c.tabBar,
                        "aria-label": d.default.Messages.OPTIONS,
                        selectedItem: n,
                        type: "top",
                        onItemSelect: r,
                        children: p
                    })]
                })
            }
        },
        360538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("446674"),
                a = n("77078"),
                u = n("970728"),
                d = n("401642"),
                c = n("26989"),
                f = n("305961"),
                C = n("580357"),
                E = n("476263"),
                _ = n("155207"),
                h = n("158998"),
                p = n("933326"),
                v = n("398604"),
                S = n("882550"),
                T = n("466148"),
                g = n("189443"),
                I = n("909151"),
                N = n("427554"),
                m = n("393745"),
                A = n("586403"),
                R = n("49111"),
                y = n("782340"),
                U = n("171632");

            function x(e) {
                var t;
                let {
                    creator: n,
                    guildId: i
                } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.getMember(i, n.id), [n, i]);
                return (0, l.jsxs)("div", {
                    className: U.row,
                    children: [(0, l.jsx)(a.Avatar, {
                        size: a.AvatarSizes.SIZE_20,
                        src: n.getAvatarURL(i, 20),
                        "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : h.default.getName(n),
                        className: U.icon
                    }), (0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: y.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, t;
                                return (0, l.jsx)(a.Clickable, {
                                    onClick: () => (0, d.openUserProfileModal)({
                                        userId: n.id,
                                        guildId: i,
                                        analyticsLocation: {
                                            section: R.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                        }
                                    }),
                                    className: U.creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, l.jsx)(a.NameWithRole, {
                                        name: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : h.default.getName(n),
                                        color: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    guild: t,
                    onClick: n,
                    onClose: r
                } = e, o = i.useCallback(e => {
                    null == n || n(e), null != n && (null == r || r(e))
                }, [n, r]), u = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(E.default, {
                        guild: t,
                        size: E.default.Sizes.MINI,
                        active: !0,
                        className: s(U.guildIcon, U.icon)
                    }), (0, l.jsx)(C.default, {
                        guild: t,
                        tooltipPosition: "top",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: U.guildBadge
                    }), (0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: U.linkText,
                        children: t.name
                    })]
                });
                return (0, l.jsx)("div", {
                    className: U.row,
                    children: null != n ? (0, l.jsx)(a.Clickable, {
                        onClick: o,
                        className: U.clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function P(e) {
                let {
                    userCount: t,
                    onClick: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: U.row,
                    children: [(0, l.jsx)(_.default, {
                        width: 20,
                        height: 20,
                        className: U.icon
                    }), (0, l.jsx)(a.Clickable, {
                        onClick: n,
                        className: U.interestedCount,
                        children: (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: y.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: t
                            })
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: r,
                    headerId: s,
                    onClose: d,
                    onClickInterestedCount: c,
                    isHub: C = !1,
                    containerRef: E,
                    recurrenceId: _,
                    setRecurrenceId: h
                } = e, R = (0, o.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
                    startTime: y,
                    endTime: L
                } = (0, T.default)(t.id, _), b = (0, o.useStateFromStores)([v.default], () => v.default.getUserCount(t.id, _)), w = i.useCallback(e => {
                    e.stopPropagation(), null != t && (0, u.transitionToGuildFromEventInvite)(t)
                }, [t]), M = (0, S.default)(t);
                i.useEffect(() => {
                    p.default.getGuildEventUserCounts(n.id, t.id, null != _ ? [_] : []), p.default.getGuildEventsForCurrentUser(n.id)
                }, [n.id, t.id, _]);
                let D = (0, g.recurrenceRuleFromServer)(t.recurrence_rule);
                return (0, l.jsxs)("div", {
                    ref: E,
                    children: [(0, l.jsxs)("div", {
                        className: U.header,
                        children: [(0, l.jsx)(m.GuildEventTimeStatus, {
                            startTime: y.toISOString(),
                            endTime: null == L ? void 0 : L.toISOString(),
                            status: t.status,
                            eventType: t.entity_type,
                            guildEventId: t.id,
                            recurrenceId: _
                        }), (0, l.jsx)(a.Heading, {
                            id: s,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: U.title,
                            children: t.name
                        })]
                    }), (0, l.jsxs)("div", {
                        className: U.body,
                        children: [(0, l.jsx)(O, {
                            guild: n,
                            onClick: R ? w : void 0,
                            onClose: d
                        }), (0, l.jsx)(A.default, {
                            guildScheduledEvent: t,
                            channel: r,
                            onClose: d
                        }), null != b && (0, l.jsx)(P, {
                            userCount: b,
                            onClick: c
                        }), !C && null != M && (0, l.jsx)(x, {
                            creator: M,
                            guildId: n.id
                        }, M.id), null != t.description && (0, l.jsx)("div", {
                            className: U.description,
                            children: (0, l.jsx)(I.default, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id
                            })
                        })]
                    }), null != D && (0, l.jsx)("hr", {
                        className: U.divider
                    }), null != D && (0, l.jsx)(N.default, {
                        guildId: n.id,
                        recurrenceRule: D,
                        guildEventId: t.id,
                        onRecurrenceClick: h,
                        hideScroller: !0,
                        activeRecurrenceId: _
                    })]
                })
            }
        },
        586403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                s = n("1339"),
                o = n("914169"),
                a = n("931874"),
                u = n("745049"),
                d = n("171632");

            function c(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: c
                } = e, f = t.entity_type === u.GuildScheduledEventEntityTypes.EXTERNAL, C = i.useCallback(e => (0, o.createEventLocationClickHandler)(t, c)(e), [t, c]), E = (0, a.getLocationDataForEvent)(t, n);
                if (null == E) return null;
                let {
                    IconComponent: _,
                    locationName: h
                } = E, p = (0, l.jsxs)(l.Fragment, {
                    children: [null != _ && (0, l.jsx)(_, {
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }), (0, l.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: d.locationText,
                        children: (0, s.guildEventDetailsParser)(h, !0)
                    })]
                });
                return (0, l.jsx)("div", {
                    className: d.row,
                    children: null != C ? (0, l.jsx)(r.Clickable, {
                        className: f ? d.externalLocation : d.channelLocation,
                        onClick: C,
                        children: p
                    }) : p
                })
            }
        },
        403901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("446674"),
                o = n("77078"),
                a = n("272030"),
                u = n("145079"),
                d = n("119184"),
                c = n("506885"),
                f = n("981601"),
                C = n("271938"),
                E = n("824563"),
                _ = n("101125"),
                h = n("697218"),
                p = n("155207"),
                v = n("398604"),
                S = n("745049"),
                T = n("782340"),
                g = n("758024");

            function I(e) {
                let {
                    children: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: g.emptyContainer,
                    children: [(0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: g.circle,
                            children: (0, l.jsx)(p.default, {
                                height: 40,
                                width: 40,
                                className: g.icon
                            })
                        })
                    }), t]
                })
            }

            function N() {
                return (0, l.jsx)(I, {
                    children: (0, l.jsx)(o.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: g.title,
                        children: T.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function m() {
                return (0, l.jsx)(I, {
                    children: (0, l.jsx)(o.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: g.errorTitle,
                        children: T.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function A(e) {
                let {
                    count: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: g.listRow,
                        children: [(0, l.jsx)("div", {
                            className: r(g.listRowCircle, g.listAvatar),
                            children: (0, l.jsx)(p.default, {
                                height: 14,
                                width: 14,
                                className: g.icon
                            })
                        }), (0, l.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: T.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: t
                            })
                        })]
                    })
                })
            }

            function R(e) {
                var t;
                let {
                    eventUser: n,
                    onContextMenu: i
                } = e, a = (0, s.useStateFromStores)([h.default], () => h.default.getUser(n.user_id)), d = null === (t = n.guild_member) || void 0 === t ? void 0 : t.guildId, p = (0, s.useStateFromStores)([_.default, E.default, C.default], () => n.user_id === C.default.getId() ? _.default.getStatus() : E.default.getStatus(n.user_id, d), [n.user_id, d]);
                return null == a ? null : (0, l.jsx)(o.Popout, {
                    preload: () => (0, c.default)(a.id, a.getAvatarURL(d, 80), {
                        guildId: d
                    }),
                    renderPopout: e => (0, l.jsx)(f.default, {
                        ...e,
                        userId: n.user_id,
                        guildId: d
                    }),
                    position: "left",
                    spacing: 16,
                    children: (e, t) => {
                        var s, d;
                        let {
                            isShown: c
                        } = t;
                        return (0, l.jsxs)(o.Clickable, {
                            className: r(g.listRow, g.interactiveRow, {
                                [g.selected]: c
                            }),
                            onContextMenu: e => i(e, a),
                            ...e,
                            children: [(0, l.jsx)(o.Avatar, {
                                src: a.getAvatarURL(null === (s = n.guild_member) || void 0 === s ? void 0 : s.guildId, 24),
                                "aria-label": a.username,
                                size: o.AvatarSizes.SIZE_24,
                                className: g.listAvatar,
                                status: p
                            }), (0, l.jsx)(u.default, {
                                user: a,
                                className: g.listName,
                                discriminatorClass: g.listDiscriminator,
                                nick: null === (d = n.guild_member) || void 0 === d ? void 0 : d.nick
                            })]
                        })
                    }
                })
            }

            function y(e) {
                let {
                    eventUsers: t,
                    usersNotShownCount: n = 0,
                    onContextMenu: i
                } = e;
                return (0, l.jsxs)(o.ScrollerThin, {
                    className: g.listScroller,
                    children: [t.map(e => (0, l.jsx)(R, {
                        eventUser: e,
                        onContextMenu: i
                    }, e.user_id)), n > 0 && (0, l.jsx)(A, {
                        count: n
                    })]
                })
            }

            function U(e) {
                let {
                    children: t,
                    style: n
                } = e;
                return (0, l.jsx)("div", {
                    className: g.container,
                    style: null != n ? n : {},
                    children: t
                })
            }

            function x(e) {
                let {
                    children: t,
                    height: n
                } = e;
                return (0, l.jsx)(U, {
                    style: {
                        height: n
                    },
                    children: t
                })
            }

            function O(e) {
                let {
                    guildEvent: t,
                    recurrenceId: i,
                    eventUsers: r,
                    loading: u,
                    error: d,
                    containerHeight: c
                } = e, f = (0, s.useStateFromStores)([v.default], () => v.default.getUserCount(t.id, i));
                if (u && 0 === r.length) return (0, l.jsx)(x, {
                    height: c,
                    children: (0, l.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE,
                        className: g.spinner
                    })
                });
                if (null != d && 0 === r.length) return (0, l.jsx)(x, {
                    height: c,
                    children: (0, l.jsx)(m, {})
                });
                let C = 0;
                return r.length >= S.MAX_RSVP_USER_DISPLAY_COUNT && f > S.MAX_RSVP_USER_DISPLAY_COUNT && (C = Math.max(f - r.length, 0)), 0 === r.length ? (0, l.jsx)(x, {
                    height: c,
                    children: (0, l.jsx)(N, {})
                }) : (0, l.jsx)(U, {
                    children: (0, l.jsx)(y, {
                        eventUsers: r,
                        onContextMenu: function(e, t) {
                            (0, a.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("406784").then(n.bind(n, "406784"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    user: t
                                })
                            })
                        },
                        usersNotShownCount: C
                    })
                })
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return C
                }
            });
            var l = n("65597"),
                i = n("862205"),
                r = n("697218"),
                s = n("719923"),
                o = n("782340");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: o,
                        collectOffOverride: a
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !a && (u ? l : r),
                        autoUnfurlReactionTooltip: o
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, l.default)([r.default], () => r.default.getCurrentUser()), s = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: i,
                        config: s
                    }), C = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: C,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }]
                }),
                C = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("627445"),
                a = n.n(o),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                f = n("642906"),
                C = n("990893");

            function E(e) {
                var t, n, r, o, u, d;
                let {
                    header: E,
                    isLargeModal: _,
                    stepProps: h
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: p,
                    stepConfigs: v,
                    setBodyNode: S,
                    setFooterNode: T,
                    setModalOverlayNode: g,
                    setReadySlideId: I
                } = (0, f.usePaymentContext)(), N = v.find(e => e.key === p);
                i.useEffect(() => {
                    g(null)
                }, [p, g]), a(null != N, "Unknown step for current payment flow.");
                let m = null !== (u = null == N ? void 0 : null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    A = null == N ? void 0 : null === (n = N.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== _ && _ ? C.sliderBodyLarge : null == N ? void 0 : null === (r = N.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == N ? void 0 : null === (o = N.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === d || d ? E : null, N.renderStep(h), null == p || m ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: s(C.body, A),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: p,
                                centered: !1,
                                onSlideReady: e => I(e),
                                children: v.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: s(C.sliderBody, R),
                                        ref: e => S(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => T(e)
                        }), (0, l.jsx)("div", {
                            ref: e => g(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function h(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("748820"),
                r = n("77078"),
                s = n("112679"),
                o = n("55689"),
                a = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function C(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: C,
                    onClose: E,
                    onComplete: _,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: p,
                    analyticsObject: v,
                    analyticsLocation: S,
                    analyticsSourceLocation: T,
                    isGift: g = !1,
                    giftMessage: I,
                    subscriptionTier: N,
                    trialId: m,
                    postSuccessGuild: A,
                    openInvoiceId: R,
                    applicationId: y,
                    referralTrialOfferId: U,
                    giftRecipient: x,
                    returnRef: O
                } = null != e ? e : {}, P = !1, L = (0, i.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...r
                        } = n;
                        return (0, l.jsx)(e, {
                            ...r,
                            loadId: L,
                            subscriptionTier: N,
                            skuId: N,
                            isGift: g,
                            giftMessage: I,
                            giftRecipient: x,
                            initialPlanId: t,
                            followupSKUInfo: C,
                            onClose: e => {
                                i(), null == E || E(e), e && (null == h || h())
                            },
                            onComplete: () => {
                                P = !0, null == _ || _(), !g && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: p,
                            analyticsObject: v,
                            analyticsLocation: S,
                            analyticsSourceLocation: T,
                            trialId: m,
                            postSuccessGuild: A,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: y,
                            referralTrialOfferId: U,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !P && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: L,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : v,
                            source: T,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != m,
                            application_id: y,
                            location_stack: p
                        }), (0, s.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == E || E(P), P && (!g && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == h || h())
                    },
                    onCloseRequest: c.NOOP
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
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
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
                r = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
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
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                setNewPendingUserBio: function() {
                    return u
                },
                setNewPendingAvatar: function() {
                    return d
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectID: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return C
                },
                showRemoveAvatar: function() {
                    return E
                },
                showRemoveBanner: function() {
                    return _
                }
            }), n("424973");
            var l = n("884691"),
                i = n("152584"),
                r = n("234251"),
                s = n("783142"),
                o = n("26989");

            function a(e) {
                return l.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in t) {
                        var l;
                        let r = t[i],
                            s = null === (l = r[e]) || void 0 === l ? void 0 : l.avatar;
                        null != s && (null == n[s] && (n[s] = []), n[s].push(i))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, s.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, i.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, i.setPendingProfileEffectID)(void 0);
                    return
                }(0, i.setPendingProfileEffectID)(e)
            }

            function C(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: l ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: l
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function E(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function _(e, t) {
                return void 0 === e ? null != t : null != e
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
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var l, i, r = n("991170"),
                s = n("719923"),
                o = n("24373"),
                a = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let l = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) return 0;
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("424973");
            var l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                s = n("913144"),
                o = n("80507"),
                a = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let C = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                E = () => {
                    u.default.isLoaded && C.compute()
                },
                _ = () => {
                    E()
                };

            function h() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                C.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], _), this.syncWith([a.default], h)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return C
                }
            }
            p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
            var v = new p(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        C.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), E()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return C
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return E
                },
                resetPendingProfileChanges: function() {
                    return _
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return v
                },
                setPendingAccentColor: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return T
                },
                setTryItOutAvatar: function() {
                    return g
                },
                setTryItOutAvatarDecoration: function() {
                    return I
                },
                setTryItOutProfileEffect: function() {
                    return N
                },
                setTryItOutBanner: function() {
                    return m
                },
                setTryItOutThemeColors: function() {
                    return A
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("448993"),
                s = n("884351"),
                o = n("845579"),
                a = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function f(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function C(e, t) {
                var n, u;
                let c = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = s.default.parse(void 0, e.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await l.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectID: e,
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

            function E() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function _() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function p(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function v(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function g(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function I(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function N(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID",
                    profileEffectID: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_EFFECT)
            }

            function m(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function A(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("77078"),
                a = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: d,
                    ...c
                } = e, f = i.Children.only(t), C = (0, o.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(u.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(a.default, {
                        ...c,
                        className: s(d, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: C
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
                    return h
                },
                default: function() {
                    return v
                }
            });
            var l, i, r = n("37983"),
                s = n("884691"),
                o = n("414456"),
                a = n.n(o),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                C = n("396792");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let E = {
                    default: C.shineDefault,
                    small: C.shineSmall
                },
                _ = {
                    default: C.shineInnerDefault,
                    small: C.shineInnerSmall
                };
            class h extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...l,
                        className: a(C.shineContainer, e, {
                            [C.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, r.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            h.defaultProps = {
                shineSize: "default"
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: i,
                    pauseAnimation: o,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: _,
                    ...p
                } = e, v = s.createRef(), S = (0, c.default)(v), T = !l && !i && !0 !== o && (!_ || S);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: v,
                    ...p,
                    className: a(C.shinyButton, n),
                    disabled: l,
                    submitting: i,
                    children: [t, T ? (0, r.jsx)(h, {
                        shinePaused: f,
                        className: a(C.buttonShine, _ ? C.onlyShineOnHover : void 0, E),
                        shineSize: u
                    }) : null]
                })
            };
            p.ShineSizes = i;
            var v = p
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return a
                }
            });
            var l = n("995008"),
                i = n.n(l),
                r = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                o = () => (0, r.useLazyValue)(() => s()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("733154"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("505088"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        backgroundColor: o,
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: r,
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
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("998460"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
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
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("202909"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, l.jsx)("path", {
                            className: o,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("304983"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, r.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("811513"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("876726"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: i
                        })
                    })
                }, r.PlayIcon, void 0, {
                    size: 16
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("390300"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("287083"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
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
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var l = n("884691"),
                i = n("448993");

            function r(e, t) {
                let [n, r] = l.useState(!1), [s, o] = l.useState(null), a = async () => {
                    r(!0), o(null);
                    try {
                        let t = await e();
                        return r(!1), o(null), t
                    } catch (n) {
                        let e = new i.APIError(n);
                        return null == t || t(e), o(e), r(!1), null
                    }
                };
                return [a, {
                    loading: n,
                    error: s
                }]
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("244201"),
                s = n("471671");

            function o() {
                let {
                    windowId: e
                } = l.useContext(r.default);
                return (0, i.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
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
                r = n("118810");
            let s = {
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
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
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
                    return d
                }
            }), n("222007"), n("70102");
            var l = n("884691"),
                i = n("748820"),
                r = n("157590");
            let s = (0, i.v4)(),
                o = new Map,
                a = new Map;
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
                        t = a.get(e);
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
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, i.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new r.default({
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
            var d = u
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
        }
    }
]);