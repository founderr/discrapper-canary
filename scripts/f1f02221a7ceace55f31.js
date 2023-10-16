(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21391, 74871], {
        725349: (t, e, n) => {
            t.exports = n.p + "abff1f7f1f1ebe33261ce595c4613042.png"
        },
        844174: t => {
            t.exports = function(t, e, n, r) {
                for (var o = -1, i = null == t ? 0 : t.length; ++o < i;) {
                    var c = t[o];
                    e(r, c, n(c), t)
                }
                return r
            }
        },
        481119: (t, e, n) => {
            var r = n(989881);
            t.exports = function(t, e, n, o) {
                r(t, (function(t, r, i) {
                    e(o, t, n(t), i)
                }));
                return o
            }
        },
        789465: (t, e, n) => {
            var r = n(538777);
            t.exports = function(t, e, n) {
                "__proto__" == e && r ? r(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }
        },
        555189: (t, e, n) => {
            var r = n(844174),
                o = n(481119),
                i = n(267206),
                c = n(701469);
            t.exports = function(t, e) {
                return function(n, l) {
                    var u = c(n) ? r : o,
                        a = e ? e() : {};
                    return u(n, t, i(l, 2), a)
                }
            }
        },
        224350: (t, e, n) => {
            var r = n(789465),
                o = n(555189)((function(t, e, n) {
                    r(t, n, e)
                }));
            t.exports = o
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => o,
                xf: () => i,
                Ou: () => c
            });
            var r = n(744564);

            function o(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function c() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        396179: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                c = n(735885),
                l = n(2590);

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        u(t, e, n[e])
                    }))
                }
                return t
            }

            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(a({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: t,
                    subsection: e
                }, n));
                (0, c.jN)(l.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                p = n(652591),
                O = n(775173),
                S = n(488110),
                E = n(239620),
                y = n(473708);

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        d(t, e, n[e])
                    }))
                }
                return t
            }

            function b(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            const h = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    s(t, e, n)
                },
                init: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(_({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: e
                    }, n))
                },
                close: function() {
                    var t = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(_({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: e
                    }, n))
                },
                clearSubsection: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: t
                    })
                },
                clearScrollPosition: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: t
                    })
                },
                updateAccount: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: t
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(t, e) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var c = t.username,
                        u = t.email,
                        a = t.emailToken,
                        s = t.password,
                        f = t.avatar,
                        d = t.newPassword,
                        h = t.discriminator,
                        T = e.close;
                    return (0, S.Z)((function(t) {
                        var e = b(_({
                                username: c,
                                email: u,
                                email_token: a,
                                password: s,
                                avatar: f,
                                new_password: d
                            }, t), {
                                discriminator: null != h && "" !== h ? h : void 0
                            }),
                            n = o.Z.get(l.JkL),
                            i = (0, E.xJ)();
                        if (null != i && null != n) {
                            e.push_provider = i;
                            e.push_token = n
                        }
                        var p = o.Z.get(l.scU);
                        if (null != E.mv && null != p) {
                            e.push_voip_provider = E.mv;
                            e.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: l.ANM.ME,
                            oldFormErrors: !0,
                            body: e
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: y.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(t) {
                        var e = t.body,
                            r = e.token;
                        p.default.track(l.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, O.xR)(e.avatar)
                        });
                        delete e.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: e.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: e
                        });
                        null != d && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: e,
                            newPassword: d
                        });
                        null != s && null != d && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: e.id
                        });
                        T ? n.close() : n.submitComplete();
                        return t
                    }), (function(t) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        });
                        return t
                    }))
                }
            }
        },
        262393: (t, e, n) => {
            "use strict";
            n.d(e, {
                b: () => a
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function l(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            var a = function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    a = t.height,
                    s = void 0 === a ? 24 : a,
                    f = t.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = t.colorClass,
                    S = void 0 === O ? "" : O,
                    E = u(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            c(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "m6 7.683 6-3.667V12H6.222A11.187 11.187 0 0 1 6 9.782v-2.1Zm6 12.01V12h5.778A11.187 11.187 0 0 1 12 19.692ZM4.271 5.222A2.657 2.657 0 0 0 3 7.49v2.292a14.185 14.185 0 0 0 8.424 12.962c.367.163.785.163 1.152 0A14.185 14.185 0 0 0 21 9.782V7.49c0-.926-.482-1.784-1.271-2.267l-6.165-3.767a3 3 0 0 0-3.128 0L4.27 5.223Z",
                        clipRule: "evenodd",
                        className: S
                    })
                }))
            }
        },
        239620: (t, e, n) => {
            "use strict";
            n.d(e, {
                mv: () => i,
                xJ: () => c
            });
            var r, o = n(120415),
                i = null;

            function c() {
                return (0, o.Dt)(), null
            }! function(t) {
                t.REMINDER = "reminder";
                t.TOP_MESSAGE_PUSH = "top_messages_push";
                t.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        300177: (t, e, n) => {
            "use strict";
            n.d(e, {
                y: () => a
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function c(t, e, n, r, o, i, c) {
                try {
                    var l = t[i](c),
                        u = l.value
                } catch (t) {
                    n(t);
                    return
                }
                l.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function l(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function l(t) {
                            c(i, r, o, l, u, "next", t)
                        }

                        function u(t) {
                            c(i, r, o, l, u, "throw", t)
                        }
                        l(void 0)
                    }))
                }
            }
            var u = function(t, e) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = e.call(t, c)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function a() {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l((function() {
                    return u(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SAFETY_HUB_FETCH_START"
                                });
                                return [4, r.ZP.get({
                                    url: i.ANM.SAFETY_HUB
                                }).then((function(t) {
                                    var e = t.body,
                                        n = e.classifications,
                                        r = e.account_standing;
                                    o.Z.dispatch({
                                        type: "SAFETY_HUB_FETCH_SUCCESS",
                                        classifications: n,
                                        accountStanding: r
                                    })
                                })).catch((function(t) {
                                    var e, n;
                                    o.Z.dispatch({
                                        type: "SAFETY_HUB_FETCH_FAILURE",
                                        error: null !== (n = null == t || null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
                                    })
                                }))];
                            case 1:
                                t.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        120641: (t, e, n) => {
            "use strict";
            n.d(e, {
                Us: () => o,
                Sn: () => i
            });
            var r, o, i;
            ! function(t) {
                t[t.UNSPECIFIED = 0] = "UNSPECIFIED";
                t[t.UNKNOWN = 1] = "UNKNOWN";
                t[t.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY";
                t[t.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY";
                t[t.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE";
                t[t.HATE_SPEECH = 220] = "HATE_SPEECH";
                t[t.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS";
                t[t.ILLICIT_GOODS = 240] = "ILLICIT_GOODS";
                t[t.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING";
                t[t.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION";
                t[t.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW";
                t[t.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE"
            }(r || (r = {}));
            ! function(t) {
                t[t.BAN = 0] = "BAN";
                t[t.TEMP_BAN = 1] = "TEMP_BAN";
                t[t.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE";
                t[t.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION";
                t[t.USER_WARNING = 4] = "USER_WARNING";
                t[t.USER_SPAMMER = 5] = "USER_SPAMMER";
                t[t.CHANNEL_SPAM = 6] = "CHANNEL_SPAM";
                t[t.MESSAGE_SPAM = 7] = "MESSAGE_SPAM";
                t[t.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY";
                t[t.LIMITED_ACCESS = 9] = "LIMITED_ACCESS";
                t[t.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE";
                t[t.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL";
                t[t.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE";
                t[t.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL";
                t[t.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE";
                t[t.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS";
                t[t.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL"
            }(o || (o = {}));
            ! function(t) {
                t[t.ALL_GOOD = 100] = "ALL_GOOD";
                t[t.LIMITED = 200] = "LIMITED";
                t[t.VERY_LIMITED = 300] = "VERY_LIMITED";
                t[t.AT_RISK = 400] = "AT_RISK";
                t[t.SUSPENDED = 500] = "SUSPENDED"
            }(i || (i = {}))
        },
        572336: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var r = n(224350),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                l = n(120641);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function s(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var p = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
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
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var S = {},
                E = {
                    state: l.Sn.ALL_GOOD
                },
                y = !1,
                d = !1,
                _ = null;
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = O(n);

                function n() {
                    u(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFetching = function() {
                    return y
                };
                r.getClassifications = function() {
                    return Object.values(S)
                };
                r.getClassification = function(t) {
                    return S[t]
                };
                r.getAccountStanding = function() {
                    return E
                };
                r.getFetchError = function() {
                    return _
                };
                r.isInitialized = function() {
                    return d
                };
                return n
            }(i.ZP.Store);
            b.displayName = "SafetyHubStore";
            const h = new b(c.Z, {
                SAFETY_HUB_FETCH_START: function(t) {
                    y = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    var e = t.classifications,
                        n = t.accountStanding;
                    S = o()(e, "id");
                    E = n;
                    y = !1;
                    d = !0;
                    _ = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    var e = t.error;
                    y = !1;
                    d = !1;
                    _ = e
                },
                LOGOUT: function() {
                    y = !1;
                    S = {};
                    E = {
                        state: l.Sn.ALL_GOOD
                    }
                }
            })
        },
        580567: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => i
            });
            var r = n(202351),
                o = n(572336);

            function i() {
                return (0, r.e7)([o.Z], (function() {
                    return o.Z.getAccountStanding()
                }))
            }
        },
        588161: (t, e, n) => {
            "use strict";
            n.d(e, {
                YG: () => f,
                y9: () => p,
                KM: () => O
            });
            var r = n(667294),
                o = n(202351),
                i = n(102921),
                c = n(300177),
                l = n(572336);

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s() {
                return (0, o.Wu)([l.Z], (function() {
                    return l.Z.getClassifications()
                })).sort((function(t, e) {
                    return i.Z.extractTimestamp(e.id) - i.Z.extractTimestamp(t.id)
                }))
            }

            function f(t) {
                var e = a(r.useState(!1), 2),
                    n = e[0],
                    i = e[1],
                    u = (0, o.e7)([l.Z], (function() {
                        return l.Z.getClassification(t)
                    }));
                r.useEffect((function() {
                    if (void 0 === u && !n) {
                        i(!0);
                        c.y()
                    }
                }), [t, u, n]);
                return u
            }

            function p() {
                var t = s(),
                    e = new Date;
                return t.filter((function(t) {
                    return new Date(t.max_expiration_time) > e
                }))
            }

            function O() {
                var t = s(),
                    e = new Date;
                return t.filter((function(t) {
                    return new Date(t.max_expiration_time) <= e
                }))
            }
        },
        136203: (t, e, n) => {
            "use strict";
            n.d(e, {
                e: () => i
            });
            var r = n(202351),
                o = n(572336);

            function i() {
                return (0,
                    r.e7)([o.Z], (function() {
                    return o.Z.isInitialized()
                }))
            }
        },
        225646: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(202351),
                o = n(572336);

            function i() {
                return (0, r.e7)([o.Z], (function() {
                    return o.Z.isFetching()
                }))
            }
        },
        521391: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => V
            });
            var r, o = n(785893),
                i = n(667294),
                c = n(304548),
                l = n(396179),
                u = n(300177),
                a = n(136203),
                s = n(225646),
                f = n(3219),
                p = n(250666),
                O = n(64875),
                S = n(189865),
                E = n(963659),
                y = n(136317),
                d = n(994655),
                _ = n(973323),
                b = n(652591),
                h = n(120641),
                T = n(580567),
                A = n(588161),
                v = n(507850),
                I = n(2590),
                g = n(473708),
                m = n(819713),
                N = n.n(m);

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function j(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function P(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return C(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = (j(r = {}, h.Us.BAN, [f.Z, N().redIcon]), j(r, h.Us.GLOBAL_QUARANTINE, [_.Z, N().warningIcon]), j(r, h.Us.DISABLE_SUSPICIOUS_ACTIVITY, [_.Z, N().warningIcon]), j(r, h.Us.LIMITED_ACCESS, [O.Z, N().warningIcon]), j(r, h.Us.REQUIRE_VERIFICATION, [_.Z, N().warningIcon]), j(r, h.Us.TEMP_BAN, [O.Z, N().warningIcon]),
                    j(r, h.Us.USER_MESSAGE_REMOVAL, [d.Z, N().redIcon]), j(r, h.Us.USER_SPAMMER, [_.Z, N().warningIcon]), j(r, h.Us.USER_USERNAME_MANGLE, [S.Z, N().warningIcon]), j(r, h.Us.USER_WARNING, [p.Z, N().warningIcon]), r),
                L = _.Z,
                R = function(t) {
                    var e = t.classificationTypeText;
                    return (0, o.jsx)("div", {
                        className: N().classificationHeader,
                        children: (0, o.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
                                classification_type: e,
                                classificationHook: function(t, e) {
                                    return (0, o.jsx)("strong", {
                                        children: t
                                    }, e)
                                }
                            })
                        })
                    })
                },
                U = function(t) {
                    var e = t.actions;
                    return 0 === e.filter((function(t) {
                        return t.descriptions.length > 0
                    })).length ? null : (0, o.jsxs)("div", {
                        className: N().classificationActionsTakenContainer,
                        children: [(0, o.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, o.jsx)("div", {
                            className: N().classificationActionsTakenCard,
                            children: e.map((function(t) {
                                return (0, o.jsx)(D, {
                                    action: t
                                }, t.id)
                            }))
                        })]
                    })
                },
                D = function(t) {
                    var e = t.action,
                        n = P(e.action_type in w ? w[e.action_type] : [L, N().warningIcon], 2),
                        r = n[0],
                        i = n[1];
                    return (0, o.jsx)(o.Fragment, {
                        children: e.descriptions.map((function(t, e) {
                            return (0, o.jsxs)("div", {
                                className: N().classificationActionsTakenRow,
                                children: [(0, o.jsx)("div", {
                                    className: N().classificationActionsTakenRowIcon,
                                    children: (0, o.jsx)(r, {
                                        className: i,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, o.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: t
                                })]
                            }, e)
                        }))
                    })
                },
                x = function(t) {
                    var e = t.classificationTypeText,
                        n = t.policyExplainerLink;
                    return (0, o.jsxs)(c.Anchor, {
                        href: n,
                        className: N().classificationPolicyCard,
                        children: [(0, o.jsx)("div", {
                            className: N().classificationPolicyCardIcon,
                            children: (0, o.jsx)(E.Z, {
                                className: N().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, o.jsxs)("div", {
                            className: N().classificationPolicyDescriptionContainer,
                            children: [(0, o.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0,
                                o.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, o.jsx)("div", {
                            className: N().classificationPolicyLinkIcon,
                            children: (0, o.jsx)(y.Z, {
                                className: N().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                M = function(t) {
                    var e = t.tosLink,
                        n = t.communityGuidelinesLink,
                        r = t.appealLink,
                        i = t.classificationTypeText,
                        l = t.policyExplainerLink;
                    return (0, o.jsxs)("div", {
                        className: N().classificationActionExplanationContainer,
                        children: [(0, o.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, o.jsx)(c.Text, {
                            className: N().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, o.jsx)(x, {
                            classificationTypeText: i,
                            policyExplainerLink: l
                        }), (0, o.jsx)("div", {
                            className: N().classificationLetUsKnowContainer,
                            children: (0, o.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: r
                                })
                            })
                        })]
                    })
                },
                Z = function(t) {
                    return (0, o.jsxs)("div", {
                        className: N().classificationContainer,
                        children: [(0, o.jsx)(R, {
                            classificationTypeText: t.classificationTypeText
                        }), (0, o.jsx)(U, {
                            actions: t.actions
                        }), (0, o.jsx)(M, {
                            appealLink: t.appealLink,
                            communityGuidelinesLink: t.communityGuidelinesLink,
                            tosLink: t.tosLink,
                            classificationTypeText: t.classificationTypeText,
                            policyExplainerLink: t.policyExplainerLink
                        })]
                    })
                };
            const k = function(t) {
                var e = t.classificationId,
                    n = t.source,
                    r = (0, A.YG)(e),
                    c = (0, T.P)();
                i.useEffect((function() {
                    b.default.track(I.rMx.SAFETY_HUB_ACTION, {
                        action: v.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(e)],
                        source: n
                    })
                }), []);
                return null == r ? null : (0, o.jsx)(Z, {
                    actions: r.actions,
                    classificationTypeText: r.description,
                    tosLink: v.sQ.TOS_LINK,
                    communityGuidelinesLink: v.sQ.COMMUNITY_GUIDELINES,
                    appealLink: v.sQ.APPEALS_LINK,
                    policyExplainerLink: r.explainer_link
                })
            };
            var G = n(835813),
                B = n.n(G),
                H = n(725349),
                F = n.n(H);
            const V = function(t) {
                var e = t.transitionState,
                    n = t.onClose,
                    r = t.classificationId,
                    f = t.source,
                    p = (0, s.Z)(),
                    O = (0, a.e)();
                i.useEffect((function() {
                    O || u.y()
                }), [O]);
                return (0, o.jsxs)(c.ModalRoot, {
                    className: B().modalRoot,
                    transitionState: e,
                    children: [(0, o.jsxs)("div", {
                        className: B().modalHeader,
                        children: [(0, o.jsx)("img", {
                            className: B().image,
                            src: F(),
                            alt: ""
                        }), (0, o.jsx)(c.ModalCloseButton, {
                            className: B().modalClose,
                            onClick: n
                        })]
                    }), (0, o.jsx)(c.ModalContent, {
                        className: B().modalContent,
                        children: p ? (0, o.jsx)(c.Spinner, {}) : (0, o.jsx)(k, {
                            classificationId: r,
                            source: f
                        })
                    }), (0, o.jsx)(c.ModalFooter, {
                        children: (0, o.jsx)(c.Button, {
                            className: B().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: function() {
                                n();
                                l.Z.open(I.oAB.PRIVACY_AND_SAFETY, v.SU.SUPPORT)
                            },
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                        })
                    })]
                })
            }
        },
        223219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => Z
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                l = n(473903),
                u = n(2590);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        f(t, e, n[e])
                    }))
                }
                return t
            }

            function S(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function E(t, e) {
                E = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return E(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function d(t) {
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
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var _ = u.QZA.CLOSED,
                b = null,
                h = null,
                T = {},
                A = {},
                v = {},
                I = null,
                g = null,
                m = !1,
                N = !1,
                C = null,
                j = null,
                P = null,
                w = [],
                L = null,
                R = null;

            function U(t) {
                var e, n, r, o, i, c, a = l.default.getCurrentUser();
                if (null == a) return D();
                h = null !== (e = t.section) && void 0 !== e ? e : h;
                L = null !== (n = t.section) && void 0 !== n ? n : h;
                null != t.subsection && null != h && (T[h] = t.subsection);
                null != t.scrollPosition && null != h && (A[h] = t.scrollPosition);
                N = !!t.openWithoutBackstack;
                _ = u.QZA.OPEN;
                v = {};
                I = f({}, u.oAB.ACCOUNT, {
                    userId: a.id,
                    username: a.username,
                    discriminator: a.discriminator,
                    email: a.email,
                    avatar: a.avatar,
                    password: "",
                    newPassword: null,
                    claimed: a.isClaimed()
                });
                g = O({}, I);
                j = null !== (r = t.onClose) && void 0 !== r ? r : null;
                P = null !== (o = t.analyticsLocation) && void 0 !== o ? o : null;
                w = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [];
                R = null !== (c = t.impressionSource) && void 0 !== c ? c : null
            }

            function D() {
                _ = u.QZA.CLOSED;
                m = !1;
                I = null;
                L = null;
                g = null;
                b = null;
                h = null;
                T = {};
                A = {};
                j = null;
                P = null;
                w = [];
                R = null
            }

            function x() {
                _ = u.QZA.OPEN;
                v = {}
            }
            var M = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && E(t, e)
                }(n, t);
                var e = d(n);

                function n() {
                    a(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.hasChanges = function() {
                    return null != g && null != I && (!(!this.isOpen() && C !== u.cII.USER_SETTINGS) && !o().isEqual(g, I))
                };
                r.isOpen = function() {
                    return m
                };
                r.getPreviousSection = function() {
                    return b
                };
                r.getSection = function() {
                    return h
                };
                r.getSubsection = function() {
                    return null != h ? T[h] : null
                };
                r.getScrollPosition = function() {
                    return null != h ? A[h] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: _ === u.QZA.SUBMITTING,
                        section: h,
                        subsection: null != h ? T[h] : null,
                        scrollPosition: null != h ? A[h] : null,
                        settings: g,
                        errors: v,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: P,
                        analyticsLocations: w,
                        initialSection: L,
                        impressionSource: R
                    }
                };
                ! function(t, e, n) {
                    e && s(t.prototype, e);
                    n && s(t, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return j
                    }
                }]);
                return n
            }(i.ZP.Store);
            M.displayName = "UserSettingsModalStore";
            const Z = new M(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    m = !0;
                    U(t)
                },
                USER_SETTINGS_MODAL_INIT: U,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    _ = u.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    if (_ !== u.QZA.SUBMITTING) return !1;
                    _ = u.QZA.OPEN;
                    h = u.oAB.ACCOUNT;
                    var e;
                    v = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    b = h;
                    h = t.section;
                    P = null;
                    var e;
                    w = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [];
                    null != t.subsection && (T[h] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var e = t.forSection;
                    null != e ? delete T[e] : null != h && delete T[h]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var e = t.forSection;
                    null != e ? delete A[e] : null != h && delete A[h]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var e = t.settings;
                    null == g && (g = {});
                    var n = g[u.oAB.ACCOUNT];
                    g[u.oAB.ACCOUNT] = O({}, n, e)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: x,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = l.default.getCurrentUser();
                    x();
                    if (null != t) {
                        I = f({}, u.oAB.ACCOUNT, {
                            userId: t.id,
                            username: t.username,
                            discriminator: t.discriminator,
                            email: t.email,
                            avatar: t.avatar,
                            password: "",
                            newPassword: null,
                            claimed: t.isClaimed()
                        });
                        g = O({}, I)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    C = t.tab;
                    return null == h && C === u.cII.USER_SETTINGS && U({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        3219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function l(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function u(t) {
                var e = t.width,
                    n = void 0 === e ? 32 : e,
                    u = t.height,
                    a = void 0 === u ? 32 : u,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = l(t, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", c(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            i(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        d: "M7.25 1H4.75V7.25H7.25V1Z",
                        fill: f
                    }), (0, r.jsx)("path", {
                        d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
                        fill: f
                    })]
                }))
            }
        },
        250666: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function f(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function p(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    l = t.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = t.foreground,
                    O = p(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            s(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(O)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                        fill: u,
                        className: a
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    s = void 0 === o ? 24 : o,
                    f = t.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = t.colorClass,
                    S = void 0 === O ? "" : O,
                    E = a(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            l(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12.032 21.505c-.05.27-.269.495-.544.495H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .542-.043 1.073-.126 1.591-.019.117-.17.142-.229.04-1.163-2.027-4.127-2.027-5.29 0l-3.96 6.897a3.071 3.071 0 0 0-.363.977Zm6.057-6.878c.395-.688 1.427-.688 1.822 0l3.959 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.465 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: S
                    })
                }))
            }))
        },
        963659: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(262393),
                c = n(633878);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = t.foreground,
                    O = a(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            l(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(O)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    })
                }))
            }), i.b)
        }
    }
]);