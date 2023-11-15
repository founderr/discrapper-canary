(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75939"], {
        75651: function(e, t, l) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, t, l) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("884691"),
                s = l("446674"),
                i = l("851387"),
                a = l("697218");

            function u(e) {
                let t = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return n.useEffect(() => {
                    null == t && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, t]), t
            }
        },
        397680: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return a
                }
            });
            var n = l("446674"),
                s = l("398604");

            function i(e, t) {
                let l = (0, n.useStateFromStoresArray)([s.default], () => {
                    var e, l;
                    return null !== (l = null === (e = s.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== l ? l : []
                });
                return u(l, e)
            }

            function a(e, t) {
                var l, n;
                let i = null !== (n = null === (l = s.default.getGuildScheduledEvent(t)) || void 0 === l ? void 0 : l.guild_scheduled_event_exceptions) && void 0 !== n ? n : [];
                return u(i, e)
            }

            function u(e, t) {
                let l = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return l
            }
        },
        466148: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return c
                }
            });
            var n = l("627445"),
                s = l.n(n),
                i = l("446674"),
                a = l("299039"),
                u = l("398604"),
                d = l("397680"),
                r = l("822516");

            function o(e, t, l) {
                var n;
                let a = null !== (n = (0, i.useStateFromStores)([u.default], () => u.default.getGuildScheduledEvent(e))) && void 0 !== n ? n : l;
                s(null != a, "Event must be defined"), t = null != t ? t : (0, r.getNextRecurrenceIdInEvent)(a);
                let o = (0, d.default)(t, e);
                return E(a, o, t)
            }

            function c(e, t) {
                let l = (0, d.getEventException)(t, e.id);
                return E(e, l, t)
            }

            function E(e, t, l) {
                let n = null != e.recurrence_rule ? (0, r.getRRule)(e.recurrence_rule) : null;
                if (null == n || null == l) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let s = new Date((null == t ? void 0 : t.scheduled_start_time) == null ? a.default.extractTimestamp(l) : t.scheduled_start_time),
                    i = (null == t ? void 0 : t.scheduled_end_time) == null ? null : new Date(t.scheduled_end_time);
                return {
                    startTime: s,
                    endTime: i
                }
            }
        },
        914169: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createEventLocationClickHandler: function() {
                    return y
                },
                default: function() {
                    return P
                }
            });
            var n = l("37983"),
                s = l("884691"),
                i = l("414456"),
                a = l.n(i),
                u = l("446674"),
                d = l("77078"),
                r = l("970728"),
                o = l("987317"),
                c = l("716214"),
                E = l("813006"),
                v = l("42203"),
                m = l("305961"),
                h = l("580357"),
                N = l("174622"),
                f = l("660279"),
                g = l("36694"),
                C = l("374021"),
                p = l("398604"),
                I = l("1339"),
                x = l("882550"),
                S = l("93550"),
                _ = l("255050"),
                R = l("400271"),
                T = l("931874"),
                L = l("936965"),
                j = l("745049"),
                D = l("782340"),
                G = l("336179");
            let B = (e, t) => l => {
                    l.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == t || t(l)
                },
                k = (e, t) => l => {
                    let n = v.default.getChannel(e.channel_id);
                    null != n && (l.stopPropagation(), (0, c.connectAndOpen)(n), null == t || t(l))
                },
                y = (e, t) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case j.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return k(e, t);
                        case j.GuildScheduledEventEntityTypes.VOICE:
                            return B(e, t)
                    }
                    return () => {}
                },
                A = (e, t) => t && [j.GuildScheduledEventEntityTypes.STAGE_INSTANCE, j.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                U = s.memo(function(e) {
                    var t;
                    let {
                        guild: l,
                        guildScheduledEvent: i,
                        channel: a,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        return null == l ? null : null !== (e = m.default.getGuild(l.id)) && void 0 !== e ? e : new E.default(l)
                    }, [l]), v = (0, T.getLocationDataForEvent)(i, a), f = s.useCallback(e => {
                        o && null != i && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(i))
                    }, [o, i]), g = s.useCallback(e => {
                        y(i)(e)
                    }, [i]);
                    if (null == c) return null;
                    let C = null == v ? void 0 : v.IconComponent,
                        p = (0, n.jsxs)(n.Fragment, {
                            children: [null != C && (0, n.jsx)(C, {
                                width: 16,
                                height: 16,
                                className: G.channelIcon
                            }), (0, n.jsx)(d.Text, {
                                className: G.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, I.guildEventDetailsParser)(null !== (t = null == v ? void 0 : v.locationName) && void 0 !== t ? t : "", !0)
                            })]
                        });
                    return (0, n.jsxs)("div", {
                        className: G.inviteDetailsContainer,
                        children: [(0, n.jsx)(N.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, n.jsxs)("div", {
                            className: G.verticalContainer,
                            children: [(0, n.jsxs)("div", {
                                className: G.guildChannelInfoContainer,
                                children: [(0, n.jsx)(h.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: d.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: G.guildBadge
                                }), (0, n.jsx)(d.Clickable, {
                                    className: G.guildNameClickable,
                                    onClick: f,
                                    children: (0, n.jsx)(d.Heading, {
                                        className: o ? G.guildNameLinkable : G.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: G.channelInfoContainer,
                                children: A(i, o) ? (0, n.jsx)(d.Clickable, {
                                    className: G.channelLocationLink,
                                    onClick: g,
                                    children: p
                                }) : p
                            })]
                        })]
                    })
                }),
                b = s.memo(function(e) {
                    let {
                        guildId: t,
                        guildScheduledEventId: l,
                        recurrenceId: s,
                        isActive: i,
                        isEnded: a,
                        isMember: r,
                        isExternal: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (0, u.useStateFromStores)([p.default], () => p.default.isInterestedInEventRecurrence(l, s), [l, s]), m = e => {
                        e.stopPropagation(), r ? i && E() : c()
                    };
                    return r ? i ? (0, n.jsx)(d.Button, {
                        className: G.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: e => {
                            !o && m(e)
                        },
                        color: o ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
                        children: o ? D.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : D.default.Messages.JOIN_GUILD
                    }) : a ? (0, n.jsx)(d.Button, {
                        className: G.button,
                        size: d.Button.Sizes.SMALL,
                        disabled: !0,
                        color: d.Button.Colors.PRIMARY,
                        look: d.Button.Looks.OUTLINED,
                        children: D.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, n.jsxs)(d.Button, {
                        className: G.button,
                        innerClassName: G.innerButton,
                        size: d.Button.Sizes.SMALL,
                        color: d.Button.Colors.PRIMARY,
                        look: v ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), (0, L.default)(l, s, t)
                        },
                        children: [v ? (0, n.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            className: G.buttonIcon
                        }) : (0, n.jsx)(f.default, {
                            width: 16,
                            height: 16,
                            className: G.buttonIcon
                        }), D.default.Messages.INDICATE_RSVP]
                    }) : (0, n.jsx)(d.Button, {
                        className: G.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: m,
                        color: d.Button.Colors.GREEN,
                        children: D.default.Messages.JOIN_GUILD
                    })
                }),
                M = s.memo(function(e) {
                    var t;
                    let {
                        guildScheduledEvent: l,
                        guild: i,
                        channel: u,
                        isMember: r,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (0, x.default)(l), m = s.useCallback(() => {
                        r && null != l && (0, C.openGuildEventDetails)({
                            eventId: l.id,
                            recurrenceId: o
                        })
                    }, [r, l, o]);
                    if (null == l) return null;
                    let h = (0, p.isGuildScheduledEventActive)(l),
                        f = (0, p.isGuildEventEnded)(l),
                        g = l.entity_type === j.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, n.jsx)(N.default, {
                        className: a({
                            [G.clickable]: r
                        }),
                        children: (0, n.jsxs)(d.Clickable, {
                            onClick: m,
                            children: [null != l.image && (0, n.jsx)(_.default, {
                                source: (0, S.default)(l),
                                className: G.banner
                            }), (0, n.jsx)(R.default, {
                                name: l.name,
                                description: null !== (t = l.description) && void 0 !== t ? t : void 0,
                                descriptionClassName: G.eventDescription,
                                guildId: l.guild_id,
                                creator: v,
                                guildEventId: l.id,
                                eventPreview: l,
                                recurrenceId: o
                            }), (0, n.jsxs)("div", {
                                className: G.footerContainer,
                                children: [(0, n.jsx)(U, {
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: l,
                                    isMember: r
                                }), (0, n.jsx)(b, {
                                    isActive: h,
                                    isEnded: f,
                                    isMember: r,
                                    guildId: l.guild_id,
                                    guildScheduledEventId: l.id,
                                    recurrenceId: o,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: g
                                })]
                            })]
                        })
                    })
                });
            var P = M
        },
        931874: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getLocationDataForEvent: function() {
                    return a
                }
            });
            var n = l("419830"),
                s = l("718550"),
                i = l("841363");

            function a(e, t) {
                let l, a;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) l = s.default, a = u;
                else {
                    if (null == t) return null;
                    l = (0, n.getSimpleChannelIconComponent)(t.type), a = t.name
                }
                return {
                    IconComponent: l,
                    locationName: a
                }
            }
        },
        936965: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var n, s, i = l("37983"),
                a = l("884691"),
                u = l("77078"),
                d = l("271938"),
                r = l("398604"),
                o = l("322224"),
                c = l("822516"),
                E = l("745049"),
                v = l("782340"),
                m = l("616762");

            function h(e, t) {
                let l = d.default.getId();
                return r.default.getRsvp(e, t, l)
            }

            function N(e, t, l, n) {
                let s = h(e, t);
                null != s || n === E.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, l) : o.default.createRsvpForGuildEvent(e, t, l, n)
            }(s = n || (n = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE";

            function f(e) {
                let {
                    event: t,
                    recurrenceId: l,
                    guildId: n,
                    onRsvp: s,
                    ...d
                } = e, [r, o] = a.useState(0), c = h(t.id, null), f = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, g = f ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, C = g === E.GuildScheduledEventUserResponses.INTERESTED ? v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(u.ConfirmModal, {
                    ...d,
                    header: C,
                    confirmText: v.default.Messages.OK,
                    cancelText: v.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === r ? N(t.id, null, n, g) : N(t.id, l, n, g), null == s || s(), d.onClose()
                    },
                    confirmButtonColor: u.Button.Colors.BRAND,
                    children: (0, i.jsx)(u.RadioGroup, {
                        className: m.responseOptions,
                        value: r,
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

            function g(e, t, l, n) {
                let s = r.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let a = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(s),
                    d = h(s.id, a);
                null == a ? (N(e, null, l, E.GuildScheduledEventUserResponses.INTERESTED), null == n || n()) : null != d ? (N(e, a, l, E.GuildScheduledEventUserResponses.UNINTERESTED), null == n || n()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(f, {
                    ...e,
                    event: s,
                    recurrenceId: a,
                    guildId: l,
                    onRsvp: n
                })))
            }
        },
        174622: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                s = l("884691"),
                i = l("414456"),
                a = l.n(i),
                u = l("77078"),
                d = l("843962"),
                r = l("679653"),
                o = l("419830"),
                c = l("407063"),
                E = l("845579"),
                v = l("315102"),
                m = l("474293"),
                h = l("145131"),
                N = l("953109"),
                f = l("476263"),
                g = l("782340"),
                C = l("312679");
            let p = e => {
                    let {
                        text: t,
                        extra: l
                    } = e;
                    return (0, n.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [t, l]
                    })
                },
                I = e => {
                    let {
                        resolving: t,
                        children: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.content,
                        children: t ? (0, n.jsxs)("div", {
                            className: C.resolvingWrapper,
                            children: [(0, n.jsx)("div", {
                                className: C.resolving,
                                children: (0, n.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            }), (0, n.jsx)("div", {
                                className: C.resolvingFakeButton,
                                children: (0, n.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            })]
                        }) : l
                    })
                },
                x = e => {
                    var t;
                    let {
                        application: l,
                        guild: s,
                        channel: i,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: h
                    } = e, g = null !== (t = (0, r.default)(i)) && void 0 !== t ? t : "", p = E.GifAutoPlay.useSetting();
                    if (c) return (0, n.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let I = null == s || null != s.icon,
                        x = a((0, m.getClass)(C, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), h);
                    if (null != l) return (0, n.jsx)(N.default, {
                        game: l,
                        onClick: o,
                        size: C.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, n.jsx)(f.default, {
                        onClick: o,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: p
                    });
                    if (null != i) return (0, n.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, d.getChannelIconURL)(i),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": g
                    });
                    else if (null != v) return (0, n.jsx)(u.Avatar, {
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
                        title: t,
                        onClick: l,
                        expired: s,
                        children: i
                    } = e, a = (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, m.getClass)(C, "inviteDestination", s ? "Expired" : null != l ? "Joined" : ""),
                        children: t
                    });
                    return (0, n.jsxs)(h.default, {
                        className: C.guildInfo,
                        direction: h.default.Direction.VERTICAL,
                        justify: h.default.Justify.CENTER,
                        children: [null == l ? a : (0, n.jsx)(u.Clickable, {
                            onClick: l,
                            children: a
                        }), (0, n.jsx)(u.Text, {
                            tag: "strong",
                            className: C.guildDetail,
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                },
                _ = e => {
                    let {
                        membersOnline: t,
                        members: l
                    } = e, s = [];
                    return null != t && t > 0 && s.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOnline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t
                            })
                        })]
                    }, "onlineCount")), null != l && s.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOffline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: l
                            })
                        })]
                    }, "memberCount")), (0, n.jsx)("div", {
                        className: C.statusCounts,
                        children: s
                    })
                },
                R = e => {
                    let {
                        channel: t,
                        guild: l
                    } = e, s = (0, o.getChannelIconComponent)(t, l);
                    return null == t || null == s ? null : (0, n.jsxs)("div", {
                        className: C.channel,
                        children: [(0, n.jsx)(s, {
                            className: C.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, n.jsx)("span", {
                            className: C.channelName,
                            children: t.name
                        })]
                    })
                },
                T = e => {
                    let {
                        children: t,
                        onClick: l,
                        className: s,
                        isDisabled: i,
                        ...d
                    } = e;
                    return (0, n.jsx)(u.Button, {
                        ...d,
                        disabled: i,
                        onClick: l,
                        size: C.buttonSize,
                        className: a(C.button, s),
                        children: t
                    })
                };
            T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let L = e => {
                    let {
                        children: t,
                        className: l,
                        containerRef: s
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: s,
                        className: a(C.wrapper, l),
                        children: t
                    })
                },
                j = e => {
                    let {
                        guild: t
                    } = e, [l, i] = s.useState(!1), u = v.default.getGuildSplashURL({
                        id: t.id,
                        splash: t.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, n.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, n.jsx)("img", {
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
                        guild: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: C.guildName,
                            children: t.name
                        })
                    })
                },
                G = e => {
                    let {
                        guildTemplate: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: C.guildName,
                            children: t.serializedSourceGuild.name
                        })
                    })
                };
            L.Header = p, L.Body = I, L.Icon = x, L.Info = S, L.Data = _, L.Channel = R, L.Button = T, L.GuildSplash = j, L.GuildName = D, L.GuildTemplateName = G, p.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", j.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", G.displayName = "InviteButton.GuildTemplateName";
            var B = L
        }
    }
]);