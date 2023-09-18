"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [59295], {
        359295: (n, e, i) => {
            i.r(e);
            i.d(e, {
                default: () => O
            });
            var t = i(785893),
                u = (i(667294), i(882723)),
                a = i(971402),
                o = i(567678),
                l = i(153686),
                d = i(112897),
                r = i(962855),
                s = i(691797),
                c = i(473708);
            var _ = i(987932),
                p = i(576668),
                E = i(787301),
                Z = i(673780),
                N = i(380477),
                h = i(221921),
                M = i(392274),
                C = i(249971),
                T = i(2590);
            const O = (0, o.Z)((function(n) {
                var e = n.channel,
                    i = n.guild,
                    o = n.includeTopic,
                    l = void 0 !== o && o,
                    O = n.onSelect,
                    g = (0, C.Z)(e),
                    f = (0, N.ZP)(e),
                    x = (0, h.Z)(e),
                    j = function(n) {
                        return s.wS ? (0, t.jsx)(u.MenuItem, {
                            id: "copy-channel-topic",
                            label: c.Z.Messages.COPY_CHANNEL_TOPIC,
                            action: function() {
                                return (0, s.JG)(n.topic)
                            }
                        }) : null
                    }(e),
                    I = (0, E.Z)(e),
                    b = (0, Z.Z)(e, i),
                    A = (0, r.Z)(e, i),
                    v = (0, _.Z)(e, i, T.d4z.GUILD_TEXT),
                    L = (0, _.Z)(e, i, T.d4z.GUILD_VOICE),
                    P = (0, p.Z)(e),
                    m = (0, d.Z)({
                        id: e.id,
                        label: c.Z.Messages.COPY_ID_CHANNEL
                    }),
                    U = (0, M.Z)(e, "title_context_menu");
                return (0, t.jsxs)(u.Menu, {
                    navId: "channel-context",
                    onClose: a.Zy,
                    "aria-label": c.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: O,
                    children: [(0, t.jsx)(u.MenuGroup, {
                        children: g
                    }), (0, t.jsx)(u.MenuGroup, {
                        children: f
                    }), (0, t.jsxs)(u.MenuGroup, {
                        children: [l ? j : x, I]
                    }), (0, t.jsxs)(u.MenuGroup, {
                        children: [b, A, v, L]
                    }), (0, t.jsx)(u.MenuGroup, {
                        children: U
                    }), (0, t.jsx)(u.MenuGroup, {
                        children: P
                    }), (0, t.jsx)(u.MenuGroup, {
                        children: m
                    })]
                })
            }), [l.Z.CONTEXT_MENU, l.Z.CHANNEL_TITLE_MENU])
        },
        392274: (n, e, i) => {
            i.d(e, {
                Z: () => Z
            });
            var t = i(785893),
                u = i(667294),
                a = i(882723),
                o = i(594411),
                l = i(908741),
                d = i(472009),
                r = i(15338),
                s = (0, i(260561).B)({
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
            var c = i(2590),
                _ = i(590365),
                p = i.n(_);

            function E(n) {
                var e = n.windowKey,
                    i = n.channel;
                return (0, t.jsx)(d.Z, {
                    withTitleBar: !0,
                    windowKey: e,
                    title: i.name,
                    channelId: i.id,
                    contentClassName: p().popoutContent,
                    children: (0, t.jsx)(l.Z.Provider, {
                        value: i.guild_id,
                        children: (0, t.jsx)(o.Z, {
                            providedChannel: i
                        })
                    })
                })
            }

            function Z(n, e) {
                var i = function(n) {
                        return s.useExperiment({
                            location: n
                        }, {
                            autoTrackExposure: !1
                        }).enabled
                    }(e),
                    o = u.useCallback((function() {
                        r.bA("".concat(c.KJ3.CHANNEL_POPOUT, "-").concat(n.id), (function(e) {
                            return (0, t.jsx)(E, {
                                windowKey: e,
                                channel: n
                            })
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }), [n]);
                return i ? (0, t.jsx)(a.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: function() {
                        return o()
                    }
                }) : null
            }
        },
        249971: (n, e, i) => {
            i.d(e, {
                Z: () => c
            });
            var t = i(785893),
                u = (i(667294), i(202351)),
                a = i(882723),
                o = i(347834),
                l = i(364269),
                d = i(9430),
                r = i(2590),
                s = i(473708);

            function c(n) {
                var e = (0, l.DM)(n.guild_id),
                    i = (0, u.e7)([d.Z], (function() {
                        return d.Z.isChannelOptedIn(n.guild_id, n.id)
                    })),
                    c = (0, u.e7)([d.Z], (function() {
                        return null != n.parent_id && d.Z.isChannelOptedIn(n.guild_id, n.parent_id)
                    })),
                    _ = (0, u.e7)([d.Z], (function() {
                        return d.Z.isFavorite(n.guild_id, n.id)
                    })),
                    p = function() {
                        (0, o.XQ)(n.guild_id, n.id, !i, {
                            section: r.jXE.CONTEXT_MENU
                        })
                    };
                return !e || n.isThread() ? null : n.isCategory() ? (0, t.jsx)(a.MenuItem, {
                    id: "opt-into-category",
                    label: i ? s.Z.Messages.CHANNEL_OPT_OUT : s.Z.Messages.CHANNEL_OPT_IN,
                    action: function() {
                        return p()
                    }
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(a.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: _ ? s.Z.Messages.REMOVE_FAVORITE : s.Z.Messages.ADD_FAVORITE,
                        action: function() {
                            (0, o.dM)(n.guild_id, n.id, !_, {
                                section: r.jXE.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, t.jsx)(a.MenuItem, {
                        id: "opt-out-category",
                        label: s.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: function() {
                            null != n.parent_id && (0, o.XQ)(n.guild_id, n.parent_id, !1, {
                                section: r.jXE.CONTEXT_MENU
                            })
                        }
                    }) : (0, t.jsx)(a.MenuItem, {
                        id: "opt-into-channel",
                        label: i ? s.Z.Messages.CHANNEL_OPT_OUT : s.Z.Messages.CHANNEL_OPT_IN,
                        action: function() {
                            return p()
                        }
                    })]
                })
            }
        }
    }
]);