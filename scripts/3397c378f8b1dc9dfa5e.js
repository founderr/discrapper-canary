"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35401], {
        907975: (e, n, i) => {
            i.d(n, {
                Z: () => l
            });
            const l = (0, i(260561).B)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        842783: (e, n, i) => {
            i.d(n, {
                Q: () => U,
                Z: () => V
            });
            var l = i(785893),
                r = i(667294),
                t = i(294184),
                a = i.n(t),
                s = i(202351),
                c = i(70418),
                o = i(153686),
                u = i(19585),
                d = i(296916),
                v = i(344832),
                m = i(787193),
                h = i(682776),
                g = i(124251),
                p = i(746103),
                C = i(907975),
                x = i(599467),
                N = i(619584),
                k = i(610030),
                j = i(951687),
                b = i(699296),
                E = i(220109),
                f = i(842227),
                T = i(269300),
                O = i(616918),
                I = i(3155),
                y = i(503569),
                S = i.n(y);

            function P(e) {
                var n = e.originalScheduledStartTime,
                    i = e.guildEventId,
                    r = e.onClick,
                    t = (0, s.e7)([T.ZP], (function() {
                        return T.ZP.getGuildScheduledEvent(i)
                    }));
                if (null == t) return null;
                var a = f.default.fromTimestamp(n.getTime());
                return (0, l.jsx)(c.ClickableContainer, {
                    className: S().container,
                    onClick: function(e) {
                        e.stopPropagation();
                        null == r || r(a)
                    },
                    "aria-label": "",
                    children: (0, l.jsx)(O.z, {
                        startTime: n.toISOString(),
                        status: I.p1.SCHEDULED,
                        eventType: t.entity_type
                    })
                })
            }
            var L = i(26601),
                A = i(173764),
                Z = i(2590),
                _ = i(473708),
                w = i(919569),
                R = i.n(w);

            function M(e, n, i) {
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i;
                return e
            }

            function G(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))));
                    l.forEach((function(n) {
                        M(e, n, i[n])
                    }))
                }
                return e
            }

            function D(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n && (l = l.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        i.push.apply(i, l)
                    }
                    return i
                }(Object(n)).forEach((function(i) {
                    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
                }));
                return e
            }
            var U;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(U || (U = {}));

            function H(e) {
                var n = e.channel,
                    i = e.onClick,
                    t = (0, m.XJ)(n).canManageAllEvents,
                    o = (0, s.e7)([h.Z], (function() {
                        return !n.isGuildVocal() || h.Z.can(Z.Plq.CONNECT, n)
                    }), [n]),
                    u = r.useMemo((function() {
                        return (0, d.Z)(n)
                    }), [n]),
                    g = (0, v.KS)(n);
                return (0, l.jsx)(c.Tooltip, {
                    text: _.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !o && null != i,
                    children: function(e) {
                        var r;
                        return (0, l.jsxs)(c.Clickable, D(G({}, e), {
                            className: a()(R().inline, R().channelContainer, (r = {}, M(r, R().channelContainerEnabled, o && null != i), M(r, R().channelContainerDisabled, !o && null != i), r)),
                            onClick: i,
                            children: [(0, l.jsx)(c.Tooltip, {
                                text: _.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: t && u && o && null != i,
                                children: function(e) {
                                    return null != g ? (0, l.jsx)(g, D(G({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: R().icon
                                    })) : null
                                }
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: R().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function J(e) {
                var n = e.guild,
                    i = e.channel,
                    r = e.onJoinClick,
                    t = e.handleLocationClick,
                    s = e.location,
                    o = e.isExternal;
                return e.isHub ? null == n ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                    className: R().inline,
                    children: [(0, l.jsx)(g.Z, {
                        className: R().guildIcon,
                        size: g.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != i ? (0, l.jsx)(H, {
                    channel: i,
                    onClick: r
                }) : (0, l.jsxs)(c.Clickable, {
                    className: R().inline,
                    onClick: t,
                    children: [(0, l.jsx)(p.Z, {
                        height: 20,
                        width: 20,
                        className: a()(R().channelContainer, R().icon)
                    }), (0, l.jsx)(c.Text, {
                        className: o ? R().externalLocation : R().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, x.m)(s, !0)
                    })]
                })
            }

            function V(e) {
                var n, i = e.className,
                    r = e.guild,
                    t = e.channel,
                    s = e.creator,
                    d = e.name,
                    v = e.entityType,
                    m = e.description,
                    h = e.imageLocation,
                    g = void 0 === h ? U.BANNER : h,
                    p = e.imageSource,
                    x = e.isActive,
                    f = e.isUserLurking,
                    T = e.isJoined,
                    O = void 0 !== T && T,
                    y = e.isMember,
                    S = void 0 !== y && y,
                    Z = e.isHub,
                    w = void 0 !== Z && Z,
                    G = e.speakers,
                    D = e.speakerCount,
                    H = e.rsvped,
                    V = e.canInvite,
                    B = e.location,
                    z = e.truncate,
                    X = e.onContextMenu,
                    K = e.onJoinClick,
                    Q = e.onJoinGuildClick,
                    W = e.onGoToGuildClick,
                    Y = e.onRsvpClick,
                    q = e.onStartClick,
                    F = e.onInviteClick,
                    $ = e.onEndClick,
                    ee = e.onClick,
                    ne = e.isNew,
                    ie = e.guildEventId,
                    le = e.eventPreview,
                    re = e.recurrenceRule,
                    te = (0, N.Q)(t, v),
                    ae = v === I.WX.EXTERNAL,
                    se = ae ? function(e) {
                        return e.stopPropagation()
                    } : void 0,
                    ce = (0, u.Z)(o.Z.GUILD_EVENT_CARD).analyticsLocations,
                    oe = C.Z.useExperiment({
                        guildId: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : "",
                        location: ce[0]
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    ue = [];
                if (null != re) {
                    var de = (0, k.Ho)(re);
                    ue = (0, k.PJ)(4, de)
                }
                var ve, me = oe && ue.length > 0;
                return (0, l.jsxs)(c.ClickableContainer, {
                    "aria-label": d,
                    onClick: function() {
                        return null == ee ? void 0 : ee()
                    },
                    onContextMenu: X,
                    className: a()(R().card, (ve = {}, M(ve, R().joined, O), M(ve, R().lurking, f), ve), i),
                    children: [(0, l.jsxs)("div", {
                        className: a()(R().padding, M({}, R().isRecurring, ue.length > 0)),
                        children: [g === U.BANNER && (0, l.jsx)(b.Z, {
                            source: p
                        }), (0, l.jsx)(E.ZP, {
                            creator: s,
                            name: d,
                            description: m,
                            imageSource: g === U.THUMBNAIL ? p : null,
                            truncate: z,
                            guildId: null == r ? void 0 : r.id,
                            isHub: w,
                            isNew: ne,
                            guildEventId: ie,
                            eventPreview: le
                        }), x && null != r && null != G && D > 0 && (0, l.jsx)(A.Z, {
                            guild: r,
                            speakers: G,
                            speakerCount: D,
                            className: R().spacing
                        }), (0, l.jsx)("hr", {
                            className: R().divider
                        }), (0, l.jsxs)("div", {
                            className: a()(R().inline, R().footer),
                            children: [(0, l.jsx)(J, {
                                guild: r,
                                channel: t,
                                onJoinClick: K,
                                handleLocationClick: se,
                                location: B,
                                isExternal: ae,
                                isHub: w
                            }), w ? (0, l.jsx)(L.Z, {
                                isActive: x,
                                isUserLurking: f,
                                isMember: S,
                                rsvped: H,
                                onRsvpClick: Y,
                                onJoinGuildClick: Q,
                                onGoToGuildClick: W,
                                guildName: null == r ? void 0 : r.name,
                                canInvite: V,
                                isChannelPublic: te,
                                onInviteClick: F
                            }) : (0, l.jsx)(j.ZP, {
                                entityType: v,
                                isJoined: O,
                                isActive: x,
                                isUserLurking: f,
                                rsvped: H,
                                canInvite: V,
                                isChannelPublic: te,
                                onContextMenu: X,
                                onJoinClick: K,
                                onRsvpClick: Y,
                                onStartClick: q,
                                onInviteClick: F,
                                onEndClick: $
                            })]
                        }), me && (0, l.jsx)("hr", {
                            className: R().divider
                        })]
                    }), me && (0, l.jsxs)("div", {
                        className: R().recurrences,
                        children: [(0, l.jsx)(c.Heading, {
                            variant: "heading-sm/medium",
                            className: R().heading,
                            children: _.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                        }), ue.map((function(e) {
                            return (0, l.jsx)(P, {
                                originalScheduledStartTime: e,
                                guildEventId: ie,
                                onClick: ee
                            }, e.toString())
                        }))]
                    })]
                })
            }
        },
        173764: (e, n, i) => {
            i.d(n, {
                Z: () => d
            });
            var l = i(785893),
                r = (i(667294), i(294184)),
                t = i.n(r),
                a = i(70418),
                s = i(961241),
                c = i(473708),
                o = i(811948),
                u = i.n(o);

            function d(e) {
                var n = e.guild,
                    i = e.speakers,
                    r = e.speakerCount,
                    o = e.className,
                    d = i.slice(0, 5),
                    v = d.map((function(e) {
                        var i, r;
                        return (0, l.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, l.jsx)(a.Avatar, {
                                src: null == e || null === (i = e.user) || void 0 === i ? void 0 : i.getAvatarURL(n.id, 20),
                                size: a.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, l.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, l.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id)
                    })),
                    m = r - d.length;
                return (0, l.jsxs)("div", {
                    className: t()(u().grid, o),
                    children: [v, m > 0 && (0, l.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, l.jsx)(s.Z, {
                                height: 12
                            })
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: m
                            })
                        })]
                    })]
                })
            }
        }
    }
]);