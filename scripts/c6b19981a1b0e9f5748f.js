"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52555], {
        285991: (e, t, n) => {
            n.d(t, {
                k: () => m,
                Lr: () => y,
                mB: () => g,
                PR: () => S,
                In: () => v,
                Sr: () => T
            });
            var r = n(441143),
                i = n.n(r),
                a = n(495414),
                o = n(281110),
                s = n(744564),
                u = n(722406),
                c = n(473903),
                l = n(2590);

            function d(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            d(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            d(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }
            var h = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                E = new a.Z("UserProfileModalActionCreators");

            function m() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    n = void 0 !== t && t;
                return o.ZP.get({
                    url: l.ANM.ME,
                    query: {
                        with_analytics_token: n
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    s.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: n ? e.body.analytics_token : void 0
                    });
                    return new u.Z(e.body)
                }))
            }

            function y() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return o.ZP.patch({
                    url: l.ANM.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then((function() {
                    return !0
                }), (function() {
                    return !1
                }))
            }

            function g(e, t) {
                var n = c.default.getCurrentUser();
                i()(null != n, "setFlag: user cannot be undefined");
                var r = t ? n.flags | e : n.flags & ~e;
                return o.ZP.patch({
                    url: l.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
                    }
                })
            }

            function S(e) {
                var t = c.default.getUser(e);
                return null != t ? Promise.resolve(t) : o.ZP.get({
                    url: l.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    s.Z.dispatch({
                        type: "USER_UPDATE",
                        user: t.body
                    });
                    return c.default.getUser(e)
                }))
            }

            function v(e) {
                return b.apply(this, arguments)
            }

            function b() {
                b = f((function(e) {
                    var t, n, r, i, a, u, c, d, f, _ = arguments;
                    return h(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                t = _.length > 1 && void 0 !== _[1] ? _[1] : {}, n = t.friendToken, r = t.withMutualGuilds, i = t.withMutualFriendsCount, a = t.guildId, u = t.connectionsRoleId, c = _.length > 2 ? _[2] : void 0;
                                s.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                h.label = 1;
                            case 1:
                                h.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: l.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: n,
                                        with_mutual_guilds: r,
                                        with_mutual_friends_count: i,
                                        guild_id: a,
                                        connections_role_id: u
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                d = h.sent();
                                null == c || c(d.body, a);
                                s.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: d.body.user
                                });
                                s.Z.dispatch(p({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, d.body));
                                null != a && null != d.body.guild_member && s.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: a,
                                    guildMember: d.body.guild_member
                                });
                                return [2, d.body];
                            case 3:
                                null != (f = h.sent()) && null != (null == f ? void 0 : f.body) && E.warn("fetchProfile error: ".concat(f.body.code, " - ").concat(f.body.message));
                                s.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw f;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return b.apply(this, arguments)
            }

            function T(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = f((function(e) {
                    var t, n;
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                s.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: l.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent();
                                s.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (n = r.sent()) ? void 0 : n.body) && E.warn("fetchMutualFriends error: ".concat(n.body.code, " - ").concat(n.body.message));
                                s.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw n;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        542517: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(265688),
                i = n(2590),
                a = n(966334);

            function o(e) {
                return null != e && e.type === i.IIU.LISTENING && e.name === r.Z.get(i.ABu.SPOTIFY).name && null != e.party && null != e.party.id && (0, a.Ps)(e.party.id)
            }
        },
        597967: (e, t, n) => {
            n.d(t, {
                t: () => f,
                Q: () => _
            });
            var r = n(973469),
                i = n(671723),
                a = n(375759),
                o = n(652591),
                s = n(396043),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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

            function f() {
                var e, t, n, a, o, s = r.Z.getGoLiveSource();
                if (null != s) {
                    e = s.quality.resolution;
                    t = s.quality.frameRate;
                    if (null != s.desktopSource) {
                        n = s.desktopSource.soundshareSession;
                        var u, c, l = null != s.desktopSource.sourcePid ? i.ZP.getGameForPID(s.desktopSource.sourcePid) : null;
                        a = null !== (u = null == l ? void 0 : l.name) && void 0 !== u ? u : null;
                        o = null !== (c = null == l ? void 0 : l.id) && void 0 !== c ? c : null
                    }
                }
                return {
                    video_input_resolution: e,
                    video_input_frame_rate: t,
                    soundshare_session: n,
                    share_game_name: a,
                    share_game_id: o
                }
            }

            function _(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = a.Z.getGame();
                t = d(l({}, t), {
                    overlay_game_name: null != r ? r.name : "Unknown Game",
                    overlay_app_id: null != r ? r.id : null
                });
                switch (e) {
                    case u.rMx.VOICE_CHANNEL_SELECTED:
                    case u.rMx.SETTINGS_PANE_VIEWED:
                    case u.rMx.GUILD_VIEWED:
                    case u.rMx.CHANNEL_OPENED:
                        return (0, s.yw)(e, t, n);
                    default:
                        return o.default.track(e, t, {
                            flush: n
                        })
                }
            }
        },
        446502: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(296602),
                i = n(567403),
                a = n(247075);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = new r.Z("GuildVersions");
            const c = new(function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.pending = new Map;
                    this.committed = new Map;
                    this.pauseTokens = new Set;
                    this.actions = {
                        BACKGROUND_SYNC: function(e, n) {
                            return t.handleBackgroundSync(e, n)
                        },
                        CHANNEL_CREATE: function(e, n) {
                            return t.handleChannelCreate(e, n)
                        },
                        CHANNEL_DELETE: function(e, n) {
                            return t.handleChannelDelete(e, n)
                        },
                        CHANNEL_UPDATES: function(e, n) {
                            return t.handleChannelUpdates(e, n)
                        },
                        CLEAR_GUILD_CACHE: function(e, n) {
                            return t.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(e, n) {
                            return t.handleConnectionOpen(e, n)
                        },
                        GUILD_CREATE: function(e, n) {
                            return t.handleGuildCreate(e, n)
                        },
                        GUILD_DELETE: function(e, n) {
                            return t.handleGuildDelete(e, n)
                        },
                        GUILD_EMOJIS_UPDATE: function(e, n) {
                            return t.handleGuildEmojisUpdate(e, n)
                        },
                        GUILD_ROLE_CREATE: function(e, n) {
                            return t.handleGuildRoleChange(e, n)
                        },
                        GUILD_ROLE_DELETE: function(e, n) {
                            return t.handleGuildRoleDelete(e, n)
                        },
                        GUILD_ROLE_UPDATE: function(e, n) {
                            return t.handleGuildRoleChange(e, n)
                        },
                        GUILD_STICKERS_UPDATE: function(e, n) {
                            return t.handleGuildStickersUpdate(e, n)
                        },
                        GUILD_UPDATE: function(e, n) {
                            return t.handleGuildUpdate(e, n)
                        }
                    }
                }
                var t = e.prototype;
                t.getCommittedVersions = function() {
                    try {
                        var e, t, n = null === (t = null === (e = a.Z.versions()) || void 0 === e ? void 0 : e.getManySyncUnsafe()) || void 0 === t ? void 0 : t.map((function(e) {
                            return [e.id, e.version]
                        }));
                        return new Map(null != n ? n : [])
                    } catch (e) {
                        u.warn("couldn't load guild versions", e);
                        return new Map
                    }
                };
                t.pause = function(e) {
                    var t = Symbol(e);
                    this.pauseTokens.add(t);
                    return t
                };
                t.resume = function(e, t) {
                    this.pauseTokens.delete(e) && 0 === this.pauseTokens.size && this.commit(t)
                };
                t.remove = function(e, t) {
                    this.deleteWith(e);
                    this.commit(t)
                };
                t.handleBackgroundSync = function(e, t) {
                    var n = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var o, s = e.guilds[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                            var u = o.value;
                            "unavailable" !== u.data_mode && this.updateWith(u.id, [u]);
                            null == i.Z.getGuild(u.id) && this.remove(u.id, t)
                        }
                    } catch (e) {
                        r = !0;
                        a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    this.commit(t)
                };
                t.handleConnectionOpen = function(e, t) {
                    this.reset();
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e.guilds[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            this.updateWith(s.id, [s])
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    this.commit(t)
                };
                t.handleGuildCreate = function(e, t) {
                    var n, r = e.guild,
                        i = e.guild.id;
                    this.updateWith(i, [r]);
                    this.updateWith(i, r.emojis);
                    this.updateWith(i, r.stickers);
                    this.updateWith(i, r.channels);
                    this.updateWith(i, null === (n = r.channelUpdates) || void 0 === n ? void 0 : n.writes);
                    this.updateWith(i, Array.isArray(r.roles) ? r.roles : Object.values(r.roles));
                    this.commit(t)
                };
                t.handleGuildUpdate = function(e, t) {
                    var n = e.guild,
                        r = e.guild.id;
                    this.updateWith(r, [n]);
                    this.updateWith(r, n.emojis);
                    this.updateWith(r, n.stickers);
                    this.updateWith(r, Array.isArray(n.roles) ? n.roles : Object.values(n.roles));
                    this.commit(t)
                };
                t.handleGuildDelete = function(e, t) {
                    this.deleteWith(e.guild.id);
                    this.commit(t)
                };
                t.handleGuildRoleChange = function(e, t) {
                    this.updateWith(e.guildId, [e.role]);
                    this.commit(t)
                };
                t.handleGuildRoleDelete = function(e, t) {
                    this.updateWith(e.guildId, [{
                        version: e.version
                    }]);
                    this.commit(t)
                };
                t.handleGuildEmojisUpdate = function(e, t) {
                    this.updateWith(e.guildId, e.emojis);
                    this.commit(t)
                };
                t.handleGuildStickersUpdate = function(e, t) {
                    this.updateWith(e.guildId, e.stickers);
                    this.commit(t)
                };
                t.handleChannelCreate = function(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]);
                    this.commit(t)
                };
                t.handleChannelUpdates = function(e, t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e.channels[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            null != s.guild_id && this.updateWith(s.guild_id, [s])
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    this.commit(t)
                };
                t.handleChannelDelete = function(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]);
                    this.commit(t)
                };
                t.handleClearGuildCache = function(e) {
                    this.reset();
                    a.Z.versionsTransaction(e).delete()
                };
                t.handleReset = function() {
                    this.reset()
                };
                t.reset = function() {
                    this.committed = new Map;
                    this.pending = new Map;
                    this.pauseTokens = new Set
                };
                t.deleteWith = function(e) {
                    this.pending.set(e, null)
                };
                t.updateWith = function(e, t) {
                    if (null != t) {
                        var n, r, i = Math.max(null !== (n = this.committed.get(e)) && void 0 !== n ? n : 0, null !== (r = this.pending.get(e)) && void 0 !== r ? r : 0),
                            a = this.computeLatestVersion(i, t);
                        a > i && this.pending.set(e, a)
                    }
                };
                t.computeLatestVersion = function(e, t) {
                    var n = e,
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                            var u, c = o.value;
                            n = Math.max(n, null !== (u = c.version) && void 0 !== u ? u : 0)
                        }
                    } catch (e) {
                        i = !0;
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                };
                t.commit = function(e) {
                    if (this.pending.size > 0 && 0 === this.pauseTokens.size) {
                        var t = a.Z.versionsTransaction(e),
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, u = this.pending[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                var c = s(o.value, 2),
                                    l = c[0],
                                    d = c[1];
                                if (null != d) {
                                    t.put({
                                        id: l,
                                        version: d
                                    });
                                    this.committed.set(l, d)
                                } else {
                                    t.delete(l);
                                    this.committed.delete(l)
                                }
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        this.pending.clear()
                    }
                };
                return e
            }())
        },
        936219: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(296602),
                i = n(247075),
                a = n(146521);

            function o(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }
            var s = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                u = "version",
                c = new r.Z("KvCacheVersion");
            const l = new(function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.actions = {
                        CLEAR_GUILD_CACHE: function(e, n) {
                            return t.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(e, n) {
                            return t.handleWrite(n)
                        },
                        WRITE_CACHES: function(e, n) {
                            return t.handleWrite(n)
                        }
                    }
                }
                var t = e.prototype;
                t.okAsync = function(e) {
                    return (t = function() {
                        var t;
                        return s(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, i.Z.cache(e).get(u)];
                                case 1:
                                    return [2, null == (t = n.sent()) ? null : 3 === t]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var a = t.apply(e, n);

                            function s(e) {
                                o(a, r, i, s, u, "next", e)
                            }

                            function u(e) {
                                o(a, r, i, s, u, "throw", e)
                            }
                            s(void 0)
                        }))
                    })();
                    var t
                };
                t.okSync = function(e) {
                    try {
                        var t = i.Z.cache(e).getSyncUnsafe(u);
                        return null == t ? null : 3 === t
                    } catch (e) {
                        c.log("couldn't read version from database: ".concat(e.message));
                        return !1
                    }
                };
                t.handleClearGuildCache = function(e) {
                    i.Z.cacheTransaction(e).delete(u);
                    i.Z.cacheTransaction(e).delete("CacheStore.Nonce");
                    a.Z.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
                };
                t.handleWrite = function(e) {
                    i.Z.cacheTransaction(e).put("hello", "👋");
                    i.Z.cacheTransaction(e).put(u, 3)
                };
                t.handleReset = function() {};
                return e
            }())
        },
        175072: (e, t, n) => {
            n.d(t, {
                w: () => r,
                H: () => i
            });
            var r, i;
            ! function(e) {
                e[e.GAME = 1] = "GAME";
                e[e.TICKETED_EVENTS = 3] = "TICKETED_EVENTS";
                e[e.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS"
            }(r || (r = {}));
            ! function(e) {
                e[e.BOT = 0] = "BOT";
                e[e.SERVER = 1] = "SERVER";
                e[e.SYSTEM_DM = 2] = "SYSTEM_DM";
                e[e.OFFICIAL = 3] = "OFFICIAL";
                e[e.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM";
                e[e.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER";
                e[e.AI = 6] = "AI";
                e[e.REMIX = 7] = "REMIX"
            }(i || (i = {}))
        },
        190344: (e, t, n) => {
            n.d(t, {
                $C: () => r,
                HD: () => i,
                tI: () => a
            });
            var r;
            ! function(e) {
                e[e.GLOBAL = 0] = "GLOBAL";
                e[e.GUILD = 1] = "GUILD"
            }(r || (r = {}));

            function i(e) {
                return {
                    session_id: e.sessionId,
                    user_id: e.userId,
                    application_id: e.applicationId,
                    channel_id: e.channelId,
                    stream_key: e.streamKey
                }
            }

            function a(e, t, n) {
                return {
                    sessionId: e.session_id,
                    userId: t,
                    applicationId: e.application_id,
                    channelId: e.channel_id,
                    streamKey: e.stream_key,
                    source: n
                }
            }
        },
        426909: (e, t, n) => {
            n.d(t, {
                Z: () => z
            });
            var r = n(202351),
                i = n(630631),
                a = n(744564),
                o = n(446502),
                s = n(296602),
                u = n(664625),
                c = n(61209),
                l = n(464187),
                d = n(102921),
                f = "stable-50";

            function _() {
                return {
                    nonce: "",
                    useGuildVersions: !1,
                    highestLastMessageId: "0",
                    readStateVersion: 0,
                    userGuildSettingsVersion: -1,
                    userSettingsVersion: -1,
                    version: f,
                    cacheCreationDate: null,
                    privateChannelsVersion: "0",
                    apiCodeVersion: 0,
                    guildIdsRequiringDeletedIdsSync: [],
                    lastSelectedGuildId: null
                }
            }
            var p = "ClientStateStore",
                h = _();
            h.version === f && null != h.cacheCreationDate && h.cacheCreationDate + 2592e6 > Date.now() || (h = _());
            var E = h;
            var m = n(847388);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function S(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function v(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var O, C, A, R = new s.Z("ClientStateStore"),
                N = E.nonce,
                D = E.useGuildVersions,
                w = E.highestLastMessageId,
                P = E.readStateVersion,
                L = E.userGuildSettingsVersion,
                U = null !== (O = E.userSettingsVersion) && void 0 !== O ? O : -1,
                k = E.cacheCreationDate,
                M = E.apiCodeVersion,
                j = null !== (C = E.privateChannelsVersion) && void 0 !== C ? C : "0",
                G = new Set(null !== (A = E.guildIdsRequiringDeletedIdsSync) && void 0 !== A ? A : []),
                B = E.lastSelectedGuildId,
                Z = !1;

            function V(e) {
                null != e && 1 === d.Z.compare(e, w) && (w = e)
            }

            function x() {
                w = "0";
                P = 0;
                L = -1;
                U = -1;
                j = "0";
                i.Z.remove(p);
                M = 0;
                G.clear()
            }
            var H = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default);
                    this.syncWith([l.Z], (function() {
                        if (!Z) return !1;
                        B = l.Z.getGuildId()
                    }));
                    0
                };
                r.persist = function(e) {
                    R.log("writing ClientStateStore (nonce: ".concat(e, ")"));
                    null == k && (k = Date.now());
                    N = e;
                    u.default.getId(), t = {
                        nonce: e,
                        version: f,
                        useGuildVersions: D,
                        highestLastMessageId: w,
                        readStateVersion: P,
                        userGuildSettingsVersion: L,
                        userSettingsVersion: U,
                        cacheCreationDate: k,
                        privateChannelsVersion: j,
                        apiCodeVersion: M,
                        guildIdsRequiringDeletedIdsSync: Array.from(G),
                        lastSelectedGuildId: B
                    }, i.Z.set(p, t);
                    var t;
                    i.Z.remove("GuildIdsRequiringDeletedIdsSync")
                };
                r.clear = function() {
                    x()
                };
                r.getClientState = function() {
                    return {
                        knownGuildVersions: D && (0, m.O)() ? Object.fromEntries(o.Z.getCommittedVersions()) : {},
                        highestLastMessageId: w,
                        readStateVersion: P,
                        userGuildSettingsVersion: L,
                        userSettingsVersion: U,
                        privateChannelsVersion: j,
                        apiCodeVersion: M,
                        lastSelectedGuildId: B
                    }
                };
                r.getGuildIdsRequiringDeletedIdsSync = function() {
                    return G
                };
                r.getSavedNonce = function() {
                    return N
                };
                return n
            }(r.ZP.Store);
            H.displayName = "ClientStateStore";
            const z = new H(a.Z, {
                BACKGROUND_SYNC: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, a = e.guilds[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                            var o = i.value;
                            "partial" === o.data_mode && o.unableToSyncDeletes && G.add(o.id)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    null != e.apiCodeVersion && (M = e.apiCodeVersion)
                },
                CONNECTION_OPEN: function(e) {
                    var t, n, r = e.guilds,
                        i = e.readState,
                        a = e.userGuildSettings,
                        o = e.userSettingsProto,
                        s = e.apiCodeVersion;
                    P = i.version;
                    L = a.version;
                    U = null !== (n = null == o || null === (t = o.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
                    M = s;
                    Z = !0;
                    D = !0;
                    var u = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var d, f = r[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                            var _, p, h, E, m = d.value;
                            m.unableToSyncDeletes && G.add(m.id);
                            m.unableToSyncDeletes && G.add(m.id);
                            null === (_ = m.channels) || void 0 === _ || _.forEach((function(e) {
                                return V(e.lastMessageId)
                            }));
                            null === (p = m.channelUpdates) || void 0 === p || null === (h = p.writes) || void 0 === h || h.forEach((function(e) {
                                return V(e.lastMessageId)
                            }));
                            null === (E = m.channelTimestampUpdates) || void 0 === E || E.forEach((function(e) {
                                return V(e.last_message_id)
                            }))
                        }
                    } catch (e) {
                        c = !0;
                        l = e
                    } finally {
                        try {
                            u || null == f.return || f.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    var e = c.Z.getMutablePrivateChannels();
                    for (var t in e) {
                        1 === d.Z.compare(t, j) && (j = t);
                        var n = e[t].lastMessageId;
                        null != n && 1 === d.Z.compare(n, j) && (j = n)
                    }
                },
                DELETED_ENTITY_IDS: function(e) {
                    G.delete(e.guild_id)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n = e.message,
                        r = n.id,
                        i = n.channel_id,
                        a = e.isPushNotification,
                        o = e.optimistic;
                    if (!a && !o) {
                        V(r);
                        (null === (t = c.Z.getChannel(i)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === d.Z.compare(r, j) && (j = r)
                    }
                },
                GUILD_CREATE: function(e) {
                    var t, n, r, i, a = e.guild;
                    if (!a.unavailable) {
                        a.unableToSyncDeletes && G.add(a.id);
                        null === (t = a.channels) || void 0 === t || t.forEach((function(e) {
                            return V(e.lastMessageId)
                        }));
                        null === (n = a.channelUpdates) || void 0 === n || null === (r = n.writes) || void 0 === r || r.forEach((function(e) {
                            return V(e.lastMessageId)
                        }));
                        null === (i = a.channelTimestampUpdates) || void 0 === i || i.forEach((function(e) {
                            return V(e.last_message_id)
                        }));
                        a.unableToSyncDeletes && G.add(a.id)
                    }
                },
                CLEAR_GUILD_CACHE: x,
                CLEAR_CACHES: x,
                LOGOUT: x,
                LOGIN: x,
                MESSAGE_ACK: function(e) {
                    var t = e.version,
                        n = S(e, ["version"]);
                    null != t ? P = t : R.log("Received null read states version", n)
                },
                CHANNEL_PINS_ACK: function(e) {
                    var t = e.version,
                        n = S(e, ["version"]);
                    null != t ? P = t : R.log("Received null read states version", n)
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    var t = e.userGuildSettings,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            null != s.version && s.version > L && (L = s.version)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings;
                    if (null != t.proto.versions) {
                        var n;
                        U = null !== (n = t.proto.versions.dataVersion) && void 0 !== n ? n : -1
                    }
                }
            })
        },
        847388: (e, t, n) => {
            n.d(t, {
                O: () => r
            });

            function r() {
                return !1
            }
        },
        453790: (e, t, n) => {
            n.d(t, {
                Rp: () => r,
                OT: () => i,
                dJ: () => a,
                D_: () => u,
                G$: () => c,
                jF: () => l,
                EF: () => d,
                Bg: () => f,
                WM: () => _,
                nU: () => p,
                mg: () => h,
                B2: () => E,
                Hp: () => m,
                XH: () => y,
                MG: () => g,
                Ut: () => S,
                Qr: () => v,
                f_: () => b,
                wD: () => T
            });
            var r, i, a, o = n(296602),
                s = n(53452);
            ! function(e) {
                e[e.DEFAULT = 0] = "DEFAULT"
            }(r || (r = {}));
            ! function(e) {
                e[e.SECONDS_30 = 30 * s.Z.Millis.SECOND] = "SECONDS_30";
                e[e.MINUTES_1 = s.Z.Millis.MINUTE] = "MINUTES_1";
                e[e.MINUTES_2 = 2 * s.Z.Millis.MINUTE] = "MINUTES_2"
            }(i || (i = {}));
            ! function(e) {
                e[e.ALL = 0] = "ALL";
                e[e.FRIENDS = 1] = "FRIENDS"
            }(a || (a = {}));
            var u = "alt+c",
                c = 6 * s.Z.Millis.SECOND,
                l = new o.Z("Clips"),
                d = function(e) {
                    return "Discord_Clip_".concat(e, ".mp4")
                },
                f = 1,
                _ = 1,
                p = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
                h = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
                E = /(Apple M[12].*)/,
                m = .1,
                y = 1,
                g = 200,
                S = "clips-edit",
                v = "clips-gallery",
                b = 640,
                T = 360
        },
        228667: (e, t, n) => {
            n.d(t, {
                oz: () => l,
                T4: () => d,
                fH: () => f,
                Go: () => _
            });
            var r = n(318715),
                i = n(260561),
                a = n(821229),
                o = n(567403),
                s = n(638562),
                u = (0, i.B)({
                    kind: "user",
                    id: "2022-11_clips_experiment",
                    label: "Clips Experiment",
                    defaultConfig: {
                        enableClips: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Clips without upsells",
                        config: {
                            enableClips: !0
                        }
                    }, {
                        id: 2,
                        label: "Clips with upsells",
                        config: {
                            enableClips: !0
                        }
                    }]
                }),
                c = (0, i.B)({
                    kind: "guild",
                    id: "2023-08_clips_public_test",
                    label: "Clips (Public Test)",
                    defaultConfig: {
                        enableClips: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Clips",
                        config: {
                            enableClips: !0
                        }
                    }]
                });

            function l() {
                return !!(0, s.Z)() && (!!o.Z.getGuildIds().some((function(e) {
                    return c.getCurrentConfig({
                        guildId: e,
                        location: "areClipsEnabledForUser"
                    }, {
                        autoTrackExposure: !1
                    }).enableClips
                })) || u.getCurrentConfig({
                    location: "areClipsEnabledForUser"
                }, {
                    autoTrackExposure: !1
                }).enableClips)
            }

            function d(e) {
                return !!(0, s.Z)() && (!!c.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "areClipsEnabledForGuild"
                }, {
                    autoTrackExposure: !1
                }).enableClips || u.getCurrentConfig({
                    location: "areClipsEnabledForGuild"
                }, {
                    autoTrackExposure: !1
                }).enableClips)
            }

            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, s.Z)(),
                    i = c.useExperiment({
                        guildId: null != e ? e : "",
                        location: t
                    }, {
                        autoTrackExposure: n && r
                    }).enableClips,
                    a = u.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: !1
                    });
                return (i || a.enableClips) && r
            }

            function _() {
                var e = (0, r.Wu)([o.Z], (function() {
                        return o.Z.getGuildIds()
                    })),
                    t = (0, r.ZP)([a.Z], (function() {
                        return e.some((function(e) {
                            return c.getCurrentConfig({
                                guildId: e,
                                location: "useEnableClips"
                            }, {
                                autoTrackExposure: !1
                            }).enableClips
                        }))
                    }), [e]),
                    n = u.useExperiment({
                        location: "useEnableClips"
                    }, {
                        autoTrackExposure: !1
                    }).enableClips,
                    i = (0, s.Z)();
                return (t || n) && i
            }
        },
        335072: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(202351),
                i = n(744564),
                a = n(306472),
                o = n(306263),
                s = n(664625),
                u = n(671723),
                c = n(661123),
                l = n(633371),
                d = n(453790),
                f = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            p(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            p(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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

            function v(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || C(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || C(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

            function A(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var R = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                N = "default",
                D = [],
                w = !1,
                P = null,
                L = null,
                U = {},
                k = {
                    clipsEnabled: !1,
                    storageLocation: N,
                    clipsQuality: d.Rp.DEFAULT,
                    clipsLength: d.OT.SECONDS_30,
                    viewerClipsEnabled: !0,
                    viewerConnectivity: d.dJ.ALL
                },
                M = {
                    clipsSettings: k,
                    hardwareClassification: null,
                    hardwareClassificationVersion: 0,
                    newClipIds: [],
                    hasClips: !1
                };

            function j() {
                return (j = h((function() {
                    var e;
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return M.clipsSettings.storageLocation !== N || (null == a.Z || null == a.Z.remoteApp) ? [2] : [4, a.Z.remoteApp.getPath("documents")];
                            case 1:
                                e = t.sent();
                                M.clipsSettings.storageLocation = e;
                                B.emitChange();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var G = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = A(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (M = e);
                    ! function() {
                        j.apply(this, arguments)
                    }();
                    this.waitFor(u.ZP)
                };
                r.getIsSavingClip = function() {
                    return w
                };
                r.getClips = function() {
                    return D
                };
                r.getUserAgnosticState = function() {
                    return M
                };
                r.getSettings = function() {
                    return M.clipsSettings
                };
                r.getLastClipsSession = function() {
                    return L
                };
                r.getClipsWarningShown = function(e) {
                    return P === e
                };
                r.getHardwareClassification = function() {
                    return M.hardwareClassification
                };
                r.getHardwareClassificationVersion = function() {
                    return M.hardwareClassificationVersion
                };
                r.isClipsEnabledForUser = function(e) {
                    var t, n;
                    return null !== (n = null === (t = U[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
                };
                r.isVoiceRecordingAllowedForUser = function(e) {
                    var t, n;
                    return null !== (n = null === (t = U[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
                };
                r.hasClips = function() {
                    return M.hasClips
                };
                return n
            }(r.ZP.DeviceSettingsStore);
            G.displayName = "ClipsStore";
            G.persistKey = "ClipsStore";
            G.migrations = [function(e) {
                return {
                    clipsSettings: null != e ? e : k,
                    newClipsCount: 0
                }
            }, function(e) {
                var t = g({}, k, e.clipsSettings);
                return S(g({}, e), {
                    clipsSettings: t
                })
            }, function(e) {
                var t;
                return S(g({}, e), {
                    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
                })
            }, function(e) {
                var t, n;
                return S(g({}, e), {
                    hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
                    hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
                })
            }, function(e) {
                var t;
                return S(g({}, e), {
                    hasClips: null !== (t = e.hasClips) && void 0 !== t && t
                })
            }];
            var B = new G(i.Z, {
                CLIPS_SETTINGS_UPDATE: function(e) {
                    var t = e.settings;
                    M = S(g({}, M), {
                        clipsSettings: g({}, M.clipsSettings, t)
                    })
                },
                CLIPS_SAVE_CLIP: function(e) {
                    var t, n = e.clip;
                    w = !1;
                    L = S(g({
                        applicationName: n.applicationName,
                        ended: !1
                    }, L), {
                        newClipIds: I(null !== (t = null == L ? void 0 : L.newClipIds) && void 0 !== t ? t : []).concat([n.id])
                    });
                    M = S(g({}, M), {
                        newClipIds: I(M.newClipIds).concat([n.id])
                    });
                    D = [n].concat(I(D));
                    M.hasClips = !0
                },
                CLIPS_SAVE_CLIP_ERROR: function() {
                    w = !1
                },
                CLIPS_SAVE_CLIP_START: function() {
                    w = !0
                },
                STREAM_START: function(e) {
                    var t = e.sourceName,
                        n = e.pid;
                    if (!M.clipsSettings.clipsEnabled) return !1;
                    var r = t;
                    if (null != n) {
                        var i, a = u.ZP.getGameForPID(n);
                        r = null !== (i = null == a ? void 0 : a.name) && void 0 !== i ? i : r
                    }
                    if (null == r || "" === r) return !1;
                    L = {
                        applicationName: r,
                        newClipIds: [],
                        ended: !1
                    }
                },
                STREAM_STOP: function(e) {
                    var t = e.streamKey;
                    if (null == L) return !1;
                    if ((0, o.my)(t).ownerId !== s.default.getId()) return !1;
                    L = 0 === L.newClipIds.length ? null : S(g({}, L), {
                        ended: !0
                    })
                },
                CLIPS_CLEAR_CLIPS_SESSION: function() {
                    if (null == L) return !1;
                    L = null
                },
                CLIPS_CLEAR_NEW_CLIP_IDS: function() {
                    M.newClipIds = []
                },
                CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
                    M.hasClips = e.clips.length > 0;
                    D = e.clips
                },
                CLIPS_DELETE_CLIP: function(e) {
                    0 === (D = D.filter((function(t) {
                        return t.filepath !== e.filepath
                    }))).length && (M.hasClips = !1)
                },
                CLIPS_UPDATE_METADATA: function(e) {
                    var t = e.clip,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = D.entries()[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = T(a.value, 2),
                                u = s[0];
                            if (s[1].id === t.id) {
                                D[u] = t;
                                D = I(D);
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                RTC_CONNECTION_FLAGS: function(e) {
                    U[e.userId] = {
                        clipsEnabled: (0, c.yE)(e.flags, f.BVn.CLIPS_ENABLED),
                        allowVoiceRecording: (0, c.yE)(e.flags, f.BVn.ALLOW_VOICE_RECORDING)
                    }
                },
                CLIPS_SHOW_CALL_WARNING: function(e) {
                    var t = e.channelId;
                    P = t
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    e.channelId !== P && (P = null)
                },
                CLIPS_CLASSIFY_HARDWARE: function(e) {
                    var t = e.classification,
                        n = M.hardwareClassification;
                    M.hardwareClassificationVersion = d.WM;
                    M.hardwareClassification = t;
                    M.hardwareClassification === l.x.MEETS_AUTO_ENABLE && n !== l.x.MEETS_AUTO_ENABLE && (M.clipsSettings.clipsEnabled = !0)
                },
                CLIPS_INIT: function(e) {
                    var t = e.applicationName;
                    if (!M.clipsSettings.clipsEnabled) return !1;
                    L = {
                        applicationName: t,
                        newClipIds: [],
                        ended: !1
                    }
                }
            });
            const Z = B
        },
        633371: (e, t, n) => {
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.BELOW_MINIMUM = "below_minimum";
                e.MEETS_MINIMUM = "meets_minimum";
                e.MEETS_AUTO_ENABLE = "meets_auto_enable"
            }(r || (r = {}))
        },
        638562: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(973469),
                i = n(120415),
                a = n(36256);

            function o() {
                return i.nI() && r.Z.getMediaEngine().supports(a.AN.CLIPS)
            }
        },
        450136: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(245353),
                i = n(135855),
                a = n(2590);

            function o(e) {
                var t = null;
                if (null != e.emojiId && "0" !== e.emojiId) {
                    var n = r.Z.getUsableCustomEmojiById(e.emojiId);
                    t = null != n ? {
                        id: n.id,
                        name: n.name,
                        animated: n.animated
                    } : null
                } else if (null != e.emojiName && "" !== e.emojiName) {
                    var o = i.ZP.getByName(i.ZP.convertSurrogateToName(e.emojiName, !1));
                    t = null != o ? {
                        id: null,
                        name: o.surrogates,
                        animated: !1
                    } : null
                }
                var s = Number(e.expiresAtMs);
                return {
                    name: "Custom Status",
                    type: a.IIU.CUSTOM_STATUS,
                    state: e.text.length > 0 ? e.text : void 0,
                    timestamps: s > 0 ? {
                        end: s
                    } : void 0,
                    emoji: t
                }
            }
        },
        652555: (e, t, n) => {
            n.d(t, {
                Z: () => $n
            });
            var r = n(496486),
                i = n.n(r),
                a = n(202351),
                o = n(744564),
                s = n(146521),
                u = n(296602),
                c = n(306263),
                l = n(664625),
                d = n(610773),
                f = n(61209),
                _ = n(870614),
                p = n(973469),
                h = n(311923),
                E = n(715107),
                m = n(436154),
                y = n(69660),
                g = n(441143),
                S = n.n(g),
                v = n(999591),
                b = n(575494),
                T = n(17916),
                I = n(125776),
                O = n(426909),
                C = n(582906),
                A = n(55609),
                R = n(118044),
                N = n(247162),
                D = n(22176);
            var w = n(113469);

            function P(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function k(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && j(e, t)
            }

            function M(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? P(e) : t
            }

            function j(e, t) {
                j = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return j(e, t)
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e) {
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
                    var n, r = U(e);
                    if (t) {
                        var i = U(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }
            var Z = {}.NativeModules,
                V = [],
                x = function() {
                    function e(t) {
                        L(this, e);
                        this._onDataReady = null;
                        this._gatewayEncoding = t
                    }
                    var t = e.prototype;
                    t.bindWebSocket = function(e) {};
                    t.feed = function(e) {};
                    t.dataReady = function(e) {
                        this._onDataReady = e
                    };
                    e.canUse = function() {
                        return !1
                    };
                    return e
                }();
            V.push(function(e) {
                k(r, e);
                var t = B(r);

                function r(e) {
                    L(this, r);
                    var i;
                    (i = t.call(this, e))._pako = n(999591);
                    var a = i._pako;
                    (i._inflate = new a.Inflate({
                        chunkSize: 65536,
                        to: i._gatewayEncoding.wantsString() ? "string" : ""
                    })).onEnd = i.handleFlushEnd.bind(P(i));
                    return i
                }
                var i = r.prototype;
                i.getAlgorithm = function() {
                    return "zlib-stream"
                };
                i.usesLegacyCompression = function() {
                    return !1
                };
                i.feed = function(e) {
                    var t = this._pako,
                        n = this._inflate;
                    if (null == n) throw new Error("Trying to feed to closed compression adapter");
                    if (null === this._onDataReady) throw new Error("Cannot feed unless a data ready callback is registered.");
                    if (!(e instanceof ArrayBuffer)) throw new Error("Expected array buffer, but got " + (void 0 === e ? "undefined" : G(e)));
                    var r = new DataView(e),
                        i = r.byteLength >= 4 && 65535 === r.getUint32(r.byteLength - 4, !1);
                    n.push(e, !!i && t.Z_SYNC_FLUSH)
                };
                i.close = function() {
                    if (null != this._inflate) {
                        this._inflate.onEnd = null;
                        this._inflate.chunks = []
                    }
                    this._inflate = null
                };
                i.handleFlushEnd = function(e) {
                    var t = this._pako,
                        n = this._inflate;
                    if (null != n) {
                        if (e !== t.Z_OK) throw new Error("zlib error, ".concat(e, ", ").concat(n.strm.msg));
                        var r, i = n.chunks,
                            a = i.length;
                        if (this._gatewayEncoding.wantsString()) r = a > 1 ? i.join("") : i[0];
                        else if (a > 1) {
                            for (var o = 0, s = 0; s < a; s++) o += i[s].length;
                            for (var c = new Uint8Array(o), l = 0, d = 0; d < a; d++) {
                                var f = i[d];
                                c.set(f, l);
                                l += f.length
                            }
                            r = c
                        } else r = i[0];
                        i.length = 0;
                        null != this._onDataReady && this._onDataReady(r)
                    } else new u.Z("GatewayCompressionHandler").error("flush end happened on closed compression adapter")
                };
                r.canUse = function() {
                    return void 0 !== window.Uint8Array
                };
                return r
            }(x));
            V.push(function(e) {
                k(r, e);
                var t = B(r);

                function r() {
                    L(this, r);
                    var e;
                    (e = t.apply(this, arguments))._pako = n(999591);
                    return e
                }
                var i = r.prototype;
                i.getAlgorithm = function() {
                    return null
                };
                i.usesLegacyCompression = function() {
                    return !0
                };
                i.feed = function(e) {
                    var t = this._pako;
                    e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
                        to: "string"
                    }));
                    if (null == this._onDataReady) throw new Error("Cannot feed unless a data ready callback is registered.");
                    this._onDataReady(e)
                };
                i.close = function() {};
                r.canUse = function() {
                    return !0
                };
                return r
            }(x));
            V.push(function(e) {
                k(n, e);
                var t = B(n);

                function n(e) {
                    L(this, n);
                    var r;
                    (r = t.call(this, e))._socketId = null;
                    return r
                }
                var r = n.prototype;
                r.bindWebSocket = function(e) {
                    this.close();
                    this._socketId = e._socketId;
                    Z.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
                };
                r.getAlgorithm = function() {
                    return "zlib-stream"
                };
                r.usesLegacyCompression = function() {
                    return !1
                };
                r.feed = function(e) {
                    if (null == this._onDataReady) throw new Error("Cannot feed unless a data ready callback is registered.");
                    null !== e && this._onDataReady(e)
                };
                r.close = function() {
                    var e = this._socketId;
                    this._socketId = null;
                    null !== e && Z.DCDCompressionManager.disableZlibStreamSupport(e)
                };
                n.canUse = function() {
                    return !1
                };
                return n
            }(x));
            var H = function(e) {
                k(n, e);
                var t = B(n);

                function n() {
                    L(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getAlgorithm = function() {
                    return null
                };
                r.usesLegacyCompression = function() {
                    return !1
                };
                r.feed = function(e) {
                    if (null == this._onDataReady) throw new Error("Cannot feed unless a data ready callback is registered.");
                    this._onDataReady(e)
                };
                r.close = function() {};
                n.canUse = function() {
                    return !0
                };
                return n
            }(x);
            V.push(H);
            var z = i().find(V, (function(e) {
                return e.canUse()
            }));
            w.s.isDiscordGatewayPlaintextSet() && (z = H);
            const F = z;
            var Y = n(120415),
                W = n(310126);
            var K = function() {
                    if (Y.FB) {
                        var e;
                        try {
                            e = W.ZP.requireModule("discord_erlpack")
                        } catch (t) {
                            try {
                                e = W.ZP.requireModule("erlpack")
                            } catch (e) {}
                        }
                        if (null != e) return function() {
                            function t() {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, t)
                            }
                            var n = t.prototype;
                            n.pack = function(t) {
                                return e.pack(t).buffer
                            };
                            n.unpack = function(t) {
                                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                try {
                                    return e.unpack(t)
                                } catch (e) {
                                    new u.Z("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                                        erlpackUnpackError: e,
                                        erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                        erlpackDataLength: null != t ? t.length : null
                                    });
                                    throw e
                                }
                            };
                            n.getName = function() {
                                return "etf"
                            };
                            n.wantsString = function() {
                                return !1
                            };
                            t.canUse = function() {
                                return null != e
                            };
                            return t
                        }()
                    }
                }(),
                q = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    var t = e.prototype;
                    t.pack = function(e) {
                        return JSON.stringify(e)
                    };
                    t.unpack = function(e) {
                        if ("string" != typeof e) throw new Error("Expected a string to be passed to JSONEncoding.unpack");
                        return JSON.parse(e)
                    };
                    t.getName = function() {
                        return "json"
                    };
                    t.wantsString = function() {
                        return !0
                    };
                    return e
                }(),
                J = void 0 !== K ? K : q;
            w.s.isDiscordGatewayPlaintextSet() && (J = q);
            const Q = J;
            n(701456);
            var $ = n(473903),
                X = n(652591),
                ee = n(2590);

            function te(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ne(e, t) {
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

            function re(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function ie(e, t, n, r, i) {
                var a, o, s, u = function(e) {
                    var t = e._trace,
                        n = {};
                    try {
                        var r = JSON.parse(t);
                        null != r[0] && "" !== r[0] && r[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(r[1].micros / 1e3));
                        se(r, (function(e, t) {
                            "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
                        }))
                    } catch (e) {}
                    return n
                }(t);
                T.Z.addDetail("payload_size(kb)", Math.round(r.uncompressed_byte_size / 1024));
                T.Z.addDetail("server_time(ms)", null !== (a = u.identify_total_server_duration_ms) && void 0 !== a ? a : 0);
                var c = ne(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            te(e, t, n[t])
                        }))
                    }
                    return e
                }({}, r, u, function(e) {
                    var t = e.guilds,
                        n = 0,
                        r = 0;
                    t.forEach((function(e) {
                        if (!e.unavailable) {
                            var t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                            null != t && null != t.forEach && t.forEach((function(e) {
                                r++;
                                e.type === ee.d4z.GUILD_CATEGORY && n++
                            }))
                        }
                    }));
                    return {
                        num_guilds: t.length,
                        num_guild_channels: r,
                        num_guild_category_channels: n
                    }
                }(t), i), {
                    duration_ms_since_identify_start: n - e.identifyStartTime,
                    duration_ms_since_connection_start: n - e.connectionStartTime,
                    duration_ms_since_emit_start: Date.now() - n,
                    is_reconnect: e.hasConnectedOnce,
                    is_fast_connect: e.isFastConnect,
                    did_force_clear_guild_hashes: e.didForceClearGuildHashes,
                    identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
                    identify_compressed_byte_size: e.identifyCompressedByteSize,
                    had_cache_at_startup: null !== (o = e.analytics.hadCacheAtStartup) && void 0 !== o && o,
                    used_cache_at_startup: null !== (s = e.analytics.usedCacheAtStartup) && void 0 !== s && s
                });
                A.Z.attachReadyPayloadProperties(c);
                X.default.track(ee.rMx.READY_PAYLOAD_RECEIVED, c, {
                    logEventProperties: !0
                })
            }

            function ae(e) {
                try {
                    var t, n = null == (r = null === (t = e._trace) || void 0 === t ? void 0 : t[0]) ? null : oe(JSON.parse(r), "");
                    if (null != n) return n
                } catch (e) {}
                var r;
                return null != e._trace ? e._trace.join(" -> ") : "???"
            }

            function oe(e, t) {
                if (null == e) return "";
                for (var n = "", r = 0; r < e.length; r += 2) {
                    n += "\n".concat(t).concat(e[r], ": ").concat(e[r + 1].micros / 1e3);
                    n += oe(e[r + 1].calls, t + "|  ")
                }
                return n
            }

            function se(e, t) {
                if (null != e && e.length > 0)
                    for (var n = 0; n < e.length; n += 2) {
                        var r = e[n],
                            i = e[n + 1];
                        t(r, i.micros);
                        se(i.calls, t)
                    }
            }

            function ue(e) {
                return {
                    connectTime: null != e ? e : 0,
                    numEvents: 0,
                    largestWaitTime: 0,
                    dispatchTime: 0,
                    totalWaitTime: 0,
                    initialWaitTime: 0,
                    startTime: performance.now(),
                    lastUpdateTime: performance.now()
                }
            }
            var ce = n(717187),
                le = n.n(ce);

            function de(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function fe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _e(e) {
                _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _e(e)
            }

            function pe(e, t) {
                return !t || "object" !== me(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function he(e, t) {
                he = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return he(e, t)
            }
            var Ee, me = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ye(e) {
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
                    var n, r = _e(e);
                    if (t) {
                        var i = _e(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return pe(this, n)
                }
            }! function(e) {
                e[e.DISPATCH = 0] = "DISPATCH";
                e[e.HEARTBEAT = 1] = "HEARTBEAT";
                e[e.IDENTIFY = 2] = "IDENTIFY";
                e[e.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE";
                e[e.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE";
                e[e.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING";
                e[e.RESUME = 6] = "RESUME";
                e[e.RECONNECT = 7] = "RECONNECT";
                e[e.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS";
                e[e.INVALID_SESSION = 9] = "INVALID_SESSION";
                e[e.HELLO = 10] = "HELLO";
                e[e.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK";
                e[e.CALL_CONNECT = 13] = "CALL_CONNECT";
                e[e.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS";
                e[e.LOBBY_CONNECT = 15] = "LOBBY_CONNECT";
                e[e.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT";
                e[e.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE";
                e[e.STREAM_CREATE = 18] = "STREAM_CREATE";
                e[e.STREAM_DELETE = 19] = "STREAM_DELETE";
                e[e.STREAM_WATCH = 20] = "STREAM_WATCH";
                e[e.STREAM_PING = 21] = "STREAM_PING";
                e[e.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED";
                e[e.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS";
                e[e.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH";
                e[e.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE";
                e[e.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE";
                e[e.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS";
                e[e.REMOTE_COMMAND = 29] = "REMOTE_COMMAND";
                e[e.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH";
                e[e.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS";
                e[e.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE";
                e[e.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE";
                e[e.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES";
                e[e.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS"
            }(Ee || (Ee = {}));
            var ge = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && he(e, t)
                }(n, e);
                var t = ye(n);

                function n() {
                    de(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.presenceUpdate = function(e, t, n, r, i) {
                    this.send(Ee.PRESENCE_UPDATE, {
                        status: e,
                        since: t,
                        activities: n,
                        afk: r,
                        broadcast: i
                    })
                };
                r.voiceStateUpdate = function(e) {
                    var t = e.guildId,
                        n = void 0 === t ? null : t,
                        r = e.channelId,
                        i = void 0 === r ? null : r,
                        a = e.selfMute,
                        o = void 0 !== a && a,
                        s = e.selfDeaf,
                        u = void 0 !== s && s,
                        c = e.selfVideo,
                        l = void 0 !== c && c,
                        d = e.preferredRegion,
                        f = void 0 === d ? null : d,
                        _ = e.videoStreamParameters,
                        p = void 0 === _ ? null : _,
                        E = e.flags,
                        m = {
                            guild_id: n,
                            channel_id: i,
                            self_mute: o,
                            self_deaf: u,
                            self_video: l,
                            flags: void 0 === E ? 0 : E
                        };
                    null != i && h.Z.shouldIncludePreferredRegion() && (m.preferred_region = f);
                    null != p && (m.tracks = null == p ? void 0 : p.map((function(e) {
                        return {
                            type: e.type,
                            rid: e.rid,
                            quality: e.quality
                        }
                    })));
                    this.send(Ee.VOICE_STATE_UPDATE, m)
                };
                r.voiceServerPing = function() {
                    this.send(Ee.VOICE_SERVER_PING, null)
                };
                r.embeddedActivityClose = function(e, t, n) {
                    this.send(Ee.EMBEDDED_ACTIVITY_CLOSE, {
                        guild_id: null != e ? e : "0",
                        channel_id: t,
                        application_id: n
                    })
                };
                r.requestGuildMembers = function(e, t) {
                    var n = t.query,
                        r = t.limit,
                        i = t.userIds,
                        a = t.presences;
                    this.send(Ee.REQUEST_GUILD_MEMBERS, {
                        guild_id: e,
                        query: n,
                        limit: r,
                        user_ids: i,
                        presences: a
                    })
                };
                r.searchRecentMembers = function(e, t) {
                    var n = t.query,
                        r = t.continuationToken;
                    this.send(Ee.SEARCH_RECENT_MEMBERS, {
                        guild_id: e,
                        query: null != n ? n : "",
                        continuation_token: null != r ? r : null
                    })
                };
                r.updateGuildSubscriptions = function(e, t) {
                    this.send(Ee.GUILD_SUBSCRIPTIONS, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                fe(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        guild_id: e
                    }, t))
                };
                r.callConnect = function(e) {
                    this.send(Ee.CALL_CONNECT, {
                        channel_id: e
                    })
                };
                r.lobbyConnect = function(e, t) {
                    this.send(Ee.LOBBY_CONNECT, {
                        lobby_id: e,
                        lobby_secret: t
                    })
                };
                r.lobbyDisconnect = function(e) {
                    this.send(Ee.LOBBY_DISCONNECT, {
                        lobby_id: e
                    })
                };
                r.lobbyVoiceStatesUpdate = function(e) {
                    this.send(Ee.LOBBY_VOICE_STATES_UPDATE, e.map((function(e) {
                        return {
                            lobby_id: e.lobbyId,
                            self_mute: e.selfMute,
                            self_deaf: e.selfDeaf
                        }
                    })))
                };
                r.streamCreate = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.send(Ee.STREAM_CREATE, {
                        type: e,
                        guild_id: t,
                        channel_id: n,
                        preferred_region: r
                    })
                };
                r.streamWatch = function(e) {
                    this.send(Ee.STREAM_WATCH, {
                        stream_key: e
                    })
                };
                r.streamPing = function(e) {
                    this.send(Ee.STREAM_PING, {
                        stream_key: e
                    })
                };
                r.streamDelete = function(e) {
                    this.send(Ee.STREAM_DELETE, {
                        stream_key: e
                    })
                };
                r.streamSetPaused = function(e, t) {
                    this.send(Ee.STREAM_SET_PAUSED, {
                        stream_key: e,
                        paused: t
                    })
                };
                r.speedTestCreate = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.send(Ee.SPEED_TEST_CREATE, {
                        preferred_region: e
                    })
                };
                r.speedTestDelete = function() {
                    this.send(Ee.SPEED_TEST_DELETE, null)
                };
                r.requestForumUnreads = function(e, t, n) {
                    this.send(Ee.REQUEST_FORUM_UNREADS, {
                        guild_id: e,
                        channel_id: t,
                        threads: n.map((function(e) {
                            return {
                                thread_id: e.threadId,
                                ack_message_id: e.ackMessageId
                            }
                        }))
                    })
                };
                r.requestSoundboardSounds = function(e) {
                    this.send(Ee.REQUEST_SOUNDBOARD_SOUNDS, {
                        guild_ids: e
                    })
                };
                r.requestLastMessages = function(e, t) {
                    this.send(Ee.REQUEST_LAST_MESSAGES, {
                        guild_id: e,
                        channel_ids: t
                    })
                };
                r.getDeletedEntityIdsNotMatchingHash = function(e, t, n, r, i) {
                    this.send(Ee.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
                        guild_id: e,
                        channel_ids_hash: t,
                        role_ids_hash: n,
                        emoji_ids_hash: r,
                        sticker_ids_hash: i
                    })
                };
                r.remoteCommand = function(e, t) {
                    this.send(Ee.REMOTE_COMMAND, {
                        target_session_id: e,
                        payload: t
                    })
                };
                return n
            }(le());
            var Se = !1;

            function ve(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function be(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Te(e) {
                Te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Te(e)
            }

            function Ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        be(e, t, n[t])
                    }))
                }
                return e
            }

            function Oe(e, t) {
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

            function Ce(e, t) {
                return !t || "object" !== Re(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ae(e, t) {
                Ae = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ae(e, t)
            }
            var Re = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ne(e) {
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
                    var n, r = Te(e);
                    if (t) {
                        var i = Te(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Ce(this, n)
                }
            }
            var De = new u.Z("GatewaySocket"),
                we = new Q;

            function Pe(e) {
                var t, n, r = e.gatewayURL,
                    i = e.newCallback,
                    a = e.onOpen,
                    o = e.onMessage,
                    s = e.onError,
                    u = e.onClose,
                    c = window._ws,
                    l = !1,
                    d = !1,
                    f = null,
                    _ = null;
                window._ws = null;
                De.log("newOrTakeoverWebSocket()");
                if (null != c) {
                    t = c.ws;
                    if (c.state.gateway !== r) {
                        De.log("[FAST CONNECT] gatewayURL mismatch: ".concat(c.state.gateway, " !== ").concat(r));
                        t.close(1e3);
                        t = null
                    } else {
                        var p = Ie({}, c.state);
                        null != p.messages && (p.messages = p.messages.map((function(e) {
                            return null != e.data && "string" == typeof e.data ? Oe(Ie({}, e), {
                                data: e.data.substring(0, 100)
                            }) : e
                        })));
                        De.log("[FAST CONNECT] successfully took over websocket, state:", p);
                        l = c.state.open;
                        d = c.state.identify;
                        f = c.state.messages;
                        _ = c.state.clientState
                    }
                }
                null == t && ((t = new WebSocket(r, n)).binaryType = "arraybuffer");
                i(t);
                l && a(d, _);
                null != f && f.forEach(o);
                t.onopen = function() {
                    return a(d, _)
                };
                t.onmessage = o;
                t.onclose = u;
                t.onerror = s
            }

            function Le() {}
            var Ue;
            ! function(e) {
                e.CLOSED = "CLOSED";
                e.WILL_RECONNECT = "WILL_RECONNECT";
                e.CONNECTING = "CONNECTING";
                e.IDENTIFYING = "IDENTIFYING";
                e.RESUMING = "RESUMING";
                e.SESSION_ESTABLISHED = "SESSION_ESTABLISHED"
            }(Ue || (Ue = {}));
            var ke = 4004,
                Me = 6e4;

            function je(e, t) {
                var n = 0;
                e.dataReady((function(e) {
                    try {
                        return t(e, n)
                    } finally {
                        n = 0
                    }
                }));
                return function(t) {
                    var r = t.data;
                    n += Ge(r);
                    e.feed(r)
                }
            }

            function Ge(e) {
                return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
            }
            var Be = window.GLOBAL_ENV.GATEWAY_ENDPOINT,
                Ze = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Ae(e, t)
                    }(n, e);
                    var t = Ne(n);

                    function n() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var e;
                        (e = t.call(this)).dispatchExceptionBackoff = new b.Z(1e3, Me);
                        e.dispatchSuccessTimer = 0;
                        e.resumeAnalytics = ue();
                        e.didForceClearGuildHashes = !1;
                        e.identifyUncompressedByteSize = 0;
                        e.identifyCompressedByteSize = 0;
                        e.isDeferringDispatches = !0;
                        e.queuedDispatches = [];
                        e.analytics = {};
                        e.identifyCount = 0;
                        e.resumeUrl = null;
                        e.lastIdentifyClientState = null;
                        e.send = function(t, n, r) {
                            0;
                            R.default.isLoggingGatewayEvents && De.verbose("~>", t, n);
                            var i = we.pack({
                                op: t,
                                d: n
                            });
                            if (!r || e.isSessionEstablished()) try {
                                null != e.webSocket ? e.webSocket.send(i) : De.warn("Attempted to send without a websocket that exists. Opcode: ".concat(t))
                            } catch (e) {} else De.warn("Attempted to send while not being in a connected state opcode: ".concat(t))
                        };
                        e.gatewayBackoff = new b.Z(1e3, 6e4);
                        e.connectionState_ = Ue.CLOSED;
                        e.webSocket = null;
                        e.seq = 0;
                        e.sessionId = null;
                        e.token = null;
                        e.initialHeartbeatTimeout = null;
                        e.expeditedHeartbeatTimeout = null;
                        e.lastHeartbeatAckTime = null;
                        e.helloTimeout = null;
                        e.heartbeatInterval = null;
                        e.heartbeater = null;
                        e.heartbeatAck = !0;
                        e.connectionStartTime = 0;
                        e.identifyStartTime = 0;
                        e.nextReconnectIsImmediate = !1;
                        e.compressionHandler = new F(we);
                        e.hasConnectedOnce = !1;
                        e.isFastConnect = !1;
                        e.identifyCount = 0;
                        return e
                    }
                    var r = n.prototype;
                    r.hasQueuedDispatches = function() {
                        return this.queuedDispatches.length > 0
                    };
                    r.processFirstQueuedDispatch = function(e) {
                        if (!this.hasQueuedDispatches()) return !1;
                        for (; this.queuedDispatches.length > 0 && e.has(this.queuedDispatches[0].type);) {
                            var t = this.queuedDispatches.shift(),
                                n = t.data,
                                r = t.type,
                                i = t.compressionAnalytics;
                            this._handleDispatchWithoutQueueing(n, r, i)
                        }
                        return !0
                    };
                    r.processDispatchQueue = function() {
                        this.isDeferringDispatches = !1;
                        if (this.hasQueuedDispatches()) {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var r, i = this.queuedDispatches[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                    var a = r.value,
                                        o = a.data,
                                        s = a.type,
                                        u = a.compressionAnalytics;
                                    this._handleDispatchWithoutQueueing(o, s, u)
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
                            this.queuedDispatches.length = 0
                        }
                    };
                    r.clearDispatchQueue = function() {
                        this.isDeferringDispatches = !1;
                        this.queuedDispatches.length = 0
                    };
                    r.addAnalytics = function(e) {
                        this.analytics = Ie({}, this.analytics, e)
                    };
                    r.setResumeUrl = function(e) {
                        null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1));
                        null !== e && De.info("Updating resume url to ".concat(e));
                        this.resumeUrl = e
                    };
                    r._connect = function() {
                        var e = this;
                        if (this.willReconnect())
                            if (Se) De.info("Skipping _connect because socket is paused");
                            else {
                                this.connectionState = Ue.CONNECTING;
                                this.nextReconnectIsImmediate = !1;
                                var t = this.compressionHandler.getAlgorithm(),
                                    n = we.getName(),
                                    r = this._getGatewayUrl(),
                                    i = window.GLOBAL_ENV.API_VERSION;
                                T.Z.mark("🌐", "Socket._connect");
                                De.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(n, ", ") + "version: ".concat(i, ", ") + "compression: ".concat(null != t ? t : "none"));
                                if (null !== this.webSocket) {
                                    De.error("_connect called with already existing websocket");
                                    this._cleanup((function(e) {
                                        return e.close(4e3)
                                    }))
                                }
                                this.connectionStartTime = Date.now();
                                this.helloTimeout = setTimeout((function() {
                                    var t = Date.now() - e.connectionStartTime;
                                    e._handleClose(!1, 0, "The connection timed out after ".concat(t, " ms - did not receive OP_HELLO in time."));
                                    e.setResumeUrl(null)
                                }), 3e4);
                                var a = new URL(r);
                                a.searchParams.append("encoding", n);
                                a.searchParams.append("v", i.toString());
                                null != t && a.searchParams.append("compress", t);
                                Pe({
                                    gatewayURL: a.toString(),
                                    newCallback: function(t) {
                                        e.webSocket = t;
                                        e.compressionHandler.bindWebSocket(t)
                                    },
                                    onOpen: function(t, n) {
                                        T.Z.mark("🌐", "GatewaySocket.onOpen ".concat(t));
                                        var r = Date.now() - e.connectionStartTime;
                                        De.info("[CONNECTED] ".concat(a.toString(), " in ").concat(r, " ms"));
                                        e.isFastConnect = t;
                                        e.lastIdentifyClientState = n;
                                        t ? e._doFastConnectIdentify() : e._doResumeOrIdentify()
                                    },
                                    onMessage: je(this.compressionHandler, (function(t, n) {
                                        var r = Date.now(),
                                            i = we.unpack(t),
                                            a = i.op,
                                            o = i.s,
                                            s = i.t,
                                            u = i.d;
                                        a !== Ee.DISPATCH && T.Z.mark("🌐", "GatewaySocket.onMessage ".concat(a, " ").concat(Ee[a]));
                                        var c = Date.now() - r;
                                        "READY" === s ? A.Z.parseReady.set(r, c) : "READY_SUPPLEMENTAL" === s ? A.Z.parseReadySupplemental.set(r, c) : c > 10 && T.Z.mark("🌐", "Parse " + s, c);
                                        null != o && (e.seq = o);
                                        switch (a) {
                                            case Ee.HELLO:
                                                0;
                                                e._clearHelloTimeout();
                                                e._handleHello(u);
                                                break;
                                            case Ee.RECONNECT:
                                                0;
                                                e._handleReconnect();
                                                break;
                                            case Ee.INVALID_SESSION:
                                                0;
                                                e._handleInvalidSession(u);
                                                break;
                                            case Ee.HEARTBEAT:
                                                e._sendHeartbeat();
                                                break;
                                            case Ee.HEARTBEAT_ACK:
                                                e._handleHeartbeatAck(u);
                                                break;
                                            case Ee.DISPATCH:
                                                0;
                                                e._handleDispatch(u, s, "READY" === s ? {
                                                    compressed_byte_size: n,
                                                    uncompressed_byte_size: Ge(t),
                                                    compression_algorithm: e.compressionHandler.getAlgorithm(),
                                                    packing_algorithm: we.getName(),
                                                    unpack_duration_ms: c
                                                } : null);
                                                break;
                                            default:
                                                De.info("Unhandled op ".concat(a))
                                        }
                                    })),
                                    onError: function() {
                                        e.setResumeUrl(null);
                                        N.Z.flushDNSCache();
                                        e._handleClose(!1, 0, "An error with the websocket occurred")
                                    },
                                    onClose: function(t) {
                                        var n = t.wasClean,
                                            r = t.code,
                                            i = t.reason;
                                        return e._handleClose(n, r, i)
                                    }
                                })
                            }
                        else De.info("Skipping _connect because willReconnect is false")
                    };
                    r._handleHello = function(e) {
                        var t = this.heartbeatInterval = e.heartbeat_interval,
                            n = Date.now() - this.connectionStartTime;
                        De.info("[HELLO] via ".concat(ae(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms"));
                        this._startHeartbeater()
                    };
                    r._handleReconnect = function() {
                        De.info("[RECONNECT] gateway requested I reconnect.");
                        this._cleanup((function(e) {
                            return e.close(4e3)
                        }));
                        this.connectionState = Ue.WILL_RECONNECT;
                        this._connect()
                    };
                    r._handleInvalidSession = function(e) {
                        De.info("[INVALID_SESSION]".concat(e ? " can resume)" : ""));
                        e ? this._doResumeOrIdentify() : this._doIdentify()
                    };
                    r._handleDispatch = function(e, t, n) {
                        var r = performance.now();
                        if (this.connectionState === Ue.RESUMING) {
                            var i = r - this.resumeAnalytics.lastUpdateTime;
                            0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = i : i > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = i);
                            this.resumeAnalytics.totalWaitTime += i;
                            this.resumeAnalytics.lastUpdateTime = r;
                            this.resumeAnalytics.numEvents += 1;
                            a.ZP.Emitter.pause(150)
                        }
                        this.isDeferringDispatches ? this.queuedDispatches.push({
                            data: e,
                            type: t,
                            compressionAnalytics: n
                        }) : this._handleDispatchWithoutQueueing(e, t, n);
                        this.connectionState === Ue.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - r)
                    };
                    r._handleDispatchWithoutQueueing = function(e, t, n) {
                        if ("READY" === t) return this._handleReady(e, n);
                        if ("READY_SUPPLEMENTAL" === t) {
                            a.ZP.Emitter.resume();
                            var r = Date.now() - this.connectionStartTime;
                            De.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms"));
                            this.connectionState = Ue.SESSION_ESTABLISHED;
                            this.gatewayBackoff.succeed()
                        } else if ("RESUMED" === t) {
                            a.ZP.Emitter.resume();
                            var i = Date.now() - this.connectionStartTime;
                            De.info("[RESUMED] took ".concat(i, "ms, via ").concat(ae(e), ", ") + "replayed ".concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq));
                            o = this.resumeAnalytics, !(null === (s = $.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && Math.random() < .5 || X.default.track(ee.rMx.CONNECTION_RESUMED, {
                                connect_time_ms: o.connectTime,
                                resume_time_ms: Math.floor(performance.now() - o.startTime),
                                num_events: o.numEvents,
                                largest_wait_time_ms: Math.floor(o.largestWaitTime),
                                initial_wait_time_ms: Math.floor(o.initialWaitTime),
                                total_wait_time_ms: Math.floor(o.totalWaitTime),
                                total_dispatch_time_ms: Math.floor(o.dispatchTime)
                            }, {
                                logEventProperties: !0
                            });
                            this.resumeAnalytics = ue();
                            this.connectionState = Ue.SESSION_ESTABLISHED;
                            this.gatewayBackoff.succeed()
                        }
                        var o, s;
                        return this._handleGenericDispatch(e, t)
                    };
                    r._getGatewayUrl = function() {
                        return null != this.resumeUrl ? this.resumeUrl : Be
                    };
                    r._handleReady = function(e, t) {
                        var n = Date.now();
                        a.ZP.Emitter.resume();
                        var r = Date.now() - this.connectionStartTime,
                            i = e.session_id;
                        this.sessionId = i;
                        var o = ae(e);
                        T.Z.setServerTrace(o);
                        De.info("[READY] took ".concat(r, "ms, as ").concat(i, " via ").concat(o));
                        this.connectionState = Ue.SESSION_ESTABLISHED;
                        this.gatewayBackoff.succeed();
                        var s = function(e) {
                            var t, n, r = Date.now(),
                                i = e.guilds,
                                a = e.merged_presences,
                                o = e.merged_members,
                                s = e.read_state,
                                u = e.private_channels,
                                c = e.user_guild_settings,
                                l = e.user_settings,
                                d = e.user_settings_proto,
                                f = e.experiments,
                                _ = e.guild_experiments,
                                p = e.relationships,
                                h = e.users,
                                E = re(e, ["guilds", "merged_presences", "merged_members", "read_state", "private_channels", "user_guild_settings", "user_settings", "user_settings_proto", "experiments", "guild_experiments", "relationships", "users"]),
                                m = [],
                                y = [],
                                g = [],
                                S = [],
                                v = [],
                                b = [],
                                T = [],
                                I = [];
                            i.forEach((function(e) {
                                if (!e.unavailable) {
                                    var t, n = null !== (t = e.properties) && void 0 !== t ? t : {},
                                        r = n.features,
                                        i = re(n, ["features"]),
                                        a = e.threads,
                                        o = e.guild_scheduled_events,
                                        s = re(e, ["threads", "guild_scheduled_events"]);
                                    m.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels);
                                    y.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles);
                                    g.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis);
                                    S.push(a);
                                    v.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers);
                                    b.push(r);
                                    T.push(o);
                                    I.push(s, i)
                                }
                            }));
                            return {
                                presences_size: JSON.stringify(null !== (t = null == a ? void 0 : a.friends) && void 0 !== t ? t : []).length,
                                users_size: JSON.stringify(h).length,
                                read_states_size: JSON.stringify(s).length,
                                private_channels_size: JSON.stringify(u).length,
                                user_settings_size: JSON.stringify(null != l ? l : "").length + (null != d ? d : "").length,
                                experiments_size: JSON.stringify(null != f ? f : []).length + JSON.stringify(null != _ ? _ : []).length,
                                user_guild_settings_size: JSON.stringify(c).length,
                                relationships_size: JSON.stringify(p).length,
                                remaining_data_size: JSON.stringify(null != E ? E : {}).length,
                                guild_channels_size: JSON.stringify(m).length,
                                guild_members_size: JSON.stringify(null != o ? o : []).length,
                                guild_presences_size: JSON.stringify(null !== (n = null == a ? void 0 : a.guilds) && void 0 !== n ? n : []).length,
                                guild_roles_size: JSON.stringify(y).length,
                                guild_emojis_size: JSON.stringify(g).length,
                                guild_threads_size: JSON.stringify(S).length,
                                guild_stickers_size: JSON.stringify(v).length,
                                guild_events_size: JSON.stringify(T).length,
                                guild_features_size: JSON.stringify(b).length,
                                guild_remaining_data_size: JSON.stringify(I).length,
                                size_metrics_duration_ms: Date.now() - r
                            }
                        }(e);
                        this._handleGenericDispatch(e, "READY");
                        ie(this, e, n, t, s);
                        this.didForceClearGuildHashes = !1;
                        this.hasConnectedOnce = !0;
                        this.setResumeUrl(e.resume_gateway_url)
                    };
                    r._handleGenericDispatch = function(e, t) {
                        R.default.isLoggingGatewayEvents && De.verbose("<~", t, e);
                        try {
                            this.emit("dispatch", t, e)
                        } catch (e) {
                            this.resetSocketOnError(e, t)
                        }
                    };
                    r._handleHeartbeatAck = function(e) {
                        this.lastHeartbeatAckTime = Date.now();
                        this.heartbeatAck = !0;
                        if (null !== this.expeditedHeartbeatTimeout) {
                            clearTimeout(this.expeditedHeartbeatTimeout);
                            this.expeditedHeartbeatTimeout = null;
                            De.info("Expedited heartbeat succeeded")
                        }
                    };
                    r._handleHeartbeatTimeout = function() {
                        var e = this;
                        this._cleanup((function(e) {
                            return e.close(4e3)
                        }));
                        this.connectionState = Ue.WILL_RECONNECT;
                        var t = this.gatewayBackoff.fail((function() {
                            return e._connect()
                        }));
                        De.warn("[ACK TIMEOUT] reconnecting in ".concat((t / 1e3).toFixed(2), " seconds."))
                    };
                    r._handleClose = function(e, t, n) {
                        var r = this;
                        e = e || !1;
                        this._cleanup();
                        this.emit("close", {
                            code: t,
                            reason: n
                        });
                        if (t === ke) {
                            this.connectionState = Ue.CLOSED;
                            De.warn("[WS CLOSED] because of authentication failure, marking as closed.");
                            return this._reset(e, t, n)
                        }
                        this.connectionState = Ue.WILL_RECONNECT;
                        if (this.nextReconnectIsImmediate) {
                            De.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately."));
                            this._connect()
                        } else {
                            var i = this.gatewayBackoff.fail((function() {
                                return r._connect()
                            }));
                            De.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds."));
                            this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
                        }
                    };
                    r._reset = function(e, t, n) {
                        this.sessionId = null;
                        this.seq = 0;
                        De.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")"));
                        this.emit("disconnect", {
                            wasClean: e,
                            code: t,
                            reason: n
                        })
                    };
                    r._startHeartbeater = function() {
                        var e = this,
                            t = this.heartbeatInterval;
                        S()(null != t, "GatewaySocket: Heartbeat interval should never null here.");
                        null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout);
                        if (null !== this.heartbeater) {
                            clearInterval(this.heartbeater);
                            this.heartbeater = null
                        }
                        var n = function() {
                            if (e.heartbeatAck) {
                                e.heartbeatAck = !1;
                                e._sendHeartbeat()
                            } else null === e.expeditedHeartbeatTimeout && e._handleHeartbeatTimeout()
                        };
                        this.initialHeartbeatTimeout = setTimeout((function() {
                            e.initialHeartbeatTimeout = null;
                            e.heartbeatAck = !0;
                            e.heartbeater = setInterval(n, t);
                            n()
                        }), Math.floor(Math.random() * t))
                    };
                    r._stopHeartbeater = function() {
                        if (null !== this.heartbeater) {
                            clearInterval(this.heartbeater);
                            this.heartbeater = null
                        }
                        if (null !== this.initialHeartbeatTimeout) {
                            clearTimeout(this.initialHeartbeatTimeout);
                            this.initialHeartbeatTimeout = null
                        }
                        if (null !== this.expeditedHeartbeatTimeout) {
                            clearTimeout(this.expeditedHeartbeatTimeout);
                            this.expeditedHeartbeatTimeout = null
                        }
                    };
                    r._clearHelloTimeout = function() {
                        if (null != this.helloTimeout) {
                            clearTimeout(this.helloTimeout);
                            this.helloTimeout = null
                        }
                    };
                    r._cleanup = function(e) {
                        a.ZP.Emitter.resume();
                        this._stopHeartbeater();
                        this._clearHelloTimeout();
                        var t = this.webSocket;
                        this.webSocket = null;
                        if (null != t) {
                            t.onopen = Le;
                            t.onmessage = Le;
                            t.onerror = Le;
                            t.onclose = Le;
                            null == e || e(t)
                        }
                        this.gatewayBackoff.cancel();
                        this.compressionHandler.close();
                        this.compressionHandler = new F(we)
                    };
                    r._doResume = function() {
                        this.connectionState = Ue.RESUMING;
                        this.resumeAnalytics = ue(Date.now() - this.connectionStartTime);
                        var e;
                        De.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq));
                        this.send(Ee.RESUME, {
                            token: this.token,
                            session_id: this.sessionId,
                            seq: this.seq
                        }, !1)
                    };
                    r._doIdentify = function() {
                        this.seq = 0;
                        this.sessionId = null;
                        var e = this.handleIdentify();
                        if (null !== e) {
                            this.connectionState = Ue.IDENTIFYING;
                            this.identifyStartTime = Date.now();
                            var t = e.token,
                                n = e.properties,
                                r = void 0 === n ? {} : n,
                                i = e.presence;
                            this.token = t;
                            De.info("[IDENTIFY]");
                            var a, o, s, u, c, l, d, f, _, p = {
                                    token: t,
                                    capabilities: 16381,
                                    properties: r,
                                    presence: i,
                                    compress: this.compressionHandler.usesLegacyCompression(),
                                    client_state: (a = O.Z.getClientState(), o = a.knownGuildVersions, s = a.highestLastMessageId, u = a.readStateVersion, c = a.userGuildSettingsVersion, l = a.userSettingsVersion, d = a.privateChannelsVersion, f = a.apiCodeVersion, _ = a.lastSelectedGuildId, {
                                        guild_versions: o,
                                        highest_last_message_id: s,
                                        read_state_version: u,
                                        user_guild_settings_version: c,
                                        user_settings_version: l,
                                        private_channels_version: d,
                                        api_code_version: f,
                                        initial_guild_id: null == _ || isNaN(Number(_)) ? void 0 : _
                                    })
                                },
                                h = JSON.stringify(p);
                            this.identifyUncompressedByteSize = h.length;
                            this.identifyCompressedByteSize = v.deflate(h).length;
                            this.lastIdentifyClientState = p.client_state;
                            this.identifyCount += 1;
                            this.send(Ee.IDENTIFY, p, !1)
                        } else this._handleClose(!0, ke, "No connection info provided")
                    };
                    r._doFastConnectIdentify = function() {
                        this.seq = 0;
                        this.sessionId = null;
                        var e = this.handleIdentify();
                        if (null !== e) {
                            var t = e.token;
                            this.token = t;
                            this.connectionState = Ue.IDENTIFYING;
                            this.identifyStartTime = Date.now();
                            this.identifyCount += 1;
                            De.info("[IDENTIFY, fast-connect]");
                            this._updateLastHeartbeatAckTime()
                        } else this._handleClose(!0, ke, "No connection info provided")
                    };
                    r._doResumeOrIdentify = function() {
                        var e = Date.now();
                        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= 18e4) ? this._doResume() : this._doIdentify();
                        this._updateLastHeartbeatAckTime()
                    };
                    r._updateLastHeartbeatAckTime = function() {
                        this.lastHeartbeatAckTime = Date.now()
                    };
                    r._sendHeartbeat = function() {
                        this.send(Ee.HEARTBEAT, this.seq, !1)
                    };
                    r.getLogger = function() {
                        return De
                    };
                    r.willReconnect = function() {
                        return this.connectionState === Ue.WILL_RECONNECT
                    };
                    r.isClosed = function() {
                        return this.connectionState === Ue.CLOSED
                    };
                    r.isSessionEstablished = function() {
                        return this.connectionState === Ue.SESSION_ESTABLISHED || this.connectionState === Ue.RESUMING
                    };
                    r.isConnected = function() {
                        return this.connectionState === Ue.IDENTIFYING || this.connectionState === Ue.RESUMING || this.connectionState === Ue.SESSION_ESTABLISHED
                    };
                    r.connect = function() {
                        if (!this.isClosed()) {
                            De.error("Cannot start a new connection, connection state is not closed");
                            return !1
                        }
                        De.info(".connect() called, new state is WILL_RECONNECT");
                        this.connectionState = Ue.WILL_RECONNECT;
                        this._connect();
                        return !0
                    };
                    r.getIdentifyInitialGuildId = function() {
                        var e;
                        return null === (e = this.lastIdentifyClientState) || void 0 === e ? void 0 : e.initial_guild_id
                    };
                    r.resetSocketOnError = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                sentry: !0,
                                immediate: !1
                            },
                            r = this;
                        De.error("resetSocketOnError", e);
                        var i = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
                        C.Z.increment({
                            name: I.V.SOCKET_CRASHED,
                            tags: ["action:".concat(t)]
                        }, !0);
                        n.sentry = n.sentry && !i;
                        n.immediate = n.immediate || i;
                        n.sentry && D.Z.captureException(e);
                        this._cleanup((function(e) {
                            return e.close()
                        }));
                        this._reset(!0, 1e3, "Resetting socket due to error.");
                        this.clearDispatchQueue();
                        this.connectionState = Ue.WILL_RECONNECT;
                        this.dispatchExceptionBackoff.cancel();
                        if (0 === this.dispatchExceptionBackoff._fails && n.immediate) {
                            De.info("Triggering fast reconnect");
                            this.dispatchExceptionBackoff.fail((function() {}));
                            setTimeout((function() {
                                return r._connect()
                            }), 0)
                        } else this.dispatchExceptionBackoff.fail((function() {
                            return r._connect()
                        }));
                        this.didForceClearGuildHashes = !0;
                        o.Z.dispatch({
                            type: "CLEAR_GUILD_CACHE"
                        });
                        clearTimeout(this.dispatchSuccessTimer);
                        this.dispatchSuccessTimer = setTimeout((function() {
                            return r.dispatchExceptionBackoff.succeed()
                        }), 12e4)
                    };
                    r.close = function() {
                        var e = this;
                        if (this.isClosed()) De.info("close() called, but socket is already closed.");
                        else {
                            De.info("Closing connection, current state is ".concat(this.connectionState));
                            this._cleanup((function(e) {
                                return e.close()
                            }));
                            this.connectionState = Ue.CLOSED;
                            setImmediate((function() {
                                e._reset(!0, 1e3, "Disconnect requested by user")
                            }))
                        }
                    };
                    r.networkStateChange = function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        this.expeditedHeartbeat(e, t, n, !1)
                    };
                    r.expeditedHeartbeat = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            i = this;
                        if (!this.isClosed())
                            if (this.isConnected()) {
                                De.info("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : ""));
                                this.heartbeatAck = !1;
                                this._sendHeartbeat();
                                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout);
                                this.expeditedHeartbeatTimeout = setTimeout((function() {
                                    i.expeditedHeartbeatTimeout = null;
                                    !1 === i.heartbeatAck && i._handleHeartbeatTimeout()
                                }), e)
                            } else n ? this.resetBackoff(t, r) : De.info("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
                    };
                    r.resetBackoff = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        De.info("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : ""));
                        this.gatewayBackoff.succeed();
                        this.nextReconnectIsImmediate = !0;
                        this.willReconnect() ? this._connect() : t && this.connectionState !== Ue.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
                    };
                    ! function(e, t, n) {
                        t && ve(e.prototype, t);
                        n && ve(e, n)
                    }(n, [{
                        key: "connectionState",
                        get: function() {
                            return this.connectionState_
                        },
                        set: function(e) {
                            De.log("Setting connection state to ".concat(e));
                            this.connectionState_ = e
                        }
                    }]);
                    return n
                }(ge),
                Ve = n(413675),
                xe = n(306472),
                He = n(387328);
            var ze = function() {
                function e(t, n, r) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.socket = t;
                    this.action = null;
                    this.shouldFlush = r;
                    this.add = function(e) {
                        i.action = n(i.action, e)
                    };
                    e.batchers.push(this)
                }
                e.prototype.flush = function() {
                    var e = this,
                        t = this.action;
                    this.action = null;
                    null != t && o.Z.dispatch(t).catch((function(n) {
                        return e.socket.resetSocketOnError(n, t.type)
                    }))
                };
                e.flush = function(t, n) {
                    var r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e.batchers[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                            var u = o.value;
                            null != u.action && (null == t || u.shouldFlush(t, n)) && u.flush()
                        }
                    } catch (e) {
                        i = !0;
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                };
                return e
            }();
            ze.batchers = [];
            var Fe = n(110251),
                Ye = n.n(Fe);

            function We(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        We(e, t, n[t])
                    }))
                }
                return e
            }
            var qe = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.dirty = !1;
                    this.state = this.getInitialState()
                }
                var t = e.prototype;
                t.shouldCommit = function() {
                    return !0
                };
                t.setState = function(e) {
                    this.state = Ke({}, this.state, e)
                };
                t.getState = function() {
                    return this.state
                };
                t.reset = function() {
                    this.dirty = !1;
                    this.state = this.getInitialState()
                };
                t.update = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.getNextState(Ke({}, this.state, e));
                    if (t) this.dirty = !Ye()(n, this.getInitialState());
                    else {
                        var r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = Object.keys(n)[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                                var u = o.value;
                                this.dirty = this.dirty || !Ye()(this.state[u], n[u])
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                    }
                    this.state = n;
                    if (this.dirty && this.shouldCommit()) {
                        this.dirty = !1;
                        this.didCommit(this.state);
                        return !0
                    }
                    return !1
                };
                t.forceUpdate = function() {
                    this.dirty = !1;
                    this.didCommit(this.state)
                };
                return e
            }();

            function Je(e, t, n) {
                Je = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Qe(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return Je(e, t, n || e)
            }

            function Qe(e) {
                Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Qe(e)
            }

            function $e(e, t) {
                return !t || "object" !== et(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Xe(e, t) {
                Xe = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Xe(e, t)
            }
            var et = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function tt(e) {
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
                    var n, r = Qe(e);
                    if (t) {
                        var i = Qe(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return $e(this, n)
                }
            }
            var nt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Xe(e, t)
                }(n, e);
                var t = tt(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).socket = e;
                    r._hadLobbyVoiceStates = !1;
                    return r
                }
                var r = n.prototype;
                r.getInitialState = function() {
                    return this.getNextState()
                };
                r.getNextState = function() {
                    var e = _.Z.getLobbiesWithVoice();
                    e.length > 0 && (this._hadLobbyVoiceStates = !0);
                    return {
                        lobbies: e.map((function(e) {
                            return {
                                lobbyId: e.id,
                                selfMute: p.Z.isSelfMute(e.application_id),
                                selfDeaf: p.Z.isSelfDeaf(e.application_id)
                            }
                        }))
                    }
                };
                r.shouldCommit = function() {
                    return this._hadLobbyVoiceStates && this.socket.isSessionEstablished()
                };
                r.didCommit = function(e) {
                    var t = e.lobbies;
                    this.socket.lobbyVoiceStatesUpdate(t)
                };
                r.forceUpdate = function() {
                    this._hadLobbyVoiceStates && Je(Qe(n.prototype), "forceUpdate", this).call(this)
                };
                return n
            }(qe);

            function rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function it(e) {
                return function(e) {
                    if (Array.isArray(e)) return rt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return rt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rt(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function at(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ot(e) {
                ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ot(e)
            }

            function st(e, t) {
                return !t || "object" !== ct(t) && "function" != typeof t ? at(e) : t
            }

            function ut(e, t) {
                ut = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ut(e, t)
            }
            var ct = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lt(e) {
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
                    var n, r = ot(e);
                    if (t) {
                        var i = ot(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return st(this, n)
                }
            }
            var dt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && ut(e, t)
                    }(n, e);
                    var t = lt(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r, i, a, o, s, u, c;
                        (r = t.call(this)).socket = e;
                        r.switchingAccounts = !1;
                        r.didCommit = (i = 5, a = 2e4, o = r.emitPresenceUpdate.bind(at(r)), u = [], c = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = Date.now();
                            if (null != s) {
                                clearTimeout(s);
                                s = null
                            }
                            for (; u.length > 0 && u[0] <= r;) u.shift();
                            if (u.length < i) {
                                u.push(r + a);
                                o.apply(void 0, it(t))
                            } else s = setTimeout((function() {
                                return c.apply(void 0, it(t))
                            }), u[0] - r)
                        }, c);
                        return r
                    }
                    var r = n.prototype;
                    r.getInitialState = function() {
                        return m.Z.getLocalPresence()
                    };
                    r.getNextState = function() {
                        return m.Z.getLocalPresence()
                    };
                    r.shouldCommit = function() {
                        return this.socket.isSessionEstablished()
                    };
                    r.emitPresenceUpdate = function(e) {
                        var t = e.status,
                            n = e.since,
                            r = e.activities,
                            i = e.afk,
                            a = e.broadcast;
                        this.socket.presenceUpdate(t, n, r, i, a)
                    };
                    r.handleConnectionOpen = function() {
                        var e = !this.switchingAccounts;
                        this.update({}, e);
                        this.switchingAccounts = !1
                    };
                    r.handleAccountSwitch = function() {
                        this.switchingAccounts = !0;
                        this.reset();
                        this.emitPresenceUpdate(this.getState())
                    };
                    return n
                }(qe),
                ft = n(228667),
                _t = n(335072),
                pt = n(661123);

            function ht(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Et(e) {
                Et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Et(e)
            }

            function mt(e, t) {
                return !t || "object" !== gt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function yt(e, t) {
                yt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return yt(e, t)
            }
            var gt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function St(e) {
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
                    var n, r = Et(e);
                    if (t) {
                        var i = Et(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return mt(this, n)
                }
            }
            var vt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && yt(e, t)
                }(n, e);
                var t = St(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).socket = e;
                    return r
                }
                var r = n.prototype;
                r.computeVoiceFlags = function() {
                    var e = ee.BVn.ALLOW_VOICE_RECORDING;
                    return e = (0, pt.mB)(e, ee.BVn.CLIPS_ENABLED, _t.Z.getSettings().clipsEnabled && (0, ft.T4)(this.guildId))
                };
                r.getInitialState = function() {
                    return {
                        guildId: null,
                        channelId: null,
                        selfMute: p.Z.isSelfMute(),
                        selfDeaf: p.Z.isSelfDeaf(),
                        selfVideo: p.Z.isVideoEnabled(),
                        preferredRegion: null,
                        videoStreamParameters: null,
                        flags: 0
                    }
                };
                r.getNextState = function(e) {
                    return {
                        guildId: e.guildId,
                        channelId: e.channelId,
                        selfMute: p.Z.isSelfMute(),
                        selfDeaf: p.Z.isSelfDeaf(),
                        selfVideo: p.Z.isVideoEnabled(),
                        preferredRegion: h.Z.getPreferredRegion(),
                        videoStreamParameters: p.Z.getVideoStreamParameters(),
                        flags: this.computeVoiceFlags()
                    }
                };
                r.shouldCommit = function() {
                    return this.socket.isSessionEstablished()
                };
                r.didCommit = function(e) {
                    var t, n = e.guildId,
                        r = e.channelId,
                        i = e.selfMute,
                        a = e.selfDeaf,
                        o = e.selfVideo,
                        s = e.preferredRegion,
                        u = e.videoStreamParameters,
                        c = e.flags,
                        l = void 0 === c ? 0 : c;
                    o && (null === (t = f.Z.getChannel(r)) || void 0 === t ? void 0 : t.type) === ee.d4z.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: r,
                        selfMute: i,
                        selfDeaf: a,
                        selfVideo: o,
                        preferredRegion: s,
                        videoStreamParameters: u,
                        flags: l
                    }) : this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: r,
                        selfMute: i,
                        selfDeaf: a,
                        selfVideo: o,
                        preferredRegion: s,
                        flags: l
                    })
                };
                ! function(e, t, n) {
                    t && ht(e.prototype, t);
                    n && ht(e, n)
                }(n, [{
                    key: "guildId",
                    get: function() {
                        return this.getState().guildId
                    }
                }, {
                    key: "channelId",
                    get: function() {
                        return this.getState().channelId
                    }
                }]);
                return n
            }(qe);

            function bt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Tt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return bt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var It = new u.Z("ConnectionStore"),
                Ot = new Ze,
                Ct = new dt(Ot),
                At = new vt(Ot),
                Rt = new nt(Ot),
                Nt = null;
            Ot.handleIdentify = function() {
                var e = l.default.getToken();
                It.log("handleIdentify called", {
                    hasToken: null != e
                });
                return null == e ? null : {
                    token: e,
                    properties: X.default.getSuperProperties(),
                    presence: Ct.getState()
                }
            };
            0;
            (0, Y.nI)() && xe.Z.remotePowerMonitor.on("resume", (function() {
                Ot.expeditedHeartbeat(5e3, "power monitor resumed")
            }));
            He.Z.addOfflineCallback((function() {
                Ot.networkStateChange(15e3, "network detected offline.", !1)
            }));
            He.Z.addOnlineCallback((function() {
                Ot.networkStateChange(5e3, "network detected online.")
            }));
            Ot.on("disconnect", (function(e) {
                var t = e.code,
                    n = e.reason;
                o.Z.dispatch({
                    type: "CONNECTION_CLOSED",
                    code: t,
                    reason: n
                })
            }));
            Ot.on("close", (function(e) {
                var t = e.code,
                    n = e.reason;
                o.Z.dispatch({
                    type: "CONNECTION_INTERRUPTED",
                    code: t,
                    reason: n
                })
            }));
            var Dt = [],
                wt = null,
                Pt = 33,
                Lt = new Set(["READY", "INITIAL_GUILD"]);
            Ot.on("dispatch", (function(e, t) {
                Dt.push([e, t]);
                if (Lt.has(e)) {
                    null != wt && clearTimeout(wt);
                    Ut()
                } else null == wt && (wt = setTimeout(Ut, Pt))
            }));

            function Ut() {
                wt = null;
                var e = Date.now(),
                    t = Dt.slice();
                Dt.length = 0;
                if (null == Nt) throw Error("setDispatchSocketMessageFunction needs to be called first!");
                var n = "none";
                try {
                    Ve.Z.Emitter.batched((function() {
                        t.forEach((function(e) {
                            var t = Tt(e, 2),
                                r = t[0],
                                i = t[1];
                            n = r;
                            Nt(r, i)
                        }));
                        ze.flush()
                    }))
                } catch (e) {
                    Ot.resetSocketOnError(e, n)
                }
                var r = Date.now() - e;
                if (r > 100) {
                    It.log("Dispatched ".concat(t.length, " messages in ").concat(r, "ms"));
                    Pt = 250
                } else Pt = 33
            }
            n(887235);
            var kt = n(327499),
                Mt = n(810978),
                jt = n(285991),
                Gt = n(261912),
                Bt = n(492628),
                Zt = n(609182),
                Vt = n(382060),
                xt = n(205294),
                Ht = n(722406),
                zt = n(21372),
                Ft = n(50433),
                Yt = n(407561),
                Wt = n(551778),
                Kt = n(536392),
                qt = n(446139),
                Jt = n(247075),
                Qt = n(446502),
                $t = n(936219),
                Xt = n(205894),
                en = n(847388),
                tn = n(245353),
                nn = n(78551),
                rn = n(567403),
                an = n(179913),
                on = n(767954);

            function sn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function un(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        sn(e, t, n[t])
                    }))
                }
                return e
            }

            function cn(e, t) {
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

            function ln(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var dn = new u.Z("ReadyPayloadUtils"),
                fn = {},
                _n = null,
                pn = {};

            function hn(e, t) {
                var n = e.users,
                    r = e.relationships,
                    a = e.private_channels,
                    o = e.merged_members,
                    u = e.guilds,
                    c = ln(e, ["users", "relationships", "private_channels", "merged_members", "guilds"]);
                ! function() {
                    e = Jt.Z.database(), null != e && !1 === $t.Z.okSync(e) && s.Z.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
                    var e;
                    fn = {};
                    var t = Object.values(rn.Z.getGuilds()),
                        n = tn.Z.getGuilds(),
                        r = nn.Z.getRawStickersByGuild(),
                        i = an.ZP.getReadStatesByChannel(),
                        a = (0, en.O)() ? Qt.Z.getCommittedVersions() : new Map,
                        o = (0, en.O)() ? Xt.Z.getGuildIdsSync() : new Set,
                        u = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var d, f = t[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                            var _, p = d.value;
                            if (a.has(p.id) && o.has(p.id)) {
                                var h, E;
                                fn[p.id] = {
                                    properties: on.tK(p),
                                    roles: p.roles,
                                    emojis: null !== (h = null === (_ = n[p.id]) || void 0 === _ ? void 0 : _.rawEmojis) && void 0 !== h ? h : null,
                                    stickers: null !== (E = r.get(p.id)) && void 0 !== E ? E : null,
                                    readStates: i
                                }
                            }
                        }
                    } catch (e) {
                        c = !0;
                        l = e
                    } finally {
                        try {
                            u || null == f.return || f.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                }();
                var l, d = mn(pn = i().keyBy(n, (function(e) {
                    return e.id
                })), r);
                null == a || a.forEach((function(e) {
                    var t = e.recipient_ids;
                    null != t && (e.recipients = t.map((function(e) {
                        S()(null != pn[e], "Missing user in compressed ready payload");
                        return pn[e]
                    })));
                    delete e.recipient_ids
                }));
                var f = null !== (l = null == u ? void 0 : u.map((function(e, t) {
                        if (!0 === e.unavailable) return e;
                        e.members = mn(pn, null == o ? void 0 : o[t]);
                        return gn(e)
                    }))) && void 0 !== l ? l : [],
                    _ = En(t, u, (function(e) {
                        return gn(e)
                    }));
                null != _ && f.push(_);
                return cn(un({}, c), {
                    users: n,
                    presences: [],
                    relationships: d,
                    guilds: f,
                    private_channels: null != a ? a : []
                })
            }

            function En(e, t, n) {
                return null == _n || _n.identifyTime !== e || null != t && t.some((function(e) {
                    return e.id === _n.guild.id
                })) ? null : n(_n.guild)
            }

            function mn(e, t) {
                var n = [];
                null == t || t.forEach((function(t) {
                    if (null != t) {
                        var r = t.user_id;
                        if (null != r) {
                            S()(null != e[r], "Missing user[".concat(r, "] in compressed ready payload"));
                            t.user = e[r]
                        }
                        delete t.user_id;
                        n.push(t)
                    }
                }));
                return n
            }

            function yn(e) {
                var t = fn[e];
                delete fn[e];
                return t
            }

            function gn(e) {
                var t, n, r, i, a, o, s, u, c, l, d = yn(e.id);
                if ("partial" !== e.data_mode) {
                    var f, _;
                    return {
                        id: e.id,
                        dataMode: e.data_mode,
                        application_command_counts: e.application_command_counts,
                        emojis: e.emojis,
                        guild_scheduled_events: e.guild_scheduled_events,
                        joined_at: e.joined_at,
                        lastMessages: e.last_messages,
                        member_count: e.member_count,
                        members: e.members,
                        premium_subscription_count: e.premium_subscription_count,
                        properties: e.properties,
                        roles: e.roles,
                        stage_instances: e.stage_instances,
                        stickers: e.stickers,
                        threads: null !== (_ = null === (f = e.threads) || void 0 === f ? void 0 : f.map((function(t) {
                            return (0, Vt.q_)(t, e.id)
                        }))) && void 0 !== _ ? _ : [],
                        threadMessages: vn(e.threads),
                        channels: e.channels.map((function(t) {
                            t.guild_id = e.id;
                            return (0, Vt.q_)(t, e.id)
                        })),
                        version: e.version,
                        hasThreadsSubscription: e.has_threads_subscription
                    }
                }
                if (null == d) {
                    dn.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)"));
                    throw Error("Guild data was missing from store, but hash was still available.")
                }
                return {
                    id: e.id,
                    dataMode: e.data_mode,
                    application_command_counts: e.application_command_counts,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (r = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map((function(t) {
                            return (0, Vt.q_)(t, e.id)
                        }))) && void 0 !== r ? r : [],
                        deletes: null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    emojis: null == d.emojis ? null : bn(d.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (a = e.partial_updates.emojis) && void 0 !== a ? a : [],
                        deletes: null !== (o = e.partial_updates.deleted_emoji_ids) && void 0 !== o ? o : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: null !== (s = e.properties) && void 0 !== s ? s : d.properties,
                    roles: on.EO(e.id, d.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == d.stickers ? null : bn(d.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (u = e.partial_updates.stickers) && void 0 !== u ? u : [],
                        deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (l = null === (n = e.threads) || void 0 === n ? void 0 : n.map((function(t) {
                        return (0, Vt.q_)(t, e.id)
                    }))) && void 0 !== l ? l : [],
                    threadMessages: vn(e.threads),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function Sn(e, t) {
                var n, r, i, a, o, s, u, c, l, d;
                null == t && (t = yn(e.id));
                if ("partial" !== e.data_mode) {
                    var f, _;
                    return {
                        id: e.id,
                        application_command_counts: e.application_command_counts,
                        emojis: e.emojis,
                        guild_scheduled_events: e.guild_scheduled_events,
                        joined_at: e.joined_at,
                        lastMessages: e.last_messages,
                        member_count: e.member_count,
                        members: e.members,
                        premium_subscription_count: e.premium_subscription_count,
                        properties: e.properties,
                        roles: e.roles,
                        stage_instances: e.stage_instances,
                        stickers: e.stickers,
                        threads: null !== (_ = null === (f = e.threads) || void 0 === f ? void 0 : f.map((function(t) {
                            return (0, Vt.q_)(t, e.id)
                        }))) && void 0 !== _ ? _ : [],
                        threadMessages: vn(e.threads),
                        channels: e.channels.map((function(t) {
                            t.guild_id = e.id;
                            return (0, Vt.q_)(t, e.id)
                        })),
                        presences: e.presences,
                        embedded_activities: e.embedded_activities,
                        voice_states: e.voice_states,
                        version: e.version,
                        hasThreadsSubscription: e.has_threads_subscription
                    }
                }
                if (null == t) {
                    dn.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)"));
                    throw Error("Guild data was missing from store, but hash was still available.")
                }
                return {
                    id: e.id,
                    application_command_counts: e.application_command_counts,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (i = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map((function(t) {
                            return (0, Vt.q_)(t, e.id)
                        }))) && void 0 !== i ? i : [],
                        deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    embedded_activities: e.embedded_activities,
                    emojis: null == t.emojis ? null : bn(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (o = e.partial_updates.emojis) && void 0 !== o ? o : [],
                        deletes: null !== (s = e.partial_updates.deleted_emoji_ids) && void 0 !== s ? s : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    presences: e.presences,
                    properties: null !== (u = e.properties) && void 0 !== u ? u : t.properties,
                    roles: on.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == t.stickers ? null : bn(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                        deletes: null !== (l = e.partial_updates.deleted_sticker_ids) && void 0 !== l ? l : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (d = null === (r = e.threads) || void 0 === r ? void 0 : r.map((function(t) {
                        return (0, Vt.q_)(t, e.id)
                    }))) && void 0 !== d ? d : [],
                    threadMessages: vn(e.threads),
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function vn(e) {
                var t = [];
                if (null != e) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            null != s.most_recent_message && t.push(s.most_recent_message)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
                return t
            }

            function bn(e, t, n) {
                t = null != t ? t : [];
                var r = new Set((null != n ? n : []).concat(t.map((function(e) {
                    return e.id
                }))));
                return e.filter((function(e) {
                    return !r.has(e.id)
                })).concat(t)
            }

            function Tn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function In(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Tn(e, t, n[t])
                    }))
                }
                return e
            }

            function On(e, t) {
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

            function Cn(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var An = new u.Z("ConnectionStore"),
                Rn = new ze(Ot, (function(e, t) {
                    e = null != e ? e : {
                        type: "CHANNEL_UPDATES",
                        channels: []
                    };
                    var n, r = (0, Vt.q_)(t),
                        i = f.Z.getChannel(t.id),
                        a = null == i ? void 0 : i.merge(On(In({}, r), {
                            recipients: i.recipients,
                            bitrate: null !== (n = r.bitrate) && void 0 !== n ? n : i.bitrate
                        }));
                    e.channels.push(null != a ? a : r);
                    return e
                }), (function(e) {
                    return "CHANNEL_UPDATE" !== e
                })),
                Nn = new ze(Ot, (function(e, t) {
                    (e = null == e ? {
                        type: "SOUNDBOARD_SOUNDS_RECEIVED",
                        updates: []
                    } : e).updates.push({
                        guildId: t.guild_id,
                        sounds: t.soundboard_sounds.map((function(e) {
                            return {
                                name: e.name,
                                soundId: e.sound_id,
                                emojiName: e.emoji_name,
                                emojiId: e.emoji_id,
                                userId: e.user_id,
                                volume: e.volume,
                                available: e.available,
                                guildId: t.guild_id
                            }
                        }))
                    });
                    return e
                }), (function(e) {
                    return "SOUNDBOARD_SOUNDS" !== e
                })),
                Dn = new ze(Ot, (function(e, t) {
                    (e = null == e ? {
                        type: "PRESENCE_UPDATES",
                        updates: []
                    } : e).updates.push(t);
                    return e
                }), (function(e) {
                    return "PRESENCE_UPDATE" !== e
                }));

            function wn(e) {
                o.Z.dispatch(e).catch((function(t) {
                    return Ot.resetSocketOnError(t, e.type)
                }))
            }

            function Pn(e, t, n) {
                var r = n.roles,
                    a = n.nick,
                    o = n.avatar,
                    s = n.flags,
                    u = n.premium_since,
                    c = n.pending,
                    l = n.joined_at,
                    d = n.communication_disabled_until,
                    f = zt.ZP.getMember(e, t.id);
                null != f && f.nick === a && f.avatar === o && i().isEqual(f.roles, r) && f.premiumSince === u && f.isPending === c && f.joinedAt === l && f.communicationDisabledUntil === d && f.flags === s || wn({
                    type: "GUILD_MEMBER_ADD",
                    guildId: e,
                    user: t,
                    roles: r,
                    nick: a,
                    avatar: o,
                    premiumSince: u,
                    isPending: c,
                    joinedAt: l,
                    communicationDisabledUntil: d,
                    flags: s
                })
            }

            function Ln(e) {
                var t = e.member,
                    n = e.mentions,
                    r = e.author,
                    i = e.guild_id;
                null != t && Pn(i, r, t);
                null != n && n.forEach((function(e) {
                    if (null != e.member) {
                        var t = e.member;
                        delete e.member;
                        Pn(i, e, t)
                    }
                }))
            }

            function Un(e) {
                return e.map((function(e) {
                    return {
                        sessionId: e.session_id,
                        lastModified: e.last_modified,
                        status: e.status,
                        activities: e.activities,
                        active: !!e.active,
                        clientInfo: e.client_info,
                        broadcast: e.broadcast
                    }
                }))
            }

            function kn() {
                Ot.isSessionEstablished() && _.Z.getPendingLobbies().forEach((function(e) {
                    Ot.lobbyConnect(e.id, e.secret)
                }))
            }

            function Mn(e) {
                var t = e.guildId,
                    n = e.user,
                    r = e.status,
                    i = e.activities,
                    a = e.clientStatus,
                    o = e.broadcast;
                Dn.add({
                    guildId: t,
                    user: n,
                    status: r,
                    clientStatus: a,
                    activities: i,
                    broadcast: o
                })
            }

            function jn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Gn(e) {
                Gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Gn(e)
            }

            function Bn(e, t) {
                return !t || "object" !== Vn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Zn(e, t) {
                Zn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Zn(e, t)
            }
            var Vn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function xn(e) {
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
                    var n, r = Gn(e);
                    if (t) {
                        var i = Gn(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Bn(this, n)
                }
            }
            Nt = function(e, t) {
                ze.flush(e, t);
                switch (e) {
                    case "INITIAL_GUILD":
                        A.Z.initialGuild.measure((function() {
                            a.ZP.Emitter.batched((function() {
                                var e = function(e, t) {
                                    var n, r, i, a = rn.Z.getGuild(e.id),
                                        o = Sn(e, null == a ? void 0 : {
                                            properties: on.tK(a),
                                            roles: a.roles,
                                            emojis: null !== (r = null === (n = tn.Z.getGuilds()[a.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== r ? r : null,
                                            stickers: null !== (i = nn.Z.getRawStickersByGuild().get(a.id)) && void 0 !== i ? i : null,
                                            readStates: {}
                                        });
                                    _n = {
                                        guild: e,
                                        identifyTime: t
                                    };
                                    return o
                                }(t, Ot.identifyStartTime);
                                if (null != $.default.getCurrentUser()) {
                                    wn({
                                        type: "GUILD_CREATE",
                                        guild: e
                                    });
                                    var n;
                                    wn({
                                        type: "VOICE_STATE_UPDATES",
                                        voiceStates: e.voice_states.map((function(t) {
                                            return {
                                                userId: t.user_id,
                                                guildId: e.id,
                                                sessionId: t.session_id,
                                                channelId: t.channel_id,
                                                mute: t.mute,
                                                deaf: t.deaf,
                                                selfMute: t.self_mute,
                                                selfDeaf: t.self_deaf,
                                                selfVideo: t.self_video || !1,
                                                suppress: t.suppress,
                                                selfStream: t.self_stream || !1,
                                                requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                                            }
                                        }))
                                    });
                                    An.log("Dispatched INITIAL_GUILD ".concat(t.id))
                                }
                            }))
                        }));
                        break;
                    case "READY_SUPPLEMENTAL":
                        A.Z.readySupplemental.measure((function() {
                            a.ZP.Emitter.batched((function() {
                                t = A.Z.hydrateReadySupplemental.measure((function() {
                                    return function(e, t) {
                                        var n, r = e.guilds,
                                            i = e.merged_members,
                                            a = e.merged_presences,
                                            o = ln(e, ["guilds", "merged_members", "merged_presences"]),
                                            s = mn(pn, null == a ? void 0 : a.friends),
                                            u = null !== (n = null == r ? void 0 : r.map((function(e, t) {
                                                var n = mn(pn, null == a ? void 0 : a.guilds[t]),
                                                    r = mn(pn, null == i ? void 0 : i[t]);
                                                return cn(un({}, e), {
                                                    unavailable: void 0 === e.voice_states,
                                                    presences: n,
                                                    members: r
                                                })
                                            }))) && void 0 !== n ? n : [],
                                            c = En(t, r, (function(e) {
                                                return {
                                                    id: e.id,
                                                    members: e.members,
                                                    presences: e.presences,
                                                    embedded_activities: e.embedded_activities,
                                                    voice_states: e.voice_states,
                                                    unavailable: !1
                                                }
                                            }));
                                        null != c && u.push(c);
                                        pn = {};
                                        return cn(un({}, o), {
                                            presences: s,
                                            guilds: u
                                        })
                                    }(t, Ot.identifyStartTime)
                                }));
                                var e = function(e) {
                                        return e.map((function(e) {
                                            return {
                                                user: e.user,
                                                status: e.status,
                                                clientStatus: e.client_status,
                                                activities: e.activities,
                                                broadcast: e.broadcast
                                            }
                                        }))
                                    },
                                    n = t.guilds.filter((function(e) {
                                        return !0 !== e.unavailable
                                    }));
                                n.forEach((function(t) {
                                    t.presences = e(t.presences || [])
                                }));
                                var r, i, a = t.presences ? e(t.presences) : [],
                                    o = (null !== (r = t.lazy_private_channels) && void 0 !== r ? r : []).map((function(e) {
                                        return (0, Vt.q_)(e)
                                    })),
                                    s = null !== (i = t.game_invites) && void 0 !== i ? i : [];
                                A.Z.dispatchReadySupplemental.measure((function() {
                                    wn({
                                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                                        guilds: n,
                                        presences: a,
                                        lazyPrivateChannels: o,
                                        gameInvites: s
                                    })
                                }));
                                var u = [];
                                n.forEach((function(e) {
                                    e.voice_states.forEach((function(t) {
                                        var n;
                                        u.push({
                                            userId: t.user_id,
                                            guildId: e.id,
                                            sessionId: t.session_id,
                                            channelId: t.channel_id,
                                            mute: t.mute,
                                            deaf: t.deaf,
                                            selfMute: t.self_mute,
                                            selfDeaf: t.self_deaf,
                                            selfVideo: t.self_video || !1,
                                            suppress: t.suppress,
                                            selfStream: t.self_stream || !1,
                                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                                        })
                                    }))
                                }));
                                wn({
                                    type: "VOICE_STATE_UPDATES",
                                    voiceStates: u,
                                    initial: !0
                                });
                                At.update();
                                Rt.update({}, !0)
                            }))
                        }));
                        setTimeout((function() {
                            return wn({
                                type: "POST_CONNECTION_OPEN"
                            })
                        }), 2e3);
                        break;
                    case "READY":
                        if (t.user.bot) {
                            wn({
                                type: "LOGOUT"
                            });
                            return
                        }
                        A.Z.ready.measure((function() {
                            a.ZP.Emitter.batched((function() {
                                var e = (t = A.Z.hydrateReady.measure((function() {
                                        return hn(t, Ot.identifyStartTime)
                                    }))).private_channels.map((function(e) {
                                        return (0, Vt.q_)(e)
                                    })),
                                    n = t.guilds.filter((function(e) {
                                        return e.unavailable
                                    })).map((function(e) {
                                        return e.id
                                    })),
                                    r = t.guilds.filter((function(e) {
                                        return !0 !== e.unavailable
                                    }));
                                r.forEach((function(e) {
                                    e.presences = []
                                }));
                                var i = null == t.user_settings_proto ? void 0 : (0, Zt.ac)(t.user_settings_proto);
                                A.Z.dispatchReady.measure((function() {
                                    var a;
                                    wn({
                                        type: "CONNECTION_OPEN",
                                        sessionId: t.session_id,
                                        authSessionIdHash: t.auth_session_id_hash,
                                        user: t.user,
                                        users: t.users,
                                        guilds: r,
                                        initialPrivateChannels: e,
                                        unavailableGuilds: n,
                                        readState: t.read_state,
                                        userGuildSettings: t.user_guild_settings,
                                        tutorial: t.tutorial,
                                        relationships: t.relationships,
                                        friendSuggestionCount: t.friend_suggestion_count,
                                        presences: t.presences,
                                        analyticsToken: t.analytics_token,
                                        experiments: t.experiments,
                                        connectedAccounts: t.connected_accounts,
                                        guildExperiments: t.guild_experiments,
                                        requiredAction: t.required_action,
                                        consents: t.consents,
                                        sessions: Un(t.sessions || []),
                                        pendingPayments: t.pending_payments,
                                        countryCode: null !== (a = t.country_code) && void 0 !== a ? a : void 0,
                                        guildJoinRequests: t.guild_join_requests || [],
                                        userSettingsProto: i,
                                        apiCodeVersion: t.api_code_version,
                                        auth: t.auth
                                    })
                                }));
                                null != t.auth_token && wn({
                                    type: "UPDATE_TOKEN",
                                    token: t.auth_token,
                                    userId: t.user.id
                                });
                                Ct.update();
                                At.update();
                                Rt.update();
                                kn()
                            }))
                        }));
                        break;
                    case "RESUMED":
                        Ct.forceUpdate();
                        At.forceUpdate();
                        Rt.forceUpdate();
                        kn();
                        wn({
                            type: "CONNECTION_RESUMED"
                        });
                        break;
                    case "TYPING_START":
                        null != t.member && Pn(t.guild_id, t.member.user, t.member);
                        wn({
                            type: "TYPING_START",
                            channelId: t.channel_id,
                            userId: t.user_id
                        });
                        break;
                    case "ACTIVITY_START":
                        wn({
                            type: "ACTIVITY_START",
                            userId: t.user_id,
                            activity: t.activity
                        });
                        break;
                    case "ACTIVITY_USER_ACTION":
                        wn({
                            type: "ACTIVITY_USER_ACTION",
                            actionType: t.action_type,
                            user: t.user,
                            applicationId: t.application_id,
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_CREATE":
                        Ln(t);
                        null != t.author && wn({
                            type: "MESSAGE_CREATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            message: t,
                            optimistic: !1,
                            isPushNotification: !1
                        });
                        break;
                    case "MESSAGE_UPDATE":
                        Ln(t);
                        wn({
                            type: "MESSAGE_UPDATE",
                            guildId: t.guild_id,
                            message: t
                        });
                        break;
                    case "MESSAGE_DELETE":
                        wn({
                            type: "MESSAGE_DELETE",
                            guildId: t.guild_id,
                            id: t.id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_DELETE_BULK":
                        wn({
                            type: "MESSAGE_DELETE_BULK",
                            guildId: t.guild_id,
                            ids: t.ids,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_ACK":
                        wn({
                            type: "MESSAGE_ACK",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            manual: t.manual,
                            newMentionCount: t.mention_count,
                            version: t.version
                        });
                        break;
                    case "GUILD_FEATURE_ACK":
                        wn({
                            type: "GUILD_FEATURE_ACK",
                            id: t.resource_id,
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "USER_NON_CHANNEL_ACK":
                        wn({
                            type: "USER_NON_CHANNEL_ACK",
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "CHANNEL_PINS_ACK":
                        wn({
                            type: "CHANNEL_PINS_ACK",
                            channelId: t.channel_id,
                            timestamp: t.timestamp,
                            version: t.version
                        });
                        break;
                    case "CHANNEL_PINS_UPDATE":
                        wn({
                            type: "CHANNEL_PINS_UPDATE",
                            channelId: t.channel_id,
                            lastPinTimestamp: t.last_pin_timestamp
                        });
                        break;
                    case "CHANNEL_CREATE":
                    case "CHANNEL_DELETE":
                        wn({
                            type: e,
                            channel: (0, Vt.q_)(t)
                        });
                        break;
                    case "VOICE_CHANNEL_STATUS_UPDATE":
                        wn({
                            type: e,
                            id: t.id,
                            status: t.status
                        });
                        break;
                    case "CHANNEL_UPDATE":
                        Rn.add(t);
                        break;
                    case "THREAD_CREATE":
                    case "THREAD_UPDATE":
                    case "THREAD_DELETE":
                        var r = t.newly_created,
                            o = Cn(t, ["newly_created"]);
                        wn({
                            type: e,
                            isNewlyCreated: r,
                            channel: (0, Vt.q_)(o)
                        });
                        break;
                    case "THREAD_LIST_SYNC":
                        wn({
                            type: "THREAD_LIST_SYNC",
                            guildId: t.guild_id,
                            threads: t.threads.map((function(e) {
                                var t = f.Z.getChannel(e.parent_id);
                                if (null != t) {
                                    e.nsfw = t.nsfw;
                                    e.parentChannelThreadType = t.type
                                }
                                return (0, Vt.q_)(e)
                            })),
                            mostRecentMessages: t.most_recent_messages,
                            members: t.members ? i().map(t.members, Bt.Z) : void 0,
                            channelIds: t.channel_ids
                        });
                        break;
                    case "THREAD_MEMBER_UPDATE":
                        wn({
                            type: "THREAD_MEMBER_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            userId: t.user_id,
                            flags: t.flags,
                            muted: t.muted,
                            muteConfig: t.mute_config,
                            joinTimestamp: t.join_timestamp
                        });
                        break;
                    case "THREAD_MEMBERS_UPDATE":
                        var s;
                        wn({
                            type: "THREAD_MEMBERS_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            memberCount: t.member_count,
                            addedMembers: null === (s = t.added_members) || void 0 === s ? void 0 : s.map((function(e) {
                                return {
                                    id: e.id,
                                    guildId: t.guild_id,
                                    userId: e.user_id,
                                    flags: e.flags,
                                    joinTimestamp: e.join_timestamp
                                }
                            })),
                            removedMemberIds: t.removed_member_ids,
                            memberIdsPreview: t.member_ids_preview
                        });
                        break;
                    case "FORUM_UNREADS":
                        if (t.permission_denied) break;
                        wn({
                            type: "FORUM_UNREADS",
                            channelId: t.channel_id,
                            threads: t.threads.map((function(e) {
                                return {
                                    threadId: e.thread_id,
                                    missing: e.missing,
                                    count: e.count
                                }
                            }))
                        });
                        break;
                    case "SOUNDBOARD_SOUNDS":
                        Nn.add(t);
                        break;
                    case "CHANNEL_RECIPIENT_ADD":
                    case "CHANNEL_RECIPIENT_REMOVE":
                        var u = f.Z.getBasicChannel(t.channel_id);
                        wn({
                            type: e,
                            channelId: t.channel_id,
                            user: t.user,
                            nick: t.nick,
                            isMember: null != u
                        });
                        break;
                    case "GUILD_CREATE":
                        if (t.unavailable) wn({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        else {
                            var c, l = Sn(t);
                            kt.Z.createGuild(l);
                            wn({
                                type: "VOICE_STATE_UPDATES",
                                voiceStates: l.voice_states.map((function(e) {
                                    return {
                                        userId: e.user_id,
                                        guildId: l.id,
                                        sessionId: e.session_id,
                                        channelId: e.channel_id,
                                        mute: e.mute,
                                        deaf: e.deaf,
                                        selfMute: e.self_mute,
                                        selfDeaf: e.self_deaf,
                                        selfVideo: e.self_video || !1,
                                        suppress: e.suppress,
                                        selfStream: e.self_stream || !1,
                                        requestToSpeakTimestamp: null !== (c = e.request_to_speak_timestamp) && void 0 !== c ? c : null
                                    }
                                }))
                            })
                        }
                        break;
                    case "GUILD_UPDATE":
                        wn({
                            type: "GUILD_UPDATE",
                            guild: t
                        });
                        t.unavailable && wn({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_DELETE":
                        wn({
                            type: "GUILD_DELETE",
                            guild: t
                        });
                        t.unavailable && wn({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_MEMBERS_CHUNK":
                        a.ZP.Emitter.batched((function() {
                            wn({
                                type: "GUILD_MEMBERS_CHUNK",
                                guildId: t.guild_id,
                                members: t.members,
                                notFound: t.not_found
                            });
                            null != t.presences && t.presences.forEach((function(e) {
                                var n = e.user,
                                    r = e.status,
                                    i = e.client_status,
                                    a = e.activities,
                                    o = e.broadcast;
                                return Mn({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: r,
                                    activities: a,
                                    clientStatus: i,
                                    broadcast: o
                                })
                            }));
                            ze.flush()
                        }));
                        break;
                    case "THREAD_MEMBER_LIST_UPDATE":
                        a.ZP.Emitter.batched((function() {
                            wn({
                                type: "THREAD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                threadId: t.thread_id,
                                members: t.members
                            });
                            null != t.presences && t.presences.forEach((function(e) {
                                var n = e.user,
                                    r = e.status,
                                    i = e.client_status,
                                    a = e.activities,
                                    o = e.broadcast;
                                return Mn({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: r,
                                    activities: a,
                                    clientStatus: i,
                                    broadcast: o
                                })
                            }));
                            ze.flush()
                        }));
                        break;
                    case "GUILD_BAN_ADD":
                    case "GUILD_BAN_REMOVE":
                    case "GUILD_MEMBER_ADD":
                    case "GUILD_MEMBER_UPDATE":
                    case "GUILD_MEMBER_REMOVE":
                        wn({
                            type: e,
                            guildId: t.guild_id,
                            user: t.user,
                            avatar: t.avatar,
                            roles: t.roles,
                            nick: t.nick,
                            premiumSince: t.premium_since,
                            isPending: t.pending,
                            joinedAt: t.joined_at,
                            communicationDisabledUntil: t.communication_disabled_until,
                            unusualDMActivityUntil: t.unusual_dm_activity_until,
                            flags: t.flags
                        });
                        break;
                    case "GUILD_ROLE_CREATE":
                    case "GUILD_ROLE_UPDATE":
                        wn({
                            type: e,
                            guildId: t.guild_id,
                            role: t.role
                        });
                        break;
                    case "GUILD_ROLE_DELETE":
                        wn({
                            type: "GUILD_ROLE_DELETE",
                            guildId: t.guild_id,
                            roleId: t.role_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_EMOJIS_UPDATE":
                        wn({
                            type: "GUILD_EMOJIS_UPDATE",
                            guildId: t.guild_id,
                            emojis: t.emojis
                        });
                        break;
                    case "GUILD_STICKERS_UPDATE":
                        wn({
                            type: "GUILD_STICKERS_UPDATE",
                            guildId: t.guild_id,
                            stickers: t.stickers
                        });
                        break;
                    case "GUILD_INTEGRATIONS_UPDATE":
                        wn({
                            type: "GUILD_INTEGRATIONS_UPDATE",
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_CREATE":
                        wn({
                            type: "INTEGRATION_CREATE",
                            application: t.application,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_DELETE":
                        wn({
                            type: "INTEGRATION_DELETE",
                            applicationId: t.application_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "USER_UPDATE":
                        wn({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        break;
                    case "USER_SETTINGS_PROTO_UPDATE":
                        var d = (0, Zt.kI)(t.settings.type, t.settings.proto);
                        if (null == d) break;
                        if ("string" == typeof d) {
                            console.error("Invalid proto: |".concat(d, "| |").concat(t.settings.proto, "|"));
                            console.error({
                                parsed: d,
                                wire: t.settings.proto,
                                type: t.settings.type
                            });
                            throw Error("UserSettingsProto must not be a string")
                        }
                        wn({
                            type: "USER_SETTINGS_PROTO_UPDATE",
                            settings: {
                                proto: d,
                                type: t.settings.type
                            },
                            partial: t.partial
                        });
                        break;
                    case "USER_GUILD_SETTINGS_UPDATE":
                        wn({
                            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                            userGuildSettings: [t]
                        });
                        break;
                    case "USER_CONNECTIONS_UPDATE":
                        wn({
                            type: "USER_CONNECTIONS_UPDATE"
                        });
                        break;
                    case "USER_REQUIRED_ACTION_UPDATE":
                        wn({
                            type: "USER_REQUIRED_ACTION_UPDATE",
                            requiredAction: t.required_action
                        });
                        break;
                    case "USER_NOTE_UPDATE":
                        wn(In({
                            type: "USER_NOTE_UPDATE"
                        }, t));
                        break;
                    case "RELATIONSHIP_ADD":
                        wn({
                            type: "RELATIONSHIP_ADD",
                            relationship: {
                                id: t.id,
                                type: t.type,
                                user: t.user,
                                since: t.since,
                                nickname: t.nickname
                            },
                            shouldNotify: !0 === t.should_notify
                        });
                        break;
                    case "RELATIONSHIP_REMOVE":
                        wn({
                            type: "RELATIONSHIP_REMOVE",
                            relationship: t
                        });
                        break;
                    case "RELATIONSHIP_UPDATE":
                        wn({
                            type: "RELATIONSHIP_UPDATE",
                            relationship: t
                        });
                        break;
                    case "PRESENCE_UPDATE":
                        Mn({
                            guildId: t.guild_id,
                            user: t.user,
                            status: t.status,
                            activities: t.activities,
                            clientStatus: t.client_status,
                            broadcast: t.broadcast
                        });
                        break;
                    case "PRESENCES_REPLACE":
                        wn({
                            type: "PRESENCES_REPLACE",
                            presences: t
                        });
                        break;
                    case "SESSIONS_REPLACE":
                        wn({
                            type: "SESSIONS_REPLACE",
                            sessions: Un(t)
                        });
                        break;
                    case "VOICE_STATE_UPDATE":
                        null != t.member && Pn(t.guild_id, t.member.user, t.member);
                        var _;
                        wn({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: [{
                                userId: t.user_id,
                                guildId: t.guild_id,
                                sessionId: t.session_id,
                                channelId: t.channel_id,
                                mute: t.mute,
                                deaf: t.deaf,
                                selfMute: t.self_mute,
                                selfDeaf: t.self_deaf,
                                selfVideo: t.self_video || !1,
                                suppress: t.suppress,
                                selfStream: t.self_stream || !1,
                                requestToSpeakTimestamp: null !== (_ = t.request_to_speak_timestamp) && void 0 !== _ ? _ : null,
                                oldChannelId: Yt.Z.getUserVoiceChannelId(t.guild_id, t.user_id)
                            }]
                        });
                        break;
                    case "LOBBY_VOICE_STATE_UPDATE":
                        wn({
                            type: "LOBBY_VOICE_STATE_UPDATE",
                            userId: t.user_id,
                            lobbyId: t.lobby_id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf
                        });
                        break;
                    case "VOICE_SERVER_UPDATE":
                        wn({
                            type: "VOICE_SERVER_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "LOBBY_VOICE_SERVER_UPDATE":
                        wn({
                            type: "LOBBY_VOICE_SERVER_UPDATE",
                            lobbyId: t.lobby_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "CALL_CREATE":
                        wn({
                            type: "CALL_CREATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            embeddedActivities: t.embedded_activities,
                            region: t.region,
                            ringing: t.ringing
                        });
                        var p = t.voice_states;
                        if (null != p) {
                            var h;
                            wn({
                                type: "VOICE_STATE_UPDATES",
                                voiceStates: p.map((function(e) {
                                    return {
                                        userId: e.user_id,
                                        guildId: null,
                                        sessionId: e.session_id,
                                        channelId: e.channel_id,
                                        mute: e.mute,
                                        deaf: e.deaf,
                                        selfMute: e.self_mute,
                                        selfDeaf: e.self_deaf,
                                        selfVideo: e.self_video || !1,
                                        suppress: e.suppress,
                                        selfStream: e.self_stream || !1,
                                        requestToSpeakTimestamp: null !== (h = e.request_to_speak_timestamp) && void 0 !== h ? h : null
                                    }
                                }))
                            })
                        }
                        break;
                    case "CALL_UPDATE":
                        wn({
                            type: "CALL_UPDATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            region: t.region,
                            ringing: t.ringing
                        });
                        break;
                    case "CALL_DELETE":
                        wn({
                            type: "CALL_DELETE",
                            channelId: t.channel_id,
                            unavailable: t.unavailable
                        });
                        break;
                    case "OAUTH2_TOKEN_REVOKE":
                        wn({
                            type: "OAUTH2_TOKEN_REVOKE",
                            accessToken: t.access_token
                        });
                        break;
                    case "RECENT_MENTION_DELETE":
                        wn({
                            type: "RECENT_MENTION_DELETE",
                            id: t.message_id
                        });
                        break;
                    case "FRIEND_SUGGESTION_CREATE":
                        wn({
                            type: "FRIEND_SUGGESTION_CREATE",
                            suggestion: t
                        });
                        break;
                    case "FRIEND_SUGGESTION_DELETE":
                        wn({
                            type: "FRIEND_SUGGESTION_DELETE",
                            suggestedUserId: t.suggested_user_id
                        });
                        break;
                    case "WEBHOOKS_UPDATE":
                        wn({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id
                        });
                        break;
                    case "BURST_CREDIT_BALANCE_UPDATE":
                        wn({
                            type: "BURST_CREDITS_SET",
                            amount: t.amount,
                            wasReplenishedToday: t.replenished_today,
                            nextReplenishAt: new Date(t.next_replenish_at)
                        });
                        break;
                    case "MESSAGE_REACTION_ADD":
                    case "MESSAGE_REACTION_REMOVE":
                        wn({
                            type: e,
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            userId: t.user_id,
                            emoji: t.emoji,
                            burst: t.burst,
                            colors: t.burst_colors,
                            messageAuthorId: t.message_author_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_ALL":
                        wn({
                            type: "MESSAGE_REACTION_REMOVE_ALL",
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_EMOJI":
                        wn({
                            type: "MESSAGE_REACTION_REMOVE_EMOJI",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            emoji: t.emoji
                        });
                        break;
                    case "MESSAGE_REACTION_ADD_MANY":
                        wn({
                            type: "MESSAGE_REACTION_ADD_MANY",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            reactions: t.reactions
                        });
                        break;
                    case "PAYMENT_UPDATE":
                        wn({
                            type: "PAYMENT_UPDATE",
                            payment: t
                        });
                        break;
                    case "ENTITLEMENT_CREATE":
                    case "ENTITLEMENT_UPDATE":
                    case "ENTITLEMENT_DELETE":
                        wn({
                            type: e,
                            entitlement: t
                        });
                        break;
                    case "USER_PAYMENT_SOURCES_UPDATE":
                        if (Ft.Z.hasLayers()) {
                            n(673679).tZ();
                            Mt.Gn(Wt.Z.getFetchedSKUIDs())
                        }
                        break;
                    case "USER_SUBSCRIPTIONS_UPDATE":
                        jt.k();
                        Ft.Z.hasLayers() && n(673679).jg();
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
                        wn({
                            type: "GUILD_BOOST_SLOT_CREATE",
                            guildBoostSlot: xt.Z.createFromServer(t, Kt.Z.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
                        wn({
                            type: "GUILD_BOOST_SLOT_UPDATE",
                            guildBoostSlot: xt.Z.createFromServer(t, Kt.Z.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "BILLING_POPUP_BRIDGE_CALLBACK":
                        wn({
                            type: "BILLING_POPUP_BRIDGE_CALLBACK",
                            paymentSourceType: t.payment_source_type,
                            state: t.state,
                            path: t.path,
                            query: t.query
                        });
                        break;
                    case "USER_PAYMENT_BROWSER_CHECKOUT_DONE":
                        wn({
                            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
                            loadId: t.load_id
                        });
                        break;
                    case "USER_PAYMENT_CLIENT_ADD":
                        (0, qt.L)().then((function(e) {
                            var n = t.purchase_token_hash;
                            n === e && wn({
                                type: "USER_PAYMENT_CLIENT_ADD",
                                purchaseTokenHash: n,
                                expiresAt: t.expires_at
                            })
                        }));
                        break;
                    case "GUILD_MEMBER_LIST_UPDATE":
                        a.ZP.Emitter.batched((function() {
                            var e = function(e) {
                                if (null != e.member) {
                                    var n = e.member;
                                    Pn(t.guild_id, n.user, n);
                                    if (null != n.presence) {
                                        var r = n.presence;
                                        Mn({
                                            guildId: t.guild_id,
                                            user: r.user,
                                            status: r.status,
                                            activities: r.activities,
                                            clientStatus: r.client_status,
                                            broadcast: r.broadcast
                                        })
                                    }
                                }
                            };
                            t.ops.forEach((function(t) {
                                var n = t.op,
                                    r = t.items,
                                    i = t.item;
                                switch (n) {
                                    case "SYNC":
                                        r.forEach(e);
                                        break;
                                    case "UPDATE":
                                    case "INSERT":
                                        e(i)
                                }
                            }));
                            ze.flush();
                            wn({
                                type: "GUILD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                id: t.id,
                                ops: t.ops,
                                groups: t.groups,
                                memberCount: t.member_count
                            })
                        }));
                        break;
                    case "LOBBY_CREATE":
                        wn({
                            type: "LOBBY_CREATE",
                            lobby: t
                        });
                        t.voice_states.forEach((function(e) {
                            wn({
                                type: "LOBBY_VOICE_STATE_UPDATE",
                                lobbyId: t.id,
                                userId: e.user_id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf
                            })
                        }));
                        break;
                    case "LOBBY_UPDATE":
                        wn({
                            type: "LOBBY_UPDATE",
                            lobby: t
                        });
                        break;
                    case "LOBBY_DELETE":
                        wn({
                            type: "LOBBY_DELETE",
                            lobbyId: t.id,
                            reason: t.reason
                        });
                        break;
                    case "LOBBY_MEMBER_CONNECT":
                    case "LOBBY_MEMBER_UPDATE":
                    case "LOBBY_MEMBER_DISCONNECT":
                        wn({
                            type: e,
                            lobbyId: t.lobby_id,
                            member: t.member
                        });
                        break;
                    case "LOBBY_MESSAGE":
                        wn({
                            type: "LOBBY_MESSAGE",
                            lobbyId: t.lobby_id,
                            senderId: t.sender_id,
                            data: t.data
                        });
                        break;
                    case "GIFT_CODE_UPDATE":
                        wn({
                            type: "GIFT_CODE_UPDATE",
                            uses: t.uses,
                            code: t.code
                        });
                        break;
                    case "GIFT_CODE_CREATE":
                        wn({
                            type: "GIFT_CODE_CREATE",
                            giftCode: t
                        });
                        break;
                    case "USER_ACHIEVEMENT_UPDATE":
                        wn({
                            type: "USER_ACHIEVEMENT_UPDATE",
                            userAchievement: t
                        });
                        break;
                    case "LIBRARY_APPLICATION_UPDATE":
                        wn({
                            type: "LIBRARY_APPLICATION_UPDATE",
                            libraryApplication: t
                        });
                        break;
                    case "STREAM_CREATE":
                        wn({
                            type: "STREAM_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_SERVER_UPDATE":
                        wn({
                            type: "STREAM_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "STREAM_UPDATE":
                        wn({
                            type: "STREAM_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_DELETE":
                        wn({
                            type: "STREAM_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "GENERIC_PUSH_NOTIFICATION_SENT":
                        wn({
                            type: "GENERIC_PUSH_NOTIFICATION_SENT",
                            title: t.title,
                            body: t.body,
                            trackingType: t.tracking_type,
                            icon: t.icon,
                            route: t.route,
                            tag: t.tag
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_CREATE":
                        wn({
                            type: "NOTIFICATION_CENTER_ITEM_CREATE",
                            item: t
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_DELETE":
                        wn({
                            type: "NOTIFICATION_CENTER_ITEM_DELETE",
                            id: t.id
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEMS_ACK":
                        wn({
                            type: "NOTIFICATION_CENTER_ITEMS_ACK",
                            ids: [t.id],
                            optimistic: !1
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_COMPLETED":
                        wn({
                            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
                            item_enum: t.item_enum
                        });
                        break;
                    case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
                        wn({
                            type: e,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_APPLICATION_COMMAND_INDEX_UPDATE":
                        wn({
                            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
                            guildId: t.guild_id,
                            applicationCommandCounts: t.application_command_counts
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_CREATE":
                        wn({
                            type: "GUILD_JOIN_REQUEST_CREATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_UPDATE":
                        wn({
                            type: "GUILD_JOIN_REQUEST_UPDATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_DELETE":
                        wn({
                            type: "GUILD_JOIN_REQUEST_DELETE",
                            id: t.id,
                            userId: t.user_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTERACTION_CREATE":
                        wn({
                            type: "INTERACTION_CREATE",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_SUCCESS":
                        wn({
                            type: "INTERACTION_SUCCESS",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_FAILURE":
                        wn({
                            type: "INTERACTION_FAILURE",
                            nonce: t.nonce
                        });
                        break;
                    case "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE":
                        wn({
                            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
                            choices: t.choices,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_MODAL_CREATE":
                        wn({
                            type: "INTERACTION_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            components: t.components,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_IFRAME_MODAL_CREATE":
                        wn({
                            type: "INTERACTION_IFRAME_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            iframePath: t.iframe_path,
                            modalSize: t.modal_size,
                            nonce: t.nonce
                        });
                        break;
                    case "STAGE_INSTANCE_CREATE":
                        wn({
                            type: "STAGE_INSTANCE_CREATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_UPDATE":
                        wn({
                            type: "STAGE_INSTANCE_UPDATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_DELETE":
                        wn({
                            type: "STAGE_INSTANCE_DELETE",
                            instance: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_CREATE":
                        wn({
                            type: "GUILD_SCHEDULED_EVENT_CREATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_UPDATE":
                        wn({
                            type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_DELETE":
                        wn({
                            type: "GUILD_SCHEDULED_EVENT_DELETE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_ADD":
                        wn({
                            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
                        wn({
                            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_CREATE":
                        wn({
                            type: "GUILD_DIRECTORY_ENTRY_CREATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_UPDATE":
                        wn({
                            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_DELETE":
                        wn({
                            type: "GUILD_DIRECTORY_ENTRY_DELETE",
                            channelId: t.directory_channel_id,
                            guildId: t.entity_id
                        });
                        break;
                    case "AUTO_MODERATION_MENTION_RAID_DETECTION":
                        wn({
                            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
                            guildId: t.guild_id,
                            decisionId: t.decision_id,
                            suspiciousMentionActivityUntil: t.suspicious_mention_activity_until
                        });
                        break;
                    case "VOICE_CHANNEL_EFFECT_SEND":
                        wn({
                            type: "VOICE_CHANNEL_EFFECT_SEND",
                            emoji: t.emoji,
                            channelId: t.channel_id,
                            userId: t.user_id,
                            animationType: t.animation_type,
                            animationId: t.animation_id,
                            soundId: t.sound_id,
                            soundVolume: t.sound_volume,
                            points: t.points,
                            streamerId: t.streamer_id,
                            lineId: t.line_id,
                            emojiHose: t.emoji_hose
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_CREATE":
                        wn({
                            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new Ht.Z(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_UPDATE":
                        wn({
                            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new Ht.Z(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_DELETE":
                        wn({
                            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
                            guildId: t.guild_id,
                            soundId: t.sound_id
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUNDS_UPDATE":
                        wn({
                            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
                            guildId: t.guild_id,
                            soundboardSounds: t.soundboard_sounds.map((function(e) {
                                return {
                                    name: e.name,
                                    soundId: e.sound_id,
                                    emojiName: e.emoji_name,
                                    emojiId: e.emoji_id,
                                    userId: e.user_id,
                                    volume: e.volume,
                                    available: e.available,
                                    guildId: t.guild_id
                                }
                            }))
                        });
                        break;
                    case "EMBEDDED_ACTIVITY_UPDATE":
                        wn({
                            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            embeddedActivity: t.embedded_activity,
                            connections: t.connections,
                            updateCode: t.update_code
                        });
                        break;
                    case "AUTH_SESSION_CHANGE":
                        wn({
                            type: "AUTH_SESSION_CHANGE",
                            authSessionIdHash: t.auth_session_id_hash
                        });
                        break;
                    case "USER_CONNECTIONS_LINK_CALLBACK":
                        wn({
                            type: "USER_CONNECTIONS_LINK_CALLBACK",
                            provider: t.provider,
                            callbackCode: t.callback_code,
                            callbackState: t.callback_state
                        });
                        break;
                    case "DELETED_ENTITY_IDS":
                        wn(In({
                            type: "DELETED_ENTITY_IDS"
                        }, t));
                        break;
                    case "CONSOLE_COMMAND_UPDATE":
                        wn({
                            type: "CONSOLE_COMMAND_UPDATE",
                            id: t.id,
                            result: t.result,
                            error: t.error
                        });
                        break;
                    case "PASSIVE_UPDATE_V1":
                        var E, m, y;
                        wn({
                            type: "PASSIVE_UPDATE_V1",
                            guildId: t.guild_id,
                            members: t.members,
                            channels: null === (E = t.channels) || void 0 === E ? void 0 : E.map((function(e) {
                                return {
                                    id: e.id,
                                    lastMessageId: e.last_message_id,
                                    lastPinTimestamp: e.last_pin_timestamp
                                }
                            })),
                            voiceStates: null === (m = t.voice_states) || void 0 === m ? void 0 : m.map((function(e) {
                                return {
                                    channelId: e.channel_id,
                                    deaf: e.deaf || !1,
                                    mute: e.mute || !1,
                                    requestToSpeakTimestamp: null !== (y = e.request_to_speak_timestamp) && void 0 !== y ? y : null,
                                    selfDeaf: e.self_deaf || !1,
                                    selfMute: e.self_mute || !1,
                                    selfStream: e.self_stream || !1,
                                    selfVideo: e.self_video || !1,
                                    sessionId: e.session_id,
                                    suppress: e.suppress,
                                    userId: e.user_id
                                }
                            }))
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_CREATE":
                        wn({
                            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_UPDATE":
                        wn({
                            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_DELETE":
                        wn({
                            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
                            channelId: t.channel_id,
                            applicationId: t.application_id
                        });
                        break;
                    case "CREATOR_MONETIZATION_RESTRICTIONS_UPDATE":
                        wn({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                            guildId: t.guild_id,
                            restrictions: t.restrictions
                        });
                        break;
                    case "BILLING_REFERRAL_TRIAL_OFFER_UPDATE":
                        wn({
                            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
                            userTrialOfferId: t.user_trial_offer_id,
                            recipientId: t.recipient_id
                        });
                        break;
                    case "SPEED_TEST_CREATE":
                        wn({
                            type: "SPEED_TEST_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_SERVER_UPDATE":
                        wn({
                            type: "SPEED_TEST_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "SPEED_TEST_UPDATE":
                        wn({
                            type: "SPEED_TEST_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_DELETE":
                        wn({
                            type: "SPEED_TEST_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "LAST_MESSAGES":
                        wn({
                            type: "MESSAGE_PREVIEWS_LOADED",
                            guildId: t.guild_id,
                            messages: t.messages
                        });
                        break;
                    case "AUTHENTICATOR_UPDATE":
                        wn({
                            type: "AUTHENTICATOR_UPDATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_CREATE":
                        wn({
                            type: "AUTHENTICATOR_CREATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_DELETE":
                        wn({
                            type: "AUTHENTICATOR_DELETE",
                            credential: t
                        });
                        break;
                    case "INVENTORY_PACK_UPDATE":
                        wn({
                            type: "INVENTORY_PACK_UPDATE",
                            pack: Gt.C.fromServer(t)
                        });
                        break;
                    case "INVENTORY_PACK_DELETE":
                        wn({
                            type: "INVENTORY_PACK_DELETE",
                            pack: Gt.C.fromServer(t)
                        });
                        break;
                    case "GAME_INVITE_CREATE":
                        wn({
                            type: "GAME_INVITE_CREATE",
                            gameInvite: t
                        });
                        break;
                    case "GAME_INVITE_DELETE":
                        wn({
                            type: "GAME_INVITE_DELETE",
                            inviteId: t.invite_id
                        })
                }
            };
            var Hn = new u.Z("ConnectionStore"),
                zn = 0,
                Fn = null;

            function Yn() {
                At.update();
                Rt.update();
                return !1
            }

            function Wn() {
                Ct.update();
                return !1
            }

            function Kn() {
                Rt.update();
                return !1
            }

            function qn(e) {
                Ot.isSessionEstablished() && Ot.streamDelete(e)
            }

            function Jn() {
                var e = y.Z.getAllActiveStreamKeys().find((function(e) {
                    return (0, c.my)(e).ownerId === l.default.getId()
                }));
                y.Z.getAllActiveStreamKeys().filter((function(t) {
                    return t !== e
                })).forEach((function(e) {
                    return qn(e)
                }))
            }
            var Qn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Zn(e, t)
                }(n, e);
                var t = xn(n);

                function n() {
                    jn(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default, E.Z, f.Z, d.Z, _.Z);
                    this.syncWith([p.Z], Yn);
                    this.syncWith([m.Z], Wn)
                };
                r.getSocket = function() {
                    return Ot
                };
                r.isTryingToConnect = function() {
                    return !Ot.isClosed()
                };
                r.isConnected = function() {
                    return Ot.isSessionEstablished()
                };
                r.isConnectedOrOverlay = function() {
                    return Ot.isSessionEstablished() || __OVERLAY__
                };
                r.lastTimeConnectedChanged = function() {
                    return zn
                };
                return n
            }(a.ZP.Store);
            Qn.displayName = "GatewayConnectionStore";
            const $n = new Qn(o.Z, {
                START_SESSION: function() {
                    if (Ot.isClosed()) {
                        Hn.log("Socket is reconnecting because of starting new session");
                        return Ot.connect()
                    }
                    Hn.log("Socket is not reconnecting during a new session because it is not closed");
                    return !1
                },
                LOGIN_SUCCESS: function() {
                    Hn.log("session refresh dispatched", {
                        isEstablished: Ot.isSessionEstablished()
                    });
                    if (Ot.isSessionEstablished()) {
                        Ot.close();
                        return Ot.connect()
                    }
                    return !1
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount && Ct.handleAccountSwitch();
                    Hn.log("Closing socket because of logout");
                    Ot.close()
                },
                CLEAR_CACHES: function(e) {
                    Ot.close();
                    Ot.clearDispatchQueue();
                    Ot.connect();
                    return !1
                },
                CONNECTION_OPEN: function(e) {
                    zn = Date.now();
                    Fn = e.sessionId;
                    Ct.handleConnectionOpen();
                    var t = {},
                        n = E.Z.getVoiceChannelId();
                    if (null != n) {
                        var r = f.Z.getChannel(n);
                        null != r && (t = {
                            guildId: r.getGuildId(),
                            channelId: n
                        })
                    }
                    At.update(t, !0);
                    Rt.update({}, !0)
                },
                CONNECTION_CLOSED: function() {
                    Hn.log("connection closed dispatched");
                    zn = Date.now()
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (e.state !== ee.hes.DISCONNECTED) return !1;
                    e.willReconnect && (null != e.streamKey ? Ot.streamPing(e.streamKey) : Ot.voiceServerPing())
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    At.update({
                        guildId: e.guildId,
                        channelId: e.channelId
                    });
                    return !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        if (l.default.getId() !== t.userId) return e;
                        if (t.sessionId === Fn) At.setState({
                            guildId: t.guildId,
                            channelId: t.channelId
                        });
                        else {
                            if (t.guildId !== At.guildId) return e;
                            At.setState({
                                guildId: null,
                                channelId: null
                            })
                        }
                        return !0
                    }), !1)
                },
                GUILD_DELETE: function(e) {
                    e.guild.id === At.guildId && At.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CHANNEL_DELETE: function(e) {
                    e.channel.id === At.channelId && At.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CALL_DELETE: function(e) {
                    e.channelId === At.channelId && At.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                APP_STATE_UPDATE: function(e) {
                    if (e.state === ee.$7l.ACTIVE) {
                        Se = !1;
                        l.default.isAuthenticated() && Ot.resetBackoff("App state is active")
                    }
                    return !1
                },
                GUILD_MEMBERS_REQUEST: function(e) {
                    Ot.isSessionEstablished() && ("userIds" in e ? i()(e.userIds).chunk(100).forEach((function(t) {
                        Ot.requestGuildMembers(e.guildIds, {
                            userIds: t,
                            presences: !!e.presences
                        })
                    })) : Ot.requestGuildMembers(e.guildIds, {
                        query: e.query,
                        limit: e.limit,
                        presences: !!e.presences
                    }));
                    return !1
                },
                GUILD_SEARCH_RECENT_MEMBERS: function(e) {
                    var t = e.guildId,
                        n = e.query,
                        r = e.continuationToken;
                    Ot.isSessionEstablished() && Ot.searchRecentMembers(t, {
                        query: n,
                        continuationToken: r
                    })
                },
                GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
                    var t = e.guildId,
                        n = e.subscriptions;
                    Ot.isSessionEstablished() && Ot.updateGuildSubscriptions(t, n);
                    return !1
                },
                CALL_CONNECT: function(e) {
                    var t = e.channelId;
                    Ot.isSessionEstablished() && Ot.callConnect(t);
                    return !1
                },
                CALL_CONNECT_MULTIPLE: function(e) {
                    var t = e.channelIds;
                    Ot.isSessionEstablished() && t.forEach((function(e) {
                        Ot.callConnect(e)
                    }));
                    return !1
                },
                LOBBY_CONNECT: function(e) {
                    var t = e.lobbyId,
                        n = e.lobbySecret;
                    Ot.isSessionEstablished() && Ot.lobbyConnect(t, n);
                    return !1
                },
                LOBBY_DISCONNECT: function(e) {
                    var t = e.lobbyId;
                    Ot.isSessionEstablished() && Ot.lobbyDisconnect(t);
                    Rt.update();
                    return !1
                },
                LOBBY_VOICE_CONNECT: Kn,
                LOBBY_VOICE_DISCONNECT: Kn,
                RPC_APP_DISCONNECTED: Kn,
                STREAM_START: function(e) {
                    var t = e.streamType,
                        n = e.guildId,
                        r = e.channelId;
                    if (Ot.isSessionEstablished()) {
                        var i, a, o = null != n ? null === (i = f.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion : null === (a = d.Z.getCall(r)) || void 0 === a ? void 0 : a.region;
                        Ot.streamCreate(t, n, r, null != o ? o : h.Z.getPreferredRegion())
                    }
                    return !1
                },
                STREAM_WATCH: function(e) {
                    var t = e.streamKey,
                        n = e.allowMultiple;
                    if (Ot.isSessionEstablished()) {
                        n || Jn();
                        Ot.streamWatch(t)
                    }
                    return !1
                },
                STREAM_STOP: function(e) {
                    qn(e.streamKey);
                    return !1
                },
                STREAM_SET_PAUSED: function(e) {
                    var t = e.streamKey,
                        n = e.paused;
                    Ot.isSessionEstablished() && Ot.streamSetPaused(t, n)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    Ot.expeditedHeartbeat(5e3, "user clicked on notification", !0);
                    return !1
                },
                EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
                    var t, n, r = e.channelId,
                        i = e.applicationId,
                        a = null !== (n = null === (t = f.Z.getChannel(r)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
                    Ot.embeddedActivityClose(a, r, i)
                },
                REQUEST_FORUM_UNREADS: function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        r = e.threads;
                    Ot.requestForumUnreads(t, n, r)
                },
                REQUEST_SOUNDBOARD_SOUNDS: function(e) {
                    var t = e.guildIds;
                    Ot.requestSoundboardSounds(t)
                },
                REMOTE_COMMAND: function(e) {
                    var t = e.sessionId,
                        n = e.payload;
                    Ot.isSessionEstablished() && Ot.remoteCommand(t, n);
                    return !1
                },
                RESET_CONNECTION: function(e) {
                    if (Ot.connectionState !== Ue.WILL_RECONNECT)
                        if (e.badCache) {
                            s.Z.replaceDisableAllDatabases("RESET_CONNECTION");
                            Ot.resetSocketOnError(new Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")
                        } else Ot.resetSocketOnError(new Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION")
                },
                RTC_SPEED_TEST_START_TEST: function() {
                    Ot.isSessionEstablished() && Ot.speedTestCreate(h.Z.getPreferredRegion());
                    return !1
                },
                RTC_SPEED_TEST_STOP_TEST: function() {
                    Ot.isSessionEstablished() && Ot.speedTestDelete();
                    return !1
                },
                CLIPS_SETTINGS_UPDATE: function() {
                    At.update()
                }
            })
        },
        179678: (e, t, n) => {
            n.d(t, {
                Um: () => a,
                L2: () => o
            });
            var r = n(2590);

            function i(e) {
                return e.type === r.IIU.PLAYING
            }

            function a(e, t) {
                return null != e ? function(e, t) {
                    return t.findActivity(e, i)
                }(e.ownerId, t) : null
            }

            function o(e, t) {
                if (null == e) return null;
                var n = a(e, t);
                return null == n ? null : {
                    id: n.application_id,
                    name: n.name
                }
            }
        },
        261912: (e, t, n) => {
            n.d(t, {
                C: () => _
            });
            var r = n(169376),
                i = n(420881),
                a = n(775173);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var c, l, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }! function(e) {
                e[e.GUILD = 0] = "GUILD";
                e[e.USER = 1] = "USER"
            }(c || (c = {}));
            ! function(e) {
                e[e.DEFAULT = 48] = "DEFAULT"
            }(l || (l = {}));
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = f(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.name = e.name;
                    r.icon = e.icon;
                    r.author = e.author;
                    r.content = e.content;
                    r.emojiById = e.emojiById;
                    return r
                }
                n.fromServer = function(e) {
                    var t = {
                        id: e.id,
                        name: e.name,
                        icon: e.icon,
                        content: {
                            emojis: []
                        },
                        author: {
                            id: e.id,
                            type: c.GUILD
                        },
                        emojiById: {}
                    };
                    e.content.emojis.forEach((function(n) {
                        var r = {
                            animated: n.animated,
                            available: n.available,
                            id: n.id,
                            name: n.name,
                            require_colons: n.require_colons,
                            url: a.ZP.getEmojiURL({
                                id: n.id,
                                animated: n.animated,
                                size: l.DEFAULT
                            }),
                            allNamesString: ":".concat(n.name, ":"),
                            type: i.B.PACK,
                            packId: e.id
                        };
                        t.emojiById[n.id] = r;
                        t.content.emojis.push(r)
                    }));
                    return new n(t)
                };
                return n
            }(r.Z)
        },
        582906: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(281110),
                i = n(120415),
                a = n(747113),
                o = n(2590);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = new Set(["darwin", "linux", "win32", "ios", "android"]);

            function l() {
                if ((0, i.$L)()) return "web";
                var e = (0, i.y8)();
                return c.has(e) ? e : null
            }
            const d = new(function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._metrics = [];
                    this._intervalId = setInterval((function() {
                        t._flush()
                    }), 12e4)
                }
                var t = e.prototype;
                t.increment = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.name,
                        r = e.tags,
                        i = {
                            name: n,
                            tags: (0, a.d)()
                        };
                    null != r && r.forEach((function(e) {
                        i.tags.push(e)
                    }));
                    var o = l();
                    null !== o && i.tags.push("platform:".concat(o));
                    this._metrics.push(i);
                    (t || this._metrics.length >= 100) && this._flush()
                };
                t._flush = function() {
                    var e = this;
                    if (this._metrics.length > 0) {
                        var t = u(this._metrics);
                        r.ZP.post({
                            url: o.ANM.METRICS,
                            body: {
                                metrics: t
                            },
                            retries: 1
                        }).catch((function(n) {
                            e._metrics.length + t.length < 100 && (e._metrics = u(e._metrics).concat(u(t)))
                        }))
                    }
                    this._metrics = []
                };
                return e
            }())
        },
        983586: (e, t, n) => {
            n.d(t, {
                Lw: () => f,
                rq: () => _,
                dS: () => p,
                JE: () => h
            });
            var r = n(664625),
                i = n(61209),
                a = n(567403),
                o = n(933022),
                s = n(79462),
                u = n(2590);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d = "stage:";

            function f(e, t) {
                var n = 0,
                    i = r.default.getId();
                o.ZP.isSpeaker(i, e.id) && (n |= 1);
                var s = a.Z.getGuild(e.getGuildId());
                if (null != s) {
                    s.hasFeature(u.oNc.PARTNERED) && (n |= 2);
                    s.hasFeature(u.oNc.VERIFIED) && (n |= 4)
                }
                var c = n.toString(16);
                return "".concat(d).concat(e.guild_id, ":").concat(e.id, ":").concat(c, ":").concat(t.id)
            }

            function _(e) {
                if (null != e && null != e.party) {
                    var t = e.party,
                        n = t.id,
                        r = t.size;
                    try {
                        if (null == n || !n.startsWith(d)) return;
                        var i = l(n.split(":"), 5),
                            a = i[1],
                            o = i[2],
                            s = i[3],
                            u = i[4],
                            c = parseInt(s, 16);
                        return {
                            guildId: a,
                            channelId: o,
                            size: r,
                            userIsSpeaker: 0 != (1 & c),
                            guildIsPartnered: 0 != (2 & c),
                            guildIsVerified: 0 != (4 & c),
                            stageInstanceId: u
                        }
                    } catch (e) {
                        return null
                    }
                }
            }

            function p(e) {
                return (null == e ? void 0 : e.application_id) === s.gD
            }

            function h(e) {
                var t = _(e);
                if (null == t) return !1;
                var n = t.channelId;
                return null != i.Z.getChannel(n)
            }
        },
        218086: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r = n(110251),
                i = n.n(r),
                a = n(202351),
                o = n(744564),
                s = n(61209),
                u = n(567403),
                c = n(563367),
                l = n(715107),
                d = n(563135),
                f = n(82274),
                _ = n(808194),
                p = n(983586),
                h = n(766496),
                E = n(713717),
                m = n(79462),
                y = n(2590);

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function v(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = S(e);
                    if (t) {
                        var i = S(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var O = null;

            function C() {
                var e = function() {
                    var e, t, n, r = l.Z.getVoiceChannelId();
                    if (null == r) return null;
                    var i = h.Z.getStageInstanceByChannel(r);
                    if (null == i) return null;
                    var a = s.Z.getChannel(r);
                    if (null == a) return null;
                    if (!d.ZP.canEveryone(y.Plq.VIEW_CHANNEL, a)) return null;
                    var o = u.Z.getGuild(a.getGuildId());
                    if (null == o) return null;
                    if (!o.hasFeature(y.oNc.DISCOVERABLE)) return null;
                    var c, g, S, v, b = (0, p.Lw)(a, i),
                        T = (null == O || null === (e = O.party) || void 0 === e ? void 0 : e.id) === b ? O : null,
                        I = f.Z.getMutableParticipants(a.id, _.pV.SPEAKER),
                        C = I.filter((function(e) {
                            return e.type === _.Ui.STREAM
                        })).length,
                        A = I.length - C,
                        R = f.Z.getParticipantCount(r) - C,
                        N = null != (null == T || null === (t = T.party) || void 0 === t ? void 0 : t.size) ? T.party.size[1] : 0;
                    return {
                        application_id: m.gD,
                        name: null !== (g = null !== (c = i.topic) && void 0 !== c ? c : a.topic) && void 0 !== g ? g : a.name,
                        type: (0, E.xJ)(a.id) ? y.IIU.WATCHING : y.IIU.LISTENING,
                        timestamps: {
                            start: null !== (S = null == T || null === (n = T.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== S ? S : (new Date).getTime()
                        },
                        assets: {
                            small_image: null !== (v = o.icon) && void 0 !== v ? v : void 0,
                            small_text: o.name
                        },
                        party: {
                            id: b,
                            size: [A, Math.max(R, N)]
                        }
                    }
                }();
                if (!i()(e, O)) {
                    O = e;
                    return !0
                }
                return !1
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    g(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.Z, l.Z, h.Z, c.Z)
                };
                r.getActivity = function() {
                    return O
                };
                return n
            }(a.ZP.Store);
            A.displayName = "StageChannelSelfRichPresenceStore";
            const R = new A(o.Z, {
                CONNECTION_OPEN: C,
                STAGE_INSTANCE_CREATE: C,
                STAGE_INSTANCE_UPDATE: C,
                STAGE_INSTANCE_DELETE: C,
                VOICE_CHANNEL_SELECT: C,
                RTC_CONNECTION_STATE: function(e) {
                    var t, n, r, i = e.state,
                        a = null !== (r = null == O || null === (t = O.party) || void 0 === t || null === (n = t.size) || void 0 === n ? void 0 : n[1]) && void 0 !== r ? r : 0;
                    return !(i !== y.hes.RTC_CONNECTED || a > 0) && C()
                },
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates;
                    if (null != O) {
                        var n = (0, p.rq)(O);
                        null != n && null != t.find((function(e) {
                            return e.channelId === n.channelId
                        })) && C()
                    }
                }
            })
        },
        79462: (e, t, n) => {
            n.d(t, {
                xA: () => a,
                gD: () => o,
                Df: () => s,
                $z: () => u,
                BM: () => r,
                lv: () => i
            });
            n(348592), n(2590), n(473708);
            var r, i, a = 240,
                o = "834488117758001152",
                s = "stage-invite",
                u = "stage-channel-audience-notice-shown";
            ! function(e) {
                e[e.EVERYONE = 1] = "EVERYONE";
                e[e.NO_ONE = 2] = "NO_ONE";
                e[e.ROLES = 3] = "ROLES"
            }(r || (r = {}));
            ! function(e) {
                e[e.GUILD_SELECTION = 0] = "GUILD_SELECTION";
                e[e.STAGE_CHANNEL_SETTINGS = 1] = "STAGE_CHANNEL_SETTINGS";
                e[e.PUBLIC_STAGE_PREVIEW = 2] = "PUBLIC_STAGE_PREVIEW"
            }(i || (i = {}))
        },
        78551: (e, t, n) => {
            n.d(t, {
                Z: () => K
            });
            var r = n(17916),
                i = n(202351),
                a = n(744564),
                o = n(247075),
                s = n(114643);
            var u = new(n(296602).Z)("GuildStickers");
            const c = new(function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.actions = {
                        BACKGROUND_SYNC: function(e, n) {
                            return t.handleBackgroundSync(e, n)
                        },
                        CLEAR_GUILD_CACHE: function(e, n) {
                            return t.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(e, n) {
                            return t.handleConnectionOpen(e, n)
                        },
                        GUILD_CREATE: function(e, n) {
                            return t.handleGuildCreate(e, n)
                        },
                        GUILD_DELETE: function(e, n) {
                            return t.handleGuildDelete(e, n)
                        },
                        GUILD_STICKERS_UPDATE: function(e, n) {
                            return t.handleGuildStickersUpdate(e, n)
                        },
                        GUILD_UPDATE: function(e, n) {
                            return t.handleGuildUpdate(e, n)
                        }
                    }
                }
                var t = e.prototype;
                t.getSync = function(e) {
                    var t = performance.now(),
                        n = o.Z.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    u.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")"));
                    return n
                };
                t.handleConnectionOpen = function(e, t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e.guilds[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            this.handleOneGuildCreate(s, t)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                };
                t.handleGuildCreate = function(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                };
                t.handleGuildUpdate = function(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                };
                t.handleGuildDelete = function(e, t) {
                    this.delete(e.guild.id, t)
                };
                t.handleGuildStickersUpdate = function(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                };
                t.handleBackgroundSync = function(e, t) {
                    var n = this;
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map((function(e) {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        if ("full" === e.dataMode) {
                            u.log("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId));
                            n.replace(e.guildId, e.entities, t)
                        } else if (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) {
                            u.log("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId));
                            n.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t)
                        }
                    }))))
                };
                t.handleOneGuildCreate = function(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t);
                    null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                };
                t.handleClearGuildCache = function(e) {
                    this.clear(e)
                };
                t.handleReset = function() {};
                t.replace = function(e, t, n) {
                    o.Z.stickersTransaction(n).replaceAll(e, t)
                };
                t.delete = function(e, t) {
                    o.Z.stickersTransaction(t).delete(e)
                };
                t.clear = function(e) {
                    o.Z.stickersTransaction(e).delete()
                };
                t.update = function(e, t, n, r) {
                    var i = o.Z.stickersTransaction(r);
                    i.putAll(e, t);
                    var a = !0,
                        s = !1,
                        u = void 0;
                    try {
                        for (var c, l = n[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                            var d = c.value;
                            i.delete(e, d)
                        }
                    } catch (e) {
                        s = !0;
                        u = e
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (s) throw u
                        }
                    }
                };
                return e
            }());
            var l = n(135855),
                d = n(944522),
                f = n(848285),
                _ = n(695895),
                p = n(567403),
                h = n(514351),
                E = n(513586),
                m = n(2590);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function T(e, t) {
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

            function I(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || D(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || D(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R, N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function D(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                }
            }

            function w(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e[e.Unloaded = 0] = "Unloaded";
                e[e.MaybeLoaded = 1] = "MaybeLoaded";
                e[e.Loaded = 2] = "Loaded"
            }(R || (R = {}));
            var P = 2,
                L = new Map,
                U = new Map,
                k = null,
                M = [],
                j = null,
                G = !1,
                B = new Map,
                Z = function(e, t) {
                    B = new Map(B.set(e, t))
                },
                V = 1e3 * m.UF9.HOUR,
                x = function() {
                    if (0 === P) {
                        var e = o.Z.database();
                        if (null != e) {
                            P = 2;
                            var t = (0, s.Pv)("StickerStore.loadSavedGuildStickers", (function() {
                                return r.Z.time("💾", "loadSavedGuildStickers", (function() {
                                    return c.getSync(e)
                                }))
                            }));
                            if (null != t) {
                                var n = !0,
                                    i = !1,
                                    a = void 0;
                                try {
                                    for (var u, l = t[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
                                        var d = C(u.value, 2),
                                            f = d[0],
                                            h = d[1];
                                        if (_.Z.isMember(f) && !B.has(f)) {
                                            var E = !0,
                                                m = !1,
                                                y = void 0;
                                            try {
                                                for (var g, S = h[Symbol.iterator](); !(E = (g = S.next()).done); E = !0) {
                                                    var v = g.value;
                                                    H(v, !0, p.Z.getGuild(f))
                                                }
                                            } catch (e) {
                                                m = !0;
                                                y = e
                                            } finally {
                                                try {
                                                    E || null == S.return || S.return()
                                                } finally {
                                                    if (m) throw y
                                                }
                                            }
                                            Z(f, h)
                                        }
                                    }
                                } catch (e) {
                                    i = !0;
                                    a = e
                                } finally {
                                    try {
                                        n || null == l.return || l.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                            }
                        }
                    }
                },
                H = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    U.set(e.id, e);
                    t && z(e, n)
                },
                z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null != k) {
                        var n = e.tags,
                            r = {
                                type: h.MO.STICKER_NAME,
                                value: e.name.trim().toLocaleLowerCase()
                            };
                        if ((0, E.jl)(e)) {
                            var i = M.find((function(t) {
                                    return t.id === e.pack_id
                                })),
                                a = [r].concat(A((null != n ? n : "").split(",").map((function(e) {
                                    return {
                                        type: h.MO.TAG,
                                        value: e.trim().toLocaleLowerCase()
                                    }
                                }))));
                            null != i && a.push({
                                type: h.MO.PACK_NAME,
                                value: i.name
                            });
                            k.set(e.id, a)
                        } else if ((0, E.J8)(e) && null != n) {
                            var o = l.ZP.getByName(n),
                                s = {
                                    type: h.MO.TAG,
                                    value: n.trim().toLocaleLowerCase()
                                },
                                u = [r, s];
                            if (null != t) {
                                var c = (t instanceof f.Z ? t.name : t.properties.name).trim().toLocaleLowerCase();
                                null != c && "" !== c && u.push({
                                    type: h.MO.GUILD_NAME,
                                    value: c
                                })
                            }
                            if (null == o) {
                                k.set(e.id, u);
                                return
                            }
                            u.push({
                                type: h.MO.CORRELATED_EMOJI,
                                value: o.surrogates
                            });
                            o.forEachDiversity((function(e) {
                                return u.push({
                                    type: h.MO.CORRELATED_EMOJI,
                                    value: e.surrogates
                                })
                            }));
                            k.set(e.id, u)
                        }
                    }
                },
                F = function(e, t, n) {
                    L.set(e.id, e);
                    var r = A(M);
                    if (t) {
                        var i = r.findIndex((function(t) {
                            return t.id === e.id
                        })); - 1 !== i ? r[i] = e : r.push(e);
                        M = r
                    }(t || n) && e.stickers.forEach((function(e) {
                        return H(e)
                    }))
                };

            function Y(e) {
                if (null != e.stickers) {
                    e.stickers.forEach((function(t) {
                        return H(t, !0, e)
                    }));
                    Z(e.id, e.stickers)
                }
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = w(n);

                function n() {
                    g(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(o.Z, _.Z, p.Z)
                };
                r.getStickerById = function(e) {
                    U.has(e) || x();
                    return U.get(e)
                };
                r.getStickerPack = function(e) {
                    return L.get(e)
                };
                r.getPremiumPacks = function() {
                    return M
                };
                r.isPremiumPack = function(e) {
                    return M.some((function(t) {
                        return t.id === e
                    }))
                };
                r.getRawStickersByGuild = function() {
                    return B
                };
                r.getAllStickersIterator = function() {
                    x();
                    return U.values()
                };
                r.getAllGuildStickers = function() {
                    x();
                    return B
                };
                r.getStickersByGuildId = function(e) {
                    x();
                    return B.get(e)
                };
                ! function(e, t, n) {
                    t && S(e.prototype, t);
                    n && S(e, n)
                }(n, [{
                    key: "isLoaded",
                    get: function() {
                        return 0 !== P
                    }
                }, {
                    key: "stickerMetadata",
                    get: function() {
                        x();
                        if (null == k) {
                            k = new Map;
                            ! function() {
                                B.forEach((function(e, t) {
                                    var n = p.Z.getGuild(t);
                                    null != n && e.forEach((function(e) {
                                        return z(e, n)
                                    }))
                                }));
                                M.forEach((function(e) {
                                    e.stickers.forEach((function(e) {
                                        return z(e)
                                    }))
                                }))
                            }()
                        }
                        return k
                    }
                }, {
                    key: "hasLoadedStickerPacks",
                    get: function() {
                        return null != j && j + V > Date.now()
                    }
                }, {
                    key: "isFetchingStickerPacks",
                    get: function() {
                        return G
                    }
                }]);
                return n
            }(i.ZP.Store);
            W.displayName = "StickersStore";
            const K = new W(a.Z, {
                BACKGROUND_SYNC: function() {
                    k = null;
                    U = new Map;
                    B = new Map;
                    P = 0
                },
                CONNECTION_OPEN: function(e) {
                    var t = e.guilds;
                    k = null;
                    U = new Map;
                    B = new Map;
                    t.forEach(Y);
                    P = t.every((function(e) {
                        return null != e.stickers
                    })) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    if (!d.Z.isLurking(t.id)) {
                        Y(t);
                        1 === P && null == t.stickers && null != t.stickerUpdates && (P = 0)
                    }
                },
                GUILD_DELETE: function(e) {
                    var t, n = e.guild;
                    (null !== (t = B.get(n.id)) && void 0 !== t ? t : []).forEach((function(e) {
                        null != k && k.delete(e.id);
                        U.delete(e.id)
                    }));
                    B.delete(n.id);
                    B = new Map(B)
                },
                LOGOUT: function() {
                    P = 0;
                    M = [];
                    U.clear();
                    L.clear();
                    k = null;
                    B.clear();
                    B = new Map(B);
                    G = !1;
                    j = null
                },
                STICKER_PACKS_FETCH_START: function() {
                    G = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: function(e) {
                    e.packs.forEach((function(e) {
                        return F(e, !0)
                    }));
                    j = Date.now();
                    G = !1
                },
                STICKER_PACK_FETCH_SUCCESS: function(e) {
                    var t = e.pack,
                        n = e.ingestStickers;
                    F(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.stickers;
                    n.forEach((function(e) {
                        return H(e)
                    }));
                    Z(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: function(e) {
                    var t, n, r = e.guildId,
                        i = e.sticker,
                        a = null !== (t = B.get(r)) && void 0 !== t ? t : [];
                    Z(r, A(null !== (n = a.filter((function(e) {
                        return e.id !== i.id
                    }))) && void 0 !== n ? n : []).concat([i]));
                    H(i)
                },
                STICKER_FETCH_SUCCESS: function(e) {
                    var t = e.sticker;
                    H(t, !1)
                },
                GUILD_STICKERS_UPDATE: function(e) {
                    var t, n = e.guildId,
                        r = e.stickers,
                        i = function(e) {
                            var t, n = U.get(e.id);
                            null != n && (0, E.J8)(n) && (t = null != n.user ? n.user : void 0);
                            return T(function(e) {
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
                            }({}, e), {
                                user: t
                            })
                        };
                    (null !== (t = B.get(n)) && void 0 !== t ? t : []).filter((function(e) {
                        return null == r.find((function(t) {
                            return t.id === e.id
                        }))
                    })).forEach((function(e) {
                        U.delete(e.id);
                        null != k && k.delete(e.id)
                    }));
                    var a = r.map((function(e) {
                        return i(e)
                    }));
                    a.forEach((function(e) {
                        return H(e)
                    }));
                    Z(n, a)
                }
            })
        },
        55609: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(17916),
                i = new Set;

            function a() {
                return i.size
            }

            function o(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function s(e) {
                            o(a, r, i, s, u, "next", e)
                        }

                        function u(e) {
                            o(a, r, i, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t, n) {
                t && c(e.prototype, t);
                n && c(e, n);
                return e
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function _(e, t) {
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

            function p(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var y = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                g = function() {};
            n.g.__timingFunction = function() {
                return performance.now()
            };
            var S = null == n.g.__getTotalRequireTime ? function() {
                return 0
            } : function() {
                return n.g.__getTotalRequireTime()
            };

            function v(e, t) {
                if (0 === t || null == t) return null;
                var n = t - e;
                return n < 0 || n > 1e6 ? null : n
            }
            var b = function() {
                    function e(t, n) {
                        u(this, e);
                        this.emoji = t;
                        this.name = n;
                        this.start_ = 0;
                        this.startNumImports = 0;
                        this.startImportTime = 0;
                        this.end_ = 0;
                        this.endNumImports = 0;
                        this.endImportTime = 0
                    }
                    var t = e.prototype;
                    t.hasStart = function() {
                        return this.start_ > 0
                    };
                    t.hasData = function() {
                        return this.end_ > 0
                    };
                    t.recordStart = function() {
                        0 === this.start_ && this.recordStart_();
                        r.Z.mark(this.emoji, "Start ".concat(this.name));
                        g()
                    };
                    t.recordStart_ = function() {
                        this.start_ = Date.now();
                        this.startNumImports = a();
                        this.startImportTime = S()
                    };
                    t.recordEnd = function() {
                        if (0 === this.end_ && 0 !== this.start_) {
                            this.recordEnd_();
                            r.Z.mark(this.emoji, "Finish ".concat(this.name), this.end_ - this.start_)
                        } else r.Z.mark(this.emoji, "Finish ".concat(this.name));
                        g()
                    };
                    t.recordEnd_ = function() {
                        this.end_ = Date.now();
                        this.endNumImports = a();
                        this.endImportTime = S()
                    };
                    t.set = function(e, t) {
                        if (0 === this.start_) {
                            this.start_ = e;
                            this.end_ = e + t;
                            this.endNumImports = a();
                            this.endImportTime = S()
                        }
                        r.Z.mark(this.emoji, this.name, t);
                        g()
                    };
                    t.serializeStart = function(e) {
                        return v(e, this.start_)
                    };
                    t.serializeEnd = function(e) {
                        return v(e, this.end_)
                    };
                    t.measure = function(e) {
                        if (this.start_ > 0) return r.Z.time(this.emoji, this.name, e);
                        this.recordStart_();
                        var t = r.Z.time(this.emoji, this.name, e);
                        this.recordEnd_();
                        g();
                        return t
                    };
                    t.measureAsync = function(e) {
                        var t = this;
                        return s((function() {
                            var n;
                            return y(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (t.start_ > 0) return [2, r.Z.timeAsync(t.emoji, t.name, e)];
                                        t.recordStart_();
                                        return [4, r.Z.timeAsync(t.emoji, t.name, e)];
                                    case 1:
                                        n = i.sent();
                                        t.recordEnd_();
                                        g();
                                        return [2, n]
                                }
                            }))
                        }))()
                    };
                    t.measureAsyncWithoutNesting = function(e) {
                        var t = this;
                        return s((function() {
                            var n, i;
                            return y(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (t.start_ > 0) return [2, r.Z.timeAsync(t.emoji, t.name, e)];
                                        t.recordStart_();
                                        n = Date.now();
                                        r.Z.mark(t.emoji, "Start ".concat(t.name));
                                        return [4, e()];
                                    case 1:
                                        i = a.sent();
                                        r.Z.mark(t.emoji, "Finish ".concat(t.name), Date.now() - n);
                                        t.recordEnd_();
                                        g();
                                        return [2, i]
                                }
                            }))
                        }))()
                    };
                    l(e, [{
                        key: "start",
                        get: function() {
                            return this.start_
                        }
                    }, {
                        key: "end",
                        get: function() {
                            return this.end_
                        }
                    }]);
                    return e
                }(),
                T = function() {
                    function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        u(this, e);
                        this.emoji = t;
                        this.name = n;
                        this.onlyOnce = r;
                        this.time_ = 0;
                        this.numImports = null;
                        this.importTime = 0
                    }
                    var t = e.prototype;
                    t.record = function() {
                        if (0 === this.time_) {
                            this.time_ = Date.now();
                            this.numImports = a();
                            this.importTime = S();
                            r.Z.mark(this.emoji, this.name)
                        } else this.onlyOnce || r.Z.mark(this.emoji, this.name);
                        g()
                    };
                    t.hasData = function() {
                        return this.time_ > 0
                    };
                    t.serialize = function(e) {
                        return v(e, this.time_)
                    };
                    l(e, [{
                        key: "time",
                        get: function() {
                            return this.time_
                        }
                    }]);
                    return e
                }(),
                I = function() {
                    function e() {
                        u(this, e);
                        this.time_ = 0
                    }
                    e.prototype.record = function() {
                        0 === this.time_ && (this.time_ = S())
                    };
                    l(e, [{
                        key: "time",
                        get: function() {
                            return this.time_
                        }
                    }]);
                    return e
                }(),
                O = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(i, e);
                    var t = m(i);

                    function i() {
                        u(this, i);
                        var e;
                        (e = t.apply(this, arguments)).readyProperties = {};
                        e.didBackgroundApp = !1;
                        e.wasEverActive = !1;
                        e.wasAuthenticated = !1;
                        e.interstitial = null;
                        e.cachedChannelCounts = new Map;
                        e.cachedChannelId = null;
                        e.cachedMessageIds = null;
                        e.messageCacheMissingReason = "never-loaded";
                        e.messageCacheAgeSeconds = null;
                        e.messageCacheCount = null;
                        e.messageCacheHavingCount = null;
                        e.messageCacheMissingCount = null;
                        e.messageRenderFullCount = null;
                        e.messageRenderCachedCount = null;
                        e.messageRenderHasMoreAfter = null;
                        e.firstAppActiveTime = null;
                        e.cacheInfo = null;
                        e.extraProperties = {};
                        return e
                    }
                    var a = i.prototype;
                    a.setTTICallback = function(e) {
                        g = function() {
                            !0 === e() && (g = function() {
                                return !1
                            })
                        }
                    };
                    a.setCacheInfo = function(e) {
                        this.cacheInfo = e
                    };
                    a.setInterstitial = function(e) {
                        this.interstitial = e;
                        g()
                    };
                    a.addLocalMessages = function(e, t) {
                        this.cachedChannelCounts.set(e, t);
                        for (; this.cachedChannelCounts.size > 100;) {
                            var n = this.cachedChannelCounts.keys();
                            this.cachedChannelCounts.delete(n.next().value)
                        }
                    };
                    a.attachReadyPayloadProperties = function(e) {
                        this.readyProperties = e
                    };
                    a.appStateChanged = function(e) {
                        if ("active" === e) {
                            null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now());
                            this.wasEverActive = !0
                        }
                        null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || "active" !== e)
                    };
                    a.recordRender = function(e, t) {
                        this.renderMessages.record();
                        (t || e > 0) && this.renderMessagesWithCache.record();
                        t && this.renderLatestMessages.record()
                    };
                    a.recordMessageRender = function(e, t, r, i) {
                        var a = this,
                            o = n(842227).default;
                        if (!this.renderLatestMessages.hasData()) {
                            this.renderMessages.record();
                            t.length > 0 && this.renderMessagesWithCache.record();
                            if (r) {
                                this.renderLatestMessages.record();
                                if (null == this.cachedChannelId) {
                                    this.messageCacheMissingReason = "no-cache";
                                    return
                                }
                                if (this.cachedChannelId !== e) {
                                    this.messageCacheMissingReason = "channel-changed";
                                    return
                                }
                                if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                                    this.messageCacheMissingReason = "no-cache";
                                    return
                                }
                                if (0 === t.length) {
                                    this.messageCacheMissingReason = "channel-empty";
                                    return
                                }
                                if (e === this.cachedChannelId) {
                                    var s = this.cachedMessageIds.sort(o.compare).reverse()[0],
                                        u = t.sort(o.compare).reverse()[0];
                                    this.messageCacheAgeSeconds = Math.floor((o.extractTimestamp(u) - o.extractTimestamp(s)) / 1e3);
                                    var c, l = t.filter((function(e) {
                                        var t;
                                        return null === (t = a.cachedMessageIds) || void 0 === t ? void 0 : t.includes(e)
                                    })).length;
                                    this.messageCacheCount = null !== (c = this.cachedChannelCounts.get(e)) && void 0 !== c ? c : null;
                                    this.messageCacheHavingCount = l;
                                    this.messageCacheMissingCount = t.length - l;
                                    this.messageRenderFullCount = t.length;
                                    this.messageRenderCachedCount = this.cachedMessageIds.length;
                                    this.messageRenderHasMoreAfter = i
                                }
                            } else if (null == this.cachedChannelId || e === this.cachedChannelId) {
                                this.cachedChannelId = e;
                                this.cachedMessageIds = t;
                                t.length > 0 && (this.messageCacheMissingReason = null)
                            }
                        }
                    };
                    a.getStartTime = function(e) {
                        return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e
                    };
                    a.processNativeLogs = function(e, t) {
                        var n = this.getStartTime(t),
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                                var u = o.value;
                                switch (u.label) {
                                    case "Finish MainApplication.initialize()":
                                        this.extraProperties.time_main_application_initialize_end = v(n, u.timestamp);
                                        break;
                                    case "GET_REACT_INSTANCE_MANAGER_START":
                                        this.extraProperties.time_get_react_instance_manager_start = v(n, u.timestamp);
                                        break;
                                    case "GET_REACT_INSTANCE_MANAGER_END":
                                        this.extraProperties.time_get_react_instance_manager_end = v(n, u.timestamp);
                                        break;
                                    case "PROCESS_PACKAGES_START":
                                        this.extraProperties.time_process_packages_start = v(n, u.timestamp);
                                        break;
                                    case "PROCESS_PACKAGES_END":
                                        this.extraProperties.time_process_packages_end = v(n, u.timestamp);
                                        break;
                                    case "CREATE_CATALYST_INSTANCE_START":
                                        this.extraProperties.time_create_catalyst_instance_start = v(n, u.timestamp);
                                        break;
                                    case "CREATE_CATALYST_INSTANCE_END":
                                        this.extraProperties.time_create_catalyst_instance_end = v(n, u.timestamp);
                                        break;
                                    case "CREATE_UI_MANAGER_MODULE_START":
                                        this.extraProperties.time_create_ui_manager_module_start = v(n, u.timestamp);
                                        break;
                                    case "CREATE_UI_MANAGER_MODULE_END":
                                        this.extraProperties.time_create_ui_manager_module_end = v(n, u.timestamp);
                                        break;
                                    case "REACT_BRIDGE_LOADING_START":
                                        this.extraProperties.time_react_bridge_loading_start = v(n, u.timestamp);
                                        break;
                                    case "REACT_BRIDGE_LOADING_END":
                                        this.extraProperties.time_react_bridge_loading_end = v(n, u.timestamp);
                                        break;
                                    case "CacheStorage Init Start":
                                        this.extraProperties.time_init_native_storage_start = v(n, u.timestamp);
                                        break;
                                    case "CacheStorage Init End":
                                        this.extraProperties.time_init_native_storage_end = v(n, u.timestamp);
                                        break;
                                    case "ChatModule.updateRows() Start":
                                        if (null != this.extraProperties.time_first_native_message_render_start) continue;
                                        this.extraProperties.time_first_native_message_render_start = v(n, u.timestamp);
                                        break;
                                    case "ChatModule.updateRows() Finish":
                                        if (null != this.extraProperties.time_first_native_message_render_end) continue;
                                        this.extraProperties.time_first_native_message_render_end = v(n, u.timestamp)
                                }
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                    };
                    a.serializeTTITracker = function(e) {
                        var t, i, a, o, s, u, c, l = this.getStartTime(e),
                            f = n(496486)(r.Z.logGroups[0].logs).filter((function(e) {
                                return e.log.startsWith("Require ")
                            })).map((function(e) {
                                return null !== (c = e.delta) && void 0 !== c ? c : 0
                            })).sum();
                        return _(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    d(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, this.extraProperties), {
                            time_load_index_start: this.loadIndex.serializeStart(l),
                            time_load_index_end: this.loadIndex.serializeEnd(l),
                            time_begin_fast_connect_start: this.beginFastConnect.serializeStart(l),
                            time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(l),
                            time_load_imports_start: this.loadImports.serializeStart(l),
                            time_load_imports_end: this.loadImports.serializeEnd(l),
                            time_init_start: this.init.serializeStart(l),
                            time_init_end: this.init.serializeEnd(l),
                            time_load_storage_start: this.loadStorage.serializeStart(l),
                            time_load_storage_end: this.loadStorage.serializeEnd(l),
                            time_parse_storage_start: this.parseStorage.serializeStart(l),
                            time_parse_storage_end: this.parseStorage.serializeEnd(l),
                            time_load_mini_cache_start: this.loadMiniCache.serializeStart(l),
                            time_load_mini_cache_end: this.loadMiniCache.serializeEnd(l),
                            time_fetch_initial_guild_start: this.fetchInitialGuildCache.serializeStart(l),
                            time_fetch_initial_guild_end: this.fetchInitialGuildCache.serializeEnd(l),
                            time_load_cached_messages_start: this.loadCachedMessages.serializeStart(l),
                            time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(l),
                            time_render_app_start: this.renderApp.serialize(l),
                            time_render_app_effect_start: this.renderAppEffect.serialize(l),
                            time_render_messages_end: this.renderMessages.serialize(l),
                            time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(l),
                            time_render_latest_messages_end: this.renderLatestMessages.serialize(l),
                            time_first_row_generator_start: this.firstRowGenerator.serializeStart(l),
                            time_first_row_generator_end: this.firstRowGenerator.serializeEnd(l),
                            time_initial_guild_start: this.initialGuild.serializeStart(l),
                            time_initial_guild_end: this.initialGuild.serializeEnd(l),
                            time_load_lazy_cache_start: this.loadLazyCache.serializeStart(l),
                            time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(l),
                            time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(l),
                            time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(l),
                            time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(l),
                            time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(l),
                            time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(l),
                            time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(l),
                            time_deserialize_cache_start: this.deserializeCache.serializeStart(l),
                            time_deserialize_cache_end: this.deserializeCache.serializeEnd(l),
                            time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(l),
                            time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(l),
                            time_parse_ready_start: this.parseReady.serializeStart(l),
                            time_parse_ready_end: this.parseReady.serializeEnd(l),
                            time_ready_start: this.ready.serializeStart(l),
                            time_ready_end: this.ready.serializeEnd(l),
                            time_hydrate_ready_start: this.hydrateReady.serializeStart(l),
                            time_hydrate_ready_end: this.hydrateReady.serializeEnd(l),
                            time_dispatch_ready_start: this.dispatchReady.serializeStart(l),
                            time_dispatch_ready_end: this.dispatchReady.serializeEnd(l),
                            time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(l),
                            time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(l),
                            time_ready_supplemental_start: this.readySupplemental.serializeStart(l),
                            time_ready_supplemental_end: this.readySupplemental.serializeEnd(l),
                            time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(l),
                            time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(l),
                            time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(l),
                            time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(l),
                            time_fetch_messages_start: this.fetchMessages.serializeStart(l),
                            time_fetch_messages_end: this.fetchMessages.serializeEnd(l),
                            time_dispatch_messages_start: this.dispatchMessages.serializeStart(l),
                            time_dispatch_messages_end: this.dispatchMessages.serializeEnd(l),
                            time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(l),
                            time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(l),
                            identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
                            identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
                            identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
                            ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
                            ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
                            identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
                            identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
                            ready_compression_algorithm: this.readyProperties.compression_algorithm,
                            ready_packing_algorithm: this.readyProperties.packing_algorithm,
                            ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
                            is_reconnect: this.readyProperties.is_reconnect,
                            is_fast_connect: this.readyProperties.is_fast_connect,
                            did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
                            num_guilds: this.readyProperties.num_guilds,
                            num_changed_guild_channels: this.readyProperties.num_guild_channels,
                            ready_presences_size: this.readyProperties.presences_size,
                            ready_users_size: this.readyProperties.users_size,
                            ready_read_states_size: this.readyProperties.read_states_size,
                            ready_private_channels_size: this.readyProperties.private_channels_size,
                            ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
                            ready_relationships_size: this.readyProperties.relationships_size,
                            ready_experiments_size: this.readyProperties.experiments_size,
                            ready_user_settings_size: this.readyProperties.user_settings_size,
                            ready_remaining_data_size: this.readyProperties.remaining_data_size,
                            ready_guild_channels_size: this.readyProperties.guild_channels_size,
                            ready_guild_members_size: this.readyProperties.guild_members_size,
                            ready_guild_presences_size: this.readyProperties.guild_presences_size,
                            ready_guild_roles_size: this.readyProperties.guild_roles_size,
                            ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
                            ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
                            ready_guild_threads_size: this.readyProperties.guild_threads_size,
                            ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
                            ready_guild_events_size: this.readyProperties.guild_events_size,
                            ready_guild_features_size: this.readyProperties.guild_features_size,
                            ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
                            had_cache_at_startup: this.readyProperties.had_cache_at_startup,
                            used_cache_at_startup: this.readyProperties.used_cache_at_startup,
                            was_authenticated: this.wasAuthenticated,
                            did_background_app: this.didBackgroundApp,
                            interstitial: this.interstitial,
                            message_cache_missing_reason: this.messageCacheMissingReason,
                            message_cache_age_seconds: this.messageCacheAgeSeconds,
                            message_cache_count: this.messageCacheCount,
                            message_cache_having_count: this.messageCacheHavingCount,
                            message_cache_missing_count: this.messageCacheMissingCount,
                            message_render_full_count: this.messageRenderFullCount,
                            message_render_cached_count: this.messageRenderCachedCount,
                            message_render_has_more_after: this.messageRenderHasMoreAfter,
                            duration_major_js_imports: this.loadImports.end - this.loadIndex.start + f,
                            cache_num_guilds: null === (t = this.cacheInfo) || void 0 === t ? void 0 : t.guilds,
                            cache_num_private_channels: null === (i = this.cacheInfo) || void 0 === i ? void 0 : i.privateChannels,
                            cache_num_basic_channels: null === (a = this.cacheInfo) || void 0 === a ? void 0 : a.basicChannels,
                            cache_num_basic_channels_stale: null === (o = this.cacheInfo) || void 0 === o ? void 0 : o.basicChannelsStale,
                            cache_num_full_channels: null === (s = this.cacheInfo) || void 0 === s ? void 0 : s.fullChannels,
                            cache_num_full_channel_guilds: null === (u = this.cacheInfo) || void 0 === u ? void 0 : u.fullChannelGuilds,
                            num_imports_at_load_index_end: this.loadIndex.endNumImports,
                            num_imports_at_init_end: this.init.endNumImports,
                            num_imports_at_load_mini_cache_end: this.loadMiniCache.endNumImports,
                            num_imports_at_render_app_start: this.renderApp.numImports,
                            num_imports_at_render_app_effect_start: this.renderAppEffect.numImports,
                            num_imports_at_render_messages_end: this.renderMessages.numImports,
                            num_imports_at_render_messages_with_cache_end: this.renderMessagesWithCache.numImports,
                            num_imports_at_render_latest_messages_end: this.renderLatestMessages.numImports,
                            num_imports_at_load_lazy_cache_start: this.loadLazyCache.startNumImports,
                            num_imports_at_load_lazy_cache_end: this.loadLazyCache.endNumImports,
                            num_imports_at_ready_start: this.ready.startNumImports,
                            num_imports_at_ready_end: this.ready.endNumImports,
                            num_imports_at_ready_supplemental_start: this.readySupplemental.startNumImports,
                            num_imports_at_ready_supplemental_end: this.readySupplemental.endNumImports,
                            duration_imports_at_load_index_start: Math.ceil(this.loadIndex.startImportTime),
                            duration_imports_at_load_index_end: Math.ceil(this.loadIndex.endImportTime),
                            duration_imports_at_init_end: Math.ceil(this.init.endImportTime),
                            duration_imports_at_load_mini_cache_end: Math.ceil(this.loadMiniCache.endImportTime),
                            duration_imports_at_render_app_start: Math.ceil(this.renderApp.importTime),
                            duration_imports_at_render_app_effect_start: Math.ceil(this.renderAppEffect.importTime),
                            duration_imports_at_render_messages_end: Math.ceil(this.renderMessages.importTime),
                            duration_imports_at_render_messages_with_cache_end: Math.ceil(this.renderMessagesWithCache.importTime),
                            duration_imports_at_render_latest_messages_end: Math.ceil(this.renderLatestMessages.importTime),
                            duration_imports_at_load_lazy_cache_start: Math.ceil(this.loadLazyCache.startImportTime),
                            duration_imports_at_load_lazy_cache_end: Math.ceil(this.loadLazyCache.endImportTime),
                            duration_imports_at_ready_start: Math.ceil(this.ready.startImportTime),
                            duration_imports_at_ready_end: Math.ceil(this.ready.endImportTime),
                            duration_imports_at_ready_supplemental_start: Math.ceil(this.readySupplemental.startImportTime),
                            duration_imports_at_ready_supplemental_end: Math.ceil(this.readySupplemental.endImportTime),
                            duration_imports_at_polyfills_end: Math.ceil(this.imports.polyfillsEnd.time),
                            duration_imports_at_sentry_end: Math.ceil(this.imports.sentryEnd.time),
                            duration_imports_at_fast_connect_start: Math.ceil(this.beginFastConnect.startImportTime),
                            duration_imports_at_fast_connect_end: Math.ceil(this.beginFastConnect.endImportTime),
                            duration_imports_at_app_state_change_start: Math.ceil(this.imports.appStateChangeStart.time),
                            duration_imports_at_app_state_change_end: Math.ceil(this.imports.appStateChangeEnd.time),
                            duration_imports_at_load_mini_cache_start: Math.ceil(this.imports.loadMiniCacheStart.time),
                            duration_imports_at_load_storage_start: Math.ceil(this.imports.loadStorageStart.time),
                            duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time)
                        })
                    };
                    return i
                }((function e() {
                    u(this, e);
                    this.loadIndex = new b("❗", "Load index.tsx");
                    this.loadFastConnectNativeModule = new b("💾", "Load fast_connect native module");
                    this.beginFastConnect = new b("🌐", "Fast Connect IDENTIFY");
                    this.loadImports = new b("🏃", "Load Imports");
                    this.init = new b("🏃", "Initial Initialization");
                    this.loadStorage = new b("💾", "Load Storage");
                    this.parseStorage = new b("💾", "Parse Storage");
                    this.loadMiniCache = new b("💾", "Load Mini Cache");
                    this.fetchInitialGuildCache = new b("💾", "Fetch Initial Guild Cache");
                    this.loadCachedMessages = new b("💾", "Load Cached Messages");
                    this.renderApp = new T("🎨", "First React Render");
                    this.renderAppEffect = new T("🎨", "First React Render useEffect");
                    this.renderMessages = new T("🎨", "React Render Messages", !0);
                    this.renderMessagesWithCache = new T("🎨", "React Render Cached Messages", !0);
                    this.firstRowGenerator = new b("🎨", "RowGenerator.generate()");
                    this.renderLatestMessages = new T("🎨", "React Render Latest Messages");
                    this.initialGuild = new b("🌐", "Initial Guild");
                    this.loadLazyCache = new b("💾", "Load Lazy Cache");
                    this.fetchLazyCache = new b("💾", "Fetch Lazy Cache");
                    this.parseLazyCache = new b("💾", "Parse Lazy Cache");
                    this.fetchStaleChannels = new b("💾", "Fetch Stale Channels");
                    this.deserializeCache = new b("💾", "Deserialize Cache");
                    this.dispatchLazyCache = new b("💾", "Dispatch Lazy Cache");
                    this.parseReady = new b("🌐", "Parse READY");
                    this.ready = new b("🌐", "READY");
                    this.hydrateReady = new b("🌐", "Hydrate READY");
                    this.dispatchReady = new b("🌐", "Dispatch READY");
                    this.parseReadySupplemental = new b("🌐", "Parse READY Supplemental");
                    this.readySupplemental = new b("🌐", "READY Supplemental");
                    this.hydrateReadySupplemental = new b("🌐", "Hydrate READY Supplemental");
                    this.dispatchReadySupplemental = new b("🌐", "Dispatch READY Supplemental");
                    this.fetchMessages = new b("🌐", "Fetch messages");
                    this.dispatchMessages = new b("🌐", "Dispatch messages");
                    this.imports = {
                        polyfillsEnd: new I,
                        sentryEnd: new I,
                        appStateChangeStart: new I,
                        appStateChangeEnd: new I,
                        loadMiniCacheStart: new I,
                        loadStorageStart: new I,
                        loadStorageEnd: new I
                    }
                }));
            const C = new O
        },
        341765: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                i = n(744564),
                a = n(165586),
                o = n(36256);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var _ = a.tI.PRESET_VIDEO,
                p = a.LY.RESOLUTION_720,
                h = a.ws.FPS_30;
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        var t;
                        _ = null !== (t = e.preset) && void 0 !== t ? t : a.tI.PRESET_VIDEO;
                        p = e.resolution;
                        h = e.fps
                    }
                };
                r.getState = function() {
                    return {
                        preset: _,
                        resolution: p,
                        fps: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "ApplicationStreamingSettingsStore";
            E.persistKey = "ApplicationStreamingSettingStore";
            const m = new E(i.Z, {
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    var t = e.settings;
                    if ((null == t ? void 0 : t.context) === o.Yn.STREAM) {
                        if (null == (null == t ? void 0 : t.qualityOptions) || null == (null == t ? void 0 : t.qualityOptions.resolution) || null == (null == t ? void 0 : t.qualityOptions.frameRate)) return !1;
                        p = t.qualityOptions.resolution;
                        h = t.qualityOptions.frameRate
                    }
                },
                STREAM_UPDATE_SETTINGS: function(e) {
                    var t = e.preset,
                        n = e.resolution,
                        r = e.frameRate,
                        i = !1;
                    if (null != t) {
                        _ = t;
                        i = !0
                    }
                    if (null != n) {
                        p = n;
                        i = !0
                    }
                    if (null != r) {
                        h = r;
                        i = !0
                    }
                    return i
                }
            })
        },
        227172: (e, t, n) => {
            n.d(t, {
                Z: () => G
            });
            var r = n(110251),
                i = n.n(r),
                a = n(202351),
                o = n(281110),
                s = n(744564),
                u = n(579344),
                c = n(265688),
                l = n(3564),
                d = n(629223),
                f = n(793461),
                _ = n(2590);

            function p(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            p(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            p(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function y(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = m(e);
                    if (t) {
                        var i = m(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var b = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                T = function(e) {
                    return "https://youtube.com/watch?v=".concat(e)
                },
                I = /live_user_(.*)-\{width\}/,
                O = null,
                C = 0,
                A = null,
                R = new Set,
                N = {};

            function D(e) {
                var t;
                return null === (t = I.exec(e)) || void 0 === t ? void 0 : t[1]
            }

            function w(e, t, n) {
                return o.ZP.get({
                    url: "".concat("https://api.twitch.tv/helix").concat(e),
                    query: t,
                    headers: {
                        "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                        Authorization: "Bearer ".concat(n)
                    }
                })
            }

            function P(e, t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = h((function(e, t) {
                    var n, r, i, a, o;
                    return b(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return null != (n = N[e]) ? [2, n] : [4, w("/games", {
                                    id: e
                                }, t)];
                            case 1:
                                r = s.sent(), i = r.body, a = i.data;
                                o = a[0].name;
                                N[e] = o;
                                return [2, o]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var U = function() {
                    function e() {
                        E(this, e);
                        this._started = !1
                    }
                    var t = e.prototype;
                    t.start = function() {
                        if (!this._started) {
                            this._started = !0;
                            d.Z.isFetching() ? u.Z.fetch() : this._check()
                        }
                    };
                    t.stop = function() {
                        this._started = !1;
                        A = null;
                        C = 0;
                        null != this._nextCheck && clearTimeout(this._nextCheck);
                        s.Z.dispatch({
                            type: "STREAMING_UPDATE",
                            stream: null
                        })
                    };
                    t._checkTwitch = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this;
                        return h((function() {
                            var r, i, a, o, s, d, f, p, h, E, m, y, g;
                            return b(this, (function(S) {
                                switch (S.label) {
                                    case 0:
                                        if (e.revoked) return [2, null];
                                        if (null == (t = null != t ? t : e.accessToken)) return [2, null];
                                        S.label = 1;
                                    case 1:
                                        S.trys.push([1, 4, , 5]);
                                        return [4, w("/streams", {
                                            user_id: e.id,
                                            first: 1
                                        }, t)];
                                    case 2:
                                        i = S.sent(), a = i.body.data;
                                        if (null == (o = a[0]) || "live" !== o.type) throw new Error("no stream");
                                        s = o.thumbnail_url, d = o.game_id, f = o.title;
                                        h = {
                                            large_image: null != s && null !== (p = (0, l.f)(_.ABu.TWITCH, s)) && void 0 !== p ? p : void 0
                                        };
                                        return [4, P(d, t)];
                                    case 3:
                                        E = S.sent();
                                        m = c.Z.get(_.ABu.TWITCH);
                                        g = null !== (y = D(s)) && void 0 !== y ? y : e.name;
                                        return [2, {
                                            url: null === (r = m.getPlatformUserUrl) || void 0 === r ? void 0 : r.call(m, {
                                                id: e.id,
                                                name: g
                                            }),
                                            name: m.name,
                                            assets: h,
                                            details: f,
                                            state: E
                                        }];
                                    case 4:
                                        return 401 === S.sent().status && null == t ? [2, u.Z.refreshAccessToken(e.type, e.id).then((function(t) {
                                            return n._checkTwitch(e, t)
                                        })).catch((function() {
                                            return null
                                        }))] : [2, null];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    t._checkYouTube = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this;
                        return h((function() {
                            var r, i, a, s, d, f, p, h, E, m;
                            return b(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        A = null;
                                        if (e.revoked || R.has(e.id)) return [2, null];
                                        y.label = 1;
                                    case 1:
                                        y.trys.push([1, 3, , 4]);
                                        return [4, o.ZP.get({
                                            url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                                            query: {
                                                part: "id,snippet",
                                                broadcastStatus: "active",
                                                broadcastType: "all"
                                            },
                                            headers: {
                                                Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                                            },
                                            oldFormErrors: !0
                                        })];
                                    case 2:
                                        r = y.sent();
                                        if ((i = r.body.items).length < 1) throw new Error("no stream");
                                        a = i[0], s = a.id, d = a.snippet, f = d.title, p = d.thumbnails;
                                        E = {
                                            large_image: null !== (h = (0, l.f)(_.ABu.YOUTUBE, p.high.url)) && void 0 !== h ? h : void 0
                                        };
                                        return [2, A = {
                                            url: T(s),
                                            name: c.Z.get(_.ABu.YOUTUBE).name,
                                            details: f,
                                            assets: E
                                        }];
                                    case 3:
                                        if (401 === (m = y.sent()).status && null == t) return [2, u.Z.refreshAccessToken(e.type, e.id).then((function(t) {
                                            return n._checkYouTube(e, t)
                                        })).catch((function() {
                                            return null
                                        }))];
                                        403 === m.status && R.add(e.id);
                                        return [2, null];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    t._check = function() {
                        var e = this;
                        if (this._started) {
                            var t = d.Z.getAccounts();
                            if (null != t) {
                                null != this._nextCheck && clearTimeout(this._nextCheck);
                                var n = [_.ABu.TWITCH],
                                    r = Date.now();
                                if (C <= r) {
                                    n.push(_.ABu.YOUTUBE);
                                    C = r + 3e5
                                }
                                var i = t.filter((function(e) {
                                    return n.includes(e.type)
                                })).map((function(t) {
                                    return t.type === _.ABu.TWITCH ? e._checkTwitch(t) : e._checkYouTube(t)
                                }));
                                Promise.allSettled(i).then((function(t) {
                                    if (e._started) {
                                        var n, r = null === (n = t.find((function(e) {
                                            return "fulfilled" === e.status && null != e.value
                                        }))) || void 0 === n ? void 0 : n.value;
                                        null == r && null != A && (r = A);
                                        s.Z.dispatch({
                                            type: "STREAMING_UPDATE",
                                            stream: r
                                        })
                                    }
                                    e._scheduleCheck()
                                }))
                            }
                        }
                    };
                    t._scheduleCheck = function() {
                        var e = this;
                        this._started && (this._nextCheck = setTimeout((function() {
                            return e._check()
                        }), 6e4))
                    };
                    return e
                }(),
                k = new U;

            function M() {
                f.Z.enabled ? k.start() : k.stop()
            }
            var j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    M();
                    this.waitFor(d.Z);
                    this.syncWith([f.Z], M)
                };
                r.getStream = function() {
                    return O
                };
                return n
            }(a.ZP.Store);
            j.displayName = "ExternalStreamingStore";
            const G = new j(s.Z, {
                STREAMING_UPDATE: function(e) {
                    if (i()(e.stream, O)) return !1;
                    var t;
                    O = null !== (t = e.stream) && void 0 !== t ? t : null
                },
                USER_CONNECTIONS_UPDATE: function() {
                    return k._check()
                }
            })
        },
        870614: (e, t, n) => {
            n.d(t, {
                t: () => E,
                Z: () => b
            });
            var r = n(496486),
                i = n.n(r),
                a = n(202351),
                o = n(744564),
                s = n(2590);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var E = function e(t) {
                    u(this, e);
                    this.code = t
                },
                m = {},
                y = {};

            function g(e, t) {
                if (null == y[e]) return null;
                var n = y[e],
                    r = n.socketId,
                    i = n.timeout,
                    a = n.resolve,
                    o = n.reject;
                delete y[e];
                null != i && clearTimeout(i);
                null != a && null != o && t(a, o);
                return r
            }

            function S(e) {
                var t = e.lobbyId,
                    n = e.member,
                    r = n.user,
                    i = n.metadata,
                    a = m[t];
                if (null == a) return !1;
                var o = a.members.find((function(e) {
                    return e.user.id === r.id
                }));
                if (null != o) {
                    o.user = r;
                    o.metadata = i
                } else a.members.push({
                    user: r,
                    metadata: i
                })
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getLobbies = function() {
                    return m
                };
                r.getLobbiesWithVoice = function() {
                    return i().filter(m, (function(e) {
                        return e.voice
                    }))
                };
                r.getLobby = function(e) {
                    return m[e]
                };
                r.getPendingLobbies = function() {
                    return i().map(y, (function(e, t) {
                        return {
                            id: t,
                            secret: e.secret
                        }
                    }))
                };
                return n
            }(a.ZP.Store);
            v.displayName = "LobbyStore";
            const b = new v(o.Z, {
                CONNECTION_OPEN: function() {
                    m = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    m = e.lobbies
                },
                LOBBY_CONNECT: function(e) {
                    var t = e.socketId,
                        n = e.lobbyId,
                        r = e.lobbySecret,
                        i = e.resolve,
                        a = e.reject;
                    null == y[n] && null == m[n] ? y[n] = {
                        socketId: t,
                        secret: r,
                        resolve: i,
                        reject: a,
                        timeout: __OVERLAY__ ? null : setTimeout((function() {
                            o.Z.dispatch({
                                type: "LOBBY_DELETE",
                                lobbyId: n,
                                reason: s.ogU.SERVICE_UNAVAILABLE
                            })
                        }), 15e3)
                    } : null != a && a(new E(s.ogU.ALREADY_CONNECTING))
                },
                LOBBY_DISCONNECT: function(e) {
                    g(e.lobbyId, (function(e, t) {
                        return t(new E(s.ogU.NO_ERROR))
                    }))
                },
                LOBBY_CREATE: function(e) {
                    var t = e.lobby,
                        n = g(t.id, (function(e) {
                            return e(t)
                        }));
                    null != n && (m[t.id] = d({
                        socketId: n,
                        voice: !1
                    }, m[t.id], t))
                },
                LOBBY_UPDATE: function(e) {
                    var t = e.lobby,
                        n = m[t.id];
                    null != n && (m[t.id] = d({}, n, t))
                },
                LOBBY_DELETE: function(e) {
                    var t = e.lobbyId,
                        n = e.reason;
                    delete m[t];
                    g(t, (function(e, t) {
                        return t(new E(n))
                    }))
                },
                LOBBY_MEMBER_CONNECT: S,
                LOBBY_MEMBER_UPDATE: S,
                LOBBY_MEMBER_DISCONNECT: function(e) {
                    var t = e.lobbyId,
                        n = e.member.user,
                        r = m[t];
                    if (null == r) return !1;
                    r.members = r.members.filter((function(e) {
                        return e.user.id !== n.id
                    }))
                },
                LOBBY_VOICE_CONNECT: function(e) {
                    var t = e.lobbyId,
                        n = m[t];
                    if (null == n) return !1;
                    n.voice = !0
                },
                LOBBY_VOICE_DISCONNECT: function(e) {
                    var t = e.lobbyId,
                        n = m[t];
                    if (null == n) return !1;
                    n.voice = !1
                },
                RPC_APP_DISCONNECTED: function(e) {
                    var t = e.socketId;
                    i().forEach(m, (function(e) {
                        e.socketId === t && o.Z.dispatch({
                            type: "LOBBY_DISCONNECT",
                            lobbyId: e.id
                        })
                    }))
                }
            })
        },
        997582: (e, t, n) => {
            n.d(t, {
                Z: () => Y
            });
            var r = n(110251),
                i = n.n(r),
                a = n(496486),
                o = n.n(a),
                s = n(202351),
                u = n(744564),
                c = n(258104),
                l = n(450136),
                d = n(218086);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var y = [d.Z],
                g = [];

            function S() {
                var e = [],
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var a, o = y[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                        var s = a.value.getActivity();
                        null != s && e.push(s)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
                if (i()(e, g)) return !1;
                g = e;
                return !0
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith(y, S)
                };
                r.getActivities = function() {
                    return g
                };
                return n
            }(s.ZP.Store);
            v.displayName = "FirstPartyRichPresenceStore";
            const b = new v(u.Z);
            var T = n(73727),
                I = n(968449),
                O = n(473419),
                C = n(177570),
                A = n(227172),
                R = n(959207),
                N = n(671723),
                D = n(2590),
                w = n(473708);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        U(e, t, n[t])
                    }))
                }
                return e
            }

            function j(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function G(e, t) {
                G = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return G(e, t)
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e) {
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
                    var n, r = k(e);
                    if (t) {
                        var i = k(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }
            var x = [],
                H = {};

            function z() {
                var e, t = [],
                    n = I.Ok.getSetting();
                null != n && ("0" === n.expiresAtMs || new Date(Number(n.expiresAtMs)).getTime() - (new Date).getTime() > 0) && t.push((0, l.Z)(n));
                var r = b.getActivities();
                (e = t).push.apply(e, B(r));
                var a = A.Z.getStream();
                null != a && t.push(M({
                    type: D.IIU.STREAMING
                }, a));
                var s = new Set,
                    u = new Set;
                o().forEach(H, (function(e) {
                    if (null != e.application_id) {
                        s.add(e.name);
                        u.add(e.application_id);
                        t.push(e)
                    }
                }));
                c.ZP.getSelfEmbeddedActivities().forEach((function(e) {
                    var n, r = e.application_id;
                    if (!u.has(r)) {
                        var i = null === (n = R.Z.getGame(r)) || void 0 === n ? void 0 : n.name;
                        t.push({
                            type: D.IIU.PLAYING,
                            name: null != i ? i : w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                            application_id: r,
                            flags: D.xjy.EMBEDDED
                        })
                    }
                }));
                var d = N.ZP.getVisibleGame(),
                    f = null != d && null != d.name && s.has(d.name),
                    _ = null != d && d.isLauncher,
                    p = C.Z.getCurrentUserActiveStream(),
                    h = f || _ && !(null != p);
                null == d || null == d.name || h || t.push({
                    type: D.IIU.PLAYING,
                    name: d.name,
                    application_id: d.id,
                    timestamps: {
                        start: d.start
                    }
                });
                var E = T.Z.getActivity();
                null != E && t.push(M({
                    type: D.IIU.LISTENING
                }, E));
                i()(x, t) || (x = t)
            }
            var F = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && G(e, t)
                }(n, e);
                var t = V(n);

                function n() {
                    L(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(N.ZP, c.ZP, A.Z, C.Z, T.Z, O.Z);
                    this.syncWith([b], (function() {
                        return z()
                    }))
                };
                r.getActivities = function() {
                    return x
                };
                r.getPrimaryActivity = function() {
                    return x[0]
                };
                r.getApplicationActivity = function(e) {
                    return this.findActivity((function(t) {
                        return t.application_id === e
                    }))
                };
                r.getCustomStatusActivity = function() {
                    return this.findActivity((function(e) {
                        return e.type === D.IIU.CUSTOM_STATUS
                    }))
                };
                r.findActivity = function(e) {
                    return x.find(e)
                };
                r.getApplicationActivities = function() {
                    return H
                };
                return n
            }(s.ZP.Store);
            F.displayName = "LocalActivityStore";
            const Y = new F(u.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.localActivities;
                    H = M({}, t);
                    z()
                },
                START_SESSION: function() {
                    H = {};
                    z()
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t = e.socketId,
                        n = e.activity;
                    if (i()(H[t], n)) return !1;
                    null != n ? H[t] = n : delete H[t];
                    z()
                },
                RPC_APP_DISCONNECTED: function(e) {
                    var t = e.socketId;
                    delete H[t];
                    z()
                },
                RUNNING_GAMES_CHANGE: z,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: z,
                SPOTIFY_PLAYER_STATE: z,
                SPOTIFY_PLAYER_PLAY: z,
                STREAMING_UPDATE: z,
                USER_CONNECTIONS_UPDATE: z,
                STREAM_START: z,
                STREAM_STOP: z,
                USER_SETTINGS_PROTO_UPDATE: z,
                EMBEDDED_ACTIVITY_OPEN: z,
                EMBEDDED_ACTIVITY_CLOSE: z
            })
        },
        436154: (e, t, n) => {
            n.d(t, {
                Z: () => q
            });
            var r = n(110251),
                i = n.n(r),
                a = n(496486),
                o = n.n(a),
                s = n(202351),
                u = n(744564),
                c = n(542517),
                l = n(190344),
                d = n(73727),
                f = n(968449),
                _ = n(473419),
                p = n(382060),
                h = n(954419),
                E = n(664625),
                m = n(959207),
                y = n(595970),
                g = n(761814),
                S = n(997582),
                v = n(491260),
                b = n(679450),
                T = n(2590);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function A(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
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
                    var n, r = C(e);
                    if (t) {
                        var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return A(this, n)
                }
            }
            var P, L, U = !1,
                k = T.Skl.ONLINE,
                M = T.Skl.UNKNOWN,
                j = 0,
                G = [],
                B = !1,
                Z = !0,
                V = Object.freeze([]),
                x = [];

            function H(e) {
                return (0, h.OT)(e, g.Z)
            }

            function z(e) {
                switch (e.type) {
                    case T.IIU.LISTENING:
                        return (0, c.Z)(e) ? d.Z.shouldShowActivity() : null != e.application_id && H(e.application_id);
                    case T.IIU.PLAYING:
                        return null != e.application_id ? H(e.application_id) : (t = e.name, null != (n = m.Z.getGameByName(t)) ? H(n.id) : f.G6.getSetting());
                    case T.IIU.STREAMING:
                    case T.IIU.WATCHING:
                    default:
                        return null == e.application_id || H(e.application_id)
                }
                var t, n
            }

            function F() {
                var e;
                j = null !== (e = y.Z.getIdleSince()) && void 0 !== e ? e : 0;
                B = y.Z.isAFK();
                if (Z) {
                    k = M;
                    Y()
                } else k = U ? T.Skl.INVISIBLE : f.co.getSetting();
                k === T.Skl.ONLINE && j > 0 && (k = T.Skl.IDLE);
                var t = !1,
                    n = Z || k === T.Skl.INVISIBLE ? [] : S.Z.getActivities().filter(z);
                if (!i()(G, n)) {
                    G = n;
                    t = !0
                }
                var r = b.Z.getRemoteActivities();
                if (V !== r) {
                    V = r;
                    t = !0
                }
                if (t) {
                    var a = G.find((function(e) {
                            return e.type === T.IIU.CUSTOM_STATUS
                        })),
                        s = G.filter((function(e) {
                            return e.type !== T.IIU.CUSTOM_STATUS
                        }));
                    x = s.length > 0 ? G : null != a ? [a].concat(N(o()(V).filter((function(e) {
                        return e.type !== T.IIU.CUSTOM_STATUS
                    })).uniqBy((function(e) {
                        return "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)
                    })).value())) : o().uniqBy(V, (function(e) {
                        return "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)
                    }))
                }
            }

            function Y() {
                P = void 0;
                L = void 0
            }

            function W() {
                Z = !1;
                M = T.Skl.UNKNOWN;
                F();
                v.Z.setCurrentUserOnConnectionOpen(k, x)
            }
            var K = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && R(e, t)
                }(n, e);
                var t = w(n);

                function n() {
                    O(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(y.Z, _.Z, S.Z, b.Z, g.Z, m.Z);
                    this.syncWith([S.Z], F)
                };
                r.getLocalPresence = function() {
                    return {
                        status: k,
                        since: j,
                        activities: G,
                        afk: B,
                        broadcast: L
                    }
                };
                r.getStatus = function() {
                    return k
                };
                r.getActivities = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return e ? x : G
                };
                r.getPrimaryActivity = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return e ? x[0] : G[0]
                };
                r.getApplicationActivity = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.findActivity((function(t) {
                        return t.application_id === e
                    }), t)
                };
                r.findActivity = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.getActivities(t).find(e)
                };
                r.getBroadcast = function() {
                    return P
                };
                return n
            }(s.ZP.Store);
            K.displayName = "SelfPresenceStore";
            const q = new K(u.Z, {
                START_SESSION: F,
                CONNECTION_OPEN: W,
                CONNECTION_OPEN_SUPPLEMENTAL: W,
                OVERLAY_INITIALIZE: W,
                CONNECTION_CLOSED: F,
                IDLE: F,
                AFK: F,
                RUNNING_GAMES_CHANGE: F,
                STREAMING_UPDATE: F,
                USER_SETTINGS_PROTO_UPDATE: F,
                LOCAL_ACTIVITY_UPDATE: F,
                SPOTIFY_PLAYER_STATE: F,
                SPOTIFY_PLAYER_PLAY: F,
                USER_CONNECTIONS_UPDATE: F,
                SESSIONS_REPLACE: F,
                RPC_APP_DISCONNECTED: F,
                LIBRARY_FETCH_SUCCESS: F,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: F,
                LOGOUT: function() {
                    Z = !0;
                    M = k;
                    F()
                },
                EMBEDDED_ACTIVITY_CLOSE: F,
                EMBEDDED_ACTIVITY_OPEN: F,
                FORCE_INVISIBLE: function(e) {
                    U = e.invisible;
                    return F()
                },
                WINDOW_FOCUS: function() {
                    U = !1;
                    return F()
                },
                BROADCAST_START: function(e) {
                    P = e.broadcast;
                    L = (0, l.HD)(e.broadcast)
                },
                BROADCAST_STOP: Y,
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (t instanceof p.Sf && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === E.default.getId()) {
                        P = void 0;
                        L = void 0
                    }
                }
            })
        },
        69660: (e, t, n) => {
            n.d(t, {
                Z: () => ge
            });
            var r = n(441143),
                i = n.n(r),
                a = n(496486),
                o = n.n(a),
                s = n(202351),
                u = n(539519),
                c = n(744564),
                l = n(250834),
                d = n(273929),
                f = n(228667),
                _ = n(335072),
                p = n(499565),
                h = n(968449),
                E = n(664625),
                m = n(61209),
                y = n(584690),
                g = n(563367),
                S = n(311923),
                v = n(652591),
                b = n(242715),
                T = n(513328),
                I = n(341765),
                O = n(2590);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e, t) {
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

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return null != e ? Math.round(e) : t
            }
            var N = function() {
                    function e(t, n) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._targetResolution = 0;
                        this._targetFPS = 0;
                        this._streamSettingsChanged = !1;
                        this._lastLayoutChanged = 0;
                        this._layoutChanges = 0;
                        this._incrementLayout = function(e, t) {
                            null == r._layoutBuckets[e] && (r._layoutBuckets[e] = 0);
                            r._layoutBuckets[e] += t
                        };
                        this._sampleStats = function() {
                            var e = I.Z.getState(),
                                t = e.resolution,
                                n = e.fps;
                            r._streamSettingsChanged = t !== r._targetResolution || n !== r._targetFPS
                        };
                        this._isSender = n;
                        this._statInterval = new T.Xp;
                        this._lastLayout = t;
                        this._layoutBuckets = {}
                    }
                    var t = e.prototype;
                    t.start = function() {
                        var e = I.Z.getState(),
                            t = e.resolution,
                            n = e.fps;
                        this._targetResolution = t;
                        this._targetFPS = n;
                        this._statInterval.start(1e3, this._sampleStats);
                        this._lastLayoutChanged = (0, b.zO)()
                    };
                    t.stop = function() {
                        this._statInterval.stop();
                        this._streamEnd = (0, b.zO)();
                        this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
                    };
                    t.layoutChange = function(e) {
                        if (e !== this._lastLayout && null == this._streamEnd) {
                            var t = (0, b.zO)();
                            this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3);
                            this._layoutChanges++;
                            this._lastLayout = e;
                            this._lastLayoutChanged = t
                        }
                    };
                    t.getLayout = function() {
                        return this._lastLayout
                    };
                    t.getStats = function() {
                        var e = {
                            num_layout_changes: this._layoutChanges,
                            duration_layout_fullscreen: R(this._layoutBuckets[O.hVg.FULL_SCREEN]),
                            duration_layout_theatre: R(this._layoutBuckets[O.hVg.THEATRE]),
                            duration_layout_pip: R(this._layoutBuckets[O.hVg.PIP]),
                            duration_layout_popout: R(this._layoutBuckets[O.hVg.POPOUT]),
                            duration_layout_portrait: R(this._layoutBuckets[O.hVg.PORTRAIT]),
                            duration_layout_landscape: R(this._layoutBuckets[O.hVg.LANDSCAPE]),
                            duration_layout_minimized: R(this._layoutBuckets[O.hVg.MINIMIZED])
                        };
                        return this._isSender ? A(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    C(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            target_fps: this._targetFPS,
                            target_resolution_height: this._targetResolution,
                            stream_settings_changed: this._streamSettingsChanged
                        }) : e
                    };
                    return e
                }(),
                D = n(306263);
            const w = n(597967).t;
            var P = n(36256);

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t, n) {
                M = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = j(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return M(e, t, n || e)
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        k(e, t, n[t])
                    }))
                }
                return e
            }

            function B(e, t) {
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

            function Z(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function V(e, t) {
                V = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return V(e, t)
            }
            var x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var n, r = j(e);
                    if (t) {
                        var i = j(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Z(this, n)
                }
            }
            var z = function() {
                    function e(t) {
                        var n = t.streamRegion,
                            r = t.streamApplication,
                            i = t.streamSourceType,
                            a = t.actionContext,
                            o = t.numViewers,
                            s = t.isBroadcast,
                            u = void 0 !== s && s;
                        L(this, e);
                        this.streamRegion = n;
                        this.streamApplication = r;
                        this.streamSourceType = i;
                        this.actionContext = a;
                        this.maxViewers = o;
                        this.isBroadcast = u
                    }
                    var t = e.prototype;
                    t.setActionContext = function(e) {
                        this.actionContext = e
                    };
                    t.trackViewerCount = function(e) {
                        this.maxViewers = Math.max(e, this.maxViewers)
                    };
                    return e
                }(),
                F = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && V(e, t)
                    }(n, e);
                    var t = H(n);

                    function n(e) {
                        var r, i = e.sessionId,
                            a = e.streamKey,
                            s = e.serverId,
                            u = e.initialLayout,
                            l = e.analyticsContext,
                            d = e.isStreamer,
                            f = e.parentMediaSessionId;
                        L(this, n);
                        var _ = (0, D.my)(a),
                            p = _.guildId,
                            h = _.channelId;
                        (r = t.call(this, {
                            userId: E.default.getId(),
                            sessionId: i,
                            guildId: p,
                            channelId: h,
                            context: P.Yn.STREAM,
                            rtcServerId: s,
                            parentMediaSessionId: f
                        }))._streamContext = _;
                        r._streamKey = a;
                        r._isStreamer = d;
                        r._videoStreamStats = new N(u, r.isOwner);
                        r.analyticsContext = l;
                        r._updateVideoStreamId = o().debounce((function(e, t) {
                            var n = (0, D.my)(r._streamKey),
                                i = n.guildId,
                                a = n.channelId,
                                o = n.ownerId;
                            c.Z.wait((function() {
                                return c.Z.dispatch({
                                    type: "RTC_CONNECTION_VIDEO",
                                    guildId: i,
                                    channelId: a,
                                    userId: o,
                                    streamId: e,
                                    rtcServerId: t,
                                    context: P.Yn.STREAM
                                })
                            }))
                        }), 200);
                        r._videoStreamStats.start();
                        r._initializeEvents();
                        return r
                    }
                    var r = n.prototype;
                    r.destroy = function(e) {
                        this._videoStreamStats.stop();
                        this._trackVideoEndStats(e);
                        this._updateVideoStreamId.cancel();
                        this._updateVideoStreamId(null, null);
                        this._updateVideoStreamId.flush();
                        M(j(n.prototype), "destroy", this).call(this)
                    };
                    r.streamUpdate = function(e) {
                        var t = this._videoQuality;
                        null != t && (e ? t.pause() : t.resume())
                    };
                    r.layoutChange = function(e) {
                        this._videoStreamStats.layoutChange(e)
                    };
                    r.getVideoStats = function() {
                        var e = this._streamContext.ownerId,
                            t = this._videoQuality;
                        if (null != t) {
                            var n, r = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
                            return {
                                duration: r.duration,
                                avg_bitrate: r.avg_bitrate,
                                avg_fps: r.avg_fps,
                                avg_resolution: r.avg_resolution
                            }
                        }
                        return null
                    };
                    r.getRegion = function() {
                        return this.analyticsContext.streamRegion
                    };
                    r.getMaxViewers = function() {
                        return this.analyticsContext.maxViewers
                    };
                    r._initializeEvents = function() {
                        var e = this,
                            t = !1;
                        this.on(l.z.State, (function(t, n, r) {
                            c.Z.wait((function() {
                                return c.Z.dispatch(B(G({
                                    type: "RTC_CONNECTION_STATE",
                                    state: t
                                }, n, r), {
                                    streamKey: e._streamKey
                                }))
                            }))
                        }));
                        this.on(l.z.Video, (function(n, r, i, a, o) {
                            var s = (0, D.my)(e._streamKey);
                            if (s.guildId === n && s.channelId === r && s.ownerId === i) {
                                if (null != e.getMediaSessionId() && !t) {
                                    e._trackVideoStartStats();
                                    t = !0
                                }
                                e._updateVideoStreamId(a, o)
                            }
                        }))
                    };
                    r._getStreamAnalyticsProperties = function() {
                        var e = this.analyticsContext,
                            t = e.streamRegion,
                            n = e.streamApplication,
                            r = e.streamSourceType,
                            i = e.actionContext,
                            a = e.isBroadcast,
                            o = this._streamContext,
                            s = o.ownerId,
                            u = o.guildId,
                            c = S.Z.getRegion(g.Z.getHostname()),
                            l = h.xd.getSetting();
                        return {
                            channel_id: this.channelId,
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: this.getMediaSessionId(),
                            parent_media_session_id: this.parentMediaSessionId,
                            sender_user_id: s,
                            context: P.Yn.STREAM,
                            guild_id: u,
                            stream_region: t,
                            stream_source_type: r,
                            guild_region: c,
                            participant_type: this.isOwner ? "streamer" : "receiver",
                            share_application_name: null != n ? n.name : null,
                            share_application_id: null != n ? n.id : null,
                            share_application_executable: null != n ? n.exe : null,
                            video_layout: this._videoStreamStats.getLayout(),
                            client_event_source: i,
                            is_broadcast: a,
                            auto_broadcast_enabled: this.isOwner ? l : null
                        }
                    };
                    r._trackVideoStartStats = function() {
                        var e = this.isOwner ? w() : null;
                        v.default.track(O.rMx.VIDEO_STREAM_STARTED, B(G({}, this._getStreamAnalyticsProperties(), e), {
                            connection_type: y.Z.getType(),
                            effective_connection_speed: y.Z.getEffectiveConnectionSpeed(),
                            service_provider: y.Z.getServiceProvider()
                        }))
                    };
                    r._trackVideoEndStats = function(e) {
                        var t = m.Z.getChannel(this.channelId),
                            n = null != t ? t.type : null,
                            r = this._streamContext.ownerId,
                            i = null,
                            a = null,
                            o = null,
                            s = this._videoQuality;
                        if (null != s) {
                            i = this.isOwner ? s.getOutboundStats()[0] : s.getInboundStats(r);
                            a = s.getNetworkStats();
                            o = this.isOwner ? s.getCodecUsageStats("streamer", this.userId) : s.getCodecUsageStats("receiver", r)
                        }
                        var u = g.Z.getGuildId(),
                            c = (0, f.T4)(u),
                            l = _.Z.getSettings(),
                            d = this.isOwner ? {
                                clips_enabled: l.clipsEnabled && c,
                                clips_buffer_length: l.clipsLength
                            } : {};
                        v.default.track(O.rMx.VIDEO_STREAM_ENDED, B(G({}, i, o, a, null, this._videoStreamStats.getStats(), this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), d), {
                            channel_type: n,
                            reason: e,
                            max_viewers: this.analyticsContext.maxViewers,
                            hostname: this.hostname,
                            device_performance_class: this.isOwner ? (0, p.R)() : null
                        }))
                    };
                    r._getExtraConnectionOptions = function() {
                        return {
                            streamUserId: (0, D.my)(this._streamKey).ownerId
                        }
                    };
                    ! function(e, t, n) {
                        t && U(e.prototype, t);
                        n && U(e, n)
                    }(n, [{
                        key: "isOwner",
                        get: function() {
                            var e = this._streamContext.ownerId;
                            return E.default.getId() === e
                        }
                    }]);
                    return n
                }(d.Z),
                Y = n(179678),
                W = n(39649),
                K = n(120415),
                q = n(177570),
                J = n(973469),
                Q = n(491260),
                $ = n(671723);

            function X(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ee(e) {
                ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ee(e)
            }

            function te(e, t) {
                return !t || "object" !== ae(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ne(e, t) {
                ne = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ne(e, t)
            }
            var re, ie, ae = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function oe(e) {
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
                    var n, r = ee(e);
                    if (t) {
                        var i = ee(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return te(this, n)
                }
            }
            var se = {},
                ue = {},
                ce = {},
                le = {},
                de = O.hVg.THEATRE,
                fe = {},
                _e = [];

            function pe() {
                o().forEach(fe, (function(e, t) {
                    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect");
                    delete fe[t]
                }))
            }

            function he(e) {
                e.filter((function(e) {
                    return e.connection.context === P.Yn.STREAM
                })).forEach((function(e) {
                    var t = e.stats;
                    c.Z.dispatch({
                        type: "STREAM_STATS_UPDATE",
                        stats: t
                    })
                }))
            }

            function Ee() {
                return !0
            }

            function me(e) {
                if (null == e) return "unknown";
                if (K.FB || "Chrome" === (null === platform || void 0 === platform ? void 0 : platform.name)) {
                    if (e.startsWith("web-contents-media-stream:")) return "tab";
                    if (e.startsWith("window:")) return "window";
                    if (e.startsWith("screen:")) return "screen"
                } else {
                    if ("Firefox" === (null === platform || void 0 === platform ? void 0 : platform.name)) return "" !== e ? "window" : "screen";
                    if ("Safari" === (null === platform || void 0 === platform ? void 0 : platform.name)) return "window"
                }
                return "unknown"
            }
            var ye = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ne(e, t)
                }(n, e);
                var t = oe(n);

                function n() {
                    X(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getActiveStreamKey = function() {
                    return (0, W.Z)(J.Z) ? ie : null
                };
                r.getAllActiveStreamKeys = function() {
                    return Object.keys(fe)
                };
                r.getRTCConnection = function(e) {
                    return fe[e]
                };
                r.getStatsHistory = function(e, t, n) {
                    if (!(0, W.Z)(J.Z)) return null;
                    if (null == t) return null;
                    if (n) {
                        var r = q.Z.getActiveStreamForUser(t, e);
                        if (null == r) return null;
                        if (0 === q.Z.getViewerIds(r).length) return null
                    }
                    return _e.map((function(e) {
                        return n ? (r = e.rtp.outbound, null != (c = r.find((function(e) {
                            return "video" === e.type
                        }))) && "video" === c.type ? {
                            type: "streamer",
                            packetsSentOrReceived: null !== (a = c.packetsSent) && void 0 !== a ? a : 0,
                            packetsLost: null !== (o = c.packetsLost) && void 0 !== o ? o : 0,
                            frameRate: null !== (s = c.frameRateEncode) && void 0 !== s ? s : 0,
                            resolution: null !== (u = null === (i = c.resolution) || void 0 === i ? void 0 : i.height) && void 0 !== u ? u : 0,
                            bitrate: 0
                        } : null) : function(e) {
                            var t;
                            if (null == e) return null;
                            var n, r, i, a, o, s = e.find((function(e) {
                                return "video" === e.type
                            }));
                            return null != s && "video" === s.type ? {
                                type: "spectator",
                                packetsSentOrReceived: null !== (n = s.packetsReceived) && void 0 !== n ? n : 0,
                                packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
                                frameRate: null !== (i = s.frameRateDecode) && void 0 !== i ? i : 0,
                                bitrate: null !== (a = s.bitrate) && void 0 !== a ? a : 0,
                                resolution: null !== (o = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== o ? o : 0
                            } : null
                        }(e.rtp.inbound[t]);
                        var r, i, a, o, s, u, c
                    }))
                };
                r.getQuality = function() {
                    if (!(0, W.Z)(J.Z)) return O.IE4.UNKNOWN;
                    var e = this.getActiveStreamKey(),
                        t = null != e ? fe[e] : null;
                    return null != t ? t.quality : O.IE4.UNKNOWN
                };
                r.getMediaSessionId = function(e) {
                    if (null == e) return null;
                    var t = fe[e];
                    return null != t ? null != t ? t.getMediaSessionId() : null : void 0
                };
                r.getRtcConnectionId = function(e) {
                    if (null == e) return null;
                    var t = fe[e];
                    return null != t ? null != t ? t.getRTCConnectionId() : null : void 0
                };
                r.getVideoStats = function(e) {
                    if (null == e) return null;
                    var t = fe[e];
                    return null != t ? t.getVideoStats() : null
                };
                r.getHostname = function(e) {
                    if (null == e) return "";
                    var t = fe[e];
                    return null != t && null != t.hostname ? t.hostname : ""
                };
                r.getRegion = function(e) {
                    if (null == e) return null;
                    var t = fe[e];
                    return null != t ? t.getRegion() : null
                };
                r.getMaxViewers = function(e) {
                    if (null == e) return null;
                    var t = fe[e];
                    return null != t ? t.getMaxViewers() : null
                };
                r.getStreamSourceId = function(e) {
                    return le[e]
                };
                return n
            }(s.ZP.Store);
            ye.displayName = "StreamRTCConnectionStore";
            const ge = new ye(c.Z, !J.Z.isSupported() || __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function(e) {
                    re = e.sessionId;
                    ie = null;
                    pe()
                },
                CONNECTION_CLOSED: function() {
                    re = null;
                    ie = null;
                    pe()
                },
                RTC_CONNECTION_STATE: Ee,
                RTC_CONNECTION_PING: Ee,
                RTC_CONNECTION_LOSS_RATE: Ee,
                RTC_CONNECTION_UPDATE_ID: function(e) {
                    return o().some(fe, (function(t) {
                        return t === e.connection
                    }))
                },
                STREAM_START: function(e) {
                    var t = e.streamType,
                        n = e.guildId,
                        r = e.channelId,
                        i = e.appContext,
                        a = e.pid,
                        s = e.sourceId,
                        u = (0, D.V9)({
                            streamType: t,
                            guildId: n,
                            channelId: r,
                            ownerId: E.default.getId()
                        });
                    se[u] = i;
                    o().forEach(fe, (function(e) {
                        e.analyticsContext.setActionContext(i)
                    }));
                    le[u] = s;
                    ce[u] = a;
                    if (null != a) {
                        var c = $.ZP.getGameForPID(a);
                        null != c && (ue[u] = {
                            name: c.name,
                            id: c.id,
                            exe: c.exeName
                        })
                    }
                },
                STREAM_STOP: function(e) {
                    var t = e.appContext,
                        n = e.streamKey;
                    se[n] = t;
                    o().forEach(fe, (function(e) {
                        e.analyticsContext.setActionContext(t)
                    }));
                    le[n] = null;
                    ce[n] = null
                },
                STREAM_CREATE: function(e) {
                    var t = e.streamKey,
                        n = e.rtcServerId,
                        r = e.region,
                        a = e.viewerIds;
                    ie = t;
                    var o = fe[t];
                    if (null == o && null != n) {
                        null == ce[t] && (ue[t] = null);
                        var s = (0, D.my)(t);
                        null == ue[t] && null == le[t] && (ue[t] = (0, Y.L2)(s, Q.Z));
                        var d = m.Z.getChannel(s.channelId),
                            f = null != d && d.isBroadcastChannel();
                        o = function(e, t, n) {
                            i()(null != re, "Creating RTCConnection without session.");
                            var r = new F({
                                sessionId: re,
                                streamKey: e,
                                serverId: t,
                                initialLayout: de,
                                analyticsContext: n,
                                isStreamer: null != ue[e],
                                parentMediaSessionId: g.Z.getMediaSessionId()
                            });
                            r.on(l.z.VideoSourceQualityChanged, (function(e, t, n, r, i, a) {
                                c.Z.wait((function() {
                                    return c.Z.dispatch({
                                        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                                        guildId: e,
                                        channelId: t,
                                        senderUserId: n,
                                        maxResolution: r,
                                        maxFrameRate: i,
                                        context: a
                                    })
                                }))
                            }));
                            return r
                        }(t, n, new z({
                            streamRegion: r,
                            streamApplication: ue[t],
                            streamSourceType: me(le[t]),
                            actionContext: se[t],
                            numViewers: null != a ? a.length : 0,
                            isBroadcast: f
                        }));
                        fe[t] = o
                    }
                    _e = [];
                    J.Z.getMediaEngine().on(u.aB.ConnectionStats, he)
                },
                STREAM_SERVER_UPDATE: function(e) {
                    var t = fe[e.streamKey];
                    if (null == t) return !1;
                    t.connect(e.endpoint, e.token)
                },
                STREAM_UPDATE: function(e) {
                    var t = e.streamKey,
                        n = e.viewerIds,
                        r = e.paused,
                        i = fe[t];
                    if (null == i) return !1;
                    null != n && i.analyticsContext.trackViewerCount(n.length);
                    i.streamUpdate(r)
                },
                STREAM_DELETE: function(e) {
                    var t = e.streamKey,
                        n = fe[t];
                    if (null == n) return !1;
                    if (t === ie) {
                        ie = null;
                        J.Z.getMediaEngine().off(u.aB.ConnectionStats, he)
                    }
                    n.destroy("stream-end");
                    delete fe[t]
                },
                STREAM_STATS_UPDATE: function(e) {
                    var t = e.stats;
                    if (null == t) return !1;
                    _e.push(t);
                    _e.length > 30 && _e.shift()
                },
                STREAM_LAYOUT_UPDATE: function(e) {
                    var t = e.layout;
                    de = t;
                    Object.values(fe).forEach((function(e) {
                        return e.layoutChange(t)
                    }))
                }
            })
        },
        375759: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                i = n(744564),
                a = n(451936),
                o = n(959207),
                s = n(671723),
                u = n(175072);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function f(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return c(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h, E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }

            function y(e) {
                var t = {
                    os: e.os,
                    name: e.name
                };
                null != e.arguments && (t.arguments = e.arguments);
                null != e.isLauncher && (t.is_launcher = e.isLauncher);
                return t
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGameForPID = function(e) {
                    var t;
                    if (__OVERLAY__) return null;
                    if (null == e) return null;
                    var n = null === (t = s.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                    return o.Z.getGameByName(n)
                };
                r.getGame = function() {
                    return __OVERLAY__ ? h : null
                };
                r.getGameAsJSON = function(e) {
                    var t = this.getGameForPID(e);
                    return null == t ? null : {
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        type: u.w.GAME,
                        icon: t.icon,
                        splash: t.splash,
                        overlay: t.overlay,
                        overlay_warn: t.overlayWarn,
                        aliases: p(t.aliases),
                        publishers: p(t.publishers),
                        developers: p(t.developers),
                        third_party_skus: p(t.thirdPartySkus),
                        executables: t.executables.map(y),
                        hashes: p(t.hashes),
                        tags: p(t.tags)
                    }
                };
                return n
            }(r.ZP.Store);
            g.displayName = "OverlayRunningGameStore";
            const S = new g(i.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    h = null != e.currentGame ? new a.Z(e.currentGame) : null
                }
            })
        }
    }
]);