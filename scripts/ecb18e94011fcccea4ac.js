(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15671"], {
        250790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("483366"),
                r = n.n(l),
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
                m = {
                    friction: 10,
                    tension: 130
                };
            var p = function(e) {
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
                            ...m
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
                        }, this.handleResizeDebounced = r(this.handleResize, 60)
                    }
                }
            }
        },
        746040: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("394846"),
                o = n("77078"),
                u = n("2021"),
                d = n("393414"),
                c = n("725484"),
                h = n("554054"),
                f = n("159885"),
                E = n("528502"),
                m = n("49111"),
                p = n("71041");
            let g = (0, f.cssValueToNumber)(p.responsiveWidthMobile),
                _ = [m.Routes.LOGIN, m.Routes.LOGIN_HANDOFF, m.Routes.REGISTER, m.Routes.INVITE(""), m.Routes.GIFT_CODE(""), m.Routes.GUILD_TEMPLATE_LOGIN(""), m.Routes.GUILD_TEMPLATE(""), m.Routes.DISABLE_EMAIL_NOTIFICATIONS, m.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, m.Routes.BILLING_PREMIUM_SUBSCRIBE, m.Routes.BILLING_PAYMENT_SOURCES_CREATE, m.Routes.BILLING_PAYMENTS, m.Routes.BILLING_PREMIUM_SWITCH_PLAN, m.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, m.Routes.VERIFY, m.Routes.VERIFY_HUB_EMAIL, m.Routes.REJECT_IP, m.Routes.REJECT_MFA, m.Routes.AUTHORIZE_IP, m.Routes.AUTHORIZE_PAYMENT, m.Routes.RESET, m.Routes.HANDOFF, m.Routes.REPORT];

            function R(e) {
                return _.some(t => e.startsWith(t))
            }
            class A extends a.Component {
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
                        className: p.characterBackground,
                        children: (0, s.jsx)(o.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(c.default, {
                                    show: !0,
                                    className: r(p.logo)
                                }), (0, s.jsx)(h.Splash, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(E.default, {
                                    className: p.artwork,
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
                            isMobileWidth: window.innerWidth <= g
                        })
                    }, this.state = {
                        isMobileWidth: window.innerWidth <= g
                    }
                }
            }
            var T = A
        },
        275744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007"), n("506083");
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                r = n("803182"),
                i = n("446674"),
                o = n("437822"),
                u = n("697796"),
                d = n("524824"),
                c = n("393414"),
                h = n("271938"),
                f = n("291850"),
                E = n("49111"),
                m = n("724210");

            function p(e) {
                let t = a.useCallback(t => {
                        if (function(e) {
                                var t;
                                let n = (0, r.matchPath)(e, {
                                    path: E.Routes.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === m.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                            }(t)) c.replaceWith(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                        }
                    }, [e.transitionTo]),
                    {
                        isAuthenticated: n,
                        loginStatus: p
                    } = (0, i.useStateFromStoresObject)([h.default], () => ({
                        isAuthenticated: h.default.isAuthenticated(),
                        loginStatus: h.default.getLoginStatus()
                    })),
                    {
                        location: g,
                        redirectTo: _
                    } = e,
                    [R, A] = a.useState(n);

                function T(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    } = e;
                    (0, u.handoffFromApp)({
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    }), A(!1)
                }
                return (a.useEffect(() => {
                    if (null != g) {
                        let {
                            handoff_key: e,
                            handoff_token: t
                        } = (0, l.parse)(g.search);
                        if (null != e && null != t) {
                            let n = null != _ ? (0, d.getLoginHandoffSourceFromRedirectTo)(_) : void 0;
                            R ? o.default.logout(null).finally(() => {
                                T({
                                    handoffKey: e,
                                    handoffToken: t,
                                    handoffSource: n
                                })
                            }) : T({
                                handoffKey: e,
                                handoffToken: t,
                                handoffSource: n
                            })
                        }
                    }
                }, []), R || p === E.LoginStates.LOGGING_IN) ? (0, s.jsx)(f.LoginSpinner, {}) : (0, s.jsx)(f.default, {
                    ...e,
                    transitionTo: t
                })
            }
        },
        860959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return er
                }
            }), n("781738"), n("222007"), n("794252");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("730290"),
                o = n("506838"),
                u = n("759843"),
                d = n("446674"),
                c = n("862337"),
                h = n("77078"),
                f = n("437822"),
                E = n("678916"),
                m = n("816540"),
                p = n("208266"),
                g = n("428958"),
                _ = n("307439"),
                R = n("765825"),
                A = n("715570"),
                T = n("486252"),
                I = n("378020"),
                N = n("980976"),
                S = n("534438"),
                C = n("946859"),
                v = n("791160"),
                x = n("434824"),
                M = n("770032"),
                O = n("165926"),
                L = n("25033"),
                G = n("255403"),
                b = n("2581"),
                y = n("644417"),
                D = n("697543"),
                U = n("79345"),
                j = n("447997"),
                B = n("970366"),
                F = n("271938"),
                P = n("350522"),
                k = n("476108"),
                w = n("124969"),
                H = n("980428"),
                Y = n("599110"),
                V = n("659500"),
                W = n("159885"),
                q = n("404432"),
                z = n("719451"),
                K = n("598489"),
                Q = n("49111"),
                X = n("771848"),
                Z = n("492397"),
                J = n("56235"),
                $ = n("935583"),
                ee = n("782340"),
                et = n("266100"),
                en = n("926622");
            d.default.initialize();
            let es = /\.$/,
                ea = e => Array.isArray(e) ? e.map(e => e.replace(es, "")).join(". ").trim() : e;
            class el extends a.PureComponent {
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
                    Y.default.track(Q.AnalyticEvents.REGISTER_VIEWED, {
                        location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                        registration_source: this.registrationSource,
                        ...null != e ? (0, v.default)(e, !1, !1) : {}
                    }, {
                        flush: !0
                    }), null == this.props.consentRequired && f.default.getLocationMetadata(), (0, B.trackAppUIViewed)("register")
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
                        invite: l,
                        onChangeStep: r
                    } = this.props, {
                        parsedDateOfBirth: i
                    } = this.state;
                    (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                        isRateLimited: !0
                    }), this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, () => {
                        this.setState({
                            isRateLimited: !1
                        })
                    }))), s && !e.authenticated && ((0, O.setNewUser)(J.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
                    let o = X.RegistrationSteps.FULL;
                    a || this.hasError("date_of_birth") ? o = X.RegistrationSteps.AGE_GATE : null != l && (null != l.guild || null != l.channel) && (o = X.RegistrationSteps.INVITE), r(o)
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
                        parsedDateOfBirth: l
                    } = this.state, {
                        invite: r,
                        guildTemplate: i,
                        giftCode: o,
                        onRegister: u,
                        usernameSuggestion: d,
                        isMobileWebInviteRegistration: c
                    } = this.props, h = null != r ? r.code : null, f = null != o ? o.skuId : null, E = _.usePromoEmailConsentStore.getState(), m = (0, W.isNullOrEmpty)(d) ? null : t === d, p = Z.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
                    V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
                    try {
                        c || null == r ? await (0, A.registerFull)({
                            email: e,
                            username: p,
                            globalName: n,
                            consent: a,
                            password: s,
                            invite: h,
                            usedUsernameSuggestion: m,
                            guildTemplateCode: null == i ? void 0 : i.code,
                            giftCodeSKUId: f,
                            birthday: l,
                            promoEmailConsent: E.required ? E : null
                        }) : await (0, A.default)({
                            consent: a,
                            invite: h,
                            giftCodeSKUId: f,
                            usedUsernameSuggestion: m,
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
                    } = this.props, l = null, r = null;
                    return t ? r = (0, s.jsx)(T.default, {
                        value: e,
                        onChange: e => this.setState({
                            consent: e
                        }),
                        subText: ee.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: Q.MarketingURLs.TERMS,
                            privacyURL: Q.MarketingURLs.PRIVACY
                        })
                    }) : l = (0, s.jsx)(w.SubText, {
                        isProminent: !!a,
                        className: en.marginTop8,
                        children: n ? ee.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                            buttonText: ee.default.Messages.CONTINUE,
                            termsURL: Q.MarketingURLs.TERMS,
                            privacyURL: Q.MarketingURLs.PRIVACY
                        }) : ee.default.Messages.TERMS_PRIVACY.format({
                            termsURL: Q.MarketingURLs.TERMS,
                            privacyURL: Q.MarketingURLs.PRIVACY
                        })
                    }), {
                        subText: l,
                        consentText: r
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
                                        onMouseLeave: l
                                    } = e;
                                    return (0, s.jsx)(w.Input, {
                                        autoFocus: !0,
                                        className: en.marginBottom8,
                                        name: "username",
                                        value: n,
                                        placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                        onChange: t,
                                        onMouseEnter: a,
                                        onMouseLeave: l
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
                                    termsURL: Q.MarketingURLs.TERMS,
                                    privacyURL: Q.MarketingURLs.PRIVACY
                                })
                            }), Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
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
                    } = this.state, l = w.Button.Colors.BRAND, r = ee.default.Messages.CONTINUE;
                    return (null == e ? void 0 : e.stage_instance) != null && (l = w.Button.Colors.GREEN, r = ee.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(h.Tooltip, {
                        text: !a && n ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(w.Button, {
                                type: "submit",
                                submitting: t,
                                disabled: !this.hasConsent(),
                                color: l,
                                children: r
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
                        subText: l,
                        consentText: r
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
                                            onMouseLeave: l
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
                                            onMouseLeave: l
                                        })
                                    }
                                }), (0, s.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                }), this.renderInviteButton(), l, r, Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
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
                        className: r(en.marginTop20, et.errorMessage),
                        children: e
                    })
                }
                renderFull(e, t) {
                    let {
                        email: n,
                        username: l,
                        globalName: i,
                        password: o,
                        consent: u,
                        parsedDateOfBirth: d,
                        globalNameFocused: c,
                        emailClientError: f,
                        usernameClientError: E,
                        passwordClientError: m,
                        dateOfBirthClientError: g
                    } = this.state, {
                        registering: _,
                        consentRequired: R,
                        isMobileWebInviteRegistration: A,
                        uniqueUsernameRegistrationConfig: {
                            suggestions: T
                        },
                        authBoxClassName: I,
                        apiErrors: {
                            email: S,
                            username: C,
                            global_name: v,
                            password: x,
                            date_of_birth: M
                        } = {},
                        hasLoggedInAccounts: O,
                        registrationCopyExperimentConfig: {
                            hasCopyAboveButton: L
                        }
                    } = this.props, {
                        subText: y,
                        consentText: D
                    } = this.renderConsentComponents(), U = this.renderErrorMessage(), B = (0, s.jsx)(h.Tooltip, {
                        text: !u && R ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(w.Button, {
                                type: "submit",
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: ee.default.Messages.CONTINUE
                            })
                        })
                    }), F = async () => {
                        this.setState({
                            usernameFocused: !0
                        }), T && i.length > 0 && !b.default.wasRegistrationSuggestionFetched(i) && await G.default.fetchSuggestionsRegistration(i)
                    }, P = null != e ? (0, s.jsx)(a.Fragment, {
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
                            error: ea(v),
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
                        }), (0, s.jsx)(j.default, {
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
                            onFocus: F,
                            tabIndex: -1,
                            children: [(0, s.jsx)(w.Input, {
                                label: ee.default.Messages.FORM_LABEL_USERNAME,
                                className: en.marginBottom20,
                                name: "username",
                                value: l,
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
                            error: null != m ? m : ea(x),
                            type: "password",
                            setRef: e => {
                                this.passwordRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(p.default, {
                            label: ee.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            wrapperClassName: en.marginTop20,
                            name: "date_of_birth",
                            onChange: this.handleBirthdayChange,
                            ref: this.dateOfBirthRef,
                            error: null != g ? g : ea(M),
                            value: d,
                            required: !0
                        }), L && y, (0, s.jsx)(N.default, {}), B, U, D, !L && y, Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                            look: A ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                            color: A ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: en.marginTop20,
                            children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    });
                    return t ? (0, s.jsx)(K.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: r(I, et.horizontalAuthBox),
                        children: () => [P, (0, s.jsxs)("div", {
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
                        children: [O && !A ? (0, s.jsx)(w.Button, {
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
                        }) : null, P, k]
                    })
                }
                render() {
                    let {
                        isUnderage: e,
                        isMobileWebInviteRegistration: t
                    } = this.props;
                    if (e || this.hasError("date_of_birth")) return (0, s.jsx)(m.default, {});
                    let {
                        invite: n,
                        giftCode: a,
                        guildTemplate: l
                    } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
                    return null == n || r || t ? null != l ? this.renderFull(() => (0, s.jsx)(x.default, {
                        guildTemplate: l
                    }), !0) : null != a ? this.renderFull(() => (0, s.jsx)(q.default, {
                        giftCode: a
                    })) : null != n && r && n.state === Q.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(z.default, {
                        invite: n,
                        isRegister: !0
                    })) : this.renderFull() : n.state === Q.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
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
                            invite: l,
                            location: r,
                            onLoginStart: o,
                            redirectTo: u,
                            transitionTo: d,
                            isMobileWebInviteRegistration: c
                        } = this.props;
                        if (c) {
                            null == o || o(e);
                            return
                        }
                        let h = null != r ? (0, i.parse)(r.search) : {};
                        null != l ? t = Q.Routes.INVITE_LOGIN(l.code) : null != s ? t = Q.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = Q.Routes.LOGIN, h.redirect_to = u) : (t = Q.Routes.LOGIN, "" !== n && (h = {
                            email: n
                        })), f.default.loginReset(), d(t, {
                            search: (0, i.stringify)(h)
                        }), null == o || o(e), V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSubmit = e => {
                        null == e || e.preventDefault();
                        let {
                            email: t,
                            username: n,
                            password: s,
                            parsedDateOfBirth: a
                        } = this.state, {
                            invite: l,
                            consentRequired: r
                        } = this.props;
                        if (null !== r) {
                            if (null == l) {
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
                                livecheckEnabled: l
                            }
                        } = this.props;
                        return (0, s.jsx)(ei, {
                            username: e,
                            suggestion: a,
                            livecheckEnabled: l,
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

            function er(e) {
                let t = (0, d.useStateFromStoresObject)([P.default, F.default, E.default, L.default, M.default], () => ({
                        consentRequired: P.default.getAuthenticationConsentRequired(),
                        registering: F.default.getRegisterStatus() === Q.RegistrationStates.REGISTERING,
                        apiErrors: F.default.getErrors(),
                        authenticated: F.default.isAuthenticated(),
                        isUnderage: E.default.isUnderageAnonymous(),
                        country: L.default.getCountryCode(),
                        hasLoggedInAccounts: M.default.getHasLoggedInAccounts()
                    })),
                    n = (0, D.useUURegistrationExperiment)(),
                    l = (0, d.useStateFromStores)([b.default], () => b.default.registrationUsernameSuggestion()),
                    [r, i] = a.useState(X.RegistrationSteps.FULL);
                return (0, g.default)({
                    type: u.ImpressionTypes.VIEW,
                    name: u.ImpressionNames.USER_REGISTRATION,
                    properties: {
                        impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                        step: r
                    }
                }, {}, [r]), (0, s.jsx)(el, {
                    onChangeStep: e => i(e),
                    registrationCopyExperimentConfig: R.default.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: l,
                    ...e,
                    ...t
                })
            }

            function ei(e) {
                let t, {
                        username: n,
                        suggestion: a,
                        globalName: l,
                        livecheckEnabled: r,
                        isUsernameFocused: i,
                        onClickSuggestion: u
                    } = e,
                    d = (0, U.useUsernameStatus)(n, r, !0),
                    c = r && n.length > 0;
                return t = c ? (0, o.match)(d).with({
                    type: y.NameValidationState.ERROR,
                    message: o.P.select()
                }, e => (0, s.jsx)(h.Text, {
                    className: et.messageNegative,
                    variant: "text-sm/normal",
                    children: e
                })).with({
                    type: y.NameValidationState.AVAILABLE,
                    message: o.P.select()
                }, e => (0, s.jsx)(h.Text, {
                    className: et.messagePositive,
                    variant: "text-sm/normal",
                    children: e
                })).otherwise(() => (0, s.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                })) : null != a && a.length > 0 && l.length > 0 ? (0, s.jsx)(h.Text, {
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
                }), (0, s.jsx)(j.default, {
                    show: c && (null == d ? void 0 : d.type) === y.NameValidationState.ERROR || i,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
            el.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: e => n.g.location.assign(e)
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
                l = n("437822"),
                r = n("697796"),
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
                        (0, r.handoffSetUser)(t.user), l.default.loginToken(t.token, !1), h(!0, o)
                    }, e => {
                        if (null != a && h(!1, o), l.default.setFingerprint(a), (0, r.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                            var t;
                            u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: o
                            })
                        }
                    }) : null != a ? (l.default.setFingerprint(a), h(!1, o), (0, r.handoffEnd)()) : (l.default.setFingerprint(a), (0, r.handoffUnavailable)())
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
                        }) : (l.default.setFingerprint(null), (0, r.handoffUnavailable)())
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
                l = n("90915"),
                r = n("266491");
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
                                render: r,
                                ...o
                            } = e.props, u = o.path || o.from;
                            null != (d = null != u ? (0, l.matchPath)(t.pathname, {
                                ...o,
                                path: u
                            }) : null) && (o = {
                                ...o,
                                key: u,
                                location: t,
                                match: d,
                                history: n,
                                staticContext: i
                            }, null != s ? c = a.createElement(s, o) : null != r && (c = r(o)))
                        }
                    }), (0, s.jsx)(r.default, {
                        ...u,
                        children: c
                    })
                }
            }
            var o = (0, l.withRouter)(i)
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
                l = n("395724"),
                r = n("599110"),
                i = n("586391"),
                o = n("49111");

            function u(e, t) {
                return (0, l.default)(e, t), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
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
                    }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
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
                l = n("913144"),
                r = n("773336"),
                i = n("586391");
            let o = null,
                u = "underage";
            class d extends a.default.Store {
                isUnderageAnonymous() {
                    if (r.isPlatformEmbedded) {
                        if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
                    } else {
                        let e = s.parse(document.cookie)[u];
                        return null != e
                    }
                    return !1
                }
            }
            d.displayName = "AgeGateStore";
            var c = new d(l.default, {
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
                l = n("393414"),
                r = n("124969"),
                i = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("177977");
            let c = () => (0, l.transitionTo)(o.Routes.LOGIN);
            var h = e => {
                let {
                    authBoxClassName: t,
                    underageMessage: l
                } = e;
                return (0, s.jsxs)(r.default, {
                    className: t,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        src: n("803452"),
                        className: d.img
                    }), (0, s.jsx)(r.Title, {
                        className: d.title,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, s.jsx)(r.SubTitle, {
                        className: d.subtitle,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != l ? l : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
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
                    return A
                }
            }), n("222007"), n("424973");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
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
                m = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: f[e]
                })),
                p = /[a-zA-Z0-9]/;

            function g(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: l
                } = e, [r, i] = a.useState("");
                a.useEffect(() => {
                    if ("" !== r) {
                        let e = setTimeout(() => i(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [r, i]);
                let o = a.useCallback(e => {
                    if (p.test(e.key)) {
                        let s = "".concat(r).concat(e.key.toLowerCase()),
                            a = t.find(e => e.label.toLowerCase().startsWith(s));
                        null != a && n(a.value), i(s)
                    }
                }, [n, i, r, t]);
                return (0, s.jsx)("div", {
                    onKeyDown: o,
                    children: l
                })
            }

            function _() {
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
                    wrapperClassName: l,
                    onChange: i,
                    onPopulated: f,
                    error: p,
                    autoFocus: R,
                    required: A
                } = e, {
                    day: T,
                    setDay: I,
                    month: N,
                    setMonth: S,
                    year: C,
                    setYear: v
                } = function(e) {
                    let t = null,
                        n = null,
                        s = null;
                    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
                    let [l, r] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
                    return {
                        day: l,
                        setDay: r,
                        month: i,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(n), x = a.useMemo(() => null != T && null != N && null != C ? o("".concat(T, "/").concat(N, "/").concat(C), "DD/MM/YYYY") : null, [T, N, C]);
                a.useEffect(() => {
                    i((null == x ? void 0 : x.isValid()) ? x : null)
                }, [x, i]);
                let M = p;
                null != x && !x.isValid() && (M = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let O = function() {
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
                    [L, G] = a.useState(R ? 0 : -1),
                    b = a.useRef(null),
                    y = a.useRef(null),
                    D = a.useRef(null),
                    U = a.useMemo(_, []),
                    j = a.useCallback(() => {
                        var e, t, n, s;
                        switch (null === (e = U[L]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = b.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = y.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (s = D.current) || void 0 === s || s.focus()
                        }
                    }, [L, b, y, D, U]);
                a.useEffect(() => {
                    setTimeout(j, 500)
                }, []), a.useEffect(() => {
                    if (L >= U.length) {
                        null == f || f();
                        return
                    }
                    j()
                }, [L, j]);
                let B = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = U[e];
                    switch (t) {
                        case "day":
                            B.push({
                                key: "day",
                                input: (0, s.jsx)(g, {
                                    options: E,
                                    selectOption: I,
                                    children: (0, s.jsx)(d.default, {
                                        ref: b,
                                        className: h.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: E,
                                        value: T,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            I(n), G(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            B.push({
                                key: "month",
                                input: (0, s.jsx)(g, {
                                    options: m,
                                    selectOption: S,
                                    children: (0, s.jsx)(d.default, {
                                        ref: y,
                                        className: h.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: m,
                                        value: N,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            S(n), G(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            B.push({
                                key: "year",
                                input: (0, s.jsx)(g, {
                                    options: O,
                                    selectOption: v,
                                    children: (0, s.jsx)(d.default, {
                                        ref: D,
                                        className: h.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: O,
                                        value: C,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            v(n), G(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, s.jsxs)("fieldset", {
                    className: r(h.container, l),
                    children: [(0, s.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: A,
                        error: M,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, s.jsx)("div", {
                        className: h.inputs,
                        children: B.map((e, t) => {
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
            var A = R
        },
        771848: function(e, t, n) {
            "use strict";
            var s, a, l, r;
            n.r(t), n.d(t, {
                RegistrationSteps: function() {
                    return a
                }
            }), (l = s || (s = {})).VIEWED = "viewed", l.SUBMITTED = "submitted", l.RESEND_CODE = "resend_code", l.INPUT_ERROR = "input_error", l.RESPONSE_ERROR = "response_error", l.SUCCESS = "success", (r = a || (a = {})).IDENTITY = "identity", r.DISPLAY_NAME = "display_name", r.ACCOUNT_INFORMATION = "account_information", r.FULL = "full", r.AGE_GATE = "age_gate", r.INVITE = "invite", r.SMS_VERIFY = "sms_verify"
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
                l = n("599110"),
                r = n("49111");

            function i(e, t) {
                l.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
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
                    return m
                },
                registerFull: function() {
                    return p
                }
            });
            var s = n("866227"),
                a = n.n(s),
                l = n("759843"),
                r = n("913144"),
                i = n("599417"),
                o = n("731109"),
                u = n("271938"),
                d = n("599110"),
                c = n("840707"),
                h = n("395724"),
                f = n("49111"),
                E = n("586391");

            function m(e) {
                let {
                    invite: t = null,
                    giftCodeSKUId: n = null,
                    ...s
                } = e;
                return p({
                    ...s,
                    invite: t,
                    giftCodeSKUId: n
                })
            }

            function p(e) {
                let {
                    email: t,
                    phoneToken: n,
                    username: s,
                    globalName: m,
                    consent: p,
                    password: g,
                    guildTemplateCode: _,
                    birthday: R,
                    invite: A = null,
                    giftCodeSKUId: T = null,
                    multiStep: I = !1,
                    promoEmailConsent: N = null,
                    usedUsernameSuggestion: S = null
                } = e;
                return r.default.dispatch({
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
                        global_name: m,
                        password: g,
                        invite: A,
                        consent: p,
                        phone_token: n,
                        date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                        gift_code_sku_id: T,
                        guild_template_code: _,
                        promotional_email_opt_in: null == N ? void 0 : N.checked
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_REGISTER,
                        properties: {
                            invite_code: A,
                            used_username_suggestion: S,
                            promotional_email_opt_in: null == N ? void 0 : N.checked,
                            promotional_email_pre_checked: null == N ? void 0 : N.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then(e => {
                    r.default.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    }), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                        source: E.AgeGateSource.REGISTER,
                        action: E.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                }, e => {
                    let t = new i.default(e);
                    throw r.default.dispatch({
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
                l = n.n(a),
                r = n("77078"),
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
                    children: (0, s.jsx)(r.Checkbox, {
                        value: t,
                        type: r.Checkbox.Types.INVERTED,
                        onChange: (e, t) => n(t),
                        className: u.checkbox,
                        children: (0, s.jsx)(o.SubText, {
                            className: l({
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
                l = n("419830"),
                r = n("400271"),
                i = n("839427");

            function o(e) {
                let {
                    channel: t
                } = e, n = (0, l.getSimpleChannelIconComponent)(t.type);
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
                    children: [(0, s.jsx)(r.GuildEventStatus, {
                        className: i.statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, s.jsx)(r.GuildEventDetails, {
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
                l = n("486252"),
                r = n("782340"),
                i = n("926622");

            function o() {
                let {
                    required: e,
                    checked: t
                } = (0, a.usePromoEmailConsentStore)();
                return e ? (0, s.jsx)(l.default, {
                    value: t,
                    subText: r.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
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
                l = n("449008"),
                r = n("49111");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case r.ChannelTypes.DM:
                        let [i] = e.recipients.map(s.default.getUser).filter(l.isNotNullish);
                        if (null == i) return null;
                        return i.getAvatarURL(void 0, t, n);
                    case r.ChannelTypes.GROUP_DM:
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
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return h
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var s = n("597755"),
                a = n.n(s),
                l = n("815157"),
                r = n("271938"),
                i = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(i.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d();
                return u(e, !1, e === o ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let s = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != s ? s : "https://www.discord.com"
                }
            }
        }
    }
]);