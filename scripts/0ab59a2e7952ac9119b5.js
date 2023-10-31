(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31825"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return a
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return r
                },
                clearError: function() {
                    return o
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
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
                    return I
                },
                accountDetailsClose: function() {
                    return C
                },
                disableAccount: function() {
                    return f
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return h
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return S
                },
                setPendingGlobalNameName: function() {
                    return L
                },
                setPendingAvatarDecoration: function() {
                    return O
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return M
                },
                resetAllPending: function() {
                    return U
                },
                resetAndCloseUserProfileForm: function() {
                    return g
                },
                setDisableSubmit: function() {
                    return v
                }
            });
            var l = n("872717"),
                i = n("95410"),
                s = n("819855"),
                a = n("913144"),
                r = n("393414"),
                o = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                _ = n("49111"),
                E = n("191349"),
                T = n("782340");

            function I() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function C() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    i = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
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
                    c.default.logoutInternal(), (0, r.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(e) {
                let t = await l.default.patch({
                        url: _.Endpoints.ME,
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
                    email: l,
                    emailToken: s,
                    password: r,
                    avatar: c,
                    avatarDecoration: I,
                    newPassword: C,
                    globalName: f
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let a = {
                        username: t,
                        email: l,
                        email_token: s,
                        password: r,
                        avatar: c,
                        discriminator: n,
                        global_name: f,
                        new_password: C,
                        ...e
                    };
                    null === I && (a.avatar_decoration_id = null), null != I && (a.avatar_decoration_id = I.id, a.avatar_decoration_sku_id = I.skuId);
                    let o = i.default.get(_.DEVICE_TOKEN),
                        u = (0, E.getDevicePushProvider)();
                    null != u && null != o && (a.push_provider = u, a.push_token = o);
                    let d = i.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), p(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function h() {
                return l.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return l.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? s.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : s.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function L(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function O(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function U() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function g() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function v(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("872717"),
                i = n("95410"),
                s = n("913144"),
                a = n("211895"),
                r = n("26092"),
                o = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("49111"),
                _ = n("191349"),
                E = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = r.default.onClose;
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        s.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
                            emailToken: r,
                            password: T,
                            avatar: I,
                            newPassword: C,
                            discriminator: f
                        } = e, {
                            close: p
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: r,
                                    password: T,
                                    avatar: I,
                                    new_password: C,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                s = i.default.get(c.DEVICE_TOKEN),
                                o = (0, _.getDevicePushProvider)();
                            null != o && null != s && (t.push_provider = o, t.push_token = s);
                            let u = i.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => s.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, s.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), s.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != C && s.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: C
                            }), null != T && null != C && s.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), p ? this.close() : this.submitComplete(), e
                        }, e => (s.default.dispatch({
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
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                r = n("817736"),
                o = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                _ = n("845579"),
                E = n("901165"),
                T = n("62843"),
                I = n("315102"),
                C = n("402671"),
                f = n("866190"),
                p = n("115279");
            class A extends i.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: i,
                            shouldAnimate: s,
                            isFocused: a,
                            isInteracting: r,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = p.EMOJI_SIZE_MAP[o];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === i && (!0 === s || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != l) return C.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: s,
                        className: r,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: _,
                        autoplay: E,
                        isInteracting: T,
                        ...I
                    } = this.props, C = this.getSrc();
                    return null == C || "" === C ? (0, l.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: C,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", r, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != _ && "" !== _ ? {
                            "data-id": _
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
            let h = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    s = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let i = l[1];
                            if (e.intersectionRatio >= .7) {
                                var s, a;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
                }

                function r(e) {
                    let l = o.findDOMNode(e);
                    s.unobserve(l);
                    let i = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends i.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: s,
                                ...a
                            } = this.props;
                        return (0, l.jsx)(T.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...a,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                            })
                        })
                    }
                }
            }(A);

            function N(e) {
                let t = _.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([E.default], () => E.default.isInstanceFocused()) : (0, f.useIsWindowFocused)();
                return (0, l.jsx)(h, {
                    ...e,
                    ...n,
                    isFocused: i
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: E,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: C
                    } = this.props, {
                        code: f,
                        errorMessage: p,
                        retrySuccess: A
                    } = this.state, h = i.Children.count(s) > 0 ? (0, l.jsx)(r.Card, {
                        type: r.Card.Types.WARNING,
                        className: u.card,
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, N = null != I ? (0, l.jsxs)(r.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(r.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(r.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, S = A ? (0, l.jsx)(r.Card, {
                        type: r.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: C
                        })
                    }) : null;
                    return (0, l.jsx)(r.ModalRoot, {
                        transitionState: E,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(r.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(r.ModalContent, {
                                children: [null != T ? (0, l.jsx)(r.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: T
                                }) : null, h, S, (0, l.jsxs)(r.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, l.jsx)(r.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: f,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(r.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : p
                                    }) : null, N]
                                })]
                            }), (0, l.jsxs)(r.ModalFooter, {
                                children: [(0, l.jsx)(r.Button, {
                                    type: "submit",
                                    disabled: c || 0 === f.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, l.jsx)(r.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: r
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: r = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: r
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: r
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: r
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 1 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 0 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M14.707 10.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        className: r
                    })]
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm8 0V6a3 3 0 1 0-6 0v2h6Zm-2 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: r
                    })]
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: r
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: r
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: r
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
            });
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
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("704744");
            var l = n("913144");
            class i {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        l.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        l.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), (l = i || (i = {})).POPOUT_WINDOW = "popout window", l.OVERLAY = "overlay", l.NOTICE = "notice", l.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", l.BADGE = "badge", l.USER_SETTINGS = "user settings", l.USER_SETTINGS_MENU = "user settings menu", l.ACCOUNT = "account", l.TEXT_AND_IMAGES = "text and images", l.GUILD_SETTINGS = "guild settings", l.OVERVIEW = "overview", l.STICKERS = "stickers", l.VANITY_URL = "vanity url", l.PREMIUM_MARKETING = "premium marketing", l.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", l.PREMIUM_PAYMENT_MODAL = "premium payment modal", l.PREMIUM_UPSELL_ALERT = "premium upsell alert", l.PREMIUM_UPSELL_MODAL = "premium upsell modal", l.PREMIUM_SETTINGS = "premium settings", l.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", l.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", l.CHANNEL_CALL = "channel call", l.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", l.RTC_PANEL = "rtc panel", l.SOUNDBOARD_BUTTON = "soundboard button", l.SOUNDBOARD_POPOUT = "soundboard popout", l.SOUNDBOARD_WHEEL = "soundboard wheel", l.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", l.GIFT_BUTTON = "gift button", l.EXPRESSION_SUGGESTIONS = "expression suggestions", l.EMOJI_PICKER = "emoji picker", l.STICKER_PICKER = "sticker picker", l.STICKER_POPOUT = "sticker popout", l.PREMIUM_UPSELL = "premium upsell", l.EMPTY_STATE = "empty state", l.SUBSCRIPTION_DETAILS = "subscription details", l.SUBSCRIPTION_HEADER = "subscription header", l.ACCOUNT_CREDIT_BANNER = "account credit banner", l.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", l.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", l.STREAM_QUALITY_INDICATOR = "stream quality indicator", l.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", l.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", l.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", l.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", l.RPC = "rpc", l.BILLING_STANDALONE = "billing standalone", l.GUILD_CHANNEL_LIST = "guild channel list", l.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", l.STICKER_MESSAGE = "sticker message", l.CHANNEL_TEXT_AREA = "channel text area", l.HEADER_BAR = "header bar", l.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", l.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", l.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", l.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", l.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", l.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", l.GUILD_HEADER = "guild header", l.GUILD_BANNER = "guild banner", l.GUILD_BANNER_NOTICE = "guild banner notice", l.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", l.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", l.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", l.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", l.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", l.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", l.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", l.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", l.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", l.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", l.GUILDS_LIST = "guilds list", l.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", l.ACTIVITY_DIRECTORY = "activity directory", l.ACTIVITY_TILE = "activity tile", l.ACTIVITY_UPSELL = "activity upsell", l.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", l.INSTANT_INVITE_MODAL = "instant invite modal", l.IMAGE_CROPPING_MODAL = "image cropping modal", l.GIF_PICKER = "gif picker", l.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", l.INVITE_MODAL = "invite modal", l.INVITE_EMBED = "invite embed", l.NEW_GUILD_BUTTON = "new guild button", l.CHARACTER_COUNT = "character count", l.DM_CHANNEL = "dm channel", l.GUILD_CHANNEL = "guild channel", l.FORUM_CHANNEL = "forum channel", l.FILE_UPLOAD_POPOUT = "file upload popout", l.EMOJI = "emoji", l.PROFILE = "profile", l.PROFILE_MODAL = "profile modal", l.PROFILE_POPOUT = "profile popout", l.GUILD_PROFILE = "guild profile", l.EDIT_AVATAR = "edit avatar", l.EDIT_BANNER = "edit banner", l.CHAT_INPUT = "chat input", l.CREATE_THREAD = "create thread", l.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", l.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", l.SELECT_IMAGE_MODAL = "select image modal", l.VIDEO_BACKGROUND_OPTIONS = "video background options", l.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", l.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", l.CAMERA_PREVIEW = "camera preview", l.HOME_PAGE_PREMIUM_TAB = "home page premium tab", l.HOME_PAGE_SHOP_TAB = "home page shop tab", l.PREMIUM_MARKETING_SURFACE = "premium marketing surface", l.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", l.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", l.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", l.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", l.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", l.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", l.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", l.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", l.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", l.PREMIUM_MARKETING_FEATURE = "premium marketing feature", l.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", l.PREMIUM_MARKETING_FOOTER = "premium marketing footer", l.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", l.CHANNEL_CALL_ACTION_BAR = "channel call action bar", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", l.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", l.VOICE_CONTROL_TRAY = "voice control tray", l.ACTIVE_NOW_COLUMN = "active now column", l.CONTEXT_MENU = "context menu", l.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", l.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", l.CHANNEL_CATEGORY_MENU = "channel category menu", l.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", l.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", l.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", l.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", l.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", l.CHANNEL_TITLE_MENU = "channel title menu", l.GROUP_DM_MENU = "group dm menu", l.AUDIT_LOG_USER_MENU = "audit log user menu", l.BANNED_USER_MENU = "banned user menu", l.DM_USER_MENU = "dm user menu", l.GROUP_DM_USER_MENU = "group dm user menu", l.GUILD_CHANNEL_USER_MENU = "guild channel user menu", l.GUILD_MODERATION_USER_MENU = "guild moderation user menu", l.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", l.GUILD_SETTINGS_USER_MENU = "guild settings user menu", l.GUILD_USER_MENU = "guild user menu", l.THREAD_USER_MENU = "thread user menu", l.USER_GENERIC_MENU = "user generic menu", l.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", l.VOICE_ACTION_SHEET = "voice action sheet", l.FOCUSED_VOICE_CONTROLS = "focused voice controls", l.MASKED_LINK = "masked link", l.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", l.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", l.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", l.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", l.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", l.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", l.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", l.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", l.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", l.ACCOUNT_PROFILE_POPOUT = "account profile popout", l.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", l.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", l.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", l.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", l.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", l.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", l.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", l.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", l.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", l.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", l.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", l.STAGE_VIDEO_LIMIT = "stage video limit", l.ACTIVITIES_MINI_SHELF = "activities mini shelf", l.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", l.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", l.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", l.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", l.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", l.APP_ICON_EDITOR = "app icon editor", l.CLIENT_THEMES_EDITOR = "client themes editor", l.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", l.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", l.SHARE_NITRO_EMBED = "share nitro embed", l.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", l.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", l.REFERRAL_TRIALS_POPOUT = "referral trials popout", l.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", l.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", l.ACTIVITY_BOOKMARK = "activity bookmark", l.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", l.ACTIVITY_DETAIL_PAGE = "activity detail page", l.ACTIVITIES_PAGE = "activities page", l.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", l.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", l.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", l.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", l.ACTIVITIES_HAPPENING_NOW = "activities happening now", l.MEDIA_VIEWER = "media viewer", l.MESSAGE_LONG_PRESS_MENU = "message long press menu", l.COLLECTIBLES_SHOP = "collectibles shop", l.COLLECTIBLES_SHOP_CARD = "collectibles shop card", l.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", l.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", l.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", l.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", l.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", l.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", l.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", l.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", l.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", l.PREMIUM_BILLING_INFO = "premium billing info", l.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", l.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", l.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", l.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", l.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", l.PREMIUM_PLAN_SELECT = "premium_plan_select", l.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", l.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", l.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", l.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", l.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", l.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", l.MEMBER_SAFETY_PAGE = "member safety page", l.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", l.GUILD_MEMBER_MOD_VIEW = "guild member mod view", l.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", l.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", l.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", l.GUILD_SHOP_PAGE = "guild shop page", l.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", l.MESSAGE_REMIX_TAG = "message remix tag", l.MESSAGE_REMIX_BUTTON = "message remix button", l.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", l.CLIPS_SETTINGS = "clips settings", l.CLIPS_GALLERY = "clips gallery", l.CLIPS_GALLERY_ITEM = "clips gallery item", l.CLIPS_EDITOR = "clips editor", l.CLIPS_SHARE_MODAL = "clips share modal", l.CHANNEL_ATTACH_BUTTON = "channel attach button", l.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", l.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", l.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", l.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", l.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", l.GUILD_EVENT_CARD = "guild event card", l.EVENT_SETTINGS = "event settings";
            var l, i, s = i
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var l = n("697218"),
                i = n("315102"),
                s = n("449008"),
                a = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.ChannelTypes.DM:
                        let [r] = e.recipients.map(l.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case a.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("917351"),
                i = n.n(l),
                s = n("446674"),
                a = n("913144"),
                r = n("398604"),
                o = n("813006"),
                u = n("730647");
            let d = !1,
                c = {},
                _ = {},
                E = {},
                T = e => (E[e.guild_scheduled_event.id] = new o.default(e.guild_scheduled_event.guild), _[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class I extends s.default.Store {
                isFetching() {
                    return d
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = _[e]) && void 0 !== t ? t : void 0
                }
            }
            I.displayName = "EventDirectoryStore";
            var C = new I(a.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    d = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    d = !1;
                    let l = i.sortBy([...n], [function(e) {
                            return (0, r.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        s = i.map(l, T);
                    c[t] = s
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    d = !1
                }
            })
        },
        730647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DirectoryEntryTypes: function() {
                    return r
                },
                CreateOrAddGuildSlideTypes: function() {
                    return o
                },
                HubGuildTemplateId: function() {
                    return u
                },
                DirectoryEntryCategories: function() {
                    return d
                },
                getHubCategories: function() {
                    return I
                },
                getHubGuildTemplatesMap: function() {
                    return C
                }
            });
            var l, i, s, a, r, o, u, d, c = n("316693"),
                _ = n("991170"),
                E = n("49111"),
                T = n("782340");
            (l = r || (r = {}))[l.GUILD = 0] = "GUILD", l[l.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (i = o || (o = {})).GUILD_TEMPLATES = "guild-templates", i.CUSTOMIZE_NEW_GUILD = "customize-new-guild", i.CHOOSE_GUILD = "choose-guild", i.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", i.CONFIRMATION = "confirmation", (s = u || (u = {})).CREATE = "CREATE", s.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", s.HUB_STUDY = "HUB_STUDY", s.HUB_CLASS = "HUB_CLASS", s.HUB_SOCIAL = "HUB_SOCIAL", s.HUB_MAJOR = "HUB_MAJOR", s.HUB_DORM = "HUB_DORM", (a = d || (d = {}))[a.ALL = -1] = "ALL", a[a.UNCATEGORIZED = 0] = "UNCATEGORIZED", a[a.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", a[a.CLASS = 2] = "CLASS", a[a.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", a[a.MISC = 5] = "MISC";

            function I(e) {
                return "883060064561299456" === e ? [{
                    value: d.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: d.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: d.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: d.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: d.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: d.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: d.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: d.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function C() {
                return {
                    [u.CREATE]: {
                        id: u.CREATE,
                        code: "2TffvPucqHkN",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [u.HUB_SCHOOL_CLUB]: {
                        id: u.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: _.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: c.default.combine(_.default.DEFAULT, E.Permissions.MANAGE_ROLES, E.Permissions.MANAGE_CHANNELS, E.Permissions.KICK_MEMBERS, E.Permissions.BAN_MEMBERS, E.Permissions.MANAGE_NICKNAMES, E.Permissions.MANAGE_GUILD_EXPRESSIONS, E.Permissions.MANAGE_MESSAGES, E.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_STUDY]: {
                        id: u.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_CLASS]: {
                        id: u.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_SOCIAL]: {
                        id: u.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [u.HUB_MAJOR]: {
                        id: u.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_DORM]: {
                        id: u.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: E.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: E.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: E.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: E.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }
                }
            }
        },
        833843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("249654"),
                a = n("446674"),
                r = n("77078"),
                o = n("922770"),
                u = n("267567"),
                d = n("42203"),
                c = n("476765"),
                _ = n("599110"),
                E = n("686904"),
                T = n("933326"),
                I = n("398604"),
                C = n("152475"),
                f = n("598639"),
                p = n("613767"),
                A = n("93550"),
                h = n("707916"),
                N = n("255050"),
                S = n("644189"),
                L = n("965353"),
                O = n("360538"),
                m = n("403901"),
                R = n("369404"),
                M = n("745049"),
                U = n("49111"),
                g = n("175244");

            function v(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: i,
                    onActionTaken: s,
                    isHub: r,
                    isMember: o,
                    recurrenceId: d
                } = e, c = (0, I.isGuildScheduledEventActive)(t), _ = (0, a.useStateFromStores)([I.default], () => I.default.hasRsvp(t.id, n.id), [n.id, t]), E = (0, C.default)(t), T = (0, a.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), f = (0, p.useIsChannelPublic)(null == i ? void 0 : i.id, t.id), A = (0, R.default)({
                    guild: n,
                    channel: i,
                    guildScheduledEvent: t,
                    isActive: c,
                    rsvped: _,
                    recurrenceId: d,
                    onActionTaken: s
                }), {
                    entity_type: N
                } = t;
                return r ? (0, l.jsx)(S.default, {
                    isActive: c,
                    isUserLurking: T,
                    rsvped: _,
                    isMember: o,
                    isDetailsView: !0,
                    guildName: null == n ? void 0 : n.name,
                    isChannelPublic: f,
                    canInvite: E,
                    ...A
                }) : (0, l.jsx)(h.default, {
                    isActive: c,
                    isUserLurking: T,
                    rsvped: _,
                    isChannelPublic: f,
                    canInvite: E,
                    entityType: N,
                    ...A
                })
            }
            var D = e => {
                var t;
                let {
                    guildScheduledEventId: n,
                    parentGuildId: u,
                    transitionState: C,
                    recurrenceId: p,
                    onClose: h
                } = e, S = (0, a.useStateFromStores)([I.default], () => I.default.getGuildScheduledEvent(n), [n]), R = null == S ? void 0 : S.id, D = null == S ? void 0 : S.guild_id, {
                    guild: P,
                    isMember: G
                } = (0, f.default)(D, R), y = (0, o.default)(u), b = null == S ? void 0 : S.channel_id, x = (0, a.useStateFromStores)([d.default], () => d.default.getChannel(b), [b]), w = (0, c.useUID)(), [V, B] = i.useState(M.EventDetailSections.EVENT_INFO), H = (0, a.useStateFromStoresArray)([I.default], () => Object.values(I.default.getUsersForGuildEvent(R)), [R]), [j, {
                    loading: k,
                    error: F
                }] = (0, E.default)(() => T.default.getGuildEventUsers(null == S ? void 0 : S.id, D));
                i.useEffect(() => {
                    null == S ? h() : _.default.track(U.AnalyticEvents.OPEN_MODAL, {
                        type: M.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: S.guild_id
                    })
                }, [S, h]);
                let Y = i.useRef(null),
                    [W, Z] = i.useState(0);
                if (i.useLayoutEffect(() => {
                        var e, t;
                        Z(null !== (t = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0)
                    }, [Y]), null == S || null == P || !G && !y) return null;
                let K = e => {
                        e !== V && (e === M.EventDetailSections.RSVP_LIST && j(), B(e))
                    },
                    X = null !== (t = null == S ? void 0 : S.user_count) && void 0 !== t ? t : 0,
                    z = null == p && null != S.recurrence_rule ? s.default.fromTimestamp(Math.floor(new Date(S.scheduled_start_time).getTime() / U.Durations.SECOND)) : p;
                return (0, l.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.MEDIUM,
                    transitionState: C,
                    "aria-labelledby": w,
                    className: g.root,
                    children: [(null == S ? void 0 : S.image) != null && (0, l.jsx)(N.default, {
                        source: (0, A.default)(S),
                        className: g.banner
                    }), (0, l.jsx)(L.default, {
                        onClose: h,
                        selectedTab: V,
                        onTabSelected: K,
                        rsvpCount: X,
                        hasBanner: (null == S ? void 0 : S.image) != null,
                        isHub: y
                    }), (0, l.jsx)("div", {
                        className: g.container,
                        children: (0, l.jsx)(r.ModalContent, {
                            className: g.contentContainer,
                            style: {
                                height: W
                            },
                            children: (0, l.jsxs)(r.Slides, {
                                activeSlide: V,
                                width: 600,
                                centered: !1,
                                children: [(0, l.jsx)(r.Slide, {
                                    id: M.EventDetailSections.EVENT_INFO,
                                    children: (0, l.jsx)(O.default, {
                                        guildEvent: S,
                                        guild: P,
                                        channel: x,
                                        headerId: w,
                                        onClose: h,
                                        onClickInterestedCount: () => K(M.EventDetailSections.RSVP_LIST),
                                        isHub: y,
                                        containerRef: Y,
                                        recurrenceId: z
                                    })
                                }), (0, l.jsx)(r.Slide, {
                                    id: M.EventDetailSections.RSVP_LIST,
                                    children: (0, l.jsx)(m.default, {
                                        guildEvent: S,
                                        rsvpUsers: H,
                                        loading: k,
                                        containerHeight: W,
                                        error: F
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)(r.ModalFooter, {
                        className: g.footer,
                        children: (0, l.jsx)(v, {
                            guildEvent: S,
                            isHub: y,
                            isMember: G,
                            guild: P,
                            channel: x,
                            onActionTaken: h,
                            recurrenceId: z
                        })
                    })]
                })
            }
        },
        965353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                r = n("77078"),
                o = n("945330"),
                u = n("745049"),
                d = n("782340"),
                c = n("475267");

            function _(e) {
                let {
                    onClose: t,
                    selectedTab: n,
                    onTabSelected: s,
                    rsvpCount: _,
                    hasBanner: E,
                    isHub: T = !1
                } = e, I = i.useRef(null);
                i.useEffect(() => {
                    var e, t, n;
                    return null === (n = I.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
                }, []);
                let C = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: _
                    }),
                    f = [(0, l.jsx)(r.TabBar.Item, {
                        className: c.tabBarItem,
                        id: u.EventDetailSections.EVENT_INFO,
                        children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                return !T && f.push((0, l.jsx)(r.TabBar.Item, {
                    className: c.tabBarItem,
                    id: u.EventDetailSections.RSVP_LIST,
                    children: C
                }, "is-hub")), (0, l.jsxs)("div", {
                    className: c.container,
                    children: [(0, l.jsx)(r.Clickable, {
                        ref: I,
                        onClick: t,
                        className: c.closeButton,
                        "aria-label": d.default.Messages.CLOSE,
                        children: (0, l.jsx)(o.default, {
                            className: a(c.closeIcon, E && c.closeIconBanner)
                        })
                    }), (0, l.jsx)(r.TabBar, {
                        className: c.tabBar,
                        "aria-label": d.default.Messages.OPTIONS,
                        selectedItem: n,
                        type: "top",
                        onItemSelect: s,
                        children: f
                    })]
                })
            }
        },
        360538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("970728"),
                d = n("401642"),
                c = n("26989"),
                _ = n("305961"),
                E = n("580357"),
                T = n("109024"),
                I = n("155207"),
                C = n("158998"),
                f = n("933326"),
                p = n("882550"),
                A = n("466148"),
                h = n("909151"),
                N = n("393745"),
                S = n("586403"),
                L = n("49111"),
                O = n("782340"),
                m = n("171632");

            function R(e) {
                var t;
                let {
                    creator: n,
                    guildId: i
                } = e, s = (0, r.useStateFromStores)([c.default], () => c.default.getMember(i, n.id), [n, i]);
                return (0, l.jsxs)("div", {
                    className: m.row,
                    children: [(0, l.jsx)(o.Avatar, {
                        size: o.AvatarSizes.SIZE_20,
                        src: n.getAvatarURL(i, 20),
                        "aria-label": null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : C.default.getName(n),
                        className: m.icon
                    }), (0, l.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: O.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, t;
                                return (0, l.jsx)(o.Clickable, {
                                    onClick: () => (0, d.openUserProfileModal)({
                                        userId: n.id,
                                        guildId: i,
                                        analyticsLocation: {
                                            section: L.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                        }
                                    }),
                                    className: m.creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, l.jsx)(o.NameWithRole, {
                                        name: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : C.default.getName(n),
                                        color: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function M(e) {
                let {
                    guild: t,
                    onClick: n,
                    onClose: s
                } = e, r = i.useCallback(e => {
                    null == n || n(e), null != n && (null == s || s(e))
                }, [n, s]), u = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(T.default, {
                        guild: t,
                        size: T.default.Sizes.MINI,
                        active: !0,
                        className: a(m.guildIcon, m.icon)
                    }), (0, l.jsx)(E.default, {
                        guild: t,
                        tooltipPosition: "top",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: m.guildBadge
                    }), (0, l.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: m.linkText,
                        children: t.name
                    })]
                });
                return (0, l.jsx)("div", {
                    className: m.row,
                    children: null != n ? (0, l.jsx)(o.Clickable, {
                        onClick: r,
                        className: m.clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function U(e) {
                let {
                    userCount: t,
                    onClick: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: m.row,
                    children: [(0, l.jsx)(I.default, {
                        width: 20,
                        height: 20,
                        className: m.icon
                    }), (0, l.jsx)(o.Clickable, {
                        onClick: n,
                        className: m.interestedCount,
                        children: (0, l.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: O.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: t
                            })
                        })
                    })]
                })
            }

            function g(e) {
                var t, n;
                let {
                    guildEvent: s,
                    guild: a,
                    channel: d,
                    headerId: c,
                    onClose: E,
                    onClickInterestedCount: T,
                    isHub: I = !1,
                    containerRef: C,
                    recurrenceId: L
                } = e, {
                    user_count: O,
                    description: g
                } = s, v = (0, r.useStateFromStores)([_.default], () => null != _.default.getGuild(a.id), [a.id]), {
                    startTime: D,
                    endTime: P
                } = (0, A.default)(s.id, L), G = i.useCallback(e => {
                    e.stopPropagation(), null != s && (0, u.transitionToGuildFromEventInvite)(s)
                }, [s]), y = (0, p.default)(s);
                return i.useEffect(() => {
                    f.default.getGuildEventUserCounts(a.id), f.default.getGuildEventsForCurrentUser(a.id)
                }, [a.id]), (0, l.jsxs)("div", {
                    ref: C,
                    children: [(0, l.jsxs)("div", {
                        className: m.header,
                        children: [(0, l.jsx)(N.GuildEventTimeStatus, {
                            startTime: null !== (t = null == D ? void 0 : D.toISOString()) && void 0 !== t ? t : s.scheduled_start_time,
                            endTime: null !== (n = null == P ? void 0 : P.toISOString()) && void 0 !== n ? n : s.scheduled_end_time,
                            status: s.status,
                            eventType: s.entity_type
                        }), (0, l.jsx)(o.Heading, {
                            id: c,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: m.title,
                            children: s.name
                        })]
                    }), (0, l.jsxs)("div", {
                        className: m.body,
                        children: [(0, l.jsx)(M, {
                            guild: a,
                            onClick: v ? G : void 0,
                            onClose: E
                        }), (0, l.jsx)(S.default, {
                            guildScheduledEvent: s,
                            channel: d,
                            onClose: E
                        }), null != O && (0, l.jsx)(U, {
                            userCount: O,
                            onClick: T
                        }), !I && null != y && (0, l.jsx)(R, {
                            creator: y,
                            guildId: a.id
                        }, y.id), null != g && (0, l.jsx)("div", {
                            className: m.description,
                            children: (0, l.jsx)(h.default, {
                                description: g,
                                truncate: !1,
                                guildId: a.id
                            })
                        })]
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
                s = n("77078"),
                a = n("1339"),
                r = n("914169"),
                o = n("931874"),
                u = n("745049"),
                d = n("171632");

            function c(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: c
                } = e, _ = t.entity_type === u.GuildScheduledEventEntityTypes.EXTERNAL, E = i.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), T = (0, o.getLocationDataForEvent)(t, n);
                if (null == T) return null;
                let {
                    IconComponent: I,
                    locationName: C
                } = T, f = (0, l.jsxs)(l.Fragment, {
                    children: [null != I && (0, l.jsx)(I, {
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }), (0, l.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: d.locationText,
                        children: (0, a.guildEventDetailsParser)(C, !0)
                    })]
                });
                return (0, l.jsx)("div", {
                    className: d.row,
                    children: null != E ? (0, l.jsx)(s.Clickable, {
                        className: _ ? d.externalLocation : d.channelLocation,
                        onClick: E,
                        children: f
                    }) : f
                })
            }
        },
        403901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("446674"),
                r = n("77078"),
                o = n("272030"),
                u = n("145079"),
                d = n("119184"),
                c = n("506885"),
                _ = n("981601"),
                E = n("271938"),
                T = n("824563"),
                I = n("101125"),
                C = n("155207"),
                f = n("745049"),
                p = n("782340"),
                A = n("758024");

            function h(e) {
                let {
                    children: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: A.emptyContainer,
                    children: [(0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: A.circle,
                            children: (0, l.jsx)(C.default, {
                                height: 40,
                                width: 40,
                                className: A.icon
                            })
                        })
                    }), t]
                })
            }

            function N() {
                return (0, l.jsx)(h, {
                    children: (0, l.jsx)(r.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: A.title,
                        children: p.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function S() {
                return (0, l.jsx)(h, {
                    children: (0, l.jsx)(r.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: A.errorTitle,
                        children: p.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function L(e) {
                let {
                    count: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: A.listRow,
                        children: [(0, l.jsx)("div", {
                            className: s(A.listRowCircle, A.listAvatar),
                            children: (0, l.jsx)(C.default, {
                                height: 14,
                                width: 14,
                                className: A.icon
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: p.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: t
                            })
                        })]
                    })
                })
            }

            function O(e) {
                var t;
                let {
                    rsvpUser: n,
                    onContextMenu: i
                } = e, {
                    user: o
                } = n, d = null === (t = n.guild_member) || void 0 === t ? void 0 : t.guildId, C = (0, a.useStateFromStores)([I.default, T.default, E.default], () => o.id === E.default.getId() ? I.default.getStatus() : T.default.getStatus(o.id, d), [o.id, d]);
                return (0, l.jsx)(r.Popout, {
                    preload: () => (0, c.default)(o.id, o.getAvatarURL(d, 80), {
                        guildId: d
                    }),
                    renderPopout: e => (0, l.jsx)(_.default, {
                        ...e,
                        userId: o.id,
                        guildId: d
                    }),
                    position: "left",
                    spacing: 16,
                    children: (e, t) => {
                        var a, d;
                        let {
                            isShown: c
                        } = t;
                        return (0, l.jsxs)(r.Clickable, {
                            className: s(A.listRow, A.interactiveRow, {
                                [A.selected]: c
                            }),
                            onContextMenu: e => i(e, o),
                            ...e,
                            children: [(0, l.jsx)(r.Avatar, {
                                src: o.getAvatarURL(null === (a = n.guild_member) || void 0 === a ? void 0 : a.guildId, 24),
                                "aria-label": o.username,
                                size: r.AvatarSizes.SIZE_24,
                                className: A.listAvatar,
                                status: C
                            }), (0, l.jsx)(u.default, {
                                user: o,
                                className: A.listName,
                                discriminatorClass: A.listDiscriminator,
                                nick: null === (d = n.guild_member) || void 0 === d ? void 0 : d.nick
                            })]
                        })
                    }
                })
            }

            function m(e) {
                let {
                    rsvpUsers: t,
                    usersNotShownCount: n = 0,
                    onContextMenu: i
                } = e;
                return (0, l.jsxs)(r.ScrollerThin, {
                    className: A.listScroller,
                    children: [t.map(e => (0, l.jsx)(O, {
                        rsvpUser: e,
                        onContextMenu: i
                    }, e.user.id)), n > 0 && (0, l.jsx)(L, {
                        count: n
                    })]
                })
            }

            function R(e) {
                let {
                    children: t,
                    style: n
                } = e;
                return (0, l.jsx)("div", {
                    className: A.container,
                    style: null != n ? n : {},
                    children: t
                })
            }

            function M(e) {
                let {
                    children: t,
                    height: n
                } = e;
                return (0, l.jsx)(R, {
                    style: {
                        height: n
                    },
                    children: t
                })
            }

            function U(e) {
                var t;
                let {
                    guildEvent: i,
                    rsvpUsers: s,
                    loading: a,
                    error: u,
                    containerHeight: d
                } = e;
                if (a && 0 === s.length) return (0, l.jsx)(M, {
                    height: d,
                    children: (0, l.jsx)(r.Spinner, {
                        type: r.Spinner.Type.SPINNING_CIRCLE,
                        className: A.spinner
                    })
                });
                if (null != u && 0 === s.length) return (0, l.jsx)(M, {
                    height: d,
                    children: (0, l.jsx)(S, {})
                });
                let c = null !== (t = null == i ? void 0 : i.user_count) && void 0 !== t ? t : 0,
                    _ = 0;
                return s.length >= f.MAX_RSVP_USER_DISPLAY_COUNT && c > f.MAX_RSVP_USER_DISPLAY_COUNT && (_ = Math.max(c - s.length, 0)), 0 === s.length ? (0, l.jsx)(M, {
                    height: d,
                    children: (0, l.jsx)(N, {})
                }) : (0, l.jsx)(R, {
                    children: (0, l.jsx)(m, {
                        rsvpUsers: s,
                        onContextMenu: function(e, t) {
                            (0, o.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("406784").then(n.bind(n, "406784"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    user: t
                                })
                            })
                        },
                        usersNotShownCount: _
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
                    return E
                }
            });
            var l = n("65597"),
                i = n("862205"),
                s = n("697218"),
                a = n("719923"),
                r = n("782340");
            let o = (0, i.createExperiment)({
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
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: s
                    } = n, r = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: s,
                        collectEnabled: r ? l : s
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
                    }, i = (0, l.default)([s.default], () => s.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: i,
                        config: a
                    }), _ = r && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: r,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                _ = (0, i.createExperiment)({
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
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
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
                    return T
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return C
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                _ = n("642906"),
                E = n("990893");

            function T(e) {
                var t, n, s, r, u, d;
                let {
                    header: T,
                    isLargeModal: I,
                    stepProps: C
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
                    step: f,
                    stepConfigs: p,
                    setBodyNode: A,
                    setFooterNode: h,
                    setModalOverlayNode: N,
                    setReadySlideId: S
                } = (0, _.usePaymentContext)(), L = p.find(e => e.key === f);
                i.useEffect(() => {
                    N(null)
                }, [f, N]), o(null != L, "Unknown step for current payment flow.");
                let O = null !== (u = null == L ? void 0 : null === (t = L.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    m = null == L ? void 0 : null === (n = L.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== I && I ? E.sliderBodyLarge : null == L ? void 0 : null === (s = L.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == L ? void 0 : null === (r = L.options) || void 0 === r ? void 0 : r.renderHeader) || void 0 === d || d ? T : null, L.renderStep(C), null == f || O ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: a(E.body, m),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: f,
                                centered: !1,
                                onSlideReady: e => S(e),
                                children: p.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: a(E.sliderBody, R),
                                        ref: e => A(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => h(e)
                        }), (0, l.jsx)("div", {
                            ref: e => N(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function C(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("748820"),
                s = n("77078"),
                a = n("112679"),
                r = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                _ = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: T,
                    onComplete: I,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: f,
                    analyticsObject: p,
                    analyticsLocation: A,
                    analyticsSourceLocation: h,
                    isGift: N = !1,
                    giftMessage: S,
                    subscriptionTier: L,
                    trialId: O,
                    postSuccessGuild: m,
                    openInvoiceId: R,
                    applicationId: M,
                    referralTrialOfferId: U,
                    giftRecipient: g,
                    returnRef: v
                } = null != e ? e : {}, D = !1, P = (0, i.v4)();
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...s
                        } = n;
                        return (0, l.jsx)(e, {
                            ...s,
                            loadId: P,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: N,
                            giftMessage: S,
                            giftRecipient: g,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == T || T(e), e && (null == C || C())
                            },
                            onComplete: () => {
                                D = !0, null == I || I(), !N && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: f,
                            analyticsObject: p,
                            analyticsLocation: A,
                            analyticsSourceLocation: h,
                            trialId: O,
                            postSuccessGuild: m,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: M,
                            referralTrialOfferId: U,
                            returnRef: v
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : p,
                            source: h,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != O,
                            application_id: M,
                            location_stack: f
                        }), (0, a.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == T || T(D), D && (!N && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == C || C())
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
                    return s
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return r
                },
                setIsPersistentHelperHidden: function() {
                    return o
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
                s = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                r = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
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
                    return _
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var l = n("884691"),
                i = n("152584"),
                s = n("234251"),
                a = n("783142"),
                r = n("26989");

            function o(e) {
                return l.useMemo(() => {
                    let t = r.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in t) {
                        var l;
                        let s = t[i],
                            a = null === (l = s[e]) || void 0 === l ? void 0 : l.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(i))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, a.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, i.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, s.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, i.setPendingProfileEffectID)(void 0);
                    return
                }(0, i.setPendingProfileEffectID)(e)
            }

            function E(e, t, n) {
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

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return r
                }
            });
            var l, i, s = n("773336");
            let a = null;

            function r() {
                return (0, s.isAndroid)(), null
            }(l = i || (i = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
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
            var s = i
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var l, i, s = n("991170"),
                a = n("719923"),
                r = n("4233"),
                o = n("24373"),
                u = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return i.NONSENDABLE;
                    let l = a.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = r.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return l || e ? i.SENDABLE : i.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? i.SENDABLE : null == n.guild_id || s.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? i.SENDABLE : i.SENDABLE_WITH_PREMIUM : i.NONSENDABLE : i.SENDABLE_WITH_BOOSTED_GUILD;
                    return i.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === i.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("917351"),
                i = n.n(l),
                s = n("446674"),
                a = n("913144"),
                r = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let _ = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let E = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                T = () => {
                    u.default.isLoaded && E.compute()
                },
                I = () => {
                    T()
                };

            function C() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class f extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (_ = e), this.syncWith([u.default], I), this.syncWith([o.default], C)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            f.displayName = "StickersPersistedStore", f.persistKey = "StickersPersistedStoreV2";
            var p = new f(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), _.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), T()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return C
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return h
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return S
                },
                setTryItOutBanner: function() {
                    return L
                },
                setTryItOutThemeColors: function() {
                    return O
                }
            });
            var l = n("872717"),
                i = n("913144"),
                s = n("448993"),
                a = n("884351"),
                r = n("845579"),
                o = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function _(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, u;
                let c = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let _ = r.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = a.default.parse(void 0, e.bio).content);
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
                        let e = new s.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new s.APIError(t);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
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

            function h(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function S(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function L(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function O(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("913144"),
                i = n("54239"),
                s = n("49111");

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, i.pushLayer)(s.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("917351"),
                i = n.n(l),
                s = n("446674"),
                a = n("913144"),
                r = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                d = null,
                c = null,
                _ = {},
                E = {},
                T = {},
                I = null,
                C = null,
                f = !1,
                p = !1,
                A = null,
                h = null,
                N = null,
                S = [],
                L = null,
                O = null;

            function m(e) {
                var t, n, l, i, s, a;
                let d = r.default.getCurrentUser();
                if (null == d) return R();
                c = null !== (t = e.section) && void 0 !== t ? t : c, L = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (_[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), p = !!e.openWithoutBackstack, u = o.FormStates.OPEN, T = {}, C = {
                    ...I = {
                        [o.UserSettingsSections.ACCOUNT]: {
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
                }, h = null !== (l = e.onClose) && void 0 !== l ? l : null, N = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, S = null !== (s = e.analyticsLocations) && void 0 !== s ? s : [], O = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function R() {
                u = o.FormStates.CLOSED, f = !1, I = null, L = null, C = null, d = null, c = null, _ = {}, E = {}, h = null, N = null, S = [], O = null
            }

            function M() {
                u = o.FormStates.OPEN, T = {}
            }
            class U extends s.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                hasChanges() {
                    return null != C && null != I && (!!this.isOpen() || A === o.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(C, I)
                }
                isOpen() {
                    return f
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? _[c] : null
                }
                getScrollPosition() {
                    return null != c ? E[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? _[c] : null,
                        scrollPosition: null != c ? E[c] : null,
                        settings: C,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: N,
                        analyticsLocations: S,
                        initialSection: L,
                        impressionSource: O
                    }
                }
                get onClose() {
                    return h
                }
            }
            U.displayName = "UserSettingsModalStore";
            var g = new U(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, c = o.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, N = null, S = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != c && delete _[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == C && (C = {});
                    let n = C[o.UserSettingsSections.ACCOUNT];
                    C[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = r.default.getCurrentUser();
                    M(), null != e && (C = {
                        ...I = {
                            [o.UserSettingsSections.ACCOUNT]: {
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
                    return A = e.tab, null == c && A === o.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("414055"),
                r = n("12287"),
                o = n("988268"),
                u = n("782340"),
                d = n("647431");
            let c = e => {
                let t, {
                        invertColor: n = !1,
                        type: i = o.BotTagTypes.BOT,
                        className: c,
                        verified: _,
                        hideIcon: E = !1,
                        useRemSizes: T = !1,
                        children: I = []
                    } = e,
                    C = null,
                    f = u.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (i) {
                    case o.BotTagTypes.SYSTEM_DM:
                    case o.BotTagTypes.OFFICIAL:
                        _ = !0, f = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, C = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case o.BotTagTypes.SERVER:
                        C = u.default.Messages.BOT_TAG_SERVER;
                        break;
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        C = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case o.BotTagTypes.STAFF_ONLY_DM:
                        C = u.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case o.BotTagTypes.AI:
                        _ = !0, f = u.default.Messages.AI_GENERATED_TOOLTIP, C = u.default.Messages.AI_TAG;
                        break;
                    case o.BotTagTypes.REMIX:
                        _ = !1, C = u.default.Messages.REMIXING_TAG;
                        break;
                    case o.BotTagTypes.BOT:
                    default:
                        C = u.default.Messages.BOT_TAG_BOT
                }
                let p = i === o.BotTagTypes.ORIGINAL_POSTER,
                    A = i === o.BotTagTypes.REMIX,
                    h = null;
                _ && (h = (0, l.jsx)(a.Tooltip, {
                    text: f,
                    align: "center",
                    position: "top",
                    children: e => (0, l.jsx)(r.default, {
                        ...e,
                        className: d.botTagVerified
                    })
                })), t = i === o.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
                let N = e => (0, l.jsxs)("span", {
                    ...e,
                    className: s(c, t, T ? d.rem : d.px, {
                        [d.botTagOP]: p,
                        [d.botTagRemix]: A
                    }),
                    children: [E ? null : h, I, (0, l.jsx)("span", {
                        className: d.botText,
                        children: C
                    })]
                });
                switch (i) {
                    case o.BotTagTypes.REMIX:
                        return (0, l.jsx)(a.Tooltip, {
                            text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => N(e)
                        });
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        return (0, l.jsx)(a.Tooltip, {
                            text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => N(e)
                        });
                    default:
                        return N()
                }
            };
            c.Types = o.BotTagTypes;
            var _ = c
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
                s = n("414456"),
                a = n.n(s),
                r = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: d,
                    ...c
                } = e, _ = i.Children.only(t), E = (0, r.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: a(u.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...c,
                        className: a(d, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: _
                    })]
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return p
                }
            });
            var l, i, s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                _ = n("145131"),
                E = n("396792");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let T = {
                    [i.DEFAULT]: E.shineDefault,
                    [i.SMALL]: E.shineSmall
                },
                I = {
                    [i.DEFAULT]: E.shineInnerDefault,
                    [i.SMALL]: E.shineInnerSmall
                };
            class C extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, s.jsx)(u.default.div, {
                        ...l,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, s.jsx)(_.default, {
                            align: _.default.Align.CENTER,
                            justify: _.default.Justify.CENTER,
                            className: T[t],
                            children: (0, s.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: i.DEFAULT
            };
            let f = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: r,
                    pauseAnimation: u,
                    shineSize: _ = i.DEFAULT,
                    shinePaused: T,
                    buttonShineClassName: I,
                    onlyShineOnHover: f,
                    ...p
                } = e, A = a.createRef(), h = (0, c.default)(A), N = !l && !r && !0 !== u && (!f || h);
                return (0, s.jsxs)(d.Button, {
                    buttonRef: A,
                    ...p,
                    className: o(E.shinyButton, n),
                    disabled: l,
                    submitting: r,
                    children: [t, N ? (0, s.jsx)(C, {
                        shinePaused: T,
                        className: o(E.buttonShine, f ? E.onlyShineOnHover : void 0, I),
                        shineSize: _
                    }) : null]
                })
            };
            f.ShineSizes = i;
            var p = f
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return r
                },
                UID: function() {
                    return o
                }
            });
            var l = n("995008"),
                i = n.n(l),
                s = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                r = () => (0, s.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return i
                }
            });
            var l = n("884691");
            let i = l.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("384737"),
                r = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                _ = n("4177");
            let E = {
                    UP: _.directionUp,
                    RIGHT: _.directionRight,
                    DOWN: _.directionDown,
                    LEFT: _.directionLeft
                },
                T = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: T = "currentColor",
                        transition: I = _.transition,
                        className: C,
                        foreground: f,
                        expanded: p,
                        ...A
                    } = e, {
                        enabled: h
                    } = (0, d.useRedesignIconContext)(), N = t;
                    if (!0 === p ? N = E.DOWN : !1 === p && (N = E.RIGHT), h) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: a.ChevronSmallDownIcon,
                            [E.LEFT]: r.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [N];
                        return (0, l.jsx)(e, {
                            ...A,
                            className: C,
                            width: n,
                            height: i,
                            color: T,
                            colorClass: f
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: s(C, I, N),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(A),
                        children: (0, l.jsx)("path", {
                            className: f,
                            fill: "none",
                            stroke: T,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            T.Directions = E;
            var I = T
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("733154"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, s.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("505088"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("469563"),
                a = n("163725"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foregroundColor: a = i.default.unsafe_rawColors.RED_400.css,
                        foreground: o,
                        background: u,
                        ...d
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: a,
                            className: o,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: s,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, a.EyeSlashIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: s,
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
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("998460"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(r),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, s.GiftIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("753809"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, l.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, s.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("434657"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: s,
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(o),
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("202909"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: s = "0 0 24 24",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: s,
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, s.NitroWheelIcon)
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("304983"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("811513"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("876726"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: i
                        })
                    })
                }, s.PlayIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("390300"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("287083"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
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
                }, s.StageIcon)
        },
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("276825"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, s.CheckmarkSmallIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return r
                }
            });
            var l = n("281071"),
                i = n("773336"),
                s = n("50885");
            let a = (() => {
                if (i.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!a && (i.isPlatformEmbedded ? (s.default.copy(e), !0) : l.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var l = n("917351"),
                i = n.n(l);
            let s = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                i = n("448993");

            function s(e, t) {
                let [n, s] = l.useState(!1), [a, r] = l.useState(null), o = async () => {
                    s(!0), r(null);
                    try {
                        let t = await e();
                        return s(!1), r(null), t
                    } catch (n) {
                        let e = new i.APIError(n);
                        return null == t || t(e), r(e), s(!1), null
                    }
                };
                return [o, {
                    loading: n,
                    error: a
                }]
            }
        },
        730622: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("697218"),
                a = n("615931");
            let r = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, r = e.updateModalProps, i = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == l) {
                    null == o || o();
                    return
                }
                let d = l(T, c, a);

                function c() {
                    null == o || o()
                }

                function _(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), s(e)
                }

                function T(e) {
                    return r(d, T, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: _,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    r(d, T, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: i,
                    mfaCodeHandler: s = o,
                    isModalOpen: a = !1,
                    ...r
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = a, i.body && 60008 === i.body.code || o && 429 === i.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...r
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: i = null !== (l = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...r
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...r
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return r
                },
                updateModalProps: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                s = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, l.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function r(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, l) {
                return (0, i.updateModal)(e, a(t, n, l))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var l = n("884691"),
                i = n("446674"),
                s = n("244201"),
                a = n("471671");

            function r() {
                let {
                    windowId: e
                } = l.useContext(s.default);
                return (0, i.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("817736"),
                i = n("118810");
            let s = {
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
                    let n = (0, l.findDOMNode)(e);
                    (0, i.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
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
            });
            var l = n("884691"),
                i = n("748820"),
                s = n("157590");
            let a = (0, i.v4)(),
                r = new Map,
                o = new Map;
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
                        t = o.get(e);
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
                    t ? r.has(t) ? this.elementId = r.get(t) || "" : r.set(t, (0, i.v4)()) : this.elementId = a;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new s.default({
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
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == l || l.removeAllRanges(), null == l || l.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(i), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            })
        }
    }
]);