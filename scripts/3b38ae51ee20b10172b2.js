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
                ZP: () => de,
                JK: () => fe,
                v1: () => pe
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
                v = t(73904),
                m = t(734394),
                y = t(861426),
                h = t(384411),
                b = t(968449),
                g = t(917019),
                A = t(473419),
                O = t(61209),
                S = t(21372),
                _ = t(567403),
                N = t(682776),
                C = t(473903),
                T = t(652591),
                E = t(49621),
                w = t(169898),
                I = t(931184),
                M = t(485501),
                L = t(511841),
                D = t(74110),
                P = t(977579),
                j = t(272200),
                U = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const Z = (0, U.B)({
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
            var x = t(248046),
                R = t(127624),
                F = t(2590);

            function W(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function k(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function H(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function B(e) {
                B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return B(e)
            }

            function Y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        H(e, n, t[n])
                    }))
                }
                return e
            }

            function X(e, n) {
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

            function G(e, n) {
                return !n || "object" !== Q(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function z(e, n) {
                z = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return z(e, n)
            }

            function V(e, n) {
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
                }(e, n) || q(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function K(e) {
                return function(e) {
                    if (Array.isArray(e)) return W(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Q = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function q(e, n) {
                if (e) {
                    if ("string" == typeof e) return W(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? W(e, n) : void 0
                }
            }

            function J(e) {
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
                    var t, r = B(e);
                    if (n) {
                        var i = B(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return G(this, t)
                }
            }
            var $ = Symbol("currentUser"),
                ee = Symbol("stale"),
                ne = Symbol("current"),
                te = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                re = Object.freeze({
                    serverVersion: ne,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: [],
                        version: ne
                    }
                }),
                ie = Object.freeze({
                    serverVersion: ee,
                    fetchState: {
                        fetching: !1
                    }
                });

            function oe(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return $
                }
            }

            function le(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = oe(e),
                    i = se.indices[r];
                if (null != i) {
                    "fetchState" in n && i.fetchState.fetching && i.fetchState.abort.abort();
                    se.indices[r] = Y({}, i, n)
                } else t && (se.indices[r] = Y({
                    serverVersion: ee,
                    fetchState: {
                        fetching: !1
                    }
                }, n));
                return i
            }

            function ae(e) {
                var n = oe(e),
                    t = se.indices[n];
                (null == t ? void 0 : t.fetchState.fetching) && t.fetchState.abort.abort();
                delete se.indices[n]
            }

            function ue() {
                var e, n;
                se.indices = {};
                se.oldLocale = null === (e = A.Z.settings.localization) || void 0 === e || null === (n = e.locale) || void 0 === n ? void 0 : n.value
            }
            var ce = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && z(e, n)
                }(t, e);
                var n = J(t);

                function t() {
                    k(this, t);
                    var e;
                    (e = n.apply(this, arguments)).indices = {};
                    return e
                }
                var i = t.prototype;
                i.getContextState = function(e) {
                    return me(e) ? null !== (t = this.indices[null !== (n = e.guild_id) && void 0 !== n ? n : e.id]) && void 0 !== t ? t : ie : re;
                    var n, t
                };
                i.getUserState = function() {
                    var e;
                    return null !== (e = this.indices[$]) && void 0 !== e ? e : ie
                };
                i.query = function(e, n, t) {
                    var i, o = C.default.getCurrentUser();
                    if (null == o) return te;
                    var l, a = this.getContextState(e),
                        u = this.getUserState(),
                        c = _.Z.getGuild(e.guild_id),
                        s = N.Z.can(F.Plq.USE_APPLICATION_COMMANDS, e),
                        d = b.xM.getSetting(),
                        f = null != e.guild_id && null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0,
                        p = null != e.guild_id ? null === (i = S.ZP.getMember(e.guild_id, o.id)) || void 0 === i ? void 0 : i.roles : void 0;
                    T.default.track(F.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(this.indices).length
                    });
                    var v = !1,
                        m = !1 !== n.applicationCommands && (e.isPrivate() || s);
                    if (t.allowFetch && m) {
                        if (ye(a) && me(e)) {
                            null != e.guild_id ? E.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : E.aA({
                                type: "channel",
                                channelId: e.id
                            });
                            v = !0
                        }
                        var h = Z.getCurrentConfig({
                            location: t.location
                        }).userAppsTreatment === r.ALLOWED;
                        if (ye(u) && h) {
                            E.aA({
                                type: "user"
                            });
                            v = !0
                        }
                    }
                    var g = L.Z.getCurrentConfig({
                            location: t.location
                        }).newScoreLogic,
                        A = e.isPrivate(),
                        O = ve({
                            context: {
                                channel: e,
                                guild: c
                            },
                            currentUserId: o.id,
                            currentUserRoleIds: p,
                            impersonationRoles: f,
                            commandType: n.commandType,
                            text: n.text,
                            allowApplicationCommands: m,
                            builtIns: n.builtIns,
                            allowNsfw: !0 === (null == o ? void 0 : o.nsfwAllowed) && (!A && d || A && e.nsfw),
                            sortByScore: t.sortByScore,
                            useNewScoreLogic: g,
                            contextState: a,
                            userState: u
                        });
                    O.loading = O.loading || v;
                    return O
                };
                return t
            }(f.ZP.Store);
            ce.displayName = "ApplicationCommandIndexStore";
            var se = new ce(p.Z, {
                LOGOUT: ue,
                CONNECTION_OPEN: ue,
                USER_SETTINGS_PROTO_UPDATE: function() {
                    var e, n, t = null === (e = A.Z.settings.localization) || void 0 === e || null === (n = e.locale) || void 0 === n ? void 0 : n.value;
                    if (t !== se.oldLocale) {
                        se.indices = {};
                        se.oldLocale = t
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    le(e.target, {
                        fetchState: {
                            fetching: !0,
                            abort: e.abort
                        }
                    }, !0)
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var n, t = e.target,
                        r = e.index,
                        i = null === (n = C.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
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
                                    descriptor: X(Y({}, (0, x.X0)(he(f))), {
                                        permissions: null != f.permissions ? (0, m.tk)(Ae(f.permissions, i)) : void 0
                                    }),
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
                    var v, y = !0,
                        h = !1,
                        b = void 0;
                    try {
                        for (var g, A = (0, x.nG)(r.application_commands.map((function(e) {
                                return function(e, n) {
                                    var t, r, i, o, l, a = X(Y({}, e), {
                                        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : "",
                                        dm_permission: void 0,
                                        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                                        options: null !== (l = null === (t = e.options) || void 0 === t ? void 0 : t.map(be)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? Ae(e.permissions, n) : void 0
                                    });
                                    e.description !== e.description_default && (a.description_localized = e.description);
                                    e.name !== e.name_default && (a.name_localized = e.name);
                                    return a
                                }(e, i)
                            })), !0)[Symbol.iterator](); !(y = (g = A.next()).done); y = !0) {
                            var O, S = g.value;
                            null === (O = l[S.applicationId]) || void 0 === O || O.commands.push(S)
                        }
                    } catch (e) {
                        h = !0;
                        b = e
                    } finally {
                        try {
                            y || null == A.return || A.return()
                        } finally {
                            if (h) throw b
                        }
                    }
                    var _ = null !== (v = r.version) && void 0 !== v ? v : ne;
                    le(t, {
                        serverVersion: _,
                        result: {
                            sections: o,
                            version: _
                        },
                        fetchState: {
                            fetching: !1
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    le(e.target, {
                        fetchState: {
                            fetching: !1,
                            retryAfter: Date.now() + 5e3
                        }
                    })
                },
                APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
                    var n = e.channelId,
                        t = e.guildId;
                    le(null != t ? {
                        type: "guild",
                        guildId: t
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: ee
                    })
                },
                CHANNEL_DELETE: function(e) {
                    ae({
                        type: "channel",
                        channelId: e.channel.id
                    })
                },
                GUILD_DELETE: function(e) {
                    ae({
                        type: "guild",
                        guildId: e.guild.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var n, t, r = e.guildId,
                        i = e.version,
                        o = le({
                            type: "guild",
                            guildId: r
                        }, {
                            serverVersion: null != i ? i : ee
                        }),
                        l = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var c, s = (null !== (t = null == o || null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== t ? t : [])[Symbol.iterator](); !(l = (c = s.next()).done); l = !0) {
                            var d, f, p = c.value;
                            if (null != (null === (d = p.descriptor.application) || void 0 === d || null === (f = d.bot) || void 0 === f ? void 0 : f.id)) {
                                var v, m, y = O.Z.getDMFromUserId(null === (v = p.descriptor.application) || void 0 === v || null === (m = v.bot) || void 0 === m ? void 0 : m.id);
                                null != y && le({
                                    type: "channel",
                                    channelId: y
                                }, {
                                    serverVersion: ee
                                })
                            }
                        }
                    } catch (e) {
                        a = !0;
                        u = e
                    } finally {
                        try {
                            l || null == s.return || s.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                }
            });
            const de = se;

            function fe(e, n, t, r) {
                var o = pe(e, n, t, r),
                    l = o.descriptors,
                    a = o.commands,
                    u = o.sectionedCommands,
                    c = o.loading,
                    s = (0, I.R)({
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
                            var r = M.ZP.getScoreWithoutLoadingLatest(t, e);
                            return M.ZP.getScoreWithoutLoadingLatest(t, n) - r
                        })).splice(0, R.hz);
                    return 0 === i.length ? {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    } : {
                        descriptors: [w.Tm[R.bi.FRECENCY]].concat(K(l)),
                        commands: i.concat(a),
                        sectionedCommands: [{
                            section: w.Tm[R.bi.FRECENCY],
                            data: i
                        }].concat(K(u)),
                        loading: c
                    }
                }), [c, r.includeFrecency, s, e, n, a, l, u])
            }

            function pe(e, n, t, o) {
                var l, a = L.Z.useExperiment({
                        location: o.location
                    }).newScoreLogic,
                    u = (0, f.cj)([C.default], (function() {
                        var e, n = C.default.getCurrentUser();
                        return {
                            id: null == n ? void 0 : n.id,
                            nsfwAllowed: null !== (e = null == n ? void 0 : n.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    c = u.id,
                    s = u.nsfwAllowed,
                    d = (0, f.e7)([N.Z], (function() {
                        return N.Z.can(F.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    p = (0, f.e7)([S.ZP], (function() {
                        var t;
                        if (null != n && null != c) return null === (t = S.ZP.getMember(e.guild_id, c)) || void 0 === t ? void 0 : t.roles
                    })),
                    v = (0, f.e7)([y.Z], (function() {
                        return null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    m = !1 !== t.applicationCommands && (e.isPrivate() || d),
                    h = function(e, n) {
                        var t = V(i.useState(!0), 2),
                            r = t[0],
                            o = t[1],
                            l = (0, f.cj)([se], (function() {
                                return se.getContextState(e)
                            }));
                        i.useEffect((function() {
                            T.default.track(F.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == l.result,
                                size: Object.keys(se.indices).length
                            })
                        }), [l]);
                        i.useEffect((function() {
                            if (r) {
                                ye(l) && n && me(e) && (null != e.guild_id ? E.aA({
                                    type: "guild",
                                    guildId: e.guild_id
                                }) : E.aA({
                                    type: "channel",
                                    channelId: e.id
                                }));
                                o(!1)
                            }
                        }), [l, e, n, r]);
                        return l
                    }(e, m),
                    g = function(e, n) {
                        var t = V(i.useState(!0), 2),
                            o = t[0],
                            l = t[1],
                            a = (0, f.cj)([se], (function() {
                                return se.getUserState()
                            })),
                            u = Z.useExperiment({
                                location: n
                            });
                        i.useEffect((function() {
                            if (o) {
                                ye(a) && e && u.userAppsTreatment === r.ALLOWED && E.aA({
                                    type: "user"
                                });
                                l(!1)
                            }
                        }), [a, e, u, o]);
                        return a
                    }(m, o.location),
                    A = b.xM.useSetting();
                return i.useMemo((function() {
                    return null == c ? te : ve({
                        context: {
                            channel: e,
                            guild: n
                        },
                        currentUserId: c,
                        currentUserRoleIds: p,
                        impersonationRoles: v,
                        commandType: t.commandType,
                        text: t.text,
                        allowApplicationCommands: m,
                        builtIns: t.builtIns,
                        allowNsfw: s && (!e.isPrivate() && A || e.isPrivate() && e.nsfw),
                        sortByScore: o.sortByScore,
                        useNewScoreLogic: a,
                        contextState: h,
                        userState: g
                    })
                }), [e, n, c, p, v, t.commandType, t.text, t.builtIns, o.sortByScore, m, s, A, a, h, g])
            }

            function ve(e) {
                var n, t, r = e.context,
                    i = e.currentUserId,
                    o = e.currentUserRoleIds,
                    l = e.impersonationRoles,
                    a = e.contextState,
                    c = e.userState,
                    f = e.commandType,
                    p = e.text,
                    m = e.builtIns,
                    y = void 0 === m ? D.D.ALLOW : m,
                    h = e.allowApplicationCommands,
                    b = void 0 === h || h,
                    A = e.allowNsfw,
                    O = void 0 !== A && A,
                    S = e.sortByScore,
                    _ = void 0 !== S && S,
                    C = e.useNewScoreLogic,
                    T = void 0 !== C && C,
                    E = null == p ? void 0 : p.toLowerCase(),
                    I = null == E ? void 0 : E.split(" "),
                    L = r.channel.guild_id,
                    j = null != l,
                    U = j ? Object.keys(l) : o,
                    Z = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                u()(null != Z, "permissions channel id is null");
                var W, k, H = N.Z.computePermissions(r.channel, void 0, l),
                    B = null != L && !d.Z.has(H, F.Plq.ADMINISTRATOR),
                    G = y === D.D.ONLY_TEXT,
                    z = y !== D.D.DENY ? (0, w.Kh)(f, !0, G) : [],
                    V = z.length > 0 ? [{
                        descriptor: w.Tm[R.bi.BUILT_IN],
                        commands: z
                    }] : [],
                    Q = b ? K(null !== (W = null === (n = a.result) || void 0 === n ? void 0 : n.sections) && void 0 !== W ? W : []).concat(K(null !== (k = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== k ? k : [])) : [];
                Q.sort((function(e, n) {
                    return Ce(e.descriptor.name, n.descriptor.name)
                }));
                var q, J = K(Q).concat(K(V));
                q = r.channel.isPrivate() ? r.channel.type === F.d4z.DM ? v.u_.BOT_DM : v.u_.PRIVATE_CHANNEL : v.u_.GUILD;
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
                            if (B && null != ae) {
                                ue = Oe(ae, Z, L);
                                ce = Se(ae, i, U, L, j)
                            }
                            var se = [],
                                de = !0,
                                fe = !1,
                                pe = void 0;
                            try {
                                for (var ve, me = le.commands[Symbol.iterator](); !(de = (ve = me.next()).done); de = !0) {
                                    var ye = ve.value;
                                    if (!(ye.type !== f || ye.nsfw && !O || null != ye.predicate && !ye.predicate(r) || null != ye.contexts && !ye.contexts.includes(q))) {
                                        var he = ye.permissions;
                                        if (B) {
                                            var be = null,
                                                ge = null;
                                            if (null != he) {
                                                be = Oe(he, Z, L);
                                                ge = Se(he, i, U, L, j)
                                            }
                                            if (!1 === be || !1 === ge || !0 !== be && !1 === ue || !0 !== ge && !1 === ce) continue;
                                            if (null == ge && null == ce && null != ye.defaultMemberPermissions && (d.Z.equals(ye.defaultMemberPermissions, x.BO) || !d.Z.has(H, ye.defaultMemberPermissions))) continue
                                        }
                                        var Ae = void 0;
                                        if (_ && null != E && null != I) {
                                            if (0 === (Ae = T ? -Ne(E, ye, le.descriptor) : (0, P.wm)(E, I, ye, le.descriptor))) continue
                                        } else Ae = 0;
                                        se.push(X(Y({}, ye), {
                                            score: Ae
                                        }))
                                    }
                                }
                            } catch (e) {
                                fe = !0;
                                pe = e
                            } finally {
                                try {
                                    de || null == me.return || me.return()
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
                if (_) {
                    g.DZ.loadIfNecessary();
                    $ = s().flatMap(ee, (function(e) {
                        return e.data
                    }));
                    $.sort((function(e, n) {
                        if (e.score !== n.score) return n.score - e.score;
                        var t = M.ZP.getScoreWithoutLoadingLatest(r, e),
                            i = M.ZP.getScoreWithoutLoadingLatest(r, n);
                        return t !== i ? i - t : Ce(e.displayName, n.displayName)
                    }))
                } else {
                    var _e = !0,
                        Te = !1,
                        Ee = void 0;
                    try {
                        for (var we, Ie = ee[Symbol.iterator](); !(_e = (we = Ie.next()).done); _e = !0) {
                            we.value.data.sort((function(e, n) {
                                return Ce(e.displayName, n.displayName)
                            }))
                        }
                    } catch (e) {
                        Te = !0;
                        Ee = e
                    } finally {
                        try {
                            _e || null == Ie.return || Ie.return()
                        } finally {
                            if (Te) throw Ee
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

            function me(e) {
                var n;
                return null != e.guild_id || e.type === F.d4z.DM && !0 === (null === (n = C.default.getUser(e.getRecipientId())) || void 0 === n ? void 0 : n.bot)
            }

            function ye(e) {
                return !(! function(e) {
                    var n;
                    return (null === (n = e.result) || void 0 === n ? void 0 : n.version) !== e.serverVersion
                }(e) || e.fetchState.fetching) && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function he(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name,
                    bot: e.bot
                }
            }

            function be(e) {
                var n, t, r, i, o = X(Y({}, e), {
                    choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(ge),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                    options: null === (t = e.options) || void 0 === t ? void 0 : t.map(be)
                });
                e.description !== e.description_default && (o.description_localized = e.description);
                e.name !== e.name_default && (o.name_localized = e.name);
                return o
            }

            function ge(e) {
                var n, t = X(Y({}, e), {
                    name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
                });
                e.name !== e.name_default && (t.name_localized = e.name);
                return t
            }

            function Ae(e, n) {
                var t = [];
                null != e.user && t.push({
                    type: j.Kw.USER,
                    id: n,
                    permission: e.user
                });
                if (null != e.channels) {
                    var r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var l, a = Object.entries(e.channels)[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var u = V(l.value, 2),
                                c = u[0],
                                s = u[1];
                            t.push({
                                type: j.Kw.CHANNEL,
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
                        for (var v, m = Object.entries(e.roles)[Symbol.iterator](); !(d = (v = m.next()).done); d = !0) {
                            var y = V(v.value, 2),
                                h = y[0],
                                b = y[1];
                            t.push({
                                type: j.Kw.ROLE,
                                id: h,
                                permission: b
                            })
                        }
                    } catch (e) {
                        f = !0;
                        p = e
                    } finally {
                        try {
                            d || null == m.return || m.return()
                        } finally {
                            if (f) throw p
                        }
                    }
                }
                return t
            }

            function Oe(e, n, t) {
                var r = e[(0, m.rE)(n, j.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var i = e[(0, m.rE)((0, x.bD)(t), j.Kw.CHANNEL)];
                return null != i ? i.permission : null
            }

            function Se(e, n, t, r, i) {
                if (!i) {
                    var o = e[(0, m.rE)(n, j.Kw.USER)];
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
                            p = e[(0, m.rE)(f, j.Kw.ROLE)];
                        if (null != p) {
                            if (p.permission) return !0;
                            l = !0
                        }
                        if (l) return !1;
                        var v = e[(0, m.rE)(r, j.Kw.ROLE)];
                        if (null != v) return v.permission
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
            var _e;
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
            }(_e || (_e = {}));

            function Ne(e, n, t) {
                var r, i, o = n.name.toLocaleLowerCase(),
                    a = n.name !== n.displayName ? n.displayName.toLocaleLowerCase() : null;
                if (e === o || e === a) return _e.COMMAND_NAME_EXACT;
                if (o.startsWith(e) || (null == a ? void 0 : a.startsWith(e))) return _e.COMMAND_NAME_STARTS_WITH;
                if (e.startsWith(o) || null != a && e.startsWith(a)) return _e.STARTS_WITH_COMMAND_NAME;
                var u = null == t ? void 0 : t.name.toLocaleLowerCase();
                if (u === e) return _e.SECTION_NAME_EXACT;
                if (null == u ? void 0 : u.startsWith(e)) return _e.SECTION_NAME_STARTS_WITH;
                var c = null == t || null === (r = t.application) || void 0 === r || null === (i = r.tags) || void 0 === i ? void 0 : i.map((function(e) {
                    return e.toLocaleLowerCase()
                }));
                if (null == c ? void 0 : c.some((function(n) {
                        return n === e
                    }))) return _e.TAG_EXACT;
                if (null == c ? void 0 : c.some((function(n) {
                        return n.startsWith(e)
                    }))) return _e.TAG_STARTS_WITH;
                if (o.includes(e) || (null == a ? void 0 : a.includes(e))) return _e.COMMAND_NAME_CONTAINS;
                if (null == u ? void 0 : u.includes(e)) return _e.SECTION_NAME_CONTAINS;
                var s = n.description.toLocaleLowerCase();
                return (null == s ? void 0 : s.includes(e)) ? _e.COMMAND_DESC_CONTAINS : null != o && l()(e, o) || null != a && l()(e, a) ? _e.COMMAND_NAME_FUZZY : null != u && l()(e, u) ? _e.SECTION_NAME_FUZZY : null != s && l()(e, s) ? _e.COMMAND_DESC_FUZZY : _e.NO_MATCH
            }

            function Ce(e, n) {
                return e.localeCompare(n, h.default.locale, {
                    numeric: !0,
                    sensitivity: "accent"
                })
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

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function m(e, n) {
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
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || h(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, n) {
                if (e) {
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? v(e, n) : void 0
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
                if (!m(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var d, v;
                    return (0, s.JK)(e, n.commandType, null !== (d = t.placeholderCount) && void 0 !== d ? d : 0, null !== (v = t.limit) && void 0 !== v ? v : 10, {
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
                    S = g.sectionedCommands,
                    _ = g.loading,
                    N = m(r.useState(null), 2),
                    C = N[0],
                    T = N[1],
                    E = r.useRef(!1);
                E.current = _;
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
                        commandsByActiveSection: S,
                        filteredSectionId: C,
                        hasMoreAfter: !1,
                        placeholders: _ ? w : [],
                        sectionDescriptors: A,
                        filterSection: function(e) {
                            T(e)
                        },
                        scrollDown: p.dG4
                    };
                    if (null != C) {
                        var n = S.find((function(e) {
                            return e.section.id === C
                        }));
                        e.activeSections = null != n ? [n.section] : [];
                        e.commandsByActiveSection = null != n ? [n] : []
                    }
                    if (_) {
                        var t = S[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: y(t.data).concat(y(w))
                        }].concat(y(S.slice(1)));
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
                }), [O, A, C, S, _, w])
            }

            function A(e, n, t) {
                if (!m(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var c, d;
                    return (0, s.v1)(e, n.commandType, null !== (c = n.text) && void 0 !== c ? c : "", null !== (d = t.limit) && void 0 !== d ? d : 10)
                }
                var v = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    h = (0, u.v1)(e, v, n, t),
                    g = h.descriptors,
                    A = h.commands,
                    O = h.loading,
                    S = r.useMemo((function() {
                        var e = [];
                        if (null != t.placeholderCount)
                            for (var r = 0; r < t.placeholderCount; r++) e.push(b(r, n.commandType));
                        return e
                    }), [n.commandType, t.placeholderCount]);
                return r.useMemo((function() {
                    return {
                        commands: O ? y(A).concat(y(S)) : A,
                        sections: O && 0 === g.length ? [l.Tm[f.bi.BUILT_IN]] : g,
                        scrollDown: p.dG4
                    }
                }), [O, A, g, S])
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

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function m(e, n, t) {
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
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var n, t = e.section,
                    l = e.isSelected,
                    s = e.width,
                    f = e.height,
                    v = e.className,
                    g = e.selectable,
                    A = void 0 !== g && g,
                    O = e.onFocus,
                    S = e.onBlur,
                    _ = e.onMouseOver,
                    N = e.onMouseLeave,
                    C = h(e, ["section", "isSelected", "width", "height", "className", "selectable", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]),
                    T = b(o.useState(!1), 2),
                    E = T[0],
                    w = T[1],
                    I = o.useCallback((function() {
                        w(!0);
                        null == O || O()
                    }), [O]),
                    M = o.useCallback((function() {
                        w(!1);
                        null == S || S()
                    }), [S]),
                    L = o.useCallback((function() {
                        w(!0);
                        null == _ || _()
                    }), [_]),
                    D = o.useCallback((function() {
                        w(!1);
                        null == N || N()
                    }), [N]),
                    P = o.useMemo((function() {
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
                            m(e, n, t[n])
                        }))
                    }
                    return e
                }({}, C), {
                    className: a()(d().wrapper, v, (n = {}, m(n, d().selectable, A), m(n, d().selected, A && l), n)),
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
            var A = t(223175),
                O = t(457997),
                S = t(127624),
                _ = t(497656),
                N = t.n(_);

            function C(e, n, t) {
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
                        C(e, n, t[n])
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
                            case S.bi.BUILT_IN:
                                return A.Z;
                            case S.bi.FRECENCY:
                                return O.Z;
                            default:
                                return
                        }
                    }(t);
                return (0, i.jsx)("div", {
                    className: a()(N().wrapper, r, (n = {}, C(n, N().selectable, d),
                        C(n, N().selected, d && c), n)),
                    style: {
                        width: o,
                        height: l,
                        padding: null != u ? u : 0
                    },
                    children: null != p ? (0, i.jsx)(p, T({
                        className: N().icon,
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
                var l = n.split(" ", S.Vd + 1);
                if (l.length > S.Vd) {
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