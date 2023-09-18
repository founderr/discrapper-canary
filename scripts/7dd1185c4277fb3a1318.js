"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [88892, 89005, 29202, 91683, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => l
            });
            var r = n(281110),
                o = n(744564),
                u = n(239734),
                i = n(2590);

            function l() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (u.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: i.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        218190: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => a
            });
            var r = n(473903),
                o = n(775173),
                u = n(72580),
                i = n(2590);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
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

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case i.d4z.DM:
                        var l = c(e.recipients.map(r.default.getUser).filter(u.lm), 1),
                            a = l[0];
                        return null == a ? null : a.getAvatarURL(void 0, t, n);
                    case i.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        792800: (e, t, n) => {
            n.d(t, {
                PR: () => h,
                EM: () => v,
                Tt: () => O,
                yY: () => E,
                ZD: () => S
            });
            var r = n(667294),
                o = n(38736);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || f(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || f(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                }
            }
            var s = {
                    base: n(120415).FB ? void 0 : "Discord"
                },
                d = 0,
                p = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                y = (0, o.Z)((function() {
                    return {
                        titles: [s],
                        notificationCount: void 0,
                        flashQueue: []
                    }
                }));

            function h(e) {
                y.setState({
                    notificationCount: e
                })
            }

            function v(e) {
                var t = l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, p, e), {
                    id: d++
                });
                t.count = Math.max(t.count, t.messages.length);
                y.setState((function(e) {
                    return {
                        flashQueue: a(e.flashQueue).concat([t])
                    }
                }));
                return function() {
                    return b(t.id)
                }
            }

            function b(e) {
                y.setState((function(t) {
                    return {
                        flashQueue: t.flashQueue.filter((function(t) {
                            return t.id !== e
                        }))
                    }
                }))
            }

            function O(e) {
                r.useEffect((function() {
                    return function(e) {
                        y.setState((function(t) {
                            return {
                                titles: [e].concat(a(t.titles))
                            }
                        }));
                        return function() {
                            y.setState((function(t) {
                                return {
                                    titles: t.titles.filter((function(t) {
                                        return t !== e
                                    }))
                                }
                            }))
                        }
                    }(e)
                }), a(Object.values(e)))
            }

            function E(e) {
                O(e);
                return null
            }

            function g() {
                var e = c(y((function(e) {
                        var t = e.flashQueue,
                            n = function(e) {
                                var t, n, r, o = !0,
                                    u = !1,
                                    i = void 0;
                                try {
                                    for (var l, c = e.titles[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                                        var a = l.value;
                                        if (null != t && null != n) break;
                                        t = null != t ? t : a.base;
                                        n = null != n ? n : a.location;
                                        r = null != r ? r : a.subsection
                                    }
                                } catch (e) {
                                    u = !0;
                                    i = e
                                } finally {
                                    try {
                                        o || null == c.return || c.return()
                                    } finally {
                                        if (u) throw i
                                    }
                                }
                                return [t, r, n]
                            }(e).filter((function(e) {
                                return null != e
                            })).join(" | "),
                            r = function(e) {
                                var t = e.notificationCount;
                                return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                            }(e);
                        return ["".concat(r).concat(n), t[0]]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    o = c(r.useState(!1), 2),
                    u = o[0],
                    i = o[1],
                    l = r.useRef(0),
                    a = null == n ? void 0 : n.messages[l.current % n.messages.length];
                r.useEffect((function() {
                    if (null != n) {
                        if (!document.hasFocus() || !n.onlyWhenBlurred) {
                            var e = setInterval((function() {
                                if (l.current >= n.count) {
                                    b(n.id);
                                    i(!1)
                                } else i((function(e) {
                                    if (e) {
                                        l.current += 1;
                                        return !1
                                    }
                                    return !0
                                }))
                            }), n.interval);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                        b(n.id);
                        i(!1)
                    } else {
                        l.current = 0;
                        i(!1)
                    }
                }), [n]);
                return u ? a : t
            }

            function I() {
                r.useEffect((function() {
                    var e = function() {
                        y.setState({
                            flashQueue: []
                        })
                    };
                    document.addEventListener("focusin", e, {
                        capture: !0
                    });
                    return function() {
                        return document.removeEventListener("focusin", e, {
                            capture: !0
                        })
                    }
                }), [])
            }

            function S() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skipsSettingDefaultPageTitle;
                I();
                var t = g();
                r.useEffect((function() {
                    e && t === s.base || (document.title = t)
                }), [e, t])
            }
        },
        58387: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(882723));

            function u(e, t, n, r, o, u, i) {
                try {
                    var l = e[u](i),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            u(i, r, o, l, c, "next", e)
                        }

                        function c(e) {
                            u(i, r, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var c = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function l(u) {
                    return function(l) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
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
                        }([u, l])
                    }
                }
            };
            const a = {
                open: function() {
                    (0, o.openModalLazy)(i((function() {
                        var e, t;
                        return c(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(3790), n.e(96043), n.e(30796)]).then(n.bind(n, 834883))];
                                case 1:
                                    e = o.sent(), t = e.default;
                                    return [2, function(e) {
                                        return (0, r.jsx)(t, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    l(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        980604: (e, t, n) => {
            n.d(t, {
                Z: () => oe
            });
            var r = n(496486),
                o = n.n(r),
                u = n(202351),
                i = n(630631),
                l = n(744564),
                c = n(73457),
                a = n(773011),
                f = n(61209),
                s = n(840922),
                d = n(473903),
                p = n(499477),
                y = n(2590);
            var h = n(18882),
                v = n(64234),
                b = n(664625),
                O = n(284610),
                E = n(5544),
                g = n(21372),
                I = n(567403),
                S = n(682776),
                m = n(717091),
                _ = n(715107),
                C = n(464187),
                T = n(9430),
                w = n(504275),
                P = n(72580),
                A = n(473708);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function N(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Z(e, t) {
                Z = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Z(e, t)
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return j(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var n, r = R(e);
                    if (t) {
                        var o = R(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return N(this, n)
                }
            }
            var M, F = "seenQSTutorial",
                V = 0,
                G = !1,
                x = !1,
                Q = null,
                W = [],
                k = null,
                q = 0,
                Y = [],
                z = [];

            function K() {
                x = I.Z.getGuildCount() >= 3 || o().size(f.Z.getMutablePrivateChannels()) >= 20;
                Y = []
            }

            function B(e) {
                var t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Z,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
                        o = t.getChannel(e);
                    if (null == o) return null;
                    var u = (0, a.F6)(o, n, r);
                    switch (o.type) {
                        case y.d4z.DM:
                            var i = n.getUser(o.getRecipientId());
                            return null == i ? null : {
                                type: p.h8.USER,
                                record: i,
                                score: 0,
                                comparator: u
                            };
                        case y.d4z.GROUP_DM:
                            return {
                                type: p.h8.GROUP_DM, record: o, score: 0, comparator: u
                            };
                        case y.d4z.GUILD_VOICE:
                        case y.d4z.GUILD_STAGE_VOICE:
                            return {
                                type: p.h8.VOICE_CHANNEL, record: o, score: 0, comparator: u
                            };
                        default:
                            return {
                                type: p.h8.TEXT_CHANNEL, record: o, score: 0, comparator: u
                            }
                    }
                }(e);
                return null == t || null != Q && Q !== t.type ? null : t
            }

            function X() {
                var e, t, n = null !== (e = C.Z.getGuildId()) && void 0 !== e ? e : void 0,
                    r = null !== (t = _.Z.getChannelId()) && void 0 !== t ? t : void 0;
                switch (Q) {
                    case c.h8.USER:
                        var u = b.default.getId();
                        return w.ZP.getRecentlyTalked(r, 100).filter((function(e) {
                            return e.record.id !== u
                        }));
                    case c.h8.APPLICATION:
                        return w.ZP.queryApplications({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case c.h8.GUILD:
                        return w.ZP.queryGuilds({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case c.h8.TEXT_CHANNEL:
                        return w.ZP.queryChannels({
                            query: "",
                            guildId: C.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0
                        });
                    case c.h8.VOICE_CHANNEL:
                        return w.ZP.queryChannels({
                            query: "",
                            guildId: C.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0,
                            filter: function() {
                                return !0
                            },
                            type: E.Zb
                        })
                }
                for (var i = [], l = [], a = 1; a < z.length; a += 1) {
                    var s = B(z[a]);
                    null != s && ((s.type !== c.h8.TEXT_CHANNEL && s.type !== c.h8.VOICE_CHANNEL || S.Z.can(y.Plq.VIEW_CHANNEL, s.record)) && l.push(s))
                }
                if (l.length > 0) {
                    var d;
                    (d = i).push.apply(d, [(0, c.o6)(A.Z.Messages.QUICKSWITCHER_LAST_CHANNEL)].concat(U(l)))
                }
                var p = function(e) {
                    var t = [];
                    O.Z.getRecentlyEditedDrafts(O.d.ChannelMessage).forEach((function(n) {
                        var r = n.channelId;
                        if (!e(r)) {
                            var o = B(r);
                            null != o && t.push(o)
                        }
                    }));
                    return t
                }((function(e) {
                    return e === r || z.includes(e)
                }));
                if (p.length > 0) {
                    var v;
                    (v = i).push.apply(v, [(0, c.o6)(A.Z.Messages.QUICKSWITCHER_DRAFTS)].concat(U(p)))
                }
                var g = m.ZP.getMentionChannelIds().filter((function(e) {
                    return e !== r && !z.includes(e)
                })).map((function(e) {
                    return B(e)
                })).filter(P.lm).reverse();
                if (g.length > 0) {
                    i.push((0, c.o6)(A.Z.Messages.QUICKSWITCHER_MENTIONS));
                    i = i.concat(g)
                }
                if (null != n) {
                    var I = E.ZP.getSelectableChannelIds(n).filter((function(e) {
                        var t = f.Z.getChannel(e);
                        return !(null == t || e === r || z.includes(e) || T.Z.isChannelMuted(t.guild_id, e) || null != t.parent_id && T.Z.isChannelMuted(t.guild_id, t.parent_id)) && m.ZP.hasRelevantUnread(t)
                    })).map((function(e) {
                        return B(e)
                    })).filter((function(e) {
                        return e
                    }));
                    Object.values(h.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((function(e) {
                        for (var t in e) {
                            var n = B(t);
                            null != n && I.push(n)
                        }
                    }));
                    if (I.length > 0) {
                        i.push((0, c.o6)(A.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS));
                        i = i.concat(I)
                    }
                }
                return o()(i).uniqBy((function(e) {
                    return e.record.id
                })).value()
            }

            function $(e, t) {
                switch (Q) {
                    case c.h8.USER:
                        var n = I.Z.getGuild(C.Z.getGuildId());
                        e.unshift((0, c.o6)(null != n ? A.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                            name: n.name
                        }) : A.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS));
                        W = e;
                        break;
                    case c.h8.TEXT_CHANNEL:
                        e.unshift((0, c.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS));
                        W = e;
                        break;
                    case c.h8.VOICE_CHANNEL:
                        e.unshift((0, c.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS));
                        W = e;
                        break;
                    case c.h8.GUILD:
                        e.unshift((0, c.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS));
                        W = e;
                        break;
                    case c.h8.APPLICATION:
                        e.unshift((0, c.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS));
                        W = e;
                        break;
                    default:
                        W = e
                }
                if (t !== k) {
                    k = t;
                    q = Math.max(t.length, q);
                    V = (0, c.gJ)(c.a8.DOWN, -1, W)
                } else {
                    var r = W[V];
                    null != r && r.type === c.h8.HEADER && (V = (0, c.gJ)(c.a8.DOWN, V, W))
                }
                re.emitChange()
            }

            function J(e) {
                var t, n = e.query,
                    r = e.queryMode,
                    o = null !== (t = C.Z.getGuildId()) && void 0 !== t ? t : void 0,
                    u = new Set(["user:".concat(b.default.getId())]);
                null != o && u.add("guild:".concat(o));
                M = null != M ? M : new c.ZP(ee, null, null != r ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: u
                });
                k = null;
                q = n.length;
                Q = r;
                M.search(n)
            }

            function ee(e, t) {
                if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                o = t[n];
                            if (r.record.id !== o.record.id) return !1
                        }
                        return !0
                    }(e = "" === (t = t.trim()).trim() ? X() : e, Y)) {
                    Y = e;
                    $(e, t)
                }
            }

            function te() {
                k = null;
                q = 0;
                Y = [];
                if (null != M) {
                    M.destroy();
                    M = null
                }
            }
            var ne = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Z(e, t)
                }(n, e);
                var t = H(n);

                function n() {
                    L(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(g.ZP, I.Z, f.Z);
                    this.syncWith([v.Z], (function() {
                        return !0
                    }));
                    G = i.Z.get(F) || !1;
                    var t;
                    z = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                };
                r.getState = function() {
                    return {
                        channelHistory: z
                    }
                };
                r.isOpen = function() {
                    return null != M
                };
                r.getResultTotals = function(e) {
                    return null == M ? 0 : null == e ? M.results.reduce((function(e, t) {
                        return t.type !== c.h8.HEADER ? e + 1 : e
                    }), 0) : M.results.reduce((function(t, n) {
                        return n.type === e ? t + 1 : t
                    }), 0)
                };
                r.channelNoticePredicate = function(e, t) {
                    var n = Date.now() - t >= y.Hqc;
                    return x && n
                };
                r.getFrequentGuilds = function() {
                    return null != M ? M.queryGuilds("", 100) : null
                };
                r.getFrequentGuildsLength = function() {
                    return null != M ? M.queryGuilds("", 100).length : 0
                };
                r.getChannelHistory = function() {
                    return z
                };
                r.getProps = function() {
                    return {
                        theme: v.Z.theme,
                        query: null != M ? M.query : "",
                        queryMode: Q,
                        results: W,
                        selectedIndex: V,
                        seenTutorial: G,
                        maxQueryLength: q
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        SEEN_TUTORIAL_KEY: F,
                        MAX_GENERAL_RESULTS: 5,
                        MAX_QUERY_MODE_RESULTS: 100,
                        autocompleter: M,
                        selectedIndex: V,
                        seenTutorial: G,
                        isUseful: x,
                        queryMode: Q,
                        results: W,
                        lastQuery: k,
                        maxQueryLength: q,
                        cachedUserSearchResults: Y,
                        channelHistory: z,
                        instance: re
                    }
                };
                return n
            }(u.ZP.PersistedStore);
            ne.displayName = "QuickSwitcherStore";
            ne.persistKey = "QuickSwitcherStore";
            var re = new ne(l.Z, {
                CONNECTION_OPEN: K,
                CONNECTION_OPEN_SUPPLEMENTAL: K,
                QUICKSWITCHER_SHOW: J,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
                QUICKSWITCHER_HIDE: te,
                OVERLAY_SET_INPUT_LOCKED: te,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: te,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, n = e.query,
                        r = e.queryMode;
                    if (null == M) return !1;
                    var o = null !== (t = C.Z.getGuildId()) && void 0 !== t ? t : null;
                    if (Q !== r) {
                        M.setResultTypes(null != r ? [r] : null);
                        M.setLimit(null != r ? 100 : 5);
                        var u, i = null !== (u = C.Z.getGuildId()) && void 0 !== u ? u : void 0;
                        r === c.h8.USER && null != i ? M.setOptions({
                            userFilters: {
                                guild: i,
                                friends: !0
                            }
                        }, !0) : r === c.h8.VOICE_CHANNEL ? M.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : M.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    Q = r;
                    M.search(n, Q === c.h8.USER ? o : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    V = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (G) return !1;
                    G = !0;
                    i.Z.set(F, !0)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == t) return !1;
                    (z = z.filter((function(e) {
                        return e !== t
                    }))).unshift(t);
                    z.length > 4 && (z.length = 4)
                }
            });
            const oe = re
        },
        788169: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(202351),
                o = n(281110),
                u = n(744564),
                i = n(664625),
                l = n(539273),
                c = n(2590),
                a = n(897196);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var v = function(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var O, E = 1e4,
                g = {},
                I = Object.freeze({});

            function S(e) {
                var t;
                return null !== (t = g[e]) && void 0 !== t ? t : I
            }

            function m(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = p({}, S(t));
                clearTimeout(r[n]);
                r[n] = function(e, t) {
                    return setTimeout((function() {
                        u.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: e,
                            userId: t
                        })
                    }), E)
                }(t, n);
                g[t] = r
            }

            function _(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = g[t];
                if (null == r || null == r[n]) return !1;
                var o = p({}, r);
                clearTimeout(o[n]);
                delete o[n];
                g[t] = o
            }

            function C() {
                g = {}
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getTypingUsers = function(e) {
                    return S(e)
                };
                r.isTyping = function(e, t) {
                    return null != S(e)[t]
                };
                r.__getLocalVars = function() {
                    return {
                        TYPING_TIMEOUT: E,
                        TYPING_DELAY_LOCAL: 1500,
                        MAX_TYPING_USERS: 5,
                        typingUsersByChannel: g,
                        localTypingDelay: O,
                        EMPTY_TYPING: I
                    }
                };
                return n
            }(r.ZP.Store);
            T.displayName = "TypingStore";
            const w = new T(u.Z, {
                TYPING_START: m,
                TYPING_STOP: _,
                TYPING_START_LOCAL: function(e) {
                    var t = e.channelId,
                        n = i.default.getId();
                    if (null == n) return !1;
                    if (t === a.V) return !1;
                    if (null != O && O.channelId !== t) {
                        null != O.timeout && clearTimeout(O.timeout);
                        O = null
                    }
                    var r = Date.now();
                    if (null != O && (null != O.timeout || O.prevSend + 8e3 > r)) return !1;
                    var f = null == O || O.prevSend > r - 16e3 ? 1500 : 0,
                        s = setTimeout((function() {
                            if (null != O && O.channelId === t && n === i.default.getId() && null != O.timeout) {
                                O.timeout = null;
                                (function(e) {
                                    var t = S(e);
                                    return t === I ? 0 : Object.keys(t).length
                                })(t) > 5 || o.ZP.post({
                                    url: c.ANM.TYPING(t),
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    if (200 === e.status) {
                                        var n, r, o = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                            i = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                        o > 0 && u.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: l.S.SendMessage,
                                            cooldownMs: o
                                        });
                                        i > 0 && u.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: l.S.CreateThread,
                                            cooldownMs: i
                                        })
                                    }
                                }))
                            }
                        }), f);
                    O = {
                        channelId: t,
                        timeout: s,
                        prevSend: r
                    };
                    return m({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    var t = e.channelId,
                        n = i.default.getId();
                    if (null == n) return !1;
                    if (null != O && O.channelId === t && null != O.timeout) {
                        clearTimeout(O.timeout);
                        O = null;
                        return _({
                            channelId: t,
                            userId: n
                        })
                    }
                    return !1
                },
                CONNECTION_OPEN: C,
                OVERLAY_INITIALIZE: C,
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message.author;
                    e.optimistic && function(e) {
                        if (null == O || O.channelId !== e) return !1;
                        null != O.timeout && clearTimeout(O.timeout);
                        O = null
                    }(t);
                    return _({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(744564),
                u = n(840922);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var d = function(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = 864e5,
                h = !1,
                v = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                b = a({}, v);

            function O() {
                b.affinityUserIds = new Set(b.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !u.Z.isBlocked(e)
                })))
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(u.Z);
                    if (null != e) {
                        b.userAffinities = e.userAffinities;
                        b.affinityUserIds = new Set(e.affinityUserIds);
                        b.lastFetched = e.lastFetched
                    }
                    this.syncWith([u.Z], O)
                };
                r.needsRefresh = function() {
                    return Date.now() - b.lastFetched > y
                };
                r.getFetching = function() {
                    return h
                };
                r.getState = function() {
                    return b
                };
                r.getUserAffinities = function() {
                    return b.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return b.affinityUserIds
                };
                r.__getLocalVars = function() {
                    return {
                        USER_AFFINITY_TTL: y,
                        fetching: h,
                        DEFAULT_AFFINITY_STORE_STATE: v,
                        state: b
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "UserAffinitiesStore";
            E.persistKey = "UserAffinitiesStore";
            E.migrations = [function(e) {
                return null
            }];
            const g = new E(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    b.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    b.lastFetched = Date.now();
                    O();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    b = a({}, v)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r = n(730381),
                o = n.n(r),
                u = n(202351),
                i = n(575626),
                l = n(744564),
                c = n(339432),
                a = n(996344),
                f = n(48315),
                s = n(382060),
                d = n(61209),
                p = n(567403),
                y = n(717091),
                h = n(9430),
                v = n(473903),
                b = n(102921),
                O = n(897196);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function I(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var m, _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(m || (m = {}));
            var T = new i.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? m.FAVORITE : m.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function w(e) {
                var t, n, r = null !== (n = null !== (t = y.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    u = e.isMessageRequestTimestamp;
                if (null != u) {
                    var i = o()(u).valueOf(),
                        l = b.Z.fromTimestamp(i);
                    return b.Z.compare(r, l) > 0 ? r : l
                }
                return r
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: h.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: a.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function A() {
                T.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    T.set(e.id, P(e))
                }));
                (0, c.cn)() && h.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, s.zi)(t.type) && T.set(t.id, P(t))
                }))
            }

            function j() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) T.set(t, P(e[t]))
            }
            var L, R, N, Z = (L = [], R = [], N = [], function() {
                    var e = T.values(m.FAVORITE),
                        t = T.values(m.DEFAULT);
                    if (L !== e || R !== t) {
                        N = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return N.push(t)
                        }));
                        L = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return N.push(t)
                        }));
                        R = t
                    }
                    return N
                }),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = C(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, p.Z, v.default, a.Z, h.Z);
                        this.syncWith([h.Z, a.Z], A)
                    };
                    r.getPrivateChannelIds = function() {
                        return Z()
                    };
                    r.getSortedChannels = function() {
                        return [T.values(m.FAVORITE), T.values(m.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        T.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    r.__getLocalVars = function() {
                        return {
                            SortedChannelType: m,
                            data: T,
                            getPrivateChannelIds: Z
                        }
                    };
                    return n
                }(u.ZP.Store);
            U.displayName = "PrivateChannelSortStore";
            const D = new U(l.Z, {
                CONNECTION_OPEN: A,
                CONNECTION_OPEN_SUPPLEMENTAL: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED: j,
                CACHE_LOADED_LAZY: j,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, s.hv)(e.type) || T.has(e.id)) && T.set(e.id, P(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0,
                            s.hv)(t.type)) return !1;
                    if (t.id === O.V) return !1;
                    T.set(t.id, P(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return T.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!T.has(t)) return !1;
                    var r = d.Z.getChannel(t);
                    return null != r && T.set(t, P(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return T.delete(t)
                }
            })
        },
        971611: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = n(667294),
                u = n(294184),
                i = n.n(u),
                l = n(882723),
                c = n(797343),
                a = n.n(c);

            function f(e) {
                var t = e.children,
                    n = e["aria-label"],
                    u = e.className,
                    c = e.position,
                    f = o.useRef(null),
                    s = null != n ? n : "string" == typeof t && t;
                return (0, r.jsx)(l.Tooltip, {
                    position: null != c ? c : "top",
                    delay: 500,
                    text: t,
                    "aria-label": s,
                    children: function(n) {
                        var o = n.onMouseEnter,
                            l = n.onMouseLeave;
                        return (0, r.jsx)("div", {
                            className: i()(u, a().overflow),
                            ref: f,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: function() {
                                var e = f.current;
                                null != e && e.offsetWidth < e.scrollWidth && (null == o || o())
                            },
                            onMouseLeave: l,
                            children: t
                        })
                    }
                })
            }
        },
        466317: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294),
                    n(633878));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
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

            function c(e, t) {
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

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    f = e.color,
                    s = void 0 === f ? "currentColor" : f,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return 16 === n || 16 === a ? (0, r.jsx)("svg", l(i({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fill: s,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    })
                })) : (0, r.jsx)("svg", l(i({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: s,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    })
                }))
            }
        },
        81308: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    a = void 0 === c ? 24 : c,
                    f = e.color,
                    s = void 0 === f ? "currentColor" : f,
                    d = e.foreground,
                    p = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", i(function(e) {
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
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                        className: d,
                        fill: s
                    }), (0, r.jsx)("path", {
                        d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                        className: d,
                        fill: s
                    })]
                }))
            }
        },
        816810: (e, t, n) => {
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        }
    }
]);