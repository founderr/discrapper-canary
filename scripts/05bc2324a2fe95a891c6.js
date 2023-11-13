(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3982"], {
        651072: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return a
                }
            });
            var t = l("862205");
            let i = (0, t.createExperiment)({
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
            });
            var a = i
        },
        617347: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                GuildEventBodyImageLocation: function() {
                    return i
                },
                default: function() {
                    return U
                }
            });
            var t, i, a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                u = l.n(r),
                d = l("446674"),
                o = l("77078"),
                c = l("812204"),
                h = l("685665"),
                m = l("656038"),
                v = l("419830"),
                f = l("817963"),
                g = l("957255"),
                x = l("476263"),
                E = l("718550"),
                C = l("651072"),
                N = l("1339"),
                j = l("613767"),
                p = l("822516"),
                S = l("707916"),
                k = l("255050"),
                T = l("400271"),
                _ = l("427554"),
                I = l("644189"),
                R = l("29913"),
                L = l("745049"),
                b = l("49111"),
                M = l("782340"),
                A = l("955614");

            function D(e) {
                let {
                    channel: n,
                    onClick: l
                } = e, {
                    canManageAllEvents: t
                } = (0, f.useManageResourcePermissions)(n), i = (0, d.useStateFromStores)([g.default], () => !n.isGuildVocal() || g.default.can(b.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, m.default)(n), [n]), c = (0, v.getChannelIconComponent)(n);
                return (0, a.jsx)(o.Tooltip, {
                    text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !i && null != l,
                    children: e => (0, a.jsxs)(o.Clickable, {
                        ...e,
                        className: u(A.inline, A.channelContainer, {
                            [A.channelContainerEnabled]: i && null != l,
                            [A.channelContainerDisabled]: !i && null != l
                        }),
                        onClick: l,
                        children: [(0, a.jsx)(o.Tooltip, {
                            text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: t && r && i && null != l,
                            children: e => null != c ? (0, a.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: A.icon
                            }) : null
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: A.channelLocation,
                            children: n.name
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    guild: n,
                    channel: l,
                    onJoinClick: t,
                    handleLocationClick: i,
                    location: s,
                    isExternal: r,
                    isHub: d
                } = e;
                if (d) return null == n ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
                    className: A.inline,
                    children: [(0, a.jsx)(x.default, {
                        className: A.guildIcon,
                        size: x.default.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                });
                return null != l ? (0, a.jsx)(D, {
                    channel: l,
                    onClick: t
                }) : (0, a.jsxs)(o.Clickable, {
                    className: A.inline,
                    onClick: i,
                    children: [(0, a.jsx)(E.default, {
                        height: 20,
                        width: 20,
                        className: u(A.channelContainer, A.icon)
                    }), (0, a.jsx)(o.Text, {
                        className: r ? A.externalLocation : A.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, N.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function U(e) {
                var n;
                let {
                    className: l,
                    guild: t,
                    channel: i,
                    creator: s,
                    name: r,
                    entityType: d,
                    description: m,
                    imageLocation: v = 0,
                    imageSource: f,
                    isActive: g,
                    isUserLurking: x,
                    isJoined: E = !1,
                    isMember: N = !1,
                    isHub: b = !1,
                    speakers: M,
                    speakerCount: D,
                    rsvped: U,
                    canInvite: P,
                    location: w,
                    truncate: y,
                    onContextMenu: V,
                    onJoinClick: O,
                    onJoinGuildClick: B,
                    onGoToGuildClick: H,
                    onRsvpClick: z,
                    onStartClick: F,
                    onInviteClick: Y,
                    onEndClick: J,
                    onClick: K,
                    isNew: W,
                    guildEventId: X,
                    eventPreview: Z,
                    recurrenceRule: q,
                    recurrenceId: Q
                } = e, $ = (0, j.isChannelPublic)(i, d), ee = d === L.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: en
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: el
                } = C.default.useExperiment({
                    guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                    location: en[0]
                }, {
                    autoTrackExposure: !1
                }), et = [];
                if (null != q) {
                    let e = (0, p.getRRule)(q);
                    et = (0, p.generateNextRecurrences)(4, e)
                }
                let ei = el && et.length > 0;
                return (0, a.jsxs)(o.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == K ? void 0 : K(),
                    onContextMenu: V,
                    className: u(A.card, {
                        [A.joined]: E,
                        [A.lurking]: x
                    }, l),
                    children: [(0, a.jsxs)("div", {
                        className: u(A.padding, {
                            [A.isRecurring]: ei
                        }),
                        children: [0 === v && (0, a.jsx)(k.default, {
                            source: f
                        }), (0, a.jsx)(T.default, {
                            creator: s,
                            name: r,
                            description: m,
                            imageSource: 1 === v ? f : null,
                            truncate: y,
                            guildId: null == t ? void 0 : t.id,
                            isHub: b,
                            isNew: W,
                            guildEventId: X,
                            eventPreview: Z,
                            recurrenceId: Q
                        }), g && null != t && null != M && D > 0 && (0, a.jsx)(R.default, {
                            guild: t,
                            speakers: M,
                            speakerCount: D,
                            className: A.spacing
                        }), (0, a.jsx)("hr", {
                            className: A.divider
                        }), (0, a.jsxs)("div", {
                            className: u(A.inline, A.footer),
                            children: [(0, a.jsx)(G, {
                                guild: t,
                                channel: i,
                                onJoinClick: O,
                                handleLocationClick: ee ? e => e.stopPropagation() : void 0,
                                location: w,
                                isExternal: ee,
                                isHub: b
                            }), b ? (0, a.jsx)(I.default, {
                                isActive: g,
                                isUserLurking: x,
                                isMember: N,
                                rsvped: U,
                                onRsvpClick: z,
                                onJoinGuildClick: B,
                                onGoToGuildClick: H,
                                guildName: null == t ? void 0 : t.name,
                                canInvite: P,
                                isChannelPublic: $,
                                onInviteClick: Y
                            }) : (0, a.jsx)(S.default, {
                                entityType: d,
                                isJoined: E,
                                isActive: g,
                                isUserLurking: x,
                                rsvped: U,
                                canInvite: P,
                                isChannelPublic: $,
                                onContextMenu: V,
                                onJoinClick: O,
                                onRsvpClick: z,
                                onStartClick: F,
                                onInviteClick: Y,
                                onEndClick: J
                            })]
                        }), ei && (0, a.jsx)("hr", {
                            className: A.divider
                        })]
                    }), ei && (0, a.jsx)(_.default, {
                        guildId: null == t ? void 0 : t.id,
                        recurrenceRule: q,
                        guildEventId: X,
                        onClick: K
                    })]
                })
            }(t = i || (i = {}))[t.BANNER = 0] = "BANNER", t[t.THUMBNAIL = 1] = "THUMBNAIL"
        },
        123030: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return N
                }
            });
            var t = l("37983");
            l("884691");
            var i = l("414456"),
                a = l.n(i),
                s = l("249654"),
                r = l("446674"),
                u = l("77078"),
                d = l("272030"),
                o = l("42203"),
                c = l("305961"),
                h = l("433487"),
                m = l("398604"),
                v = l("397680"),
                f = l("393745"),
                g = l("745049"),
                x = l("49111"),
                E = l("782340"),
                C = l("157624");

            function N(e) {
                let {
                    originalScheduledStartTime: n,
                    guildEventId: i,
                    onClick: N
                } = e, j = s.default.fromTimestamp(Math.floor(n.getTime() / x.Durations.SECOND)), p = (0, r.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(i)), S = (0, v.default)(j, null == p ? void 0 : p.id), k = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), T = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(null == p ? void 0 : p.channel_id));
                if (null == p) return null;
                let {
                    is_canceled: _ = !1
                } = null != S ? S : {}, I = (null == S ? void 0 : S.scheduled_start_time) != null ? new Date(null == S ? void 0 : S.scheduled_start_time) : n, R = e => {
                    e.stopPropagation(), null != k && (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return n => (0, t.jsx)(e, {
                            guildEventId: p.id,
                            recurrenceId: j,
                            channel: T,
                            guild: k,
                            ...n
                        })
                    })
                };
                return (0, t.jsxs)(u.ClickableContainer, {
                    className: a(C.container, {
                        [C.canceled]: _
                    }),
                    onClick: e => {
                        e.stopPropagation(), !_ && (null == N || N(j))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, t.jsx)(f.GuildEventTimeStatus, {
                        startTime: I.toISOString(),
                        status: _ ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED,
                        eventType: p.entity_type,
                        className: C.timeStatus
                    }), _ && (0, t.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: C.canceledStatus,
                        children: E.default.Messages.EVENT_CANCELED
                    }), (0, t.jsx)(u.Tooltip, {
                        text: E.default.Messages.MORE,
                        position: "top",
                        "aria-label": E.default.Messages.EDIT,
                        children: e => (0, t.jsx)(u.Clickable, {
                            ...e,
                            onClick: R,
                            className: C.iconButton,
                            children: (0, t.jsx)(h.default, {
                                width: 20,
                                height: 20,
                                className: C.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return h
                }
            }), l("222007");
            var t = l("37983"),
                i = l("884691"),
                a = l("249654"),
                s = l("77078"),
                r = l("933326"),
                u = l("822516"),
                d = l("123030"),
                o = l("782340"),
                c = l("849882");

            function h(e) {
                let {
                    guildId: n,
                    recurrenceRule: l,
                    guildEventId: h,
                    onClick: m
                } = e, [v, f] = i.useState([]);
                i.useEffect(() => {
                    if (null != l) {
                        let e = (0, u.getRRule)(l);
                        f((0, u.generateNextRecurrences)(4, e))
                    }
                }, [l]), i.useEffect(() => {
                    if (null == n) return;
                    let e = v.map(e => a.default.fromTimestamp(e.getTime()));
                    r.default.getGuildEventUserCounts(n, h, e)
                }, [h, n, v]);
                let g = i.useMemo(() => {
                    if (null == l || 0 === v.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + u.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let n = v[v.length - 1],
                        t = (0, u.getRRule)(l),
                        i = t.after(n);
                    return null != i && !(i > e) && !0
                }, [l, v]);
                return (0, t.jsxs)("div", {
                    className: c.recurrences,
                    children: [(0, t.jsx)(s.Heading, {
                        variant: "heading-sm/medium",
                        className: c.heading,
                        children: o.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, t.jsxs)(s.Scroller, {
                        className: c.scroller,
                        children: [v.map(e => (0, t.jsx)(d.default, {
                            originalScheduledStartTime: e,
                            guildEventId: h,
                            onClick: m
                        }, e.toString())), g && (0, t.jsx)(s.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == l) return;
                                let n = (0, u.getRRule)(l),
                                    t = v[v.length - 1];
                                f([...v, ...(0, u.generateNextRecurrences)(4, n, t)])
                            },
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            color: s.Button.Colors.LINK,
                            className: c.button,
                            children: o.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        29913: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return o
                }
            });
            var t = l("37983");
            l("884691");
            var i = l("414456"),
                a = l.n(i),
                s = l("77078"),
                r = l("849467"),
                u = l("782340"),
                d = l("130221");

            function o(e) {
                let {
                    guild: n,
                    speakers: l,
                    speakerCount: i,
                    className: o
                } = e, c = l.slice(0, 5), h = c.map(e => {
                    var l, i;
                    return (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.getAvatarURL(n.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, t.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, t.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.id)
                }), m = i - c.length;
                return (0, t.jsxs)("div", {
                    className: a(d.grid, o),
                    children: [h, m > 0 && (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, t.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, t.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: m
                            })
                        })]
                    })]
                })
            }
        }
    }
]);