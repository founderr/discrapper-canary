(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3045"], {
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
                a = n("851387"),
                i = n("697218");

            function u(e) {
                let l = (0, s.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return t.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && a.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, l]), l
            }
        },
        914169: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                createEventLocationClickHandler: function() {
                    return A
                },
                default: function() {
                    return V
                }
            });
            var t = n("37983"),
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("446674"),
                r = n("77078"),
                d = n("970728"),
                o = n("987317"),
                c = n("716214"),
                E = n("813006"),
                m = n("42203"),
                v = n("305961"),
                N = n("580357"),
                h = n("174622"),
                C = n("660279"),
                p = n("36694"),
                I = n("374021"),
                f = n("398604"),
                g = n("1339"),
                x = n("882550"),
                S = n("189443"),
                R = n("822516"),
                T = n("93550"),
                L = n("255050"),
                j = n("400271"),
                _ = n("931874"),
                D = n("936965"),
                B = n("745049"),
                G = n("782340"),
                k = n("336179");
            let y = (e, l) => n => {
                    n.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
                },
                U = (e, l) => n => {
                    let t = m.default.getChannel(e.channel_id);
                    null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
                },
                A = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return U(e, l);
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
                        guildScheduledEvent: a,
                        channel: i,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([v.default], () => {
                        var e;
                        return null == n ? null : null !== (e = v.default.getGuild(n.id)) && void 0 !== e ? e : new E.default(n)
                    }, [n]), m = (0, _.getLocationDataForEvent)(a, i), C = s.useCallback(e => {
                        o && null != a && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(a))
                    }, [o, a]), p = s.useCallback(e => {
                        A(a)(e)
                    }, [a]);
                    if (null == c) return null;
                    let I = null == m ? void 0 : m.IconComponent,
                        f = (0, t.jsxs)(t.Fragment, {
                            children: [null != I && (0, t.jsx)(I, {
                                width: 16,
                                height: 16,
                                className: k.channelIcon
                            }), (0, t.jsx)(r.Text, {
                                className: k.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, g.guildEventDetailsParser)(null !== (l = null == m ? void 0 : m.locationName) && void 0 !== l ? l : "", !0)
                            })]
                        });
                    return (0, t.jsxs)("div", {
                        className: k.inviteDetailsContainer,
                        children: [(0, t.jsx)(h.default.Icon, {
                            guild: c,
                            onClick: C
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
                                    onClick: C,
                                    children: (0, t.jsx)(r.Heading, {
                                        className: o ? k.guildNameLinkable : k.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, t.jsx)("div", {
                                className: k.channelInfoContainer,
                                children: b(a, o) ? (0, t.jsx)(r.Clickable, {
                                    className: k.channelLocationLink,
                                    onClick: p,
                                    children: f
                                }) : f
                            })]
                        })]
                    })
                }),
                P = s.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: n,
                        recurrenceId: s,
                        isActive: a,
                        isEnded: i,
                        isMember: d,
                        isExternal: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, m = (0, u.useStateFromStores)([f.default], () => f.default.isInterestedInEventRecurrence(n, s), [n, s]), v = e => {
                        e.stopPropagation(), d ? a && E() : c()
                    };
                    return d ? a ? (0, t.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: e => {
                            !o && v(e)
                        },
                        color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
                        children: o ? G.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : G.default.Messages.JOIN_GUILD
                    }) : i ? (0, t.jsx)(r.Button, {
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
                        look: m ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), (0, D.default)(n, s, l)
                        },
                        children: [m ? (0, t.jsx)(p.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }) : (0, t.jsx)(C.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }), G.default.Messages.INDICATE_RSVP]
                    }) : (0, t.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: v,
                        color: r.Button.Colors.GREEN,
                        children: G.default.Messages.JOIN_GUILD
                    })
                }),
                w = s.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: n,
                        guild: a,
                        channel: u,
                        isMember: d,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, m = null != o ? o : null != n ? (0, R.getNextRecurrenceIdInEvent)(n) : null, v = (null == n ? void 0 : n.recurrence_rule) == null || null == m || (0, R.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), m), N = (0, x.default)(n), C = s.useCallback(() => {
                        d && null != n && (0, I.openGuildEventDetails)({
                            eventId: n.id,
                            recurrenceId: m
                        })
                    }, [d, n, m]);
                    if (null == n || !v) return null;
                    let p = (0, f.isGuildScheduledEventActive)(n),
                        g = (0, f.isGuildEventEnded)(n),
                        _ = n.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, t.jsx)(h.default, {
                        className: i({
                            [k.clickable]: d
                        }),
                        children: (0, t.jsxs)(r.Clickable, {
                            onClick: C,
                            children: [null != n.image && (0, t.jsx)(L.default, {
                                source: (0, T.default)(n),
                                className: k.banner
                            }), (0, t.jsx)(j.default, {
                                name: n.name,
                                description: null !== (l = n.description) && void 0 !== l ? l : void 0,
                                descriptionClassName: k.eventDescription,
                                guildId: n.guild_id,
                                creator: N,
                                guildEventId: n.id,
                                eventPreview: n,
                                recurrenceId: m
                            }), (0, t.jsxs)("div", {
                                className: k.footerContainer,
                                children: [(0, t.jsx)(M, {
                                    guild: a,
                                    channel: u,
                                    guildScheduledEvent: n,
                                    isMember: d
                                }), (0, t.jsx)(P, {
                                    isActive: p,
                                    isEnded: g,
                                    isMember: d,
                                    guildId: n.guild_id,
                                    guildScheduledEventId: n.id,
                                    recurrenceId: m,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: _
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
                    return i
                }
            });
            var t = n("419830"),
                s = n("718550"),
                a = n("841363");

            function i(e, l) {
                let n, i;
                if (null == e) return null;
                let u = (0, a.getLocationFromEvent)(e);
                if (null != u) n = s.default, i = u;
                else {
                    if (null == l) return null;
                    n = (0, t.getSimpleChannelIconComponent)(l.type), i = l.name
                }
                return {
                    IconComponent: n,
                    locationName: i
                }
            }
        },
        936965: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                updateRsvp: function() {
                    return h
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var t, s, a = n("37983"),
                i = n("884691"),
                u = n("77078"),
                r = n("271938"),
                d = n("398604"),
                o = n("322224"),
                c = n("822516"),
                E = n("745049"),
                m = n("782340"),
                v = n("616762");

            function N(e, l) {
                let n = r.default.getId();
                return d.default.getRsvp(e, l, n)
            }

            function h(e, l, n, t) {
                let s = N(e, l);
                null != s || t === E.GuildScheduledEventUserResponses.UNINTERESTED && null == l ? o.default.deleteRsvpForGuildEvent(e, l, n) : o.default.createRsvpForGuildEvent(e, l, n, t)
            }(s = t || (t = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE";

            function C(e) {
                let {
                    event: l,
                    recurrenceId: n,
                    guildId: t,
                    onRsvp: s,
                    ...r
                } = e, [d, o] = i.useState(0), c = N(l.id, null), C = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, p = C ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, I = p === E.GuildScheduledEventUserResponses.INTERESTED ? m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, a.jsx)(u.ConfirmModal, {
                    ...r,
                    header: I,
                    confirmText: m.default.Messages.OK,
                    cancelText: m.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === d ? h(l.id, null, t, p) : h(l.id, n, t, p), null == s || s(), r.onClose()
                    },
                    confirmButtonColor: u.Button.Colors.BRAND,
                    children: (0, a.jsx)(u.RadioGroup, {
                        className: v.responseOptions,
                        value: d,
                        options: [{
                            name: m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: m.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function p(e, l, n, t) {
                let s = d.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let i = null != l ? l : (0, c.getNextRecurrenceIdInEvent)(s),
                    r = N(s.id, i);
                null == i ? (h(e, null, n, E.GuildScheduledEventUserResponses.INTERESTED), null == t || t()) : null != r ? (h(e, i, n, E.GuildScheduledEventUserResponses.UNINTERESTED), null == t || t()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(C, {
                    ...e,
                    event: s,
                    recurrenceId: i,
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
                a = n("414456"),
                i = n.n(a),
                u = n("77078"),
                r = n("843962"),
                d = n("679653"),
                o = n("419830"),
                c = n("407063"),
                E = n("845579"),
                m = n("315102"),
                v = n("474293"),
                N = n("145131"),
                h = n("953109"),
                C = n("476263"),
                p = n("782340"),
                I = n("312679");
            let f = e => {
                    let {
                        text: l,
                        extra: n
                    } = e;
                    return (0, t.jsxs)(u.FormTitle, {
                        className: I.header,
                        children: [l, n]
                    })
                },
                g = e => {
                    let {
                        resolving: l,
                        children: n
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.content,
                        children: l ? (0, t.jsxs)("div", {
                            className: I.resolvingWrapper,
                            children: [(0, t.jsx)("div", {
                                className: I.resolving,
                                children: (0, t.jsx)("div", {
                                    className: I.resolvingBackground
                                })
                            }), (0, t.jsx)("div", {
                                className: I.resolvingFakeButton,
                                children: (0, t.jsx)("div", {
                                    className: I.resolvingBackground
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
                        channel: a,
                        onClick: o,
                        expired: c = !1,
                        user: m,
                        className: N
                    } = e, p = null !== (l = (0, d.default)(a)) && void 0 !== l ? l : "", f = E.GifAutoPlay.useSetting();
                    if (c) return (0, t.jsx)("div", {
                        className: I.guildIconExpired
                    });
                    let g = null == s || null != s.icon,
                        x = i((0, v.getClass)(I, "guildIcon", g ? "Image" : "", null != o ? "Joined" : ""), N);
                    if (null != n) return (0, t.jsx)(h.default, {
                        game: n,
                        onClick: o,
                        size: I.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, t.jsx)(C.default, {
                        onClick: o,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: f
                    });
                    if (null != a) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, r.getChannelIconURL)(a),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": p
                    });
                    else if (null != m) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: m.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": p
                    });
                    return null
                },
                S = e => {
                    let {
                        title: l,
                        onClick: n,
                        expired: s,
                        children: a
                    } = e, i = (0, t.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, v.getClass)(I, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
                        children: l
                    });
                    return (0, t.jsxs)(N.default, {
                        className: I.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == n ? i : (0, t.jsx)(u.Clickable, {
                            onClick: n,
                            children: i
                        }), (0, t.jsx)(u.Text, {
                            tag: "strong",
                            className: I.guildDetail,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                },
                R = e => {
                    let {
                        membersOnline: l,
                        members: n
                    } = e, s = [];
                    return null != l && l > 0 && s.push((0, t.jsxs)("div", {
                        className: I.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: I.statusOnline
                        }), (0, t.jsx)("span", {
                            className: I.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
                        className: I.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: I.statusOffline
                        }), (0, t.jsx)("span", {
                            className: I.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: n
                            })
                        })]
                    }, "memberCount")), (0, t.jsx)("div", {
                        className: I.statusCounts,
                        children: s
                    })
                },
                T = e => {
                    let {
                        channel: l,
                        guild: n
                    } = e, s = (0, o.getChannelIconComponent)(l, n);
                    return null == l || null == s ? null : (0, t.jsxs)("div", {
                        className: I.channel,
                        children: [(0, t.jsx)(s, {
                            className: I.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, t.jsx)("span", {
                            className: I.channelName,
                            children: l.name
                        })]
                    })
                },
                L = e => {
                    let {
                        children: l,
                        onClick: n,
                        className: s,
                        isDisabled: a,
                        ...r
                    } = e;
                    return (0, t.jsx)(u.Button, {
                        ...r,
                        disabled: a,
                        onClick: n,
                        size: I.buttonSize,
                        className: i(I.button, s),
                        children: l
                    })
                };
            L.Colors = u.Button.Colors, L.Looks = u.Button.Looks, L.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let j = e => {
                    let {
                        children: l,
                        className: n,
                        containerRef: s
                    } = e;
                    return (0, t.jsx)("div", {
                        ref: s,
                        className: i(I.wrapper, n),
                        children: l
                    })
                },
                _ = e => {
                    let {
                        guild: l
                    } = e, [n, a] = s.useState(!1), u = m.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, t.jsx)("div", {
                        className: I.inviteSplash,
                        children: (0, t.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i(I.inviteSplashImage, {
                                [I.inviteSplashImageLoaded]: n
                            }),
                            onLoad: () => a(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: I.guildName,
                            children: l.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: I.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            j.Header = f, j.Body = g, j.Icon = x, j.Info = S, j.Data = R, j.Channel = T, j.Button = L, j.GuildSplash = _, j.GuildName = D, j.GuildTemplateName = B, f.displayName = "InviteButton.Header", g.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", R.displayName = "InviteButton.Data", T.displayName = "InviteButton.Channel", L.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = j
        }
    }
]);