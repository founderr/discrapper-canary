"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [28241, 58499], {
        919810: (e, n, t) => {
            t.d(n, {
                ZP: () => b,
                so: () => E,
                wg: () => y
            });
            var r = t(202351),
                i = t(15970),
                o = t(766496),
                l = t(61209),
                u = t(5544),
                a = t(567403),
                c = t(682776),
                s = t(563135),
                d = t(269300),
                f = t(3155),
                p = t(2590);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                return "entity_type" in e ? {
                    entityType: e.entity_type,
                    channelId: e.channel_id
                } : e
            }

            function y(e) {
                var n = v(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z], 1),
                    t = n[0],
                    r = g(e),
                    i = r.entityType,
                    o = r.channelId,
                    u = i === f.WX.EXTERNAL;
                if (u) return !0;
                var a = t.getChannel(o);
                return null != a && s.ZP.canEveryoneRole(p.Plq.VIEW_CHANNEL, a)
            }

            function E(e) {
                var n = v(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.ZP, l.Z, a.Z, o.Z], 4),
                    t = n[0],
                    r = n[1],
                    s = n[2],
                    p = n[3];
                if ((0, d.Z2)(e)) return !1;
                var h = e.guild_id,
                    g = e.channel_id,
                    E = e.entity_type === f.WX.EXTERNAL,
                    b = E ? t.getDefaultChannel(e.guild_id) : r.getChannel(g),
                    Z = s.getGuild(h),
                    _ = p.getStageInstanceByChannel(g);
                return !!(0, i.b)(c.Z, Z, b, _) && (null != b && y(e, [r]))
            }

            function b(e) {
                return (0,
                    r.e7)([u.ZP, l.Z, a.Z, o.Z], (function() {
                    return E(e, [u.ZP, l.Z, a.Z, o.Z])
                }), [e])
            }
        },
        158499: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(202351),
                i = t(826945),
                o = t(567403);

            function l(e, n) {
                return (0, r.cj)([o.Z, i.Z], (function() {
                    var t = o.Z.getGuild(e),
                        r = null != t;
                    null == t && null != n && (t = i.Z.getCachedGuildByEventId(n));
                    return {
                        isMember: r,
                        guild: t
                    }
                }), [e, n])
            }
        },
        85941: (e, n, t) => {
            t.d(n, {
                Z: () => D
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                l = t(971402),
                u = t(327499),
                a = t(276985),
                c = t(716371),
                s = t(787193),
                d = t(784426),
                f = t(915840),
                p = t(5544),
                h = t(567403),
                v = t(682776),
                g = t(652591),
                y = t(691797),
                E = t(242735),
                b = t(919810),
                Z = t(619584),
                _ = t(610030),
                P = t(3155),
                m = t(2590),
                C = t(473708);

            function O(e, n, t, r, i, o, l) {
                try {
                    var u = e[o](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            O(o, r, i, l, u, "next", e)
                        }

                        function u(e) {
                            O(o, r, i, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function T(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function j(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        T(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
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
            var M = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function D(e) {
                var n = e.guild,
                    O = e.channel,
                    T = e.guildScheduledEvent,
                    D = e.isActive,
                    N = e.rsvped,
                    x = e.recurrenceId,
                    G = e.onActionTaken,
                    k = function(e) {
                        e.stopPropagation();
                        N ? E.Z.deleteRsvpForGuildEvent(A, V) : E.Z.createRsvpForGuildEvent(A, V)
                    },
                    L = function(e) {
                        e.stopPropagation();
                        var n = p.ZP.getDefaultChannel(V);
                        (0, o.closeAllModals)();
                        (0, d.XU)(V, null == n ? void 0 : n.id)
                    },
                    S = T.scheduled_start_time,
                    A = T.id,
                    R = T.entity_type,
                    V = T.guild_id,
                    U = (0, (0, s.XJ)(null != O ? O : n).canManageGuildEvent)(T),
                    X = (0, b.ZP)(T),
                    W = (0, Z.T)(null == O ? void 0 : O.id, T.id),
                    F = (0, _.ub)(S).withinStartWindow,
                    J = (0, i.e7)([v.Z], (function() {
                        return !(null == O ? void 0 : O.isGuildVocal()) || v.Z.can(m.Plq.CONNECT, O)
                    }), [O]),
                    q = (0, c.J)(V);

                function B() {
                    return (B = w((function(e) {
                        return M(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.stopPropagation();
                                    return [4, u.Z.joinGuild(V)];
                                case 1:
                                    n.sent();
                                    h.Z.addConditionalChangeListener((function() {
                                        if (null == h.Z.getGuild(V)) return !0;
                                        D || k(e);
                                        L(e);
                                        return !1
                                    }));
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return {
                    onDeleteClick: U ? function(e) {
                        e.stopPropagation();
                        U && !D && (0, o.openModal)((function(e) {
                            return (0, r.jsx)(o.ConfirmModal, I(j({}, e), {
                                header: C.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                                confirmText: C.Z.Messages.DELETE,
                                cancelText: C.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return E.Z.deleteGuildEvent(A, V)
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: C.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                                })
                            }))
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation();
                        null != n && (0, l.jW)(e, w((function() {
                            var e, i;
                            return M(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(71718), t.e(49518), t.e(71575), t.e(91406), t.e(43244), t.e(54368), t.e(65278), t.e(1441), t.e(45893), t.e(66471)]).then(t.bind(t, 171037))];
                                    case 1:
                                        e = o.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, j({
                                                guildEventId: A,
                                                recurrenceId: x,
                                                channel: O,
                                                guild: n
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onJoinClick: J || q ? function(e) {
                        e.stopPropagation();
                        if (q) {
                            null == G || G();
                            (0, a.hk)(V)
                        } else if (null == O ? void 0 : O.isGuildStageVoice()) {
                            (0, f.Cq)(O);
                            null == G || G()
                        } else if (null == O ? void 0 : O.isGuildVoice()) {
                            E.Z.joinVoiceEvent(O.guild_id, O.id);
                            null == G || G()
                        }
                    } : void 0,
                    onRsvpClick: k,
                    onStartClick: U && F ? function(e) {
                        e.stopPropagation();
                        (0, o.openModalLazy)(w((function() {
                            var e, n;
                            return M(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(49518), t.e(71575), t.e(35401), t.e(74544), t.e(72392)]).then(t.bind(t, 874544))];
                                    case 1:
                                        e = i.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, I(j({}, e), {
                                                event: T,
                                                onSuccess: G
                                            }))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    onInviteClick: function(e) {
                        e.stopPropagation();
                        if (null != n)
                            if (X && W)(0, o.openModalLazy)(w((function() {
                                var e, i;
                                return M(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(75442), t.e(19389)]).then(t.bind(t, 167551))];
                                        case 1:
                                            e = o.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, I(j({}, e), {
                                                    guild: n,
                                                    channel: O,
                                                    guildScheduledEvent: T,
                                                    source: m.t4x.GUILD_EVENTS
                                                }))
                                            }]
                                    }
                                }))
                            })));
                            else {
                                var i = function(e) {
                                    var n = e.guildId,
                                        t = e.guildEventId;
                                    return "https://discord.com/events/".concat(n, "/").concat(t)
                                }({
                                    guildId: V,
                                    guildEventId: A
                                });
                                (0, y.JG)(i);
                                g.default.track(m.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: V,
                                    guild_scheduled_event_id: A
                                })
                            }
                    },
                    onEndClick: U && R === P.WX.EXTERNAL && D ? function(e) {
                        e.stopPropagation();
                        if (U) {
                            var n = function() {
                                E.Z.endEvent(A, V);
                                (0, o.closeAllModals)()
                            };
                            (0, o.openModal)((function(e) {
                                return (0, r.jsx)(o.ConfirmModal, I(j({}, e), {
                                    header: C.Z.Messages.END_EVENT,
                                    confirmText: C.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                    cancelText: C.Z.Messages.CANCEL,
                                    onConfirm: n,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: C.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                    })
                                }))
                            }))
                        }
                    } : void 0,
                    onJoinGuildClick: function(e) {
                        return B.apply(this, arguments)
                    },
                    onGoToGuildClick: L
                }
            }
        }
    }
]);