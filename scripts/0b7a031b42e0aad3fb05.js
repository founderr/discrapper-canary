"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52171], {
        511841: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r, i = n(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const o = (0, i.B)({
                kind: "user",
                id: "2023-08_new_app_command_serving",
                label: "New Application Command Serving",
                defaultConfig: {
                    enabled: !1,
                    newScoreLogic: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        newScoreLogic: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled + New Logic",
                    config: {
                        enabled: !0,
                        newScoreLogic: !0
                    }
                }]
            })
        },
        661098: (e, t, n) => {
            n.d(t, {
                ZP: () => le,
                JK: () => ae,
                v1: () => ue
            });
            var r, i = n(667294),
                o = n(824390),
                l = n.n(o),
                a = n(441143),
                u = n.n(a),
                c = n(496486),
                s = n.n(c),
                d = n(940060),
                f = n(202351),
                p = n(744564),
                m = n(73904),
                v = n(734394),
                y = n(861426),
                h = n(968449),
                b = n(917019),
                g = n(21372),
                A = n(567403),
                O = n(682776),
                _ = n(473903),
                S = n(652591),
                C = n(49621),
                N = n(169898),
                T = n(931184),
                E = n(485501),
                w = n(511841),
                I = n(74110),
                M = n(977579),
                L = n(272200),
                D = n(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const P = (0, D.B)({
                kind: "user",
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: r.DEFAULT
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: r.ALLOWED
                    }
                }]
            });
            var j = n(248046),
                Z = n(127624),
                x = n(2590);

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function F(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function W(e) {
                W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return W(e)
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        F(e, t, n[t])
                    }))
                }
                return e
            }

            function H(e, t) {
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

            function B(e, t) {
                return !t || "object" !== z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Y(e, t) {
                Y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Y(e, t)
            }

            function X(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || K(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || K(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(e, t) : void 0
                }
            }

            function Q(e) {
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
                    var n, r = W(e);
                    if (t) {
                        var i = W(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return B(this, n)
                }
            }
            var V = Symbol("currentUser"),
                q = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                J = Object.freeze({
                    stale: !1,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: []
                    }
                }),
                $ = Object.freeze({
                    stale: !0,
                    fetchState: {
                        fetching: !1
                    }
                });

            function ee(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return V
                }
            }

            function te(e, t) {
                var n = ee(e),
                    r = oe.indices[n];
                null != r && (oe.indices[n] = k({}, r, t))
            }

            function ne(e) {
                var t = ee(e),
                    n = oe.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort();
                delete oe.indices[t]
            }

            function re() {
                oe.indices = {}
            }
            var ie = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Y(e, t)
                }(n, e);
                var t = Q(n);

                function n() {
                    R(this, n);
                    var e;
                    (e = t.apply(this, arguments)).indices = {};
                    return e
                }
                var i = n.prototype;
                i.getContextState = function(e) {
                    return se(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : $ : J;
                    var t, n
                };
                i.getUserState = function() {
                    var e;
                    return null !== (e = this.indices[V]) && void 0 !== e ? e : $
                };
                i.query = function(e, t, n) {
                    var i, o = _.default.getCurrentUser();
                    if (null == o) return q;
                    var l, a = this.getContextState(e),
                        u = this.getUserState(),
                        c = A.Z.getGuild(e.guild_id),
                        s = O.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e),
                        d = h.xM.getSetting(),
                        f = null != e.guild_id && null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0,
                        p = null != e.guild_id ? null === (i = g.ZP.getMember(e.guild_id, o.id)) || void 0 === i ? void 0 : i.roles : void 0;
                    S.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(this.indices).length
                    });
                    var m = !1,
                        v = !1 !== t.applicationCommands && (e.isPrivate() || s);
                    if (n.allowFetch && v) {
                        if (de(a) && se(e)) {
                            null != e.guild_id ? C.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : C.aA({
                                type: "channel",
                                channelId: e.id
                            });
                            m = !0
                        }
                        var b = P.getCurrentConfig({
                            location: n.location
                        }).userAppsTreatment === r.ALLOWED;
                        if (de(u) && b) {
                            C.aA({
                                type: "user"
                            });
                            m = !0
                        }
                    }
                    var N = w.Z.getCurrentConfig({
                            location: n.location
                        }).newScoreLogic,
                        T = e.isPrivate(),
                        E = ce({
                            context: {
                                channel: e,
                                guild: c
                            },
                            currentUserId: o.id,
                            currentUserRoleIds: p,
                            impersonationRoles: f,
                            commandType: t.commandType,
                            text: t.text,
                            allowApplicationCommands: v,
                            builtIns: t.builtIns,
                            allowNsfw: !0 === (null == o ? void 0 : o.nsfwAllowed) && (!T && d || T && e.nsfw),
                            sortByScore: n.sortByScore,
                            useNewScoreLogic: N,
                            contextState: a,
                            userState: u
                        });
                    E.loading = E.loading || m;
                    return E
                };
                return n
            }(f.ZP.Store);
            ie.displayName = "ApplicationCommandIndexStore";
            var oe = new ie(p.Z, {
                LOGOUT: re,
                CONNECTION_OPEN: re,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    ! function(e, t) {
                        var n = ee(e),
                            r = oe.indices[n];
                        (null == r ? void 0 : r.fetchState.fetching) && r.fetchState.abort.abort();
                        oe.indices[n] = t
                    }(e.target, {
                        stale: !1,
                        fetchState: {
                            fetching: !0,
                            abort: e.abort
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n = e.target,
                        r = e.index,
                        i = null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == i) return !1;
                    var o = [],
                        l = {},
                        a = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var s, d = r.applications[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                            var f = s.value,
                                p = {
                                    descriptor: {
                                        type: L.Qi.APPLICATION,
                                        id: f.id,
                                        name: f.name,
                                        icon: f.icon,
                                        application: fe(f),
                                        permissions: null != f.permissions ? (0, v.tk)(ve(f.permissions, i)) : void 0
                                    },
                                    commands: []
                                };
                            o.push(p);
                            l[f.id] = p
                        }
                    } catch (e) {
                        u = !0;
                        c = e
                    } finally {
                        try {
                            a || null == d.return || d.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                    var m = !0,
                        y = !1,
                        h = void 0;
                    try {
                        for (var b, g = (0, j.nG)(r.application_commands.map((function(e) {
                                return function(e, t) {
                                    var n, r, i, o, l, a = H(k({}, e), {
                                        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : "",
                                        dm_permission: void 0,
                                        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                                        options: null !== (l = null === (n = e.options) || void 0 === n ? void 0 : n.map(pe)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? ve(e.permissions, t) : void 0
                                    });
                                    e.description !== e.description_default && (a.description_localized = e.description);
                                    e.name !== e.name_default && (a.name_localized = e.name);
                                    return a
                                }(e, i)
                            })), !0)[Symbol.iterator](); !(m = (b = g.next()).done); m = !0) {
                            var A, O = b.value;
                            null === (A = l[O.applicationId]) || void 0 === A || A.commands.push(O)
                        }
                    } catch (e) {
                        y = !0;
                        h = e
                    } finally {
                        try {
                            m || null == g.return || g.return()
                        } finally {
                            if (y) throw h
                        }
                    }
                    te(n, {
                        result: {
                            sections: o
                        },
                        fetchState: {
                            fetching: !1
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    te(e.target, {
                        stale: !0,
                        fetchState: {
                            fetching: !1,
                            retryAfter: Date.now() + 5e3
                        }
                    })
                },
                CHANNEL_DELETE: function(e) {
                    ne({
                        type: "channel",
                        channelId: e.channel.id
                    })
                },
                GUILD_DELETE: function(e) {
                    ne({
                        type: "guild",
                        guildId: e.guild.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    te({
                        type: "guild",
                        guildId: e.guildId
                    }, {
                        stale: !0
                    })
                }
            });
            const le = oe;

            function ae(e, t, n, r) {
                var o = ue(e, t, n, r),
                    l = o.descriptors,
                    a = o.commands,
                    u = o.sectionedCommands,
                    c = o.loading,
                    s = (0, T.R)({
                        channel: e,
                        guild: t
                    });
                return i.useMemo((function() {
                    if (!r.includeFrecency || 0 === s.length) return {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    };
                    var n = {
                            channel: e,
                            guild: t
                        },
                        i = a.filter((function(e) {
                            return s.includes(e.id)
                        })).sort((function(e, t) {
                            var r = E.ZP.getScoreWithoutLoadingLatest(n, e);
                            return E.ZP.getScoreWithoutLoadingLatest(n, t) - r
                        })).splice(0, Z.hz);
                    return 0 === i.length ? {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    } : {
                        descriptors: [N.Tm[Z.bi.FRECENCY]].concat(G(l)),
                        commands: i.concat(a),
                        sectionedCommands: [{
                            section: N.Tm[Z.bi.FRECENCY],
                            data: i
                        }].concat(G(u)),
                        loading: c
                    }
                }), [c, r.includeFrecency, s, e, t, a, l, u])
            }

            function ue(e, t, n, o) {
                var l, a = w.Z.useExperiment({
                        location: o.location
                    }).newScoreLogic,
                    u = (0, f.cj)([_.default], (function() {
                        var e, t = _.default.getCurrentUser();
                        return {
                            id: null == t ? void 0 : t.id,
                            nsfwAllowed: null !== (e = null == t ? void 0 : t.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    c = u.id,
                    s = u.nsfwAllowed,
                    d = (0, f.e7)([O.Z], (function() {
                        return O.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    p = (0, f.e7)([g.ZP], (function() {
                        var n;
                        if (null != t && null != c) return null === (n = g.ZP.getMember(e.guild_id, c)) || void 0 === n ? void 0 : n.roles
                    })),
                    m = (0, f.e7)([y.Z], (function() {
                        return null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    v = !1 !== n.applicationCommands && (e.isPrivate() || d),
                    b = function(e, t) {
                        var n = X(i.useState(!1), 2),
                            r = n[0],
                            o = n[1],
                            l = (0, f.cj)([oe], (function() {
                                return oe.getContextState(e)
                            }));
                        i.useEffect((function() {
                            S.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == l.result,
                                size: Object.keys(oe.indices).length
                            })
                        }), [l]);
                        i.useEffect((function() {
                            if (!r && de(l) && t && se(e)) {
                                null != e.guild_id ? C.aA({
                                    type: "guild",
                                    guildId: e.guild_id
                                }) : C.aA({
                                    type: "channel",
                                    channelId: e.id
                                });
                                o(!0)
                            }
                        }), [l, e, t, r]);
                        return l
                    }(e, v),
                    A = function(e, t) {
                        var n = X(i.useState(!1), 2),
                            o = n[0],
                            l = n[1],
                            a = (0, f.cj)([oe], (function() {
                                return oe.getUserState()
                            })),
                            u = P.useExperiment({
                                location: t
                            });
                        i.useEffect((function() {
                            if (!o && de(a) && e && u.userAppsTreatment === r.ALLOWED) {
                                C.aA({
                                    type: "user"
                                });
                                l(!0)
                            }
                        }), [a, e, u, o]);
                        return a
                    }(v, o.location),
                    N = h.xM.useSetting();
                return i.useMemo((function() {
                    return null == c ? q : ce({
                        context: {
                            channel: e,
                            guild: t
                        },
                        currentUserId: c,
                        currentUserRoleIds: p,
                        impersonationRoles: m,
                        commandType: n.commandType,
                        text: n.text,
                        allowApplicationCommands: v,
                        builtIns: n.builtIns,
                        allowNsfw: s && (!e.isPrivate() && N || e.isPrivate() && e.nsfw),
                        sortByScore: o.sortByScore,
                        useNewScoreLogic: a,
                        contextState: b,
                        userState: A
                    })
                }), [e, t, c, p, m, n.commandType, n.text, n.builtIns, o.sortByScore, v, s, N, a, b, A])
            }

            function ce(e) {
                var t, n, r = e.context,
                    i = e.currentUserId,
                    o = e.currentUserRoleIds,
                    l = e.impersonationRoles,
                    a = e.contextState,
                    c = e.userState,
                    f = e.commandType,
                    p = e.text,
                    v = e.builtIns,
                    y = void 0 === v ? I.D.ALLOW : v,
                    h = e.allowApplicationCommands,
                    g = void 0 === h || h,
                    A = e.allowNsfw,
                    _ = void 0 !== A && A,
                    S = e.sortByScore,
                    C = void 0 !== S && S,
                    T = e.useNewScoreLogic,
                    w = void 0 !== T && T,
                    L = null == p ? void 0 : p.toLowerCase(),
                    D = null == L ? void 0 : L.split(" "),
                    P = r.channel.guild_id,
                    U = null != l,
                    R = U ? Object.keys(l) : o,
                    F = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                u()(null != F, "permissions channel id is null");
                var W, B, Y = O.Z.computePermissions(r.channel, void 0, l),
                    X = null != P && !d.Z.has(Y, x.Plq.ADMINISTRATOR),
                    z = y === I.D.ONLY_TEXT,
                    K = y !== I.D.DENY ? (0, N.Kh)(f, !0, z) : [],
                    Q = K.length > 0 ? [{
                        descriptor: N.Tm[Z.bi.BUILT_IN],
                        commands: K
                    }] : [],
                    V = g ? G(null !== (W = null === (t = a.result) || void 0 === t ? void 0 : t.sections) && void 0 !== W ? W : []).concat(G(null !== (B = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== B ? B : [])) : [];
                V.sort((function(e, t) {
                    return e.descriptor.name.localeCompare(t.descriptor.name)
                }));
                var q, J = G(V).concat(G(Q));
                q = r.channel.isPrivate() ? r.channel.type === x.d4z.DM ? m.u_.BOT_DM : m.u_.PRIVATE_CHANNEL : m.u_.GUILD;
                var $, ee = [],
                    te = !0,
                    ne = !1,
                    re = void 0;
                try {
                    for (var ie, oe = J[Symbol.iterator](); !(te = (ie = oe.next()).done); te = !0) {
                        var le = ie.value;
                        if (0 !== le.commands.length) {
                            var ae = le.descriptor.permissions,
                                ue = null,
                                ce = null;
                            if (X && null != ae) {
                                ue = ye(ae, F, P);
                                ce = he(ae, i, R, P, U)
                            }
                            var se = [],
                                de = !0,
                                fe = !1,
                                pe = void 0;
                            try {
                                for (var me, ve = le.commands[Symbol.iterator](); !(de = (me = ve.next()).done); de = !0) {
                                    var be = me.value;
                                    if (!(be.type !== f || be.nsfw && !_ || null != be.predicate && !be.predicate(r) || null != be.contexts && !be.contexts.includes(q))) {
                                        var Ae = be.permissions;
                                        if (X) {
                                            var Oe = null,
                                                _e = null;
                                            if (null != Ae) {
                                                Oe = ye(Ae, F, P);
                                                _e = he(Ae, i, R, P, U)
                                            }
                                            if (!1 === Oe || !1 === _e || !0 !== Oe && !1 === ue || !0 !== _e && !1 === ce) continue;
                                            if (null == _e && null == ce && null != be.defaultMemberPermissions && (d.Z.equals(be.defaultMemberPermissions, j.BO) || !d.Z.has(Y, be.defaultMemberPermissions))) continue
                                        }
                                        var Se = void 0;
                                        if (C && null != L && null != D) {
                                            if (0 === (Se = w ? -ge(L, be, le.descriptor) : (0, M.wm)(L, D, be, le.descriptor))) continue
                                        } else Se = 0;
                                        se.push(H(k({}, be), {
                                            score: Se
                                        }))
                                    }
                                }
                            } catch (e) {
                                fe = !0;
                                pe = e
                            } finally {
                                try {
                                    de || null == ve.return || ve.return()
                                } finally {
                                    if (fe) throw pe
                                }
                            }
                            se.length > 0 && ee.push({
                                section: le.descriptor,
                                data: se
                            })
                        }
                    }
                } catch (e) {
                    ne = !0;
                    re = e
                } finally {
                    try {
                        te || null == oe.return || oe.return()
                    } finally {
                        if (ne) throw re
                    }
                }
                if (C) {
                    b.DZ.loadIfNecessary();
                    $ = s().flatMap(ee, (function(e) {
                        return e.data
                    }));
                    $.sort((function(e, t) {
                        if (e.score !== t.score) return t.score - e.score;
                        var n = E.ZP.getScoreWithoutLoadingLatest(r, e),
                            i = E.ZP.getScoreWithoutLoadingLatest(r, t);
                        return n !== i ? i - n : e.displayName.localeCompare(t.displayName)
                    }))
                } else {
                    var Ce = !0,
                        Ne = !1,
                        Te = void 0;
                    try {
                        for (var Ee, we = ee[Symbol.iterator](); !(Ce = (Ee = we.next()).done); Ce = !0) {
                            Ee.value.data.sort((function(e, t) {
                                return e.displayName.localeCompare(t.displayName)
                            }))
                        }
                    } catch (e) {
                        Ne = !0;
                        Te = e
                    } finally {
                        try {
                            Ce || null == we.return || we.return()
                        } finally {
                            if (Ne) throw Te
                        }
                    }
                    $ = s().flatMap(ee, (function(e) {
                        return e.data
                    }))
                }
                return {
                    descriptors: ee.map((function(e) {
                        return e.section
                    })),
                    commands: $,
                    sectionedCommands: ee,
                    loading: !0 === (null == a ? void 0 : a.fetchState.fetching) || !0 === (null == c ? void 0 : c.fetchState.fetching)
                }
            }

            function se(e) {
                var t;
                return null != e.guild_id || e.type === x.d4z.DM && !0 === (null === (t = _.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot)
            }

            function de(e) {
                return !(!e.stale || e.fetchState.fetching) && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function fe(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name
                }
            }

            function pe(e) {
                var t, n, r, i, o = H(k({}, e), {
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(me),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(pe)
                });
                e.description !== e.description_default && (o.description_localized = e.description);
                e.name !== e.name_default && (o.name_localized = e.name);
                return o
            }

            function me(e) {
                var t, n = H(k({}, e), {
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                });
                e.name !== e.name_default && (n.name_localized = e.name);
                return n
            }

            function ve(e, t) {
                var n = [];
                null != e.user && n.push({
                    type: L.Kw.USER,
                    id: t,
                    permission: e.user
                });
                if (null != e.channels) {
                    var r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var l, a = Object.entries(e.channels)[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var u = X(l.value, 2),
                                c = u[0],
                                s = u[1];
                            n.push({
                                type: L.Kw.CHANNEL,
                                id: c,
                                permission: s
                            })
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
                if (null != e.roles) {
                    var d = !0,
                        f = !1,
                        p = void 0;
                    try {
                        for (var m, v = Object.entries(e.roles)[Symbol.iterator](); !(d = (m = v.next()).done); d = !0) {
                            var y = X(m.value, 2),
                                h = y[0],
                                b = y[1];
                            n.push({
                                type: L.Kw.ROLE,
                                id: h,
                                permission: b
                            })
                        }
                    } catch (e) {
                        f = !0;
                        p = e
                    } finally {
                        try {
                            d || null == v.return || v.return()
                        } finally {
                            if (f) throw p
                        }
                    }
                }
                return n
            }

            function ye(e, t, n) {
                var r = e[(0, v.rE)(t, L.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var i = e[(0, v.rE)((0, j.bD)(n), L.Kw.CHANNEL)];
                return null != i ? i.permission : null
            }

            function he(e, t, n, r, i) {
                if (!i) {
                    var o = e[(0,
                        v.rE)(t, L.Kw.USER)];
                    if (null != o) return o.permission
                }
                if (null == n) return !1;
                var l = !1,
                    a = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var s, d = n[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                        var f = s.value,
                            p = e[(0, v.rE)(f, L.Kw.ROLE)];
                        if (null != p) {
                            if (p.permission) return !0;
                            l = !0
                        }
                        if (l) return !1;
                        var m = e[(0, v.rE)(r, L.Kw.ROLE)];
                        if (null != m) return m.permission
                    }
                } catch (e) {
                    u = !0;
                    c = e
                } finally {
                    try {
                        a || null == d.return || d.return()
                    } finally {
                        if (u) throw c
                    }
                }
                return null
            }
            var be;
            ! function(e) {
                e[e.NO_MATCH = 0] = "NO_MATCH";
                e[e.COMMAND_NAME_EXACT = 1] = "COMMAND_NAME_EXACT";
                e[e.COMMAND_NAME_STARTS_WITH = 2] = "COMMAND_NAME_STARTS_WITH";
                e[e.STARTS_WITH_COMMAND_NAME = 3] = "STARTS_WITH_COMMAND_NAME";
                e[e.SECTION_NAME_EXACT = 4] = "SECTION_NAME_EXACT";
                e[e.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH";
                e[e.TAG_EXACT = 6] = "TAG_EXACT";
                e[e.TAG_STARTS_WITH = 7] = "TAG_STARTS_WITH";
                e[e.COMMAND_NAME_CONTAINS = 8] = "COMMAND_NAME_CONTAINS";
                e[e.SECTION_NAME_CONTAINS = 9] = "SECTION_NAME_CONTAINS";
                e[e.COMMAND_DESC_CONTAINS = 10] = "COMMAND_DESC_CONTAINS";
                e[e.COMMAND_NAME_FUZZY = 11] = "COMMAND_NAME_FUZZY";
                e[e.SECTION_NAME_FUZZY = 12] = "SECTION_NAME_FUZZY";
                e[e.COMMAND_DESC_FUZZY = 13] = "COMMAND_DESC_FUZZY"
            }(be || (be = {}));

            function ge(e, t, n) {
                var r, i, o = t.name.toLocaleLowerCase(),
                    a = t.name !== t.displayName ? t.displayName.toLocaleLowerCase() : null;
                if (e === o || e === a) return be.COMMAND_NAME_EXACT;
                if (o.startsWith(e) || (null == a ? void 0 : a.startsWith(e))) return be.COMMAND_NAME_STARTS_WITH;
                if (e.startsWith(o) || null != a && e.startsWith(a)) return be.STARTS_WITH_COMMAND_NAME;
                var u = null == n ? void 0 : n.name.toLocaleLowerCase();
                if (u === e) return be.SECTION_NAME_EXACT;
                if (null == u ? void 0 : u.startsWith(e)) return be.SECTION_NAME_STARTS_WITH;
                var c = null == n || null === (r = n.application) || void 0 === r || null === (i = r.tags) || void 0 === i ? void 0 : i.map((function(e) {
                    return e.toLocaleLowerCase()
                }));
                if (null == c ? void 0 : c.some((function(t) {
                        return t === e
                    }))) return be.TAG_EXACT;
                if (null == c ? void 0 : c.some((function(t) {
                        return t.startsWith(e)
                    }))) return be.TAG_STARTS_WITH;
                if (o.includes(e) || (null == a ? void 0 : a.includes(e))) return be.COMMAND_NAME_CONTAINS;
                if (null == u ? void 0 : u.includes(e)) return be.SECTION_NAME_CONTAINS;
                var s = t.description.toLocaleLowerCase();
                return (null == s ? void 0 : s.includes(e)) ? be.COMMAND_DESC_CONTAINS : null != o && l()(e, o) || null != a && l()(e, a) ? be.COMMAND_NAME_FUZZY : null != u && l()(e, u) ? be.SECTION_NAME_FUZZY : null != s && l()(e, s) ? be.COMMAND_DESC_FUZZY : be.NO_MATCH
            }
        },
        219217: (e, t, n) => {
            n.d(t, {
                o: () => g,
                v: () => A
            });
            var r = n(667294),
                i = n(202351),
                o = n(567403),
                l = n(169898),
                a = n(511841),
                u = n(661098),
                c = n(74110),
                s = n(977579),
                d = n(272200),
                f = n(127624),
                p = n(2590);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || h(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || h(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
                }
            }

            function b(e, t) {
                return {
                    type: t,
                    inputType: d.iw.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }
            }

            function g(e, t, n) {
                if (!v(r.useState(a.Z.getCurrentConfig({
                        location: n.location
                    }).enabled), 1)[0]) {
                    var d, m;
                    return (0, s.JK)(e, t.commandType, null !== (d = n.placeholderCount) && void 0 !== d ? d : 0, null !== (m = n.limit) && void 0 !== m ? m : 10, {
                        canOnlyUseTextCommands: t.builtIns === c.D.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                var h = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    g = (0, u.JK)(e, h, t, n),
                    A = g.descriptors,
                    O = g.commands,
                    _ = g.sectionedCommands,
                    S = g.loading,
                    C = v(r.useState(null), 2),
                    N = C[0],
                    T = C[1],
                    E = r.useRef(!1);
                E.current = S;
                var w = r.useMemo((function() {
                    var e = [];
                    if (null != n.placeholderCount)
                        for (var r = 0; r < n.placeholderCount; r++) e.push(b(r, t.commandType));
                    return e
                }), [t.commandType, n.placeholderCount]);
                return r.useMemo((function() {
                    var e = {
                        loading: E,
                        commands: O,
                        activeSections: A,
                        commandsByActiveSection: _,
                        filteredSectionId: N,
                        hasMoreAfter: !1,
                        placeholders: S ? w : [],
                        sectionDescriptors: A,
                        filterSection: function(e) {
                            T(e)
                        },
                        scrollDown: p.dG4
                    };
                    if (null != N) {
                        var t = _.find((function(e) {
                            return e.section.id === N
                        }));
                        e.activeSections = null != t ? [t.section] : [];
                        e.commandsByActiveSection = null != t ? [t] : [];
                        e.commands = null != t ? t.data : []
                    }
                    if (S) {
                        var n = _[0];
                        if (null != n) e.commandsByActiveSection = [{
                            section: n.section,
                            data: y(n.data).concat(y(w))
                        }].concat(y(_.slice(1)));
                        else {
                            var r = l.Tm[f.bi.BUILT_IN];
                            e.activeSections = [r];
                            e.commandsByActiveSection = [{
                                section: r,
                                data: w
                            }]
                        }
                        e.commands = y(O).concat(y(w))
                    }
                    return e
                }), [O, A, N, _, S, w])
            }

            function A(e, t, n) {
                if (!v(r.useState(a.Z.getCurrentConfig({
                        location: n.location
                    }).enabled), 1)[0]) {
                    var c, d;
                    return (0, s.v1)(e, t.commandType, null !== (c = t.text) && void 0 !== c ? c : "", null !== (d = n.limit) && void 0 !== d ? d : 10)
                }
                var m = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    h = (0, u.v1)(e, m, t, n),
                    g = h.descriptors,
                    A = h.commands,
                    O = h.loading,
                    _ = r.useMemo((function() {
                        var e = [];
                        if (null != n.placeholderCount)
                            for (var r = 0; r < n.placeholderCount; r++) e.push(b(r, t.commandType));
                        return e
                    }), [t.commandType, n.placeholderCount]);
                return r.useMemo((function() {
                    return {
                        commands: O ? y(A).concat(y(_)) : A,
                        sections: O && 0 === g.length ? [l.Tm[f.bi.BUILT_IN]] : g,
                        scrollDown: p.dG4
                    }
                }), [O, A, g, _])
            }
        },
        74110: (e, t, n) => {
            n.d(t, {
                D: () => r
            });
            var r;
            ! function(e) {
                e[e.ALLOW = 0] = "ALLOW";
                e[e.ONLY_TEXT = 1] = "ONLY_TEXT";
                e[e.DENY = 2] = "DENY"
            }(r || (r = {}))
        },
        242922: (e, t, n) => {
            n.d(t, {
                hV: () => L,
                ky: () => I,
                Q1: () => M
            });
            n(73904), n(682776), n(102921);
            var r = n(272200),
                i = n(785893),
                o = n(667294),
                l = n(294184),
                a = n.n(l),
                u = n(211482),
                c = n(775173),
                s = n(141636),
                d = n.n(s),
                f = n(100293),
                p = n.n(f);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e, t) {
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

            function h(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t, n = e.section,
                    l = e.isSelected,
                    s = e.width,
                    f = e.height,
                    m = e.className,
                    g = e.selectable,
                    A = void 0 !== g && g,
                    O = e.onFocus,
                    _ = e.onBlur,
                    S = e.onMouseOver,
                    C = e.onMouseLeave,
                    N = h(e, ["section", "isSelected", "width", "height", "className", "selectable", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]),
                    T = b(o.useState(!1), 2),
                    E = T[0],
                    w = T[1],
                    I = o.useCallback((function() {
                        w(!0);
                        null == O || O()
                    }), [O]),
                    M = o.useCallback((function() {
                        w(!1);
                        null == _ || _()
                    }), [_]),
                    L = o.useCallback((function() {
                        w(!0);
                        null == S || S()
                    }), [S]),
                    D = o.useCallback((function() {
                        w(!1);
                        null == C || C()
                    }), [C]),
                    P = o.useMemo((function() {
                        if (n.type === r.Qi.APPLICATION) {
                            var e;
                            return c.ZP.getApplicationIconURL({
                                id: n.id,
                                icon: n.icon,
                                bot: null === (e = n.application) || void 0 === e ? void 0 : e.bot,
                                botIconFirst: !0,
                                size: s
                            })
                        }
                        return p()
                    }), [n, s]);
                return (0, i.jsx)("div", y(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            v(e, t, n[t])
                        }))
                    }
                    return e
                }({}, N), {
                    className: a()(d().wrapper, m, (t = {}, v(t, d().selectable, A), v(t, d().selected, A && l), t)),
                    onFocus: I,
                    onBlur: M,
                    onMouseOver: L,
                    onMouseLeave: D,
                    children: (0, i.jsx)(u.ZP, {
                        className: d().mask,
                        mask: A && (l || E) ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
                        width: s,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d().icon,
                            style: {
                                width: s,
                                height: f
                            },
                            src: P
                        })
                    })
                }))
            }
            var A = n(223175),
                O = n(457997),
                _ = n(127624),
                S = n(497656),
                C = n.n(S);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function w(e) {
                var t, n = e.section,
                    r = e.className,
                    o = e.width,
                    l = e.height,
                    u = e.padding,
                    c = e.isSelected,
                    s = e.selectable,
                    d = void 0 !== s && s,
                    f = E(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]),
                    p = function(e) {
                        switch (e.id) {
                            case _.bi.BUILT_IN:
                                return A.Z;
                            case _.bi.FRECENCY:
                                return O.Z;
                            default:
                                return
                        }
                    }(n);
                return (0, i.jsx)("div", {
                    className: a()(C().wrapper, r, (t = {}, N(t, C().selectable, d), N(t, C().selected, d && c), t)),
                    style: {
                        width: o,
                        height: l,
                        padding: null != u ? u : 0
                    },
                    children: null != p ? (0, i.jsx)(p, T({
                        className: C().icon,
                        width: o,
                        height: l
                    }, f)) : null
                })
            }
            n(2590).UF9.DAY;
            var I = function(e) {
                return e.type === r.Qi.BUILT_IN ? w : g
            };

            function M(e) {
                return "".concat(e / 16, "rem")
            }

            function L(e, t) {
                var n = t,
                    r = !1,
                    i = t.indexOf(":");
                if (i >= 0) {
                    var o = t.lastIndexOf(" ", i);
                    if (o >= 0) {
                        t = t.substring(0, o);
                        r = !0
                    } else t = t.substring(0, i)
                } else t = t.substring(0, t.length);
                var l = t.split(" ", _.Vd + 1);
                if (l.length > _.Vd) {
                    r = !0;
                    l.pop()
                }
                t = l.join(" ");
                if (n.length > t.length || t.endsWith(" ")) {
                    r = !0;
                    t = t.trimEnd()
                }
                return {
                    text: t,
                    parts: l,
                    hasSpaceTerminator: r
                }
            }
        }
    }
]);