(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12218"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: a
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let u = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return u.push([e, t]), t + 1
                }
                let c = o(.5 * l),
                    E = o(i, -c),
                    _ = o(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = d(E);
                s(t, n, u)
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
                    return a
                },
                updateAddressInfo: function() {
                    return s
                },
                clearError: function() {
                    return o
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

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
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
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("333805"),
                a = n("160299"),
                s = n("745279"),
                o = n("850068"),
                u = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        s = {};
                    null != t && (s.country_code = t), null != n && (s.payment_source_id = n), null != d && (s.include_unpublished = d), null != c && (s.revenue_surface = c), l.query = s, !a.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let E = await i.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, s.captureBillingException)(t), new l.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function I() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
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
                    return f
                },
                disableAccount: function() {
                    return N
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return O
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return L
                },
                setPendingAvatarDecoration: function() {
                    return h
                },
                setPendingProfileEffectID: function() {
                    return R
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return D
                },
                setDisableSubmit: function() {
                    return M
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                a = n("913144"),
                s = n("393414"),
                o = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                I = n("782340");

            function T() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function f() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
                    r = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: r,
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
                    c.default.logoutInternal(), (0, s.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: s,
                    avatar: c,
                    avatarDecoration: T,
                    newPassword: f,
                    globalName: N
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let a = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: s,
                        avatar: c,
                        discriminator: n,
                        global_name: N,
                        new_password: f,
                        ...e
                    };
                    null === T && (a.avatar_decoration_id = null), null != T && (a.avatar_decoration_id = T.id, a.avatar_decoration_sku_id = T.skuId);
                    let o = r.default.get(E.DEVICE_TOKEN),
                        u = (0, _.getDevicePushProvider)();
                    null != u && null != o && (a.push_provider = u, a.push_token = o);
                    let d = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), S(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function L(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function h(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function R(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function m() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function M(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("817736"),
                o = n.n(s),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                E = n("845579"),
                _ = n("901165"),
                I = n("62843"),
                T = n("315102"),
                f = n("402671"),
                N = n("866190"),
                S = n("115279");
            class A extends r.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: i,
                            animated: r,
                            shouldAnimate: l,
                            isFocused: a,
                            isInteracting: s,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = S.EMOJI_SIZE_MAP[o];
                        return T.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === r && (!0 === l || u || !0 === s),
                            size: e
                        })
                    }
                    if (null != i) return f.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: s,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: E,
                        autoplay: _,
                        isInteracting: I,
                        ...T
                    } = this.props, f = this.getSrc();
                    return null == f || "" === f ? (0, i.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, r.createElement)("img", {
                        ...T,
                        key: this.key,
                        src: f,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", s, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != E && "" !== E ? {
                            "data-id": E
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            A.defaultProps = {
                isInteracting: !1
            };
            let p = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let r = i[1];
                            if (e.intersectionRatio >= .7) {
                                var l, a;
                                if (-1 !== t.indexOf(r)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function s(e) {
                    let i = o.findDOMNode(e);
                    l.unobserve(i);
                    let r = n.findIndex(t => {
                        let [n, i] = t;
                        return i === e
                    }); - 1 !== r && (n.splice(r, 1), -1 !== (r = t.indexOf(e)) && (t.splice(r, 1), r < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends r.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: r,
                                allowAnimatedEmoji: l,
                                ...a
                            } = this.props;
                        return (0, i.jsx)(I.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...a,
                                autoplay: r || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(A);

            function O(e) {
                let t = E.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    r = __OVERLAY__ ? (0, d.useStateFromStores)([_.default], () => _.default.isInstanceFocused()) : (0, N.useIsWindowFocused)();
                return (0, i.jsx)(p, {
                    ...e,
                    ...n,
                    isFocused: r
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("446674"),
                s = n("77078"),
                o = n("102985"),
                u = n("79798"),
                d = n("754474"),
                c = n("158998"),
                E = n("782340"),
                _ = n("892802");

            function I(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let T = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: r,
                    botVerified: a,
                    discriminatorClass: o,
                    className: d,
                    usernameClass: c,
                    color: I,
                    botClass: T,
                    showStreamerModeTooltip: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(_.info, d),
                    children: [(0, i.jsx)(s.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: f,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(_.username, c),
                            style: null != I ? {
                                color: I
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(_.infoSpacing, o),
                        children: n
                    }) : void 0, null != r && (0, i.jsx)(u.default, {
                        type: r,
                        className: l(_.infoSpacing, T),
                        verified: a
                    })]
                })
            };
            var f = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: l,
                    showAccountIdentifier: s,
                    overrideDiscriminator: u,
                    forcePomelo: E,
                    ..._
                } = e, f = (0, a.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), N = f || t || n.isNonUserBot(), S = n.toString(), A = c.default.getName(n), p = l ? S : null != r ? r : A, O = n.isPomelo() || E;
                if (O || p !== S) {
                    let e = p === S && O && l ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : p,
                        t = s && e !== "@".concat(S) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(T, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: I(n),
                        showStreamerModeTooltip: f && e !== A,
                        ..._
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: p,
                    botType: I(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: N || p !== S ? null : null != u ? u : n.discriminator,
                    ..._
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: s
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: s
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: s
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: s
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: s
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
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
            });
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
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var a = n("666020");

            function s(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, l = r
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        918771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("819855"),
                u = n("77078"),
                d = n("272030"),
                c = n("851387"),
                E = n("841098"),
                _ = n("376556"),
                I = n("716241"),
                T = n("766274"),
                f = n("271938"),
                N = n("26989"),
                S = n("305961"),
                A = n("476765"),
                p = n("12287"),
                O = n("811305"),
                C = n("599110"),
                L = n("701909"),
                h = n("339023"),
                R = n("602658"),
                m = n("49111"),
                U = n("782340"),
                g = n("80014"),
                D = n("494101"),
                M = function(e) {
                    let {
                        guildId: t,
                        transitionState: l,
                        onClose: M
                    } = e, P = (0, s.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]), v = (0, s.useStateFromStores)([f.default], () => f.default.getId()), G = (0, s.useStateFromStores)([N.default], () => N.default.getMember(t, v)), [y, b] = r.useState([]), B = (0, E.default)(), F = (0, A.useUID)();
                    if (r.useEffect(() => {
                            0 !== y.length && C.default.track(m.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
                                role_ids: y.map(e => {
                                    let {
                                        role_id: t
                                    } = e;
                                    return t
                                }),
                                ...(0, I.collectGuildAnalyticsMetadata)(t)
                            })
                        }, [t, y]), r.useEffect(() => {
                            c.default.getGuildRoleConnectionsConfigurations(t).then(e => b(e))
                        }, [t]), null == P || null == G) return null;
                    let w = Object.values(P.roles).filter(e => {
                        var t;
                        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                    });
                    return (0, i.jsxs)(u.ModalRoot, {
                        transitionState: l,
                        "aria-labelledby": F,
                        className: g.modal,
                        children: [(0, i.jsxs)(u.ModalHeader, {
                            separator: !1,
                            children: [(0, i.jsx)(h.default, {
                                className: g.headerIcon,
                                size: 24
                            }), (0, i.jsx)(u.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: U.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
                            }), (0, i.jsx)(u.ModalCloseButton, {
                                className: g.modalCloseButton,
                                onClick: M
                            })]
                        }), (0, i.jsxs)(u.ModalContent, {
                            className: g.container,
                            children: [(0, i.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: U.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
                                    helpdeskArticleUrl: L.default.getArticleURL(m.HelpdeskArticles.CONNECTION_DETAILS)
                                })
                            }), (0, i.jsx)("div", {
                                className: g.verifiedRoles,
                                children: w.map(e => {
                                    let l = G.roles.includes(e.id),
                                        s = function(e) {
                                            let n = y.find(t => {
                                                let {
                                                    role_id: n
                                                } = t;
                                                return n === e
                                            });
                                            if (null == n) return [];
                                            let r = {};
                                            for (let e of n.rules.flat()) {
                                                let s;
                                                if (null != e.application_id) {
                                                    var l;
                                                    let r = null === (l = n.applications) || void 0 === l ? void 0 : l[e.application_id];
                                                    s = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                                                        src: new(0, T.default)(r.bot).getAvatarURL(t, 24),
                                                        alt: "",
                                                        className: a(g.botAvatar, D.avatar)
                                                    }) : null
                                                } else {
                                                    let t = _.default.get(e.connection_type);
                                                    s = (0, i.jsx)("img", {
                                                        src: (0, o.isThemeLight)(B) ? t.icon.lightSVG : t.icon.darkSVG,
                                                        alt: "",
                                                        className: D.avatar
                                                    })
                                                }
                                                null != s && (r["".concat(e.connection_type, ":").concat(e.application_id)] = s)
                                            }
                                            return Object.values(r)
                                        }(e.id);
                                    return (0, i.jsxs)(u.Clickable, {
                                        className: a(g.verifiedRole, l ? g.verifiedRoleHasRole : null),
                                        onClick: l ? void 0 : () => {
                                            var r, l;
                                            return r = e, l = t, void(0, u.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await n.el("572579").then(n.bind(n, "572579"));
                                                return t => (0, i.jsx)(e, {
                                                    role: r,
                                                    guildId: l,
                                                    ...t
                                                })
                                            })
                                        },
                                        onContextMenu: l ? t => {
                                            var r, l, a;
                                            return r = P.id, l = e.id, a = t, void(0, d.openContextMenuLazy)(a, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("232006").then(n.bind(n, "232006"));
                                                return t => (0, i.jsx)(e, {
                                                    ...t,
                                                    roleId: l,
                                                    onLeaveRole: () => c.default.unassignGuildRoleConnection(r, l)
                                                })
                                            })
                                        } : void 0,
                                        children: [l ? (0, i.jsx)("div", {
                                            className: g.roleCheckmark,
                                            children: (0, i.jsx)(p.default, {})
                                        }) : null, (0, i.jsx)(R.default, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }), (0, i.jsxs)("div", {
                                            className: g.verifiedRoleNameDescriptionContainer,
                                            children: [(0, i.jsx)(u.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                className: g.verifiedRoleName,
                                                children: e.name
                                            }), void 0 !== e.description ? (0, i.jsx)(u.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                className: g.verifiedRoleDescription,
                                                children: e.description
                                            }) : null]
                                        }), (0, i.jsx)(O.default, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: s.map(() => null),
                                            renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                                                children: s[n]
                                            }, n),
                                            max: 3
                                        })]
                                    }, e.id)
                                })
                            })]
                        })]
                    })
                }
        },
        602658: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("509043"),
                l = n("405645"),
                a = n("483093"),
                s = n("339023"),
                o = n("49111");

            function u(e) {
                var t;
                let {
                    guildId: n,
                    role: u,
                    size: d,
                    className: c
                } = e, E = (0, l.useRoleIcon)({
                    guildId: n,
                    roleId: u.id,
                    size: d
                });
                return null != E ? (0, i.jsx)(a.default, {
                    className: c,
                    ...E
                }) : (0, i.jsx)(s.default, {
                    color: null !== (t = u.colorString) && void 0 !== t ? t : (0, r.int2hex)(o.DEFAULT_ROLE_COLOR),
                    className: c,
                    size: d
                })
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return T
                }
            });
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                a = n("773336"),
                s = n("49111");
            let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, a.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                _ = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let a = l.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        E = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = d ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(c).concat(E) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                I = e => e.startsWith(o) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
                T = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return s
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return u
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return A
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return C
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                a = n("49111");
            async function s(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
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
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function u(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, a, s, o, u, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                f = {},
                N = !1;

            function S() {
                T = I.FormStates.CLOSED, f = {}, u = null, d = void 0, c = []
            }

            function A() {
                p(), O(), f = {}, T = I.FormStates.OPEN
            }

            function p() {
                i = void 0, s = void 0
            }

            function O() {
                r = void 0, l = void 0, a = void 0, o = void 0
            }
            class C extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return f
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== s || void 0 !== o
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
                    return s
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: a,
                        pendingNickname: s,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return u
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var L = new C(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    u = e.guild, T = I.FormStates.OPEN, f = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    A(), S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    u = e.guild, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = I.FormStates.OPEN, f = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: O,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: A,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: A,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    f = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    N = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, T = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, f = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var N = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: I,
                enableVerificationForm: T,
                submitVerificationForm: f
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return I
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return T
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return f
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return N
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                a = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                I = 1e3,
                T = 300,
                f = "Membership Gating",
                N = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return L
                },
                updateImpersonatedData: function() {
                    return h
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                I = n("38654"),
                T = n("507950"),
                f = n("49111"),
                N = n("724210");

            function S(e, t) {
                _.default.track(f.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), O(e)
            }

            function A(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (_.default.track(f.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), O(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function O(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, N.isStaticChannelRoute)(t);
                if (!i && !d.default.can(f.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(f.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function L(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && C(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function h(e, t) {
                A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    ...t
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
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, s = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: s ? i : l
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
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
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
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: r,
                        config: a
                    }), E = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, r.createExperiment)({
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
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
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
                    return I
                },
                PaymentPortalBody: function() {
                    return T
                },
                PaymentPortalFooter: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function I(e) {
                var t, n, l, s, u, d;
                let {
                    header: I,
                    isLargeModal: T,
                    stepProps: f
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: N,
                    stepConfigs: S,
                    setBodyNode: A,
                    setFooterNode: p,
                    setModalOverlayNode: O,
                    setReadySlideId: C
                } = (0, E.usePaymentContext)(), L = S.find(e => e.key === N);
                r.useEffect(() => {
                    O(null)
                }, [N, O]), o(null != L, "Unknown step for current payment flow.");
                let h = null !== (u = null == L ? void 0 : null === (t = L.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    R = null == L ? void 0 : null === (n = L.options) || void 0 === n ? void 0 : n.bodyClassName,
                    m = void 0 !== T && T ? _.sliderBodyLarge : null == L ? void 0 : null === (l = L.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == L ? void 0 : null === (s = L.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? I : null, L.renderStep(f), null == N || h ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: a(_.body, R),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => C(e),
                                children: S.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: a(_.sliderBody, m),
                                        ref: e => A(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => p(e)
                        }), (0, i.jsx)("div", {
                            ref: e => O(e)
                        })]
                    })]
                })
            }

            function T(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function f(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: f,
                    analyticsLocations: N,
                    analyticsObject: S,
                    analyticsLocation: A,
                    analyticsSourceLocation: p,
                    isGift: O = !1,
                    giftMessage: C,
                    subscriptionTier: L,
                    trialId: h,
                    postSuccessGuild: R,
                    openInvoiceId: m,
                    applicationId: U,
                    referralTrialOfferId: g,
                    giftRecipient: D,
                    returnRef: M
                } = null != e ? e : {}, P = !1, v = (0, r.v4)();
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
                            loadId: v,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: O,
                            giftMessage: C,
                            giftRecipient: D,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                r(), null == I || I(e), e && (null == f || f())
                            },
                            onComplete: () => {
                                P = !0, null == T || T(), !O && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: f,
                            analyticsLocations: N,
                            analyticsObject: S,
                            analyticsLocation: A,
                            analyticsSourceLocation: p,
                            trialId: h,
                            postSuccessGuild: R,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: m,
                            applicationId: U,
                            referralTrialOfferId: g,
                            returnRef: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !P && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : S,
                            source: p,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: O,
                            eligible_for_trial: null != h,
                            application_id: U,
                            location_stack: N
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == I || I(P), P && (!O && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == f || f())
                    },
                    onCloseRequest: c.NOOP
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
                    return a
                },
                setCanPlayWowMoment: function() {
                    return s
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
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
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
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
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return f
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                a = n("913144"),
                s = n("775433"),
                o = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let I = "nonSubscriber";
            async function T() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function f(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                S(r, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    S(a, l, t, n)
                }, [a, l, t, n])
            }

            function S(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && T(), i && (!u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = l;
            class s extends i.default.Store {
                initialize() {
                    a = l
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var o = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
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
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
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
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return I
                },
                showRemoveBanner: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                a = n("783142"),
                s = n("26989");

            function o(e) {
                return i.useMemo(() => {
                    let t = s.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            a = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, a.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function E(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function _(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                a = n("929423");
            n("424562");
            var s = n("49111"),
                o = n("397336");

            function u(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, l.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : E), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, u, d, c, E]);
                return _
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let l = 32,
                a = 5,
                s = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i, r, l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                I = n("846325"),
                T = n("49111"),
                f = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let N = new Map,
                S = new Map,
                A = new Set,
                p = r.NOT_FETCHED,
                O = r.NOT_FETCHED,
                C = new Set,
                L = new Map,
                h = !1;

            function R(e) {
                let {
                    sound: t
                } = e, n = N.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, N.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), N.set(t.guildId, [...n]))
            }
            let m = a.debounce(e => {
                E.default.track(T.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function U(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == i[e] && A.delete(e)
            }
            class g extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), U(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(N),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return N
                }
                getSoundsForGuild(e) {
                    return N.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(I.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = N.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(N.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return O === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return p === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return p === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return p === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = L.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != S.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return h
                }
                hasFetchedAllSounds() {
                    return O === r.FETCHED && p === r.FETCHED
                }
            }
            g.displayName = "SoundboardStore";
            var D = new g(o.default, {
                LOGOUT: function() {
                    N.clear(), S.clear(), L.clear(), h = !1, O = r.NOT_FETCHED, p = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    O = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: R,
                GUILD_SOUNDBOARD_SOUND_UPDATE: R,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    N.delete(t);
                    let i = N.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), N.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, a = (null !== (n = S.get(r)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = L.get(l)) && void 0 !== i ? i : 0) + 1;
                    S.set(r, a), L.set(l, s), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (h = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = S.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = L.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? S.delete(i) : S.set(i, l), a <= 0 ? L.delete(r) : L.set(r, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    m(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    S.clear(), L.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        C = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === f.UserSettingsTypes.PRELOADED_USER_SETTINGS && U(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    N.set(I.DEFAULT_SOUND_GUILD_ID, t), p = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        N.set(t, n)
                    }), O = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    N.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    N = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    N.set(t, n)
                }
            })
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var l = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, l = n("991170"),
                a = n("719923"),
                s = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = s.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                a = n("913144"),
                s = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let _ = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    u.default.isLoaded && _.compute()
                },
                T = () => {
                    I()
                };

            function f() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], T), this.syncWith([o.default], f)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var S = new N(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), I()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var i, r, l = n("102053"),
                a = n("446674"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                I = n("778689"),
                T = n("305961"),
                f = n("161585"),
                N = n("24373"),
                S = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let A = 2,
                p = new Map,
                O = new Map,
                C = null,
                L = [],
                h = null,
                R = !1,
                m = new Map,
                U = (e, t) => {
                    m = new Map(m.set(e, t))
                },
                g = 1e3 * S.Durations.HOUR,
                D = () => {
                    if (0 !== A) return;
                    let e = o.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (I.default.isMember(e) && !m.has(e)) {
                                for (let t of n) M(t, !0, T.default.getGuild(e));
                                U(e, n)
                            }
                    }
                },
                M = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    O.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == C) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: f.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, N.isStandardSticker)(e)) {
                        let t = L.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: f.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: f.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), C.set(e.id, r)
                    } else if ((0, N.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: f.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: f.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            C.set(e.id, a);
                            return
                        }
                        a.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => a.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, a)
                    }
                },
                v = (e, t, n) => {
                    p.set(e.id, e);
                    let i = [...L];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), L = i
                    }(t || n) && e.stickers.forEach(e => M(e))
                },
                G = () => {
                    m.forEach((e, t) => {
                        let n = T.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), L.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function y(e) {
                null != e.stickers && (e.stickers.forEach(t => M(t, !0, e)), U(e.id, e.stickers))
            }
            class b extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, I.default, T.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return D(), null == C && (C = new Map, G()), C
                }
                get hasLoadedStickerPacks() {
                    return null != h && h + g > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !O.has(e) && D(), O.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return L
                }
                isPremiumPack(e) {
                    return L.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return m
                }
                getAllStickersIterator() {
                    return D(), O.values()
                }
                getAllGuildStickers() {
                    return D(), m
                }
                getStickersByGuildId(e) {
                    return D(), m.get(e)
                }
            }
            b.displayName = "StickersStore";
            var B = new b(s.default, {
                BACKGROUND_SYNC: () => {
                    C = null, O = new Map, m = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, O = new Map, m = new Map, t.forEach(y), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (y(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = m.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != C && C.delete(e.id), O.delete(e.id)
                    }), m.delete(n.id), m = new Map(m)
                },
                LOGOUT: () => {
                    A = 0, L = [], O.clear(), p.clear(), C = null, m.clear(), m = new Map(m), R = !1, h = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => v(e, !0)), h = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    v(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => M(e)), U(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = m.get(i)) && void 0 !== t ? t : [];
                    U(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), M(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    M(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = O.get(e.id);
                        return null != n && (0, N.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = m.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        O.delete(e.id), null != C && C.delete(e.id)
                    });
                    let s = i.map(e => r(e));
                    s.forEach(e => M(e)), U(n, s)
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return I
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return N
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return O
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return L
                },
                setTryItOutThemeColors: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                a = n("884351"),
                s = n("845579"),
                o = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function E(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(e, t) {
                var n, u;
                let c = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let E = s.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = a.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await i.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new l.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function I() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (l = i || (i = {}))[l.BACKGROUND = 0] = "BACKGROUND", (a = r || (r = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let s = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function a() {
                l = []
            }
            class s extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            s.displayName = "LayerStore";
            var o = new s(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("414055"),
                s = n("12287"),
                o = n("988268"),
                u = n("782340"),
                d = n("647431");
            let c = e => {
                let t, {
                        invertColor: n = !1,
                        type: r = o.BotTagTypes.BOT,
                        className: c,
                        verified: E,
                        hideIcon: _ = !1,
                        useRemSizes: I = !1,
                        children: T = []
                    } = e,
                    f = null,
                    N = u.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (r) {
                    case o.BotTagTypes.SYSTEM_DM:
                    case o.BotTagTypes.OFFICIAL:
                        E = !0, N = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, f = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case o.BotTagTypes.SERVER:
                        f = u.default.Messages.BOT_TAG_SERVER;
                        break;
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        f = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case o.BotTagTypes.STAFF_ONLY_DM:
                        f = u.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case o.BotTagTypes.AI:
                        E = !0, N = u.default.Messages.AI_GENERATED_TOOLTIP, f = u.default.Messages.AI_TAG;
                        break;
                    case o.BotTagTypes.REMIX:
                        E = !1, f = u.default.Messages.REMIXING_TAG;
                        break;
                    case o.BotTagTypes.BOT:
                    default:
                        f = u.default.Messages.BOT_TAG_BOT
                }
                let S = r === o.BotTagTypes.ORIGINAL_POSTER,
                    A = r === o.BotTagTypes.REMIX,
                    p = null;
                E && (p = (0, i.jsx)(a.Tooltip, {
                    text: N,
                    align: "center",
                    position: "top",
                    children: e => (0, i.jsx)(s.default, {
                        ...e,
                        className: d.botTagVerified
                    })
                })), t = r === o.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
                let O = e => (0, i.jsxs)("span", {
                    ...e,
                    className: l(c, t, I ? d.rem : d.px, {
                        [d.botTagOP]: S,
                        [d.botTagRemix]: A
                    }),
                    children: [_ ? null : p, T, (0, i.jsx)("span", {
                        className: d.botText,
                        children: f
                    })]
                });
                switch (r) {
                    case o.BotTagTypes.REMIX:
                        return (0, i.jsx)(a.Tooltip, {
                            text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => O(e)
                        });
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        return (0, i.jsx)(a.Tooltip, {
                            text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => O(e)
                        });
                    default:
                        return O()
                }
            };
            c.Types = o.BotTagTypes;
            var E = c
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                a = n("393414"),
                s = n("49111"),
                o = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...E
                    } = e, _ = r.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), I = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == u || u())
                    }, [n, u]), T = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: I,
                        onKeyPress: _,
                        ...E,
                        children: o
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...c,
                        children: T
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("79798"),
                s = n("988268"),
                o = n("888770"),
                u = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: r,
                        nameColor: s,
                        className: u,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: _,
                        botVerified: I = !1,
                        style: T,
                        useRemSizes: f = !1,
                        usernameIcon: N
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(u, o.nameTag),
                        style: T,
                        children: [(0, i.jsxs)("span", {
                            className: l(o.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [N, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(a.default, {
                            type: d,
                            invertColor: r,
                            className: l(_, o.bot),
                            verified: I,
                            useRemSizes: f
                        }) : null]
                    })
                }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return f
                },
                default: function() {
                    return S
                }
            });
            var i, r, l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                E = n("145131"),
                _ = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let I = {
                    [r.DEFAULT]: _.shineDefault,
                    [r.SMALL]: _.shineSmall
                },
                T = {
                    [r.DEFAULT]: _.shineInnerDefault,
                    [r.SMALL]: _.shineInnerSmall
                };
            class f extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: o(_.shineContainer, e, {
                            [_.shinePaused]: n
                        }),
                        children: (0, l.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: I[t],
                            children: (0, l.jsx)("div", {
                                className: T[t]
                            })
                        })
                    })
                }
            }
            f.defaultProps = {
                shineSize: r.DEFAULT
            };
            let N = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: E = r.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: T,
                    onlyShineOnHover: N,
                    ...S
                } = e, A = a.createRef(), p = (0, c.default)(A), O = !i && !s && !0 !== u && (!N || p);
                return (0, l.jsxs)(d.Button, {
                    buttonRef: A,
                    ...S,
                    className: o(_.shinyButton, n),
                    disabled: i,
                    submitting: s,
                    children: [t, O ? (0, l.jsx)(f, {
                        shinePaused: I,
                        className: o(_.buttonShine, N ? _.onlyShineOnHover : void 0, T),
                        shineSize: E
                    }) : null]
                })
            };
            N.ShineSizes = r;
            var S = N
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, l = n ? 1 : t;
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
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, l.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return r
                }
            });
            var i = n("884691");
            let r = i.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                E = n("4177");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                I = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: I = "currentColor",
                        transition: T = E.transition,
                        className: f,
                        foreground: N,
                        expanded: S,
                        ...A
                    } = e, {
                        enabled: p
                    } = (0, d.useRedesignIconContext)(), O = t;
                    if (!0 === S ? O = _.DOWN : !1 === S && (O = _.RIGHT), p) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: a.ChevronSmallDownIcon,
                            [_.LEFT]: s.ChevronSmallLeftIcon,
                            [_.RIGHT]: o.ChevronSmallRightIcon
                        } [O];
                        return (0, i.jsx)(e, {
                            ...A,
                            className: f,
                            width: n,
                            height: r,
                            color: I,
                            colorClass: N
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(f, T, O),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(A),
                        children: (0, i.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: I,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            I.Directions = _;
            var T = I
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("469563"),
                a = n("163725"),
                s = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foregroundColor: a = r.default.unsafe_rawColors.RED_400.css,
                        foreground: o,
                        background: u,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("rect", {
                            fill: a,
                            className: o,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, i.jsx)("path", {
                            fill: l,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, a.EyeSlashIcon)
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                        ...(0, a.default)(s),
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
                }, l.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                }, l.PencilIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                }, l.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: a
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon)
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                E = n("766274"),
                _ = n("697218"),
                I = n("368121"),
                T = n("523096"),
                f = n("587974"),
                N = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function A(e, t) {
                let n = e instanceof E.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }

            function p(e) {
                return (0, i.jsx)("div", {
                    className: N.moreUsers,
                    children: e
                })
            }
            class O extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, a = [], s = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(s), u = 0;
                    for (; u < s && u < e.length;) {
                        var d;
                        let t = null == o && null == l && u === e.length - 1,
                            s = n(e[u], t, u);
                        a.push(t ? (0, i.jsx)("div", {
                            className: N.avatarContainer,
                            children: s
                        }, A(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, i.jsx)(f.default, {
                            className: N.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: f.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, A(e[u], u))), u++
                    }
                    return null != l ? a.push(l) : null != o && a.push(o), a
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: a,
                        users: s
                    } = this.props, o = Math.min(e, s.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, i.jsx)(r.Fragment, {
                                children: a("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, i.jsx)(r.Fragment, {
                                    children: a("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < s.length) {
                            let e = Math.min(s.length - o, 99);
                            return (0, i.jsx)(r.Fragment, {
                                children: a("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(I.default, {
                        foreground: N.foreground,
                        className: N.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, I = n.find(e => null != e && e.id === E), T = s && null == _.default.getUser(E);
                    return (0, i.jsx)(u.Popout, {
                        position: "right",
                        preload: null == I ? void 0 : () => (0, d.default)(I.id, I.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != E,
                        fixed: !0,
                        renderPopout: e => (o(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(c.default, {
                            ...this.props,
                            user: T && null != I ? I : void 0,
                            ...e,
                            userId: E,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: a(e, N.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return N.size16;
                                    case S.SIZE_24:
                                        return N.size24;
                                    case S.SIZE_32:
                                        return N.size32;
                                    case S.SIZE_56:
                                        return N.size56;
                                    default:
                                        return N.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: a
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: N.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % T.default.DEFAULT_AVATARS.length,
                                    t = T.default.DEFAULT_AVATARS[e];
                                return (0, i.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: N.avatar
                                })
                            }
                        }
                        let s = (0, i.jsx)("img", {
                            src: e.getAvatarURL(l, a),
                            alt: e.username,
                            className: N.avatar
                        }, e.id);
                        return r ? (0, i.jsx)(u.Clickable, {
                            className: N.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            O.defaultProps = {
                max: 10,
                renderMoreUsers: p,
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var C = O
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return s
                }
            });
            var i = n("281071"),
                r = n("773336"),
                l = n("50885");
            let a = (() => {
                if (r.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!a && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                a = n("471671");

            function s() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class a {
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
                    return d
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let a = (0, r.v4)(),
                s = new Map,
                o = new Map;
            class u extends i.Component {
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
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, r.v4)()) : this.elementId = a;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
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
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == i || i.removeAllRanges(), null == i || i.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
                let l = document.execCommand("copy");
                return t.removeChild(r), l
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);