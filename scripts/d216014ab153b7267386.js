"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [11261], {
        811261: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => L
            });
            var r = t(785893),
                o = (t(667294), t(304548)),
                i = t(971402),
                l = t(343639),
                u = t(567678),
                a = t(82055),
                c = t(153686),
                s = t(112897),
                d = t(207227),
                p = t(13280),
                Z = t(589822),
                h = t(842748),
                b = t(962855),
                f = t(422906),
                j = t(987932),
                x = t(576668),
                _ = t(787301),
                M = t(673780),
                N = t(929653),
                C = t(380477),
                E = t(221921),
                O = t(392274),
                v = t(249971),
                g = t(143343),
                y = t(2590),
                w = t(473708);

            function A(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        A(e, n, t[n])
                    }))
                }
                return e
            }

            function m(e) {
                var n = e.channel,
                    t = e.onSelect,
                    l = (0, N.Z)(n),
                    u = (0, f.Z)(n),
                    c = (0, p.Z)(n),
                    d = (0,
                        Z.Z)(n),
                    b = (0, h.Z)(n),
                    j = (0, C.ZP)(n),
                    x = (0, E.Z)(n),
                    M = (0, _.Z)(n),
                    O = (0, s.Z)({
                        id: n.id,
                        label: w.Z.Messages.COPY_ID_CHANNEL
                    }),
                    v = (0, a.Z)(n);
                return (0, r.jsxs)(o.Menu, {
                    navId: "channel-context",
                    onClose: i.Zy,
                    "aria-label": w.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: l
                    }), (0, r.jsxs)(o.MenuGroup, {
                        children: [b, d, c]
                    }), (0, r.jsxs)(o.MenuGroup, {
                        children: [j, x]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: M
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: v
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: u
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: O
                    })]
                })
            }

            function G(e) {
                var n = e.channel,
                    t = e.guild,
                    l = e.onSelect,
                    u = (0, N.Z)(n),
                    a = (0, f.Z)(n),
                    c = (0, p.Z)(n),
                    d = (0, v.Z)(n),
                    Z = (0, C.ZP)(n),
                    h = (0, E.Z)(n),
                    y = (0, g.Z)(n),
                    A = (0, _.Z)(n),
                    P = (0, M.Z)(n, t),
                    m = (0, b.Z)(n, t),
                    G = (0, j.Z)(n, t),
                    L = (0, x.Z)(n),
                    T = (0, s.Z)({
                        id: n.id,
                        label: w.Z.Messages.COPY_ID_CHANNEL
                    }),
                    k = (0, O.Z)(n, "list_text_channel_context_menu");
                return (0, r.jsxs)(o.Menu, {
                    navId: "channel-context",
                    onClose: i.Zy,
                    "aria-label": w.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0,
                        r.jsx)(o.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, r.jsxs)(o.MenuGroup, {
                        children: [P, d, a, c, k]
                    }, "channel-actions"), (0, r.jsxs)(o.MenuGroup, {
                        children: [Z, h, y]
                    }, "notifications"), (0, r.jsxs)(o.MenuGroup, {
                        children: [A, m, G, L]
                    }, "admin-actions"), (0, r.jsx)(o.MenuGroup, {
                        children: T
                    }, "developer-actions")]
                })
            }
            const L = (0, u.Z)((0, l.Z)((function(e) {
                return (0, d.Z)() ? (0, r.jsx)(m, P({}, e)) : (0, r.jsx)(G, P({}, e))
            }), {
                object: y.qAy.CONTEXT_MENU
            }), [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        392274: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = t(667294),
                i = t(304548),
                l = t(518875),
                u = t(908741),
                a = t(472009),
                c = t(15338),
                s = (0, t(260561).B)({
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
            var d = t(2590),
                p = t(250719),
                Z = t.n(p);

            function h(e) {
                var n = e.windowKey,
                    t = e.channel;
                return (0, r.jsx)(a.Z, {
                    withTitleBar: !0,
                    windowKey: n,
                    title: t.name,
                    channelId: t.id,
                    contentClassName: Z().popoutContent,
                    children: (0, r.jsx)(u.Z.Provider, {
                        value: t.guild_id,
                        children: (0, r.jsx)(l.Z, {
                            providedChannel: t
                        })
                    })
                })
            }

            function b(e, n) {
                var t = function(e) {
                        return s.useExperiment({
                            location: e
                        }, {
                            autoTrackExposure: !1
                        }).enabled
                    }(n),
                    l = o.useCallback((function() {
                        c.bA("".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id), (function(n) {
                            return (0, r.jsx)(h, {
                                windowKey: n,
                                channel: e
                            })
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }), [e]);
                return t ? (0, r.jsx)(i.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: function() {
                        return l()
                    }
                }) : null
            }
        }
    }
]);