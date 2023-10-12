"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51388], {
        130671: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(281110),
                o = n(744564),
                u = n(694444),
                c = n(488110),
                i = n(2590),
                a = n(473708);

            function s(e, t, n, r, o, u, c) {
                try {
                    var i = e[u](c),
                        a = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            s(u, r, o, c, i, "next", e)
                        }

                        function i(e) {
                            s(u, r, o, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, r, o, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function i(u) {
                    return function(i) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0,
                                    o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            c.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(u);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                u = t.call(e, c)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, i])
                    }
                }
            };

            function p(e, t) {
                o.Z.dispatch({
                    type: "MFA_SMS_TOGGLE"
                });
                return r.ZP.post({
                    url: e,
                    body: {
                        password: t
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    o.Z.dispatch({
                        type: "MFA_SMS_TOGGLE_COMPLETE"
                    });
                    return e
                }), (function(e) {
                    o.Z.dispatch({
                        type: "MFA_SMS_TOGGLE_COMPLETE"
                    });
                    throw e
                }))
            }
            const y = {
                enableMFAStart: function(e) {
                    return f((function() {
                        return l(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.post({
                                        url: i.ANM.MFA_TOTP_ENABLE,
                                        body: {
                                            password: e
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    return [2, t.sent().body]
                            }
                        }))
                    }))()
                },
                verifyEmailCode: function(e) {
                    return f((function() {
                        return l(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.post({
                                        url: i.ANM.MFA_TOTP_ENABLE_VERIFY,
                                        body: {
                                            code: e
                                        }
                                    })];
                                case 1:
                                    return [2, t.sent().body]
                            }
                        }))
                    }))()
                },
                resendEmailCode: function(e) {
                    return r.ZP.post({
                        url: i.ANM.MFA_TOTP_ENABLE_RESEND,
                        body: {
                            password: e
                        }
                    })
                },
                setEmailToken: function(e) {
                    o.Z.dispatch({
                        type: "MFA_ENABLE_EMAIL_TOKEN",
                        token: e
                    })
                },
                enable: function(e) {
                    var t = e.password,
                        n = e.code,
                        u = e.secret,
                        c = e.emailToken;
                    return r.ZP.post({
                        url: i.ANM.MFA_TOTP_ENABLE,
                        body: {
                            code: n,
                            secret: u,
                            password: t,
                            email_token: c
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        return o.Z.dispatch({
                            type: "MFA_ENABLE_SUCCESS",
                            token: e.body.token,
                            codes: e.body.backup_codes
                        })
                    }))
                },
                disable: function() {
                    (0, c.Z)((function(e) {
                        return r.ZP.post({
                            url: i.ANM.MFA_TOTP_DISABLE,
                            body: e,
                            oldFormErrors: !0
                        })
                    }), {
                        checkEnabled: !0,
                        modalProps: {
                            title: a.Z.Messages.TWO_FA_DISABLE,
                            actionText: a.Z.Messages.TWO_FA_REMOVE
                        }
                    }).then((function(e) {
                        var t = e.body.token;
                        return o.Z.dispatch({
                            type: "MFA_DISABLE_SUCCESS",
                            token: t
                        })
                    }))
                },
                enableSMS: function(e) {
                    return p(i.ANM.MFA_SMS_ENABLE, e)
                },
                disableSMS: function(e) {
                    return p(i.ANM.MFA_SMS_DISABLE, e)
                },
                sendMFABackupCodesVerificationKeyEmail: function(e) {
                    return r.ZP.post({
                        url: i.ANM.MFA_SEND_VERIFICATION_KEY,
                        body: {
                            password: e
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        return o.Z.dispatch({
                            type: "MFA_SEND_VERIFICATION_KEY",
                            nonces: {
                                viewNonce: e.body.nonce,
                                regenerateNonce: e.body.regenerate_nonce
                            }
                        })
                    }), (function(e) {
                        throw e
                    }))
                },
                confirmViewBackupCodes: function(e, t) {
                    var n = u.Z.getNonces(),
                        c = n.viewNonce,
                        a = n.regenerateNonce,
                        s = t ? a : c;
                    return r.ZP.post({
                        url: i.ANM.MFA_CODES_VERIFICATION,
                        body: {
                            key: e,
                            nonce: s,
                            regenerate: t
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        return o.Z.dispatch({
                            type: "MFA_VIEW_BACKUP_CODES",
                            codes: t.body.backup_codes,
                            key: e
                        })
                    }), (function(e) {
                        throw e
                    }))
                },
                clearBackupCodes: function() {
                    o.Z.dispatch({
                        type: "MFA_CLEAR_BACKUP_CODES"
                    })
                }
            }
        },
        197088: (e, t, n) => {
            n.d(t, {
                j: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-07_mfa_email_verification",
                label: "Safety Experience Mfa Email Verification",
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

            function o() {
                return r.getCurrentConfig({
                    location: "41ef90_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        751388: (e, t, n) => {
            n.d(t, {
                Yn: () => k,
                ZP: () => I
            });
            var r = n(785893),
                o = n(667294),
                u = n(165695),
                c = n(304548),
                i = n(130671),
                a = n(197088),
                s = n(2590),
                f = n(473708);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, o, u, c) {
                try {
                    var i = e[u](c),
                        a = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            p(u, r, o, c, i, "next", e)
                        }

                        function i(e) {
                            p(u, r, o, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function b() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return !0
                } catch (e) {
                    return !1
                }
            }

            function d(e, t, n) {
                d = b() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    n && A(o, n.prototype);
                    return o
                };
                return d.apply(null, arguments)
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        u = Object.keys(e);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function S(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            c = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                M = function(e) {
                    if (null === e || !(n = e, -1 !== Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return d(e, arguments, E(this).constructor)
                    }
                    r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return A(r, e)
                };
                return M(e)
            }

            function P(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var g = function(e, t) {
                var n, r, o, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function i(u) {
                    return function(i) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            c.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(u);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                u = t.call(e, c)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, i])
                    }
                }
            };
            M(Error);

            function C(e) {
                var t = e.onError,
                    n = e.onSuccess,
                    c = e.PasswordConfirm,
                    a = O(e, ["onError", "onSuccess", "PasswordConfirm"]),
                    l = w(o.useState(""), 2),
                    p = l[0],
                    y = l[1];
                return (0, r.jsx)(c, v(_({}, a), {
                    handleSubmit: function(e) {
                        return i.Z.enableMFAStart(e)
                    },
                    onError: function(e) {
                        if (function(e) {
                                return "object" == typeof e && null != e && (0, u.nr)(e, "code") && "number" == typeof e.code ? e.code : 0
                            }(e) === s.evJ.MFA_INVALID_SECRET) {
                            n(p);
                            a.onClose()
                        } else t(e)
                    },
                    onPasswordChange: y,
                    title: f.Z.Messages.TWO_FA_ENABLE,
                    actionText: f.Z.Messages.CONTINUE,
                    skipErrorMsgAbortCode: s.evJ.MFA_INVALID_SECRET
                }))
            }

            function T() {
                return new Promise((function(e, t) {
                    (0, c.openModalLazy)(y((function() {
                        var o, u;
                        return g(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(75651)]).then(n.bind(n, 975651))];
                                case 1:
                                    o = c.sent(), u = o.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(C, v(_({}, n), {
                                            onSuccess: e,
                                            onError: t,
                                            PasswordConfirm: u
                                        }))
                                    }]
                            }
                        }))
                    })))
                }))
            }

            function F(e, t) {
                return new Promise((function(o) {
                    (0, c.openModalLazy)(y((function() {
                        var u, c;
                        return g(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(1653), n.e(73356)]).then(n.bind(n, 173356))];
                                case 1:
                                    u = i.sent(), c = u.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(c, v(_({}, n), {
                                            password: e,
                                            emailToken: t,
                                            handleEnableMFASuccess: o
                                        }))
                                    }]
                            }
                        }))
                    })))
                }))
            }

            function k() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return new Promise((function(t) {
                    (0, c.openModalLazy)(y((function() {
                        var t, o;
                        return g(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(11177), n.e(86651)]).then(n.bind(n, 286651))];
                                case 1:
                                    t = u.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(o, v(_({}, t), {
                                            isTotp: e
                                        }))
                                    }]
                            }
                        }))
                    })), {
                        onCloseCallback: t,
                        onCloseRequest: s.VqG
                    })
                }))
            }

            function N(e) {
                return new Promise((function(t) {
                    (0, c.openModalLazy)(y((function() {
                        var o, u;
                        return g(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(84715)]).then(n.bind(n, 884715))];
                                case 1:
                                    o = c.sent(), u = o.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(u, v(_({}, n), {
                                            onFormSubmit: (o = y((function(e) {
                                                return g(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, i.Z.verifyEmailCode(e)];
                                                        case 1:
                                                            return [2, t.sent()]
                                                    }
                                                }))
                                            })), function(e) {
                                                return o.apply(this, arguments)
                                            }),
                                            onResend: y((function() {
                                                return g(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, i.Z.resendEmailCode(e)];
                                                        case 1:
                                                            t.sent();
                                                            return [2]
                                                    }
                                                }))
                                            })),
                                            onSuccess: t,
                                            headerText: f.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                                            confirmButtonText: f.Z.Messages.NEXT
                                        }));
                                        var o
                                    }]
                            }
                        }))
                    })))
                }))
            }

            function j() {
                return (j = y((function() {
                    var e, t;
                    return g(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, T()];
                            case 1:
                                e = n.sent();
                                return (0, a.j)() ? [4, N(e)] : [3, 4];
                            case 2:
                                t = n.sent();
                                return [4, F(e, null == t ? void 0 : t.token)];
                            case 3:
                                n.sent();
                                return [3, 6];
                            case 4:
                                return [4, F(e)];
                            case 5:
                                n.sent();
                                n.label = 6;
                            case 6:
                                return [4, k()];
                            case 7:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            const I = {
                enableMFA: function() {
                    return j.apply(this, arguments)
                }
            }
        },
        694444: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(496486),
                o = n.n(r),
                u = n(541554),
                c = n(202351),
                i = n(744564);

            function a(e, t) {
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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function l(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = !1,
                h = [],
                E = "",
                _ = "",
                v = !1,
                O = {
                    viewNonce: "",
                    regenerateNonce: ""
                };
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
                    t && p(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getVerificationKey = function() {
                    return E
                };
                r.getBackupCodes = function() {
                    return h
                };
                r.getNonces = function() {
                    return O
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "togglingSMS",
                    get: function() {
                        return d
                    }
                }, {
                    key: "emailToken",
                    get: function() {
                        return _
                    }
                }, {
                    key: "hasSeenBackupPrompt",
                    get: function() {
                        return v
                    }
                }]);
                return n
            }(c.ZP.Store);
            S.displayName = "MFAStore";
            const A = new S(i.Z, {
                MFA_ENABLE_SUCCESS: function(e) {
                    var t = e.token,
                        n = e.codes;
                    void 0 !== t && u.Z.setToken(t);
                    h = n
                },
                MFA_ENABLE_EMAIL_TOKEN: function(e) {
                    var t = e.token;
                    _ = t
                },
                MFA_DISABLE_SUCCESS: function(e) {
                    var t = e.token;
                    u.Z.setToken(t)
                },
                MFA_SMS_TOGGLE: function() {
                    d = !0
                },
                MFA_SMS_TOGGLE_COMPLETE: function() {
                    d = !1
                },
                MFA_CLEAR_BACKUP_CODES: function() {
                    h = []
                },
                MFA_VIEW_BACKUP_CODES: function(e) {
                    var t = e.codes,
                        n = e.key;
                    h = o().sortBy(t, "code");
                    E = n
                },
                MFA_SEND_VERIFICATION_KEY: function(e) {
                    var t = e.nonces;
                    O = t
                },
                MFA_SEEN_BACKUP_CODE_PROMPT: function() {
                    v = !0
                }
            })
        }
    }
]);