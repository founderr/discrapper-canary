(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75939"], {
        75651: function(e, l, n) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, l, n) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return u
                }
            });
            var t = n("884691"),
                s = n("446674"),
                i = n("851387"),
                a = n("697218");

            function u(e) {
                let l = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return t.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, l]), l
            }
        },
        397680: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return a
                }
            });
            var t = n("446674"),
                s = n("398604");

            function i(e, l) {
                let n = (0, t.useStateFromStoresArray)([s.default], () => {
                    var e, n;
                    return null !== (n = null === (e = s.default.getGuildScheduledEvent(l)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return u(n, e)
            }

            function a(e, l) {
                var n, t;
                let i = null !== (t = null === (n = s.default.getGuildScheduledEvent(l)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== t ? t : [];
                return u(i, e)
            }

            function u(e, l) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === l);
                return n
            }
        },
        466148: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var t = n("627445"),
                s = n.n(t),
                i = n("446674"),
                a = n("398604"),
                u = n("397680"),
                r = n("822516");

            function d(e, l, n) {
                var t;
                let d = null !== (t = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== t ? t : n;
                s(null != d, "Event must be defined"), l = null != l ? l : (0, r.getNextRecurrenceIdInEvent)(d);
                let o = (0, u.default)(l, e);
                return c(d, o, l)
            }

            function o(e, l) {
                let n = (0, u.getEventException)(l, e.id);
                return c(e, n, l)
            }

            function c(e, l, n) {
                let t = null != e.recurrence_rule ? (0, r.getRRule)(e.recurrence_rule) : null;
                if (null == t || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let s = (0, r.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: i,
                        endDate: a
                    } = (0, r.getScheduleForRecurrenceWithException)(s, l);
                return {
                    startTime: i.toDate(),
                    endTime: null == a ? void 0 : a.toDate()
                }
            }
        },
        914169: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                createEventLocationClickHandler: function() {
                    return U
                },
                default: function() {
                    return V
                }
            });
            var t = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                u = n("446674"),
                r = n("77078"),
                d = n("970728"),
                o = n("987317"),
                c = n("716214"),
                E = n("813006"),
                v = n("42203"),
                m = n("305961"),
                h = n("580357"),
                N = n("174622"),
                f = n("660279"),
                g = n("36694"),
                C = n("374021"),
                p = n("398604"),
                I = n("1339"),
                x = n("882550"),
                S = n("189443"),
                _ = n("822516"),
                R = n("93550"),
                T = n("255050"),
                L = n("400271"),
                j = n("931874"),
                D = n("936965"),
                B = n("745049"),
                G = n("782340"),
                k = n("336179");
            let y = (e, l) => n => {
                    n.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
                },
                A = (e, l) => n => {
                    let t = v.default.getChannel(e.channel_id);
                    null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
                },
                U = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return A(e, l);
                        case B.GuildScheduledEventEntityTypes.VOICE:
                            return y(e, l)
                    }
                    return () => {}
                },
                b = (e, l) => l && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                M = s.memo(function(e) {
                    var l;
                    let {
                        guild: n,
                        guildScheduledEvent: i,
                        channel: a,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        return null == n ? null : null !== (e = m.default.getGuild(n.id)) && void 0 !== e ? e : new E.default(n)
                    }, [n]), v = (0, j.getLocationDataForEvent)(i, a), f = s.useCallback(e => {
                        o && null != i && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(i))
                    }, [o, i]), g = s.useCallback(e => {
                        U(i)(e)
                    }, [i]);
                    if (null == c) return null;
                    let C = null == v ? void 0 : v.IconComponent,
                        p = (0, t.jsxs)(t.Fragment, {
                            children: [null != C && (0, t.jsx)(C, {
                                width: 16,
                                height: 16,
                                className: k.channelIcon
                            }), (0, t.jsx)(r.Text, {
                                className: k.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, I.guildEventDetailsParser)(null !== (l = null == v ? void 0 : v.locationName) && void 0 !== l ? l : "", !0)
                            })]
                        });
                    return (0, t.jsxs)("div", {
                        className: k.inviteDetailsContainer,
                        children: [(0, t.jsx)(N.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, t.jsxs)("div", {
                            className: k.verticalContainer,
                            children: [(0, t.jsxs)("div", {
                                className: k.guildChannelInfoContainer,
                                children: [(0, t.jsx)(h.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: r.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: k.guildBadge
                                }), (0, t.jsx)(r.Clickable, {
                                    className: k.guildNameClickable,
                                    onClick: f,
                                    children: (0, t.jsx)(r.Heading, {
                                        className: o ? k.guildNameLinkable : k.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, t.jsx)("div", {
                                className: k.channelInfoContainer,
                                children: b(i, o) ? (0, t.jsx)(r.Clickable, {
                                    className: k.channelLocationLink,
                                    onClick: g,
                                    children: p
                                }) : p
                            })]
                        })]
                    })
                }),
                P = s.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: n,
                        recurrenceId: s,
                        isActive: i,
                        isEnded: a,
                        isMember: d,
                        isExternal: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (0, u.useStateFromStores)([p.default], () => p.default.isInterestedInEventRecurrence(n, s), [n, s]), m = e => {
                        e.stopPropagation(), d ? i && E() : c()
                    };
                    return d ? i ? (0, t.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: e => {
                            !o && m(e)
                        },
                        color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
                        children: o ? G.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : G.default.Messages.JOIN_GUILD
                    }) : a ? (0, t.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        disabled: !0,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.OUTLINED,
                        children: G.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, t.jsxs)(r.Button, {
                        className: k.button,
                        innerClassName: k.innerButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: v ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), (0, D.default)(n, s, l)
                        },
                        children: [v ? (0, t.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }) : (0, t.jsx)(f.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }), G.default.Messages.INDICATE_RSVP]
                    }) : (0, t.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: m,
                        color: r.Button.Colors.GREEN,
                        children: G.default.Messages.JOIN_GUILD
                    })
                }),
                w = s.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: n,
                        guild: i,
                        channel: u,
                        isMember: d,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (null == n ? void 0 : n.recurrence_rule) == null || null == o || (0, _.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), o), m = (0, x.default)(n), h = s.useCallback(() => {
                        d && null != n && (0, C.openGuildEventDetails)({
                            eventId: n.id,
                            recurrenceId: o
                        })
                    }, [d, n, o]);
                    if (null == n || !v) return null;
                    let f = (0, p.isGuildScheduledEventActive)(n),
                        g = (0, p.isGuildEventEnded)(n),
                        I = n.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, t.jsx)(N.default, {
                        className: a({
                            [k.clickable]: d
                        }),
                        children: (0, t.jsxs)(r.Clickable, {
                            onClick: h,
                            children: [null != n.image && (0, t.jsx)(T.default, {
                                source: (0, R.default)(n),
                                className: k.banner
                            }), (0, t.jsx)(L.default, {
                                name: n.name,
                                description: null !== (l = n.description) && void 0 !== l ? l : void 0,
                                descriptionClassName: k.eventDescription,
                                guildId: n.guild_id,
                                creator: m,
                                guildEventId: n.id,
                                eventPreview: n,
                                recurrenceId: o
                            }), (0, t.jsxs)("div", {
                                className: k.footerContainer,
                                children: [(0, t.jsx)(M, {
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: n,
                                    isMember: d
                                }), (0, t.jsx)(P, {
                                    isActive: f,
                                    isEnded: g,
                                    isMember: d,
                                    guildId: n.guild_id,
                                    guildScheduledEventId: n.id,
                                    recurrenceId: o,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: I
                                })]
                            })]
                        })
                    })
                });
            var V = w
        },
        931874: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                getLocationDataForEvent: function() {
                    return a
                }
            });
            var t = n("419830"),
                s = n("718550"),
                i = n("841363");

            function a(e, l) {
                let n, a;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) n = s.default, a = u;
                else {
                    if (null == l) return null;
                    n = (0, t.getSimpleChannelIconComponent)(l.type), a = l.name
                }
                return {
                    IconComponent: n,
                    locationName: a
                }
            }
        },
        936965: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return g
                }
            }), n("222007");
            var t, s, i = n("37983"),
                a = n("884691"),
                u = n("77078"),
                r = n("271938"),
                d = n("398604"),
                o = n("322224"),
                c = n("822516"),
                E = n("745049"),
                v = n("782340"),
                m = n("616762");

            function h(e, l) {
                let n = r.default.getId();
                return d.default.getRsvp(e, l, n)
            }

            function N(e, l, n, t) {
                let s = h(e, l);
                null != s || t === E.GuildScheduledEventUserResponses.UNINTERESTED && null == l ? o.default.deleteRsvpForGuildEvent(e, l, n) : o.default.createRsvpForGuildEvent(e, l, n, t)
            }(s = t || (t = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE";

            function f(e) {
                let {
                    event: l,
                    recurrenceId: n,
                    guildId: t,
                    onRsvp: s,
                    ...r
                } = e, [d, o] = a.useState(0), c = h(l.id, null), f = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, g = f ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, C = g === E.GuildScheduledEventUserResponses.INTERESTED ? v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(u.ConfirmModal, {
                    ...r,
                    header: C,
                    confirmText: v.default.Messages.OK,
                    cancelText: v.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === d ? N(l.id, null, t, g) : N(l.id, n, t, g), null == s || s(), r.onClose()
                    },
                    confirmButtonColor: u.Button.Colors.BRAND,
                    children: (0, i.jsx)(u.RadioGroup, {
                        className: m.responseOptions,
                        value: d,
                        options: [{
                            name: v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function g(e, l, n, t) {
                let s = d.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let a = null != l ? l : (0, c.getNextRecurrenceIdInEvent)(s),
                    r = h(s.id, a);
                null == a ? (N(e, null, n, E.GuildScheduledEventUserResponses.INTERESTED), null == t || t()) : null != r ? (N(e, a, n, E.GuildScheduledEventUserResponses.UNINTERESTED), null == t || t()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(f, {
                    ...e,
                    event: s,
                    recurrenceId: a,
                    guildId: n,
                    onRsvp: t
                })))
            }
        },
        174622: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return G
                }
            }), n("424973"), n("222007");
            var t = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                u = n("77078"),
                r = n("843962"),
                d = n("679653"),
                o = n("419830"),
                c = n("407063"),
                E = n("845579"),
                v = n("315102"),
                m = n("474293"),
                h = n("145131"),
                N = n("953109"),
                f = n("476263"),
                g = n("782340"),
                C = n("312679");
            let p = e => {
                    let {
                        text: l,
                        extra: n
                    } = e;
                    return (0, t.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [l, n]
                    })
                },
                I = e => {
                    let {
                        resolving: l,
                        children: n
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.content,
                        children: l ? (0, t.jsxs)("div", {
                            className: C.resolvingWrapper,
                            children: [(0, t.jsx)("div", {
                                className: C.resolving,
                                children: (0, t.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            }), (0, t.jsx)("div", {
                                className: C.resolvingFakeButton,
                                children: (0, t.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            })]
                        }) : n
                    })
                },
                x = e => {
                    var l;
                    let {
                        application: n,
                        guild: s,
                        channel: i,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: h
                    } = e, g = null !== (l = (0, d.default)(i)) && void 0 !== l ? l : "", p = E.GifAutoPlay.useSetting();
                    if (c) return (0, t.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let I = null == s || null != s.icon,
                        x = a((0, m.getClass)(C, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), h);
                    if (null != n) return (0, t.jsx)(N.default, {
                        game: n,
                        onClick: o,
                        size: C.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, t.jsx)(f.default, {
                        onClick: o,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: p
                    });
                    if (null != i) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, r.getChannelIconURL)(i),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": g
                    });
                    else if (null != v) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: v.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": g
                    });
                    return null
                },
                S = e => {
                    let {
                        title: l,
                        onClick: n,
                        expired: s,
                        children: i
                    } = e, a = (0, t.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, m.getClass)(C, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
                        children: l
                    });
                    return (0, t.jsxs)(h.default, {
                        className: C.guildInfo,
                        direction: h.default.Direction.VERTICAL,
                        justify: h.default.Justify.CENTER,
                        children: [null == n ? a : (0, t.jsx)(u.Clickable, {
                            onClick: n,
                            children: a
                        }), (0, t.jsx)(u.Text, {
                            tag: "strong",
                            className: C.guildDetail,
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                },
                _ = e => {
                    let {
                        membersOnline: l,
                        members: n
                    } = e, s = [];
                    return null != l && l > 0 && s.push((0, t.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: C.statusOnline
                        }), (0, t.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: C.statusOffline
                        }), (0, t.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: n
                            })
                        })]
                    }, "memberCount")), (0, t.jsx)("div", {
                        className: C.statusCounts,
                        children: s
                    })
                },
                R = e => {
                    let {
                        channel: l,
                        guild: n
                    } = e, s = (0, o.getChannelIconComponent)(l, n);
                    return null == l || null == s ? null : (0, t.jsxs)("div", {
                        className: C.channel,
                        children: [(0, t.jsx)(s, {
                            className: C.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, t.jsx)("span", {
                            className: C.channelName,
                            children: l.name
                        })]
                    })
                },
                T = e => {
                    let {
                        children: l,
                        onClick: n,
                        className: s,
                        isDisabled: i,
                        ...r
                    } = e;
                    return (0, t.jsx)(u.Button, {
                        ...r,
                        disabled: i,
                        onClick: n,
                        size: C.buttonSize,
                        className: a(C.button, s),
                        children: l
                    })
                };
            T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let L = e => {
                    let {
                        children: l,
                        className: n,
                        containerRef: s
                    } = e;
                    return (0, t.jsx)("div", {
                        ref: s,
                        className: a(C.wrapper, n),
                        children: l
                    })
                },
                j = e => {
                    let {
                        guild: l
                    } = e, [n, i] = s.useState(!1), u = v.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, t.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, t.jsx)("img", {
                            src: u,
                            alt: "",
                            className: a(C.inviteSplashImage, {
                                [C.inviteSplashImageLoaded]: n
                            }),
                            onLoad: () => i(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: C.guildName,
                            children: l.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: C.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            L.Header = p, L.Body = I, L.Icon = x, L.Info = S, L.Data = _, L.Channel = R, L.Button = T, L.GuildSplash = j, L.GuildName = D, L.GuildTemplateName = B, p.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", j.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = L
        }
    }
]);