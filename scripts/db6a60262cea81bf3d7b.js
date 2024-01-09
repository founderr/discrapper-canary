(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66308"], {
        743087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShareIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
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
                    return f
                }
            }), n("222007");
            var l = n("689988"),
                s = n("21121"),
                u = n("162771"),
                i = n("398604"),
                a = n("322224");
            let o = {},
                r = new Set,
                d = async e => {
                    let t = i.default.getGuildScheduledEventsForGuild(e);
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
                        t = u.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = i.default.getGuildScheduledEventsForGuild(t);
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
                    let n = i.default.getGuildScheduledEventsForGuild(t);
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
            var f = new c
        },
        276676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                s = n("249654"),
                u = n("446674"),
                i = n("718517"),
                a = n("933326"),
                o = n("398604"),
                r = n("822516");

            function d(e, t, n) {
                let d = (0, u.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(e)),
                    [c, f] = l.useState(null != n && null != d ? (0, r.generateNextRecurrences)(4, (0, r.getRRule)(n), new Date(d.scheduled_start_time)) : []);
                l.useEffect(() => {
                    if (null == t) return;
                    let n = c.map(e => s.default.fromTimestamp(Math.floor(e.getTime() / i.default.Millis.SECOND) * i.default.Millis.SECOND));
                    a.default.getGuildEventUserCounts(t, e, n)
                }, [e, t, c]);
                let E = l.useMemo(() => {
                    if (null == n || 0 === c.length || (null == d ? void 0 : d.scheduled_start_time) == null) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + r.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = c[c.length - 1],
                        l = (0, r.getRRule)(n),
                        s = l.after(t);
                    return null != s && s <= e
                }, [n, c, null == d ? void 0 : d.scheduled_start_time]);
                return {
                    recurrenceStartTimes: c,
                    canViewMoreRecurrences: E,
                    updateRecurrenceStartTimes: () => {
                        if (null == n || null == d) return;
                        let e = (0, r.getRRule)(n),
                            t = c[c.length - 1];
                        f([...c, ...(0, r.generateNextRecurrences)(4, e, t, !0)])
                    }
                }
            }
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
                u = n("991170"),
                i = n("398604"),
                a = n("745049"),
                o = n("49111");

            function r(e, t) {
                return u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === a.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, l.useStateFromStores)([s.default, i.default], () => {
                    let n = s.default.getChannel(e),
                        l = i.default.getGuildScheduledEvent(t);
                    return r(n, null == l ? void 0 : l.entity_type)
                }, [e, t])
            }
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return v
                },
                GuildEventInterestedButton: function() {
                    return N
                },
                GuildEventLurkerInterestedButton: function() {
                    return g
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                u = n("862337"),
                i = n("77078"),
                a = n("660279"),
                o = n("36694"),
                r = n("83900"),
                d = n("433487"),
                c = n("491920"),
                f = n("745049"),
                E = n("782340"),
                h = n("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: s
                } = e;
                return (0, l.jsx)(i.Button, {
                    className: h.button,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function v(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: a
                } = e, d = new u.Timeout, [f, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let v = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, l.jsx)(i.Tooltip, {
                    text: I(n, a),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: e => n && a ? (0, l.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, l.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), E.default.Messages.SHARE]
                    }) : (0, l.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        disabled: f,
                        look: f ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                        onClick: v,
                        children: [f ? (0, l.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, l.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
                    })
                })
            }

            function N(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: s,
                    ...u
                } = e, r = t && !n;
                return (0, l.jsxs)(i.Button, {
                    ...u,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.PRIMARY,
                    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                    disabled: n,
                    children: [r ? (0, l.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(a.default, {
                        width: 16,
                        height: 16
                    }), E.default.Messages.INDICATE_RSVP]
                })
            }

            function g(e) {
                return (0, l.jsx)(i.Tooltip, {
                    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: t => (0, l.jsx)(N, {
                        ...t,
                        ...e
                    })
                })
            }
            let S = e => null == e || e,
                I = (e, t) => S(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function L(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: s,
                    canInvite: u,
                    isChannelPublic: a = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: S,
                    onStartClick: I,
                    onInviteClick: L,
                    onEndClick: _,
                    isJoined: m = !1
                } = e, x = void 0 !== c;
                return (0, l.jsxs)("div", {
                    className: h.container,
                    children: [null != r ? (0, l.jsx)(i.Tooltip, {
                        text: E.default.Messages.MORE,
                        position: "top",
                        "aria-label": E.default.Messages.EDIT,
                        children: e => (0, l.jsx)(i.Clickable, {
                            ...e,
                            onClick: r,
                            className: h.iconButton,
                            children: (0, l.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, l.jsx)(v, {
                        onInviteClick: L,
                        canInvite: u,
                        isChannelPublic: a
                    }), t && o !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: l
                            } = e;
                            return n ? t ? E.default.Messages.GO_TO_CHANNEL : l ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: m,
                            canJoin: x,
                            isVoiceChannel: o === f.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !x,
                        onJoinClick: c
                    }) : null, n && !t && (0, l.jsx)(g, {
                        isUserRsvped: s,
                        isUserLurking: n
                    }), !n && !t && null != S && (0, l.jsx)(N, {
                        isUserRsvped: s,
                        isUserLurking: n,
                        onRsvpClick: S
                    }), t || null == I ? null : (0, l.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: I,
                        color: i.Button.Colors.GREEN,
                        children: E.default.Messages.START
                    }), t && null != _ ? (0, l.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: _,
                        color: i.Button.Colors.PRIMARY,
                        children: E.default.Messages.END_EVENT
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
                u = n.n(s),
                i = n("446674"),
                a = n("77078"),
                o = n("272030"),
                r = n("42203"),
                d = n("305961"),
                c = n("433487"),
                f = n("398604"),
                E = n("397680"),
                h = n("822516"),
                C = n("393745"),
                v = n("745049"),
                N = n("782340"),
                g = n("157624");

            function S(e) {
                let {
                    recurrenceId: t,
                    originalScheduledStartTime: s,
                    guildEventId: S,
                    onClick: I,
                    isActive: L
                } = e, _ = (0, i.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(S)), m = (0, E.default)(t, null == _ ? void 0 : _.id), x = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == _ ? void 0 : _.guild_id)), T = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == _ ? void 0 : _.channel_id));
                if (null == _) return null;
                let {
                    is_canceled: p = !1
                } = null != m ? m : {}, R = (null == m ? void 0 : m.scheduled_start_time) != null ? new Date(null == m ? void 0 : m.scheduled_start_time) : s, M = (0, h.getNextRecurrenceIdInEvent)(_), B = p ? v.GuildScheduledEventStatus.CANCELED : v.GuildScheduledEventStatus.SCHEDULED;
                M === t && (B = _.status);
                let G = e => {
                    e.stopPropagation(), null != x && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("110374").then(n.bind(n, "110374"));
                        return n => (0, l.jsx)(e, {
                            guildEventId: _.id,
                            recurrenceId: t,
                            channel: T,
                            guild: x,
                            isRecurrenceItem: !0,
                            ...n
                        })
                    })
                };
                return (0, l.jsxs)(a.ClickableContainer, {
                    className: u(g.container, {
                        [g.canceled]: p,
                        [g.clickable]: null != I,
                        [g.active]: L
                    }),
                    onClick: e => {
                        e.stopPropagation(), !p && (null == I || I(t))
                    },
                    onContextMenu: G,
                    "aria-label": "",
                    children: [(0, l.jsx)(C.GuildEventTimeStatus, {
                        startTime: R.toISOString(),
                        status: B,
                        eventType: _.entity_type,
                        guildEventId: _.id,
                        recurrenceId: t,
                        className: g.timeStatus
                    }), p && (0, l.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: g.canceledStatus,
                        children: N.default.Messages.EVENT_CANCELED
                    }), (0, l.jsx)(a.Tooltip, {
                        text: N.default.Messages.MORE,
                        position: "top",
                        "aria-label": N.default.Messages.EDIT,
                        children: e => (0, l.jsx)(a.Clickable, {
                            ...e,
                            onClick: G,
                            className: g.iconButton,
                            children: (0, l.jsx)(c.default, {
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
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                u = n.n(s),
                i = n("249654"),
                a = n("77078"),
                o = n("276676"),
                r = n("123030"),
                d = n("782340"),
                c = n("849882");

            function f(e) {
                let {
                    guildId: t,
                    recurrenceRule: n,
                    guildEventId: s,
                    onRecurrenceClick: f,
                    hideScroller: E = !1,
                    activeRecurrenceId: h
                } = e, {
                    recurrenceStartTimes: C,
                    canViewMoreRecurrences: v,
                    updateRecurrenceStartTimes: N
                } = (0, o.default)(s, t, n);
                return (0, l.jsxs)("div", {
                    className: c.recurrences,
                    children: [(0, l.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        className: c.heading,
                        children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, l.jsxs)(a.Scroller, {
                        className: u(c.scroller, {
                            [c.showScroller]: !E
                        }),
                        children: [C.map(e => {
                            let t = i.default.fromTimestamp(e.getTime());
                            return (0, l.jsx)(r.default, {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: s,
                                onClick: f,
                                isActive: t === h
                            }, t)
                        }), v && (0, l.jsx)(a.Button, {
                            grow: !1,
                            onClick: e => {
                                e.stopPropagation(), N()
                            },
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.MIN,
                            color: a.Button.Colors.LINK,
                            className: c.button,
                            children: d.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
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
                u = n("433487"),
                i = n("707916"),
                a = n("782340"),
                o = n("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: r,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: f,
                    isDetailsView: E = !1,
                    isMember: h,
                    onJoinGuildClick: C,
                    guildName: v,
                    onInviteClick: N,
                    canInvite: g,
                    isChannelPublic: S
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
                            children: (0, l.jsx)(u.default, {
                                width: 20,
                                height: 20,
                                className: o.icon
                            })
                        })
                    }) : null, h && (0, l.jsx)(i.GuildEventShareButton, {
                        onInviteClick: N,
                        canInvite: g,
                        isChannelPublic: S
                    }), n && !t && (0, l.jsx)(i.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n
                    }), h && !n && !t && null != c && (0, l.jsx)(i.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: n,
                        onRsvpClick: c
                    }), h && !n && (!E || t) ? (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: f,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, l.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: v
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
                u = n("503420"),
                i = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: s = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: u,
                                fill: s,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, u.ClockIcon, void 0, {
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
                u = n("743087"),
                i = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(u),
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
                }, u.ShareIcon, void 0, {
                    size: 32
                })
        }
    }
]);