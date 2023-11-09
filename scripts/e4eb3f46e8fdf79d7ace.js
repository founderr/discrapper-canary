(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65961"], {
        743087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShareIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Z",
                        className: u
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        className: u
                    })]
                })
            }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("862205");
            let s = (0, l.createExperiment)({
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
            var i = s
        },
        613767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelPublic: function() {
                    return r
                },
                useIsChannelPublic: function() {
                    return d
                }
            });
            var l = n("446674"),
                s = n("42203"),
                i = n("991170"),
                a = n("398604"),
                u = n("745049"),
                o = n("49111");

            function r(e, t) {
                return i.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === u.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, l.useStateFromStores)([s.default, a.default], () => {
                    let n = s.default.getChannel(e),
                        l = a.default.getGuildScheduledEvent(t);
                    return r(n, null == l ? void 0 : l.entity_type)
                }, [e, t])
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return s
                },
                default: function() {
                    return D
                }
            });
            var l, s, i = n("37983"),
                a = n("884691"),
                u = n("414456"),
                o = n.n(u),
                r = n("446674"),
                d = n("77078"),
                c = n("812204"),
                h = n("685665"),
                f = n("656038"),
                E = n("419830"),
                C = n("817963"),
                N = n("957255"),
                v = n("476263"),
                x = n("718550"),
                g = n("651072"),
                m = n("1339"),
                I = n("613767"),
                L = n("822516"),
                j = n("707916"),
                T = n("255050"),
                _ = n("400271"),
                S = n("427554"),
                p = n("644189"),
                R = n("29913"),
                M = n("745049"),
                k = n("49111"),
                B = n("782340"),
                A = n("955614");

            function b(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, C.useManageResourcePermissions)(t), s = (0, r.useStateFromStores)([N.default], () => !t.isGuildVocal() || N.default.can(k.Permissions.CONNECT, t), [t]), u = a.useMemo(() => (0, f.default)(t), [t]), c = (0, E.getChannelIconComponent)(t);
                return (0, i.jsx)(d.Tooltip, {
                    text: B.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !s && null != n,
                    children: e => (0, i.jsxs)(d.Clickable, {
                        ...e,
                        className: o(A.inline, A.channelContainer, {
                            [A.channelContainerEnabled]: s && null != n,
                            [A.channelContainerDisabled]: !s && null != n
                        }),
                        onClick: n,
                        children: [(0, i.jsx)(d.Tooltip, {
                            text: B.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && u && s && null != n,
                            children: e => null != c ? (0, i.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: A.icon
                            }) : null
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: A.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: s,
                    location: a,
                    isExternal: u,
                    isHub: r
                } = e;
                if (r) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: A.inline,
                    children: [(0, i.jsx)(v.default, {
                        className: A.guildIcon,
                        size: v.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, i.jsx)(b, {
                    channel: n,
                    onClick: l
                }) : (0, i.jsxs)(d.Clickable, {
                    className: A.inline,
                    onClick: s,
                    children: [(0, i.jsx)(x.default, {
                        height: 20,
                        width: 20,
                        className: o(A.channelContainer, A.icon)
                    }), (0, i.jsx)(d.Text, {
                        className: u ? A.externalLocation : A.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, m.guildEventDetailsParser)(a, !0)
                    })]
                })
            }

            function D(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: s,
                    creator: a,
                    name: u,
                    entityType: r,
                    description: f,
                    imageLocation: E = 0,
                    imageSource: C,
                    isActive: N,
                    isUserLurking: v,
                    isJoined: x = !1,
                    isMember: m = !1,
                    isHub: k = !1,
                    speakers: B,
                    speakerCount: b,
                    rsvped: D,
                    canInvite: O,
                    location: V,
                    truncate: U,
                    onContextMenu: P,
                    onJoinClick: w,
                    onJoinGuildClick: H,
                    onGoToGuildClick: y,
                    onRsvpClick: z,
                    onStartClick: Y,
                    onInviteClick: F,
                    onEndClick: J,
                    onClick: Z,
                    isNew: K,
                    guildEventId: W,
                    eventPreview: X,
                    recurrenceRule: Q,
                    recurrenceId: q
                } = e, $ = (0, I.isChannelPublic)(s, r), ee = r === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: et
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: en
                } = g.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: et[0]
                }, {
                    autoTrackExposure: !1
                }), el = [];
                if (null != Q) {
                    let e = (0, L.getRRule)(Q);
                    el = (0, L.generateNextRecurrences)(4, e)
                }
                let es = en && el.length > 0;
                return (0, i.jsxs)(d.ClickableContainer, {
                    "aria-label": u,
                    onClick: () => null == Z ? void 0 : Z(),
                    onContextMenu: P,
                    className: o(A.card, {
                        [A.joined]: x,
                        [A.lurking]: v
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: o(A.padding, {
                            [A.isRecurring]: es
                        }),
                        children: [0 === E && (0, i.jsx)(T.default, {
                            source: C
                        }), (0, i.jsx)(_.default, {
                            creator: a,
                            name: u,
                            description: f,
                            imageSource: 1 === E ? C : null,
                            truncate: U,
                            guildId: null == l ? void 0 : l.id,
                            isHub: k,
                            isNew: K,
                            guildEventId: W,
                            eventPreview: X,
                            recurrenceId: q
                        }), N && null != l && null != B && b > 0 && (0, i.jsx)(R.default, {
                            guild: l,
                            speakers: B,
                            speakerCount: b,
                            className: A.spacing
                        }), (0, i.jsx)("hr", {
                            className: A.divider
                        }), (0, i.jsxs)("div", {
                            className: o(A.inline, A.footer),
                            children: [(0, i.jsx)(G, {
                                guild: l,
                                channel: s,
                                onJoinClick: w,
                                handleLocationClick: ee ? e => e.stopPropagation() : void 0,
                                location: V,
                                isExternal: ee,
                                isHub: k
                            }), k ? (0, i.jsx)(p.default, {
                                isActive: N,
                                isUserLurking: v,
                                isMember: m,
                                rsvped: D,
                                onRsvpClick: z,
                                onJoinGuildClick: H,
                                onGoToGuildClick: y,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: O,
                                isChannelPublic: $,
                                onInviteClick: F
                            }) : (0, i.jsx)(j.default, {
                                entityType: r,
                                isJoined: x,
                                isActive: N,
                                isUserLurking: v,
                                rsvped: D,
                                canInvite: O,
                                isChannelPublic: $,
                                onContextMenu: P,
                                onJoinClick: w,
                                onRsvpClick: z,
                                onStartClick: Y,
                                onInviteClick: F,
                                onEndClick: J
                            })]
                        }), es && (0, i.jsx)("hr", {
                            className: A.divider
                        })]
                    }), es && (0, i.jsx)(S.default, {
                        recurrenceRule: Q,
                        guildEventId: W,
                        onClick: Z
                    })]
                })
            }(l = s || (s = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return N
                },
                GuildEventInterestedButton: function() {
                    return v
                },
                GuildEventLurkerInterestedButton: function() {
                    return x
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                i = n("862337"),
                a = n("77078"),
                u = n("660279"),
                o = n("36694"),
                r = n("83900"),
                d = n("433487"),
                c = n("491920"),
                h = n("745049"),
                f = n("782340"),
                E = n("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: s
                } = e;
                return (0, l.jsx)(a.Button, {
                    className: E.button,
                    size: a.Button.Sizes.SMALL,
                    onClick: s,
                    color: a.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function N(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: u
                } = e, d = new i.Timeout, [h, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let N = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, l.jsx)(a.Tooltip, {
                    text: m(n, u),
                    position: "top",
                    tooltipClassName: E.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: e => n && u ? (0, l.jsxs)(a.Button, {
                        ...e,
                        className: E.button,
                        innerClassName: E.innerButton,
                        color: a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, l.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), f.default.Messages.SHARE]
                    }) : (0, l.jsxs)(a.Button, {
                        ...e,
                        className: E.button,
                        innerClassName: E.innerButton,
                        color: a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        disabled: h,
                        look: h ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
                        onClick: N,
                        children: [h ? (0, l.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, l.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), h ? f.default.Messages.COPIED : f.default.Messages.SHARE]
                    })
                })
            }

            function v(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: s,
                    ...i
                } = e, r = t && !n;
                return (0, l.jsxs)(a.Button, {
                    ...i,
                    className: E.button,
                    innerClassName: E.innerButton,
                    size: a.Button.Sizes.SMALL,
                    onClick: s,
                    color: a.Button.Colors.PRIMARY,
                    look: r ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
                    disabled: n,
                    children: [r ? (0, l.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(u.default, {
                        width: 16,
                        height: 16
                    }), f.default.Messages.INDICATE_RSVP]
                })
            }

            function x(e) {
                return (0, l.jsx)(a.Tooltip, {
                    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: E.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: t => (0, l.jsx)(v, {
                        ...t,
                        ...e
                    })
                })
            }
            let g = e => null == e || e,
                m = (e, t) => g(e) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : g(t) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function I(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: s,
                    canInvite: i,
                    isChannelPublic: u = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: g,
                    onStartClick: m,
                    onInviteClick: I,
                    onEndClick: L,
                    isJoined: j = !1
                } = e, T = void 0 !== c;
                return (0, l.jsxs)("div", {
                    className: E.container,
                    children: [null != r ? (0, l.jsx)(a.Tooltip, {
                        text: f.default.Messages.MORE,
                        position: "top",
                        "aria-label": f.default.Messages.EDIT,
                        children: e => (0, l.jsx)(a.Clickable, {
                            ...e,
                            onClick: r,
                            className: E.iconButton,
                            children: (0, l.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: E.icon
                            })
                        })
                    }) : null, (0, l.jsx)(N, {
                        onInviteClick: I,
                        canInvite: i,
                        isChannelPublic: u
                    }), t && o !== h.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: l
                            } = e;
                            return n ? t ? f.default.Messages.GO_TO_CHANNEL : l ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: j,
                            canJoin: T,
                            isVoiceChannel: o === h.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !T,
                        onJoinClick: c
                    }) : null, n && !t && (0, l.jsx)(x, {
                        isUserRsvped: s,
                        isUserLurking: n
                    }), !n && !t && null != g && (0, l.jsx)(v, {
                        isUserRsvped: s,
                        isUserLurking: n,
                        onRsvpClick: g
                    }), t || null == m ? null : (0, l.jsx)(a.Button, {
                        className: E.button,
                        innerClassName: E.innerButton,
                        size: a.Button.Sizes.SMALL,
                        onClick: m,
                        color: a.Button.Colors.GREEN,
                        children: f.default.Messages.START
                    }), t && null != L ? (0, l.jsx)(a.Button, {
                        className: E.button,
                        innerClassName: E.innerButton,
                        size: a.Button.Sizes.SMALL,
                        onClick: L,
                        color: a.Button.Colors.PRIMARY,
                        children: f.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        123030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("249654"),
                u = n("446674"),
                o = n("77078"),
                r = n("272030"),
                d = n("42203"),
                c = n("305961"),
                h = n("433487"),
                f = n("398604"),
                E = n("397680"),
                C = n("393745"),
                N = n("745049"),
                v = n("49111"),
                x = n("782340"),
                g = n("157624");

            function m(e) {
                let {
                    originalScheduledStartTime: t,
                    guildEventId: s,
                    onClick: m
                } = e, I = a.default.fromTimestamp(Math.floor(t.getTime() / v.Durations.SECOND)), L = (0, u.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(s)), j = (0, E.default)(I, null == L ? void 0 : L.id), T = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(null == L ? void 0 : L.guild_id)), _ = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(null == L ? void 0 : L.channel_id));
                if (null == L) return null;
                let {
                    is_canceled: S = !1
                } = null != j ? j : {}, p = (null == j ? void 0 : j.scheduled_start_time) != null ? new Date(null == j ? void 0 : j.scheduled_start_time) : t, R = e => {
                    e.stopPropagation(), null != T && (0, r.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("110374").then(n.bind(n, "110374"));
                        return t => (0, l.jsx)(e, {
                            guildEventId: L.id,
                            recurrenceId: I,
                            channel: _,
                            guild: T,
                            ...t
                        })
                    })
                };
                return (0, l.jsxs)(o.ClickableContainer, {
                    className: i(g.container, {
                        [g.canceled]: S
                    }),
                    onClick: e => {
                        e.stopPropagation(), !S && (null == m || m(I))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, l.jsx)(C.GuildEventTimeStatus, {
                        startTime: p.toISOString(),
                        status: S ? N.GuildScheduledEventStatus.CANCELED : N.GuildScheduledEventStatus.SCHEDULED,
                        eventType: L.entity_type,
                        className: g.timeStatus
                    }), S && (0, l.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: g.canceledStatus,
                        children: x.default.Messages.EVENT_CANCELED
                    }), (0, l.jsx)(o.Tooltip, {
                        text: x.default.Messages.MORE,
                        position: "top",
                        "aria-label": x.default.Messages.EDIT,
                        children: e => (0, l.jsx)(o.Clickable, {
                            ...e,
                            onClick: R,
                            className: g.iconButton,
                            children: (0, l.jsx)(h.default, {
                                width: 20,
                                height: 20,
                                className: g.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("822516"),
                u = n("123030"),
                o = n("782340"),
                r = n("849882");

            function d(e) {
                let {
                    recurrenceRule: t,
                    guildEventId: n,
                    onClick: d
                } = e, [c, h] = s.useState([]);
                s.useEffect(() => {
                    if (null != t) {
                        let e = (0, a.getRRule)(t);
                        h((0, a.generateNextRecurrences)(4, e))
                    }
                }, [t]);
                let f = s.useMemo(() => {
                    if (null == t || 0 === c.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + a.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let n = c[c.length - 1],
                        l = (0, a.getRRule)(t),
                        s = l.after(n);
                    return null != s && !(s > e) && !0
                }, [t, c]);
                return (0, l.jsxs)("div", {
                    className: r.recurrences,
                    children: [(0, l.jsx)(i.Heading, {
                        variant: "heading-sm/medium",
                        className: r.heading,
                        children: o.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, l.jsxs)(i.Scroller, {
                        className: r.scroller,
                        children: [c.map(e => (0, l.jsx)(u.default, {
                            originalScheduledStartTime: e,
                            guildEventId: n,
                            onClick: d
                        }, e.toString())), f && (0, l.jsx)(i.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == t) return;
                                let n = (0, a.getRRule)(t),
                                    l = c[c.length - 1];
                                h([...c, ...(0, a.generateNextRecurrences)(4, n, l)])
                            },
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.MIN,
                            color: i.Button.Colors.LINK,
                            className: r.button,
                            children: o.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        644189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("433487"),
                a = n("707916"),
                u = n("782340"),
                o = n("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: r,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: h,
                    isDetailsView: f = !1,
                    isMember: E,
                    onJoinGuildClick: C,
                    guildName: N,
                    onInviteClick: v,
                    canInvite: x,
                    isChannelPublic: g
                } = e;
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [null != d ? (0, l.jsx)(s.Tooltip, {
                        text: u.default.Messages.MORE,
                        position: "top",
                        "aria-label": u.default.Messages.EDIT,
                        children: e => (0, l.jsx)(s.Clickable, {
                            ...e,
                            onClick: d,
                            className: o.iconButton,
                            children: (0, l.jsx)(i.default, {
                                width: 20,
                                height: 20,
                                className: o.icon
                            })
                        })
                    }) : null, E && (0, l.jsx)(a.GuildEventShareButton, {
                        onInviteClick: v,
                        canInvite: x,
                        isChannelPublic: g
                    }), n && !t && (0, l.jsx)(a.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n
                    }), E && !n && !t && null != c && (0, l.jsx)(a.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n,
                        onRsvpClick: c
                    }), E && !n && (!f || t) ? (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: h,
                        color: s.Button.Colors.GREEN,
                        children: u.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, E ? null : (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.GREEN,
                        children: u.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: N
                        })
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("77078"),
                u = n("849467"),
                o = n("782340"),
                r = n("130221");

            function d(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: s,
                    className: d
                } = e, c = n.slice(0, 5), h = c.map(e => {
                    var n, s;
                    return (0, l.jsxs)("div", {
                        className: r.speakerContainer,
                        children: [(0, l.jsx)(a.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: a.AvatarSizes.SIZE_20,
                            className: r.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: r.textInGridContainer,
                            children: (0, l.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: r.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (s = e.user) || void 0 === s ? void 0 : s.id)
                }), f = s - c.length;
                return (0, l.jsxs)("div", {
                    className: i(r.grid, d),
                    children: [h, f > 0 && (0, l.jsxs)("div", {
                        className: r.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: r.iconMicrophone,
                            children: (0, l.jsx)(u.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: r.textInGrid,
                            children: o.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: f
                            })
                        })]
                    })]
                })
            }
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("503420"),
                a = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: s = "currentColor",
                        foreground: i,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: i,
                                fill: s,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, i.ClockIcon)
        },
        491920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("743087"),
                a = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: s
                        })
                    })
                }, i.ShareIcon)
        }
    }
]);