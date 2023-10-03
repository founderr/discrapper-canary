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
                ZP: () => ce,
                JK: () => se,
                v1: () => de
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
                g = t(473419),
                A = t(21372),
                O = t(567403),
                _ = t(682776),
                S = t(473903),
                C = t(652591),
                N = t(49621),
                T = t(169898),
                E = t(931184),
                w = t(485501),
                I = t(511841),
                M = t(74110),
                L = t(977579),
                D = t(272200),
                P = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const j = (0, P.B)({
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
            var U = t(248046),
                Z = t(127624),
                x = t(2590);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function F(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function W(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function H(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        W(e, n, t[n])
                    }))
                }
                return e
            }

            function B(e, n) {
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

            function Y(e, n) {
                return !n || "object" !== V(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function X(e, n) {
                X = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return X(e, n)
            }

            function G(e, n) {
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

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || K(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var V = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e, n) {
                if (e) {
                    if ("string" == typeof e) return R(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? R(e, n) : void 0
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
                    var t, r = k(e);
                    if (n) {
                        var i = k(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return Y(this, t)
                }
            }
            var q = Symbol("currentUser"),
                J = Symbol("stale"),
                $ = Symbol("current"),
                ee = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                ne = Object.freeze({
                    serverVersion: $,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: [],
                        version: $
                    }
                }),
                te = Object.freeze({
                    serverVersion: J,
                    fetchState: {
                        fetching: !1
                    }
                });

            function re(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return q
                }
            }

            function ie(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = re(e),
                    i = ue.indices[r];
                if (null != i) {
                    "fetchState" in n && i.fetchState.fetching && i.fetchState.abort.abort();
                    ue.indices[r] = H({}, i, n)
                } else t && (ue.indices[r] = H({
                    serverVersion: J,
                    fetchState: {
                        fetching: !1
                    }
                }, n))
            }

            function oe(e) {
                var n = re(e),
                    t = ue.indices[n];
                (null == t ? void 0 : t.fetchState.fetching) && t.fetchState.abort.abort();
                delete ue.indices[n]
            }

            function le() {
                var e, n;
                ue.indices = {};
                ue.oldLocale = null === (e = g.Z.settings.localization) || void 0 === e || null === (n = e.locale) || void 0 === n ? void 0 : n.value
            }
            var ae = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && X(e, n)
                }(t, e);
                var n = Q(t);

                function t() {
                    F(this, t);
                    var e;
                    (e = n.apply(this, arguments)).indices = {};
                    return e
                }
                var i = t.prototype;
                i.getContextState = function(e) {
                    return pe(e) ? null !== (t = this.indices[null !== (n = e.guild_id) && void 0 !== n ? n : e.id]) && void 0 !== t ? t : te : ne;
                    var n, t
                };
                i.getUserState = function() {
                    var e;
                    return null !== (e = this.indices[q]) && void 0 !== e ? e : te
                };
                i.query = function(e, n, t) {
                    var i, o = S.default.getCurrentUser();
                    if (null == o) return ee;
                    var l, a = this.getContextState(e),
                        u = this.getUserState(),
                        c = O.Z.getGuild(e.guild_id),
                        s = _.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e),
                        d = h.xM.getSetting(),
                        f = null != e.guild_id && null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0,
                        p = null != e.guild_id ? null === (i = A.ZP.getMember(e.guild_id, o.id)) || void 0 === i ? void 0 : i.roles : void 0;
                    C.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(this.indices).length
                    });
                    var m = !1,
                        v = !1 !== n.applicationCommands && (e.isPrivate() || s);
                    if (t.allowFetch && v) {
                        if (me(a) && pe(e)) {
                            null != e.guild_id ? N.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : N.aA({
                                type: "channel",
                                channelId: e.id
                            });
                            m = !0
                        }
                        var b = j.getCurrentConfig({
                            location: t.location
                        }).userAppsTreatment === r.ALLOWED;
                        if (me(u) && b) {
                            N.aA({
                                type: "user"
                            });
                            m = !0
                        }
                    }
                    var g = I.Z.getCurrentConfig({
                            location: t.location
                        }).newScoreLogic,
                        T = e.isPrivate(),
                        E = fe({
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
                            useNewScoreLogic: g,
                            contextState: a,
                            userState: u
                        });
                    E.loading = E.loading || m;
                    return E
                };
                return t
            }(f.ZP.Store);
            ae.displayName = "ApplicationCommandIndexStore";
            var ue = new ae(p.Z, {
                LOGOUT: le,
                CONNECTION_OPEN: le,
                USER_SETTINGS_PROTO_UPDATE: function() {
                    var e, n, t = null === (e = g.Z.settings.localization) || void 0 === e || null === (n = e.locale) || void 0 === n ? void 0 : n.value;
                    if (t !== ue.oldLocale) {
                        ue.indices = {};
                        ue.oldLocale = t
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    ie(e.target, {
                        fetchState: {
                            fetching: !0,
                            abort: e.abort
                        }
                    }, !0)
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var n, t = e.target,
                        r = e.index,
                        i = null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
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
                                    descriptor: B(H({}, (0, U.X0)(ve(f))), {
                                        permissions: null != f.permissions ? (0, v.tk)(be(f.permissions, i)) : void 0
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
                    var m, y = !0,
                        h = !1,
                        b = void 0;
                    try {
                        for (var g, A = (0, U.nG)(r.application_commands.map((function(e) {
                                return function(e, n) {
                                    var t, r, i, o, l, a = B(H({}, e), {
                                        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : "",
                                        dm_permission: void 0,
                                        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                                        options: null !== (l = null === (t = e.options) || void 0 === t ? void 0 : t.map(ye)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? be(e.permissions, n) : void 0
                                    });
                                    e.description !== e.description_default && (a.description_localized = e.description);
                                    e.name !== e.name_default && (a.name_localized = e.name);
                                    return a
                                }(e, i)
                            })), !0)[Symbol.iterator](); !(y = (g = A.next()).done); y = !0) {
                            var O, _ = g.value;
                            null === (O = l[_.applicationId]) || void 0 === O || O.commands.push(_)
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
                    var C = null !== (m = r.version) && void 0 !== m ? m : $;
                    ie(t, {
                        serverVersion: C,
                        result: {
                            sections: o,
                            version: C
                        },
                        fetchState: {
                            fetching: !1
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    ie(e.target, {
                        fetchState: {
                            fetching: !1,
                            retryAfter: Date.now() + 5e3
                        }
                    })
                },
                APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
                    var n = e.channelId,
                        t = e.guildId;
                    ie(null != t ? {
                        type: "guild",
                        guildId: t
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: J
                    })
                },
                CHANNEL_DELETE: function(e) {
                    oe({
                        type: "channel",
                        channelId: e.channel.id
                    })
                },
                GUILD_DELETE: function(e) {
                    oe({
                        type: "guild",
                        guildId: e.guild.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.version;
                    ie({
                        type: "guild",
                        guildId: n
                    }, {
                        serverVersion: null != t ? t : J
                    })
                }
            });
            const ce = ue;

            function se(e, n, t, r) {
                var o = de(e, n, t, r),
                    l = o.descriptors,
                    a = o.commands,
                    u = o.sectionedCommands,
                    c = o.loading,
                    s = (0, E.R)({
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
                            var r = w.ZP.getScoreWithoutLoadingLatest(t, e);
                            return w.ZP.getScoreWithoutLoadingLatest(t, n) - r
                        })).splice(0, Z.hz);
                    return 0 === i.length ? {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    } : {
                        descriptors: [T.Tm[Z.bi.FRECENCY]].concat(z(l)),
                        commands: i.concat(a),
                        sectionedCommands: [{
                            section: T.Tm[Z.bi.FRECENCY],
                            data: i
                        }].concat(z(u)),
                        loading: c
                    }
                }), [c, r.includeFrecency, s, e, n, a, l, u])
            }

            function de(e, n, t, o) {
                var l, a = I.Z.useExperiment({
                        location: o.location
                    }).newScoreLogic,
                    u = (0, f.cj)([S.default], (function() {
                        var e, n = S.default.getCurrentUser();
                        return {
                            id: null == n ? void 0 : n.id,
                            nsfwAllowed: null !== (e = null == n ? void 0 : n.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    c = u.id,
                    s = u.nsfwAllowed,
                    d = (0,
                        f.e7)([_.Z], (function() {
                        return _.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    p = (0, f.e7)([A.ZP], (function() {
                        var t;
                        if (null != n && null != c) return null === (t = A.ZP.getMember(e.guild_id, c)) || void 0 === t ? void 0 : t.roles
                    })),
                    m = (0, f.e7)([y.Z], (function() {
                        return null !== (l = y.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    v = !1 !== t.applicationCommands && (e.isPrivate() || d),
                    b = function(e, n) {
                        var t = G(i.useState(!1), 2),
                            r = t[0],
                            o = t[1],
                            l = (0, f.cj)([ue], (function() {
                                return ue.getContextState(e)
                            }));
                        i.useEffect((function() {
                            C.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == l.result,
                                size: Object.keys(ue.indices).length
                            })
                        }), [l]);
                        i.useEffect((function() {
                            if (!r && me(l) && n && pe(e)) {
                                null != e.guild_id ? N.aA({
                                    type: "guild",
                                    guildId: e.guild_id
                                }) : N.aA({
                                    type: "channel",
                                    channelId: e.id
                                });
                                o(!0)
                            }
                        }), [l, e, n, r]);
                        return l
                    }(e, v),
                    g = function(e, n) {
                        var t = G(i.useState(!1), 2),
                            o = t[0],
                            l = t[1],
                            a = (0, f.cj)([ue], (function() {
                                return ue.getUserState()
                            })),
                            u = j.useExperiment({
                                location: n
                            });
                        i.useEffect((function() {
                            if (!o && me(a) && e && u.userAppsTreatment === r.ALLOWED) {
                                N.aA({
                                    type: "user"
                                });
                                l(!0)
                            }
                        }), [a, e, u, o]);
                        return a
                    }(v, o.location),
                    O = h.xM.useSetting();
                return i.useMemo((function() {
                    return null == c ? ee : fe({
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
                        allowNsfw: s && (!e.isPrivate() && O || e.isPrivate() && e.nsfw),
                        sortByScore: o.sortByScore,
                        useNewScoreLogic: a,
                        contextState: b,
                        userState: g
                    })
                }), [e, n, c, p, m, t.commandType, t.text, t.builtIns, o.sortByScore, v, s, O, a, b, g])
            }

            function fe(e) {
                var n, t, r = e.context,
                    i = e.currentUserId,
                    o = e.currentUserRoleIds,
                    l = e.impersonationRoles,
                    a = e.contextState,
                    c = e.userState,
                    f = e.commandType,
                    p = e.text,
                    v = e.builtIns,
                    y = void 0 === v ? M.D.ALLOW : v,
                    h = e.allowApplicationCommands,
                    g = void 0 === h || h,
                    A = e.allowNsfw,
                    O = void 0 !== A && A,
                    S = e.sortByScore,
                    C = void 0 !== S && S,
                    N = e.useNewScoreLogic,
                    E = void 0 !== N && N,
                    I = null == p ? void 0 : p.toLowerCase(),
                    D = null == I ? void 0 : I.split(" "),
                    P = r.channel.guild_id,
                    j = null != l,
                    R = j ? Object.keys(l) : o,
                    F = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                u()(null != F, "permissions channel id is null");
                var W, k, Y = _.Z.computePermissions(r.channel, void 0, l),
                    X = null != P && !d.Z.has(Y, x.Plq.ADMINISTRATOR),
                    G = y === M.D.ONLY_TEXT,
                    V = y !== M.D.DENY ? (0, T.Kh)(f, !0, G) : [],
                    K = V.length > 0 ? [{
                        descriptor: T.Tm[Z.bi.BUILT_IN],
                        commands: V
                    }] : [],
                    Q = g ? z(null !== (W = null === (n = a.result) || void 0 === n ? void 0 : n.sections) && void 0 !== W ? W : []).concat(z(null !== (k = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== k ? k : [])) : [];
                Q.sort((function(e, n) {
                    return e.descriptor.name.localeCompare(n.descriptor.name)
                }));
                var q, J = z(Q).concat(z(K));
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
                                ue = ge(ae, F, P);
                                ce = Ae(ae, i, R, P, j)
                            }
                            var se = [],
                                de = !0,
                                fe = !1,
                                pe = void 0;
                            try {
                                for (var me, ve = le.commands[Symbol.iterator](); !(de = (me = ve.next()).done); de = !0) {
                                    var ye = me.value;
                                    if (!(ye.type !== f || ye.nsfw && !O || null != ye.predicate && !ye.predicate(r) || null != ye.contexts && !ye.contexts.includes(q))) {
                                        var he = ye.permissions;
                                        if (X) {
                                            var be = null,
                                                Oe = null;
                                            if (null != he) {
                                                be = ge(he, F, P);
                                                Oe = Ae(he, i, R, P, j)
                                            }
                                            if (!1 === be || !1 === Oe || !0 !== be && !1 === ue || !0 !== Oe && !1 === ce) continue;
                                            if (null == Oe && null == ce && null != ye.defaultMemberPermissions && (d.Z.equals(ye.defaultMemberPermissions, U.BO) || !d.Z.has(Y, ye.defaultMemberPermissions))) continue
                                        }
                                        var Se = void 0;
                                        if (C && null != I && null != D) {
                                            if (0 === (Se = E ? -_e(I, ye, le.descriptor) : (0, L.wm)(I, D, ye, le.descriptor))) continue
                                        } else Se = 0;
                                        se.push(B(H({}, ye), {
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
                        var t = w.ZP.getScoreWithoutLoadingLatest(r, e),
                            i = w.ZP.getScoreWithoutLoadingLatest(r, n);
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
                    loading: !0 === (null == a ? void 0 : a.fetchState.fetching) || !0 === (null == c ? void 0 : c.fetchState.fetching)
                }
            }

            function pe(e) {
                var n;
                return null != e.guild_id || e.type === x.d4z.DM && !0 === (null === (n = S.default.getUser(e.getRecipientId())) || void 0 === n ? void 0 : n.bot)
            }

            function me(e) {
                return !(! function(e) {
                    var n;
                    return (null === (n = e.result) || void 0 === n ? void 0 : n.version) !== e.serverVersion
                }(e) || e.fetchState.fetching) && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function ve(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name,
                    bot: e.bot
                }
            }

            function ye(e) {
                var n, t, r, i, o = B(H({}, e), {
                    choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(he),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                    options: null === (t = e.options) || void 0 === t ? void 0 : t.map(ye)
                });
                e.description !== e.description_default && (o.description_localized = e.description);
                e.name !== e.name_default && (o.name_localized = e.name);
                return o
            }

            function he(e) {
                var n, t = B(H({}, e), {
                    name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
                });
                e.name !== e.name_default && (t.name_localized = e.name);
                return t
            }

            function be(e, n) {
                var t = [];
                null != e.user && t.push({
                    type: D.Kw.USER,
                    id: n,
                    permission: e.user
                });
                if (null != e.channels) {
                    var r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var l, a = Object.entries(e.channels)[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var u = G(l.value, 2),
                                c = u[0],
                                s = u[1];
                            t.push({
                                type: D.Kw.CHANNEL,
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
                            var y = G(m.value, 2),
                                h = y[0],
                                b = y[1];
                            t.push({
                                type: D.Kw.ROLE,
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

            function ge(e, n, t) {
                var r = e[(0, v.rE)(n, D.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var i = e[(0, v.rE)((0, U.bD)(t), D.Kw.CHANNEL)];
                return null != i ? i.permission : null
            }

            function Ae(e, n, t, r, i) {
                if (!i) {
                    var o = e[(0, v.rE)(n, D.Kw.USER)];
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
                            p = e[(0, v.rE)(f, D.Kw.ROLE)];
                        if (null != p) {
                            if (p.permission) return !0;
                            l = !0
                        }
                        if (l) return !1;
                        var m = e[(0, v.rE)(r, D.Kw.ROLE)];
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
            var Oe;
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
            }(Oe || (Oe = {}));

            function _e(e, n, t) {
                var r, i, o = n.name.toLocaleLowerCase(),
                    a = n.name !== n.displayName ? n.displayName.toLocaleLowerCase() : null;
                if (e === o || e === a) return Oe.COMMAND_NAME_EXACT;
                if (o.startsWith(e) || (null == a ? void 0 : a.startsWith(e))) return Oe.COMMAND_NAME_STARTS_WITH;
                if (e.startsWith(o) || null != a && e.startsWith(a)) return Oe.STARTS_WITH_COMMAND_NAME;
                var u = null == t ? void 0 : t.name.toLocaleLowerCase();
                if (u === e) return Oe.SECTION_NAME_EXACT;
                if (null == u ? void 0 : u.startsWith(e)) return Oe.SECTION_NAME_STARTS_WITH;
                var c = null == t || null === (r = t.application) || void 0 === r || null === (i = r.tags) || void 0 === i ? void 0 : i.map((function(e) {
                    return e.toLocaleLowerCase()
                }));
                if (null == c ? void 0 : c.some((function(n) {
                        return n === e
                    }))) return Oe.TAG_EXACT;
                if (null == c ? void 0 : c.some((function(n) {
                        return n.startsWith(e)
                    }))) return Oe.TAG_STARTS_WITH;
                if (o.includes(e) || (null == a ? void 0 : a.includes(e))) return Oe.COMMAND_NAME_CONTAINS;
                if (null == u ? void 0 : u.includes(e)) return Oe.SECTION_NAME_CONTAINS;
                var s = n.description.toLocaleLowerCase();
                return (null == s ? void 0 : s.includes(e)) ? Oe.COMMAND_DESC_CONTAINS : null != o && l()(e, o) || null != a && l()(e, a) ? Oe.COMMAND_NAME_FUZZY : null != u && l()(e, u) ? Oe.SECTION_NAME_FUZZY : null != s && l()(e, s) ? Oe.COMMAND_DESC_FUZZY : Oe.NO_MATCH
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
                    D = o.useCallback((function() {
                        w(!1);
                        null == C || C()
                    }), [C]),
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
                            v(e, n, t[n])
                        }))
                    }
                    return e
                }({}, N), {
                    className: a()(d().wrapper, m, (n = {}, v(n, d().selectable, A), v(n, d().selected, A && l), n)),
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