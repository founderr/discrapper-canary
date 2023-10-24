"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78294], {
        575351: (e, n, r) => {
            r.d(n, {
                Z: () => Z
            });
            var t = r(785893),
                u = (r(667294), r(202351)),
                o = r(70418),
                i = r(567403),
                l = r(473903),
                a = r(407561),
                s = r(771575),
                c = r(162723),
                d = r(933022),
                f = r(664625),
                E = r(715107),
                p = r(525261);
            var _ = r(499219),
                b = r(473708);

            function Z(e) {
                var n, r = (0, _.Z)(),
                    Z = null == r ? void 0 : r.id,
                    M = null == r ? void 0 : r.guild_id,
                    g = (0, u.e7)([i.Z], (function() {
                        return i.Z.getGuild(M)
                    }), [M]),
                    h = (0, u.e7)([a.Z], (function() {
                        return null != Z ? a.Z.getVoiceStateForChannel(Z, e.id) : null
                    }), [Z, e.id]),
                    S = (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    O = function() {
                        var e = (0, u.e7)([E.Z], (function() {
                                return E.Z.getVoiceChannelId()
                            })),
                            n = (0, u.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, p.ZP)(n, e) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    m = (0, u.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, Z)
                    }), [Z, e.id]),
                    y = (0, c.B)(Z);
                if (null == r || null == g || null == h) return null;
                if (m.speaker) return null;
                var v = function() {
                    S ? (0, s.RK)(r, !1) : (0, s._0)(r, e.id)
                };
                return y ? (0, t.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: S ? b.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : b.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: v
                }) : O && S ? (0, t.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: b.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: v
                }) : null
            }
        },
        478294: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => B
            });
            var t = r(785893),
                u = r(667294),
                o = r(70418),
                i = r(971402),
                l = r(343639),
                a = r(567678),
                s = r(73904),
                c = r(82055),
                d = r(153686),
                f = r(112897),
                E = r(434651),
                p = r(575351),
                _ = r(662851),
                b = r(343315),
                Z = r(171384),
                M = r(699050),
                g = r(836448),
                h = r(441738),
                S = r(578142),
                O = r(827991),
                m = r(93439),
                y = r(100856),
                v = r(202351),
                R = r(357088),
                j = r(874710),
                U = r(457581),
                P = r(225386),
                T = r(61209),
                I = r(567403),
                x = r(682776),
                A = r(473903),
                w = r(2590),
                C = r(473708);

            function N(e, n, r, t, u, o, i) {
                try {
                    var l = e[o](i),
                        a = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(t, u)
            }

            function G(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, u) {
                        var o = e.apply(n, r);

                        function i(e) {
                            N(o, t, u, i, l, "next", e)
                        }

                        function l(e) {
                            N(o, t, u, i, l, "throw", e)
                        }
                        i(void 0)
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

            function D(e) {
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

            function K(e, n) {
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
            var L = function(e, n) {
                var r, t, u, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, t && (u = 2 & o[0] ? t.return : o[0] ? t.throw || ((u = t.return) && u.call(t), 0) : t.next) && !(u = u.call(t, o[1])).done) return u;
                                (t = 0, u) && (o = [2 & o[0], u.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        u = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        t = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = i.trys, u = u.length > 0 && u[u.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < u[1]) {
                                            i.label = u[1];
                                            u = o;
                                            break
                                        }
                                        if (u && i.label < u[2]) {
                                            i.label = u[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        u[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                t = 0
                            } finally {
                                r = u = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            var F = r(536130),
                H = r(973424),
                V = r(394212);
            const B = (0, a.Z)((0, l.Z)((function(e) {
                var n = e.user,
                    l = e.guildId,
                    a = e.channel,
                    d = e.context,
                    N = e.onSelect,
                    B = e.onHeightUpdate,
                    X = (0, F.Z)(n.id, l),
                    q = (0, O.Z)(n, l, d),
                    Y = (0, m.Z)(n.id, d),
                    z = (0, V.Z)(n.id),
                    Q = (0, h.Z)(n, d),
                    W = (0, Z.Z)({
                        user: n,
                        guildId: l,
                        context: d
                    }),
                    $ = (0, b.Z)(n),
                    J = (0, E.Z)({
                        guildId: l,
                        userId: n.id,
                        analyticsLocation: {
                            page: w.ZY5.GUILD_CHANNEL,
                            section: w.jXE.CHAT_USERNAME,
                            object: w.qAy.CONTEXT_MENU_ITEM
                        },
                        context: d
                    }),
                    ee = (0, S.Z)(n, l),
                    ne = (0, c.Z)(null, n),
                    re = (0, _.Z)(n),
                    te = (0, g.Z)(n),
                    ue = function(e, n, i) {
                        var l = u.useMemo((function() {
                            return k({}, n, [e.id])
                        }), [n, e.id]);
                        (0, R.$)(l);
                        (0, v.e7)([x.Z], (function() {
                            return x.Z.getGuildVersion(n)
                        }), [n]);
                        var a = (0, v.e7)([T.Z], (function() {
                                return T.Z.getChannel(i)
                            })),
                            s = (0, v.e7)([I.Z], (function() {
                                return I.Z.getGuild(n)
                            }), [n]),
                            c = (0, v.e7)([A.default], (function() {
                                return A.default.getCurrentUser()
                            })),
                            d = (0, j.Z)(a, "Context Menu"),
                            f = (0, P.Xb)(a);
                        if ((null == c ? void 0 : c.id) === e.id) return [d];
                        if (null == s || null == a || null == c) return [];
                        var E = f || a.ownerId === c.id && a.type === w.d4z.PRIVATE_THREAD;
                        return [E ? (0, t.jsx)(o.MenuItem, {
                            id: "remove",
                            label: a.isForumPost() ? C.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                                user: e.username
                            }) : C.Z.Messages.REMOVE_USER_FROM_THREAD.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return U.Z.removeMember(a, e.id, "Context Menu")
                            }
                        }) : null, x.Z.canManageUser(w.Plq.KICK_MEMBERS, e, s) ? (0, t.jsx)(o.MenuItem, {
                            id: "kick",
                            label: E ? C.Z.Messages.KICK_USER_FROM_SERVER.format({
                                user: e.username
                            }) : C.Z.Messages.KICK_USER.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return (0, o.openModalLazy)(G((function() {
                                    var n, u;
                                    return L(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([r.e(40532), r.e(11266)]).then(r.bind(r, 811266))];
                                            case 1:
                                                n = o.sent(), u = n.default;
                                                return [2, function(n) {
                                                    return (0, t.jsx)(u, K(D({}, n), {
                                                        guildId: s.id,
                                                        user: e
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }) : null, x.Z.canManageUser(w.Plq.BAN_MEMBERS, e, s) ? (0, t.jsx)(o.MenuItem, {
                            id: "ban",
                            label: E ? C.Z.Messages.BAN_USER_FROM_SERVER.format({
                                user: e.username
                            }) : C.Z.Messages.BAN_USER.format({
                                user: e.username
                            }),
                            color: "danger",
                            action: function() {
                                return (0, o.openModalLazy)(G((function() {
                                    var n, u;
                                    return L(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([r.e(40532), r.e(33970)]).then(r.bind(r, 333970))];
                                            case 1:
                                                n = o.sent(), u = n.default;
                                                return [2, function(n) {
                                                    return (0, t.jsx)(u, K(D({}, n), {
                                                        guildId: s.id,
                                                        user: e
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }) : null]
                    }(n, l, a.id),
                    oe = (0, H.Z)(n.id, l),
                    ie = (0, y.Z)(n, l),
                    le = (0, f.Z)({
                        id: n.id,
                        label: C.Z.Messages.COPY_ID_USER
                    }),
                    ae = (0, p.Z)(n),
                    se = (0, M.Z)({
                        commandType: s.yU.USER,
                        commandTargetId: n.id,
                        channel: a,
                        guildId: l,
                        location: "ThreadUserContextMenu",
                        onShow: B
                    }),
                    ce = n.isNonUserBot();
                return (0, t.jsxs)(o.Menu, {
                    navId: "user-context",
                    onClose: i.Zy,
                    "aria-label": C.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: N,
                    children: [!ce && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(o.MenuGroup, {
                            children: ae
                        }), (0, t.jsxs)(o.MenuGroup, {
                            children: [X, q, Y, Q, W, $, z]
                        }), (0, t.jsx)(o.MenuGroup, {
                            children: ne
                        }), (0,
                            t.jsxs)(o.MenuGroup, {
                            children: [J, se, ee, re, te]
                        }), (0, t.jsx)(o.MenuGroup, {
                            children: ue
                        }), (0, t.jsxs)(o.MenuGroup, {
                            children: [oe, ie]
                        })]
                    }), (0, t.jsx)(o.MenuGroup, {
                        children: le
                    })]
                })
            }), {
                object: w.qAy.CONTEXT_MENU
            }), [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU])
        }
    }
]);