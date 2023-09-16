(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21391, 74871], {
        725349: (t, e, n) => {
            t.exports = n.p + "abff1f7f1f1ebe33261ce595c4613042.png"
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
        120641: (t, e, n) => {
            "use strict";
            n.d(e, {
                Us: () => i,
                Sn: () => o
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
                Z: () => _
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
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
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
            var E = function(t) {
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
                    var n, r = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var S = {},
                p = {
                    state: a.Sn.ALL_GOOD
                },
                I = !1;
            var d = function(t) {
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
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFetching = function() {
                    return I
                };
                r.getClassifications = function() {
                    return Object.values(S)
                };
                r.getClassification = function(t) {
                    return S[t]
                };
                r.getAccountStanding = function() {
                    return p
                };
                r.__getLocalVars = function() {
                    return {
                        classifications: S,
                        accountStanding: p,
                        isFetching: I
                    }
                };
                return n
            }(o.ZP.Store);
            d.displayName = "SafetyHubStore";
            const _ = new d(c.Z, {
                SAFETY_HUB_FETCH_START: function(t) {
                    I = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    var e = t.classifications,
                        n = t.accountStanding;
                    S = i()(e, "id");
                    p = n;
                    I = !1
                },
                LOGOUT: function() {
                    I = !1;
                    S = {};
                    p = {
                        state: a.Sn.ALL_GOOD
                    }
                }
            })
        },
        588161: (t, e, n) => {
            "use strict";
            n.d(e, {
                V: () => c,
                Y: () => a
            });
            var r = n(202351),
                i = n(102921),
                o = n(572336);

            function c() {
                return (0, r.Wu)([o.Z], (function() {
                    return o.Z.getClassifications()
                })).sort((function(t, e) {
                    return i.Z.extractTimestamp(e.id) - i.Z.extractTimestamp(t.id)
                }))
            }

            function a(t) {
                return (0, r.e7)([o.Z], (function() {
                    return o.Z.getClassification(t)
                }))
            }
        },
        521391: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => D
            });
            var r, i = n(785893),
                o = (n(667294),
                    n(882723)),
                c = n(3219),
                a = n(911501),
                s = n(357566),
                l = n(189865),
                u = n(963659),
                f = n(136317),
                E = n(813749),
                O = n(155830),
                S = n(120641),
                p = n(588161),
                I = n(507850),
                d = n(473708),
                _ = n(446774),
                A = n.n(_);

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function T(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t, e) {
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
                    if ("string" == typeof t) return y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = (T(r = {}, S.Us.BAN, [c.Z, A().redIcon]), T(r, S.Us.GLOBAL_QUARANTINE, [O.Z, A().warningIcon]), T(r, S.Us.DISABLE_SUSPICIOUS_ACTIVITY, [O.Z, A().warningIcon]), T(r, S.Us.LIMITED_ACCESS, [s.Z, A().warningIcon]), T(r, S.Us.REQUIRE_VERIFICATION, [O.Z, A().warningIcon]), T(r, S.Us.TEMP_BAN, [s.Z, A().warningIcon]), T(r, S.Us.USER_MESSAGE_REMOVAL, [E.Z, A().redIcon]), T(r, S.Us.USER_SPAMMER, [O.Z, A().warningIcon]), T(r, S.Us.USER_USERNAME_MANGLE, [l.Z, A().warningIcon]), T(r, S.Us.USER_WARNING, [a.Z, A().warningIcon]), r),
                N = O.Z,
                h = function(t) {
                    var e = t.classificationTypeText;
                    return (0, i.jsx)("div", {
                        className: A().classificationHeader,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-xl/normal",
                            children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
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
                L = function(t) {
                    var e = t.actions;
                    return 0 === e.filter((function(t) {
                        return t.descriptions.length > 0
                    })).length ? null : (0, i.jsxs)("div", {
                        className: A().classificationActionsTakenContainer,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: A().classificationActionsTakenCard,
                            children: e.map((function(t) {
                                return (0, i.jsx)(g, {
                                    action: t
                                }, t.id)
                            }))
                        })]
                    })
                },
                g = function(t) {
                    var e = t.action,
                        n = b(e.action_type in C ? C[e.action_type] : [N, A().warningIcon], 2),
                        r = n[0],
                        c = n[1];
                    return (0, i.jsx)(i.Fragment, {
                        children: e.descriptions.map((function(t, e) {
                            return (0, i.jsxs)("div", {
                                className: A().classificationActionsTakenRow,
                                children: [(0, i.jsx)("div", {
                                    className: A().classificationActionsTakenRowIcon,
                                    children: (0, i.jsx)(r, {
                                        className: c,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: t
                                })]
                            }, e)
                        }))
                    })
                },
                j = function(t) {
                    var e = t.classificationTypeText;
                    return (0, i.jsxs)("div", {
                        className: A().classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: A().classificationPolicyCardIcon,
                            children: (0, i.jsx)(u.Z, {
                                className: A().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, i.jsxs)("div", {
                            className: A().classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: A().classificationPolicyLinkIcon,
                            children: (0, i.jsx)(f.Z, {
                                className: A().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                m = function(t) {
                    var e = t.tosLink,
                        n = t.communityGuidelinesLink,
                        r = t.appealLink,
                        c = t.classificationTypeText;
                    return (0, i.jsxs)("div", {
                        className: A().classificationActionExplanationContainer,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(o.Text, {
                            className: A().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(j, {
                            classificationTypeText: c
                        }), (0, i.jsx)("div", {
                            className: A().classificationLetUsKnowContainer,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: r
                                })
                            })
                        })]
                    })
                },
                v = function(t) {
                    return (0, i.jsxs)("div", {
                        className: A().classificationContainer,
                        children: [(0, i.jsx)(h, {
                            classificationTypeText: t.classificationTypeText
                        }), (0, i.jsx)(L, {
                            actions: t.actions
                        }), (0, i.jsx)(m, {
                            appealLink: t.appealLink,
                            communityGuidelinesLink: t.communityGuidelinesLink,
                            tosLink: t.tosLink,
                            classificationTypeText: t.classificationTypeText
                        })]
                    })
                };
            const x = function(t) {
                var e = t.classificationId,
                    n = (0, p.Y)(e);
                return null == n ? null : (0, i.jsx)(v, {
                    actions: n.actions,
                    classificationTypeText: n.description,
                    tosLink: I.sQ.TOS_LINK,
                    communityGuidelinesLink: I.sQ.COMMUNITY_GUIDELINES,
                    appealLink: I.sQ.APPEALS_LINK
                })
            };
            var P = n(470762),
                w = n.n(P),
                R = n(725349),
                U = n.n(R);
            const D = function(t) {
                var e = t.transitionState,
                    n = t.onClose,
                    r = t.classificationId;
                return (0, i.jsxs)(o.ModalRoot, {
                    className: w().modalRoot,
                    transitionState: e,
                    children: [(0, i.jsxs)("div", {
                        className: w().modalHeader,
                        children: [(0, i.jsx)("img", {
                            className: w().image,
                            src: U(),
                            alt: ""
                        }), (0, i.jsx)(o.ModalCloseButton, {
                            className: w().modalClose,
                            onClick: n
                        })]
                    }), (0, i.jsx)(o.ModalContent, {
                        className: w().modalContent,
                        children: (0, i.jsx)(x, {
                            classificationId: r
                        })
                    }), (0, i.jsx)(o.ModalFooter, {
                        children: (0, i.jsx)(o.Button, {
                            className: w().button,
                            type: "button",
                            color: o.Button.Colors.BRAND,
                            onClick: n,
                            children: d.Z.Messages.CLOSE
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
                    E = a(t, ["width", "height", "color"]);
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
                }({}, (0, i.Z)(E)), {
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
        911501: (t, e, n) => {
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
                    n = void 0 === e ? 24 : e,
                    s = t.height,
                    l = void 0 === s ? 24 : s,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    E = t.foreground,
                    O = a(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(t) {
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
                }({}, (0, i.Z)(O)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                        fill: f,
                        className: E
                    })
                }))
            }
        },
        963659: (t, e, n) => {
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
                    n = void 0 === e ? 24 : e,
                    s = t.height,
                    l = void 0 === s ? 24 : s,
                    u = t.color,
                    f = void 0 === u ? "currentColor" : u,
                    E = t.foreground,
                    O = a(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(t) {
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
                }({}, (0, i.Z)(O)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: E,
                        fill: f,
                        d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=490b353ec2c8a6deb44d.js.map