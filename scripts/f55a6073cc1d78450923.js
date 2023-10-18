"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72609], {
        343639: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(213276));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        i(e, n, t[n])
                    }))
                }
                return e
            }

            function c(e, n) {
                return function(t) {
                    return (0, r.jsx)(o.Z, {
                        page: n.page,
                        section: n.section,
                        object: n.object,
                        objectType: n.objectType,
                        children: (0, r.jsx)(e, u({}, t))
                    })
                }
            }
        },
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(19585));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        i(e, n, t[n])
                    }))
                }
                return e
            }

            function c(e, n) {
                return function(t) {
                    var i = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, u({}, t))
                    })
                }
            }
        },
        112897: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(968449),
                u = t(416644),
                c = t(691797);

            function l(e) {
                var n = e.id,
                    t = e.label,
                    l = e.onSuccess,
                    a = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !c.wS) return null;
                var d = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(o.MenuItem, {
                    id: d,
                    label: t,
                    action: function(e) {
                        var t = null != a && e.shiftKey ? a : n;
                        (0, c.JG)(t);
                        null == l || l()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, d)
            }
        },
        90003: (e, n, t) => {
            t.d(n, {
                q: () => f,
                z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(70418));

            function i(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        l = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(n, t);

                        function c(e) {
                            i(u, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            i(u, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        c(e, n, t[n])
                    }))
                }
                return e
            }
            var a = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function s(e, n, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return a(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(36576)]).then(t.bind(t, 736576))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(u, l({
                                        guildId: e,
                                        userId: n,
                                        anaylticsLocations: i
                                    }, t))
                                }]
                        }
                    }))
                })))
            }

            function f(e, n, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return a(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(16782)]).then(t.bind(t, 916782))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(u, l({
                                        guildId: e,
                                        userId: n,
                                        anaylticsLocations: i
                                    }, t))
                                }]
                        }
                    }))
                })))
            }
        },
        822003: (e, n, t) => {
            t.d(n, {
                BG: () => b,
                aY: () => r,
                dW: () => E,
                gm: () => O,
                jQ: () => o,
                sE: () => p
            });
            var r, o, i = t(667294),
                u = t(153686),
                c = t(396043),
                l = t(664625),
                a = t(652591),
                s = t(2590);

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n, t) {
                var r, o = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            f(e, n, t[n])
                        }))
                    }
                    return e
                }({}, n, (0, c.hH)(null !== (r = n.guild_id) && void 0 !== r ? r : t));
                a.default.track(e, o)
            }

            function O(e) {
                return i.useCallback((function(n) {
                    ! function(e) {
                        var n = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, n)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            selected_role_count: n.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function E(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            flag_type: n,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(o || (o = {}));

            function p(e, n) {
                var t = n.location,
                    r = n.targetUserId,
                    o = n.targets;
                return i.useCallback((function(n) {
                    var i = {
                        action_type: n,
                        mod_user_id: l.default.getId(),
                        guild_id: e,
                        location: t,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    d(s.rMx.MODERATION_ACTION, i)
                }), [e, t, r, o])
            }
        },
        190022: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Z
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                u = t(70418),
                c = t(971402),
                l = t(343639),
                a = t(567678),
                s = t(579581),
                f = t(153686),
                d = t(19585),
                O = t(112897),
                b = t(434651),
                E = t(822003),
                p = t(21372),
                _ = t(407561),
                y = t(430198),
                v = t(836448),
                g = t(93439),
                h = t(100856),
                P = t(362310),
                M = t(190084),
                j = t(11414),
                m = t(61209),
                S = t(352980),
                I = t(682776),
                C = t(2590),
                N = t(473708);
            var A = t(589675),
                w = t(536130),
                T = t(973424);
            const Z = (0, a.Z)((0, l.Z)((function(e) {
                var n, t = e.user,
                    l = e.guildId,
                    a = e.channelId,
                    Z = e.context,
                    D = e.onSelect,
                    L = e.moderationAlertId,
                    R = e.analyticsLocation,
                    U = e.analyticsLocations,
                    x = e.onCloseContextMenu,
                    k = (0, d.Z)(f.Z.CONTEXT_MENU).analyticsLocations,
                    G = (0,
                        s.O)(),
                    B = null !== (n = null == U ? void 0 : U[0]) && void 0 !== n ? n : k[0],
                    K = (0, E.sE)(l, {
                        location: B,
                        targetUserId: t.id
                    }),
                    V = (0, i.e7)([_.Z], (function() {
                        var e;
                        return null !== (e = _.Z.getUserVoiceChannelId(l, t.id)) && void 0 !== e ? e : void 0
                    }), [l, t.id]),
                    F = o.useCallback((function() {
                        K(E.jQ.COPY_ID)
                    }), [K]),
                    H = (0, i.e7)([p.ZP], (function() {
                        return p.ZP.isMember(l, t.id)
                    }), [l, t.id]),
                    Y = (0, w.Z)(t.id, l),
                    q = (0, g.Z)(t.id, Z),
                    W = (0, b.Z)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: null != R ? R : G.location,
                        analyticsLocations: [B],
                        context: Z
                    }),
                    Q = (0, v.Z)(t, B),
                    J = (0, y.Z)(t, l, null != a ? a : V, B),
                    z = function(e, n) {
                        var t = (0, i.e7)([I.Z], (function() {
                                return null != e && I.Z.canWithPartialContext(C.Plq.MANAGE_MESSAGES, {
                                    channelId: e
                                })
                            }), [e]),
                            o = (0, i.e7)([m.Z], (function() {
                                return m.Z.getChannel(e)
                            }), [e]),
                            c = (0, i.e7)([S.Z], (function() {
                                return null != e && null != n ? S.Z.getMessage(e, n) : null
                            })),
                            l = (0, M.NK)(null != c ? c : null);
                        if (null == o || null == c) return null;
                        var a = null != l && l.actions.hasOwnProperty(P.d.SET_COMPLETED) ? P.d.UNSET_COMPLETED : P.d.SET_COMPLETED,
                            s = a === P.d.SET_COMPLETED ? N.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : N.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                        return t && null != n ? (0, r.jsx)(u.MenuItem, {
                            id: "mark-automod-alert-completed",
                            label: s,
                            action: function() {
                                (0, j.Xx)(n, o, a)
                            }
                        }, "mark-automod-alert-completed") : null
                    }(a, L),
                    X = (0, A.Z)(t, l),
                    $ = (0, T.Z)(t.id, l, !1, B),
                    ee = (0, O.Z)({
                        id: t.id,
                        label: N.Z.Messages.COPY_ID_USER,
                        onSuccess: F
                    }),
                    ne = (0, h.Z)(t, l),
                    te = Boolean(null == t ? void 0 : t.isNonUserBot());
                return (0, r.jsxs)(u.Menu, {
                    navId: "user-context",
                    onClose: function() {
                        (0, c.Zy)();
                        null == x || x()
                    },
                    "aria-label": N.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: D,
                    children: [!te && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(u.MenuGroup, {
                            children: [Y, q]
                        }), (0, r.jsxs)(u.MenuGroup, {
                            children: [W, Q]
                        }), H && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.MenuGroup, {
                                children: J
                            }), (0, r.jsxs)(u.MenuGroup, {
                                children: [$, ne]
                            })]
                        }), null != L ? z : null, null != X ? (0, r.jsx)(u.MenuGroup, {
                            children: X
                        }) : null]
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ee
                    })]
                })
            }), {
                object: C.qAy.CONTEXT_MENU
            }), [f.Z.CONTEXT_MENU, f.Z.GUILD_MODERATION_USER_MENU])
        },
        836448: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(560923),
                c = t(840922),
                l = t(473903),
                a = t(2590),
                s = t(473708);

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        f(e, n, t[n])
                    }))
                }
                return e
            }

            function O(e, n) {
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

            function b(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    t = function() {
                        u.Z.addRelationship({
                            userId: f,
                            context: {
                                location: n
                            },
                            type: a.OGo.BLOCKED
                        })
                    },
                    f = e.id,
                    b = (0, o.e7)([l.default], (function() {
                        var e;
                        return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === f
                    }), [f]),
                    E = (0, o.e7)([c.Z], (function() {
                        return c.Z.isBlocked(f)
                    }), [f]);
                return b ? null : (0, r.jsx)(i.MenuItem, {
                    id: "block",
                    label: E ? s.Z.Messages.UNBLOCK : s.Z.Messages.BLOCK,
                    action: function() {
                        return E ? u.Z.unblockUser(f, {
                            location: n
                        }) : (0, i.openModal)((function(n) {
                            return (0, r.jsx)(i.ConfirmModal, O(d({
                                header: s.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                                    name: e.username
                                }),
                                confirmText: s.Z.Messages.BLOCK,
                                cancelText: s.Z.Messages.CANCEL,
                                onConfirm: t
                            }, n), {
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: s.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                        name: e.username
                                    })
                                })
                            }))
                        }))
                    }
                })
            }
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(761953),
                u = t(735885),
                c = t(664625),
                l = t(2590),
                a = t(473708);

            function s(e, n) {
                var t = c.default.getId(),
                    s = n === l.IlC.POPOUT;
                return t === e || s ? null : (0, r.jsx)(o.MenuItem, {
                    id: "message-user",
                    label: a.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        i.Z.openPrivateChannel(e);
                        (0, u.xf)()
                    }
                })
            }
        },
        100856: (e, n, t) => {
            t.d(n, {
                Z: () => P
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(327499),
                c = t(116404),
                l = t(773011),
                a = t(664625),
                s = t(61209),
                f = t(5544),
                d = t(21372),
                O = t(567403),
                b = t(682776),
                E = t(840922),
                p = t(473903),
                _ = t(407561),
                y = t(176758),
                v = t(563135),
                g = t(2590),
                h = t(473708);

            function P(e, n) {
                var t = (0, o.e7)([f.ZP], (function() {
                        return f.ZP.getChannels(n)[f.Zb]
                    }), [n]),
                    P = (0, o.e7)([_.Z, s.Z], (function() {
                        var t = _.Z.getUserVoiceChannelId(n, e.id);
                        return s.Z.getChannel(t)
                    }), [n, e.id]);
                if ((0, o.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == P) return null;
                var M = e.id === a.default.getId();
                if (!M && !b.Z.can(g.Plq.MOVE_MEMBERS, P)) return null;
                var j = t.filter((function(n) {
                    var t = n.channel;
                    return t.id !== P.id && (M ? b.Z.can(g.Plq.CONNECT, t) && !(0, y.rY)(t, _.Z, O.Z) : b.Z.can(g.Plq.MOVE_MEMBERS, t) && (b.Z.can(g.Plq.CONNECT, t) || v.ZP.can({
                        permission: g.Plq.CONNECT,
                        user: e,
                        context: t
                    })) && !(0, y.rY)(t, _.Z, O.Z))
                }));
                return 0 === j.length ? null : (0, r.jsx)(i.MenuItem, {
                    id: "voice-move",
                    label: h.Z.Messages.MOVE_TO,
                    children: j.map((function(t) {
                        var o = t.channel;
                        return (0, r.jsx)(i.MenuItem, {
                            id: o.id,
                            action: function() {
                                return function(t) {
                                    e.id === a.default.getId() ? c.default.selectVoiceChannel(t.id) : u.Z.setChannel(n, e.id, t.id)
                                }(o)
                            },
                            label: (0, l.F6)(o, p.default, E.Z)
                        }, o.id)
                    }))
                })
            }
        },
        589675: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(567403),
                c = t(473903),
                l = t(473708);

            function a(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        l = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
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
            var O = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function b(e, n) {
                var a = (0, o.e7)([c.default], (function() {
                        return c.default.getCurrentUser()
                    })),
                    b = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(n)
                    }));
                return null == b || null == a || e.id === b.ownerId || e.bot || !b.isOwnerWithRequiredMfaLevel(a) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: l.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, i.openModalLazy)(s((function() {
                            var n, o;
                            return O(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(46559)]).then(t.bind(t, 146559))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, d(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        f(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                guild: b,
                                                fromUser: a,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        536130: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                o = t(667294),
                i = t(70418),
                u = t(26468),
                c = t(924417),
                l = t(652591),
                a = t(2590),
                s = t(473708);

            function f(e, n, t) {
                var f = o.useContext(l.AnalyticsContext),
                    d = (0, u.Aq)();
                return (0, r.jsx)(i.MenuItem, {
                    id: "user-profile",
                    label: s.Z.Messages.PROFILE,
                    action: function() {
                        (0, c.m)({
                            userId: e,
                            guildId: null != n ? n : void 0,
                            channelId: null != t ? t : void 0,
                            analyticsLocation: f.location
                        });
                        d.dispatch(a.CkL.POPOUT_CLOSE)
                    }
                })
            }
        },
        416644: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                u = t(633878);

            function c(e, n, t) {
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

            function a(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n) {
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

            function d(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.foreground,
                    O = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            s(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(O)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: a,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    E = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        16455: (e, n, t) => {
            t.d(n, {
                j: () => r
            });
            var r;
            ! function(e) {
                e[e.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE";
                e[e.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL";
                e[e.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED";
                e[e.QUARANTINE_USER = 4] = "QUARANTINE_USER"
            }(r || (r = {}))
        },
        813701: (e, n, t) => {
            t.d(n, {
                J: () => r
            });
            var r;
            ! function(e) {
                e.NICKNAME_UPDATE = "nickname_update";
                e.NICKNAME_RESET = "nickname_reset"
            }(r || (r = {}))
        },
        921354: (e, n, t) => {
            t.d(n, {
                q: () => r
            });
            var r;
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN";
                e[e.MESSAGE_SEND = 1] = "MESSAGE_SEND";
                e[e.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
            }(r || (r = {}))
        },
        986468: (e, n, t) => {
            t.d(n, {
                G: () => r
            });
            var r;
            ! function(e) {
                e.RULE_NAME = "rule_name";
                e.CHANNEL_ID = "channel_id";
                e.DECISION_ID = "decision_id";
                e.KEYWORD = "keyword";
                e.KEYWORD_MATCHED_CONTENT = "keyword_matched_content";
                e.FLAGGED_MESSAGE_ID = "flagged_message_id";
                e.TIMEOUT_DURATION = "timeout_duration";
                e.QUARANTINE_USER = "quarantine_user";
                e.QUARANTINE_USER_ACTION = "quarantine_user_action";
                e.DECISION_REASON = "decision_reason";
                e.ALERT_ACTIONS_EXECUTION = "alert_actions_execution";
                e.QUARANTINE_EVENT = "quarantine_event";
                e.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type";
                e.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
            }(r || (r = {}))
        },
        901399: (e, n, t) => {
            t.d(n, {
                D: () => r
            });
            var r;
            ! function(e) {
                e.JOIN_ATTEMPTS = "join_attempts";
                e.RAID_DATETIME = "raid_datetime";
                e.DMS_SENT = "dms_sent";
                e.RAID_TYPE = "raid_type";
                e.RESOLVED_REASON = "resolved_reason"
            }(r || (r = {}))
        },
        945481: (e, n, t) => {
            t.d(n, {
                B: () => r
            });
            var r;
            ! function(e) {
                e.MESSAGE_SEND = "message_send";
                e.GUILD_JOIN = "guild_join";
                e.USERNAME_UPDATE = "username_update"
            }(r || (r = {}))
        },
        824244: (e, n, t) => {
            t.d(n, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.BLOCK_PROFILE_UPDATE = "block_profile_update";
                e.QUARANTINE_USER = "quarantine_user";
                e.BLOCK_GUEST_JOIN = "block_guest_join"
            }(r || (r = {}))
        },
        216829: (e, n, t) => {
            t.d(n, {
                i: () => r
            });
            var r;
            ! function(e) {
                e.BIO = "bio";
                e.USERNAME = "username";
                e.NICKNAME = "nickname";
                e.GLOBAL_NAME = "display_name"
            }(r || (r = {}))
        },
        828153: (e, n, t) => {
            t.d(n, {
                f: () => r
            });
            var r;
            ! function(e) {
                e[e.KEYWORD = 1] = "KEYWORD";
                e[e.SPAM_LINK = 2] = "SPAM_LINK";
                e[e.ML_SPAM = 3] = "ML_SPAM";
                e[e.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST";
                e[e.MENTION_SPAM = 5] = "MENTION_SPAM";
                e[e.USER_PROFILE = 6] = "USER_PROFILE";
                e[e.SERVER_POLICY = 7] = "SERVER_POLICY"
            }(r || (r = {}))
        }
    }
]);