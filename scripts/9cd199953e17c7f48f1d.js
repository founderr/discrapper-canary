(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36829], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        238823: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => a
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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
            var a = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, i.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        937119: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => p
            });
            var r = n(23279),
                o = n.n(r),
                i = n(281110),
                l = n(744564),
                u = n(612831),
                c = n(2590);

            function a(e, t, n, r, o, i, l) {
                try {
                    var u = e[i](l),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }
            var s, f, d = function(e, t) {
                    var n, r, o, i, l = {
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
                                for (; l;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0,
                                        o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                l.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && l.label < o[1]) {
                                                l.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2];
                                                l.ops.push(i);
                                                break
                                            }
                                            o[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, l)
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
                p = o()((f = (s = function(e) {
                    var t;
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_START"
                                });
                                return [4, i.ZP.get({
                                    url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                    query: {
                                        type: u.C2.GUILD_SCHEDULED_EVENT
                                    }
                                })];
                            case 1:
                                t = n.sent();
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                    channelId: e,
                                    entries: t.body
                                });
                                return [3, 3];
                            case 2:
                                n.sent();
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_FAILURE"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = s.apply(e, t);

                        function i(e) {
                            a(o, n, r, i, l, "next", e)
                        }

                        function l(e) {
                            a(o, n, r, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e) {
                    return f.apply(this, arguments)
                }), 200)
        },
        79522: (e, t, n) => {
            "use strict";
            n.d(t, {
                TT: () => l,
                AN: () => u,
                LK: () => c
            });
            var r = n(940060),
                o = n(227202),
                i = n(2590),
                l = i.Plq.VIEW_CHANNEL,
                u = r.Z.combine(l, i.Plq.CONNECT),
                c = r.Z.combine(l, o.yP)
        },
        678545: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(667294),
                o = n(202351),
                i = n(787193),
                l = n(5544),
                u = n(567403),
                c = n(682776),
                a = n(2590);
            const s = function(e, t) {
                var n = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(e)
                    }), [e]),
                    s = (0, i.XJ)(n).canCreateGuildEvent,
                    f = (0, o.e7)([l.ZP], (function() {
                        return l.ZP.getChannels(e)[l.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != t ? f.filter((function(e) {
                            return e.channel.type === t
                        })) : f
                    }), [f, t]);
                return (0, o.e7)([c.Z], (function() {
                    if (c.Z.can(a.Plq.ADMINISTRATOR, n)) return !0;
                    if (s) return !0;
                    var e = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var o, l = d[Symbol.iterator](); !(e = (o = l.next()).done); e = !0) {
                            var u = o.value.channel;
                            if ((0, i.Gw)(u).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        t = !0;
                        r = e
                    } finally {
                        try {
                            e || null == l.return || l.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                    return !1
                }), [d, n, s])
            }
        },
        197307: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => r
            });
            var r = (0, n(38736).Z)((function(e) {
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
        360703: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(304548),
                o = n(26468),
                i = n(197307),
                l = n(2590),
                u = "guild-event-modal";
            const c = function() {
                var e = (0, o.bp)() === l.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: u,
                    contextKey: e,
                    onCloseRequest: function() {
                        i.l.getState().canCloseModal && (0, r.closeModal)(u, e)
                    }
                }
            }
        },
        172028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
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
        350403: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(202351),
                o = n(567403),
                i = n(2590);

            function l(e) {
                return (0, r.e7)([o.Z], (function() {
                    if (null == e) return !1;
                    var t, n = o.Z.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(i.oNc.HUB)) && void 0 !== t && t
                }), [e])
            }
        },
        15970: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => o
            });
            var r = n(2590);

            function o(e, t, n, o) {
                var i = null != n ? n : t;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        787193: (e, t, n) => {
            "use strict";
            n.d(t, {
                XJ: () => O,
                Gw: () => E,
                Yl: () => g
            });
            var r = n(667294),
                o = n(940060),
                i = n(202351),
                l = n(897436),
                u = n(848285),
                c = (n(5544), n(682776)),
                a = n(473903),
                s = (n(563135), n(79522)),
                f = n(520453);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = {
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
                v = function(e, t, n, r) {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
                    if ("userId" in e) return r && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var o;
                        return r && null != t && (null === (o = e.user) || void 0 === o ? void 0 : o.id) === t.id
                    }
                    return !1
                },
                y = function(e) {
                    if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
                    var t = s.TT;
                    e.isGuildStageVoice() ? t = s.LK : e.isGuildVoice() && (t = s.AN);
                    return [o.Z.combine(t, f.Pl.CREATE_EVENTS), o.Z.combine(t, f.Pl.MANAGE_EVENTS)]
                },
                O = function(e) {
                    var t = p(e instanceof u.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : y(e), 2),
                        n = t[0],
                        o = t[1],
                        l = p((0, i.Wu)([c.Z], (function() {
                            return [c.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), c.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), c.Z.can(n, e), c.Z.can(o, e)]
                        })), 4),
                        s = l[0],
                        d = l[1],
                        O = l[2],
                        E = l[3],
                        g = (0, i.e7)([a.default], (function() {
                            return a.default.getCurrentUser()
                        })),
                        h = r.useCallback((function(e) {
                            return v(e, g, d, s)
                        }), [s, d, g]),
                        C = r.useCallback((function(e) {
                            return v(e, g, E, O)
                        }), [E, O, g]);
                    return null == e ? b : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: O,
                        canManageAllExpressions: d,
                        canManageAllEvents: E,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                E = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        r = p(e instanceof u.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : y(e), 2),
                        o = r[0],
                        i = r[1],
                        l = t.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(o, e),
                        O = t.can(i, e),
                        E = n.getCurrentUser();
                    return null == e ? b : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: O,
                        canManageGuildExpression: function(e) {
                            return v(e, E, s, l)
                        },
                        canManageGuildEvent: function(e) {
                            return v(e, E, O, d)
                        }
                    }
                },
                g = function(e) {
                    var t = (0, i.e7)([c.Z], (function() {
                            return c.Z.can(f.Pl.MANAGE_GUILD, e)
                        })),
                        n = (0, l.JY)(null == e ? void 0 : e.id).showSettingsToggle;
                    return t && n
                }
        },
        367299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(318715)),
                i = n(785085);

            function l(e) {
                var t = e.children,
                    n = e.confettiLocation;
                return (0, o.ZP)([i.Z], (function() {
                    return i.Z.isEnabled({
                        confettiLocation: n
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                o = n(318715),
                i = n(255875),
                l = n(785085);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c() {
                var e = r.useContext(i.E).createMultipleConfettiAt,
                    t = (0, o.ZP)([l.Z], (function() {
                        return l.Z.getState()
                    })),
                    n = r.useCallback((function(e) {
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
                            fire: function(r, o, i) {
                                var l, c, a = null != (null == i ? void 0 : i.settings) ? function(e) {
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
                                    }({}, t, i.settings) : t,
                                    s = n(a);
                                e(r, o, s, (null !== (l = null == i ? void 0 : i.count) && void 0 !== l ? l : a.confettiCount) * (null !== (c = null == i ? void 0 : i.countMultiplier) && void 0 !== c ? c : 1), {
                                    sprite: null == i ? void 0 : i.sprite
                                })
                            }
                        }
                    }), [e, n, t]);
                return c
            }
        },
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(473708),
                u = n(300443),
                c = n.n(u),
                a = n(483683),
                s = n.n(a),
                f = n(63685),
                d = n.n(f);

            function p(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(c().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: i()(c().sparkleIcon, c().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s(),
                        className: i()(c().sparkleIcon, c().sparkleTop)
                    })]
                })
            }
        },
        457997: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(66541),
                l = n(633878);

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

            function a(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 20 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, l.Z)(p)), {
                    width: n,
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
        961241: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(238823),
                l = n(633878);

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

            function a(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
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
                }({}, (0, l.Z)(p)), {
                    width: n,
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