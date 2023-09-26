"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52171], {
        511841: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r, i = t(260561);
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
        661098: (e, n, t) => {
            t.d(n, {
                ZP: () => le,
                JK: () => ae,
                v1: () => ue
            });
            var r, i = t(667294),
                o = t(824390),
                l = t.n(o),
                a = t(441143),
                u = t.n(a),
                c = t(496486),
                s = t.n(c),
                d = t(940060),
                f = t(202351),
                p = t(744564),
                m = t(73904),
                v = t(734394),
                y = t(861426),
                h = t(968449),
                b = t(917019),
                g = t(21372),
                A = t(567403),
                O = t(682776),
                _ = t(473903),
                S = t(652591),
                C = t(49621),
                N = t(169898),
                T = t(931184),
                E = t(485501),
                w = t(511841),
                I = t(74110),
                M = t(977579),
                L = t(272200),
                P = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const D = (0, P.B)({
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
            var j = t(248046),
                Z = t(127624),
                x = t(2590);

            function U(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function R(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function F(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function W(e) {
                W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return W(e)
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        F(e, n, t[n])
                    }))
                }
                return e
            }

            function H(e, n) {
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

            function B(e, n) {
                return !n || "object" !== z(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function Y(e, n) {
                Y = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return Y(e, n)
            }

            function X(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || K(e, n) || function() {
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

            function K(e, n) {
                if (e) {
                    if ("string" == typeof e) return U(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? U(e, n) : void 0
                }
            }

            function Q(e) {
                var n = function() {
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
                    var t, r = W(e);
                    if (n) {
                        var i = W(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return B(this, t)
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
                    fetching: !1,
                    result: {
                        sections: []
                    }
                }),
                $ = Object.freeze({
                    stale: !0,
                    fetching: !1
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

            function ne(e, n) {
                var t = ee(e),
                    r = oe.indices[t];
                null != r && (oe.indices[t] = k({}, r, n))
            }

            function te(e) {
                var n = ee(e);
                delete oe.indices[n]
            }

            function re() {
                oe.indices = {}
            }
            var ie = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && Y(e, n)
                }(t, e);
                var n = Q(t);

                function t() {
                    R(this, t);
                    var e;
                    (e = n.apply(this, arguments)).indices = {};
                    return e
                }
                var i = t.prototype;
                i.getContextState = function(e) {
                    return se(e) ? null !== (t = this.indices[null !== (n = e.guild_id) && void 0 !== n ? n : e.id]) && void 0 !== t ? t : $ : J;
                    var n, t
                };
                i.getUserState = function() {
                    var e;
                    return null !== (e = this.indices[V]) && void 0 !== e ? e : $
                };
                i.query = function(e, n, t) {
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
                        v = !1 !== n.applicationCommands && (e.isPrivate() || s);
                    if (t.allowFetch && v) {
                        if (a.stale && !a.fetching && se(e)) {
                            null != e.guild_id ? C.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : C.aA({
                                type: "channel",
                                channelId: e.id
                            });
                            m = !0
                        }
                        var b = D.getCurrentConfig({
                            location: t.location
                        }).userAppsTreatment === r.ALLOWED;
                        if (u.stale && !a.fetching && b) {
                            C.aA({
                                type: "user"
                            });
                            m = !0
                        }
                    }
                    var N = w.Z.getCurrentConfig({
                            location: t.location
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
                            commandType: n.commandType,
                            text: n.text,
                            allowApplicationCommands: v,
                            builtIns: n.builtIns,
                            allowNsfw: !0 === (null == o ? void 0 : o.nsfwAllowed) && (!T && d || T && e.nsfw),
                            sortByScore: t.sortByScore,
                            useNewScoreLogic: N,
                            contextState: a,
                            userState: u
                        });
                    E.loading = E.loading || m;
                    return E
                };
                return t
            }(f.ZP.Store);
            ie.displayName = "ApplicationCommandIndexStore";
            var oe = new ie(p.Z, {
                LOGOUT: re,
                CONNECTION_OPEN: re,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    ! function(e, n) {
                        var t = ee(e);
                        oe.indices[t] = n
                    }(e.target, {
                        stale: !1,
                        fetching: !0
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var n, t = e.target,
                        r = e.index,
                        i = null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
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
                                        application: de(f),
                                        permissions: null != f.permissions ? (0, v.tk)(me(f.permissions, i)) : void 0
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
                                return function(e, n) {
                                    var t, r, i, o, l, a = H(k({}, e), {
                                        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : "",
                                        dm_permission: void 0,
                                        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                                        options: null !== (l = null === (t = e.options) || void 0 === t ? void 0 : t.map(fe)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? me(e.permissions, n) : void 0
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
                    ne(t, {
                        result: {
                            sections: o
                        },
                        fetching: !1
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    ne(e.target, {
                        stale: !1,
                        fetching: !1
                    })
                },
                CHANNEL_DELETE: function(e) {
                    te({
                        type: "channel",
                        channelId: e.channel.id
                    })
                },
                GUILD_DELETE: function(e) {
                    te({
                        type: "guild",
                        guildId: e.guild.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    ne({
                        type: "guild",
                        guildId: e.guildId
                    }, {
                        stale: !0
                    })
                }
            });
            const le = oe;

            function ae(e, n, t, r) {
                var o = ue(e, n, t, r),
                    l = o.descriptors,
                    a = o.commands,
                    u = o.sectionedCommands,
                    c = o.loading,
                    s = (0, T.R)({
                        channel: e,
                        guild: n
                    });
                return i.useMemo((function() {
                    if (!r.includeFrecency || 0 === s.length) return {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    };
                    var t = {
                            channel: e,
                            guild: n
                        },
                        i = a.filter((function(e) {
                            return s.includes(e.id)
                        })).sort((function(e, n) {
                            var r = E.ZP.getScoreWithoutLoadingLatest(t, e);
                            return E.ZP.getScoreWithoutLoadingLatest(t, n) - r
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
                }), [c, r.includeFrecency, s, e, n, a, l, u])
            }

            function ue(e, n, t, o) {
                var l, a = w.Z.useExperiment({
                        location: o.location
                    }).newScoreLogic,
                    u = (0, f.cj)([_.default], (function() {
                        var e, n = _.default.getCurrentUser();
                        return {
                            id: null == n ? void 0 : n.id,
                            nsfwAllowed: null !== (e = null == n ? void 0 : n.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    c = u.id,
                    s = u.nsfwAllowed,
                    d = (0, f.e7)([O.Z], (function() {
                        return O.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    p = (0, f.e7)([g.ZP], (function() {
                        var t;
                        if (null != n && null != c) return null === (t = g.ZP.getMember(e.guild_id, c)) || void 0 === t ? void 0 : t.roles
                    })),
                    m = (0, f.e7)([y.Z], (function() {
                        return null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    v = !1 !== t.applicationCommands && (e.isPrivate() || d),
                    b = function(e, n) {
                        var t = (0, f.cj)([oe], (function() {
                            return oe.getContextState(e)
                        }));
                        i.useEffect((function() {
                            S.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == t,
                                size: Object.keys(oe.indices).length
                            });
                            (null == t || t.stale && !t.fetching) && n && se(e) && (null != e.guild_id ? C.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : C.aA({
                                type: "channel",
                                channelId: e.id
                            }))
                        }), [t, e, n]);
                        return t
                    }(e, v),
                    A = function(e, n) {
                        var t = (0, f.cj)([oe], (function() {
                                return oe.getUserState()
                            })),
                            o = D.useExperiment({
                                location: n
                            });
                        i.useEffect((function() {
                            (null == t || t.stale && !t.fetching) && e && o.userAppsTreatment === r.ALLOWED && C.aA({
                                type: "user"
                            })
                        }), [t, e, o]);
                        return t
                    }(v, o.location),
                    N = h.xM.useSetting();
                return i.useMemo((function() {
                    return null == c ? q : ce({
                        context: {
                            channel: e,
                            guild: n
                        },
                        currentUserId: c,
                        currentUserRoleIds: p,
                        impersonationRoles: m,
                        commandType: t.commandType,
                        text: t.text,
                        allowApplicationCommands: v,
                        builtIns: t.builtIns,
                        allowNsfw: s && (!e.isPrivate() && N || e.isPrivate() && e.nsfw),
                        sortByScore: o.sortByScore,
                        useNewScoreLogic: a,
                        contextState: b,
                        userState: A
                    })
                }), [e, n, c, p, m, t.commandType, t.text, t.builtIns, o.sortByScore, v, s, N, a, b, A])
            }

            function ce(e) {
                var n, t, r = e.context,
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
                    P = null == L ? void 0 : L.split(" "),
                    D = r.channel.guild_id,
                    U = null != l,
                    R = U ? Object.keys(l) : o,
                    F = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                u()(null != F, "permissions channel id is null");
                var W, B, Y = O.Z.computePermissions(r.channel, void 0, l),
                    X = null != D && !d.Z.has(Y, x.Plq.ADMINISTRATOR),
                    z = y === I.D.ONLY_TEXT,
                    K = (0, N.Kh)(f, !0, z),
                    Q = K.length > 0 ? [{
                        descriptor: N.Tm[Z.bi.BUILT_IN],
                        commands: K
                    }] : [],
                    V = g ? G(null !== (W = null === (n = a.result) || void 0 === n ? void 0 : n.sections) && void 0 !== W ? W : []).concat(G(null !== (B = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== B ? B : [])) : [];
                V.sort((function(e, n) {
                    return e.descriptor.name.localeCompare(n.descriptor.name)
                }));
                var q, J = G(V).concat(G(Q));
                q = r.channel.isPrivate() ? r.channel.type === x.d4z.DM ? m.u_.BOT_DM : m.u_.PRIVATE_CHANNEL : m.u_.GUILD;
                var $, ee = [],
                    ne = !0,
                    te = !1,
                    re = void 0;
                try {
                    for (var ie, oe = J[Symbol.iterator](); !(ne = (ie = oe.next()).done); ne = !0) {
                        var le = ie.value;
                        if (0 !== le.commands.length) {
                            var ae = le.descriptor.permissions,
                                ue = null,
                                ce = null;
                            if (X && null != ae) {
                                ue = ve(ae, F, D);
                                ce = ye(ae, i, R, D, U)
                            }
                            var se = [],
                                de = !0,
                                fe = !1,
                                pe = void 0;
                            try {
                                for (var me, he = le.commands[Symbol.iterator](); !(de = (me = he.next()).done); de = !0) {
                                    var ge = me.value;
                                    if (!(ge.type !== f || ge.nsfw && !_ || null != ge.predicate && !ge.predicate(r) || null != ge.contexts && !ge.contexts.includes(q))) {
                                        var Ae = ge.permissions;
                                        if (X) {
                                            var Oe = null,
                                                _e = null;
                                            if (null != Ae) {
                                                Oe = ve(Ae, F, D);
                                                _e = ye(Ae, i, R, D, U)
                                            }
                                            if (!1 === Oe || !1 === _e || !0 !== Oe && !1 === ue || !0 !== _e && !1 === ce) continue;
                                            if (null == _e && null == ce && null != ge.defaultMemberPermissions && (d.Z.equals(ge.defaultMemberPermissions, j.BO) || !d.Z.has(Y, ge.defaultMemberPermissions))) continue
                                        }
                                        var Se = void 0;
                                        if (C && null != L && null != P) {
                                            if (0 === (Se = w ? -be(L, ge, le.descriptor) : (0, M.wm)(L, P, ge, le.descriptor))) continue
                                        } else Se = 0;
                                        se.push(H(k({}, ge), {
                                            score: Se
                                        }))
                                    }
                                }
                            } catch (e) {
                                fe = !0;
                                pe = e
                            } finally {
                                try {
                                    de || null == he.return || he.return()
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
                    te = !0;
                    re = e
                } finally {
                    try {
                        ne || null == oe.return || oe.return()
                    } finally {
                        if (te) throw re
                    }
                }
                if (C) {
                    b.DZ.loadIfNecessary();
                    $ = s().flatMap(ee, (function(e) {
                        return e.data
                    }));
                    $.sort((function(e, n) {
                        if (e.score !== n.score) return n.score - e.score;
                        var t = E.ZP.getScoreWithoutLoadingLatest(r, e),
                            i = E.ZP.getScoreWithoutLoadingLatest(r, n);
                        return t !== i ? i - t : e.displayName.localeCompare(n.displayName)
                    }))
                } else {
                    var Ce = !0,
                        Ne = !1,
                        Te = void 0;
                    try {
                        for (var Ee, we = ee[Symbol.iterator](); !(Ce = (Ee = we.next()).done); Ce = !0) {
                            Ee.value.data.sort((function(e, n) {
                                return e.displayName.localeCompare(n.displayName)
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
                    loading: !0 === (null == a ? void 0 : a.fetching) || !0 === (null == c ? void 0 : c.fetching)
                }
            }

            function se(e) {
                var n;
                return null != e.guild_id || e.type === x.d4z.DM && !0 === (null === (n = _.default.getUser(e.getRecipientId())) || void 0 === n ? void 0 : n.bot)
            }

            function de(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name
                }
            }

            function fe(e) {
                var n, t, r, i, o = H(k({}, e), {
                    choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(pe),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                    options: null === (t = e.options) || void 0 === t ? void 0 : t.map(fe)
                });
                e.description !== e.description_default && (o.description_localized = e.description);
                e.name !== e.name_default && (o.name_localized = e.name);
                return o
            }

            function pe(e) {
                var n, t = H(k({}, e), {
                    name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
                });
                e.name !== e.name_default && (t.name_localized = e.name);
                return t
            }

            function me(e, n) {
                var t = [];
                null != e.user && t.push({
                    type: L.Kw.USER,
                    id: n,
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
                            t.push({
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
                            t.push({
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
                return t
            }

            function ve(e, n, t) {
                var r = e[(0, v.rE)(n, L.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var i = e[(0, v.rE)((0, j.bD)(t), L.Kw.CHANNEL)];
                return null != i ? i.permission : null
            }

            function ye(e, n, t, r, i) {
                if (!i) {
                    var o = e[(0, v.rE)(n, L.Kw.USER)];
                    if (null != o) return o.permission
                }
                if (null == t) return !1;
                var l = !1,
                    a = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var s, d = t[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
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
            var he;
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
            }(he || (he = {}));

            function be(e, n, t) {
                var r, i, o = n.name.toLocaleLowerCase(),
                    a = n.name !== n.displayName ? n.displayName.toLocaleLowerCase() : null;
                if (e === o || e === a) return he.COMMAND_NAME_EXACT;
                if (o.startsWith(e) || (null == a ? void 0 : a.startsWith(e))) return he.COMMAND_NAME_STARTS_WITH;
                if (e.startsWith(o) || null != a && e.startsWith(a)) return he.STARTS_WITH_COMMAND_NAME;
                var u = null == t ? void 0 : t.name.toLocaleLowerCase();
                if (u === e) return he.SECTION_NAME_EXACT;
                if (null == u ? void 0 : u.startsWith(e)) return he.SECTION_NAME_STARTS_WITH;
                var c = null == t || null === (r = t.application) || void 0 === r || null === (i = r.tags) || void 0 === i ? void 0 : i.map((function(e) {
                    return e.toLocaleLowerCase()
                }));
                if (null == c ? void 0 : c.some((function(n) {
                        return n === e
                    }))) return he.TAG_EXACT;
                if (null == c ? void 0 : c.some((function(n) {
                        return n.startsWith(e)
                    }))) return he.TAG_STARTS_WITH;
                if (o.includes(e) || (null == a ? void 0 : a.includes(e))) return he.COMMAND_NAME_CONTAINS;
                if (null == u ? void 0 : u.includes(e)) return he.SECTION_NAME_CONTAINS;
                var s = n.description.toLocaleLowerCase();
                return (null == s ? void 0 : s.includes(e)) ? he.COMMAND_DESC_CONTAINS : null != o && l()(e, o) || null != a && l()(e, a) ? he.COMMAND_NAME_FUZZY : null != u && l()(e, u) ? he.SECTION_NAME_FUZZY : null != s && l()(e, s) ? he.COMMAND_DESC_FUZZY : he.NO_MATCH
            }
        },
        219217: (e, n, t) => {
            t.d(n, {
                o: () => g,
                v: () => A
            });
            var r = t(667294),
                i = t(202351),
                o = t(567403),
                l = t(169898),
                a = t(511841),
                u = t(661098),
                c = t(74110),
                s = t(977579),
                d = t(272200),
                f = t(127624),
                p = t(2590);

            function m(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || h(e, n) || function() {
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

            function h(e, n) {
                if (e) {
                    if ("string" == typeof e) return m(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? m(e, n) : void 0
                }
            }

            function b(e, n) {
                return {
                    type: n,
                    inputType: d.iw.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }
            }

            function g(e, n, t) {
                if (!v(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var d, m;
                    return (0, s.JK)(e, n.commandType, null !== (d = t.placeholderCount) && void 0 !== d ? d : 0, null !== (m = t.limit) && void 0 !== m ? m : 10, {
                        canOnlyUseTextCommands: n.builtIns === c.D.ONLY_TEXT,
                        canUseFrecency: t.includeFrecency
                    })
                }
                var h = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    g = (0, u.JK)(e, h, n, t),
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
                    if (null != t.placeholderCount)
                        for (var r = 0; r < t.placeholderCount; r++) e.push(b(r, n.commandType));
                    return e
                }), [n.commandType, t.placeholderCount]);
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
                        var n = _.find((function(e) {
                            return e.section.id === N
                        }));
                        e.activeSections = null != n ? [n.section] : [];
                        e.commandsByActiveSection = null != n ? [n] : [];
                        e.commands = null != n ? n.data : []
                    }
                    if (S) {
                        var t = _[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: y(t.data).concat(y(w))
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

            function A(e, n, t) {
                if (!v(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var c, d;
                    return (0, s.v1)(e, n.commandType, null !== (c = n.text) && void 0 !== c ? c : "", null !== (d = t.limit) && void 0 !== d ? d : 10)
                }
                var m = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    h = (0, u.v1)(e, m, n, t),
                    g = h.descriptors,
                    A = h.commands,
                    O = h.loading,
                    _ = r.useMemo((function() {
                        var e = [];
                        if (null != t.placeholderCount)
                            for (var r = 0; r < t.placeholderCount; r++) e.push(b(r, n.commandType));
                        return e
                    }), [n.commandType, t.placeholderCount]);
                return r.useMemo((function() {
                    return {
                        commands: O ? y(A).concat(y(_)) : A,
                        sections: O && 0 === g.length ? [l.Tm[f.bi.BUILT_IN]] : g,
                        scrollDown: p.dG4
                    }
                }), [O, A, g, _])
            }
        },
        74110: (e, n, t) => {
            t.d(n, {
                D: () => r
            });
            var r;
            ! function(e) {
                e[e.ALLOW = 0] = "ALLOW";
                e[e.ONLY_TEXT = 1] = "ONLY_TEXT";
                e[e.DENY = 2] = "DENY"
            }(r || (r = {}))
        },
        242922: (e, n, t) => {
            t.d(n, {
                hV: () => L,
                ky: () => I,
                Q1: () => M
            });
            t(73904), t(682776), t(102921);
            var r = t(272200),
                i = t(785893),
                o = t(667294),
                l = t(294184),
                a = t.n(l),
                u = t(211482),
                c = t(775173),
                s = t(141636),
                d = t.n(s),
                f = t(100293),
                p = t.n(f);

            function m(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e, n) {
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

            function h(e, n) {
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

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var n, t = e.section,
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
                    P = o.useCallback((function() {
                        w(!1);
                        null == C || C()
                    }), [C]),
                    D = o.useMemo((function() {
                        if (t.type === r.Qi.APPLICATION) {
                            var e;
                            return c.ZP.getApplicationIconURL({
                                id: t.id,
                                icon: t.icon,
                                bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                                botIconFirst: !0,
                                size: s
                            })
                        }
                        return p()
                    }), [t, s]);
                return (0, i.jsx)("div", y(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            v(e, n, t[n])
                        }))
                    }
                    return e
                }({}, N), {
                    className: a()(d().wrapper, m, (n = {}, v(n, d().selectable, A), v(n, d().selected, A && l), n)),
                    onFocus: I,
                    onBlur: M,
                    onMouseOver: L,
                    onMouseLeave: P,
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
                            src: D
                        })
                    })
                }))
            }
            var A = t(223175),
                O = t(457997),
                _ = t(127624),
                S = t(497656),
                C = t.n(S);

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function T(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
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

            function w(e) {
                var n, t = e.section,
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
                    }(t);
                return (0, i.jsx)("div", {
                    className: a()(C().wrapper, r, (n = {}, N(n, C().selectable, d), N(n, C().selected, d && c), n)),
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
            t(2590).UF9.DAY;
            var I = function(e) {
                return e.type === r.Qi.BUILT_IN ? w : g
            };

            function M(e) {
                return "".concat(e / 16, "rem")
            }

            function L(e, n) {
                var t = n,
                    r = !1,
                    i = n.indexOf(":");
                if (i >= 0) {
                    var o = n.lastIndexOf(" ", i);
                    if (o >= 0) {
                        n = n.substring(0, o);
                        r = !0
                    } else n = n.substring(0, i)
                } else n = n.substring(0, n.length);
                var l = n.split(" ", _.Vd + 1);
                if (l.length > _.Vd) {
                    r = !0;
                    l.pop()
                }
                n = l.join(" ");
                if (t.length > n.length || n.endsWith(" ")) {
                    r = !0;
                    n = n.trimEnd()
                }
                return {
                    text: n,
                    parts: l,
                    hasSpaceTerminator: r
                }
            }
        }
    }
]);