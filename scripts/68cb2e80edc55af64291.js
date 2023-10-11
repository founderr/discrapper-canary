"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43043], {
        222752: (e, t, n) => {
            n.d(t, {
                w8: () => r,
                Ji: () => i,
                EO: () => u,
                Gj: () => l,
                lD: () => d,
                SB: () => o
            });
            var r, i, u, a = n(210595);
            ! function(e) {
                e.MESSAGE_CLICKED = "message_clicked";
                e.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked";
                e.REACTION_ADDED = "reaction_added";
                e.REACTION_REMOVED = "reaction_removed";
                e.THREAD_EMBED_CLICKED = "thread_embed_clicked";
                e.LINK_CLICKED = "link_clicked";
                e.IMAGE_CLICKED = "image_clicked";
                e.BUTTON_CLICKED = "button_clicked";
                e.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked";
                e.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar";
                e.REPLIED_IN_SIDEBAR = "replied_in_sidebar";
                e.REPLIED_TO_MESSAGE = "replied_to_message";
                e.EXPANDED_ITEM = "expanded_item";
                e.VIEW_MORE_REPLIES = "view_more_replies"
            }(r || (r = {}));
            ! function(e) {
                e.UNREAD = "UNREAD";
                e.READ = "READ";
                e.HIGHLIGHTED = "HIGHLIGHTED";
                e.ALL = "ALL"
            }(i || (i = {}));
            ! function(e) {
                e[e.SEGMENTED_READ = 0] = "SEGMENTED_READ";
                e[e.TOP = 1] = "TOP";
                e[e.NEW = 2] = "NEW"
            }(u || (u = {}));
            var o, l = "(max-width: 1300px)",
                d = new Set([a.d.GUILD_TEXT, a.d.GUILD_ANNOUNCEMENT, a.d.GUILD_FORUM]);
            ! function(e) {
                e.ORGANIC = "ORGANIC";
                e.TIMER = "TIMER";
                e.HIGHLIGHTS = "HIGHLIGHTS"
            }(o || (o = {}))
        },
        123398: (e, t, n) => {
            n.d(t, {
                qL: () => T,
                Q: () => O,
                ZP: () => ne
            });
            var r = n(202351),
                i = n(575626),
                u = n(744564),
                a = n(720637),
                o = n(330768),
                l = n(664625),
                d = n(910149),
                c = n(170892),
                s = n(194685),
                f = n(764334),
                E = n(222752),
                _ = n(897196);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function g(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return u
                    }
                }(e, t) || A(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || A(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                }
            }

            function D(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var O, T = 10;
            ! function(e) {
                e[e.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED";
                e[e.LOADING_PAGE = 1] = "LOADING_PAGE";
                e[e.NONE = 2] = "NONE"
            }(O || (O = {}));
            var M = {
                    loading: O.NONE,
                    error: null
                },
                w = {
                    offset: null,
                    hasMoreItems: null
                },
                R = {},
                N = {},
                b = {},
                G = {},
                L = {},
                F = {},
                U = {},
                P = {};

            function C(e) {
                var t = P[e];
                if (null == t) {
                    t = new i.Z(H, j);
                    P[e] = t
                }
                return t
            }

            function j(e) {
                var t = e.featured,
                    n = e.sortIndex;
                return "".concat(t ? "\0" : "").concat(n.toString().padStart(5, "0"))
            }

            function H(e) {
                var t = e.seen,
                    n = e.highlighted,
                    r = [E.Ji.ALL];
                n ? r.push(E.Ji.HIGHLIGHTED) : t ? r.push(E.Ji.READ) : r.push(E.Ji.UNREAD);
                return r
            }
            var x = {},
                Z = {},
                V = {},
                B = {};

            function k(e, t, n) {
                var r, i;
                return null === (r = U[e]) || void 0 === r || null === (i = r[t]) || void 0 === i ? void 0 : i[n]
            }

            function Y(e, t) {
                var n;
                return null === (n = F[e]) || void 0 === n ? void 0 : n[t]
            }

            function J(e) {
                var t = (0, c.ZP)(e);
                return Y(t.channel_id, t.id)
            }

            function K(e, t, n) {
                if (null == e || null == t) return !1;
                var r = Y(e, t);
                if (null == r) return !1;
                var i = k(r, e, t);
                if (null == i) return !1;
                var u = n(i);
                U[r][e][t] = u;
                return !0
            }

            function q(e, t) {
                (0, c.pR)(t).forEach((function(t) {
                    return W(e, t)
                }))
            }

            function W(e, t) {
                var n;
                if (null == (null === (n = U[e]) || void 0 === n ? void 0 : n[t.channel_id])) {
                    var r;
                    U[e] = null !== (r = U[e]) && void 0 !== r ? r : {};
                    U[e][t.channel_id] = {}
                }
                U[e][t.channel_id][t.id] = t;
                null == F[t.channel_id] && (F[t.channel_id] = {});
                F[t.channel_id][t.id] = e
            }

            function X(e, t) {
                var n = C(e).values(E.Ji.ALL),
                    r = !0,
                    i = !1,
                    u = void 0;
                try {
                    for (var a, o = n[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                        var l = a.value;
                        if ((0, c.bE)(l).has(t)) return l
                    }
                } catch (e) {
                    i = !0;
                    u = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (i) throw u
                    }
                }
            }

            function z(e, t) {
                var n, r, i, u = Y(e, t);
                if (null == u) return !1;
                null === (n = U[u]) || void 0 === n || null === (r = n[e]) || void 0 === r || delete r[t];
                null === (i = F[e]) || void 0 === i || delete i[t];
                ! function(e, t) {
                    var n = X(e, t);
                    if (null != n) {
                        var r = (0, f.ZP)(n),
                            i = C(e);
                        Array.from((0, c.pR)(n)).filter((function(t) {
                            return k(e, t.channel_id, t.id)
                        })).length > 0 || i.delete(r)
                    }
                }(u, t);
                return !0
            }

            function $(e) {
                var t = e.type,
                    n = e.channelId,
                    r = e.messageId,
                    i = e.userId,
                    u = e.emoji;
                if (!(0, o.sm)(e)) return !1;
                var a = l.default.getId() === i;
                return K(n, r, (function(n) {
                    if ("MESSAGE_REACTION_ADD" === t) {
                        var r = e.burst,
                            o = e.colors;
                        return n.addReaction(u, a, i, o, r)
                    }
                    return n.removeReaction(u, a)
                }))
            }

            function Q(e) {
                return ee(e.channel)
            }

            function ee(e) {
                var t, n = e.guild_id;
                if (null == n) return !1;
                delete F[e.id];
                null === (t = U[n]) || void 0 === t || delete t[e.id]
            }
            var te = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = D(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getLastFetchedMillis = function(e) {
                    return R[e]
                };
                r.getFeedItemsForGuild = function(e) {
                    return C(e).values()
                };
                r.getFeedItemSection = function(e, t) {
                    return C(e).values(t)
                };
                r.getItem = function(e, t) {
                    return C(e).get(t)
                };
                r.getItemForMessageId = function(e, t) {
                    return X(e, t)
                };
                r.getMessageItem = function(e, t) {
                    return this.getItem(e, (0, f.E0)(t))
                };
                r.getLoadId = function(e) {
                    var t;
                    return null === (t = L[e]) || void 0 === t ? void 0 : t.load_id
                };
                r.getCachedMessage = function(e, t, n) {
                    return k(e, t, n)
                };
                r.getFetchStatus = function(e) {
                    var t;
                    return null !== (t = N[e]) && void 0 !== t ? t : M
                };
                r.getFeaturedItemsFetchStatus = function(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t ? t : M
                };
                r.getPaginationStatus = function(e) {
                    var t;
                    return null !== (t = b[e]) && void 0 !== t ? t : w
                };
                r.getIsItemHiding = function(e, t) {
                    var n;
                    return !!(null === (n = x[e]) || void 0 === n ? void 0 : n.has(t))
                };
                r.getIsItemHidden = function(e, t) {
                    var n;
                    return !!(null === (n = Z[e]) || void 0 === n ? void 0 : n.has(t))
                };
                r.getIsItemFeatured = function(e) {
                    var t, n = (0, f.jR)(e),
                        r = e.guildId;
                    return !!(null === (t = V[r]) || void 0 === t ? void 0 : t.has(n))
                };
                r.getFeaturedItems = function(e) {
                    var t;
                    return Object.values(null !== (t = B[e]) && void 0 !== t ? t : [])
                };
                r.getFeaturedItemByMessageId = function(e, t) {
                    var n;
                    return Object.values(null !== (n = B[e]) && void 0 !== n ? n : []).find((function(e) {
                        return "message" in e && e.message.id === t
                    }))
                };
                return n
            }(r.ZP.Store);
            te.displayName = "GuildFeedStore";
            const ne = new te(u.Z, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    var t = e.guildId;
                    N[t] = {
                        loading: O.LOADING_FRESH_FEED,
                        error: null
                    };
                    delete P[t];
                    delete L[t];
                    delete b[t];
                    x[t] = new Set;
                    Z[t] = new Set;
                    V[t] = new Set;
                    U[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    var t = e.guildId;
                    N[t] = {
                        loading: O.LOADING_PAGE,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n, r, i = e.guildId,
                        u = e.data;
                    R[i] = Date.now();
                    N[i] = {
                        loading: O.NONE,
                        error: null
                    };
                    if (!(i in L) || L[i].load_id === u.load_id) {
                        var a, o = null !== (a = null === (t = L[i]) || void 0 === t || null === (n = t.results) || void 0 === n ? void 0 : n.items) && void 0 !== a ? a : [];
                        L[i] = {
                            load_id: u.load_id,
                            results: {
                                items: o.concat(u.results.items)
                            }
                        };
                        var l, c = C(i),
                            s = c.values().length,
                            f = s,
                            E = !0,
                            _ = !1,
                            v = void 0;
                        try {
                            for (var y, I = u.results.items[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) {
                                var g = y.value,
                                    m = (0, d.he)(g, f);
                                if (null != m) {
                                    f += 1;
                                    if (null == c.get(m.id)) {
                                        m.featured && V[i].add(m.id);
                                        q(i, m);
                                        c.set(m.id, m)
                                    }
                                }
                            }
                        } catch (e) {
                            _ = !0;
                            v = e
                        } finally {
                            try {
                                E || null == I.return || I.return()
                            } finally {
                                if (_) throw v
                            }
                        }
                        var S = null !== (l = null === (r = b[i]) || void 0 === r ? void 0 : r.offset) && void 0 !== l ? l : 0;
                        b[i] = {
                            offset: S + T,
                            hasMoreItems: s !== c.values().length
                        }
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    var t = e.guildId,
                        n = e.error;
                    N[t] = {
                        loading: O.NONE,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    G[t] = {
                        loading: O.NONE,
                        error: null
                    };
                    var r = {},
                        i = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var o, l = n.results.entries()[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                            var c = S(o.value, 2),
                                s = c[0],
                                f = c[1],
                                E = (0, d.he)(f, s);
                            if (null != E && (0, d.cT)(E)) {
                                E.featured && V[t].add(E.id);
                                q(t, E);
                                r[E.id] = E
                            }
                        }
                    } catch (e) {
                        u = !0;
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    B[t] = r
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
                    var t = e.guildId,
                        n = e.error;
                    G[t] = {
                        loading: O.NONE,
                        error: n
                    }
                },
                GUILD_FEED_ITEM_REMOVE: function(e) {
                    var t = e.item;
                    (0, c.pR)(t).forEach((function(e) {
                        return z(e.channel_id, e.id)
                    }))
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    var t = e.item,
                        n = (0, f.ZP)(t),
                        r = J(t);
                    if (null != r) {
                        r in x || (x[r] = new Set);
                        x[r].add(n)
                    }
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    var t = e.item,
                        n = (0, f.ZP)(t),
                        r = J(t);
                    null != r && x[r].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    var t, n, r = e.featureableItem,
                        i = e.options,
                        u = r.guildId,
                        a = (0, f.jR)(r);
                    u in V || (V[u] = new Set);
                    V[u].add(a);
                    if (i.hoist) {
                        var o, l = C(u),
                            d = null !== (o = l.get(a)) && void 0 !== o ? o : (0, s.x)(r);
                        if (null != d) {
                            null != d.message && null == (null === (t = U[u]) || void 0 === t || null === (n = t[d.message.channel_id]) || void 0 === n ? void 0 : n[d.message.id]) && W(u, d.message);
                            l.delete(d.id);
                            d.featured = !0;
                            d.seen = !1;
                            l.set(d.id, d)
                        }
                    }
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t = e.featureableItem;
                    ! function(e, t) {
                        var n, r;
                        null === (n = V[e]) || void 0 === n || n.delete(t);
                        null === (r = B[e]) || void 0 === r || delete r[t]
                    }(t.guildId, (0, f.jR)(t))
                },
                CHANNEL_SELECT: function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, i = Object.keys(x)[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var u = r.value;
                            null == Z[u] && (Z[u] = new Set);
                            Z[u] = new Set(h(Array.from(Z[u])).concat(h(Array.from(x[u]))));
                            delete x[u]
                        }
                    } catch (e) {
                        t = !0;
                        n = e
                    } finally {
                        try {
                            e || null == i.return || i.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                },
                CHANNEL_DELETE: Q,
                THREAD_DELETE: Q,
                GUILD_DELETE: function(e) {
                    var t, n = e.guild;
                    if (null == R[n.id]) return !1;
                    delete R[n.id];
                    delete L[n.id];
                    for (var r in null !== (t = U[n.id]) && void 0 !== t ? t : {}) delete F[r];
                    delete U[n.id];
                    delete P[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                            var o = u.value;
                            if (null == o ? void 0 : o.hasFlag(_.zZ.GUILD_FEED_REMOVED)) return ee(o)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                LOGOUT: function() {
                    R = {};
                    L = {};
                    F = {};
                    U = {};
                    P = {};
                    x = {};
                    Z = {};
                    V = {};
                    B = {}
                },
                MESSAGE_UPDATE: function(e) {
                    var t = e.message;
                    return K(t.channel_id, t.id, (function(e) {
                        return (0, a.wi)(e, t)
                    }))
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id;
                    return z(e.channelId, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId,
                        r = !1,
                        i = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var o, l = t[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                            r = z(n, o.value) || r
                        }
                    } catch (e) {
                        u = !0;
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    return r
                },
                MESSAGE_REACTION_ADD: $,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.reactions,
                        i = l.default.getId();
                    return K(t, n, (function(e) {
                        return e.addReactionBatch(r, i)
                    }))
                },
                MESSAGE_REACTION_REMOVE: $,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    return K(e.channelId, e.messageId, (function(e) {
                        return e.set("reactions", [])
                    }))
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.emoji;
                    return K(t, n, (function(e) {
                        return e.removeReactionsForEmoji(r)
                    }))
                }
            })
        },
        910149: (e, t, n) => {
            n.d(t, {
                qZ: () => y,
                cT: () => m,
                he: () => h,
                fx: () => p,
                XY: () => A,
                Vm: () => D,
                DE: () => O,
                FW: () => T,
                xp: () => M
            });
            var r = n(496486),
                i = n.n(r),
                u = n(349289),
                a = n(141780),
                o = n(720637),
                l = n(382060),
                d = n(72580),
                c = n(764334),
                s = n(897196),
                f = n(473708);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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
            var y = {
                ONE_DAY: 86400,
                THREE_DAYS: 259200,
                SEVEN_DAYS: 604800
            };

            function I(e) {
                return {
                    entityId: e.entity_id,
                    entityType: e.entity_type,
                    guildId: e.guild_id,
                    details: {
                        actorUserId: e.details.actor_user_id,
                        expiresAt: new Date(e.details.expires_at)
                    }
                }
            }

            function g(e) {
                return null != e.featured_item
            }

            function m(e) {
                return null != e.featuredItem
            }

            function S(e) {
                var t = e.messages.map((function(e) {
                    return (0, o.e5)(e.message)
                }));
                return {
                    id: e.id,
                    type: e.type,
                    messages: t,
                    children: e.children.map((function(e) {
                        return S(e)
                    }))
                }
            }

            function h(e, t) {
                switch (e.type) {
                    case u.w.FORUM_POST:
                        var n, r, a = (0, o.e5)(e.message),
                            d = (0, l.q_)(e.thread),
                            s = {
                                type: u.w.FORUM_POST,
                                id: (0, c.ZP)(e),
                                sortIndex: t,
                                message: a,
                                thread: d,
                                featured: null !== (n = e.featured) && void 0 !== n && n,
                                highlighted: null !== (r = e.highlighted) && void 0 !== r && r,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        g(e) && (s = v(_({}, s), {
                            featuredItem: I(e.featured_item)
                        }));
                        return s;
                    case u.w.MESSAGE:
                        var f, E, y, m = (0, o.e5)(e.message),
                            h = i().map(e.reference_messages, (function(e) {
                                return (0, o.e5)(e)
                            })),
                            p = {
                                type: u.w.MESSAGE,
                                id: (0, c.ZP)(e),
                                sortIndex: t,
                                message: m,
                                referenceMessages: h,
                                featured: null !== (f = e.featured) && void 0 !== f && f,
                                highlighted: null !== (E = e.highlighted) && void 0 !== E && E,
                                unreadMention: null !== (y = e.unread_mention) && void 0 !== y && y,
                                seen: e.seen
                            };
                        g(e) && (p = v(_({}, p), {
                            featuredItem: I(e.featured_item)
                        }));
                        return p;
                    case u.w.MESSAGE_BUNDLE:
                        var A, D = e.messages.map((function(e) {
                            return {
                                message: (0, o.e5)(e.message),
                                referenceMessages: e.reference_messages.map((function(e) {
                                    return (0, o.e5)(e)
                                }))
                            }
                        }));
                        return {
                            type: u.w.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: D,
                                featured: !1, highlighted: !1, unreadMention: null !== (A = e.unread_mention) && void 0 !== A && A, seen: e.seen
                        };
                    case u.w.CONVERSATION:
                        var O, T = S(e.root);
                        return {
                            type: u.w.CONVERSATION, id: e.id, sortIndex: t, root: T, featured: !1, highlighted: !1, unreadMention: null !== (O = e.unread_mention) && void 0 !== O && O, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function p(e) {
                return !e.hasFlag(s.zZ.GUILD_FEED_REMOVED) && !e.isNSFW()
            }

            function A(e) {
                return !!a.V.AVAILABLE_IN_GUILD_FEED.has(e.type)
            }
            var D = function(e) {
                    return f.Z.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                        timePeriod: e
                    })
                },
                O = function() {
                    return [{
                        value: y.ONE_DAY,
                        timePeriod: f.Z.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                    }, {
                        value: y.THREE_DAYS,
                        timePeriod: f.Z.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                    }, {
                        value: y.SEVEN_DAYS,
                        timePeriod: f.Z.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                    }]
                },
                T = function(e, t) {
                    return null != t && t.isThread() ? t.id : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null
                };

            function M(e) {
                switch (e.type) {
                    case u.w.MESSAGE:
                    case u.w.FORUM_POST:
                        return e.message.channel_id;
                    case u.w.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case u.w.CONVERSATION:
                        return e.root.messages[0].channel_id;
                    default:
                        (0, d.vE)(e)
                }
            }
        },
        170892: (e, t, n) => {
            n.d(t, {
                ZP: () => o,
                pR: () => d,
                bE: () => c
            });
            var r = n(349289),
                i = n(72580);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e) {
                switch (e.type) {
                    case r.w.MESSAGE:
                    case r.w.FORUM_POST:
                        return e.message;
                    case r.w.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case r.w.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, i.vE)(e)
                }
            }

            function l(e) {
                var t = e.children.map((function(e) {
                    return l(e)
                }));
                return [e.messages].concat(a(t)).flat()
            }

            function d(e) {
                switch (e.type) {
                    case r.w.MESSAGE:
                    case r.w.FORUM_POST:
                        return new Set([e.message]);
                    case r.w.MESSAGE_BUNDLE:
                        return new Set(e.messages.map((function(e) {
                            return e.message
                        })));
                    case r.w.CONVERSATION:
                        return new Set(l(e.root));
                    default:
                        (0, i.vE)(e)
                }
            }

            function c(e) {
                return new Set(Array.from(d(e)).map((function(e) {
                    return e.id
                })))
            }
        },
        194685: (e, t, n) => {
            n.d(t, {
                Z: () => o,
                x: () => l
            });
            var r = n(349289),
                i = n(572615),
                u = n(72580),
                a = n(764334);

            function o(e) {
                switch (e.entityType) {
                    case r.w.FORUM_POST:
                        return {
                            entityId: e.entity.id, details: {
                                parent_channel_id: e.entity.parent_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    case r.w.MESSAGE:
                        return {
                            entityId: e.entity.id, details: {
                                channel_id: e.entity.channel_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    default:
                        (0, u.vE)(e)
                }
            }

            function l(e) {
                switch (e.entityType) {
                    case r.w.FORUM_POST:
                        var t = e.entity.id,
                            n = i.Z.getMessage(t).firstMessage;
                        return null == n ? null : {
                            type: r.w.FORUM_POST,
                            id: (0, a.jR)(e),
                            sortIndex: 0,
                            message: n,
                            thread: e.entity,
                            featured: !0,
                            seen: !1,
                            highlighted: !1,
                            unreadMention: !1
                        };
                    case r.w.MESSAGE:
                        return {
                            type: r.w.MESSAGE, id: (0, a.jR)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        764334: (e, t, n) => {
            n.d(t, {
                E0: () => a,
                ZP: () => o,
                jR: () => l,
                NH: () => d
            });
            var r = n(349289),
                i = n(72580),
                u = function(e) {
                    return "".concat(r.w.FORUM_POST, "/").concat(e)
                },
                a = function(e) {
                    return "".concat(r.w.MESSAGE, "/").concat(e)
                };

            function o(e) {
                switch (e.type) {
                    case r.w.FORUM_POST:
                        return u(e.message.id);
                    case r.w.MESSAGE:
                        return a(e.message.id);
                    case r.w.MESSAGE_BUNDLE:
                    case r.w.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.vE)(e)
                }
            }

            function l(e) {
                switch (e.entityType) {
                    case r.w.FORUM_POST:
                        return u(e.entity.id);
                    case r.w.MESSAGE:
                        return a(e.entity.id);
                    default:
                        (0, i.vE)(e)
                }
            }

            function d(e) {
                return e.split("/")[0]
            }
        },
        691797: (e, t, n) => {
            n.d(t, {
                wS: () => a,
                JG: () => o
            });
            var r = n(482507),
                i = n(120415),
                u = n(310126),
                a = function() {
                    if (i.FB) return null != u.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function o(e) {
                if (!a) return !1;
                if (i.FB) {
                    u.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        }
    }
]);