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
                a = t("446674"),
                s = t("851387"),
                i = t("697218");

            function u(e) {
                let l = (0, a.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return n.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && s.default.requestMembersById(e.guild_id, e.creator_id)
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
                a = t("446674"),
                s = t("398604");

            function i(e, l) {
                let t = (0, a.useStateFromStoresArray)([s.default], () => {
                        var e, t;
                        return null !== (t = null === (e = s.default.getGuildScheduledEvent(l)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
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
                a = t("299039"),
                s = t("398604"),
                i = t("397680"),
                u = t("822516");

            function d(e, l) {
                let t, d;
                let r = (0, n.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e)),
                    o = (0, i.default)(l, e);
                if (null == r) return {};
                if (null == l) return t = new Date(r.scheduled_start_time), {
                    startTime: t,
                    endTime: d = null != r.scheduled_end_time ? new Date(r.scheduled_end_time) : null
                };
                let c = null != r.recurrence_rule ? (0, u.getRRule)(r.recurrence_rule) : null;
                return null == c ? {} : (t = new Date((null == o ? void 0 : o.scheduled_start_time) == null ? a.default.extractTimestamp(l) : o.scheduled_start_time), {
                    startTime: t,
                    endTime: d = (null == o ? void 0 : o.scheduled_end_time) == null ? null : new Date(o.scheduled_end_time)
                })
            }
        },
        914169: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                createEventLocationClickHandler: function() {
                    return D
                },
                default: function() {
                    return z
                }
            });
            var n = t("37983"),
                a = t("884691"),
                s = t("414456"),
                i = t.n(s),
                u = t("446674"),
                d = t("77078"),
                r = t("970728"),
                o = t("987317"),
                c = t("716214"),
                m = t("813006"),
                v = t("42203"),
                h = t("305961"),
                N = t("580357"),
                f = t("174622"),
                p = t("660279"),
                g = t("36694"),
                C = t("374021"),
                E = t("398604"),
                x = t("322224"),
                I = t("1339"),
                j = t("882550"),
                S = t("93550"),
                _ = t("255050"),
                L = t("400271"),
                T = t("931874"),
                B = t("745049"),
                k = t("782340"),
                y = t("336179");
            let G = (e, l) => t => {
                    t.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(t)
                },
                b = (e, l) => t => {
                    let n = v.default.getChannel(e.channel_id);
                    null != n && (t.stopPropagation(), (0, c.connectAndOpen)(n), null == l || l(t))
                },
                D = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return b(e, l);
                        case B.GuildScheduledEventEntityTypes.VOICE:
                            return G(e, l)
                    }
                    return () => {}
                },
                A = (e, l) => l && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                w = a.memo(function(e) {
                    var l;
                    let {
                        guild: t,
                        guildScheduledEvent: s,
                        channel: i,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([h.default], () => {
                        var e;
                        return null == t ? null : null !== (e = h.default.getGuild(t.id)) && void 0 !== e ? e : new m.default(t)
                    }, [t]), v = (0, T.getLocationDataForEvent)(s, i), p = a.useCallback(e => {
                        o && null != s && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(s))
                    }, [o, s]), g = a.useCallback(e => {
                        D(s)(e)
                    }, [s]);
                    if (null == c) return null;
                    let C = null == v ? void 0 : v.IconComponent,
                        E = (0, n.jsxs)(n.Fragment, {
                            children: [null != C && (0, n.jsx)(C, {
                                width: 16,
                                height: 16,
                                className: y.channelIcon
                            }), (0, n.jsx)(d.Text, {
                                className: y.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, I.guildEventDetailsParser)(null !== (l = null == v ? void 0 : v.locationName) && void 0 !== l ? l : "", !0)
                            })]
                        });
                    return (0, n.jsxs)("div", {
                        className: y.inviteDetailsContainer,
                        children: [(0, n.jsx)(f.default.Icon, {
                            guild: c,
                            onClick: p
                        }), (0, n.jsxs)("div", {
                            className: y.verticalContainer,
                            children: [(0, n.jsxs)("div", {
                                className: y.guildChannelInfoContainer,
                                children: [(0, n.jsx)(N.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: d.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: y.guildBadge
                                }), (0, n.jsx)(d.Clickable, {
                                    className: y.guildNameClickable,
                                    onClick: p,
                                    children: (0, n.jsx)(d.Heading, {
                                        className: o ? y.guildNameLinkable : y.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: y.channelInfoContainer,
                                children: A(s, o) ? (0, n.jsx)(d.Clickable, {
                                    className: y.channelLocationLink,
                                    onClick: g,
                                    children: E
                                }) : E
                            })]
                        })]
                    })
                }),
                R = a.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: t,
                        isActive: a,
                        isEnded: s,
                        isMember: i,
                        isExternal: r,
                        onAcceptInstantInvite: o,
                        onTransitionToInviteChannel: c
                    } = e, m = (0, u.useStateFromStores)([E.default], () => E.default.hasRsvp(t, null), [t]), v = e => {
                        e.stopPropagation(), i ? a && c() : o()
                    };
                    return i ? a ? (0, n.jsx)(d.Button, {
                        className: y.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: e => {
                            !r && v(e)
                        },
                        color: r ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
                        children: r ? k.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : k.default.Messages.JOIN_GUILD
                    }) : s ? (0, n.jsx)(d.Button, {
                        className: y.button,
                        size: d.Button.Sizes.SMALL,
                        disabled: !0,
                        color: d.Button.Colors.PRIMARY,
                        look: d.Button.Looks.OUTLINED,
                        children: k.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, n.jsxs)(d.Button, {
                        className: y.button,
                        innerClassName: y.innerButton,
                        size: d.Button.Sizes.SMALL,
                        color: d.Button.Colors.PRIMARY,
                        look: m ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), m ? x.default.deleteRsvpForGuildEvent(t, null, l) : x.default.createRsvpForGuildEvent(t, null, l, B.GuildScheduledEventUserResponses.INTERESTED)
                        },
                        children: [m ? (0, n.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            className: y.buttonIcon
                        }) : (0, n.jsx)(p.default, {
                            width: 16,
                            height: 16,
                            className: y.buttonIcon
                        }), k.default.Messages.INDICATE_RSVP]
                    }) : (0, n.jsx)(d.Button, {
                        className: y.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: v,
                        color: d.Button.Colors.GREEN,
                        children: k.default.Messages.JOIN_GUILD
                    })
                }),
                M = a.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: t,
                        guild: s,
                        channel: u,
                        isMember: r,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: m
                    } = e, v = (0, j.default)(t), h = a.useCallback(() => {
                        r && null != t && (0, C.openGuildEventDetails)({
                            eventId: t.id,
                            recurrenceId: o
                        })
                    }, [r, t, o]);
                    if (null == t) return null;
                    let N = (0, E.isGuildScheduledEventActive)(t),
                        p = (0, E.isGuildEventEnded)(t),
                        g = t.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, n.jsx)(f.default, {
                        className: i({
                            [y.clickable]: r
                        }),
                        children: (0, n.jsxs)(d.Clickable, {
                            onClick: h,
                            children: [null != t.image && (0, n.jsx)(_.default, {
                                source: (0, S.default)(t),
                                className: y.banner
                            }), (0, n.jsx)(L.default, {
                                name: t.name,
                                description: null !== (l = t.description) && void 0 !== l ? l : void 0,
                                descriptionClassName: y.eventDescription,
                                guildId: t.guild_id,
                                creator: v,
                                guildEventId: t.id,
                                eventPreview: t,
                                recurrenceId: o
                            }), (0, n.jsxs)("div", {
                                className: y.footerContainer,
                                children: [(0, n.jsx)(w, {
                                    guild: s,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: r
                                }), (0, n.jsx)(R, {
                                    isActive: N,
                                    isEnded: p,
                                    isMember: r,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: m,
                                    isExternal: g
                                })]
                            })]
                        })
                    })
                });
            var z = M
        },
        931874: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                getLocationDataForEvent: function() {
                    return i
                }
            });
            var n = t("419830"),
                a = t("718550"),
                s = t("841363");

            function i(e, l) {
                let t, i;
                if (null == e) return null;
                let u = (0, s.getLocationFromEvent)(e);
                if (null != u) t = a.default, i = u;
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
        174622: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return G
                }
            }), t("424973"), t("222007");
            var n = t("37983"),
                a = t("884691"),
                s = t("414456"),
                i = t.n(s),
                u = t("77078"),
                d = t("843962"),
                r = t("679653"),
                o = t("419830"),
                c = t("407063"),
                m = t("845579"),
                v = t("315102"),
                h = t("474293"),
                N = t("145131"),
                f = t("953109"),
                p = t("476263"),
                g = t("782340"),
                C = t("312679");
            let E = e => {
                    let {
                        text: l,
                        extra: t
                    } = e;
                    return (0, n.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [l, t]
                    })
                },
                x = e => {
                    let {
                        resolving: l,
                        children: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.content,
                        children: l ? (0, n.jsxs)("div", {
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
                        }) : t
                    })
                },
                I = e => {
                    var l;
                    let {
                        application: t,
                        guild: a,
                        channel: s,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: N
                    } = e, g = null !== (l = (0, r.default)(s)) && void 0 !== l ? l : "", E = m.GifAutoPlay.useSetting();
                    if (c) return (0, n.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let x = null == a || null != a.icon,
                        I = i((0, h.getClass)(C, "guildIcon", x ? "Image" : "", null != o ? "Joined" : ""), N);
                    if (null != t) return (0, n.jsx)(f.default, {
                        game: t,
                        onClick: o,
                        size: C.applicationIcon,
                        className: I
                    });
                    if (null != a) return (0, n.jsx)(p.default, {
                        onClick: o,
                        active: !0,
                        guild: a,
                        className: I,
                        animate: E
                    });
                    if (null != s) return (0, n.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, d.getChannelIconURL)(s),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": g
                    });
                    else if (null != v) return (0, n.jsx)(u.Avatar, {
                        onClick: o,
                        src: v.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": g
                    });
                    return null
                },
                j = e => {
                    let {
                        title: l,
                        onClick: t,
                        expired: a,
                        children: s
                    } = e, i = (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, h.getClass)(C, "inviteDestination", a ? "Expired" : null != t ? "Joined" : ""),
                        children: l
                    });
                    return (0, n.jsxs)(N.default, {
                        className: C.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == t ? i : (0, n.jsx)(u.Clickable, {
                            onClick: t,
                            children: i
                        }), (0, n.jsx)(u.Text, {
                            tag: "strong",
                            className: C.guildDetail,
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })
                },
                S = e => {
                    let {
                        membersOnline: l,
                        members: t
                    } = e, a = [];
                    return null != l && l > 0 && a.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOnline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != t && a.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOffline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount")), (0, n.jsx)("div", {
                        className: C.statusCounts,
                        children: a
                    })
                },
                _ = e => {
                    let {
                        channel: l,
                        guild: t
                    } = e, a = (0, o.getChannelIconComponent)(l, t);
                    return null == l || null == a ? null : (0, n.jsxs)("div", {
                        className: C.channel,
                        children: [(0, n.jsx)(a, {
                            className: C.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, n.jsx)("span", {
                            className: C.channelName,
                            children: l.name
                        })]
                    })
                },
                L = e => {
                    let {
                        children: l,
                        onClick: t,
                        className: a,
                        isDisabled: s,
                        ...d
                    } = e;
                    return (0, n.jsx)(u.Button, {
                        ...d,
                        disabled: s,
                        onClick: t,
                        size: C.buttonSize,
                        className: i(C.button, a),
                        children: l
                    })
                };
            L.Colors = u.Button.Colors, L.Looks = u.Button.Looks, L.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let T = e => {
                    let {
                        children: l,
                        className: t,
                        containerRef: a
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: a,
                        className: i(C.wrapper, t),
                        children: l
                    })
                },
                B = e => {
                    let {
                        guild: l
                    } = e, [t, s] = a.useState(!1), u = v.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, n.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, n.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i(C.inviteSplashImage, {
                                [C.inviteSplashImageLoaded]: t
                            }),
                            onLoad: () => s(!0)
                        })
                    })
                },
                k = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: C.guildName,
                            children: l.name
                        })
                    })
                },
                y = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: C.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            T.Header = E, T.Body = x, T.Icon = I, T.Info = j, T.Data = S, T.Channel = _, T.Button = L, T.GuildSplash = B, T.GuildName = k, T.GuildTemplateName = y, E.displayName = "InviteButton.Header", x.displayName = "InviteButton.Body", I.displayName = "InviteButton.Icon", j.displayName = "InviteButton.Info", S.displayName = "InviteButton.Data", _.displayName = "InviteButton.Channel", L.displayName = "InviteButton.Button", B.displayName = "InviteButton.GuildSplash", k.displayName = "InviteButton.GuildName", y.displayName = "InviteButton.GuildTemplateName";
            var G = T
        }
    }
]);