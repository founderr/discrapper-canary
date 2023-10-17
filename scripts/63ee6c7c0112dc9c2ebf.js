(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38501], {
        244224: (e, n, t) => {
            e.exports = t.p + "c1b64035ca9a96e65e1a450302353a58.svg"
        },
        99539: (e, n, t) => {
            "use strict";
            t.d(n, {
                q: () => o
            });
            var r = t(202351),
                a = t(227202),
                l = t(5544),
                i = t(682776);

            function o(e) {
                var n, t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
                return (0, r.Wu)([l.ZP, i.Z], (function() {
                    return l.ZP.getChannels(t)[l.Zb].reduce((function(e, n) {
                        var t = n.channel;
                        if (!t.isGuildStageVoice()) return e;
                        (function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                            return !!e.isGuildStageVoice() && n.can(a.yP, e)
                        })(n.channel, i.Z) && e.push(t);
                        return e
                    }), [])
                }), [t])
            }
        },
        497028: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                a = (t(667294), t(730381)),
                l = t.n(a),
                i = t(304548),
                o = t(559968),
                s = t(123017),
                u = t(371188),
                c = t(473708),
                d = t(908453),
                f = t.n(d);

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }

            function h(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function y(e) {
                var n = e.className,
                    t = e.onScheduleChange,
                    a = e.onTimeChange,
                    d = e.timeSelected,
                    E = void 0 === d || d,
                    y = e.schedule,
                    m = e.showEndDate,
                    p = void 0 !== m && m,
                    _ = e.requireEndDate,
                    g = void 0 !== _ && _,
                    T = e.disableStartDateTime,
                    b = void 0 !== T && T;
                if (null == y) return null;
                var I = null,
                    x = l()(),
                    N = l()().add(u.G3, "days"),
                    S = l()().add(u.Ib, "days"),
                    O = function(e) {
                        t(h(v({}, y), {
                            endDate: e
                        }))
                    };
                p && (I = null != y.endDate || g ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: g,
                            children: (0, r.jsx)(i.DateInput, {
                                value: y.endDate,
                                onSelect: O,
                                minDate: y.startDate,
                                maxDate: S
                            })
                        }), (0, r.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: g,
                            children: (0, r.jsx)(i.TimeInput, {
                                value: y.endDate,
                                onChange: O
                            })
                        })]
                    }), g ? null : (0, r.jsx)(i.Button, {
                        onClick: function() {
                            O(void 0)
                        },
                        look: i.Button.Looks.BLANK,
                        size: i.Button.Sizes.MIN,
                        children: (0, r.jsxs)("div", {
                            className: f().link,
                            children: [(0, r.jsx)(o.Z, {
                                width: 17,
                                height: 17,
                                className: f().removeIcon
                            }), (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: c.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, r.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: function() {
                        O(l()(y.startDate).add(1, "hour"))
                    },
                    children: (0, r.jsxs)("div", {
                        className: f().link,
                        children: [(0, r.jsx)(s.Z, {
                            width: 20,
                            height: 20,
                            className: f().addIcon
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: c.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: n,
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, r.jsx)(i.DateInput, {
                                value: y.startDate,
                                onSelect: function(e) {
                                    t(h(v({}, y), {
                                        startDate: e
                                    }))
                                },
                                minDate: x,
                                maxDate: N,
                                disabled: b
                            })
                        }), (0, r.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, r.jsx)(i.TimeInput, {
                                value: y.startDate,
                                onChange: function(e) {
                                    if (e.isValid()) {
                                        null == a || a(!0);
                                        t(h(v({}, y), {
                                            startDate: e
                                        }))
                                    }
                                },
                                hideValue: !E,
                                disabled: b
                            })
                        })]
                    }), I]
                })
            }
        },
        738501: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => Kn
            });
            var r = t(785893),
                a = t(667294),
                l = t(202351),
                i = t(304548),
                o = t(224813),
                s = t(316878),
                u = t(255875),
                c = t(919810),
                d = t(61209),
                f = t(281110),
                E = t(2590);

            function v(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            v(l, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            v(l, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var y = function(e, n) {
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function m(e, n, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = h((function(e, n, t) {
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, f.ZP.get({
                                    url: E.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                                    query: {
                                        type: n,
                                        entity_id: t
                                    }
                                })];
                            case 1:
                                return [2, r.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var _ = t(612831);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function T(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e, n) {
                    var t, r, a, l, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        },
                        "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                            return this
                        }), l;

                    function o(l) {
                        return function(o) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                i.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(l);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, i)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, o])
                        }
                    }
                },
                x = {
                    can_broadcast: !1
                };

            function N(e, n, t) {
                var r = b(a.useState(x), 2),
                    i = r[0],
                    o = r[1],
                    s = b(a.useState(!1), 2),
                    u = s[0],
                    f = s[1],
                    v = a.useRef(!1),
                    h = null == e ? void 0 : e.id,
                    y = null == e ? void 0 : e.hasFeature(E.oNc.HAS_DIRECTORY_ENTRY);
                a.useEffect((function() {
                    if (y) {
                        if (!v.current && null != h) {
                            var e, t, r = (t = (e = function() {
                                var e;
                                return I(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            v.current = !0;
                                            t.label = 1;
                                        case 1:
                                            t.trys.push([1, 3, , 4]);
                                            return [4, m(h, _.C2.GUILD_SCHEDULED_EVENT, n)];
                                        case 2:
                                            e = t.sent();
                                            o(e);
                                            return [3, 4];
                                        case 3:
                                            t.sent();
                                            o(x);
                                            return [3, 4];
                                        case 4:
                                            v.current = !1;
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var n = this,
                                    t = arguments;
                                return new Promise((function(r, a) {
                                    var l = e.apply(n, t);

                                    function i(e) {
                                        T(l, r, a, i, o, "next", e)
                                    }

                                    function o(e) {
                                        T(l, r, a, i, o, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            }), function() {
                                return t.apply(this, arguments)
                            });
                            r()
                        }
                    } else o(x)
                }), [h, y, n]);
                a.useEffect((function() {
                    if (i.can_broadcast) {
                        var e;
                        f(null === (e = i.has_broadcast) || void 0 === e || e)
                    } else f(!1)
                }), [i]);
                var p = (0, l.e7)([d.Z], (function() {
                    return (0, c.wg)(t, [d.Z])
                }));
                return {
                    broadcastInfo: i,
                    broadcastToDirectoryChannels: p && u,
                    setBroadcastToDirectoryChannels: f,
                    canEveryoneRoleViewEvent: p
                }
            }
            var S = t(5544),
                O = t(567403),
                j = t(294184),
                A = t.n(j),
                C = t(98265),
                L = t(997586),
                D = t.n(L);

            function Z(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e) {
                var n = e.steps,
                    t = e.stepIndex,
                    a = e.onClick;
                return (0, r.jsx)("div", {
                    className: D().container,
                    children: n.map((function(e, n) {
                        var l = t === n;
                        return (0, r.jsxs)(i.Clickable, {
                            onClick: function() {
                                return a(n)
                            },
                            className: D().stepContainer,
                            children: [(0, r.jsx)("div", {
                                className: A()(D().progressBar, Z({}, D().selectedProgressBar, l))
                            }), (0, r.jsx)(C.Z, {
                                color: l ? C.Z.Colors.BRAND : C.Z.Colors.MUTED,
                                size: C.Z.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    }))
                })
            }
            var w = t(443812),
                P = t(786502),
                R = t(474236),
                V = t(269300),
                G = t(242735),
                U = t(787193),
                k = (t(766496), t(682776));
            t(79522);

            function B(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function H(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return B(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, n) {
                var t = H(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [S.ZP], 1),
                    r = t[0];
                if (null == n) return [];
                var a = r.getChannels(e)[S.Zb],
                    l = [],
                    i = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var u, c = a[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {
                        var d = u.value.channel,
                            f = (0, U.Gw)(d),
                            E = f.canCreateGuildEvent,
                            v = f.canManageAllEvents,
                            h = E || v;
                        d.type === n && ((d.isGuildVoice() && h || d.isGuildStageVoice() && h) && l.push(d))
                    }
                } catch (e) {
                    o = !0;
                    s = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (o) throw s
                    }
                }
                return l
            }

            function W(e, n) {
                return (0, l.Wu)([S.ZP], (function() {
                    return F(e, n, [S.ZP])
                }), [e, n])
            }
            var z, Y = t(664625),
                X = t(32421),
                q = t(371188),
                K = t(3155);
            ! function(e) {
                e.CHANNEL_SELECTOR = "ChannelSelector";
                e.DETAILS = "Details";
                e.PREVIEW = "Preview"
            }(z || (z = {}));

            function $(e) {
                return null == e ? null : {
                    start: e.start,
                    end: e.end,
                    frequency: e.frequency,
                    interval: e.interval,
                    by_weekday: e.byWeekday,
                    by_month: e.byMonth,
                    by_month_day: e.byMonthDay,
                    by_year_day: e.byYearDay,
                    count: e.count
                }
            }

            function J(e) {
                return e.map((function(e) {
                    return {
                        event_exception_id: e.eventExceptionId,
                        event_id: e.eventId,
                        guild_id: e.guildId,
                        scheduled_start_time: e.scheduledStartTime,
                        scheduled_end_time: e.scheduledEndTime,
                        is_canceled: e.isCanceled
                    }
                }))
            }

            function Q(e, n, t) {
                var r = e.name,
                    a = e.description,
                    l = e.privacyLevel,
                    i = e.channelId,
                    o = e.scheduledStartTime,
                    s = e.scheduledEndTime,
                    u = e.entityType,
                    c = e.entityMetadata,
                    d = e.image,
                    f = e.recurrenceRule,
                    E = e.eventExceptions;
                return {
                    id: null != t ? t : "FAKELOL",
                    name: r,
                    description: null != a ? a : null,
                    privacy_level: l,
                    scheduled_start_time: o,
                    scheduled_end_time: s,
                    entity_type: u,
                    entity_metadata: null != c ? c : null,
                    image: null != d ? d : void 0,
                    channel_id: i,
                    guild_id: n,
                    creator_id: Y.default.getId(),
                    status: K.p1.SCHEDULED,
                    user_count: 1,
                    recurrence_rule: $(f),
                    guild_scheduled_event_exceptions: J(E)
                }
            }
            var ee = t(197307),
                ne = t(730381),
                te = t.n(ne),
                re = t(773011),
                ae = t(840922),
                le = t(473903),
                ie = t(746103),
                oe = t(755914),
                se = t(407558),
                ue = t(565571),
                ce = t(804134),
                de = t(678545),
                fe = t(99539),
                Ee = t(619584),
                ve = t(422513),
                he = t(115617),
                ye = t(473708),
                me = t(615544),
                pe = t.n(me),
                _e = t(244224),
                ge = t.n(_e),
                Te = function() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: pe().inlineText,
                            children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                        }), (0, r.jsx)(i.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: pe().inlineText,
                            children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                        }), (0, r.jsx)(i.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: pe().inlineText,
                            children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                        }), (0, r.jsx)(i.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: pe().inlineText,
                            children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                        })]
                    })
                };

            function be(e) {
                var n = e.onClick;
                if ((0, l.e7)([ve.qc], (function() {
                        return !ve.qc.hasHotspot(ve.v6.STAGE_CHANNEL_UPSELL)
                    }))) return null;
                return (0, r.jsxs)("div", {
                    className: pe().container,
                    children: [(0, r.jsxs)("div", {
                        className: pe().content,
                        children: [(0, r.jsxs)("div", {
                            className: pe().textContainer,
                            children: [(0, r.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: pe().descriptionText,
                                children: ye.Z.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: Te
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: pe().image,
                            children: (0, r.jsx)("img", {
                                src: ge(),
                                alt: ye.Z.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: pe().footer,
                        children: [(0, r.jsx)(i.Button, {
                            onClick: n,
                            color: i.Button.Colors.PRIMARY,
                            size: i.Button.Sizes.SMALL,
                            className: pe().button,
                            children: ye.Z.Messages.CREATE_STAGE_CHANNEL
                        }), (0, r.jsx)(i.Button, {
                            onClick: function() {
                                he.Kw(ve.v6.STAGE_CHANNEL_UPSELL)
                            },
                            color: i.Button.Colors.TRANSPARENT,
                            size: i.Button.Sizes.SMALL,
                            look: i.ButtonLooks.LINK,
                            children: ye.Z.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
            var Ie = t(456727),
                xe = t.n(Ie);

            function Ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Se(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function Oe(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            Se(l, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            Se(l, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function je(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        je(e, n, t[n])
                    }))
                }
                return e
            }

            function Ce(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function Le(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ne(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ne(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ne(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var De = function(e, n) {
                    var t, r, a, l, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function o(l) {
                        return function(o) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                i.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(l);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, i)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, o])
                        }
                    }
                },
                Ze = function(e) {
                    return e === K.WX.EXTERNAL
                },
                Me = function(e) {
                    var n = e.guildId,
                        t = e.channelType,
                        a = e.channel,
                        l = e.onSelectChannel,
                        o = e.disabled,
                        s = e.entityType,
                        u = t === E.d4z.GUILD_STAGE_VOICE,
                        c = (0, Ee.Q)(a, s),
                        f = W(n, t);
                    return (0, r.jsxs)(i.FormItem, {
                        title: u ? ye.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : ye.Z.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: xe().options,
                        disabled: o,
                        required: !0,
                        children: [(0, r.jsx)(i.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: f.map((function(e) {
                                return {
                                    value: e.id,
                                    label: (0, re.F6)(e, le.default, ae.Z, !0)
                                }
                            })),
                            onChange: function(e) {
                                var n = f.find((function(n) {
                                    return n.id === e
                                }));
                                l(null != n ? n : void 0)
                            },
                            renderOptionPrefix: function(e) {
                                return function(e, n) {
                                    var t = d.Z.getChannel(e);
                                    if (null == t) return null;
                                    var a = t.type === E.d4z.GUILD_STAGE_VOICE,
                                        l = (0, Ee.Q)(t, n),
                                        i = l ? oe.Z : se.Z,
                                        o = l ? ue.Z : ce.Z,
                                        s = a ? o : i;
                                    return (0, r.jsx)(s, {
                                        height: 24,
                                        className: xe().channelOptionIcon
                                    })
                                }(null == e ? void 0 : e.value, s)
                            },
                            isDisabled: o
                        }), !c && (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            className: xe().channelPrivate,
                            variant: "text-sm/normal",
                            children: ye.Z.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function we(e, n, t, r) {
                return n ? {
                    disabled: !0,
                    tooltipText: ye.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : t ? 0 === r && e !== K.WX.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: ye.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: ye.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            var Pe = function(e, n) {
                return function(t) {
                    var r = t.value,
                        a = {
                            entityType: r,
                            scheduledEndTime: void 0
                        };
                    if (Ze(r)) {
                        var l, i = (null !== (l = te()(n.scheduledStartTime)) && void 0 !== l ? l : te()()).add(2, "hour");
                        a.scheduledEndTime = i.toISOString()
                    }
                    e(a)
                }
            };

            function Re(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    o = e.onChange,
                    s = e.isFocusReady,
                    u = t.entityType,
                    c = t.channelId,
                    f = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(c)
                    }), [c]),
                    E = a.useRef(null);
                a.useEffect((function() {
                    if (s && Ze(u)) {
                        var e;
                        null === (e = E.current) || void 0 === e || e.focus()
                    }
                }), [s, u]);
                var v = function(e) {
                        return function(n) {
                            e({
                                entityMetadata: {
                                    location: n
                                }
                            })
                        }
                    }(o),
                    h = function(e) {
                        return function(n) {
                            var t;
                            e({
                                channelId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null
                            })
                        }
                    }(o),
                    y = (0, X.xV)(t),
                    m = (0, X.xC)(u),
                    p = (0, V.xt)(t);
                return null == u || u === K.WX.NONE ? null : Ze(u) ? (0, r.jsx)(i.FormItem, {
                    title: ye.Z.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: xe().options,
                    required: !0,
                    children: (0, r.jsx)(i.TextInput, {
                        className: xe().textInput,
                        onChange: v,
                        placeholder: ye.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: K.gG,
                        value: null != y ? y : "",
                        inputRef: E
                    })
                }) : null == m ? null : (0, r.jsx)(Me, {
                    guildId: n,
                    channelType: m,
                    onSelectChannel: h,
                    channel: f,
                    entityType: u,
                    disabled: p
                })
            }

            function Ve(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    o = e.onChange,
                    s = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(n)
                    }), [n]),
                    u = (0, de.Z)(n, void 0),
                    c = (0, de.Z)(n, E.d4z.GUILD_VOICE),
                    d = (0, de.Z)(n, E.d4z.GUILD_STAGE_VOICE),
                    f = W(n, E.d4z.GUILD_VOICE),
                    v = (0, fe.q)(s),
                    h = null == s ? void 0 : s.hasFeature(E.oNc.COMMUNITY),
                    y = (0, V.xt)(t),
                    m = Pe(o, t),
                    p = a.useMemo((function() {
                        var e = [Ae({
                            name: ye.Z.Messages.VOICE_CHANNEL,
                            value: K.WX.VOICE,
                            desc: ye.Z.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                            icon: oe.Z
                        }, we(K.WX.VOICE, y, c, f.length)), Ae({
                            name: ye.Z.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                            value: K.WX.EXTERNAL,
                            desc: ye.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                            icon: ie.Z
                        }, we(K.WX.EXTERNAL, y, u, 0))];
                        return h ? [Ae({
                            name: ye.Z.Messages.STAGE_CHANNEL,
                            value: K.WX.STAGE_INSTANCE,
                            desc: ye.Z.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                            icon: ue.Z
                        }, we(K.WX.STAGE_INSTANCE, y, d, v.length))].concat(Le(e)) : e
                    }), [u, c, d, h, f.length, v.length, y]);
                return (0, r.jsx)(i.RadioGroup, {
                    value: t.entityType,
                    options: p,
                    onChange: m,
                    className: xe().options
                })
            }

            function Ge(e) {
                var n = e.guildId,
                    a = e.guildEvent,
                    o = (e.validationErrorMessage, e.onChange),
                    s = e.isSlideReady,
                    u = void 0 !== s && s,
                    c = a.entityType,
                    d = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(n)
                    }), [n]),
                    f = (0, fe.q)(d),
                    v = (0, l.e7)([k.Z], (function() {
                        return k.Z.can(E.Plq.MANAGE_CHANNELS, d)
                    })),
                    h = null == d ? void 0 : d.hasFeature(E.oNc.COMMUNITY),
                    y = Pe(o, a),
                    m = h && !Ze(c) && 0 === f.length && v && null != c;
                return (0, r.jsxs)("div", {
                    className: xe().container,
                    children: [(0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: xe().header,
                        children: ye.Z.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, r.jsx)(i.Text, {
                        color: "header-secondary",
                        className: xe().text,
                        variant: "text-sm/normal",
                        children: ye.Z.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, r.jsx)(Ve, {
                        guildId: n,
                        guildEvent: a,
                        onChange: o
                    }), (0, r.jsx)(Re, {
                        guildId: n,
                        guildEvent: a,
                        isFocusReady: u,
                        onChange: o
                    }), m ? (0, r.jsx)(be, {
                        onClick: function() {
                            y({
                                value: K.WX.STAGE_INSTANCE,
                                name: ye.Z.Messages.STAGE_CHANNEL
                            });
                            (0, i.openModalLazy)(Oe((function() {
                                var e, a;
                                return De(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(85157), t.e(62419), t.e(29392), t.e(64572), t.e(69876), t.e(79249), t.e(17586), t.e(89975), t.e(27499), t.e(79913), t.e(19493), t.e(45353), t.e(92465), t.e(73727), t.e(10675), t.e(87440), t.e(73679), t.e(54602), t.e(61953), t.e(6565), t.e(24251), t.e(3790), t.e(31520), t.e(58969), t.e(57645), t.e(18442), t.e(31370)]).then(t.bind(t, 957645))];
                                        case 1:
                                            e = l.sent(), a = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(a, Ce(Ae({}, e), {
                                                    channelType: E.d4z.GUILD_STAGE_VOICE,
                                                    guildId: n
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        }
                    }) : null]
                })
            }
            var Ue = t(344832),
                ke = t(944522),
                Be = t(205316),
                He = t(383495),
                Fe = t(148767),
                We = t.n(Fe);

            function ze(e) {
                var n, t, o, s, u = e.guildId,
                    c = e.guildEvent,
                    f = e.guildEventId,
                    E = e.error,
                    v = a.useMemo((function() {
                        return Q(c, u)
                    }), [c, u]),
                    h = v.channel_id,
                    y = v.name,
                    m = v.image,
                    p = v.description,
                    _ = (0, q.me)(v),
                    g = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(h)
                    }), [h]),
                    T = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(u)
                    }), [u]),
                    b = (0, X.cS)(v),
                    I = (0, l.e7)([le.default], (function() {
                        return null != c.creatorId ? le.default.getUser(c.creatorId) : le.default.getCurrentUser()
                    }), [c.creatorId]),
                    x = (0, l.e7)([ke.Z], (function() {
                        return ke.Z.isLurking(u)
                    }), [u]),
                    N = (0, Ue.KS)(g, T);
                return (0, r.jsxs)("div", {
                    className: We().content,
                    children: [(0, r.jsx)(He.Z, {
                        className: We().previewCard,
                        guild: T,
                        channel: g,
                        location: null != b ? b : void 0,
                        creator: I,
                        userCount: 1,
                        name: y,
                        description: p,
                        startTime: null !== (o = null == _ || null === (n = _.startDate) || void 0 === n ? void 0 : n.toISOString(!1)) && void 0 !== o ? o : "",
                        imageSource: function(e, n) {
                            return null == n && null == e.image ? null : null != n && /^data:/.test(n) ? n : (0, Be.Z)(e)
                        }(Q(c, u, f), m),
                        isActive: !1,
                        isUserLurking: x,
                        status: K.p1.SCHEDULED,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0
                    }), (0, r.jsxs)("div", {
                        className: We().textContainer,
                        children: [(0, r.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: ye.Z.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: We().subheader,
                            children: null != location ? ye.Z.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : ye.Z.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (s = null == g ? void 0 : g.name) && void 0 !== s ? s : "",
                                channelHook: function() {
                                    return (0, r.jsxs)("div", {
                                        className: We().channelName,
                                        children: [null != N ? (0, r.jsx)(N, {
                                            width: 20,
                                            height: 20,
                                            className: We().icon
                                        }) : (0, r.jsx)(ie.Z, {
                                            height: 18,
                                            width: 18,
                                            className: We().locationIcon
                                        }), null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : b]
                                    })
                                }
                            })
                        }), null != E && (0, r.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: We().subheader,
                            children: E.getAnyErrorMessage()
                        })]
                    })]
                })
            }
            var Ye = t(876003),
                Xe = t(694755),
                qe = t(426404),
                Ke = t(800455);
            const $e = (0, t(260561).B)({
                kind: "guild",
                id: "2023-09_guild_events_auto_start",
                label: "Allow users to toggle automatically start events",
                defaultConfig: {
                    canUseEventsAutoStartToggle: !1
                },
                treatments: [{
                    id: 1,
                    label: "User can see autostart toggle",
                    config: {
                        canUseEventsAutoStartToggle: !0
                    }
                }]
            });
            var Je = t(497028),
                Qe = t(921431),
                en = t(79462),
                nn = t(225970),
                tn = t.n(nn);

            function rn(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function an(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            rn(l, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            rn(l, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function ln(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function on(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        ln(e, n, t[n])
                    }))
                }
                return e
            }

            function sn(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var un = function(e, n) {
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function cn(e) {
                var n = e.editBroadcastInfoData,
                    t = n.broadcastInfo,
                    a = n.broadcastToDirectoryChannels,
                    l = n.setBroadcastToDirectoryChannels,
                    o = n.canEveryoneRoleViewEvent;
                return t.can_broadcast ? (0, r.jsxs)(i.FormItem, {
                    title: ye.Z.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: tn().formItem,
                    children: [(0, r.jsx)(i.Tooltip, {
                        text: (0, r.jsx)(i.Text, {
                            className: tn().broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: ye.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": ye.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !o,
                        children: function(e) {
                            return (0, r.jsx)("div", sn(on({}, e), {
                                children: (0, r.jsx)(i.Checkbox, {
                                    type: i.Checkbox.Types.INVERTED,
                                    disabled: !o,
                                    value: a,
                                    onChange: function(e, n) {
                                        return l(n)
                                    },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        color: "interactive-active",
                                        children: ye.Z.Messages.HUB_EVENTS_SHARE_TITLE
                                    })
                                })
                            }))
                        }
                    }), (0, r.jsx)(i.Text, {
                        className: tn().broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: ye.Z.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function dn(e) {
                var n = e.guildEvent,
                    l = e.guildEventId,
                    o = e.guildId,
                    s = e.editBroadcastInfoData,
                    u = e.error,
                    c = e.validationErrorMessage,
                    d = e.onChange,
                    f = e.canSetFocus,
                    E = void 0 !== f && f,
                    v = n.entityType,
                    h = n.channelId,
                    y = n.description,
                    m = n.name,
                    p = n.image,
                    _ = n.scheduledEndTime,
                    g = n.scheduledStartTime,
                    T = n.autoStart,
                    b = $e.useExperiment({
                        location: "Guild Events Modal",
                        guildId: null != o ? o : ""
                    }).canUseEventsAutoStartToggle,
                    I = (0, qe._d)(h),
                    x = null != n && (0, V.xt)(n),
                    N = a.useMemo((function() {
                        var e = (0, q.v1)(n);
                        return null != e ? e : {
                            startDate: te()(g)
                        }
                    }), [n, g]),
                    S = a.useRef(null);
                a.useEffect((function() {
                    if (E) {
                        var e;
                        null === (e = S.current) || void 0 === e || e.focus()
                    }
                }), [E]);
                var O = function(e) {
                        d({
                            image: e
                        })
                    },
                    j = function(e, n) {
                        null != e && void 0 !== n ? (0, i.openModalLazy)(an((function() {
                            var a, l;
                            return un(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(85157), t.e(62419), t.e(69876), t.e(79249), t.e(17586), t.e(40056), t.e(19887), t.e(89975), t.e(45353), t.e(87440), t.e(73679), t.e(24251), t.e(36952), t.e(94302), t.e(28629), t.e(91406), t.e(84959), t.e(32694)]).then(t.bind(t, 17363))];
                                    case 1:
                                        a = i.sent(), l = a.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(l, on({
                                                imgURI: e,
                                                file: n,
                                                onCrop: O,
                                                uploadType: Qe.pC.SCHEDULED_EVENT_IMAGE,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : O(null)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: tn().blockedUsersContainer,
                        children: null != h && !x && I > 0 && (0, r.jsx)(Ke.mv, {
                            channelId: h
                        })
                    }), (0, r.jsxs)("div", {
                        className: tn().form,
                        children: [(0, r.jsxs)(i.FormItem, {
                            title: ye.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: tn().topicFormItem,
                            required: !0,
                            children: [(0, r.jsx)(i.TextInput, {
                                className: tn().textInput,
                                onChange: function(e) {
                                    d({
                                        name: e
                                    })
                                },
                                placeholder: ye.Z.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: en.xA,
                                value: m,
                                autoComplete: "off",
                                inputRef: S
                            }), null != u ? (0, r.jsx)(i.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: tn().warning,
                                children: u.getAnyErrorMessage()
                            }) : null]
                        }), (0, r.jsx)(Je.Z, {
                            className: tn().formItem,
                            onScheduleChange: function(e) {
                                var n = e.startDate,
                                    t = e.endDate,
                                    r = {
                                        scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                        scheduledEndTime: null == t ? void 0 : t.toISOString()
                                    };
                                null != n && null != _ && (null == t ? void 0 : t.isBefore(n)) && (r.scheduledEndTime = n.add(1, "hour").toISOString());
                                d(r)
                            },
                            schedule: N,
                            showEndDate: v === K.WX.EXTERNAL,
                            requireEndDate: v === K.WX.EXTERNAL,
                            disableStartDateTime: x
                        }), null != c ? (0, r.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: tn().warning,
                            children: c
                        }) : null, b ? (0, r.jsx)(i.FormItem, {
                            className: A()(tn().formItem, tn().autoStartToggle),
                            children: (0, r.jsx)(i.Checkbox, {
                                type: i.Checkbox.Types.INVERTED,
                                value: T,
                                onChange: function(e, n) {
                                    d({
                                        autoStart: n
                                    })
                                },
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ye.Z.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, r.jsx)(i.FormItem, {
                            title: ye.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: tn().formItem,
                            children: (0, r.jsx)(i.TextArea, {
                                className: tn().descriptionInput,
                                placeholder: ye.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: y,
                                onChange: function(e) {
                                    d({
                                        description: e
                                    })
                                },
                                maxLength: K.wm,
                                autosize: !0
                            })
                        }), (0, r.jsxs)(i.FormItem, {
                            title: ye.Z.Messages.GUILD_EVENT_IMAGE,
                            className: tn().formItem,
                            children: [(0, r.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: tn().addImageHint,
                                children: ye.Z.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != p ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Ye.Z, {
                                    className: tn().imagePreview,
                                    iconWrapperClassName: tn().imagePreviewInner,
                                    image: p,
                                    makeURL: function(e) {
                                        if (null == e) return null;
                                        if (null != o) {
                                            var t;
                                            return null !== (t = (0, Be.Z)(Q(n, o, l))) && void 0 !== t ? t : null
                                        }
                                    },
                                    onChange: j,
                                    hint: ye.Z.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, r.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    onClick: function() {
                                        return O(null)
                                    },
                                    children: ye.Z.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, r.jsxs)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                children: [ye.Z.Messages.GUILD_EVENT_ADD_IMAGE, (0, r.jsx)(Xe.ZP, {
                                    onChange: j
                                })]
                            })]
                        }), (0, r.jsx)(cn, {
                            editBroadcastInfoData: s
                        })]
                    })]
                })
            }
            var fn = t(766050),
                En = t.n(fn);

            function vn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function hn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        vn(e, n, t[n])
                    }))
                }
                return e
            }

            function yn(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function mn(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }

            function pn(e) {
                var n = e.isSlideReady,
                    t = mn(e, ["isSlideReady"]);
                return (0, r.jsxs)("div", {
                    className: En().slideContainer,
                    children: [(0, r.jsxs)("div", {
                        className: En().header,
                        children: [(0, r.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: ye.Z.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            className: En().text,
                            variant: "text-sm/normal",
                            children: ye.Z.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, r.jsx)(dn, yn(hn({}, t), {
                        canSetFocus: n
                    }))]
                })
            }
            var _n = t(641453),
                gn = t(855350),
                Tn = t(625751),
                bn = t(811622),
                In = t(832642),
                xn = t(869160),
                Nn = t(890251),
                Sn = t(189865),
                On = t(652591),
                jn = t(691797),
                An = t(894692),
                Cn = t.n(An),
                Ln = P.ZP.INVITE_OPTIONS_7_DAYS,
                Dn = P.ZP.INVITE_OPTIONS_UNLIMITED;

            function Zn(e) {
                var n, t = e.onClose,
                    a = e.event,
                    o = null == a ? void 0 : a.guild_id,
                    s = (0, l.e7)([S.ZP], (function() {
                        var e;
                        return null != o ? null === (e = S.ZP.getDefaultChannel(o)) || void 0 === e ? void 0 : e.id : null
                    }), [o]),
                    u = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(o)
                    }), [o]),
                    c = null != (null == u ? void 0 : u.vanityURLCode) && (null == u ? void 0 : u.vanityURLCode.length) > 0,
                    d = gn.Z.useExperiment({
                        guildId: null != o ? o : "",
                        location: "bd50e8_1"
                    }, {
                        autoTrackExposure: c
                    }).enabled,
                    f = null != a ? a : {},
                    v = f.channel_id,
                    h = f.id,
                    y = (0, l.e7)([xn.Z], (function() {
                        var e = null != v ? v : s;
                        return null == e ? null : xn.Z.getInvite(e)
                    }), [v, s]);
                if (null == a) {
                    t();
                    return null
                }
                var m, p, _ = d && null !== (n = null == u ? void 0 : u.vanityURLCode) && void 0 !== n ? n : null == y ? void 0 : y.code,
                    g = null != _ ? (0, _n.tV)({
                        baseCode: _,
                        guildScheduledEventId: h
                    }) : null,
                    T = null == g || null == y,
                    b = (0, Tn.Z)(null != g ? g : ""),
                    I = null !== (m = null == y ? void 0 : y.maxAge) && void 0 !== m ? m : Ln.value,
                    x = null !== (p = null == y ? void 0 : y.maxUses) && void 0 !== p ? p : Dn.value;
                return (0, r.jsxs)("div", {
                    className: Cn().container,
                    children: [(0, r.jsx)(i.Clickable, {
                        onClick: t,
                        className: Cn().close,
                        "aria-label": ye.Z.Messages.CLOSE,
                        children: (0, r.jsx)(Sn.Z, {})
                    }), (0, r.jsx)(In.Z, {
                        children: (0, r.jsx)("div", {
                            className: Cn().iconContainer,
                            children: (0, r.jsx)(Nn.Z, {
                                height: 30,
                                width: 30,
                                className: Cn().icon
                            })
                        })
                    }), (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: Cn().header,
                        children: ye.Z.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: Cn().body,
                        children: ye.Z.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, r.jsxs)("div", {
                        className: Cn().invite,
                        children: [(0, r.jsx)(bn.S, {
                            value: b,
                            autoFocus: !1,
                            onCopy: function(e) {
                                if (!T) {
                                    (0, jn.JG)(e);
                                    var n = (0, X.xC)(a.entity_type);
                                    On.default.track(E.rMx.COPY_INSTANT_INVITE, {
                                        server: a.guild_id,
                                        channel: v,
                                        channel_type: n,
                                        location: E.t4x.GUILD_EVENTS,
                                        code: y.code,
                                        guild_scheduled_event_id: null == a ? void 0 : a.id
                                    })
                                }
                            }
                        }), null == (null == u ? void 0 : u.vanityURLCode) && (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: Cn().inviteDetail,
                            children: (0, P.Vg)(I, x)
                        })]
                    })]
                })
            }

            function Mn(e) {
                var n = e.entityType,
                    t = e.channelId,
                    r = (0, X.xV)(e);
                return null == n ? "An event type must be specified." : null != r && "" !== r.trim() || null != t ? void 0 : "Either a location or channel must be specified."
            }

            function wn(e, n) {
                var t = (0, q.v1)(e),
                    r = e.entityType;
                if (null == t || null == (null == t ? void 0 : t.startDate)) return ye.Z.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                var a = t.startDate,
                    l = t.endDate;
                return r === K.WX.EXTERNAL && null == l ? ye.Z.Messages.GUILD_EVENT_END_DATE_REQUIRED : !n && a.isBefore(te()()) ? ye.Z.Messages.GUILD_EVENT_PAST_START_DATE : null != l && null != a && l.isBefore(a) ? ye.Z.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != l && l.isBefore(te()()) ? ye.Z.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
            }
            var Pn = t(161248),
                Rn = t.n(Pn);

            function Vn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Gn(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function Un(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            Gn(l, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            Gn(l, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function kn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Bn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Vn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Vn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Hn, Fn = function(e, n) {
                    var t, r, a, l, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        },
                        "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                            return this
                        }), l;

                    function o(l) {
                        return function(o) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                i.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(l);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, i)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, o])
                        }
                    }
                },
                Wn = P.ZP.INVITE_OPTIONS_7_DAYS,
                zn = P.ZP.INVITE_OPTIONS_UNLIMITED,
                Yn = 100;
            ! function(e) {
                e[e.ENTITY = 0] = "ENTITY";
                e[e.SETTINGS = 1] = "SETTINGS";
                e[e.PREVIEW = 2] = "PREVIEW";
                e[e.SUCCESS = 3] = "SUCCESS"
            }(Hn || (Hn = {}));

            function Xn(e) {
                var n = e.modal,
                    t = a.useContext(u.E).createMultipleConfetti;
                a.useEffect((function() {
                    var e = null == n ? void 0 : n.getScrollerNode();
                    if (null != e) {
                        var r = e.getBoundingClientRect();
                        t({
                            position: {
                                type: "static-random",
                                minValue: {
                                    x: r.left - Yn,
                                    y: r.top - Yn
                                },
                                maxValue: {
                                    x: r.left + Yn,
                                    y: r.top + Yn
                                }
                            },
                            velocity: {
                                type: "static-random",
                                minValue: {
                                    x: -20,
                                    y: -20
                                },
                                maxValue: {
                                    x: -60,
                                    y: -60
                                }
                            }
                        }, 80);
                        t({
                            position: {
                                type: "static-random",
                                minValue: {
                                    x: r.right - Yn,
                                    y: r.top - Yn
                                },
                                maxValue: {
                                    x: r.right + Yn,
                                    y: r.top + Yn
                                }
                            },
                            velocity: {
                                type: "static-random",
                                minValue: {
                                    x: 20,
                                    y: -20
                                },
                                maxValue: {
                                    x: 60,
                                    y: -60
                                }
                            }
                        }, 80)
                    }
                }), [t, n]);
                return null
            }

            function qn(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    o = e.guildEventId,
                    u = e.editBroadcastInfoData,
                    c = e.isEdit,
                    d = e.formErrors,
                    f = e.transitionState,
                    E = e.loading,
                    v = e.error,
                    h = e.onChange,
                    y = e.onSave,
                    m = e.onClose,
                    p = e.createdEvent,
                    _ = (0, w.Dt)(),
                    g = a.useMemo((function() {
                        return [{
                            slideId: Hn.ENTITY,
                            label: ye.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                            valid: null == d.entity,
                            userErrorMessage: d.entity
                        }, {
                            slideId: Hn.SETTINGS,
                            label: ye.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                            valid: null == d.schedule && null == d.topic,
                            userErrorMessage: d.schedule
                        }, {
                            slideId: Hn.PREVIEW,
                            label: ye.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                            valid: !0
                        }]
                    }), [d]),
                    T = Object.keys(Hn).length,
                    b = (0, V.xt)(t) ? Hn.SETTINGS : Hn.ENTITY,
                    I = function(e) {
                        return Math.max(0, Math.min(e, T - 1))
                    },
                    x = Bn(a.useState(b), 2),
                    N = x[0],
                    S = x[1],
                    O = Bn(a.useState(!1), 2),
                    j = O[0],
                    A = O[1],
                    C = a.useMemo((function() {
                        return g.slice(0, N + 1).map((function(e) {
                            return e.valid
                        })).every(Boolean)
                    }), [g, N]),
                    L = N >= g.length ? Hn.SUCCESS : g[I(N)].slideId,
                    D = L === Hn.SUCCESS;
                (0, ee.l)((function(e) {
                    return e.onUpdateCanCloseModal
                }))(D);
                var Z = (0, l.e7)([s.Z], (function() {
                        return s.Z.useReducedMotion
                    })),
                    P = a.useRef(null),
                    R = function(e) {
                        A(!1);
                        S(I(e))
                    };
                a.useEffect((function() {
                    null != p && R(Hn.SUCCESS)
                }), [null == p ? void 0 : p.id, R]);
                var G = function() {
                        if (C) {
                            L === Hn.PREVIEW ? y() : D ? m() : R(N + 1)
                        }
                    },
                    U = function() {
                        R(N - 1)
                    },
                    k = ye.Z.Messages.NEXT;
                L === Hn.PREVIEW && (k = c ? ye.Z.Messages.SAVE_EVENT : ye.Z.Messages.SCHEDULE_EVENT);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(i.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": _,
                        size: i.ModalSize.DYNAMIC,
                        children: [!Z && D ? (0, r.jsx)(Xn, {
                            modal: P.current
                        }) : null, (0, r.jsxs)(i.ModalContent, {
                            className: Rn().content,
                            scrollerRef: P,
                            children: [!D && (0, r.jsx)(M, {
                                steps: g.map((function(e) {
                                    return e.label
                                })),
                                stepIndex: N,
                                onClick: function(e) {
                                    e < N ? U() : e > N && G()
                                }
                            }), (0, r.jsxs)(i.Slides, {
                                activeSlide: L,
                                width: 440,
                                onSlideReady: function(e) {
                                    A(e === L)
                                },
                                children: [(0, r.jsx)(i.Slide, {
                                    id: Hn.ENTITY,
                                    children: (0, r.jsx)(Ge, {
                                        guildId: n,
                                        guildEvent: t,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: j,
                                        onChange: h
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: Hn.SETTINGS,
                                    children: (0, r.jsx)(pn, {
                                        guildEvent: t,
                                        guildEventId: o,
                                        guildId: n,
                                        editBroadcastInfoData: u,
                                        onChange: h,
                                        error: v,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: j
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: Hn.PREVIEW,
                                    children: (0, r.jsx)(ze, {
                                        guildId: n,
                                        guildEvent: t,
                                        guildEventId: o,
                                        error: v
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: Hn.SUCCESS,
                                    children: (0, r.jsx)(Zn, {
                                        onClose: m,
                                        event: p
                                    })
                                })]
                            })]
                        }), !D && (0, r.jsxs)(i.ModalFooter, {
                            className: Rn().footer,
                            children: [(0, r.jsxs)("div", {
                                className: Rn().inline,
                                children: [(0, r.jsx)(i.Button, {
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: m,
                                    children: ye.Z.Messages.CANCEL
                                }), (0, r.jsx)(i.Button, {
                                    onClick: G,
                                    disabled: !C,
                                    className: Rn().button,
                                    submitting: E,
                                    children: k
                                })]
                            }), L !== Hn.ENTITY && (0, r.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.MIN,
                                onClick: U,
                                color: i.Button.Colors.LINK,
                                children: ye.Z.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function Kn(e) {
                var n = e.guildId,
                    t = e.guildScheduledEventId,
                    i = e.transitionState,
                    s = e.onClose,
                    u = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(n)
                    })),
                    d = (0, l.e7)([V.ZP], (function() {
                        return V.ZP.getGuildScheduledEvent(t)
                    }), [t]),
                    f = (0, l.e7)([S.ZP], (function() {
                        return S.ZP.getDefaultChannel(n)
                    }), [n]),
                    v = function(e, n, t) {
                        var r, a, l, i, o, s, u, c, d, f, v = {
                            name: null !== (r = null == n ? void 0 : n.name) && void 0 !== r ? r : "",
                            privacyLevel: null !== (a = null == n ? void 0 : n.privacy_level) && void 0 !== a ? a : K.j8.GUILD_ONLY,
                            description: null !== (l = null == n ? void 0 : n.description) && void 0 !== l ? l : "",
                            scheduledStartTime: null !== (i = null == n ? void 0 : n.scheduled_start_time) && void 0 !== i ? i : (0, q.ib)().toISOString(),
                            entityType: null !== (o = null == n ? void 0 : n.entity_type) && void 0 !== o ? o : K.WX.NONE,
                            entityMetadata: null !== (s = null == n ? void 0 : n.entity_metadata) && void 0 !== s ? s : void 0,
                            channelId: null == n ? void 0 : n.channel_id,
                            creatorId: null == n ? void 0 : n.creator_id,
                            image: null == n ? void 0 : n.image,
                            scheduledEndTime: null == n ? void 0 : n.scheduled_end_time,
                            autoStart: null !== (u = null == n ? void 0 : n.auto_start) && void 0 !== u ? u : !(null == e ? void 0 : e.hasFeature(E.oNc.COMMUNITY)),
                            recurrenceRule: (f = null == n ? void 0 : n.recurrence_rule, null == f ? null : {
                                start: f.start,
                                end: f.end,
                                frequency: f.frequency,
                                interval: f.interval,
                                byWeekday: f.by_weekday,
                                byMonth: f.by_month,
                                byMonthDay: f.by_month_day,
                                byYearDay: f.by_year_day,
                                count: f.count
                            }),
                            eventExceptions: (d = null !== (c = null == n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== c ? c : [], d.map((function(e) {
                                return {
                                    eventExceptionId: e.event_exception_id,
                                    eventId: e.event_id,
                                    guildId: e.guild_id,
                                    scheduledStartTime: e.scheduled_start_time,
                                    scheduledEndTime: e.scheduled_end_time,
                                    isCanceled: e.is_canceled
                                }
                            })))
                        };
                        if (function(e) {
                                return null != e && "id" in e
                            }(n) && (null == n ? void 0 : n.entity_type) === K.WX.EXTERNAL) {
                            var h = (0, X.cS)(n);
                            null != h && (v.entityMetadata = {
                                location: h
                            })
                        } else if (null == v.channelId && null != t) {
                            v.channelId = t.id;
                            t.isGuildStageVoice() ? v.entityType = K.WX.STAGE_INSTANCE : t.isGuildVoice() && (v.entityType = K.WX.VOICE)
                        }
                        return v
                    }(u, d, f),
                    h = Bn(a.useState(v), 2),
                    y = h[0],
                    m = h[1],
                    p = Bn(a.useState(function(e) {
                        return Boolean(null == e ? void 0 : e.id)
                    }(d)), 1),
                    _ = p[0],
                    g = Bn(a.useState(null), 2),
                    T = g[0],
                    b = g[1],
                    I = N(u, null == d ? void 0 : d.id, y),
                    x = Bn((0, R.Z)(Un((function() {
                        var e, r;
                        return Fn(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null != T) return [2];
                                    e = {
                                        broadcastToDirectoryChannels: I.broadcastToDirectoryChannels
                                    };
                                    return _ && null != t ? [4, G.Z.saveEvent(t, y, n, e)] : [3, 2];
                                case 1:
                                    a.sent();
                                    return [2, s()];
                                case 2:
                                    return [4, G.Z.createGuildEvent(y, n, e)];
                                case 3:
                                    ! function(e) {
                                        var n, t = (0, c.so)(e),
                                            r = null !== (n = e.channel_id) && void 0 !== n ? n : null == f ? void 0 : f.id;
                                        null != r && o.Z.createInvite(r, {
                                            max_age: Wn.value,
                                            max_uses: zn.value
                                        }, E.t4x.GUILD_EVENTS);
                                        t ? b(e) : s()
                                    }((r = a.sent()).body);
                                    return [2, r]
                            }
                        }))
                    }))), 2),
                    j = x[0],
                    A = x[1],
                    C = A.loading,
                    L = A.error,
                    D = a.useMemo((function() {
                        return function(e, n) {
                            return {
                                entity: Mn(e),
                                schedule: wn(e, n),
                                topic: (t = e, r = t.name, null == r || "" === r.trim() ? "Topic must be specified." : void 0)
                            };
                            var t, r
                        }(y, _)
                    }), [y, _]);
                return (0, r.jsx)(qn, {
                    guildId: n,
                    guildEvent: y,
                    guildEventId: t,
                    editBroadcastInfoData: I,
                    isEdit: _,
                    formErrors: D,
                    transitionState: i,
                    loading: C,
                    error: L,
                    onChange: function(e) {
                        if (null != e.entityType) {
                            var t, r = (0, X.xC)(e.entityType),
                                a = Bn(F(n, r), 1)[0];
                            e.channelId = null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : null;
                            e.entityType !== K.WX.EXTERNAL && y.entityType === K.WX.EXTERNAL && (e.entityMetadata = null)
                        }
                        m((function(n) {
                            return function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        kn(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, n, e)
                        }))
                    },
                    onSave: j,
                    onClose: s,
                    createdEvent: T
                })
            }
        },
        855350: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
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
        811622: (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => w,
                S: () => M
            });
            var r = t(785893),
                a = t(667294),
                l = t(294184),
                i = t.n(l),
                o = t(816810),
                s = t(202351),
                u = t(513328),
                c = t(304548),
                d = t(464187),
                f = t(793461),
                E = t(652591),
                v = t(691797),
                h = t(661123),
                y = t(786502),
                m = t(703790),
                p = t(682776),
                _ = t(2590),
                g = t(473708),
                T = t(138646),
                b = t.n(T);

            function I(e) {
                var n = e.guild,
                    t = e.error,
                    l = e.onClose,
                    i = n.id,
                    o = a.useCallback((function() {
                        l();
                        m.Z.open(i, _.pNK.INSTANT_INVITES)
                    }), [i, l]),
                    s = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Clickable, {
                            className: b().errorLink,
                            onClick: o,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), [o]),
                    u = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Anchor, {
                            href: _.EYA.INVITES_HELP,
                            target: "_blank",
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), []),
                    d = t.code === _.evJ.TOO_MANY_INVITES ? p.Z.can(_.Plq.MANAGE_GUILD, n) ? g.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                        inviteListHook: s,
                        inviteHelpHook: u
                    }) : g.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER : t.getAnyErrorMessage();
                return (0, r.jsx)(c.Text, {
                    className: b().errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: d
                })
            }
            var x = t(718634),
                N = t(229481),
                S = t.n(N),
                O = t(3066),
                j = t.n(O),
                A = t(380203),
                C = t.n(A);

            function L(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return L(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = s.ZP.connectStores([f.Z], (function() {
                    return {
                        hideValue: f.Z.hideInstantInvites
                    }
                }))((function(e) {
                    var n = e.value,
                        t = e.autoFocus,
                        l = e.hideValue,
                        o = e.onCopy,
                        s = e.disabled,
                        d = Z(a.useState(!1), 2),
                        f = d[0],
                        E = d[1],
                        h = Z(a.useState(!1), 2),
                        y = h[0],
                        m = h[1],
                        p = a.useMemo((function() {
                            return new u.sW(1e3, (function() {
                                return m(!1)
                            }))
                        }), [m]);
                    a.useEffect((function() {
                        return function() {
                            p.cancel()
                        }
                    }), [p]);
                    var _;
                    return (0, r.jsxs)("div", {
                        className: i()(S().input, j().flexJustifyBetween, j().flexCenter, (_ = {}, D(_, S().success, y), D(_, S().focused, f), _)),
                        children: [(0, r.jsx)(c.TextInput, {
                            className: b().copyInput,
                            name: "invite",
                            value: l ? g.Z.Messages.INSTANT_INVITE_HIDDEN : n,
                            editable: !1,
                            inputClassName: b().noBorder,
                            autoFocus: t,
                            onFocus: function() {
                                return t ? E(!0) : null
                            },
                            onBlur: function() {
                                return t ? E(!1) : null
                            },
                            spellCheck: "false",
                            onClick: function(e) {
                                return e.currentTarget.select()
                            },
                            "aria-label": g.Z.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: s
                        }), v.wS ? (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: y ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                            className: b().copyButton,
                            onClick: function() {
                                m(!0);
                                p.delay();
                                o(n)
                            },
                            disabled: s,
                            children: y ? g.Z.Messages.INVITE_COPIED : g.Z.Messages.COPY
                        }) : null]
                    })
                })),
                w = function(e) {
                    var n = e.guild,
                        t = e.noInvitesAvailable,
                        l = e.showFriends,
                        s = e.onClose,
                        u = e.modalState,
                        f = e.isGuestInviteCreationToggleEnabled,
                        m = e.inviteFlags,
                        p = e.setInviteFlags,
                        T = e.showGuestInviteToggleForCurrentVoiceChannel,
                        N = e.copyValue,
                        S = e.changePage,
                        O = e.inviteChannel,
                        j = e.source,
                        A = e.code,
                        L = e.guildScheduledEvent,
                        D = e.disabled,
                        Z = u.maxAge,
                        w = u.maxUses,
                        P = u.networkError,
                        R = u.showVanityURL,
                        V = a.useCallback((function() {
                            (0, v.JG)(N);
                            E.default.track(_.rMx.COPY_INSTANT_INVITE, {
                                server: d.Z.getGuildId(),
                                channel: null == O ? void 0 : O.id,
                                channel_type: null == O ? void 0 : O.type,
                                location: j,
                                code: A,
                                guild_scheduled_event_id: null == L ? void 0 : L.id
                            })
                        }), [N, O, j, A, L]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(M, {
                            value: N,
                            autoFocus: l,
                            onCopy: V,
                            disabled: D
                        }), f ? (0, r.jsx)("div", {
                            className: b().temporaryMembershipContainerBackground,
                            children: (0, r.jsx)(c.FormSwitch, {
                                className: b().temporaryMembershipContainer,
                                value: (0,
                                    h.yE)(m, o.$.IS_GUEST_INVITE),
                                onChange: function(e) {
                                    return p((0, h.mB)(m, o.$.IS_GUEST_INVITE, e))
                                },
                                note: g.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: D,
                                hideBorder: !0,
                                children: T ? g.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : g.Z.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, t || R ? null : (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: i()(C().marginTop8, b().footerText),
                            children: [(0, y.Vg)(Z, w), " ", l ? (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: g.Z.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !t && l && R ? (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: i()(C().marginTop8, b().footerText),
                            children: [g.Z.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: g.Z.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != P ? (0, r.jsx)(I, {
                            guild: n,
                            error: P,
                            onClose: s
                        }) : null]
                    })
                }
        },
        800455: (e, n, t) => {
            "use strict";
            t.d(n, {
                mv: () => g,
                Xd: () => T
            });
            var r = t(785893),
                a = (t(667294),
                    t(202351)),
                l = t(795308),
                i = t(304548),
                o = t(971402),
                s = t(742257),
                u = t(961241),
                c = t(98265),
                d = t(661782),
                f = t(749565),
                E = t(933022),
                v = t(426404),
                h = t(473708),
                y = t(858003),
                m = t.n(y);

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var g = function(e) {
                    var n = e.channelId,
                        t = (0, v._d)(n);
                    if (0 === t) return null;
                    return (0, r.jsxs)("div", {
                        className: m().blockedNotice,
                        children: [(0, r.jsx)(s.Z, {
                            className: m().blockedIcon,
                            color: l.Z.unsafe_rawColors.RED_400.css
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: h.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: t
                            })
                        }), (0, r.jsx)(i.Clickable, {
                            className: m().blockedButton,
                            onClick: function(e) {
                                (0, o.vq)(e, (function(e) {
                                    return (0, r.jsx)(b, _(function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                p(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        channelId: n
                                    }))
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: h.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                T = function(e) {
                    var n = e.user,
                        t = e.showStatus,
                        l = e.speaker,
                        o = e.channelId,
                        s = (0, a.e7)([E.ZP], (function() {
                            return E.ZP.isModerator(n.id, o)
                        })),
                        v = null;
                    t && (v = l ? h.Z.Messages.STAGE_SPEAKER : s ? h.Z.Messages.STAGE_MODERATOR_TOOLTIP : h.Z.Messages.STAGE_AUDIENCE);
                    return (0, r.jsxs)("div", {
                        className: m().user,
                        children: [(0, r.jsx)(d.Z, {
                            src: n.getAvatarURL(null, 32),
                            size: i.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: l ? function() {
                                return (0, r.jsx)(u.Z, {
                                    className: m().icon
                                })
                            } : null
                        }, n.id), (0, r.jsxs)("div", {
                            className: m().userInfo,
                            children: [(0, r.jsxs)("div", {
                                className: m().username,
                                children: [(0, r.jsx)(c.Z, {
                                    size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                    children: f.ZP.getName(n)
                                }), (0, r.jsx)(c.Z, {
                                    size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                    color: c.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(n.discriminator)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: m().username,
                                children: [(0, r.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: h.Z.Messages.BLOCKED
                                }), (0, r.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", v]
                                })]
                            })]
                        })]
                    })
                },
                b = function(e) {
                    var n = e.channelId,
                        t = (0, v.z)(n);
                    return (0, r.jsx)(i.Scroller, {
                        className: m().container,
                        children: t.map((function(e) {
                            var t = e.user;
                            return (0, r.jsx)(T, {
                                user: t,
                                channelId: n
                            }, t.id)
                        }))
                    })
                }
        },
        474236: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                a = t(347365);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function i(e, n, t, r, a, l, i) {
                try {
                    var o = e[l](i),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function o(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e, n) {
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function u(e, n) {
                var t, l, u = o(r.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    f = o(r.useState(null), 2),
                    E = f[0],
                    v = f[1],
                    h = (l = (t = function() {
                        var t, r, l;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    d(!0);
                                    v(null);
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = i.sent();
                                    d(!1);
                                    v(null);
                                    return [2, t];
                                case 3:
                                    r = i.sent();
                                    l = new a.Hx(r);
                                    null == n || n(l);
                                    v(l);
                                    d(!1);
                                    return [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var l = t.apply(e, n);

                            function o(e) {
                                i(l, r, a, o, s, "next", e)
                            }

                            function s(e) {
                                i(l, r, a, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [h, {
                    loading: c,
                    error: E
                }]
            }
        }
    }
]);