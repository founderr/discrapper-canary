"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84441], {
        84441: (t, e, n) => {
            n.d(e, {
                c: () => N,
                Z: () => m
            });
            var o = n(993231),
                r = n(541554),
                i = n(281110),
                c = n(630631),
                u = n(744564),
                s = n(347365),
                a = n(527005),
                l = n(296602),
                d = n(339432),
                p = n(784426),
                f = n(664625),
                h = n(31914),
                E = n(120415),
                _ = n(391438),
                y = n(494889),
                S = n(2590),
                O = n(473708);

            function A(t, e, n, o, r, i, c) {
                try {
                    var u = t[i](c),
                        s = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(o, r)
            }

            function v(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(o, r) {
                        var i = t.apply(e, n);

                        function c(t) {
                            A(i, o, r, c, u, "next", t)
                        }

                        function u(t) {
                            A(i, o, r, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function I(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    o.forEach((function(e) {
                        I(t, e, n[e])
                    }))
                }
                return t
            }
            var R, N, T = function(t, e) {
                    var n, o, r, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                    (o = 0, r) && (i = [2 & i[0], r.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            r = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            o = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = c.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < r[1]) {
                                                c.label = r[1];
                                                r = i;
                                                break
                                            }
                                            if (r && c.label < r[2]) {
                                                c.label = r[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            r[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, c)
                                } catch (t) {
                                    i = [6, t];
                                    o = 0
                                } finally {
                                    n = r = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                L = new l.Z("AuthenticationActionCreators"),
                Z = null;
            ! function(t) {
                t.MFA = "MFA";
                t.SUCCESS = "SUCCESS"
            }(N || (N = {}));

            function k(t) {
                return null == t ? O.Z.Messages.NETWORK_ERROR_REST_REQUEST : null != t.message ? t.message : null != t.code && Array.isArray(t.code) ? t.code[0] : O.Z.Messages.NETWORK_ERROR_REST_REQUEST
            }

            function g(t) {
                var e = b({
                    type: "LOGOUT"
                }, t);
                u.Z.dispatch(e).catch((function(t) {
                    var e;
                    L.error("Error while dispatching LOGOUT", t);
                    null === (e = window.DiscordErrors) || void 0 === e || e.softCrash(t);
                    throw t
                }))
            }

            function C() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
                g();
                var e = (0, d.PP)();
                if (null != t)
                    if (null != e) {
                        y.Z.popAll();
                        e.navigate("auth")
                    } else(0, p.uL)(t)
            }
            const m = {
                startSession: function(t) {
                    u.Z.wait((function() {
                        u.Z.dispatch({
                            type: "START_SESSION",
                            token: t
                        })
                    }))
                },
                setLoginCredentials: function(t, e) {
                    u.Z.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: t,
                        password: e
                    })
                },
                login: function(t) {
                    var e, n = t.login,
                        r = t.password,
                        i = t.loginCode,
                        c = t.undelete,
                        a = t.source,
                        l = t.giftCodeSKUId,
                        d = t.invite,
                        p = t.isMultiAccount,
                        f = this;
                    u.Z.dispatch({
                        type: "LOGIN",
                        login: n,
                        loginMethod: null != i && "" !== i ? S.nnr.LOGIN_CODE : S.nnr.PASSWORD
                    });
                    this.setLoginCredentials(n, null !== (e = null != r ? r : i) && void 0 !== e ? e : void 0);
                    _.Z.post(b({
                        url: S.ANM.LOGIN,
                        body: {
                            login: n,
                            password: r,
                            undelete: c,
                            login_code: i,
                            login_source: a,
                            gift_code_sku_id: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_LOGIN,
                            properties: {
                                invite_code: null == d ? void 0 : d.code,
                                is_multi_account: p
                            }
                        }
                    }, p ? {
                        headers: {
                            authorization: ""
                        }
                    } : {})).then((function(t) {
                        var e = t.body,
                            n = e.mfa,
                            o = e.sms,
                            r = e.webauthn,
                            i = e.ticket,
                            c = e.token,
                            s = e.backup,
                            a = e.user_id,
                            l = e.required_actions,
                            d = e.totp;
                        u.Z.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: a,
                            required_actions: l
                        });
                        n ? u.Z.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: i,
                            sms: o,
                            webauthn: r,
                            totp: d,
                            backup: s
                        }) : p ? f.switchAccountToken(c) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: c
                        })
                    }), (function(t) {
                        var e, o = null === (e = t.body) || void 0 === e ? void 0 : e.code;
                        o === S.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != r && "" !== r ? u.Z.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: n,
                                password: r
                            }
                        }) : o === S.evJ.ACCOUNT_DISABLED && null != r && "" !== r ? u.Z.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: n,
                                password: r
                            }
                        }) : o === S.evJ.PHONE_VERIFICATION_REQUIRED ? u.Z.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.Z.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new s.yZ(t)
                        })
                    }))
                },
                loginMFA: function(t) {
                    var e = t.code,
                        n = t.ticket,
                        r = t.source,
                        i = t.giftCodeSKUId,
                        c = t.isMultiAccount,
                        s = t.isWebAuthn,
                        a = this;
                    s ? u.Z.dispatch({
                        type: "LOGIN_MFA_WEBAUTHN"
                    }) : u.Z.dispatch({
                        type: "LOGIN_MFA"
                    });
                    _.Z.post({
                        url: s ? S.ANM.LOGIN_WEBAUTHN : S.ANM.LOGIN_MFA,
                        body: {
                            code: e,
                            ticket: n,
                            login_source: r,
                            gift_code_sku_id: i
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_LOGIN_MFA
                        }
                    }).then((function(t) {
                        c ? a.switchAccountToken(t.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        })
                    }), (function(t) {
                        return u.Z.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: k(t.body)
                        })
                    }))
                },
                loginMFAv2: function(t) {
                    var e, n = t.code,
                        r = t.ticket,
                        i = t.source,
                        c = t.giftCodeSKUId,
                        s = t.isMultiAccount,
                        a = t.mfaType,
                        l = this;
                    e = "webauthn" === a ? S.ANM.LOGIN_WEBAUTHN : "sms" === a ? S.ANM.LOGIN_SMS : S.ANM.LOGIN_MFA;
                    return _.Z.post({
                        url: e,
                        body: {
                            code: n,
                            ticket: r,
                            login_source: i,
                            gift_code_sku_id: c
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_LOGIN_MFA
                        }
                    }).then((function(t) {
                        s ? l.switchAccountToken(t.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        })
                    }))
                },
                requestSMSToken: function(t) {
                    u.Z.dispatch({
                        type: "LOGIN_MFA_SMS"
                    });
                    _.Z.post({
                        url: S.ANM.LOGIN_SMS_SEND,
                        body: {
                            ticket: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.LOGIN_REQUEST_SMS_TOKEN
                        }
                    }).then((function(t) {
                        var e = t.body.phone;
                        u.Z.dispatch({
                            type: "LOGIN_MFA_SMS_REQUEST_SUCCESS",
                            phone: e
                        })
                    }), (function(t) {
                        u.Z.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: k(t.body)
                        })
                    }))
                },
                loginSMS: function(t) {
                    var e = t.code,
                        n = t.ticket,
                        r = t.source,
                        i = t.giftCodeSKUId,
                        c = t.isMultiAccount,
                        s = this;
                    u.Z.dispatch({
                        type: "LOGIN_MFA_SMS"
                    });
                    _.Z.post({
                        url: S.ANM.LOGIN_SMS,
                        body: {
                            code: e,
                            ticket: n,
                            login_source: r,
                            gift_code_sku_id: i
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_LOGIN_MFA_SMS
                        }
                    }).then((function(t) {
                        c ? s.switchAccountToken(t.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        })
                    }), (function(t) {
                        return u.Z.dispatch({
                            type: "LOGIN_MFA_SMS_FAILURE",
                            message: k(t.body)
                        })
                    }))
                },
                loginToken: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this;
                    u.Z.dispatch({
                        type: "LOGIN"
                    });
                    return new Promise((function(o) {
                        setImmediate((function() {
                            u.Z.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: t
                            });
                            e && n.startSession(t);
                            o()
                        }))
                    }))
                },
                loginReset: function(t) {
                    u.Z.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: t
                    })
                },
                loginStatusReset: function() {
                    u.Z.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal: function(t) {
                    g(t)
                },
                logout: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    return _.Z.post(b({
                        url: S.ANM.LOGOUT,
                        body: {
                            provider: (0, E.xJ)(),
                            token: c.Z.get(S.JkL),
                            voip_provider: S.mvA,
                            voip_token: c.Z.get(S.scU)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_LOGOUT
                        }
                    }, null != n && {
                        headers: {
                            authorization: null !== (t = r.Z.getToken(n)) && void 0 !== t ? t : ""
                        }
                    })).finally((function() {
                        null != n && n !== f.default.getId() || C(e)
                    }))
                },
                switchAccountToken: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = f.default.getToken();
                    L.log("Switching accounts", {
                        wasLoggedIn: null != n,
                        tokenHasChanged: t !== n
                    });
                    g({
                        isSwitchingAccount: !0
                    });
                    var o = this.loginToken(t, !0).then((function() {
                        var e = f.default.getToken();
                        L.log("Switched accounts finished", {
                            isCorrectToken: t === e
                        })
                    }));
                    e && (0, p.uL)(S.Z5c.ME);
                    return o
                },
                verifySSOToken: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
                    return i.ZP.get({
                        url: S.ANM.ME,
                        oldFormErrors: !0
                    }).catch((function() {
                        return C(t)
                    }))
                },
                verify: function(t) {
                    null != t ? _.Z.post({
                        url: S.ANM.VERIFY,
                        body: {
                            token: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_VERIFY
                        }
                    }).then((function(t) {
                        u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        });
                        u.Z.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: t.body.user_id
                        })
                    }), (function(t) {
                        return u.Z.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: t.body
                        })
                    })) : u.Z.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                authorizePayment: function(t) {
                    return v((function() {
                        return T(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 2, , 3]);
                                    return [4, _.Z.post({
                                        url: S.ANM.AUTHORIZE_PAYMENT,
                                        body: {
                                            token: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.AUTHORIZE_PAYMENT
                                        }
                                    })];
                                case 1:
                                    e.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    e.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_FAILURE",
                                        errors: {}
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                authorizeIPAddress: function(t) {
                    return v((function() {
                        return T(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    if (null == t) {
                                        u.Z.dispatch({
                                            type: "VERIFY_FAILURE",
                                            errors: {}
                                        });
                                        return [2]
                                    }
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.AUTHORIZE_IP,
                                        body: {
                                            token: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.AUTHORIZE_IP
                                        }
                                    })];
                                case 2:
                                    e.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_SUCCESS"
                                    });
                                    return [3, 4];
                                case 3:
                                    e.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_FAILURE",
                                        errors: {}
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                verifyResend: function() {
                    return _.Z.post({
                        url: S.ANM.VERIFY_RESEND,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.USER_VERIFY_RESEND
                        }
                    })
                },
                resetPassword: function(t, e, n) {
                    return v((function() {
                        var r, i, a, l, d, p, f, h, y, O, A, v, I, b;
                        return T(this, (function(R) {
                            switch (R.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN"
                                    });
                                    r = {
                                        token: t,
                                        password: e,
                                        source: n
                                    };
                                    i = c.Z.get(S.JkL);
                                    if (null != (a = (0, E.xJ)()) && null != i) {
                                        r.push_provider = a;
                                        r.push_token = i
                                    }
                                    l = c.Z.get(S.scU);
                                    if (null != S.mvA && null != l) {
                                        r.push_voip_provider = S.mvA;
                                        r.push_voip_token = l
                                    }
                                    R.label = 1;
                                case 1:
                                    R.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: r,
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.USER_RESET_PASSWORD
                                        }
                                    })];
                                case 2:
                                    d = R.sent(), p = d.body, f = p.mfa, h = p.sms, y = p.webauthn, O = p.ticket, A = p.token, v = p.backup, I = p.totp;
                                    return [2, {
                                        result: f ? N.MFA : N.SUCCESS,
                                        sms: h,
                                        webauthn: y,
                                        ticket: O,
                                        token: A,
                                        backup: v,
                                        totp: I
                                    }];
                                case 3:
                                    b = R.sent();
                                    u.Z.dispatch({
                                        type: "LOGIN_FAILURE",
                                        error: new s.yZ(b)
                                    });
                                    throw b;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                resetPasswordMFA: function(t, e, n, r, i) {
                    return v((function() {
                        var c;
                        return T(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA"
                                    });
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: {
                                            code: t,
                                            ticket: e,
                                            password: n,
                                            token: r,
                                            source: i
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.USER_RESET_PASSWORD,
                                            properties: {
                                                mfa: !0
                                            }
                                        }
                                    })];
                                case 2:
                                    return [2, s.sent().body.token];
                                case 3:
                                    c = s.sent();
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA_FAILURE",
                                        message: k(c.body)
                                    });
                                    throw c;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                resetPasswordMFAv2: function(t) {
                    var e = t.method,
                        n = t.code,
                        r = t.ticket,
                        i = t.password,
                        c = t.token,
                        s = t.source;
                    return v((function() {
                        return T(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA"
                                    });
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: {
                                            code: n,
                                            ticket: r,
                                            password: i,
                                            token: c,
                                            source: s,
                                            method: e
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.USER_RESET_PASSWORD,
                                            properties: {
                                                mfa: !0
                                            }
                                        }
                                    })];
                                case 1:
                                    return [2, t.sent().body.token]
                            }
                        }))
                    }))()
                },
                forgotPassword: function(t) {
                    return v((function() {
                        var e, n;
                        return T(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    this.setLoginCredentials(t);
                                    u.Z.dispatch({
                                        type: "FORGOT_PASSWORD_REQUEST"
                                    });
                                    r.label = 1;
                                case 1:
                                    r.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.FORGOT_PASSWORD,
                                        body: {
                                            login: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: o.a9.FORGOT_PASSWORD
                                        }
                                    })];
                                case 2:
                                    r.sent();
                                    u.Z.dispatch({
                                        type: "FORGOT_PASSWORD_SENT"
                                    });
                                    return [3, 4];
                                case 3:
                                    e = r.sent();
                                    n = new s.yZ(e);
                                    n.code === S.evJ.PHONE_VERIFICATION_REQUIRED ? u.Z.dispatch({
                                        type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                                    }) : u.Z.dispatch({
                                        type: "LOGIN_FAILURE",
                                        error: n
                                    });
                                    throw e;
                                case 4:
                                    return [2]
                            }
                        }))
                    })).apply(this)
                },
                setFingerprint: function(t) {
                    u.Z.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: t
                    })
                },
                getExperiments: function(t) {
                    u.Z.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: t
                    })
                },
                getLocationMetadata: function() {
                    if (null != Z) return Z;
                    clearTimeout(R);
                    R = setTimeout((function() {
                        u.Z.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: !0
                        })
                    }), 5e3);
                    return Z = i.ZP.get({
                        url: S.ANM.AUTH_LOCATION_METADATA,
                        retries: 2,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var e, n, o;
                        clearTimeout(R);
                        if (null == h.Z.getAuthenticationConsentRequired()) {
                            var r, i, c = null === (i = null == t || null === (r = t.body) || void 0 === r ? void 0 : r.consent_required) || void 0 === i || i;
                            u.Z.dispatch({
                                type: "SET_CONSENT_REQUIRED",
                                consentRequired: c
                            })
                        }
                        u.Z.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (o = null == t || null === (e = t.body) || void 0 === e ? void 0 : e.country_code) && void 0 !== o ? o : void 0
                        });
                        Z = null;
                        if (null != (null == t || null === (n = t.body) || void 0 === n ? void 0 : n.promotional_email_opt_in)) {
                            var s = t.body.promotional_email_opt_in;
                            (0, a.K4)({
                                required: s.required,
                                checked: s.pre_checked,
                                preChecked: s.pre_checked
                            })
                        }
                    }), (function() {
                        clearTimeout(R);
                        u.Z.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: !0
                        });
                        Z = null
                    }))
                }
            }
        },
        494889: (t, e, n) => {
            n.d(e, {
                Z: () => h
            });
            var o = n(873955),
                r = n.n(o),
                i = n(744564),
                c = n(921554),
                u = n(502079);
            const s = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.queue = []
                }
                var e = t.prototype;
                e.enqueue = function(t) {
                    this.queue.push(t)
                };
                e.flush = function() {
                    for (; this.queue.length > 0;) {
                        var t;
                        null === (t = this.queue.shift()) || void 0 === t || t()
                    }
                };
                return t
            }());
            var a = n(316878),
                l = n(2590);

            function d(t, e, n) {
                var o, r, i, c, u, s, d, p, f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (r = null !== (o = e.key) && void 0 !== o ? o : f) && void 0 !== r ? r : "modal",
                    modal: t,
                    animation: null !== (i = e.animation) && void 0 !== i ? i : a.Z.useReducedMotion ? l.fMv.FADE : l.fMv.SLIDE_UP,
                    shouldPersistUnderModals: null !== (c = e.shouldPersistUnderModals) && void 0 !== c && c,
                    props: n,
                    backdropStyle: null !== (u = e.backdropStyle) && void 0 !== u ? u : null,
                    backdropInstant: null !== (s = e.backdropInstant) && void 0 !== s && s,
                    disableAnimation: null !== (d = e.disableAnimation) && void 0 !== d && d,
                    closable: "boolean" != typeof e.closable || e.closable,
                    label: null !== (p = e.label) && void 0 !== p ? p : "",
                    callbacks: {}
                }
            }

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    o.forEach((function(e) {
                        p(t, e, n[e])
                    }))
                }
                return t
            }
            const h = {
                push: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.IlC.APP;
                    (0, u.Ll)(f({
                        key: n,
                        modal: d(t, {}, e, n)
                    }, o));
                    i.Z.dispatch({
                        type: "MODAL_PUSH",
                        modal: t,
                        props: e,
                        key: n,
                        appContext: c
                    });
                    return n
                },
                pushLazy: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        i = this,
                        u = (0, c.D)();
                    return null != u && u.isReady() ? (t instanceof Promise ? t.then((function(t) {
                        return t.default
                    })) : t()).then((function(t) {
                        return i.push(t, e, n, o)
                    })) : new Promise((function(r) {
                        return s.enqueue((function() {
                            return r(i.pushLazy(t, e, n, o))
                        }))
                    }))
                },
                updateAnimation: function(t, e) {
                    i.Z.dispatch({
                        type: "MODAL_UPDATE",
                        key: t,
                        props: {},
                        partial: !0,
                        animation: e
                    })
                },
                pop: function() {
                    (0, u.GZ)();
                    i.Z.dispatch({
                        type: "MODAL_POP"
                    })
                },
                popWithKey: function(t, e) {
                    (0, u.GZ)(t, e);
                    i.Z.dispatch({
                        type: "MODAL_POP",
                        key: t,
                        onExited: e
                    })
                },
                popAll: function() {
                    (0, u.lE)();
                    i.Z.dispatch({
                        type: "MODAL_POP_ALL"
                    });
                    i.Z.dispatch({
                        type: "CHANNEL_SETTINGS_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "GUILD_SETTINGS_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "HIDE_ACTION_SHEET"
                    });
                    i.Z.dispatch({
                        type: "DISPLAYED_INVITE_CLEAR"
                    });
                    i.Z.dispatch({
                        type: "DRAWER_CLOSE",
                        animated: !0
                    });
                    i.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "QUICKSWITCHER_HIDE"
                    });
                    i.Z.dispatch({
                        type: "MENTION_MODAL_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "SEARCH_MODAL_CLOSE"
                    });
                    i.Z.dispatch({
                        type: "CONNECTIONS_GRID_MODAL_HIDE"
                    })
                }
            }
        },
        527005: (t, e, n) => {
            n.d(e, {
                K4: () => r,
                ZJ: () => i,
                MD: () => c
            });
            var o = (0, n(38736).Z)((function() {
                    return {
                        required: !1,
                        checked: !1,
                        preChecked: !1
                    }
                })),
                r = function(t) {
                    o.setState(t)
                },
                i = function(t) {
                    o.setState({
                        checked: t
                    })
                },
                c = o
        },
        502079: (t, e, n) => {
            n.d(e, {
                k4: () => r,
                fA: () => i,
                vp: () => c,
                Bj: () => u,
                H: () => s,
                Ll: () => a,
                GZ: () => l,
                lE: () => d,
                EV: () => p
            });

            function o(t) {
                throw t
            }

            function r(t) {
                t = null !== t ? t : o(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function i(t, e) {
                return !1
            }

            function c(t) {
                return !1
            }

            function u() {
                return !1
            }

            function s() {
                return !1
            }

            function a(t) {
                t = null !== t ? t : o(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function l(t, e) {
                return !1
            }

            function d() {
                return !1
            }

            function p(t) {
                return !1
            }
        },
        31914: (t, e, n) => {
            n.d(e, {
                Z: () => O
            });
            var o = n(202351),
                r = n(744564);

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1;
                    o.configurable = !0;
                    "value" in o && (o.writable = !0);
                    Object.defineProperty(t, o.key, o)
                }
            }

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return s(t)
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    o.forEach((function(e) {
                        u(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var p = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = s(t);
                    if (e) {
                        var r = s(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return l(this, n)
                }
            }
            var h = !1,
                E = !1,
                _ = {},
                y = null;
            var S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = f(n);

                function n() {
                    i(this, n);
                    return e.apply(this, arguments)
                }
                var o = n.prototype;
                o.hasConsented = function(t) {
                    return null != _[t] && _[t].consented
                };
                o.getAuthenticationConsentRequired = function() {
                    return y
                };
                o.__getLocalVars = function() {
                    return {
                        fetchedConsents: h,
                        receivedConsentsInConnectionOpen: E,
                        consents: _,
                        authenticationConsentRequired: y
                    }
                };
                ! function(t, e, n) {
                    e && c(t.prototype, e);
                    n && c(t, n)
                }(n, [{
                    key: "fetchedConsents",
                    get: function() {
                        return h
                    }
                }, {
                    key: "receivedConsentsInConnectionOpen",
                    get: function() {
                        return E
                    }
                }]);
                return n
            }(o.ZP.Store);
            S.displayName = "ConsentStore";
            const O = new S(r.Z, {
                CONNECTION_OPEN: function(t) {
                    var e = t.consents;
                    if (null != e) {
                        _ = a({}, _, e);
                        E = !0
                    }
                },
                UPDATE_CONSENTS: function(t) {
                    var e = t.consents;
                    _ = a({}, e);
                    h = !0
                },
                SET_CONSENT_REQUIRED: function(t) {
                    y = t.consentRequired
                },
                LOGOUT: function() {
                    y = null
                }
            })
        }
    }
]);
//# sourceMappingURL=f054c6725a634e83ce69.js.map