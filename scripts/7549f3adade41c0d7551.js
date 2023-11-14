(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75939"], {
        75651: function(e, l, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, l, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return u
                }
            });
            var n = t("884691"),
                s = t("446674"),
                a = t("851387"),
                i = t("697218");

            function u(e) {
                let l = (0, s.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return n.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && a.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, l]), l
            }
        },
        397680: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return i
                }
            });
            var n = t("884691"),
                s = t("446674"),
                a = t("398604");

            function i(e, l) {
                let t = (0, s.useStateFromStoresArray)([a.default], () => {
                        var e, t;
                        return null !== (t = null === (e = a.default.getGuildScheduledEvent(l)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
                    }),
                    i = n.useMemo(() => null == t ? void 0 : t.find(l => l.event_exception_id === e), [t, e]);
                return i
            }
        },
        466148: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return d
                }
            });
            var n = t("446674"),
                s = t("299039"),
                a = t("398604"),
                i = t("397680"),
                u = t("822516");

            function d(e, l) {
                let t, d;
                let o = (0, n.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e)),
                    r = (0, i.default)(l, e);
                if (null == o) return {};
                if (null == l) return t = new Date(o.scheduled_start_time), {
                    startTime: t,
                    endTime: d = null != o.scheduled_end_time ? new Date(o.scheduled_end_time) : null
                };
                let c = null != o.recurrence_rule ? (0, u.getRRule)(o.recurrence_rule) : null;
                return null == c ? {} : (t = new Date((null == r ? void 0 : r.scheduled_start_time) == null ? s.default.extractTimestamp(l) : r.scheduled_start_time), {
                    startTime: t,
                    endTime: d = (null == r ? void 0 : r.scheduled_end_time) == null ? null : new Date(r.scheduled_end_time)
                })
            }
        },
        914169: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                createEventLocationClickHandler: function() {
                    return M
                },
                default: function() {
                    return P
                }
            });
            var n = t("37983"),
                s = t("884691"),
                a = t("414456"),
                i = t.n(a),
                u = t("446674"),
                d = t("77078"),
                o = t("970728"),
                r = t("987317"),
                c = t("716214"),
                E = t("813006"),
                m = t("42203"),
                v = t("305961"),
                N = t("580357"),
                h = t("174622"),
                f = t("660279"),
                C = t("36694"),
                g = t("374021"),
                I = t("398604"),
                p = t("1339"),
                x = t("882550"),
                S = t("93550"),
                _ = t("255050"),
                R = t("400271"),
                T = t("931874"),
                j = t("936965"),
                L = t("745049"),
                D = t("782340"),
                B = t("336179");
            let G = (e, l) => t => {
                    t.stopPropagation(), r.default.selectVoiceChannel(e.channel_id, !1), null == l || l(t)
                },
                k = (e, l) => t => {
                    let n = m.default.getChannel(e.channel_id);
                    null != n && (t.stopPropagation(), (0, c.connectAndOpen)(n), null == l || l(t))
                },
                M = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case L.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return k(e, l);
                        case L.GuildScheduledEventEntityTypes.VOICE:
                            return G(e, l)
                    }
                    return () => {}
                },
                y = (e, l) => l && [L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, L.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                U = s.memo(function(e) {
                    var l;
                    let {
                        guild: t,
                        guildScheduledEvent: a,
                        channel: i,
                        isMember: r
                    } = e, c = (0, u.useStateFromStores)([v.default], () => {
                        var e;
                        return null == t ? null : null !== (e = v.default.getGuild(t.id)) && void 0 !== e ? e : new E.default(t)
                    }, [t]), m = (0, T.getLocationDataForEvent)(a, i), f = s.useCallback(e => {
                        r && null != a && (e.stopPropagation(), (0, o.transitionToGuildFromEventInvite)(a))
                    }, [r, a]), C = s.useCallback(e => {
                        M(a)(e)
                    }, [a]);
                    if (null == c) return null;
                    let g = null == m ? void 0 : m.IconComponent,
                        I = (0, n.jsxs)(n.Fragment, {
                            children: [null != g && (0, n.jsx)(g, {
                                width: 16,
                                height: 16,
                                className: B.channelIcon
                            }), (0, n.jsx)(d.Text, {
                                className: B.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, p.guildEventDetailsParser)(null !== (l = null == m ? void 0 : m.locationName) && void 0 !== l ? l : "", !0)
                            })]
                        });
                    return (0, n.jsxs)("div", {
                        className: B.inviteDetailsContainer,
                        children: [(0, n.jsx)(h.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, n.jsxs)("div", {
                            className: B.verticalContainer,
                            children: [(0, n.jsxs)("div", {
                                className: B.guildChannelInfoContainer,
                                children: [(0, n.jsx)(N.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: d.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: B.guildBadge
                                }), (0, n.jsx)(d.Clickable, {
                                    className: B.guildNameClickable,
                                    onClick: f,
                                    children: (0, n.jsx)(d.Heading, {
                                        className: r ? B.guildNameLinkable : B.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: B.channelInfoContainer,
                                children: y(a, r) ? (0, n.jsx)(d.Clickable, {
                                    className: B.channelLocationLink,
                                    onClick: C,
                                    children: I
                                }) : I
                            })]
                        })]
                    })
                }),
                b = s.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: t,
                        recurrenceId: s,
                        isActive: a,
                        isEnded: i,
                        isMember: o,
                        isExternal: r,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, m = (0, u.useStateFromStores)([I.default], () => I.default.isInterestedInEventRecurrence(t, s), [t, s]), v = e => {
                        e.stopPropagation(), o ? a && E() : c()
                    };
                    return o ? a ? (0, n.jsx)(d.Button, {
                        className: B.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: e => {
                            !r && v(e)
                        },
                        color: r ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
                        children: r ? D.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : D.default.Messages.JOIN_GUILD
                    }) : i ? (0, n.jsx)(d.Button, {
                        className: B.button,
                        size: d.Button.Sizes.SMALL,
                        disabled: !0,
                        color: d.Button.Colors.PRIMARY,
                        look: d.Button.Looks.OUTLINED,
                        children: D.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, n.jsxs)(d.Button, {
                        className: B.button,
                        innerClassName: B.innerButton,
                        size: d.Button.Sizes.SMALL,
                        color: d.Button.Colors.PRIMARY,
                        look: m ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), (0, j.default)(t, s, l)
                        },
                        children: [m ? (0, n.jsx)(C.default, {
                            width: 16,
                            height: 16,
                            className: B.buttonIcon
                        }) : (0, n.jsx)(f.default, {
                            width: 16,
                            height: 16,
                            className: B.buttonIcon
                        }), D.default.Messages.INDICATE_RSVP]
                    }) : (0, n.jsx)(d.Button, {
                        className: B.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: v,
                        color: d.Button.Colors.GREEN,
                        children: D.default.Messages.JOIN_GUILD
                    })
                }),
                A = s.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: t,
                        guild: a,
                        channel: u,
                        isMember: o,
                        recurrenceId: r,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, m = (0, x.default)(t), v = s.useCallback(() => {
                        o && null != t && (0, g.openGuildEventDetails)({
                            eventId: t.id,
                            recurrenceId: r
                        })
                    }, [o, t, r]);
                    if (null == t) return null;
                    let N = (0, I.isGuildScheduledEventActive)(t),
                        f = (0, I.isGuildEventEnded)(t),
                        C = t.entity_type === L.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, n.jsx)(h.default, {
                        className: i({
                            [B.clickable]: o
                        }),
                        children: (0, n.jsxs)(d.Clickable, {
                            onClick: v,
                            children: [null != t.image && (0, n.jsx)(_.default, {
                                source: (0, S.default)(t),
                                className: B.banner
                            }), (0, n.jsx)(R.default, {
                                name: t.name,
                                description: null !== (l = t.description) && void 0 !== l ? l : void 0,
                                descriptionClassName: B.eventDescription,
                                guildId: t.guild_id,
                                creator: m,
                                guildEventId: t.id,
                                eventPreview: t,
                                recurrenceId: r
                            }), (0, n.jsxs)("div", {
                                className: B.footerContainer,
                                children: [(0, n.jsx)(U, {
                                    guild: a,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: o
                                }), (0, n.jsx)(b, {
                                    isActive: N,
                                    isEnded: f,
                                    isMember: o,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    recurrenceId: r,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: C
                                })]
                            })]
                        })
                    })
                });
            var P = A
        },
        931874: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                getLocationDataForEvent: function() {
                    return i
                }
            });
            var n = t("419830"),
                s = t("718550"),
                a = t("841363");

            function i(e, l) {
                let t, i;
                if (null == e) return null;
                let u = (0, a.getLocationFromEvent)(e);
                if (null != u) t = s.default, i = u;
                else {
                    if (null == l) return null;
                    t = (0, n.getSimpleChannelIconComponent)(l.type), i = l.name
                }
                return {
                    IconComponent: t,
                    locationName: i
                }
            }
        },
        936965: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return C
                }
            }), t("222007");
            var n, s, a = t("37983"),
                i = t("884691"),
                u = t("77078"),
                d = t("271938"),
                o = t("398604"),
                r = t("322224"),
                c = t("822516"),
                E = t("745049"),
                m = t("782340"),
                v = t("616762");

            function N(e, l) {
                let t = d.default.getId();
                return o.default.getRsvp(e, l, t)
            }

            function h(e, l, t, n) {
                let s = N(e, l);
                null != s || n === E.GuildScheduledEventUserResponses.UNINTERESTED && null == l ? r.default.deleteRsvpForGuildEvent(e, l, t) : r.default.createRsvpForGuildEvent(e, l, t, n)
            }

            function f(e) {
                let {
                    event: l,
                    recurrenceId: t,
                    guildId: n,
                    onRsvp: s,
                    ...d
                } = e, [o, r] = i.useState(0), c = N(l.id, null), f = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, C = f ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, g = N(l.id, t), I = f && null == g || (null == g ? void 0 : g.response) === E.GuildScheduledEventUserResponses.INTERESTED, p = [{
                    name: f ? m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES_UNINTERESTED : m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES_INTERESTED,
                    value: 0
                }, {
                    name: I ? m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE_UNINTERESTED : m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE_INTERESTED,
                    value: 1
                }];
                return (0, a.jsxs)(u.ModalRoot, {
                    ...d,
                    children: [(0, a.jsx)(u.ModalHeader, {
                        children: (0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER
                        })
                    }), (0, a.jsx)(u.ModalContent, {
                        children: (0, a.jsx)(u.RadioGroup, {
                            className: v.responseOptions,
                            value: o,
                            options: p,
                            onChange: e => r(e.value)
                        })
                    }), (0, a.jsxs)(u.ModalFooter, {
                        children: [(0, a.jsx)(u.Button, {
                            onClick: () => {
                                0 === o ? h(l.id, null, n, C) : h(l.id, t, n, C), null == s || s(), d.onClose()
                            },
                            className: v.confirmButton,
                            children: m.default.Messages.OK
                        }), (0, a.jsx)(u.Button, {
                            onClick: d.onClose,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.RED,
                            children: m.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function C(e, l, t, n) {
                let s = o.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let i = null != l ? l : (0, c.getNextRecurrenceIdInEvent)(s);
                null == i ? (h(e, null, t, E.GuildScheduledEventUserResponses.INTERESTED), null == n || n()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(f, {
                    ...e,
                    event: s,
                    recurrenceId: i,
                    guildId: t,
                    onRsvp: n
                })))
            }(s = n || (n = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE"
        },
        174622: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return G
                }
            }), t("424973"), t("222007");
            var n = t("37983"),
                s = t("884691"),
                a = t("414456"),
                i = t.n(a),
                u = t("77078"),
                d = t("843962"),
                o = t("679653"),
                r = t("419830"),
                c = t("407063"),
                E = t("845579"),
                m = t("315102"),
                v = t("474293"),
                N = t("145131"),
                h = t("953109"),
                f = t("476263"),
                C = t("782340"),
                g = t("312679");
            let I = e => {
                    let {
                        text: l,
                        extra: t
                    } = e;
                    return (0, n.jsxs)(u.FormTitle, {
                        className: g.header,
                        children: [l, t]
                    })
                },
                p = e => {
                    let {
                        resolving: l,
                        children: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: g.content,
                        children: l ? (0, n.jsxs)("div", {
                            className: g.resolvingWrapper,
                            children: [(0, n.jsx)("div", {
                                className: g.resolving,
                                children: (0, n.jsx)("div", {
                                    className: g.resolvingBackground
                                })
                            }), (0, n.jsx)("div", {
                                className: g.resolvingFakeButton,
                                children: (0, n.jsx)("div", {
                                    className: g.resolvingBackground
                                })
                            })]
                        }) : t
                    })
                },
                x = e => {
                    var l;
                    let {
                        application: t,
                        guild: s,
                        channel: a,
                        onClick: r,
                        expired: c = !1,
                        user: m,
                        className: N
                    } = e, C = null !== (l = (0, o.default)(a)) && void 0 !== l ? l : "", I = E.GifAutoPlay.useSetting();
                    if (c) return (0, n.jsx)("div", {
                        className: g.guildIconExpired
                    });
                    let p = null == s || null != s.icon,
                        x = i((0, v.getClass)(g, "guildIcon", p ? "Image" : "", null != r ? "Joined" : ""), N);
                    if (null != t) return (0, n.jsx)(h.default, {
                        game: t,
                        onClick: r,
                        size: g.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, n.jsx)(f.default, {
                        onClick: r,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: I
                    });
                    if (null != a) return (0, n.jsx)(u.Avatar, {
                        onClick: r,
                        src: (0, d.getChannelIconURL)(a),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": C
                    });
                    else if (null != m) return (0, n.jsx)(u.Avatar, {
                        onClick: r,
                        src: m.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": C
                    });
                    return null
                },
                S = e => {
                    let {
                        title: l,
                        onClick: t,
                        expired: s,
                        children: a
                    } = e, i = (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, v.getClass)(g, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
                        children: l
                    });
                    return (0, n.jsxs)(N.default, {
                        className: g.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == t ? i : (0, n.jsx)(u.Clickable, {
                            onClick: t,
                            children: i
                        }), (0, n.jsx)(u.Text, {
                            tag: "strong",
                            className: g.guildDetail,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                },
                _ = e => {
                    let {
                        membersOnline: l,
                        members: t
                    } = e, s = [];
                    return null != l && l > 0 && s.push((0, n.jsxs)("div", {
                        className: g.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: g.statusOnline
                        }), (0, n.jsx)("span", {
                            className: g.count,
                            children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != t && s.push((0, n.jsxs)("div", {
                        className: g.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: g.statusOffline
                        }), (0, n.jsx)("span", {
                            className: g.count,
                            children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount")), (0, n.jsx)("div", {
                        className: g.statusCounts,
                        children: s
                    })
                },
                R = e => {
                    let {
                        channel: l,
                        guild: t
                    } = e, s = (0, r.getChannelIconComponent)(l, t);
                    return null == l || null == s ? null : (0, n.jsxs)("div", {
                        className: g.channel,
                        children: [(0, n.jsx)(s, {
                            className: g.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, n.jsx)("span", {
                            className: g.channelName,
                            children: l.name
                        })]
                    })
                },
                T = e => {
                    let {
                        children: l,
                        onClick: t,
                        className: s,
                        isDisabled: a,
                        ...d
                    } = e;
                    return (0, n.jsx)(u.Button, {
                        ...d,
                        disabled: a,
                        onClick: t,
                        size: g.buttonSize,
                        className: i(g.button, s),
                        children: l
                    })
                };
            T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let j = e => {
                    let {
                        children: l,
                        className: t,
                        containerRef: s
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: s,
                        className: i(g.wrapper, t),
                        children: l
                    })
                },
                L = e => {
                    let {
                        guild: l
                    } = e, [t, a] = s.useState(!1), u = m.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, n.jsx)("div", {
                        className: g.inviteSplash,
                        children: (0, n.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i(g.inviteSplashImage, {
                                [g.inviteSplashImageLoaded]: t
                            }),
                            onLoad: () => a(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: g.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: g.guildName,
                            children: l.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: g.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: g.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            j.Header = I, j.Body = p, j.Icon = x, j.Info = S, j.Data = _, j.Channel = R, j.Button = T, j.GuildSplash = L, j.GuildName = D, j.GuildTemplateName = B, I.displayName = "InviteButton.Header", p.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", L.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = j
        }
    }
]);