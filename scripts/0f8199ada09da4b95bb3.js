"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84441], {
        84441: (e, t, n) => {
            n.d(t, {
                c: () => I,
                Z: () => Z
            });
            var r = n(993231),
                o = n(541554),
                i = n(281110),
                s = n(630631),
                u = n(744564),
                a = n(347365),
                c = n(527005),
                l = n(296602),
                d = n(339432),
                f = n(984440),
                p = n(784426),
                h = n(664625),
                y = n(31914),
                _ = n(391438),
                E = n(494889),
                S = n(2590),
                v = n(239620),
                b = n(473708);

            function O(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            O(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            O(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }
            var N, I, T = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                R = new l.Z("AuthenticationActionCreators"),
                C = null;
            ! function(e) {
                e.MFA = "MFA";
                e.SUCCESS = "SUCCESS"
            }(I || (I = {}));

            function M(e) {
                return null == e ? b.Z.Messages.NETWORK_ERROR_REST_REQUEST : null != e.message ? e.message : null != e.code && Array.isArray(e.code) ? e.code[0] : b.Z.Messages.NETWORK_ERROR_REST_REQUEST
            }

            function w(e) {
                var t = g({
                    type: "LOGOUT"
                }, e);
                u.Z.dispatch(t).catch((function(e) {
                    var t;
                    R.error("Error while dispatching LOGOUT", e);
                    null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e);
                    throw e
                }))
            }

            function k() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
                w();
                var t = (0, d.PP)();
                if (null != e)
                    if (null != t) {
                        E.Z.popAll();
                        t.navigate("auth")
                    } else(0, p.uL)(e)
            }
            const Z = {
                startSession: function(e) {
                    u.Z.wait((function() {
                        u.Z.dispatch({
                            type: "START_SESSION",
                            token: e
                        })
                    }))
                },
                setLoginCredentials: function(e, t) {
                    u.Z.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: e,
                        password: t
                    })
                },
                login: function(e) {
                    var t, n = e.login,
                        o = e.password,
                        i = e.loginCode,
                        s = e.undelete,
                        c = e.source,
                        l = e.giftCodeSKUId,
                        d = e.invite,
                        f = e.isMultiAccount,
                        p = this;
                    u.Z.dispatch({
                        type: "LOGIN",
                        login: n,
                        loginMethod: null != i && "" !== i ? S.nnr.LOGIN_CODE : S.nnr.PASSWORD
                    });
                    this.setLoginCredentials(n, null !== (t = null != o ? o : i) && void 0 !== t ? t : void 0);
                    _.Z.post(g({
                        url: S.ANM.LOGIN,
                        body: {
                            login: n,
                            password: o,
                            undelete: s,
                            login_code: i,
                            login_source: c,
                            gift_code_sku_id: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_LOGIN,
                            properties: {
                                invite_code: null == d ? void 0 : d.code,
                                is_multi_account: f
                            }
                        }
                    }, f ? {
                        headers: {
                            authorization: ""
                        }
                    } : {})).then((function(e) {
                        var t = e.body,
                            n = t.mfa,
                            r = t.sms,
                            o = t.webauthn,
                            i = t.ticket,
                            s = t.token,
                            a = t.backup,
                            c = t.user_id,
                            l = t.required_actions,
                            d = t.totp;
                        u.Z.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: c,
                            required_actions: l
                        });
                        n ? u.Z.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: i,
                            sms: r,
                            webauthn: o,
                            totp: d,
                            backup: a
                        }) : f ? p.switchAccountToken(s) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: s
                        })
                    }), (function(e) {
                        var t, r = null === (t = e.body) || void 0 === t ? void 0 : t.code;
                        r === S.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != o && "" !== o ? u.Z.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: n,
                                password: o
                            }
                        }) : r === S.evJ.ACCOUNT_DISABLED && null != o && "" !== o ? u.Z.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: n,
                                password: o
                            }
                        }) : r === S.evJ.PHONE_VERIFICATION_REQUIRED ? u.Z.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.Z.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new a.yZ(e)
                        })
                    }))
                },
                loginMFA: function(e) {
                    var t = e.code,
                        n = e.ticket,
                        o = e.source,
                        i = e.giftCodeSKUId,
                        s = e.isMultiAccount,
                        a = e.isWebAuthn,
                        c = this;
                    a ? u.Z.dispatch({
                        type: "LOGIN_MFA_WEBAUTHN"
                    }) : u.Z.dispatch({
                        type: "LOGIN_MFA"
                    });
                    _.Z.post({
                        url: a ? S.ANM.LOGIN_WEBAUTHN : S.ANM.LOGIN_MFA,
                        body: {
                            code: t,
                            ticket: n,
                            login_source: o,
                            gift_code_sku_id: i
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_LOGIN_MFA
                        }
                    }).then((function(e) {
                        s ? c.switchAccountToken(e.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }), (function(e) {
                        return u.Z.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: M(e.body)
                        })
                    }))
                },
                loginMFAv2: function(e) {
                    var t, n = e.code,
                        o = e.ticket,
                        i = e.source,
                        s = e.giftCodeSKUId,
                        a = e.isMultiAccount,
                        c = e.mfaType,
                        l = this;
                    t = "webauthn" === c ? S.ANM.LOGIN_WEBAUTHN : "sms" === c ? S.ANM.LOGIN_SMS : S.ANM.LOGIN_MFA;
                    return _.Z.post({
                        url: t,
                        body: {
                            code: n,
                            ticket: o,
                            login_source: i,
                            gift_code_sku_id: s
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_LOGIN_MFA
                        }
                    }).then((function(e) {
                        a ? l.switchAccountToken(e.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    })).catch((function(e) {
                        var t;
                        if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === S.evJ.MFA_INVALID_CODE) throw new Error((0, f.mapError)(c));
                        throw e
                    }))
                },
                requestSMSToken: function(e) {
                    u.Z.dispatch({
                        type: "LOGIN_MFA_SMS"
                    });
                    _.Z.post({
                        url: S.ANM.LOGIN_SMS_SEND,
                        body: {
                            ticket: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.LOGIN_REQUEST_SMS_TOKEN
                        }
                    }).then((function(e) {
                        var t = e.body.phone;
                        u.Z.dispatch({
                            type: "LOGIN_MFA_SMS_REQUEST_SUCCESS",
                            phone: t
                        })
                    }), (function(e) {
                        u.Z.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: M(e.body)
                        })
                    }))
                },
                loginSMS: function(e) {
                    var t = e.code,
                        n = e.ticket,
                        o = e.source,
                        i = e.giftCodeSKUId,
                        s = e.isMultiAccount,
                        a = this;
                    u.Z.dispatch({
                        type: "LOGIN_MFA_SMS"
                    });
                    _.Z.post({
                        url: S.ANM.LOGIN_SMS,
                        body: {
                            code: t,
                            ticket: n,
                            login_source: o,
                            gift_code_sku_id: i
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_LOGIN_MFA_SMS
                        }
                    }).then((function(e) {
                        s ? a.switchAccountToken(e.body.token) : u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }), (function(e) {
                        return u.Z.dispatch({
                            type: "LOGIN_MFA_SMS_FAILURE",
                            message: M(e.body)
                        })
                    }))
                },
                loginToken: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this;
                    u.Z.dispatch({
                        type: "LOGIN"
                    });
                    return new Promise((function(r) {
                        setImmediate((function() {
                            u.Z.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            });
                            t && n.startSession(e);
                            r()
                        }))
                    }))
                },
                loginReset: function(e) {
                    u.Z.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: e
                    })
                },
                loginStatusReset: function() {
                    u.Z.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal: function(e) {
                    w(e)
                },
                logout: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    return _.Z.post(g({
                        url: S.ANM.LOGOUT,
                        body: {
                            provider: (0, v.xJ)(),
                            token: s.Z.get(S.JkL),
                            voip_provider: v.mv,
                            voip_token: s.Z.get(S.scU)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_LOGOUT
                        }
                    }, null != n && {
                        headers: {
                            authorization: null !== (e = o.Z.getToken(n)) && void 0 !== e ? e : ""
                        }
                    })).finally((function() {
                        null != n && n !== h.default.getId() || k(t)
                    }))
                },
                switchAccountToken: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = h.default.getToken();
                    R.log("Switching accounts", {
                        wasLoggedIn: null != n,
                        tokenHasChanged: e !== n
                    });
                    w({
                        isSwitchingAccount: !0
                    });
                    var r = this.loginToken(e, !0).then((function() {
                        var t = h.default.getToken();
                        R.log("Switched accounts finished", {
                            isCorrectToken: e === t
                        })
                    }));
                    t && (0, p.uL)(S.Z5c.ME);
                    return r
                },
                verifySSOToken: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
                    return i.ZP.get({
                        url: S.ANM.ME,
                        oldFormErrors: !0
                    }).catch((function() {
                        return k(e)
                    }))
                },
                verify: function(e) {
                    null != e ? _.Z.post({
                        url: S.ANM.VERIFY,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_VERIFY
                        }
                    }).then((function(e) {
                        u.Z.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        });
                        u.Z.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: e.body.user_id
                        })
                    }), (function(e) {
                        return u.Z.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: e.body
                        })
                    })) : u.Z.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                authorizePayment: function(e) {
                    return A((function() {
                        return T(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, _.Z.post({
                                        url: S.ANM.AUTHORIZE_PAYMENT,
                                        body: {
                                            token: e
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.AUTHORIZE_PAYMENT
                                        }
                                    })];
                                case 1:
                                    t.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    t.sent();
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
                authorizeIPAddress: function(e) {
                    return A((function() {
                        return T(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == e) {
                                        u.Z.dispatch({
                                            type: "VERIFY_FAILURE",
                                            errors: {}
                                        });
                                        return [2]
                                    }
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.AUTHORIZE_IP,
                                        body: {
                                            token: e
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.AUTHORIZE_IP
                                        }
                                    })];
                                case 2:
                                    t.sent();
                                    u.Z.dispatch({
                                        type: "VERIFY_SUCCESS"
                                    });
                                    return [3, 4];
                                case 3:
                                    t.sent();
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
                            event: r.a9.USER_VERIFY_RESEND
                        }
                    })
                },
                resetPassword: function(e, t, n) {
                    return A((function() {
                        var o, i, c, l, d, f, p, h, y, E, b, O, A, m;
                        return T(this, (function(g) {
                            switch (g.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN"
                                    });
                                    o = {
                                        token: e,
                                        password: t,
                                        source: n
                                    };
                                    i = s.Z.get(S.JkL);
                                    if (null != (c = (0, v.xJ)()) && null != i) {
                                        o.push_provider = c;
                                        o.push_token = i
                                    }
                                    l = s.Z.get(S.scU);
                                    if (null != v.mv && null != l) {
                                        o.push_voip_provider = v.mv;
                                        o.push_voip_token = l
                                    }
                                    g.label = 1;
                                case 1:
                                    g.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: o,
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_RESET_PASSWORD
                                        }
                                    })];
                                case 2:
                                    d = g.sent(), f = d.body, p = f.mfa, h = f.sms, y = f.webauthn, E = f.ticket, b = f.token, O = f.backup, A = f.totp;
                                    return [2, {
                                        result: p ? I.MFA : I.SUCCESS,
                                        sms: h,
                                        webauthn: y,
                                        ticket: E,
                                        token: b,
                                        backup: O,
                                        totp: A
                                    }];
                                case 3:
                                    m = g.sent();
                                    u.Z.dispatch({
                                        type: "LOGIN_FAILURE",
                                        error: new a.yZ(m)
                                    });
                                    throw m;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                resetPasswordMFA: function(e, t, n, o, i) {
                    return A((function() {
                        var s;
                        return T(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA"
                                    });
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: {
                                            code: e,
                                            ticket: t,
                                            password: n,
                                            token: o,
                                            source: i
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_RESET_PASSWORD,
                                            properties: {
                                                mfa: !0
                                            }
                                        }
                                    })];
                                case 2:
                                    return [2, a.sent().body.token];
                                case 3:
                                    s = a.sent();
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA_FAILURE",
                                        message: M(s.body)
                                    });
                                    throw s;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                resetPasswordMFAv2: function(e) {
                    var t = e.method,
                        n = e.code,
                        o = e.ticket,
                        i = e.password,
                        s = e.token,
                        a = e.source;
                    return A((function() {
                        return T(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    u.Z.dispatch({
                                        type: "LOGIN_MFA"
                                    });
                                    return [4, _.Z.post({
                                        url: S.ANM.RESET_PASSWORD,
                                        body: {
                                            code: n,
                                            ticket: o,
                                            password: i,
                                            token: s,
                                            source: a,
                                            method: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_RESET_PASSWORD,
                                            properties: {
                                                mfa: !0
                                            }
                                        }
                                    })];
                                case 1:
                                    return [2, e.sent().body.token]
                            }
                        }))
                    }))()
                },
                forgotPassword: function(e) {
                    return A((function() {
                        var t, n;
                        return T(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    this.setLoginCredentials(e);
                                    u.Z.dispatch({
                                        type: "FORGOT_PASSWORD_REQUEST"
                                    });
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, _.Z.post({
                                        url: S.ANM.FORGOT_PASSWORD,
                                        body: {
                                            login: e
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.FORGOT_PASSWORD
                                        }
                                    })];
                                case 2:
                                    o.sent();
                                    u.Z.dispatch({
                                        type: "FORGOT_PASSWORD_SENT"
                                    });
                                    return [3, 4];
                                case 3:
                                    t = o.sent();
                                    n = new a.yZ(t);
                                    n.code === S.evJ.PHONE_VERIFICATION_REQUIRED ? u.Z.dispatch({
                                        type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                                    }) : u.Z.dispatch({
                                        type: "LOGIN_FAILURE",
                                        error: n
                                    });
                                    throw t;
                                case 4:
                                    return [2]
                            }
                        }))
                    })).apply(this)
                },
                setFingerprint: function(e) {
                    u.Z.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: e
                    })
                },
                getExperiments: function(e) {
                    u.Z.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: e
                    })
                },
                getLocationMetadata: function() {
                    if (null != C) return C;
                    clearTimeout(N);
                    N = setTimeout((function() {
                        u.Z.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: !0
                        })
                    }), 5e3);
                    return C = i.ZP.get({
                        url: S.ANM.AUTH_LOCATION_METADATA,
                        retries: 2,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t, n, r;
                        clearTimeout(N);
                        if (null == y.Z.getAuthenticationConsentRequired()) {
                            var o, i, s = null === (i = null == e || null === (o = e.body) || void 0 === o ? void 0 : o.consent_required) || void 0 === i || i;
                            u.Z.dispatch({
                                type: "SET_CONSENT_REQUIRED",
                                consentRequired: s
                            })
                        }
                        u.Z.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (r = null == e || null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== r ? r : void 0
                        });
                        C = null;
                        if (null != (null == e || null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in)) {
                            var a = e.body.promotional_email_opt_in;
                            (0, c.K4)({
                                required: a.required,
                                checked: a.pre_checked,
                                preChecked: a.pre_checked
                            })
                        }
                    }), (function() {
                        clearTimeout(N);
                        u.Z.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: !0
                        });
                        C = null
                    }))
                }
            }
        },
        494889: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(873955),
                o = n.n(r),
                i = n(744564),
                s = n(921554),
                u = n(502079);
            const a = new(function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.queue = []
                }
                var t = e.prototype;
                t.enqueue = function(e) {
                    this.queue.push(e)
                };
                t.flush = function() {
                    for (; this.queue.length > 0;) {
                        var e;
                        null === (e = this.queue.shift()) || void 0 === e || e()
                    }
                };
                return e
            }());
            var c = n(316878),
                l = n(2590);

            function d(e, t, n) {
                var r, o, i, s, u, a, d, f, p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (o = null !== (r = t.key) && void 0 !== r ? r : p) && void 0 !== o ? o : "modal",
                    modal: e,
                    animation: null !== (i = t.animation) && void 0 !== i ? i : c.Z.useReducedMotion ? l.fMv.FADE : l.fMv.SLIDE_UP,
                    shouldPersistUnderModals: null !== (s = t.shouldPersistUnderModals) && void 0 !== s && s,
                    props: n,
                    backdropStyle: null !== (u = t.backdropStyle) && void 0 !== u ? u : null,
                    backdropInstant: null !== (a = t.backdropInstant) && void 0 !== a && a,
                    disableAnimation: null !== (d = t.disableAnimation) && void 0 !== d && d,
                    closable: "boolean" != typeof t.closable || t.closable,
                    label: null !== (f = t.label) && void 0 !== f ? f : "",
                    callbacks: {}
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }
            const h = {
                push: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.IlC.APP;
                    (0, u.Ll)(p({
                        key: n,
                        modal: d(e, {}, t, n)
                    }, r));
                    i.Z.dispatch({
                        type: "MODAL_PUSH",
                        modal: e,
                        props: t,
                        key: n,
                        appContext: s
                    });
                    return n
                },
                pushLazy: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = this,
                        u = (0, s.D)();
                    return null != u && u.isReady() ? (e instanceof Promise ? e.then((function(e) {
                        return e.default
                    })) : e()).then((function(e) {
                        return i.push(e, t, n, r)
                    })) : new Promise((function(o) {
                        return a.enqueue((function() {
                            return o(i.pushLazy(e, t, n, r))
                        }))
                    }))
                },
                updateAnimation: function(e, t) {
                    i.Z.dispatch({
                        type: "MODAL_UPDATE",
                        key: e,
                        props: {},
                        partial: !0,
                        animation: t
                    })
                },
                pop: function() {
                    (0, u.GZ)();
                    i.Z.dispatch({
                        type: "MODAL_POP"
                    })
                },
                popWithKey: function(e, t) {
                    (0, u.GZ)(e, t);
                    i.Z.dispatch({
                        type: "MODAL_POP",
                        key: e,
                        onExited: t
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
        527005: (e, t, n) => {
            n.d(t, {
                K4: () => o,
                ZJ: () => i,
                MD: () => s
            });
            var r = (0, n(38736).Z)((function() {
                    return {
                        required: !1,
                        checked: !1,
                        preChecked: !1
                    }
                })),
                o = function(e) {
                    r.setState(e)
                },
                i = function(e) {
                    r.setState({
                        checked: e
                    })
                },
                s = r
        },
        502079: (e, t, n) => {
            n.d(t, {
                k4: () => o,
                fA: () => i,
                vp: () => s,
                Bj: () => u,
                H: () => a,
                Ll: () => c,
                GZ: () => l,
                lE: () => d,
                EV: () => f
            });

            function r(e) {
                throw e
            }

            function o(e) {
                e = null !== e ? e : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function i(e, t) {
                return !1
            }

            function s(e) {
                return !1
            }

            function u() {
                return !1
            }

            function a() {
                return !1
            }

            function c(e) {
                e = null !== e ? e : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function l(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function f(e) {
                return !1
            }
        },
        984440: (e, t, n) => {
            n.r(t);
            n.d(t, {
                mapError: () => l,
                openMFAModal: () => p
            });
            var r = n(281110),
                o = n(380481),
                i = n(2590),
                s = n(473708);

            function u(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            u(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function l(e) {
                var t = s.Z.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = s.Z.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = s.Z.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }

            function d(e) {
                return f.apply(this, arguments)
            }

            function f() {
                f = a((function(e) {
                    var t, n, o, s, u, a, d = arguments;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = e.ticket, n = e.mfaType, o = e.data, s = d.length > 1 && void 0 !== d[1] ? d[1] : 2;
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.post({
                                    url: i.ANM.FINISH_MFA_CHECK,
                                    body: {
                                        ticket: t,
                                        mfa_type: n,
                                        data: o
                                    },
                                    retries: s
                                })];
                            case 2:
                                return [2, c.sent().body];
                            case 3:
                                u = c.sent();
                                if ((null === (a = u.body) || void 0 === a ? void 0 : a.code) === i.evJ.MFA_INVALID_CODE) throw new Error(l(n));
                                throw u;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return f.apply(this, arguments)
            }

            function p(e, t, r) {
                var s, u = (s = a((function(e) {
                    var n, r;
                    return c(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, d(e)];
                            case 1:
                                n = o.sent();
                                r = {
                                    "X-Discord-MFA-Authorization": n.token
                                };
                                return [2, new Promise((function(n, o) {
                                    t(r, (function(t, r, s) {
                                        var u, a;
                                        if ((null === (u = t.body) || void 0 === u ? void 0 : u.code) === i.evJ.MFA_INVALID_CODE || (null === (a = t.body) || void 0 === a ? void 0 : a.code) === i.evJ.MFA_REQUIRED) {
                                            o(new Error(l(e.mfaType)));
                                            return !0
                                        }
                                        n();
                                        return !1
                                    }))
                                }))]
                        }
                    }))
                })), function(e) {
                    return s.apply(this, arguments)
                });
                e.methods = e.methods.filter((function(e) {
                    return Object.hasOwn(o.Pp, e.type)
                }));
                n(154209).YR(e, u, r)
            }
        },
        380481: (e, t, n) => {
            n.d(t, {
                Pp: () => o
            });
            var r = n(473708),
                o = {
                    get webauthn() {
                        return r.Z.Messages.MFA_V2_WEBAUTHN_NAME
                    },
                    get totp() {
                        return r.Z.Messages.MFA_V2_TOTP_NAME
                    },
                    get sms() {
                        return r.Z.Messages.MFA_V2_SMS_NAME
                    },
                    get password() {
                        return r.Z.Messages.MFA_V2_PASSWORD_NAME
                    },
                    get backup() {
                        return r.Z.Messages.MFA_V2_BACKUP_NAME
                    }
                }
        },
        154209: (e, t, n) => {
            n.d(t, {
                Cd: () => P,
                YR: () => j
            });
            var r = n(785893),
                o = n(667294),
                i = n(970112),
                s = n(281110),
                u = n(304548),
                a = n(107364),
                c = n(136317),
                l = n(22176),
                d = n(310126),
                f = n(380481),
                p = n(2590),
                h = n(473708),
                y = n(192778),
                _ = n.n(y);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            S(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            S(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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

            function m(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function I(e) {
                var t = e.subtitle,
                    n = e.onClose;
                return (0, r.jsxs)(u.ModalHeader, {
                    direction: a.Z.Direction.VERTICAL,
                    className: _().header,
                    separator: !1,
                    children: [(0, r.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        children: h.Z.Messages.MFA_V2_HEADER
                    }), null != t && (0, r.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: _().subtitle,
                        children: t
                    }), (0, r.jsx)(u.ModalCloseButton, {
                        className: _().closeButton,
                        onClick: n
                    })]
                })
            }

            function T(e) {
                var t = e.children;
                return (0, r.jsx)(u.ModalContent, {
                    className: _().content,
                    children: t
                })
            }

            function R(e) {
                var t = e.error;
                return null == t ? null : (0, r.jsx)(u.Text, {
                    className: _().error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function C(e) {
                var t = e.request,
                    n = e.setSlide,
                    o = e.showConfirm,
                    i = void 0 !== o && o,
                    s = m(e, ["request", "setSlide", "showConfirm"]),
                    c = t.methods.length > 1;
                return c || i ? (0, r.jsxs)(u.ModalFooter, {
                    className: _().footer,
                    direction: i && !c ? a.Z.Direction.HORIZONTAL_REVERSE : a.Z.Direction.HORIZONTAL,
                    children: [c && (0, r.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        onClick: function() {
                            return n("select")
                        },
                        color: u.Button.Colors.PRIMARY,
                        children: h.Z.Messages.MFA_V2_GO_TO_SELECT
                    }), i && (0, r.jsx)(u.Button, A(O({
                        type: "submit"
                    }, s), {
                        children: h.Z.Messages.CONFIRM
                    }))]
                }) : null
            }

            function M(e) {
                var t = e.request,
                    n = e.setSlide,
                    o = e.onClose;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(I, {
                        subtitle: h.Z.Messages.MFA_V2_SELECT_HEADER,
                        onClose: o
                    }), (0, r.jsx)(T, {
                        children: t.methods.map((function(e) {
                            return (0, r.jsxs)(u.Clickable, {
                                className: _().listItemContainer,
                                onClick: function() {
                                    n(e.type)
                                },
                                children: [(0, r.jsx)(u.Text, {
                                    className: _().listItemText,
                                    variant: "text-md/semibold",
                                    children: f.Pp[e.type]
                                }), (0, r.jsx)(c.Z, {
                                    width: 20,
                                    height: 20,
                                    className: _().listItemArrow
                                })]
                            }, e.type)
                        }))
                    })]
                })
            }

            function w(e) {
                var t, n = e.request,
                    s = e.finish,
                    a = e.setSlide,
                    c = e.onClose,
                    f = g(o.useState(!1), 2),
                    y = f[0],
                    _ = f[1],
                    E = g(o.useState(null), 2),
                    S = E[0],
                    b = E[1],
                    O = n.methods.find((function(e) {
                        return "webauthn" === e.type
                    })).challenge,
                    A = (t = v((function() {
                        var e, t, n;
                        return N(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    _(!0);
                                    b(null);
                                    e = d.ZP.supportsFeature(p.eRX.WEBAUTHN) ? d.ZP.webAuthnAuthenticate(O) : i.U2(JSON.parse(O)).then((function(e) {
                                        return JSON.stringify(e)
                                    }));
                                    r.label = 1;
                                case 1:
                                    r.trys.push([1, 3, 4, 5]);
                                    return [4, e];
                                case 2:
                                    t = r.sent();
                                    return [2, s({
                                        mfaType: "webauthn",
                                        data: t
                                    })];
                                case 3:
                                    n = r.sent();
                                    l.Z.captureException(n);
                                    b(h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR);
                                    return [3, 5];
                                case 4:
                                    _(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return t.apply(this, arguments)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(I, {
                        onClose: c
                    }), (0, r.jsxs)(T, {
                        children: [(0,
                            r.jsx)(u.Button, {
                            submitting: y,
                            onClick: A,
                            children: h.Z.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, r.jsx)(R, {
                            error: S
                        })]
                    }), (0, r.jsx)(C, {
                        request: n,
                        setSlide: a
                    })]
                })
            }

            function k(e) {
                var t = e.request,
                    n = e.finish,
                    i = e.setSlide,
                    s = e.onClose,
                    a = e.isSlideReady,
                    c = g(o.useState(!1), 2),
                    l = c[0],
                    d = c[1],
                    f = g(o.useState(null), 2),
                    p = f[0],
                    y = f[1],
                    _ = g(o.useState(""), 2),
                    E = _[0],
                    S = _[1],
                    v = o.useRef(null),
                    b = h.Z.Messages.TWO_FA_ENTER_BACKUP_LABEL,
                    O = h.Z.Messages.TWO_FA_BACKUP_CODE,
                    A = o.useCallback((function(e) {
                        S(e);
                        y(null)
                    }), [S, y]);
                o.useEffect((function() {
                    if (a) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }), [a]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "backup",
                            data: (t = E, t.replace(/-/g, ""))
                        }).catch((function(e) {
                            var t, n;
                            y(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }));
                        var t
                    },
                    children: [(0, r.jsx)(I, {
                        onClose: s
                    }), (0, r.jsx)(T, {
                        children: (0, r.jsxs)(u.FormItem, {
                            title: b,
                            children: [(0, r.jsx)(u.TextInput, {
                                inputRef: v,
                                onChange: A,
                                placeholder: O,
                                maxLength: 9,
                                minLength: 8,
                                value: E,
                                spellCheck: "false",
                                disabled: l
                            }), (0, r.jsx)(R, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: i,
                        showConfirm: !0,
                        disabled: E.length < 8,
                        submitting: l
                    })]
                })
            }

            function Z(e) {
                var t = e.request,
                    n = e.finish,
                    i = e.setSlide,
                    s = e.onClose,
                    a = e.isSlideReady,
                    c = g(o.useState(!1), 2),
                    l = c[0],
                    d = c[1],
                    f = g(o.useState(null), 2),
                    p = f[0],
                    y = f[1],
                    _ = g(o.useState(""), 2),
                    E = _[0],
                    S = _[1],
                    v = o.useRef(null);
                o.useEffect((function() {
                    if (a) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }), [a]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "totp",
                            data: E
                        }).catch((function(e) {
                            var t, n;
                            y(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }))
                    },
                    children: [(0, r.jsx)(I, {
                        onClose: s
                    }), (0, r.jsx)(T, {
                        children: (0, r.jsxs)(u.FormItem, {
                            title: h.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, r.jsx)(u.TextInput, {
                                inputRef: v,
                                onChange: S,
                                placeholder: h.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                maxLength: 6,
                                minLength: 6,
                                value: E,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: l
                            }), (0, r.jsx)(R, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: i,
                        showConfirm: !0,
                        disabled: 0 === E.length,
                        submitting: l
                    })]
                })
            }

            function L(e) {
                var t = e.request,
                    n = e.finish,
                    i = e.setSlide,
                    a = e.onClose,
                    c = e.isSlideReady,
                    l = g(o.useState(!1), 2),
                    d = l[0],
                    f = l[1],
                    y = g(o.useState(null), 2),
                    E = y[0],
                    S = y[1],
                    v = g(o.useState(!1), 2),
                    b = v[0],
                    O = v[1],
                    A = g(o.useState(null), 2),
                    m = A[0],
                    N = A[1],
                    M = g(o.useState(""), 2),
                    w = M[0],
                    k = M[1],
                    Z = o.useRef(null);
                o.useEffect((function() {
                    f(!0);
                    s.ZP.post({
                        url: p.ANM.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        S(e.body.phone)
                    })).catch((function(e) {
                        var t;
                        N(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    })).finally((function() {
                        f(!1)
                    }))
                }), [t.ticket]);
                o.useEffect((function() {
                    if (c) {
                        var e;
                        null === (e = Z.current) || void 0 === e || e.focus()
                    }
                }), [c]);
                var L = null == E ? h.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : h.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: E
                });
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        O(!0);
                        n({
                            mfaType: "sms",
                            data: w
                        }).catch((function(e) {
                            var t, n;
                            N(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            O(!1)
                        }))
                    },
                    children: [(0, r.jsx)(I, {
                        subtitle: L,
                        onClose: a
                    }), (0, r.jsx)(T, {
                        children: (0, r.jsxs)(u.FormItem, {
                            title: h.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, r.jsxs)("div", {
                                className: _().smsInputContainer,
                                children: [(0, r.jsx)(u.TextInput, {
                                    className: _().smsInput,
                                    inputRef: Z,
                                    onChange: k,
                                    placeholder: h.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: w,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: b
                                }), (0, r.jsx)(u.Button, {
                                    size: u.Button.Sizes.MEDIUM,
                                    submitting: d,
                                    onClick: function() {
                                        s.ZP.post({
                                            url: p.ANM.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then((function(e) {
                                            S(e.body.phone)
                                        })).catch((function(e) {
                                            var t;
                                            N(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        }))
                                    },
                                    children: h.Z.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, r.jsx)(R, {
                                error: m
                            })]
                        })
                    }), (0,
                        r.jsx)(C, {
                        request: t,
                        setSlide: i,
                        showConfirm: !0,
                        disabled: 0 === w.length,
                        submitting: b
                    })]
                })
            }

            function F(e) {
                var t = e.request,
                    n = e.finish,
                    i = e.setSlide,
                    s = e.onClose,
                    a = e.isSlideReady,
                    c = g(o.useState(!1), 2),
                    l = c[0],
                    d = c[1],
                    f = g(o.useState(null), 2),
                    p = f[0],
                    y = f[1],
                    _ = g(o.useState(""), 2),
                    E = _[0],
                    S = _[1],
                    v = o.useRef(null);
                o.useEffect((function() {
                    if (a) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }), [a]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "password",
                            data: E
                        }).catch((function(e) {
                            var t, n;
                            y(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }))
                    },
                    children: [(0, r.jsx)(I, {
                        onClose: s
                    }), (0, r.jsx)(T, {
                        children: (0, r.jsxs)(u.FormItem, {
                            title: h.Z.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, r.jsx)(u.TextInput, {
                                inputRef: v,
                                onChange: S,
                                value: E,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: l
                            }), (0, r.jsx)(R, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: i,
                        showConfirm: !0,
                        disabled: 0 === E.length,
                        submitting: l
                    })]
                })
            }

            function D(e) {
                var t = e.transitionState,
                    n = e.request,
                    o = e.finish,
                    i = e.onClose;
                return (0, r.jsx)(u.ModalRoot, {
                    transitionState: t,
                    size: u.ModalSize.SMALL,
                    "aria-label": h.Z.Messages.MFA_V2_HEADER,
                    children: (0, r.jsx)(P, {
                        request: n,
                        mfaFinish: o,
                        onClose: i,
                        onEarlyClose: i
                    })
                })
            }

            function P(e) {
                var t, n, i, s = e.request,
                    a = e.mfaFinish,
                    c = e.onEarlyClose,
                    l = e.onClose,
                    d = e.width,
                    f = void 0 === d ? 440 : d,
                    p = g(o.useState(null !== (n = null === (t = s.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : "select"), 2),
                    h = p[0],
                    y = p[1],
                    _ = g(o.useState(h), 2),
                    E = _[0],
                    S = _[1],
                    b = (i = v((function(e) {
                        var t, n;
                        return N(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    t = e.mfaType, n = e.data;
                                    return [4, a({
                                        mfaType: t,
                                        data: n,
                                        ticket: s.ticket
                                    })];
                                case 1:
                                    r.sent();
                                    null != l && l();
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    m = {
                        request: s,
                        finish: b,
                        setSlide: y,
                        onClose: c
                    };
                return (0, r.jsxs)(u.Slides, {
                    activeSlide: h,
                    width: f,
                    onSlideReady: S,
                    children: [(0, r.jsx)(u.Slide, {
                        id: "select",
                        children: (0, r.jsx)(M, O({}, m))
                    }), (0, r.jsx)(u.Slide, {
                        id: "webauthn",
                        children: (0, r.jsx)(w, O({}, m))
                    }), (0, r.jsx)(u.Slide, {
                        id: "totp",
                        children: (0, r.jsx)(Z, A(O({}, m), {
                            isSlideReady: "totp" === E
                        }))
                    }), (0, r.jsx)(u.Slide, {
                        id: "sms",
                        children: (0, r.jsx)(L, A(O({}, m), {
                            isSlideReady: "sms" === E
                        }))
                    }), (0, r.jsx)(u.Slide, {
                        id: "backup",
                        children: (0, r.jsx)(k, A(O({}, m), {
                            isSlideReady: "backup" === E
                        }))
                    }), (0, r.jsx)(u.Slide, {
                        id: "password",
                        children: (0, r.jsx)(F, A(O({}, m), {
                            isSlideReady: "password" === E
                        }))
                    })]
                })
            }

            function j(e, t, n) {
                (0, u.openModal)((function(n) {
                    return (0, r.jsx)(D, O({
                        finish: t,
                        request: e
                    }, n))
                }), {
                    onCloseCallback: function() {
                        n(new Error(h.Z.Messages.MFA_V2_CANCELED))
                    }
                })
            }
        },
        31914: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var h = !1,
                y = !1,
                _ = {},
                E = null;
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasConsented = function(e) {
                    return null != _[e] && _[e].consented
                };
                r.getAuthenticationConsentRequired = function() {
                    return E
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "fetchedConsents",
                    get: function() {
                        return h
                    }
                }, {
                    key: "receivedConsentsInConnectionOpen",
                    get: function() {
                        return y
                    }
                }]);
                return n
            }(r.ZP.Store);
            S.displayName = "ConsentStore";
            const v = new S(o.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.consents;
                    if (null != t) {
                        _ = c({}, _, t);
                        y = !0
                    }
                },
                UPDATE_CONSENTS: function(e) {
                    var t = e.consents;
                    _ = c({}, t);
                    h = !0
                },
                SET_CONSENT_REQUIRED: function(e) {
                    E = e.consentRequired
                },
                LOGOUT: function() {
                    E = null
                }
            })
        }
    }
]);