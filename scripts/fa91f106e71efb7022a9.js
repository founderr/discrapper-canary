"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [25408], {
        434651: (e, n, r) => {
            r.d(n, {
                Z: () => E
            });
            var t = r(785893),
                l = r(667294),
                i = r(202351),
                u = r(70418),
                o = r(357088),
                a = r(401080),
                c = r(736626),
                s = r(664625),
                d = r(21372),
                f = r(567403),
                b = r(682776),
                p = r(473903),
                g = r(2590),
                Z = r(473708),
                h = r(35637),
                v = r.n(h);

            function O(e, n, r, t, l, i, u) {
                try {
                    var o = e[i](u),
                        a = o.value
                } catch (e) {
                    r(e);
                    return
                }
                o.done ? n(a) : Promise.resolve(a).then(t, l)
            }

            function m(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, l) {
                        var i = e.apply(n, r);

                        function u(e) {
                            O(i, t, l, u, o, "next", e)
                        }

                        function o(e) {
                            O(i, t, l, u, o, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function P(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function y(e, n) {
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
            var M = function(e, n) {
                var r, t, l, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
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
                            for (; u;) try {
                                if (r = 1, t && (l = 2 & i[0] ? t.return : i[0] ? t.throw || ((l = t.return) && l.call(t), 0) : t.next) && !(l = l.call(t, i[1])).done) return l;
                                (t = 0, l) && (i = [2 & i[0], l.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        l = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = u.trys, l = l.length > 0 && l[l.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!l || i[1] > l[0] && i[1] < l[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < l[1]) {
                                            u.label = l[1];
                                            l = i;
                                            break
                                        }
                                        if (l && u.label < l[2]) {
                                            u.label = l[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        l[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = l = 0
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

            function E(e) {
                var n = e.guildId,
                    h = e.userId,
                    O = e.analyticsLocation,
                    E = e.analyticsLocations,
                    j = e.context,
                    I = e.icon,
                    N = f.Z.getGuild(n),
                    C = s.default.getId(),
                    R = (0, i.e7)([p.default], (function() {
                        return p.default.getUser(h)
                    })),
                    x = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(n, h)
                    }), [n, h]);
                (0, i.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(n)
                }), [n]);
                var w = l.useMemo((function() {
                    return P({}, n, [h])
                }), [n, h]);
                (0, o.$)(w);
                var _ = j === g.IlC.POPOUT,
                    S = (0, a.Z)({
                        guild: N,
                        analyticsLocation: O
                    });
                if (null == N || _) return null;
                var A = C === h && (b.Z.can(g.Plq.CHANGE_NICKNAME, N) || b.Z.can(g.Plq.MANAGE_NICKNAMES, N)),
                    k = C === h,
                    G = b.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, h, N);
                if (!(A || G || k)) return null;
                if (null == R || x) return null;
                var L = N.hasFeature(g.oNc.HUB) ? Z.Z.Messages.HUB_EDIT_PROFILE : Z.Z.Messages.CHANGE_IDENTITY,
                    D = k ? L : Z.Z.Messages.CHANGE_NICKNAME;
                return (0, t.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, t.jsx)("div", {
                        className: v().labelWrapper,
                        children: (0, t.jsx)("span", {
                            className: v().label,
                            children: D
                        })
                    }),
                    icon: I,
                    action: function() {
                        if (k) {
                            (0, c.Z)(R.id, R.getAvatarURL(n, 80), {
                                guildId: n
                            });
                            S()
                        } else(0, u.openModalLazy)(m((function() {
                            var e, l;
                            return M(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(33166)]).then(r.bind(r, 633166))];
                                    case 1:
                                        e = i.sent(), l = e.default;
                                        return [2, function(e) {
                                            return (0, t.jsx)(l, y(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var r = null != arguments[n] ? arguments[n] : {},
                                                        t = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    t.forEach((function(n) {
                                                        P(e, n, r[n])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: n,
                                                user: R,
                                                analyticsSource: O,
                                                analyticsLocations: E
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        93439: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                l = (r(667294), r(70418)),
                i = r(761953),
                u = r(735885),
                o = r(664625),
                a = r(2590),
                c = r(473708);

            function s(e, n) {
                var r = o.default.getId(),
                    s = n === a.IlC.POPOUT;
                return r === e || s ? null : (0, t.jsx)(l.MenuItem, {
                    id: "message-user",
                    label: c.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        i.Z.openPrivateChannel(e);
                        (0, u.xf)()
                    }
                })
            }
        },
        100856: (e, n, r) => {
            r.d(n, {
                Z: () => y
            });
            var t = r(785893),
                l = (r(667294), r(202351)),
                i = r(70418),
                u = r(327499),
                o = r(116404),
                a = r(773011),
                c = r(664625),
                s = r(61209),
                d = r(5544),
                f = r(21372),
                b = r(567403),
                p = r(682776),
                g = r(840922),
                Z = r(473903),
                h = r(407561),
                v = r(176758),
                O = r(563135),
                m = r(2590),
                P = r(473708);

            function y(e, n) {
                var r = (0, l.e7)([d.ZP], (function() {
                        return d.ZP.getChannels(n)[d.Zb]
                    }), [n]),
                    y = (0, l.e7)([h.Z, s.Z], (function() {
                        var r = h.Z.getUserVoiceChannelId(n, e.id);
                        return s.Z.getChannel(r)
                    }), [n, e.id]);
                if ((0, l.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == y) return null;
                var M = e.id === c.default.getId();
                if (!M && !p.Z.can(m.Plq.MOVE_MEMBERS, y)) return null;
                var E = r.filter((function(n) {
                    var r = n.channel;
                    return r.id !== y.id && (M ? p.Z.can(m.Plq.CONNECT, r) && !(0, v.rY)(r, h.Z, b.Z) : p.Z.can(m.Plq.MOVE_MEMBERS, r) && (p.Z.can(m.Plq.CONNECT, r) || O.ZP.can({
                        permission: m.Plq.CONNECT,
                        user: e,
                        context: r
                    })) && !(0, v.rY)(r, h.Z, b.Z))
                }));
                return 0 === E.length ? null : (0, t.jsx)(i.MenuItem, {
                    id: "voice-move",
                    label: P.Z.Messages.MOVE_TO,
                    children: E.map((function(r) {
                        var l = r.channel;
                        return (0, t.jsx)(i.MenuItem, {
                            id: l.id,
                            action: function() {
                                return function(r) {
                                    e.id === c.default.getId() ? o.default.selectVoiceChannel(r.id) : u.Z.setChannel(n, e.id, r.id)
                                }(l)
                            },
                            label: (0, a.F6)(l, Z.default, g.Z)
                        }, l.id)
                    }))
                })
            }
        },
        973424: (e, n, r) => {
            r.d(n, {
                Z: () => O
            });
            var t = r(785893),
                l = (r(667294), r(547308)),
                i = r(202351),
                u = r(70418),
                o = r(316878),
                a = r(822003),
                c = r(703790),
                s = r(21372),
                d = r(567403),
                f = r(682776),
                b = r(72580),
                p = r(2590),
                g = r(473708),
                Z = r(950677),
                h = r.n(Z);

            function v(e, n) {
                var r, i;
                return (0, t.jsxs)("div", {
                    className: h().roleRow,
                    children: ["dot" === n ? (0,
                        t.jsx)(u.RoleDot, {
                        className: h().roleDot,
                        color: null !== (r = e.colorString) && void 0 !== r ? r : (0, l.Rf)(p.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, t.jsx)(u.RoleCircle, {
                        className: h().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, l.Rf)(p.p6O)
                    }), (0, t.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function O(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    Z = function(r) {
                        if (y.includes(r.id)) {
                            c.Z.updateMemberRoles(n, e, y.filter((function(e) {
                                return e !== r.id
                            })), [], [r.id]);
                            m(a.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(n, e, y.concat([r.id]), [r.id], []);
                            m(a.jQ.ADD_ROLE)
                        }
                    },
                    h = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(n)
                    }), [n]),
                    O = (0, i.e7)([o.Z], (function() {
                        return o.Z.roleStyle
                    })),
                    m = (0, a.sE)(n, {
                        location: l,
                        targetUserId: e
                    }),
                    P = (0, i.cj)([s.ZP, f.Z], (function() {
                        var r = s.ZP.getMember(n, e);
                        return {
                            userRoles: null != r ? r.roles : [],
                            isGuildMember: null != r,
                            canManageRoles: null != h && f.Z.can(p.Plq.MANAGE_ROLES, h)
                        }
                    }), [e, n, h]),
                    y = P.userRoles,
                    M = P.isGuildMember,
                    E = P.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == y || null == h) return null;
                if (!M) return null;
                var j = f.Z.getHighestRole(h),
                    I = Object.values(h.roles).filter((function(e) {
                        return e.id !== h.id
                    })),
                    N = E ? I.map((function(e) {
                        var n = e.managed || !f.Z.isRoleHigher(h, j, e),
                            r = -1 !== y.indexOf(e.id);
                        return n && !r ? null : (0, t.jsx)(u.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return v(e, O)
                            },
                            disabled: n,
                            action: function() {
                                return Z(e)
                            },
                            checked: r
                        }, e.id)
                    })) : I.filter((function(e) {
                        return -1 !== y.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === h.id ? null : (0, t.jsx)(u.MenuItem, {
                            id: e.id,
                            label: function() {
                                return v(e, O)
                            }
                        }, e.id)
                    }));
                return 0 === N.filter(b.lm).length ? null : r ? N : (0, t.jsx)(u.MenuItem, {
                    id: "roles",
                    label: g.Z.Messages.ROLES_LIST.format({
                        numRoles: N.length
                    }),
                    children: N
                })
            }
        }
    }
]);