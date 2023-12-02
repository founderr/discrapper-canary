(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18638"], {
        245288: function(e, t, s) {
            "use strict";
            e.exports = s.p + "41d28dc5d2c29dc4b122.svg"
        },
        314837: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c54752c825291a698843.svg"
        },
        152434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("781738");
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                i = s("730290"),
                o = s("394846"),
                u = s("446674"),
                c = s("913144"),
                d = s("437822"),
                h = s("457108"),
                f = s("724038"),
                p = s("24287"),
                m = s("970366"),
                C = s("271938"),
                S = s("124969"),
                A = s("659500"),
                x = s("49111"),
                N = s("782340"),
                T = s("926622");
            u.default.initialize();
            class g extends r.PureComponent {
                componentDidMount() {
                    (0, m.trackAppUIViewed)("reset_password")
                }
                renderPasswordReset() {
                    let {
                        password: e,
                        error: t,
                        hasCancel: r
                    } = this.state, a = this.isSubmitting(), l = null != t ? t : this.renderError("password");
                    return (0, n.jsxs)(S.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            src: null == l ? s("245288") : s("314837"),
                            className: T.marginBottom20
                        }), (0, n.jsx)(S.Title, {
                            children: N.default.Messages.RESET_PASSWORD_TITLE
                        }), (0, n.jsxs)(S.Block, {
                            className: T.marginTop20,
                            children: [(0, n.jsx)(S.Input, {
                                label: N.default.Messages.FORM_LABEL_NEW_PASSWORD,
                                className: T.marginBottom20,
                                name: "password",
                                value: e,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                error: l,
                                type: "password"
                            }), (0, n.jsx)(S.Button, {
                                type: "submit",
                                submitting: a,
                                children: N.default.Messages.CHANGE_PASSWORD
                            }), r ? (0, n.jsx)(S.Button, {
                                className: T.marginTop8,
                                onClick: this.handleGoToLogin,
                                submitting: a,
                                color: S.Button.Colors.PRIMARY,
                                children: N.default.Messages.CANCEL
                            }) : null]
                        })]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, n.jsx)(S.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, n.jsx)(p.MFASlides, {
                            mfaFinish: e => {
                                let {
                                    mfaType: t,
                                    data: s
                                } = e;
                                return this.handleTokenSubmitMFAv2(t, s)
                            },
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
                renderSucceeded() {
                    return (0, n.jsxs)(S.default, {
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            src: s("245288"),
                            className: l(T.marginBottom20, o.isMobile ? T.marginTop20 : "")
                        }), (0, n.jsx)(S.Title, {
                            className: T.marginBottom40,
                            children: N.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                        }), (0, n.jsx)(S.Button, {
                            onClick: this.handleOpenApp,
                            children: N.default.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    })
                }
                render() {
                    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
                }
                constructor(e) {
                    var t;
                    super(e), this.handleSubmit = async e => {
                        let {
                            location: t,
                            onLoginSuccess: s,
                            source: n,
                            resetToken: r
                        } = this.props, {
                            password: a,
                            error: l
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === a.length) {
                            this.setState({
                                error: N.default.Messages.PASSWORD_REQUIRED
                            }), A.ComponentDispatch.dispatch(x.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != l && this.setState({
                            error: null
                        });
                        let i = r;
                        if (null != t && (i = (0, h.default)(t)), null != i) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let {
                                    result: e,
                                    sms: t,
                                    webauthn: r,
                                    ticket: l,
                                    token: o,
                                    totp: u,
                                    backup: h
                                } = await d.default.resetPassword(i, a, n);
                                e === d.PasswordResetResult.MFA ? c.default.dispatch({
                                    type: "LOGIN_MFA_STEP",
                                    ticket: l,
                                    sms: t,
                                    webauthn: r,
                                    totp: u,
                                    backup: h
                                }) : null != s ? s(o) : (c.default.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: o
                                }), this.handlePasswordChangeSuccess())
                            } catch (e) {}
                            this.setState({
                                working: !1
                            })
                        }
                    }, this.handleTokenSubmitMFAv2 = (e, t) => {
                        let {
                            location: s,
                            mfaTicket: n,
                            onLoginSuccess: r,
                            resetToken: a,
                            source: l
                        } = this.props, {
                            password: i
                        } = this.state;
                        if (0 === i.length) return c.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject();
                        let o = a;
                        return (null != s && (o = (0, h.default)(s)), null == o) ? (c.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject()) : d.default.resetPasswordMFAv2({
                            method: e,
                            code: t,
                            ticket: n,
                            password: i,
                            token: o,
                            source: l
                        }).then(e => {
                            null != r ? r(e) : (c.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), this.handlePasswordChangeSuccess())
                        })
                    }, this.handlePasswordChangeSuccess = () => {
                        let {
                            replaceWith: e
                        } = this.props;
                        if (o.isTablet || o.isMobile) {
                            this.setState({
                                success: !0
                            });
                            return
                        }
                        e(x.Routes.APP)
                    }, this.handleGoToLogin = () => {
                        let {
                            transitionTo: e
                        } = this.props;
                        d.default.loginReset(), e(x.Routes.LOGIN)
                    }, this.isSubmitting = () => {
                        let {
                            loginStatus: e
                        } = this.props, {
                            working: t
                        } = this.state;
                        return t || e === x.LoginStates.LOGGING_IN_MFA
                    }, this.handleOpenApp = () => {
                        (0, f.default)("password_reset")
                    }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let s = t[e];
                            return Array.isArray(s) ? s[0] : s
                        }
                        return null
                    };
                    let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, i.parse)(this.props.location.search) : null;
                    this.state = {
                        method: "",
                        password: "",
                        code: "",
                        error: null,
                        hasCancel: null != s && null != s.from_login,
                        working: !1,
                        success: !1
                    }
                }
            }
            g.defaultProps = {
                transitionTo: e => s.g.location.assign(e),
                replaceWith: e => s.g.location.replace(e)
            };
            var E = function(e) {
                let t = (0, u.useStateFromStoresObject)([C.default], () => ({
                    loginStatus: C.default.getLoginStatus(),
                    mfaTicket: C.default.getMFATicket(),
                    errors: C.default.getErrors(),
                    mfaMethods: C.default.getMFAMethods()
                }));
                return (0, n.jsx)(g, {
                    ...e,
                    ...t
                })
            }
        },
        457108: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("730290");

            function r(e) {
                let t = null != e.hash && "" !== e.hash ? (0, n.parse)(e.hash) : null;
                if ((null == t ? void 0 : t.token) != null) return t.token;
                let s = null != e.search && "" !== e.search ? (0, n.parse)(e.search) : null;
                return (null == s ? void 0 : s.token) != null ? s.token : null
            }
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
            var r = s("77078"),
                a = s("794538"),
                l = s("145131"),
                i = s("124969"),
                o = s("782340"),
                u = s("265445"),
                c = s("926622");

            function d(e) {
                let {
                    title: t,
                    subtitle: s,
                    error: d,
                    onSubmit: h,
                    onCancel: f
                } = e;
                return (0, n.jsxs)(l.default, {
                    direction: l.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(i.Title, {
                        className: c.marginBottom8,
                        children: t
                    }), (0, n.jsx)(i.SubTitle, {
                        className: u.subTitle,
                        children: s
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(a.default, {
                            inputClassName: u.codeInput,
                            onSubmit: h
                        }), null != d ? (0, n.jsx)(r.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: d
                        }) : null]
                    }), null != f && (0, n.jsx)(r.Button, {
                        className: u.button,
                        onClick: f,
                        color: r.Button.Colors.PRIMARY,
                        children: o.default.Messages.CANCEL
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
                    return _
                }
            }), s("506083");
            var n, r, a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                o = s.n(i),
                u = s("446674"),
                c = s("77078"),
                d = s("437822"),
                h = s("272030"),
                f = s("766274"),
                p = s("271938"),
                m = s("102985"),
                C = s("697218"),
                S = s("433487"),
                A = s("599110"),
                x = s("158998"),
                N = s("694787"),
                T = s("770032"),
                g = s("927101"),
                E = s("49111"),
                M = s("782340"),
                v = s("31295");

            function I(e) {
                let {
                    actionText: t,
                    user: s,
                    onAction: n
                } = e, {
                    currentUser: r,
                    hidePrivateData: l,
                    isAuthenticated: i
                } = (0, u.useStateFromStoresObject)([C.default, m.default, p.default], () => ({
                    currentUser: C.default.getCurrentUser(),
                    hidePrivateData: m.default.hidePersonalInformation,
                    isAuthenticated: p.default.isAuthenticated()
                })), g = new f.default(s), I = i && (null == r ? void 0 : r.id) === g.id, _ = s.tokenStatus === T.MultiAccountTokenStatus.INVALID, j = l || g.isPomelo() ? null : "#".concat(g.discriminator), O = null;
                return I ? O = (0, a.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    className: v.hintText,
                    color: "text-positive",
                    children: M.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : _ && (O = (0, a.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    className: v.hintText,
                    color: "text-danger",
                    children: M.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, a.jsx)("div", {
                    className: v.accountCard,
                    children: (0, a.jsxs)("div", {
                        className: v.userDetails,
                        children: [(0, a.jsx)(c.Avatar, {
                            src: g.getAvatarURL(void 0, 40),
                            size: c.AvatarSizes.SIZE_40,
                            "aria-label": s.username
                        }), (0, a.jsxs)("div", {
                            className: o(v.usernameSection, {
                                [v.hasActionMaxWidth]: !I
                            }),
                            children: [(0, a.jsxs)("div", {
                                className: v.username,
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: v.textOverflow,
                                    children: x.default.getUserTag(g, {
                                        mode: "username",
                                        identifiable: l ? "never" : "always"
                                    })
                                }), (0, a.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: j
                                })]
                            }), O]
                        }), (0, a.jsxs)("div", {
                            className: v.userActions,
                            children: [!I && (0, a.jsx)(c.Button, {
                                onClick: function() {
                                    if (_) {
                                        n(0, s.id);
                                        return
                                    }
                                    A.default.track(E.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: E.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), N.switchAccount(s.id), n(1, s.id)
                                },
                                color: c.Button.Colors.PRIMARY,
                                children: _ ? M.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, a.jsx)(c.Button, {
                                className: v.userActionMenu,
                                onClick: function(e) {
                                    (0, h.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, a.jsx)(c.Menu, {
                                            "aria-label": M.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: h.closeContextMenu,
                                            onSelect: t,
                                            children: (0, a.jsx)(c.MenuItem, {
                                                id: "remove-account",
                                                label: M.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        d.default.logout(null, s.id).finally(() => {
                                                            N.removeAccount(s.id)
                                                        });
                                                        let e = {};
                                                        null != r ? e.section = E.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = E.PageAnalyticsLocations.LOGIN, A.default.track(E.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": M.default.Messages.MORE_OPTIONS,
                                children: (0, a.jsx)(S.default, {
                                    className: v.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function _(e) {
                let {
                    actionText: t,
                    onAction: s
                } = e, {
                    isLoading: n,
                    multiAccountUsers: r
                } = (0, g.useMultiAccountUsers)();
                return (0, a.jsx)("div", {
                    className: v.list,
                    children: n ? (0, a.jsx)(c.Spinner, {}) : r.map((e, n) => (0, a.jsxs)(l.Fragment, {
                        children: [(0, a.jsx)(I, {
                            user: e,
                            actionText: t,
                            onAction: s
                        }, e.id), r.length - 1 !== n && (0, a.jsx)("div", {
                            role: "separator",
                            className: v.separator
                        })]
                    }, e.id))
                })
            }(r = n || (n = {}))[r.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", r[r.SWITCHED = 1] = "SWITCHED", r[r.REMOVED = 2] = "REMOVED"
        },
        345327: function(e, t, s) {
            "use strict";
            var n, r;
            s.r(t), s.d(t, {
                PhoneOrEmailSelectorForceMode: function() {
                    return n
                },
                shouldShowCountryCodeSelector: function() {
                    return i
                }
            }), (r = n || (n = {})).PHONE = "phone", r.EMAIL = "email";
            let a = /^[-() \d]+$/,
                l = e => e.startsWith("+");

            function i(e, t) {
                return "phone" === e ? !l(t) : "email" !== e && !(t.length < 3) && a.test(t)
            }
        },
        467413: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007");
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                i = s("301165"),
                o = s("446674"),
                u = s("77078"),
                c = s("206230"),
                d = s("878720"),
                h = s("189613"),
                f = s("393004");

            function p(e) {
                let {
                    show: t,
                    alpha2: s,
                    countryCode: a
                } = e, p = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), m = r.useRef(null), [C, S] = r.useState(0), [A, x] = r.useState(!1);
                r.useEffect(() => {
                    function e() {
                        var e, s;
                        S(t && null !== (s = null === (e = m.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, s, a]);
                let N = (0, i.useSpring)({
                        width: "".concat(C, "px"),
                        immediate: p,
                        onStart: () => {
                            x(!0)
                        },
                        onRest: () => {
                            x(!1)
                        }
                    }),
                    T = e => {
                        d.default.setCountryCode(e)
                    };
                return (0, n.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, n.jsx)(h.default, {
                        className: f.popout,
                        onClick: t => {
                            T(t), e.closePopout()
                        }
                    }),
                    children: e => (0, n.jsx)("div", {
                        className: l(f.outerContainer, {
                            [f.hidden]: !(t || A)
                        }),
                        children: (0, n.jsx)(i.animated.div, {
                            className: f.container,
                            style: N,
                            children: (0, n.jsxs)("div", {
                                className: f.innerContainer,
                                ref: m,
                                children: [(0, n.jsxs)(u.Clickable, {
                                    ...e,
                                    className: f.countryCode,
                                    children: [s, " ", a]
                                }), (0, n.jsx)("div", {
                                    className: f.separator
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
                    return f
                }
            }), s("222007");
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                i = s("77078"),
                o = s("476765"),
                u = s("345327"),
                c = s("467413"),
                d = s("713186"),
                h = s("905518");

            function f(e) {
                let {
                    alpha2: t,
                    countryCode: s,
                    forceMode: a,
                    label: f,
                    error: p,
                    className: m,
                    required: C,
                    value: S,
                    setRef: A,
                    placeholder: x,
                    autoFocus: N,
                    maxLength: T,
                    spellCheck: g,
                    autoComplete: E,
                    autoCapitalize: M,
                    autoCorrect: v,
                    onChange: I,
                    inputClassName: _
                } = e, j = (0, o.useUID)(), [O, R] = r.useState(!1), k = (0, u.shouldShowCountryCodeSelector)(a, S);
                return (0, n.jsx)(i.FormItem, {
                    title: f,
                    error: p,
                    className: m,
                    required: C,
                    tag: "label",
                    htmlFor: j,
                    children: (0, n.jsxs)("div", {
                        className: l(h.input, d.input, _, {
                            [h.error]: null != p,
                            [h.focused]: O
                        }),
                        children: [(0, n.jsx)(c.default, {
                            show: k,
                            alpha2: t,
                            countryCode: s
                        }), (0, n.jsx)(i.TextInput, {
                            id: j,
                            name: "email",
                            type: a === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: S,
                            inputRef: A,
                            placeholder: x,
                            "aria-label": f,
                            required: C,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(a, e) ? s : "";
                                I(e, t)
                            },
                            autoComplete: E,
                            autoCapitalize: M,
                            autoCorrect: v,
                            autoFocus: N,
                            maxLength: T,
                            spellCheck: g,
                            className: d.inputWrapper,
                            inputClassName: d.inputField,
                            onFocus: () => R(!0),
                            onBlur: () => R(!1)
                        })]
                    })
                })
            }
        }
    }
]);