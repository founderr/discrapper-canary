"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34840], {
        234840: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ce
            });
            var r = n(785893),
                s = n(667294),
                o = n(571657),
                a = n(202351),
                i = n(70418),
                l = n(744564),
                u = n(479373),
                c = n(171053),
                d = n(473903),
                f = n(613677),
                h = n(873553),
                p = n(784426),
                m = n(294184),
                g = n.n(m),
                N = n(84441),
                C = n(682719),
                _ = n(144936),
                T = n(153081),
                O = n(154209),
                S = n(426797),
                A = n(560837),
                E = n(78501),
                M = n(64234),
                v = n(664625),
                b = n(536038),
                L = n(558820),
                R = n(930948),
                I = n(463473),
                y = n(2590),
                x = n(473708),
                j = n(780219),
                P = n.n(j),
                D = n(380203),
                k = n.n(D);

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t, n, r, s, o, a) {
                try {
                    var i = e[o](a),
                        l = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function Z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, s) {
                        var o = e.apply(t, n);

                        function a(e) {
                            w(o, r, s, a, i, "next", e)
                        }

                        function i(e) {
                            w(o, r, s, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function F(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        F(e, t, n[t])
                    }))
                }
                return e
            }

            function W(e, t) {
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

            function H(e, t) {
                return !t || "object" !== z(t) && "function" != typeof t ? B(e) : t
            }

            function K(e, t) {
                K = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return K(e, t)
            }
            var z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e) {
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
                    var n, r = U(e);
                    if (t) {
                        var s = U(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return H(this, n)
                }
            }
            var Y = function(e, t) {
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
                q = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && K(e, t)
                    }(o, e);
                    var t = V(o);

                    function o(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o);
                        var n, s;
                        (n = t.call(this, e)).handleAuthToken = (s = Z((function(e) {
                            return Y(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, N.Z.loginToken(e, !1)];
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
                        var a = B(n);
                        n.handleForgotPassword = function() {
                            var e = Z((function(e) {
                                var t, n;
                                return Y(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            null == e || e.preventDefault();
                                            null === (t = a.loginRef) || void 0 === t || t.focus();
                                            n = a.getFullLogin();
                                            s.label = 1;
                                        case 1:
                                            s.trys.push([1, 3, , 4]);
                                            R.S.dispatch(y.CkL.WAVE_EMPHASIZE);
                                            return [4, N.Z.forgotPassword(n)];
                                        case 2:
                                            s.sent();
                                            (0, i.openModal)((function(e) {
                                                return (0, r.jsx)(i.ConfirmModal, W(G({
                                                    header: x.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                                    confirmText: x.Z.Messages.OKAY,
                                                    confirmButtonColor: i.Button.Colors.BRAND
                                                }, e), {
                                                    children: (0, r.jsx)(i.Text, {
                                                        variant: "text-md/normal",
                                                        children: x.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
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
                            N.Z.login({
                                login: n.getFullLogin(),
                                password: r,
                                undelete: s,
                                isMultiAccount: !0
                            })
                        };
                        var l = B(n);
                        n.handlePasswordReset = function() {
                            var e = Z((function(e) {
                                var t, n;
                                return Y(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            l.setState({
                                                phoneVerifyError: null
                                            });
                                            r.label = 1;
                                        case 1:
                                            r.trys.push([1, 3, , 4]);
                                            return [4, S.Z.verifyPhone(l.getFullLogin(), e, !1, !0)];
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
                            N.Z.loginMFA({
                                code: t.replace(/ /g, ""),
                                ticket: r
                            })
                        };
                        n.handleTokenSubmitMFAv2 = function(e) {
                            var t = e.mfaType,
                                n = e.data,
                                r = e.ticket;
                            return N.Z.loginMFAv2({
                                code: n,
                                ticket: r,
                                mfaType: t,
                                isMultiAccount: !0
                            })
                        };
                        n.handleSMSTokenSubmit = function(e) {
                            var t = n.state.smsCode,
                                r = n.props.mfaTicket;
                            null != e && e.preventDefault();
                            N.Z.loginSMS({
                                code: t.replace(/ /g, ""),
                                ticket: r
                            })
                        };
                        n.handleToggleSMSLogin = function(e) {
                            var t = n.props.mfaTicket;
                            null != e && e.preventDefault();
                            N.Z.requestSMSToken(t)
                        };
                        n.handleResendCode = function() {
                            S.Z.resendCode(n.getFullLogin())
                        };
                        n.handleReset = function(e) {
                            null != e && e.preventDefault();
                            N.Z.loginReset(!0);
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
                        n && !e.authenticated && r(y.Z5c.APP);
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
                                children: [(0, r.jsx)(L.Dx, {
                                    className: g()(k().marginBottom8, P().title),
                                    children: x.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                                }, "title"), (0, r.jsx)(i.Text, {
                                    color: "header-secondary",
                                    variant: "text-md/normal",
                                    className: P().subtitle,
                                    children: x.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                                })]
                            });
                        return (0, r.jsxs)("div", {
                            className: P().mainLoginContainer,
                            children: [a, (0, r.jsxs)(L.gO, {
                                className: P().loginForm,
                                children: [(0, r.jsx)(E.Z, {
                                    alpha2: n.alpha2,
                                    countryCode: n.code.split(" ")[0],
                                    className: k().marginBottom20,
                                    label: x.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                                }), (0, r.jsx)(L.II, {
                                    label: x.Z.Messages.FORM_LABEL_PASSWORD,
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
                                }), (0, r.jsx)(L.zx, {
                                    onClick: this.handleForgotPassword,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    className: g()(k().marginTop4),
                                    children: x.Z.Messages.FORGOT_PASSWORD
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
                            className: P().pageContainer,
                            children: [(0,
                                r.jsx)(L.ZP, {
                                tag: "form",
                                className: t,
                                expanded: !0,
                                theme: o,
                                children: this.renderDefaultForm()
                            }), (0, r.jsxs)("div", {
                                className: g()((0, I.Q)(o), P().navRow),
                                children: [(0, r.jsx)(i.Button, {
                                    type: "button",
                                    look: i.Button.Looks.LINK,
                                    "aria-label": "back",
                                    onClick: s,
                                    size: i.Button.Sizes.SMALL,
                                    className: g()((0, I.Q)(o), P().backButton),
                                    children: x.Z.Messages.BACK
                                }), (0, r.jsx)(i.Button, {
                                    "aria-label": "continue",
                                    submitting: n === y.u34.LOGGING_IN,
                                    color: i.Button.Colors.BRAND,
                                    onClick: this.handleLogin,
                                    className: P().continueButton,
                                    children: x.Z.Messages.CONTINUE
                                })]
                            })]
                        })
                    };
                    a.renderMFAv2 = function() {
                        var e = this,
                            t = {
                                ticket: this.props.mfaTicket,
                                methods: this.props.mfaMethods
                            };
                        return (0, r.jsx)(L.ZP, {
                            style: {
                                padding: 0
                            },
                            theme: this.props.theme,
                            children: (0, r.jsx)(O.Cd, {
                                mfaFinish: this.handleTokenSubmitMFAv2,
                                request: t,
                                onEarlyClose: function() {
                                    e.handleReset()
                                },
                                width: 480
                            })
                        })
                    };
                    a.renderMFA = function() {
                        var e = this;
                        if (this.props.hasLoginExperiment) return this.renderMFAv2();
                        var t, s = this.props,
                            o = s.loginStatus,
                            a = s.mfaSMS,
                            l = s.authBoxClassName,
                            u = s.theme;
                        return (0, r.jsxs)(L.ZP, {
                            onSubmit: this.handleTokenSubmit,
                            tag: "form",
                            className: l,
                            theme: u,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: n(148267),
                                className: k().marginBottom20
                            }), (0, r.jsx)(L.Dx, {
                                className: k().marginBottom8,
                                children: x.Z.Messages.TWO_FA
                            }), (0, r.jsx)(L.DK, {
                                children: x.Z.Messages.TWO_FA_ENTER_TOKEN_BODY
                            }), (0, r.jsxs)(L.gO, {
                                className: k().marginTop40,
                                children: [(0, r.jsx)(L.II, {
                                    className: k().marginBottom20,
                                    error: this.renderError("code"),
                                    setRef: this.setCodeRef,
                                    onChange: function(t) {
                                        return e.setState({
                                            code: t
                                        })
                                    },
                                    autoComplete: "off",
                                    placeholder: x.Z.Messages.TWO_FA_AUTH_CODE,
                                    spellCheck: "false",
                                    maxLength: 10,
                                    autoFocus: !0,
                                    label: x.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL,
                                    value: this.state.code,
                                    required: !0
                                }, "totpCode"), (0, r.jsx)(i.Button, {
                                    type: "submit",
                                    submitting: o === y.u34.LOGGING_IN_MFA,
                                    fullWidth: !0,
                                    children: x.Z.Messages._LOGIN
                                }), a ? (0, r.jsx)(i.Button, {
                                    onClick: this.handleToggleSMSLogin,
                                    submitting: o === y.u34.LOGGING_IN_MFA_SMS,
                                    className: g()(P().paddingResetLeft, k().marginTop8),
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    size: i.Button.Sizes.TINY,
                                    children: x.Z.Messages.MFA_SMS_RECEIVE_CODE
                                }) : null, (0, r.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    className: g()(P().paddingResetLeft, (t = {}, F(t, k().marginReset, a), F(t, k().marginTop8, !a), t)),
                                    onClick: this.handleReset,
                                    size: i.Button.Sizes.TINY,
                                    children: x.Z.Messages._TWO_FA_LOGIN_FOOTER
                                })]
                            })]
                        })
                    };
                    a.renderMFAWebAuthn = function() {
                        return this.props.hasLoginExperiment ? this.renderMFAv2() : (0, r.jsx)(C._i, {
                            loginStatus: y.u34.MFA_STEP,
                            handleReset: this.handleReset,
                            authBoxClassName: void 0
                        })
                    };
                    a.renderDisabledAccount = function() {
                        var e = this.props,
                            t = e.authBoxClassName,
                            n = e.theme,
                            s = this.props.loginStatus === y.u34.ACCOUNT_DISABLED,
                            o = s ? x.Z.Messages.ACCOUNT_DISABLED_TITLE : x.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
                            a = s ? x.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : x.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                        return (0, r.jsxs)(L.ZP, {
                            tag: "form",
                            onSubmit: this.handleReset,
                            className: t,
                            theme: n,
                            children: [(0, r.jsx)(L.Dx, {
                                className: k().marginBottom8,
                                children: o
                            }), (0, r.jsx)(L.DK, {
                                className: k().marginBottom20,
                                children: a
                            }), (0, r.jsxs)(L.gO, {
                                children: [(0, r.jsx)(i.Button, {
                                    color: i.Button.Colors.BRAND,
                                    type: "submit",
                                    fullWidth: !0,
                                    children: x.Z.Messages._RETURN_TO_LOGIN
                                }), (0, r.jsx)("div", {
                                    className: g()(k().marginTop8, P().needAccount),
                                    children: x.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                        onClick: this.handleCancelAccountDeletion
                                    })
                                })]
                            })]
                        })
                    };
                    a.renderResetPhonePassword = function() {
                        var e = this.state.resetPasswordPhoneToken;
                        return (0, r.jsx)(_.Z, G({
                            resetToken: e,
                            onLoginSuccess: function(e) {
                                N.Z.switchAccountToken(e)
                            }
                        }, this.props))
                    };
                    a.renderPhonePasswordRecovery = function() {
                        var e = this.props.authBoxClassName,
                            t = this.state.phoneVerifyError;
                        return (0, r.jsx)(L.ZP, {
                            tag: "form",
                            className: e,
                            children: (0, r.jsx)("div", {
                                className: k().marginTop20,
                                children: (0, r.jsx)(T.Z, {
                                    title: x.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                                    subtitle: x.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
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
                        var e = this;
                        if (this.props.hasLoginExperiment) return this.renderMFAv2();
                        var t, s = this.props,
                            o = s.loginStatus,
                            a = s.maskedPhone,
                            l = s.authBoxClassName,
                            u = s.theme,
                            c = o === y.u34.LOGGING_IN_MFA_SMS || "" === a;
                        return (0, r.jsxs)(L.ZP, {
                            onSubmit: this.handleSMSTokenSubmit,
                            tag: "form",
                            className: l,
                            theme: u,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: n(148267),
                                className: k().marginBottom20
                            }), (0, r.jsx)(L.Dx, {
                                className: k().marginBottom8,
                                children: x.Z.Messages.TWO_FA
                            }), (0, r.jsx)(L.DK, {
                                className: k().marginBottom8,
                                children: c ? x.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : x.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                                    phoneNumber: a
                                })
                            }), (0, r.jsxs)(L.gO, {
                                className: k().marginTop40,
                                children: [(0, r.jsx)(L.II, {
                                    className: k().marginBottom20,
                                    error: this.renderError("code"),
                                    setRef: this.setCodeRef,
                                    onChange: function(t) {
                                        return e.setState({
                                            smsCode: t
                                        })
                                    },
                                    autoComplete: "off",
                                    placeholder: x.Z.Messages.TWO_FA_AUTH_CODE,
                                    spellCheck: "false",
                                    maxLength: 10,
                                    autoFocus: !0,
                                    label: x.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_LABEL,
                                    value: this.state.smsCode,
                                    required: !0
                                }, "smsCode"), (0, r.jsx)(i.Button, {
                                    type: "submit",
                                    submitting: c,
                                    fullWidth: !0,
                                    color: c ? i.Button.Colors.TRANSPARENT : i.Button.Colors.BRAND,
                                    children: x.Z.Messages._LOGIN
                                }), c ? null : (0, r.jsx)(i.Button, {
                                    onClick: this.handleToggleSMSLogin,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    size: i.Button.Sizes.TINY,
                                    className: g()(P().paddingResetLeft, k().marginTop8),
                                    children: x.Z.Messages.MFA_SMS_RESEND
                                }), (0, r.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.LINK,
                                    onClick: this.handleReset,
                                    size: i.Button.Sizes.TINY,
                                    className: g()(P().paddingResetLeft, (t = {}, F(t, k().marginReset, !c), F(t, k().marginTop8, c), t)),
                                    children: x.Z.Messages._TWO_FA_LOGIN_FOOTER
                                })]
                            })]
                        })
                    };
                    a.render = function() {
                        var e = this.props.loginStatus;
                        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
                        switch (e) {
                            case y.u34.LOGGING_IN_MFA_SMS:
                            case y.u34.MFA_SMS_STEP:
                                return this.renderMFASMS();
                            case y.u34.LOGGING_IN_MFA:
                            case y.u34.MFA_STEP:
                                return this.renderMFA();
                            case y.u34.MFA_WEBAUTHN_STEP:
                                return this.renderMFAWebAuthn();
                            case y.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
                            case y.u34.ACCOUNT_DISABLED:
                                return this.renderDisabledAccount();
                            case y.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                                return this.renderPhonePasswordRecovery();
                            case y.u34.LOGGING_IN:
                            case y.u34.NONE:
                            default:
                                return this.renderDefault()
                        }
                    };
                    return o
                }(s.PureComponent);
            q.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                },
                replaceWith: function(e) {
                    return n.g.location.replace(e)
                }
            };
            const Q = function(e) {
                var t = (0, a.cj)([b.Z, v.default, A.Z, M.Z], (function() {
                        return {
                            authenticated: v.default.isAuthenticated(),
                            loginStatus: v.default.getLoginStatus(),
                            mfaTicket: v.default.getMFATicket(),
                            mfaSMS: v.default.getMFASMS(),
                            maskedPhone: v.default.getMaskedPhone(),
                            mfaMethods: v.default.getMFAMethods(),
                            errors: v.default.getErrors(),
                            defaultRoute: b.Z.defaultRoute,
                            country: A.Z.getCountryCode(),
                            theme: M.Z.theme
                        }
                    })),
                    n = c.Z.useExperiment({
                        location: "multiAccount"
                    }).enabled;
                return (0, r.jsx)(q, W(G({}, e, t), {
                    hasLoginExperiment: n
                }))
            };
            var $ = n(132903),
                X = n.n($);
            const J = function(e) {
                var t = e.onClose;
                return (0, r.jsx)(Q, {
                    transitionTo: function(e) {
                        (0, p.uL)(e)
                    },
                    replaceWith: function(e) {
                        (0, p.dL)(e)
                    },
                    authBoxClassName: X().card,
                    closeLogin: t
                })
            };
            var ee, te, ne = n(349979),
                re = n(169067),
                se = n(525526),
                oe = n.n(se);

            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ie(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function le(e, t) {
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
                    if ("string" == typeof e) return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e[e.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS";
                e[e.LOGIN = 1] = "LOGIN"
            }(ee || (ee = {}));
            var ue = (ie(te = {}, ee.MANAGE_ACCOUNTS, i.ModalSize.SMALL), ie(te, ee.LOGIN, i.ModalSize.DYNAMIC), te);

            function ce(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    p = le(s.useState(ee.MANAGE_ACCOUNTS), 2),
                    m = p[0],
                    g = p[1],
                    N = (0, a.cj)([d.default, h.Z], (function() {
                        return {
                            currentUser: d.default.getCurrentUser(),
                            multiAccountUsers: h.Z.getUsers()
                        }
                    })),
                    C = N.currentUser,
                    _ = N.multiAccountUsers,
                    T = le(s.useState(!1), 2),
                    O = T[0],
                    S = T[1],
                    A = le(s.useState(""), 2),
                    E = A[0],
                    M = A[1],
                    v = le(s.useState(null), 2),
                    b = v[0],
                    L = v[1];
                s.useEffect((function() {
                    if (O) {
                        L((0, r.jsx)(f.Z, {
                            messageType: f.Q.ERROR,
                            className: oe().infoMessage,
                            children: x.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                                maxNumAccounts: re.$H
                            })
                        }));
                        M("")
                    } else if (null != E) {
                        var e = d.default.getUser(E);
                        null != e && L((0, r.jsx)(f.Z, {
                            messageType: f.Q.POSITIVE,
                            className: oe().infoMessage,
                            children: x.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        }));
                        S(!1)
                    }
                }), [E, O]);
                s.useEffect((function() {
                    _.length < re.$H && S(!1)
                }), [_]);
                (0, u.Z)({
                    type: o.nv.MODAL,
                    name: m === ee.MANAGE_ACCOUNTS ? o.zs.MULTI_ACCOUNT_SWITCH_LANDING : o.zs.USER_LOGIN
                });
                var R = null;
                m === ee.MANAGE_ACCOUNTS ? R = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: oe().header,
                            children: [(0, r.jsx)(i.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: x.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, r.jsx)(i.Text, {
                                className: oe().subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: x.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [b, (0, r.jsx)(ne.Z, {
                            actionText: x.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: function(e, t) {
                                switch (e) {
                                    case ne.W.LOGIN_REQUIRED:
                                        g(ee.LOGIN);
                                        break;
                                    case ne.W.SWITCHED:
                                        n();
                                        break;
                                    case ne.W.REMOVED:
                                        t === (null == C ? void 0 : C.id) && n();
                                        M(t)
                                }
                            }
                        }), (0, r.jsx)("div", {
                            className: oe().actions,
                            children: (0, r.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: function() {
                                    _.length >= re.$H ? S(!0) : g(ee.LOGIN)
                                },
                                size: i.Button.Sizes.MEDIUM,
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: x.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : m === ee.LOGIN && (R = (0, r.jsx)(J, {
                    onClose: function() {
                        l.Z.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        });
                        g(ee.MANAGE_ACCOUNTS)
                    }
                }));
                var I = !c.Z.useExperiment({
                    location: "accountSwitcherModal"
                }).enabled;
                return (0, r.jsx)(i.ModalRoot, {
                    className: oe().modal,
                    transitionState: t,
                    size: ue[m],
                    "aria-label": x.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, r.jsxs)(i.Sequencer, {
                        step: m,
                        steps: [ee.MANAGE_ACCOUNTS, ee.LOGIN],
                        children: [I && (0, r.jsx)(i.ModalCloseButton, {
                            onClick: n,
                            className: oe().modalCloseButton
                        }), R]
                    })
                })
            }
        }
    }
]);