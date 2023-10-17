"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39023], {
        919810: (n, e, i) => {
            i.d(e, {
                wg: () => C,
                so: () => g,
                ZP: () => y
            });
            var t = i(202351),
                r = i(15970),
                l = i(766496),
                a = i(61209),
                o = i(5544),
                c = i(567403),
                s = i(682776),
                u = i(563135),
                d = i(269300),
                v = i(3155),
                h = i(2590);

            function p(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var i = 0, t = new Array(e); i < e; i++) t[i] = n[i];
                return t
            }

            function m(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var i = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != i) {
                        var t, r, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (i = i.call(n); !(a = (t = i.next()).done); a = !0) {
                                l.push(t.value);
                                if (e && l.length === e) break
                            }
                        } catch (n) {
                            o = !0;
                            r = n
                        } finally {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return l
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return p(n, e);
                    var i = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === i && n.constructor && (i = n.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return p(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(n) {
                return "entity_type" in n ? {
                    entityType: n.entity_type,
                    channelId: n.channel_id
                } : n
            }

            function C(n) {
                var e = m(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z], 1),
                    i = e[0],
                    t = f(n),
                    r = t.entityType,
                    l = t.channelId,
                    o = r === v.WX.EXTERNAL;
                if (o) return !0;
                var c = i.getChannel(l);
                return null != c && u.ZP.canEveryoneRole(h.Plq.VIEW_CHANNEL, c)
            }

            function g(n) {
                var e = m(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, a.Z, c.Z, l.Z], 4),
                    i = e[0],
                    t = e[1],
                    u = e[2],
                    h = e[3];
                if ((0, d.Z2)(n)) return !1;
                var p = n.guild_id,
                    f = n.channel_id,
                    g = n.entity_type === v.WX.EXTERNAL,
                    y = g ? i.getDefaultChannel(n.guild_id) : t.getChannel(f),
                    N = u.getGuild(p),
                    x = h.getStageInstanceByChannel(f);
                return !!(0, r.b)(s.Z, N, y, x) && (null != y && C(n, [t]))
            }

            function y(n) {
                return (0,
                    t.e7)([o.ZP, a.Z, c.Z, l.Z], (function() {
                    return g(n, [o.ZP, a.Z, c.Z, l.Z])
                }), [n])
            }
        },
        383495: (n, e, i) => {
            i.d(e, {
                Q: () => T,
                Z: () => S
            });
            var t = i(785893),
                r = i(667294),
                l = i(294184),
                a = i.n(l),
                o = i(202351),
                c = i(304548),
                s = i(296916),
                u = i(344832),
                d = i(787193),
                v = i(682776),
                h = i(124251),
                p = i(746103),
                m = i(599467),
                f = i(619584),
                C = i(951687),
                g = i(699296),
                y = i(220109),
                N = i(26601),
                x = i(173764),
                b = i(3155),
                j = i(2590),
                k = i(473708),
                E = i(919569),
                Z = i.n(E);

            function O(n, e, i) {
                e in n ? Object.defineProperty(n, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = i;
                return n
            }

            function I(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        t = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(i, n).enumerable
                    }))));
                    t.forEach((function(e) {
                        O(n, e, i[e])
                    }))
                }
                return n
            }

            function A(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var i = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(n);
                        e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        i.push.apply(i, t)
                    }
                    return i
                }(Object(e)).forEach((function(i) {
                    Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i))
                }));
                return n
            }
            var T;
            ! function(n) {
                n[n.BANNER = 0] = "BANNER";
                n[n.THUMBNAIL = 1] = "THUMBNAIL"
            }(T || (T = {}));

            function P(n) {
                var e = n.channel,
                    i = n.onClick,
                    l = (0, d.XJ)(e).canManageAllEvents,
                    h = (0, o.e7)([v.Z], (function() {
                        return !e.isGuildVocal() || v.Z.can(j.Plq.CONNECT, e)
                    }), [e]),
                    p = r.useMemo((function() {
                        return (0, s.Z)(e)
                    }), [e]),
                    m = (0, u.KS)(e);
                return (0, t.jsx)(c.Tooltip, {
                    text: k.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !h && null != i,
                    children: function(n) {
                        var r;
                        return (0, t.jsxs)(c.Clickable, A(I({}, n), {
                            className: a()(Z().inline, Z().channelContainer, (r = {}, O(r, Z().channelContainerEnabled, h && null != i), O(r, Z().channelContainerDisabled, !h && null != i), r)),
                            onClick: i,
                            children: [(0, t.jsx)(c.Tooltip, {
                                text: k.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: l && p && h && null != i,
                                children: function(n) {
                                    return null != m ? (0, t.jsx)(m, A(I({}, n), {
                                        width: 20,
                                        height: 20,
                                        className: Z().icon
                                    })) : null
                                }
                            }), (0, t.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: Z().channelLocation,
                                children: e.name
                            })]
                        }))
                    }
                })
            }

            function w(n) {
                var e = n.guild,
                    i = n.channel,
                    r = n.onJoinClick,
                    l = n.handleLocationClick,
                    o = n.location,
                    s = n.isExternal;
                return n.isHub ? null == e ? (0, t.jsx)("div", {}) : (0, t.jsxs)("div", {
                    className: Z().inline,
                    children: [(0, t.jsx)(h.Z, {
                        className: Z().guildIcon,
                        size: h.Z.Sizes.MINI,
                        active: !0,
                        guild: e
                    }), (0, t.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == e ? void 0 : e.name
                    })]
                }) : null != i ? (0, t.jsx)(P, {
                    channel: i,
                    onClick: r
                }) : (0, t.jsxs)(c.Clickable, {
                    className: Z().inline,
                    onClick: l,
                    children: [(0, t.jsx)(p.Z, {
                        height: 20,
                        width: 20,
                        className: a()(Z().channelContainer, Z().icon)
                    }), (0, t.jsx)(c.Text, {
                        className: s ? Z().externalLocation : Z().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, m.m)(o, !0)
                    })]
                })
            }

            function S(n) {
                var e, i = n.className,
                    r = n.guild,
                    l = n.channel,
                    o = n.creator,
                    s = n.name,
                    u = n.entityType,
                    d = n.description,
                    v = n.imageLocation,
                    h = void 0 === v ? T.BANNER : v,
                    p = n.imageSource,
                    m = n.isActive,
                    j = n.isUserLurking,
                    k = n.isJoined,
                    E = void 0 !== k && k,
                    I = n.isMember,
                    A = void 0 !== I && I,
                    P = n.isHub,
                    S = void 0 !== P && P,
                    _ = n.speakers,
                    L = n.speakerCount,
                    M = n.rsvped,
                    R = n.canInvite,
                    G = n.location,
                    U = n.truncate,
                    D = n.onContextMenu,
                    H = n.onJoinClick,
                    J = n.onJoinGuildClick,
                    B = n.onGoToGuildClick,
                    V = n.onRsvpClick,
                    X = n.onStartClick,
                    W = n.onInviteClick,
                    z = n.onEndClick,
                    q = n.onClick,
                    K = n.isNew,
                    Q = n.guildEventId,
                    Y = n.eventPreview,
                    F = (0, f.Q)(l, u),
                    $ = u === b.WX.EXTERNAL,
                    nn = $ ? function(n) {
                        return n.stopPropagation()
                    } : void 0;
                return (0, t.jsxs)(c.ClickableContainer, {
                    "aria-label": s,
                    onClick: q,
                    onContextMenu: D,
                    className: a()(Z().card, (e = {}, O(e, Z().joined, E), O(e, Z().lurking, j), e), i),
                    children: [h === T.BANNER && (0, t.jsx)(g.Z, {
                        source: p
                    }), (0, t.jsx)(y.ZP, {
                        creator: o,
                        name: s,
                        description: d,
                        imageSource: h === T.THUMBNAIL ? p : null,
                        truncate: U,
                        guildId: null == r ? void 0 : r.id,
                        isHub: S,
                        isNew: K,
                        guildEventId: Q,
                        eventPreview: Y
                    }), m && null != r && null != _ && L > 0 && (0, t.jsx)(x.Z, {
                        guild: r,
                        speakers: _,
                        speakerCount: L,
                        className: Z().spacing
                    }), (0, t.jsx)("hr", {
                        className: Z().divider
                    }), (0, t.jsxs)("div", {
                        className: a()(Z().inline, Z().footer),
                        children: [(0, t.jsx)(w, {
                            guild: r,
                            channel: l,
                            onJoinClick: H,
                            handleLocationClick: nn,
                            location: G,
                            isExternal: $,
                            isHub: S
                        }), S ? (0, t.jsx)(N.Z, {
                            isActive: m,
                            isUserLurking: j,
                            isMember: A,
                            rsvped: M,
                            onRsvpClick: V,
                            onJoinGuildClick: J,
                            onGoToGuildClick: B,
                            guildName: null == r ? void 0 : r.name,
                            canInvite: R,
                            isChannelPublic: F,
                            onInviteClick: W
                        }) : (0, t.jsx)(C.ZP, {
                            entityType: u,
                            isJoined: E,
                            isActive: m,
                            isUserLurking: j,
                            rsvped: M,
                            canInvite: R,
                            isChannelPublic: F,
                            onContextMenu: D,
                            onJoinClick: H,
                            onRsvpClick: V,
                            onStartClick: X,
                            onInviteClick: W,
                            onEndClick: z
                        })]
                    })]
                })
            }
        },
        173764: (n, e, i) => {
            i.d(e, {
                Z: () => d
            });
            var t = i(785893),
                r = (i(667294), i(294184)),
                l = i.n(r),
                a = i(304548),
                o = i(961241),
                c = i(473708),
                s = i(811948),
                u = i.n(s);

            function d(n) {
                var e = n.guild,
                    i = n.speakers,
                    r = n.speakerCount,
                    s = n.className,
                    d = i.slice(0, 5),
                    v = d.map((function(n) {
                        var i, r;
                        return (0, t.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, t.jsx)(a.Avatar, {
                                src: null == n || null === (i = n.user) || void 0 === i ? void 0 : i.getAvatarURL(e.id, 20),
                                size: a.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == n ? void 0 : n.userNick, "-avatar")
                            }), (0, t.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, t.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == n ? void 0 : n.userNick
                                })
                            })]
                        }, null == n || null === (r = n.user) || void 0 === r ? void 0 : r.id)
                    })),
                    h = r - d.length;
                return (0, t.jsxs)("div", {
                    className: l()(u().grid, s),
                    children: [v, h > 0 && (0, t.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, t.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, t.jsx)(o.Z, {
                                height: 12
                            })
                        }), (0, t.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: h
                            })
                        })]
                    })]
                })
            }
        }
    }
]);