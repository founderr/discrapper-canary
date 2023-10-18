(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21391, 74871], {
        725349: (t, e, n) => {
            t.exports = n.p + "ba5a7a6ae03572cf6b7dfa5d87700868.png"
        },
        844174: t => {
            t.exports = function(t, e, n, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var c = t[i];
                    e(r, c, n(c), t)
                }
                return r
            }
        },
        481119: (t, e, n) => {
            var r = n(989881);
            t.exports = function(t, e, n, i) {
                r(t, (function(t, r, o) {
                    e(i, t, n(t), o)
                }));
                return i
            }
        },
        555189: (t, e, n) => {
            var r = n(844174),
                i = n(481119),
                o = n(267206),
                c = n(701469);
            t.exports = function(t, e) {
                return function(n, a) {
                    var s = c(n) ? r : i,
                        l = e ? e() : {};
                    return s(n, t, o(a, 2), l)
                }
            }
        },
        224350: (t, e, n) => {
            var r = n(789465),
                i = n(555189)((function(t, e, n) {
                    r(t, n, e)
                }));
            t.exports = i
        },
        300177: (t, e, n) => {
            "use strict";
            n.d(e, {
                y: () => l
            });
            var r = n(281110),
                i = n(744564),
                o = n(2590);

            function c(t, e, n, r, i, o, c) {
                try {
                    var a = t[o](c),
                        s = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(s) : Promise.resolve(s).then(r, i)
            }

            function a(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            c(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            c(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var s = function(t, e) {
                var n, r, i, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            c.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && c.label < i[1]) {
                                            c.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2];
                                            c.ops.push(o);
                                            break
                                        }
                                        i[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                o = e.call(t, c)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function l() {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = a((function() {
                    return s(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SAFETY_HUB_FETCH_START"
                                });
                                return [4, r.ZP.get({
                                    url: o.ANM.SAFETY_HUB
                                }).then((function(t) {
                                    var e = t.body,
                                        n = e.classifications,
                                        r = e.account_standing;
                                    i.Z.dispatch({
                                        type: "SAFETY_HUB_FETCH_SUCCESS",
                                        classifications: n,
                                        accountStanding: r
                                    })
                                })).catch((function(t) {
                                    var e, n;
                                    i.Z.dispatch({
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
                Sn: () => o,
                Us: () => i
            });
            var r, i, o;
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
            }(i || (i = {}));
            ! function(t) {
                t[t.ALL_GOOD = 100] = "ALL_GOOD";
                t[t.LIMITED = 200] = "LIMITED";
                t[t.VERY_LIMITED = 300] = "VERY_LIMITED";
                t[t.AT_RISK = 400] = "AT_RISK";
                t[t.SUSPENDED = 500] = "SUSPENDED"
            }(o || (o = {}))
        },
        572336: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => A
            });
            var r = n(224350),
                i = n.n(r),
                o = n(202351),
                c = n(744564),
                a = n(120641);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function u(t, e) {
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

            function E(t) {
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
                    var n, r = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var O = {},
                y = {
                    state: a.Sn.ALL_GOOD
                },
                d = !1,
                S = !1,
                I = null;
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
                var e = E(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFetching = function() {
                    return d
                };
                r.getClassifications = function() {
                    return Object.values(O)
                };
                r.getClassification = function(t) {
                    return O[t]
                };
                r.getAccountStanding = function() {
                    return y
                };
                r.getFetchError = function() {
                    return I
                };
                r.isInitialized = function() {
                    return S
                };
                return n
            }(o.ZP.Store);
            b.displayName = "SafetyHubStore";
            const A = new b(c.Z, {
                SAFETY_HUB_FETCH_START: function(t) {
                    d = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    var e = t.classifications,
                        n = t.accountStanding;
                    O = i()(e, "id");
                    y = n;
                    d = !1;
                    S = !0;
                    I = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    var e = t.error;
                    d = !1;
                    S = !1;
                    I = e
                },
                LOGOUT: function() {
                    d = !1;
                    O = {};
                    y = {
                        state: a.Sn.ALL_GOOD
                    }
                }
            })
        },
        580567: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => o
            });
            var r = n(202351),
                i = n(572336);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getAccountStanding()
                }))
            }
        },
        588161: (t, e, n) => {
            "use strict";
            n.d(e, {
                KM: () => E,
                YG: () => f,
                y9: () => p
            });
            var r = n(667294),
                i = n(202351),
                o = n(102921),
                c = n(300177),
                a = n(572336);

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return s(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u() {
                return (0, i.Wu)([a.Z], (function() {
                    return a.Z.getClassifications()
                })).sort((function(t, e) {
                    return o.Z.extractTimestamp(e.id) - o.Z.extractTimestamp(t.id)
                }))
            }

            function f(t) {
                var e = l(r.useState(!1), 2),
                    n = e[0],
                    o = e[1],
                    s = (0, i.e7)([a.Z], (function() {
                        return a.Z.getClassification(t)
                    }));
                r.useEffect((function() {
                    if (void 0 === s && !n) {
                        o(!0);
                        c.y()
                    }
                }), [t, s, n]);
                return s
            }

            function p() {
                var t = u(),
                    e = new Date;
                return t.filter((function(t) {
                    return new Date(t.max_expiration_time) > e
                }))
            }

            function E() {
                var t = u(),
                    e = new Date;
                return t.filter((function(t) {
                    return new Date(t.max_expiration_time) <= e
                }))
            }
        },
        136203: (t, e, n) => {
            "use strict";
            n.d(e, {
                e: () => o
            });
            var r = n(202351),
                i = n(572336);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.isInitialized()
                }))
            }
        },
        225646: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(202351),
                i = n(572336);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.isFetching()
                }))
            }
        },
        521391: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => V
            });
            var r, i = n(785893),
                o = n(667294),
                c = n(70418),
                a = n(396179),
                s = n(300177),
                l = n(136203),
                u = n(225646),
                f = n(3219),
                p = n(250666),
                E = n(64875),
                O = n(189865),
                y = n(963659),
                d = n(136317),
                S = n(994655),
                I = n(155830),
                b = n(652591),
                A = n(120641),
                _ = n(580567),
                h = n(588161),
                T = n(507850),
                v = n(2590),
                g = n(473708),
                C = n(819713),
                m = n.n(C);

            function N(t, e) {
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

            function L(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return N(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = (j(r = {}, A.Us.BAN, [f.Z, m().redIcon]), j(r, A.Us.GLOBAL_QUARANTINE, [I.Z, m().warningIcon]), j(r, A.Us.DISABLE_SUSPICIOUS_ACTIVITY, [I.Z, m().warningIcon]), j(r, A.Us.LIMITED_ACCESS, [E.Z, m().warningIcon]), j(r, A.Us.REQUIRE_VERIFICATION, [I.Z, m().warningIcon]), j(r, A.Us.TEMP_BAN, [E.Z, m().warningIcon]), j(r, A.Us.USER_MESSAGE_REMOVAL, [S.Z, m().redIcon]), j(r, A.Us.USER_SPAMMER, [I.Z, m().warningIcon]), j(r, A.Us.USER_USERNAME_MANGLE, [O.Z, m().warningIcon]), j(r, A.Us.USER_WARNING, [p.Z, m().warningIcon]), r),
                x = I.Z,
                P = function(t) {
                    var e = t.classificationTypeText;
                    return (0, i.jsx)("div", {
                        className: m().classificationHeader,
                        children: (0, i.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: e,
                                classificationHook: function(t, e) {
                                    return (0, i.jsx)("strong", {
                                        children: t
                                    }, e)
                                }
                            })
                        })
                    })
                },
                R = function(t) {
                    var e = t.actions;
                    return 0 === e.filter((function(t) {
                        return t.descriptions.length > 0
                    })).length ? null : (0, i.jsxs)("div", {
                        className: m().classificationActionsTakenContainer,
                        children: [(0, i.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: m().classificationActionsTakenCard,
                            children: e.map((function(t) {
                                return (0, i.jsx)(U, {
                                    action: t
                                }, t.id)
                            }))
                        })]
                    })
                },
                U = function(t) {
                    var e = t.action,
                        n = L(e.action_type in w ? w[e.action_type] : [x, m().warningIcon], 2),
                        r = n[0],
                        o = n[1];
                    return (0, i.jsx)(i.Fragment, {
                        children: e.descriptions.map((function(t, e) {
                            return (0, i.jsxs)("div", {
                                className: m().classificationActionsTakenRow,
                                children: [(0, i.jsx)("div", {
                                    className: m().classificationActionsTakenRowIcon,
                                    children: (0, i.jsx)(r, {
                                        className: o,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: t
                                })]
                            }, e)
                        }))
                    })
                },
                D = function(t) {
                    var e = t.classificationTypeText,
                        n = t.policyExplainerLink;
                    return (0, i.jsxs)(c.Anchor, {
                        href: n,
                        className: m().classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: m().classificationPolicyCardIcon,
                            children: (0, i.jsx)(y.Z, {
                                className: m().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, i.jsxs)("div", {
                            className: m().classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: m().classificationPolicyLinkIcon,
                            children: (0, i.jsx)(d.Z, {
                                className: m().arrowIcon,
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
                        o = t.classificationTypeText,
                        a = t.policyExplainerLink;
                    return (0, i.jsxs)("div", {
                        className: m().classificationActionExplanationContainer,
                        children: [(0, i.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(c.Text, {
                            className: m().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(D, {
                            classificationTypeText: o,
                            policyExplainerLink: a
                        }), (0, i.jsx)("div", {
                            className: m().classificationLetUsKnowContainer,
                            children: (0, i.jsx)(c.Text, {
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
                    return (0, i.jsxs)("div", {
                        className: m().classificationContainer,
                        children: [(0, i.jsx)(P, {
                            classificationTypeText: t.classificationTypeText
                        }), (0, i.jsx)(R, {
                            actions: t.actions
                        }), (0, i.jsx)(M, {
                            appealLink: t.appealLink,
                            communityGuidelinesLink: t.communityGuidelinesLink,
                            tosLink: t.tosLink,
                            classificationTypeText: t.classificationTypeText,
                            policyExplainerLink: t.policyExplainerLink
                        })]
                    })
                };
            const H = function(t) {
                var e = t.classificationId,
                    n = t.source,
                    r = (0, h.YG)(e),
                    c = (0, _.P)();
                o.useEffect((function() {
                    b.default.track(v.rMx.SAFETY_HUB_ACTION, {
                        action: T.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(e)],
                        source: n
                    })
                }), []);
                return null == r ? null : (0, i.jsx)(Z, {
                    actions: r.actions,
                    classificationTypeText: r.description,
                    tosLink: T.sQ.TOS_LINK,
                    communityGuidelinesLink: T.sQ.COMMUNITY_GUIDELINES,
                    appealLink: T.sQ.APPEALS_LINK,
                    policyExplainerLink: r.explainer_link
                })
            };
            var k = n(835813),
                F = n.n(k),
                G = n(725349),
                B = n.n(G);
            const V = function(t) {
                var e = t.transitionState,
                    n = t.onClose,
                    r = t.classificationId,
                    f = t.source,
                    p = (0, u.Z)(),
                    E = (0, l.e)();
                o.useEffect((function() {
                    E || s.y()
                }), [E]);
                return (0, i.jsxs)(c.ModalRoot, {
                    className: F().modalRoot,
                    transitionState: e,
                    children: [(0, i.jsxs)("div", {
                        className: F().modalHeader,
                        children: [(0, i.jsx)("img", {
                            className: F().image,
                            src: B(),
                            alt: ""
                        }), (0, i.jsx)(c.ModalCloseButton, {
                            className: F().modalClose,
                            onClick: n
                        })]
                    }), (0, i.jsx)(c.ModalContent, {
                        className: F().modalContent,
                        children: p ? (0, i.jsx)(c.Spinner, {}) : (0, i.jsx)(H, {
                            classificationId: r,
                            source: f
                        })
                    }), (0, i.jsx)(c.ModalFooter, {
                        children: (0, i.jsx)(c.Button, {
                            className: F().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: function() {
                                n();
                                a.Z.open(v.oAB.PRIVACY_AND_SAFETY, T.SU.ACCOUNT_STANDING)
                            },
                            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                        })
                    })]
                })
            }
        },
        3219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(t, e, n) {
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

            function a(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function s(t) {
                var e = t.width,
                    n = void 0 === e ? 32 : e,
                    s = t.height,
                    l = void 0 === s ? 32 : s,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = a(t, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", c(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            o(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, i.Z)(p)), {
                    width: n,
                    height: l,
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
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                c = n(633878);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t, e) {
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
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
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
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            const E = (0, i.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    i = t.height,
                    o = void 0 === i ? 24 : i,
                    a = t.color,
                    s = void 0 === a ? "currentColor" : a,
                    l = t.foreground,
                    E = p(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(t) {
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
                }({}, (0, c.Z)(E)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                        fill: s,
                        className: l
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    i = t.height,
                    u = void 0 === i ? 24 : i,
                    f = t.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    E = t.colorClass,
                    O = void 0 === E ? "" : E,
                    y = l(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            a(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12.032 21.505c-.05.27-.269.495-.544.495H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .542-.043 1.073-.126 1.591-.019.117-.17.142-.229.04-1.163-2.027-4.127-2.027-5.29 0l-3.96 6.897a3.071 3.071 0 0 0-.363.977Zm6.057-6.878c.395-.688 1.427-.688 1.822 0l3.959 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.465 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        963659: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(262393),
                c = n(633878);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t, e) {
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
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            const u = (0, i.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    i = t.height,
                    o = void 0 === i ? 24 : i,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = t.foreground,
                    E = l(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            a(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(E)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    })
                }))
            }), o.b)
        }
    }
]);