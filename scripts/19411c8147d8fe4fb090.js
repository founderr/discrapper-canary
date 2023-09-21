"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58969], {
        358969: (n, e, t) => {
            t.d(e, {
                O2: () => Q,
                Eg: () => V,
                W3: () => z,
                ES: () => J,
                kF: () => X,
                eV: () => nn,
                ur: () => en,
                iM: () => tn,
                xw: () => rn,
                IN: () => un,
                Bs: () => on,
                nP: () => ln,
                AJ: () => an,
                MC: () => cn,
                Q: () => fn,
                mX: () => sn,
                r_: () => dn,
                J$: () => pn,
                ql: () => vn,
                Vm: () => gn,
                kn: () => mn,
                jR: () => yn,
                eZ: () => bn,
                XZ: () => On,
                ku: () => In,
                n2: () => _n,
                vP: () => Zn
            });
            var r = t(667294),
                u = t(496486),
                o = t.n(u),
                i = t(920883),
                l = t(842227),
                a = t(202351),
                c = t(744564),
                f = t(496916),
                s = t(245353),
                d = t(249139),
                h = t(804808),
                p = t(550131),
                v = t(18882),
                g = t(536945),
                m = t(879116),
                y = t(591684),
                b = t(217973),
                O = t(61209),
                I = t(984216),
                _ = t(567403),
                Z = t(682776),
                E = t(179913),
                T = t(840922),
                S = t(788169),
                P = t(473903),
                w = t(72580),
                M = t(372518),
                j = t(866893),
                A = t(99440),
                C = t(572615),
                N = t(955089),
                R = t(524600),
                U = t(474167),
                L = t(508778),
                k = t(2590),
                D = t(897196),
                G = t(379364);

            function F(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function Y(n, e, t, r, u, o, i) {
                try {
                    var l = n[o](i),
                        a = l.value
                } catch (n) {
                    t(n);
                    return
                }
                l.done ? e(a) : Promise.resolve(a).then(r, u)
            }

            function x(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, u) {
                        var o = n.apply(e, t);

                        function i(n) {
                            Y(o, r, u, i, l, "next", n)
                        }

                        function l(n) {
                            Y(o, r, u, i, l, "throw", n)
                        }
                        i(void 0)
                    }))
                }
            }

            function B(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function W(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }

            function q(n) {
                return function(n) {
                    if (Array.isArray(n)) return F(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return F(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var H = function(n, e) {
                    var t, r, u, o, i = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r),
                                            0) : r.next) && !(u = u.call(r, o[1])).done) return u;
                                    (r = 0, u) && (o = [2 & o[0], u.value]);
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
                                            r = o[1];
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
                                    o = e.call(n, i)
                                } catch (n) {
                                    o = [6, n];
                                    r = 0
                                } finally {
                                    t = u = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                Q = (0, d.Z)({
                    id: "2023-01_forums_non_community",
                    label: "Forum non-community",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function V(n) {
                return Q.getCurrentConfig({
                    guildId: n,
                    location: "553713_2"
                }).enabled
            }

            function z(n) {
                return function(n) {
                    var e = (0, a.e7)([_.Z], (function() {
                        return _.Z.getGuild(n)
                    }));
                    return Q.useExperiment({
                        guildId: n,
                        location: "553713_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled || Boolean((null == e ? void 0 : e.hasFeature(k.oNc.COMMUNITY)) || (null == e ? void 0 : e.hasFeature(k.oNc.INTERNAL_EMPLOYEE_ONLY)))
                }(n)
            }

            function J(n, e, t) {
                var u = (0, a.e7)([g.Z], (function() {
                    return g.Z.hasLoaded(n.guild_id)
                }));
                r.useEffect((function() {
                    if (u) {
                        var r = j.Z.getThreadIds(n.id, e, t),
                            o = N.Z.getThreadIdsMissingCounts(n.guild_id, r).filter((function(n) {
                                return (0, U.nU)(n, [E.ZP])
                            })).slice(0, 180).map((function(n) {
                                return {
                                    threadId: n,
                                    ackMessageId: E.ZP.getTrackedAckMessageId(n)
                                }
                            }));
                        o.length > 0 && c.Z.dispatch({
                            type: "REQUEST_FORUM_UNREADS",
                            guildId: n.guild_id,
                            channelId: n.id,
                            threads: o
                        })
                    }
                }), [n.id, n.guild_id, u, t, e])
            }

            function X(n) {
                return (0, a.e7)([g.Z, O.Z], (function() {
                    var e = o()(g.Z.getThreadsForParent(n.guild_id, n.parent_id)).keys().filter((function(n) {
                        var e;
                        return !0 === (null === (e = O.Z.getChannel(n)) || void 0 === e ? void 0 : e.hasFlag(D.zZ.PINNED))
                    })).head();
                    return O.Z.getChannel(e)
                }))
            }

            function $(n) {
                var e = null == n ? void 0 : n.parent_id;
                return (0,
                    a.cj)([O.Z], (function() {
                    var n, t = O.Z.getChannel(e);
                    return (null !== (n = null == t ? void 0 : t.availableTags) && void 0 !== n ? n : []).reduce((function(n, e) {
                        return W(function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                }))));
                                r.forEach((function(e) {
                                    B(n, e, t[e])
                                }))
                            }
                            return n
                        }({}, n), B({}, e.id, e))
                    }), {})
                }), [e])
            }
            var K = [];

            function nn(n) {
                var e = $(n);
                return r.useMemo((function() {
                    var t, r, u;
                    return null !== (u = null === (r = null == n || null === (t = n.appliedTags) || void 0 === t ? void 0 : t.map((function(n) {
                        return e[n]
                    }))) || void 0 === r ? void 0 : r.filter(w.lm)) && void 0 !== u ? u : K
                }), [e, null == n ? void 0 : n.appliedTags])
            }

            function en(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    t = nn(n);
                return r.useMemo((function() {
                    return [t.slice(0, e), Math.max(0, t.length - e)]
                }), [t, e])
            }

            function tn(n, e) {
                var t = (0,
                    a.Wu)([P.default], (function() {
                    return e.map((function(n) {
                        return P.default.getUser(n)
                    })).filter(w.lm)
                }));
                r.useEffect((function() {
                    t.forEach((function(e) {
                        I.Z.requestMember(n.guild_id, e.id)
                    }))
                }), []);
                return t
            }

            function rn(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L.R6.DURATION_AGO,
                    u = r.useMemo((function() {
                        return l.default.extractTimestamp(n.id)
                    }), [n.id]),
                    o = (0, b.Ok)(n),
                    a = r.useMemo((function() {
                        return (0, U.Uw)(e, t)
                    }), [e, t]);
                return r.useMemo((function() {
                    return e === i.z.CREATION_DATE ? (0, b.Ye)(u, a) : (0, b.Ye)(o, a)
                }), [o, e, u, a])
            }

            function un(n) {
                var e;
                return r.useMemo((function() {
                    return o().maxBy(null !== (e = null == n ? void 0 : n.reactions) && void 0 !== e ? e : [], (function(n) {
                        return Math.max(n.burst_count, n.count)
                    }))
                }), [null == n ? void 0 : n.reactions])
            }

            function on(n) {
                var e = null == n ? void 0 : n.defaultReactionEmoji,
                    t = (0, a.e7)([s.Z], (function() {
                        return null != (null == e ? void 0 : e.emojiId) ? s.Z.getUsableCustomEmojiById(e.emojiId) : null
                    }));
                return null == e ? null : null != e.emojiId && null != t ? {
                    id: e.emojiId,
                    name: t.name,
                    animated: t.animated
                } : null != e.emojiName ? {
                    id: e.emojiId,
                    name: e.emojiName,
                    animated: !1
                } : null
            }

            function ln(n) {
                var e, t = (0, a.e7)([y.Z], (function() {
                        return null !== (e = y.Z.getCount(n.id)) && void 0 !== e ? e : 0
                    })),
                    r = (0, m.lE)(t, n.id),
                    u = (0, a.e7)([E.ZP], (function() {
                        return (0, U.nU)(n.id, [E.ZP])
                    })),
                    o = (0, a.e7)([N.Z], (function() {
                        if (!u) return null;
                        var e = N.Z.getCount(n.id);
                        if (null != e && e > 0) {
                            var r = Math.min(e, t);
                            return r >= G.dg ? "".concat(G.dg, "+") : r
                        }
                        return "1+"
                    }));
                return {
                    messageCount: t,
                    isMaxMessageCount: null != t && "".concat(t) !== r,
                    messageCountText: r,
                    unreadCount: o
                }
            }

            function an(n) {
                var e, t = (0, a.e7)([P.default], (function() {
                        return P.default.getUser(n.ownerId)
                    })),
                    u = (0, a.e7)([C.Z], (function() {
                        var e;
                        return null === (e = C.Z.getMessage(n.id)) || void 0 === e ? void 0 : e.firstMessage
                    })),
                    o = (0, p.Sw)(null !== (e = null == u ? void 0 : u.author) && void 0 !== e ? e : t, n);
                r.useEffect((function() {
                    null != n.ownerId && I.Z.requestMember(n.guild_id, n.ownerId)
                }), [n.guild_id, n.ownerId]);
                return {
                    user: t,
                    author: o
                }
            }

            function cn(n) {
                var e, t, r = P.default.getUser(n.ownerId),
                    u = null === (e = C.Z.getMessage(n.id)) || void 0 === e ? void 0 : e.firstMessage;
                return {
                    user: r,
                    author: (0, p.ij)(null !== (t = null == u ? void 0 : u.author) && void 0 !== t ? t : r, n)
                }
            }

            function fn(n) {
                return (0, a.Wu)([S.Z, P.default, T.Z], (function() {
                    var e = P.default.getCurrentUser();
                    return o()(S.Z.getTypingUsers(n.id)).keys().filter((function(n) {
                        return n !== (null == e ? void 0 : e.id)
                    })).reject(T.Z.isBlocked).map((function(n) {
                        return P.default.getUser(n)
                    })).filter(w.lm).map((function(n) {
                        return n.id
                    })).value()
                }))
            }

            function sn(n) {
                var e = n.firstMessage,
                    t = n.formatInline,
                    u = void 0 === t || t,
                    o = n.noStyleAndInteraction,
                    i = void 0 === o || o,
                    l = r.useMemo((function() {
                        return null != (null == e ? void 0 : e.content) && "" !== e.content ? (0, h.ZP)(e, {
                            formatInline: u,
                            noStyleAndInteraction: i,
                            allowHeading: !0,
                            allowList: !0
                        }) : {
                            hasSpoilerEmbeds: !1,
                            content: null
                        }
                    }), [e, u, i]),
                    a = l.hasSpoilerEmbeds;
                return {
                    hasSpoilerEmbeds: a,
                    content: l.content,
                    firstMedia: (0, A.eL)(e, a),
                    firstMediaIsEmbed: (0, A.vg)(e, a)
                }
            }

            function dn(n) {
                return (0,
                    a.e7)([Z.Z], (function() {
                    return Z.Z.can(k.Plq.MANAGE_CHANNELS, n)
                }))
            }
            var hn = {
                isNew: !1,
                hasUnreads: !1
            };

            function pn(n) {
                return (0, a.cj)([_.Z, E.ZP], (function() {
                    var e, t = _.Z.getGuild(null !== (e = n.getGuildId()) && void 0 !== e ? e : "");
                    return null == t ? hn : (0, U.FS)(n, t, [E.ZP])
                }))
            }

            function vn(n) {
                return r.useMemo((function() {
                    return null == n || null == n.template ? "" : n.template.trim()
                }), [n])
            }

            function gn(n) {
                var e = (0, a.e7)([Z.Z], (function() {
                    return Z.Z.can(k.Plq.MANAGE_THREADS, n)
                }));
                return r.useMemo((function() {
                    var t, r = q(null !== (t = null == n ? void 0 : n.availableTags) && void 0 !== t ? t : []);
                    e || (r = r.filter((function(n) {
                        return !n.moderated
                    })));
                    return r
                }), [e, null == n ? void 0 : n.availableTags])
            }

            function mn(n, e) {
                var t = gn((0, a.e7)([O.Z], (function() {
                    return O.Z.getChannel(null == n ? void 0 : n.parent_id)
                }), [n]));
                return r.useMemo((function() {
                    return e.filter((function(n) {
                        return t.includes(n)
                    }))
                }), [e, t])
            }

            function yn(n) {
                return (0, a.e7)([Z.Z], (function() {
                    return Z.Z.can(k.Plq.READ_MESSAGE_HISTORY, n)
                }))
            }

            function bn(n) {
                return (0, a.e7)([Z.Z], (function() {
                    return Z.Z.can(k.Plq.READ_MESSAGE_HISTORY, n)
                }))
            }

            function On(n) {
                var e = n.channelId;
                return (0, a.cj)([R.Z], (function() {
                    return {
                        isSearchLoading: R.Z.getSearchLoading(e),
                        searchQuery: R.Z.getSearchQuery(e),
                        searchResults: R.Z.getSearchResults(e)
                    }
                }))
            }

            function In(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = On({
                        channelId: n.id
                    }),
                    o = u.isSearchLoading,
                    i = u.searchQuery,
                    l = yn(n),
                    a = r.useRef(null),
                    c = r.useRef(new Set);
                r.useEffect((function() {
                    if (null != i || null == a.current) {
                        if (null != i && 0 !== i.length && !t)
                            if (l) {
                                if ((a.current !== i || c.current !== e) && !o) {
                                    var r = setTimeout(x((function() {
                                        return H(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    a.current = i;
                                                    c.current = e;
                                                    t.label = 1;
                                                case 1:
                                                    t.trys.push([1, 3, , 4]);
                                                    return [4, M.Z.searchForumPosts(n.guild_id, n.id, i, e)];
                                                case 2:
                                                    t.sent();
                                                    return [3, 4];
                                                case 3:
                                                    t.sent();
                                                    return [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    })), 350);
                                    return function() {
                                        return clearTimeout(r)
                                    }
                                }
                            } else M.Z.clearForumSearch(n.id)
                    } else {
                        M.Z.clearForumSearch(n.id);
                        a.current = null
                    }
                }), [l, n.guild_id, n.id, t, o, i, e])
            }

            function _n(n, e) {
                return (0, a.e7)([v.Z, E.ZP, O.Z], (function() {
                    var t = O.Z.getChannel(e);
                    if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
                    var r = v.Z.getActiveJoinedUnreadThreadsForParent(n, e),
                        u = v.Z.getActiveUnjoinedUnreadThreadsForParent(n, e),
                        o = E.ZP.ackMessageId(e),
                        i = Object.values(r).filter((function(n) {
                            if (null == o) return !1;
                            var e = E.ZP.lastMessageId(n.channel.id);
                            return null != e && e > o
                        })),
                        l = Object.values(u).filter((function(n) {
                            if (null == o) return !1;
                            var e = E.ZP.lastMessageId(n.id);
                            return null != e && e > o
                        }));
                    return i.length + l.length
                }))
            }

            function Zn(n) {
                var e = n.channel,
                    t = n.sortOrder,
                    u = n.tagFilter,
                    o = n.shouldAutomaticallyAck,
                    i = (0, a.Wu)([j.Z], (function() {
                        return j.Z.getThreadIds(e.id, t, u)
                    })),
                    l = _n(e.guild_id, e.id),
                    c = (0, a.e7)([j.Z], (function() {
                        return o && (l > 0 || j.Z.getCanAckThreads())
                    }), [o, l]);
                r.useEffect((function() {
                    c && (0, f.U6)(e)
                }), [e, c]);
                return i
            }
        },
        955089: (n, e, t) => {
            t.d(e, {
                Z: () => b
            });
            var r = t(441143),
                u = t.n(r),
                o = t(202351),
                i = t(744564),
                l = t(536945),
                a = t(61209),
                c = t(179913);

            function f(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(n) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return s(n)
            }

            function d(n, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : e
            }

            function h(n, e) {
                h = Object.setPrototypeOf || function(n, e) {
                    n.__proto__ = e;
                    return n
                };
                return h(n, e)
            }
            var p = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function v(n) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = s(n);
                    if (e) {
                        var u = s(this).constructor;
                        t = Reflect.construct(r, arguments, u)
                    } else t = r.apply(this, arguments);
                    return d(this, t)
                }
            }
            var g = {},
                m = new Set;
            var y = function(n) {
                ! function(n, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    n.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(n, e)
                }(t, n);
                var e = v(t);

                function t() {
                    f(this, t);
                    return e.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(l.Z, a.Z, c.ZP)
                };
                r.getCount = function(n) {
                    return g[n]
                };
                r.getThreadIdsMissingCounts = function(n, e) {
                    u()(l.Z.hasLoaded(n), "must wait for THREAD_LIST_SYNC before calling this");
                    return e.filter((function(n) {
                        return !(n in g) && !m.has(n)
                    }))
                };
                r.__getLocalVars = function() {
                    return {
                        counts: g,
                        loadingThreadIds: m
                    }
                };
                return t
            }(o.ZP.Store);
            y.displayName = "ForumPostUnreadCountStore";
            const b = new y(i.Z, {
                CONNECTION_OPEN: function() {
                    g = {};
                    m = new Set
                },
                THREAD_CREATE: function(n) {
                    var e = n.channel;
                    if (!n.isNewlyCreated) return !1;
                    if (!l.Z.hasLoaded(e.guild_id)) return !1;
                    g[e.id] = 0
                },
                MESSAGE_CREATE: function(n) {
                    var e = n.channelId,
                        t = n.optimistic,
                        r = n.isPushNotification;
                    if (t || r) return !1;
                    if (!(e in g)) return !1;
                    g[e]++
                },
                FORUM_UNREADS: function(n) {
                    n.threads.forEach((function(n) {
                        null != n.count && (g[n.threadId] = n.count)
                    }))
                },
                MESSAGE_ACK: function(n) {
                    var e = n.channelId;
                    if (!(e in g)) {
                        var t = a.Z.getChannel(e),
                            r = a.Z.getChannel(null == t ? void 0 : t.parent_id);
                        if (!(null == r ? void 0 : r.isForumLikeChannel())) return !1
                    }
                    g[e] = c.ZP.getUnreadCount(e)
                },
                REQUEST_FORUM_UNREADS: function(n) {
                    n.threads.forEach((function(n) {
                        var e = n.threadId;
                        return m.add(e)
                    }))
                }
            })
        },
        788169: (n, e, t) => {
            t.d(e, {
                Z: () => P
            });
            var r = t(202351),
                u = t(281110),
                o = t(744564),
                i = t(664625),
                l = t(539273),
                a = t(2590),
                c = t(897196);

            function f(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function d(n) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return d(n)
            }

            function h(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        s(n, e, t[e])
                    }))
                }
                return n
            }

            function p(n, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : e
            }

            function v(n, e) {
                v = Object.setPrototypeOf || function(n, e) {
                    n.__proto__ = e;
                    return n
                };
                return v(n, e)
            }
            var g = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function m(n) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = d(n);
                    if (e) {
                        var u = d(this).constructor;
                        t = Reflect.construct(r, arguments, u)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var y, b = 1e4,
                O = {},
                I = Object.freeze({});

            function _(n) {
                var e;
                return null !== (e = O[n]) && void 0 !== e ? e : I
            }

            function Z(n) {
                var e = n.channelId,
                    t = n.userId,
                    r = h({}, _(e));
                clearTimeout(r[t]);
                r[t] = function(n, e) {
                    return setTimeout((function() {
                        o.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: n,
                            userId: e
                        })
                    }), b)
                }(e, t);
                O[e] = r
            }

            function E(n) {
                var e = n.channelId,
                    t = n.userId,
                    r = O[e];
                if (null == r || null == r[t]) return !1;
                var u = h({}, r);
                clearTimeout(u[t]);
                delete u[t];
                O[e] = u
            }

            function T() {
                O = {}
            }
            var S = function(n) {
                ! function(n, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    n.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && v(n, e)
                }(t, n);
                var e = m(t);

                function t() {
                    f(this, t);
                    return e.apply(this, arguments)
                }
                var r = t.prototype;
                r.getTypingUsers = function(n) {
                    return _(n)
                };
                r.isTyping = function(n, e) {
                    return null != _(n)[e]
                };
                r.__getLocalVars = function() {
                    return {
                        TYPING_TIMEOUT: b,
                        TYPING_DELAY_LOCAL: 1500,
                        MAX_TYPING_USERS: 5,
                        typingUsersByChannel: O,
                        localTypingDelay: y,
                        EMPTY_TYPING: I
                    }
                };
                return t
            }(r.ZP.Store);
            S.displayName = "TypingStore";
            const P = new S(o.Z, {
                TYPING_START: Z,
                TYPING_STOP: E,
                TYPING_START_LOCAL: function(n) {
                    var e = n.channelId,
                        t = i.default.getId();
                    if (null == t) return !1;
                    if (e === c.V) return !1;
                    if (null != y && y.channelId !== e) {
                        null != y.timeout && clearTimeout(y.timeout);
                        y = null
                    }
                    var r = Date.now();
                    if (null != y && (null != y.timeout || y.prevSend + 8e3 > r)) return !1;
                    var f = null == y || y.prevSend > r - 16e3 ? 1500 : 0,
                        s = setTimeout((function() {
                            if (null != y && y.channelId === e && t === i.default.getId() && null != y.timeout) {
                                y.timeout = null;
                                (function(n) {
                                    var e = _(n);
                                    return e === I ? 0 : Object.keys(e).length
                                })(e) > 5 || u.ZP.post({
                                    url: a.ANM.TYPING(e),
                                    oldFormErrors: !0
                                }).then((function(n) {
                                    if (200 === n.status) {
                                        var t, r, u = null !== (t = n.body.message_send_cooldown_ms) && void 0 !== t ? t : 0,
                                            i = null !== (r = n.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                        u > 0 && o.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: e,
                                            slowmodeType: l.S.SendMessage,
                                            cooldownMs: u
                                        });
                                        i > 0 && o.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: e,
                                            slowmodeType: l.S.CreateThread,
                                            cooldownMs: i
                                        })
                                    }
                                }))
                            }
                        }), f);
                    y = {
                        channelId: e,
                        timeout: s,
                        prevSend: r
                    };
                    return Z({
                        channelId: e,
                        userId: t
                    })
                },
                TYPING_STOP_LOCAL: function(n) {
                    var e = n.channelId,
                        t = i.default.getId();
                    if (null == t) return !1;
                    if (null != y && y.channelId === e && null != y.timeout) {
                        clearTimeout(y.timeout);
                        y = null;
                        return E({
                            channelId: e,
                            userId: t
                        })
                    }
                    return !1
                },
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                MESSAGE_CREATE: function(n) {
                    var e = n.channelId,
                        t = n.message.author;
                    n.optimistic && function(n) {
                        if (null == y || y.channelId !== n) return !1;
                        null != y.timeout && clearTimeout(y.timeout);
                        y = null
                    }(e);
                    return E({
                        channelId: e,
                        userId: t.id
                    })
                }
            })
        }
    }
]);