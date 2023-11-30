(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75939"], {
        75651: function(e, n, l) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, n, l) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return u
                }
            });
            var t = l("884691"),
                s = l("446674"),
                i = l("851387"),
                a = l("697218");

            function u(e) {
                let n = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return t.useEffect(() => {
                    null == n && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, n]), n
            }
        },
        397680: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return a
                }
            });
            var t = l("446674"),
                s = l("398604");

            function i(e, n) {
                let l = (0, t.useStateFromStoresArray)([s.default], () => {
                    var e, l;
                    return null !== (l = null === (e = s.default.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== l ? l : []
                });
                return u(l, e)
            }

            function a(e, n) {
                var l, t;
                let i = null !== (t = null === (l = s.default.getGuildScheduledEvent(n)) || void 0 === l ? void 0 : l.guild_scheduled_event_exceptions) && void 0 !== t ? t : [];
                return u(i, e)
            }

            function u(e, n) {
                let l = null == e ? void 0 : e.find(e => e.event_exception_id === n);
                return l
            }
        },
        466148: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var t = l("627445"),
                s = l.n(t),
                i = l("446674"),
                a = l("398604"),
                u = l("397680"),
                r = l("822516");

            function d(e, n, l) {
                var t;
                let d = null !== (t = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== t ? t : l;
                s(null != d, "Event must be defined"), n = null != n ? n : (0, r.getNextRecurrenceIdInEvent)(d);
                let o = (0, u.default)(n, e);
                return c(d, o, n)
            }

            function o(e, n) {
                let l = (0, u.getEventException)(n, e.id);
                return c(e, l, n)
            }

            function c(e, n, l) {
                if (null == e.recurrence_rule || null == l) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let t = (0, r.getBaseScheduleForRecurrence)(l, e),
                    {
                        startDate: s,
                        endDate: i
                    } = (0, r.getScheduleForRecurrenceWithException)(t, n);
                return {
                    startTime: s.toDate(),
                    endTime: null == i ? void 0 : i.toDate()
                }
            }
        },
        914169: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                createEventLocationClickHandler: function() {
                    return U
                },
                default: function() {
                    return V
                }
            });
            var t = l("37983"),
                s = l("884691"),
                i = l("414456"),
                a = l.n(i),
                u = l("446674"),
                r = l("77078"),
                d = l("970728"),
                o = l("987317"),
                c = l("716214"),
                E = l("813006"),
                v = l("42203"),
                m = l("305961"),
                N = l("580357"),
                h = l("174622"),
                f = l("660279"),
                g = l("36694"),
                C = l("374021"),
                p = l("398604"),
                I = l("1339"),
                x = l("882550"),
                S = l("189443"),
                _ = l("822516"),
                R = l("93550"),
                T = l("255050"),
                L = l("400271"),
                j = l("931874"),
                D = l("936965"),
                B = l("745049"),
                G = l("782340"),
                k = l("336179");
            let y = (e, n) => l => {
                    l.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == n || n(l)
                },
                A = (e, n) => l => {
                    let t = v.default.getChannel(e.channel_id);
                    null != t && (l.stopPropagation(), (0, c.connectAndOpen)(t), null == n || n(l))
                },
                U = (e, n) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return A(e, n);
                        case B.GuildScheduledEventEntityTypes.VOICE:
                            return y(e, n)
                    }
                    return () => {}
                },
                b = (e, n) => n && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                M = s.memo(function(e) {
                    var n;
                    let {
                        guild: l,
                        guildScheduledEvent: i,
                        channel: a,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        return null == l ? null : null !== (e = m.default.getGuild(l.id)) && void 0 !== e ? e : new E.default(l)
                    }, [l]), v = (0, j.getLocationDataForEvent)(i, a), f = s.useCallback(e => {
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
                                children: (0, I.guildEventDetailsParser)(null !== (n = null == v ? void 0 : v.locationName) && void 0 !== n ? n : "", !0)
                            })]
                        });
                    return (0, t.jsxs)("div", {
                        className: k.inviteDetailsContainer,
                        children: [(0, t.jsx)(h.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, t.jsxs)("div", {
                            className: k.verticalContainer,
                            children: [(0, t.jsxs)("div", {
                                className: k.guildChannelInfoContainer,
                                children: [(0, t.jsx)(N.default, {
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
                        guildId: n,
                        guildScheduledEventId: l,
                        recurrenceId: s,
                        isActive: i,
                        isEnded: a,
                        isMember: d,
                        isExternal: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (0, u.useStateFromStores)([p.default], () => p.default.isInterestedInEventRecurrence(l, s), [l, s]), m = e => {
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
                            e.stopPropagation(), (0, D.default)(l, s, n)
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
                    var n;
                    let {
                        guildScheduledEvent: l,
                        guild: i,
                        channel: u,
                        isMember: d,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = null != o ? o : null != l ? (0, _.getNextRecurrenceIdInEvent)(l) : null, m = (null == l ? void 0 : l.recurrence_rule) == null || null == v || (0, _.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == l ? void 0 : l.recurrence_rule), v), N = (0, x.default)(l), f = s.useCallback(() => {
                        d && null != l && (0, C.openGuildEventDetails)({
                            eventId: l.id,
                            recurrenceId: v
                        })
                    }, [d, l, v]);
                    if (null == l || !m) return null;
                    let g = (0, p.isGuildScheduledEventActive)(l),
                        I = (0, p.isGuildEventEnded)(l),
                        j = l.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, t.jsx)(h.default, {
                        className: a({
                            [k.clickable]: d
                        }),
                        children: (0, t.jsxs)(r.Clickable, {
                            onClick: f,
                            children: [null != l.image && (0, t.jsx)(T.default, {
                                source: (0, R.default)(l),
                                className: k.banner
                            }), (0, t.jsx)(L.default, {
                                name: l.name,
                                description: null !== (n = l.description) && void 0 !== n ? n : void 0,
                                descriptionClassName: k.eventDescription,
                                guildId: l.guild_id,
                                creator: N,
                                guildEventId: l.id,
                                eventPreview: l,
                                recurrenceId: v
                            }), (0, t.jsxs)("div", {
                                className: k.footerContainer,
                                children: [(0, t.jsx)(M, {
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: l,
                                    isMember: d
                                }), (0, t.jsx)(P, {
                                    isActive: g,
                                    isEnded: I,
                                    isMember: d,
                                    guildId: l.guild_id,
                                    guildScheduledEventId: l.id,
                                    recurrenceId: v,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: j
                                })]
                            })]
                        })
                    })
                });
            var V = w
        },
        931874: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                getLocationDataForEvent: function() {
                    return a
                }
            });
            var t = l("419830"),
                s = l("718550"),
                i = l("841363");

            function a(e, n) {
                let l, a;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) l = s.default, a = u;
                else {
                    if (null == n) return null;
                    l = (0, t.getSimpleChannelIconComponent)(n.type), a = n.name
                }
                return {
                    IconComponent: l,
                    locationName: a
                }
            }
        },
        936965: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return g
                }
            }), l("222007");
            var t, s, i = l("37983"),
                a = l("884691"),
                u = l("77078"),
                r = l("271938"),
                d = l("398604"),
                o = l("322224"),
                c = l("822516"),
                E = l("745049"),
                v = l("782340"),
                m = l("616762");

            function N(e, n) {
                let l = r.default.getId();
                return d.default.getRsvp(e, n, l)
            }

            function h(e, n, l, t) {
                let s = N(e, n);
                null != s || t === E.GuildScheduledEventUserResponses.UNINTERESTED && null == n ? o.default.deleteRsvpForGuildEvent(e, n, l) : o.default.createRsvpForGuildEvent(e, n, l, t)
            }(s = t || (t = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE";

            function f(e) {
                let {
                    event: n,
                    recurrenceId: l,
                    guildId: t,
                    onRsvp: s,
                    ...r
                } = e, [d, o] = a.useState(0), c = N(n.id, null), f = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, g = f ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, C = g === E.GuildScheduledEventUserResponses.INTERESTED ? v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(u.ConfirmModal, {
                    ...r,
                    header: C,
                    confirmText: v.default.Messages.OK,
                    cancelText: v.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === d ? h(n.id, null, t, g) : h(n.id, l, t, g), null == s || s(), r.onClose()
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

            function g(e, n, l, t) {
                let s = d.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let a = null != n ? n : (0, c.getNextRecurrenceIdInEvent)(s),
                    r = N(s.id, a);
                null == a ? (h(e, null, l, E.GuildScheduledEventUserResponses.INTERESTED), null == t || t()) : null != r ? (h(e, a, l, E.GuildScheduledEventUserResponses.UNINTERESTED), null == t || t()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(f, {
                    ...e,
                    event: s,
                    recurrenceId: a,
                    guildId: l,
                    onRsvp: t
                })))
            }
        },
        174622: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return G
                }
            }), l("424973"), l("222007");
            var t = l("37983"),
                s = l("884691"),
                i = l("414456"),
                a = l.n(i),
                u = l("77078"),
                r = l("843962"),
                d = l("679653"),
                o = l("419830"),
                c = l("407063"),
                E = l("845579"),
                v = l("315102"),
                m = l("474293"),
                N = l("145131"),
                h = l("953109"),
                f = l("476263"),
                g = l("782340"),
                C = l("312679");
            let p = e => {
                    let {
                        text: n,
                        extra: l
                    } = e;
                    return (0, t.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [n, l]
                    })
                },
                I = e => {
                    let {
                        resolving: n,
                        children: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.content,
                        children: n ? (0, t.jsxs)("div", {
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
                        }) : l
                    })
                },
                x = e => {
                    var n;
                    let {
                        application: l,
                        guild: s,
                        channel: i,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: N
                    } = e, g = null !== (n = (0, d.default)(i)) && void 0 !== n ? n : "", p = E.GifAutoPlay.useSetting();
                    if (c) return (0, t.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let I = null == s || null != s.icon,
                        x = a((0, m.getClass)(C, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), N);
                    if (null != l) return (0, t.jsx)(h.default, {
                        game: l,
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
                        title: n,
                        onClick: l,
                        expired: s,
                        children: i
                    } = e, a = (0, t.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, m.getClass)(C, "inviteDestination", s ? "Expired" : null != l ? "Joined" : ""),
                        children: n
                    });
                    return (0, t.jsxs)(N.default, {
                        className: C.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == l ? a : (0, t.jsx)(u.Clickable, {
                            onClick: l,
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
                        membersOnline: n,
                        members: l
                    } = e, s = [];
                    return null != n && n > 0 && s.push((0, t.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: C.statusOnline
                        }), (0, t.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }, "onlineCount")), null != l && s.push((0, t.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: C.statusOffline
                        }), (0, t.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: l
                            })
                        })]
                    }, "memberCount")), (0, t.jsx)("div", {
                        className: C.statusCounts,
                        children: s
                    })
                },
                R = e => {
                    let {
                        channel: n,
                        guild: l
                    } = e, s = (0, o.getChannelIconComponent)(n, l);
                    return null == n || null == s ? null : (0, t.jsxs)("div", {
                        className: C.channel,
                        children: [(0, t.jsx)(s, {
                            className: C.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, t.jsx)("span", {
                            className: C.channelName,
                            children: n.name
                        })]
                    })
                },
                T = e => {
                    let {
                        children: n,
                        onClick: l,
                        className: s,
                        isDisabled: i,
                        ...r
                    } = e;
                    return (0, t.jsx)(u.Button, {
                        ...r,
                        disabled: i,
                        onClick: l,
                        size: C.buttonSize,
                        className: a(C.button, s),
                        children: n
                    })
                };
            T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let L = e => {
                    let {
                        children: n,
                        className: l,
                        containerRef: s
                    } = e;
                    return (0, t.jsx)("div", {
                        ref: s,
                        className: a(C.wrapper, l),
                        children: n
                    })
                },
                j = e => {
                    let {
                        guild: n
                    } = e, [l, i] = s.useState(!1), u = v.default.getGuildSplashURL({
                        id: n.id,
                        splash: n.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, t.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, t.jsx)("img", {
                            src: u,
                            alt: "",
                            className: a(C.inviteSplashImage, {
                                [C.inviteSplashImageLoaded]: l
                            }),
                            onLoad: () => i(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: n
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: C.guildName,
                            children: n.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: n
                    } = e;
                    return (0, t.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: C.guildName,
                            children: n.serializedSourceGuild.name
                        })
                    })
                };
            L.Header = p, L.Body = I, L.Icon = x, L.Info = S, L.Data = _, L.Channel = R, L.Button = T, L.GuildSplash = j, L.GuildName = D, L.GuildTemplateName = B, p.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", j.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = L
        }
    }
]);