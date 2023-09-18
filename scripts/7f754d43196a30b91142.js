"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78294], {
        434651: (e, n, r) => {
            r.d(n, {
                Z: () => _
            });
            var t = r(785893),
                u = r(667294),
                i = r(202351),
                l = r(882723),
                o = r(357088),
                a = r(401080),
                c = r(736626),
                s = r(664625),
                d = r(21372),
                f = r(567403),
                b = r(682776),
                p = r(473903),
                Z = r(2590),
                g = r(473708),
                E = r(882090),
                h = r.n(E);

            function O(e, n, r, t, u, i, l) {
                try {
                    var o = e[i](l),
                        a = o.value
                } catch (e) {
                    r(e);
                    return
                }
                o.done ? n(a) : Promise.resolve(a).then(t, u)
            }

            function M(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, u) {
                        var i = e.apply(n, r);

                        function l(e) {
                            O(i, t, u, l, o, "next", e)
                        }

                        function o(e) {
                            O(i, t, u, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function v(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function m(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            var y = function(e, n) {
                var r, t, u, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, t && (u = 2 & i[0] ? t.return : i[0] ? t.throw || ((u = t.return) && u.call(t), 0) : t.next) && !(u = u.call(t, i[1])).done) return u;
                                (t = 0, u) && (i = [2 & i[0], u.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        u = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = l.trys, u = u.length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < u[1]) {
                                            l.label = u[1];
                                            u = i;
                                            break
                                        }
                                        if (u && l.label < u[2]) {
                                            l.label = u[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        u[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = u = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            };

            function _(e) {
                var n = e.guildId,
                    E = e.userId,
                    O = e.analyticsLocation,
                    _ = e.analyticsLocations,
                    P = e.context,
                    j = e.icon,
                    S = f.Z.getGuild(n),
                    R = s.default.getId(),
                    I = (0, i.e7)([p.default], (function() {
                        return p.default.getUser(E)
                    })),
                    x = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(n, E)
                    }), [n, E]);
                (0, i.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(n)
                }), [n]);
                var N = u.useMemo((function() {
                    return v({}, n, [E])
                }), [n, E]);
                (0, o.$)(N);
                var C = P === Z.IlC.POPOUT,
                    w = (0, a.Z)({
                        guild: S,
                        analyticsLocation: O
                    });
                if (null == S || C) return null;
                var A = R === E && (b.Z.can(Z.Plq.CHANGE_NICKNAME, S) || b.Z.can(Z.Plq.MANAGE_NICKNAMES, S)),
                    U = R === E,
                    T = b.Z.canManageUser(Z.Plq.MANAGE_NICKNAMES, E, S);
                if (!(A || T || U)) return null;
                if (null == I || x) return null;
                var G = S.hasFeature(Z.oNc.HUB) ? g.Z.Messages.HUB_EDIT_PROFILE : g.Z.Messages.CHANGE_IDENTITY,
                    k = U ? G : g.Z.Messages.CHANGE_NICKNAME;
                return (0, t.jsx)(l.MenuItem, {
                    id: "change-nickname",
                    label: (0, t.jsx)("div", {
                        className: h().labelWrapper,
                        children: (0, t.jsx)("span", {
                            className: h().label,
                            children: k
                        })
                    }),
                    icon: j,
                    action: function() {
                        if (U) {
                            (0, c.Z)(I.id, I.getAvatarURL(n, 80), {
                                guildId: n
                            });
                            w()
                        } else(0, l.openModalLazy)(M((function() {
                            var e, u;
                            return y(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(33166)]).then(r.bind(r, 633166))];
                                    case 1:
                                        e = i.sent(), u = e.default;
                                        return [2, function(e) {
                                            return (0, t.jsx)(u, m(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var r = null != arguments[n] ? arguments[n] : {},
                                                        t = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    t.forEach((function(n) {
                                                        v(e, n, r[n])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: n,
                                                user: I,
                                                analyticsSource: O,
                                                analyticsLocations: _
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        575351: (e, n, r) => {
            r.d(n, {
                Z: () => E
            });
            var t = r(785893),
                u = (r(667294), r(202351)),
                i = r(882723),
                l = r(567403),
                o = r(473903),
                a = r(407561),
                c = r(771575),
                s = r(162723),
                d = r(933022),
                f = r(664625),
                b = r(715107),
                p = r(525261);
            var Z = r(499219),
                g = r(473708);

            function E(e) {
                var n, r = (0, Z.Z)(),
                    E = null == r ? void 0 : r.id,
                    h = null == r ? void 0 : r.guild_id,
                    O = (0, u.e7)([l.Z], (function() {
                        return l.Z.getGuild(h)
                    }), [h]),
                    M = (0, u.e7)([a.Z], (function() {
                        return null != E ? a.Z.getVoiceStateForChannel(E, e.id) : null
                    }), [E, e.id]),
                    v = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    m = function() {
                        var e = (0, u.e7)([b.Z], (function() {
                                return b.Z.getVoiceChannelId()
                            })),
                            n = (0, u.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, p.ZP)(n, e) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    y = (0, u.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, E)
                    }), [E, e.id]),
                    _ = (0, s.B)(E);
                if (null == r || null == O || null == M) return null;
                if (y.speaker) return null;
                var P = function() {
                    v ? (0, c.RK)(r, !1) : (0, c._0)(r, e.id)
                };
                return _ ? (0, t.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: v ? g.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : g.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: P
                }) : m && v ? (0, t.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: g.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: P
                }) : null
            }
        },
        478294: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => q
            });
            var t = r(785893),
                u = r(667294),
                i = r(882723),
                l = r(971402),
                o = r(343639),
                a = r(567678),
                c = r(73904),
                s = r(82055),
                d = r(153686),
                f = r(112897),
                b = r(434651),
                p = r(575351),
                Z = r(662851),
                g = r(343315),
                E = r(171384),
                h = r(699050),
                O = r(836448),
                M = r(441738),
                v = r(578142),
                m = r(827991),
                y = r(93439),
                _ = r(100856),
                P = r(202351),
                j = r(357088),
                S = r(874710),
                R = r(671293),
                I = r(225386),
                x = r(61209),
                N = r(567403),
                C = r(682776),
                w = r(473903),
                A = r(2590),
                U = r(473708);

            function T(e, n, r, t, u, i, l) {
                try {
                    var o = e[i](l),
                        a = o.value
                } catch (e) {
                    r(e);
                    return
                }
                o.done ? n(a) : Promise.resolve(a).then(t, u)
            }

            function G(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, u) {
                        var i = e.apply(n, r);

                        function l(e) {
                            T(i, t, u, l, o, "next", e)
                        }

                        function o(e) {
                            T(i, t, u, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function k(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function L(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        k(e, n, r[n])
                    }))
                }
                return e
            }

            function D(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            var V = function(e, n) {
                var r, t, u, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, t && (u = 2 & i[0] ? t.return : i[0] ? t.throw || ((u = t.return) && u.call(t), 0) : t.next) && !(u = u.call(t, i[1])).done) return u;
                                (t = 0, u) && (i = [2 & i[0], u.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        u = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = l.trys, u = u.length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < u[1]) {
                                            l.label = u[1];
                                            u = i;
                                            break
                                        }
                                        if (u && l.label < u[2]) {
                                            l.label = u[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        u[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = u = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            };
            var H = r(536130),
                K = r(973424),
                F = r(394212);
            const q = (0, a.Z)((0, o.Z)((function(e) {
                var n = e.user,
                    o = e.guildId,
                    a = e.channel,
                    d = e.context,
                    T = e.onSelect,
                    q = e.onHeightUpdate,
                    B = (0, H.Z)(n.id, o),
                    Y = (0, m.Z)(n, o, d),
                    X = (0, y.Z)(n.id, d),
                    z = (0, F.Z)(n.id),
                    Q = (0, M.Z)(n, d),
                    W = (0, E.Z)({
                        user: n,
                        guildId: o,
                        context: d
                    }),
                    $ = (0, g.Z)(n),
                    J = (0, b.Z)({
                        guildId: o,
                        userId: n.id,
                        analyticsLocation: {
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.CHAT_USERNAME,
                            object: A.qAy.CONTEXT_MENU_ITEM
                        },
                        context: d
                    }),
                    ee = (0, v.Z)(n, o),
                    ne = (0, s.Z)(null, n),
                    re = (0, Z.Z)(n),
                    te = (0, O.Z)(n),
                    ue = function(e, n, l) {
                        var o = u.useMemo((function() {
                            return k({}, n, [e.id])
                        }), [n, e.id]);
                        (0, j.$)(o);
                        (0, P.e7)([C.Z], (function() {
                            return C.Z.getGuildVersion(n)
                        }), [n]);
                        var a = (0, P.e7)([x.Z], (function() {
                                return x.Z.getChannel(l)
                            })),
                            c = (0, P.e7)([N.Z], (function() {
                                return N.Z.getGuild(n)
                            }), [n]),
                            s = (0, P.e7)([w.default], (function() {
                                return w.default.getCurrentUser()
                            })),
                            d = (0, S.Z)(a, "Context Menu"),
                            f = (0, I.Xb)(a);
                        if ((null == s ? void 0 : s.id) === e.id) return [d];
                        if (null == c || null == a || null == s) return [];
                        var b = f || a.ownerId === s.id && a.type === A.d4z.PRIVATE_THREAD;
                        return [b ? (0, t.jsx)(i.MenuItem, {
                            id: "remove",
                            label: a.isForumPost() ? U.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                                user: e.username
                            }) : U.Z.Messages.REMOVE_USER_FROM_THREAD.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return R.Z.removeMember(a, e.id, "Context Menu")
                            }
                        }) : null, C.Z.canManageUser(A.Plq.KICK_MEMBERS, e, c) ? (0, t.jsx)(i.MenuItem, {
                            id: "kick",
                            label: b ? U.Z.Messages.KICK_USER_FROM_SERVER.format({
                                user: e.username
                            }) : U.Z.Messages.KICK_USER.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return (0, i.openModalLazy)(G((function() {
                                    var n, u;
                                    return V(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([r.e(40532), r.e(11266)]).then(r.bind(r, 811266))];
                                            case 1:
                                                n = i.sent(), u = n.default;
                                                return [2, function(n) {
                                                    return (0, t.jsx)(u, D(L({}, n), {
                                                        guildId: c.id,
                                                        user: e
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }) : null, C.Z.canManageUser(A.Plq.BAN_MEMBERS, e, c) ? (0, t.jsx)(i.MenuItem, {
                            id: "ban",
                            label: b ? U.Z.Messages.BAN_USER_FROM_SERVER.format({
                                user: e.username
                            }) : U.Z.Messages.BAN_USER.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return (0, i.openModalLazy)(G((function() {
                                    var n, u;
                                    return V(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([r.e(40532), r.e(80372)]).then(r.bind(r, 333970))];
                                            case 1:
                                                n = i.sent(), u = n.default;
                                                return [2, function(n) {
                                                    return (0, t.jsx)(u, D(L({}, n), {
                                                        guildId: c.id,
                                                        user: e
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }) : null]
                    }(n, o, a.id),
                    ie = (0, K.Z)(n.id, o),
                    le = (0, _.Z)(n, o),
                    oe = (0, f.Z)({
                        id: n.id,
                        label: U.Z.Messages.COPY_ID_USER
                    }),
                    ae = (0, p.Z)(n),
                    ce = (0, h.Z)({
                        commandType: c.yU.USER,
                        commandTargetId: n.id,
                        channel: a,
                        guildId: o,
                        location: "ThreadUserContextMenu",
                        onShow: q
                    }),
                    se = n.isNonUserBot();
                return (0, t.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: l.Zy,
                    "aria-label": U.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: T,
                    children: [!se && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(i.MenuGroup, {
                            children: ae
                        }), (0, t.jsxs)(i.MenuGroup, {
                            children: [B, Y, X, Q, W, $, z]
                        }), (0, t.jsx)(i.MenuGroup, {
                            children: ne
                        }), (0,
                            t.jsxs)(i.MenuGroup, {
                            children: [J, ce, ee, re, te]
                        }), (0, t.jsx)(i.MenuGroup, {
                            children: ue
                        }), (0, t.jsxs)(i.MenuGroup, {
                            children: [ie, le]
                        })]
                    }), (0, t.jsx)(i.MenuGroup, {
                        children: oe
                    })]
                })
            }), {
                object: A.qAy.CONTEXT_MENU
            }), [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU])
        },
        93439: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                u = (r(667294), r(882723)),
                i = r(761953),
                l = r(735885),
                o = r(664625),
                a = r(2590),
                c = r(473708);

            function s(e, n) {
                var r = o.default.getId(),
                    s = n === a.IlC.POPOUT;
                return r === e || s ? null : (0, t.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: c.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        i.Z.openPrivateChannel(e);
                        (0, l.xf)()
                    }
                })
            }
        },
        100856: (e, n, r) => {
            r.d(n, {
                Z: () => m
            });
            var t = r(785893),
                u = (r(667294), r(202351)),
                i = r(882723),
                l = r(327499),
                o = r(116404),
                a = r(773011),
                c = r(664625),
                s = r(61209),
                d = r(5544),
                f = r(21372),
                b = r(567403),
                p = r(682776),
                Z = r(840922),
                g = r(473903),
                E = r(407561),
                h = r(176758),
                O = r(563135),
                M = r(2590),
                v = r(473708);

            function m(e, n) {
                var r = (0, u.e7)([d.ZP], (function() {
                        return d.ZP.getChannels(n)[d.Zb]
                    }), [n]),
                    m = (0, u.e7)([E.Z, s.Z], (function() {
                        var r = E.Z.getUserVoiceChannelId(n, e.id);
                        return s.Z.getChannel(r)
                    }), [n, e.id]);
                if ((0, u.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == m) return null;
                var y = e.id === c.default.getId();
                if (!y && !p.Z.can(M.Plq.MOVE_MEMBERS, m)) return null;
                var _ = r.filter((function(n) {
                    var r = n.channel;
                    return r.id !== m.id && (y ? p.Z.can(M.Plq.CONNECT, r) && !(0, h.rY)(r, E.Z, b.Z) : p.Z.can(M.Plq.MOVE_MEMBERS, r) && (p.Z.can(M.Plq.CONNECT, r) || O.ZP.can({
                        permission: M.Plq.CONNECT,
                        user: e,
                        context: r
                    })) && !(0, h.rY)(r, E.Z, b.Z))
                }));
                return 0 === _.length ? null : (0, t.jsx)(i.MenuItem, {
                    id: "voice-move",
                    label: v.Z.Messages.MOVE_TO,
                    children: _.map((function(r) {
                        var u = r.channel;
                        return (0, t.jsx)(i.MenuItem, {
                            id: u.id,
                            action: function() {
                                return function(r) {
                                    e.id === c.default.getId() ? o.default.selectVoiceChannel(r.id) : l.Z.setChannel(n, e.id, r.id)
                                }(u)
                            },
                            label: (0, a.F6)(u, g.default, Z.Z)
                        }, u.id)
                    }))
                })
            }
        },
        973424: (e, n, r) => {
            r.d(n, {
                Z: () => O
            });
            var t = r(785893),
                u = (r(667294),
                    r(547308)),
                i = r(202351),
                l = r(882723),
                o = r(316878),
                a = r(822003),
                c = r(703790),
                s = r(21372),
                d = r(567403),
                f = r(682776),
                b = r(72580),
                p = r(2590),
                Z = r(473708),
                g = r(642124),
                E = r.n(g);

            function h(e, n) {
                var r, i;
                return (0, t.jsxs)("div", {
                    className: E().roleRow,
                    children: ["dot" === n ? (0, t.jsx)(l.RoleDot, {
                        className: E().roleDot,
                        color: null !== (r = e.colorString) && void 0 !== r ? r : (0, u.Rf)(p.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, t.jsx)(l.RoleCircle, {
                        className: E().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, u.Rf)(p.p6O)
                    }), (0, t.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function O(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    g = function(r) {
                        if (m.includes(r.id)) {
                            c.Z.updateMemberRoles(n, e, m.filter((function(e) {
                                return e !== r.id
                            })), [], [r.id]);
                            M(a.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(n, e, m.concat([r.id]), [r.id], []);
                            M(a.jQ.ADD_ROLE)
                        }
                    },
                    E = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(n)
                    }), [n]),
                    O = (0, i.e7)([o.Z], (function() {
                        return o.Z.roleStyle
                    })),
                    M = (0,
                        a.sE)(n, {
                        location: u,
                        targetUserId: e
                    }),
                    v = (0, i.cj)([s.ZP, f.Z], (function() {
                        var r = s.ZP.getMember(n, e);
                        return {
                            userRoles: null != r ? r.roles : [],
                            isGuildMember: null != r,
                            canManageRoles: null != E && f.Z.can(p.Plq.MANAGE_ROLES, E)
                        }
                    }), [e, n, E]),
                    m = v.userRoles,
                    y = v.isGuildMember,
                    _ = v.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == m || null == E) return null;
                if (!y) return null;
                var P = f.Z.getHighestRole(E),
                    j = Object.values(E.roles).filter((function(e) {
                        return e.id !== E.id
                    })),
                    S = _ ? j.map((function(e) {
                        var n = e.managed || !f.Z.isRoleHigher(E, P, e),
                            r = -1 !== m.indexOf(e.id);
                        return n && !r ? null : (0, t.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return h(e, O)
                            },
                            disabled: n,
                            action: function() {
                                return g(e)
                            },
                            checked: r
                        }, e.id)
                    })) : j.filter((function(e) {
                        return -1 !== m.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === E.id ? null : (0, t.jsx)(l.MenuItem, {
                            id: e.id,
                            label: function() {
                                return h(e, O)
                            }
                        }, e.id)
                    }));
                return 0 === S.filter(b.lm).length ? null : r ? S : (0, t.jsx)(l.MenuItem, {
                    id: "roles",
                    label: Z.Z.Messages.ROLES_LIST.format({
                        numRoles: S.length
                    }),
                    children: S
                })
            }
        }
    }
]);