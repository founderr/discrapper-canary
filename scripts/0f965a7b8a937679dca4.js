(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [69127], {
        627379: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        112897: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(968449),
                c = r(416644),
                l = r(691797);

            function u(e) {
                var t = e.id,
                    r = e.label,
                    u = e.onSuccess,
                    a = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !l.wS) return null;
                var p = "devmode-copy-id-".concat(t);
                return (0, n.jsx)(o.MenuItem, {
                    id: p,
                    label: r,
                    action: function(e) {
                        var r = null != a && e.shiftKey ? a : t;
                        (0, l.JG)(r);
                        null == u || u()
                    },
                    icon: c.Z,
                    showIconFirst: s
                }, p)
            }
        },
        197307: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => n
            });
            var n = (0, r(38736).Z)((function(e) {
                return {
                    canCloseModal: !0,
                    onUpdateCanCloseModal: function(t) {
                        e({
                            canCloseModal: t
                        })
                    }
                }
            }))
        },
        808810: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => z
            });
            var n = r(785893),
                o = r(667294),
                i = r(70418),
                c = r(971402),
                l = r(213276),
                u = r(112897),
                a = r(804564),
                s = r.n(a),
                f = r(730381),
                p = r.n(f),
                d = r(517563),
                b = r(202351),
                y = r(306472),
                O = r(30027),
                v = r(567403),
                h = r(120415),
                g = r(269300),
                E = r(3155),
                m = r(473708),
                j = "YYYYMMDDTHHmmss",
                w = "YYYY-MM-DDTHH:mm:ss";
            var P = r(691797),
                _ = r(158499),
                T = r(2590);
            var D = r(787193),
                S = r(102921),
                I = r(242735);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function M(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e) {
                var t = e.guildEventId,
                    r = e.recurrenceId,
                    c = e.guild,
                    l = e.channel,
                    u = null != r,
                    a = (0, D.XJ)(null != l ? l : c).canManageGuildEvent,
                    s = C((0, b.Wu)([g.ZP], (function() {
                        return [g.ZP.isActive(t), g.ZP.getGuildScheduledEvent(t)]
                    })), 2),
                    f = s[0],
                    p = s[1],
                    d = function(e, t) {
                        var r = (0, b.e7)([g.ZP], (function() {
                            return g.ZP.getGuildScheduledEvent(t)
                        }), [t]);
                        return o.useMemo((function() {
                            return null == r ? void 0 : r.guild_scheduled_event_exceptions.find((function(t) {
                                return t.event_exception_id === e
                            }))
                        }), [null == r ? void 0 : r.guild_scheduled_event_exceptions, e])
                    }(r, null == p ? void 0 : p.id),
                    y = null != p && a(p),
                    O = null != (null == p ? void 0 : p.recurrence_rule) && !u;
                if (!y || f) return null;
                var v = function(e) {
                    (0, i.openModal)((function(o) {
                        return (0, n.jsxs)(i.ConfirmModal, A(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    M(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, o), {
                            header: m.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: O || e ? m.Z.Messages.DELETE_ALL_EVENTS : m.Z.Messages.DELETE_EVENT,
                            cancelText: m.Z.Messages.NEVERMIND,
                            onConfirm: function() {
                                return u && !e ? function() {
                                    if (null != r)
                                        if (null != d) {
                                            var e = d.scheduled_start_time,
                                                n = d.scheduled_end_time;
                                            I.Z.updateGuildEventException({
                                                scheduled_start_time: e,
                                                scheduled_end_time: n,
                                                is_canceled: !0
                                            }, c.id, t, r)
                                        } else {
                                            var o = S.Z.extractTimestamp(r);
                                            I.Z.createGuildEventException({
                                                original_scheduled_start_time: new Date(o).toISOString(),
                                                is_canceled: !0
                                            }, c.id, t)
                                        }
                                }() : I.Z.deleteGuildEvent(t, c.id)
                            },
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: m.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, n.jsx)("br", {}), (O || e) && (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: m.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    }))
                };
                return (0, n.jsx)(i.MenuItem, {
                    id: m.Z.Messages.DELETE_EVENT,
                    label: m.Z.Messages.DELETE_EVENT,
                    action: u ? void 0 : function() {
                        return v()
                    },
                    color: "danger",
                    children: u && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i.MenuItem, {
                            id: m.Z.Messages.DELETE_THIS_EVENT,
                            label: m.Z.Messages.DELETE_THIS_EVENT,
                            action: function() {
                                return v()
                            },
                            color: "danger"
                        }), (0, n.jsx)(i.MenuItem, {
                            id: m.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: m.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: function() {
                                return v(!0)
                            },
                            color: "danger"
                        })]
                    })
                })
            }
            var x = r(360703);

            function L(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function R(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            L(i, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            L(i, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function k(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function V(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var G = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function U(e, t, o) {
                var c = (0, (0, D.XJ)(null != o ? o : t).canManageGuildEvent)((0, b.e7)([g.ZP], (function() {
                        return g.ZP.getGuildScheduledEvent(e)
                    }))),
                    l = (0, x.Z)();
                if (!c) return null;
                return (0, n.jsx)(i.MenuItem, {
                    id: m.Z.Messages.EDIT_EVENT,
                    label: m.Z.Messages.EDIT_EVENT,
                    action: function() {
                        (0,
                            i.openModalLazy)(R((function() {
                            var o, i;
                            return G(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(86502), r.e(35401), r.e(10523), r.e(14688), r.e(89663), r.e(64472)]).then(r.bind(r, 689663))];
                                    case 1:
                                        o = c.sent(), i = o.default;
                                        return [2, function(r) {
                                            return (0, n.jsx)(i, V(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        k(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, r), {
                                                guildScheduledEventId: e,
                                                guildId: t.id
                                            }))
                                        }]
                                }
                            }))
                        })), l)
                    }
                })
            }
            var H = r(476143),
                F = r(354368),
                B = r(528334);
            var Y = r(201441);

            function X(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function K(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            X(i, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            X(i, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function J(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var Q = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function $(e, t, o) {
                var c, l = (0, D.XJ)(null != o ? o : t).canManageGuildEvent,
                    u = (0, b.e7)([g.ZP], (function() {
                        return g.ZP.getGuildScheduledEvent(e)
                    }), [e]),
                    a = l(u),
                    s = null != (0, Y.qY)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""),
                    f = null != u && (0, g.xt)(u);
                return a && (!f && !s) ? (0, n.jsx)(i.MenuItem, {
                    id: m.Z.Messages.START_EVENT,
                    label: m.Z.Messages.START_EVENT,
                    action: function() {
                        null != u && (0, i.openModalLazy)(K((function() {
                            var e, t;
                            return Q(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(35401), r.e(74544), r.e(62750)]).then(r.bind(r, 874544))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(t, W(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        J(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                event: u
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : null
            }

            function z(e) {
                var t = e.guildEventId,
                    r = e.recurrenceId,
                    o = e.channel,
                    a = e.guild,
                    f = e.analyticsContext,
                    D = e.onSelect,
                    S = Z({
                        guildEventId: t,
                        recurrenceId: r,
                        guild: a,
                        channel: o
                    }),
                    I = U(t, a, o),
                    N = (0, H.Z)(t, a, o),
                    M = $(t, a, o),
                    A = function(e, t) {
                        return (0, _.Z)(t, e).isMember ? (0, n.jsx)(i.MenuItem, {
                            id: m.Z.Messages.COPY_EVENT_LINK,
                            label: m.Z.Messages.COPY_EVENT_LINK,
                            action: function() {
                                (0, P.JG)("".concat(location.protocol, "//").concat(location.host).concat(T.Z5c.GUILD_EVENT_DETAILS(t, e)));
                                (0, i.showToast)((0, i.createToast)(m.Z.Messages.COPIED_LINK, i.ToastType.SUCCESS))
                            }
                        }) : null
                    }(t, a.id),
                    C = function(e) {
                        var t = (0, b.e7)([g.ZP], (function() {
                            return g.ZP.getGuildScheduledEvent(e)
                        }), [e]);
                        return null == e || null == t ? null : (0, n.jsx)(i.MenuItem, {
                            id: "report-event",
                            label: m.Z.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                            action: function() {
                                return (0, F.d$)(t)
                            },
                            icon: B.Z,
                            color: "danger"
                        })
                    }(t),
                    x = (0, u.Z)({
                        id: t,
                        label: m.Z.Messages.COPY_ID_EVENT
                    }),
                    L = function(e, t, r) {
                        var o, c = (0, b.e7)([g.ZP], (function() {
                                return g.ZP.isActive(e)
                            })),
                            l = (0, b.e7)([g.ZP], (function() {
                                return g.ZP.getGuildScheduledEvent(e)
                            }), [e]),
                            u = (0, b.e7)([v.Z], (function() {
                                return v.Z.getGuild(t)
                            }), [t]);
                        if (c || null == l) return null;
                        o = l.entity_type === E.WX.EXTERNAL ? l.entity_metadata.location : null != r && null != u ? m.Z.Messages.CALENDAR_CHANNEL_LOCATION.format({
                            channelName: r.name,
                            guildName: u.name
                        }) : m.Z.Messages.NOTIFICATION_TITLE_DISCORD;
                        var a, f = p()(l.scheduled_start_time),
                            P = null != l.scheduled_end_time ? p()(l.scheduled_end_time) : f,
                            _ = null != l.description && "" !== l.description ? O.ZP.unparse(l.description, null !== (a = null == r ? void 0 : r.id) && void 0 !== a ? a : "", !0) : "",
                            T = function() {
                                var e = s()();
                                e.createEvent({
                                    start: f,
                                    end: P,
                                    summary: l.name,
                                    description: _,
                                    location: o
                                });
                                h.FB ? y.Z.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                            };
                        return (0, n.jsxs)(i.MenuItem, {
                            id: m.Z.Messages.ADD_TO_CALENDAR,
                            label: m.Z.Messages.ADD_TO_CALENDAR,
                            action: T,
                            children: [(0, n.jsx)(i.MenuItem, {
                                id: m.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
                                label: m.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
                                action: function() {
                                    var e = {
                                            text: l.name,
                                            dates: "".concat(f.format(j), "/").concat(P.format(j)),
                                            details: _,
                                            action: "TEMPLATE",
                                            location: o
                                        },
                                        t = "https://calendar.google.com/calendar/render?".concat((0, d.stringify)(e));
                                    window.open(t, "_blank")
                                }
                            }), (0, n.jsx)(i.MenuItem, {
                                id: m.Z.Messages.DOWNLOAD_ICS,
                                label: m.Z.Messages.DOWNLOAD_ICS,
                                action: T
                            }), (0, n.jsx)(i.MenuItem, {
                                id: m.Z.Messages.ADD_TO_YAHOO,
                                label: m.Z.Messages.ADD_TO_YAHOO,
                                action: function() {
                                    var e = {
                                            v: 60,
                                            title: l.name,
                                            st: f.format(j),
                                            et: P.format(j),
                                            desc: _,
                                            in_loc: o
                                        },
                                        t = "https://calendar.yahoo.com/?".concat((0, d.stringify)(e));
                                    window.open(t, "_blank")
                                }
                            }), (0, n.jsx)(i.MenuItem, {
                                id: m.Z.Messages.ADD_TO_OUTLOOK,
                                label: m.Z.Messages.ADD_TO_OUTLOOK,
                                action: function() {
                                    var e = {
                                            path: "/calendar/action/compose",
                                            rru: "addevent",
                                            startdt: f.format(w),
                                            enddt: P.format(w),
                                            subject: l.name,
                                            body: _,
                                            location: o,
                                            allday: !1
                                        },
                                        t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, d.stringify)(e));
                                    window.open(t, "_blank")
                                }
                            })]
                        })
                    }(t, a.id, o);
                return (0, n.jsx)(l.Z, {
                    context: f,
                    object: T.qAy.CONTEXT_MENU,
                    children: (0, n.jsxs)(i.Menu, {
                        navId: "user-context",
                        onClose: c.Zy,
                        "aria-label": m.Z.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: D,
                        children: [(0, n.jsxs)(i.MenuGroup, {
                            children: [L, M, I, N, S, A]
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: C
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: x
                        })]
                    })
                })
            }
        },
        476143: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                c = r(787193),
                l = r(771575),
                u = r(269300),
                a = r(242735),
                s = r(3155),
                f = r(473708);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t, r) {
                var b = (0, c.XJ)(null != r ? r : t).canManageGuildEvent,
                    y = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.isActive(e)
                    })),
                    O = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.getGuildScheduledEvent(e)
                    }), [e]),
                    v = b(O);
                if (null == e || !v || !y) return null;
                if ((null == O ? void 0 : O.entity_type) === s.WX.EXTERNAL) return null;
                var h = function() {
                    if (null == r ? void 0 : r.isGuildStageVoice())(0, l.NZ)(r);
                    else {
                        null != e && a.Z.endEvent(e, t.id);
                        (0, i.closeAllModals)()
                    }
                };
                return (0, n.jsx)(i.MenuItem, {
                    id: f.Z.Messages.END_EVENT,
                    label: f.Z.Messages.END_EVENT,
                    action: function() {
                        (0, i.openModal)((function(e) {
                            return (0, n.jsx)(i.ConfirmModal, d(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        p(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                header: f.Z.Messages.END_EVENT,
                                confirmText: f.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                cancelText: f.Z.Messages.CANCEL,
                                onConfirm: h,
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: f.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                })
                            }))
                        }))
                    },
                    color: "danger"
                })
            }
        },
        360703: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(70418),
                o = r(26468),
                i = r(197307),
                c = r(2590),
                l = "guild-event-modal";
            const u = function() {
                var e = (0, o.bp)() === c.IlC.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: l,
                    contextKey: e,
                    onCloseRequest: function() {
                        i.l.getState().canCloseModal && (0, n.closeModal)(l, e)
                    }
                }
            }
        },
        869854: (e, t, r) => {
            "use strict";
            r.d(t, {
                B0: () => a,
                OG: () => p,
                kz: () => s,
                yr: () => f
            });
            var n = r(281110),
                o = r(744564),
                i = r(2590);

            function c(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            c(i, n, o, l, u, "next", e)
                        }

                        function u(e) {
                            c(i, n, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function a(e, t, r, n) {
                o.Z.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: r,
                    indices: n
                })
            }

            function s(e, t) {
                var r = t.data,
                    n = t.messageId,
                    i = t.onCreate,
                    c = t.onSuccess,
                    l = t.onFailure;
                o.Z.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: r,
                    nonce: e,
                    messageId: n,
                    onCreate: i,
                    onSuccess: c,
                    onFailure: l
                })
            }

            function f(e, t, r) {
                o.Z.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: r,
                    errorCode: t
                })
            }

            function p(e, t) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = l((function(e, t) {
                    var r, c;
                    return u(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, n.ZP.get({
                                    url: i.ANM.MESSAGE_INTERACTION_DATA(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                if ((r = l.sent()).ok) {
                                    c = r.body;
                                    o.Z.dispatch({
                                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                                        channelId: e,
                                        messageId: t,
                                        interactionData: c
                                    })
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        838956: (e, t, r) => {
            "use strict";
            r.d(t, {
                rQ: () => S,
                $s: () => A,
                tM: () => T,
                t$: () => M,
                ow: () => w,
                Sg: () => N
            });
            var n = r(842227),
                o = r(281110),
                i = r(744564),
                c = r(720419),
                l = r(73904),
                u = r(457581),
                a = r(664625),
                s = r(869854),
                f = r(873934),
                p = r(457896);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = "_errors";

            function O(e) {
                return v(e, void 0)
            }

            function v(e, t) {
                var r = e._errors;
                if (null != r && Array.isArray(r)) return r[0];
                var n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var c, l = Object.entries(e)[Symbol.iterator](); !(n = (c = l.next()).done); n = !0) {
                        var u = b(c.value, 2),
                            a = u[0],
                            s = u[1];
                        if (a !== y && null != s && "object" == typeof s) return v(s, null != t ? t : a)
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        n || null == l.return || l.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return null
            }
            var h = r(2590);

            function g(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        E(e, t, r[t])
                    }))
                }
                return e
            }
            var j = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function w(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : n.default.extractTimestamp(e) + 9e5
            }
            var P, _, T = (_ = (P = function(e) {
                var t, r, i, c, p, d, b, y, O, v, g;
                return j(this, (function(E) {
                    switch (E.label) {
                        case 0:
                            t = e.componentType, r = e.messageId, i = e.messageFlags, c = e.customId, p = e.indices, d = e.applicationId, b = e.channelId, y = e.guildId, O = e.localState;
                            v = n.default.fromTimestamp(Date.now());
                            return f.Z.canQueueInteraction(r, v) ? [4, u.Z.unarchiveThreadIfNecessary(b)] : [2];
                        case 1:
                            E.sent();
                            (0, s.kz)(v, {
                                messageId: r,
                                data: {
                                    interactionType: l.B8.MESSAGE_COMPONENT,
                                    customId: c,
                                    indices: p
                                },
                                onFailure: function(e, t) {
                                    return I(b, e, t)
                                }
                            });
                            null != O && (0, s.B0)(r, v, O, p);
                            g = {
                                type: l.B8.MESSAGE_COMPONENT,
                                nonce: v,
                                guild_id: y,
                                channel_id: b,
                                message_flags: i,
                                message_id: r,
                                application_id: d,
                                session_id: a.default.getSessionId(),
                                data: m({
                                    component_type: t,
                                    custom_id: c
                                }, D(O))
                            };
                            return [4, o.ZP.post({
                                url: h.ANM.INTERACTIONS,
                                body: g,
                                timeout: 3e3
                            }, (function(e) {
                                N(v, b, y, e)
                            }))];
                        case 2:
                            E.sent();
                            return [2]
                    }
                }))
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise((function(r, n) {
                    var o = P.apply(e, t);

                    function i(e) {
                        g(o, r, n, i, c, "next", e)
                    }

                    function c(e) {
                        g(o, r, n, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }), function(e) {
                return _.apply(this, arguments)
            });

            function D(e) {
                if (null == e) return null;
                if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT) return e;
                var t = e.selectedOptions.map((function(e) {
                    return e.value
                }));
                return {
                    type: e.type,
                    values: t
                }
            }
            var S, I = function(e, t, r) {
                    null == r && null != t && c.Z.sendClydeError(e, t)
                },
                N = function(e, t, r, n) {
                    if (!n.ok) {
                        if (!n.hasErr) {
                            if (n.status >= 400 && n.status < 500 && n.body) {
                                if (n.body.code === h.evJ.INVALID_FORM_BODY && n.body.errors) {
                                    var o = O(n.body.errors);
                                    null == o || "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== o.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== o.code || i.Z.dispatch({
                                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                        channelId: t,
                                        guildId: r
                                    });
                                    (0, s.yr)(e, void 0, null == o ? void 0 : o.message);
                                    return
                                }(0, s.yr)(e, void 0, n.body.message);
                                return
                            }
                            var c;
                            (0, s.yr)(e, null === (c = n.body) || void 0 === c ? void 0 : c.code);
                            return
                        }(0, s.yr)(e)
                    }
                };
            ! function(e) {
                e[e.SENDING = 0] = "SENDING";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED";
                e[e.TIMED_OUT = 3] = "TIMED_OUT"
            }(S || (S = {}));
            var M = function(e, t) {
                var r, o = null == t ? void 0 : t.state,
                    i = e.state === h.yb.SENT && w(e.id) < Date.now(),
                    c = e.state === h.yb.SEND_FAILED && (null == (r = e.id) || "" === r || Number.isNaN(r) ? Date.now() : n.default.extractTimestamp(r) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
                    a = e.isCommandType();
                return u && o === p.F.QUEUED || a && e.state === h.yb.SENDING && null != t ? S.SENDING : u && o === p.F.CREATED || e.hasFlag(h.iLy.LOADING) && !i ? S.CREATED : null != e.interaction && e.hasFlag(h.iLy.LOADING) && i || null != e.interaction && !e.hasFlag(h.iLy.LOADING) && c ? S.TIMED_OUT : a && e.state === h.yb.SEND_FAILED ? S.FAILED : void 0
            };

            function A(e) {
                for (var t = e.options; 1 === (null == t ? void 0 : t.length) && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND);) t = t[0].options;
                var r = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, c = (null != t ? t : [])[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                        if (i.value.type === l.jw.ATTACHMENT) return !1
                    }
                } catch (e) {
                    n = !0;
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return !0
            }
        },
        821: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function u(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var s, f, p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }

            function b() {
                s = !1;
                f = null
            }
            b();
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(r, e);
                var t = d(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return s
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return r
            }(n.ZP.Store);
            y.displayName = "PremiumTutorialSessionStore";
            const O = new y(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    s = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    s = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var t = e.substep;
                    f = t
                },
                LOGOUT: function() {
                    b()
                }
            })
        },
        223175: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: a,
                        d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        416644: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        816240: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(43338),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), i.X)
        },
        441246: () => {},
        339061: () => {}
    }
]);