"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34840], {
        234840: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => le
            });
            var r = n(785893),
                s = n(667294),
                o = n(993231),
                a = n(202351),
                i = n(882723),
                l = n(744564),
                u = n(479373),
                c = n(473903),
                d = n(613677),
                f = n(873553),
                h = n(784426),
                p = n(294184),
                m = n.n(p),
                g = n(84441),
                N = n(682719),
                _ = n(144936),
                C = n(153081),
                O = n(426797),
                T = n(560837),
                S = n(78501),
                E = n(64234),
                A = n(664625),
                M = n(536038),
                R = n(558820),
                I = n(930948),
                b = n(463473),
                L = n(2590),
                v = n(473708),
                y = n(4734),
                x = n.n(y),
                j = n(518280),
                P = n.n(j);

            function D(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function B(e, t, n, r, s, o, a) {
                try {
                    var i = e[o](a),
                        l = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function w(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, s) {
                        var o = e.apply(t, n);

                        function a(e) {
                            B(o, r, s, a, i, "next", e)
                        }

                        function i(e) {
                            B(o, r, s, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Z(e) {
                Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Z(e)
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        k(e, t, n[t])
                    }))
                }
                return e
            }

            function F(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function G(e, t) {
                return !t || "object" !== H(t) && "function" != typeof t ? D(e) : t
            }

            function W(e, t) {
                W = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return W(e, t)
            }
            var H = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Z(e);
                    if (t) {
                        var s = Z(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return G(this, n)
                }
            }
            var z = function(e, t) {
                    var n, r, s, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function i(o) {
                        return function(i) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (s = 2 & o[0] ? r.return : o[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, o[1])).done) return s;
                                    (r = 0, s) && (o = [2 & o[0], s.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            s = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = a.trys, s = s.length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < s[1]) {
                                                a.label = s[1];
                                                s = o;
                                                break
                                            }
                                            if (s && a.label < s[2]) {
                                                a.label = s[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            s[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = s = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, i])
                        }
                    }
                },
                V = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && W(e, t)
                    }(o, e);
                    var t = K(o);

                    function o(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o);
                        var n, s;
                        (n = t.call(this, e)).handleAuthToken = (s = w((function(e) {
                            return z(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, g.Z.loginToken(e, !1)];
                                    case 1:
                                        t.sent();
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return s.apply(this, arguments)
                        });
                        n.handleTabOrEnter = function(e) {
                            if ("Tab" === e.key && !e.shiftKey && e.target === n.loginRef) {
                                var t;
                                null === (t = n.passwordRef) || void 0 === t || t.focus();
                                e.stopPropagation();
                                e.preventDefault()
                            }
                            if ("Enter" === e.key && (e.target === n.loginRef || e.target === n.passwordRef)) {
                                n.handleLogin();
                                e.stopPropagation();
                                e.preventDefault()
                            }
                        };
                        n.setLoginRef = function(e) {
                            n.loginRef = e
                        };
                        n.setPasswordRef = function(e) {
                            n.passwordRef = e
                        };
                        n.setCodeRef = function(e) {
                            n.codeRef = e
                        };
                        n.getFullLogin = function() {
                            var e = n.state;
                            return e.loginPrefix + e.login
                        };
                        n.renderError = function(e) {
                            var t = n.props.errors;
                            if (n.hasError(e)) {
                                var r = t[e];
                                return Array.isArray(r) ? r[0] : r
                            }
                            return null
                        };
                        var a = D(n);
                        n.handleForgotPassword = function() {
                            var e = w((function(e) {
                                var t, n;
                                return z(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            null == e || e.preventDefault();
                                            null === (t = a.loginRef) || void 0 === t || t.focus();
                                            n = a.getFullLogin();
                                            s.label = 1;
                                        case 1:
                                            s.trys.push([1, 3, , 4]);
                                            I.S.dispatch(L.CkL.WAVE_EMPHASIZE);
                                            return [4, g.Z.forgotPassword(n)];
                                        case 2:
                                            s.sent();
                                            (0, i.openModal)((function(e) {
                                                return (0, r.jsx)(i.ConfirmModal, F(U({
                                                    header: v.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                                    confirmText: v.Z.Messages.OKAY,
                                                    confirmButtonColor: i.Button.Colors.BRAND
                                                }, e), {
                                                    children: (0, r.jsx)(i.Text, {
                                                        variant: "text-md/normal",
                                                        children: v.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                                            email: n
                                                        })
                                                    })
                                                }))
                                            }));
                                            return [3, 4];
                                        case 3:
                                            s.sent();
                                            return [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                        n.handleLogin = function(e) {
                            var t = n.state,
                                r = t.password,
                                s = t.undelete;
                            null != e && e.preventDefault();
                            g.Z.login({
                                login: n.getFullLogin(),
                                password: r,
                                undelete: s,
                                isMultiAccount: !0
                            })
                        };
                        var l = D(n);
                        n.handlePasswordReset = function() {
                            var e = w((function(e) {
                                var t, n;
                                return z(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            l.setState({
                                                phoneVerifyError: null
                                            });
                                            r.label = 1;
                                        case 1:
                                            r.trys.push([1, 3, , 4]);
                                            return [4, O.Z.verifyPhone(l.getFullLogin(), e, !1, !0)];
                                        case 2:
                                            t = r.sent().token;
                                            l.setState({
                                                resetPasswordPhoneToken: t
                                            });
                                            return [3, 4];
                                        case 3:
                                            null != (n = r.sent()).body && null != n.body.message && l.setState({
                                                phoneVerifyError: n.body.message
                                            });
                                            return [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                        n.handleTokenSubmit = function(e) {
                            var t = n.state.code,
                                r = n.props.mfaTicket;
                            null != e && e.preventDefault();
                            g.Z.loginMFA({
                                code: t.replace(/ /g, ""),
                                ticket: r
                            })
                        };
                        n.handleSMSTokenSubmit = function(e) {
                            var t = n.state.smsCode,
                                r = n.props.mfaTicket;
                            null != e && e.preventDefault();
                            g.Z.loginSMS({
                                code: t.replace(/ /g, ""),
                                ticket: r
                            })
                        };
                        n.handleToggleSMSLogin = function(e) {
                            var t = n.props.mfaTicket;
                            null != e && e.preventDefault();
                            g.Z.requestSMSToken(t)
                        };
                        n.handleResendCode = function() {
                            O.Z.resendCode(n.getFullLogin())
                        };
                        n.handleReset = function(e) {
                            null != e && e.preventDefault();
                            g.Z.loginReset(!0);
                            n.setState({
                                password: "",
                                loginPrefix: "",
                                login: "",
                                code: "",
                                smsCode: "",
                                undelete: !1,
                                resetPasswordPhoneToken: null
                            })
                        };
                        n.handleCancelAccountDeletion = function() {
                            n.setState({
                                undelete: !0
                            }, n.handleLogin)
                        };
                        n.state = {
                            loginPrefix: "",
                            login: "",
                            password: "",
                            code: "",
                            smsCode: "",
                            phoneVerifyError: null,
                            resetPasswordPhoneToken: null,
                            undelete: !1
                        };
                        return n
                    }
                    var a = o.prototype;
                    a.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleTabOrEnter)
                    };
                    a.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.authenticated,
                            r = t.transitionTo;
                        n && !e.authenticated && r(L.Z5c.APP);
                        if (e.errors !== this.props.errors)
                            if (this.hasError("password")) {
                                var s;
                                null === (s = this.passwordRef) || void 0 === s || s.focus()
                            } else if (this.hasError("email") || this.hasError("login")) {
                            var o;
                            null === (o = this.loginRef) || void 0 === o || o.focus()
                        } else if (this.hasError("code")) {
                            var a;
                            null === (a = this.codeRef) || void 0 === a || a.focus()
                        }
                    };
                    a.componentWillUnmount = function() {
                        window.removeEventListener("keydown", this.handleTabOrEnter)
                    };
                    a.hasError = function(e) {
                        return null != this.props.errors[e]
                    };
                    a.renderDefaultForm = function() {
                        var e, t = this,
                            n = this.props.country,
                            o = !this.hasError("email") && this.hasError("password"),
                            a = (0, r.jsxs)(s.Fragment, {
                                children: [(0, r.jsx)(R.Dx, {
                                    className: m()(P().marginBottom8, x().title),
                                    children: v.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                                }, "title"), (0, r.jsx)(i.Text, {
                                    color: "header-secondary",
                                    variant: "text-md/normal",
                                    className: x().subtitle,
                                    children: v.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                                })]
                            });
                        return (0, r.jsxs)("div", {
                            className: x().mainLoginContainer,
                            children: [a, (0, r.jsxs)(R.gO, {
                                className: x().loginForm,
                                children: [(0, r.jsx)(S.Z, {
                                    alpha2: n.alpha2,
                                    countryCode: n.code.split(" ")[0],
                                    className: P().marginBottom20,
                                    label: v.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                    error: null !== (e = this.renderError("login")) && void 0 !== e ? e : this.renderError("email"),
                                    onChange: function(e, n) {
                                        return t.setState({
                                            login: e,
                                            loginPrefix: n
                                        })
                                    },
                                    setRef: this.setLoginRef,
                                    autoCapitalize: "none",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    spellCheck: "false",
                                    value: this.state.login,
                                    autoFocus: !o,
                                    required: !0
                                }), (0, r.jsx)(R.II, {
                                    label: v.Z.Messages.FORM_LABEL_PASSWORD,
                                    error: this.renderError("password"),
                                    onChange: function(e) {
                                        return t.setState({
                                            password: e
                                        })
                                    },
                                    name: "password",
                                    type: "password",
                                    setRef: this.setPasswordRef,
                                    autoComplete: "off",
                                    spellCheck: "false",
                                    autoFocus: o,
                                    value: this.state.password,
                                    required: !0
                                }), (0, r.jsx)(R.zx, {
                                    onClick: this.handleForgotPassword,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    className: m()(P().marginTop4),
                                    children: v.Z.Messages.FORGOT_PASSWORD
                                })]
                            })]
                        })
                    };
                    a.renderDefault = function() {
                        var e = this.props,
                            t = e.authBoxClassName,
                            n = e.loginStatus,
                            s = e.closeLogin,
                            o = e.theme;
                        return (0, r.jsxs)("div", {
                            className: x().pageContainer,
                            children: [(0, r.jsx)(R.ZP, {
                                tag: "form",
                                className: t,
                                expanded: !0,
                                theme: o,
                                children: this.renderDefaultForm()
                            }), (0, r.jsxs)("div", {
                                className: m()((0, b.Q)(o), x().navRow),
                                children: [(0, r.jsx)(i.Button, {
                                    type: "button",
                                    look: i.Button.Looks.LINK,
                                    "aria-label": "back",
                                    onClick: s,
                                    size: i.Button.Sizes.SMALL,
                                    className: m()((0, b.Q)(o), x().backButton),
                                    children: v.Z.Messages.BACK
                                }), (0, r.jsx)(i.Button, {
                                    "aria-label": "continue",
                                    submitting: n === L.u34.LOGGING_IN,
                                    color: i.Button.Colors.BRAND,
                                    onClick: this.handleLogin,
                                    className: x().continueButton,
                                    children: v.Z.Messages.CONTINUE
                                })]
                            })]
                        })
                    };
                    a.renderMFA = function() {
                        var e, t = this,
                            s = this.props,
                            o = s.loginStatus,
                            a = s.mfaSMS,
                            l = s.authBoxClassName,
                            u = s.theme;
                        return (0, r.jsxs)(R.ZP, {
                            onSubmit: this.handleTokenSubmit,
                            tag: "form",
                            className: l,
                            theme: u,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: n(148267),
                                className: P().marginBottom20
                            }), (0, r.jsx)(R.Dx, {
                                className: P().marginBottom8,
                                children: v.Z.Messages.TWO_FA
                            }), (0, r.jsx)(R.DK, {
                                children: v.Z.Messages.TWO_FA_ENTER_TOKEN_BODY
                            }), (0, r.jsxs)(R.gO, {
                                className: P().marginTop40,
                                children: [(0, r.jsx)(R.II, {
                                    className: P().marginBottom20,
                                    error: this.renderError("code"),
                                    setRef: this.setCodeRef,
                                    onChange: function(e) {
                                        return t.setState({
                                            code: e
                                        })
                                    },
                                    autoComplete: "off",
                                    placeholder: v.Z.Messages.TWO_FA_AUTH_CODE,
                                    spellCheck: "false",
                                    maxLength: 10,
                                    autoFocus: !0,
                                    label: v.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL,
                                    value: this.state.code,
                                    required: !0
                                }, "totpCode"), (0, r.jsx)(i.Button, {
                                    type: "submit",
                                    submitting: o === L.u34.LOGGING_IN_MFA,
                                    fullWidth: !0,
                                    children: v.Z.Messages._LOGIN
                                }), a ? (0, r.jsx)(i.Button, {
                                    onClick: this.handleToggleSMSLogin,
                                    submitting: o === L.u34.LOGGING_IN_MFA_SMS,
                                    className: m()(x().paddingResetLeft, P().marginTop8),
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    size: i.Button.Sizes.TINY,
                                    children: v.Z.Messages.MFA_SMS_RECEIVE_CODE
                                }) : null, (0, r.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    className: m()(x().paddingResetLeft, (e = {}, k(e, P().marginReset, a), k(e, P().marginTop8, !a), e)),
                                    onClick: this.handleReset,
                                    size: i.Button.Sizes.TINY,
                                    children: v.Z.Messages._TWO_FA_LOGIN_FOOTER
                                })]
                            })]
                        })
                    };
                    a.renderMFAWebAuthn = function() {
                        return (0, r.jsx)(N._i, {
                            loginStatus: L.u34.MFA_STEP,
                            handleReset: this.handleReset,
                            authBoxClassName: void 0
                        })
                    };
                    a.renderDisabledAccount = function() {
                        var e = this.props,
                            t = e.authBoxClassName,
                            n = e.theme,
                            s = this.props.loginStatus === L.u34.ACCOUNT_DISABLED,
                            o = s ? v.Z.Messages.ACCOUNT_DISABLED_TITLE : v.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
                            a = s ? v.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : v.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                        return (0, r.jsxs)(R.ZP, {
                            tag: "form",
                            onSubmit: this.handleReset,
                            className: t,
                            theme: n,
                            children: [(0, r.jsx)(R.Dx, {
                                className: P().marginBottom8,
                                children: o
                            }), (0, r.jsx)(R.DK, {
                                className: P().marginBottom20,
                                children: a
                            }), (0, r.jsxs)(R.gO, {
                                children: [(0, r.jsx)(i.Button, {
                                    color: i.Button.Colors.BRAND,
                                    type: "submit",
                                    fullWidth: !0,
                                    children: v.Z.Messages._RETURN_TO_LOGIN
                                }), (0, r.jsx)("div", {
                                    className: m()(P().marginTop8, x().needAccount),
                                    children: v.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                        onClick: this.handleCancelAccountDeletion
                                    })
                                })]
                            })]
                        })
                    };
                    a.renderResetPhonePassword = function() {
                        var e = this.state.resetPasswordPhoneToken;
                        return (0, r.jsx)(_.Z, U({
                            resetToken: e,
                            onLoginSuccess: function(e) {
                                g.Z.switchAccountToken(e)
                            }
                        }, this.props))
                    };
                    a.renderPhonePasswordRecovery = function() {
                        var e = this.props.authBoxClassName,
                            t = this.state.phoneVerifyError;
                        return (0, r.jsx)(R.ZP, {
                            tag: "form",
                            className: e,
                            children: (0, r.jsx)("div", {
                                className: P().marginTop20,
                                children: (0, r.jsx)(C.Z, {
                                    title: v.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                                    subtitle: v.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                        onResendClick: this.handleResendCode
                                    }),
                                    error: t,
                                    onSubmit: this.handlePasswordReset,
                                    onCancel: void 0
                                })
                            })
                        })
                    };
                    a.renderMFASMS = function() {
                        var e, t = this,
                            s = this.props,
                            o = s.loginStatus,
                            a = s.maskedPhone,
                            l = s.authBoxClassName,
                            u = s.theme,
                            c = o === L.u34.LOGGING_IN_MFA_SMS || "" === a;
                        return (0, r.jsxs)(R.ZP, {
                            onSubmit: this.handleSMSTokenSubmit,
                            tag: "form",
                            className: l,
                            theme: u,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: n(148267),
                                className: P().marginBottom20
                            }), (0, r.jsx)(R.Dx, {
                                className: P().marginBottom8,
                                children: v.Z.Messages.TWO_FA
                            }), (0, r.jsx)(R.DK, {
                                className: P().marginBottom8,
                                children: c ? v.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : v.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                                    phoneNumber: a
                                })
                            }), (0, r.jsxs)(R.gO, {
                                className: P().marginTop40,
                                children: [(0, r.jsx)(R.II, {
                                    className: P().marginBottom20,
                                    error: this.renderError("code"),
                                    setRef: this.setCodeRef,
                                    onChange: function(e) {
                                        return t.setState({
                                            smsCode: e
                                        })
                                    },
                                    autoComplete: "off",
                                    placeholder: v.Z.Messages.TWO_FA_AUTH_CODE,
                                    spellCheck: "false",
                                    maxLength: 10,
                                    autoFocus: !0,
                                    label: v.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_LABEL,
                                    value: this.state.smsCode,
                                    required: !0
                                }, "smsCode"), (0, r.jsx)(i.Button, {
                                    type: "submit",
                                    submitting: c,
                                    fullWidth: !0,
                                    color: c ? i.Button.Colors.TRANSPARENT : i.Button.Colors.BRAND,
                                    children: v.Z.Messages._LOGIN
                                }), c ? null : (0, r.jsx)(i.Button, {
                                    onClick: this.handleToggleSMSLogin,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    size: i.Button.Sizes.TINY,
                                    className: m()(x().paddingResetLeft, P().marginTop8),
                                    children: v.Z.Messages.MFA_SMS_RESEND
                                }), (0, r.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    onClick: this.handleReset,
                                    size: i.Button.Sizes.TINY,
                                    className: m()(x().paddingResetLeft, (e = {}, k(e, P().marginReset, !c), k(e, P().marginTop8, c), e)),
                                    children: v.Z.Messages._TWO_FA_LOGIN_FOOTER
                                })]
                            })]
                        })
                    };
                    a.render = function() {
                        var e = this.props.loginStatus;
                        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
                        switch (e) {
                            case L.u34.LOGGING_IN_MFA_SMS:
                            case L.u34.MFA_SMS_STEP:
                                return this.renderMFASMS();
                            case L.u34.LOGGING_IN_MFA:
                            case L.u34.MFA_STEP:
                                return this.renderMFA();
                            case L.u34.MFA_WEBAUTHN_STEP:
                                return this.renderMFAWebAuthn();
                            case L.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
                            case L.u34.ACCOUNT_DISABLED:
                                return this.renderDisabledAccount();
                            case L.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                                return this.renderPhonePasswordRecovery();
                            case L.u34.LOGGING_IN:
                            case L.u34.NONE:
                            default:
                                return this.renderDefault()
                        }
                    };
                    return o
                }(s.PureComponent);
            V.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                },
                replaceWith: function(e) {
                    return n.g.location.replace(e)
                }
            };
            const Y = function(e) {
                var t = (0, a.cj)([M.Z, A.default, T.Z, E.Z], (function() {
                    return {
                        authenticated: A.default.isAuthenticated(),
                        loginStatus: A.default.getLoginStatus(),
                        mfaTicket: A.default.getMFATicket(),
                        mfaSMS: A.default.getMFASMS(),
                        maskedPhone: A.default.getMaskedPhone(),
                        errors: A.default.getErrors(),
                        defaultRoute: M.Z.defaultRoute,
                        country: T.Z.getCountryCode(),
                        theme: E.Z.theme
                    }
                }));
                return (0, r.jsx)(V, U({}, e, t))
            };
            var q = n(690770),
                Q = n.n(q);
            const $ = function(e) {
                var t = e.onClose;
                return (0, r.jsx)(Y, {
                    transitionTo: function(e) {
                        (0, h.uL)(e)
                    },
                    replaceWith: function(e) {
                        (0, h.dL)(e)
                    },
                    authBoxClassName: Q().card,
                    closeLogin: t
                })
            };
            var X, J, ee = n(349979),
                te = n(169067),
                ne = n(698064),
                re = n.n(ne);

            function se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function oe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, o = [],
                            a = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            s = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return se(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return se(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e[e.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS";
                e[e.LOGIN = 1] = "LOGIN"
            }(X || (X = {}));
            var ie = (oe(J = {}, X.MANAGE_ACCOUNTS, i.ModalSize.SMALL), oe(J, X.LOGIN, i.ModalSize.DYNAMIC), J);

            function le(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    h = ae(s.useState(X.MANAGE_ACCOUNTS), 2),
                    p = h[0],
                    m = h[1],
                    g = (0, a.cj)([c.default, f.Z], (function() {
                        return {
                            currentUser: c.default.getCurrentUser(),
                            multiAccountUsers: f.Z.getUsers()
                        }
                    })),
                    N = g.currentUser,
                    _ = g.multiAccountUsers,
                    C = ae(s.useState(!1), 2),
                    O = C[0],
                    T = C[1],
                    S = ae(s.useState(""), 2),
                    E = S[0],
                    A = S[1],
                    M = ae(s.useState(null), 2),
                    R = M[0],
                    I = M[1];
                s.useEffect((function() {
                    if (O) {
                        I((0, r.jsx)(d.Z, {
                            messageType: d.Q.ERROR,
                            className: re().infoMessage,
                            children: v.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                                maxNumAccounts: te.$H
                            })
                        }));
                        A("")
                    } else if (null != E) {
                        var e = c.default.getUser(E);
                        null != e && I((0, r.jsx)(d.Z, {
                            messageType: d.Q.POSITIVE,
                            className: re().infoMessage,
                            children: v.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        }));
                        T(!1)
                    }
                }), [E, O]);
                s.useEffect((function() {
                    _.length < te.$H && T(!1)
                }), [_]);
                (0, u.Z)({
                    type: o.nv.MODAL,
                    name: p === X.MANAGE_ACCOUNTS ? o.zs.MULTI_ACCOUNT_SWITCH_LANDING : o.zs.USER_LOGIN
                });
                var b = null;
                p === X.MANAGE_ACCOUNTS ? b = (0, r.jsxs)(r.Fragment, {
                    children: [(0,
                        r.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: re().header,
                            children: [(0, r.jsx)(i.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: v.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, r.jsx)(i.Text, {
                                className: re().subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: v.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [R, (0, r.jsx)(ee.Z, {
                            actionText: v.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: function(e, t) {
                                switch (e) {
                                    case ee.W.LOGIN_REQUIRED:
                                        m(X.LOGIN);
                                        break;
                                    case ee.W.SWITCHED:
                                        n();
                                        break;
                                    case ee.W.REMOVED:
                                        t === (null == N ? void 0 : N.id) && n();
                                        A(t)
                                }
                            }
                        }), (0, r.jsx)("div", {
                            className: re().actions,
                            children: (0, r.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: function() {
                                    _.length >= te.$H ? T(!0) : m(X.LOGIN)
                                },
                                size: i.Button.Sizes.MEDIUM,
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: v.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : p === X.LOGIN && (b = (0, r.jsx)($, {
                    onClose: function() {
                        l.Z.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        });
                        m(X.MANAGE_ACCOUNTS)
                    }
                }));
                return (0, r.jsx)(i.ModalRoot, {
                    className: re().modal,
                    transitionState: t,
                    size: ie[p],
                    "aria-label": v.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, r.jsxs)(i.Sequencer, {
                        step: p,
                        steps: [X.MANAGE_ACCOUNTS, X.LOGIN],
                        children: [(0, r.jsx)(i.ModalCloseButton, {
                            onClick: n,
                            className: re().modalCloseButton
                        }), b]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=e7dbda959c90b9e577e7.js.map