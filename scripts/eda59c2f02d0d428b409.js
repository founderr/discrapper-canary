"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2790], {
        343639: (e, n, t) => {
            t.d(n, {
                Z: () => u
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

            function c(e) {
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

            function u(e, n) {
                return function(t) {
                    return (0, r.jsx)(o.Z, {
                        page: n.page,
                        section: n.section,
                        object: n.object,
                        objectType: n.objectType,
                        children: (0, r.jsx)(e, c({}, t))
                    })
                }
            }
        },
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => u
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

            function c(e) {
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

            function u(e, n) {
                return function(t) {
                    var i = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, c({}, t))
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
                c = t(416644),
                u = t(691797);

            function l(e) {
                var n = e.id,
                    t = e.label,
                    l = e.onSuccess,
                    a = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var O = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(o.MenuItem, {
                    id: O,
                    label: t,
                    action: function(e) {
                        var t = null != a && e.shiftKey ? a : n;
                        (0, u.JG)(t);
                        null == l || l()
                    },
                    icon: c.Z,
                    showIconFirst: s
                }, O)
            }
        },
        90003: (e, n, t) => {
            t.d(n, {
                q: () => f,
                z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(70418));

            function i(e, n, t, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(n, t);

                        function u(e) {
                            i(c, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(c, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, n, t) {
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
                        u(e, n, t[n])
                    }))
                }
                return e
            }
            var a = function(e, n) {
                var t, r, o, i, c = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = n.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function s(e, n, i) {
                (0, o.openModalLazy)(c((function() {
                    var o, c;
                    return a(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(36576)]).then(t.bind(t, 736576))];
                            case 1:
                                o = u.sent(), c = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(c, l({
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
                (0, o.openModalLazy)(c((function() {
                    var o, c;
                    return a(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(16782)]).then(t.bind(t, 916782))];
                            case 1:
                                o = u.sent(), c = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(c, l({
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
                dW: () => p,
                gm: () => d,
                jQ: () => o,
                sE: () => E
            });
            var r, o, i = t(667294),
                c = t(153686),
                u = t(396043),
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

            function O(e, n, t) {
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
                }({}, n, (0, u.hH)(null !== (r = n.guild_id) && void 0 !== r ? r : t));
                a.default.track(e, o)
            }

            function d(e) {
                return i.useCallback((function(n) {
                    ! function(e) {
                        var n = {
                            guild_id: e,
                            location: c.Z.MEMBER_SAFETY_PAGE
                        };
                        O(s.rMx.MOD_DASH_SEARCH_MEMBERS, n)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            selected_role_count: n.size,
                            guild_id: e,
                            location: c.Z.MEMBER_SAFETY_PAGE
                        };
                        O(s.rMx.MOD_DASH_FILTER_ROLES, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function p(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            flag_type: n,
                            guild_id: e,
                            location: c.Z.MEMBER_SAFETY_PAGE
                        };
                        O(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
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

            function E(e, n) {
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
                    O(s.rMx.MODERATION_ACTION, i)
                }), [e, t, r, o])
            }
        },
        237132: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => G
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                c = t(70418),
                u = t(971402),
                l = t(343639),
                a = t(567678),
                s = t(579581),
                f = t(153686),
                O = t(19585),
                d = t(112897),
                b = t(434651),
                p = t(822003),
                E = t(21372),
                _ = t(407561),
                y = t(430198),
                v = t(836448),
                g = t(93439),
                h = t(100856),
                j = t(362310),
                S = t(190084),
                m = t(11414),
                M = t(61209),
                P = t(352980),
                I = t(682776),
                A = t(2590),
                w = t(473708);
            var N = t(567403),
                C = t(473903);

            function T(e, n, t, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function D(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function c(e) {
                            T(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            T(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function L(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function R(e, n) {
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
            var U = function(e, n) {
                var t, r, o, i, c = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = n.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function Z(e, n) {
                var o = (0, i.e7)([C.default], (function() {
                        return C.default.getCurrentUser()
                    })),
                    u = (0, i.e7)([N.Z], (function() {
                        return N.Z.getGuild(n)
                    }));
                return null == u || null == o || e.id === u.ownerId || e.bot || !u.isOwnerWithRequiredMfaLevel(o) ? null : (0, r.jsx)(c.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: w.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, c.openModalLazy)(D((function() {
                            var n, i;
                            return U(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(46559)]).then(t.bind(t, 146559))];
                                    case 1:
                                        n = c.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, R(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        L(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                guild: u,
                                                fromUser: o,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
            var x = t(536130),
                k = t(973424);
            const G = (0, a.Z)((0, l.Z)((function(e) {
                var n, t = e.user,
                    l = e.guildId,
                    a = e.channelId,
                    N = e.context,
                    C = e.onSelect,
                    T = e.moderationAlertId,
                    D = e.analyticsLocation,
                    L = e.analyticsLocations,
                    R = e.onCloseContextMenu,
                    U = (0, O.Z)(f.Z.CONTEXT_MENU).analyticsLocations,
                    G = (0,
                        s.O)(),
                    B = null !== (n = null == L ? void 0 : L[0]) && void 0 !== n ? n : U[0],
                    K = (0, p.sE)(l, {
                        location: B,
                        targetUserId: t.id
                    }),
                    F = (0, i.e7)([_.Z], (function() {
                        var e;
                        return null !== (e = _.Z.getUserVoiceChannelId(l, t.id)) && void 0 !== e ? e : void 0
                    }), [l, t.id]),
                    H = o.useCallback((function() {
                        K(p.jQ.COPY_ID)
                    }), [K]),
                    V = (0, i.e7)([E.ZP], (function() {
                        return E.ZP.isMember(l, t.id)
                    }), [l, t.id]),
                    Y = (0, x.Z)(t.id, l),
                    W = (0, g.Z)(t.id, N),
                    q = (0, b.Z)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: null != D ? D : G.location,
                        analyticsLocations: [B],
                        context: N
                    }),
                    Q = (0, v.Z)(t, B),
                    J = (0, y.Z)(t, l, null != a ? a : F, B),
                    z = function(e, n) {
                        var t = (0, i.e7)([I.Z], (function() {
                                return null != e && I.Z.canWithPartialContext(A.Plq.MANAGE_MESSAGES, {
                                    channelId: e
                                })
                            }), [e]),
                            o = (0, i.e7)([M.Z], (function() {
                                return M.Z.getChannel(e)
                            }), [e]),
                            u = (0, i.e7)([P.Z], (function() {
                                return null != e && null != n ? P.Z.getMessage(e, n) : null
                            })),
                            l = (0, S.NK)(null != u ? u : null);
                        if (null == o || null == u) return null;
                        var a = null != l && l.actions.hasOwnProperty(j.d.SET_COMPLETED) ? j.d.UNSET_COMPLETED : j.d.SET_COMPLETED,
                            s = a === j.d.SET_COMPLETED ? w.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : w.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                        return t && null != n ? (0, r.jsx)(c.MenuItem, {
                            id: "mark-automod-alert-completed",
                            label: s,
                            action: function() {
                                (0, m.Xx)(n, o, a)
                            }
                        }, "mark-automod-alert-completed") : null
                    }(a, T),
                    X = Z(t, l),
                    $ = (0, k.Z)(t.id, l, !1, B),
                    ee = (0, d.Z)({
                        id: t.id,
                        label: w.Z.Messages.COPY_ID_USER,
                        onSuccess: H
                    }),
                    ne = (0, h.Z)(t, l),
                    te = Boolean(null == t ? void 0 : t.isNonUserBot());
                return (0, r.jsxs)(c.Menu, {
                    navId: "user-context",
                    onClose: function() {
                        (0, u.Zy)();
                        null == R || R()
                    },
                    "aria-label": w.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: C,
                    children: [!te && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(c.MenuGroup, {
                            children: [Y, W]
                        }), (0, r.jsxs)(c.MenuGroup, {
                            children: [q, Q]
                        }), V && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.MenuGroup, {
                                children: J
                            }), (0, r.jsxs)(c.MenuGroup, {
                                children: [$, ne]
                            })]
                        }), null != T ? z : null, null != X ? (0, r.jsx)(c.MenuGroup, {
                            children: X
                        }) : null]
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: ee
                    })]
                })
            }), {
                object: A.qAy.CONTEXT_MENU
            }), [f.Z.CONTEXT_MENU, f.Z.GUILD_MODERATION_USER_MENU])
        },
        836448: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                c = t(560923),
                u = t(840922),
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

            function O(e) {
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

            function b(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    t = function() {
                        c.Z.addRelationship({
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
                    p = (0, o.e7)([u.Z], (function() {
                        return u.Z.isBlocked(f)
                    }), [f]);
                return b ? null : (0, r.jsx)(i.MenuItem, {
                    id: "block",
                    label: p ? s.Z.Messages.UNBLOCK : s.Z.Messages.BLOCK,
                    action: function() {
                        return p ? c.Z.unblockUser(f, {
                            location: n
                        }) : (0, i.openModal)((function(n) {
                            return (0, r.jsx)(i.ConfirmModal, d(O({
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
        536130: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                o = t(667294),
                i = t(70418),
                c = t(26468),
                u = t(924417),
                l = t(652591),
                a = t(2590),
                s = t(473708);

            function f(e, n, t) {
                var f = o.useContext(l.AnalyticsContext),
                    O = (0, c.Aq)();
                return (0, r.jsx)(i.MenuItem, {
                    id: "user-profile",
                    label: s.Z.Messages.PROFILE,
                    action: function() {
                        (0, u.m)({
                            userId: e,
                            guildId: null != n ? n : void 0,
                            channelId: null != t ? t : void 0,
                            analyticsLocation: f.location
                        });
                        O.dispatch(a.CkL.POPOUT_CLOSE)
                    }
                })
            }
        },
        416644: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                c = t(633878);

            function u(e, n, t) {
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

            function O(e, n) {
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
            const d = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    a = e.foreground,
                    d = O(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, c.Z)(d)), {
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
                    O = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    p = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
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