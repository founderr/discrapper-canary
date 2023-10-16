"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1441], {
        189956: (e, t, n) => {
            n.d(t, {
                M: () => c
            });
            var r = n(730381),
                u = n.n(r),
                i = n(842227),
                o = n(3155);

            function c(e, t, n, r) {
                var c = u()(),
                    l = new Date(e.scheduled_start_time).getTime(),
                    a = {
                        start: l - o.VF,
                        end: l
                    };
                if (c.isBetween(a.start, a.end)) {
                    if (null != t) {
                        var f = u()(t),
                            s = f.isBetween(a.start, a.end),
                            d = f.isBetween(u()(l).subtract(o.zV, "days"), l);
                        return s || d && !r ? void 0 : o.X_.EVENT_STARTING_SOON
                    }
                    return o.X_.EVENT_STARTING_SOON
                }
                var E = i.default.extractTimestamp(e.id),
                    v = Math.min((null != n ? n : E) + o.Fc, l);
                if (c.isBetween(E, v) && null == t && !r) return o.X_.NEW_EVENT
            }
        },
        471442: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var r = n(202351),
                u = n(744564),
                i = n(664625),
                o = n(269300),
                c = n(189956),
                l = n(3155);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function d(e) {
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

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var u = s(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var h = {},
                _ = {};

            function g(e) {
                var t = d({}, h);
                delete t[e];
                h = t;
                var n = d({}, _);
                delete n[e];
                _ = n
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        var t, n;
                        h = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {};
                        _ = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                };
                r.getGuildEventNoticeDismissalTime = function(e) {
                    return h[e]
                };
                r.getAllEventDismissals = function() {
                    return h
                };
                r.getUpcomingNoticeSeenTime = function(e) {
                    return _[e]
                };
                r.getAllUpcomingNoticeSeenTimes = function() {
                    return _
                };
                r.getState = function() {
                    return {
                        upcomingEventDismissals: h,
                        upcomingEventSeenTimestamps: _
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "UpcomingEventNoticesStore";
            b.persistKey = "UpcomingEventNotices";
            const N = new b(u.Z, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    var t = e.eventId,
                        n = d({}, h);
                    n[t] = Date.now();
                    h = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t = e.guildScheduledEvent;
                    t.status !== l.p1.CANCELED && t.status !== l.p1.COMPLETED || g(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    g(e.guildScheduledEvent.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t = e.userId,
                        n = e.guildEventId;
                    if (t === i.default.getId()) {
                        var r = o.ZP.getGuildScheduledEvent(n);
                        if (null != r && r.status === l.p1.SCHEDULED) {
                            if (null == h[n]) {
                                var u = _[n];
                                if ((0, c.M)(r, void 0, u, !1) === l.X_.NEW_EVENT) {
                                    var a = d({}, h);
                                    a[n] = Date.now();
                                    h = a
                                }
                            }
                        }
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    var t = e.guildEventId,
                        n = d({}, _);
                    n[t] = Date.now();
                    _ = n
                }
            })
        },
        201441: (e, t, n) => {
            n.d(t, {
                ZP: () => m,
                qY: () => O,
                gM: () => P,
                Vm: () => Z,
                k5: () => S,
                u1: () => I,
                eF: () => D,
                sz: () => w
            });
            var r = n(667294),
                u = n(202351),
                i = n(826945),
                o = n(61209),
                c = n(5544),
                l = n(567403),
                a = n(682776),
                f = n(72580),
                s = n(269300),
                d = n(189956),
                E = n(471442),
                v = n(371188),
                p = n(3155),
                y = n(2590);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e, t) {
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

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, u, i = [],
                            o = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            u = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (c) throw u
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = [];

            function m(e, t) {
                return (0, u.Wu)([l.Z, i.Z, s.ZP, a.Z, o.Z, c.ZP], (function() {
                    var n = l.Z.getGuild(e);
                    if (null == n) return N;
                    if (n.hasFeature(y.oNc.HUB)) {
                        var r, u, d = null === (r = c.ZP.getDefaultChannel(n.id)) || void 0 === r ? void 0 : r.id;
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
                        return a.Z.can(y.Plq.VIEW_CHANNEL, n)
                    }))
                }), [t, e])
            }

            function O(e) {
                return (0, u.e7)([s.ZP, o.Z, a.Z], (function() {
                    var t = o.Z.getChannel(e);
                    if (!a.Z.can(y.Plq.VIEW_CHANNEL, t)) return null;
                    if (null == (null == t ? void 0 : t.guild_id)) return null;
                    var n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
                    return n.length > 0 ? n[0] : null
                }), [e])
            }

            function P(e) {
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

            function Z(e) {
                var t = function(e) {
                        return (0, u.Wu)([s.ZP, o.Z, a.Z], (function() {
                            return s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter((function(e) {
                                if (e.entity_type === p.WX.NONE || e.status !== p.p1.SCHEDULED) return !1;
                                if (null == e.channel_id) return !0;
                                var t = o.Z.getChannel(e.channel_id);
                                return a.Z.can(y.Plq.VIEW_CHANNEL, t)
                            }))
                        }), [e])
                    }(e),
                    n = (0, u.cj)([E.Z], (function() {
                        return E.Z.getAllEventDismissals()
                    })),
                    r = (0, u.cj)([E.Z], (function() {
                        return E.Z.getAllUpcomingNoticeSeenTimes()
                    })),
                    i = (0, u.cj)([s.ZP], (function() {
                        return null == t ? {} : t.reduce((function(e, t) {
                            return g(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        _(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), _({}, t.id, s.ZP.hasRsvp(t.id, t.guild_id)))
                        }), {})
                    }), [t]);
                if (null != t && null != i)
                    for (var c = 0; c < t.length; c++) {
                        var l, f = t[c],
                            v = n[f.id],
                            h = r[f.id],
                            b = null !== (l = i[f.id]) && void 0 !== l && l,
                            N = (0, d.M)(f, v, h, b);
                        if (null != N) return {
                            upcomingEvent: f,
                            noticeType: N
                        }
                    }
            }

            function S(e) {
                return (0, u.e7)([s.ZP, o.Z, a.Z], (function() {
                    return s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === p.WX.NONE || !(0, s.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var t = o.Z.getChannel(e.channel_id);
                        return a.Z.can(y.Plq.VIEW_CHANNEL, t)
                    }))
                }), [e])
            }

            function I(e) {
                return (0, u.e7)([s.ZP], (function() {
                    return s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function D(e) {
                return (0, u.e7)([o.Z, s.ZP], (function() {
                    var t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != o.Z.getChannel(e.channel_id)
                    }));
                    return o.Z.getChannel(null == t ? void 0 : t.channel_id)
                }), [e])
            }

            function w(e) {
                var t = b(r.useState((function() {
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
                    c = r.useMemo((function() {
                        return o.filter((function(e) {
                            var t = (0, v.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                n = t.withinStartWindow,
                                r = t.diffMinutes;
                            return e.status !== p.p1.ACTIVE && n && r < 15
                        }))
                    }), [o]);
                return c
            }
        }
    }
]);