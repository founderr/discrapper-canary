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
                    return p
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("446674"),
                i = s("77078"),
                u = s("299285"),
                d = s("210721"),
                c = s("65324"),
                f = s("697218"),
                E = s("10514"),
                _ = s("552712"),
                h = s("953109"),
                m = s("124969"),
                T = s("380186"),
                g = s("646718"),
                A = s("782340"),
                S = s("451862"),
                N = s("173791"),
                I = s("926622"),
                p = o.default.connectStores([_.default, u.default, E.default, f.default], e => {
                    let {
                        giftCode: t
                    } = e, s = _.default.get(t.skuId), {
                        subscriptionPlanId: n
                    } = t, a = null != n ? (0, T.getOrFetchSubscriptionPlan)(n) : null;
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
                    } = e, E = null == l ? A.default.Messages.GIFT_CODE_AUTH_GIFTED : A.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                        username: l.username
                    }), _ = o.name;
                    return null != f && (_ = (f.interval === g.SubscriptionIntervalTypes.MONTH ? A.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : A.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                        skuName: o.name,
                        intervalCount: f.intervalCount
                    })), (0, n.jsxs)(a.Fragment, {
                        children: [null != s.giftStyle ? (0, n.jsx)(c.default, {
                            defaultAnimationState: d.AnimationState.LOOP,
                            giftStyle: s.giftStyle,
                            className: S.seasonalIcon
                        }) : (0, n.jsx)(m.Avatar, {
                            src: null != l ? l.getAvatarURL(void 0, 100) : null,
                            size: i.AvatarSizes.DEPRECATED_SIZE_100,
                            className: I.marginBottom20
                        }), null != t ? (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(m.SubTitle, {
                                children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                            }), (0, n.jsx)(m.Title, {
                                children: t
                            })]
                        }) : (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(m.SubTitle, {
                                children: E
                            }), (0, n.jsxs)(m.Title, {
                                className: r(I.marginTop8, N.flexCenter),
                                children: [(0, n.jsx)(h.default, {
                                    size: h.default.Sizes.MEDIUM,
                                    className: S.applicationIcon,
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
                    return z
                },
                WebAuthnLogin: function() {
                    return Y
                },
                default: function() {
                    return q
                }
            }), s("222007"), s("781738");
            var n = s("37983"),
                a = s("884691"),
                l = s("376507"),
                r = s("414456"),
                o = s.n(r),
                i = s("730290"),
                u = s("394846"),
                d = s("446674"),
                c = s("77078"),
                f = s("913144"),
                E = s("437822"),
                _ = s("697796"),
                h = s("524824"),
                m = s("21572"),
                T = s("791160"),
                g = s("434824"),
                A = s("648498"),
                S = s("24287"),
                N = s("382236"),
                I = s("770032"),
                p = s("724554"),
                C = s("878720"),
                L = s("25033"),
                M = s("589252"),
                O = s("970366"),
                R = s("271938"),
                x = s("72177"),
                D = s("476108"),
                U = s("145131"),
                v = s("124969"),
                B = s("980428"),
                F = s("599110"),
                j = s("659500"),
                b = s("773336"),
                P = s("404432"),
                G = s("719451"),
                y = s("331085"),
                k = s("598489"),
                w = s("49111"),
                H = s("579033"),
                W = s("782340"),
                V = s("741532"),
                K = s("926622");

            function z() {
                return (0, n.jsx)(v.default, {
                    children: (0, n.jsx)(c.Spinner, {})
                })
            }

            function Y(e) {
                let {
                    authBoxClassName: t,
                    loginStatus: r,
                    handleReset: o
                } = e, [i, u] = a.useState(!1);
                return (0, n.jsxs)(v.default, {
                    className: t,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        src: s("367598"),
                        className: K.marginBottom20
                    }), (0, n.jsx)(v.Title, {
                        className: K.marginBottom8,
                        children: W.default.Messages.TWO_FA
                    }), (0, n.jsx)(v.SubTitle, {
                        children: W.default.Messages.TWO_FA_WEBAUTHN_BODY
                    }), (0, n.jsxs)(v.Block, {
                        className: K.marginTop40,
                        children: [(0, n.jsx)(v.Button, {
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
                            children: W.default.Messages.TWO_FA_WEBAUTHN_ACTION
                        }), (0, n.jsx)(v.Button, {
                            look: v.Button.Looks.OUTLINED,
                            className: K.marginTop8,
                            disabled: r === w.LoginStates.LOGGING_IN_MFA_WEBAUTHN,
                            onClick: () => {
                                f.default.dispatch({
                                    type: "LOGIN_MFA_WEBAUTHN_TO_TOTP"
                                })
                            },
                            children: W.default.Messages.TWO_FA_WEBAUTHN_SWITCH_TOTP
                        }), (0, n.jsx)(v.Button, {
                            look: v.Button.Looks.LINK,
                            color: v.Button.Colors.LINK,
                            className: K.marginTop8,
                            onClick: o,
                            children: W.default.Messages.TWO_FA_LOGIN_FOOTER
                        })]
                    })]
                })
            }
            class Z extends a.PureComponent {
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
                    e && !t ? (0, _.handoffBegin)() : t && this.loginOrSSO(t, a, !0), F.default.track(w.AnalyticEvents.LOGIN_VIEWED, {
                        location: null != n ? "Invite Login Page" : "Non-Invite Login Page",
                        login_source: this.loginSource,
                        authenticated: t,
                        ...null != s ? (0, T.default)(s, !1, !1) : {}
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
                    return (0, n.jsxs)(v.default, {
                        className: e,
                        children: [(0, n.jsx)(v.AuthSpinner, {}), (0, n.jsx)(v.Title, {
                            className: K.marginBottom8,
                            children: W.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                        }), (0, n.jsx)(v.SubTitle, {
                            children: W.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                        })]
                    })
                }
                renderHandOffContinue() {
                    let {
                        user: e,
                        transitionTo: t,
                        authBoxClassName: s
                    } = this.props;
                    return null == e ? null : (0, n.jsxs)(v.default, {
                        className: s,
                        children: [(0, n.jsx)(v.Avatar, {
                            src: e.getAvatarURL(void 0, 100),
                            size: c.AvatarSizes.DEPRECATED_SIZE_100,
                            className: K.marginBottom20
                        }), (0, n.jsx)(v.Title, {
                            className: K.marginBottom8,
                            children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                                name: e.toString()
                            })
                        }), (0, n.jsx)(v.SubTitle, {
                            className: K.marginBottom40,
                            children: W.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                        }), (0, n.jsxs)(v.Block, {
                            children: [(0, n.jsx)(v.Button, {
                                onClick: () => t(w.Routes.APP),
                                className: K.marginBottom8,
                                children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                                    name: e.toString()
                                })
                            }), (0, n.jsx)(v.Button, {
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                onClick: this.handleReset,
                                children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                            })]
                        })]
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = this.props.loginStatus === w.LoginStates.ACCOUNT_DISABLED, s = t ? W.default.Messages.ACCOUNT_DISABLED_TITLE : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? W.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, n.jsx)(v.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        children: (0, n.jsxs)(c.HeadingLevel, {
                            component: (0, n.jsx)(v.Title, {
                                className: K.marginBottom8,
                                children: s
                            }),
                            children: [(0, n.jsx)(v.SubTitle, {
                                className: K.marginBottom20,
                                children: a
                            }), (0, n.jsxs)(v.Block, {
                                children: [(0, n.jsx)(v.Button, {
                                    color: v.Button.Colors.BRAND,
                                    type: "submit",
                                    children: W.default.Messages._RETURN_TO_LOGIN
                                }), (0, n.jsx)("div", {
                                    className: o(K.marginTop8, V.needAccount),
                                    children: W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
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
                    return (0, n.jsxs)(v.default, {
                        className: e,
                        children: [(0, n.jsx)(G.InviteResolvingHeader, {}), (0, n.jsxs)(v.Block, {
                            className: K.marginTop20,
                            children: [(0, n.jsx)(M.default, {
                                className: K.marginBottom20,
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                label: W.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                            }), (0, n.jsx)(v.Input, {
                                className: K.marginBottom20,
                                label: W.default.Messages.FORM_LABEL_PASSWORD,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                value: this.state.password,
                                required: !0
                            }), (0, n.jsx)(v.Button, {
                                className: K.marginBottom8,
                                type: "submit",
                                disabled: !0,
                                children: W.default.Messages._LOGIN
                            }), (0, n.jsx)(v.Button, {
                                disabled: !0,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: W.default.Messages.FORGOT_PASSWORD
                            }), (0, n.jsx)(v.Button, {
                                disabled: !0,
                                className: K.marginTop4,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: W.default.Messages.NEED_ACCOUNT
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
                        disableAutofocusOnDefaultForm: d
                    } = this.props, f = !this.hasError("email") && this.hasError("password"), E = (null == a ? void 0 : a.stage_instance) != null;
                    return s = null == a || E ? null != l ? (0, n.jsx)(P.default, {
                        giftCode: l
                    }) : (0, n.jsxs)("div", {
                        className: V.header,
                        children: [(0, n.jsx)(v.Title, {
                            className: K.marginBottom8,
                            children: W.default.Messages.LOGIN_TITLE
                        }, "title"), !1 === (0, b.isAndroidWeb)() ? (0, n.jsx)(v.SubTitle, {
                            children: W.default.Messages.AUTH_LOGIN_BODY
                        }, "subtitle") : null]
                    }) : (0, n.jsx)(G.default, {
                        invite: a
                    }), (0, n.jsxs)(U.default, {
                        direction: U.default.Direction.HORIZONTAL,
                        align: U.default.Align.CENTER,
                        children: [(0, n.jsxs)("div", {
                            className: V.mainLoginContainer,
                            children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, n.jsx)(v.Button, {
                                onClick: () => {
                                    this.setState(e => ({
                                        ...e,
                                        dismissedChooseAccount: !1
                                    }))
                                },
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.PRIMARY,
                                className: V.goBackButton,
                                children: (0, n.jsxs)("div", {
                                    className: V.content,
                                    children: [(0, n.jsx)(B.default, {
                                        width: 16,
                                        height: 16,
                                        className: V.caret
                                    }), (0, n.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        children: W.default.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }), s, (0, n.jsx)(c.HeadingLevel, {
                                children: (0, n.jsxs)(v.Block, {
                                    className: K.marginTop20,
                                    children: [(0, n.jsx)(M.default, {
                                        alpha2: i.alpha2,
                                        countryCode: i.code.split(" ")[0],
                                        className: K.marginBottom20,
                                        label: W.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                                        autoFocus: !f && !u && !d,
                                        required: !0
                                    }), (0, n.jsx)(v.Input, {
                                        label: W.default.Messages.FORM_LABEL_PASSWORD,
                                        error: this.renderError("password"),
                                        onChange: e => this.setState({
                                            password: e
                                        }),
                                        name: "password",
                                        type: "password",
                                        setRef: this.setPasswordRef,
                                        autoComplete: "off",
                                        spellCheck: "false",
                                        autoFocus: f && !u && !d,
                                        value: this.state.password,
                                        required: !0
                                    }), (0, n.jsx)(v.Button, {
                                        onClick: this.handleForgotPassword,
                                        look: v.Button.Looks.LINK,
                                        color: v.Button.Colors.LINK,
                                        className: o(K.marginBottom20, K.marginTop4),
                                        children: W.default.Messages.FORGOT_PASSWORD
                                    }), (0, n.jsx)(v.Button, {
                                        type: "submit",
                                        submitting: r === w.LoginStates.LOGGING_IN,
                                        color: E ? v.Button.Colors.GREEN : v.Button.Colors.BRAND,
                                        className: K.marginBottom8,
                                        children: E ? W.default.Messages._LOGIN_STAGE : W.default.Messages._LOGIN
                                    }), (0, n.jsxs)("div", {
                                        className: K.marginTop4,
                                        children: [(0, n.jsx)("span", {
                                            className: V.needAccount,
                                            children: W.default.Messages.NEED_ACCOUNT
                                        }), (0, n.jsx)(v.Button, {
                                            onClick: this.handleGotoRegister,
                                            look: v.Button.Looks.LINK,
                                            color: v.Button.Colors.LINK,
                                            className: V.smallRegisterLink,
                                            children: W.default.Messages.REGISTER
                                        })]
                                    })]
                                })
                            })]
                        }), (0, n.jsx)(c.HeadingLevel, {
                            children: e ? (0, n.jsx)(y.default, {
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
                        children: [(0, n.jsx)(v.default, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: e,
                            expanded: !0,
                            children: this.renderDefaultForm(!0)
                        }), t && (0, n.jsx)(N.default, {})]
                    })
                }
                renderGuildTemplate(e) {
                    return (0, n.jsx)(k.default, {
                        onSubmit: this.handleLogin,
                        tag: "form",
                        className: o(this.props.authBoxClassName, V.horizontalAuthBox),
                        children: () => [(0, n.jsx)(g.default, {
                            guildTemplate: e
                        }, "template"), this.renderDefaultForm(!1)]
                    })
                }
                renderMFA() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        loginStatus: e,
                        mfaSMS: t,
                        authBoxClassName: a
                    } = this.props;
                    return (0, n.jsxs)(v.default, {
                        onSubmit: this.handleTokenSubmit,
                        tag: "form",
                        className: a,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            src: s("367598"),
                            className: K.marginBottom20
                        }), (0, n.jsx)(v.Title, {
                            className: K.marginBottom8,
                            children: W.default.Messages.TWO_FA
                        }), (0, n.jsx)(v.SubTitle, {
                            children: W.default.Messages.TWO_FA_ENTER_TOKEN_BODY
                        }), (0, n.jsxs)(v.Block, {
                            className: K.marginTop40,
                            children: [(0, n.jsx)(v.Input, {
                                className: K.marginBottom20,
                                error: this.renderError("code"),
                                setRef: this.setCodeRef,
                                onChange: e => this.setState({
                                    code: e
                                }),
                                autoComplete: "one-time-code",
                                placeholder: W.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                label: W.default.Messages.TWO_FA_ENTER_TOKEN_LABEL,
                                value: this.state.code,
                                required: !0
                            }, "totpCode"), (0, n.jsx)(v.Button, {
                                type: "submit",
                                submitting: e === w.LoginStates.LOGGING_IN_MFA,
                                children: W.default.Messages._LOGIN
                            }), t ? (0, n.jsx)(v.Button, {
                                onClick: this.handleToggleSMSLogin,
                                submitting: e === w.LoginStates.LOGGING_IN_MFA_SMS,
                                className: K.marginTop8,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: W.default.Messages.MFA_SMS_RECEIVE_CODE
                            }) : null, (0, n.jsx)(v.Button, {
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                className: K.marginTop4,
                                onClick: this.handleReset,
                                children: W.default.Messages._TWO_FA_LOGIN_FOOTER
                            })]
                        })]
                    })
                }
                renderMFASMS() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        loginStatus: e,
                        maskedPhone: t,
                        authBoxClassName: a
                    } = this.props, l = e === w.LoginStates.LOGGING_IN_MFA_SMS || "" === t;
                    return (0, n.jsxs)(v.default, {
                        onSubmit: this.handleSMSTokenSubmit,
                        tag: "form",
                        className: a,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            src: s("367598"),
                            className: K.marginBottom20
                        }), (0, n.jsx)(v.Title, {
                            className: K.marginBottom8,
                            children: W.default.Messages.TWO_FA
                        }), (0, n.jsx)(v.SubTitle, {
                            className: K.marginBottom8,
                            children: l ? W.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : W.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                                phoneNumber: t
                            })
                        }), (0, n.jsxs)(v.Block, {
                            className: K.marginTop40,
                            children: [(0, n.jsx)(v.Input, {
                                className: K.marginBottom20,
                                error: this.renderError("code"),
                                setRef: this.setCodeRef,
                                onChange: e => this.setState({
                                    smsCode: e
                                }),
                                autoComplete: "off",
                                placeholder: W.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                label: W.default.Messages.TWO_FA_ENTER_SMS_TOKEN_LABEL,
                                value: this.state.smsCode,
                                required: !0
                            }, "smsCode"), (0, n.jsx)(v.Button, {
                                type: "submit",
                                submitting: l,
                                color: l ? v.Button.Colors.TRANSPARENT : v.Button.Colors.BRAND,
                                children: W.default.Messages._LOGIN
                            }), l ? null : (0, n.jsx)(v.Button, {
                                onClick: this.handleToggleSMSLogin,
                                className: K.marginTop8,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: W.default.Messages.MFA_SMS_RESEND
                            }), (0, n.jsx)(v.Button, {
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                className: K.marginTop4,
                                onClick: this.handleReset,
                                children: W.default.Messages._TWO_FA_LOGIN_FOOTER
                            })]
                        })]
                    })
                }
                renderMFAWebAuthn() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        authBoxClassName: e,
                        loginStatus: t
                    } = this.props;
                    return (0, n.jsx)(Y, {
                        authBoxClassName: e,
                        loginStatus: t,
                        handleReset: this.handleReset
                    })
                }
                renderMFAv2() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, n.jsx)(v.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, n.jsx)(S.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFAv2,
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
                    return (0, n.jsx)(v.default, {
                        tag: "form",
                        className: e,
                        children: (0, n.jsx)(m.default, {
                            title: W.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                            subtitle: W.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
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
                    return (0, n.jsx)(v.default, {
                        tag: "form",
                        className: e,
                        children: (0, n.jsx)(m.default, {
                            title: W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                            subtitle: W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handlePasswordReset,
                            onCancel: E.default.loginReset
                        })
                    })
                }
                renderChooseAccount() {
                    return (0, n.jsx)(p.default, {
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
                    if (o || r) return (0, n.jsx)(z, {});
                    if (l) return this.renderHandOffAvailable();
                    if (e && r) return this.renderHandOffContinue();
                    switch (a) {
                        case w.LoginStates.LOGGING_IN_MFA_SMS:
                        case w.LoginStates.MFA_SMS_STEP:
                            return this.renderMFASMS();
                        case w.LoginStates.LOGGING_IN_MFA:
                        case w.LoginStates.MFA_STEP:
                            return this.renderMFA();
                        case w.LoginStates.MFA_WEBAUTHN_STEP:
                        case w.LoginStates.LOGGING_IN_MFA_WEBAUTHN:
                            return this.renderMFAWebAuthn();
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
                        await E.default.loginToken(e, !1), F.default.track(w.AnalyticEvents.LOGIN_SUCCESSFUL, {
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
                    }, this.handleTokenSubmit = e => {
                        let {
                            code: t
                        } = this.state, {
                            mfaTicket: s
                        } = this.props;
                        null != e && e.preventDefault(), E.default.loginMFA({
                            code: t.replace(/ /g, ""),
                            ticket: s,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleTokenSubmitMFAv2 = e => {
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
                    }, this.handleSMSTokenSubmit = e => {
                        let {
                            smsCode: t
                        } = this.state, {
                            mfaTicket: s
                        } = this.props;
                        null != e && e.preventDefault(), E.default.loginSMS({
                            code: t.replace(/ /g, ""),
                            ticket: s
                        }), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleToggleSMSLogin = e => {
                        let {
                            mfaTicket: t
                        } = this.props;
                        null != e && e.preventDefault(), E.default.requestSMSToken(t), j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleForgotPassword = async e => {
                        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                        let t = this.getFullLogin();
                        try {
                            j.ComponentDispatch.dispatch(w.ComponentActions.WAVE_EMPHASIZE), await E.default.forgotPassword(t), (0, c.openModal)(e => (0, n.jsx)(c.ConfirmModal, {
                                header: W.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: W.default.Messages.OKAY,
                                confirmButtonColor: v.Button.Colors.BRAND,
                                className: u.isMobile ? V.mobile : "",
                                ...e,
                                children: (0, n.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: W.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
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
            Z.defaultProps = {
                transitionTo: e => s.g.location.assign(e)
            };
            var q = function(e) {
                let t = (0, d.useStateFromStoresObject)([x.default, D.default, R.default, I.default, L.default], () => ({
                        authenticated: R.default.isAuthenticated(),
                        handoffAvailable: x.default.isHandoffAvailable(),
                        user: x.default.user,
                        loginStatus: R.default.getLoginStatus(),
                        mfaTicket: R.default.getMFATicket(),
                        mfaSMS: R.default.getMFASMS(),
                        mfaMethods: R.default.getMFAMethods(),
                        maskedPhone: R.default.getMaskedPhone(),
                        errors: R.default.getErrors(),
                        defaultRoute: D.default.defaultRoute,
                        country: L.default.getCountryCode(),
                        hasLoggedInAccounts: I.default.getHasLoggedInAccounts()
                    })),
                    s = A.default.useExperiment({
                        location: "webConnectedLogin"
                    }).enabled;
                return (0, n.jsx)(Z, {
                    ...e,
                    ...t,
                    hasLoginExperiment: s
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
                d = s("872717"),
                c = s("77078"),
                f = s("308289"),
                E = s("905949"),
                _ = s("605250"),
                h = s("671278"),
                m = s("124969"),
                T = s("659500"),
                g = s("274515"),
                A = s("158998"),
                S = s("49111"),
                N = s("843455"),
                I = s("782340"),
                p = s("103957"),
                C = s("926622");
            (l = n || (n = {}))[l.INITIALIZING = 0] = "INITIALIZING", l[l.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", l[l.PENDING_FINISH = 2] = "PENDING_FINISH", l[l.PENDING_TICKET = 3] = "PENDING_TICKET", l[l.PENDING_LOGIN = 4] = "PENDING_LOGIN", l[l.FINISH = 5] = "FINISH", (r = a || (a = {}))[r.QR_CODE = 0] = "QR_CODE", r[r.CONFIRM = 1] = "CONFIRM";
            let L = s("527826"),
                M = new _.default("LoginQRSocket");

            function O(e) {
                let {
                    text: t = ""
                } = e, [s, n] = i.useState(!1);
                return i.useEffect(() => {
                    let e = new Image;
                    e.src = L, e.onload = () => n(!0), e.onerror = () => n(!0)
                }, [L]), i.useEffect(() => {
                    s && c.AccessibilityAnnouncer.announce(I.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
                }, [s]), (0, o.jsx)("div", {
                    className: p.qrCodeContainer,
                    children: "" !== t && s ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(h.default, {
                            className: p.qrCode,
                            size: 160,
                            text: t
                        }), (0, o.jsx)("div", {
                            className: p.qrCodeOverlay,
                            children: (0, o.jsx)("img", {
                                src: L,
                                alt: ""
                            })
                        })]
                    }) : (0, o.jsx)("div", {
                        className: p.qrCodeOverlay,
                        "aria-label": I.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                        "aria-busy": !0,
                        children: (0, o.jsx)(c.Spinner, {
                            className: p.qrCode,
                            type: c.Spinner.Type.WANDERING_CUBES,
                            "aria-hidden": !0
                        })
                    })
                })
            }
            let R = e => {
                let {
                    className: t,
                    children: s
                } = e;
                return (0, o.jsx)(c.Text, {
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
                            children: [(0, o.jsx)(O, {
                                text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                            }), (0, o.jsx)(m.Title, {
                                className: C.marginBottom8,
                                children: I.default.Messages.LOGIN_WITH_QR
                            }), null != n ? (0, o.jsx)(R, {
                                children: n
                            }) : (0, o.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                            })]
                        });
                    case 3:
                    case 2: {
                        let {
                            user: e
                        } = t;
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(f.default, {
                                className: p.qrAvatar,
                                user: e,
                                size: c.AvatarSizes.SIZE_120,
                                isMobile: !0,
                                status: N.StatusTypes.ONLINE
                            }), (0, o.jsx)(m.Title, {
                                className: C.marginBottom8,
                                children: I.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                            }), (0, o.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_AS.format({
                                    username: "".concat(A.default.getUserTag(e))
                                })
                            }), (0, o.jsx)(c.Button, {
                                look: c.Button.Looks.BLANK,
                                color: c.Button.Colors.LINK,
                                size: c.Button.Sizes.MIN,
                                onClick: s,
                                className: p.startOverButton,
                                children: I.default.Messages.QR_CODE_LOGIN_START_OVER
                            })]
                        })
                    }
                    case 4:
                    case 5:
                        return (0, o.jsx)(c.Spinner, {
                            type: c.Spinner.Type.WANDERING_CUBES
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
                    }), [o, d] = i.useState(null), c = (0, E.default)(), f = i.useMemo(() => new u.default(1500, 3e4), []), _ = i.useRef();
                    _.current = i.useCallback(() => {
                        r({
                            step: 0
                        }), c ? s(e => e + 1) : (M.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
                    }, [c]);
                    let h = i.useCallback(() => {
                            (function(e) {
                                let {
                                    current: t
                                } = e;
                                if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                                return t
                            })(_)()
                        }, [_]),
                        m = i.useCallback(() => {
                            M.error("Could not complete QR code login, trying to restart with a new QR code."), r({
                                step: 0
                            }), !f.pending && f.fail(h)
                        }, [h, f]);
                    return i.useEffect(() => {
                        c && n && 0 === l.step && (M.info("reconnecting, now that document is visible"), a(!1), s(e => e + 1))
                    }, [l, c, n, a]), i.useEffect(() => {
                        let t = Date.now(),
                            s = () => "".concat(Date.now() - t, "ms"),
                            n = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                            a = new WebSocket(n);
                        M.info("[0ms] connecting to ".concat(n));
                        let l = e => M.info("[".concat(s(), "] ").concat(e)),
                            o = null,
                            i = null,
                            u = null,
                            c = null,
                            E = !0;

                        function _() {
                            if (null != o) return o;
                            throw Error("No key pair set")
                        }
                        let A = () => {
                            E ? (E = !1, a.send(JSON.stringify({
                                op: "heartbeat"
                            }))) : (l("heartbeat timeout, reconnecting."), a.close(), m())
                        };
                        return a.onmessage = async t => {
                            let {
                                data: s
                            } = t, n = JSON.parse(s);
                            switch (n.op) {
                                case "nonce_proof": {
                                    let e = n.encrypted_nonce,
                                        t = await (0, g.decryptNonce)(_(), e);
                                    l("computed nonce proof"), a.send(JSON.stringify({
                                        op: "nonce_proof",
                                        nonce: t
                                    }));
                                    return
                                }
                                case "pending_remote_init": {
                                    f.succeed(), T.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE);
                                    let e = await (0, g.publicKeyFingerprint)(_());
                                    if (e !== n.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(n.fingerprint));
                                    l("handshake complete awaiting remote auth."), r({
                                        step: 1,
                                        fingerprint: e
                                    });
                                    return
                                }
                                case "pending_login": {
                                    let e = n.ticket;
                                    null == e && m(), r({
                                        step: 4,
                                        ticket: e
                                    });
                                    return
                                }
                                case "pending_ticket": {
                                    T.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = n.encrypted_user_payload,
                                        t = await (0, g.decodeEncodedUserRecord)(_(), e);
                                    r({
                                        step: 3,
                                        user: t
                                    });
                                    return
                                }
                                case "pending_finish": {
                                    T.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting finish/cancel.");
                                    let e = n.encrypted_user_payload,
                                        t = await (0, g.decodeEncodedUserRecord)(_(), e);
                                    r({
                                        step: 2,
                                        user: t
                                    });
                                    return
                                }
                                case "finish": {
                                    T.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake finished.");
                                    let t = n.encrypted_token;
                                    r({
                                        step: 5
                                    });
                                    let s = await (0, g.decryptEncodedCiphertext)(_(), t);
                                    e(s);
                                    return
                                }
                                case "cancel":
                                    l("remote auth handshake cancelled."), h();
                                    return;
                                case "hello": {
                                    l("got hello, auth timeout=".concat(n.timeout_ms, "ms"));
                                    let e = n.heartbeat_interval;
                                    c = setTimeout(() => {
                                        c = null, A(), u = setInterval(A, e)
                                    }, Math.floor(e * Math.random()));
                                    return
                                }
                                case "heartbeat_ack":
                                    E = !0
                            }
                        }, a.onopen = async () => {
                            o = await (0, g.generateRsaKeyPair)(), i = await (0, g.serializePublicKey)(o);
                            let e = await (0, g.publicKeyFingerprint)(o);
                            l("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                                op: "init",
                                encoded_public_key: i
                            })), d(o)
                        }, a.onclose = e => {
                            l("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m()
                        }, a.onerror = e => {
                            l("disconnected, error: ".concat(JSON.stringify(e))), m()
                        }, () => {
                            l("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != u && clearInterval(u)
                        }
                    }, [h, e, t, f, m]), {
                        state: l,
                        rsaKeyPair: o,
                        cancel: h,
                        handleFailure: m
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
                    4 === s.step && null != s.ticket && d.default.post({
                        url: S.Endpoints.REMOTE_AUTH_LOGIN,
                        body: {
                            ticket: s.ticket
                        },
                        oldFormErrors: !0
                    }).then(async e => {
                        if (null != n) try {
                            let s = await (0, g.decryptEncodedCiphertext)(n, e.body.encrypted_token);
                            t(s)
                        } catch (e) {
                            l()
                        } else l()
                    }).catch(() => {
                        l()
                    })
                }, [s, t, n, l]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        className: p.verticalSeparator
                    }), (0, o.jsx)(c.Sequencer, {
                        fillParent: !0,
                        className: p.qrLogin,
                        step: r,
                        steps: [0, 1],
                        children: (0, o.jsx)("div", {
                            className: p.qrLoginInner,
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
                    return c
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
                d = s("926622");

            function c(e) {
                let {
                    title: t,
                    subtitle: s,
                    error: c,
                    onSubmit: f,
                    onCancel: E
                } = e;
                return (0, n.jsxs)(r.default, {
                    direction: r.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(o.Title, {
                        className: d.marginBottom8,
                        children: t
                    }), (0, n.jsx)(o.SubTitle, {
                        className: u.subTitle,
                        children: s
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(l.default, {
                            inputClassName: u.codeInput,
                            onSubmit: f
                        }), null != c ? (0, n.jsx)(a.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: c
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
                    return d
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

            function d(e) {
                let {
                    headerId: t,
                    guildTemplate: s
                } = e, d = s.code, c = u[d];
                if (null != c) {
                    var f;
                    let {
                        header: e,
                        description: u,
                        author: E
                    } = (0, l.default)(d);
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("img", {
                            className: i.image,
                            src: c,
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
                    return g
                },
                default: function() {
                    return A
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
                d = s("819220"),
                c = s("5487"),
                f = s("579033"),
                E = s("782340"),
                _ = s("426601"),
                h = s("926622");

            function m() {
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

            function T(e) {
                let {
                    verified: t,
                    text: s
                } = e;
                return t ? (0, n.jsxs)("div", {
                    className: _.verifiedNameContainer,
                    children: [(0, n.jsx)(m, {}), s]
                }) : (0, n.jsx)(n.Fragment, {
                    children: s
                })
            }

            function g(e) {
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
                        creatorHook: (e, t) => (0, n.jsx)(T, {
                            text: e,
                            verified: null != r
                        }, t)
                    }) : E.default.Messages.GUILD_TEMPLATE_USAGES.format({
                        usageCount: s
                    })
                })
            }

            function A(e) {
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
                let m = (0, c.default)(s.code).header;
                if (!o) return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsx)(i.Title, {
                        className: _.title,
                        children: m
                    }), (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, _.userText),
                        children: s.name
                    })]
                });
                return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsx)(i.Title, {
                        className: _.title,
                        children: m
                    }), (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, h.marginTop2),
                        children: E.default.Messages.GUILD_TEMPLATE_BASED_ON
                    }), (0, n.jsx)(i.Title, {
                        className: l(_.title, _.userText),
                        children: s.name
                    }), null != s.description && "" !== s.description && (0, n.jsx)(i.SubTitle, {
                        className: l(_.subtitle, _.userText, h.marginTop8),
                        children: s.description
                    }), (0, n.jsx)(g, {
                        className: u,
                        count: null !== (t = s.usageCount) && void 0 !== t ? t : 0,
                        creator: s.creator.username,
                        verifiedName: (0, d.getVerifiedName)(s.code)
                    })]
                })
            }
        },
        648498: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, s("862205").createExperiment)({
                id: "2023-08_login_mfav2",
                label: "Login MFAv2",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enabled: !1
                    }
                }, {
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
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
                    return M
                }
            }), s("222007"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("506083");
            var n, a, l = s("37983"),
                r = s("884691"),
                o = s("730290"),
                i = s("391679"),
                u = s("446674"),
                d = s("872717"),
                c = s("95410"),
                f = s("77078"),
                E = s("913144"),
                _ = s("437822"),
                h = s("229353"),
                m = s("271938"),
                T = s("599110"),
                g = s("672630"),
                A = s("49111"),
                S = s("332204");
            let N = "mweb_handoff_nonce",
                I = "mweb_handoff_nonce_expiration";
            (a = n || (n = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
            let p = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
                C = new Set(["deep_link_failed"]),
                L = () => {
                    c.default.remove(N), c.default.remove(I)
                };
            var M = () => {
                let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
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
                let [M, O] = r.useState(null), R = r.useCallback(e => {
                    O(e), T.default.track(A.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: e,
                        fingerprint: (0, i.maybeExtractId)(a)
                    }, {
                        fingerprint: a
                    })
                }, [O, a]), x = c.default.get(N);
                if ("null" === s && null === M && R("deep_link_failed"), null != s && "null" !== s && null == x && null === M && R("nonce_missing"), r.useEffect(() => {
                        if (null != x) {
                            let e = c.default.get(I);
                            (null == e || Date.now() >= e) && (R("nonce_expired"), L())
                        }
                    }, [x, R]), r.useEffect(() => {
                        null != s && "null" !== s && null != x && null == M && d.default.post({
                            url: A.Endpoints.HANDOFF_EXCHANGE,
                            body: {
                                key: x,
                                handoff_token: s
                            }
                        }).then(e => _.default.loginToken(e.body.token, !1)).then(() => {
                            T.default.track(A.AnalyticEvents.LOGIN_SUCCESSFUL, {
                                source: A.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, i.maybeExtractId)(a)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                        }).catch(() => {
                            R("handoff_exchange")
                        }).finally(() => {
                            L()
                        })
                    }, [s, x, M, a, R]), null == a) return null;
                let D = (() => {
                        if (null == M) return (0, l.jsxs)(l.Fragment, {
                            children: [h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, l.jsx)("br", {}), h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                        });
                        if (C.has(M)) return h.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                        if (p.has(M)) return h.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
                    })(),
                    U = null != M && C.has(M);
                return U ? (0, l.jsx)("div", {
                    className: S.errorContainer,
                    children: (0, l.jsx)(f.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/semibold",
                        children: D
                    })
                }) : (0, l.jsxs)("div", {
                    className: S.container,
                    children: [(0, l.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: D
                    }), (0, l.jsx)(f.Button, {
                        look: f.Button.Looks.INVERTED,
                        color: f.Button.Colors.BRAND_NEW,
                        onClick: () => {
                            let e = g.default.generateNonce();
                            c.default.set(N, e), c.default.set(I, Date.now() + 6e4);
                            let t = new URL(A.MOBILE_WEB_HANDOFF_DEEP_LINK),
                                s = new URLSearchParams(window.location.search);
                            s.delete("fingerprint"), s.delete("handoff_token");
                            let n = new URLSearchParams;
                            n.set("redirect", encodeURIComponent(window.location.pathname + s.toString())), n.set("key", e), n.set("fingerprint", a), t.search = n.toString(), T.default.track(A.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, i.maybeExtractId)(a),
                                source: "mobile_web_handoff",
                                destination: A.MOBILE_WEB_HANDOFF_DEEP_LINK
                            }, {
                                fingerprint: a,
                                flush: !0
                            }), window.location.href = t.toString()
                        },
                        children: (0, l.jsx)(f.Text, {
                            className: S.buttonText,
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
                    return c
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
                d = s("329314");

            function c(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, r.default)({
                    type: a.ImpressionTypes.MODAL,
                    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                }), (0, n.jsxs)(o.default, {
                    className: d.chooseAccountAuthBox,
                    children: [(0, n.jsx)(o.Title, {
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
                    }), (0, n.jsx)(l.Text, {
                        className: d.chooseAccountHelpText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                    }), (0, n.jsx)(i.default, {
                        actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                        onAction: e => {
                            e === i.MultiAccountActionType.LOGIN_REQUIRED && t()
                        }
                    }), (0, n.jsx)("div", {
                        className: d.actions,
                        children: (0, n.jsx)(l.Button, {
                            className: d.chooseAccountButton,
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
                    return O
                }
            }), s("506083");
            var n, a, l = s("37983"),
                r = s("884691"),
                o = s("414456"),
                i = s.n(o),
                u = s("446674"),
                d = s("77078"),
                c = s("437822"),
                f = s("272030"),
                E = s("766274"),
                _ = s("271938"),
                h = s("102985"),
                m = s("697218"),
                T = s("433487"),
                g = s("599110"),
                A = s("158998"),
                S = s("694787"),
                N = s("770032"),
                I = s("927101"),
                p = s("49111"),
                C = s("782340"),
                L = s("31295");

            function M(e) {
                let {
                    actionText: t,
                    user: s,
                    onAction: n
                } = e, {
                    currentUser: a,
                    hidePrivateData: r,
                    isAuthenticated: o
                } = (0, u.useStateFromStoresObject)([m.default, h.default, _.default], () => ({
                    currentUser: m.default.getCurrentUser(),
                    hidePrivateData: h.default.hidePersonalInformation,
                    isAuthenticated: _.default.isAuthenticated()
                })), I = new E.default(s), M = o && (null == a ? void 0 : a.id) === I.id, O = s.tokenStatus === N.MultiAccountTokenStatus.INVALID, R = r || I.isPomelo() ? null : "#".concat(I.discriminator), x = null;
                return M ? x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: L.hintText,
                    color: "text-positive",
                    children: C.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : O && (x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: L.hintText,
                    color: "text-danger",
                    children: C.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, l.jsx)("div", {
                    className: L.accountCard,
                    children: (0, l.jsxs)("div", {
                        className: L.userDetails,
                        children: [(0, l.jsx)(d.Avatar, {
                            src: I.getAvatarURL(void 0, 40),
                            size: d.AvatarSizes.SIZE_40,
                            "aria-label": s.username
                        }), (0, l.jsxs)("div", {
                            className: i(L.usernameSection, {
                                [L.hasActionMaxWidth]: !M
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: L.username,
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: L.textOverflow,
                                    children: A.default.getUserTag(I, {
                                        mode: "username",
                                        identifiable: r ? "never" : "always"
                                    })
                                }), (0, l.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: R
                                })]
                            }), x]
                        }), (0, l.jsxs)("div", {
                            className: L.userActions,
                            children: [!M && (0, l.jsx)(d.Button, {
                                onClick: function() {
                                    if (O) {
                                        n(0, s.id);
                                        return
                                    }
                                    g.default.track(p.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: p.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), S.switchAccount(s.id), n(1, s.id)
                                },
                                color: d.Button.Colors.PRIMARY,
                                children: O ? C.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, l.jsx)(d.Button, {
                                className: L.userActionMenu,
                                onClick: function(e) {
                                    (0, f.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, l.jsx)(d.Menu, {
                                            "aria-label": C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: f.closeContextMenu,
                                            onSelect: t,
                                            children: (0, l.jsx)(d.MenuItem, {
                                                id: "remove-account",
                                                label: C.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        c.default.logout(null, s.id).finally(() => {
                                                            S.removeAccount(s.id)
                                                        });
                                                        let e = {};
                                                        null != a ? e.section = p.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = p.PageAnalyticsLocations.LOGIN, g.default.track(p.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e
                                                        }), n(2, s.id)
                                                    }(), null != t && t()
                                                },
                                                color: "danger"
                                            })
                                        })
                                    })
                                },
                                size: d.Button.Sizes.ICON,
                                look: d.Button.Looks.BLANK,
                                color: d.Button.Colors.WHITE,
                                "aria-label": C.default.Messages.MORE_OPTIONS,
                                children: (0, l.jsx)(T.default, {
                                    className: L.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    actionText: t,
                    onAction: s
                } = e, {
                    isLoading: n,
                    multiAccountUsers: a
                } = (0, I.useMultiAccountUsers)();
                return (0, l.jsx)("div", {
                    className: L.list,
                    children: n ? (0, l.jsx)(d.Spinner, {}) : a.map((e, n) => (0, l.jsxs)(r.Fragment, {
                        children: [(0, l.jsx)(M, {
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
                d = s("206230"),
                c = s("878720"),
                f = s("189613"),
                E = s("393004");

            function _(e) {
                let {
                    show: t,
                    alpha2: s,
                    countryCode: l
                } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), h = a.useRef(null), [m, T] = a.useState(0), [g, A] = a.useState(!1);
                a.useEffect(() => {
                    function e() {
                        var e, s;
                        T(t && null !== (s = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, s, l]);
                let S = (0, o.useSpring)({
                        width: "".concat(m, "px"),
                        immediate: _,
                        onStart: () => {
                            A(!0)
                        },
                        onRest: () => {
                            A(!1)
                        }
                    }),
                    N = e => {
                        c.default.setCountryCode(e)
                    };
                return (0, n.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, n.jsx)(f.default, {
                        className: E.popout,
                        onClick: t => {
                            N(t), e.closePopout()
                        }
                    }),
                    children: e => (0, n.jsx)("div", {
                        className: r(E.outerContainer, {
                            [E.hidden]: !(t || g)
                        }),
                        children: (0, n.jsx)(o.animated.div, {
                            className: E.container,
                            style: S,
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
                d = s("467413"),
                c = s("713186"),
                f = s("905518");

            function E(e) {
                let {
                    alpha2: t,
                    countryCode: s,
                    forceMode: l,
                    label: E,
                    error: _,
                    className: h,
                    required: m,
                    value: T,
                    setRef: g,
                    placeholder: A,
                    autoFocus: S,
                    maxLength: N,
                    spellCheck: I,
                    autoComplete: p,
                    autoCapitalize: C,
                    autoCorrect: L,
                    onChange: M,
                    inputClassName: O
                } = e, R = (0, i.useUID)(), [x, D] = a.useState(!1), U = (0, u.shouldShowCountryCodeSelector)(l, T);
                return (0, n.jsx)(o.FormItem, {
                    title: E,
                    error: _,
                    className: h,
                    required: m,
                    tag: "label",
                    htmlFor: R,
                    children: (0, n.jsxs)("div", {
                        className: r(f.input, c.input, O, {
                            [f.error]: null != _,
                            [f.focused]: x
                        }),
                        children: [(0, n.jsx)(d.default, {
                            show: U,
                            alpha2: t,
                            countryCode: s
                        }), (0, n.jsx)(o.TextInput, {
                            id: R,
                            name: "email",
                            type: l === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: T,
                            inputRef: g,
                            placeholder: A,
                            "aria-label": E,
                            required: m,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(l, e) ? s : "";
                                M(e, t)
                            },
                            autoComplete: p,
                            autoCapitalize: C,
                            autoCorrect: L,
                            autoFocus: S,
                            maxLength: N,
                            spellCheck: I,
                            className: c.inputWrapper,
                            inputClassName: c.inputField,
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
                d = s("527826");
            class c extends r.PureComponent {
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
            c.defaultProps = {
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
                        children: [(0, l.jsx)(c, {
                            ...this.props
                        }), (0, l.jsx)("div", {
                            className: i.qrCodeOverlay,
                            children: (0, l.jsx)("img", {
                                className: i[t],
                                src: d,
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
            var E = c
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

            function f(e, t) {
                return a(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                }, e.privateKey, t)
            }
            async function E(e, t) {
                let s = new TextDecoder,
                    n = await f(e, d(t));
                return s.decode(n)
            }
            async function _(e, t) {
                let s = await f(e, d(t));
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