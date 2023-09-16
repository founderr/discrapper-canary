"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52171], {
        511841: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r, o = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const i = (0, o.B)({
                kind: "user",
                id: "2023-08_new_app_command_serving",
                label: "New Application Command Serving",
                defaultConfig: {
                    enabled: !1,
                    newSearchLogic: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        newSearchLogic: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled + New Logic",
                    config: {
                        enabled: !0,
                        newSearchLogic: !0
                    }
                }]
            })
        },
        661098: (e, n, t) => {
            t.d(n, {
                ZP: () => $,
                JK: () => ee,
                v1: () => ne
            });
            var r, o = t(667294),
                i = t(441143),
                l = t.n(i),
                a = t(496486),
                u = t.n(a),
                c = t(940060),
                s = t(202351),
                d = t(744564),
                f = t(73904),
                m = t(734394),
                p = t(861426),
                y = t(968449),
                v = t(917019),
                h = t(21372),
                b = t(567403),
                g = t(682776),
                O = t(473903),
                w = t(652591),
                A = t(49621),
                S = t(169898),
                _ = t(931184),
                C = t(485501),
                E = t(977579),
                I = t(272200),
                T = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const P = (0, T.B)({
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
            var N = t(248046),
                j = t(127624),
                L = t(2590);

            function x(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function R(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        M(e, n, t[n])
                    }))
                }
                return e
            }

            function Z(e, n) {
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

            function k(e, n) {
                return !n || "object" !== G(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function B(e, n) {
                B = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return B(e, n)
            }

            function F(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || K(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || K(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e, n) {
                if (e) {
                    if ("string" == typeof e) return x(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? x(e, n) : void 0
                }
            }

            function z(e) {
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
                    var t, r = U(e);
                    if (n) {
                        var o = U(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return k(this, t)
                }
            }
            var V = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                W = Symbol("currentUser");

            function Q() {
                J.indices = {}
            }

            function Y(e, n, t) {
                var r;
                switch (e.type) {
                    case "guild":
                        r = e.guildId;
                        break;
                    case "channel":
                        r = e.channelId;
                        break;
                    case "user":
                        r = W
                }
                var o = J.indices[r];
                if (null == o) {
                    if (!t) return;
                    o = {
                        stale: !0,
                        fetching: !1
                    }
                }
                J.indices[r] = R({}, o, n)
            }

            function q(e) {
                Y({
                    type: "channel",
                    channelId: e
                }, {
                    stale: !0
                })
            }
            var X = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && B(e, n)
                }(t, e);
                var n = z(t);

                function t() {
                    D(this, t);
                    var e;
                    (e = n.apply(this, arguments)).indices = {};
                    return e
                }
                var o = t.prototype;
                o.getContextState = function(e) {
                    return this.indices[null != e.guild_id ? e.guild_id : e.id]
                };
                o.getUserState = function() {
                    return this.indices[W]
                };
                o.query = function(e, n, t) {
                    var o, i = this.getContextState(e),
                        l = this.getUserState(),
                        a = O.default.getCurrentUser();
                    if (null == a) return V;
                    var u, c = b.Z.getGuild(e.guild_id),
                        s = g.Z.can(L.Plq.USE_APPLICATION_COMMANDS, e),
                        d = y.xM.getSetting(),
                        f = null != e.guild_id && null !== (u = p.Z.getViewingRoles(e.guild_id)) && void 0 !== u ? u : void 0,
                        m = null != e.guild_id ? null === (o = h.ZP.getMember(e.guild_id, a.id)) || void 0 === o ? void 0 : o.roles : void 0;
                    w.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i,
                        size: Object.keys(this.indices).length
                    });
                    if (t.allowFetch) {
                        null != i && (!i.stale || i.fetching) || n.onlyTextCommands || (null != e.guild_id ? A.aA({
                            type: "guild",
                            guildId: e.guild_id
                        }) : A.aA({
                            type: "channel",
                            channelId: e.id
                        }));
                        null != l && (!l.stale || l.fetching) || n.onlyTextCommands || P.getCurrentConfig({
                            location: t.location
                        }).userAppsTreatment !== r.ALLOWED || A.aA({
                            type: "user"
                        })
                    }
                    var v = e.isPrivate();
                    return te({
                        context: {
                            channel: e,
                            guild: c
                        },
                        currentUserId: a.id,
                        currentUserRoleIds: m,
                        impersonationRoles: f,
                        commandType: n.commandType,
                        text: n.text,
                        onlyBuiltIns: !e.isPrivate() && !s,
                        onlyTextCommands: n.onlyTextCommands,
                        allowNsfw: !0 === (null == a ? void 0 : a.nsfwAllowed) && (!v && d || v && e.nsfw),
                        sortByScore: t.sortByScore,
                        contextState: i,
                        userState: l
                    })
                };
                o.__getLocalVars = function() {
                    return {
                        EMPTY_QUERY: V,
                        USER_INDEX_KEY: W,
                        store: J
                    }
                };
                return t
            }(s.ZP.Store);
            X.displayName = "ApplicationCommandIndexStore";
            var J = new X(d.Z, {
                LOGOUT: Q,
                CONNECTION_OPEN: Q,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    Y(e.target, {
                        stale: !1,
                        fetching: !0
                    }, !0)
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var n, t = e.target,
                        r = e.index,
                        o = null === (n = O.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                    if (null == o) return !1;
                    var i = [],
                        l = {},
                        a = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var s, d = r.applications[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                            var f = s.value,
                                p = {
                                    descriptor: {
                                        type: I.Qi.APPLICATION,
                                        id: f.id,
                                        name: f.name,
                                        icon: f.icon,
                                        application: re(f),
                                        permissions: null != f.permissions ? (0, m.tk)(le(f.permissions, o)) : void 0
                                    },
                                    commands: []
                                };
                            i.push(p);
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
                    var y = !0,
                        v = !1,
                        h = void 0;
                    try {
                        for (var b, g = (0, N.nG)(r.application_commands.map((function(e) {
                                return function(e, n) {
                                    var t, r, o, i, l, a = Z(R({}, e), {
                                        description: null !== (o = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== o ? o : "",
                                        dm_permission: void 0,
                                        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                                        options: null !== (l = null === (t = e.options) || void 0 === t ? void 0 : t.map(oe)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? le(e.permissions, n) : void 0
                                    });
                                    e.description !== e.description_default && (a.description_localized = e.description);
                                    e.name !== e.name_default && (a.name_localized = e.name);
                                    return a
                                }(e, o)
                            })), !0)[Symbol.iterator](); !(y = (b = g.next()).done); y = !0) {
                            var w = b.value;
                            l[w.applicationId].commands.push(w)
                        }
                    } catch (e) {
                        v = !0;
                        h = e
                    } finally {
                        try {
                            y || null == g.return || g.return()
                        } finally {
                            if (v) throw h
                        }
                    }
                    Y(t, {
                        result: {
                            sections: i
                        },
                        fetching: !1
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    Y(e.target, {
                        stale: !1,
                        fetching: !1
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    ! function(e) {
                        Y({
                            type: "guild",
                            guildId: e
                        }, {
                            stale: !0
                        })
                    }(e.guildId)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    q(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    q(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    q(e.channelId)
                }
            });
            const $ = J;

            function ee(e, n, t, r) {
                var i = ne(e, n, t, r),
                    l = i.descriptors,
                    a = i.commands,
                    u = i.sectionedCommands,
                    c = i.loading,
                    s = (0, _.R)({
                        channel: e,
                        guild: n
                    });
                return o.useMemo((function() {
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
                        o = a.filter((function(e) {
                            return s.includes(e.id)
                        })).sort((function(e, n) {
                            var r = C.ZP.getScoreWithoutLoadingLatest(t, e);
                            return C.ZP.getScoreWithoutLoadingLatest(t, n) - r
                        })).splice(0, j.hz);
                    return 0 === o.length ? {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    } : {
                        descriptors: [S.Tm[j.bi.FRECENCY]].concat(H(l)),
                        commands: o.concat(a),
                        sectionedCommands: [{
                            section: S.Tm[j.bi.FRECENCY],
                            data: o
                        }].concat(H(u)),
                        loading: c
                    }
                }), [c, r.includeFrecency, s, e, n, a, l, u])
            }

            function ne(e, n, t, i) {
                var l, a = (0, s.cj)([O.default], (function() {
                        var e, n = O.default.getCurrentUser();
                        return {
                            id: null == n ? void 0 : n.id,
                            nsfwAllowed: null !== (e = null == n ? void 0 : n.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    u = a.id,
                    c = a.nsfwAllowed,
                    d = (0, s.e7)([g.Z], (function() {
                        return g.Z.can(L.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    f = (0, s.e7)([h.ZP], (function() {
                        var t;
                        if (null != n && null != u) return null === (t = h.ZP.getMember(e.guild_id, u)) || void 0 === t ? void 0 : t.roles
                    })),
                    m = (0, s.e7)([p.Z], (function() {
                        return null !== (l = p.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    v = function(e, n) {
                        var t, r = (0, s.cj)([J], (function() {
                            return null !== (t = J.getContextState(e)) && void 0 !== t ? t : {
                                stale: !0,
                                fetching: !1
                            }
                        }));
                        o.useEffect((function() {
                            w.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == r,
                                size: Object.keys(J.indices).length
                            });
                            null != r && (!r.stale || r.fetching) || n.onlyTextCommands || (null != e.guild_id ? A.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : A.aA({
                                type: "channel",
                                channelId: e.id
                            }))
                        }), [r, e, n.onlyTextCommands]);
                        return r
                    }(e, t),
                    b = function(e, n) {
                        var t, i = (0, s.cj)([J], (function() {
                                return null !== (t = J.getUserState()) && void 0 !== t ? t : {
                                    stale: !0,
                                    fetching: !1
                                }
                            })),
                            l = P.useExperiment({
                                location: n
                            });
                        o.useEffect((function() {
                            null != i && (!i.stale || i.fetching) || e.onlyTextCommands || l.userAppsTreatment !== r.ALLOWED || A.aA({
                                type: "user"
                            })
                        }), [i, e.onlyTextCommands, l]);
                        return i
                    }(t, i.location),
                    S = y.xM.useSetting();
                return o.useMemo((function() {
                    return null == u ? V : te({
                        context: {
                            channel: e,
                            guild: n
                        },
                        currentUserId: u,
                        currentUserRoleIds: f,
                        impersonationRoles: m,
                        commandType: t.commandType,
                        text: t.text,
                        onlyBuiltIns: !e.isPrivate() && !d,
                        onlyTextCommands: t.onlyTextCommands,
                        allowNsfw: c && (!e.isPrivate() && S || e.isPrivate() && e.nsfw),
                        sortByScore: i.sortByScore,
                        contextState: v,
                        userState: b
                    })
                }), [e, n, u, f, m, t.commandType, t.text, t.onlyTextCommands, i.sortByScore, d, c, S, v, b])
            }

            function te(e) {
                var n, t, r = e.context,
                    o = e.currentUserId,
                    i = e.currentUserRoleIds,
                    a = e.impersonationRoles,
                    s = e.commandType,
                    d = e.text,
                    m = e.onlyBuiltIns,
                    p = e.onlyTextCommands,
                    y = e.allowNsfw,
                    h = e.sortByScore,
                    b = e.contextState,
                    O = e.userState,
                    w = null == d ? void 0 : d.toLowerCase(),
                    A = null == w ? void 0 : w.split(" "),
                    _ = r.channel.guild_id,
                    I = null != a,
                    T = I ? Object.keys(a) : i,
                    P = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                l()(null != P, "permissions channel id is null");
                var x, D, M = g.Z.computePermissions(r.channel, void 0, a),
                    U = null != _ && !c.Z.has(M, L.Plq.ADMINISTRATOR),
                    k = (0, S.Kh)(s, !0, p),
                    B = k.length > 0 ? [{
                        descriptor: S.Tm[j.bi.BUILT_IN],
                        commands: k
                    }] : [],
                    F = m ? [] : H(null !== (x = null == b || null === (n = b.result) || void 0 === n ? void 0 : n.sections) && void 0 !== x ? x : []).concat(H(null !== (D = null == O || null === (t = O.result) || void 0 === t ? void 0 : t.sections) && void 0 !== D ? D : []));
                F.sort((function(e, n) {
                    return e.descriptor.name.localeCompare(n.descriptor.name)
                }));
                var G, K = H(F).concat(H(B));
                G = r.channel.isPrivate() ? r.channel.type === L.d4z.DM ? f.u_.BOT_DM : f.u_.PRIVATE_CHANNEL : f.u_.GUILD;
                var z, V = [],
                    W = !0,
                    Q = !1,
                    Y = void 0;
                try {
                    for (var q, X = K[Symbol.iterator](); !(W = (q = X.next()).done); W = !0) {
                        var J = q.value;
                        if (0 !== J.commands.length) {
                            var $ = J.descriptor.permissions,
                                ee = null,
                                ne = null;
                            if (U && null != $) {
                                ee = ae($, P, _);
                                ne = ue($, o, T, _, I)
                            }
                            var te = [],
                                re = !0,
                                oe = !1,
                                ie = void 0;
                            try {
                                for (var le, ce = J.commands[Symbol.iterator](); !(re = (le = ce.next()).done); re = !0) {
                                    var se = le.value;
                                    if (!(se.type !== s || se.nsfw && !y || null != se.predicate && !se.predicate(r) || null != se.contexts && !se.contexts.includes(G))) {
                                        var de = se.permissions;
                                        if (U) {
                                            var fe = null,
                                                me = null;
                                            if (null != de) {
                                                fe = ae(de, P, _);
                                                me = ue(de, o, T, _, I)
                                            }
                                            if (!1 === fe || !1 === me || !0 !== fe && !1 === ee || !0 !== me && !1 === ne) continue;
                                            if (null == me && null == ne && null != se.defaultMemberPermissions && (c.Z.equals(se.defaultMemberPermissions, N.BO) || !c.Z.has(M, se.defaultMemberPermissions))) continue
                                        }
                                        var pe = void 0;
                                        if (null != w && null != A) {
                                            if (0 === (pe = (0, E.wm)(w, A, se, J.descriptor))) continue
                                        } else pe = 1;
                                        te.push(Z(R({}, se), {
                                            score: pe
                                        }))
                                    }
                                }
                            } catch (e) {
                                oe = !0;
                                ie = e
                            } finally {
                                try {
                                    re || null == ce.return || ce.return()
                                } finally {
                                    if (oe) throw ie
                                }
                            }
                            te.length > 0 && V.push({
                                section: J.descriptor,
                                data: te
                            })
                        }
                    }
                } catch (e) {
                    Q = !0;
                    Y = e
                } finally {
                    try {
                        W || null == X.return || X.return()
                    } finally {
                        if (Q) throw Y
                    }
                }
                if (h) {
                    v.DZ.loadIfNecessary();
                    z = u().flatMap(V, (function(e) {
                        return e.data
                    }));
                    z.sort((function(e, n) {
                        if (e.score !== n.score) return n.score - e.score;
                        var t = C.ZP.getScoreWithoutLoadingLatest(r, e),
                            o = C.ZP.getScoreWithoutLoadingLatest(r, n);
                        return t !== o ? o - t : e.displayName.localeCompare(n.displayName)
                    }))
                } else {
                    var ye = !0,
                        ve = !1,
                        he = void 0;
                    try {
                        for (var be, ge = V[Symbol.iterator](); !(ye = (be = ge.next()).done); ye = !0) {
                            be.value.data.sort((function(e, n) {
                                return e.displayName.localeCompare(n.displayName)
                            }))
                        }
                    } catch (e) {
                        ve = !0;
                        he = e
                    } finally {
                        try {
                            ye || null == ge.return || ge.return()
                        } finally {
                            if (ve) throw he
                        }
                    }
                    z = u().flatMap(V, (function(e) {
                        return e.data
                    }))
                }
                return {
                    descriptors: V.map((function(e) {
                        return e.section
                    })),
                    commands: z,
                    sectionedCommands: V,
                    loading: !0 === (null == b ? void 0 : b.fetching) && null == (null == b ? void 0 : b.result) || !0 === (null == O ? void 0 : O.fetching) && null == (null == O ? void 0 : O.result)
                }
            }

            function re(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name
                }
            }

            function oe(e) {
                var n, t, r, o, i = Z(R({}, e), {
                    choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(ie),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                    options: null === (t = e.options) || void 0 === t ? void 0 : t.map(oe)
                });
                e.description !== e.description_default && (i.description_localized = e.description);
                e.name !== e.name_default && (i.name_localized = e.name);
                return i
            }

            function ie(e) {
                var n, t = Z(R({}, e), {
                    name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
                });
                e.name !== e.name_default && (t.name_localized = e.name);
                return t
            }

            function le(e, n) {
                var t = [];
                null != e.user && t.push({
                    type: I.Kw.USER,
                    id: n,
                    permission: e.user
                });
                if (null != e.channels) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = Object.entries(e.channels)[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var u = F(l.value, 2),
                                c = u[0],
                                s = u[1];
                            t.push({
                                type: I.Kw.CHANNEL,
                                id: c,
                                permission: s
                            })
                        }
                    } catch (e) {
                        o = !0;
                        i = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
                if (null != e.roles) {
                    var d = !0,
                        f = !1,
                        m = void 0;
                    try {
                        for (var p, y = Object.entries(e.roles)[Symbol.iterator](); !(d = (p = y.next()).done); d = !0) {
                            var v = F(p.value, 2),
                                h = v[0],
                                b = v[1];
                            t.push({
                                type: I.Kw.ROLE,
                                id: h,
                                permission: b
                            })
                        }
                    } catch (e) {
                        f = !0;
                        m = e
                    } finally {
                        try {
                            d || null == y.return || y.return()
                        } finally {
                            if (f) throw m
                        }
                    }
                }
                return t
            }

            function ae(e, n, t) {
                var r = e[(0, m.rE)(n, I.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var o = e[(0, m.rE)((0, N.bD)(t), I.Kw.CHANNEL)];
                return null != o ? o.permission : null
            }

            function ue(e, n, t, r, o) {
                if (!o) {
                    var i = e[(0, m.rE)(n, I.Kw.USER)];
                    if (null != i) return i.permission
                }
                if (null == t) return !1;
                var l = !1,
                    a = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var s, d = t[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                        var f = s.value,
                            p = e[(0, m.rE)(f, I.Kw.ROLE)];
                        if (null != p) {
                            if (p.permission) return !0;
                            l = !0
                        }
                        if (l) return !1;
                        var y = e[(0, m.rE)(r, I.Kw.ROLE)];
                        if (null != y) return y.permission
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
        },
        219217: (e, n, t) => {
            t.d(n, {
                o: () => b,
                v: () => g
            });
            var r = t(667294),
                o = t(202351),
                i = t(567403),
                l = t(169898),
                a = t(511841),
                u = t(661098),
                c = t(977579),
                s = t(272200),
                d = t(127624),
                f = t(2590);

            function m(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || v(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, n) {
                if (e) {
                    if ("string" == typeof e) return m(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? m(e, n) : void 0
                }
            }

            function h(e, n) {
                return {
                    type: n,
                    inputType: s.iw.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }
            }

            function b(e, n, t) {
                if (!p(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var s, m;
                    return (0, c.JK)(e, n.commandType, null !== (s = t.placeholderCount) && void 0 !== s ? s : 0, null !== (m = t.limit) && void 0 !== m ? m : 10, {
                        canOnlyUseTextCommands: !0 === n.onlyTextCommands,
                        canUseFrecency: t.includeFrecency
                    })
                }
                var v = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    b = (0, u.JK)(e, v, n, t),
                    g = b.descriptors,
                    O = b.commands,
                    w = b.sectionedCommands,
                    A = b.loading,
                    S = p(r.useState(null), 2),
                    _ = S[0],
                    C = S[1],
                    E = r.useRef(!1);
                E.current = A;
                var I = r.useMemo((function() {
                    var e = [];
                    if (null != t.placeholderCount)
                        for (var r = 0; r < t.placeholderCount; r++) e.push(h(r, n.commandType));
                    return e
                }), [n.commandType, t.placeholderCount]);
                return r.useMemo((function() {
                    var e = {
                        loading: E,
                        commands: O,
                        activeSections: g,
                        commandsByActiveSection: w,
                        filteredSectionId: _,
                        hasMoreAfter: !1,
                        placeholders: A ? I : [],
                        sectionDescriptors: g,
                        filterSection: function(e) {
                            C(e)
                        },
                        scrollDown: f.dG4
                    };
                    if (null != _) {
                        var n = w.find((function(e) {
                            return e.section.id === _
                        }));
                        e.activeSections = null != n ? [n.section] : [];
                        e.commandsByActiveSection = null != n ? [n] : []
                    }
                    if (A) {
                        var t = e.commandsByActiveSection[0];
                        if (null != t) t.data = y(I).concat(y(t.data));
                        else {
                            var r = l.Tm[d.bi.BUILT_IN];
                            e.activeSections = [r];
                            e.commandsByActiveSection = [{
                                section: r,
                                data: I
                            }]
                        }
                    }
                    return e
                }), [O, g, _, w, A, I])
            }

            function g(e, n, t) {
                if (!p(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var s, m;
                    return (0, c.v1)(e, n.commandType, null !== (s = n.text) && void 0 !== s ? s : "", null !== (m = t.limit) && void 0 !== m ? m : 10)
                }
                var y = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    v = (0, u.v1)(e, y, n, t),
                    b = v.descriptors,
                    g = v.commands,
                    O = v.loading,
                    w = r.useMemo((function() {
                        var e = [];
                        if (null != t.placeholderCount)
                            for (var r = 0; r < t.placeholderCount; r++) e.push(h(r, n.commandType));
                        return e
                    }), [n.commandType, t.placeholderCount]);
                return O ? {
                    commands: w,
                    sections: [l.Tm[d.bi.BUILT_IN]],
                    scrollDown: f.dG4
                } : {
                    commands: g,
                    sections: b,
                    scrollDown: f.dG4
                }
            }
        },
        242922: (e, n, t) => {
            t.d(n, {
                hV: () => j,
                ky: () => P,
                Q1: () => N
            });
            t(73904), t(682776), t(102921);
            var r = t(272200),
                o = t(785893),
                i = t(667294),
                l = t(294184),
                a = t.n(l),
                u = t(211482),
                c = t(775173),
                s = t(747592),
                d = t.n(s),
                f = t(100293),
                m = t.n(f);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e, n) {
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

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var n, t = e.section,
                    l = e.isSelected,
                    s = e.width,
                    f = e.height,
                    p = e.className,
                    g = e.selectable,
                    O = void 0 !== g && g,
                    w = e.onFocus,
                    A = e.onBlur,
                    S = e.onMouseOver,
                    _ = e.onMouseLeave,
                    C = h(e, ["section", "isSelected", "width", "height", "className", "selectable", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]),
                    E = b(i.useState(!1), 2),
                    I = E[0],
                    T = E[1],
                    P = i.useCallback((function() {
                        T(!0);
                        null == w || w()
                    }), [w]),
                    N = i.useCallback((function() {
                        T(!1);
                        null == A || A()
                    }), [A]),
                    j = i.useCallback((function() {
                        T(!0);
                        null == S || S()
                    }), [S]),
                    L = i.useCallback((function() {
                        T(!1);
                        null == _ || _()
                    }), [_]),
                    x = i.useMemo((function() {
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
                        return m()
                    }), [t, s]);
                return (0, o.jsx)("div", v(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            y(e, n, t[n])
                        }))
                    }
                    return e
                }({}, C), {
                    className: a()(d().wrapper, p, (n = {}, y(n, d().selectable, O), y(n, d().selected, O && l), n)),
                    onFocus: P,
                    onBlur: N,
                    onMouseOver: j,
                    onMouseLeave: L,
                    children: (0, o.jsx)(u.ZP, {
                        className: d().mask,
                        mask: O && (l || I) ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
                        width: s,
                        height: f,
                        children: (0, o.jsx)("img", {
                            alt: "",
                            className: d().icon,
                            style: {
                                width: s,
                                height: f
                            },
                            src: x
                        })
                    })
                }))
            }
            var O = t(318313),
                w = t(457997),
                A = t(127624),
                S = t(141194),
                _ = t.n(S);

            function C(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        C(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
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

            function T(e) {
                var n, t = e.section,
                    r = e.className,
                    i = e.width,
                    l = e.height,
                    u = e.padding,
                    c = e.isSelected,
                    s = e.selectable,
                    d = void 0 !== s && s,
                    f = I(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]),
                    m = function(e) {
                        switch (e.id) {
                            case A.bi.BUILT_IN:
                                return O.Z;
                            case A.bi.FRECENCY:
                                return w.Z;
                            default:
                                return
                        }
                    }(t);
                return (0, o.jsx)("div", {
                    className: a()(_().wrapper, r, (n = {}, C(n, _().selectable, d), C(n, _().selected, d && c), n)),
                    style: {
                        width: i,
                        height: l,
                        padding: null != u ? u : 0
                    },
                    children: null != m ? (0, o.jsx)(m, E({
                        className: _().icon,
                        width: i,
                        height: l
                    }, f)) : null
                })
            }
            t(2590).UF9.DAY;
            var P = function(e) {
                return e.type === r.Qi.BUILT_IN ? T : g
            };

            function N(e) {
                return "".concat(e / 16, "rem")
            }

            function j(e, n) {
                var t = n,
                    r = !1,
                    o = n.indexOf(":");
                if (o >= 0) {
                    var i = n.lastIndexOf(" ", o);
                    if (i >= 0) {
                        n = n.substring(0, i);
                        r = !0
                    } else n = n.substring(0, o)
                } else n = n.substring(0, n.length);
                var l = n.split(" ", A.Vd + 1);
                if (l.length > A.Vd) {
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
//# sourceMappingURL=151b1d8874aad0890538.js.map