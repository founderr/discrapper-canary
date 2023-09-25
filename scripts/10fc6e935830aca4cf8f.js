"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36181], {
        735885: (e, t, r) => {
            r.d(t, {
                jN: () => o,
                xf: () => a,
                Ou: () => i
            });
            var n = r(744564);

            function o(e) {
                n.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                n.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function i() {
                n.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        973889: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(281110),
                o = r(2590),
                a = r(473708);

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
            }

            function u(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var r, n = i(e);
                    if (t) {
                        var o = i(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(r, e);
                var t = s(r);

                function r(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    return t.call(this, e, n, a.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return r
            }(n.ZP.V6OrEarlierAPIError)
        },
        980813: (e, t, r) => {
            r.d(t, {
                Oq: () => c,
                sw: () => f,
                jy: () => p
            });
            var n = r(940060),
                o = r(202351),
                a = r(260561),
                i = r(567403),
                u = r(682776),
                l = r(982358),
                c = (0, a.B)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                s = (0, a.B)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function f(e) {
                var t = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(e)
                    })),
                    r = (0, o.e7)([u.Z], (function() {
                        return null != t && n.Z.hasAny(u.Z.computePermissions(t), l.cv)
                    })),
                    a = c.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    }),
                    f = s.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: a.showAlertMode || f.showAlertMode,
                    alsoShowMemberSafety: a.alsoShowMemberSafety || f.alsoShowMemberSafety
                }
            }

            function p(e) {
                var t = i.Z.getGuild(e),
                    r = null != t && n.Z.hasAny(u.Z.computePermissions(t), l.cv),
                    o = c.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    }),
                    a = s.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: o.showAlertMode || a.showAlertMode,
                    alsoShowMemberSafety: o.alsoShowMemberSafety || a.alsoShowMemberSafety
                }
            }
        },
        557233: (e, t, r) => {
            r.d(t, {
                KK: () => _,
                f6: () => g,
                n: () => v,
                Fi: () => A,
                C4: () => w
            });
            var n = r(730381),
                o = r.n(n),
                a = r(281110),
                i = r(396043),
                u = r(703790),
                l = r(567403),
                c = r(652591),
                s = r(980813),
                f = r(2590);

            function p(e, t, r, n, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            p(a, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            p(a, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        y(e, t, r[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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
            var O = function(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && c.default.track(f.rMx.GUILD_RAID_REPORTED, h(b({}, (0, i.hH)(e)), {
                    guild_id: e,
                    raid_types: t
                }))
            }

            function g(e, t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = d((function(e, t) {
                    var r;
                    return O(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                (r = new Set(e.features)).has(f.oNc.COMMUNITY) ? t ? r.delete(f.oNc.RAID_ALERTS_DISABLED) : r.add(f.oNc.RAID_ALERTS_DISABLED) : t ? r.add(f.oNc.NON_COMMUNITY_RAID_ALERTS) : r.delete(f.oNc.NON_COMMUNITY_RAID_ALERTS);
                                return [4, u.Z.saveGuild(e.id, {
                                    features: r
                                }, {
                                    throwErr: !0
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e, t, r, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e, t, r, n) {
                    var i, u;
                    return O(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                i = o()().add(n, "hours").toISOString();
                                u = {
                                    invites_disabled_until: t ? i : null,
                                    dms_disabled_until: r ? i : null
                                };
                                return [4, a.ZP.put({
                                    url: f.ANM.GUILD_INCIDENT_ACTIONS(e),
                                    body: u
                                })];
                            case 1:
                                return [2, l.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e, t, r) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = d((function(e, t, r) {
                    var n, o, i;
                    return O(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                n = (0, s.jy)(e).showAlertMode;
                                o = l.Z.getGuild(e);
                                i = null == o ? void 0 : o.getSafetyAlertsChannelId();
                                return n && null != i ? [4, a.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                                    body: {
                                        alert_message_id: t,
                                        reason: r
                                    }
                                })] : [2, null];
                            case 1:
                                return [2, u.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = d((function(e) {
                    var t, r, n;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = (0, s.jy)(e).showAlertMode;
                                r = l.Z.getGuild(e);
                                n = null == r ? void 0 : r.getSafetyAlertsChannelId();
                                return t && null != n ? [4, a.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_RAID(e)
                                })] : [2, null];
                            case 1:
                                return [2, o.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        982358: (e, t, r) => {
            r.d(t, {
                lp: () => i,
                Fl: () => u,
                c1: () => l,
                cv: () => c
            });
            var n = r(940060),
                o = r(520453),
                a = r(473708),
                i = 2,
                u = 2,
                l = function() {
                    return [{
                        value: 1,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                    }, {
                        value: 2,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                    }, {
                        value: 4,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                    }, {
                        value: 6,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                    }, {
                        value: 12,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                    }, {
                        value: 24,
                        label: a.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                    }]
                },
                c = n.Z.combine(o.Pl.ADMINISTRATOR, o.Pl.MANAGE_GUILD, o.Pl.BAN_MEMBERS, o.Pl.KICK_MEMBERS, o.Pl.MODERATE_MEMBERS)
        },
        217326: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => A
            });
            var n = r(785893),
                o = r(667294),
                a = r(294184),
                i = r.n(a),
                u = r(882723),
                l = r(396043),
                c = r(557233),
                s = r(65162),
                f = r(2590),
                p = r(473708),
                d = r(233185),
                y = r.n(d);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t, r, n, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            h(a, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            h(a, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function _(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? b(e, t) : void 0
                }
            }
            var E = function(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function A(e) {
                var t = e.guildId,
                    a = e.messageId,
                    d = e.transitionState,
                    b = e.onClose,
                    h = function(e) {
                        var t = A.includes(e);
                        S(t ? function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        } : function(t) {
                            return m(t).concat([e])
                        })
                    },
                    v = g(o.useState([]), 2),
                    A = v[0],
                    S = v[1],
                    w = g(o.useState(), 2),
                    I = w[0],
                    R = w[1],
                    P = o.useCallback((function() {
                        var e = {
                            raid_alert_type: s.wR.JOIN_RAID,
                            raid_alert_id: a,
                            false_alarm_type: A.map((function(e) {
                                return e.toString()
                            })),
                            false_alarm_other_reason: I,
                            guild_id: t
                        };
                        (0, l.yw)(f.rMx.GUILD_RAID_FEEDBACK, e);
                        (0, c.Fi)(t, a, (0, s.J$)(A));
                        b();
                        (0, u.openModalLazy)(O((function() {
                            var e, t;
                            return E(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(16841)]).then(r.bind(r, 916841))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(t, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        _(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e))
                                        }]
                                }
                            }))
                        })))
                    }), [b, a, t, I, A]),
                    D = [{
                        text: p.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                        value: s.$l.LEGITIMATE_ACTIVITY
                    }, {
                        text: p.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                        value: s.$l.DM_SPAM
                    }, {
                        text: p.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                        value: s.$l.JOIN_RAID
                    }, {
                        text: p.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                        value: s.$l.OTHER
                    }];
                return (0, n.jsxs)(u.ModalRoot, {
                    transitionState: d,
                    size: u.ModalSize.SMALL,
                    children: [(0, n.jsx)(u.ModalHeader, {
                        separator: !1,
                        className: y().center,
                        children: (0, n.jsx)(u.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: p.Z.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, n.jsxs)(u.ModalContent, {
                        className: y().center,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: y().textCenter,
                            children: p.Z.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, n.jsx)("div", {
                            className: y().options,
                            children: D.map((function(e) {
                                var t = e.text,
                                    r = e.value;
                                return (0, n.jsxs)("div", {
                                    className: i()(y().optionContainer, _({}, y().optionContainerOther, r === s.$l.OTHER)),
                                    children: [(0, n.jsxs)(u.Clickable, {
                                        className: y().optionText,
                                        onClick: function() {
                                            return h(r)
                                        },
                                        children: [(0, n.jsx)("div", {
                                            children: (0, n.jsx)(u.Checkbox, {
                                                type: u.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: A.includes(r),
                                                onChange: function() {
                                                    return h(r)
                                                }
                                            })
                                        }), (0, n.jsx)(u.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), r === s.$l.OTHER && A.includes(s.$l.OTHER) && (0, n.jsx)("div", {
                                        className: y().textboxContainer,
                                        children: (0, n.jsx)(u.TextArea, {
                                            className: y().falseAlarmReasonText,
                                            placeholder: p.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: function(e) {
                                                return R(e)
                                            },
                                            value: I,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, r)
                            }))
                        })]
                    }), (0, n.jsxs)(u.ModalFooter, {
                        className: y().modalFooter,
                        children: [(0, n.jsx)("div", {
                            className: y().button,
                            children: (0, n.jsx)(u.Button, {
                                onClick: P,
                                color: u.Button.Colors.BRAND_NEW,
                                look: u.Button.Looks.FILLED,
                                children: p.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, n.jsx)(u.Button, {
                            onClick: b,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            children: p.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        189651: (e, t, r) => {
            r.d(t, {
                iD: () => A,
                Zm: () => S,
                mL: () => w,
                zS: () => R,
                og: () => P,
                aq: () => D
            });
            var n = r(744564),
                o = r(396043),
                a = r(784426),
                i = r(61209),
                u = r(5544),
                l = r(21372),
                c = r(567403),
                s = r(682776),
                f = r(715107),
                p = r(9430),
                d = r(652591),
                y = r(861426),
                b = r(557177),
                h = r(2590),
                O = r(897196);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function g(e, t, r) {
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
                        g(e, t, r[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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

            function E(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                d.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, v(m({
                    num_roles: Object.keys(t.roles).length
                }, (0, o.hH)(e)), {
                    is_viewing_as_member: t.type === b.z.NEW_MEMBER
                }));
                n.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                I(e)
            }

            function S(e, t) {
                var r = y.Z.getData(e);
                if (null != r && r.type === t.type) {
                    d.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, v(m({
                        num_roles: Object.keys(r.roles).length
                    }, (0, o.hH)(e)), {
                        is_viewing_as_member: r.type === b.z.NEW_MEMBER
                    }));
                    n.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: m({}, r, t)
                    });
                    I(e)
                }
            }

            function w(e) {
                n.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function I(e) {
                var t = f.Z.getChannelId(e),
                    r = i.Z.getChannel(t);
                if (!(null != t && (0, O.AB)(t)) && !s.Z.can(h.Plq.VIEW_CHANNEL, r)) {
                    var n = u.ZP.getDefaultChannel(e);
                    null != n && (0, a.uL)(h.Z5c.CHANNEL(e, n.id))
                }
            }

            function R(e, t, r) {
                var n = new Set(p.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return n.add(e)
                }));
                r.forEach((function(e) {
                    return n.delete(e)
                }));
                S(e, {
                    type: b.z.NEW_MEMBER,
                    optInChannels: n
                })
            }

            function P(e, t) {
                var r = c.Z.getGuild(e);
                if (null != r) {
                    ! function(e, t) {
                        var r = E(u.ZP.getSelectableChannelIds(e)).concat(E(u.ZP.getVocalChannelIds(e))),
                            n = Array.from(t);
                        u.ZP.addConditionalChangeListener((function() {
                            var t = l.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (n.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var o = E(u.ZP.getSelectableChannelIds(e)).concat(E(u.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !r.includes(e)
                            }));
                            o.length > 0 && R(e, o, []);
                            return !1
                        }))
                    }(e, t);
                    var n = {};
                    t.forEach((function(e) {
                        return n[e] = r.roles[e]
                    }));
                    S(e, {
                        type: b.z.NEW_MEMBER,
                        roles: n
                    })
                }
            }

            function D(e, t) {
                S(e, m({
                    type: b.z.NEW_MEMBER
                }, t))
            }
        },
        424158: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(730381),
                o = r.n(n),
                a = r(169376);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
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

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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
            var f = function(e) {
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
                    var r, n = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return c(this, r)
                }
            }
            var d = function(e) {
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
                }(r, e);
                var t = p(r);

                function r(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var n;
                    (n = t.call(this)).code = e.code || "";
                    n.temporary = e.temporary || !1;
                    n.revoked = e.revoked || !1;
                    n.uses = e.uses || 0;
                    n.maxUses = e.maxUses || 0;
                    n.maxAge = e.maxAge || 0;
                    n.createdAt = e.createdAt || new Date;
                    n.channel = e.channel;
                    n.guild = e.guild;
                    n.inviter = e.inviter || null;
                    n.targetType = e.targetType || null;
                    n.targetUser = e.targetUser || null;
                    n.targetApplication = e.targetApplication || null;
                    n.type = e.type || null;
                    n.flags = e.flags || 0;
                    return n
                }
                var n = r.prototype;
                n.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (o()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                n.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return o()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                n.toString = function() {
                    return this.code
                };
                r.createFromServer = function(e) {
                    var t;
                    return new r(l(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                i(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: o()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return r
            }(a.Z)
        },
        391438: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(281110),
                o = r(652591);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e, t, r) {
                var n = t.trackedActionData,
                    a = u(t, ["trackedActionData"]),
                    l = {
                        url: a.url,
                        request_method: r
                    };
                return new Promise((function(t, r) {
                    e(a).then((function(e) {
                        var r = n.properties;
                        "function" == typeof n.properties && (r = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, i({
                            status_code: e.status
                        }, l, r));
                        t(e)
                    })).catch((function(e) {
                        var t, a, u = n.properties;
                        "function" == typeof n.properties && (u = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, i({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message
                        }, l, u));
                        r(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return l(n.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(n.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(n.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(n.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(n.ZP.delete, e, "del")
                }
            }
        }
    }
]);