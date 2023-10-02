"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45660], {
        945660: (e, t, n) => {
            n.d(t, {
                ZP: () => U,
                qY: () => B,
                gM: () => H,
                eF: () => R,
                k5: () => x,
                u1: () => W,
                Vm: () => M,
                sz: () => k
            });
            var r = n(667294),
                u = n(202351),
                i = n(826945),
                o = n(61209),
                l = n(5544),
                c = n(567403),
                a = n(682776),
                f = n(72580),
                s = n(269300),
                d = n(730381),
                E = n.n(d),
                v = n(842227),
                p = n(3155);

            function y(e, t, n) {
                var r = E()(),
                    u = new Date(e.scheduled_start_time).getTime(),
                    i = {
                        start: u - p.VF,
                        end: u
                    };
                if (r.isBetween(i.start, i.end)) {
                    if (null != t) {
                        var o = E()(t),
                            l = o.isBetween(i.start, i.end),
                            c = o.isBetween(E()(u).subtract(p.zV, "days"), u);
                        return l || c && !n ? void 0 : p.X_.EVENT_STARTING_SOON
                    }
                    return p.X_.EVENT_STARTING_SOON
                }
                var a = v.default.extractTimestamp(e.id),
                    f = Math.min(a + p.Fc, u);
                if (r.isBetween(a, f) && null == t && !n) return p.X_.NEW_EVENT
            }
            var h = n(744564),
                b = n(664625);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return N(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
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
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = N(e);
                    if (t) {
                        var u = N(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }
            var D = {};
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
                    t && Z(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (D = e)
                };
                r.getGuildEventNoticeDismissalTime = function(e) {
                    return D[e]
                };
                r.getAllEventDismissals = function() {
                    return D
                };
                r.getState = function() {
                    return D
                };
                return n
            }(u.ZP.PersistedStore);
            S.displayName = "UpcomingEventNoticesDismissalsStore";
            S.persistKey = "upcomingEventNotices";
            const w = new S(h.Z, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    var t = e.eventId,
                        n = O({}, D);
                    n[t] = Date.now();
                    D = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t = e.guildScheduledEvent;
                    if (t.status === p.p1.CANCELED || t.status === p.p1.COMPLETED) {
                        var n = O({}, D);
                        delete n[t.id];
                        D = n
                    }
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = O({}, D);
                    delete n[t.id];
                    D = n
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t = e.userId,
                        n = e.guildEventId;
                    if (t === b.default.getId()) {
                        var r = s.ZP.getGuildScheduledEvent(n);
                        if (null != r && r.status === p.p1.SCHEDULED) {
                            if (null == D[n]) {
                                if (y(r, void 0, !1) === p.X_.NEW_EVENT) {
                                    var u = O({}, D);
                                    u[n] = Date.now();
                                    D = u
                                }
                            }
                        }
                    }
                }
            });
            var C = n(371188),
                T = n(2590);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function G(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function V(e, t) {
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

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, u, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            u = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw u
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = [];

            function U(e, t) {
                return (0, u.Wu)([c.Z, i.Z, s.ZP, a.Z, o.Z, l.ZP], (function() {
                    var n = c.Z.getGuild(e);
                    if (null == n) return L;
                    if (n.hasFeature(T.oNc.HUB)) {
                        var r, u, d = null === (r = l.ZP.getDefaultChannel(n.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (u = i.Z.getEventDirectoryEntries(d)) && void 0 !== u ? u : []).map((function(e) {
                            var t = e.scheduledEventId,
                                n = s.ZP.getGuildScheduledEvent(t);
                            return null != n ? n : i.Z.getCachedGuildScheduledEventById(t)
                        })).filter(f.lm)
                    }
                    return s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(n.id)).filter((function(e) {
                        var t = e.channel_id;
                        if (null == t) return !0;
                        var n = o.Z.getChannel(t);
                        return a.Z.can(T.Plq.VIEW_CHANNEL, n)
                    }))
                }), [t, e])
            }

            function B(e) {
                return (0,
                    u.e7)([s.ZP, o.Z, a.Z], (function() {
                    var t = o.Z.getChannel(e);
                    if (!a.Z.can(T.Plq.VIEW_CHANNEL, t)) return null;
                    if (null == (null == t ? void 0 : t.guild_id)) return null;
                    var n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
                    return n.length > 0 ? n[0] : null
                }), [e])
            }

            function H(e) {
                var t = (0, u.Wu)([s.ZP], (function() {
                    return s.ZP.getGuildScheduledEventsForGuild(e)
                }), [e]);
                return r.useMemo((function() {
                    var e = new Map;
                    t.forEach((function(t) {
                        var n = t.channel_id;
                        null != n && e.set(n, t)
                    }));
                    return e
                }), [t])
            }

            function M(e) {
                var t = function(e) {
                        return (0, u.Wu)([s.ZP, o.Z, a.Z], (function() {
                            return s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter((function(e) {
                                if (e.entity_type === p.WX.NONE || e.status !== p.p1.SCHEDULED) return !1;
                                if (null == e.channel_id) return !0;
                                var t = o.Z.getChannel(e.channel_id);
                                return a.Z.can(T.Plq.VIEW_CHANNEL, t)
                            }))
                        }), [e])
                    }(e),
                    n = (0, u.cj)([w], (function() {
                        return w.getAllEventDismissals()
                    })),
                    r = (0, u.cj)([s.ZP], (function() {
                        return null == t ? {} : t.reduce((function(e, t) {
                            return V(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        G(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), G({}, t.id, s.ZP.hasRsvp(t.id, t.guild_id)))
                        }), {})
                    }), [t]);
                if (null != t && null != r)
                    for (var i = 0; i < t.length; i++) {
                        var l, c = t[i],
                            f = y(c, n[c.id], null !== (l = r[c.id]) && void 0 !== l && l);
                        if (null != f) return {
                            upcomingEvent: c,
                            noticeType: f
                        }
                    }
            }

            function x(e) {
                return (0, u.e7)([s.ZP, o.Z, a.Z], (function() {
                    return s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === p.WX.NONE || !(0, s.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var t = o.Z.getChannel(e.channel_id);
                        return a.Z.can(T.Plq.VIEW_CHANNEL, t)
                    }))
                }), [e])
            }

            function W(e) {
                return (0, u.e7)([s.ZP], (function() {
                    return s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function R(e) {
                return (0,
                    u.e7)([o.Z, s.ZP], (function() {
                    var t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != o.Z.getChannel(e.channel_id)
                    }));
                    return o.Z.getChannel(null == t ? void 0 : t.channel_id)
                }), [e])
            }

            function k(e) {
                var t = A(r.useState((function() {
                        return Date.now()
                    })), 2),
                    n = t[0],
                    i = t[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        i(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var o = (0, u.e7)([s.ZP], (function() {
                        return null == e ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, n]),
                    l = r.useMemo((function() {
                        return o.filter((function(e) {
                            var t = (0, C.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                n = t.withinStartWindow,
                                r = t.diffMinutes;
                            return e.status !== p.p1.ACTIVE && n && r < 15
                        }))
                    }), [o]);
                return l
            }
        }
    }
]);