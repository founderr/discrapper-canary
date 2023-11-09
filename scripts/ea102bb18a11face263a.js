(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3982"], {
        651072: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return i
                }
            });
            var t = l("862205");
            let a = (0, t.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = a
        },
        617347: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return U
                }
            });
            var t, a, i = l("37983"),
                s = l("884691"),
                r = l("414456"),
                u = l.n(r),
                d = l("446674"),
                o = l("77078"),
                c = l("812204"),
                h = l("685665"),
                v = l("656038"),
                m = l("419830"),
                x = l("817963"),
                g = l("957255"),
                E = l("476263"),
                f = l("718550"),
                N = l("651072"),
                C = l("1339"),
                j = l("613767"),
                p = l("822516"),
                S = l("707916"),
                k = l("255050"),
                _ = l("400271"),
                I = l("427554"),
                T = l("644189"),
                R = l("29913"),
                L = l("745049"),
                b = l("49111"),
                M = l("782340"),
                A = l("955614");

            function D(e) {
                let {
                    channel: n,
                    onClick: l
                } = e, {
                    canManageAllEvents: t
                } = (0, x.useManageResourcePermissions)(n), a = (0, d.useStateFromStores)([g.default], () => !n.isGuildVocal() || g.default.can(b.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, v.default)(n), [n]), c = (0, m.getChannelIconComponent)(n);
                return (0, i.jsx)(o.Tooltip, {
                    text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != l,
                    children: e => (0, i.jsxs)(o.Clickable, {
                        ...e,
                        className: u(A.inline, A.channelContainer, {
                            [A.channelContainerEnabled]: a && null != l,
                            [A.channelContainerDisabled]: !a && null != l
                        }),
                        onClick: l,
                        children: [(0, i.jsx)(o.Tooltip, {
                            text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: t && r && a && null != l,
                            children: e => null != c ? (0, i.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: A.icon
                            }) : null
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: A.channelLocation,
                            children: n.name
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    guild: n,
                    channel: l,
                    onJoinClick: t,
                    handleLocationClick: a,
                    location: s,
                    isExternal: r,
                    isHub: d
                } = e;
                if (d) return null == n ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: A.inline,
                    children: [(0, i.jsx)(E.default, {
                        className: A.guildIcon,
                        size: E.default.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                });
                return null != l ? (0, i.jsx)(D, {
                    channel: l,
                    onClick: t
                }) : (0, i.jsxs)(o.Clickable, {
                    className: A.inline,
                    onClick: a,
                    children: [(0, i.jsx)(f.default, {
                        height: 20,
                        width: 20,
                        className: u(A.channelContainer, A.icon)
                    }), (0, i.jsx)(o.Text, {
                        className: r ? A.externalLocation : A.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, C.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function U(e) {
                var n;
                let {
                    className: l,
                    guild: t,
                    channel: a,
                    creator: s,
                    name: r,
                    entityType: d,
                    description: v,
                    imageLocation: m = 0,
                    imageSource: x,
                    isActive: g,
                    isUserLurking: E,
                    isJoined: f = !1,
                    isMember: C = !1,
                    isHub: b = !1,
                    speakers: M,
                    speakerCount: D,
                    rsvped: U,
                    canInvite: P,
                    location: w,
                    truncate: y,
                    onContextMenu: V,
                    onJoinClick: O,
                    onJoinGuildClick: B,
                    onGoToGuildClick: H,
                    onRsvpClick: z,
                    onStartClick: F,
                    onInviteClick: Y,
                    onEndClick: J,
                    onClick: K,
                    isNew: W,
                    guildEventId: X,
                    eventPreview: Z,
                    recurrenceRule: q,
                    recurrenceId: Q
                } = e, $ = (0, j.isChannelPublic)(a, d), ee = d === L.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: en
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: el
                } = N.default.useExperiment({
                    guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                    location: en[0]
                }, {
                    autoTrackExposure: !1
                }), et = [];
                if (null != q) {
                    let e = (0, p.getRRule)(q);
                    et = (0, p.generateNextRecurrences)(4, e)
                }
                let ea = el && et.length > 0;
                return (0, i.jsxs)(o.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == K ? void 0 : K(),
                    onContextMenu: V,
                    className: u(A.card, {
                        [A.joined]: f,
                        [A.lurking]: E
                    }, l),
                    children: [(0, i.jsxs)("div", {
                        className: u(A.padding, {
                            [A.isRecurring]: ea
                        }),
                        children: [0 === m && (0, i.jsx)(k.default, {
                            source: x
                        }), (0, i.jsx)(_.default, {
                            creator: s,
                            name: r,
                            description: v,
                            imageSource: 1 === m ? x : null,
                            truncate: y,
                            guildId: null == t ? void 0 : t.id,
                            isHub: b,
                            isNew: W,
                            guildEventId: X,
                            eventPreview: Z,
                            recurrenceId: Q
                        }), g && null != t && null != M && D > 0 && (0, i.jsx)(R.default, {
                            guild: t,
                            speakers: M,
                            speakerCount: D,
                            className: A.spacing
                        }), (0, i.jsx)("hr", {
                            className: A.divider
                        }), (0, i.jsxs)("div", {
                            className: u(A.inline, A.footer),
                            children: [(0, i.jsx)(G, {
                                guild: t,
                                channel: a,
                                onJoinClick: O,
                                handleLocationClick: ee ? e => e.stopPropagation() : void 0,
                                location: w,
                                isExternal: ee,
                                isHub: b
                            }), b ? (0, i.jsx)(T.default, {
                                isActive: g,
                                isUserLurking: E,
                                isMember: C,
                                rsvped: U,
                                onRsvpClick: z,
                                onJoinGuildClick: B,
                                onGoToGuildClick: H,
                                guildName: null == t ? void 0 : t.name,
                                canInvite: P,
                                isChannelPublic: $,
                                onInviteClick: Y
                            }) : (0, i.jsx)(S.default, {
                                entityType: d,
                                isJoined: f,
                                isActive: g,
                                isUserLurking: E,
                                rsvped: U,
                                canInvite: P,
                                isChannelPublic: $,
                                onContextMenu: V,
                                onJoinClick: O,
                                onRsvpClick: z,
                                onStartClick: F,
                                onInviteClick: Y,
                                onEndClick: J
                            })]
                        }), ea && (0, i.jsx)("hr", {
                            className: A.divider
                        })]
                    }), ea && (0, i.jsx)(I.default, {
                        recurrenceRule: q,
                        guildEventId: X,
                        onClick: K
                    })]
                })
            }(t = a || (a = {}))[t.BANNER = 0] = "BANNER", t[t.THUMBNAIL = 1] = "THUMBNAIL"
        },
        123030: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return C
                }
            });
            var t = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("249654"),
                r = l("446674"),
                u = l("77078"),
                d = l("272030"),
                o = l("42203"),
                c = l("305961"),
                h = l("433487"),
                v = l("398604"),
                m = l("397680"),
                x = l("393745"),
                g = l("745049"),
                E = l("49111"),
                f = l("782340"),
                N = l("157624");

            function C(e) {
                let {
                    originalScheduledStartTime: n,
                    guildEventId: a,
                    onClick: C
                } = e, j = s.default.fromTimestamp(Math.floor(n.getTime() / E.Durations.SECOND)), p = (0, r.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(a)), S = (0, m.default)(j, null == p ? void 0 : p.id), k = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), _ = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(null == p ? void 0 : p.channel_id));
                if (null == p) return null;
                let {
                    is_canceled: I = !1
                } = null != S ? S : {}, T = (null == S ? void 0 : S.scheduled_start_time) != null ? new Date(null == S ? void 0 : S.scheduled_start_time) : n, R = e => {
                    e.stopPropagation(), null != k && (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return n => (0, t.jsx)(e, {
                            guildEventId: p.id,
                            recurrenceId: j,
                            channel: _,
                            guild: k,
                            ...n
                        })
                    })
                };
                return (0, t.jsxs)(u.ClickableContainer, {
                    className: i(N.container, {
                        [N.canceled]: I
                    }),
                    onClick: e => {
                        e.stopPropagation(), !I && (null == C || C(j))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, t.jsx)(x.GuildEventTimeStatus, {
                        startTime: T.toISOString(),
                        status: I ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED,
                        eventType: p.entity_type,
                        className: N.timeStatus
                    }), I && (0, t.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: N.canceledStatus,
                        children: f.default.Messages.EVENT_CANCELED
                    }), (0, t.jsx)(u.Tooltip, {
                        text: f.default.Messages.MORE,
                        position: "top",
                        "aria-label": f.default.Messages.EDIT,
                        children: e => (0, t.jsx)(u.Clickable, {
                            ...e,
                            onClick: R,
                            className: N.iconButton,
                            children: (0, t.jsx)(h.default, {
                                width: 20,
                                height: 20,
                                className: N.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return o
                }
            }), l("222007");
            var t = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("822516"),
                r = l("123030"),
                u = l("782340"),
                d = l("849882");

            function o(e) {
                let {
                    recurrenceRule: n,
                    guildEventId: l,
                    onClick: o
                } = e, [c, h] = a.useState([]);
                a.useEffect(() => {
                    if (null != n) {
                        let e = (0, s.getRRule)(n);
                        h((0, s.generateNextRecurrences)(4, e))
                    }
                }, [n]);
                let v = a.useMemo(() => {
                    if (null == n || 0 === c.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + s.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let l = c[c.length - 1],
                        t = (0, s.getRRule)(n),
                        a = t.after(l);
                    return null != a && !(a > e) && !0
                }, [n, c]);
                return (0, t.jsxs)("div", {
                    className: d.recurrences,
                    children: [(0, t.jsx)(i.Heading, {
                        variant: "heading-sm/medium",
                        className: d.heading,
                        children: u.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, t.jsxs)(i.Scroller, {
                        className: d.scroller,
                        children: [c.map(e => (0, t.jsx)(r.default, {
                            originalScheduledStartTime: e,
                            guildEventId: l,
                            onClick: o
                        }, e.toString())), v && (0, t.jsx)(i.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == n) return;
                                let l = (0, s.getRRule)(n),
                                    t = c[c.length - 1];
                                h([...c, ...(0, s.generateNextRecurrences)(4, l, t)])
                            },
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.MIN,
                            color: i.Button.Colors.LINK,
                            className: d.button,
                            children: u.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        29913: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return o
                }
            });
            var t = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("77078"),
                r = l("849467"),
                u = l("782340"),
                d = l("130221");

            function o(e) {
                let {
                    guild: n,
                    speakers: l,
                    speakerCount: a,
                    className: o
                } = e, c = l.slice(0, 5), h = c.map(e => {
                    var l, a;
                    return (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.getAvatarURL(n.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, t.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, t.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), v = a - c.length;
                return (0, t.jsxs)("div", {
                    className: i(d.grid, o),
                    children: [h, v > 0 && (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, t.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, t.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: v
                            })
                        })]
                    })]
                })
            }
        }
    }
]);