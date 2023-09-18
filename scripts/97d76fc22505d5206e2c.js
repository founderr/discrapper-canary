"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54602], {
        265494: (t, e, n) => {
            n.d(e, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2022-12_forum_activity",
                label: "Increased activity view for Forums, per user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        419951: (t, e, n) => {
            n.d(e, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "guild",
                id: "2023-01_forums_activity_2_guild",
                label: "Increased activity view for Forums, per guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        914716: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            n(701456);
            var r = n(744564);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var a = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.initializedCount = 0;
                    this.actions = {};
                    this.stores = new Map
                }
                var e = t.prototype;
                e.initialize = function() {
                    this.initializedCount++;
                    if (!(this.initializedCount > 1)) {
                        this._initialize();
                        Object.entries(this.actions).forEach((function(t) {
                            var e = o(t, 2),
                                n = e[0],
                                i = e[1];
                            r.Z.subscribe(n, "function" == typeof i ? i : i.callback)
                        }));
                        this.stores.forEach((function(t, e) {
                            e.addChangeListener(t);
                            t()
                        }))
                    }
                };
                e.terminate = function(t) {
                    if (!(this.initializedCount <= 0)) {
                        t ? this.initializedCount = 0 : this.initializedCount--;
                        if (0 === this.initializedCount) {
                            this._terminate();
                            Object.entries(this.actions).forEach((function(t) {
                                var e = o(t, 2),
                                    n = e[0],
                                    i = e[1];
                                r.Z.unsubscribe(n, "function" == typeof i ? i : i.callback)
                            }))
                        }
                    }
                };
                e._initialize = function() {};
                e._terminate = function() {};
                return t
            }()
        },
        168024: (t, e, n) => {
            n.d(e, {
                dj: () => u,
                KV: () => s,
                ZP: () => c
            });
            var r = n(496486),
                i = n.n(r),
                o = n(5387),
                a = n.n(o);
            var u = 100,
                s = [
                    [0, u - 1]
                ];

            function l(t) {
                var e = {};
                t.forEach((function(t, n) {
                    e[n] = t
                }));
                return e
            }
            var c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this._subscriptions = {};
                    this._onChange = e
                }
                var e = t.prototype;
                e.reset = function() {
                    this._subscriptions = {}
                };
                e.get = function(t) {
                    return l(this._get(t))
                };
                e._get = function(t) {
                    var e;
                    return null !== (e = this._subscriptions[t]) && void 0 !== e ? e : new(a())({
                        max: 5
                    })
                };
                e.clear = function(t) {
                    delete this._subscriptions[t]
                };
                e.subscribe = function(t, e, n) {
                    var r = this._get(t);
                    if (i().isEqual(r.get(e), n)) return !1;
                    r.set(e, n);
                    this._subscriptions[t] = r;
                    this._onChange(t, l(r));
                    return !0
                };
                return t
            }()
        },
        805907: (t, e, n) => {
            n.d(e, {
                K: () => c
            });
            var r = n(784426),
                i = n(666613),
                o = n(591684),
                a = n(382060),
                u = n(682776),
                s = n(102921),
                l = n(2590);

            function c(t) {
                var e, n, c, d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == t || !a.Ec.has(t.type)) return null;
                var f, h, _ = d ? (0, r.At)() : void 0;
                return {
                    location: _,
                    thread_approximate_member_count: i.Z.getMemberCount(t.id),
                    thread_approximate_message_count: o.Z.getCount(t.id),
                    thread_archived: !0 === (null === (e = t.threadMetadata) || void 0 === e ? void 0 : e.archived),
                    thread_locked: null !== (f = null === (n = t.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== f && f,
                    thread_auto_archive_duration_minutes: null !== (h = null === (c = t.threadMetadata) || void 0 === c ? void 0 : c.autoArchiveDuration) && void 0 !== h ? h : 0,
                    thread_approximate_creation_date: s.Z.extractTimestamp(t.id),
                    can_send_message: u.Z.can(l.Plq.SEND_MESSAGES, t),
                    parent_channel_type: t.parentChannelThreadType
                }
            }
        },
        779354: (t, e, n) => {
            n.d(e, {
                r: () => o
            });
            var r = n(265494),
                i = n(419951);

            function o(t) {
                var e = i.Z.getCurrentConfig({
                        guildId: null != t ? t : "",
                        location: "3fde52_1"
                    }),
                    n = r.Z.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return Boolean(e.enabled || n.enabled)
            }
        },
        572615: (t, e, n) => {
            n.d(e, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564),
                o = n(649536),
                a = n(512291),
                u = n(473903);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function f(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function h(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function _(t, e) {
                _ = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return _(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(t);
                    if (e) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = {};

            function g(t) {
                var e = t.threads,
                    n = t.firstMessages;
                if (null == n) return !1;
                var r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        v[s.id] = {
                            loaded: !0,
                            firstMessage: null
                        }
                    }
                } catch (t) {
                    i = !0;
                    o = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                var l = !0,
                    c = !1,
                    d = void 0;
                try {
                    for (var f, h = n[Symbol.iterator](); !(l = (f = h.next()).done); l = !0) {
                        var _ = f.value;
                        y(_.channel_id, _)
                    }
                } catch (t) {
                    c = !0;
                    d = t
                } finally {
                    try {
                        l || null == h.return || h.return()
                    } finally {
                        if (c) throw d
                    }
                }
            }

            function y(t, e) {
                var n = null == e ? null : (0, o.e5)(e);
                v[t] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function E(t) {
                var e = t.type,
                    n = t.channelId,
                    r = t.messageId,
                    i = t.userId,
                    o = t.emoji,
                    a = t.optimistic,
                    s = t.burst,
                    l = v[n];
                if (null == l || null == l.firstMessage) return !1;
                if (r !== l.firstMessage.id) return !1;
                var c = u.default.getCurrentUser(),
                    f = null != c && c.id === i;
                if (a && !f) return !1;
                v[n] = d({}, l);
                if ("MESSAGE_REACTION_ADD" === e) {
                    var h = t.colors;
                    v[n].firstMessage = l.firstMessage.addReaction(o, f, i, h, s)
                } else v[n].firstMessage = l.firstMessage.removeReaction(o, f, s)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && _(t, e)
                }(n, t);
                var e = p(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, u.default)
                };
                r.isLoading = function(t) {
                    var e;
                    return !0 !== (null === (e = v[t]) || void 0 === e ? void 0 : e.loaded)
                };
                r.getMessage = function(t) {
                    t in v || (v[t] = {
                        loaded: !1,
                        firstMessage: null
                    });
                    return v[t]
                };
                r.__getLocalVars = function() {
                    return {
                        state: v
                    }
                };
                return n
            }(r.ZP.Store);
            m.displayName = "ForumPostMessagesStore";
            const O = new m(i.Z, {
                CONNECTION_OPEN: function() {
                    v = {}
                },
                MESSAGE_CREATE: function(t) {
                    if (t.isPushNotification) return !1;
                    if (t.message.id !== t.message.channel_id) return !1;
                    y(t.message.channel_id, t.message)
                },
                MESSAGE_UPDATE: function(t) {
                    if (t.message.id !== t.message.channel_id) return !1;
                    var e = v[t.message.id];
                    if (null == e) return !1;
                    if (null == e.firstMessage) return !1;
                    v[t.message.id] = f(d({}, e), {
                        firstMessage: (0, o.wi)(e.firstMessage, t.message)
                    })
                },
                MESSAGE_DELETE: function(t) {
                    if (t.id !== t.channelId) return !1;
                    v[t.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(t) {
                    if (null != v[t.channel.id]) return !1;
                    if (!a.Z.isSubscribedToThreads(t.channel.guild_id)) return !1;
                    v[t.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: E,
                MESSAGE_REACTION_REMOVE: E,
                MESSAGE_REACTION_REMOVE_ALL: function(t) {
                    var e = t.channelId,
                        n = t.messageId,
                        r = v[e];
                    if (null == r || null == r.firstMessage) return !1;
                    if (n !== r.firstMessage.id) return !1;
                    v[e] = f(d({}, r), {
                        firstMessage: r.firstMessage.set("reactions", [])
                    })
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(t) {
                    var e = t.channelId,
                        n = t.messageId,
                        r = t.emoji,
                        i = v[e];
                    if (null == i || null == i.firstMessage) return !1;
                    if (n !== i.firstMessage.id) return !1;
                    v[e] = f(d({}, i), {
                        firstMessage: i.firstMessage.removeReactionsForEmoji(r)
                    })
                },
                MESSAGE_REACTION_ADD_MANY: function(t) {
                    var e = t.channelId,
                        n = t.messageId,
                        r = t.reactions,
                        i = v[e];
                    if (null == i || null == i.firstMessage) return !1;
                    if (n !== i.firstMessage.id) return !1;
                    var o = u.default.getCurrentUser(),
                        a = i.firstMessage.addReactionBatch(r, null == o ? void 0 : o.id);
                    v[e] = f(d({}, i), {
                        firstMessage: a
                    })
                },
                LOAD_FORUM_POSTS: function(t) {
                    var e = t.threads;
                    for (var n in e) y(n, e[n].first_message)
                },
                LOAD_THREADS_SUCCESS: g,
                LOAD_ARCHIVED_THREADS_SUCCESS: g,
                LOAD_MESSAGES_SUCCESS: function(t) {
                    var e = t.channelId,
                        n = t.messages,
                        r = n[n.length - 1];
                    null != r && r.id === e && (v[e] = {
                        loaded: !0,
                        firstMessage: (0, o.e5)(r)
                    })
                }
            })
        },
        524600: (t, e, n) => {
            n.d(e, {
                Z: () => y
            });
            var r = n(202351),
                i = n(744564),
                o = n(61209);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return s(t)
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        u(t, e, n[e])
                    }))
                }
                return t
            }

            function c(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function d(t, e) {
                return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var h = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(t);
                    if (e) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var b = {};

            function p(t) {
                var e = o.Z.getChannel(t);
                return !(null == e || !e.isForumLikeChannel())
            }

            function v(t) {
                var e, n = null !== (e = b[t]) && void 0 !== e ? e : {
                    query: null,
                    loading: !1,
                    results: null
                };
                b[t] = n;
                return n
            }
            var g = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = _(n);

                function n() {
                    a(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSearchQuery = function(t) {
                    var e = b[t];
                    return null == e ? void 0 : e.query
                };
                r.getSearchLoading = function(t) {
                    var e, n = b[t];
                    return null !== (e = null == n ? void 0 : n.loading) && void 0 !== e && e
                };
                r.getSearchResults = function(t) {
                    var e = b[t];
                    return null == e ? void 0 : e.results
                };
                r.getHasSearchResults = function(t) {
                    var e = b[t];
                    return null != (null == e ? void 0 : e.results) && e.results.length > 0
                };
                r.__getLocalVars = function() {
                    return {
                        searchStates: b
                    }
                };
                return n
            }(r.ZP.Store);
            g.displayName = "ForumSearchStore";
            const y = new g(i.Z, {
                CONNECTION_OPEN: function() {
                    b = {}
                },
                THREAD_DELETE: function(t) {
                    var e, n = t.channel,
                        r = n.parent_id;
                    if (null == r) return !1;
                    var i = b[r];
                    if (null == i) return !1;
                    b[r] = c(l({}, i), {
                        results: null === (e = i.results) || void 0 === e ? void 0 : e.filter((function(t) {
                            return n.id !== t
                        }))
                    })
                },
                CHANNEL_DELETE: function(t) {
                    var e = t.channel;
                    return delete b[e.id]
                },
                FORUM_SEARCH_QUERY_UPDATED: function(t) {
                    var e = t.channelId,
                        n = t.query;
                    if (!p(e)) return !1;
                    var r = v(e);
                    b[e] = c(l({}, r), {
                        query: n,
                        results: null
                    })
                },
                FORUM_SEARCH_START: function(t) {
                    var e = t.channelId;
                    if (!p(e)) return !1;
                    var n = v(e);
                    b[e] = c(l({}, n), {
                        loading: !0
                    })
                },
                FORUM_SEARCH_SUCCESS: function(t) {
                    var e = t.channelId,
                        n = t.threadIds;
                    if (!p(e)) return !1;
                    var r = v(e);
                    b[e] = c(l({}, r), {
                        loading: !1,
                        results: n
                    })
                },
                FORUM_SEARCH_FAILURE: function(t) {
                    var e = t.channelId;
                    if (!p(e)) return !1;
                    var n = v(e);
                    b[e] = c(l({}, n), {
                        loading: !1,
                        results: []
                    })
                },
                FORUM_SEARCH_CLEAR: function(t) {
                    var e = t.channelId;
                    return !!p(e) && delete b[e]
                }
            })
        },
        474167: (t, e, n) => {
            n.d(e, {
                FS: () => f,
                nC: () => h,
                Uw: () => b,
                nU: () => p,
                yv: () => v
            });
            var r = n(920883),
                i = n(61209),
                o = n(567403),
                a = n(717091),
                u = n(508778),
                s = n(897196),
                l = n(473708);

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                var n = d(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP], 1),
                    r = n[0];
                return {
                    isNew: !t.isArchivedThread() && r.isNewForumThread(t.id, t.parent_id, e),
                    hasUnreads: !t.isArchivedThread() && r.isForumPostUnread(t.id)
                }
            }

            function h(t) {
                var e = d(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, o.Z, a.ZP], 3),
                    n = e[0],
                    r = e[1],
                    u = e[2],
                    s = n.getChannel(t);
                if (null == s) return null;
                var l = r.getGuild(s.guild_id);
                return null == l ? null : f(s, l, [u])
            }
            var _ = function() {
                return {
                    minutes: l.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                    hours: l.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                    days: l.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                    month: l.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
                }
            };

            function b(t, e) {
                if (e === u.R6.POSTED_DURATION_AGO && t === r.z.CREATION_DATE) return _
            }

            function p(t, e) {
                var n = d(e, 1)[0],
                    r = n.hasTrackedUnread(t),
                    i = n.hasOpenedThread(t),
                    o = null != n.getTrackedAckMessageId(t);
                return r && i && o
            }

            function v(t) {
                var e;
                return !0 === (null === (e = i.Z.getChannel(t)) || void 0 === e ? void 0 : e.hasFlag(s.zZ.PINNED))
            }
        },
        583507: (t, e, n) => {
            n.d(e, {
                Z: () => u
            });
            var r = n(797186),
                i = n(61209),
                o = n(779354),
                a = n(883069);
            const u = new function t() {
                var e = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                this.filterTagIds = null;
                this.sortOrder = null;
                this.layout = null;
                this.setFilterTagIds = function(t) {
                    e.filterTagIds = t
                };
                this.setSortOrder = function(t) {
                    e.sortOrder = t
                };
                this.setLayout = function(t) {
                    e.layout = t
                };
                this.getFilterTagIdsAnalytics = function() {
                    return null != e.filterTagIds ? Array.from(e.filterTagIds) : []
                };
                this.getSortOrderAnalytics = function(t) {
                    var n, r;
                    return null !== (r = e.sortOrder) && void 0 !== r ? r : null === (n = i.Z.getChannel(t)) || void 0 === n ? void 0 : n.getDefaultSortOrder()
                };
                this.getLayoutAnalytics = function(t) {
                    var n, u = i.Z.getChannel(t),
                        s = null !== (n = e.layout) && void 0 !== n ? n : null == u ? void 0 : u.getDefaultLayout();
                    return (0, o.r)(null == u ? void 0 : u.guild_id) && s === r.X.LIST ? a.R : s
                }
            }
        },
        782912: (t, e, n) => {
            n.d(e, {
                Z: () => _
            });
            var r = n(914716),
                i = n(536945),
                o = n(664625),
                a = n(61209),
                u = n(474167);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function c(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            const _ = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = h(n);

                function n() {
                    s(this, n);
                    var t;
                    (t = e.apply(this, arguments)).readStateSnapshots = {};
                    t.actions = {
                        CHANNEL_SELECT: function(e) {
                            return t.handleChannelSelect(e)
                        },
                        THREAD_CREATE: function(e) {
                            return t.handleThreadCreate(e)
                        }
                    };
                    t.handleChannelSelect = function(e) {
                        var n = e.channelId;
                        if (null != n) {
                            var r = a.Z.getChannel(n);
                            if (null != r && r.isForumLikeChannel()) {
                                t.readStateSnapshots = {};
                                t.processForumChannel(r.guild_id, n)
                            }
                        }
                    };
                    t.processForumChannel = function(e, n) {
                        var r = i.Z.getThreadsForParent(e, n);
                        Object.keys(r).forEach((function(e) {
                            var n = (0, u.nC)(e);
                            null != n && (t.readStateSnapshots[e] = n)
                        }))
                    };
                    t.getReadStateSnapshotAnalytics = function(e) {
                        return t.readStateSnapshots[e]
                    };
                    return t
                }
                var r = n.prototype;
                r.handleThreadCreate = function(t) {
                    var e = t.channel;
                    if (e.isForumPost()) {
                        var n = e.ownerId === o.default.getId();
                        this.readStateSnapshots[e.id] = {
                            isNew: !n,
                            hasUnreads: !n
                        }
                    }
                };
                r.__getLocalVars = function() {
                    return {}
                };
                return n
            }(r.Z))
        },
        854602: (t, e, n) => {
            n.d(e, {
                qs: () => y,
                Js: () => E,
                zI: () => m,
                e7: () => O,
                P_: () => S,
                nH: () => I,
                Vn: () => C,
                Oq: () => T,
                Je: () => A,
                ab: () => M,
                Hr: () => P,
                B5: () => w,
                KR: () => R,
                Do: () => D,
                B: () => N,
                e5: () => L,
                ws: () => Z,
                xI: () => j,
                GX: () => U,
                N3: () => F,
                MO: () => x,
                lN: () => H,
                qz: () => k,
                HR: () => G
            });
            var r = n(797186),
                i = n(396043),
                o = n(805907),
                a = n(61209),
                u = n(284610),
                s = n(652591),
                l = n(120415),
                c = n(779354),
                d = n(572615),
                f = n(524600),
                h = n(883069),
                _ = n(734901),
                b = n(2590);

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        p(t, e, n[e])
                    }))
                }
                return t
            }

            function g(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function y(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.sessionId,
                    o = t.postIds,
                    a = t.additionalTimes;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_SEEN_BATCH, g(v({}, (0, _.xl)({
                    channelId: n,
                    sessionId: r
                })), {
                    guild_id: e,
                    channel_id: n,
                    post_ids: o,
                    additional_seen_time_millis: a
                }))
            }

            function E(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.numSearchResults;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_SEARCHED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n,
                    num_search_results: r
                }))
            }

            function m(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_SEARCH_CLEARED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n
                }))
            }

            function O(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.tagId,
                    o = t.filterTagIds,
                    a = t.added,
                    u = t.location;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n,
                    tag_id: r,
                    filter_tag_ids: o,
                    added: a,
                    location: u
                }))
            }

            function S(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n
                }))
            }

            function I(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n
                }))
            }

            function C(t) {
                var e, n, r, o, s = t.guildId,
                    l = t.channelId,
                    c = a.Z.getChannel(l);
                if (null != c) {
                    var d = u.Z.getThreadSettings(l),
                        f = null === (e = c.template) || void 0 === e ? void 0 : e.trim(),
                        h = u.Z.getDraft(l, u.d.FirstThreadMessage),
                        p = null == h || 0 === h.length || (null == h ? void 0 : h.trim()) === f,
                        y = null == (null == d ? void 0 : d.appliedTags) || 0 === (null == d || null === (n = d.appliedTags) || void 0 === n ? void 0 : n.size),
                        E = null == (null == d ? void 0 : d.name) || 0 === (null === (o = null == d || null === (r = d.name) || void 0 === r ? void 0 : r.trim()) || void 0 === o ? void 0 : o.length);
                    p && y && E || i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, g(v({}, (0, _.xl)({
                        channelId: l
                    })), {
                        guild_id: s,
                        channel_id: l,
                        applied_tag_ids: (0, _.q8)(l),
                        num_attachments: (0, _.RR)(l)
                    }))
                }
            }

            function T(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n
                }))
            }

            function A(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.postId,
                    o = function() {
                        i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_POST_CREATED, g(v({}, (0,
                            _.n4)({
                            channelId: r
                        })), {
                            guild_id: e,
                            channel_id: n
                        }))
                    };
                d.Z.isLoading(r) ? d.Z.addConditionalChangeListener((function() {
                    if (d.Z.isLoading(r)) return !0;
                    o();
                    return !1
                })) : o()
            }

            function M(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_SCROLLED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n
                }))
            }

            function P(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.numArchivedThreads,
                    o = t.hasMoreThreads,
                    u = t.filterTagIds,
                    l = t.sortOrder;
                s.default.track(b.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED, g(v({}, (0, i.hH)(e), (0, i.v_)(a.Z.getChannel(n)), (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n,
                    num_archived_threads: r,
                    num_active_threads: (0, _.bE)(e, n),
                    has_more_threads: o,
                    filter_tag_ids: u,
                    sort_order: l
                }))
            }

            function w(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.postId,
                    o = t.location;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_POST_CLICKED, g(v({}, (0, _.n4)({
                    channelId: r
                })), {
                    guild_id: e,
                    channel_id: n,
                    is_search_result: null != f.Z.getSearchResults(n),
                    location: o
                }))
            }

            function R(t) {
                var e = t.guildId,
                    n = t.channelId,
                    r = t.sortOrder;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_POSTS_SORTED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n,
                    sort_type: (0, _.t$)(r),
                    sort_order: r,
                    forum_channel_sort_order: r
                }))
            }

            function D(t) {
                var e = t.guildId,
                    n = t.channelId,
                    o = t.forumLayout,
                    a = (0, c.r)(e) && o === r.X.LIST ? h.R : o;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_LAYOUT_UPDATED, g(v({}, (0, _.xl)({
                    channelId: n
                })), {
                    guild_id: e,
                    channel_id: n,
                    forum_channel_layout: a
                }))
            }

            function N(t) {
                var e = t.postId,
                    n = t.location;
                i.ZP.trackWithMetadata(b.rMx.FORUM_POST_LINK_COPIED, {
                    forum_post_id: e,
                    location: n
                })
            }

            function L(t) {
                var e = t.onboardingCTA;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: e
                })
            }

            function Z(t) {
                var e = t.forumDemoId;
                i.ZP.trackWithMetadata(b.rMx.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: e
                })
            }

            function j(t) {
                var e = t.added;
                i.ZP.trackWithMetadata(b.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: e
                })
            }

            function U(t) {
                var e = t.readGuideCta;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: e
                })
            }

            function F(t) {
                var e = t.isMobile;
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: e
                })
            }

            function x() {
                i.ZP.trackWithMetadata(b.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function H(t) {
                i.ZP.trackWithMetadata(b.rMx.CHANNEL_OPENED, g(v({}, (0, i.hH)(t.guild_id), (0, i.v_)(t), (0, o.K)(t, !0)), {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    parent_id: t.parent_id,
                    parent_channel_type: t.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, l.Xf)()
                }))
            }

            function k() {
                i.ZP.trackWithMetadata(b.rMx.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: b.jXE.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function G(t) {
                var e = t.guildId,
                    n = t.channelId;
                i.ZP.trackWithMetadata(b.rMx.THREAD_CREATION_STARTED, g(v({}, (0, o.K)(a.Z.getChannel(n))), {
                    channel_id: n,
                    guild_id: e
                }))
            }
        },
        734901: (t, e, n) => {
            n.d(e, {
                xl: () => Z,
                n4: () => j,
                t$: () => T,
                WW: () => C,
                q8: () => M,
                RR: () => A,
                bE: () => P
            });
            var r = n(920883),
                i = n(842227),
                o = n(536945),
                a = n(487685),
                u = n(666613),
                s = n(591684),
                l = n(61209),
                c = n(284610),
                d = n(682776),
                f = n(255592),
                h = n(572615),
                _ = n(583507),
                b = n(782912),
                p = n(468811),
                v = n.n(p);

            function g(t) {
                return {
                    channelId: t,
                    sessionId: v().v4()
                }
            }
            const y = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                t.prototype.getForumChannelSessionId = function(t) {
                    null == this.session && (this.session = g(t));
                    this.session.channelId !== t && (this.session = g(t));
                    return this.session.sessionId
                };
                return t
            }());
            var E = n(2590),
                m = n(897196),
                O = n(379364);

            function S(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function I(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function C(t) {
                return y.getForumChannelSessionId(t)
            }

            function T(t) {
                switch (t) {
                    case r.z.CREATION_DATE:
                        return O.SX.CREATION_DATE;
                    case r.z.LATEST_ACTIVITY:
                        return O.SX.LATEST_ACTIVITY;
                    default:
                        throw new Error("Unexpected sort order ".concat(t))
                }
            }

            function A(t) {
                return f.Z.getUploads(t, c.d.FirstThreadMessage).length
            }

            function M(t) {
                var e, n = l.Z.getChannel(t);
                if (null == n) return [];
                var r, i = l.Z.getChannel(n.parent_id),
                    o = null == i ? void 0 : i.availableTags;
                if (null == i || null == o) return [];
                var a = null !== (r = null === (e = c.Z.getThreadSettings(t)) || void 0 === e ? void 0 : e.appliedTags) && void 0 !== r ? r : new Set,
                    u = new Set(o.map((function(t) {
                        return t.id
                    })));
                return Array.from(a).filter((function(t) {
                    return u.has(t)
                }))
            }

            function P(t, e) {
                return Object.keys(o.Z.getThreadsForParent(t, e)).length
            }

            function w(t) {
                var e = h.Z.getMessage(t),
                    n = e.loaded,
                    r = e.firstMessage;
                return n ? r : null
            }

            function R(t) {
                var e = w(t);
                return null == e ? 0 : e.reactions.length
            }

            function D(t) {
                var e = w(t);
                return null == e ? 0 : e.reactions.reduce((function(t, e) {
                    return t + e.count
                }), 0)
            }

            function N(t) {
                var e, n = l.Z.getChannel(t);
                if (null == n) return [];
                var r = l.Z.getChannel(n.parent_id),
                    i = null == r ? void 0 : r.availableTags;
                if (null == r || null == i) return [];
                var o, a = new Set(i.map((function(t) {
                    return t.id
                })));
                return null !== (o = null === (e = n.appliedTags) || void 0 === e ? void 0 : e.filter((function(t) {
                    return a.has(t)
                }))) && void 0 !== o ? o : []
            }

            function L(t) {
                var e, n = w(t);
                return null == n ? [] : n.attachments.map((function(t) {
                    return null !== (e = t.content_type) && void 0 !== e ? e : "unknown"
                }))
            }

            function Z(t) {
                var e, n, r, i, o = t.channelId,
                    a = t.sessionId,
                    u = l.Z.getChannel(o);
                return null != u && u.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != u.topic && u.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (e = u.defaultReactionEmoji) || void 0 === e ? void 0 : e.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = u.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (i = null === (r = u.availableTags) || void 0 === r ? void 0 : r.map((function(t) {
                        return t.id
                    }))) && void 0 !== i ? i : [],
                    forum_channel_tag_required: u.hasFlag(m.zZ.REQUIRE_TAG),
                    forum_channel_can_create_post: d.Z.can(E.Plq.SEND_MESSAGES, u),
                    forum_channel_filter_tag_ids: _.Z.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: _.Z.getSortOrderAnalytics(u.id),
                    forum_channel_session_id: null != a ? a : C(u.id),
                    forum_channel_layout: _.Z.getLayoutAnalytics(u.id),
                    forum_channel_default_sort_order: u.defaultSortOrder,
                    forum_channel_default_layout: u.defaultForumLayout
                } : null
            }

            function j(t) {
                var e, n, r, o, c, d = t.channelId,
                    f = t.sessionId,
                    h = l.Z.getChannel(d);
                if (null == h || !h.isForumPost()) return null;
                var _, p, v = l.Z.getChannel(h.parent_id);
                return null != v && v.isForumLikeChannel() ? I(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            S(t, e, n[e])
                        }))
                    }
                    return t
                }({}, Z({
                    channelId: v.id,
                    sessionId: f
                })), {
                    thread_approximate_member_count: u.Z.getMemberCount(d),
                    thread_approximate_message_count: s.Z.getCount(d),
                    thread_archived: !0 === (null === (e = h.threadMetadata) || void 0 === e ? void 0 : e.archived),
                    thread_locked: null !== (_ = null === (n = h.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== _ && _,
                    thread_auto_archive_duration_minutes: null !== (p = null === (r = h.threadMetadata) || void 0 === r ? void 0 : r.autoArchiveDuration) && void 0 !== p ? p : 0,
                    thread_approximate_creation_date: i.default.extractTimestamp(d),
                    forum_post_id: h.id,
                    forum_post_first_message_id: h.id,
                    forum_post_num_reactions: D(h.id),
                    forum_post_num_unique_reactions: R(h.id),
                    forum_post_applied_tag_ids: N(h.id),
                    forum_post_is_pinned: h.hasFlag(m.zZ.PINNED),
                    forum_post_is_new: null === (o = b.Z.getReadStateSnapshotAnalytics(h.id)) || void 0 === o ? void 0 : o.isNew,
                    forum_post_is_unread: null === (c = b.Z.getReadStateSnapshotAnalytics(h.id)) || void 0 === c ? void 0 : c.hasUnreads,
                    forum_post_is_following: a.Z.hasJoined(h.id),
                    forum_post_attachment_mimetypes: L(h.id)
                }) : null
            }
        },
        883069: (t, e, n) => {
            n.d(e, {
                R: () => o,
                x: () => a
            });
            var r = n(265494),
                i = n(419951),
                o = 3;

            function a(t) {
                var e = i.Z.useExperiment({
                        guildId: null != t ? t : "",
                        location: "9a247a_1"
                    }),
                    n = r.Z.useExperiment({
                        location: "9a247a_2"
                    });
                return Boolean(e.enabled || n.enabled)
            }
        },
        666613: (t, e, n) => {
            n.d(e, {
                Z: () => I
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(744564),
                u = n(659436),
                s = n(382060),
                l = n(61209);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function f(t) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return f(t)
            }

            function h(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function _(t, e) {
                _ = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return _(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(t);
                    if (e) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = {};

            function g(t) {
                var e;
                null === (e = t.threads) || void 0 === e || e.forEach(y)
            }

            function y(t) {
                if (!s.AW.has(t.type)) return !1;
                var e = function(t) {
                    if (!(t.id in v)) {
                        var e, n;
                        v[t.id] = {
                            guildId: t.guild_id,
                            parentId: t.parent_id,
                            memberCount: null !== (e = t.memberCount) && void 0 !== e ? e : 0,
                            memberIdsPreview: null !== (n = t.memberIdsPreview) && void 0 !== n ? n : []
                        }
                    }
                    return v[t.id]
                }(t);
                null != t.memberCount && (e.memberCount = t.memberCount);
                null != t.memberIdsPreview && (e.memberIdsPreview = t.memberIdsPreview)
            }

            function E(t) {
                return y(t.channel)
            }

            function m(t) {
                t.threads.forEach(O)
            }

            function O(t) {
                if (null != t && !(t.id in v)) {
                    var e = l.Z.getChannel(t.id);
                    if (null != e) {
                        y(e);
                        return !0
                    }
                }
                return !1
            }
            var S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && _(t, e)
                }(n, t);
                var e = p(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.Z)
                };
                r.getMemberCount = function(t) {
                    var e, n;
                    return null !== (n = null === (e = v[t]) || void 0 === e ? void 0 : e.memberCount) && void 0 !== n ? n : null
                };
                r.getMemberIdsPreview = function(t) {
                    var e, n;
                    return null !== (n = null === (e = v[t]) || void 0 === e ? void 0 : e.memberIdsPreview) && void 0 !== n ? n : null
                };
                r.getInitialOverlayState = function() {
                    return v
                };
                r.__getLocalVars = function() {
                    return {
                        threads: v
                    }
                };
                return n
            }(o.ZP.Store);
            S.displayName = "ThreadMembersStore";
            const I = new S(a.Z, {
                CONNECTION_OPEN: function(t) {
                    v = {};
                    t.guilds.forEach(g)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.threadMembers;
                    v = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                d(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, e)
                },
                GUILD_CREATE: function(t) {
                    g(t.guild)
                },
                GUILD_DELETE: function(t) {
                    var e, n = t.guild;
                    e = n.id, v = i().omitBy(v, (function(t) {
                        return t.guildId === e
                    }))
                },
                CHANNEL_DELETE: function(t) {
                    var e, n = t.channel;
                    e = n.id, v = i().omitBy(v, (function(t) {
                        return t.parentId === e
                    }))
                },
                THREAD_CREATE: E,
                THREAD_UPDATE: E,
                THREAD_LIST_SYNC: function(t) {
                    t.threads.forEach(y)
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = v[t.id];
                    if (null == e) return !1;
                    null != t.memberIdsPreview && (e.memberIdsPreview = t.memberIdsPreview);
                    e.memberCount = t.memberCount
                },
                SEARCH_FINISH: function(t) {
                    var e = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = t.messages[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value,
                                s = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var d, f = u[Symbol.iterator](); !(s = (d = f.next()).done); s = !0) {
                                    var h = d.value;
                                    e = O(h.thread) || e
                                }
                            } catch (t) {
                                l = !0;
                                c = t
                            } finally {
                                try {
                                    s || null == f.return || f.return()
                                } finally {
                                    if (l) throw c
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    t.threads.forEach((function(t) {
                        e = O(t) || e
                    }));
                    return e
                },
                LOAD_THREADS_SUCCESS: m,
                LOAD_ARCHIVED_THREADS_SUCCESS: m,
                THREAD_DELETE: function(t) {
                    var e = t.channel;
                    delete v[e.id]
                },
                LOAD_MESSAGES_SUCCESS: function(t) {
                    var e = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = t.messages[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            e = O(o.value.thread) || e
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                },
                GUILD_FEED_FETCH_SUCCESS: function(t) {
                    var e = t.data,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = (0, u.J)(e)[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            n = O(a.value) || n
                        }
                    } catch (t) {
                        i = !0;
                        o = t
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
            })
        },
        512291: (t, e, n) => {
            n.d(e, {
                Z: () => V
            });
            var r = n(202351),
                i = n(744564),
                o = n(496486),
                a = n.n(o),
                u = n(513328),
                s = n(168024),
                l = n(296602);
            var c = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._subscriptions = {};
                        this._unsubscriptions = {};
                        this._unsubscribe = new u.sW(6e4, (function() {
                            return n.flushUnsubscriptions()
                        }));
                        this._onChange = e
                    }
                    var e = t.prototype;
                    e.reset = function() {
                        this._subscriptions = {};
                        this._unsubscriptions = {};
                        this._unsubscribe.cancel()
                    };
                    e.get = function(t) {
                        var e, n = null !== (e = this._subscriptions[t]) && void 0 !== e ? e : {};
                        return a().keys(n)
                    };
                    e.clear = function(t) {
                        delete this._subscriptions[t];
                        delete this._unsubscriptions[t]
                    };
                    e.subscribe = function(t, e) {
                        var n, r, i = null !== (n = this._subscriptions[t]) && void 0 !== n ? n : {};
                        i[e] = (null !== (r = i[e]) && void 0 !== r ? r : 0) + 1;
                        this._subscriptions[t] = i;
                        1 === i[e] && this._onChange(t, this.get(t));
                        this.checkForLeaks(t, e)
                    };
                    e.isSubscribed = function(t, e) {
                        return null != this._subscriptions[t] && null != this._subscriptions[t][e]
                    };
                    e.unsubscribe = function(t, e) {
                        if (this.isSubscribed(t, e)) {
                            var n, r, i = null !== (n = this._unsubscriptions[t]) && void 0 !== n ? n : {};
                            i[e] = (null !== (r = i[e]) && void 0 !== r ? r : 0) + 1;
                            this._unsubscriptions[t] = i;
                            1 === i[e] && this._unsubscribe.delay(!1)
                        }
                    };
                    e.checkForLeaks = function(t, e) {
                        var n, r, i, o, a = (null !== (i = null === (n = this._subscriptions[t]) || void 0 === n ? void 0 : n[e]) && void 0 !== i ? i : 0) - (null !== (o = null === (r = this._unsubscriptions[t]) || void 0 === r ? void 0 : r[e]) && void 0 !== o ? o : 0);
                        a > 5 && new l.Z("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(a, " subscriptions)"))
                    };
                    e.flushUnsubscriptions = function() {
                        var t = this;
                        if (!a().isEmpty(this._unsubscriptions)) {
                            a().forEach(this._unsubscriptions, (function(e, n) {
                                var r = t._subscriptions[n];
                                a().forEach(e, (function(t, e) {
                                    var n;
                                    r[e] = (null !== (n = r[e]) && void 0 !== n ? n : 0) - t;
                                    r[e] <= 0 && delete r[e]
                                }));
                                a().isEmpty(r) && delete t._subscriptions[n];
                                t._onChange(n, t.get(n))
                            }));
                            this._unsubscriptions = {}
                        }
                    };
                    return t
                }(),
                d = n(5387),
                f = n.n(d);
            var h = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._subscriptions = {};
                        this._onChange = e
                    }
                    var e = t.prototype;
                    e.reset = function() {
                        this._subscriptions = {}
                    };
                    e.get = function(t) {
                        return this._get(t).keys()
                    };
                    e.getSubscribedThreadIds = function() {
                        var t = new Set;
                        for (var e in this._subscriptions) {
                            var n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = this._subscriptions[e].keys()[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var u = o.value;
                                    t.add(u)
                                }
                            } catch (t) {
                                r = !0;
                                i = t
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                        return t
                    };
                    e._get = function(t) {
                        var e;
                        return null !== (e = this._subscriptions[t]) && void 0 !== e ? e : new(f())({
                            max: 3,
                            updateAgeOnGet: !0
                        })
                    };
                    e.clear = function(t) {
                        if (t in this._subscriptions) {
                            delete this._subscriptions[t];
                            this._onChange(t, [])
                        }
                    };
                    e.subscribe = function(t, e, n) {
                        var r = this._get(t);
                        if (r.has(e)) {
                            r.set(e, Date.now());
                            return !1
                        }
                        null != n && r.has(n) && r.set(n, Date.now());
                        r.set(e, Date.now());
                        this._subscriptions[t] = r;
                        this._onChange(t, r.keys());
                        return !0
                    };
                    e.unsubscribe = function(t, e) {
                        if (!(t in this._subscriptions)) return !1;
                        var n = this._subscriptions[t];
                        if (n.has(e)) {
                            n.del(e);
                            this._onChange(t, n.keys());
                            return !0
                        }
                        return !1
                    };
                    return t
                }(),
                _ = n(2590);

            function b(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                return null != t && "null" !== t && t !== _.ME && "undefined" !== t && t !== _.I_8
            }
            var v = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._members = new c((function(t, e) {
                            return n._enqueue(t, {
                                members: e
                            })
                        }));
                        this._channels = new s.ZP((function(t, e) {
                            return n._enqueue(t, {
                                channels: e
                            })
                        }));
                        this._threadMemberLists = new h((function(t, e) {
                            return n._enqueue(t, {
                                thread_member_lists: e
                            })
                        }));
                        this._typing = new Set;
                        this._threads = new Set;
                        this._activities = new Set;
                        this._subscribed = new Set;
                        this._pending = {};
                        this._flush = new u.sW(0, (function() {
                            return n.flush()
                        }));
                        this._onChange = e
                    }
                    var e = t.prototype;
                    e._enqueue = function(t, e) {
                        this._pending[t] = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                                }))));
                                r.forEach((function(e) {
                                    b(t, e, n[e])
                                }))
                            }
                            return t
                        }({}, this._pending[t], e);
                        this._flush.delay()
                    };
                    e.reset = function() {
                        this._subscribed.clear();
                        this._pending = {};
                        this._members.reset();
                        this._channels.reset();
                        this._threadMemberLists.reset();
                        this._typing.clear();
                        this._threads.clear();
                        this._activities.clear()
                    };
                    e.get = function(t) {
                        return {
                            typing: this._typing.has(t),
                            threads: this._threads.has(t),
                            activities: this._activities.has(t),
                            members: this._members.get(t),
                            channels: this._channels.get(t),
                            thread_member_lists: this._threadMemberLists.get(t)
                        }
                    };
                    e.getSubscribedThreadIds = function() {
                        return this._threadMemberLists.getSubscribedThreadIds()
                    };
                    e.isSubscribedToThreads = function(t) {
                        return this._threads.has(t)
                    };
                    e.forEach = function(t) {
                        this._subscribed.forEach(t)
                    };
                    e.clearWithoutFlushing = function(t, e) {
                        !e && this._threads.has(t) || this._subscribed.delete(t);
                        delete this._pending[t];
                        this._members.clear(t);
                        this._channels.clear(t);
                        this._threadMemberLists.clear(t);
                        this._typing.delete(t);
                        e && this._threads.delete(t);
                        this._activities.delete(t)
                    };
                    e.flush = function() {
                        var t = this;
                        a().forEach(this._pending, (function(e, n) {
                            t._subscribed.add(n);
                            t._onChange(n, e)
                        }));
                        this._pending = {}
                    };
                    e.subscribeUser = function(t, e) {
                        p(t) && this._members.subscribe(t, e)
                    };
                    e.unsubscribeUser = function(t, e) {
                        p(t) && this._members.unsubscribe(t, e)
                    };
                    e.subscribeChannel = function(t, e, n) {
                        return !!p(t) && this._channels.subscribe(t, e, n)
                    };
                    e.subscribeThreadMemberList = function(t, e, n) {
                        return !!p(t) && this._threadMemberLists.subscribe(t, e, n)
                    };
                    e.unsubscribeThreadMemberList = function(t, e) {
                        return !!p(t) && this._threadMemberLists.unsubscribe(t, e)
                    };
                    e.subscribeToGuild = function(t) {
                        this._subscribeToFeature(t, this._typing, {
                            typing: !0
                        });
                        this._subscribeToFeature(t, this._activities, {
                            activities: !0
                        });
                        this._subscribeToFeature(t, this._threads, {
                            threads: !0
                        })
                    };
                    e._subscribeToFeature = function(t, e, n) {
                        if (p(t) && !e.has(t)) {
                            e.add(t);
                            this._enqueue(t, n)
                        }
                    };
                    return t
                }(),
                g = n(73727),
                y = n(664625),
                E = n(804185),
                m = n(61209),
                O = n(837067),
                S = n(21372),
                I = n(567403),
                C = n(563367),
                T = n(840922),
                A = n(715107),
                M = n(464187);

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function R(t) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return R(t)
            }

            function D(t, e) {
                return !e || "object" !== j(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function N(t, e) {
                N = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return N(t, e)
            }

            function L(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return P(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z, j = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function U(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = R(t);
                    if (e) {
                        var i = R(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }
            var F = new v((function(t, e) {
                (null != I.Z.getGuild(t) || O.Z.isUnavailable(t)) && i.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: t,
                    subscriptions: e
                })
            }));

            function x(t, e) {
                F.forEach((function(n) {
                    var r;
                    if (n !== M.Z.getGuildId() && n !== C.Z.getGuildId() && n !== (null === (r = m.Z.getChannel(A.Z.getChannelId())) || void 0 === r ? void 0 : r.getGuildId()) && (null == Z || Z.guildId !== n)) {
                        F.clearWithoutFlushing(n, t);
                        e && i.Z.dispatch({
                            type: "GUILD_SUBSCRIPTIONS_FLUSH",
                            guildId: n,
                            subscriptions: F.get(n)
                        })
                    }
                }))
            }

            function H(t, e) {
                F.subscribeToGuild(t);
                return null != e && E.ZP.getSection(e) === _.ULH.MEMBERS && k(t, e, s.KV)
            }

            function k(t, e, n) {
                var r = m.Z.getChannel(e);
                if (null == r) return !1;
                var i = r.getGuildId();
                i !== t && t === _.I_8 && F.subscribeToGuild(i);
                return (null == r ? void 0 : r.isThread()) ? r.type === _.d4z.ANNOUNCEMENT_THREAD ? F.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && F.subscribeThreadMemberList(i, e, A.Z.getChannelId()) : F.subscribeChannel(i, e, n)
            }

            function G(t) {
                "CONNECTION_OPEN" === t.type && x(!0, !1);
                var e = M.Z.getGuildId();
                null != e && H(e, A.Z.getChannelId(e));
                F.forEach((function(t) {
                    null == I.Z.getGuild(t) ? F.clearWithoutFlushing(t, !0) : i.Z.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: t,
                        subscriptions: F.get(t)
                    })
                }))
            }

            function W(t) {
                var e = t.guildId,
                    n = t.channelId;
                return !O.Z.isUnavailable(e) && H(e, n)
            }

            function B() {
                return H(M.Z.getGuildId(), A.Z.getChannelId())
            }

            function z() {
                var t = g.Z.getSyncingWith();
                if (null == t) {
                    if (null != Z) {
                        F.unsubscribeUser(Z.guildId, Z.userId);
                        Z = null
                    }
                } else {
                    var e = t.userId;
                    if (null != Z && Z.userId === e) return !1;
                    if (T.Z.isFriend(e)) return !1;
                    var n = S.ZP.memberOf(e);
                    if (0 === n.length) return !1;
                    var r = L(n, 1)[0];
                    Z = {
                        guildId: r,
                        userId: e
                    };
                    F.subscribeUser(r, e)
                }
                return !1
            }
            var q = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && N(t, e)
                }(n, t);
                var e = U(n);

                function n() {
                    w(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(m.Z, I.Z, M.Z, A.Z, C.Z, y.default, E.ZP);
                    this.syncWith([g.Z], z);
                    this.syncWith([E.ZP], B)
                };
                r.getSubscribedThreadIds = function() {
                    return F.getSubscribedThreadIds()
                };
                r.isSubscribedToThreads = function(t) {
                    return F.isSubscribedToThreads(t)
                };
                r.__getLocalVars = function() {
                    return {
                        syncingWith: Z,
                        subscriptions: F
                    }
                };
                return n
            }(r.ZP.Store);
            q.displayName = "GuildSubscriptionsStore";
            const V = new q(i.Z, {
                CONNECTION_OPEN: G,
                CONNECTION_RESUMED: G,
                CONNECTION_CLOSED: function() {
                    x(!1, !1)
                },
                IDLE: function(t) {
                    if (!t.idle) return !1;
                    x(!1, !0)
                },
                LOGOUT: function() {
                    F.reset()
                },
                VOICE_CHANNEL_SELECT: W,
                CHANNEL_SELECT: W,
                GUILD_CREATE: function(t) {
                    t.guild.id === M.Z.getGuildId() && B()
                },
                GUILD_DELETE: function(t) {
                    var e = t.guild;
                    F.clearWithoutFlushing(e.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(t) {
                    var e = t.guildId;
                    t.userIds.forEach((function(t) {
                        t !== y.default.getId() && F.subscribeUser(e, t)
                    }));
                    return !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(t) {
                    var e = t.guildId;
                    t.userIds.forEach((function(t) {
                        F.unsubscribeUser(e, t)
                    }));
                    return !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(t) {
                    return k(t.guildId, t.channelId, t.ranges)
                },
                GUILD_SUBSCRIPTIONS: function(t) {
                    var e = t.guildId;
                    return F.subscribeToGuild(e)
                },
                CHANNEL_PRELOAD: function(t) {
                    return H(t.guildId, t.channelId)
                },
                INBOX_OPEN: function(t) {
                    var e = t.guildIds,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            null != u && F.subscribeToGuild(u)
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                THREAD_UPDATE: function(t) {
                    var e = t.channel;
                    if (e.isArchivedThread()) return F.unsubscribeThreadMemberList(e.guild_id, e.id);
                    if (!e.isActiveThread() || A.Z.getChannelId() !== e.id) return !1;
                    F.subscribeThreadMemberList(e.guild_id, e.id, A.Z.getChannelId())
                },
                THREAD_DELETE: function(t) {
                    var e = t.channel;
                    return F.unsubscribeThreadMemberList(e.guild_id, e.id)
                },
                THREAD_LIST_SYNC: B
            })
        }
    }
]);
//# sourceMappingURL=97d76fc22505d5206e2c.js.map