(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66308"], {
        743087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShareIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
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
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        className: a
                    })]
                })
            }
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("689988"),
                s = n("21121"),
                i = n("162771"),
                u = n("398604"),
                a = n("322224");
            let o = {},
                r = new Set,
                d = async e => {
                    let t = u.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!r.has(e)) try {
                            await a.default.getGuildEventsForCurrentUser(e), r.add(e)
                        } catch (e) {}
                    }
                };
            class c extends l.default {
                async getGuildEventUserCounts(e, t, n) {
                    let l = n.filter(n => null == o["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
                    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== l.length) {
                        o["".concat(e, "-").concat(t)] = Date.now(), l.forEach(n => o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                        try {
                            await a.default.fetchGuildEventUserCounts(e, t, l)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return a.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    r.clear(), o = {};
                    let e = (0, s.isInMainTabsExperiment)(),
                        t = i.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = u.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    r.delete(t), delete o[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    r.delete(n), delete o[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, l = n.guild_scheduled_event, s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != l && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = u.default.getGuildScheduledEventsForGuild(t);
                    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var E = new c
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
                u = n("398604"),
                a = n("745049"),
                o = n("49111");

            function r(e, t) {
                return i.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === a.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, l.useStateFromStores)([s.default, u.default], () => {
                    let n = s.default.getChannel(e),
                        l = u.default.getGuildScheduledEvent(t);
                    return r(n, null == l ? void 0 : l.entity_type)
                }, [e, t])
            }
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return N
                },
                GuildEventInterestedButton: function() {
                    return g
                },
                GuildEventLurkerInterestedButton: function() {
                    return v
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                i = n("862337"),
                u = n("77078"),
                a = n("660279"),
                o = n("36694"),
                r = n("83900"),
                d = n("433487"),
                c = n("491920"),
                E = n("745049"),
                f = n("782340"),
                h = n("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: s
                } = e;
                return (0, l.jsx)(u.Button, {
                    className: h.button,
                    size: u.Button.Sizes.SMALL,
                    onClick: s,
                    color: u.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function N(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: a
                } = e, d = new i.Timeout, [E, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let N = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, l.jsx)(u.Tooltip, {
                    text: S(n, a),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: e => n && a ? (0, l.jsxs)(u.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, l.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), f.default.Messages.SHARE]
                    }) : (0, l.jsxs)(u.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        disabled: E,
                        look: E ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                        onClick: N,
                        children: [E ? (0, l.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, l.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), E ? f.default.Messages.COPIED : f.default.Messages.SHARE]
                    })
                })
            }

            function g(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: s,
                    ...i
                } = e, r = t && !n;
                return (0, l.jsxs)(u.Button, {
                    ...i,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: u.Button.Sizes.SMALL,
                    onClick: s,
                    color: u.Button.Colors.PRIMARY,
                    look: r ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                    disabled: n,
                    children: [r ? (0, l.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(a.default, {
                        width: 16,
                        height: 16
                    }), f.default.Messages.INDICATE_RSVP]
                })
            }

            function v(e) {
                return (0, l.jsx)(u.Tooltip, {
                    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: t => (0, l.jsx)(g, {
                        ...t,
                        ...e
                    })
                })
            }
            let L = e => null == e || e,
                S = (e, t) => L(e) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : L(t) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function I(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: s,
                    canInvite: i,
                    isChannelPublic: a = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: L,
                    onStartClick: S,
                    onInviteClick: I,
                    onEndClick: _,
                    isJoined: x = !1
                } = e, m = void 0 !== c;
                return (0, l.jsxs)("div", {
                    className: h.container,
                    children: [null != r ? (0, l.jsx)(u.Tooltip, {
                        text: f.default.Messages.MORE,
                        position: "top",
                        "aria-label": f.default.Messages.EDIT,
                        children: e => (0, l.jsx)(u.Clickable, {
                            ...e,
                            onClick: r,
                            className: h.iconButton,
                            children: (0, l.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, l.jsx)(N, {
                        onInviteClick: I,
                        canInvite: i,
                        isChannelPublic: a
                    }), t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: l
                            } = e;
                            return n ? t ? f.default.Messages.GO_TO_CHANNEL : l ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: x,
                            canJoin: m,
                            isVoiceChannel: o === E.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !m,
                        onJoinClick: c
                    }) : null, n && !t && (0, l.jsx)(v, {
                        isUserRsvped: s,
                        isUserLurking: n
                    }), !n && !t && null != L && (0, l.jsx)(g, {
                        isUserRsvped: s,
                        isUserLurking: n,
                        onRsvpClick: L
                    }), t || null == S ? null : (0, l.jsx)(u.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: S,
                        color: u.Button.Colors.GREEN,
                        children: f.default.Messages.START
                    }), t && null != _ ? (0, l.jsx)(u.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: _,
                        color: u.Button.Colors.PRIMARY,
                        children: f.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        123030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                u = n("249654"),
                a = n("446674"),
                o = n("77078"),
                r = n("272030"),
                d = n("42203"),
                c = n("305961"),
                E = n("433487"),
                f = n("398604"),
                h = n("397680"),
                C = n("393745"),
                N = n("745049"),
                g = n("49111"),
                v = n("782340"),
                L = n("157624");

            function S(e) {
                let {
                    originalScheduledStartTime: t,
                    guildEventId: s,
                    onClick: S
                } = e, I = u.default.fromTimestamp(Math.floor(t.getTime() / g.Durations.SECOND)), _ = (0, a.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(s)), x = (0, h.default)(I, null == _ ? void 0 : _.id), m = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(null == _ ? void 0 : _.guild_id)), T = (0, a.useStateFromStores)([d.default], () => d.default.getChannel(null == _ ? void 0 : _.channel_id));
                if (null == _) return null;
                let {
                    is_canceled: p = !1
                } = null != x ? x : {}, R = (null == x ? void 0 : x.scheduled_start_time) != null ? new Date(null == x ? void 0 : x.scheduled_start_time) : t, M = e => {
                    e.stopPropagation(), null != m && (0, r.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("110374").then(n.bind(n, "110374"));
                        return t => (0, l.jsx)(e, {
                            guildEventId: _.id,
                            recurrenceId: I,
                            channel: T,
                            guild: m,
                            isRecurrenceItem: !0,
                            ...t
                        })
                    })
                };
                return (0, l.jsxs)(o.ClickableContainer, {
                    className: i(L.container, {
                        [L.canceled]: p,
                        [L.clickable]: null != S
                    }),
                    onClick: e => {
                        e.stopPropagation(), !p && (null == S || S(I))
                    },
                    onContextMenu: M,
                    "aria-label": "",
                    children: [(0, l.jsx)(C.GuildEventTimeStatus, {
                        startTime: R.toISOString(),
                        status: p ? N.GuildScheduledEventStatus.CANCELED : N.GuildScheduledEventStatus.SCHEDULED,
                        eventType: _.entity_type,
                        className: L.timeStatus
                    }), p && (0, l.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: L.canceledStatus,
                        children: v.default.Messages.EVENT_CANCELED
                    }), (0, l.jsx)(o.Tooltip, {
                        text: v.default.Messages.MORE,
                        position: "top",
                        "aria-label": v.default.Messages.EDIT,
                        children: e => (0, l.jsx)(o.Clickable, {
                            ...e,
                            onClick: M,
                            className: L.iconButton,
                            children: (0, l.jsx)(E.default, {
                                width: 20,
                                height: 20,
                                className: L.icon
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
                    return h
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                i = n("414456"),
                u = n.n(i),
                a = n("249654"),
                o = n("77078"),
                r = n("933326"),
                d = n("822516"),
                c = n("123030"),
                E = n("782340"),
                f = n("849882");

            function h(e) {
                let {
                    guildId: t,
                    recurrenceRule: n,
                    guildEventId: i,
                    onClick: h,
                    hideScroller: C = !1,
                    initialStartDate: N
                } = e, [g, v] = s.useState([]);
                s.useEffect(() => {
                    if (null != n) {
                        let e = (0, d.getRRule)(n);
                        v((0, d.generateNextRecurrences)(4, e, N))
                    }
                }, [n, N]), s.useEffect(() => {
                    if (null == t) return;
                    let e = g.map(e => a.default.fromTimestamp(e.getTime()));
                    r.default.getGuildEventUserCounts(t, i, e)
                }, [i, t, g]);
                let L = s.useMemo(() => {
                    if (null == n || 0 === g.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + d.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = g[g.length - 1],
                        l = (0, d.getRRule)(n),
                        s = l.after(t);
                    return null != s && !(s > e) && !0
                }, [n, g]);
                return (0, l.jsxs)("div", {
                    className: f.recurrences,
                    children: [(0, l.jsx)(o.Heading, {
                        variant: "heading-sm/medium",
                        className: f.heading,
                        children: E.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, l.jsxs)(o.Scroller, {
                        className: u(f.scroller, {
                            [f.showScroller]: !C
                        }),
                        children: [g.map(e => (0, l.jsx)(c.default, {
                            originalScheduledStartTime: e,
                            guildEventId: i,
                            onClick: h
                        }, e.toString())), L && (0, l.jsx)(o.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == n) return;
                                let t = (0, d.getRRule)(n),
                                    l = g[g.length - 1];
                                v([...g, ...(0, d.generateNextRecurrences)(4, t, l)])
                            },
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.MIN,
                            color: o.Button.Colors.LINK,
                            className: f.button,
                            children: E.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
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
                u = n("707916"),
                a = n("782340"),
                o = n("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: r,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: E,
                    isDetailsView: f = !1,
                    isMember: h,
                    onJoinGuildClick: C,
                    guildName: N,
                    onInviteClick: g,
                    canInvite: v,
                    isChannelPublic: L
                } = e;
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [null != d ? (0, l.jsx)(s.Tooltip, {
                        text: a.default.Messages.MORE,
                        position: "top",
                        "aria-label": a.default.Messages.EDIT,
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
                    }) : null, h && (0, l.jsx)(u.GuildEventShareButton, {
                        onInviteClick: g,
                        canInvite: v,
                        isChannelPublic: L
                    }), n && !t && (0, l.jsx)(u.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n
                    }), h && !n && !t && null != c && (0, l.jsx)(u.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n,
                        onRsvpClick: c
                    }), h && !n && (!f || t) ? (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: E,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: N
                        })
                    })]
                })
            }
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("503420"),
                u = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: s = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
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
                }, i.ClockIcon, void 0, {
                    size: 20
                })
        },
        491920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("743087"),
                u = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(i),
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
                }, i.ShareIcon, void 0, {
                    size: 32
                })
        }
    }
]);