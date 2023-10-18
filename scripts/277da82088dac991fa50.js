"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7194], {
        343639: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(213276));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
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
            }

            function c(e, t) {
                return function(n) {
                    return (0, r.jsx)(o.Z, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, r.jsx)(e, i({}, n))
                    })
                }
            }
        },
        567678: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(19585));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
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
            }

            function c(e, t) {
                return function(n) {
                    var u = (0, o.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(u, {
                        children: (0, r.jsx)(e, i({}, n))
                    })
                }
            }
        },
        557233: (e, t, n) => {
            n.d(t, {
                C4: () => S,
                Fi: () => m,
                KK: () => v,
                f6: () => w,
                n: () => j
            });
            var r = n(730381),
                o = n.n(r),
                u = n(281110),
                i = n(396043),
                c = n(703790),
                l = n(567403),
                a = n(652591),
                s = n(980813),
                f = n(2590);

            function p(e, t, n, r, o, u, i) {
                try {
                    var c = e[u](i),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            p(u, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            p(u, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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
            var O = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    },
                    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                function c(u) {
                    return function(c) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            };

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && a.default.track(f.rMx.GUILD_RAID_REPORTED, h(d({}, (0, i.hH)(e)), {
                    guild_id: e,
                    raid_types: t
                }))
            }

            function w(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = b((function(e, t) {
                    var n;
                    return O(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                (n = new Set(e.features)).has(f.oNc.COMMUNITY) ? t ? n.delete(f.oNc.RAID_ALERTS_DISABLED) : n.add(f.oNc.RAID_ALERTS_DISABLED) : t ? n.add(f.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(f.oNc.NON_COMMUNITY_RAID_ALERTS);
                                return [4, c.Z.saveGuild(e.id, {
                                    features: n
                                }, {
                                    throwErr: !0
                                })];
                            case 1:
                                r.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function j(e, t, n, r) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = b((function(e, t, n, r) {
                    var i, c;
                    return O(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                i = o()().add(r, "hours").toISOString();
                                c = {
                                    invites_disabled_until: t ? i : null,
                                    dms_disabled_until: n ? i : null
                                };
                                return [4, u.ZP.put({
                                    url: f.ANM.GUILD_INCIDENT_ACTIONS(e),
                                    body: c
                                })];
                            case 1:
                                return [2, l.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e, t, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = b((function(e, t, n) {
                    var r, o, i;
                    return O(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                r = (0, s.jy)(e).showAlertMode;
                                o = l.Z.getGuild(e);
                                i = null == o ? void 0 : o.getSafetyAlertsChannelId();
                                return r && null != i ? [4, u.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                                    body: {
                                        alert_message_id: t,
                                        reason: n
                                    }
                                })] : [2, null];
                            case 1:
                                return [2, c.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = b((function(e) {
                    var t, n, r;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = (0, s.jy)(e).showAlertMode;
                                n = l.Z.getGuild(e);
                                r = null == n ? void 0 : n.getSafetyAlertsChannelId();
                                return t && null != r ? [4, u.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_RAID(e)
                                })] : [2, null];
                            case 1:
                                return [2, o.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        665458: (e, t, n) => {
            n.d(t, {
                J: () => f,
                K: () => p
            });
            var r = n(785893),
                o = (n(667294), n(70418));

            function u(e, t, n, r, o, u, i) {
                try {
                    var c = e[u](i),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            u(i, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            u(i, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
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
            var s = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function c(u) {
                    return function(c) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            };

            function f(e) {
                (0, o.openModalLazy)(i((function() {
                    var t, o;
                    return s(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(4070)]).then(n.bind(n, 204070))];
                            case 1:
                                t = u.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, a(l({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function p(e) {
                (0, o.openModalLazy)(i((function() {
                    var t, o;
                    return s(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(81640)]).then(n.bind(n, 181640))];
                            case 1:
                                t = u.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, a(l({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        },
        7194: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                u = n(70418),
                i = n(971402),
                c = n(343639),
                l = n(567678),
                a = n(153686),
                s = n(735885),
                f = n(703790),
                p = n(2590),
                b = n(473708);
            var y = n(202351),
                d = n(980813),
                h = n(557233),
                O = n(588895),
                v = n(922763),
                w = n(46396),
                g = n(85039),
                j = n(567403);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n, r, o, u, i) {
                try {
                    var c = e[u](i),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            m(u, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            m(u, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function D(e, t) {
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

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            i = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function c(u) {
                    return function(c) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            };

            function A(e, t) {
                var c, l = t === p.IlC.POPOUT,
                    a = (0,
                        y.e7)([j.Z], (function() {
                        return j.Z.getGuild(e)
                    }), [e]),
                    s = E(o.useState(!1), 2),
                    f = s[0],
                    P = s[1],
                    m = (0, d.sw)(e).showAlertMode,
                    A = (0, y.e7)([w.Z], (function() {
                        return null != a ? w.Z.getGuildIncident(a.id) : null
                    })),
                    T = (null == a ? void 0 : a.hasFeature(p.oNc.INVITES_DISABLED)) || m && null != (null == A ? void 0 : A.invitesDisabledUntil) && new Date(A.invitesDisabledUntil) > new Date,
                    N = E(o.useState(T), 2),
                    M = N[0],
                    x = N[1],
                    k = (c = I((function(t) {
                        var o;
                        return _(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (f || null == a) return [2];
                                    P(!0);
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 8, 9, 10]);
                                    x(t);
                                    if (!m) return [3, 5];
                                    if (!t) return [3, 2];
                                    o = {
                                        source: O.Zu.MESSAGE,
                                        alertType: (0, v.T1)(A)
                                    };
                                    (0, u.openModalLazy)(I((function() {
                                        var t, u;
                                        return _(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(18554)]).then(n.bind(n, 318554))];
                                                case 1:
                                                    t = i.sent(), u = t.default;
                                                    return [2, function(t) {
                                                        return (0, r.jsx)(u, D(function(e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var n = null != arguments[t] ? arguments[t] : {},
                                                                    r = Object.keys(n);
                                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                }))));
                                                                r.forEach((function(t) {
                                                                    S(e, t, n[t])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, t), {
                                                            guildId: e,
                                                            analyticsData: o
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [3, 4];
                                case 2:
                                    return [4, (0, h.n)(a.id, !1, !1)];
                                case 3:
                                    c.sent();
                                    c.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return [4, (0, g.AG)(a, t)];
                                case 6:
                                    c.sent();
                                    c.label = 7;
                                case 7:
                                    return [3, 10];
                                case 8:
                                    c.sent();
                                    x(!t);
                                    return [3, 10];
                                case 9:
                                    P(!1);
                                    (0, i.Zy)();
                                    return [7];
                                case 10:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return c.apply(this, arguments)
                    });
                return l ? null : (0, r.jsx)(u.MenuCheckboxItem, {
                    id: "pause-invites",
                    label: b.Z.Messages.DISABLE_INVITES,
                    action: function() {
                        k(!M)
                    },
                    checked: M
                })
            }
            var T = n(665458);
            const N = (0, l.Z)((0, c.Z)((function(e) {
                var t = e.guildId,
                    n = e.context,
                    o = e.onSelect,
                    c = function(e, t) {
                        return t === p.IlC.POPOUT ? null : (0, r.jsx)(u.MenuItem, {
                            id: "report-raid",
                            label: b.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            action: function() {
                                (0, s.xf)();
                                (0, T.J)(e)
                            }
                        })
                    }(t, n),
                    l = A(t, n),
                    a = function(e, t) {
                        return t === p.IlC.POPOUT ? null : (0, r.jsx)(u.MenuItem, {
                            id: "nav-server-settings",
                            label: b.Z.Messages.SERVER_SETTINGS,
                            action: function() {
                                (0, s.xf)();
                                f.Z.open(e, p.pNK.MODERATION)
                            }
                        })
                    }(t, n);
                return (0, r.jsxs)(u.Menu, {
                    navId: "moderation-raid-context",
                    onClose: i.Zy,
                    "aria-label": b.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsx)(u.MenuGroup, {
                        children: l
                    }), (0, r.jsxs)(u.MenuGroup, {
                        children: [a, c]
                    })]
                })
            }), {
                object: p.qAy.CONTEXT_MENU
            }), [a.Z.CONTEXT_MENU, a.Z.GUILD_MODERATION_RAID_MENU])
        }
    }
]);