"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [57518], {
        757518: (t, n, e) => {
            e.r(n);
            e.d(n, {
                default: () => E
            });
            var r = e(785893),
                o = e(667294),
                i = e(318715),
                l = e(70418),
                a = e(720419),
                s = e(703790),
                u = e(61209),
                c = e(202351),
                f = e(486826),
                d = e(82863);

            function p(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function h(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (e = e.call(t); !(l = (r = e.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                l || null == e.return || e.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return p(t, n)
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = e(2590),
                g = e(473708),
                S = e(878101),
                b = e.n(S);

            function _(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function m(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (e = e.call(t); !(l = (r = e.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                l || null == e.return || e.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return _(t, n)
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t) {
                var n = t.channelId,
                    e = t.messageId,
                    p = t.transitionState,
                    S = t.onClose,
                    _ = (0, i.ZP)([u.Z], (function() {
                        return u.Z.getChannel(n)
                    })),
                    E = m(function(t) {
                        var n = h(o.useState(!1), 2),
                            e = n[0],
                            r = n[1],
                            i = (0, c.e7)([d.Z], (function() {
                                return d.Z.getFollowerStatsForChannel(t)
                            }), [t]);
                        o.useEffect((function() {
                            if ((null == i || Date.now() - i.lastFetched > 36e5) && !e) {
                                r(!0);
                                f.Z.fetchChannelFollowerStats(t)
                            } else null != i && e && r(!1)
                        }), [t, i, e]);
                        return [i, e]
                    }(n), 2),
                    v = E[0],
                    w = E[1],
                    C = null == _ ? void 0 : _.guild_id;
                return (0, r.jsx)(l.ConfirmModal, {
                    header: g.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                    confirmText: g.Z.Messages.CONFIRM,
                    cancelText: g.Z.Messages.CANCEL,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    onConfirm: function() {
                        return a.Z.crosspostMessage(n, e)
                    },
                    transitionState: p,
                    onClose: S,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: b().spacing,
                        children: w ? (0, r.jsx)(l.Spinner, {}) : null != v && null != v.guildsFollowing && v.guildsFollowing > 0 ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Text, {
                                className: b().spacing,
                                variant: "text-sm/normal",
                                children: g.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
                                    numGuildsFollowing: v.guildsFollowing
                                })
                            }), (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: g.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
                                    onClick: function() {
                                        if (null != C && null != S) {
                                            S();
                                            s.Z.open(C, y.pNK.ANALYTICS)
                                        }
                                    }
                                })
                            })]
                        }) : g.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY
                    })
                })
            }
        },
        82863: (t, n, e) => {
            e.d(n, {
                Z: () => h
            });
            var r = e(202351),
                o = e(744564);

            function i(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function a(t, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function s(t, n) {
                s = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return s(t, n)
            }
            var u, c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function f(t) {
                var n = function() {
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
                    var e, r = l(t);
                    if (n) {
                        var o = l(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return a(this, e)
                }
            }! function(t) {
                t.FAILED = "failed";
                t.SUCCEEDED = "succeeded"
            }(u || (u = {}));
            var d = {};
            var p = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(t, n)
                }(e, t);
                var n = f(e);

                function e() {
                    i(this, e);
                    return n.apply(this, arguments)
                }
                e.prototype.getFollowerStatsForChannel = function(t) {
                    return d[t]
                };
                return e
            }(r.ZP.Store);
            p.displayName = "ChannelFollowerStatsStore";
            const h = new p(o.Z, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(t) {
                    var n = t.channelId,
                        e = t.stats;
                    e = null != e ? e : {};
                    d[n] = {
                        loadingStatus: u.SUCCEEDED,
                        lastFetched: Date.now(),
                        channelsFollowing: e.channels_following,
                        guildMembers: e.guild_members,
                        guildsFollowing: e.guilds_following,
                        usersSeenEver: e.users_seen_ever,
                        subscribersGainedSinceLastPost: e.subscribers_gained_since_last_post,
                        subscribersLostSinceLastPost: e.subscribers_lost_since_last_post
                    }
                },
                CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(t) {
                    var n = t.channelId;
                    d[n] = {
                        loadingStatus: u.FAILED,
                        lastFetched: Date.now(),
                        channelsFollowing: 0,
                        guildMembers: 0,
                        guildsFollowing: 0,
                        usersSeenEver: 0,
                        subscribersGainedSinceLastPost: 0,
                        subscribersLostSinceLastPost: 0
                    }
                }
            })
        }
    }
]);