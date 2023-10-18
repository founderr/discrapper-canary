"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14844], {
        114844: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => De
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                c = t.n(o),
                u = t(441143),
                a = t.n(u),
                l = t(202351),
                s = t(70418),
                f = t(77705),
                d = t(571438),
                p = (0, t(260561).B)({
                    kind: "guild",
                    id: "2023-09_gaming_stats_prompt_guild",
                    label: "Gaming stats prompt",
                    defaultConfig: {
                        triggerGamingStats: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "ability to trigger gaming stats prompt",
                        config: {
                            triggerGamingStats: !0
                        }
                    }, {
                        id: 2,
                        label: "ability to trigger gaming stats prompt (leaderboard)",
                        config: {
                            triggerGamingStats: !0
                        }
                    }]
                }),
                b = t(459553),
                g = t(338935),
                h = t(811518),
                O = t(496486),
                y = t.n(O),
                j = t(536945),
                v = t(225386),
                m = t(921122),
                E = t(473708);

            function w(e, n, t, r, i, o, c) {
                try {
                    var u = e[o](c),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function P(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function c(e) {
                            w(o, r, i, c, u, "next", e)
                        }

                        function u(e) {
                            w(o, r, i, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var M = function(e, n) {
                var t, r, i, o, c = {
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
                            for (; c;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            c.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && c.label < i[1]) {
                                            c.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2];
                                            c.ops.push(o);
                                            break
                                        }
                                        i[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                o = n.call(e, c)
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

            function x(e) {
                var n = (0, v.Xb)(e),
                    i = (0, l.e7)([j.Z], (function() {
                        return !y().isEmpty(j.Z.getThreadsForGuild(e.id))
                    }));
                if (!n || !i) return null;
                return (0, r.jsx)(s.MenuItem, {
                    id: "active-threads",
                    label: E.Z.Messages.ACTIVE_THREADS,
                    icon: m.Z,
                    action: function() {
                        (0, s.openModalLazy)(P((function() {
                            var n, i;
                            return M(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(86045)]).then(t.bind(t, 386045))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        I(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({
                                                guildId: e.id
                                            }, n))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
            var S = t(300272),
                Z = t(177179),
                _ = t(296289);
            var D = t(434651),
                G = t(889231),
                C = t(753082),
                T = t(665458),
                L = t(383950),
                A = t(591406),
                N = t(324239),
                R = t(36295),
                U = t(703790),
                k = t(179156),
                V = t(944522),
                H = t(809210),
                B = t(305082),
                Y = t(784426),
                z = t(21372),
                F = t(682776),
                W = t(9430),
                X = t(473903),
                K = t(650802),
                q = t(414392),
                J = t(341287),
                Q = t(168075),
                $ = t(69991),
                ee = t(633878);

            function ne(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function te(e, n) {
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

            function re(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const ie = (0, Q.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    a = e.foreground,
                    l = re(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", te(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            ne(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, ee.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: a,
                        fill: u,
                        d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                    })
                }))
            }), $.P);
            var oe = t(795308);

            function ce(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ue(e, n) {
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

            function ae(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function le(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function se(e, n) {
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

            function fe(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const de = (0, Q.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    a = e.foreground,
                    l = fe(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", se(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            le(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, ee.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: a,
                        fill: u,
                        d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    c = e.color,
                    u = void 0 === c ? oe.Z.colors.INTERACTIVE_NORMAL : c,
                    a = e.colorClass,
                    l = void 0 === a ? "" : a,
                    s = ae(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", ue(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            ce(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, ee.Z)(s)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.406-2.11A2 2 0 0 0 8.93 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: l
                    })
                }))
            }));
            var pe = t(466317),
                be = t(217674),
                ge = t(472034),
                he = t(123017),
                Oe = t(894243),
                ye = t(202469),
                je = t(652591),
                ve = t(2590),
                me = t(485911),
                Ee = t(379663),
                we = t.n(Ee);

            function Pe(e, n, t, r, i, o, c) {
                try {
                    var u = e[o](c),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function Ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function c(e) {
                            Pe(o, r, i, c, u, "next", e)
                        }

                        function u(e) {
                            Pe(o, r, i, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function Me(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function xe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Me(e, n, t[n])
                    }))
                }
                return e
            }

            function Se(e, n) {
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
            var Ze = function(e, n) {
                var t, r, i, o, c = {
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
                            for (; c;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            c.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && c.label < i[1]) {
                                            c.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2];
                                            c.ops.push(o);
                                            break
                                        }
                                        i[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                o = n.call(e, c)
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

            function _e(e, n) {
                (0, s.openModal)((function(t) {
                    return (0, r.jsx)(h.g, Se(xe({}, t), {
                        guild: e,
                        discoverableGuildData: n
                    }))
                }))
            }
            0;
            const De = i.memo((function(e) {
                var n = e.guild,
                    o = e.onClose,
                    u = e.onSelect,
                    h = (0,
                        l.e7)([X.default], (function() {
                        return X.default.getCurrentUser()
                    }));
                a()(null != h, "GuildHeaderPopout: user cannot be undefined");
                i.useEffect((function() {
                    je.default.track(ve.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: n.id
                    })
                }));
                var O = (0, l.e7)([W.Z], (function() {
                        return W.Z.isGuildCollapsed(n.id)
                    }), [n.id]),
                    y = (0, l.cj)([F.Z], (function() {
                        var e = F.Z.can(ve.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(ve.oNc.COMMUNITY);
                        return {
                            canAccessSettings: F.Z.canAccessGuildSettings(n),
                            canManageChannels: F.Z.can(ve.Plq.MANAGE_CHANNELS, n),
                            showGuildAnalytics: (0, R.Fv)(n.id) || e
                        }
                    }), [n]),
                    j = y.canAccessSettings,
                    v = y.canManageChannels,
                    m = y.showGuildAnalytics,
                    w = (0, L.N8)(n),
                    P = n.isOwner(h),
                    I = (0, l.e7)([V.Z], (function() {
                        return V.Z.isLurking(n.id)
                    }), [n.id]),
                    M = (0, l.e7)([z.ZP], (function() {
                        return z.ZP.isCurrentUserGuest(n.id)
                    })),
                    Q = (0, N.Z)(n.id, !0),
                    $ = (0, g.ZP)(n),
                    ee = (0, C.Z)({
                        source: ve.t4x.GUILD_HEADER,
                        guild: n
                    }),
                    ne = (0, D.Z)({
                        guildId: n.id,
                        userId: h.id,
                        analyticsLocation: {
                            page: ve.ZY5.GUILD_CHANNEL,
                            section: ve.jXE.GUILD_DROPDOWN_MENU
                        },
                        icon: ge.Z
                    }),
                    te = n.hasFeature(ve.oNc.HUB),
                    re = n.id === me._,
                    oe = (0, H.Z)(n.id),
                    ce = x(n),
                    ue = function(e) {
                        return (0, r.jsx)(s.MenuItem, {
                            id: "application-directory",
                            label: (0, r.jsx)(r.Fragment, {
                                children: E.Z.Messages.APP_DIRECTORY
                            }),
                            icon: _.Z,
                            action: function() {
                                (0, Z.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: {
                                        name: S.n3.GUILD_HEADER_POPOUT
                                    }
                                })
                            }
                        })
                    }(n),
                    ae = (0, B.dA)("GuildHeaderPopout"),
                    le = (0, G.Z)(n, !0),
                    se = b.Z.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerDeadchat,
                    fe = p.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerGamingStats,
                    Ee = (0, k.oe)(n);
                return I || M ? (0, r.jsx)(s.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, r.jsx)(s.MenuItem, {
                        id: "leave-guild",
                        label: E.Z.Messages.LEAVE_SERVER,
                        icon: ie,
                        action: function() {
                            U.Z.leaveGuild(n.id);
                            M || (0, Y.uL)(ve.Z5c.GUILD_DISCOVERY)
                        }
                    })
                }) : re ? (0, r.jsxs)(s.Menu, {
                    onSelect: u,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(s.MenuGroup, {
                        children: (0, r.jsx)(s.MenuItem, {
                            id: "create-category",
                            label: E.Z.Messages.CREATE_CATEGORY,
                            icon: de,
                            action: function() {
                                return (0, s.openModalLazy)(Ie((function() {
                                    var e, n;
                                    return Ze(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(84680)]).then(t.bind(t, 631199))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, xe({}, e))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })
                    }), (0, r.jsx)(s.MenuGroup, {
                        children: (0, r.jsx)(s.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: E.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: O,
                            action: function() {
                                return f.Z.toggleCollapseGuild(n.id)
                            }
                        })
                    })]
                }) : te ? (0, r.jsxs)(s.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsxs)(s.MenuGroup, {
                        children: [j ? (0, r.jsx)(s.MenuItem, {
                            id: "settings",
                            label: E.Z.Messages.SERVER_SETTINGS,
                            icon: pe.Z,
                            action: function() {
                                U.Z.open(n.id, ve.pNK.OVERVIEW)
                            }
                        }) : null, ee, (0,
                            r.jsx)(s.MenuItem, {
                            id: "privacy",
                            label: E.Z.Messages.PRIVACY_SETTINGS,
                            icon: ye.Z,
                            action: function() {
                                return (0, s.openModalLazy)(Ie((function() {
                                    var e, i;
                                    return Ze(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, Se(xe({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), ne]
                    }), P ? null : (0, r.jsx)(s.MenuGroup, {
                        children: (0, r.jsx)(s.MenuItem, {
                            id: "leave",
                            label: E.Z.Messages.LEAVE_HUB,
                            icon: ie,
                            color: "danger",
                            action: function() {
                                return _e(n, Ee)
                            }
                        })
                    })]
                }) : (0, r.jsxs)(s.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(s.MenuGroup, {
                        children: (0, r.jsx)(s.MenuItem, {
                            id: "premium-subscribe",
                            label: E.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: be.Z,
                            action: function() {
                                (0, A.f)({
                                    guildId: n.id,
                                    location: {
                                        section: ve.jXE.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: c()(Me({}, we().boostingMenuItemHighlight, ae))
                        })
                    }), (0,
                        r.jsxs)(s.MenuGroup, {
                        children: [P && h.isStaff() && se ? (0, r.jsx)(s.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: J.Z,
                            action: function() {
                                (0, d.j8)(n.id, ve.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, P && h.isStaff() && fe ? (0, r.jsx)(s.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: J.Z,
                            action: function() {
                                (0, d.j8)(n.id, ve.uaV.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, ee, j ? (0, r.jsx)(s.MenuItem, {
                            id: "settings",
                            label: E.Z.Messages.SERVER_SETTINGS,
                            icon: pe.Z,
                            action: function() {
                                U.Z.open(n.id, ve.pNK.OVERVIEW)
                            }
                        }) : null, m ? (0, r.jsx)(s.MenuItem, {
                            id: "insights",
                            label: E.Z.Messages.SERVER_INSIGHTS,
                            icon: K.Z,
                            action: function() {
                                return U.Z.open(n.id, ve.pNK.ANALYTICS)
                            }
                        }) : null, v ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.MenuItem, {
                                id: "create-channel",
                                label: E.Z.Messages.CREATE_CHANNEL,
                                icon: he.Z,
                                action: function() {
                                    return (0, s.openModalLazy)(Ie((function() {
                                        var e, i;
                                        return Ze(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(),
                                                        i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, Se(xe({}, e), {
                                                            channelType: ve.d4z.GUILD_TEXT,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            }), (0, r.jsx)(s.MenuItem, {
                                id: "create-category",
                                label: E.Z.Messages.CREATE_CATEGORY,
                                icon: de,
                                action: function() {
                                    return (0, s.openModalLazy)(Ie((function() {
                                        var e, i;
                                        return Ze(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(), i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, Se(xe({}, e), {
                                                            channelType: ve.d4z.GUILD_CATEGORY,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            })]
                        }) : null, Q, ce, ue, $]
                    }), (0, r.jsxs)(s.MenuGroup, {
                        children: [oe, (0, r.jsx)(s.MenuItem, {
                            id: "notifications",
                            label: E.Z.Messages.NOTIFICATION_SETTINGS,
                            icon: q.Z,
                            action: function() {
                                return (0, s.openModalLazy)(Ie((function() {
                                    var e, i;
                                    return Ze(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, Se(xe({}, e), {
                                                        guildId: n.id
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), (0,
                            r.jsx)(s.MenuItem, {
                            id: "privacy",
                            label: E.Z.Messages.PRIVACY_SETTINGS,
                            icon: ye.Z,
                            action: function() {
                                return (0, s.openModalLazy)(Ie((function() {
                                    var e, i;
                                    return Ze(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, Se(xe({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })]
                    }), (0, r.jsxs)(s.MenuGroup, {
                        children: [ne, (0, r.jsx)(s.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: E.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: O,
                            action: function() {
                                return f.Z.toggleCollapseGuild(n.id)
                            }
                        })]
                    }), (0, r.jsxs)(s.MenuGroup, {
                        children: [le, w && n.isCommunity() ? (0, r.jsx)(s.MenuItem, {
                            id: "report-raid",
                            label: E.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: Oe.Z,
                            color: "danger",
                            action: function() {
                                return (0, T.J)(n.id)
                            }
                        }) : null, P ? null : (0, r.jsx)(s.MenuItem, {
                            id: "leave",
                            label: E.Z.Messages.LEAVE_SERVER,
                            icon: ie,
                            color: "danger",
                            action: function() {
                                return _e(n, Ee)
                            }
                        })]
                    })]
                })
            }))
        }
    }
]);