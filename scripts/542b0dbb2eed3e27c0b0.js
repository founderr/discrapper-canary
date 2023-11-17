(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12917"], {
        367598: function(e, t, s) {
            "use strict";
            e.exports = s.p + "8ab4327800a9af31b602.svg"
        },
        527826: function(e, t, s) {
            "use strict";
            e.exports = s.p + "adf75861421c2a6a6269.png"
        },
        97595: function(e, t, s) {
            "use strict";
            e.exports = s.p + "79b6525428d203d4dc7a.svg"
        },
        251834: function(e, t, s) {
            "use strict";
            e.exports = s.p + "559d26c8222b2691e986.svg"
        },
        800573: function(e, t, s) {
            "use strict";
            e.exports = s.p + "4db33740afa8c892ed27.svg"
        },
        41668: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1ed67ff58fdb5a109fc8.svg"
        },
        660389: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6e27695fd61b8fa1ebde.svg"
        },
        212509: function(e, t, s) {
            "use strict";
            e.exports = s.p + "deabad3453b517c8cb7f.png"
        },
        494323: function(e, t, s) {
            "use strict";
            e.exports = s.p + "bd6a8da80056942f263e.svg"
        },
        556659: function(e, t, s) {
            "use strict";
            e.exports = s.p + "dad1a596835f9bb1024d.svg"
        },
        787762: function(e, t, s) {
            "use strict";
            e.exports = s.p + "4396f31050743192914e.svg"
        },
        508971: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a7d2c7ff9cdc7b4b1d04.svg"
        },
        404432: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("446674"),
                i = s("77078"),
                u = s("299285"),
                c = s("210721"),
                d = s("65324"),
                f = s("697218"),
                E = s("10514"),
                _ = s("552712"),
                h = s("953109"),
                T = s("124969"),
                A = s("380186"),
                I = s("646718"),
                S = s("782340"),
                m = s("451862"),
                g = s("173791"),
                N = s("926622"),
                C = o.default.connectStores([_.default, u.default, E.default, f.default], e => {
                    let {
                        giftCode: t
                    } = e, s = _.default.get(t.skuId), {
                        subscriptionPlanId: n
                    } = t, a = null != n ? (0, A.getOrFetchSubscriptionPlan)(n) : null;
                    return {
                        sku: s,
                        subscriptionPlan: a,
                        application: u.default.getApplication(s.applicationId),
                        gifter: f.default.getUser(t.userId)
                    }
                })(e => {
                    let {
                        error: t,
                        giftCode: s,
                        gifter: l,
                        sku: o,
                        application: u,
                        subscriptionPlan: f
                    } = e, E = null == l ? S.default.Messages.GIFT_CODE_AUTH_GIFTED : S.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                        username: l.username
                    }), _ = o.name;
                    return null != f && (_ = (f.interval === I.SubscriptionIntervalTypes.MONTH ? S.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : S.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                        skuName: o.name,
                        intervalCount: f.intervalCount
                    })), (0, n.jsxs)(a.Fragment, {
                        children: [null != s.giftStyle ? (0, n.jsx)(d.default, {
                            defaultAnimationState: c.AnimationState.LOOP,
                            giftStyle: s.giftStyle,
                            className: m.seasonalIcon
                        }) : (0, n.jsx)(T.Avatar, {
                            src: null != l ? l.getAvatarURL(void 0, 100) : null,
                            size: i.AvatarSizes.DEPRECATED_SIZE_100,
                            className: N.marginBottom20
                        }), null != t ? (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(T.SubTitle, {
                                children: S.default.Messages.INVITE_MODAL_ERROR_TITLE
                            }), (0, n.jsx)(T.Title, {
                                children: t
                            })]
                        }) : (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(T.SubTitle, {
                                children: E
                            }), (0, n.jsxs)(T.Title, {
                                className: r(N.marginTop8, g.flexCenter),
                                children: [(0, n.jsx)(h.default, {
                                    size: h.default.Sizes.MEDIUM,
                                    className: m.applicationIcon,
                                    game: u,
                                    skuId: o.id
                                }), _]
                            })]
                        })]
                    })
                })
        },
        291850: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                LoginSpinner: function() {
                    return K
                },
                WebAuthnLogin: function() {
                    return z
                },
                default: function() {
                    return Z
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                l = s("376507"),
                r = s("414456"),
                o = s.n(r),
                i = s("730290"),
                u = s("394846"),
                c = s("446674"),
                d = s("77078"),
                f = s("913144"),
                E = s("437822"),
                _ = s("697796"),
                h = s("524824"),
                T = s("21572"),
                A = s("791160"),
                I = s("434824"),
                S = s("24287"),
                m = s("382236"),
                g = s("770032"),
                N = s("724554"),
                C = s("878720"),
                p = s("25033"),
                L = s("589252"),
                O = s("970366"),
                R = s("271938"),
                M = s("72177"),
                x = s("476108"),
                D = s("145131"),
                U = s("124969"),
                v = s("980428"),
                B = s("599110"),
                j = s("659500"),
                P = s("773336"),
                F = s("404432"),
                G = s("719451"),
                b = s("331085"),
                y = s("598489"),
                w = s("49111"),
                H = s("579033"),
                k = s("782340"),
                V = s("741532"),
                W = s("926622");

            function K() {
                return (0, n.jsx)(U.default, {
                    children: (0, n.jsx)(d.Spinner, {})
                })
            }

            function z(e) {
                let {
                    authBoxClassName: t,
                    loginStatus: r,
                    handleReset: o
                } = e, [i, u] = a.useState(!1);
                return (0, n.jsxs)(U.default, {
                    className: t,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        src: s("367598"),
                        className: W.marginBottom20
                    }), (0, n.jsx)(U.Title, {
                        className: W.marginBottom8,
                        children: k.default.Messages.TWO_FA
                    }), (0, n.jsx)(U.SubTitle, {
                        children: k.default.Messages.TWO_FA_WEBAUTHN_BODY
                    }), (0, n.jsxs)(U.Block, {
                        className: W.marginTop40,
                        children: [(0, n.jsx)(U.Button, {
                            submitting: i || r === w.LoginStates.LOGGING_IN_MFA_WEBAUTHN,
                            onClick: () => {
                                u(!0);
                                let e = R.default.getWebAuthnChallenge();
                                if (null == e) {
                                    f.default.dispatch({
                                        type: "LOGIN_MFA_WEBAUTHN_TO_TOTP"
                                    });
                                    return
                                }
                                l.get(JSON.parse(e)).then(e => {
                                    u(!1), E.default.loginMFA({
                                        code: JSON.stringify(e),
                                        ticket: R.default.getMFATicket(),
                                        isWebAuthn: !0
                                    }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                                }).catch(e => {
                                    u(!1), f.default.dispatch({
                                        type: "LOGIN_MFA_FAILURE",
                                        message: e.message
                                    })
                                })
                            },
                            children: k.default.Messages.TWO_FA_WEBAUTHN_ACTION
                        }), (0, n.jsx)(U.Button, {
                            look: U.Button.Looks.OUTLINED,
                            className: W.marginTop8,
                            disabled: r === w.LoginStates.LOGGING_IN_MFA_WEBAUTHN,
                            onClick: () => {
                                f.default.dispatch({
                                    type: "LOGIN_MFA_WEBAUTHN_TO_TOTP"
                                })
                            },
                            children: k.default.Messages.TWO_FA_WEBAUTHN_SWITCH_TOTP
                        }), (0, n.jsx)(U.Button, {
                            look: U.Button.Looks.LINK,
                            color: U.Button.Colors.LINK,
                            className: W.marginTop8,
                            onClick: o,
                            children: k.default.Messages.TWO_FA_LOGIN_FOOTER
                        })]
                    })]
                })
            }
            class Y extends a.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        handoffAvailable: t,
                        authenticated: s
                    } = e;
                    return t || s ? null : {
                        checkingHandoff: !1
                    }
                }
                componentDidMount() {
                    let {
                        handoffAvailable: e,
                        authenticated: t,
                        giftCodeSKU: s,
                        invite: n,
                        location: a
                    } = this.props;
                    e && !t ? (0, _.handoffBegin)() : t && this.loginOrSSO(t, a, !0), B.default.track(w.AnalyticEvents.LOGIN_VIEWED, {
                        location: null != n ? "Invite Login Page" : "Non-Invite Login Page",
                        login_source: this.loginSource,
                        authenticated: t,
                        ...null != s ? (0, A.default)(s, !1, !1) : {}
                    }, {
                        flush: !0
                    }), E.default.getLocationMetadata(), (0, O.trackAppUIViewed)("login")
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        location: s
                    } = this.props, {
                        checkingHandoff: n
                    } = this.state;
                    if (t && !e.authenticated && !n && this.loginOrSSO(t, s), e.errors !== this.props.errors) {
                        var a, l, r;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (l = this.loginRef) || void 0 === l || l.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
                    }
                }
                get loginSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: s,
                        loginSource: n,
                        redirectTo: a
                    } = this.props;
                    if (null != n) return n;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    else if (null != s) {
                        if (null != s.guild) return "guild_invite";
                        if (null != s.channel) return "dm_invite";
                        else if (null != s.inviter) return "friend_invite"
                    }
                    return null != a ? (0, h.getLoginHandoffSourceFromRedirectTo)(a) : null
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
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e && null != t && (this.setState({
                        redirecting: !0
                    }), s ? E.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
                }
                transitionSSO(e) {
                    let {
                        transitionTo: t,
                        redirectTo: s,
                        replaceWith: n
                    } = this.props, a = null != e ? (0, i.parse)(e.search) : {};
                    if (delete a.redirect_to, null != s) null != n ? n(s) : t(s);
                    else if (null == a.service) t(w.Routes.APP);
                    else {
                        let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + w.Endpoints.SSO,
                            t = {
                                ...a,
                                token: R.default.getToken()
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
                    return (0, n.jsxs)(U.default, {
                        className: e,
                        children: [(0, n.jsx)(U.AuthSpinner, {}), (0, n.jsx)(U.Title, {
                            className: W.marginBottom8,
                            children: k.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                        }), (0, n.jsx)(U.SubTitle, {
                            children: k.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                        })]
                    })
                }
                renderHandOffContinue() {
                    let {
                        user: e,
                        transitionTo: t,
                        authBoxClassName: s
                    } = this.props;
                    return null == e ? null : (0, n.jsxs)(U.default, {
                        className: s,
                        children: [(0, n.jsx)(U.Avatar, {
                            src: e.getAvatarURL(void 0, 100),
                            size: d.AvatarSizes.DEPRECATED_SIZE_100,
                            className: W.marginBottom20
                        }), (0, n.jsx)(U.Title, {
                            className: W.marginBottom8,
                            children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                                name: e.toString()
                            })
                        }), (0, n.jsx)(U.SubTitle, {
                            className: W.marginBottom40,
                            children: k.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                        }), (0, n.jsxs)(U.Block, {
                            children: [(0, n.jsx)(U.Button, {
                                onClick: () => t(w.Routes.APP),
                                className: W.marginBottom8,
                                children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                                    name: e.toString()
                                })
                            }), (0, n.jsx)(U.Button, {
                                look: U.Button.Looks.LINK,
                                color: U.Button.Colors.LINK,
                                onClick: this.handleReset,
                                children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                            })]
                        })]
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = this.props.loginStatus === w.LoginStates.ACCOUNT_DISABLED, s = t ? k.default.Messages.ACCOUNT_DISABLED_TITLE : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? k.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, n.jsx)(U.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        children: (0, n.jsxs)(d.HeadingLevel, {
                            component: (0, n.jsx)(U.Title, {
                                className: W.marginBottom8,
                                children: s
                            }),
                            children: [(0, n.jsx)(U.SubTitle, {
                                className: W.marginBottom20,
                                children: a
                            }), (0, n.jsxs)(U.Block, {
                                children: [(0, n.jsx)(U.Button, {
                                    color: U.Button.Colors.BRAND,
                                    type: "submit",
                                    children: k.default.Messages._RETURN_TO_LOGIN
                                }), (0, n.jsx)("div", {
                                    className: o(W.marginTop8, V.needAccount),
                                    children: k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
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
                    return (0, n.jsxs)(U.default, {
                        className: e,
                        children: [(0, n.jsx)(G.InviteResolvingHeader, {}), (0, n.jsxs)(U.Block, {
                            className: W.marginTop20,
                            children: [(0, n.jsx)(L.default, {
                                className: W.marginBottom20,
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                            }), (0, n.jsx)(U.Input, {
                                className: W.marginBottom20,
                                label: k.default.Messages.FORM_LABEL_PASSWORD,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                value: this.state.password,
                                required: !0
                            }), (0, n.jsx)(U.Button, {
                                className: W.marginBottom8,
                                type: "submit",
                                disabled: !0,
                                children: k.default.Messages._LOGIN
                            }), (0, n.jsx)(U.Button, {
                                disabled: !0,
                                look: U.Button.Looks.LINK,
                                color: U.Button.Colors.LINK,
                                children: k.default.Messages.FORGOT_PASSWORD
                            }), (0, n.jsx)(U.Button, {
                                disabled: !0,
                                className: W.marginTop4,
                                look: U.Button.Looks.LINK,
                                color: U.Button.Colors.LINK,
                                children: k.default.Messages.NEED_ACCOUNT
                            })]
                        })]
                    })
                }
                renderDefaultForm(e) {
                    var t;
                    let s;
                    let {
                        invite: a,
                        giftCode: l,
                        loginStatus: r,
                        country: i,
                        showMobileWebHandoff: u,
                        disableAutofocusOnDefaultForm: c
                    } = this.props, f = !this.hasError("email") && this.hasError("password"), E = (null == a ? void 0 : a.stage_instance) != null;
                    return s = null == a || E ? null != l ? (0, n.jsx)(F.default, {
                        giftCode: l
                    }) : (0, n.jsxs)("div", {
                        className: V.header,
                        children: [(0, n.jsx)(U.Title, {
                            className: W.marginBottom8,
                            children: k.default.Messages.LOGIN_TITLE
                        }, "title"), !1 === (0, P.isAndroidWeb)() ? (0, n.jsx)(U.SubTitle, {
                            children: k.default.Messages.AUTH_LOGIN_BODY
                        }, "subtitle") : null]
                    }) : (0, n.jsx)(G.default, {
                        invite: a
                    }), (0, n.jsxs)(D.default, {
                        direction: D.default.Direction.HORIZONTAL,
                        align: D.default.Align.CENTER,
                        children: [(0, n.jsxs)("div", {
                            className: V.mainLoginContainer,
                            children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, n.jsx)(U.Button, {
                                onClick: () => {
                                    this.setState(e => ({
                                        ...e,
                                        dismissedChooseAccount: !1
                                    }))
                                },
                                look: U.Button.Looks.LINK,
                                color: U.Button.Colors.PRIMARY,
                                className: V.goBackButton,
                                children: (0, n.jsxs)("div", {
                                    className: V.content,
                                    children: [(0, n.jsx)(v.default, {
                                        width: 16,
                                        height: 16,
                                        className: V.caret
                                    }), (0, n.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: k.default.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }), s, (0, n.jsx)(d.HeadingLevel, {
                                children: (0, n.jsxs)(U.Block, {
                                    className: W.marginTop20,
                                    children: [(0, n.jsx)(L.default, {
                                        alpha2: i.alpha2,
                                        countryCode: i.code.split(" ")[0],
                                        className: W.marginBottom20,
                                        label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                                        autoFocus: !f && !u && !c,
                                        required: !0
                                    }), (0, n.jsx)(U.Input, {
                                        label: k.default.Messages.FORM_LABEL_PASSWORD,
                                        error: this.renderError("password"),
                                        onChange: e => this.setState({
                                            password: e
                                        }),
                                        name: "password",
                                        type: "password",
                                        setRef: this.setPasswordRef,
                                        autoComplete: "off",
                                        spellCheck: "false",
                                        autoFocus: f && !u && !c,
                                        value: this.state.password,
                                        required: !0
                                    }), (0, n.jsx)(U.Button, {
                                        onClick: this.handleForgotPassword,
                                        look: U.Button.Looks.LINK,
                                        color: U.Button.Colors.LINK,
                                        className: o(W.marginBottom20, W.marginTop4),
                                        children: k.default.Messages.FORGOT_PASSWORD
                                    }), (0, n.jsx)(U.Button, {
                                        type: "submit",
                                        submitting: r === w.LoginStates.LOGGING_IN,
                                        color: E ? U.Button.Colors.GREEN : U.Button.Colors.BRAND,
                                        className: W.marginBottom8,
                                        children: E ? k.default.Messages._LOGIN_STAGE : k.default.Messages._LOGIN
                                    }), (0, n.jsxs)("div", {
                                        className: W.marginTop4,
                                        children: [(0, n.jsx)("span", {
                                            className: V.needAccount,
                                            children: k.default.Messages.NEED_ACCOUNT
                                        }), (0, n.jsx)(U.Button, {
                                            onClick: this.handleGotoRegister,
                                            look: U.Button.Looks.LINK,
                                            color: U.Button.Colors.LINK,
                                            className: V.smallRegisterLink,
                                            children: k.default.Messages.REGISTER
                                        })]
                                    })]
                                })
                            })]
                        }), (0, n.jsx)(d.HeadingLevel, {
                            children: e ? (0, n.jsx)(b.default, {
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
                    return (0, n.jsxs)("div", {
                        className: V.pageContainer,
                        children: [(0, n.jsx)(U.default, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: e,
                            expanded: !0,
                            children: this.renderDefaultForm(!0)
                        }), t && (0, n.jsx)(m.default, {})]
                    })
                }
                renderGuildTemplate(e) {
                    return (0, n.jsx)(y.default, {
                        onSubmit: this.handleLogin,
                        tag: "form",
                        className: o(this.props.authBoxClassName, V.horizontalAuthBox),
                        children: () => [(0, n.jsx)(I.default, {
                            guildTemplate: e
                        }, "template"), this.renderDefaultForm(!1)]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, n.jsx)(U.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, n.jsx)(S.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFA,
                            request: e,
                            onEarlyClose: () => {
                                f.default.dispatch({
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
                    return (0, n.jsx)(U.default, {
                        tag: "form",
                        className: e,
                        children: (0, n.jsx)(T.default, {
                            title: k.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                            subtitle: k.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handleIPAuthorize,
                            onCancel: E.default.loginReset
                        })
                    })
                }
                renderPasswordRecovery() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, n.jsx)(U.default, {
                        tag: "form",
                        className: e,
                        children: (0, n.jsx)(T.default, {
                            title: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                            subtitle: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handlePasswordReset,
                            onCancel: E.default.loginReset
                        })
                    })
                }
                renderChooseAccount() {
                    return (0, n.jsx)(N.default, {
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
                        guildTemplate: s,
                        loginStatus: a,
                        handoffAvailable: l
                    } = this.props, {
                        checkingHandoff: r,
                        redirecting: o
                    } = this.state;
                    if (o || r) return (0, n.jsx)(K, {});
                    if (l) return this.renderHandOffAvailable();
                    if (e && r) return this.renderHandOffContinue();
                    switch (a) {
                        case w.LoginStates.LOGGING_IN_MFA_SMS:
                        case w.LoginStates.MFA_SMS_STEP:
                        case w.LoginStates.LOGGING_IN_MFA:
                        case w.LoginStates.MFA_STEP:
                        case w.LoginStates.MFA_WEBAUTHN_STEP:
                        case w.LoginStates.LOGGING_IN_MFA_WEBAUTHN:
                            return this.renderMFA();
                        case w.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case w.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case w.LoginStates.PHONE_IP_AUTHORIZATION:
                            return this.renderIPAuthorization();
                        case w.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPasswordRecovery();
                        case w.LoginStates.LOGGING_IN:
                        case w.LoginStates.NONE:
                        default:
                            if (null != t && t.state === w.InviteStates.RESOLVING) return this.renderResolving();
                            if (null != s) {
                                if (s.state === H.GuildTemplateStates.RESOLVING) return this.renderResolving();
                                return this.renderGuildTemplate(s)
                            }
                            if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                            return this.renderDefault()
                    }
                }
                constructor(e) {
                    var t, s;
                    super(e), this.handleAuthToken = async e => {
                        await E.default.loginToken(e, !1), B.default.track(w.AnalyticEvents.LOGIN_SUCCESSFUL, {
                            source: w.LoginSuccessfulSources.QR_CODE,
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
                            let s = t[e];
                            return Array.isArray(s) ? s[0] : s
                        }
                        return null
                    }, this.handleLogin = e => {
                        let {
                            password: t,
                            undelete: s
                        } = this.state;
                        null != e && e.preventDefault(), E.default.login({
                            login: this.getFullLogin(),
                            password: t,
                            undelete: s,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId,
                            invite: this.props.invite
                        }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleIPAuthorize = async e => {
                        let {
                            password: t,
                            undelete: s
                        } = this.state, n = this.getFullLogin();
                        try {
                            let {
                                token: a
                            } = await C.default.verifyPhone(n, e, !1);
                            await E.default.authorizeIPAddress(a), E.default.login({
                                login: n,
                                password: t,
                                undelete: s,
                                source: this.loginSource,
                                giftCodeSKUId: this.giftCodeSKUId
                            }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
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
                                token: s
                            } = await C.default.verifyPhone(this.getFullLogin(), e, !1);
                            t(w.Routes.RESET, {
                                search: (0, i.stringify)({
                                    token: s,
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
                            data: s,
                            ticket: n
                        } = e;
                        return j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE), E.default.loginMFAv2({
                            code: s,
                            ticket: n,
                            mfaType: t,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        })
                    }, this.handleForgotPassword = async e => {
                        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                        let t = this.getFullLogin();
                        try {
                            j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE), await E.default.forgotPassword(t), (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
                                header: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: k.default.Messages.OKAY,
                                confirmButtonColor: U.Button.Colors.BRAND,
                                className: u.isMobile ? V.mobile : "",
                                ...e,
                                children: (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                        email: t
                                    })
                                })
                            }))
                        } catch {}
                    }, this.handleResendCode = () => {
                        C.default.resendCode(this.getFullLogin())
                    }, this.handleReset = e => {
                        null != e && e.preventDefault(), E.default.loginReset(), this.setState({
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
                            invite: s,
                            giftCode: n,
                            guildTemplate: a,
                            location: l,
                            transitionTo: r,
                            redirectTo: o
                        } = this.props, u = null != l ? (0, i.parse)(l.search) : {};
                        "" !== t && (u.email = t), null != s ? (u.mode = "register", e = w.Routes.INVITE(s.code)) : null != n ? (u.mode = "register", e = w.Routes.GIFT_CODE(n.code)) : null != a ? e = w.Routes.GUILD_TEMPLATE(a.code) : null != o ? (e = w.Routes.REGISTER, u.redirect_to = o) : e = w.Routes.REGISTER, E.default.loginReset(), r(e, {
                            search: (0, i.stringify)(u)
                        }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                    };
                    let a = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        redirecting: e.authenticated,
                        checkingHandoff: e.handoffAvailable,
                        loginPrefix: "",
                        login: null !== (s = null !== (t = a.email) && void 0 !== t ? t : a.login) && void 0 !== s ? s : "",
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
                transitionTo: e => s.g.location.assign(e)
            };
            var Z = function(e) {
                let t = (0, c.useStateFromStoresObject)([M.default, x.default, R.default, g.default, p.default], () => ({
                    authenticated: R.default.isAuthenticated(),
                    handoffAvailable: M.default.isHandoffAvailable(),
                    user: M.default.user,
                    loginStatus: R.default.getLoginStatus(),
                    mfaTicket: R.default.getMFATicket(),
                    mfaSMS: R.default.getMFASMS(),
                    mfaMethods: R.default.getMFAMethods(),
                    maskedPhone: R.default.getMaskedPhone(),
                    errors: R.default.getErrors(),
                    defaultRoute: x.default.defaultRoute,
                    country: p.default.getCountryCode(),
                    hasLoggedInAccounts: g.default.getHasLoggedInAccounts()
                }));
                return (0, n.jsx)(Y, {
                    ...e,
                    ...t
                })
            }
        },
        331085: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            }), s("70102"), s("222007");
            var n, a, l, r, o = s("37983"),
                i = s("884691"),
                u = s("981980"),
                c = s("872717"),
                d = s("77078"),
                f = s("308289"),
                E = s("905949"),
                _ = s("605250"),
                h = s("671278"),
                T = s("124969"),
                A = s("659500"),
                I = s("274515"),
                S = s("158998"),
                m = s("49111"),
                g = s("843455"),
                N = s("782340"),
                C = s("103957"),
                p = s("926622");
            (l = n || (n = {}))[l.INITIALIZING = 0] = "INITIALIZING", l[l.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", l[l.PENDING_FINISH = 2] = "PENDING_FINISH", l[l.PENDING_TICKET = 3] = "PENDING_TICKET", l[l.PENDING_LOGIN = 4] = "PENDING_LOGIN", l[l.FINISH = 5] = "FINISH", (r = a || (a = {}))[r.QR_CODE = 0] = "QR_CODE", r[r.CONFIRM = 1] = "CONFIRM";
            let L = s("527826"),
                O = new _.default("LoginQRSocket");

            function R(e) {
                let {
                    text: t = ""
                } = e, [s, n] = i.useState(!1);
                return i.useEffect(() => {
                    let e = new Image;
                    e.src = L, e.onload = () => n(!0), e.onerror = () => n(!0)
                }, [L]), i.useEffect(() => {
                    s && d.AccessibilityAnnouncer.announce(N.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
                }, [s]), (0, o.jsx)("div", {
                    className: C.qrCodeContainer,
                    children: "" !== t && s ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(h.default, {
                            className: C.qrCode,
                            size: 160,
                            text: t
                        }), (0, o.jsx)("div", {
                            className: C.qrCodeOverlay,
                            children: (0, o.jsx)("img", {
                                src: L,
                                alt: ""
                            })
                        })]
                    }) : (0, o.jsx)("div", {
                        className: C.qrCodeOverlay,
                        "aria-label": N.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                        "aria-busy": !0,
                        children: (0, o.jsx)(d.Spinner, {
                            className: C.qrCode,
                            type: d.Spinner.Type.WANDERING_CUBES,
                            "aria-hidden": !0
                        })
                    })
                })
            }
            let M = e => {
                let {
                    className: t,
                    children: s
                } = e;
                return (0, o.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    className: t,
                    children: s
                })
            };

            function x(e) {
                let {
                    state: t,
                    cancel: s,
                    errorMessage: n
                } = e;
                switch (t.step) {
                    case 0:
                    case 1:
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(R, {
                                text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                            }), (0, o.jsx)(T.Title, {
                                className: p.marginBottom8,
                                children: N.default.Messages.LOGIN_WITH_QR
                            }), null != n ? (0, o.jsx)(M, {
                                children: n
                            }) : (0, o.jsx)(T.SubTitle, {
                                children: N.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                            })]
                        });
                    case 3:
                    case 2: {
                        let {
                            user: e
                        } = t;
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(f.default, {
                                className: C.qrAvatar,
                                user: e,
                                size: d.AvatarSizes.SIZE_120,
                                isMobile: !0,
                                status: g.StatusTypes.ONLINE
                            }), (0, o.jsx)(T.Title, {
                                className: p.marginBottom8,
                                children: N.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                            }), (0, o.jsx)(T.SubTitle, {
                                children: N.default.Messages.LOGIN_AS.format({
                                    username: "".concat(S.default.getUserTag(e))
                                })
                            }), (0, o.jsx)(d.Button, {
                                look: d.Button.Looks.BLANK,
                                color: d.Button.Colors.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: s,
                                className: C.startOverButton,
                                children: N.default.Messages.QR_CODE_LOGIN_START_OVER
                            })]
                        })
                    }
                    case 4:
                    case 5:
                        return (0, o.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES
                        })
                }
            }

            function D(e) {
                let {
                    authTokenCallback: t
                } = e, {
                    state: s,
                    rsaKeyPair: n,
                    cancel: a,
                    handleFailure: l
                } = function(e) {
                    let [t, s] = i.useState(0), [n, a] = i.useState(!1), [l, r] = i.useState({
                        step: 0
                    }), [o, c] = i.useState(null), d = (0, E.default)(), f = i.useMemo(() => new u.default(1500, 3e4), []), _ = i.useRef();
                    _.current = i.useCallback(() => {
                        r({
                            step: 0
                        }), d ? s(e => e + 1) : (O.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
                    }, [d]);
                    let h = i.useCallback(() => {
                            (function(e) {
                                let {
                                    current: t
                                } = e;
                                if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                                return t
                            })(_)()
                        }, [_]),
                        T = i.useCallback(() => {
                            O.error("Could not complete QR code login, trying to restart with a new QR code."), r({
                                step: 0
                            }), !f.pending && f.fail(h)
                        }, [h, f]);
                    return i.useEffect(() => {
                        d && n && 0 === l.step && (O.info("reconnecting, now that document is visible"), a(!1), s(e => e + 1))
                    }, [l, d, n, a]), i.useEffect(() => {
                        let t = Date.now(),
                            s = () => "".concat(Date.now() - t, "ms"),
                            n = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                            a = new WebSocket(n);
                        O.info("[0ms] connecting to ".concat(n));
                        let l = e => O.info("[".concat(s(), "] ").concat(e)),
                            o = null,
                            i = null,
                            u = null,
                            d = null,
                            E = !0;

                        function _() {
                            if (null != o) return o;
                            throw Error("No key pair set")
                        }
                        let S = () => {
                            E ? (E = !1, a.send(JSON.stringify({
                                op: "heartbeat"
                            }))) : (l("heartbeat timeout, reconnecting."), a.close(), T())
                        };
                        return a.onmessage = async t => {
                            let {
                                data: s
                            } = t, n = JSON.parse(s);
                            switch (n.op) {
                                case "nonce_proof": {
                                    let e = n.encrypted_nonce,
                                        t = await (0, I.decryptNonce)(_(), e);
                                    l("computed nonce proof"), a.send(JSON.stringify({
                                        op: "nonce_proof",
                                        nonce: t
                                    }));
                                    return
                                }
                                case "pending_remote_init": {
                                    f.succeed(), A.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE);
                                    let e = await (0, I.publicKeyFingerprint)(_());
                                    if (e !== n.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(n.fingerprint));
                                    l("handshake complete awaiting remote auth."), r({
                                        step: 1,
                                        fingerprint: e
                                    });
                                    return
                                }
                                case "pending_login": {
                                    let e = n.ticket;
                                    null == e && T(), r({
                                        step: 4,
                                        ticket: e
                                    });
                                    return
                                }
                                case "pending_ticket": {
                                    A.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = n.encrypted_user_payload,
                                        t = await (0, I.decodeEncodedUserRecord)(_(), e);
                                    r({
                                        step: 3,
                                        user: t
                                    });
                                    return
                                }
                                case "pending_finish": {
                                    A.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting finish/cancel.");
                                    let e = n.encrypted_user_payload,
                                        t = await (0, I.decodeEncodedUserRecord)(_(), e);
                                    r({
                                        step: 2,
                                        user: t
                                    });
                                    return
                                }
                                case "finish": {
                                    A.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake finished.");
                                    let t = n.encrypted_token;
                                    r({
                                        step: 5
                                    });
                                    let s = await (0, I.decryptEncodedCiphertext)(_(), t);
                                    e(s);
                                    return
                                }
                                case "cancel":
                                    l("remote auth handshake cancelled."), h();
                                    return;
                                case "hello": {
                                    l("got hello, auth timeout=".concat(n.timeout_ms, "ms"));
                                    let e = n.heartbeat_interval;
                                    d = setTimeout(() => {
                                        d = null, S(), u = setInterval(S, e)
                                    }, Math.floor(e * Math.random()));
                                    return
                                }
                                case "heartbeat_ack":
                                    E = !0
                            }
                        }, a.onopen = async () => {
                            o = await (0, I.generateRsaKeyPair)(), i = await (0, I.serializePublicKey)(o);
                            let e = await (0, I.publicKeyFingerprint)(o);
                            l("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                                op: "init",
                                encoded_public_key: i
                            })), c(o)
                        }, a.onclose = e => {
                            l("disconnected, code: ".concat(e.code, " ").concat(e.reason)), T()
                        }, a.onerror = e => {
                            l("disconnected, error: ".concat(JSON.stringify(e))), T()
                        }, () => {
                            l("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u)
                        }
                    }, [h, e, t, f, T]), {
                        state: l,
                        rsaKeyPair: o,
                        cancel: h,
                        handleFailure: T
                    }
                }(t), r = function(e) {
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
                }(s.step);
                return i.useEffect(() => {
                    4 === s.step && null != s.ticket && c.default.post({
                        url: m.Endpoints.REMOTE_AUTH_LOGIN,
                        body: {
                            ticket: s.ticket
                        },
                        oldFormErrors: !0
                    }).then(async e => {
                        if (null != n) try {
                            let s = await (0, I.decryptEncodedCiphertext)(n, e.body.encrypted_token);
                            t(s)
                        } catch (e) {
                            l()
                        } else l()
                    }).catch(() => {
                        l()
                    })
                }, [s, t, n, l]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        className: C.verticalSeparator
                    }), (0, o.jsx)(d.Sequencer, {
                        fillParent: !0,
                        className: C.qrLogin,
                        step: r,
                        steps: [0, 1],
                        children: (0, o.jsx)("div", {
                            className: C.qrLoginInner,
                            children: (0, o.jsx)(x, {
                                state: s,
                                cancel: a
                            })
                        })
                    })]
                })
            }
        },
        598489: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("124969"),
                o = s("328763");

            function i(e) {
                let {
                    children: t,
                    className: s,
                    ...a
                } = e, i = t();
                return (0, n.jsx)(r.default, {
                    ...a,
                    className: l(s, o.container),
                    contentClassName: o.content,
                    children: i.map((e, t) => (0, n.jsx)("div", {
                        className: o.column,
                        style: {
                            flexBasis: "".concat(100 / i.length, "%")
                        },
                        children: e
                    }, t))
                })
            }
        },
        905949: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var n = s("884691");

            function a() {
                return "undefined" == typeof document || "visible" === document.visibilityState
            }

            function l() {
                let [e, t] = (0, n.useState)(a());
                return (0, n.useEffect)(() => {
                    function e() {
                        t(a())
                    }
                    return window.addEventListener("visibilitychange", e), () => {
                        window.removeEventListener("visibilitychange", e)
                    }
                }, [t]), e
            }
        },
        524824: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                LoginHandoffSource: function() {
                    return a
                },
                getLoginHandoffSourceFromRedirectTo: function() {
                    return i
                }
            });
            var n, a, l = s("361572"),
                r = s("49111"),
                o = s("724210");

            function i(e) {
                let t = decodeURIComponent(e),
                    s = (0, l.tryParseChannelPath)(t);
                return null != s && s.channelId === o.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === r.Routes.SETTINGS(r.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
            }(n = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", n.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"
        },
        21572: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("77078"),
                l = s("794538"),
                r = s("145131"),
                o = s("124969"),
                i = s("782340"),
                u = s("265445"),
                c = s("926622");

            function d(e) {
                let {
                    title: t,
                    subtitle: s,
                    error: d,
                    onSubmit: f,
                    onCancel: E
                } = e;
                return (0, n.jsxs)(r.default, {
                    direction: r.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(o.Title, {
                        className: c.marginBottom8,
                        children: t
                    }), (0, n.jsx)(o.SubTitle, {
                        className: u.subTitle,
                        children: s
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(l.default, {
                            inputClassName: u.codeInput,
                            onSubmit: f
                        }), null != d ? (0, n.jsx)(a.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: d
                        }) : null]
                    }), null != E && (0, n.jsx)(a.Button, {
                        className: u.button,
                        onClick: E,
                        color: a.Button.Colors.PRIMARY,
                        children: i.default.Messages.CANCEL
                    })]
                })
            }
        },
        819220: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getVerifiedName: function() {
                    return a
                }
            });
            var n = s("5487");

            function a(e) {
                return (0, n.default)(e).author
            }
        },
        5487: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("579033"),
                a = s("782340");

            function l(e) {
                switch (e) {
                    case n.InternalTemplateCodes.CLASSROOM:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.LOCAL_COMMUNITIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.CREATORS_HOBBIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.GLOBAL_COMMUNITIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.FRIENDS_FAMILY:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.STUDY_GROUPS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.CREATE_FROM_SCRATCH:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.CAMPUS_CLUBS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.LEAGUE_CLUBS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: a.default.Messages.DISCORD_NAME
                        };
                    case n.InternalTemplateCodes.GITHUB_HACKATHON:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: "GitHub Education"
                        };
                    default:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
                        }
                }
            }
        },
        434824: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("124969"),
                l = s("5487"),
                r = s("473759"),
                o = s("579033"),
                i = s("685991");
            let u = {
                [o.InternalTemplateCodes.CLASSROOM]: s("251834"),
                [o.InternalTemplateCodes.LOCAL_COMMUNITIES]: s("787762"),
                [o.InternalTemplateCodes.CREATORS_HOBBIES]: s("41668"),
                [o.InternalTemplateCodes.GLOBAL_COMMUNITIES]: s("494323"),
                [o.InternalTemplateCodes.FRIENDS_FAMILY]: s("660389"),
                [o.InternalTemplateCodes.STUDY_GROUPS]: s("508971"),
                [o.InternalTemplateCodes.CREATE_FROM_SCRATCH]: s("800573"),
                [o.InternalTemplateCodes.CAMPUS_CLUBS]: s("97595"),
                [o.InternalTemplateCodes.LEAGUE_CLUBS]: s("556659"),
                [o.InternalTemplateCodes.GITHUB_HACKATHON]: s("212509")
            };

            function c(e) {
                let {
                    headerId: t,
                    guildTemplate: s
                } = e, c = s.code, d = u[c];
                if (null != d) {
                    var f;
                    let {
                        header: e,
                        description: u,
                        author: E
                    } = (0, l.default)(c);
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("img", {
                            className: i.image,
                            src: d,
                            alt: ""
                        }), (0, n.jsx)(a.Title, {
                            className: i.header,
                            id: t,
                            children: e
                        }), (0, n.jsx)(a.SubTitle, {
                            children: u
                        }), s.state === o.GuildTemplateStates.RESOLVED ? (0, n.jsx)(r.UsagePill, {
                            className: i.usagePill,
                            count: null !== (f = s.usageCount) && void 0 !== f ? f : 0,
                            verifiedName: E
                        }) : null]
                    })
                }
                return (0, n.jsx)(r.default, {
                    pillClassName: i.usagePill,
                    guildTemplate: s,
                    tall: !0
                })
            }
        },
        473759: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                UsagePill: function() {
                    return I
                },
                default: function() {
                    return S
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                o = s("931138"),
                i = s("124969"),
                u = s("486952"),
                c = s("819220"),
                d = s("5487"),
                f = s("579033"),
                E = s("782340"),
                _ = s("426601"),
                h = s("926622");

            function T() {
                return (0, n.jsx)(o.default, {
                    className: _.verifiedIcon,
                    children: (0, n.jsx)("div", {
                        className: _.verifiedCheckContainer,
                        children: (0, n.jsx)(u.default, {
                            className: _.verifiedCheck
                        })
                    })
                })
            }

            function A(e) {
                let {
                    verified: t,
                    text: s
                } = e;
                return t ? (0, n.jsxs)("div", {
                    className: _.verifiedNameContainer,
                    children: [(0, n.jsx)(T, {}), s]
                }) : (0, n.jsx)(n.Fragment, {
                    children: s
                })
            }

            function I(e) {
                let {
                    className: t,
                    count: s,
                    creator: a,
                    verifiedName: r
                } = e;
                return (0, n.jsx)("div", {
                    className: l(_.usagePill, t, _.userText),
                    children: null != a || null != r ? E.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                        usageCount: s,
                        creator: null != r ? r : a,
                        creatorHook: (e, t) => (0, n.jsx)(A, {
                            text: e,
                            verified: null != r
                        }, t)
                    }) : E.default.Messages.GUILD_TEMPLATE_USAGES.format({
                        usageCount: s
                    })
                })
            }

            function S(e) {
                var t;
                let {
                    guildTemplate: s,
                    error: a,
                    tall: o,
                    pillClassName: u
                } = e;
                if (null != a && "" !== a) return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsx)(i.Title, {
                        children: E.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, n.jsx)(i.SubTitle, {
                        children: a
                    })]
                });
                if (s.state === f.GuildTemplateStates.RESOLVING) return (0, n.jsx)("div", {
                    className: _.container,
                    children: (0, n.jsx)(r.Spinner, {})
                });
                let T = (0, d.default)(s.code).header;
                if (!o) return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsx)(i.Title, {
                        className: _.title,
                        children: T
                    }), (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, _.userText),
                        children: s.name
                    })]
                });
                return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsx)(i.Title, {
                        className: _.title,
                        children: T
                    }), (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, h.marginTop2),
                        children: E.default.Messages.GUILD_TEMPLATE_BASED_ON
                    }), (0, n.jsx)(i.Title, {
                        className: l(_.title, _.userText),
                        children: s.name
                    }), null != s.description && "" !== s.description && (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, _.userText, h.marginTop8),
                        children: s.description
                    }), (0, n.jsx)(I, {
                        className: u,
                        count: null !== (t = s.usageCount) && void 0 !== t ? t : 0,
                        creator: s.creator.username,
                        verifiedName: (0, c.getVerifiedName)(s.code)
                    })]
                })
            }
        },
        672630: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("70102");
            var n = s("748820"),
                a = s("872717"),
                l = s("49111"),
                r = {
                    generateNonce: function() {
                        return (0, n.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await a.default.post({
                            url: l.Endpoints.HANDOFF,
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
        382236: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            }), s("222007"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("506083");
            var n, a, l = s("37983"),
                r = s("884691"),
                o = s("730290"),
                i = s("391679"),
                u = s("446674"),
                c = s("872717"),
                d = s("95410"),
                f = s("77078"),
                E = s("913144"),
                _ = s("437822"),
                h = s("229353"),
                T = s("271938"),
                A = s("599110"),
                I = s("672630"),
                S = s("49111"),
                m = s("332204");
            let g = "mweb_handoff_nonce",
                N = "mweb_handoff_nonce_expiration";
            (a = n || (n = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
            let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
                p = new Set(["deep_link_failed"]),
                L = () => {
                    d.default.remove(g), d.default.remove(N)
                };
            var O = () => {
                let e = (0, u.useStateFromStores)([T.default], () => T.default.getFingerprint()),
                    {
                        fingerprint: t,
                        handoff_token: s
                    } = (0, o.parse)(window.location.search),
                    n = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
                    a = null != n ? n : null !== e ? e : void 0;
                r.useEffect(() => {
                    null !== n && e !== n && E.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: n
                    })
                }, [n, e]);
                let [O, R] = r.useState(null), M = r.useCallback(e => {
                    R(e), A.default.track(S.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: e,
                        fingerprint: (0, i.maybeExtractId)(a)
                    }, {
                        fingerprint: a
                    })
                }, [R, a]), x = d.default.get(g);
                if ("null" === s && null === O && M("deep_link_failed"), null != s && "null" !== s && null == x && null === O && M("nonce_missing"), r.useEffect(() => {
                        if (null != x) {
                            let e = d.default.get(N);
                            (null == e || Date.now() >= e) && (M("nonce_expired"), L())
                        }
                    }, [x, M]), r.useEffect(() => {
                        null != s && "null" !== s && null != x && null == O && c.default.post({
                            url: S.Endpoints.HANDOFF_EXCHANGE,
                            body: {
                                key: x,
                                handoff_token: s
                            }
                        }).then(e => _.default.loginToken(e.body.token, !1)).then(() => {
                            A.default.track(S.AnalyticEvents.LOGIN_SUCCESSFUL, {
                                source: S.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, i.maybeExtractId)(a)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                        }).catch(() => {
                            M("handoff_exchange")
                        }).finally(() => {
                            L()
                        })
                    }, [s, x, O, a, M]), null == a) return null;
                let D = (() => {
                        if (null == O) return (0, l.jsxs)(l.Fragment, {
                            children: [h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, l.jsx)("br", {}), h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                        });
                        if (p.has(O)) return h.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                        if (C.has(O)) return h.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
                    })(),
                    U = null != O && p.has(O);
                return U ? (0, l.jsx)("div", {
                    className: m.errorContainer,
                    children: (0, l.jsx)(f.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/semibold",
                        children: D
                    })
                }) : (0, l.jsxs)("div", {
                    className: m.container,
                    children: [(0, l.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: D
                    }), (0, l.jsx)(f.Button, {
                        look: f.Button.Looks.INVERTED,
                        color: f.Button.Colors.BRAND_NEW,
                        onClick: () => {
                            let e = I.default.generateNonce();
                            d.default.set(g, e), d.default.set(N, Date.now() + 6e4);
                            let t = new URL(S.MOBILE_WEB_HANDOFF_DEEP_LINK),
                                s = new URLSearchParams(window.location.search);
                            s.delete("fingerprint"), s.delete("handoff_token");
                            let n = new URLSearchParams;
                            n.set("redirect", encodeURIComponent(window.location.pathname + s.toString())), n.set("key", e), n.set("fingerprint", a), t.search = n.toString(), A.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, i.maybeExtractId)(a),
                                source: "mobile_web_handoff",
                                destination: S.MOBILE_WEB_HANDOFF_DEEP_LINK
                            }, {
                                fingerprint: a,
                                flush: !0
                            }), window.location.href = t.toString()
                        },
                        children: (0, l.jsx)(f.Text, {
                            className: m.buttonText,
                            variant: "text-sm/semibold",
                            children: h.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                        })
                    })]
                })
            }
        },
        724554: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("759843"),
                l = s("77078"),
                r = s("428958"),
                o = s("124969"),
                i = s("851460"),
                u = s("782340"),
                c = s("329314");

            function d(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, r.default)({
                    type: a.ImpressionTypes.MODAL,
                    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                }), (0, n.jsxs)(o.default, {
                    className: c.chooseAccountAuthBox,
                    children: [(0, n.jsx)(o.Title, {
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
                    }), (0, n.jsx)(l.Text, {
                        className: c.chooseAccountHelpText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                    }), (0, n.jsx)(i.default, {
                        actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                        onAction: e => {
                            e === i.MultiAccountActionType.LOGIN_REQUIRED && t()
                        }
                    }), (0, n.jsx)("div", {
                        className: c.actions,
                        children: (0, n.jsx)(l.Button, {
                            className: c.chooseAccountButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: t,
                            size: l.Button.Sizes.MEDIUM,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                            })
                        })
                    })]
                })
            }
        },
        851460: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MultiAccountActionType: function() {
                    return n
                },
                default: function() {
                    return R
                }
            }), s("506083");
            var n, a, l = s("37983"),
                r = s("884691"),
                o = s("414456"),
                i = s.n(o),
                u = s("446674"),
                c = s("77078"),
                d = s("437822"),
                f = s("272030"),
                E = s("766274"),
                _ = s("271938"),
                h = s("102985"),
                T = s("697218"),
                A = s("433487"),
                I = s("599110"),
                S = s("158998"),
                m = s("694787"),
                g = s("770032"),
                N = s("927101"),
                C = s("49111"),
                p = s("782340"),
                L = s("31295");

            function O(e) {
                let {
                    actionText: t,
                    user: s,
                    onAction: n
                } = e, {
                    currentUser: a,
                    hidePrivateData: r,
                    isAuthenticated: o
                } = (0, u.useStateFromStoresObject)([T.default, h.default, _.default], () => ({
                    currentUser: T.default.getCurrentUser(),
                    hidePrivateData: h.default.hidePersonalInformation,
                    isAuthenticated: _.default.isAuthenticated()
                })), N = new E.default(s), O = o && (null == a ? void 0 : a.id) === N.id, R = s.tokenStatus === g.MultiAccountTokenStatus.INVALID, M = r || N.isPomelo() ? null : "#".concat(N.discriminator), x = null;
                return O ? x = (0, l.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    className: L.hintText,
                    color: "text-positive",
                    children: p.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : R && (x = (0, l.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    className: L.hintText,
                    color: "text-danger",
                    children: p.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, l.jsx)("div", {
                    className: L.accountCard,
                    children: (0, l.jsxs)("div", {
                        className: L.userDetails,
                        children: [(0, l.jsx)(c.Avatar, {
                            src: N.getAvatarURL(void 0, 40),
                            size: c.AvatarSizes.SIZE_40,
                            "aria-label": s.username
                        }), (0, l.jsxs)("div", {
                            className: i(L.usernameSection, {
                                [L.hasActionMaxWidth]: !O
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: L.username,
                                children: [(0, l.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: L.textOverflow,
                                    children: S.default.getUserTag(N, {
                                        mode: "username",
                                        identifiable: r ? "never" : "always"
                                    })
                                }), (0, l.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: M
                                })]
                            }), x]
                        }), (0, l.jsxs)("div", {
                            className: L.userActions,
                            children: [!O && (0, l.jsx)(c.Button, {
                                onClick: function() {
                                    if (R) {
                                        n(0, s.id);
                                        return
                                    }
                                    I.default.track(C.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: C.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), m.switchAccount(s.id), n(1, s.id)
                                },
                                color: c.Button.Colors.PRIMARY,
                                children: R ? p.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, l.jsx)(c.Button, {
                                className: L.userActionMenu,
                                onClick: function(e) {
                                    (0, f.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, l.jsx)(c.Menu, {
                                            "aria-label": p.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: f.closeContextMenu,
                                            onSelect: t,
                                            children: (0, l.jsx)(c.MenuItem, {
                                                id: "remove-account",
                                                label: p.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        d.default.logout(null, s.id).finally(() => {
                                                            m.removeAccount(s.id)
                                                        });
                                                        let e = {};
                                                        null != a ? e.section = C.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = C.PageAnalyticsLocations.LOGIN, I.default.track(C.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e
                                                        }), n(2, s.id)
                                                    }(), null != t && t()
                                                },
                                                color: "danger"
                                            })
                                        })
                                    })
                                },
                                size: c.Button.Sizes.ICON,
                                look: c.Button.Looks.BLANK,
                                color: c.Button.Colors.WHITE,
                                "aria-label": p.default.Messages.MORE_OPTIONS,
                                children: (0, l.jsx)(A.default, {
                                    className: L.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function R(e) {
                let {
                    actionText: t,
                    onAction: s
                } = e, {
                    isLoading: n,
                    multiAccountUsers: a
                } = (0, N.useMultiAccountUsers)();
                return (0, l.jsx)("div", {
                    className: L.list,
                    children: n ? (0, l.jsx)(c.Spinner, {}) : a.map((e, n) => (0, l.jsxs)(r.Fragment, {
                        children: [(0, l.jsx)(O, {
                            user: e,
                            actionText: t,
                            onAction: s
                        }, e.id), a.length - 1 !== n && (0, l.jsx)("div", {
                            role: "separator",
                            className: L.separator
                        })]
                    }, e.id))
                })
            }(a = n || (n = {}))[a.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", a[a.SWITCHED = 1] = "SWITCHED", a[a.REMOVED = 2] = "REMOVED"
        },
        345327: function(e, t, s) {
            "use strict";
            var n, a;
            s.r(t), s.d(t, {
                PhoneOrEmailSelectorForceMode: function() {
                    return n
                },
                shouldShowCountryCodeSelector: function() {
                    return o
                }
            }), (a = n || (n = {})).PHONE = "phone", a.EMAIL = "email";
            let l = /^[-() \d]+$/,
                r = e => e.startsWith("+");

            function o(e, t) {
                return "phone" === e ? !r(t) : "email" !== e && !(t.length < 3) && l.test(t)
            }
        },
        467413: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("301165"),
                i = s("446674"),
                u = s("77078"),
                c = s("206230"),
                d = s("878720"),
                f = s("189613"),
                E = s("393004");

            function _(e) {
                let {
                    show: t,
                    alpha2: s,
                    countryCode: l
                } = e, _ = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), h = a.useRef(null), [T, A] = a.useState(0), [I, S] = a.useState(!1);
                a.useEffect(() => {
                    function e() {
                        var e, s;
                        A(t && null !== (s = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, s, l]);
                let m = (0, o.useSpring)({
                        width: "".concat(T, "px"),
                        immediate: _,
                        onStart: () => {
                            S(!0)
                        },
                        onRest: () => {
                            S(!1)
                        }
                    }),
                    g = e => {
                        d.default.setCountryCode(e)
                    };
                return (0, n.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, n.jsx)(f.default, {
                        className: E.popout,
                        onClick: t => {
                            g(t), e.closePopout()
                        }
                    }),
                    children: e => (0, n.jsx)("div", {
                        className: r(E.outerContainer, {
                            [E.hidden]: !(t || I)
                        }),
                        children: (0, n.jsx)(o.animated.div, {
                            className: E.container,
                            style: m,
                            children: (0, n.jsxs)("div", {
                                className: E.innerContainer,
                                ref: h,
                                children: [(0, n.jsxs)(u.Clickable, {
                                    ...e,
                                    className: E.countryCode,
                                    children: [s, " ", l]
                                }), (0, n.jsx)("div", {
                                    className: E.separator
                                })]
                            })
                        })
                    })
                })
            }
        },
        589252: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("77078"),
                i = s("476765"),
                u = s("345327"),
                c = s("467413"),
                d = s("713186"),
                f = s("905518");

            function E(e) {
                let {
                    alpha2: t,
                    countryCode: s,
                    forceMode: l,
                    label: E,
                    error: _,
                    className: h,
                    required: T,
                    value: A,
                    setRef: I,
                    placeholder: S,
                    autoFocus: m,
                    maxLength: g,
                    spellCheck: N,
                    autoComplete: C,
                    autoCapitalize: p,
                    autoCorrect: L,
                    onChange: O,
                    inputClassName: R
                } = e, M = (0, i.useUID)(), [x, D] = a.useState(!1), U = (0, u.shouldShowCountryCodeSelector)(l, A);
                return (0, n.jsx)(o.FormItem, {
                    title: E,
                    error: _,
                    className: h,
                    required: T,
                    tag: "label",
                    htmlFor: M,
                    children: (0, n.jsxs)("div", {
                        className: r(f.input, d.input, R, {
                            [f.error]: null != _,
                            [f.focused]: x
                        }),
                        children: [(0, n.jsx)(c.default, {
                            show: U,
                            alpha2: t,
                            countryCode: s
                        }), (0, n.jsx)(o.TextInput, {
                            id: M,
                            name: "email",
                            type: l === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: A,
                            inputRef: I,
                            placeholder: S,
                            "aria-label": E,
                            required: T,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(l, e) ? s : "";
                                O(e, t)
                            },
                            autoComplete: C,
                            autoCapitalize: p,
                            autoCorrect: L,
                            autoFocus: m,
                            maxLength: g,
                            spellCheck: N,
                            className: d.inputWrapper,
                            inputClassName: d.inputField,
                            onFocus: () => D(!0),
                            onBlur: () => D(!1)
                        })]
                    })
                })
            }
        },
        671278: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                QRCodeOverlaySizes: function() {
                    return a
                },
                QRCodeWithOverlay: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var n, a, l = s("37983"),
                r = s("884691"),
                o = s("82697"),
                i = s("56701");
            (n = a || (a = {})).SIZE_40 = "SIZE_40", n.SIZE_60 = "SIZE_60";
            let u = Object.freeze({
                    SIZE_40: "size-40",
                    SIZE_60: "size-60"
                }),
                c = s("527826");
            class d extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        text: t,
                        ...s
                    } = this.props;
                    return (0, l.jsx)("div", {
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            width: s.size,
                            height: s.size,
                            backgroundColor: s.bgColor
                        },
                        className: e,
                        children: (0, l.jsx)(o.default, {
                            value: t,
                            level: "M",
                            ...s
                        })
                    })
                }
            }
            d.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            class f extends r.PureComponent {
                render() {
                    let {
                        overlaySize: e
                    } = this.props, t = u[null != e ? e : "SIZE_40"];
                    return (0, l.jsxs)("div", {
                        className: i.qrCodeContainer,
                        children: [(0, l.jsx)(d, {
                            ...this.props
                        }), (0, l.jsx)("div", {
                            className: i.qrCodeOverlay,
                            children: (0, l.jsx)("img", {
                                className: i[t],
                                src: c,
                                alt: ""
                            })
                        })]
                    })
                }
            }
            f.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var E = d
        },
        274515: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                generateRsaKeyPair: function() {
                    return r
                },
                serializePublicKey: function() {
                    return o
                },
                publicKeyFingerprint: function() {
                    return i
                },
                decryptEncodedCiphertext: function() {
                    return E
                },
                decryptNonce: function() {
                    return _
                },
                decodeEncodedUserRecord: function() {
                    return h
                }
            }), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("101997"), s("222007"), s("781738"), s("492311"), s("70102");
            var n = s("627445"),
                a = s.n(n),
                l = s("766274");

            function r() {
                return window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                }, !0, ["decrypt"])
            }
            async function o(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }
            async function i(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return d(t)
            }

            function u(e) {
                return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
            }

            function c(e) {
                return Uint8Array.from(atob(e), e => e.charCodeAt(0))
            }
            async function d(e) {
                let t = await window.crypto.subtle.digest({
                    name: "SHA-256"
                }, e);
                return u(t)
            }

            function f(e, t) {
                return a(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                }, e.privateKey, t)
            }
            async function E(e, t) {
                let s = new TextDecoder,
                    n = await f(e, c(t));
                return s.decode(n)
            }
            async function _(e, t) {
                let s = await f(e, c(t));
                return u(s)
            }
            async function h(e, t) {
                t = await E(e, t);
                let s = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
                if (null == s) throw Error("Invalid encoded user record.");
                let [, n, a, r, o] = s;
                return new l.default({
                    id: n,
                    discriminator: a,
                    avatar: "0" === r ? null : r,
                    username: o
                })
            }
        }
    }
]);