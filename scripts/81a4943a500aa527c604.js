"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76461], {
        976461: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Ie
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                a = t.n(o),
                u = t(441143),
                c = t.n(u),
                l = t(202351),
                s = t(418705),
                d = t(882723),
                f = t(77705),
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
                y = t(896490),
                O = t(496486),
                E = t.n(O),
                j = t(536945),
                m = t(225386),
                v = t(921122),
                M = t(473708);

            function I(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function P(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            I(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            I(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function x(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var _ = function(e, n) {
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
                        }([o, u])
                    }
                }
            };

            function w(e) {
                var n = (0, m.Xb)(e),
                    i = (0, l.e7)([j.Z], (function() {
                        return !E().isEmpty(j.Z.getThreadsForGuild(e.id))
                    }));
                if (!n || !i) return null;
                return (0, r.jsx)(d.MenuItem, {
                    id: "active-threads",
                    label: M.Z.Messages.ACTIVE_THREADS,
                    icon: v.Z,
                    action: function() {
                        (0, d.openModalLazy)(P((function() {
                            var n, i;
                            return _(this, (function(o) {
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
                                                        x(e, n, t[n])
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
            var S = t(177179),
                Z = t(788137);
            var L = t(434651),
                C = t(889231),
                D = t(753082),
                G = t(665458),
                T = t(383950),
                A = t(591406),
                N = t(907582),
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
                X = t(312682),
                q = t(58034),
                J = t(633878);

            function $(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Q(e, n) {
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

            function ee(e, n) {
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

            function ne(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    l = ee(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", Q(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            $(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, J.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: u,
                        d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                    })
                }))
            }

            function te(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function re(e, n) {
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

            function ie(e, n) {
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

            function oe(e) {
                var n = e.width,
                    t = void 0 === n ? 18 : n,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    l = ie(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", re(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            te(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, J.Z)(l)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: u,
                        d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                    })
                }))
            }
            var ae = t(466317),
                ue = t(217674),
                ce = t(472034),
                le = t(553480),
                se = t(894243),
                de = t(202469),
                fe = t(652591),
                pe = t(2590),
                be = t(485911),
                ge = t(178071),
                he = t.n(ge);

            function ye(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function Oe(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            ye(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            ye(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ee(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function je(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ee(e, n, t[n])
                    }))
                }
                return e
            }

            function me(e, n) {
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
            var ve = function(e, n) {
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
                        }([o, u])
                    }
                }
            };

            function Me(e) {
                (0, d.openModal)((function(n) {
                    return (0, r.jsx)(d.ConfirmModal, me(je({
                        header: M.Z.Messages.LEAVE_SERVER_TITLE.format({
                            name: e.toString()
                        }),
                        confirmText: e.hasFeature(pe.oNc.HUB) ? M.Z.Messages.LEAVE_HUB : M.Z.Messages.LEAVE_SERVER,
                        cancelText: M.Z.Messages.CANCEL,
                        onConfirm: Oe((function() {
                            return ve(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, V.Z.leaveGuild(e.id)];
                                    case 1:
                                        n.sent();
                                        (0, y.un)(s.z$.GUILD_LEAVE_FEEDBACK) || (0, d.openModalLazy)(Oe((function() {
                                            var n, i;
                                            return ve(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, t.e(6578).then(t.bind(t, 706578))];
                                                    case 1:
                                                        n = o.sent(), i = n.default;
                                                        return [2, function(n) {
                                                            return (0, r.jsx)(i, me(je({}, n), {
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
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: e.hasFeature(pe.oNc.HUB) ? M.Z.Messages.LEAVE_HUB_BODY.format({
                                name: e.name
                            }) : M.Z.Messages.LEAVE_SERVER_BODY.format({
                                name: e.toString()
                            })
                        })
                    }))
                }))
            }
            0;
            const Ie = i.memo((function(e) {
                var n = e.guild,
                    o = e.onClose,
                    u = e.onSelect,
                    s = (0, l.e7)([W.default], (function() {
                        return W.default.getCurrentUser()
                    }));
                c()(null != s, "GuildHeaderPopout: user cannot be undefined");
                i.useEffect((function() {
                    fe.default.track(pe.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: n.id
                    })
                }));
                var y = (0, l.e7)([F.Z], (function() {
                        return F.Z.isGuildCollapsed(n.id)
                    }), [n.id]),
                    O = (0, l.cj)([z.Z], (function() {
                        var e = z.Z.can(pe.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(pe.oNc.COMMUNITY);
                        return {
                            canAccessSettings: z.Z.canAccessGuildSettings(n),
                            canManageChannels: z.Z.can(pe.Plq.MANAGE_CHANNELS, n),
                            showGuildAnalytics: (0, R.Fv)(n.id) || e
                        }
                    }), [n]),
                    E = O.canAccessSettings,
                    j = O.canManageChannels,
                    m = O.showGuildAnalytics,
                    v = (0, T.N8)(n),
                    I = n.isOwner(s),
                    P = (0, l.e7)([U.Z], (function() {
                        return U.Z.isLurking(n.id)
                    }), [n.id]),
                    x = (0, l.e7)([Y.ZP], (function() {
                        return Y.ZP.isCurrentUserGuest(n.id)
                    })),
                    _ = (0, N.Z)(n.id, !0),
                    J = (0, h.ZP)(n),
                    $ = (0, D.Z)({
                        source: pe.t4x.GUILD_HEADER,
                        guild: n
                    }),
                    Q = (0, L.Z)({
                        guildId: n.id,
                        userId: s.id,
                        analyticsLocation: {
                            page: pe.ZY5.GUILD_CHANNEL,
                            section: pe.jXE.GUILD_DROPDOWN_MENU
                        },
                        icon: ce.Z
                    }),
                    ee = n.hasFeature(pe.oNc.HUB),
                    te = n.id === be._,
                    re = (0, H.Z)(n.id),
                    ie = w(n),
                    ge = function(e) {
                        return (0, r.jsx)(d.MenuItem, {
                            id: "application-directory",
                            label: (0,
                                r.jsx)(r.Fragment, {
                                children: M.Z.Messages.APP_DIRECTORY
                            }),
                            icon: Z.Z,
                            action: function() {
                                (0, S.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: "Guild Header Popout"
                                })
                            }
                        })
                    }(n),
                    ye = (0, k.dA)("GuildHeaderPopout"),
                    Ie = (0, C.Z)(n, !0),
                    Pe = g.Z.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerDeadchat,
                    xe = b.useExperiment({
                        guildId: n.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }).triggerGamingStats;
                return P || x ? (0, r.jsx)(d.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": M.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, r.jsx)(d.MenuItem, {
                        id: "leave-guild",
                        label: M.Z.Messages.LEAVE_SERVER,
                        icon: ne,
                        action: function() {
                            V.Z.leaveGuild(n.id);
                            x || (0, B.uL)(pe.Z5c.GUILD_DISCOVERY)
                        }
                    })
                }) : te ? (0, r.jsxs)(d.Menu, {
                    onSelect: u,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": M.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(d.MenuGroup, {
                        children: (0, r.jsx)(d.MenuItem, {
                            id: "create-category",
                            label: M.Z.Messages.CREATE_CATEGORY,
                            icon: oe,
                            action: function() {
                                return (0, d.openModalLazy)(Oe((function() {
                                    var e, n;
                                    return ve(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(84680)]).then(t.bind(t, 631199))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, je({}, e))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })
                    }), (0, r.jsx)(d.MenuGroup, {
                        children: (0, r.jsx)(d.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: M.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: y,
                            action: function() {
                                return f.Z.toggleCollapseGuild(n.id)
                            }
                        })
                    })]
                }) : ee ? (0, r.jsxs)(d.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": M.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsxs)(d.MenuGroup, {
                        children: [E ? (0, r.jsx)(d.MenuItem, {
                            id: "settings",
                            label: M.Z.Messages.SERVER_SETTINGS,
                            icon: ae.Z,
                            action: function() {
                                V.Z.open(n.id, pe.pNK.OVERVIEW)
                            }
                        }) : null, $, (0, r.jsx)(d.MenuItem, {
                            id: "privacy",
                            label: M.Z.Messages.PRIVACY_SETTINGS,
                            icon: de.Z,
                            action: function() {
                                return (0, d.openModalLazy)(Oe((function() {
                                    var e, i;
                                    return ve(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, me(je({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), Q]
                    }), I ? null : (0, r.jsx)(d.MenuGroup, {
                        children: (0, r.jsx)(d.MenuItem, {
                            id: "leave",
                            label: M.Z.Messages.LEAVE_HUB,
                            icon: ne,
                            color: "danger",
                            action: function() {
                                return Me(n)
                            }
                        })
                    })]
                }) : (0, r.jsxs)(d.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: o,
                    "aria-label": M.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(d.MenuGroup, {
                        children: (0, r.jsx)(d.MenuItem, {
                            id: "premium-subscribe",
                            label: M.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: ue.Z,
                            action: function() {
                                (0, A.f)({
                                    guildId: n.id,
                                    location: {
                                        section: pe.jXE.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: a()(Ee({}, he().boostingMenuItemHighlight, ye))
                        })
                    }), (0, r.jsxs)(d.MenuGroup, {
                        children: [I && s.isStaff() && Pe ? (0, r.jsx)(d.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: q.Z,
                            action: function() {
                                (0, p.j8)(n.id, pe.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, I && s.isStaff() && xe ? (0, r.jsx)(d.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: q.Z,
                            action: function() {
                                (0, p.j8)(n.id, pe.uaV.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, $, E ? (0, r.jsx)(d.MenuItem, {
                            id: "settings",
                            label: M.Z.Messages.SERVER_SETTINGS,
                            icon: ae.Z,
                            action: function() {
                                V.Z.open(n.id, pe.pNK.OVERVIEW)
                            }
                        }) : null, m ? (0, r.jsx)(d.MenuItem, {
                            id: "insights",
                            label: M.Z.Messages.SERVER_INSIGHTS,
                            icon: K.Z,
                            action: function() {
                                return V.Z.open(n.id, pe.pNK.ANALYTICS)
                            }
                        }) : null, j ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(d.MenuItem, {
                                id: "create-channel",
                                label: M.Z.Messages.CREATE_CHANNEL,
                                icon: le.Z,
                                action: function() {
                                    return (0, d.openModalLazy)(Oe((function() {
                                        var e, i;
                                        return ve(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(), i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, me(je({}, e), {
                                                            channelType: pe.d4z.GUILD_TEXT,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            }), (0, r.jsx)(d.MenuItem, {
                                id: "create-category",
                                label: M.Z.Messages.CREATE_CATEGORY,
                                icon: oe,
                                action: function() {
                                    return (0, d.openModalLazy)(Oe((function() {
                                        var e, i;
                                        return ve(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                                case 1:
                                                    e = o.sent(), i = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(i, me(je({}, e), {
                                                            channelType: pe.d4z.GUILD_CATEGORY,
                                                            guildId: n.id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                            })]
                        }) : null, _, ie, ge, J]
                    }), (0, r.jsxs)(d.MenuGroup, {
                        children: [re, (0, r.jsx)(d.MenuItem, {
                            id: "notifications",
                            label: M.Z.Messages.NOTIFICATION_SETTINGS,
                            icon: X.Z,
                            action: function() {
                                return (0, d.openModalLazy)(Oe((function() {
                                    var e, i;
                                    return ve(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, me(je({}, e), {
                                                        guildId: n.id
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), (0, r.jsx)(d.MenuItem, {
                            id: "privacy",
                            label: M.Z.Messages.PRIVACY_SETTINGS,
                            icon: de.Z,
                            action: function() {
                                return (0, d.openModalLazy)(Oe((function() {
                                    var e, i;
                                    return ve(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, me(je({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        })]
                    }), (0, r.jsxs)(d.MenuGroup, {
                        children: [Q, (0, r.jsx)(d.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: M.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: y,
                            action: function() {
                                return f.Z.toggleCollapseGuild(n.id)
                            }
                        })]
                    }), (0, r.jsxs)(d.MenuGroup, {
                        children: [Ie, v && n.isCommunity() ? (0, r.jsx)(d.MenuItem, {
                            id: "report-raid",
                            label: M.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: se.Z,
                            color: "danger",
                            action: function() {
                                return (0, G.J)(n.id)
                            }
                        }) : null, I ? null : (0, r.jsx)(d.MenuItem, {
                            id: "leave",
                            label: M.Z.Messages.LEAVE_SERVER,
                            icon: ne,
                            color: "danger",
                            action: function() {
                                return Me(n)
                            }
                        })]
                    })]
                })
            }))
        }
    }
]);