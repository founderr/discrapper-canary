"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14844], {
        114844: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Ze
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                a = t.n(o),
                c = t(441143),
                u = t.n(c),
                l = t(202351),
                s = t(418705),
                f = t(882723),
                d = t(77705),
                p = t(571438),
                b = (0, t(260561).B)({
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
                g = t(459553),
                h = t(338935),
                O = t(896490),
                y = t(496486),
                j = t.n(y),
                m = t(536945),
                E = t(225386),
                v = t(921122),
                w = t(473708);

            function M(e, n, t, r, i, o, a) {
                try {
                    var c = e[o](a),
                        u = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function I(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            M(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            M(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var x = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
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
                        }([o, c])
                    }
                }
            };

            function S(e) {
                var n = (0, E.Xb)(e),
                    i = (0, l.e7)([m.Z], (function() {
                        return !j().isEmpty(m.Z.getThreadsForGuild(e.id))
                    }));
                if (!n || !i) return null;
                return (0, r.jsx)(f.MenuItem, {
                    id: "active-threads",
                    label: w.Z.Messages.ACTIVE_THREADS,
                    icon: v.Z,
                    action: function() {
                        (0, f.openModalLazy)(I((function() {
                            var n, i;
                            return x(this, (function(o) {
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
                                                        P(e, n, t[n])
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
            var _ = t(177179),
                Z = t(296289);
            var D = t(434651),
                L = t(889231),
                C = t(753082),
                A = t(665458),
                G = t(383950),
                T = t(591406),
                N = t(324239),
                R = t(36295),
                V = t(703790),
                U = t(944522),
                H = t(809210),
                k = t(305082),
                B = t(784426),
                Y = t(21372),
                z = t(682776),
                F = t(9430),
                W = t(473903),
                K = t(650802),
                X = t(414392),
                q = t(341287),
                J = t(450520),
                $ = t(69991),
                Q = t(633878);

            function ee(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ne(e, n) {
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

            function te(e, n) {
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
            const re = (0, J.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    l = te(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", ne(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            ee(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, Q.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: c,
                        d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                    })
                }))
            }), $.P);
            var ie = t(795308);

            function oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ae(e, n) {
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

            function ce(e, n) {
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

            function ue(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function le(e, n) {
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

            function se(e, n) {
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
            const fe = (0, J.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    l = se(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", le(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            ue(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, Q.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: c,
                        d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.color,
                    c = void 0 === a ? ie.Z.colors.INTERACTIVE_NORMAL : a,
                    u = e.colorClass,
                    l = void 0 === u ? "" : u,
                    s = ce(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", ae(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            oe(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, Q.Z)(s)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.406-2.11A2 2 0 0 0 8.93 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: l
                    })
                }))
            }));
            var de = t(466317),
                pe = t(217674),
                be = t(472034),
                ge = t(123017),
                he = t(894243),
                Oe = t(202469),
                ye = t(652591),
                je = t(2590),
                me = t(485911),
                Ee = t(379663),
                ve = t.n(Ee);

            function we(e, n, t, r, i, o, a) {
                try {
                    var c = e[o](a),
                        u = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function Me(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            we(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            we(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ie(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Pe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ie(e, n, t[n])
                    }))
                }
                return e
            }

            function xe(e, n) {
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
            var Se = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
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
                        }([o, c])
                    }
                }
            };

            function _e(e) {
                (0, f.openModal)((function(n) {
                    return (0, r.jsx)(f.ConfirmModal, xe(Pe({
                        header: w.Z.Messages.LEAVE_SERVER_TITLE.format({
                            name: e.toString()
                        }),
                        confirmText: e.hasFeature(je.oNc.HUB) ? w.Z.Messages.LEAVE_HUB : w.Z.Messages.LEAVE_SERVER,
                        cancelText: w.Z.Messages.CANCEL,
                        onConfirm: Me((function() {
                            return Se(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, V.Z.leaveGuild(e.id)];
                                    case 1:
                                        n.sent();
                                        (0, O.un)(s.z$.GUILD_LEAVE_FEEDBACK) || (0, f.openModalLazy)(Me((function() {
                                            var n, i;
                                            return Se(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, t.e(6578).then(t.bind(t, 706578))];
                                                    case 1:
                                                        n = o.sent(), i = n.default;
                                                        return [2, function(n) {
                                                            return (0, r.jsx)(i, xe(Pe({}, n), {
                                                                guildId: e.id,
                                                                guildName: e.name
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })));
                                        return [2]
                                }
                            }))
                        }))
                    }, n), {
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: e.hasFeature(je.oNc.HUB) ? w.Z.Messages.LEAVE_HUB_BODY.format({
                                name: e.name
                            }) : w.Z.Messages.LEAVE_SERVER_BODY.format({
                                name: e.toString()
                            })
                        })
                    }))
                }))
            }
            0;
            const Ze = i.memo((function(e) {
                var n = e.guild,
                    o = e.onClose,
                    c = e.onSelect,
                    s = (0, l.e7)([W.default], (function() {
                        return W.default.getCurrentUser()
                    }));
                u()(null != s, "GuildHeaderPopout: user cannot be undefined");
                i.useEffect((function() {
                    ye.default.track(je.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: n.id
                    })
                }));
                var O = (0, l.e7)([F.Z], (function() {
                        return F.Z.isGuildCollapsed(n.id)
                    }), [n.id]),
                    y = (0, l.cj)([z.Z], (function() {
                        var e = z.Z.can(je.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(je.oNc.COMMUNITY);
                        return {
                            canAccessSettings: z.Z.canAccessGuildSettings(n),
                            canManageChannels: z.Z.can(je.Plq.MANAGE_CHANNELS, n),
                            showGuildAnalytics: (0, R.Fv)(n.id) || e
                        }
                    }), [n]),
                    j = y.canAccessSettings,
                    m = y.canManageChannels,
                    E = y.showGuildAnalytics,
                    v = (0, G.N8)(n),
                    M = n.isOwner(s),
                    I = (0, l.e7)([U.Z], (function() {
                        return U.Z.isLurking(n.id)
                    }), [n.id]),
                    P = (0, l.e7)([Y.ZP], (function() {
                        return Y.ZP.isCurrentUserGuest(n.id)
                    })),
                    x = (0, N.Z)(n.id, !0),
                    J = (0, h.ZP)(n),
                    $ = (0, C.Z)({
                        source: je.t4x.GUILD_HEADER,
                        guild: n
                    }),
                    Q = (0, D.Z)({
                        guildId: n.id,
                        userId: s.id,
                        analyticsLocation: {
                            page: je.ZY5.GUILD_CHANNEL,
                            section: je.jXE.GUILD_DROPDOWN_MENU
                        },
                        icon: be.Z
                    }),
                    ee = n.hasFeature(je.oNc.HUB),
                    ne = n.id === me._,
                    te = (0, H.Z)(n.id),
                    ie = S(n),
                    oe = function(e) {
                        return (0, r.jsx)(f.MenuItem, {
                            id: "application-directory",
                            label: (0,
                                r.jsx)(r.Fragment, {
                                children: w.Z.Messages.APP_DIRECTORY
                            }),
                            icon: Z.Z,
                            action: function() {
                                (0, _.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: "Guild Header Popout"
                                })
                            }
                        })
                    }(n),
                    ae = (0, k.dA)("GuildHeaderPopout"),
                    ce = (0, L.Z)(n, !0),
                    ue = g.Z.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerDeadchat,
                    le = b.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerGamingStats;
                return I || P ? (0, r.jsx)(f.Menu, {
                    onSelect: c,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, r.jsx)(f.MenuItem, {
                        id: "leave-guild",
                        label: w.Z.Messages.LEAVE_SERVER,
                        icon: re,
                        action: function() {
                            V.Z.leaveGuild(n.id);
                            P || (0, B.uL)(je.Z5c.GUILD_DISCOVERY)
                        }
                    })
                }) : ne ? (0, r.jsxs)(f.Menu, {
                    onSelect: c,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(f.MenuGroup, {
                        children: (0, r.jsx)(f.MenuItem, {
                            id: "create-category",
                            label: w.Z.Messages.CREATE_CATEGORY,
                            icon: fe,
                            action: function() {
                                return (0, f.openModalLazy)(Me((function() {
                                    var e, n;
                                    return Se(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(84680)]).then(t.bind(t, 631199))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, Pe({}, e))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })
                    }), (0, r.jsx)(f.MenuGroup, {
                        children: (0, r.jsx)(f.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: w.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: O,
                            action: function() {
                                return d.Z.toggleCollapseGuild(n.id)
                            }
                        })
                    })]
                }) : ee ? (0, r.jsxs)(f.Menu, {
                    onSelect: c,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsxs)(f.MenuGroup, {
                        children: [j ? (0, r.jsx)(f.MenuItem, {
                            id: "settings",
                            label: w.Z.Messages.SERVER_SETTINGS,
                            icon: de.Z,
                            action: function() {
                                V.Z.open(n.id, je.pNK.OVERVIEW)
                            }
                        }) : null, $, (0, r.jsx)(f.MenuItem, {
                            id: "privacy",
                            label: w.Z.Messages.PRIVACY_SETTINGS,
                            icon: Oe.Z,
                            action: function() {
                                return (0, f.openModalLazy)(Me((function() {
                                    var e, i;
                                    return Se(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, xe(Pe({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), Q]
                    }), M ? null : (0, r.jsx)(f.MenuGroup, {
                        children: (0, r.jsx)(f.MenuItem, {
                            id: "leave",
                            label: w.Z.Messages.LEAVE_HUB,
                            icon: re,
                            color: "danger",
                            action: function() {
                                return _e(n)
                            }
                        })
                    })]
                }) : (0, r.jsxs)(f.Menu, {
                    onSelect: c,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(f.MenuGroup, {
                        children: (0, r.jsx)(f.MenuItem, {
                            id: "premium-subscribe",
                            label: w.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: pe.Z,
                            action: function() {
                                (0, T.f)({
                                    guildId: n.id,
                                    location: {
                                        section: je.jXE.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: a()(Ie({}, ve().boostingMenuItemHighlight, ae))
                        })
                    }), (0, r.jsxs)(f.MenuGroup, {
                        children: [M && s.isStaff() && ue ? (0, r.jsx)(f.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: q.Z,
                            action: function() {
                                (0, p.j8)(n.id, je.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, M && s.isStaff() && le ? (0, r.jsx)(f.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: q.Z,
                            action: function() {
                                (0, p.j8)(n.id, je.uaV.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, $, j ? (0, r.jsx)(f.MenuItem, {
                            id: "settings",
                            label: w.Z.Messages.SERVER_SETTINGS,
                            icon: de.Z,
                            action: function() {
                                V.Z.open(n.id, je.pNK.OVERVIEW)
                            }
                        }) : null, E ? (0, r.jsx)(f.MenuItem, {
                            id: "insights",
                            label: w.Z.Messages.SERVER_INSIGHTS,
                            icon: K.Z,
                            action: function() {
                                return V.Z.open(n.id, je.pNK.ANALYTICS)
                            }
                        }) : null, m ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.MenuItem, {
                                id: "create-channel",
                                label: w.Z.Messages.CREATE_CHANNEL,
                                icon: ge.Z,
                                action: function() {
                                    return (0, f.openModalLazy)(Me((function() {
                                        var e, i;
                                        return Se(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(), i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, xe(Pe({}, e), {
                                                            channelType: je.d4z.GUILD_TEXT,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            }), (0, r.jsx)(f.MenuItem, {
                                id: "create-category",
                                label: w.Z.Messages.CREATE_CATEGORY,
                                icon: fe,
                                action: function() {
                                    return (0, f.openModalLazy)(Me((function() {
                                        var e, i;
                                        return Se(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(), i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, xe(Pe({}, e), {
                                                            channelType: je.d4z.GUILD_CATEGORY,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            })]
                        }) : null, x, ie, oe, J]
                    }), (0, r.jsxs)(f.MenuGroup, {
                        children: [te, (0, r.jsx)(f.MenuItem, {
                            id: "notifications",
                            label: w.Z.Messages.NOTIFICATION_SETTINGS,
                            icon: X.Z,
                            action: function() {
                                return (0, f.openModalLazy)(Me((function() {
                                    var e, i;
                                    return Se(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, xe(Pe({}, e), {
                                                        guildId: n.id
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), (0, r.jsx)(f.MenuItem, {
                            id: "privacy",
                            label: w.Z.Messages.PRIVACY_SETTINGS,
                            icon: Oe.Z,
                            action: function() {
                                return (0, f.openModalLazy)(Me((function() {
                                    var e, i;
                                    return Se(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, xe(Pe({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })]
                    }), (0, r.jsxs)(f.MenuGroup, {
                        children: [Q, (0, r.jsx)(f.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: w.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: O,
                            action: function() {
                                return d.Z.toggleCollapseGuild(n.id)
                            }
                        })]
                    }), (0, r.jsxs)(f.MenuGroup, {
                        children: [ce, v && n.isCommunity() ? (0, r.jsx)(f.MenuItem, {
                            id: "report-raid",
                            label: w.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: he.Z,
                            color: "danger",
                            action: function() {
                                return (0, A.J)(n.id)
                            }
                        }) : null, M ? null : (0, r.jsx)(f.MenuItem, {
                            id: "leave",
                            label: w.Z.Messages.LEAVE_SERVER,
                            icon: re,
                            color: "danger",
                            action: function() {
                                return _e(n)
                            }
                        })]
                    })]
                })
            }))
        }
    }
]);