(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [88070], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        238823: (e, n, t) => {
            "use strict";
            t.d(n, {
                S: () => a
            });
            var r = t(785893),
                u = (t(667294), t(795308)),
                i = t(633878);

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function c(e, n) {
                if (null == e) return {};
                var t, r, u = function(e, n) {
                    if (null == e) return {};
                    var t, r, u = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (u[t] = e[t])
                    }
                    return u
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (u[t] = e[t])
                    }
                }
                return u
            }
            var a = function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    d = void 0 === f ? u.Z.colors.INTERACTIVE_NORMAL : f,
                    v = e.colorClass,
                    p = void 0 === v ? "" : v,
                    b = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        937119: (e, n, t) => {
            "use strict";
            t.d(n, {
                c: () => v
            });
            var r = t(23279),
                u = t.n(r),
                i = t(281110),
                o = t(744564),
                l = t(612831),
                c = t(2590);

            function a(e, n, t, r, u, i, o) {
                try {
                    var l = e[i](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, u)
            }
            var s, f, d = function(e, n) {
                    var t, r, u, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1]
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (u = 2 & i[0] ? r.return : i[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, i[1])).done) return u;
                                    (r = 0,
                                        u) && (i = [2 & i[0], u.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            u = i;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(u = o.trys, u = u.length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < u[1]) {
                                                o.label = u[1];
                                                u = i;
                                                break
                                            }
                                            if (u && o.label < u[2]) {
                                                o.label = u[2];
                                                o.ops.push(i);
                                                break
                                            }
                                            u[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, o)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    t = u = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                v = u()((f = (s = function(e) {
                    var n;
                    return d(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                o.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_START"
                                });
                                return [4, i.ZP.get({
                                    url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                    query: {
                                        type: l.C2.GUILD_SCHEDULED_EVENT
                                    }
                                })];
                            case 1:
                                n = t.sent();
                                o.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                    channelId: e,
                                    entries: n.body
                                });
                                return [3, 3];
                            case 2:
                                t.sent();
                                o.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_FAILURE"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(t, r) {
                        var u = s.apply(e, n);

                        function i(e) {
                            a(u, t, r, i, o, "next", e)
                        }

                        function o(e) {
                            a(u, t, r, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e) {
                    return f.apply(this, arguments)
                }), 200)
        },
        79522: (e, n, t) => {
            "use strict";
            t.d(n, {
                TT: () => o,
                AN: () => l,
                LK: () => c
            });
            var r = t(940060),
                u = t(227202),
                i = t(2590),
                o = i.Plq.VIEW_CHANNEL,
                l = r.Z.combine(o, i.Plq.CONNECT),
                c = r.Z.combine(o, u.yP)
        },
        678545: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(667294),
                u = t(202351),
                i = t(787193),
                o = t(5544),
                l = t(567403),
                c = t(682776),
                a = t(2590);
            const s = function(e, n) {
                var t = (0, u.e7)([l.Z], (function() {
                        return l.Z.getGuild(e)
                    }), [e]),
                    s = (0, i.XJ)(t).canCreateGuildEvent,
                    f = (0, u.e7)([o.ZP], (function() {
                        return o.ZP.getChannels(e)[o.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != n ? f.filter((function(e) {
                            return e.channel.type === n
                        })) : f
                    }), [f, n]);
                return (0, u.e7)([c.Z], (function() {
                    if (c.Z.can(a.Plq.ADMINISTRATOR, t)) return !0;
                    if (s) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var u, o = d[Symbol.iterator](); !(e = (u = o.next()).done); e = !0) {
                            var l = u.value.channel;
                            if ((0, i.Gw)(l).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return !1
                }), [d, t, s])
            }
        },
        201441: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => h,
                qY: () => g,
                gM: () => O,
                k5: () => C,
                u1: () => P,
                eF: () => Z,
                sz: () => m
            });
            var r = t(667294),
                u = t(202351),
                i = t(826945),
                o = t(61209),
                l = t(5544),
                c = t(567403),
                a = t(682776),
                s = t(72580),
                f = t(269300),
                d = t(371188),
                v = t(3155),
                p = t(2590);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, u, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            u = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw u
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = [];

            function h(e, n) {
                return (0, u.Wu)([c.Z, i.Z, f.ZP, a.Z, o.Z, l.ZP], (function() {
                    var t = c.Z.getGuild(e);
                    if (null == t) return E;
                    if (t.hasFeature(p.oNc.HUB)) {
                        var r, u, d = null === (r = l.ZP.getDefaultChannel(t.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (u = i.Z.getEventDirectoryEntries(d)) && void 0 !== u ? u : []).map((function(e) {
                            var n = e.scheduledEventId,
                                t = f.ZP.getGuildScheduledEvent(n);
                            return null != t ? t : i.Z.getCachedGuildScheduledEventById(n)
                        })).filter(s.lm)
                    }
                    return f.ZP.getGuildScheduledEventsByIndex(null != n ? n : f.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e) {
                        var n = e.channel_id;
                        if (null == n) return !0;
                        var t = o.Z.getChannel(n);
                        return a.Z.can(p.Plq.VIEW_CHANNEL, t)
                    }))
                }), [n, e])
            }

            function g(e) {
                return (0, u.e7)([f.ZP, o.Z, a.Z], (function() {
                    var n = o.Z.getChannel(e);
                    if (!a.Z.can(p.Plq.VIEW_CHANNEL, n)) return null;
                    if (null == (null == n ? void 0 : n.guild_id)) return null;
                    var t = f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_ACTIVE(e));
                    return t.length > 0 ? t[0] : null
                }), [e])
            }

            function O(e) {
                var n = (0, u.Wu)([f.ZP], (function() {
                    return f.ZP.getGuildScheduledEventsForGuild(e)
                }), [e]);
                return r.useMemo((function() {
                    var e = new Map;
                    n.forEach((function(n) {
                        var t = n.channel_id;
                        null != t && e.set(t, n)
                    }));
                    return e
                }), [n])
            }

            function C(e) {
                return (0, u.e7)([f.ZP, o.Z, a.Z], (function() {
                    return f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === v.WX.NONE || !(0, f.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var n = o.Z.getChannel(e.channel_id);
                        return a.Z.can(p.Plq.VIEW_CHANNEL, n)
                    }))
                }), [e])
            }

            function P(e) {
                return (0, u.e7)([f.ZP], (function() {
                    return f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function Z(e) {
                return (0, u.e7)([o.Z, f.ZP], (function() {
                    var n = f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != o.Z.getChannel(e.channel_id)
                    }));
                    return o.Z.getChannel(null == n ? void 0 : n.channel_id)
                }), [e])
            }

            function m(e) {
                var n = y(r.useState((function() {
                        return Date.now()
                    })), 2),
                    t = n[0],
                    i = n[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        i(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var o = (0, u.e7)([f.ZP], (function() {
                        return f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, t]),
                    l = r.useMemo((function() {
                        return o.filter((function(e) {
                            var n = (0, d.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                t = n.withinStartWindow,
                                r = n.diffMinutes;
                            return e.status !== v.p1.ACTIVE && t && r < 15
                        }))
                    }), [o]);
                return l
            }
        },
        197307: (e, n, t) => {
            "use strict";
            t.d(n, {
                l: () => r
            });
            var r = (0, t(38736).Z)((function(e) {
                return {
                    canCloseModal: !0,
                    onUpdateCanCloseModal: function(n) {
                        e({
                            canCloseModal: n
                        })
                    }
                }
            }))
        },
        360703: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(882723),
                u = t(26468),
                i = t(197307),
                o = t(2590),
                l = "guild-event-modal";
            const c = function() {
                var e = (0, u.bp)() === o.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: l,
                    contextKey: e,
                    onCloseRequest: function() {
                        i.l.getState().canCloseModal && (0, r.closeModal)(l, e)
                    }
                }
            }
        },
        172028: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                u = t(567403),
                i = t(2590);

            function o(e) {
                return (0, r.e7)([u.Z], (function() {
                    if (null == e) return !1;
                    var n, t = u.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(i.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => u
            });
            var r = t(2590);

            function u(e, n, t, u) {
                var i = null != t ? t : n;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != n && null != n.vanityURLCode || null != (null == u ? void 0 : u.invite_code)
            }
        },
        787193: (e, n, t) => {
            "use strict";
            t.d(n, {
                XJ: () => E,
                Gw: () => h,
                Yl: () => g
            });
            var r = t(667294),
                u = t(940060),
                i = t(202351),
                o = t(897436),
                l = t(848285),
                c = (t(5544), t(682776)),
                a = t(473903),
                s = (t(563135), t(79522)),
                f = t(520453);

            function d(e, n) {
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
                        var r, u, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            u = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw u
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: function() {
                        return !1
                    },
                    canManageGuildEvent: function() {
                        return !1
                    }
                },
                b = function(e, n, t, r) {
                    if (null == e) return !1;
                    if (t) return !0;
                    if ("creator_id" in e) return r && null != n && e.creator_id === n.id;
                    if ("userId" in e) return r && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var u;
                        return r && null != n && (null === (u = e.user) || void 0 === u ? void 0 : u.id) === n.id
                    }
                    return !1
                },
                y = function(e) {
                    if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
                    var n = s.TT;
                    e.isGuildStageVoice() ? n = s.LK : e.isGuildVoice() && (n = s.AN);
                    return [u.Z.combine(n, f.Pl.CREATE_EVENTS), u.Z.combine(n, f.Pl.MANAGE_EVENTS)]
                },
                E = function(e) {
                    var n = v(e instanceof l.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : y(e), 2),
                        t = n[0],
                        u = n[1],
                        o = v((0, i.Wu)([c.Z], (function() {
                            return [c.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), c.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), c.Z.can(t, e), c.Z.can(u, e)]
                        })), 4),
                        s = o[0],
                        d = o[1],
                        E = o[2],
                        h = o[3],
                        g = (0, i.e7)([a.default], (function() {
                            return a.default.getCurrentUser()
                        })),
                        O = r.useCallback((function(e) {
                            return b(e, g, d, s)
                        }), [s, d, g]),
                        C = r.useCallback((function(e) {
                            return b(e, g, h, E)
                        }), [h, E, g]);
                    return null == e ? p : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: E,
                        canManageAllExpressions: d,
                        canManageAllEvents: h,
                        canManageGuildExpression: O,
                        canManageGuildEvent: C
                    }
                },
                h = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        r = v(e instanceof l.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : y(e), 2),
                        u = r[0],
                        i = r[1],
                        o = n.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = n.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        d = n.can(u, e),
                        E = n.can(i, e),
                        h = t.getCurrentUser();
                    return null == e ? p : {
                        canCreateExpressions: o,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: E,
                        canManageGuildExpression: function(e) {
                            return b(e, h, s, o)
                        },
                        canManageGuildEvent: function(e) {
                            return b(e, h, E, d)
                        }
                    }
                },
                g = function(e) {
                    var n = (0, i.e7)([c.Z], (function() {
                            return c.Z.can(f.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, o.JY)(null == e ? void 0 : e.id).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                u = (t(667294), t(318715)),
                i = t(785085);

            function o(e) {
                var n = e.children,
                    t = e.confettiLocation;
                return (0, u.ZP)([i.Z], (function() {
                    return i.Z.isEnabled({
                        confettiLocation: t
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: n
                }) : null
            }
        },
        919031: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(667294),
                u = t(318715),
                i = t(255875),
                o = t(785085);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c() {
                var e = r.useContext(i.E).createMultipleConfettiAt,
                    n = (0, u.ZP)([o.Z], (function() {
                        return o.Z.getState()
                    })),
                    t = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    c = r.useMemo((function() {
                        return {
                            fire: function(r, u, i) {
                                var o, c, a = null != (null == i ? void 0 : i.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                l(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, i.settings) : n,
                                    s = t(a);
                                e(r, u, s, (null !== (o = null == i ? void 0 : i.count) && void 0 !== o ? o : a.confettiCount) * (null !== (c = null == i ? void 0 : i.countMultiplier) && void 0 !== c ? c : 1), {
                                    sprite: null == i ? void 0 : i.sprite
                                })
                            }
                        }
                    }), [e, t, n]);
                return c
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                u = (t(667294), t(294184)),
                i = t.n(u),
                o = t(473708),
                l = t(300443),
                c = t.n(l),
                a = t(483683),
                s = t.n(a),
                f = t(63685),
                d = t.n(f);

            function v(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(c().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: i()(c().sparkleIcon, c().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s(),
                        className: i()(c().sparkleIcon, c().sparkleTop)
                    })]
                })
            }
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                u = (t(667294), t(450520)),
                i = t(66541),
                o = t(633878);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
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

            function a(e, n) {
                if (null == e) return {};
                var t, r, u = function(e, n) {
                    if (null == e) return {};
                    var t, r, u = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (u[t] = e[t])
                    }
                    return u
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (u[t] = e[t])
                    }
                }
                return u
            }
            const s = (0, u.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 20 : n,
                    u = e.height,
                    i = void 0 === u ? 20 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    v = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(v)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), i.T)
        },
        961241: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                u = (t(667294), t(450520)),
                i = t(238823),
                o = t(633878);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
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

            function a(e, n) {
                if (null == e) return {};
                var t, r, u = function(e, n) {
                    if (null == e) return {};
                    var t, r, u = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (u[t] = e[t])
                    }
                    return u
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (u[t] = e[t])
                    }
                }
                return u
            }
            const s = (0, u.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    u = e.height,
                    i = void 0 === u ? 24 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    v = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(v)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }), i.S)
        }
    }
]);