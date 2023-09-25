(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38501], {
        244224: (e, n, t) => {
            e.exports = t.p + "c1b64035ca9a96e65e1a450302353a58.svg"
        },
        99539: (e, n, t) => {
            "use strict";
            t.d(n, {
                q: () => i
            });
            var r = t(202351),
                a = t(227202),
                l = t(5544),
                o = t(682776);

            function i(e) {
                var n, t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
                return (0, r.Wu)([l.ZP, o.Z], (function() {
                    return l.ZP.getChannels(t)[l.Zb].reduce((function(e, n) {
                        var t = n.channel;
                        if (!t.isGuildStageVoice()) return e;
                        (function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z;
                            return !!e.isGuildStageVoice() && n.can(a.yP, e)
                        })(n.channel, o.Z) && e.push(t);
                        return e
                    }), [])
                }), [t])
            }
        },
        497028: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                a = (t(667294), t(730381)),
                l = t.n(a),
                o = t(882723),
                i = t(559968),
                s = t(123017),
                u = t(371188),
                c = t(473708),
                d = t(250088),
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

            function m(e) {
                var n = e.className,
                    t = e.onScheduleChange,
                    a = e.onTimeChange,
                    d = e.timeSelected,
                    E = void 0 === d || d,
                    m = e.schedule,
                    p = e.showEndDate,
                    y = void 0 !== p && p,
                    g = e.requireEndDate,
                    T = void 0 !== g && g,
                    _ = e.disableStartDateTime,
                    b = void 0 !== _ && _;
                if (null == m) return null;
                var I = null,
                    x = l()(),
                    N = l()().add(u.G3, "days"),
                    S = l()().add(u.Ib, "days"),
                    O = function(e) {
                        t(h(v({}, m), {
                            endDate: e
                        }))
                    };
                y && (I = null != m.endDate || T ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(o.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: T,
                            children: (0, r.jsx)(o.DateInput, {
                                value: m.endDate,
                                onSelect: O,
                                minDate: m.startDate,
                                maxDate: S
                            })
                        }), (0, r.jsx)(o.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: T,
                            children: (0, r.jsx)(o.TimeInput, {
                                value: m.endDate,
                                onChange: O
                            })
                        })]
                    }), T ? null : (0, r.jsx)(o.Button, {
                        onClick: function() {
                            O(void 0)
                        },
                        look: o.Button.Looks.BLANK,
                        size: o.Button.Sizes.MIN,
                        children: (0, r.jsxs)("div", {
                            className: f().link,
                            children: [(0, r.jsx)(i.Z, {
                                width: 17,
                                height: 17,
                                className: f().removeIcon
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: c.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, r.jsx)(o.Button, {
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.MIN,
                    onClick: function() {
                        O(l()(m.startDate).add(1, "hour"))
                    },
                    children: (0, r.jsxs)("div", {
                        className: f().link,
                        children: [(0, r.jsx)(s.Z, {
                            width: 20,
                            height: 20,
                            className: f().addIcon
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: c.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: n,
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(o.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, r.jsx)(o.DateInput, {
                                value: m.startDate,
                                onSelect: function(e) {
                                    t(h(v({}, m), {
                                        startDate: e
                                    }))
                                },
                                minDate: x,
                                maxDate: N,
                                disabled: b
                            })
                        }), (0, r.jsx)(o.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, r.jsx)(o.TimeInput, {
                                value: m.startDate,
                                onChange: function(e) {
                                    if (e.isValid()) {
                                        null == a || a(!0);
                                        t(h(v({}, m), {
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
                default: () => Xn
            });
            var r = t(785893),
                a = t(667294),
                l = t(202351),
                o = t(882723),
                i = t(667569),
                s = t(316878),
                u = t(255875),
                c = t(919810),
                d = t(61209),
                f = t(281110),
                E = t(2590);

            function v(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            v(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            v(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var m = function(e, n) {
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
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
                        }([l, i])
                    }
                }
            };

            function p(e, n, t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = h((function(e, n, t) {
                    return m(this, (function(r) {
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
            var g = t(612831);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                            next: i(0),
                            throw: i(1),
                            return: i(2)
                        },
                        "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                            return this
                        }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
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
                            }([l, i])
                        }
                    }
                },
                x = {
                    can_broadcast: !1
                };

            function N(e, n, t) {
                var r = b(a.useState(x), 2),
                    o = r[0],
                    i = r[1],
                    s = b(a.useState(!1), 2),
                    u = s[0],
                    f = s[1],
                    v = a.useRef(!1),
                    h = null == e ? void 0 : e.id,
                    m = null == e ? void 0 : e.hasFeature(E.oNc.HAS_DIRECTORY_ENTRY);
                a.useEffect((function() {
                    if (m) {
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
                                            return [4, p(h, g.C2.GUILD_SCHEDULED_EVENT, n)];
                                        case 2:
                                            e = t.sent();
                                            i(e);
                                            return [3, 4];
                                        case 3:
                                            t.sent();
                                            i(x);
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

                                    function o(e) {
                                        _(l, r, a, o, i, "next", e)
                                    }

                                    function i(e) {
                                        _(l, r, a, o, i, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            }), function() {
                                return t.apply(this, arguments)
                            });
                            r()
                        }
                    } else i(x)
                }), [h, m, n]);
                a.useEffect((function() {
                    if (o.can_broadcast) {
                        var e;
                        f(null === (e = o.has_broadcast) || void 0 === e || e)
                    } else f(!1)
                }), [o]);
                var y = (0, l.e7)([d.Z], (function() {
                    return (0, c.wg)(t, [d.Z])
                }));
                return {
                    broadcastInfo: o,
                    broadcastToDirectoryChannels: y && u,
                    setBroadcastToDirectoryChannels: f,
                    canEveryoneRoleViewEvent: y
                }
            }
            var S = t(5544),
                O = t(567403),
                j = t(294184),
                A = t.n(j),
                C = t(98265),
                L = t(860741),
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
                        return (0, r.jsxs)(o.Clickable, {
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
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
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
                    o = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var u, c = a[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                        var d = u.value.channel,
                            f = (0, U.Gw)(d),
                            E = f.canCreateGuildEvent,
                            v = f.canManageAllEvents,
                            h = E || v;
                        d.type === n && ((d.isGuildVoice() && h || d.isGuildStageVoice() && h) && l.push(d))
                    }
                } catch (e) {
                    i = !0;
                    s = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (i) throw s
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

            function $(e, n, t) {
                var r = e.name,
                    a = e.description,
                    l = e.privacyLevel,
                    o = e.channelId,
                    i = e.scheduledStartTime,
                    s = e.scheduledEndTime,
                    u = e.entityType,
                    c = e.entityMetadata,
                    d = e.image;
                return {
                    id: null != t ? t : "FAKELOL",
                    name: r,
                    description: null != a ? a : null,
                    privacy_level: l,
                    scheduled_start_time: i,
                    scheduled_end_time: s,
                    entity_type: u,
                    entity_metadata: null != c ? c : null,
                    image: null != d ? d : void 0,
                    channel_id: o,
                    guild_id: n,
                    creator_id: Y.default.getId(),
                    status: K.p1.SCHEDULED,
                    user_count: 1
                }
            }
            var J = t(197307),
                Q = t(730381),
                ee = t.n(Q),
                ne = t(773011),
                te = t(840922),
                re = t(473903),
                ae = t(746103),
                le = t(755914),
                oe = t(407558),
                ie = t(565571),
                se = t(804134),
                ue = t(678545),
                ce = t(99539),
                de = t(619584),
                fe = t(422513),
                Ee = t(115617),
                ve = t(473708),
                he = t(315291),
                me = t.n(he),
                pe = t(244224),
                ye = t.n(pe),
                ge = function() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: me().inlineText,
                            children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: me().inlineText,
                            children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: me().inlineText,
                            children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: me().inlineText,
                            children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                        })]
                    })
                };

            function Te(e) {
                var n = e.onClick;
                if ((0, l.e7)([fe.qc], (function() {
                        return !fe.qc.hasHotspot(fe.v6.STAGE_CHANNEL_UPSELL)
                    }))) return null;
                return (0, r.jsxs)("div", {
                    className: me().container,
                    children: [(0, r.jsxs)("div", {
                        className: me().content,
                        children: [(0, r.jsxs)("div", {
                            className: me().textContainer,
                            children: [(0, r.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, r.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: me().descriptionText,
                                children: ve.Z.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, r.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: ge
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: me().image,
                            children: (0, r.jsx)("img", {
                                src: ye(),
                                alt: ve.Z.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: me().footer,
                        children: [(0, r.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            size: o.Button.Sizes.SMALL,
                            className: me().button,
                            children: ve.Z.Messages.CREATE_STAGE_CHANNEL
                        }), (0,
                            r.jsx)(o.Button, {
                            onClick: function() {
                                Ee.Kw(fe.v6.STAGE_CHANNEL_UPSELL)
                            },
                            color: o.Button.Colors.TRANSPARENT,
                            size: o.Button.Sizes.SMALL,
                            look: o.ButtonLooks.LINK,
                            children: ve.Z.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
            var _e = t(541868),
                be = t.n(_e);

            function Ie(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function xe(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function Ne(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            xe(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            xe(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Se(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Oe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Se(e, n, t[n])
                    }))
                }
                return e
            }

            function je(e, n) {
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

            function Ae(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ie(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ie(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ie(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ce = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
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
                            }([l, i])
                        }
                    }
                },
                Le = function(e) {
                    return e === K.WX.EXTERNAL
                },
                De = function(e) {
                    var n = e.guildId,
                        t = e.channelType,
                        a = e.channel,
                        l = e.onSelectChannel,
                        i = e.disabled,
                        s = e.entityType,
                        u = t === E.d4z.GUILD_STAGE_VOICE,
                        c = (0, de.Q)(a, s),
                        f = W(n, t);
                    return (0, r.jsxs)(o.FormItem, {
                        title: u ? ve.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : ve.Z.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: be().options,
                        disabled: i,
                        required: !0,
                        children: [(0, r.jsx)(o.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: f.map((function(e) {
                                return {
                                    value: e.id,
                                    label: (0, ne.F6)(e, re.default, te.Z, !0)
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
                                        l = (0, de.Q)(t, n),
                                        o = l ? le.Z : oe.Z,
                                        i = l ? ie.Z : se.Z,
                                        s = a ? i : o;
                                    return (0, r.jsx)(s, {
                                        height: 24,
                                        className: be().channelOptionIcon
                                    })
                                }(null == e ? void 0 : e.value, s)
                            },
                            isDisabled: i
                        }), !c && (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: be().channelPrivate,
                            variant: "text-sm/normal",
                            children: ve.Z.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function Ze(e, n, t, r) {
                return n ? {
                    disabled: !0,
                    tooltipText: ve.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : t ? 0 === r && e !== K.WX.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: ve.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: ve.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            var Me = function(e, n) {
                return function(t) {
                    var r = t.value,
                        a = {
                            entityType: r,
                            scheduledEndTime: void 0
                        };
                    if (Le(r)) {
                        var l, o = (null !== (l = ee()(n.scheduledStartTime)) && void 0 !== l ? l : ee()()).add(2, "hour");
                        a.scheduledEndTime = o.toISOString()
                    }
                    e(a)
                }
            };

            function we(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.onChange,
                    s = e.isFocusReady,
                    u = t.entityType,
                    c = t.channelId,
                    f = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(c)
                    }), [c]),
                    E = a.useRef(null);
                a.useEffect((function() {
                    if (s && Le(u)) {
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
                    }(i),
                    h = function(e) {
                        return function(n) {
                            var t;
                            e({
                                channelId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null
                            })
                        }
                    }(i),
                    m = (0, X.xV)(t),
                    p = (0, X.xC)(u),
                    y = (0, V.xt)(t);
                return null == u || u === K.WX.NONE ? null : Le(u) ? (0, r.jsx)(o.FormItem, {
                    title: ve.Z.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: be().options,
                    required: !0,
                    children: (0, r.jsx)(o.TextInput, {
                        className: be().textInput,
                        onChange: v,
                        placeholder: ve.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: K.gG,
                        value: null != m ? m : "",
                        inputRef: E
                    })
                }) : null == p ? null : (0, r.jsx)(De, {
                    guildId: n,
                    channelType: p,
                    onSelectChannel: h,
                    channel: f,
                    entityType: u,
                    disabled: y
                })
            }

            function Pe(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.onChange,
                    s = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(n)
                    }), [n]),
                    u = (0, ue.Z)(n, void 0),
                    c = (0, ue.Z)(n, E.d4z.GUILD_VOICE),
                    d = (0, ue.Z)(n, E.d4z.GUILD_STAGE_VOICE),
                    f = W(n, E.d4z.GUILD_VOICE),
                    v = (0, ce.q)(s),
                    h = null == s ? void 0 : s.hasFeature(E.oNc.COMMUNITY),
                    m = (0, V.xt)(t),
                    p = Me(i, t),
                    y = a.useMemo((function() {
                        var e = [Oe({
                            name: ve.Z.Messages.VOICE_CHANNEL,
                            value: K.WX.VOICE,
                            desc: ve.Z.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                            icon: le.Z
                        }, Ze(K.WX.VOICE, m, c, f.length)), Oe({
                            name: ve.Z.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                            value: K.WX.EXTERNAL,
                            desc: ve.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                            icon: ae.Z
                        }, Ze(K.WX.EXTERNAL, m, u, 0))];
                        return h ? [Oe({
                            name: ve.Z.Messages.STAGE_CHANNEL,
                            value: K.WX.STAGE_INSTANCE,
                            desc: ve.Z.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                            icon: ie.Z
                        }, Ze(K.WX.STAGE_INSTANCE, m, d, v.length))].concat(Ae(e)) : e
                    }), [u, c, d, h, f.length, v.length, m]);
                return (0, r.jsx)(o.RadioGroup, {
                    value: t.entityType,
                    options: y,
                    onChange: p,
                    className: be().options
                })
            }

            function Re(e) {
                var n = e.guildId,
                    a = e.guildEvent,
                    i = (e.validationErrorMessage, e.onChange),
                    s = e.isSlideReady,
                    u = void 0 !== s && s,
                    c = a.entityType,
                    d = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(n)
                    }), [n]),
                    f = (0, ce.q)(d),
                    v = (0, l.e7)([k.Z], (function() {
                        return k.Z.can(E.Plq.MANAGE_CHANNELS, d)
                    })),
                    h = null == d ? void 0 : d.hasFeature(E.oNc.COMMUNITY),
                    m = Me(i, a),
                    p = h && !Le(c) && 0 === f.length && v && null != c;
                return (0, r.jsxs)("div", {
                    className: be().container,
                    children: [(0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: be().header,
                        children: ve.Z.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        className: be().text,
                        variant: "text-sm/normal",
                        children: ve.Z.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, r.jsx)(Pe, {
                        guildId: n,
                        guildEvent: a,
                        onChange: i
                    }), (0, r.jsx)(we, {
                        guildId: n,
                        guildEvent: a,
                        isFocusReady: u,
                        onChange: i
                    }), p ? (0, r.jsx)(Te, {
                        onClick: function() {
                            m({
                                value: K.WX.STAGE_INSTANCE,
                                name: ve.Z.Messages.STAGE_CHANNEL
                            });
                            (0, o.openModalLazy)(Ne((function() {
                                var e, a;
                                return Ce(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(47405), t.e(29392), t.e(39685), t.e(47007), t.e(79249), t.e(69876), t.e(17586), t.e(43586), t.e(27499), t.e(79913), t.e(19493), t.e(64466), t.e(92465), t.e(45353), t.e(10675), t.e(73679), t.e(73727), t.e(87440), t.e(54602), t.e(61953), t.e(6565), t.e(24251), t.e(3790), t.e(31520), t.e(58969), t.e(57645), t.e(18442), t.e(69755)]).then(t.bind(t, 957645))];
                                        case 1:
                                            e = l.sent(), a = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(a, je(Oe({}, e), {
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
            var Ve = t(344832),
                Ge = t(944522),
                Ue = t(205316),
                ke = t(383495),
                Be = t(534436),
                He = t.n(Be);

            function Fe(e) {
                var n, t, i, s, u = e.guildId,
                    c = e.guildEvent,
                    f = e.guildEventId,
                    E = e.error,
                    v = a.useMemo((function() {
                        return $(c, u)
                    }), [c, u]),
                    h = v.channel_id,
                    m = v.name,
                    p = v.image,
                    y = v.description,
                    g = (0, q.me)(v),
                    T = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(h)
                    }), [h]),
                    _ = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(u)
                    }), [u]),
                    b = (0, X.cS)(v),
                    I = (0, l.e7)([re.default], (function() {
                        return null != c.creatorId ? re.default.getUser(c.creatorId) : re.default.getCurrentUser()
                    }), [c.creatorId]),
                    x = (0, l.e7)([Ge.Z], (function() {
                        return Ge.Z.isLurking(u)
                    }), [u]),
                    N = (0, Ve.KS)(T, _);
                return (0, r.jsxs)("div", {
                    className: He().content,
                    children: [(0, r.jsx)(ke.Z, {
                        className: He().previewCard,
                        guild: _,
                        channel: T,
                        location: null != b ? b : void 0,
                        creator: I,
                        userCount: 1,
                        name: m,
                        description: y,
                        startTime: null !== (i = null == g || null === (n = g.startDate) || void 0 === n ? void 0 : n.toISOString(!1)) && void 0 !== i ? i : "",
                        imageSource: function(e, n) {
                            return null == n && null == e.image ? null : null != n && /^data:/.test(n) ? n : (0, Ue.Z)(e)
                        }($(c, u, f), p),
                        isActive: !1,
                        isUserLurking: x,
                        isEnded: !1,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0
                    }), (0, r.jsxs)("div", {
                        className: He().textContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: ve.Z.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: He().subheader,
                            children: null != location ? ve.Z.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : ve.Z.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (s = null == T ? void 0 : T.name) && void 0 !== s ? s : "",
                                channelHook: function() {
                                    return (0, r.jsxs)("div", {
                                        className: He().channelName,
                                        children: [null != N ? (0, r.jsx)(N, {
                                            width: 20,
                                            height: 20,
                                            className: He().icon
                                        }) : (0, r.jsx)(ae.Z, {
                                            height: 18,
                                            width: 18,
                                            className: He().locationIcon
                                        }), null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : b]
                                    })
                                }
                            })
                        }), null != E && (0, r.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: He().subheader,
                            children: E.getAnyErrorMessage()
                        })]
                    })]
                })
            }
            var We = t(876003),
                ze = t(694755),
                Ye = t(426404),
                Xe = t(800455);
            const qe = (0, t(260561).B)({
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
            var Ke = t(497028),
                $e = t(921431),
                Je = t(79462),
                Qe = t(734212),
                en = t.n(Qe);

            function nn(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function tn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            nn(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            nn(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function rn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function an(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        rn(e, n, t[n])
                    }))
                }
                return e
            }

            function ln(e, n) {
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
            var on = function(e, n) {
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
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
                        }([l, i])
                    }
                }
            };

            function sn(e) {
                var n = e.editBroadcastInfoData,
                    t = n.broadcastInfo,
                    a = n.broadcastToDirectoryChannels,
                    l = n.setBroadcastToDirectoryChannels,
                    i = n.canEveryoneRoleViewEvent;
                return t.can_broadcast ? (0, r.jsxs)(o.FormItem, {
                    title: ve.Z.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: en().formItem,
                    children: [(0, r.jsx)(o.Tooltip, {
                        text: (0, r.jsx)(o.Text, {
                            className: en().broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: ve.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": ve.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !i,
                        children: function(e) {
                            return (0, r.jsx)("div", ln(an({}, e), {
                                children: (0, r.jsx)(o.Checkbox, {
                                    type: o.Checkbox.Types.INVERTED,
                                    disabled: !i,
                                    value: a,
                                    onChange: function(e, n) {
                                        return l(n)
                                    },
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "interactive-active",
                                        children: ve.Z.Messages.HUB_EVENTS_SHARE_TITLE
                                    })
                                })
                            }))
                        }
                    }), (0, r.jsx)(o.Text, {
                        className: en().broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: ve.Z.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function un(e) {
                var n = e.guildEvent,
                    l = e.guildEventId,
                    i = e.guildId,
                    s = e.editBroadcastInfoData,
                    u = e.error,
                    c = e.validationErrorMessage,
                    d = e.onChange,
                    f = e.canSetFocus,
                    E = void 0 !== f && f,
                    v = n.entityType,
                    h = n.channelId,
                    m = n.description,
                    p = n.name,
                    y = n.image,
                    g = n.scheduledEndTime,
                    T = n.scheduledStartTime,
                    _ = n.autoStart,
                    b = qe.useExperiment({
                        location: "Guild Events Modal",
                        guildId: null != i ? i : ""
                    }).canUseEventsAutoStartToggle,
                    I = (0, Ye._d)(h),
                    x = null != n && (0, V.xt)(n),
                    N = a.useMemo((function() {
                        var e = (0, q.v1)(n);
                        return null != e ? e : {
                            startDate: ee()(T)
                        }
                    }), [n, T]),
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
                        null != e && void 0 !== n ? (0, o.openModalLazy)(tn((function() {
                            var a, l;
                            return on(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(47405), t.e(79249), t.e(69876), t.e(17586), t.e(40056), t.e(19887), t.e(43586), t.e(45353), t.e(73679), t.e(87440), t.e(24251), t.e(94302), t.e(47701), t.e(28629), t.e(91406), t.e(84959), t.e(99652), t.e(64441)]).then(t.bind(t, 17363))];
                                    case 1:
                                        a = o.sent(), l = a.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(l, an({
                                                imgURI: e,
                                                file: n,
                                                onCrop: O,
                                                uploadType: $e.pC.SCHEDULED_EVENT_IMAGE,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : O(null)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: en().blockedUsersContainer,
                        children: null != h && !x && I > 0 && (0, r.jsx)(Xe.mv, {
                            channelId: h
                        })
                    }), (0, r.jsxs)("div", {
                        className: en().form,
                        children: [(0, r.jsxs)(o.FormItem, {
                            title: ve.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: en().topicFormItem,
                            required: !0,
                            children: [(0, r.jsx)(o.TextInput, {
                                className: en().textInput,
                                onChange: function(e) {
                                    d({
                                        name: e
                                    })
                                },
                                placeholder: ve.Z.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: Je.xA,
                                value: p,
                                autoComplete: "off",
                                inputRef: S
                            }), null != u ? (0, r.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: en().warning,
                                children: u.getAnyErrorMessage()
                            }) : null]
                        }), (0, r.jsx)(Ke.Z, {
                            className: en().formItem,
                            onScheduleChange: function(e) {
                                var n = e.startDate,
                                    t = e.endDate,
                                    r = {
                                        scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                        scheduledEndTime: null == t ? void 0 : t.toISOString()
                                    };
                                null != n && null != g && (null == t ? void 0 : t.isBefore(n)) && (r.scheduledEndTime = n.add(1, "hour").toISOString());
                                d(r)
                            },
                            schedule: N,
                            showEndDate: v === K.WX.EXTERNAL,
                            requireEndDate: v === K.WX.EXTERNAL,
                            disableStartDateTime: x
                        }), null != c ? (0, r.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: en().warning,
                            children: c
                        }) : null, b ? (0, r.jsx)(o.FormItem, {
                            className: A()(en().formItem, en().autoStartToggle),
                            children: (0, r.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: _,
                                onChange: function(e, n) {
                                    d({
                                        autoStart: n
                                    })
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ve.Z.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, r.jsx)(o.FormItem, {
                            title: ve.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: en().formItem,
                            children: (0, r.jsx)(o.TextArea, {
                                className: en().descriptionInput,
                                placeholder: ve.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: m,
                                onChange: function(e) {
                                    d({
                                        description: e
                                    })
                                },
                                maxLength: K.wm,
                                autosize: !0
                            })
                        }), (0, r.jsxs)(o.FormItem, {
                            title: ve.Z.Messages.GUILD_EVENT_IMAGE,
                            className: en().formItem,
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: en().addImageHint,
                                children: ve.Z.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != y ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(We.Z, {
                                    className: en().imagePreview,
                                    iconWrapperClassName: en().imagePreviewInner,
                                    image: y,
                                    makeURL: function(e) {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var t;
                                            return null !== (t = (0, Ue.Z)($(n, i, l))) && void 0 !== t ? t : null
                                        }
                                    },
                                    onChange: j,
                                    hint: ve.Z.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, r.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    onClick: function() {
                                        return O(null)
                                    },
                                    children: ve.Z.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, r.jsxs)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                children: [ve.Z.Messages.GUILD_EVENT_ADD_IMAGE, (0, r.jsx)(ze.ZP, {
                                    onChange: j
                                })]
                            })]
                        }), (0, r.jsx)(sn, {
                            editBroadcastInfoData: s
                        })]
                    })]
                })
            }
            var cn = t(737990),
                dn = t.n(cn);

            function fn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function En(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        fn(e, n, t[n])
                    }))
                }
                return e
            }

            function vn(e, n) {
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

            function hn(e, n) {
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

            function mn(e) {
                var n = e.isSlideReady,
                    t = hn(e, ["isSlideReady"]);
                return (0, r.jsxs)("div", {
                    className: dn().slideContainer,
                    children: [(0, r.jsxs)("div", {
                        className: dn().header,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: ve.Z.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: dn().text,
                            variant: "text-sm/normal",
                            children: ve.Z.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, r.jsx)(un, vn(En({}, t), {
                        canSetFocus: n
                    }))]
                })
            }
            var pn = t(641453),
                yn = t(855350),
                gn = t(625751),
                Tn = t(811622),
                _n = t(832642),
                bn = t(869160),
                In = t(890251),
                xn = t(155349),
                Nn = t(652591),
                Sn = t(691797),
                On = t(248995),
                jn = t.n(On),
                An = P.ZP.INVITE_OPTIONS_7_DAYS,
                Cn = P.ZP.INVITE_OPTIONS_UNLIMITED;

            function Ln(e) {
                var n, t = e.onClose,
                    a = e.event,
                    i = null == a ? void 0 : a.guild_id,
                    s = (0, l.e7)([S.ZP], (function() {
                        var e;
                        return null != i ? null === (e = S.ZP.getDefaultChannel(i)) || void 0 === e ? void 0 : e.id : null
                    }), [i]),
                    u = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(i)
                    }), [i]),
                    c = null != (null == u ? void 0 : u.vanityURLCode) && (null == u ? void 0 : u.vanityURLCode.length) > 0,
                    d = yn.Z.useExperiment({
                        guildId: null != i ? i : "",
                        location: "bd50e8_1"
                    }, {
                        autoTrackExposure: c
                    }).enabled,
                    f = null != a ? a : {},
                    v = f.channel_id,
                    h = f.id,
                    m = (0, l.e7)([bn.Z], (function() {
                        var e = null != v ? v : s;
                        return null == e ? null : bn.Z.getInvite(e)
                    }), [v, s]);
                if (null == a) {
                    t();
                    return null
                }
                var p, y, g = d && null !== (n = null == u ? void 0 : u.vanityURLCode) && void 0 !== n ? n : null == m ? void 0 : m.code,
                    T = null != g ? (0, pn.tV)({
                        baseCode: g,
                        guildScheduledEventId: h
                    }) : null,
                    _ = null == T || null == m,
                    b = (0, gn.Z)(null != T ? T : ""),
                    I = null !== (p = null == m ? void 0 : m.maxAge) && void 0 !== p ? p : An.value,
                    x = null !== (y = null == m ? void 0 : m.maxUses) && void 0 !== y ? y : Cn.value;
                return (0, r.jsxs)("div", {
                    className: jn().container,
                    children: [(0, r.jsx)(o.Clickable, {
                        onClick: t,
                        className: jn().close,
                        "aria-label": ve.Z.Messages.CLOSE,
                        children: (0, r.jsx)(xn.Z, {})
                    }), (0, r.jsx)(_n.Z, {
                        children: (0, r.jsx)("div", {
                            className: jn().iconContainer,
                            children: (0, r.jsx)(In.Z, {
                                height: 30,
                                width: 30,
                                className: jn().icon
                            })
                        })
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: jn().header,
                        children: ve.Z.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: jn().body,
                        children: ve.Z.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, r.jsxs)("div", {
                        className: jn().invite,
                        children: [(0, r.jsx)(Tn.S, {
                            value: b,
                            autoFocus: !1,
                            onCopy: function(e) {
                                if (!_) {
                                    (0, Sn.JG)(e);
                                    var n = (0, X.xC)(a.entity_type);
                                    Nn.default.track(E.rMx.COPY_INSTANT_INVITE, {
                                        server: a.guild_id,
                                        channel: v,
                                        channel_type: n,
                                        location: E.t4x.GUILD_EVENTS,
                                        code: m.code,
                                        guild_scheduled_event_id: null == a ? void 0 : a.id
                                    })
                                }
                            }
                        }), null == (null == u ? void 0 : u.vanityURLCode) && (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: jn().inviteDetail,
                            children: (0, P.Vg)(I, x)
                        })]
                    })]
                })
            }

            function Dn(e) {
                var n = e.entityType,
                    t = e.channelId,
                    r = (0, X.xV)(e);
                return null == n ? "An event type must be specified." : null != r && "" !== r.trim() || null != t ? void 0 : "Either a location or channel must be specified."
            }

            function Zn(e, n) {
                var t = (0, q.v1)(e),
                    r = e.entityType;
                if (null == t || null == (null == t ? void 0 : t.startDate)) return ve.Z.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                var a = t.startDate,
                    l = t.endDate;
                return r === K.WX.EXTERNAL && null == l ? ve.Z.Messages.GUILD_EVENT_END_DATE_REQUIRED : !n && a.isBefore(ee()()) ? ve.Z.Messages.GUILD_EVENT_PAST_START_DATE : null != l && null != a && l.isBefore(a) ? ve.Z.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != l && l.isBefore(ee()()) ? ve.Z.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
            }
            var Mn = t(477),
                wn = t.n(Mn);

            function Pn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Rn(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function Vn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            Rn(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            Rn(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Gn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Un(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Pn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Pn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var kn, Bn = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                            next: i(0),
                            throw: i(1),
                            return: i(2)
                        },
                        "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                            return this
                        }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
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
                            }([l, i])
                        }
                    }
                },
                Hn = P.ZP.INVITE_OPTIONS_7_DAYS,
                Fn = P.ZP.INVITE_OPTIONS_UNLIMITED,
                Wn = 100;
            ! function(e) {
                e[e.ENTITY = 0] = "ENTITY";
                e[e.SETTINGS = 1] = "SETTINGS";
                e[e.PREVIEW = 2] = "PREVIEW";
                e[e.SUCCESS = 3] = "SUCCESS"
            }(kn || (kn = {}));

            function zn(e) {
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
                                    x: r.left - Wn,
                                    y: r.top - Wn
                                },
                                maxValue: {
                                    x: r.left + Wn,
                                    y: r.top + Wn
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
                                    x: r.right - Wn,
                                    y: r.top - Wn
                                },
                                maxValue: {
                                    x: r.right + Wn,
                                    y: r.top + Wn
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

            function Yn(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.guildEventId,
                    u = e.editBroadcastInfoData,
                    c = e.isEdit,
                    d = e.formErrors,
                    f = e.transitionState,
                    E = e.loading,
                    v = e.error,
                    h = e.onChange,
                    m = e.onSave,
                    p = e.onClose,
                    y = e.createdEvent,
                    g = (0, w.Dt)(),
                    T = a.useMemo((function() {
                        return [{
                            slideId: kn.ENTITY,
                            label: ve.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                            valid: null == d.entity,
                            userErrorMessage: d.entity
                        }, {
                            slideId: kn.SETTINGS,
                            label: ve.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                            valid: null == d.schedule && null == d.topic,
                            userErrorMessage: d.schedule
                        }, {
                            slideId: kn.PREVIEW,
                            label: ve.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                            valid: !0
                        }]
                    }), [d]),
                    _ = Object.keys(kn).length,
                    b = (0, V.xt)(t) ? kn.SETTINGS : kn.ENTITY,
                    I = function(e) {
                        return Math.max(0, Math.min(e, _ - 1))
                    },
                    x = Un(a.useState(b), 2),
                    N = x[0],
                    S = x[1],
                    O = Un(a.useState(!1), 2),
                    j = O[0],
                    A = O[1],
                    C = a.useMemo((function() {
                        return T.slice(0, N + 1).map((function(e) {
                            return e.valid
                        })).every(Boolean)
                    }), [T, N]),
                    L = N >= T.length ? kn.SUCCESS : T[I(N)].slideId,
                    D = L === kn.SUCCESS;
                (0, J.l)((function(e) {
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
                    null != y && R(kn.SUCCESS)
                }), [null == y ? void 0 : y.id, R]);
                var G = function() {
                        if (C) {
                            L === kn.PREVIEW ? m() : D ? p() : R(N + 1)
                        }
                    },
                    U = function() {
                        R(N - 1)
                    },
                    k = ve.Z.Messages.NEXT;
                L === kn.PREVIEW && (k = c ? ve.Z.Messages.SAVE_EVENT : ve.Z.Messages.SCHEDULE_EVENT);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(o.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": g,
                        size: o.ModalSize.DYNAMIC,
                        children: [!Z && D ? (0, r.jsx)(zn, {
                            modal: P.current
                        }) : null, (0, r.jsxs)(o.ModalContent, {
                            className: wn().content,
                            scrollerRef: P,
                            children: [!D && (0, r.jsx)(M, {
                                steps: T.map((function(e) {
                                    return e.label
                                })),
                                stepIndex: N,
                                onClick: function(e) {
                                    e < N ? U() : e > N && G()
                                }
                            }), (0, r.jsxs)(o.Slides, {
                                activeSlide: L,
                                width: 440,
                                onSlideReady: function(e) {
                                    A(e === L)
                                },
                                children: [(0, r.jsx)(o.Slide, {
                                    id: kn.ENTITY,
                                    children: (0, r.jsx)(Re, {
                                        guildId: n,
                                        guildEvent: t,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: j,
                                        onChange: h
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: kn.SETTINGS,
                                    children: (0, r.jsx)(mn, {
                                        guildEvent: t,
                                        guildEventId: i,
                                        guildId: n,
                                        editBroadcastInfoData: u,
                                        onChange: h,
                                        error: v,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: j
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: kn.PREVIEW,
                                    children: (0, r.jsx)(Fe, {
                                        guildId: n,
                                        guildEvent: t,
                                        guildEventId: i,
                                        error: v
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: kn.SUCCESS,
                                    children: (0, r.jsx)(Ln, {
                                        onClose: p,
                                        event: y
                                    })
                                })]
                            })]
                        }), !D && (0, r.jsxs)(o.ModalFooter, {
                            className: wn().footer,
                            children: [(0, r.jsxs)("div", {
                                className: wn().inline,
                                children: [(0, r.jsx)(o.Button, {
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: p,
                                    children: ve.Z.Messages.CANCEL
                                }), (0, r.jsx)(o.Button, {
                                    onClick: G,
                                    disabled: !C,
                                    className: wn().button,
                                    submitting: E,
                                    children: k
                                })]
                            }), L !== kn.ENTITY && (0, r.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                size: o.Button.Sizes.MIN,
                                onClick: U,
                                color: o.Button.Colors.LINK,
                                children: ve.Z.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function Xn(e) {
                var n = e.guildId,
                    t = e.guildScheduledEventId,
                    o = e.transitionState,
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
                    v = function(e, n) {
                        var t, r, a, l, o, i, s, u = {
                            name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "",
                            privacyLevel: null !== (r = null == e ? void 0 : e.privacy_level) && void 0 !== r ? r : K.j8.GUILD_ONLY,
                            description: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : "",
                            scheduledStartTime: null !== (l = null == e ? void 0 : e.scheduled_start_time) && void 0 !== l ? l : (0, q.ib)().toISOString(),
                            entityType: null !== (o = null == e ? void 0 : e.entity_type) && void 0 !== o ? o : K.WX.NONE,
                            entityMetadata: null !== (i = null == e ? void 0 : e.entity_metadata) && void 0 !== i ? i : void 0,
                            channelId: null == e ? void 0 : e.channel_id,
                            creatorId: null == e ? void 0 : e.creator_id,
                            image: null == e ? void 0 : e.image,
                            scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
                            autoStart: null !== (s = null == e ? void 0 : e.auto_start) && void 0 !== s && s
                        };
                        if (function(e) {
                                return null != e && "id" in e
                            }(e) && (null == e ? void 0 : e.entity_type) === K.WX.EXTERNAL) {
                            var c = (0, X.cS)(e);
                            null != c && (u.entityMetadata = {
                                location: c
                            })
                        } else if (null == u.channelId && null != n) {
                            u.channelId = n.id;
                            n.isGuildStageVoice() ? u.entityType = K.WX.STAGE_INSTANCE : n.isGuildVoice() && (u.entityType = K.WX.VOICE)
                        }
                        return u
                    }(d, f),
                    h = Un(a.useState(v), 2),
                    m = h[0],
                    p = h[1],
                    y = Un(a.useState(function(e) {
                        return Boolean(null == e ? void 0 : e.id)
                    }(d)), 1),
                    g = y[0],
                    T = Un(a.useState(null), 2),
                    _ = T[0],
                    b = T[1],
                    I = N(u, null == d ? void 0 : d.id, m),
                    x = Un((0, R.Z)(Vn((function() {
                        var e, r;
                        return Bn(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null != _) return [2];
                                    e = {
                                        broadcastToDirectoryChannels: I.broadcastToDirectoryChannels
                                    };
                                    return g && null != t ? [4, G.Z.saveEvent(t, m, n, e)] : [3, 2];
                                case 1:
                                    a.sent();
                                    return [2, s()];
                                case 2:
                                    return [4, G.Z.createGuildEvent(m, n, e)];
                                case 3:
                                    ! function(e) {
                                        var n, t = (0, c.so)(e),
                                            r = null !== (n = e.channel_id) && void 0 !== n ? n : null == f ? void 0 : f.id;
                                        null != r && i.Z.createInvite(r, {
                                            max_age: Hn.value,
                                            max_uses: Fn.value
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
                                entity: Dn(e),
                                schedule: Zn(e, n),
                                topic: (t = e, r = t.name, null == r || "" === r.trim() ? "Topic must be specified." : void 0)
                            };
                            var t, r
                        }(m, g)
                    }), [m, g]);
                return (0, r.jsx)(Yn, {
                    guildId: n,
                    guildEvent: m,
                    guildEventId: t,
                    editBroadcastInfoData: I,
                    isEdit: g,
                    formErrors: D,
                    transitionState: o,
                    loading: C,
                    error: L,
                    onChange: function(e) {
                        if (null != e.entityType) {
                            var t, r = (0, X.xC)(e.entityType),
                                a = Un(F(n, r), 1)[0];
                            e.channelId = null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : null;
                            e.entityType !== K.WX.EXTERNAL && m.entityType === K.WX.EXTERNAL && (e.entityMetadata = null)
                        }
                        p((function(n) {
                            return function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        Gn(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, n, e)
                        }))
                    },
                    onSave: j,
                    onClose: s,
                    createdEvent: _
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
                o = t.n(l),
                i = t(816810),
                s = t(202351),
                u = t(513328),
                c = t(882723),
                d = t(464187),
                f = t(793461),
                E = t(652591),
                v = t(691797),
                h = t(661123),
                m = t(786502),
                p = t(703790),
                y = t(682776),
                g = t(2590),
                T = t(473708),
                _ = t(749956),
                b = t.n(_);

            function I(e) {
                var n = e.guild,
                    t = e.error,
                    l = e.onClose,
                    o = n.id,
                    i = a.useCallback((function() {
                        l();
                        p.Z.open(o, g.pNK.INSTANT_INVITES)
                    }), [o, l]),
                    s = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Clickable, {
                            className: b().errorLink,
                            onClick: i,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), [i]),
                    u = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Anchor, {
                            href: g.EYA.INVITES_HELP,
                            target: "_blank",
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), []),
                    d = t.code === g.evJ.TOO_MANY_INVITES ? y.Z.can(g.Plq.MANAGE_GUILD, n) ? T.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                        inviteListHook: s,
                        inviteHelpHook: u
                    }) : T.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER : t.getAnyErrorMessage();
                return (0, r.jsx)(c.Text, {
                    className: b().errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: d
                })
            }
            var x = t(718634),
                N = t(103468),
                S = t.n(N),
                O = t(913957),
                j = t.n(O),
                A = t(518280),
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
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
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
                        i = e.onCopy,
                        s = e.disabled,
                        d = Z(a.useState(!1), 2),
                        f = d[0],
                        E = d[1],
                        h = Z(a.useState(!1), 2),
                        m = h[0],
                        p = h[1],
                        y = a.useMemo((function() {
                            return new u.sW(1e3, (function() {
                                return p(!1)
                            }))
                        }), [p]);
                    a.useEffect((function() {
                        return function() {
                            y.cancel()
                        }
                    }), [y]);
                    var g;
                    return (0, r.jsxs)("div", {
                        className: o()(S().input, j().flexJustifyBetween, j().flexCenter, (g = {}, D(g, S().success, m), D(g, S().focused, f), g)),
                        children: [(0, r.jsx)(c.TextInput, {
                            className: b().copyInput,
                            name: "invite",
                            value: l ? T.Z.Messages.INSTANT_INVITE_HIDDEN : n,
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
                            "aria-label": T.Z.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: s
                        }), v.wS ? (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: m ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                            className: b().copyButton,
                            onClick: function() {
                                p(!0);
                                y.delay();
                                i(n)
                            },
                            disabled: s,
                            children: m ? T.Z.Messages.INVITE_COPIED : T.Z.Messages.COPY
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
                        p = e.inviteFlags,
                        y = e.setInviteFlags,
                        _ = e.showGuestInviteToggleForCurrentVoiceChannel,
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
                            E.default.track(g.rMx.COPY_INSTANT_INVITE, {
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
                                value: (0, h.yE)(p, i.$.IS_GUEST_INVITE),
                                onChange: function(e) {
                                    return y((0, h.mB)(p, i.$.IS_GUEST_INVITE, e))
                                },
                                note: T.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: D,
                                hideBorder: !0,
                                children: _ ? T.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.Z.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, t || R ? null : (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: o()(C().marginTop8, b().footerText),
                            children: [(0, m.Vg)(Z, w), " ", l ? (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: T.Z.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !t && l && R ? (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: o()(C().marginTop8, b().footerText),
                            children: [T.Z.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: T.Z.Messages.INVITE_EDIT_LINK
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
                mv: () => T,
                Xd: () => _
            });
            var r = t(785893),
                a = (t(667294), t(202351)),
                l = t(795308),
                o = t(882723),
                i = t(971402),
                s = t(742257),
                u = t(961241),
                c = t(98265),
                d = t(661782),
                f = t(749565),
                E = t(933022),
                v = t(426404),
                h = t(473708),
                m = t(555563),
                p = t.n(m);

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e, n) {
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
            var T = function(e) {
                    var n = e.channelId,
                        t = (0, v._d)(n);
                    if (0 === t) return null;
                    return (0, r.jsxs)("div", {
                        className: p().blockedNotice,
                        children: [(0, r.jsx)(s.Z, {
                            className: p().blockedIcon,
                            color: l.Z.unsafe_rawColors.RED_400.css
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: h.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: t
                            })
                        }), (0, r.jsx)(o.Clickable, {
                            className: p().blockedButton,
                            onClick: function(e) {
                                (0, i.vq)(e, (function(e) {
                                    return (0, r.jsx)(b, g(function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                y(e, n, t[n])
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
                _ = function(e) {
                    var n = e.user,
                        t = e.showStatus,
                        l = e.speaker,
                        i = e.channelId,
                        s = (0, a.e7)([E.ZP], (function() {
                            return E.ZP.isModerator(n.id, i)
                        })),
                        v = null;
                    t && (v = l ? h.Z.Messages.STAGE_SPEAKER : s ? h.Z.Messages.STAGE_MODERATOR_TOOLTIP : h.Z.Messages.STAGE_AUDIENCE);
                    return (0, r.jsxs)("div", {
                        className: p().user,
                        children: [(0, r.jsx)(d.Z, {
                            src: n.getAvatarURL(null, 32),
                            size: o.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: l ? function() {
                                return (0, r.jsx)(u.Z, {
                                    className: p().icon
                                })
                            } : null
                        }, n.id), (0, r.jsxs)("div", {
                            className: p().userInfo,
                            children: [(0, r.jsxs)("div", {
                                className: p().username,
                                children: [(0, r.jsx)(c.Z, {
                                    size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                    children: f.ZP.getName(n)
                                }), (0, r.jsx)(c.Z, {
                                    size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                    color: c.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(n.discriminator)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: p().username,
                                children: [(0, r.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: h.Z.Messages.BLOCKED
                                }), (0,
                                    r.jsxs)(o.Text, {
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
                    return (0, r.jsx)(o.Scroller, {
                        className: p().container,
                        children: t.map((function(e) {
                            var t = e.user;
                            return (0, r.jsx)(_, {
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

            function o(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function i(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
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
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
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
                        }([l, i])
                    }
                }
            };

            function u(e, n) {
                var t, l, u = i(r.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    f = i(r.useState(null), 2),
                    E = f[0],
                    v = f[1],
                    h = (l = (t = function() {
                        var t, r, l;
                        return s(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d(!0);
                                    v(null);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = o.sent();
                                    d(!1);
                                    v(null);
                                    return [2, t];
                                case 3:
                                    r = o.sent();
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

                            function i(e) {
                                o(l, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                o(l, r, a, i, s, "throw", e)
                            }
                            i(void 0)
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