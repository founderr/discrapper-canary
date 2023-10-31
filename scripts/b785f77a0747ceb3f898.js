(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50516"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return a
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

            function o(e, t) {
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

            function a(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: o
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                }
                let u = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return u.push([e, t]), t + 1
                }
                let c = a(.5 * l),
                    E = a(i, -c),
                    _ = a(i + l, c);
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
                    return o
                },
                updateAddressInfo: function() {
                    return s
                },
                clearError: function() {
                    return a
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

            function o() {
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

            function a() {
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
                o = n("160299"),
                s = n("745279"),
                a = n("850068"),
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
                    null != t && (s.country_code = t), null != n && (s.payment_source_id = n), null != d && (s.include_unpublished = d), null != c && (s.revenue_surface = c), l.query = s, !o.default.ipCountryCodeLoaded && await (0, a.fetchIpCountryCode)();
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
                    return f
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
                    return N
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return A
                },
                setPendingGlobalNameName: function() {
                    return O
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return L
                },
                resetPendingAccountChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return U
                },
                resetAndCloseUserProfileForm: function() {
                    return M
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                o = n("913144"),
                s = n("393414"),
                a = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                I = n("782340");

            function f() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(e, t) {
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
            async function h(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function N(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: s,
                    avatar: c,
                    avatarDecoration: f,
                    newPassword: T,
                    globalName: S
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: s,
                        avatar: c,
                        discriminator: n,
                        global_name: S,
                        new_password: T,
                        ...e
                    };
                    null === f && (o.avatar_decoration_id = null), null != f && (o.avatar_decoration_id = f.id, o.avatar_decoration_sku_id = f.skuId);
                    let a = r.default.get(E.DEVICE_TOKEN),
                        u = (0, _.getDevicePushProvider)();
                    null != u && null != a && (o.push_provider = u, o.push_token = a);
                    let d = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != d && (o.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = d), h(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
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

            function C() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function O(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function R(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function L() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function U() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function M() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("913144"),
                o = n("211895"),
                s = n("26092"),
                a = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                I = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: s,
                            password: I,
                            avatar: f,
                            newPassword: T,
                            discriminator: S
                        } = e, {
                            close: h
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: o,
                                    email_token: s,
                                    password: I,
                                    avatar: f,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != S && "" !== S ? S : void 0
                                },
                                l = r.default.get(c.DEVICE_TOKEN),
                                a = (0, E.getDevicePushProvider)();
                            null != a && null != l && (t.push_provider = a, t.push_token = l);
                            let u = r.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return a.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != I && null != T && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("817736"),
                a = n.n(s),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                E = n("845579"),
                _ = n("901165"),
                I = n("62843"),
                f = n("315102"),
                T = n("402671"),
                S = n("866190"),
                h = n("115279");
            class N extends r.PureComponent {
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
                            isFocused: o,
                            isInteracting: s,
                            size: a = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = h.EMOJI_SIZE_MAP[a];
                        return f.default.getEmojiURL({
                            id: n,
                            animated: o && !0 === r && (!0 === l || u || !0 === s),
                            size: e
                        })
                    }
                    if (null != i) return T.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: s,
                        size: a = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: E,
                        autoplay: _,
                        isInteracting: I,
                        ...f
                    } = this.props, T = this.getSrc();
                    return null == T || "" === T ? (0, i.jsx)("span", {
                        className: o("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, r.createElement)("img", {
                        ...f,
                        key: this.key,
                        src: T,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: o("emoji", s, {
                            jumboable: "jumbo" === a
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
            N.defaultProps = {
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
                                var l, o;
                                if (-1 !== t.indexOf(r)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function o(e) {
                    let t = a.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function s(e) {
                    let i = a.findDOMNode(e);
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
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? o(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: r,
                                allowAnimatedEmoji: l,
                                ...o
                            } = this.props;
                        return (0, i.jsx)(I.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...o,
                                autoplay: r || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(N);

            function C(e) {
                let t = E.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    r = __OVERLAY__ ? (0, d.useStateFromStores)([_.default], () => _.default.isInstanceFocused()) : (0, S.useIsWindowFocused)();
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
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                o = n("446674"),
                s = n("77078"),
                a = n("102985"),
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
            let f = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: r,
                    botVerified: o,
                    discriminatorClass: a,
                    className: d,
                    usernameClass: c,
                    color: I,
                    botClass: f,
                    showStreamerModeTooltip: T
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(_.info, d),
                    children: [(0, i.jsx)(s.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(_.username, c),
                            style: null != I ? {
                                color: I
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(_.infoSpacing, a),
                        children: n
                    }) : void 0, null != r && (0, i.jsx)(u.default, {
                        type: r,
                        className: l(_.infoSpacing, f),
                        verified: o
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: l,
                    showAccountIdentifier: s,
                    overrideDiscriminator: u,
                    forcePomelo: E,
                    ..._
                } = e, T = (0, o.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), h = n.toString(), N = c.default.getName(n), p = l ? h : null != r ? r : N, C = n.isPomelo() || E;
                if (C || p !== h) {
                    let e = p === h && C && l ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : p,
                        t = s && e !== "@".concat(h) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(f, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: I(n),
                        showStreamerModeTooltip: T && e !== N,
                        ..._
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: p,
                    botType: I(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: S || p !== h ? null : null != u ? u : n.discriminator,
                    ..._
                })
            }
        },
        984557: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("979897"),
                l = n("49671"),
                o = n("773336");
            class s extends i.Component {
                getFileContents() {
                    let {
                        fileContents: e
                    } = this.props;
                    return "function" == typeof e && (e = e()), e
                }
                downloadNative(e, t) {
                    l.default.fileManager.saveWithDialog(e, t)
                }
                downloadHtml5(e, t) {
                    let n = new Blob([e], {
                        type: this.props.contentType
                    });
                    (0, r.saveAs)(n, t)
                }
                render() {
                    let {
                        children: e
                    } = this.props, t = i.Children.only(e);
                    return i.cloneElement(t, {
                        onClick: this.handleFileDownload
                    })
                }
                constructor(...e) {
                    super(...e), this.handleFileDownload = e => {
                        e.preventDefault();
                        let t = this.getFileContents(),
                            {
                                fileName: n,
                                onDownload: i
                            } = this.props;
                        o.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == i || i()
                    }
                }
            }
        },
        184504: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                o = n.n(l),
                s = n("446674"),
                a = n("77078"),
                u = n("913144"),
                d = n("430713"),
                c = n("984557"),
                E = n("367376"),
                _ = n("878720"),
                I = n("601745"),
                f = n("650893"),
                T = n("697218"),
                S = n("145131"),
                h = n("583227"),
                N = n("49111"),
                p = n("482931"),
                C = n("782340"),
                A = n("659248");
            let O = e => {
                let {
                    label: t,
                    text: n,
                    children: r,
                    ...l
                } = e;
                return (0, i.jsxs)(S.default, {
                    direction: S.default.Direction.VERTICAL,
                    ...l,
                    children: [(0, i.jsx)(a.FormTitle, {
                        tag: "h2",
                        children: t
                    }), null != n ? (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: A.sectionBody,
                        children: n
                    }) : null, (0, i.jsx)(S.default.Child, {
                        wrap: !0,
                        children: r
                    })]
                })
            };
            class R extends r.PureComponent {
                renderSMSSection() {
                    let {
                        currentUser: e
                    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(N.UserFlags.MFA_SMS), r = e.hasFlag(N.UserFlags.PARTNER) || e.hasFlag(N.UserFlags.STAFF);
                    return t ? (0, i.jsxs)(O, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: [(0, i.jsxs)(a.Text, {
                            variant: "text-md/normal",
                            className: A.sectionBody,
                            children: [(0, i.jsx)("strong", {
                                className: A.phoneNumber,
                                children: C.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                                    phoneNumber: e.phone
                                })
                            }), (0, i.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.LINK,
                                size: a.Button.Sizes.MIN,
                                className: A.linkButton,
                                onClick: this.handleChangePhoneNumber,
                                children: C.default.Messages.CHANGE_PHONE_NUMBER
                            })]
                        }), (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            disabled: n || r,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? C.default.Messages.MFA_SMS_ALREADY_ENABLED : C.default.Messages.MFA_SMS_ENABLE
                        })]
                    }) : (0, i.jsx)(O, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            disabled: r,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : C.default.Messages.MFA_SMS_ADD_PHONE
                        })
                    })
                }
                renderBackupCodesSection() {
                    return (0, i.jsx)(O, {
                        label: C.default.Messages.TWO_FA_DOWNLOAD_CODES,
                        text: C.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
                        children: (0, i.jsx)(c.default, {
                            fileContents: this.getDownloadFileContents,
                            contentType: "text/plain",
                            fileName: "discord_backup_codes.txt",
                            onDownload: () => u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }),
                            children: (0, i.jsx)(a.Button, {
                                color: a.Button.Colors.GREEN,
                                size: a.Button.Sizes.SMALL,
                                children: C.default.Messages.TWO_FA_DOWNLOAD_CODES
                            })
                        })
                    })
                }
                renderHeader(e) {
                    return (0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsxs)(S.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: A.header,
                                children: E.default.parse(C.default.Messages.TWO_FA_SUCCESS_HEADER)
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: A.subHeader,
                                children: e
                            })]
                        }), (0, i.jsx)(S.default.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, {
                                onClick: this.handleCloseModal
                            })
                        })]
                    })
                }
                renderConfirmModal(e) {
                    let {
                        onClose: t
                    } = this.props;
                    return (0, i.jsx)(a.DeclarativeConfirmModal, {
                        dismissable: !0,
                        header: C.default.Messages.TWO_FA_CONFIRM_TITLE,
                        confirmText: C.default.Messages.TWO_FA_CONFIRM_CONFIRM,
                        cancelText: C.default.Messages.CANCEL,
                        onCancel: () => this.setState({
                            showConfirmModal: !1
                        }),
                        onConfirm: () => {
                            u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }), t()
                        },
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: e
                        })
                    })
                }
                render() {
                    let {
                        isTotp: e
                    } = this.props;
                    return e ? this.renderTotp() : this.renderWebAuthn()
                }
                renderTotp() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, i.jsxs)(a.ModalContent, {
                            className: A.modalInner,
                            children: [this.renderSMSSection(), (0, i.jsx)(a.FormDivider, {
                                className: A.divider
                            }), this.renderBackupCodesSection()]
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_BODY)]
                    })
                }
                renderWebAuthn() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, i.jsx)(a.ModalContent, {
                            className: A.modalInner,
                            children: this.renderBackupCodesSection()
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
                    })
                }
                openPhoneVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, a.openModal)(t => (0, i.jsx)(I.default, {
                        reason: _.ChangePhoneReason.MFA_PHONE_UPDATE,
                        ...t,
                        ...e
                    }), {
                        modalKey: p.PHONE_VERIFICATION_MODAL_KEY
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showConfirmModal: !1
                    }, this.handleCloseModal = () => {
                        let {
                            onClose: e,
                            hasSeenBackupPrompt: t
                        } = this.props;
                        if (t) null == e || e();
                        else this.setState({
                            showConfirmModal: !0
                        })
                    }, this.getDownloadFileContents = () => {
                        let e = this.props.backupCodes.map(e => {
                                let {
                                    consumed: t,
                                    code: n
                                } = e;
                                return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(C.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
                            }).join("\r\n"),
                            t = C.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                                email: this.props.currentUser.email
                            });
                        return "".concat(t, "\r\n\r\n").concat(e)
                    }, this.handleChangePhoneNumber = () => {
                        this.openPhoneVerificationModal()
                    }, this.handleEnableSMS = () => {
                        let {
                            currentUser: e
                        } = this.props, t = () => {
                            (0, a.openModal)(e => (0, i.jsx)(h.default, {
                                ...e,
                                handleSubmit: e => d.default.enableSMS(e),
                                title: C.default.Messages.MFA_SMS_ENABLE
                            }))
                        };
                        null == e.phone ? this.openPhoneVerificationModal({
                            onAddedPhone: t
                        }) : t()
                    }
                }
            }
            var m = s.default.connectStores([T.default, f.default], () => {
                let e = T.default.getCurrentUser();
                return o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
                    currentUser: e,
                    backupCodes: f.default.getBackupCodes(),
                    hasSeenBackupPrompt: f.default.hasSeenBackupPrompt
                }
            })(R)
        },
        583227: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                o = n("782340"),
                s = n("579993");
            class a extends r.PureComponent {
                render() {
                    let {
                        title: e,
                        actionText: t,
                        children: n,
                        transitionState: a
                    } = this.props, {
                        error: u,
                        isLoading: d,
                        value: c
                    } = this.state, E = r.Children.count(n) > 0 ? (0, i.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(l.Text, {
                            className: s.warning,
                            variant: "text-md/normal",
                            children: n
                        })
                    }) : null;
                    return (0, i.jsx)(l.ModalRoot, {
                        transitionState: a,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, i.jsxs)(l.ModalContent, {
                                children: [E, (0, i.jsxs)(l.FormItem, {
                                    title: o.default.Messages.FORM_LABEL_PASSWORD,
                                    className: s.spacing,
                                    children: [(0, i.jsx)(l.TextInput, {
                                        type: "password",
                                        autoComplete: "off",
                                        autoFocus: !0,
                                        value: c,
                                        onChange: this.handlePasswordChange
                                    }), null != u && "" !== u ? (0, i.jsxs)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-danger",
                                        className: s.error,
                                        children: [" ", u, " "]
                                    }) : null]
                                })]
                            }), (0, i.jsxs)(l.ModalFooter, {
                                children: [(0, i.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: d || 0 === c.length,
                                    children: null != t ? t : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        value: "",
                        error: null,
                        isLoading: !1
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            value: t
                        } = this.state, {
                            handleSubmit: n,
                            onClose: i,
                            onError: r
                        } = this.props;
                        this.setState({
                            isLoading: !0
                        }), n(t).then(e => i(null != e ? e : void 0), e => {
                            if (null != e.body) null == r || r(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
                                error: e.body.password,
                                isLoading: !1
                            }) : e.body.message && this.setState({
                                error: e.body.message,
                                isLoading: !1
                            }))
                        }).finally(() => this.setState({
                            isLoading: !1
                        }))
                    }, this.shouldSkipErrorMsgRender = e => {
                        let {
                            skipErrorMsgAbortCode: t
                        } = this.props;
                        return null != t && (null == e ? void 0 : e.code) === t
                    }, this.handleCancel = () => {
                        let {
                            onClose: e
                        } = this.props;
                        e()
                    }, this.handlePasswordChange = e => {
                        let {
                            onPasswordChange: t
                        } = this.props;
                        null == t || t(e), this.setState({
                            value: e
                        })
                    }
                }
            }
            a.key = () => "password-confirm-modal";
            var u = a
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: s
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: s = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
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
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: s
                    })]
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 1 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 0 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M14.707 10.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        className: s
                    })]
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm8 0V6a3 3 0 1 0-6 0v2h6Zm-2 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: s
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: s
                    })]
                })
            }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-02_mfa_remove_phone",
                label: "Safety Experience MFA Remove Phone",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
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
            var o = n("666020");

            function s(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
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
                    return o
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var o = new class e {
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
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                o = n("65597"),
                s = n("206230"),
                a = n("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                d = r.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: _
                } = e, I = (0, l.useConfettiCannon)(n, a), f = (0, o.default)([s.default], () => s.default.useReducedMotion), T = r.useMemo(() => f ? u : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, c, I, n, f, _]);
                return (0, i.jsx)(d.Provider, {
                    value: T,
                    children: t
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
                    return f
                }
            });
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                o = n("773336"),
                s = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, o.isAndroid)(),
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
                    let o = l.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        E = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = d ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(c).concat(E) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                I = e => e.startsWith(a) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
                f = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return c
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return I
                },
                GuildHomeBadgeExperiment: function() {
                    return f
                },
                GuildHomeFeedbackExperiment: function() {
                    return T
                },
                GuildHomeDeprecationExperiment: function() {
                    return S
                }
            });
            var i = n("446674"),
                r = n("203288"),
                l = n("862205"),
                o = n("21121"),
                s = n("923959"),
                a = n("305961"),
                u = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[s.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([s.default, r.default], () => null != e && d(e.id, s.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === u.ME || e === u.FAVORITES || (0, o.isInMainTabsExperiment)()) return !1;
                let t = a.default.getGuild(e);
                return !!(null != t && d(e, s.default, r.default)) && t.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                I = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                f = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, l.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, l.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let T = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                S = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return s
                },
                setCurrentGuild: function() {
                    return a
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
                    return f
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return h
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return A
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                o = n("49111");
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
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
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

            function a(e) {
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

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function h() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, o, s, a, u, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                I = n("49111");
            let f = I.FormStates.CLOSED,
                T = {},
                S = !1;

            function h() {
                f = I.FormStates.CLOSED, T = {}, u = null, d = void 0, c = []
            }

            function N() {
                p(), C(), T = {}, f = I.FormStates.OPEN
            }

            function p() {
                i = void 0, s = void 0
            }

            function C() {
                r = void 0, l = void 0, o = void 0, a = void 0
            }
            class A extends E.default.Store {
                getFormState() {
                    return f
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== o || void 0 !== s || void 0 !== a
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
                    return o
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: o,
                        pendingNickname: s,
                        pendingThemeColors: a
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
                    return S
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var O = new A(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    u = e.guild, f = I.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: h,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), h()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    u = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    f = I.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (f !== I.FormStates.SUBMITTING) return !1;
                    f = I.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    f = I.FormStates.OPEN, T = e.errors
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
                    o = t
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
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                o = n("38654"),
                s = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    o = !a.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
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
            }, f = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, T = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
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
            var S = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: I,
                enableVerificationForm: f,
                submitVerificationForm: T
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return a
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
                    return f
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return T
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return S
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                o = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                I = 1e3,
                f = 300,
                T = "Membership Gating",
                S = "in-app-member-verification";
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
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => o),
                a = e => {
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
                o = n("50926"),
                s = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await o.default.submitVerificationForm(e, t)
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
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var i = n("693566"),
                r = n.n(i),
                l = n("872717"),
                o = n("913144"),
                s = n("851387"),
                a = n("36402"),
                u = n("49111");
            async function d(e) {
                try {
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: u.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                a.default.shouldFetch(e) && await d(e)
            }
            let E = new r({
                maxAge: 1e4
            });

            function _(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == E.get(i)) {
                    var r, o;
                    return E.set(i, !0), r = e, o = t, l.default.get({
                        url: u.Endpoints.GUILD_ROLE_MEMBER_IDS(r, o)
                    }).then(e => (s.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {},
                o = {};
            class s extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = o[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var a = new s(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, o[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, r = l[t];
                    if (null == r) return !1;
                    r[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, r = l[t];
                    if (null == r || null == r[n]) return !1;
                    let o = Object.keys(i).length;
                    r[n] += o
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete o[t.id]
                }
            })
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
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let o = i.parse(n),
                    s = (0, r.getFirstQueryStringValue)(o[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
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
                o = n("719923"),
                s = n("782340");
            let a = (0, r.createExperiment)({
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
                    } = n, s = o.default.isPremium(t);
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
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: r,
                        config: o
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
                    return f
                },
                PaymentPortalFooter: function() {
                    return T
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("627445"),
                a = n.n(s),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function I(e) {
                var t, n, l, s, u, d;
                let {
                    header: I,
                    isLargeModal: f,
                    stepProps: T
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
                    step: S,
                    stepConfigs: h,
                    setBodyNode: N,
                    setFooterNode: p,
                    setModalOverlayNode: C,
                    setReadySlideId: A
                } = (0, E.usePaymentContext)(), O = h.find(e => e.key === S);
                r.useEffect(() => {
                    C(null)
                }, [S, C]), a(null != O, "Unknown step for current payment flow.");
                let R = null !== (u = null == O ? void 0 : null === (t = O.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    m = null == O ? void 0 : null === (n = O.options) || void 0 === n ? void 0 : n.bodyClassName,
                    L = void 0 !== f && f ? _.sliderBodyLarge : null == O ? void 0 : null === (l = O.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == O ? void 0 : null === (s = O.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? I : null, O.renderStep(T), null == S || R ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: o(_.body, m),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: S,
                                centered: !1,
                                onSlideReady: e => A(e),
                                children: h.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: o(_.sliderBody, L),
                                        ref: e => N(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => p(e)
                        }), (0, i.jsx)("div", {
                            ref: e => C(e)
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function T(e) {
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
                o = n("112679"),
                s = n("55689"),
                a = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: I,
                    onComplete: f,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: S,
                    analyticsObject: h,
                    analyticsLocation: N,
                    analyticsSourceLocation: p,
                    isGift: C = !1,
                    giftMessage: A,
                    subscriptionTier: O,
                    trialId: R,
                    postSuccessGuild: m,
                    openInvoiceId: L,
                    applicationId: g,
                    referralTrialOfferId: U,
                    giftRecipient: M,
                    returnRef: D
                } = null != e ? e : {}, v = !1, P = (0, r.v4)();
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
                            loadId: P,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: C,
                            giftMessage: A,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                r(), null == I || I(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                v = !0, null == f || f(), !C && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: S,
                            analyticsObject: h,
                            analyticsLocation: N,
                            analyticsSourceLocation: p,
                            trialId: R,
                            postSuccessGuild: m,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: g,
                            referralTrialOfferId: U,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : h,
                            source: p,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != R,
                            application_id: g,
                            location_stack: S
                        }), (0, o.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == I || I(v), v && (!C && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return r
                },
                default: function() {
                    return f
                }
            });
            var i, r, l = n("759843"),
                o = n("872717"),
                s = n("913144"),
                a = n("532760"),
                u = n("271938"),
                d = n("730622"),
                c = n("840707"),
                E = n("482931"),
                _ = n("49111"),
                I = n("782340");
            (i = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required", i.USER_SETTINGS_UPDATE = "user_settings_update", i.GUILD_PHONE_REQUIRED = "guild_phone_required", i.MFA_PHONE_UPDATE = "mfa_phone_update", i.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    s.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => a.default.getCurrentConfig({
                    location: "81427d_1"
                }, {
                    autoTrackExposure: !1
                }).enabled ? (0, d.default)(n => o.default.delete({
                    url: _.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: I.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: I.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : o.default.delete({
                    url: _.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), o.default.post({
                        url: _.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => o.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => o.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => o.default.post({
                    url: _.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => o.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => o.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => o.default.post({
                    url: _.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = {},
                        o = u.default.getFingerprint();
                    null != o && "" !== o && (r["X-Fingerprint"] = o), i && (r.authorization = "");
                    let a = await c.default.post({
                        url: _.Endpoints.VERIFY_PHONE,
                        headers: r,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && s.default.dispatch({
                        type: "MODAL_POP",
                        key: E.PHONE_VERIFICATION_MODAL_KEY
                    }), a.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return i
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return r
                }
            });
            let i = "PHONE_VERIFICATION_MODAL_KEY",
                r = 6
        },
        189613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("448105"),
                a = n.n(s),
                u = n("917351"),
                d = n.n(u),
                c = n("592861"),
                E = n("77078"),
                _ = n("988415"),
                I = n("145131"),
                f = n("782340"),
                T = n("803853"),
                S = n("212029");
            class h extends r.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = c.default.flatMap((e, t) => {
                        let {
                            alpha2: n,
                            phoneCountryCodes: r,
                            name: l
                        } = e, o = (0, _.getI18NCountryName)(n);
                        return r.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: l,
                            translatedName: o,
                            countryData: {
                                name: l,
                                alpha2: n,
                                code: e
                            },
                            children: (0, i.jsxs)(I.default, {
                                className: T.countryItem,
                                justify: I.default.Justify.CENTER,
                                align: I.default.Align.CENTER,
                                children: [(0, i.jsx)(I.default.Child, {
                                    className: T.countryName,
                                    children: o
                                }), (0, i.jsx)(I.default.Child, {
                                    className: T.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), n = d(t).filter(t => 0 === e.length || a(e.toLowerCase(), t.name.toLowerCase()) || a(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, r.createElement)(E.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === n.length ? (0, i.jsx)(E.PopoutList.Empty, {
                        children: f.default.Messages.NONE
                    }) : (0, i.jsx)(E.ScrollerAuto, {
                        className: T.phoneFieldScroller,
                        children: n
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsxs)(E.PopoutList, {
                        className: o(T.phoneFieldPopout, S.elevationBorderLow, e),
                        children: [(0, i.jsx)(E.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: f.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, i.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, n;
                        null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                l = n("880731");

            function o(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, o = (0, r.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return o ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("526887"),
                o = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, r.default)([o.default], () => o.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, r, l) => {
                        var o, s;
                        let a = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            u = n(a);
                        e(i, r, u, (null !== (o = null == l ? void 0 : l.count) && void 0 !== o ? o : a.confettiCount) * (null !== (s = null == l ? void 0 : l.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return s
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
                    return o
                },
                setCanPlayWowMoment: function() {
                    return s
                },
                setIsPersistentHelperHidden: function() {
                    return a
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
                o = () => {
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
                a = e => {
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
                    return T
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                o = n("913144"),
                s = n("775433"),
                a = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let I = "nonSubscriber";
            async function f() {
                try {
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    o.default.dispatch({
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
                    404 === e.status ? o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                h(r, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), o = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    h(o, l, t, n)
                }, [o, l, t, n])
            }

            function h(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && f(), i && (!u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = l;
            class s extends i.default.Store {
                initialize() {
                    o = l
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var a = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    o.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    o.premiumLikelihood = t, o.fetched = !0, o.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    o.isFetching = !1
                },
                LOGOUT: function() {
                    o.premiumLikelihood = void 0
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
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return I
                },
                showRemoveBanner: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                o = n("783142"),
                s = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = s.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            o = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
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

            function f(e, t) {
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
                o = n("929423");
            n("424562");
            var s = n("49111"),
                a = n("397336");

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
                    null != t && (0, o.initGuildIdentitySettings)(t, null != d ? d : E), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, u, d, c, E]);
                return _
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var i, r, l = n("773336");
            let o = null;

            function s() {
                return (0, l.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return o
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return a
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
                o = 5,
                s = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let a = {
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
                    return M
                }
            });
            var i, r, l = n("917351"),
                o = n.n(l),
                s = n("446674"),
                a = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                I = n("846325"),
                f = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let S = new Map,
                h = new Map,
                N = new Set,
                p = r.NOT_FETCHED,
                C = r.NOT_FETCHED,
                A = new Set,
                O = new Map,
                R = !1;

            function m(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let L = o.debounce(e => {
                E.default.track(f.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function g(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? N.add(e) : N.delete(e);
                for (let e of N.keys()) null == i[e] && N.delete(e)
            }
            class U extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), g(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(A),
                        localSoundboardMutes: Array.from(N)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(I.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return C === r.FETCHING
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
                    let t = O.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return A.has(e)
                }
                getFavorites() {
                    return A
                }
                isLocalSoundboardMuted(e) {
                    return N.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return R
                }
                hasFetchedAllSounds() {
                    return C === r.FETCHED && p === r.FETCHED
                }
            }
            U.displayName = "SoundboardStore";
            var M = new U(a.default, {
                LOGOUT: function() {
                    S.clear(), h.clear(), O.clear(), R = !1, C = r.NOT_FETCHED, p = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    C = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: m,
                GUILD_SOUNDBOARD_SOUND_UPDATE: m,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let i = S.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), S.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, o = (null !== (n = h.get(r)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = O.get(l)) && void 0 !== i ? i : 0) + 1;
                    h.set(r, o), O.set(l, s), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (R = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = h.get(i)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = O.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? h.delete(i) : h.set(i, l), o <= 0 ? O.delete(r) : O.set(r, o)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), O.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        A = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && g(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(I.DEFAULT_SOUND_GUILD_ID, t), p = r.FETCHED
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
                        S.set(t, n)
                    }), C = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    N.has(t) ? N.delete(t) : N.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), A = new Set(t.favoritedSoundIds), N = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
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
                o = n("719923"),
                s = n("4233"),
                a = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = o.default.canUseStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = s.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
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
                    return h
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                s = n("80507"),
                a = n("374363"),
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
                f = () => {
                    I()
                };

            function T() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class S extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], f), this.syncWith([a.default], T)
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
            S.displayName = "StickersPersistedStore", S.persistKey = "StickersPersistedStoreV2";
            var h = new S(o.default, {
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
                    return w
                }
            });
            var i, r, l = n("102053"),
                o = n("446674"),
                s = n("913144"),
                a = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                I = n("778689"),
                f = n("305961"),
                T = n("161585"),
                S = n("24373"),
                h = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let N = 2,
                p = new Map,
                C = new Map,
                A = null,
                O = [],
                R = null,
                m = !1,
                L = new Map,
                g = (e, t) => {
                    L = new Map(L.set(e, t))
                },
                U = 1e3 * h.Durations.HOUR,
                M = () => {
                    if (0 !== N) return;
                    let e = a.default.database();
                    if (null == e) return;
                    N = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (I.default.isMember(e) && !L.has(e)) {
                                for (let t of n) D(t, !0, f.default.getGuild(e));
                                g(e, n)
                            }
                    }
                },
                D = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    C.set(e.id, e), t && v(e, n)
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == A) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, S.isStandardSticker)(e)) {
                        let t = O.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), A.set(e.id, r)
                    } else if ((0, S.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            o = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && o.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            A.set(e.id, o);
                            return
                        }
                        o.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => o.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), A.set(e.id, o)
                    }
                },
                P = (e, t, n) => {
                    p.set(e.id, e);
                    let i = [...O];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), O = i
                    }(t || n) && e.stickers.forEach(e => D(e))
                },
                y = () => {
                    L.forEach((e, t) => {
                        let n = f.default.getGuild(t);
                        null != n && e.forEach(e => v(e, n))
                    }), O.forEach(e => {
                        e.stickers.forEach(e => v(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => D(t, !0, e)), g(e.id, e.stickers))
            }
            class b extends o.default.Store {
                initialize() {
                    this.waitFor(a.default, I.default, f.default)
                }
                get isLoaded() {
                    return 0 !== N
                }
                get stickerMetadata() {
                    return M(), null == A && (A = new Map, y()), A
                }
                get hasLoadedStickerPacks() {
                    return null != R && R + U > Date.now()
                }
                get isFetchingStickerPacks() {
                    return m
                }
                getStickerById(e) {
                    return !C.has(e) && M(), C.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return O
                }
                isPremiumPack(e) {
                    return O.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return L
                }
                getAllStickersIterator() {
                    return M(), C.values()
                }
                getAllGuildStickers() {
                    return M(), L
                }
                getStickersByGuildId(e) {
                    return M(), L.get(e)
                }
            }
            b.displayName = "StickersStore";
            var w = new b(s.default, {
                BACKGROUND_SYNC: () => {
                    A = null, C = new Map, L = new Map, N = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    A = null, C = new Map, L = new Map, t.forEach(G), N = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (G(t), 1 === N && null == t.stickers && null != t.stickerUpdates && (N = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = L.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != A && A.delete(e.id), C.delete(e.id)
                    }), L.delete(n.id), L = new Map(L)
                },
                LOGOUT: () => {
                    N = 0, O = [], C.clear(), p.clear(), A = null, L.clear(), L = new Map(L), m = !1, R = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    m = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), R = Date.now(), m = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    P(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => D(e)), g(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = L.get(i)) && void 0 !== t ? t : [];
                    g(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), D(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    D(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = C.get(e.id);
                        return null != n && (0, S.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = L.get(n)) && void 0 !== t ? t : [], o = l.filter(e => null == i.find(t => t.id === e.id));
                    o.forEach(e => {
                        C.delete(e.id), null != A && A.delete(e.id)
                    });
                    let s = i.map(e => r(e));
                    s.forEach(e => D(e)), g(n, s)
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
                    return f
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
                    return N
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return A
                },
                setTryItOutBanner: function() {
                    return O
                },
                setTryItOutThemeColors: function() {
                    return R
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                o = n("884351"),
                s = n("845579"),
                a = n("697218"),
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
                let c = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let E = s.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = o.default.parse(void 0, e.bio).content);
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

            function f() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function N(e) {
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

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("54239"),
                l = n("49111");

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        892313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("49111"),
                o = n("782340");
            let {
                CAPTCHA: s,
                EMAIL: a,
                PHONE: u,
                REVERIFY_EMAIL: d,
                REVERIFY_PHONE: c
            } = l.VerificationTypes, E = {
                [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [a],
                [l.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
                [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
                [l.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [c],
                [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, u],
                [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
                [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, c],
                [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, c],
                [l.UserRequiredActions.REQUIRE_CAPTCHA]: [s],
                [l.UserRequiredActions.AGREEMENTS]: []
            };
            var _ = {
                isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === l.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
                isEmailReverification: e => e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
                getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : E[e],
                getButtonTitle(e) {
                    switch (e) {
                        case l.VerificationTypes.EMAIL:
                            return o.default.Messages.VERIFY_BY_EMAIL;
                        case l.VerificationTypes.PHONE:
                            return o.default.Messages.START_PHONE_VERIFICATION_BUTTON;
                        case l.VerificationTypes.REVERIFY_EMAIL:
                            return o.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
                        case l.VerificationTypes.REVERIFY_PHONE:
                            return o.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
                        default:
                            return o.default.Messages.START_VERIFICATION_BUTTON
                    }
                },
                areVerificationTypesEqual: (e, t) => r.isEqual(e, t)
            }
        },
        601745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                o = n("583227"),
                s = n("599417"),
                a = n("878720"),
                u = n("330387"),
                d = n("697218"),
                c = n("419522"),
                E = n("892313"),
                _ = n("782340"),
                I = r.forwardRef(function(e, t) {
                    let {
                        onAddedPhone: n,
                        onClose: I,
                        transitionState: f,
                        reason: T
                    } = e, S = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), h = (0, l.useStateFromStores)([u.default], () => u.default.getAction()), [N, p] = r.useState(null), [C, A] = r.useState(null), [O, R] = r.useState(null), [m, L] = r.useState(!1), g = r.useCallback(async e => {
                        L(!0);
                        try {
                            E.default.isPhoneReverification(S, h) ? await a.default.beginReverifyPhone(e, T) : await a.default.beginAddPhone(e, T), R(null), p(e)
                        } catch (e) {
                            R(new s.default(e))
                        }
                        L(!1)
                    }, [S, T, h]), U = r.useCallback(async e => {
                        if (null != N && null != S) {
                            L(!0);
                            try {
                                let {
                                    token: t
                                } = await a.default.verifyPhone(N, e);
                                R(null), A(t)
                            } catch (e) {
                                R(new s.default(e))
                            }
                            L(!1)
                        }
                    }, [S, N]), M = r.useCallback(async e => {
                        null != C && (E.default.isPhoneReverification(S, h) ? await a.default.reverifyPhone(C, e, T) : await a.default.addPhone(C, e, T), null == n || n(), I())
                    }, [n, I, C, T, S, h]);
                    return null != C ? (0, i.jsx)(o.default, {
                        onClose: I,
                        transitionState: f,
                        title: _.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
                        handleSubmit: M
                    }) : (0, i.jsx)(c.default, {
                        onClose: I,
                        transitionState: f,
                        error: null == O ? void 0 : O.getAnyErrorMessage(),
                        working: m,
                        validPhone: null != N,
                        onAddPhone: g,
                        onVerifyPhone: U
                    })
                })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, l, o;
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
                    return a
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
            }), (l = i || (i = {}))[l.BACKGROUND = 0] = "BACKGROUND", (o = r || (r = {}))[o.OPTION_1 = 0] = "OPTION_1", o[o.OPTION_2 = 1] = "OPTION_2", o[o.OPTION_3 = 2] = "OPTION_3", o[o.OPTION_4 = 3] = "OPTION_4", o[o.OPTION_7 = 7] = "OPTION_7", o[o.OPTION_8 = 8] = "OPTION_8", o[o.OPTION_9 = 9] = "OPTION_9", o[o.OPTION_10 = 10] = "OPTION_10";
            let s = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                a = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
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
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                o = n("376556"),
                s = n("450205"),
                a = n("813006"),
                u = n("49111");
            let d = new Set([u.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                _ = [],
                I = {},
                f = {},
                T = e => {
                    E = e.filter(e => !d.has(e.type) && o.default.isSupported(e.type)), _ = e.filter(e => d.has(e.type)), c = !1
                };
            class S extends i.default.Store {
                isJoining(e) {
                    return I[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return f[e] || !1
                }
            }
            S.displayName = "ConnectedAccountsStore";
            var h = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    I[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                o = n("49111");
            let s = {},
                a = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = s[e],
                    a = null != r ? {
                        state: o.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), s = {
                    ...s,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = o.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = o.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function o() {
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
            var a = new s(r.default, {
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
                LAYER_POP_ALL: o,
                LOGOUT: o,
                NOTIFICATION_CLICK: o
            })
        },
        330387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = null;
            class o extends i.default.Store {
                hasAction() {
                    return null != l
                }
                getAction() {
                    return l
                }
            }

            function s(e) {
                l = e.requiredAction
            }
            o.displayName = "UserRequiredActionStore";
            var a = new o(r.default, {
                CONNECTION_OPEN: s,
                USER_REQUIRED_ACTION_UPDATE: s
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                s = n("697218"),
                a = n("49111");
            let u = a.FormStates.CLOSED,
                d = null,
                c = null,
                E = {},
                _ = {},
                I = {},
                f = null,
                T = null,
                S = !1,
                h = !1,
                N = null,
                p = null,
                C = null,
                A = [],
                O = null,
                R = null;

            function m(e) {
                var t, n, i, r, l, o;
                let d = s.default.getCurrentUser();
                if (null == d) return L();
                c = null !== (t = e.section) && void 0 !== t ? t : c, O = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (E[c] = e.subsection), null != e.scrollPosition && null != c && (_[c] = e.scrollPosition), h = !!e.openWithoutBackstack, u = a.FormStates.OPEN, I = {}, T = {
                    ...f = {
                        [a.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, C = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, A = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], R = null !== (o = e.impressionSource) && void 0 !== o ? o : null
            }

            function L() {
                u = a.FormStates.CLOSED, S = !1, f = null, O = null, T = null, d = null, c = null, E = {}, _ = {}, p = null, C = null, A = [], R = null
            }

            function g() {
                u = a.FormStates.OPEN, I = {}
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != T && null != f && (!!this.isOpen() || N === a.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(T, f)
                }
                isOpen() {
                    return S
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? E[c] : null
                }
                getScrollPosition() {
                    return null != c ? _[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: u === a.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? E[c] : null,
                        scrollPosition: null != c ? _[c] : null,
                        settings: T,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: C,
                        analyticsLocations: A,
                        initialSection: O,
                        impressionSource: R
                    }
                }
                get onClose() {
                    return p
                }
            }
            U.displayName = "UserSettingsModalStore";
            var M = new U(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    S = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: L,
                LOGOUT: L,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = a.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== a.FormStates.SUBMITTING) return !1;
                    u = a.FormStates.OPEN, c = a.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, C = null, A = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != c && delete _[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == T && (T = {});
                    let n = T[a.UserSettingsSections.ACCOUNT];
                    T[a.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: g,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    g(), null != e && (T = {
                        ...f = {
                            [a.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return N = e.tab, null == c && N === a.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                s = n("816454");
            let a = new Map;

            function u(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
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
                o = n("414055"),
                s = n("12287"),
                a = n("988268"),
                u = n("782340"),
                d = n("647431");
            let c = e => {
                let t, {
                        invertColor: n = !1,
                        type: r = a.BotTagTypes.BOT,
                        className: c,
                        verified: E,
                        hideIcon: _ = !1,
                        useRemSizes: I = !1,
                        children: f = []
                    } = e,
                    T = null,
                    S = u.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (r) {
                    case a.BotTagTypes.SYSTEM_DM:
                    case a.BotTagTypes.OFFICIAL:
                        E = !0, S = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, T = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case a.BotTagTypes.SERVER:
                        T = u.default.Messages.BOT_TAG_SERVER;
                        break;
                    case a.BotTagTypes.ORIGINAL_POSTER:
                        T = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case a.BotTagTypes.STAFF_ONLY_DM:
                        T = u.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case a.BotTagTypes.AI:
                        E = !0, S = u.default.Messages.AI_GENERATED_TOOLTIP, T = u.default.Messages.AI_TAG;
                        break;
                    case a.BotTagTypes.REMIX:
                        E = !1, T = u.default.Messages.REMIXING_TAG;
                        break;
                    case a.BotTagTypes.BOT:
                    default:
                        T = u.default.Messages.BOT_TAG_BOT
                }
                let h = r === a.BotTagTypes.ORIGINAL_POSTER,
                    N = r === a.BotTagTypes.REMIX,
                    p = null;
                E && (p = (0, i.jsx)(o.Tooltip, {
                    text: S,
                    align: "center",
                    position: "top",
                    children: e => (0, i.jsx)(s.default, {
                        ...e,
                        className: d.botTagVerified
                    })
                })), t = r === a.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
                let C = e => (0, i.jsxs)("span", {
                    ...e,
                    className: l(c, t, I ? d.rem : d.px, {
                        [d.botTagOP]: h,
                        [d.botTagRemix]: N
                    }),
                    children: [_ ? null : p, f, (0, i.jsx)("span", {
                        className: d.botText,
                        children: T
                    })]
                });
                switch (r) {
                    case a.BotTagTypes.REMIX:
                        return (0, i.jsx)(o.Tooltip, {
                            text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => C(e)
                        });
                    case a.BotTagTypes.ORIGINAL_POSTER:
                        return (0, i.jsx)(o.Tooltip, {
                            text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => C(e)
                        });
                    default:
                        return C()
                }
            };
            c.Types = a.BotTagTypes;
            var E = c
        },
        794538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("145131"),
                a = n("616389");
            class u extends r.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: o(a.input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                }
                focus() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                }
                blur() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                }
                constructor(...e) {
                    super(...e), this.setCodeBlockRef = e => {
                        this._codeBlockRef = e
                    }, this.handleKeyDown = e => {
                        let t = 8 === e.which || 37 === e.which || 39 === e.which,
                            n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !n && e.preventDefault();
                        let {
                            onKeyDown: i
                        } = this.props;
                        null == i || i(e)
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            u.defaultProps = {
                autoFocus: !1
            };
            class d extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        inputClassName: t
                    } = this.props, {
                        codes: n
                    } = this.state, r = [];
                    for (let e = 0; e < n.length; e++) e === n.length / 2 && r.push((0, i.jsx)("div", {
                        className: a.spacer
                    }, "spacer")), r.push((0, i.jsx)(u, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: n[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, i.jsx)(s.default, {
                        align: s.default.Align.CENTER,
                        justify: s.default.Justify.CENTER,
                        className: e,
                        children: r
                    })
                }
                setCodeBlockRef(e, t) {
                    this._codeBlockRefs[e] = t
                }
                handleChange(e, t) {
                    this.state.codes[e] = t;
                    let n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        let e = this._codeBlockRefs[n];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: n
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        let t = e - 1;
                        n[t] = "";
                        let i = this._codeBlockRefs[t];
                        null == i || i.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                }
                submit(e) {
                    let {
                        onSubmit: t
                    } = this.props;
                    null == t || t(e)
                }
                constructor(e) {
                    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
                        codes: Array(e.count)
                    }
                }
            }
            d.defaultProps = {
                count: 6
            };
            var c = d
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("77078"),
                a = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: d,
                    ...c
                } = e, E = r.Children.only(t), _ = (0, s.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: o(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...c,
                        className: o(d, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: o(u.childContainer, {
                            [u.redesignIconChildContainer]: _
                        }),
                        children: E
                    })]
                })
            }
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
                o = n("79798"),
                s = n("988268"),
                a = n("888770"),
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
                        style: f,
                        useRemSizes: T = !1,
                        usernameIcon: S
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(u, a.nameTag),
                        style: f,
                        children: [(0, i.jsxs)("span", {
                            className: l(a.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [S, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(o.default, {
                            type: d,
                            invertColor: r,
                            className: l(_, a.bot),
                            verified: I,
                            useRemSizes: T
                        }) : null]
                    })
                }
        },
        794851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("592861"),
                a = n("77078"),
                u = n("189613"),
                d = n("145131"),
                c = n("461380"),
                E = n("782340"),
                _ = n("323299"),
                I = n("212029"),
                f = n("926622");
            class T extends r.PureComponent {
                render() {
                    let {
                        countryCode: e,
                        phone: t,
                        open: n
                    } = this.state, {
                        className: r,
                        submitting: l
                    } = this.props, [, s] = e.split("+");
                    return (0, i.jsxs)(d.default, {
                        className: o(_.phoneField, I.elevationLow, r),
                        align: d.default.Align.CENTER,
                        grow: 0,
                        children: [(0, i.jsxs)(a.Button, {
                            size: a.ButtonSizes.SMALL,
                            className: _.countryButton,
                            color: a.ButtonColors.PRIMARY,
                            innerClassName: _.countryButtonInner,
                            onClick: this.handleTogglePopout,
                            children: [(0, i.jsxs)(d.default, {
                                className: o(_.countryCodeContainer, f.marginReset),
                                justify: d.default.Justify.CENTER,
                                children: [(0, i.jsx)("div", {
                                    className: _.plusSign,
                                    children: "+"
                                }), (0, i.jsx)("div", {
                                    className: _.countryCode,
                                    children: s
                                })]
                            }), (0, i.jsx)(c.default, {
                                foreground: _.phoneFieldExpand,
                                expanded: n,
                                width: 16,
                                height: 16
                            })]
                        }), (0, i.jsx)("input", {
                            "aria-label": E.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                            className: _.inputField,
                            value: t,
                            onChange: this.handleChange,
                            onKeyPress: this.handleKeyPress,
                            autoFocus: !0
                        }), (0, i.jsx)(a.Button, {
                            className: _.sendButton,
                            size: a.ButtonSizes.SMALL,
                            submitting: l,
                            onClick: this.handleSubmit,
                            children: E.default.Messages.SEND
                        }), n ? (0, i.jsx)(u.default, {
                            onClick: this.handleClick
                        }) : null]
                    })
                }
                closePopout() {
                    this.state.open && this.setState({
                        open: !1
                    })
                }
                constructor(e) {
                    super(e), this.handleChange = e => {
                        this.closePopout(), this.setState({
                            phone: e.currentTarget.value
                        })
                    }, this.handleKeyPress = e => {
                        this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
                    }, this.handleSubmit = () => {
                        let {
                            onSubmit: e,
                            submitting: t
                        } = this.props, {
                            countryCode: n,
                            phone: i
                        } = this.state;
                        if (!t) null == e || e("".concat(n).concat(i))
                    }, this.handleTogglePopout = () => {
                        this.setState({
                            open: !this.state.open
                        })
                    }, this.handleClick = e => {
                        let [t, n] = e.code.split(" ");
                        this.setState({
                            open: !1,
                            countryCode: t,
                            phone: null != n ? n : ""
                        })
                    };
                    let t = s.default.find(e => "United States" === e.name),
                        [n, i] = t.phoneCountryCode.split(" ");
                    this.state = {
                        countryCode: n,
                        phone: null != i ? i : "",
                        open: !1
                    }
                }
            }
            var S = T
        },
        419522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("748820"),
                a = n("759843"),
                u = n("77078"),
                d = n("794538"),
                c = n("145131"),
                E = n("794851"),
                _ = n("782340"),
                I = n("922833"),
                f = n("173791"),
                T = n("926622");
            class S extends r.PureComponent {
                async componentDidMount() {
                    let [e, {
                        default: t
                    }] = await Promise.all([n.el("432201").then(n.t.bind(n, "432201", 19)), n.el("230265").then(n.t.bind(n, "230265", 21))]);
                    this._animItem = t.loadAnimation({
                        container: this._lottieRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !1,
                        animationData: e
                    })
                }
                componentWillUnmount() {
                    null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
                }
                render() {
                    let e, t, n;
                    let {
                        error: r,
                        working: l,
                        transitionState: s,
                        validPhone: S
                    } = this.props;
                    return e = null != r && "" !== r ? (0, i.jsx)("div", {
                        className: o(I.description, I.error, T.marginBottom20),
                        children: r
                    }) : S ? (0, i.jsx)("div", {
                        className: o(I.description, T.marginBottom20),
                        children: _.default.Messages.VERIFICATION_PHONE_DESCRIPTION
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: o(I.description, T.marginBottom20),
                            children: _.default.Messages.ENTER_PHONE_DESCRIPTION
                        }), (0, i.jsx)("div", {
                            className: o(I.description, T.marginBottom20),
                            children: _.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
                        })]
                    }), t = S ? (0, i.jsxs)(c.default, {
                        className: I.field,
                        direction: c.default.Direction.VERTICAL,
                        align: c.default.Align.CENTER,
                        children: [(0, i.jsx)(d.default, {
                            onSubmit: this.handleVerifyPhone
                        }), (0, i.jsx)(u.Button, {
                            className: T.marginTop8,
                            size: u.ButtonSizes.SMALL,
                            look: u.ButtonLooks.LINK,
                            color: u.ButtonColors.PRIMARY,
                            onClick: this.handleResendCode,
                            children: _.default.Messages.RESEND_CODE
                        })]
                    }) : (0, i.jsx)(E.default, {
                        className: I.field,
                        onSubmit: this.handleAddPhone,
                        submitting: l
                    }), n = S ? _.default.Messages.VERIFICATION_PHONE_TITLE : _.default.Messages.ENTER_PHONE_TITLE, (0, i.jsxs)(u.ModalRoot, {
                        impression: {
                            impressionName: a.ImpressionNames.USER_VERIFY_PHONE
                        },
                        transitionState: s,
                        className: o(I.phoneVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, T.marginTop60),
                        "aria-labelledby": this.headerId,
                        children: [(0, i.jsx)("div", {
                            className: I.animationContainer,
                            ref: this.setLottieRef
                        }), (0, i.jsx)("div", {
                            className: o(I.title, T.marginBottom8),
                            id: this.headerId,
                            children: n
                        }), e, t]
                    })
                }
                constructor(e) {
                    super(e), this._animItem = null, this.headerId = (0, s.v4)(), this.setLottieRef = e => {
                        this._lottieRef = e
                    }, this.handleAddPhone = e => {
                        this.state.animated || null == this._animItem ? this.setState({
                            phone: e
                        }) : (this._animItem.play(), this.setState({
                            animated: !0,
                            phone: e
                        }));
                        let {
                            onAddPhone: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleVerifyPhone = e => {
                        let {
                            onVerifyPhone: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleResendCode = () => {
                        let {
                            onAddPhone: e
                        } = this.props;
                        null == e || e(this.state.phone)
                    }, this.state = {
                        animated: !1,
                        phone: ""
                    }
                }
            }
            var h = S
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
            var i, r, l = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
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
                f = {
                    [r.DEFAULT]: _.shineInnerDefault,
                    [r.SMALL]: _.shineInnerSmall
                };
            class T extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: a(_.shineContainer, e, {
                            [_.shinePaused]: n
                        }),
                        children: (0, l.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: I[t],
                            children: (0, l.jsx)("div", {
                                className: f[t]
                            })
                        })
                    })
                }
            }
            T.defaultProps = {
                shineSize: r.DEFAULT
            };
            let S = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: E = r.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: f,
                    onlyShineOnHover: S,
                    ...h
                } = e, N = o.createRef(), p = (0, c.default)(N), C = !i && !s && !0 !== u && (!S || p);
                return (0, l.jsxs)(d.Button, {
                    buttonRef: N,
                    ...h,
                    className: a(_.shinyButton, n),
                    disabled: i,
                    submitting: s,
                    children: [t, C ? (0, l.jsx)(T, {
                        shinePaused: I,
                        className: a(_.buttonShine, S ? _.onlyShineOnHover : void 0, f),
                        shineSize: E
                    }) : null]
                })
            };
            S.ShineSizes = r;
            var h = S
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return a
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, l.useLazyValue)(() => o()),
                a = e => {
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
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                o = n("384737"),
                s = n("448052"),
                a = n("748802"),
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
                        transition: f = E.transition,
                        className: T,
                        foreground: S,
                        expanded: h,
                        ...N
                    } = e, {
                        enabled: p
                    } = (0, d.useRedesignIconContext)(), C = t;
                    if (!0 === h ? C = _.DOWN : !1 === h && (C = _.RIGHT), p) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: o.ChevronSmallDownIcon,
                            [_.LEFT]: s.ChevronSmallLeftIcon,
                            [_.RIGHT]: a.ChevronSmallRightIcon
                        } [C];
                        return (0, i.jsx)(e, {
                            ...N,
                            className: T,
                            width: n,
                            height: r,
                            color: I,
                            colorClass: S
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(T, f, C),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(N),
                        children: (0, i.jsx)("path", {
                            className: S,
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
            var f = I
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("469563"),
                o = n("163725"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foregroundColor: o = r.default.unsafe_rawColors.RED_400.css,
                        foreground: a,
                        background: u,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("rect", {
                            fill: o,
                            className: a,
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
                }, o.EyeSlashIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
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
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                        ...(0, o.default)(s),
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
                o = n("75196"),
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
                        ...(0, o.default)(s),
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
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("753809"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                className: l,
                                fill: r,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, i.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, l.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        className: l,
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(a),
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.LockIcon)
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
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
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
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: o
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
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
                }, l.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
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
                }, l.StageIcon)
        },
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("276825"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return s
                }
            });
            var i = n("281071"),
                r = n("773336"),
                l = n("50885");
            let o = (() => {
                if (r.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!o && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
            }
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return f
                },
                getPaletteForAvatar: function() {
                    return T
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return N
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return C
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                o = n.n(l),
                s = n("48648"),
                a = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), o);
                    let s = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * s), l), n = Math.max(Math.round(n * s), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let o = 1;
                return (n = Math.round(n * l)) > r && (o = r / n), Math.min(l * o, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function f(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return I;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, o);
                let s = r.getImageData(0, 0, l, o).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, o, s, a, u; r < t; r += n) o = e[(l = 4 * r) + 0], s = e[l + 1], a = e[l + 2], (void 0 === (u = e[l + 3]) || u >= 125) && !(o > 250 && s > 250 && a > 250) && i.push([o, s, a]);
                        return i
                    }(s, l * o, n),
                    d = a(u, t);
                return "boolean" == typeof d ? I : d.palette()
            }
            let T = e => S(e),
                S = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(f(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function N(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function C(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
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
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
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
                o = n("471671");

            function s() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class o {
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
            let o = (0, r.v4)(),
                s = new Map,
                a = new Map;
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
                        t = a.get(e);
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
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, r.v4)()) : this.elementId = o;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new l.default({
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