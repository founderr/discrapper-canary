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
                i = t("851387"),
                s = t("697218");

            function u(e) {
                let l = (0, a.useStateFromStores)([s.default], () => s.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return n.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, l]), l
            }
        },
        397680: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return s
                }
            });
            var n = t("884691"),
                a = t("446674"),
                i = t("398604");

            function s(e, l) {
                let t = (0, a.useStateFromStoresArray)([i.default], () => {
                        var e, t;
                        return null !== (t = null === (e = i.default.getGuildScheduledEvent(l)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
                    }),
                    s = n.useMemo(() => null == t ? void 0 : t.find(l => l.event_exception_id === e), [t, e]);
                return s
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
                i = t("398604"),
                s = t("397680"),
                u = t("822516");

            function d(e, l) {
                let t, d;
                let r = (0, n.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e)),
                    o = (0, s.default)(l, e);
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
                i = t("414456"),
                s = t.n(i),
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
                g = t("660279"),
                p = t("36694"),
                C = t("374021"),
                x = t("398604"),
                E = t("322224"),
                I = t("1339"),
                j = t("882550"),
                _ = t("93550"),
                L = t("255050"),
                S = t("400271"),
                B = t("931874"),
                T = t("745049"),
                k = t("782340"),
                y = t("336179");
            let b = (e, l) => t => {
                    t.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(t)
                },
                G = (e, l) => t => {
                    let n = v.default.getChannel(e.channel_id);
                    null != n && (t.stopPropagation(), (0, c.connectAndOpen)(n), null == l || l(t))
                },
                D = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case T.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return G(e, l);
                        case T.GuildScheduledEventEntityTypes.VOICE:
                            return b(e, l)
                    }
                    return () => {}
                },
                A = (e, l) => l && [T.GuildScheduledEventEntityTypes.STAGE_INSTANCE, T.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                w = a.memo(function(e) {
                    var l;
                    let {
                        guild: t,
                        guildScheduledEvent: i,
                        channel: s,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([h.default], () => {
                        var e;
                        return null == t ? null : null !== (e = h.default.getGuild(t.id)) && void 0 !== e ? e : new m.default(t)
                    }, [t]), v = (0, B.getLocationDataForEvent)(i, s), g = a.useCallback(e => {
                        o && null != i && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(i))
                    }, [o, i]), p = a.useCallback(e => {
                        D(i)(e)
                    }, [i]);
                    if (null == c) return null;
                    let C = null == v ? void 0 : v.IconComponent,
                        x = (0, n.jsxs)(n.Fragment, {
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
                            onClick: g
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
                                    onClick: g,
                                    children: (0, n.jsx)(d.Heading, {
                                        className: o ? y.guildNameLinkable : y.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: y.channelInfoContainer,
                                children: A(i, o) ? (0, n.jsx)(d.Clickable, {
                                    className: y.channelLocationLink,
                                    onClick: p,
                                    children: x
                                }) : x
                            })]
                        })]
                    })
                }),
                M = a.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: t,
                        isActive: a,
                        isEnded: i,
                        isMember: s,
                        isExternal: r,
                        onAcceptInstantInvite: o,
                        onTransitionToInviteChannel: c
                    } = e, m = (0, u.useStateFromStores)([x.default], () => x.default.hasRsvp(t, l), [l, t]), v = e => {
                        e.stopPropagation(), s ? a && c() : o()
                    };
                    return s ? a ? (0, n.jsx)(d.Button, {
                        className: y.button,
                        size: d.Button.Sizes.SMALL,
                        onClick: e => {
                            !r && v(e)
                        },
                        color: r ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
                        children: r ? k.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : k.default.Messages.JOIN_GUILD
                    }) : i ? (0, n.jsx)(d.Button, {
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
                            e.stopPropagation(), m ? E.default.deleteRsvpForGuildEvent(t, l) : E.default.createRsvpForGuildEvent(t, l)
                        },
                        children: [m ? (0, n.jsx)(p.default, {
                            width: 16,
                            height: 16,
                            className: y.buttonIcon
                        }) : (0, n.jsx)(g.default, {
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
                R = a.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: t,
                        guild: i,
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
                    let N = (0, x.isGuildScheduledEventActive)(t),
                        g = (0, x.isGuildEventEnded)(t),
                        p = t.entity_type === T.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, n.jsx)(f.default, {
                        className: s({
                            [y.clickable]: r
                        }),
                        children: (0, n.jsxs)(d.Clickable, {
                            onClick: h,
                            children: [null != t.image && (0, n.jsx)(L.default, {
                                source: (0, _.default)(t),
                                className: y.banner
                            }), (0, n.jsx)(S.default, {
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
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: r
                                }), (0, n.jsx)(M, {
                                    isActive: N,
                                    isEnded: g,
                                    isMember: r,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: m,
                                    isExternal: p
                                })]
                            })]
                        })
                    })
                });
            var z = R
        },
        931874: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                getLocationDataForEvent: function() {
                    return s
                }
            });
            var n = t("419830"),
                a = t("718550"),
                i = t("841363");

            function s(e, l) {
                let t, s;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) t = a.default, s = u;
                else {
                    if (null == l) return null;
                    t = (0, n.getSimpleChannelIconComponent)(l.type), s = l.name
                }
                return {
                    IconComponent: t,
                    locationName: s
                }
            }
        },
        174622: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return b
                }
            }), t("424973"), t("222007");
            var n = t("37983"),
                a = t("884691"),
                i = t("414456"),
                s = t.n(i),
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
                g = t("476263"),
                p = t("782340"),
                C = t("312679");
            let x = e => {
                    let {
                        text: l,
                        extra: t
                    } = e;
                    return (0, n.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [l, t]
                    })
                },
                E = e => {
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
                        channel: i,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: N
                    } = e, p = null !== (l = (0, r.default)(i)) && void 0 !== l ? l : "", x = m.GifAutoPlay.useSetting();
                    if (c) return (0, n.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let E = null == a || null != a.icon,
                        I = s((0, h.getClass)(C, "guildIcon", E ? "Image" : "", null != o ? "Joined" : ""), N);
                    if (null != t) return (0, n.jsx)(f.default, {
                        game: t,
                        onClick: o,
                        size: C.applicationIcon,
                        className: I
                    });
                    if (null != a) return (0, n.jsx)(g.default, {
                        onClick: o,
                        active: !0,
                        guild: a,
                        className: I,
                        animate: x
                    });
                    if (null != i) return (0, n.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, d.getChannelIconURL)(i),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": p
                    });
                    else if (null != v) return (0, n.jsx)(u.Avatar, {
                        onClick: o,
                        src: v.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": p
                    });
                    return null
                },
                j = e => {
                    let {
                        title: l,
                        onClick: t,
                        expired: a,
                        children: i
                    } = e, s = (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, h.getClass)(C, "inviteDestination", a ? "Expired" : null != t ? "Joined" : ""),
                        children: l
                    });
                    return (0, n.jsxs)(N.default, {
                        className: C.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == t ? s : (0, n.jsx)(u.Clickable, {
                            onClick: t,
                            children: s
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
                        membersOnline: l,
                        members: t
                    } = e, a = [];
                    return null != l && l > 0 && a.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOnline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != t && a.push((0, n.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: C.statusOffline
                        }), (0, n.jsx)("span", {
                            className: C.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount")), (0, n.jsx)("div", {
                        className: C.statusCounts,
                        children: a
                    })
                },
                L = e => {
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
                S = e => {
                    let {
                        children: l,
                        onClick: t,
                        className: a,
                        isDisabled: i,
                        ...d
                    } = e;
                    return (0, n.jsx)(u.Button, {
                        ...d,
                        disabled: i,
                        onClick: t,
                        size: C.buttonSize,
                        className: s(C.button, a),
                        children: l
                    })
                };
            S.Colors = u.Button.Colors, S.Looks = u.Button.Looks, S.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let B = e => {
                    let {
                        children: l,
                        className: t,
                        containerRef: a
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: a,
                        className: s(C.wrapper, t),
                        children: l
                    })
                },
                T = e => {
                    let {
                        guild: l
                    } = e, [t, i] = a.useState(!1), u = v.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, n.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, n.jsx)("img", {
                            src: u,
                            alt: "",
                            className: s(C.inviteSplashImage, {
                                [C.inviteSplashImageLoaded]: t
                            }),
                            onLoad: () => i(!0)
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
            B.Header = x, B.Body = E, B.Icon = I, B.Info = j, B.Data = _, B.Channel = L, B.Button = S, B.GuildSplash = T, B.GuildName = k, B.GuildTemplateName = y, x.displayName = "InviteButton.Header", E.displayName = "InviteButton.Body", I.displayName = "InviteButton.Icon", j.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", L.displayName = "InviteButton.Channel", S.displayName = "InviteButton.Button", T.displayName = "InviteButton.GuildSplash", k.displayName = "InviteButton.GuildName", y.displayName = "InviteButton.GuildTemplateName";
            var b = B
        }
    }
]);