"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [28988], {
        20170: (n, t, e) => {
            e.d(t, {
                C: () => m,
                u: () => E
            });
            var r = e(940060),
                i = e(105783),
                u = e(703790),
                a = e(567403),
                o = e(888236),
                l = e(404741),
                c = e(185219),
                s = e(322008),
                f = e(2590),
                d = e(473708);

            function h(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r
            }

            function y(n, t, e, r, i, u, a) {
                try {
                    var o = n[u](a),
                        l = o.value
                } catch (n) {
                    e(n);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function v(n) {
                return function() {
                    var t = this,
                        e = arguments;
                    return new Promise((function(r, i) {
                        var u = n.apply(t, e);

                        function a(n) {
                            y(u, r, i, a, o, "next", n)
                        }

                        function o(n) {
                            y(u, r, i, a, o, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(n, t) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, t) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var r, i, u = [],
                            a = !0,
                            o = !1;
                        try {
                            for (e = e.call(n); !(a = (r = e.next()).done); a = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (n) {
                            o = !0;
                            i = n
                        } finally {
                            try {
                                a || null == e.return || e.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return u
                    }
                }(n, t) || function(n, t) {
                    if (!n) return;
                    if ("string" == typeof n) return h(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return h(n, t)
                }(n, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(n, t) {
                var e, r, i, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function o(u) {
                    return function(o) {
                        return function(u) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (e = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = t.call(n, a)
                            } catch (n) {
                                u = [6, n];
                                r = 0
                            } finally {
                                e = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, o])
                    }
                }
            };

            function m(n, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = v((function(n, t) {
                    return b(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return null == n ? [2, !0] : [4, w(n, t, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, e.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(n, t, e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = v((function(n, t, e) {
                    var r, i, u, d, h, y, v, m, g;
                    return b(this, (function(b) {
                        switch (b.label) {
                            case 0:
                                return null == (i = a.Z.getGuild(n)) ? [2, !0] : (u = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(f.oNc.GUILD_ONBOARDING))) ? u && l.Z.shouldFetchPrompts(n) ? [4, (0, o.eM)(n)] : [3, 2] : [2, !0];
                            case 1:
                                b.sent();
                                b.label = 2;
                            case 2:
                                d = l.Z.getDefaultChannelIds(n);
                                h = p((0, c.d9)(n, d), 2), y = h[0], v = h[1];
                                if (!d.includes(t)) return [2, !0];
                                m = e.removingView && v.length - 1 < s.md;
                                g = (e.removingChat || e.removingView) && y.length - 1 < s.X;
                                return [2, !m && !g]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(n, t, e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = v((function(n, t, e) {
                    var a, o, l, c;
                    return b(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (null == (a = n.getGuildId())) return [2, !0];
                                null != e && (t = r.Z.filter(t, r.Z.invert(e)));
                                o = n.permissionOverwrites[a];
                                l = null != o ? r.Z.filter(o.deny, r.Z.invert(o.allow)) : r.Z.deserialize(0);
                                c = {
                                    removingView: r.Z.has(t, f.Plq.VIEW_CHANNEL) && !r.Z.has(l, f.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                n.isForumLikeChannel() ? c.removingChat = r.Z.has(t, f.Plq.SEND_MESSAGES_IN_THREADS) && !r.Z.has(l, f.Plq.SEND_MESSAGES_IN_THREADS) : c.removingChat = r.Z.has(t, f.Plq.SEND_MESSAGES) && !r.Z.has(l, f.Plq.SEND_MESSAGES);
                                return c.removingChat || c.removingView ? [4, w(a, n.id, c)] : [2, !0];
                            case 1:
                                if (!s.sent()) {
                                    i.Z.show({
                                        title: d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                i.Z.close();
                                                u.Z.open(a, f.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        134954: (n, t, e) => {
            e.d(t, {
                Z: () => l
            });
            var r = e(667294),
                i = e(202351),
                u = e(302685),
                a = e(664731),
                o = {};

            function l(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    e = (0, i.e7)([a.Z], (function() {
                        return a.Z.getRoleMemberCount(n)
                    }));
                r.useEffect((function() {
                    if (null != n) {
                        var e = o[n];
                        if (!(null != e && t > 0 && Date.now() - e < t)) {
                            o[n] = Date.now();
                            u.E(n)
                        }
                    }
                }), [n, t]);
                return e
            }
        },
        371188: (n, t, e) => {
            e.d(t, {
                G3: () => l,
                Ho: () => p,
                Ib: () => c,
                PJ: () => b,
                ib: () => s,
                ub: () => h,
                v1: () => v
            });
            var r = e(730381),
                i = e.n(r),
                u = e(146464);
            e(3155);

            function a(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r
            }

            function o(n) {
                return function(n) {
                    if (Array.isArray(n)) return a(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, t) {
                    if (!n) return;
                    if ("string" == typeof n) return a(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(n, t)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = 365,
                c = l + 1,
                s = function() {
                    var n = i()().add(1, "hour"),
                        t = n.hour();
                    n.minutes() >= 30 && (t += 1);
                    return n.hour(t).minutes(0).seconds(0)
                };
            var f = function(n, t) {
                    return n.format(n.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                d = function(n, t) {
                    return n.diff(t, "days") > 1 ? f(n, t) : n.calendar(t)
                };

            function h(n, t, e) {
                null == e && (e = i()());
                var r = i()(n),
                    u = null != t && "" !== t ? i()(t) : void 0,
                    a = null != t && r.isSame(u, "day");
                return {
                    startDateTimeString: d(r, e),
                    endDateTimeString: null != u ? a ? u.format("LT") : f(u, e) : void 0,
                    currentOrPastEvent: r <= e,
                    upcomingEvent: r <= i()().add(1, "hour"),
                    withinStartWindow: r <= i()().add(15, "minute"),
                    diffMinutes: r.diff(e, "minutes")
                }
            }

            function y(n, t) {
                var e;
                if (null != n) {
                    e = {
                        startDate: i()(n),
                        endDate: void 0
                    };
                    null != t && (e.endDate = i()(t))
                }
                return e
            }

            function v(n) {
                return y(n.scheduledStartTime, n.scheduledEndTime)
            }

            function p(n) {
                return new u.Ci({
                    dtstart: new Date(n.start),
                    until: null != n.end ? new Date(n.end) : null,
                    freq: n.frequency,
                    interval: n.interval,
                    byweekday: null != n.byWeekday ? o(n.byWeekday) : null,
                    bymonth: null != n.byMonth ? o(n.byMonth) : null,
                    bymonthday: null != n.byMonthDay ? o(n.byMonthDay) : null,
                    byyearday: null != n.byYearDay ? o(n.byYearDay) : null,
                    count: n.count
                })
            }

            function b(n, t) {
                for (var e = [], r = new Date, i = 0; i < n;) {
                    var u = t.after(r);
                    if (null == u) break;
                    r = u;
                    e.push(u);
                    i++
                }
                return e
            }
        }
    }
]);