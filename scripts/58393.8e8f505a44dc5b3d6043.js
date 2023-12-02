(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58393"], {
        527826: function(e, t, n) {
            "use strict";
            e.exports = n.p + "adf75861421c2a6a6269.png"
        },
        250790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                r = n("483366"),
                l = n.n(r),
                i = n("458960"),
                o = n("394846"),
                u = n("769846"),
                d = n("77078"),
                c = n("159885"),
                h = n("99130");
            let f = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                E = {
                    START: 0,
                    END: 1
                },
                _ = {
                    friction: 10,
                    tension: 130
                };
            var m = function(e) {
                return class extends a.Component {
                    componentDidMount() {
                        !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
                    }
                    componentWillUnmount() {
                        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
                    }
                    componentWillAppear(e) {
                        this.state.shouldAnimate ? this.animateTo(E.END, e) : e()
                    }
                    componentWillEnter(e) {
                        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(E.END, e), 40)) : e()
                    }
                    componentWillLeave(e) {
                        this.state.shouldAnimate ? this.animateTo(E.START, e) : e()
                    }
                    animateTo(e, t) {
                        i.default.spring(this.anim, {
                            toValue: e,
                            ..._
                        }).start(t)
                    }
                    getAnimatedStyle(e) {
                        return this.state.shouldAnimate ? {
                            opacity: this.anim,
                            transform: e ? void 0 : [{
                                scale: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1.05, 1]
                                })
                            }, {
                                translateY: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-70px", "0px"]
                                })
                            }, {
                                translateZ: 0
                            }]
                        } : null
                    }
                    render() {
                        return (0, s.jsx)("div", {
                            className: h.wrapper,
                            children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                                children: t => {
                                    let {
                                        reducedMotion: n
                                    } = t;
                                    return (0, s.jsx)(i.default.div, {
                                        style: this.getAnimatedStyle(n.enabled),
                                        children: (0, s.jsx)(e, {
                                            ...this.props
                                        })
                                    })
                                }
                            })
                        })
                    }
                    constructor(...e) {
                        super(...e), this.anim = new i.default.Value(E.START), this.state = {
                            shouldAnimate: !o.isMobile
                        }, this.handleResize = () => {
                            let e = window.innerWidth > f;
                            !this.state.shouldAnimate && e && this.anim.setValue(E.END), this.setState({
                                shouldAnimate: e
                            })
                        }, this.handleResizeDebounced = l(this.handleResize, 60)
                    }
                }
            }
        },
        746040: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("394846"),
                o = n("77078"),
                u = n("2021"),
                d = n("393414"),
                c = n("725484"),
                h = n("554054"),
                f = n("159885"),
                E = n("528502"),
                _ = n("49111"),
                m = n("71041");
            let p = (0, f.cssValueToNumber)(m.responsiveWidthMobile),
                g = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT, _.Routes.REPORT_SECOND_LOOK];

            function R(e) {
                return g.some(t => e.startsWith(t))
            }
            class N extends a.Component {
                componentDidMount() {
                    window.addEventListener("resize", this.handleResize)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                mobileTransitionTo(e, t) {
                    if (R(e))(0, d.transitionTo)(e, t);
                    else {
                        let n = null != t && null != t.search ? t.search : null;
                        window.location = null == n ? e : "".concat(e, "?").concat(n)
                    }
                }
                mobileReplaceWith(e) {
                    R(e) ? (0, d.replaceWith)(e) : window.location = e
                }
                renderDefault() {
                    let {
                        splash: e
                    } = this.props, t = (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: d.transitionTo,
                            replaceWith: d.replaceWith
                        }))
                    });
                    return (0, s.jsx)("div", {
                        className: m.characterBackground,
                        children: (0, s.jsx)(o.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(c.default, {
                                    show: !0,
                                    className: l(m.logo)
                                }), (0, s.jsx)(h.Splash, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(E.default, {
                                    className: m.artwork,
                                    preserveAspectRatio: "xMinYMin slice"
                                }), t]
                            })
                        })
                    })
                }
                renderMobile() {
                    return (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: this.mobileTransitionTo,
                            replaceWith: this.mobileReplaceWith
                        }))
                    })
                }
                render() {
                    let {
                        isMobileWidth: e
                    } = this.state, t = navigator.userAgent.includes("GameLauncher");
                    return e || i.isMobile || i.isTablet || t ? this.renderMobile() : this.renderDefault()
                }
                constructor(e) {
                    super(e), this.handleResize = () => {
                        this.setState({
                            isMobileWidth: window.innerWidth <= p
                        })
                    }, this.state = {
                        isMobileWidth: window.innerWidth <= p
                    }
                }
            }
            var A = N
        },
        404432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("446674"),
                o = n("77078"),
                u = n("299285"),
                d = n("210721"),
                c = n("65324"),
                h = n("697218"),
                f = n("10514"),
                E = n("552712"),
                _ = n("953109"),
                m = n("124969"),
                p = n("380186"),
                g = n("646718"),
                R = n("782340"),
                N = n("451862"),
                A = n("173791"),
                I = n("926622"),
                T = i.default.connectStores([E.default, u.default, f.default, h.default], e => {
                    let {
                        giftCode: t
                    } = e, n = E.default.get(t.skuId), {
                        subscriptionPlanId: s
                    } = t, a = null != s ? (0, p.getOrFetchSubscriptionPlan)(s) : null;
                    return {
                        sku: n,
                        subscriptionPlan: a,
                        application: u.default.getApplication(n.applicationId),
                        gifter: h.default.getUser(t.userId)
                    }
                })(e => {
                    let {
                        error: t,
                        giftCode: n,
                        gifter: r,
                        sku: i,
                        application: u,
                        subscriptionPlan: h
                    } = e, f = null == r ? R.default.Messages.GIFT_CODE_AUTH_GIFTED : R.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                        username: r.username
                    }), E = i.name;
                    return null != h && (E = (h.interval === g.SubscriptionIntervalTypes.MONTH ? R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                        skuName: i.name,
                        intervalCount: h.intervalCount
                    })), (0, s.jsxs)(a.Fragment, {
                        children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                            defaultAnimationState: d.AnimationState.LOOP,
                            giftStyle: n.giftStyle,
                            className: N.seasonalIcon
                        }) : (0, s.jsx)(m.Avatar, {
                            src: null != r ? r.getAvatarURL(void 0, 100) : null,
                            size: o.AvatarSizes.DEPRECATED_SIZE_100,
                            className: I.marginBottom20
                        }), null != t ? (0, s.jsxs)(a.Fragment, {
                            children: [(0, s.jsx)(m.SubTitle, {
                                children: R.default.Messages.INVITE_MODAL_ERROR_TITLE
                            }), (0, s.jsx)(m.Title, {
                                children: t
                            })]
                        }) : (0, s.jsxs)(a.Fragment, {
                            children: [(0, s.jsx)(m.SubTitle, {
                                children: f
                            }), (0, s.jsxs)(m.Title, {
                                className: l(I.marginTop8, A.flexCenter),
                                children: [(0, s.jsx)(_.default, {
                                    size: _.default.Sizes.MEDIUM,
                                    className: N.applicationIcon,
                                    game: u,
                                    skuId: i.id
                                }), E]
                            })]
                        })]
                    })
                })
        },
        291850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoginSpinner: function() {
                    return W
                },
                default: function() {
                    return K
                }
            });
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("730290"),
                o = n("394846"),
                u = n("446674"),
                d = n("77078"),
                c = n("913144"),
                h = n("437822"),
                f = n("697796"),
                E = n("524824"),
                _ = n("21572"),
                m = n("791160"),
                p = n("434824"),
                g = n("24287"),
                R = n("382236"),
                N = n("770032"),
                A = n("724554"),
                I = n("878720"),
                T = n("25033"),
                S = n("589252"),
                C = n("970366"),
                O = n("271938"),
                L = n("72177"),
                x = n("476108"),
                v = n("145131"),
                M = n("124969"),
                y = n("980428"),
                D = n("599110"),
                b = n("659500"),
                G = n("773336"),
                F = n("404432"),
                U = n("719451"),
                P = n("331085"),
                B = n("598489"),
                j = n("49111"),
                k = n("579033"),
                w = n("782340"),
                H = n("741532"),
                V = n("926622");

            function W() {
                return (0, s.jsx)(M.default, {
                    children: (0, s.jsx)(d.Spinner, {})
                })
            }
            class Y extends a.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        handoffAvailable: t,
                        authenticated: n
                    } = e;
                    return t || n ? null : {
                        checkingHandoff: !1
                    }
                }
                componentDidMount() {
                    let {
                        handoffAvailable: e,
                        authenticated: t,
                        giftCodeSKU: n,
                        invite: s,
                        location: a
                    } = this.props;
                    e && !t ? (0, f.handoffBegin)() : t && this.loginOrSSO(t, a, !0), D.default.track(j.AnalyticEvents.LOGIN_VIEWED, {
                        location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
                        login_source: this.loginSource,
                        authenticated: t,
                        ...null != n ? (0, m.default)(n, !1, !1) : {}
                    }, {
                        flush: !0
                    }), h.default.getLocationMetadata(), (0, C.trackAppUIViewed)("login")
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        location: n
                    } = this.props, {
                        checkingHandoff: s
                    } = this.state;
                    if (t && !e.authenticated && !s && this.loginOrSSO(t, n), e.errors !== this.props.errors) {
                        var a, r, l;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (r = this.loginRef) || void 0 === r || r.focus() : this.hasError("code") && (null === (l = this.codeRef) || void 0 === l || l.focus())
                    }
                }
                get loginSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: n,
                        loginSource: s,
                        redirectTo: a
                    } = this.props;
                    if (null != s) return s;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    else if (null != n) {
                        if (null != n.guild) return "guild_invite";
                        if (null != n.channel) return "dm_invite";
                        else if (null != n.inviter) return "friend_invite"
                    }
                    return null != a ? (0, E.getLoginHandoffSourceFromRedirectTo)(a) : null
                }
                get giftCodeSKUId() {
                    let {
                        giftCode: e
                    } = this.props;
                    return null != e ? e.skuId : null
                }
                get canShowChooseAccount() {
                    return this.props.hasLoggedInAccounts
                }
                loginOrSSO(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e && null != t && (this.setState({
                        redirecting: !0
                    }), n ? h.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
                }
                transitionSSO(e) {
                    let {
                        transitionTo: t,
                        redirectTo: n,
                        replaceWith: s
                    } = this.props, a = null != e ? (0, i.parse)(e.search) : {};
                    if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
                    else if (null == a.service) t(j.Routes.APP);
                    else {
                        let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + j.Endpoints.SSO,
                            t = {
                                ...a,
                                token: O.default.getToken()
                            };
                        window.location = "".concat(e, "?").concat((0, i.stringify)(t))
                    }
                }
                hasError(e) {
                    return null != this.props.errors[e]
                }
                renderHandOffAvailable() {
                    let {
                        authBoxClassName: e
                    } = this.props;
                    return (0, s.jsxs)(M.default, {
                        className: e,
                        children: [(0, s.jsx)(M.AuthSpinner, {}), (0, s.jsx)(M.Title, {
                            className: V.marginBottom8,
                            children: w.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                        }), (0, s.jsx)(M.SubTitle, {
                            children: w.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                        })]
                    })
                }
                renderHandOffContinue() {
                    let {
                        user: e,
                        transitionTo: t,
                        authBoxClassName: n
                    } = this.props;
                    return null == e ? null : (0, s.jsxs)(M.default, {
                        className: n,
                        children: [(0, s.jsx)(M.Avatar, {
                            src: e.getAvatarURL(void 0, 100),
                            size: d.AvatarSizes.DEPRECATED_SIZE_100,
                            className: V.marginBottom20
                        }), (0, s.jsx)(M.Title, {
                            className: V.marginBottom8,
                            children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                                name: e.toString()
                            })
                        }), (0, s.jsx)(M.SubTitle, {
                            className: V.marginBottom40,
                            children: w.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                        }), (0, s.jsxs)(M.Block, {
                            children: [(0, s.jsx)(M.Button, {
                                onClick: () => t(j.Routes.APP),
                                className: V.marginBottom8,
                                children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                                    name: e.toString()
                                })
                            }), (0, s.jsx)(M.Button, {
                                look: M.Button.Looks.LINK,
                                color: M.Button.Colors.LINK,
                                onClick: this.handleReset,
                                children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                            })]
                        })]
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = this.props.loginStatus === j.LoginStates.ACCOUNT_DISABLED, n = t ? w.default.Messages.ACCOUNT_DISABLED_TITLE : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? w.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, s.jsx)(M.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        children: (0, s.jsxs)(d.HeadingLevel, {
                            component: (0, s.jsx)(M.Title, {
                                className: V.marginBottom8,
                                children: n
                            }),
                            children: [(0, s.jsx)(M.SubTitle, {
                                className: V.marginBottom20,
                                children: a
                            }), (0, s.jsxs)(M.Block, {
                                children: [(0, s.jsx)(M.Button, {
                                    color: M.Button.Colors.BRAND,
                                    type: "submit",
                                    children: w.default.Messages._RETURN_TO_LOGIN
                                }), (0, s.jsx)("div", {
                                    className: l(V.marginTop8, H.needAccount),
                                    children: w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                        onClick: this.handleCancelAccountDeletion
                                    })
                                })]
                            })]
                        })
                    })
                }
                renderResolving() {
                    let {
                        authBoxClassName: e,
                        country: t
                    } = this.props;
                    return (0, s.jsxs)(M.default, {
                        className: e,
                        children: [(0, s.jsx)(U.InviteResolvingHeader, {}), (0, s.jsxs)(M.Block, {
                            className: V.marginTop20,
                            children: [(0, s.jsx)(S.default, {
                                className: V.marginBottom20,
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                label: w.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                onChange: (e, t) => this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                                setRef: this.setLoginRef,
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                value: this.state.login,
                                autoFocus: !0,
                                required: !0
                            }), (0, s.jsx)(M.Input, {
                                className: V.marginBottom20,
                                label: w.default.Messages.FORM_LABEL_PASSWORD,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                value: this.state.password,
                                required: !0
                            }), (0, s.jsx)(M.Button, {
                                className: V.marginBottom8,
                                type: "submit",
                                disabled: !0,
                                children: w.default.Messages._LOGIN
                            }), (0, s.jsx)(M.Button, {
                                disabled: !0,
                                look: M.Button.Looks.LINK,
                                color: M.Button.Colors.LINK,
                                children: w.default.Messages.FORGOT_PASSWORD
                            }), (0, s.jsx)(M.Button, {
                                disabled: !0,
                                className: V.marginTop4,
                                look: M.Button.Looks.LINK,
                                color: M.Button.Colors.LINK,
                                children: w.default.Messages.NEED_ACCOUNT
                            })]
                        })]
                    })
                }
                renderDefaultForm(e) {
                    var t;
                    let n;
                    let {
                        invite: a,
                        giftCode: r,
                        loginStatus: i,
                        country: o,
                        showMobileWebHandoff: u,
                        disableAutofocusOnDefaultForm: c
                    } = this.props, h = !this.hasError("email") && this.hasError("password"), f = (null == a ? void 0 : a.stage_instance) != null;
                    return n = null == a || f ? null != r ? (0, s.jsx)(F.default, {
                        giftCode: r
                    }) : (0, s.jsxs)("div", {
                        className: H.header,
                        children: [(0, s.jsx)(M.Title, {
                            className: V.marginBottom8,
                            children: w.default.Messages.LOGIN_TITLE
                        }, "title"), !1 === (0, G.isAndroidWeb)() ? (0, s.jsx)(M.SubTitle, {
                            children: w.default.Messages.AUTH_LOGIN_BODY
                        }, "subtitle") : null]
                    }) : (0, s.jsx)(U.default, {
                        invite: a
                    }), (0, s.jsxs)(v.default, {
                        direction: v.default.Direction.HORIZONTAL,
                        align: v.default.Align.CENTER,
                        children: [(0, s.jsxs)("div", {
                            className: H.mainLoginContainer,
                            children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, s.jsx)(M.Button, {
                                onClick: () => {
                                    this.setState(e => ({
                                        ...e,
                                        dismissedChooseAccount: !1
                                    }))
                                },
                                look: M.Button.Looks.LINK,
                                color: M.Button.Colors.PRIMARY,
                                className: H.goBackButton,
                                children: (0, s.jsxs)("div", {
                                    className: H.content,
                                    children: [(0, s.jsx)(y.default, {
                                        width: 16,
                                        height: 16,
                                        className: H.caret
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: w.default.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }), n, (0, s.jsx)(d.HeadingLevel, {
                                children: (0, s.jsxs)(M.Block, {
                                    className: V.marginTop20,
                                    children: [(0, s.jsx)(S.default, {
                                        alpha2: o.alpha2,
                                        countryCode: o.code.split(" ")[0],
                                        className: V.marginBottom20,
                                        label: w.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                        error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
                                        onChange: (e, t) => this.setState({
                                            login: e,
                                            loginPrefix: t
                                        }),
                                        setRef: this.setLoginRef,
                                        autoCapitalize: "none",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        spellCheck: "false",
                                        value: this.state.login,
                                        autoFocus: !h && !u && !c,
                                        required: !0
                                    }), (0, s.jsx)(M.Input, {
                                        label: w.default.Messages.FORM_LABEL_PASSWORD,
                                        error: this.renderError("password"),
                                        onChange: e => this.setState({
                                            password: e
                                        }),
                                        name: "password",
                                        type: "password",
                                        setRef: this.setPasswordRef,
                                        autoComplete: "off",
                                        spellCheck: "false",
                                        autoFocus: h && !u && !c,
                                        value: this.state.password,
                                        required: !0
                                    }), (0, s.jsx)(M.Button, {
                                        onClick: this.handleForgotPassword,
                                        look: M.Button.Looks.LINK,
                                        color: M.Button.Colors.LINK,
                                        className: l(V.marginBottom20, V.marginTop4),
                                        children: w.default.Messages.FORGOT_PASSWORD
                                    }), (0, s.jsx)(M.Button, {
                                        type: "submit",
                                        submitting: i === j.LoginStates.LOGGING_IN,
                                        color: f ? M.Button.Colors.GREEN : M.Button.Colors.BRAND,
                                        className: V.marginBottom8,
                                        children: f ? w.default.Messages._LOGIN_STAGE : w.default.Messages._LOGIN
                                    }), (0, s.jsxs)("div", {
                                        className: V.marginTop4,
                                        children: [(0, s.jsx)("span", {
                                            className: H.needAccount,
                                            children: w.default.Messages.NEED_ACCOUNT
                                        }), (0, s.jsx)(M.Button, {
                                            onClick: this.handleGotoRegister,
                                            look: M.Button.Looks.LINK,
                                            color: M.Button.Colors.LINK,
                                            className: H.smallRegisterLink,
                                            children: w.default.Messages.REGISTER
                                        })]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(d.HeadingLevel, {
                            children: e ? (0, s.jsx)(P.default, {
                                authTokenCallback: this.handleAuthToken
                            }) : null
                        })]
                    }, "form-wrapper")
                }
                renderDefault() {
                    let {
                        authBoxClassName: e,
                        showMobileWebHandoff: t
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: H.pageContainer,
                        children: [(0, s.jsx)(M.default, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: e,
                            expanded: !0,
                            children: this.renderDefaultForm(!0)
                        }), t && (0, s.jsx)(R.default, {})]
                    })
                }
                renderGuildTemplate(e) {
                    return (0, s.jsx)(B.default, {
                        onSubmit: this.handleLogin,
                        tag: "form",
                        className: l(this.props.authBoxClassName, H.horizontalAuthBox),
                        children: () => [(0, s.jsx)(p.default, {
                            guildTemplate: e
                        }, "template"), this.renderDefaultForm(!1)]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, s.jsx)(M.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, s.jsx)(g.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFA,
                            request: e,
                            onEarlyClose: () => {
                                c.default.dispatch({
                                    type: "LOGIN_RESET"
                                })
                            },
                            width: 480
                        })
                    })
                }
                renderIPAuthorization() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, s.jsx)(M.default, {
                        tag: "form",
                        className: e,
                        children: (0, s.jsx)(_.default, {
                            title: w.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                            subtitle: w.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handleIPAuthorize,
                            onCancel: h.default.loginReset
                        })
                    })
                }
                renderPasswordRecovery() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, s.jsx)(M.default, {
                        tag: "form",
                        className: e,
                        children: (0, s.jsx)(_.default, {
                            title: w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                            subtitle: w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handlePasswordReset,
                            onCancel: h.default.loginReset
                        })
                    })
                }
                renderChooseAccount() {
                    return (0, s.jsx)(A.default, {
                        onDismiss: () => {
                            this.setState(e => ({
                                ...e,
                                dismissedChooseAccount: !0
                            }))
                        }
                    })
                }
                render() {
                    let {
                        authenticated: e,
                        invite: t,
                        guildTemplate: n,
                        loginStatus: a,
                        handoffAvailable: r
                    } = this.props, {
                        checkingHandoff: l,
                        redirecting: i
                    } = this.state;
                    if (i || l) return (0, s.jsx)(W, {});
                    if (r) return this.renderHandOffAvailable();
                    if (e && l) return this.renderHandOffContinue();
                    switch (a) {
                        case j.LoginStates.LOGGING_IN_MFA_SMS:
                        case j.LoginStates.MFA_SMS_STEP:
                        case j.LoginStates.LOGGING_IN_MFA:
                        case j.LoginStates.MFA_STEP:
                        case j.LoginStates.MFA_WEBAUTHN_STEP:
                        case j.LoginStates.LOGGING_IN_MFA_WEBAUTHN:
                            return this.renderMFA();
                        case j.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case j.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case j.LoginStates.PHONE_IP_AUTHORIZATION:
                            return this.renderIPAuthorization();
                        case j.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPasswordRecovery();
                        case j.LoginStates.LOGGING_IN:
                        case j.LoginStates.NONE:
                        default:
                            if (null != t && t.state === j.InviteStates.RESOLVING) return this.renderResolving();
                            if (null != n) {
                                if (n.state === k.GuildTemplateStates.RESOLVING) return this.renderResolving();
                                return this.renderGuildTemplate(n)
                            }
                            if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                            return this.renderDefault()
                    }
                }
                constructor(e) {
                    var t, n;
                    super(e), this.handleAuthToken = async e => {
                        await h.default.loginToken(e, !1), D.default.track(j.AnalyticEvents.LOGIN_SUCCESSFUL, {
                            source: j.LoginSuccessfulSources.QR_CODE,
                            login_source: this.loginSource,
                            gift_code_sku_id: this.giftCodeSKUId,
                            is_new_user: !1
                        })
                    }, this.setLoginRef = e => {
                        this.loginRef = e
                    }, this.setPasswordRef = e => {
                        this.passwordRef = e
                    }, this.setCodeRef = e => {
                        this.codeRef = e
                    }, this.getFullLogin = () => {
                        let {
                            loginPrefix: e,
                            login: t
                        } = this.state;
                        return e + t
                    }, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let n = t[e];
                            return Array.isArray(n) ? n[0] : n
                        }
                        return null
                    }, this.handleLogin = e => {
                        let {
                            password: t,
                            undelete: n
                        } = this.state;
                        null != e && e.preventDefault(), h.default.login({
                            login: this.getFullLogin(),
                            password: t,
                            undelete: n,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId,
                            invite: this.props.invite
                        }), b.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleIPAuthorize = async e => {
                        let {
                            password: t,
                            undelete: n
                        } = this.state, s = this.getFullLogin();
                        try {
                            let {
                                token: a
                            } = await I.default.verifyPhone(s, e, !1);
                            await h.default.authorizeIPAddress(a), h.default.login({
                                login: s,
                                password: t,
                                undelete: n,
                                source: this.loginSource,
                                giftCodeSKUId: this.giftCodeSKUId
                            }), b.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE)
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handlePasswordReset = async e => {
                        let {
                            transitionTo: t
                        } = this.props;
                        this.setState({
                            phoneVerifyError: null
                        });
                        try {
                            let {
                                token: n
                            } = await I.default.verifyPhone(this.getFullLogin(), e, !1);
                            t(j.Routes.RESET, {
                                search: (0, i.stringify)({
                                    token: n,
                                    from_login: "true"
                                })
                            })
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handleTokenSubmitMFA = e => {
                        let {
                            mfaType: t,
                            data: n,
                            ticket: s
                        } = e;
                        return b.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE), h.default.loginMFAv2({
                            code: n,
                            ticket: s,
                            mfaType: t,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        })
                    }, this.handleForgotPassword = async e => {
                        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                        let t = this.getFullLogin();
                        try {
                            b.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE), await h.default.forgotPassword(t), (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                                header: w.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: w.default.Messages.OKAY,
                                confirmButtonColor: M.Button.Colors.BRAND,
                                className: o.isMobile ? H.mobile : "",
                                ...e,
                                children: (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: w.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                        email: t
                                    })
                                })
                            }))
                        } catch {}
                    }, this.handleResendCode = () => {
                        I.default.resendCode(this.getFullLogin())
                    }, this.handleReset = e => {
                        null != e && e.preventDefault(), h.default.loginReset(), this.setState({
                            password: "",
                            loginPrefix: "",
                            login: "",
                            code: "",
                            smsCode: "",
                            undelete: !1,
                            checkingHandoff: !1,
                            redirecting: !1
                        })
                    }, this.handleCancelAccountDeletion = () => {
                        this.setState({
                            undelete: !0
                        }, this.handleLogin)
                    }, this.handleGotoRegister = () => {
                        let e;
                        let {
                            login: t
                        } = this.state, {
                            invite: n,
                            giftCode: s,
                            guildTemplate: a,
                            location: r,
                            transitionTo: l,
                            redirectTo: o
                        } = this.props, u = null != r ? (0, i.parse)(r.search) : {};
                        "" !== t && (u.email = t), null != n ? (u.mode = "register", e = j.Routes.INVITE(n.code)) : null != s ? (u.mode = "register", e = j.Routes.GIFT_CODE(s.code)) : null != a ? e = j.Routes.GUILD_TEMPLATE(a.code) : null != o ? (e = j.Routes.REGISTER, u.redirect_to = o) : e = j.Routes.REGISTER, h.default.loginReset(), l(e, {
                            search: (0, i.stringify)(u)
                        }), b.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE)
                    };
                    let a = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        redirecting: e.authenticated,
                        checkingHandoff: e.handoffAvailable,
                        loginPrefix: "",
                        login: null !== (n = null !== (t = a.email) && void 0 !== t ? t : a.login) && void 0 !== n ? n : "",
                        password: "",
                        code: "",
                        smsCode: "",
                        undelete: !1,
                        phoneVerifyError: null,
                        dismissedChooseAccount: !1
                    }
                }
            }
            Y.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var K = function(e) {
                let t = (0, u.useStateFromStoresObject)([L.default, x.default, O.default, N.default, T.default], () => ({
                    authenticated: O.default.isAuthenticated(),
                    handoffAvailable: L.default.isHandoffAvailable(),
                    user: L.default.user,
                    loginStatus: O.default.getLoginStatus(),
                    mfaTicket: O.default.getMFATicket(),
                    mfaSMS: O.default.getMFASMS(),
                    mfaMethods: O.default.getMFAMethods(),
                    maskedPhone: O.default.getMaskedPhone(),
                    errors: O.default.getErrors(),
                    defaultRoute: x.default.defaultRoute,
                    country: T.default.getCountryCode(),
                    hasLoggedInAccounts: N.default.getHasLoggedInAccounts()
                }));
                return (0, s.jsx)(Y, {
                    ...e,
                    ...t
                })
            }
        },
        275744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("506083");
            var s = n("37983"),
                a = n("884691"),
                r = n("730290"),
                l = n("803182"),
                i = n("446674"),
                o = n("437822"),
                u = n("697796"),
                d = n("524824"),
                c = n("393414"),
                h = n("271938"),
                f = n("291850"),
                E = n("49111"),
                _ = n("724210");

            function m(e) {
                let t = a.useCallback(t => {
                        if (function(e) {
                                var t;
                                let n = (0, l.matchPath)(e, {
                                    path: E.Routes.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                            }(t)) c.replaceWith(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                        }
                    }, [e.transitionTo]),
                    {
                        isAuthenticated: n,
                        loginStatus: m
                    } = (0, i.useStateFromStoresObject)([h.default], () => ({
                        isAuthenticated: h.default.isAuthenticated(),
                        loginStatus: h.default.getLoginStatus()
                    })),
                    {
                        location: p,
                        redirectTo: g
                    } = e,
                    [R, N] = a.useState(n);

                function A(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    } = e;
                    (0, u.handoffFromApp)({
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    }), N(!1)
                }
                return (a.useEffect(() => {
                    if (null != p) {
                        let {
                            handoff_key: e,
                            handoff_token: t
                        } = (0, r.parse)(p.search);
                        if (null != e && null != t) {
                            let n = null != g ? (0, d.getLoginHandoffSourceFromRedirectTo)(g) : void 0;
                            R ? o.default.logout(null).finally(() => {
                                A({
                                    handoffKey: e,
                                    handoffToken: t,
                                    handoffSource: n
                                })
                            }) : A({
                                handoffKey: e,
                                handoffToken: t,
                                handoffSource: n
                            })
                        }
                    }
                }, []), R || m === E.LoginStates.LOGGING_IN) ? (0, s.jsx)(f.LoginSpinner, {}) : (0, s.jsx)(f.default, {
                    ...e,
                    transitionTo: t
                })
            }
        },
        331085: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("70102"), n("222007");
            var s, a, r, l, i = n("37983"),
                o = n("884691"),
                u = n("981980"),
                d = n("872717"),
                c = n("77078"),
                h = n("308289"),
                f = n("905949"),
                E = n("605250"),
                _ = n("671278"),
                m = n("124969"),
                p = n("659500"),
                g = n("274515"),
                R = n("158998"),
                N = n("49111"),
                A = n("843455"),
                I = n("782340"),
                T = n("103957"),
                S = n("926622");
            (r = s || (s = {}))[r.INITIALIZING = 0] = "INITIALIZING", r[r.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", r[r.PENDING_FINISH = 2] = "PENDING_FINISH", r[r.PENDING_TICKET = 3] = "PENDING_TICKET", r[r.PENDING_LOGIN = 4] = "PENDING_LOGIN", r[r.FINISH = 5] = "FINISH", (l = a || (a = {}))[l.QR_CODE = 0] = "QR_CODE", l[l.CONFIRM = 1] = "CONFIRM";
            let C = n("527826"),
                O = new E.default("LoginQRSocket");

            function L(e) {
                let {
                    text: t = ""
                } = e, [n, s] = o.useState(!1);
                return o.useEffect(() => {
                    let e = new Image;
                    e.src = C, e.onload = () => s(!0), e.onerror = () => s(!0)
                }, [C]), o.useEffect(() => {
                    n && c.AccessibilityAnnouncer.announce(I.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
                }, [n]), (0, i.jsx)("div", {
                    className: T.qrCodeContainer,
                    children: "" !== t && n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(_.default, {
                            className: T.qrCode,
                            size: 160,
                            text: t
                        }), (0, i.jsx)("div", {
                            className: T.qrCodeOverlay,
                            children: (0, i.jsx)("img", {
                                src: C,
                                alt: ""
                            })
                        })]
                    }) : (0, i.jsx)("div", {
                        className: T.qrCodeOverlay,
                        "aria-label": I.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                        "aria-busy": !0,
                        children: (0, i.jsx)(c.Spinner, {
                            className: T.qrCode,
                            type: c.Spinner.Type.WANDERING_CUBES,
                            "aria-hidden": !0
                        })
                    })
                })
            }
            let x = e => {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    className: t,
                    children: n
                })
            };

            function v(e) {
                let {
                    state: t,
                    cancel: n,
                    errorMessage: s
                } = e;
                switch (t.step) {
                    case 0:
                    case 1:
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(L, {
                                text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                            }), (0, i.jsx)(m.Title, {
                                className: S.marginBottom8,
                                children: I.default.Messages.LOGIN_WITH_QR
                            }), null != s ? (0, i.jsx)(x, {
                                children: s
                            }) : (0, i.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                            })]
                        });
                    case 3:
                    case 2: {
                        let {
                            user: e
                        } = t;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(h.default, {
                                className: T.qrAvatar,
                                user: e,
                                size: c.AvatarSizes.SIZE_120,
                                isMobile: !0,
                                status: A.StatusTypes.ONLINE
                            }), (0, i.jsx)(m.Title, {
                                className: S.marginBottom8,
                                children: I.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                            }), (0, i.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_AS.format({
                                    username: "".concat(R.default.getUserTag(e))
                                })
                            }), (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.BLANK,
                                color: c.Button.Colors.LINK,
                                size: c.Button.Sizes.MIN,
                                onClick: n,
                                className: T.startOverButton,
                                children: I.default.Messages.QR_CODE_LOGIN_START_OVER
                            })]
                        })
                    }
                    case 4:
                    case 5:
                        return (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.WANDERING_CUBES
                        })
                }
            }

            function M(e) {
                let {
                    authTokenCallback: t
                } = e, {
                    state: n,
                    rsaKeyPair: s,
                    cancel: a,
                    handleFailure: r
                } = function(e) {
                    let [t, n] = o.useState(0), [s, a] = o.useState(!1), [r, l] = o.useState({
                        step: 0
                    }), [i, d] = o.useState(null), c = (0, f.default)(), h = o.useMemo(() => new u.default(1500, 3e4), []), E = o.useRef();
                    E.current = o.useCallback(() => {
                        l({
                            step: 0
                        }), c ? n(e => e + 1) : (O.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
                    }, [c]);
                    let _ = o.useCallback(() => {
                            (function(e) {
                                let {
                                    current: t
                                } = e;
                                if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                                return t
                            })(E)()
                        }, [E]),
                        m = o.useCallback(() => {
                            O.error("Could not complete QR code login, trying to restart with a new QR code."), l({
                                step: 0
                            }), !h.pending && h.fail(_)
                        }, [_, h]);
                    return o.useEffect(() => {
                        c && s && 0 === r.step && (O.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
                    }, [r, c, s, a]), o.useEffect(() => {
                        let t = Date.now(),
                            n = () => "".concat(Date.now() - t, "ms"),
                            s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                            a = new WebSocket(s);
                        O.info("[0ms] connecting to ".concat(s));
                        let r = e => O.info("[".concat(n(), "] ").concat(e)),
                            i = null,
                            o = null,
                            u = null,
                            c = null,
                            f = !0;

                        function E() {
                            if (null != i) return i;
                            throw Error("No key pair set")
                        }
                        let R = () => {
                            f ? (f = !1, a.send(JSON.stringify({
                                op: "heartbeat"
                            }))) : (r("heartbeat timeout, reconnecting."), a.close(), m())
                        };
                        return a.onmessage = async t => {
                            let {
                                data: n
                            } = t, s = JSON.parse(n);
                            switch (s.op) {
                                case "nonce_proof": {
                                    let e = s.encrypted_nonce,
                                        t = await (0, g.decryptNonce)(E(), e);
                                    r("computed nonce proof"), a.send(JSON.stringify({
                                        op: "nonce_proof",
                                        nonce: t
                                    }));
                                    return
                                }
                                case "pending_remote_init": {
                                    h.succeed(), p.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE);
                                    let e = await (0, g.publicKeyFingerprint)(E());
                                    if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                                    r("handshake complete awaiting remote auth."), l({
                                        step: 1,
                                        fingerprint: e
                                    });
                                    return
                                }
                                case "pending_login": {
                                    let e = s.ticket;
                                    null == e && m(), l({
                                        step: 4,
                                        ticket: e
                                    });
                                    return
                                }
                                case "pending_ticket": {
                                    p.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = s.encrypted_user_payload,
                                        t = await (0, g.decodeEncodedUserRecord)(E(), e);
                                    l({
                                        step: 3,
                                        user: t
                                    });
                                    return
                                }
                                case "pending_finish": {
                                    p.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting finish/cancel.");
                                    let e = s.encrypted_user_payload,
                                        t = await (0, g.decodeEncodedUserRecord)(E(), e);
                                    l({
                                        step: 2,
                                        user: t
                                    });
                                    return
                                }
                                case "finish": {
                                    p.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake finished.");
                                    let t = s.encrypted_token;
                                    l({
                                        step: 5
                                    });
                                    let n = await (0, g.decryptEncodedCiphertext)(E(), t);
                                    e(n);
                                    return
                                }
                                case "cancel":
                                    r("remote auth handshake cancelled."), _();
                                    return;
                                case "hello": {
                                    r("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                                    let e = s.heartbeat_interval;
                                    c = setTimeout(() => {
                                        c = null, R(), u = setInterval(R, e)
                                    }, Math.floor(e * Math.random()));
                                    return
                                }
                                case "heartbeat_ack":
                                    f = !0
                            }
                        }, a.onopen = async () => {
                            i = await (0, g.generateRsaKeyPair)(), o = await (0, g.serializePublicKey)(i);
                            let e = await (0, g.publicKeyFingerprint)(i);
                            r("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                                op: "init",
                                encoded_public_key: o
                            })), d(i)
                        }, a.onclose = e => {
                            r("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m()
                        }, a.onerror = e => {
                            r("disconnected, error: ".concat(JSON.stringify(e))), m()
                        }, () => {
                            r("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), h.cancel(), null != c && clearTimeout(c), null != u && clearInterval(u)
                        }
                    }, [_, e, t, h, m]), {
                        state: r,
                        rsaKeyPair: i,
                        cancel: _,
                        handleFailure: m
                    }
                }(t), l = function(e) {
                    switch (e) {
                        case 0:
                        case 1:
                            return 0;
                        case 3:
                        case 2:
                        case 4:
                        case 5:
                            return 1
                    }
                }(n.step);
                return o.useEffect(() => {
                    4 === n.step && null != n.ticket && d.default.post({
                        url: N.Endpoints.REMOTE_AUTH_LOGIN,
                        body: {
                            ticket: n.ticket
                        },
                        oldFormErrors: !0
                    }).then(async e => {
                        if (null != s) try {
                            let n = await (0, g.decryptEncodedCiphertext)(s, e.body.encrypted_token);
                            t(n)
                        } catch (e) {
                            r()
                        } else r()
                    }).catch(() => {
                        r()
                    })
                }, [n, t, s, r]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: T.verticalSeparator
                    }), (0, i.jsx)(c.Sequencer, {
                        fillParent: !0,
                        className: T.qrLogin,
                        step: l,
                        steps: [0, 1],
                        children: (0, i.jsx)("div", {
                            className: T.qrLoginInner,
                            children: (0, i.jsx)(v, {
                                state: n,
                                cancel: a
                            })
                        })
                    })]
                })
            }
        },
        598489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                l = n("124969"),
                i = n("328763");

            function o(e) {
                let {
                    children: t,
                    className: n,
                    ...a
                } = e, o = t();
                return (0, s.jsx)(l.default, {
                    ...a,
                    className: r(n, i.container),
                    contentClassName: i.content,
                    children: o.map((e, t) => (0, s.jsx)("div", {
                        className: i.column,
                        style: {
                            flexBasis: "".concat(100 / o.length, "%")
                        },
                        children: e
                    }, t))
                })
            }
        },
        860959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return el
                }
            }), n("781738"), n("222007"), n("794252");
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("730290"),
                o = n("506838"),
                u = n("759843"),
                d = n("446674"),
                c = n("862337"),
                h = n("77078"),
                f = n("437822"),
                E = n("678916"),
                _ = n("816540"),
                m = n("208266"),
                p = n("428958"),
                g = n("307439"),
                R = n("765825"),
                N = n("715570"),
                A = n("486252"),
                I = n("378020"),
                T = n("980976"),
                S = n("534438"),
                C = n("946859"),
                O = n("791160"),
                L = n("434824"),
                x = n("770032"),
                v = n("165926"),
                M = n("25033"),
                y = n("255403"),
                D = n("2581"),
                b = n("644417"),
                G = n("697543"),
                F = n("79345"),
                U = n("447997"),
                P = n("970366"),
                B = n("271938"),
                j = n("350522"),
                k = n("476108"),
                w = n("124969"),
                H = n("980428"),
                V = n("599110"),
                W = n("659500"),
                Y = n("159885"),
                K = n("404432"),
                z = n("719451"),
                q = n("598489"),
                Z = n("49111"),
                Q = n("771848"),
                X = n("492397"),
                J = n("56235"),
                $ = n("935583"),
                ee = n("782340"),
                et = n("266100"),
                en = n("926622");
            d.default.initialize();
            let es = /\.$/,
                ea = e => Array.isArray(e) ? e.map(e => e.replace(es, "")).join(". ").trim() : e;
            class er extends a.PureComponent {
                get registrationSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: n
                    } = this.props;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    if (null != n) {
                        if (null != n.guild) return "guild_invite";
                        if (null != n.channel) return "dm_invite";
                        else if (null != n.inviter) return "friend_invite"
                    }
                    return null
                }
                hasConsent() {
                    let {
                        consentRequired: e
                    } = this.props, {
                        consent: t
                    } = this.state;
                    return null != e && t
                }
                componentDidMount() {
                    this.redirectIfAuthenticated(), R.default.trackExposure({
                        location: "0ba758_1"
                    });
                    let {
                        giftCodeSKU: e,
                        invite: t
                    } = this.props;
                    V.default.track(Z.AnalyticEvents.REGISTER_VIEWED, {
                        location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                        registration_source: this.registrationSource,
                        ...null != e ? (0, O.default)(e, !1, !1) : {}
                    }, {
                        flush: !0
                    }), null == this.props.consentRequired && f.default.getLocationMetadata(), (0, P.trackAppUIViewed)("register")
                }
                componentWillUnmount() {
                    this._retryTimer.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        consentRequired: n
                    } = e, {
                        consentRequiredProp: s
                    } = t;
                    return null == s && null != n ? {
                        consent: !n,
                        consentRequiredProp: n
                    } : {
                        consentRequiredProp: n
                    }
                }
                componentDidUpdate(e, t) {
                    let {
                        apiErrors: n,
                        authenticated: s,
                        isUnderage: a,
                        invite: r,
                        onChangeStep: l
                    } = this.props, {
                        parsedDateOfBirth: i
                    } = this.state;
                    (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                        isRateLimited: !0
                    }), this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, () => {
                        this.setState({
                            isRateLimited: !1
                        })
                    }))), s && !e.authenticated && ((0, v.setNewUser)(J.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
                    let o = Q.RegistrationSteps.FULL;
                    a || this.hasError("date_of_birth") ? o = Q.RegistrationSteps.AGE_GATE : null != r && (null != r.guild || null != r.channel) && (o = Q.RegistrationSteps.INVITE), l(o)
                }
                redirectIfAuthenticated() {
                    let {
                        authenticated: e,
                        transitionTo: t,
                        redirectTo: n
                    } = this.props;
                    e && t(null != n ? n : k.default.defaultRoute)
                }
                async handleRegister() {
                    let {
                        email: e,
                        username: t,
                        globalName: n,
                        password: s,
                        consent: a,
                        parsedDateOfBirth: r
                    } = this.state, {
                        invite: l,
                        guildTemplate: i,
                        giftCode: o,
                        onRegister: u,
                        usernameSuggestion: d,
                        isMobileWebInviteRegistration: c
                    } = this.props, h = null != l ? l.code : null, f = null != o ? o.skuId : null, E = g.usePromoEmailConsentStore.getState(), _ = (0, Y.isNullOrEmpty)(d) ? null : t === d, m = X.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
                    W.ComponentDispatch.dispatch(Z.ComponentActions.WAVE_EMPHASIZE);
                    try {
                        c || null == l ? await (0, N.registerFull)({
                            email: e,
                            username: m,
                            globalName: n,
                            consent: a,
                            password: s,
                            invite: h,
                            usedUsernameSuggestion: _,
                            guildTemplateCode: null == i ? void 0 : i.code,
                            giftCodeSKUId: f,
                            birthday: r,
                            promoEmailConsent: E.required ? E : null
                        }) : await (0, N.default)({
                            consent: a,
                            invite: h,
                            giftCodeSKUId: f,
                            usedUsernameSuggestion: _,
                            globalName: n
                        }), null == u || u()
                    } catch (e) {}
                }
                hasError(e) {
                    return null != this.props.apiErrors[e]
                }
                renderConsentComponents() {
                    let {
                        consent: e
                    } = this.state, {
                        consentRequired: t,
                        registrationCopyExperimentConfig: {
                            enableNewCopy: n,
                            hasProminentCopy: a
                        }
                    } = this.props, r = null, l = null;
                    return t ? l = (0, s.jsx)(A.default, {
                        value: e,
                        onChange: e => this.setState({
                            consent: e
                        }),
                        subText: ee.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        })
                    }) : r = (0, s.jsx)(w.SubText, {
                        isProminent: !!a,
                        className: en.marginTop8,
                        children: n ? ee.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                            buttonText: ee.default.Messages.CONTINUE,
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        }) : ee.default.Messages.TERMS_PRIVACY.format({
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        })
                    }), {
                        subText: r,
                        consentText: l
                    }
                }
                renderInviteResolving() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = e => {
                        this.setState({
                            globalName: e
                        })
                    }, n = this.state.globalName;
                    return (0, s.jsxs)(w.default, {
                        className: e,
                        children: [(0, s.jsx)(z.InviteResolvingHeader, {}), (0, s.jsxs)(w.Block, {
                            className: en.marginTop40,
                            children: [(0, s.jsx)(h.FormTitle, {
                                children: ee.default.Messages.FORM_LABEL_USERNAME
                            }), (0, s.jsx)(h.Tooltip, {
                                text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                position: "right",
                                color: h.Tooltip.Colors.BRAND,
                                children: e => {
                                    let {
                                        onMouseEnter: a,
                                        onMouseLeave: r
                                    } = e;
                                    return (0, s.jsx)(w.Input, {
                                        autoFocus: !0,
                                        className: en.marginBottom8,
                                        name: "username",
                                        value: n,
                                        placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                        onChange: t,
                                        onMouseEnter: a,
                                        onMouseLeave: r
                                    })
                                }
                            }), (0, s.jsx)(w.Button, {
                                className: en.marginTop20,
                                disabled: !0,
                                children: ee.default.Messages.CONTINUE
                            }), (0, s.jsx)(w.SubText, {
                                disabled: !0,
                                className: en.marginTop8,
                                children: ee.default.Messages.TERMS_PRIVACY.format({
                                    termsURL: Z.MarketingURLs.TERMS,
                                    privacyURL: Z.MarketingURLs.PRIVACY
                                })
                            }), X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                                look: w.Button.Looks.LINK,
                                color: w.Button.Colors.LINK,
                                disabled: !0,
                                className: en.marginTop20,
                                children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                            })]
                        })]
                    })
                }
                renderInviteHeader() {
                    let {
                        invite: e
                    } = this.props;
                    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(S.default, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(I.GuildScheduledEventInviteHeader, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, s.jsx)(z.default, {
                        invite: e
                    })
                }
                renderInviteButton() {
                    let {
                        invite: e,
                        registering: t,
                        consentRequired: n
                    } = this.props, {
                        consent: a
                    } = this.state, r = w.Button.Colors.BRAND, l = ee.default.Messages.CONTINUE;
                    return (null == e ? void 0 : e.stage_instance) != null && (r = w.Button.Colors.GREEN, l = ee.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(h.Tooltip, {
                        text: !a && n ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(w.Button, {
                                type: "submit",
                                submitting: t,
                                disabled: !this.hasConsent(),
                                color: r,
                                children: l
                            })
                        })
                    })
                }
                renderInvite() {
                    let {
                        invite: e,
                        authBoxClassName: t,
                        apiErrors: {
                            username: n,
                            global_name: a
                        }
                    } = this.props, {
                        subText: r,
                        consentText: l
                    } = this.renderConsentComponents(), i = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                        this.setState({
                            globalName: e
                        })
                    }, u = this.state.globalName;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)(w.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: t,
                            children: [this.renderInviteHeader(), i ? (0, s.jsx)("div", {
                                className: et.divider
                            }) : null, (0, s.jsxs)(w.Block, {
                                className: i ? void 0 : en.marginTop40,
                                children: [(0, s.jsx)(h.FormTitle, {
                                    error: ea(null != a ? a : n),
                                    children: ee.default.Messages.DISPLAY_NAME
                                }), (0, s.jsx)(h.Tooltip, {
                                    text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: h.Tooltip.Colors.BRAND,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: r
                                        } = e;
                                        return (0, s.jsx)(w.Input, {
                                            autoFocus: !0,
                                            className: en.marginBottom8,
                                            name: "global_name",
                                            value: u,
                                            placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: o,
                                            error: null != n || null != a ? "" : null,
                                            onMouseEnter: t,
                                            onMouseLeave: r
                                        })
                                    }
                                }), (0, s.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                }), this.renderInviteButton(), r, l, X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                                    look: w.Button.Looks.LINK,
                                    color: w.Button.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: en.marginTop20,
                                    children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            })]
                        }), null != e && i ? (0, s.jsx)(w.default, {
                            className: en.marginTop20,
                            children: (0, s.jsx)(S.StageInviteFooter, {
                                guild: e.guild,
                                onlineCount: e.approximate_presence_count
                            })
                        }) : null]
                    })
                }
                renderErrorMessage() {
                    let {
                        apiErrors: {
                            message: e
                        }
                    } = this.props;
                    return "string" != typeof e ? null : (0, s.jsx)(w.SubText, {
                        className: l(en.marginTop20, et.errorMessage),
                        children: e
                    })
                }
                renderFull(e, t) {
                    let {
                        email: n,
                        username: r,
                        globalName: i,
                        password: o,
                        consent: u,
                        parsedDateOfBirth: d,
                        globalNameFocused: c,
                        emailClientError: f,
                        usernameClientError: E,
                        passwordClientError: _,
                        dateOfBirthClientError: p
                    } = this.state, {
                        registering: g,
                        consentRequired: R,
                        isMobileWebInviteRegistration: N,
                        uniqueUsernameRegistrationConfig: {
                            suggestions: A
                        },
                        authBoxClassName: I,
                        apiErrors: {
                            email: S,
                            username: C,
                            global_name: O,
                            password: L,
                            date_of_birth: x
                        } = {},
                        hasLoggedInAccounts: v,
                        registrationCopyExperimentConfig: {
                            hasCopyAboveButton: M
                        }
                    } = this.props, {
                        subText: b,
                        consentText: G
                    } = this.renderConsentComponents(), F = this.renderErrorMessage(), P = (0, s.jsx)(h.Tooltip, {
                        text: !u && R ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(w.Button, {
                                type: "submit",
                                submitting: g,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: ee.default.Messages.CONTINUE
                            })
                        })
                    }), B = async () => {
                        this.setState({
                            usernameFocused: !0
                        }), A && i.length > 0 && !D.default.wasRegistrationSuggestionFetched(i) && await y.default.fetchSuggestionsRegistration(i)
                    }, j = null != e ? (0, s.jsx)(a.Fragment, {
                        children: e()
                    }, "custom-header") : (0, s.jsx)(w.Title, {
                        children: ee.default.Messages.REGISTER_TITLE
                    }, "title"), k = (0, s.jsxs)(w.Block, {
                        className: en.marginTop20,
                        children: [(0, s.jsx)(w.Input, {
                            autoFocus: !0,
                            className: en.marginBottom20,
                            label: ee.default.Messages.FORM_LABEL_EMAIL,
                            name: "email",
                            value: n,
                            onChange: e => this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != f ? f : ea(S),
                            type: "email",
                            setRef: e => {
                                this.emailRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(w.Input, {
                            label: ee.default.Messages.DISPLAY_NAME,
                            className: en.marginBottom20,
                            name: "global_name",
                            value: i,
                            onChange: e => this.setState({
                                globalName: e
                            }),
                            error: ea(O),
                            maxLength: $.MAX_DISPLAY_NAME_LENGTH,
                            setRef: e => {
                                this.globalNameRef = e
                            },
                            onFocus: () => this.setState({
                                globalNameFocused: !0
                            }),
                            onBlur: () => this.setState({
                                globalNameFocused: !1
                            })
                        }), (0, s.jsx)(U.default, {
                            show: c,
                            top: -12,
                            bottom: 20,
                            children: (0, s.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                            })
                        }), (0, s.jsxs)("div", {
                            onBlur: () => this.setState({
                                usernameFocused: !1
                            }),
                            onFocus: B,
                            tabIndex: -1,
                            children: [(0, s.jsx)(w.Input, {
                                label: ee.default.Messages.FORM_LABEL_USERNAME,
                                className: en.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: e => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                                    })
                                },
                                error: null != E ? E : ea(C),
                                setRef: e => {
                                    this.usernameRef = e
                                },
                                required: !0
                            }), this.renderUsernameValidation()]
                        }), (0, s.jsx)(w.Input, {
                            label: ee.default.Messages.FORM_LABEL_PASSWORD,
                            name: "password",
                            value: o,
                            onChange: e => this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != _ ? _ : ea(L),
                            type: "password",
                            setRef: e => {
                                this.passwordRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(m.default, {
                            label: ee.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            wrapperClassName: en.marginTop20,
                            name: "date_of_birth",
                            onChange: this.handleBirthdayChange,
                            ref: this.dateOfBirthRef,
                            error: null != p ? p : ea(x),
                            value: d,
                            required: !0
                        }), M && b, (0, s.jsx)(T.default, {}), P, F, G, !M && b, X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                            look: N ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                            color: N ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: en.marginTop20,
                            children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    });
                    return t ? (0, s.jsx)(q.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: l(I, et.horizontalAuthBox),
                        children: () => [j, (0, s.jsxs)("div", {
                            className: et.flex,
                            children: [(0, s.jsx)(w.Title, {
                                className: et.createAccountTemplateHeader,
                                children: ee.default.Messages.REGISTER_TITLE
                            }), k]
                        }, "register-title")]
                    }) : (0, s.jsxs)(w.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: I,
                        children: [v && !N ? (0, s.jsx)(w.Button, {
                            onClick: this.handleGotoLogin,
                            look: w.Button.Looks.LINK,
                            color: w.Button.Colors.PRIMARY,
                            className: et.goBackButton,
                            children: (0, s.jsxs)("div", {
                                className: et.content,
                                children: [(0, s.jsx)(H.default, {
                                    width: 16,
                                    height: 16,
                                    className: et.caret
                                }), (0, s.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: ee.default.Messages.AGE_GATE_GO_BACK
                                })]
                            })
                        }) : null, j, k]
                    })
                }
                render() {
                    let {
                        isUnderage: e,
                        isMobileWebInviteRegistration: t
                    } = this.props;
                    if (e || this.hasError("date_of_birth")) return (0, s.jsx)(_.default, {});
                    let {
                        invite: n,
                        giftCode: a,
                        guildTemplate: r
                    } = this.props, l = null != n && null == n.guild && null == n.channel && null != n.inviter;
                    return null == n || l || t ? null != r ? this.renderFull(() => (0, s.jsx)(L.default, {
                        guildTemplate: r
                    }), !0) : null != a ? this.renderFull(() => (0, s.jsx)(K.default, {
                        giftCode: a
                    })) : null != n && l && n.state === Z.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(z.default, {
                        invite: n,
                        isRegister: !0
                    })) : this.renderFull() : n.state === Z.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                }
                constructor(e) {
                    var t;
                    super(e), this.dateOfBirthRef = a.createRef(), this._retryTimer = new c.Timeout, this.handleGotoLogin = e => {
                        let t;
                        let {
                            email: n
                        } = this.state, {
                            giftCode: s,
                            guildTemplate: a,
                            invite: r,
                            location: l,
                            onLoginStart: o,
                            redirectTo: u,
                            transitionTo: d,
                            isMobileWebInviteRegistration: c
                        } = this.props;
                        if (c) {
                            null == o || o(e);
                            return
                        }
                        let h = null != l ? (0, i.parse)(l.search) : {};
                        null != r ? t = Z.Routes.INVITE_LOGIN(r.code) : null != s ? t = Z.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = Z.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = Z.Routes.LOGIN, h.redirect_to = u) : (t = Z.Routes.LOGIN, "" !== n && (h = {
                            email: n
                        })), f.default.loginReset(), d(t, {
                            search: (0, i.stringify)(h)
                        }), null == o || o(e), W.ComponentDispatch.dispatch(Z.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSubmit = e => {
                        null == e || e.preventDefault();
                        let {
                            email: t,
                            username: n,
                            password: s,
                            parsedDateOfBirth: a
                        } = this.state, {
                            invite: r,
                            consentRequired: l
                        } = this.props;
                        if (null !== l) {
                            if (null == r) {
                                let e = !1;
                                if (0 === t.length && (this.setState({
                                        emailClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === n.length && (this.setState({
                                        usernameClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === s.length && (this.setState({
                                        passwordClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), null == a && (this.setState({
                                        dateOfBirthClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), e) return
                            }
                            this.handleRegister()
                        }
                    }, this.handleBirthdayChange = e => {
                        this.setState({
                            parsedDateOfBirth: e
                        }), null != e && this.setState({
                            dateOfBirthClientError: null
                        })
                    }, this.renderUsernameValidation = () => {
                        let {
                            username: e,
                            globalName: t,
                            usernameFocused: n
                        } = this.state, {
                            usernameSuggestion: a,
                            uniqueUsernameRegistrationConfig: {
                                livecheckEnabled: r
                            }
                        } = this.props;
                        return (0, s.jsx)(ei, {
                            username: e,
                            suggestion: a,
                            livecheckEnabled: r,
                            globalName: t,
                            isUsernameFocused: n,
                            onClickSuggestion: () => {
                                null != this.usernameRef && this.usernameRef.focus(), null != a && a.length > 0 && this.setState({
                                    username: a
                                })
                            }
                        })
                    };
                    let n = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        email: null !== (t = n.email) && void 0 !== t ? t : "",
                        username: "",
                        globalName: "",
                        password: "",
                        parsedDateOfBirth: null,
                        emailClientError: null,
                        usernameClientError: null,
                        passwordClientError: null,
                        dateOfBirthClientError: null,
                        consent: !e.consentRequired,
                        consentRequiredProp: e.consentRequired,
                        isRateLimited: !1,
                        globalNameFocused: !1,
                        usernameFocused: !1
                    }
                }
            }

            function el(e) {
                let t = (0, d.useStateFromStoresObject)([j.default, B.default, E.default, M.default, x.default], () => ({
                        consentRequired: j.default.getAuthenticationConsentRequired(),
                        registering: B.default.getRegisterStatus() === Z.RegistrationStates.REGISTERING,
                        apiErrors: B.default.getErrors(),
                        authenticated: B.default.isAuthenticated(),
                        isUnderage: E.default.isUnderageAnonymous(),
                        country: M.default.getCountryCode(),
                        hasLoggedInAccounts: x.default.getHasLoggedInAccounts()
                    })),
                    n = (0, G.useUURegistrationExperiment)(),
                    r = (0, d.useStateFromStores)([D.default], () => D.default.registrationUsernameSuggestion()),
                    [l, i] = a.useState(Q.RegistrationSteps.FULL);
                return (0, p.default)({
                    type: u.ImpressionTypes.VIEW,
                    name: u.ImpressionNames.USER_REGISTRATION,
                    properties: {
                        impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                        step: l
                    }
                }, {}, [l]), (0, s.jsx)(er, {
                    onChangeStep: e => i(e),
                    registrationCopyExperimentConfig: R.default.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: r,
                    ...e,
                    ...t
                })
            }

            function ei(e) {
                let t, {
                        username: n,
                        suggestion: a,
                        globalName: r,
                        livecheckEnabled: l,
                        isUsernameFocused: i,
                        onClickSuggestion: u
                    } = e,
                    d = (0, F.useUsernameStatus)(n, l, !0),
                    c = l && n.length > 0;
                return t = c ? (0, o.match)(d).with({
                    type: b.NameValidationState.ERROR,
                    message: o.P.select()
                }, e => (0, s.jsx)(h.Text, {
                    className: et.messageNegative,
                    variant: "text-sm/normal",
                    children: e
                })).with({
                    type: b.NameValidationState.AVAILABLE,
                    message: o.P.select()
                }, e => (0, s.jsx)(h.Text, {
                    className: et.messagePositive,
                    variant: "text-sm/normal",
                    children: e
                })).otherwise(() => (0, s.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                })) : null != a && a.length > 0 && r.length > 0 ? (0, s.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: a,
                        nameOnClick: u
                    })
                }) : (0, s.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                }), (0, s.jsx)(U.default, {
                    show: c && (null == d ? void 0 : d.type) === b.NameValidationState.ERROR || i,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
            er.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: e => n.g.location.assign(e)
            }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
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
            var r = a
        },
        905949: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var s = n("884691");

            function a() {
                return "undefined" == typeof document || "visible" === document.visibilityState
            }

            function r() {
                let [e, t] = (0, s.useState)(a());
                return (0, s.useEffect)(() => {
                    function e() {
                        t(a())
                    }
                    return window.addEventListener("visibilitychange", e), () => {
                        window.removeEventListener("visibilitychange", e)
                    }
                }, [t]), e
            }
        },
        26772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("872717"),
                a = n("913144"),
                r = n("437822"),
                l = n("697796"),
                i = n("524824"),
                o = n("72177"),
                u = n("599110"),
                d = n("316272"),
                c = n("49111");

            function h(e, t) {
                u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
                    authenticated: e,
                    handoff_source: t
                })
            }
            class f extends d.default {
                _initialize() {
                    a.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                _terminate() {
                    a.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                handleHandoff(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        fingerprint: a,
                        handoffSource: o
                    } = e;
                    null != n ? s.default.post({
                        url: c.Endpoints.HANDOFF_EXCHANGE,
                        body: {
                            key: t,
                            handoff_token: n
                        }
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        (0, l.handoffSetUser)(t.user), r.default.loginToken(t.token, !1), h(!0, o)
                    }, e => {
                        if (null != a && h(!1, o), r.default.setFingerprint(a), (0, l.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                            var t;
                            u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: o
                            })
                        }
                    }) : null != a ? (r.default.setFingerprint(a), h(!1, o), (0, l.handoffEnd)()) : (r.default.setFingerprint(a), (0, l.handoffUnavailable)())
                }
                constructor(...e) {
                    super(...e), this.handleEnd = e => {
                        let {
                            handoffToken: t,
                            fingerprint: n
                        } = e, s = o.default.key;
                        null != s && o.default.isHandoffAvailable() ? this.handleHandoff({
                            handoffKey: s,
                            handoffToken: t,
                            fingerprint: n,
                            handoffSource: void 0
                        }) : (r.default.setFingerprint(null), (0, l.handoffUnavailable)())
                    }
                }
            }
            var E = new f
        },
        2021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983"),
                a = n("884691"),
                r = n("90915"),
                l = n("266491");
            class i extends a.Component {
                render() {
                    let {
                        children: e,
                        location: t,
                        history: n,
                        staticContext: i,
                        match: o,
                        ...u
                    } = this.props, d = null, c = null;
                    return a.Children.forEach(e, e => {
                        if (null == d && a.isValidElement(e)) {
                            let {
                                component: s,
                                render: l,
                                ...o
                            } = e.props, u = o.path || o.from;
                            null != (d = null != u ? (0, r.matchPath)(t.pathname, {
                                ...o,
                                path: u
                            }) : null) && (o = {
                                ...o,
                                key: u,
                                location: t,
                                match: d,
                                history: n,
                                staticContext: i
                            }, null != s ? c = a.createElement(s, o) : null != l && (c = l(o)))
                        }
                    }), (0, s.jsx)(l.default, {
                        ...u,
                        children: c
                    })
                }
            }
            var o = (0, r.withRouter)(i)
        },
        731109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                submitDateOfBirth: function() {
                    return u
                },
                preventUnderageRegistration: function() {
                    return d
                },
                logoutUnderageNewUser: function() {
                    return c
                }
            });
            var s = n("872717"),
                a = n("913144"),
                r = n("395724"),
                l = n("599110"),
                i = n("586391"),
                o = n("49111");

            function u(e, t) {
                return (0, r.default)(e, t), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: i.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), s.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let n = e.body;
                    a.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        678916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("160679"),
                a = n("446674"),
                r = n("913144"),
                l = n("773336"),
                i = n("586391");
            let o = null,
                u = "underage";
            class d extends a.default.Store {
                isUnderageAnonymous() {
                    if (l.isPlatformEmbedded) {
                        if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
                    } else {
                        let e = s.parse(document.cookie)[u];
                        return null != e
                    }
                    return !1
                }
            }
            d.displayName = "AgeGateStore";
            var c = new d(r.default, {
                AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
                    o = Date.now(), document.cookie = "".concat(u, "=1;path=/")
                },
                LOGIN_SUCCESS: function() {
                    o = null, document.cookie = "".concat(u, "=1;path=/;max-age=0")
                }
            })
        },
        816540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("393414"),
                l = n("124969"),
                i = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("177977");
            let c = () => (0, r.transitionTo)(o.Routes.LOGIN);
            var h = e => {
                let {
                    authBoxClassName: t,
                    underageMessage: r
                } = e;
                return (0, s.jsxs)(l.default, {
                    className: t,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        src: n("803452"),
                        className: d.img
                    }), (0, s.jsx)(l.Title, {
                        className: d.title,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, s.jsx)(l.SubTitle, {
                        className: d.subtitle,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != r ? r : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                        })
                    }), (0, s.jsx)(a.Button, {
                        fullWidth: !0,
                        onClick: c,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                    })]
                })
            }
        },
        208266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("424973");
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("866227"),
                o = n.n(i),
                u = n("77078"),
                d = n("954419"),
                c = n("782340"),
                h = n("512427");
            let f = o().localeData().months(),
                E = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                _ = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: f[e]
                })),
                m = /[a-zA-Z0-9]/;

            function p(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: r
                } = e, [l, i] = a.useState("");
                a.useEffect(() => {
                    if ("" !== l) {
                        let e = setTimeout(() => i(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [l, i]);
                let o = a.useCallback(e => {
                    if (m.test(e.key)) {
                        let s = "".concat(l).concat(e.key.toLowerCase()),
                            a = t.find(e => e.label.toLowerCase().startsWith(s));
                        null != a && n(a.value), i(s)
                    }
                }, [n, i, l, t]);
                return (0, s.jsx)("div", {
                    onKeyDown: o,
                    children: r
                })
            }

            function g() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    s = e.indexOf("Y");
                return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: s,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let R = a.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: r,
                    onChange: i,
                    onPopulated: f,
                    error: m,
                    autoFocus: R,
                    required: N
                } = e, {
                    day: A,
                    setDay: I,
                    month: T,
                    setMonth: S,
                    year: C,
                    setYear: O
                } = function(e) {
                    let t = null,
                        n = null,
                        s = null;
                    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
                    let [r, l] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
                    return {
                        day: r,
                        setDay: l,
                        month: i,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(n), L = a.useMemo(() => null != A && null != T && null != C ? o("".concat(A, "/").concat(T, "/").concat(C), "DD/MM/YYYY") : null, [A, T, C]);
                a.useEffect(() => {
                    i((null == L ? void 0 : L.isValid()) ? L : null)
                }, [L, i]);
                let x = m;
                null != L && !L.isValid() && (x = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let v = function() {
                        let e = new Date().getFullYear(),
                            t = a.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return a.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [M, y] = a.useState(R ? 0 : -1),
                    D = a.useRef(null),
                    b = a.useRef(null),
                    G = a.useRef(null),
                    F = a.useMemo(g, []),
                    U = a.useCallback(() => {
                        var e, t, n, s;
                        switch (null === (e = F[M]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = D.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = b.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (s = G.current) || void 0 === s || s.focus()
                        }
                    }, [M, D, b, G, F]);
                a.useEffect(() => {
                    setTimeout(U, 500)
                }, []), a.useEffect(() => {
                    if (M >= F.length) {
                        null == f || f();
                        return
                    }
                    U()
                }, [M, U]);
                let P = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = F[e];
                    switch (t) {
                        case "day":
                            P.push({
                                key: "day",
                                input: (0, s.jsx)(p, {
                                    options: E,
                                    selectOption: I,
                                    children: (0, s.jsx)(d.default, {
                                        ref: D,
                                        className: h.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: E,
                                        value: A,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            I(n), y(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            P.push({
                                key: "month",
                                input: (0, s.jsx)(p, {
                                    options: _,
                                    selectOption: S,
                                    children: (0, s.jsx)(d.default, {
                                        ref: b,
                                        className: h.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: _,
                                        value: T,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            S(n), y(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            P.push({
                                key: "year",
                                input: (0, s.jsx)(p, {
                                    options: v,
                                    selectOption: O,
                                    children: (0, s.jsx)(d.default, {
                                        ref: G,
                                        className: h.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: v,
                                        value: C,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            O(n), y(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, s.jsxs)("fieldset", {
                    className: l(h.container, r),
                    children: [(0, s.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: N,
                        error: x,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, s.jsx)("div", {
                        className: h.inputs,
                        children: P.map((e, t) => {
                            let {
                                key: n,
                                input: a
                            } = e;
                            return (0, s.jsx)("div", {
                                tabIndex: t + 1,
                                className: h[n],
                                children: a
                            }, n)
                        })
                    })]
                })
            });
            var N = R
        },
        524824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoginHandoffSource: function() {
                    return a
                },
                getLoginHandoffSourceFromRedirectTo: function() {
                    return o
                }
            });
            var s, a, r = n("361572"),
                l = n("49111"),
                i = n("724210");

            function o(e) {
                let t = decodeURIComponent(e),
                    n = (0, r.tryParseChannelPath)(t);
                return null != n && n.channelId === i.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === l.Routes.SETTINGS(l.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
            }(s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"
        },
        771848: function(e, t, n) {
            "use strict";
            var s, a, r, l;
            n.r(t), n.d(t, {
                RegistrationSteps: function() {
                    return a
                }
            }), (r = s || (s = {})).VIEWED = "viewed", r.SUBMITTED = "submitted", r.RESEND_CODE = "resend_code", r.INPUT_ERROR = "input_error", r.RESPONSE_ERROR = "response_error", r.SUCCESS = "success", (l = a || (a = {})).IDENTITY = "identity", l.DISPLAY_NAME = "display_name", l.ACCOUNT_INFORMATION = "account_information", l.FULL = "full", l.AGE_GATE = "age_gate", l.INVITE = "invite", l.SMS_VERIFY = "sms_verify"
        },
        765825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-04_registration_copy_updates",
                label: "Registration Copy Updates",
                defaultConfig: {
                    enableNewCopy: !1,
                    hasCopyAboveButton: !1,
                    hasProminentCopy: !1
                },
                treatments: [{
                    id: 1,
                    label: "Continue / Copy Above Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 2,
                    label: "Continue / Copy Below Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !1,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 3,
                    label: "Continue / Copy Above Button / Normal Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !1
                    }
                }]
            })
        },
        395724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("866227"),
                a = n.n(s),
                r = n("599110"),
                l = n("49111");

            function i(e, t) {
                r.default.track(l.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > a().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        715570: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                registerFull: function() {
                    return m
                }
            });
            var s = n("866227"),
                a = n.n(s),
                r = n("759843"),
                l = n("913144"),
                i = n("599417"),
                o = n("731109"),
                u = n("271938"),
                d = n("599110"),
                c = n("840707"),
                h = n("395724"),
                f = n("49111"),
                E = n("586391");

            function _(e) {
                let {
                    invite: t = null,
                    giftCodeSKUId: n = null,
                    ...s
                } = e;
                return m({
                    ...s,
                    invite: t,
                    giftCodeSKUId: n
                })
            }

            function m(e) {
                let {
                    email: t,
                    phoneToken: n,
                    username: s,
                    globalName: _,
                    consent: m,
                    password: p,
                    guildTemplateCode: g,
                    birthday: R,
                    invite: N = null,
                    giftCodeSKUId: A = null,
                    multiStep: I = !1,
                    promoEmailConsent: T = null,
                    usedUsernameSuggestion: S = null
                } = e;
                return l.default.dispatch({
                    type: "REGISTER",
                    birthday: I ? R : null
                }), null != R && ((0, h.default)(R, f.AnalyticsSections.REGISTER), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                    source: E.AgeGateSource.REGISTER,
                    action: E.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), ! function(e) {
                    let t;
                    let n = a().diff(e, "years");
                    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(f.AnalyticEvents.USER_AGE_SUBMITTED, {
                        age_bucket: t
                    }))
                }(R)), c.default.post({
                    url: f.Endpoints.REGISTER,
                    body: {
                        fingerprint: u.default.getFingerprint(),
                        email: t,
                        username: s,
                        global_name: _,
                        password: p,
                        invite: N,
                        consent: m,
                        phone_token: n,
                        date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                        gift_code_sku_id: A,
                        guild_template_code: g,
                        promotional_email_opt_in: null == T ? void 0 : T.checked
                    },
                    trackedActionData: {
                        event: r.NetworkActionNames.USER_REGISTER,
                        properties: {
                            invite_code: N,
                            used_username_suggestion: S,
                            promotional_email_opt_in: null == T ? void 0 : T.checked,
                            promotional_email_pre_checked: null == T ? void 0 : T.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then(e => {
                    l.default.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    }), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                        source: E.AgeGateSource.REGISTER,
                        action: E.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                }, e => {
                    let t = new i.default(e);
                    throw l.default.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(E.AgeGateSource.REGISTER), d.default.track(f.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage("email"),
                        phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                        password_error_reason: t.getFirstFieldErrorMessage("password"),
                        username_error_reason: t.getFirstFieldErrorMessage("username"),
                        global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
                    }), e
                })
            }
        },
        486252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                l = n("77078"),
                i = n("145131"),
                o = n("124969"),
                u = n("662617"),
                d = n("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: n,
                    subText: a,
                    muted: c,
                    marginTopStyle: h
                } = e;
                return (0, s.jsx)(i.default, {
                    className: null != h ? h : d.marginTop20,
                    align: i.default.Align.CENTER,
                    children: (0, s.jsx)(l.Checkbox, {
                        value: t,
                        type: l.Checkbox.Types.INVERTED,
                        onChange: (e, t) => n(t),
                        className: u.checkbox,
                        children: (0, s.jsx)(o.SubText, {
                            className: r({
                                [u.subText]: !c
                            }),
                            children: a
                        })
                    })
                })
            }
        },
        378020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildScheduledEventInviteHeader: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("419830"),
                l = n("400271"),
                i = n("839427");

            function o(e) {
                let {
                    channel: t
                } = e, n = (0, r.getSimpleChannelIconComponent)(t.type);
                return (0, s.jsxs)("div", {
                    className: i.channelInfoContainer,
                    children: [null != n ? (0, s.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, s.jsx)(a.Text, {
                        className: i.channelInfoText,
                        color: "none",
                        variant: "text-sm/semibold",
                        children: t.name
                    })]
                })
            }

            function u(e) {
                let {
                    channel: t,
                    guildScheduledEvent: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: i.container,
                    children: [(0, s.jsx)(l.GuildEventStatus, {
                        className: i.statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, s.jsx)(l.GuildEventDetails, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, s.jsx)(o, {
                        channel: t
                    }) : null]
                })
            }
        },
        980976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("307439"),
                r = n("486252"),
                l = n("782340"),
                i = n("926622");

            function o() {
                let {
                    required: e,
                    checked: t
                } = (0, a.usePromoEmailConsentStore)();
                return e ? (0, s.jsx)(r.default, {
                    value: t,
                    subText: l.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: a.setPromoEmailConsentChecked,
                    marginTopStyle: i.marginTop8,
                    muted: !0
                }) : null
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return i
                }
            }), n("222007");
            var s = n("697218"),
                a = n("315102"),
                r = n("449008"),
                l = n("49111");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [i] = e.recipients.map(s.default.getUser).filter(r.isNotNullish);
                        if (null == i) return null;
                        return i.getAvatarURL(void 0, t, n);
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        946859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                formatUsername: function() {
                    return a
                }
            });
            var s = n("50885");
            async function a(e) {
                try {
                    return await s.default.getSetting("USERNAME_PREFIX", "") + e
                } catch (e) {}
                return e
            }
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("70102");
            var s = n("748820"),
                a = n("872717"),
                r = n("49111"),
                l = {
                    generateNonce: function() {
                        return (0, s.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await a.default.post({
                            url: r.Endpoints.HANDOFF,
                            body: {
                                key: e
                            },
                            oldFormErrors: !0,
                            retries: 1
                        });
                        if (null != t) return t;
                        throw Error("Missing handoff token!")
                    }
                }
        },
        382236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
            var s, a, r = n("37983"),
                l = n("884691"),
                i = n("730290"),
                o = n("391679"),
                u = n("446674"),
                d = n("872717"),
                c = n("95410"),
                h = n("77078"),
                f = n("913144"),
                E = n("437822"),
                _ = n("229353"),
                m = n("271938"),
                p = n("599110"),
                g = n("672630"),
                R = n("49111"),
                N = n("332204");
            let A = "mweb_handoff_nonce",
                I = "mweb_handoff_nonce_expiration";
            (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
            let T = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
                S = new Set(["deep_link_failed"]),
                C = () => {
                    c.default.remove(A), c.default.remove(I)
                };
            var O = () => {
                let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
                    {
                        fingerprint: t,
                        handoff_token: n
                    } = (0, i.parse)(window.location.search),
                    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
                    a = null != s ? s : null !== e ? e : void 0;
                l.useEffect(() => {
                    null !== s && e !== s && f.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: s
                    })
                }, [s, e]);
                let [O, L] = l.useState(null), x = l.useCallback(e => {
                    L(e), p.default.track(R.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: e,
                        fingerprint: (0, o.maybeExtractId)(a)
                    }, {
                        fingerprint: a
                    })
                }, [L, a]), v = c.default.get(A);
                if ("null" === n && null === O && x("deep_link_failed"), null != n && "null" !== n && null == v && null === O && x("nonce_missing"), l.useEffect(() => {
                        if (null != v) {
                            let e = c.default.get(I);
                            (null == e || Date.now() >= e) && (x("nonce_expired"), C())
                        }
                    }, [v, x]), l.useEffect(() => {
                        null != n && "null" !== n && null != v && null == O && d.default.post({
                            url: R.Endpoints.HANDOFF_EXCHANGE,
                            body: {
                                key: v,
                                handoff_token: n
                            }
                        }).then(e => E.default.loginToken(e.body.token, !1)).then(() => {
                            p.default.track(R.AnalyticEvents.LOGIN_SUCCESSFUL, {
                                source: R.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, o.maybeExtractId)(a)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                        }).catch(() => {
                            x("handoff_exchange")
                        }).finally(() => {
                            C()
                        })
                    }, [n, v, O, a, x]), null == a) return null;
                let M = (() => {
                        if (null == O) return (0, r.jsxs)(r.Fragment, {
                            children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, r.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                        });
                        if (S.has(O)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                        if (T.has(O)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
                    })(),
                    y = null != O && S.has(O);
                return y ? (0, r.jsx)("div", {
                    className: N.errorContainer,
                    children: (0, r.jsx)(h.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/semibold",
                        children: M
                    })
                }) : (0, r.jsxs)("div", {
                    className: N.container,
                    children: [(0, r.jsx)(h.Text, {
                        variant: "text-sm/semibold",
                        children: M
                    }), (0, r.jsx)(h.Button, {
                        look: h.Button.Looks.INVERTED,
                        color: h.Button.Colors.BRAND_NEW,
                        onClick: () => {
                            let e = g.default.generateNonce();
                            c.default.set(A, e), c.default.set(I, Date.now() + 6e4);
                            let t = new URL(R.MOBILE_WEB_HANDOFF_DEEP_LINK),
                                n = new URLSearchParams(window.location.search);
                            n.delete("fingerprint"), n.delete("handoff_token");
                            let s = new URLSearchParams;
                            s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), p.default.track(R.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, o.maybeExtractId)(a),
                                source: "mobile_web_handoff",
                                destination: R.MOBILE_WEB_HANDOFF_DEEP_LINK
                            }, {
                                fingerprint: a,
                                flush: !0
                            }), window.location.href = t.toString()
                        },
                        children: (0, r.jsx)(h.Text, {
                            className: N.buttonText,
                            variant: "text-sm/semibold",
                            children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                        })
                    })]
                })
            }
        },
        724554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("759843"),
                r = n("77078"),
                l = n("428958"),
                i = n("124969"),
                o = n("851460"),
                u = n("782340"),
                d = n("329314");

            function c(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, l.default)({
                    type: a.ImpressionTypes.MODAL,
                    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                }), (0, s.jsxs)(i.default, {
                    className: d.chooseAccountAuthBox,
                    children: [(0, s.jsx)(i.Title, {
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
                    }), (0, s.jsx)(r.Text, {
                        className: d.chooseAccountHelpText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                    }), (0, s.jsx)(o.default, {
                        actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                        onAction: e => {
                            e === o.MultiAccountActionType.LOGIN_REQUIRED && t()
                        }
                    }), (0, s.jsx)("div", {
                        className: d.actions,
                        children: (0, s.jsx)(r.Button, {
                            className: d.chooseAccountButton,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: t,
                            size: r.Button.Sizes.MEDIUM,
                            children: (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                            })
                        })
                    })]
                })
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var s, a, r = n("759843"),
                l = n("872717"),
                i = n("913144"),
                o = n("532760"),
                u = n("271938"),
                d = n("730622"),
                c = n("840707"),
                h = n("482931"),
                f = n("49111"),
                E = n("782340");
            (s = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", s.USER_SETTINGS_UPDATE = "user_settings_update", s.GUILD_PHONE_REQUIRED = "guild_phone_required", s.MFA_PHONE_UPDATE = "mfa_phone_update", s.CONTACT_SYNC = "contact_sync";
            var _ = {
                setCountryCode(e) {
                    i.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => o.default.getCurrentConfig({
                    location: "81427d_1"
                }, {
                    autoTrackExposure: !1
                }).enabled ? (0, d.default)(n => l.default.delete({
                    url: f.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: E.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: E.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : l.default.delete({
                    url: f.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: f.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: f.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: f.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: f.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: f.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: f.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: f.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        l = u.default.getFingerprint();
                    null != l && "" !== l && (a["X-Fingerprint"] = l), s && (a.authorization = "");
                    let o = await c.default.post({
                        url: f.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && i.default.dispatch({
                        type: "MODAL_POP",
                        key: h.PHONE_VERIFICATION_MODAL_KEY
                    }), o.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return s
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return a
                }
            });
            let s = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        671278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QRCodeOverlaySizes: function() {
                    return a
                },
                QRCodeWithOverlay: function() {
                    return h
                },
                default: function() {
                    return f
                }
            });
            var s, a, r = n("37983"),
                l = n("884691"),
                i = n("82697"),
                o = n("56701");
            (s = a || (a = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
            let u = Object.freeze({
                    SIZE_40: "size-40",
                    SIZE_60: "size-60"
                }),
                d = n("527826");
            class c extends l.PureComponent {
                render() {
                    let {
                        className: e,
                        text: t,
                        ...n
                    } = this.props;
                    return (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            width: n.size,
                            height: n.size,
                            backgroundColor: n.bgColor
                        },
                        className: e,
                        children: (0, r.jsx)(i.default, {
                            value: t,
                            level: "M",
                            ...n
                        })
                    })
                }
            }
            c.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            class h extends l.PureComponent {
                render() {
                    let {
                        overlaySize: e
                    } = this.props, t = u[null != e ? e : "SIZE_40"];
                    return (0, r.jsxs)("div", {
                        className: o.qrCodeContainer,
                        children: [(0, r.jsx)(c, {
                            ...this.props
                        }), (0, r.jsx)("div", {
                            className: o.qrCodeOverlay,
                            children: (0, r.jsx)("img", {
                                className: o[t],
                                src: d,
                                alt: ""
                            })
                        })]
                    })
                }
            }
            h.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var f = c
        },
        274515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateRsaKeyPair: function() {
                    return l
                },
                serializePublicKey: function() {
                    return i
                },
                publicKeyFingerprint: function() {
                    return o
                },
                decryptEncodedCiphertext: function() {
                    return f
                },
                decryptNonce: function() {
                    return E
                },
                decodeEncodedUserRecord: function() {
                    return _
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007"), n("781738"), n("492311"), n("70102");
            var s = n("627445"),
                a = n.n(s),
                r = n("766274");

            function l() {
                return window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                }, !0, ["decrypt"])
            }
            async function i(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }
            async function o(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return c(t)
            }

            function u(e) {
                return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
            }

            function d(e) {
                return Uint8Array.from(atob(e), e => e.charCodeAt(0))
            }
            async function c(e) {
                let t = await window.crypto.subtle.digest({
                    name: "SHA-256"
                }, e);
                return u(t)
            }

            function h(e, t) {
                return a(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                }, e.privateKey, t)
            }
            async function f(e, t) {
                let n = new TextDecoder,
                    s = await h(e, d(t));
                return n.decode(s)
            }
            async function E(e, t) {
                let n = await h(e, d(t));
                return u(n)
            }
            async function _(e, t) {
                t = await f(e, t);
                let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
                if (null == n) throw Error("Invalid encoded user record.");
                let [, s, a, l, i] = n;
                return new r.default({
                    id: s,
                    discriminator: a,
                    avatar: "0" === l ? null : l,
                    username: i
                })
            }
        }
    }
]);