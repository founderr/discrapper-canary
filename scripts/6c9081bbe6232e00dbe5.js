(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80683"], {
        479287: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("781738");
            var a = s("37983"),
                o = s("884691"),
                r = s("414456"),
                n = s.n(r),
                l = s("446674"),
                i = s("77078"),
                d = s("437822"),
                u = s("152434"),
                h = s("21572"),
                c = s("24287"),
                f = s("878720"),
                C = s("25033"),
                g = s("589252"),
                T = s("161778"),
                m = s("271938"),
                A = s("476108"),
                N = s("124969"),
                p = s("659500"),
                E = s("439932"),
                S = s("49111"),
                _ = s("782340"),
                M = s("698995"),
                O = s("926622");
            class R extends o.PureComponent {
                componentDidMount() {
                    window.addEventListener("keydown", this.handleTabOrEnter)
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        transitionTo: s
                    } = this.props;
                    if (t && !e.authenticated && s(S.Routes.APP), e.errors !== this.props.errors) {
                        var a, o, r;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (o = this.loginRef) || void 0 === o || o.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
                    }
                }
                componentWillUnmount() {
                    window.removeEventListener("keydown", this.handleTabOrEnter)
                }
                hasError(e) {
                    return null != this.props.errors[e]
                }
                renderDefaultForm() {
                    var e;
                    let {
                        country: t
                    } = this.props, s = !this.hasError("email") && this.hasError("password"), r = (0, a.jsxs)(o.Fragment, {
                        children: [(0, a.jsx)(N.Title, {
                            className: n(O.marginBottom8, M.title),
                            children: _.default.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                        }, "title"), (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: M.subtitle,
                            children: _.default.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                        })]
                    });
                    return (0, a.jsxs)("div", {
                        className: M.mainLoginContainer,
                        children: [r, (0, a.jsxs)(N.Block, {
                            className: M.loginForm,
                            children: [(0, a.jsx)(g.default, {
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                className: O.marginBottom20,
                                label: _.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                error: null !== (e = this.renderError("login")) && void 0 !== e ? e : this.renderError("email"),
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
                                autoFocus: !s,
                                required: !0
                            }), (0, a.jsx)(N.Input, {
                                label: _.default.Messages.FORM_LABEL_PASSWORD,
                                error: this.renderError("password"),
                                onChange: e => this.setState({
                                    password: e
                                }),
                                name: "password",
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoFocus: s,
                                value: this.state.password,
                                required: !0
                            }), (0, a.jsx)(N.Button, {
                                onClick: this.handleForgotPassword,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                className: n(O.marginTop4),
                                children: _.default.Messages.FORGOT_PASSWORD
                            })]
                        })]
                    })
                }
                renderDefault() {
                    let {
                        authBoxClassName: e,
                        loginStatus: t,
                        closeLogin: s,
                        theme: o
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: M.pageContainer,
                        children: [(0, a.jsx)(N.default, {
                            tag: "form",
                            className: e,
                            expanded: !0,
                            theme: o,
                            children: this.renderDefaultForm()
                        }), (0, a.jsxs)("div", {
                            "data-theme": o,
                            className: n((0, E.getThemeClass)(o), M.navRow),
                            children: [(0, a.jsx)(i.Button, {
                                type: "button",
                                look: i.Button.Looks.LINK,
                                "aria-label": "back",
                                onClick: s,
                                size: i.Button.Sizes.SMALL,
                                className: n((0, E.getThemeClass)(o), M.backButton),
                                children: _.default.Messages.BACK
                            }), (0, a.jsx)(i.Button, {
                                "aria-label": "continue",
                                submitting: t === S.LoginStates.LOGGING_IN,
                                color: i.Button.Colors.BRAND,
                                onClick: this.handleLogin,
                                className: M.continueButton,
                                children: _.default.Messages.CONTINUE
                            })]
                        })]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, a.jsx)(N.default, {
                        style: {
                            padding: 0
                        },
                        theme: this.props.theme,
                        children: (0, a.jsx)(c.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFA,
                            request: e,
                            onEarlyClose: () => {
                                this.handleReset()
                            },
                            width: 480
                        })
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e,
                        theme: t
                    } = this.props, s = this.props.loginStatus === S.LoginStates.ACCOUNT_DISABLED, o = s ? _.default.Messages.ACCOUNT_DISABLED_TITLE : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, r = s ? _.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, a.jsxs)(N.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        theme: t,
                        children: [(0, a.jsx)(N.Title, {
                            className: O.marginBottom8,
                            children: o
                        }), (0, a.jsx)(N.SubTitle, {
                            className: O.marginBottom20,
                            children: r
                        }), (0, a.jsxs)(N.Block, {
                            children: [(0, a.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                type: "submit",
                                fullWidth: !0,
                                children: _.default.Messages._RETURN_TO_LOGIN
                            }), (0, a.jsx)("div", {
                                className: n(O.marginTop8, M.needAccount),
                                children: _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                    onClick: this.handleCancelAccountDeletion
                                })
                            })]
                        })]
                    })
                }
                renderResetPhonePassword() {
                    let {
                        resetPasswordPhoneToken: e
                    } = this.state;
                    return (0, a.jsx)(u.default, {
                        resetToken: e,
                        onLoginSuccess: e => {
                            d.default.switchAccountToken(e)
                        },
                        ...this.props
                    })
                }
                renderPhonePasswordRecovery() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, a.jsx)(N.default, {
                        tag: "form",
                        className: e,
                        children: (0, a.jsx)("div", {
                            className: O.marginTop20,
                            children: (0, a.jsx)(h.default, {
                                title: _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                                subtitle: _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                    onResendClick: this.handleResendCode
                                }),
                                error: t,
                                onSubmit: this.handlePasswordReset,
                                onCancel: void 0
                            })
                        })
                    })
                }
                render() {
                    let {
                        loginStatus: e
                    } = this.props;
                    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
                    switch (e) {
                        case S.LoginStates.LOGGING_IN_MFA_SMS:
                        case S.LoginStates.MFA_SMS_STEP:
                        case S.LoginStates.LOGGING_IN_MFA:
                        case S.LoginStates.MFA_STEP:
                        case S.LoginStates.MFA_WEBAUTHN_STEP:
                            return this.renderMFA();
                        case S.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case S.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case S.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPhonePasswordRecovery();
                        case S.LoginStates.LOGGING_IN:
                        case S.LoginStates.NONE:
                        default:
                            return this.renderDefault()
                    }
                }
                constructor(e) {
                    super(e), this.handleAuthToken = async e => {
                        await d.default.loginToken(e, !1)
                    }, this.handleTabOrEnter = e => {
                        if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
                            var t;
                            null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault()
                        }
                        "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
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
                    }, this.handleForgotPassword = async e => {
                        var t;
                        null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                        let s = this.getFullLogin();
                        try {
                            p.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), await d.default.forgotPassword(s), (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
                                header: _.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: _.default.Messages.OKAY,
                                confirmButtonColor: i.Button.Colors.BRAND,
                                ...e,
                                children: (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                        email: s
                                    })
                                })
                            }))
                        } catch {}
                    }, this.handleLogin = e => {
                        let {
                            password: t,
                            undelete: s
                        } = this.state;
                        null != e && e.preventDefault(), d.default.login({
                            login: this.getFullLogin(),
                            password: t,
                            undelete: s,
                            isMultiAccount: !0
                        })
                    }, this.handlePasswordReset = async e => {
                        this.setState({
                            phoneVerifyError: null
                        });
                        try {
                            let {
                                token: t
                            } = await f.default.verifyPhone(this.getFullLogin(), e, !1, !0);
                            this.setState({
                                resetPasswordPhoneToken: t
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
                            ticket: a
                        } = e;
                        return d.default.loginMFAv2({
                            code: s,
                            ticket: a,
                            mfaType: t,
                            isMultiAccount: !0
                        })
                    }, this.handleResendCode = () => {
                        f.default.resendCode(this.getFullLogin())
                    }, this.handleReset = e => {
                        null != e && e.preventDefault(), d.default.loginReset(!0), this.setState({
                            password: "",
                            loginPrefix: "",
                            login: "",
                            code: "",
                            smsCode: "",
                            undelete: !1,
                            resetPasswordPhoneToken: null
                        })
                    }, this.handleCancelAccountDeletion = () => {
                        this.setState({
                            undelete: !0
                        }, this.handleLogin)
                    }, this.state = {
                        loginPrefix: "",
                        login: "",
                        password: "",
                        code: "",
                        smsCode: "",
                        phoneVerifyError: null,
                        resetPasswordPhoneToken: null,
                        undelete: !1
                    }
                }
            }
            R.defaultProps = {
                transitionTo: e => s.g.location.assign(e),
                replaceWith: e => s.g.location.replace(e)
            };
            var L = function(e) {
                let t = (0, l.useStateFromStoresObject)([A.default, m.default, C.default, T.default], () => ({
                    authenticated: m.default.isAuthenticated(),
                    loginStatus: m.default.getLoginStatus(),
                    mfaTicket: m.default.getMFATicket(),
                    mfaSMS: m.default.getMFASMS(),
                    maskedPhone: m.default.getMaskedPhone(),
                    mfaMethods: m.default.getMFAMethods(),
                    errors: m.default.getErrors(),
                    defaultRoute: A.default.defaultRoute,
                    country: C.default.getCountryCode(),
                    theme: T.default.theme
                }));
                return (0, a.jsx)(R, {
                    ...e,
                    ...t
                })
            }
        },
        350218: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("37983");
            s("884691");
            var o = s("393414"),
                r = s("479287"),
                n = s("545358"),
                l = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, a.jsx)(r.default, {
                        transitionTo: e => {
                            (0, o.transitionTo)(e)
                        },
                        replaceWith: e => {
                            (0, o.replaceWith)(e)
                        },
                        authBoxClassName: n.card,
                        closeLogin: t
                    })
                }
        },
        685807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a, o, r = s("37983"),
                n = s("884691"),
                l = s("759843"),
                i = s("446674"),
                d = s("77078"),
                u = s("913144"),
                h = s("428958"),
                c = s("697218"),
                f = s("555158"),
                C = s("770032"),
                g = s("350218"),
                T = s("851460"),
                m = s("583374"),
                A = s("782340"),
                N = s("635937");
            (o = a || (a = {}))[o.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", o[o.LOGIN = 1] = "LOGIN";
            let p = {
                0: d.ModalSize.SMALL,
                1: d.ModalSize.DYNAMIC
            };

            function E(e) {
                let {
                    transitionState: t,
                    onClose: s
                } = e, [a, o] = n.useState(0), {
                    currentUser: E,
                    multiAccountUsers: S
                } = (0, i.useStateFromStoresObject)([c.default, C.default], () => ({
                    currentUser: c.default.getCurrentUser(),
                    multiAccountUsers: C.default.getUsers()
                })), [_, M] = n.useState(!1), [O, R] = n.useState(""), [L, I] = n.useState(null);
                n.useEffect(() => {
                    if (_) I((0, r.jsx)(f.default, {
                        messageType: f.HelpMessageTypes.ERROR,
                        className: N.infoMessage,
                        children: A.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                            maxNumAccounts: m.MAX_ACCOUNTS
                        })
                    })), R("");
                    else if (null != O) {
                        let e = c.default.getUser(O);
                        null != e && I((0, r.jsx)(f.default, {
                            messageType: f.HelpMessageTypes.POSITIVE,
                            className: N.infoMessage,
                            children: A.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        })), M(!1)
                    }
                }, [O, _]), n.useEffect(() => {
                    S.length < m.MAX_ACCOUNTS && M(!1)
                }, [S]), (0, h.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: 0 === a ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
                });
                let x = null;
                return 0 === a ? x = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: N.header,
                            children: [(0, r.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: A.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, r.jsx)(d.Text, {
                                className: N.subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: A.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, r.jsxs)(d.ModalContent, {
                        children: [L, (0, r.jsx)(T.default, {
                            actionText: A.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: (e, t) => {
                                switch (e) {
                                    case T.MultiAccountActionType.LOGIN_REQUIRED:
                                        o(1);
                                        break;
                                    case T.MultiAccountActionType.SWITCHED:
                                        s();
                                        break;
                                    case T.MultiAccountActionType.REMOVED:
                                        t === (null == E ? void 0 : E.id) && s(), R(t)
                                }
                            }
                        }), (0, r.jsx)("div", {
                            className: N.actions,
                            children: (0, r.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    if (S.length >= m.MAX_ACCOUNTS) {
                                        M(!0);
                                        return
                                    }
                                    o(1)
                                },
                                size: d.Button.Sizes.MEDIUM,
                                children: (0, r.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    children: A.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : 1 === a && (x = (0, r.jsx)(g.default, {
                    onClose: () => {
                        u.default.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        }), o(0)
                    }
                })), (0, r.jsx)(d.ModalRoot, {
                    className: N.modal,
                    transitionState: t,
                    size: p[a],
                    "aria-label": A.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, r.jsx)(d.Sequencer, {
                        step: a,
                        steps: [0, 1],
                        children: x
                    })
                })
            }
        }
    }
]);