(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39083, 86531], {
        495068: (e, t, n) => {
            e.exports = n.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, t, n) => {
            e.exports = n.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        577660: (e, t, n) => {
            e.exports = n.p + "5e7d050aa74c846659708b2d59c72a05.svg"
        },
        123435: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vq: () => S,
                c8: () => j,
                oQ: () => P
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(795308),
                u = n(575945),
                c = n(70418),
                l = n(74535),
                s = n(818417),
                f = n(348592),
                p = n(387099),
                d = n(2590),
                y = n(473708),
                b = n(858903),
                h = n.n(b),
                m = n(495068),
                v = n.n(m),
                O = n(377236),
                g = n.n(O);

            function w(e) {
                var t = e.className,
                    n = (0, l.ZP)(),
                    o = (0, u.wj)(n) ? v() : g();
                return (0, r.jsxs)("div", {
                    className: i()(h().container, t),
                    children: [(0, r.jsx)(c.Heading, {
                        className: h().header,
                        variant: "heading-xl/semibold",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(c.Text, {
                        className: h().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.Z.getArticleURL(d.BhN.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: o,
                        className: h().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function j() {
                return (0, r.jsx)(w, {
                    className: h().settings
                })
            }

            function S() {
                return (0, r.jsx)(w, {
                    className: h().modal
                })
            }

            function P(e) {
                var t = e.className;
                return (0, p.Q)() ? (0, r.jsxs)(c.Card, {
                    className: i()(h().blockedPaymentsWarning, t),
                    type: c.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(s.Z, {
                        className: h().blockedPaymentsWarningIcon,
                        color: a.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.Z.getArticleURL(d.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        394166: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => y
            });
            var r = n(785893),
                o = (n(667294), n(673679)),
                i = n(151017),
                a = n(784426),
                u = n(464187),
                c = n(782786),
                l = n(586611),
                s = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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

            function d(e, t) {
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

            function y(e) {
                var t = e.onClose,
                    n = e.initialPlanId,
                    y = e.analyticsObject,
                    b = e.analyticsLocation,
                    h = e.analyticsLocations,
                    m = e.analyticsSubscriptionType,
                    v = e.renderHeader,
                    O = e.planGroup,
                    g = e.reviewWarningMessage,
                    w = e.applicationId,
                    j = e.guildId,
                    S = e.onComplete,
                    P = e.forcesTransitionToGuild,
                    E = e.skuId,
                    x = d(e, ["onClose", "initialPlanId", "analyticsObject", "analyticsLocation", "analyticsLocations", "analyticsSubscriptionType", "renderHeader", "planGroup", "reviewWarningMessage", "applicationId", "guildId", "onComplete", "forcesTransitionToGuild", "skuId"]),
                    C = (0, c.usePaymentContext)().subscriptionMetadataRequest;
                return (0, r.jsx)(l.PaymentModal, p(function(e) {
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
                }({}, x), {
                    initialPlanId: n,
                    skuId: E,
                    onClose: function(e) {
                        t();
                        var n = null == C ? void 0 : C.guild_id;
                        if (e && null != n) {
                            o.jg();
                            (0, i.i1)(n);
                            null == S || S();
                            null == n || !P && u.Z.getGuildId() === n || (0, a.uL)(s.Z5c.CHANNEL(n))
                        }
                    },
                    analyticsLocations: h,
                    analyticsObject: y,
                    analyticsLocation: b,
                    analyticsSubscriptionType: m,
                    renderHeader: v,
                    planGroup: O,
                    reviewWarningMessage: g,
                    applicationId: w,
                    guildId: j,
                    forceNewPaymentModal: !0
                }))
            }
        },
        467345: (e, t, n) => {
            "use strict";
            n.d(t, {
                SR: () => p,
                YD: () => m,
                _G: () => h
            });
            var r = n(441143),
                o = n.n(r),
                i = n(761953),
                a = n(720419),
                u = n(30027),
                c = n(61209),
                l = n(644144),
                s = n(69427);

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }
            var p, d = function(e, t) {
                var n, r, o, i, a = {
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
                            for (; a;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
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
            ! function(e) {
                e.ACTION = "action";
                e.LOOP = "loop";
                e.IDLE = "idle"
            }(p || (p = {}));
            var y, b, h = function(e, t) {
                    var r;
                    switch (e) {
                        case s.Cj.SNOWGLOBE:
                            r = function() {
                                return n.e(92494).then(n.t.bind(n, 292494, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.BOX:
                            r = function() {
                                return n.e(45555).then(n.t.bind(n, 245555, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.CUP:
                            r = function() {
                                return n.e(21243).then(n.t.bind(n, 421243, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.STANDARD_BOX:
                            switch (t) {
                                case p.IDLE:
                                    r = function() {
                                        return n.e(78901).then(n.t.bind(n, 278901, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case p.LOOP:
                                    r = function() {
                                        return n.e(62252).then(n.t.bind(n, 162252, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(12955).then(n.t.bind(n, 112955, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CAKE:
                            switch (t) {
                                case p.IDLE:
                                    r = function() {
                                        return n.e(77455).then(n.t.bind(n, 777455, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case p.LOOP:
                                    r = function() {
                                        return n.e(96988).then(n.t.bind(n, 896988, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(55507).then(n.t.bind(n, 755507, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CHEST:
                            switch (t) {
                                case p.IDLE:
                                    r = function() {
                                        return n.e(67090).then(n.t.bind(n, 54436, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case p.LOOP:
                                    r = function() {
                                        return n.e(54682).then(n.t.bind(n, 454682, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(49537).then(n.t.bind(n, 349537, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.COFFEE:
                            switch (t) {
                                case p.IDLE:
                                    r = function() {
                                        return n.e(76803).then(n.t.bind(n, 76803, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case p.LOOP:
                                    r = function() {
                                        return n.e(1133).then(n.t.bind(n, 101133, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(86636).then(n.t.bind(n, 86636, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        default:
                            r = function() {
                                return Promise.resolve("Error: Invalid giftStyle")
                            }
                    }
                    return r
                },
                m = (b = (y = function(e, t) {
                    var n, r;
                    return d(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (null == t) throw new Error("giftCode must be defined");
                                if (null == e) throw new Error("Recipient must be defined");
                                return [4, i.Z.openPrivateChannel(e.id).then((function(e) {
                                    var t = c.Z.getChannel(e);
                                    o()(null != t, "PrivateChannel is null");
                                    if (null == t) throw new Error("Channel must be defined");
                                    return t
                                }))];
                            case 1:
                                n = s.sent();
                                r = (0, l.Nz)(t);
                                return [2, a.Z.sendMessage(n.id, u.ZP.parse(n, r), void 0, {
                                    isGiftLinkSentOnBehalfOfUser: !0
                                })]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = y.apply(e, t);

                        function i(e) {
                            f(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            f(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return b.apply(this, arguments)
                })
        },
        621270: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => d,
                rK: () => p
            });
            var r = n(667294),
                o = n(730381),
                i = n.n(o),
                a = n(513328),
                u = n(921489);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = new Date("2023-01-01T07:59:59.000Z"),
                f = i()(s);

            function p() {
                var e = l(r.useState((function() {
                        return f.isAfter(Date.now())
                    })), 2),
                    t = e[0],
                    n = e[1];
                r.useEffect((function() {
                    var e = new a.V7,
                        r = function() {
                            var t = f.diff(Date.now(), "millisecond");
                            null == e || e.start(t, (function() {
                                f.isBefore(Date.now()) ? n(!1) : r()
                            }))
                        };
                    t && r();
                    return function() {
                        return e.stop()
                    }
                }));
                return t
            }
            const d = (0, u.Z)({
                id: "2022-12_seasonal_gifting",
                label: "Seasonal Gifting",
                kind: "user",
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
            })
        },
        882211: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(316878),
                u = n(776009),
                c = n(467345),
                l = n(69427);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var t = e.giftStyle,
                    n = e.className,
                    s = e.shouldAnimate,
                    p = void 0 === s || s,
                    d = e.defaultAnimationState,
                    y = e.idleAnimationState,
                    b = (0, i.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    h = f(o.useState(d), 2),
                    m = h[0],
                    v = h[1],
                    O = o.useRef((0, c._G)(t, m)),
                    g = f(o.useState(null == y), 2),
                    w = g[0],
                    j = g[1],
                    S = f(o.useState(!1), 2),
                    P = S[0],
                    E = S[1],
                    x = f(o.useState(-1), 2),
                    C = x[0],
                    A = x[1],
                    k = function() {
                        O.current = (0, c._G)(t, m);
                        A((function(e) {
                            return e + 1
                        }))
                    };
                o.useEffect((function() {
                    null == y && v(d)
                }), [y, d]);
                o.useEffect((function() {
                    null != y && C >= 0 ? function() {
                        j(!1);
                        E(!0);
                        A(-1);
                        v(d)
                    }() : k()
                }), [t, y]);
                o.useEffect((function() {
                    P && null != y || k()
                }), [m]);
                o.useEffect((function() {
                    if (P) {
                        j(null == y);
                        E(!1);
                        k()
                    }
                }), [P]);
                if (!l.Cj.hasOwnProperty(t)) throw new Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(u.Z, {
                    importData: O.current,
                    shouldAnimate: !b && p,
                    className: n,
                    versionKey: C,
                    onComplete: null != y ? function() {
                        if (null != y) {
                            v(y);
                            j(!0)
                        }
                    } : void 0,
                    loop: w
                })
            }
        },
        311865: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(202351),
                c = n(316878),
                l = n(901654),
                s = n(574075),
                f = n.n(s);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function m(e, t) {
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

            function v(e, t) {
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

            function O(e, t) {
                return !t || "object" !== j(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var P = function(e, t) {
                    var n, r, o, i, a = {
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
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
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
                E = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
                    }(o, e);
                    var t = S(o);

                    function o() {
                        y(this, o);
                        var e;
                        (e = t.apply(this, arguments)).animationRef = null;
                        e.currentScene = e.props.nextScene;
                        e.isUnmounted = !1;
                        e.handleLoopComplete = function() {
                            var t = e.props,
                                n = t.onSceneComplete,
                                r = t.nextScene;
                            null != n && n(e.currentScene);
                            e.playScene(r)
                        };
                        e.handleComplete = function() {
                            var t = e.props.onSceneComplete;
                            null != t && t(e.currentScene)
                        };
                        e.handleSetRef = function(t) {
                            e.animationRef = t;
                            var n = e.props.animationRef;
                            null != n && n(t)
                        };
                        return e
                    }
                    var i = o.prototype;
                    i.componentDidMount = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, r, o, i, a, u, c, l, s, f, p;
                            return P(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        e = t.props, r = e.importData, o = e.nextScene, i = e.pauseWhileUnfocused, a = e.pause, u = e.isWindowFocused, c = e.useReducedMotion;
                                        return [4, Promise.all([r(), n.e(11248).then(n.t.bind(n, 211248, 23))])];
                                    case 1:
                                        l = w.apply(void 0, [d.sent(), 2]), s = l[0], f = l[1], p = f.default;
                                        if (null == t.animationRef) return [2];
                                        t.animation = p.loadAnimation({
                                            container: t.animationRef,
                                            renderer: "svg",
                                            loop: !0,
                                            autoplay: !0,
                                            animationData: s
                                        });
                                        t.animation.addEventListener("loopComplete", t.handleLoopComplete);
                                        t.animation.addEventListener("complete", t.handleComplete);
                                        t.playScene(o);
                                        (i && !u || a || c) && t.animation.pause();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    d(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    d(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        })()
                    };
                    i.componentWillUnmount = function() {
                        this.isUnmounted = !0;
                        if (null != this.animation) {
                            this.animation.destroy();
                            this.animation = void 0
                        }
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.nextScene,
                            r = t.pauseWhileUnfocused,
                            o = t.pause,
                            i = t.isWindowFocused,
                            a = t.useReducedMotion;
                        n !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(n);
                        null != this.animation && (r && !e.isWindowFocused && i && !a && !0 !== o ? this.animation.play() : (a || r && e.isWindowFocused && !i) && this.animation.pause());
                        if (!e.pause && o) {
                            var u;
                            null === (u = this.animation) || void 0 === u || u.pause()
                        } else if (e.pause && !o && !a) {
                            var c;
                            null === (c = this.animation) || void 0 === c || c.play()
                        }
                        if (e.nextScene !== n && o) {
                            var l;
                            this.playScene(n);
                            null === (l = this.animation) || void 0 === l || l.pause()
                        }
                    };
                    i.shouldForcePlayAfter = function() {
                        return !0 === this.props.sceneSegments[this.currentScene].shouldForcePlayAfter
                    };
                    i.playScene = function(e) {
                        if (!this.isUnmounted) {
                            var t = this.props,
                                n = t.onScenePlay,
                                r = t.sceneSegments,
                                o = t.useReducedMotion,
                                i = r[e],
                                a = r[this.currentScene];
                            null == this.animation || e !== this.currentScene && i.BEG === a.BEG && i.END === a.END || this.animation.playSegments([i.BEG, i.END], !0);
                            this.currentScene = e;
                            null != n && n(this.currentScene);
                            if (o) {
                                var u;
                                null === (u = this.animation) || void 0 === u || u.pause()
                            }
                        }
                    };
                    i.render = function() {
                        return (0, r.jsx)("div", {
                            ref: this.handleSetRef,
                            className: a()(this.props.className, f().wrapper)
                        })
                    };
                    return o
                }(o.PureComponent);
            E.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const x = function(e) {
                var t = e.componentRef,
                    n = v(e, ["componentRef"]),
                    o = (0, u.e7)([l.Z], (function() {
                        return l.Z.isFocused()
                    })),
                    i = (0, u.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    }));
                return (0, r.jsx)(E, m(function(e) {
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
                }({}, n), {
                    isWindowFocused: o,
                    useReducedMotion: i,
                    ref: t
                }))
            }
        },
        507965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(652411);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function c(e, t) {
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

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = [n(577660)],
                f = ["#FFFFFF"],
                p = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function d(e) {
                var t = e.className,
                    n = e.firing,
                    a = void 0 === n || n,
                    d = e.wind,
                    y = void 0 === d ? 2 : d,
                    b = l(o.useState(null), 2),
                    h = b[0],
                    m = b[1],
                    v = l(o.useState(null), 2),
                    O = v[0],
                    g = v[1],
                    w = (0, i.uR)(O, h),
                    j = o.useMemo((function() {
                        return new i.qA({
                            wind: y
                        })
                    }), [y]),
                    S = o.useCallback((function() {
                        var e = null == O ? void 0 : O.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            w.createConfetti(c(function(e) {
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
                            }({}, p), {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: -t.width / 2,
                                        y: -6
                                    },
                                    maxValue: {
                                        x: t.width,
                                        y: -6
                                    }
                                }
                            }))
                        }
                    }), [w, O]);
                o.useEffect((function() {
                    var e = a ? setInterval(S, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [a, S]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.O_, {
                        ref: g,
                        className: t,
                        environment: j
                    }), (0, r.jsx)(i.Ji, {
                        ref: m,
                        colors: f,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        },
        685269: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294);
            var o = [];

            function i(e, t) {
                var n = (0, r.useRef)(),
                    i = (0, r.useRef)(o);
                if (i.current === o) {
                    n.current = e();
                    i.current = t
                } else if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < t.length && n < e.length; n++)
                            if (!Object.is(e[n], t[n])) return !1;
                        return !0
                    }(t, i.current)) {
                    n.current = e();
                    i.current = t
                }
                return n.current
            }
        }
    }
]);