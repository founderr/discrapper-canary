(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66308"], {
        743087: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShareIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                u = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, u.default)(o),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M13 16V5.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7078 2.29361L12.7005 2.2864C12.5201 2.10925 12.2728 2 12 2C11.8644 2 11.7351 2.02699 11.6172 2.07588C11.502 2.12357 11.3938 2.19374 11.2995 2.2864L11.2922 2.29361L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L11 5.41421V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, n.jsx)("path", {
                        d: "M4 15C4 14.4477 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12H5C3.34315 12 2 13.3431 2 15V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V15C22 13.3431 20.6569 12 19 12H17C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V15Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    })]
                })
            }
        },
        933326: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            }), l("222007");
            var n = l("689988"),
                s = l("21121"),
                u = l("162771"),
                i = l("398604"),
                a = l("322224");
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
            class c extends n.default {
                async getGuildEventUserCounts(e, t, l) {
                    let n = l.filter(l => null == o["".concat(e, "-").concat(t, "-").concat(l)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(l)] > 18e5);
                    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== n.length) {
                        o["".concat(e, "-").concat(t)] = Date.now(), n.forEach(l => o["".concat(e, "-").concat(t, "-").concat(l)] = Date.now());
                        try {
                            await a.default.fetchGuildEventUserCounts(e, t, n)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, l) {
                    return a.default.fetchUsersForGuildEvent(e, t, l)
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
                    } = e, l = t.id;
                    r.delete(l), delete o[l]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: l
                    } = e, n = l.guild_scheduled_event, s = null === (t = l.guild) || void 0 === t ? void 0 : t.id;
                    null != n && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let l = i.default.getGuildScheduledEventsForGuild(t);
                    l.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
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
        613767: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                isChannelPublic: function() {
                    return r
                },
                useIsChannelPublic: function() {
                    return d
                }
            });
            var n = l("446674"),
                s = l("42203"),
                u = l("991170"),
                i = l("398604"),
                a = l("745049"),
                o = l("49111");

            function r(e, t) {
                return u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === a.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, n.useStateFromStores)([s.default, i.default], () => {
                    let l = s.default.getChannel(e),
                        n = i.default.getGuildScheduledEvent(t);
                    return r(l, null == n ? void 0 : n.entity_type)
                }, [e, t])
            }
        },
        707916: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("862337"),
                i = l("77078"),
                a = l("660279"),
                o = l("36694"),
                r = l("83900"),
                d = l("433487"),
                c = l("491920"),
                E = l("745049"),
                f = l("782340"),
                h = l("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: l,
                    onJoinClick: s
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: h.button,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.GREEN,
                    disabled: l,
                    children: t
                })
            }

            function N(e) {
                let {
                    onInviteClick: t,
                    canInvite: l,
                    isChannelPublic: a
                } = e, d = new u.Timeout, [E, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let N = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, n.jsx)(i.Tooltip, {
                    text: S(l, a),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: e => l && a ? (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), f.default.Messages.SHARE]
                    }) : (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        disabled: E,
                        look: E ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                        onClick: N,
                        children: [E ? (0, n.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, n.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), E ? f.default.Messages.COPIED : f.default.Messages.SHARE]
                    })
                })
            }

            function g(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: l,
                    onRsvpClick: s,
                    ...u
                } = e, r = t && !l;
                return (0, n.jsxs)(i.Button, {
                    ...u,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.PRIMARY,
                    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                    disabled: l,
                    children: [r ? (0, n.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, n.jsx)(a.default, {
                        width: 16,
                        height: 16
                    }), f.default.Messages.INDICATE_RSVP]
                })
            }

            function v(e) {
                return (0, n.jsx)(i.Tooltip, {
                    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: t => (0, n.jsx)(g, {
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
                    isUserLurking: l,
                    rsvped: s,
                    canInvite: u,
                    isChannelPublic: a = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: L,
                    onStartClick: S,
                    onInviteClick: I,
                    onEndClick: _,
                    isJoined: m = !1
                } = e, x = void 0 !== c;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [null != r ? (0, n.jsx)(i.Tooltip, {
                        text: f.default.Messages.MORE,
                        position: "top",
                        "aria-label": f.default.Messages.EDIT,
                        children: e => (0, n.jsx)(i.Clickable, {
                            ...e,
                            onClick: r,
                            className: h.iconButton,
                            children: (0, n.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, n.jsx)(N, {
                        onInviteClick: I,
                        canInvite: u,
                        isChannelPublic: a
                    }), t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, n.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: l,
                                isVoiceChannel: n
                            } = e;
                            return l ? t ? f.default.Messages.GO_TO_CHANNEL : n ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: m,
                            canJoin: x,
                            isVoiceChannel: o === E.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !x,
                        onJoinClick: c
                    }) : null, l && !t && (0, n.jsx)(v, {
                        isUserRsvped: s,
                        isUserLurking: l
                    }), !l && !t && null != L && (0, n.jsx)(g, {
                        isUserRsvped: s,
                        isUserLurking: l,
                        onRsvpClick: L
                    }), t || null == S ? null : (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: S,
                        color: i.Button.Colors.GREEN,
                        children: f.default.Messages.START
                    }), t && null != _ ? (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: _,
                        color: i.Button.Colors.PRIMARY,
                        children: f.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        123030: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                u = l.n(s),
                i = l("446674"),
                a = l("77078"),
                o = l("272030"),
                r = l("42203"),
                d = l("305961"),
                c = l("433487"),
                E = l("398604"),
                f = l("397680"),
                h = l("393745"),
                C = l("745049"),
                N = l("782340"),
                g = l("157624");

            function v(e) {
                let {
                    recurrenceId: t,
                    originalScheduledStartTime: s,
                    guildEventId: v,
                    onClick: L,
                    isActive: S
                } = e, I = (0, i.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(v)), _ = (0, f.default)(t, null == I ? void 0 : I.id), m = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == I ? void 0 : I.guild_id)), x = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == I ? void 0 : I.channel_id));
                if (null == I) return null;
                let {
                    is_canceled: T = !1
                } = null != _ ? _ : {}, M = (null == _ ? void 0 : _.scheduled_start_time) != null ? new Date(null == _ ? void 0 : _.scheduled_start_time) : s, p = e => {
                    e.stopPropagation(), null != m && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return l => (0, n.jsx)(e, {
                            guildEventId: I.id,
                            recurrenceId: t,
                            channel: x,
                            guild: m,
                            isRecurrenceItem: !0,
                            ...l
                        })
                    })
                };
                return (0, n.jsxs)(a.ClickableContainer, {
                    className: u(g.container, {
                        [g.canceled]: T,
                        [g.clickable]: null != L,
                        [g.active]: S
                    }),
                    onClick: e => {
                        e.stopPropagation(), !T && (null == L || L(t))
                    },
                    onContextMenu: p,
                    "aria-label": "",
                    children: [(0, n.jsx)(h.GuildEventTimeStatus, {
                        startTime: M.toISOString(),
                        status: T ? C.GuildScheduledEventStatus.CANCELED : C.GuildScheduledEventStatus.SCHEDULED,
                        eventType: I.entity_type,
                        guildEventId: I.id,
                        recurrenceId: t,
                        className: g.timeStatus
                    }), T && (0, n.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: g.canceledStatus,
                        children: N.default.Messages.EVENT_CANCELED
                    }), (0, n.jsx)(a.Tooltip, {
                        text: N.default.Messages.MORE,
                        position: "top",
                        "aria-label": N.default.Messages.EDIT,
                        children: e => (0, n.jsx)(a.Clickable, {
                            ...e,
                            onClick: p,
                            className: g.iconButton,
                            children: (0, n.jsx)(c.default, {
                                width: 20,
                                height: 20,
                                className: g.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("414456"),
                i = l.n(u),
                a = l("249654"),
                o = l("446674"),
                r = l("77078"),
                d = l("718517"),
                c = l("933326"),
                E = l("398604"),
                f = l("822516"),
                h = l("123030"),
                C = l("782340"),
                N = l("849882");

            function g(e) {
                let {
                    guildId: t,
                    recurrenceRule: l,
                    guildEventId: u,
                    onRecurrenceClick: g,
                    hideScroller: v = !1,
                    activeRecurrenceId: L
                } = e, S = (0, o.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(u)), [I, _] = s.useState(null != l && null != S ? (0, f.generateNextRecurrences)(4, (0, f.getRRule)(l), new Date(S.scheduled_start_time)) : []);
                s.useEffect(() => {
                    if (null == t) return;
                    let e = I.map(e => a.default.fromTimestamp(Math.floor(e.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND));
                    c.default.getGuildEventUserCounts(t, u, e)
                }, [u, t, I]);
                let m = s.useMemo(() => {
                    if (null == l || 0 === I.length || (null == S ? void 0 : S.scheduled_start_time) == null) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + f.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = I[I.length - 1],
                        n = (0, f.getRRule)(l),
                        s = n.after(t);
                    return null != s && !(s > e) && !0
                }, [l, I, null == S ? void 0 : S.scheduled_start_time]);
                return (0, n.jsxs)("div", {
                    className: N.recurrences,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-sm/medium",
                        className: N.heading,
                        children: C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, n.jsxs)(r.Scroller, {
                        className: i(N.scroller, {
                            [N.showScroller]: !v
                        }),
                        children: [I.map(e => {
                            let t = a.default.fromTimestamp(Math.floor(e.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND);
                            return (0, n.jsx)(h.default, {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: u,
                                onClick: g,
                                isActive: t === L
                            }, t)
                        }), m && (0, n.jsx)(r.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == l || null == S) return;
                                let t = (0, f.getRRule)(l),
                                    n = I[I.length - 1];
                                _([...I, ...(0, f.generateNextRecurrences)(4, t, n, !0)])
                            },
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.MIN,
                            color: r.Button.Colors.LINK,
                            className: N.button,
                            children: C.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        644189: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                u = l("433487"),
                i = l("707916"),
                a = l("782340"),
                o = l("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: l,
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
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [null != d ? (0, n.jsx)(s.Tooltip, {
                        text: a.default.Messages.MORE,
                        position: "top",
                        "aria-label": a.default.Messages.EDIT,
                        children: e => (0, n.jsx)(s.Clickable, {
                            ...e,
                            onClick: d,
                            className: o.iconButton,
                            children: (0, n.jsx)(u.default, {
                                width: 20,
                                height: 20,
                                className: o.icon
                            })
                        })
                    }) : null, h && (0, n.jsx)(i.GuildEventShareButton, {
                        onInviteClick: g,
                        canInvite: v,
                        isChannelPublic: L
                    }), l && !t && (0, n.jsx)(i.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l
                    }), h && !l && !t && null != c && (0, n.jsx)(i.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l,
                        onRsvpClick: c
                    }), h && !l && (!f || t) ? (0, n.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: E,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, n.jsx)(s.Button, {
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
        93393: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                u = l("503420"),
                i = l("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: l = 20,
                        color: s = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: l,
                        viewBox: "0 0 20 20",
                        children: (0, n.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, n.jsx)("path", {
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
        491920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                u = l("743087"),
                i = l("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: l = 32,
                        color: s = "currentColor",
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
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