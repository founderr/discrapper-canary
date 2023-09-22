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
                return function(n, s) {
                    var a = c(n) ? r : o,
                        l = e ? e() : {};
                    return a(n, t, i(s, 2), l)
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
        262393: (t, e, n) => {
            "use strict";
            n.d(e, {
                b: () => l
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
            var l = function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    l = t.height,
                    u = void 0 === l ? 24 : l,
                    f = t.color,
                    O = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = t.colorClass,
                    E = void 0 === p ? "" : p,
                    d = a(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(t) {
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
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
                        fillRule: "evenodd",
                        d: "m6 7.683 6-3.667V12H6.222A11.187 11.187 0 0 1 6 9.782v-2.1Zm6 12.01V12h5.778A11.187 11.187 0 0 1 12 19.692ZM4.271 5.222A2.657 2.657 0 0 0 3 7.49v2.292a14.185 14.185 0 0 0 8.424 12.962c.367.163.785.163 1.152 0A14.185 14.185 0 0 0 21 9.782V7.49c0-.926-.482-1.784-1.271-2.267l-6.165-3.767a3 3 0 0 0-3.128 0L4.27 5.223Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
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
                Z: () => I
            });
            var r = n(224350),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                s = n(120641);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function u(t, e) {
                return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
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
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
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
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var E = {},
                d = {
                    state: s.Sn.ALL_GOOD
                },
                b = !1,
                y = !1;
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
                    e && f(t, e)
                }(n, t);
                var e = p(n);

                function n() {
                    a(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFetching = function() {
                    return b
                };
                r.getClassifications = function() {
                    return Object.values(E)
                };
                r.getClassification = function(t) {
                    return E[t]
                };
                r.getAccountStanding = function() {
                    return d
                };
                r.isInitialized = function() {
                    return y
                };
                r.__getLocalVars = function() {
                    return {
                        classifications: E,
                        accountStanding: d,
                        isFetching: b,
                        initialized: y
                    }
                };
                return n
            }(i.ZP.Store);
            S.displayName = "SafetyHubStore";
            const I = new S(c.Z, {
                SAFETY_HUB_FETCH_START: function(t) {
                    b = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    var e = t.classifications,
                        n = t.accountStanding;
                    E = o()(e, "id");
                    d = n;
                    b = !1;
                    y = !0
                },
                LOGOUT: function() {
                    b = !1;
                    E = {};
                    d = {
                        state: s.Sn.ALL_GOOD
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
                V: () => c,
                Y: () => s
            });
            var r = n(202351),
                o = n(102921),
                i = n(572336);

            function c() {
                return (0, r.Wu)([i.Z], (function() {
                    return i.Z.getClassifications()
                })).sort((function(t, e) {
                    return o.Z.extractTimestamp(e.id) - o.Z.extractTimestamp(t.id)
                }))
            }

            function s(t) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getClassification(t)
                }))
            }
        },
        521391: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => G
            });
            var r, o = n(785893),
                i = n(667294),
                c = n(882723),
                s = n(3219),
                a = n(250666),
                l = n(64875),
                u = n(155349),
                f = n(963659),
                O = n(136317),
                p = n(994655),
                E = n(973323),
                d = n(652591),
                b = n(120641),
                y = n(580567),
                S = n(588161),
                I = n(507850),
                A = n(2590),
                _ = n(473708),
                h = n(446774),
                g = n.n(h);

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            o = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return j(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = (v(r = {}, b.Us.BAN, [s.Z, g().redIcon]), v(r, b.Us.GLOBAL_QUARANTINE, [E.Z, g().warningIcon]), v(r, b.Us.DISABLE_SUSPICIOUS_ACTIVITY, [E.Z, g().warningIcon]), v(r, b.Us.LIMITED_ACCESS, [l.Z, g().warningIcon]), v(r, b.Us.REQUIRE_VERIFICATION, [E.Z, g().warningIcon]), v(r, b.Us.TEMP_BAN, [l.Z, g().warningIcon]), v(r, b.Us.USER_MESSAGE_REMOVAL, [p.Z, g().redIcon]), v(r, b.Us.USER_SPAMMER, [E.Z, g().warningIcon]), v(r, b.Us.USER_USERNAME_MANGLE, [u.Z, g().warningIcon]), v(r, b.Us.USER_WARNING, [a.Z, g().warningIcon]), r),
                N = E.Z,
                T = function(t) {
                    var e = t.classificationTypeText;
                    return (0, o.jsx)("div", {
                        className: g().classificationHeader,
                        children: (0, o.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
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
                w = function(t) {
                    var e = t.actions;
                    return 0 === e.filter((function(t) {
                        return t.descriptions.length > 0
                    })).length ? null : (0, o.jsxs)("div", {
                        className: g().classificationActionsTakenContainer,
                        children: [(0, o.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, o.jsx)("div", {
                            className: g().classificationActionsTakenCard,
                            children: e.map((function(t) {
                                return (0, o.jsx)(L, {
                                    action: t
                                }, t.id)
                            }))
                        })]
                    })
                },
                L = function(t) {
                    var e = t.action,
                        n = m(e.action_type in C ? C[e.action_type] : [N, g().warningIcon], 2),
                        r = n[0],
                        i = n[1];
                    return (0, o.jsx)(o.Fragment, {
                        children: e.descriptions.map((function(t, e) {
                            return (0, o.jsxs)("div", {
                                className: g().classificationActionsTakenRow,
                                children: [(0, o.jsx)("div", {
                                    className: g().classificationActionsTakenRowIcon,
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
                P = function(t) {
                    var e = t.classificationTypeText;
                    return (0, o.jsxs)("div", {
                        className: g().classificationPolicyCard,
                        children: [(0, o.jsx)("div", {
                            className: g().classificationPolicyCardIcon,
                            children: (0, o.jsx)(f.Z, {
                                className: g().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, o.jsxs)("div", {
                            className: g().classificationPolicyDescriptionContainer,
                            children: [(0, o.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, o.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, o.jsx)("div", {
                            className: g().classificationPolicyLinkIcon,
                            children: (0, o.jsx)(O.Z, {
                                className: g().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                x = function(t) {
                    var e = t.tosLink,
                        n = t.communityGuidelinesLink,
                        r = t.appealLink,
                        i = t.classificationTypeText;
                    return (0,
                        o.jsxs)("div", {
                        className: g().classificationActionExplanationContainer,
                        children: [(0, o.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, o.jsx)(c.Text, {
                            className: g().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, o.jsx)(P, {
                            classificationTypeText: i
                        }), (0, o.jsx)("div", {
                            className: g().classificationLetUsKnowContainer,
                            children: (0, o.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: _.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: r
                                })
                            })
                        })]
                    })
                },
                R = function(t) {
                    return (0, o.jsxs)("div", {
                        className: g().classificationContainer,
                        children: [(0, o.jsx)(T, {
                            classificationTypeText: t.classificationTypeText
                        }), (0, o.jsx)(w, {
                            actions: t.actions
                        }), (0, o.jsx)(x, {
                            appealLink: t.appealLink,
                            communityGuidelinesLink: t.communityGuidelinesLink,
                            tosLink: t.tosLink,
                            classificationTypeText: t.classificationTypeText
                        })]
                    })
                };
            const D = function(t) {
                var e = t.classificationId,
                    n = t.source,
                    r = (0, S.Y)(e),
                    c = (0, y.P)();
                i.useEffect((function() {
                    d.default.track(A.rMx.SAFETY_HUB_ACTION, {
                        action: I.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(e)],
                        source: n
                    })
                }), []);
                return null == r ? null : (0, o.jsx)(R, {
                    actions: r.actions,
                    classificationTypeText: r.description,
                    tosLink: I.sQ.TOS_LINK,
                    communityGuidelinesLink: I.sQ.COMMUNITY_GUIDELINES,
                    appealLink: I.sQ.APPEALS_LINK
                })
            };
            var U = n(470762),
                M = n.n(U),
                Z = n(725349),
                H = n.n(Z);
            const G = function(t) {
                var e = t.transitionState,
                    n = t.onClose,
                    r = t.classificationId,
                    i = t.source;
                return (0, o.jsxs)(c.ModalRoot, {
                    className: M().modalRoot,
                    transitionState: e,
                    children: [(0, o.jsxs)("div", {
                        className: M().modalHeader,
                        children: [(0, o.jsx)("img", {
                            className: M().image,
                            src: H(),
                            alt: ""
                        }), (0, o.jsx)(c.ModalCloseButton, {
                            className: M().modalClose,
                            onClick: n
                        })]
                    }), (0, o.jsx)(c.ModalContent, {
                        className: M().modalContent,
                        children: (0, o.jsx)(D, {
                            classificationId: r,
                            source: i
                        })
                    }), (0, o.jsx)(c.ModalFooter, {
                        children: (0, o.jsx)(c.Button, {
                            className: M().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: n,
                            children: _.Z.Messages.CLOSE
                        })
                    })]
                })
            }
        },
        3219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
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

            function s(t, e) {
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

            function a(t) {
                var e = t.width,
                    n = void 0 === e ? 32 : e,
                    a = t.height,
                    l = void 0 === a ? 32 : a,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    O = s(t, ["width", "height", "color"]);
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
                }({}, (0, o.Z)(O)), {
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
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t, e) {
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

            function O(t, e) {
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
            const p = (0, o.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    s = t.color,
                    a = void 0 === s ? "currentColor" : s,
                    l = t.foreground,
                    p = O(t, ["width", "height", "color", "foreground"]);
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
                }({}, (0, c.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                        fill: a,
                        className: l
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    u = void 0 === o ? 24 : o,
                    f = t.color,
                    O = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = t.colorClass,
                    E = void 0 === p ? "" : p,
                    d = l(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(t) {
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
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
                        fillRule: "evenodd",
                        d: "M22 12c0 5.523-4.477 10-10 10H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-8.562-4.941-.38 6.443a1.06 1.06 0 0 1-2.117 0l-.379-6.443A1 1 0 0 1 11.56 6h.88a1 1 0 0 1 .998 1.059Zm-.188 9.691a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
                        clipRule: "evenodd",
                        className: E
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
                o = (n(667294), n(450520)),
                i = n(262393),
                c = n(633878);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t, e) {
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
            const u = (0, o.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    O = t.foreground,
                    p = l(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(t) {
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
                }({}, (0, c.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: O,
                        fill: f,
                        d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    })
                }))
            }), i.b)
        }
    }
]);