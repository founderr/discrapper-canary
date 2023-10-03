"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [81580], {
        567678: (n, e, r) => {
            r.d(e, {
                Z: () => o
            });
            var t = r(785893),
                i = (r(667294), r(19585));

            function a(n, e, r) {
                e in n ? Object.defineProperty(n, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = r;
                return n
            }

            function u(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable
                    }))));
                    t.forEach((function(e) {
                        a(n, e, r[e])
                    }))
                }
                return n
            }

            function o(n, e) {
                return function(r) {
                    var a = (0, i.Z)(e).AnalyticsLocationProvider;
                    return (0, t.jsx)(a, {
                        children: (0, t.jsx)(n, u({}, r))
                    })
                }
            }
        },
        881580: (n, e, r) => {
            r.r(e);
            r.d(e, {
                default: () => j
            });
            var t = r(785893),
                i = (r(667294),
                    r(304548)),
                a = r(971402),
                u = r(567678),
                o = r(153686),
                s = r(112897),
                c = r(13280),
                l = r(281873),
                d = r(422906),
                Z = r(576668),
                f = r(929653),
                h = r(721376),
                M = r(874710),
                _ = r(703654),
                p = r(103314),
                v = r(313031),
                E = r(954814),
                b = r(839463),
                g = r(218318),
                m = r(40111),
                A = r(579583),
                O = r(473708);
            const j = (0, u.Z)((function(n) {
                var e = n.channel,
                    r = n.onSelect,
                    u = (0, d.Z)(e),
                    o = (0, f.Z)(e),
                    j = (0, g.Z)(e),
                    I = (0, l.Z)(e),
                    x = (0, p.Z)(e),
                    T = (0, Z.Z)(e),
                    C = (0, s.Z)({
                        id: e.id,
                        label: O.Z.Messages.COPY_ID_THREAD
                    }),
                    P = (0, M.Z)(e, "Context Menu"),
                    R = (0, v.Z)(e),
                    y = (0, m.Z)(e),
                    D = (0, E.Z)(e),
                    G = (0, b.Z)(e.id),
                    N = (0, _.Z)(e),
                    U = (0, A.Z)(e),
                    F = (0, h.Z)(e, {
                        hoist: !0
                    }),
                    L = (0, c.Z)(e);
                return (0, t.jsxs)(i.Menu, {
                    navId: "thread-context",
                    onClose: a.Zy,
                    "aria-label": O.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: r,
                    children: [(0, t.jsx)(i.MenuGroup, {
                        children: o
                    }, "mark-as-read"), (0, t.jsxs)(i.MenuGroup, {
                        children: [P, N, I, x, D, G, u, L]
                    }, "thread-actions"), (0, t.jsxs)(i.MenuGroup, {
                        children: [j, y]
                    }, "notifications"), (0, t.jsxs)(i.MenuGroup, {
                        children: [U, F, R, T]
                    }, "admin-actions"), (0, t.jsx)(i.MenuGroup, {
                        children: C
                    }, "developer-actions")]
                })
            }), [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (n, e, r) => {
            r.d(e, {
                Z: () => M
            });
            var t = r(785893),
                i = (r(667294), r(202351)),
                a = r(304548),
                u = r(496916),
                o = r(358969),
                s = r(536945),
                c = r(487685),
                l = r(382060),
                d = r(877475),
                Z = r(179913),
                f = r(2590),
                h = r(473708);

            function M(n) {
                var e = function(n) {
                    var e = (0, o.n2)(n.guild_id, n.id),
                        r = (0, i.e7)([Z.ZP, d.Z, s.Z, c.Z], (function() {
                            if (n.isForumPost()) return Z.ZP.isForumPostUnread(n.id);
                            if (n.type === f.d4z.GUILD_CATEGORY) {
                                var e = d.Z.getCategories(n.getGuildId());
                                if (null == e[n.id]) return !1;
                                if (e[n.id].some((function(n) {
                                        var e = n.channel;
                                        return (0, l.Em)(e.type) && Z.ZP.hasUnread(e.id)
                                    }))) return !0;
                                var r = new Set(e[n.id].map((function(n) {
                                        return n.channel.id
                                    }))),
                                    t = s.Z.getThreadsForGuild(n.guild_id);
                                for (var i in t)
                                    if (r.has(i))
                                        for (var a in t[i])
                                            if (c.Z.hasJoined(a) && !c.Z.isMuted(a) && Z.ZP.hasUnread(a)) return !0;
                                return !1
                            }
                            return Z.ZP.hasUnread(n.id)
                        }), [n]);
                    return n.isForumLikeChannel() ? e > 0 : r
                }(n);
                return (0, t.jsx)(a.MenuItem, {
                    id: "mark-channel-read",
                    label: h.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.U6)(n)
                    },
                    disabled: !e
                })
            }
        },
        13280: (n, e, r) => {
            r.d(e, {
                Z: () => f
            });
            var t = r(785893),
                i = (r(667294), r(202351)),
                a = r(304548),
                u = r(5544),
                o = r(419051),
                s = r(963985),
                c = r(790337),
                l = r(2590),
                d = r(473708);

            function Z(n, e) {
                return n.type === l.d4z.GROUP_DM ? e ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : n.type === l.d4z.DM ? e ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : e ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function f(n) {
                var e = (0, i.e7)([o.Z], (function() {
                        return o.Z.isFavorite(n.id)
                    })),
                    r = function(n) {
                        var e = function(e) {
                                (0, s.kj)(n.id, e)
                            },
                            r = (0, i.e7)([u.ZP], (function() {
                                return u.ZP.getChannels(l.I_8)
                            }))[l.d4z.GUILD_CATEGORY].filter((function(n) {
                                return "null" !== n.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === r.length ? (0, t.jsx)(a.MenuItem, {
                            id: "favorite-channel",
                            label: Z(n, !1),
                            action: function() {
                                return e(null)
                            }
                        }) : (0, t.jsx)(a.MenuItem, {
                            id: "favorite-channel",
                            label: Z(n, !1),
                            action: function() {
                                return e(null)
                            },
                            children: r.map((function(n) {
                                return (0, t.jsx)(a.MenuItem, {
                                    id: "favorite-".concat(n.channel.id),
                                    label: n.channel.name,
                                    action: function() {
                                        return e(n.channel.id)
                                    }
                                }, n.channel.id)
                            }))
                        }) : null
                    }(n),
                    d = function(n) {
                        return (0, t.jsx)(a.MenuItem, {
                            id: "favorite-channel",
                            label: Z(n, !0),
                            action: function() {
                                (0, s.oC)(n.id)
                            }
                        })
                    }(n);
                return __OVERLAY__ ? null : e ? d : r
            }
        }
    }
]);