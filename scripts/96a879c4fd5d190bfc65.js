"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [59295], {
        567678: (n, e, t) => {
            t.d(e, {
                Z: () => a
            });
            var i = t(785893),
                r = (t(667294), t(19585));

            function o(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function u(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    i.forEach((function(e) {
                        o(n, e, t[e])
                    }))
                }
                return n
            }

            function a(n, e) {
                return function(t) {
                    var o = (0, r.Z)(e).AnalyticsLocationProvider;
                    return (0, i.jsx)(o, {
                        children: (0, i.jsx)(n, u({}, t))
                    })
                }
            }
        },
        359295: (n, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => C
            });
            var i = t(785893),
                r = (t(667294), t(70418)),
                o = t(971402),
                u = t(567678),
                a = t(153686),
                l = t(112897),
                c = t(962855),
                d = t(691797),
                s = t(473708);
            var p = t(987932),
                _ = t(576668),
                f = t(787301),
                Z = t(673780),
                E = t(380477),
                h = t(221921),
                N = t(392274),
                O = t(249971),
                M = t(2590);
            const C = (0, u.Z)((function(n) {
                var e = n.channel,
                    t = n.guild,
                    u = n.includeTopic,
                    a = void 0 !== u && u,
                    C = n.onSelect,
                    g = (0, O.Z)(e),
                    T = (0, E.ZP)(e),
                    b = (0, h.Z)(e),
                    j = function(n) {
                        return d.wS ? (0, i.jsx)(r.MenuItem, {
                            id: "copy-channel-topic",
                            label: s.Z.Messages.COPY_CHANNEL_TOPIC,
                            action: function() {
                                return (0, d.JG)(n.topic)
                            }
                        }) : null
                    }(e),
                    x = (0, f.Z)(e),
                    v = (0, Z.Z)(e, t),
                    I = (0, c.Z)(e, t),
                    P = (0, p.Z)(e, t, M.d4z.GUILD_TEXT),
                    A = (0, p.Z)(e, t, M.d4z.GUILD_VOICE),
                    y = (0, _.Z)(e),
                    m = (0, l.Z)({
                        id: e.id,
                        label: s.Z.Messages.COPY_ID_CHANNEL
                    }),
                    L = (0, N.Z)(e, "title_context_menu");
                return (0, i.jsxs)(r.Menu, {
                    navId: "channel-context",
                    onClose: o.Zy,
                    "aria-label": s.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: C,
                    children: [(0, i.jsx)(r.MenuGroup, {
                        children: g
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: T
                    }), (0, i.jsxs)(r.MenuGroup, {
                        children: [a ? j : b, x]
                    }), (0, i.jsxs)(r.MenuGroup, {
                        children: [v, I, P, A]
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: L
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: y
                    }), (0,
                        i.jsx)(r.MenuGroup, {
                        children: m
                    })]
                })
            }), [a.Z.CONTEXT_MENU, a.Z.CHANNEL_TITLE_MENU])
        },
        392274: (n, e, t) => {
            t.d(e, {
                Z: () => Z
            });
            var i = t(785893),
                r = t(667294),
                o = t(70418),
                u = t(908741),
                a = t(472009),
                l = t(15338),
                c = (0, t(260561).B)({
                    kind: "user",
                    id: "2023-08-30_open-in-popout",
                    label: "Open Channel in Popout",
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
                });
            var d = t(451851),
                s = t(2590),
                p = t(250719),
                _ = t.n(p);

            function f(n) {
                var e = n.windowKey,
                    t = n.channel;
                return (0, i.jsx)(a.Z, {
                    withTitleBar: !0,
                    windowKey: e,
                    title: t.name,
                    channelId: t.id,
                    contentClassName: _().popoutContent,
                    children: (0, i.jsx)(u.Z.Provider, {
                        value: t.guild_id,
                        children: (0, i.jsx)(d.Z, {
                            providedChannel: t
                        })
                    })
                })
            }

            function Z(n, e) {
                var t = function(n) {
                        return c.useExperiment({
                            location: n
                        }, {
                            autoTrackExposure: !1
                        }).enabled
                    }(e),
                    u = r.useCallback((function() {
                        l.bA("".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(n.id), (function(e) {
                            return (0, i.jsx)(f, {
                                windowKey: e,
                                channel: n
                            })
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }), [n]);
                return t ? (0, i.jsx)(o.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: function() {
                        return u()
                    }
                }) : null
            }
        },
        249971: (n, e, t) => {
            t.d(e, {
                Z: () => s
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                u = t(347834),
                a = t(364269),
                l = t(9430),
                c = t(2590),
                d = t(473708);

            function s(n) {
                var e = (0, a.DM)(n.guild_id),
                    t = (0, r.e7)([l.Z], (function() {
                        return l.Z.isChannelOptedIn(n.guild_id, n.id)
                    })),
                    s = (0, r.e7)([l.Z], (function() {
                        return null != n.parent_id && l.Z.isChannelOptedIn(n.guild_id, n.parent_id)
                    })),
                    p = (0, r.e7)([l.Z], (function() {
                        return l.Z.isFavorite(n.guild_id, n.id)
                    })),
                    _ = function() {
                        (0, u.XQ)(n.guild_id, n.id, !t, {
                            section: c.jXE.CONTEXT_MENU
                        })
                    };
                return !e || n.isThread() ? null : n.isCategory() ? (0, i.jsx)(o.MenuItem, {
                    id: "opt-into-category",
                    label: t ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
                    action: function() {
                        return _()
                    }
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: p ? d.Z.Messages.REMOVE_FAVORITE : d.Z.Messages.ADD_FAVORITE,
                        action: function() {
                            (0, u.dM)(n.guild_id, n.id, !p, {
                                section: c.jXE.CONTEXT_MENU
                            })
                        }
                    }), s ? (0, i.jsx)(o.MenuItem, {
                        id: "opt-out-category",
                        label: d.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: function() {
                            null != n.parent_id && (0, u.XQ)(n.guild_id, n.parent_id, !1, {
                                section: c.jXE.CONTEXT_MENU
                            })
                        }
                    }) : (0, i.jsx)(o.MenuItem, {
                        id: "opt-into-channel",
                        label: t ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
                        action: function() {
                            return _()
                        }
                    })]
                })
            }
        }
    }
]);