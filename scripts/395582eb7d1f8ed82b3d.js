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
                ZP: () => te,
                JK: () => re,
                v1: () => oe
            });
            var r, o = t(667294),
                i = t(824390),
                l = t.n(i),
                a = t(441143),
                u = t.n(a),
                c = t(496486),
                s = t.n(c),
                d = t(940060),
                f = t(202351),
                m = t(744564),
                p = t(73904),
                y = t(734394),
                v = t(861426),
                h = t(968449),
                A = t(917019),
                g = t(21372),
                b = t(567403),
                _ = t(682776),
                O = t(473903),
                C = t(652591),
                S = t(49621),
                T = t(169898),
                N = t(931184),
                E = t(485501),
                w = t(511841),
                I = t(977579),
                M = t(272200),
                P = t(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(r || (r = {}));
            const L = (0, P.B)({
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
                D = t(127624),
                x = t(2590);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Z(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function F(e) {
                F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return F(e)
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        U(e, n, t[n])
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

            function W(e, n) {
                return !n || "object" !== Y(n) && "function" != typeof n ? function(e) {
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

            function G(e, n) {
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

            function X(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || K(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Y = function(e) {
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
                    var t, r = F(e);
                    if (n) {
                        var o = F(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return W(this, t)
                }
            }
            var V = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                Q = Symbol("currentUser");

            function q() {
                ne.indices = {}
            }

            function J(e, n, t) {
                var r;
                switch (e.type) {
                    case "guild":
                        r = e.guildId;
                        break;
                    case "channel":
                        r = e.channelId;
                        break;
                    case "user":
                        r = Q
                }
                var o = ne.indices[r];
                if (null == o) {
                    if (!t) return;
                    o = {
                        stale: !0,
                        fetching: !1
                    }
                }
                ne.indices[r] = k({}, o, n)
            }

            function $(e) {
                J({
                    type: "channel",
                    channelId: e
                }, {
                    stale: !0
                })
            }
            var ee = function(e) {
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
                    Z(this, t);
                    var e;
                    (e = n.apply(this, arguments)).indices = {};
                    return e
                }
                var o = t.prototype;
                o.getContextState = function(e) {
                    return this.indices[null != e.guild_id ? e.guild_id : e.id]
                };
                o.getUserState = function() {
                    return this.indices[Q]
                };
                o.query = function(e, n, t) {
                    var o, i = this.getContextState(e),
                        l = this.getUserState(),
                        a = O.default.getCurrentUser();
                    if (null == a) return V;
                    var u, c = b.Z.getGuild(e.guild_id),
                        s = _.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e),
                        d = h.xM.getSetting(),
                        f = null != e.guild_id && null !== (u = v.Z.getViewingRoles(e.guild_id)) && void 0 !== u ? u : void 0,
                        m = null != e.guild_id ? null === (o = g.ZP.getMember(e.guild_id, a.id)) || void 0 === o ? void 0 : o.roles : void 0;
                    C.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i,
                        size: Object.keys(this.indices).length
                    });
                    if (t.allowFetch) {
                        null != i && (!i.stale || i.fetching) || n.onlyTextCommands || (null != e.guild_id ? S.aA({
                            type: "guild",
                            guildId: e.guild_id
                        }) : S.aA({
                            type: "channel",
                            channelId: e.id
                        }));
                        null != l && (!l.stale || l.fetching) || n.onlyTextCommands || L.getCurrentConfig({
                            location: t.location
                        }).userAppsTreatment !== r.ALLOWED || S.aA({
                            type: "user"
                        })
                    }
                    var p = e.isPrivate();
                    return ie({
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
                        allowNsfw: !0 === (null == a ? void 0 : a.nsfwAllowed) && (!p && d || p && e.nsfw),
                        sortByScore: t.sortByScore,
                        useNewScoreLogic: t.useNewScoreLogic,
                        contextState: i,
                        userState: l
                    })
                };
                return t
            }(f.ZP.Store);
            ee.displayName = "ApplicationCommandIndexStore";
            var ne = new ee(m.Z, {
                LOGOUT: q,
                CONNECTION_OPEN: q,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    J(e.target, {
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
                                m = {
                                    descriptor: {
                                        type: M.Qi.APPLICATION,
                                        id: f.id,
                                        name: f.name,
                                        icon: f.icon,
                                        application: le(f),
                                        permissions: null != f.permissions ? (0, y.tk)(ce(f.permissions, o)) : void 0
                                    },
                                    commands: []
                                };
                            i.push(m);
                            l[f.id] = m
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
                    var p = !0,
                        v = !1,
                        h = void 0;
                    try {
                        for (var A, g = (0, j.nG)(r.application_commands.map((function(e) {
                                return function(e, n) {
                                    var t, r, o, i, l, a = H(k({}, e), {
                                        description: null !== (o = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== o ? o : "",
                                        dm_permission: void 0,
                                        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                                        options: null !== (l = null === (t = e.options) || void 0 === t ? void 0 : t.map(ae)) && void 0 !== l ? l : [],
                                        permissions: null != e.permissions ? ce(e.permissions, n) : void 0
                                    });
                                    e.description !== e.description_default && (a.description_localized = e.description);
                                    e.name !== e.name_default && (a.name_localized = e.name);
                                    return a
                                }(e, o)
                            })), !0)[Symbol.iterator](); !(p = (A = g.next()).done); p = !0) {
                            var b, _ = A.value;
                            null === (b = l[_.applicationId]) || void 0 === b || b.commands.push(_)
                        }
                    } catch (e) {
                        v = !0;
                        h = e
                    } finally {
                        try {
                            p || null == g.return || g.return()
                        } finally {
                            if (v) throw h
                        }
                    }
                    J(t, {
                        result: {
                            sections: i
                        },
                        fetching: !1
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    J(e.target, {
                        stale: !1,
                        fetching: !1
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    ! function(e) {
                        J({
                            type: "guild",
                            guildId: e
                        }, {
                            stale: !0
                        })
                    }(e.guildId)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    $(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    $(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    $(e.channelId)
                }
            });
            const te = ne;

            function re(e, n, t, r) {
                var i = oe(e, n, t, r),
                    l = i.descriptors,
                    a = i.commands,
                    u = i.sectionedCommands,
                    c = i.loading,
                    s = (0, N.R)({
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
                            var r = E.ZP.getScoreWithoutLoadingLatest(t, e);
                            return E.ZP.getScoreWithoutLoadingLatest(t, n) - r
                        })).splice(0, D.hz);
                    return 0 === o.length ? {
                        descriptors: l,
                        commands: a,
                        sectionedCommands: u,
                        loading: c
                    } : {
                        descriptors: [T.Tm[D.bi.FRECENCY]].concat(X(l)),
                        commands: o.concat(a),
                        sectionedCommands: [{
                            section: T.Tm[D.bi.FRECENCY],
                            data: o
                        }].concat(X(u)),
                        loading: c
                    }
                }), [c, r.includeFrecency, s, e, n, a, l, u])
            }

            function oe(e, n, t, i) {
                var l, a = w.Z.useExperiment({
                        location: i.location
                    }).newScoreLogic,
                    u = (0, f.cj)([O.default], (function() {
                        var e, n = O.default.getCurrentUser();
                        return {
                            id: null == n ? void 0 : n.id,
                            nsfwAllowed: null !== (e = null == n ? void 0 : n.nsfwAllowed) && void 0 !== e && e
                        }
                    })),
                    c = u.id,
                    s = u.nsfwAllowed,
                    d = (0, f.e7)([_.Z], (function() {
                        return _.Z.can(x.Plq.USE_APPLICATION_COMMANDS, e)
                    })),
                    m = (0, f.e7)([g.ZP], (function() {
                        var t;
                        if (null != n && null != c) return null === (t = g.ZP.getMember(e.guild_id, c)) || void 0 === t ? void 0 : t.roles
                    })),
                    p = (0, f.e7)([v.Z], (function() {
                        return null !== (l = v.Z.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0
                    })),
                    y = function(e, n) {
                        var t, r = (0, f.cj)([ne], (function() {
                            return null !== (t = ne.getContextState(e)) && void 0 !== t ? t : {
                                stale: !0,
                                fetching: !1
                            }
                        }));
                        o.useEffect((function() {
                            C.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == r,
                                size: Object.keys(ne.indices).length
                            });
                            null != r && (!r.stale || r.fetching) || n.onlyTextCommands || (null != e.guild_id ? S.aA({
                                type: "guild",
                                guildId: e.guild_id
                            }) : S.aA({
                                type: "channel",
                                channelId: e.id
                            }))
                        }), [r, e, n.onlyTextCommands]);
                        return r
                    }(e, t),
                    A = function(e, n) {
                        var t, i = (0, f.cj)([ne], (function() {
                                return null !== (t = ne.getUserState()) && void 0 !== t ? t : {
                                    stale: !0,
                                    fetching: !1
                                }
                            })),
                            l = L.useExperiment({
                                location: n
                            });
                        o.useEffect((function() {
                            null != i && (!i.stale || i.fetching) || e.onlyTextCommands || l.userAppsTreatment !== r.ALLOWED || S.aA({
                                type: "user"
                            })
                        }), [i, e.onlyTextCommands, l]);
                        return i
                    }(t, i.location),
                    b = h.xM.useSetting();
                return o.useMemo((function() {
                    return null == c ? V : ie({
                        context: {
                            channel: e,
                            guild: n
                        },
                        currentUserId: c,
                        currentUserRoleIds: m,
                        impersonationRoles: p,
                        commandType: t.commandType,
                        text: t.text,
                        onlyBuiltIns: !e.isPrivate() && !d,
                        onlyTextCommands: t.onlyTextCommands,
                        allowNsfw: s && (!e.isPrivate() && b || e.isPrivate() && e.nsfw),
                        sortByScore: i.sortByScore,
                        useNewScoreLogic: a,
                        contextState: y,
                        userState: A
                    })
                }), [e, n, c, m, p, t.commandType, t.text, t.onlyTextCommands, i.sortByScore, d, s, b, a, y, A])
            }

            function ie(e) {
                var n, t, r = e.context,
                    o = e.currentUserId,
                    i = e.currentUserRoleIds,
                    l = e.impersonationRoles,
                    a = e.commandType,
                    c = e.text,
                    f = e.onlyBuiltIns,
                    m = e.onlyTextCommands,
                    y = e.allowNsfw,
                    v = e.sortByScore,
                    h = e.useNewScoreLogic,
                    g = e.contextState,
                    b = e.userState,
                    O = null == c ? void 0 : c.toLowerCase(),
                    C = null == O ? void 0 : O.split(" "),
                    S = r.channel.guild_id,
                    N = null != l,
                    w = N ? Object.keys(l) : i,
                    M = r.channel.isThread() ? r.channel.parent_id : r.channel.id;
                u()(null != M, "permissions channel id is null");
                var P, L, R = _.Z.computePermissions(r.channel, void 0, l),
                    Z = null != S && !d.Z.has(R, x.Plq.ADMINISTRATOR),
                    U = (0, T.Kh)(a, !0, m),
                    F = U.length > 0 ? [{
                        descriptor: T.Tm[D.bi.BUILT_IN],
                        commands: U
                    }] : [],
                    W = f ? [] : X(null !== (P = null == g || null === (n = g.result) || void 0 === n ? void 0 : n.sections) && void 0 !== P ? P : []).concat(X(null !== (L = null == b || null === (t = b.result) || void 0 === t ? void 0 : t.sections) && void 0 !== L ? L : []));
                W.sort((function(e, n) {
                    return e.descriptor.name.localeCompare(n.descriptor.name)
                }));
                var B, G = X(W).concat(X(F));
                B = r.channel.isPrivate() ? r.channel.type === x.d4z.DM ? p.u_.BOT_DM : p.u_.PRIVATE_CHANNEL : p.u_.GUILD;
                var Y, K = [],
                    z = !0,
                    V = !1,
                    Q = void 0;
                try {
                    for (var q, J = G[Symbol.iterator](); !(z = (q = J.next()).done); z = !0) {
                        var $ = q.value;
                        if (0 !== $.commands.length) {
                            var ee = $.descriptor.permissions,
                                ne = null,
                                te = null;
                            if (Z && null != ee) {
                                ne = se(ee, M, S);
                                te = de(ee, o, w, S, N)
                            }
                            var re = [],
                                oe = !0,
                                ie = !1,
                                le = void 0;
                            try {
                                for (var ae, ue = $.commands[Symbol.iterator](); !(oe = (ae = ue.next()).done); oe = !0) {
                                    var ce = ae.value;
                                    if (!(ce.type !== a || ce.nsfw && !y || null != ce.predicate && !ce.predicate(r) || null != ce.contexts && !ce.contexts.includes(B))) {
                                        var fe = ce.permissions;
                                        if (Z) {
                                            var pe = null,
                                                ye = null;
                                            if (null != fe) {
                                                pe = se(fe, M, S);
                                                ye = de(fe, o, w, S, N)
                                            }
                                            if (!1 === pe || !1 === ye || !0 !== pe && !1 === ne || !0 !== ye && !1 === te) continue;
                                            if (null == ye && null == te && null != ce.defaultMemberPermissions && (d.Z.equals(ce.defaultMemberPermissions, j.BO) || !d.Z.has(R, ce.defaultMemberPermissions))) continue
                                        }
                                        var ve = void 0;
                                        if (v && null != O && null != C) {
                                            if (0 === (ve = h ? -me(O, ce, $.descriptor) : (0, I.wm)(O, C, ce, $.descriptor))) continue
                                        } else ve = 0;
                                        re.push(H(k({}, ce), {
                                            score: ve
                                        }))
                                    }
                                }
                            } catch (e) {
                                ie = !0;
                                le = e
                            } finally {
                                try {
                                    oe || null == ue.return || ue.return()
                                } finally {
                                    if (ie) throw le
                                }
                            }
                            re.length > 0 && K.push({
                                section: $.descriptor,
                                data: re
                            })
                        }
                    }
                } catch (e) {
                    V = !0;
                    Q = e
                } finally {
                    try {
                        z || null == J.return || J.return()
                    } finally {
                        if (V) throw Q
                    }
                }
                if (v) {
                    A.DZ.loadIfNecessary();
                    Y = s().flatMap(K, (function(e) {
                        return e.data
                    }));
                    Y.sort((function(e, n) {
                        if (e.score !== n.score) return n.score - e.score;
                        var t = E.ZP.getScoreWithoutLoadingLatest(r, e),
                            o = E.ZP.getScoreWithoutLoadingLatest(r, n);
                        return t !== o ? o - t : e.displayName.localeCompare(n.displayName)
                    }))
                } else {
                    var he = !0,
                        Ae = !1,
                        ge = void 0;
                    try {
                        for (var be, _e = K[Symbol.iterator](); !(he = (be = _e.next()).done); he = !0) {
                            be.value.data.sort((function(e, n) {
                                return e.displayName.localeCompare(n.displayName)
                            }))
                        }
                    } catch (e) {
                        Ae = !0;
                        ge = e
                    } finally {
                        try {
                            he || null == _e.return || _e.return()
                        } finally {
                            if (Ae) throw ge
                        }
                    }
                    Y = s().flatMap(K, (function(e) {
                        return e.data
                    }))
                }
                return {
                    descriptors: K.map((function(e) {
                        return e.section
                    })),
                    commands: Y,
                    sectionedCommands: K,
                    loading: !0 === (null == g ? void 0 : g.fetching) && null == (null == g ? void 0 : g.result) || !0 === (null == b ? void 0 : b.fetching) && null == (null == b ? void 0 : b.result)
                }
            }

            function le(e) {
                return {
                    description: e.description,
                    icon: e.icon,
                    id: e.id,
                    name: e.name
                }
            }

            function ae(e) {
                var n, t, r, o, i = H(k({}, e), {
                    choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(ue),
                    description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
                    name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
                    options: null === (t = e.options) || void 0 === t ? void 0 : t.map(ae)
                });
                e.description !== e.description_default && (i.description_localized = e.description);
                e.name !== e.name_default && (i.name_localized = e.name);
                return i
            }

            function ue(e) {
                var n, t = H(k({}, e), {
                    name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
                });
                e.name !== e.name_default && (t.name_localized = e.name);
                return t
            }

            function ce(e, n) {
                var t = [];
                null != e.user && t.push({
                    type: M.Kw.USER,
                    id: n,
                    permission: e.user
                });
                if (null != e.channels) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = Object.entries(e.channels)[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var u = G(l.value, 2),
                                c = u[0],
                                s = u[1];
                            t.push({
                                type: M.Kw.CHANNEL,
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
                            var v = G(p.value, 2),
                                h = v[0],
                                A = v[1];
                            t.push({
                                type: M.Kw.ROLE,
                                id: h,
                                permission: A
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

            function se(e, n, t) {
                var r = e[(0, y.rE)(n, M.Kw.CHANNEL)];
                if (null != r) return r.permission;
                var o = e[(0, y.rE)((0, j.bD)(t), M.Kw.CHANNEL)];
                return null != o ? o.permission : null
            }

            function de(e, n, t, r, o) {
                if (!o) {
                    var i = e[(0, y.rE)(n, M.Kw.USER)];
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
                            m = e[(0, y.rE)(f, M.Kw.ROLE)];
                        if (null != m) {
                            if (m.permission) return !0;
                            l = !0
                        }
                        if (l) return !1;
                        var p = e[(0, y.rE)(r, M.Kw.ROLE)];
                        if (null != p) return p.permission
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
            var fe;
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
            }(fe || (fe = {}));

            function me(e, n, t) {
                var r, o, i = n.name.toLocaleLowerCase(),
                    a = n.name !== n.displayName ? n.displayName.toLocaleLowerCase() : null;
                if (e === i || e === a) return fe.COMMAND_NAME_EXACT;
                if (i.startsWith(e) || (null == a ? void 0 : a.startsWith(e))) return fe.COMMAND_NAME_STARTS_WITH;
                if (e.startsWith(i) || null != a && e.startsWith(a)) return fe.STARTS_WITH_COMMAND_NAME;
                var u = null == t ? void 0 : t.name.toLocaleLowerCase();
                if (u === e) return fe.SECTION_NAME_EXACT;
                if (null == u ? void 0 : u.startsWith(e)) return fe.SECTION_NAME_STARTS_WITH;
                var c = null == t || null === (r = t.application) || void 0 === r || null === (o = r.tags) || void 0 === o ? void 0 : o.map((function(e) {
                    return e.toLocaleLowerCase()
                }));
                if (null == c ? void 0 : c.some((function(n) {
                        return n === e
                    }))) return fe.TAG_EXACT;
                if (null == c ? void 0 : c.some((function(n) {
                        return n.startsWith(e)
                    }))) return fe.TAG_STARTS_WITH;
                if (i.includes(e) || (null == a ? void 0 : a.includes(e))) return fe.COMMAND_NAME_CONTAINS;
                if (null == u ? void 0 : u.includes(e)) return fe.SECTION_NAME_CONTAINS;
                var s = n.description.toLocaleLowerCase();
                return (null == s ? void 0 : s.includes(e)) ? fe.COMMAND_DESC_CONTAINS : null != i && l()(e, i) || null != a && l()(e, a) ? fe.COMMAND_NAME_FUZZY : null != u && l()(e, u) ? fe.SECTION_NAME_FUZZY : null != s && l()(e, s) ? fe.COMMAND_DESC_FUZZY : fe.NO_MATCH
            }
        },
        219217: (e, n, t) => {
            t.d(n, {
                o: () => A,
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

            function A(e, n, t) {
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
                    A = (0, u.JK)(e, v, n, t),
                    g = A.descriptors,
                    b = A.commands,
                    _ = A.sectionedCommands,
                    O = A.loading,
                    C = p(r.useState(null), 2),
                    S = C[0],
                    T = C[1],
                    N = r.useRef(!1);
                N.current = O;
                var E = r.useMemo((function() {
                    var e = [];
                    if (null != t.placeholderCount)
                        for (var r = 0; r < t.placeholderCount; r++) e.push(h(r, n.commandType));
                    return e
                }), [n.commandType, t.placeholderCount]);
                return r.useMemo((function() {
                    var e = {
                        loading: N,
                        commands: b,
                        activeSections: g,
                        commandsByActiveSection: _,
                        filteredSectionId: S,
                        hasMoreAfter: !1,
                        placeholders: O ? E : [],
                        sectionDescriptors: g,
                        filterSection: function(e) {
                            T(e)
                        },
                        scrollDown: f.dG4
                    };
                    if (null != S) {
                        var n = _.find((function(e) {
                            return e.section.id === S
                        }));
                        e.activeSections = null != n ? [n.section] : [];
                        e.commandsByActiveSection = null != n ? [n] : [];
                        e.commands = null != n ? n.data : []
                    }
                    if (O) {
                        var t = _[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: y(t.data).concat(y(E))
                        }].concat(y(_.slice(1)));
                        else {
                            var r = l.Tm[d.bi.BUILT_IN];
                            e.activeSections = [r];
                            e.commandsByActiveSection = [{
                                section: r,
                                data: E
                            }]
                        }
                        e.commands = y(b).concat(y(E))
                    }
                    return e
                }), [b, g, S, _, O, E])
            }

            function g(e, n, t) {
                if (!p(r.useState(a.Z.getCurrentConfig({
                        location: t.location
                    }).enabled), 1)[0]) {
                    var s, m;
                    return (0,
                        c.v1)(e, n.commandType, null !== (s = n.text) && void 0 !== s ? s : "", null !== (m = t.limit) && void 0 !== m ? m : 10)
                }
                var v = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(null == e ? void 0 : e.guild_id)
                    }), [e.guild_id]),
                    A = (0, u.v1)(e, v, n, t),
                    g = A.descriptors,
                    b = A.commands,
                    _ = A.loading,
                    O = r.useMemo((function() {
                        var e = [];
                        if (null != t.placeholderCount)
                            for (var r = 0; r < t.placeholderCount; r++) e.push(h(r, n.commandType));
                        return e
                    }), [n.commandType, t.placeholderCount]);
                return r.useMemo((function() {
                    return {
                        commands: _ ? y(b).concat(y(O)) : b,
                        sections: _ && 0 === g.length ? [l.Tm[d.bi.BUILT_IN]] : g,
                        scrollDown: f.dG4
                    }
                }), [_, b, g, O])
            }
        },
        242922: (e, n, t) => {
            t.d(n, {
                hV: () => P,
                ky: () => I,
                Q1: () => M
            });
            t(73904), t(682776), t(102921);
            var r = t(272200),
                o = t(785893),
                i = t(667294),
                l = t(294184),
                a = t.n(l),
                u = t(211482),
                c = t(775173),
                s = t(141636),
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

            function A(e, n) {
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
                    b = void 0 !== g && g,
                    _ = e.onFocus,
                    O = e.onBlur,
                    C = e.onMouseOver,
                    S = e.onMouseLeave,
                    T = h(e, ["section", "isSelected", "width", "height", "className", "selectable", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]),
                    N = A(i.useState(!1), 2),
                    E = N[0],
                    w = N[1],
                    I = i.useCallback((function() {
                        w(!0);
                        null == _ || _()
                    }), [_]),
                    M = i.useCallback((function() {
                        w(!1);
                        null == O || O()
                    }), [O]),
                    P = i.useCallback((function() {
                        w(!0);
                        null == C || C()
                    }), [C]),
                    L = i.useCallback((function() {
                        w(!1);
                        null == S || S()
                    }), [S]),
                    j = i.useMemo((function() {
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
                }({}, T), {
                    className: a()(d().wrapper, p, (n = {}, y(n, d().selectable, b), y(n, d().selected, b && l), n)),
                    onFocus: I,
                    onBlur: M,
                    onMouseOver: P,
                    onMouseLeave: L,
                    children: (0, o.jsx)(u.ZP, {
                        className: d().mask,
                        mask: b && (l || E) ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
                        width: s,
                        height: f,
                        children: (0, o.jsx)("img", {
                            alt: "",
                            className: d().icon,
                            style: {
                                width: s,
                                height: f
                            },
                            src: j
                        })
                    })
                }))
            }
            var b = t(223175),
                _ = t(457997),
                O = t(127624),
                C = t(497656),
                S = t.n(C);

            function T(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function N(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        T(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
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

            function w(e) {
                var n, t = e.section,
                    r = e.className,
                    i = e.width,
                    l = e.height,
                    u = e.padding,
                    c = e.isSelected,
                    s = e.selectable,
                    d = void 0 !== s && s,
                    f = E(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]),
                    m = function(e) {
                        switch (e.id) {
                            case O.bi.BUILT_IN:
                                return b.Z;
                            case O.bi.FRECENCY:
                                return _.Z;
                            default:
                                return
                        }
                    }(t);
                return (0, o.jsx)("div", {
                    className: a()(S().wrapper, r, (n = {}, T(n, S().selectable, d), T(n, S().selected, d && c), n)),
                    style: {
                        width: i,
                        height: l,
                        padding: null != u ? u : 0
                    },
                    children: null != m ? (0, o.jsx)(m, N({
                        className: S().icon,
                        width: i,
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

            function P(e, n) {
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
                var l = n.split(" ", O.Vd + 1);
                if (l.length > O.Vd) {
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