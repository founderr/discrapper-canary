(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6425"], {
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                a = n("446674"),
                r = n("77078"),
                d = n("102985"),
                s = n("79798"),
                o = n("754474"),
                c = n("158998"),
                f = n("782340"),
                E = n("892802");

            function S(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let v = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: u,
                    botVerified: a,
                    discriminatorClass: d,
                    className: o,
                    usernameClass: c,
                    color: S,
                    botClass: v,
                    showStreamerModeTooltip: g
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(E.info, o),
                    children: [(0, l.jsx)(r.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: g,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: i(E.username, c),
                            style: null != S ? {
                                color: S
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: i(E.infoSpacing, d),
                        children: n
                    }) : void 0, null != u && (0, l.jsx)(s.default, {
                        type: u,
                        className: i(E.infoSpacing, v),
                        verified: a
                    })]
                })
            };
            var g = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: u,
                    forceUsername: i,
                    showAccountIdentifier: r,
                    overrideDiscriminator: s,
                    forcePomelo: f,
                    ...E
                } = e, g = (0, a.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), _ = g || t || n.isNonUserBot(), N = n.toString(), m = c.default.getName(n), h = i ? N : null != u ? u : m, C = n.isPomelo() || f;
                if (C || h !== N) {
                    let e = h === N && C && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : h,
                        t = r && e !== "@".concat(N) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(v, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: S(n),
                        showStreamerModeTooltip: g && e !== m,
                        ...E
                    })
                }
                return (0, l.jsx)(o.default, {
                    name: h,
                    botType: S(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: _ || h !== N ? null : null != s ? s : n.discriminator,
                    ...E
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M6 10a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        className: r
                    })]
                })
            }
        },
        15433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchDirectoryEntries: function() {
                    return s
                }
            });
            var l = n("483366"),
                u = n.n(l),
                i = n("872717"),
                a = n("913144"),
                r = n("730647"),
                d = n("49111");
            let s = u(async e => {
                try {
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_START"
                    });
                    let t = await i.default.get({
                        url: d.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
                        query: {
                            type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
                        }
                    });
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                        channelId: e,
                        entries: t.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                    })
                }
            }, 200)
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return r
                }
            });
            var l = n("866227"),
                u = n.n(l),
                i = n("249654"),
                a = n("745049");

            function r(e, t, n, l) {
                let r = u(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: d - a.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (r.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            i = e.isBetween(u(d).subtract(a.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || i && !l ? void 0 : a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = i.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + a.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    f = r.isBetween(o, c);
                if (f && null == t && !l) return a.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("446674"),
                u = n("913144"),
                i = n("271938"),
                a = n("398604"),
                r = n("49129"),
                d = n("745049");
            let s = {},
                o = {};

            function c(e) {
                let t = {
                    ...s
                };
                delete t[e], s = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class f extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return s[e]
                }
                getAllEventDismissals() {
                    return s
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: s,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            f.displayName = "UpcomingEventNoticesStore", f.persistKey = "UpcomingEventNotices";
            var E = new f(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...s
                    };
                    n[t] = Date.now(), s = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && c(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    c(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = i.default.getId();
                    if (t !== l) return;
                    let u = a.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = s[n];
                    if (null != c) return;
                    let f = o[n],
                        E = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
                    if (E === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...s
                        };
                        e[n] = Date.now(), s = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...o
                    };
                    n[t] = Date.now(), o = n
                }
            })
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                u = n("446674"),
                i = n("817963"),
                a = n("923959"),
                r = n("305961"),
                d = n("957255"),
                s = n("49111"),
                o = (e, t) => {
                    let n = (0, u.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, i.useManageResourcePermissions)(n),
                        c = (0, u.useStateFromStores)([a.default], () => a.default.getChannels(e)[a.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        E = (0, u.useStateFromStores)([d.default], () => {
                            if (d.default.can(s.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, i.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, o]);
                    return E
                }
        },
        202358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("446674"),
                u = n("567469"),
                i = n("998716"),
                a = n("834052"),
                r = n("42203"),
                d = n("305961");

            function s(e) {
                let {
                    id: t,
                    data: {
                        guild: n,
                        instance: s,
                        speakers: o,
                        participantCount: c
                    },
                    context: f
                } = e, E = (0, l.useStateFromStores)([d.default, r.default], () => {
                    var e;
                    return d.default.getGuild(null === (e = r.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
                }, [t]), S = (0, l.useStateFromStores)([a.default], () => a.default.getStageInstanceByChannel(t), [t]), v = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), g = (0, u.useStageParticipantsCount)(t), _ = null != S ? v : o, N = (null != S ? g : c) - _.length;
                return {
                    channelId: t,
                    guild: null != E ? E : n,
                    stage: null != S ? S : s,
                    speakers: _,
                    audienceCount: N,
                    context: f
                }
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                u = n("446674"),
                i = n("398604");

            function a(e, t) {
                let n = (0, u.useStateFromStoresArray)([i.default], () => {
                        var e, n;
                        return null !== (n = null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                    }),
                    a = l.useMemo(() => null == n ? void 0 : n.find(t => t.event_exception_id === e), [n, e]);
                return a
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("299039"),
                i = n("398604"),
                a = n("397680"),
                r = n("822516");

            function d(e, t) {
                let n, d;
                let s = (0, l.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e)),
                    o = (0, a.default)(t, e);
                if (null == s) return {};
                if (null == t) return n = new Date(s.scheduled_start_time), {
                    startTime: n,
                    endTime: d = null != s.scheduled_end_time ? new Date(s.scheduled_end_time) : null
                };
                let c = null != s.recurrence_rule ? (0, r.getRRule)(s.recurrence_rule) : null;
                return null == c ? {} : (n = new Date((null == o ? void 0 : o.scheduled_start_time) == null ? u.default.extractTimestamp(t) : o.scheduled_start_time), {
                    startTime: n,
                    endTime: d = (null == o ? void 0 : o.scheduled_end_time) == null ? null : new Date(o.scheduled_end_time)
                })
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return m
                },
                useActiveEventsByChannel: function() {
                    return h
                },
                useGuildUpcomingEventsNotice: function() {
                    return C
                },
                useGuildActiveEvent: function() {
                    return T
                },
                useGuildChannelScheduledEvents: function() {
                    return p
                },
                useFirstActiveEventChannel: function() {
                    return I
                },
                useImminentUpcomingGuildEvents: function() {
                    return D
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                i = n("962199"),
                a = n("42203"),
                r = n("923959"),
                d = n("305961"),
                s = n("957255"),
                o = n("449008"),
                c = n("398604"),
                f = n("49129"),
                E = n("431934"),
                S = n("822516"),
                v = n("745049"),
                g = n("49111");
            let _ = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, i.default, c.default, s.default, a.default, r.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return _;
                    let l = n.hasFeature(g.GuildFeatures.HUB);
                    if (l) {
                        var u, f;
                        let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (f = i.default.getEventDirectoryEntries(e)) && void 0 !== f ? f : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let E = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return E.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = a.default.getChannel(t);
                        return s.default.can(g.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function m(e) {
                return (0, u.useStateFromStores)([c.default, a.default, s.default], () => {
                    let t = a.default.getChannel(e);
                    if (!s.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function h(e) {
                let t = (0, u.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function C(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, a.default, s.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || e.status !== v.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = a.default.getChannel(e.channel_id);
                            return s.default.can(g.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, S.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != d)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = i[t.id],
                            a = r[t.id],
                            s = null !== (n = d[t.id]) && void 0 !== n && n,
                            o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, a, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function T(e) {
                return (0, u.useStateFromStores)([c.default, a.default, s.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = a.default.getChannel(e.channel_id);
                        return s.default.can(g.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function p(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function I(e) {
                return (0, u.useStateFromStores)([a.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = a.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return a.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function D(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let i = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    a = l.useMemo(() => i.filter(e => {
                        let {
                            withinStartWindow: t,
                            diffMinutes: n
                        } = (0, S.getEventTimeData)(e.scheduled_start_time, e.scheduled_end_time);
                        return e.status !== v.GuildScheduledEventStatus.ACTIVE && t && n < 15
                    }), [i]);
                return a
            }
        },
        473031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("922770"),
                a = n("267567"),
                r = n("998716"),
                d = n("834052"),
                s = n("42203"),
                o = n("957255"),
                c = n("945956"),
                f = n("697218"),
                E = n("374021"),
                S = n("398604"),
                v = n("152475"),
                g = n("202358"),
                _ = n("598639"),
                N = n("189443"),
                m = n("841363"),
                h = n("822516"),
                C = n("93550"),
                T = n("617347"),
                p = n("369404"),
                I = n("49111");

            function D(e) {
                var t;
                let {
                    guildEvent: n,
                    guildId: D,
                    truncate: G,
                    onActionTaken: R,
                    className: U,
                    isNew: y
                } = e, {
                    id: L,
                    guild_id: M,
                    channel_id: x,
                    creator_id: A,
                    name: V,
                    description: P,
                    entity_type: O,
                    image: F,
                    recurrence_rule: H
                } = n, j = (0, h.getNextRecurrenceIdInEvent)(n), w = (0, u.useStateFromStores)([S.default], () => S.default.isInterestedInEventRecurrence(L, j), [L, j]), B = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(M), [M]), b = (0, u.useStateFromStores)([d.default], () => d.default.getStageInstanceByChannel(x), [x]), k = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(x), [x]), K = (0, u.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
                    speakers: W
                } = (0, g.default)({
                    id: x,
                    data: {
                        guild: null,
                        instance: b,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: M,
                        instance: b
                    }
                }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), q = (0, S.isGuildScheduledEventActive)(n), z = Y === x && null != Y && q, Z = W.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), X = Z.length, J = (0, u.useStateFromStores)([o.default], () => o.default.can(I.Permissions.CONNECT, k), [k]), Q = (0, v.default)(n), {
                    isMember: $,
                    guild: ee
                } = (0, _.default)(M, L), et = (0, p.default)({
                    guild: ee,
                    channel: k,
                    guildScheduledEvent: n,
                    isActive: q,
                    recurrenceId: j,
                    onActionTaken: R
                }), en = (0, i.default)(D), el = B ? void 0 : e => (0, E.openGuildEventDetails)({
                    eventId: L,
                    parentGuildId: D,
                    recurrenceId: e
                });
                return (0, l.jsx)(T.default, {
                    guild: ee,
                    channel: k,
                    creator: K,
                    name: V,
                    entityType: O,
                    description: null != P ? P : void 0,
                    location: null !== (t = (0, m.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != F ? (0, C.default)(n) : void 0,
                    imageLocation: T.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: q,
                    isUserLurking: B,
                    isJoined: z,
                    isMember: $,
                    isHub: en,
                    speakers: Z,
                    canConnect: J,
                    speakerCount: X,
                    rsvped: w,
                    canInvite: Q,
                    ...et,
                    className: U,
                    onClick: el,
                    truncate: G,
                    isNew: y,
                    guildEventId: L,
                    recurrenceRule: (0, N.recurrenceRuleFromServer)(H),
                    recurrenceId: j
                })
            }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return u
                }
            });
            var l = n("308503");
            let u = (0, l.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        659707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                u = n("884691"),
                i = n("917351"),
                a = n.n(i),
                r = n("249654"),
                d = n("446674"),
                s = n("77078"),
                o = n("267363"),
                c = n("15433"),
                f = n("27978"),
                E = n("923959"),
                S = n("124948"),
                v = n("305961"),
                g = n("660478"),
                _ = n("476765"),
                N = n("943232"),
                m = n("945330"),
                h = n("599110"),
                C = n("449008"),
                T = n("933326"),
                p = n("334683"),
                I = n("534222"),
                D = n("473031"),
                G = n("266763"),
                R = n("842672"),
                U = n("745049"),
                y = n("49111"),
                L = n("133335"),
                M = n("782340"),
                x = n("639480");

            function A(e) {
                let {
                    transitionState: t,
                    onClose: i,
                    guildId: A
                } = e, V = (0, _.useUID)(), P = (0, d.useStateFromStores)([v.default], () => v.default.getGuild(A)), O = (0, p.default)(null == P ? void 0 : P.id), F = (0, I.default)(A), H = u.useRef(g.default.ackMessageId(A, L.ReadStateTypes.GUILD_EVENT)), j = (0, R.default)();
                return u.useEffect(() => {
                    F.forEach(e => T.default.getGuildEventUserCounts(A, e.id, [])), T.default.getGuildEventsForCurrentUser(A)
                }, [F, A]), u.useEffect(() => {
                    let e = v.default.getGuild(A);
                    if (!(null == e ? void 0 : e.hasFeature(y.GuildFeatures.HUB))) return;
                    let {
                        showHubEventsList: t
                    } = f.default.getCurrentConfig({
                        guildId: A,
                        location: "d3755f_1"
                    });
                    if (!t) return;
                    let n = E.default.getDefaultChannel(A);
                    null != n && c.fetchDirectoryEntries(n.id)
                }, [A]), u.useEffect(() => {
                    h.default.track(y.AnalyticEvents.OPEN_MODAL, {
                        type: U.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: A,
                        guild_events_count: F.length
                    })
                }, []), u.useEffect(() => {
                    a(F).map(e => e.creator_id).filter(C.isNotNullish).uniq().forEach(e => {
                        S.default.requestMember(A, e)
                    })
                }, [A, F]), u.useEffect(() => {
                    null != A && (0, o.ackGuildFeature)(A, L.ReadStateTypes.GUILD_EVENT)
                }, [A]), (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-labelledby": V,
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        className: x.header,
                        children: [(0, l.jsx)(N.default, {
                            className: x.icon
                        }), (0, l.jsx)(s.Heading, {
                            id: V,
                            variant: "heading-md/semibold",
                            children: F.length > 0 ? M.default.Messages.GUILD_EVENTS_PLURAL.format({
                                number: F.length
                            }) : M.default.Messages.GUILD_EVENTS
                        }), O && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: x.divider,
                                children: "|"
                            }), (0, l.jsx)(s.Button, {
                                size: s.Button.Sizes.MIN,
                                onClick: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("590942").then(n.bind(n, "590942"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            guildId: A
                                        })
                                    }, j)
                                },
                                innerClassName: x.button,
                                children: M.default.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, l.jsx)(s.Clickable, {
                            onClick: i,
                            className: x.iconButton,
                            "aria-label": M.default.Messages.CLOSE,
                            children: (0, l.jsx)(m.default, {
                                className: x.icon
                            })
                        })]
                    }), (0, l.jsx)(s.ModalContent, {
                        className: x.content,
                        children: F.length > 0 ? F.map(e => (0, l.jsx)(D.default, {
                            guildEvent: e,
                            guildId: A,
                            onActionTaken: i,
                            isNew: null != H.current && r.default.compare(e.id, H.current) > 0
                        }, e.id)) : (0, l.jsx)(G.default, {
                            guildId: A,
                            onClose: i
                        })
                    })]
                })
            }
        },
        266763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                a = n("592407"),
                r = n("27978"),
                d = n("119184"),
                s = n("305961"),
                o = n("957255"),
                c = n("943232"),
                f = n("49111"),
                E = n("782340"),
                S = n("909199");

            function v(e) {
                let {
                    guildId: t,
                    onClose: n
                } = e, {
                    showHubEventsList: v
                } = r.default.useExperiment({
                    guildId: t,
                    location: "6597ca_1"
                }, {
                    autoTrackExposure: !1
                }), g = (0, u.useStateFromStores)([s.default, o.default], () => {
                    let e = s.default.getGuild(t);
                    return o.default.can(f.Permissions.MANAGE_ROLES, e)
                }, [t]), _ = (0, u.useStateFromStores)([s.default], () => {
                    let e = s.default.getGuild(t);
                    return v && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
                }, [t, v]);
                return (0, l.jsxs)("div", {
                    className: S.container,
                    children: [(0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: S.circle,
                            children: (0, l.jsx)(c.default, {
                                height: 40,
                                width: 40,
                                className: S.icon
                            })
                        })
                    }), (0, l.jsx)(i.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: S.title,
                        children: _ ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: S.subtitle,
                        children: _ ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), g && (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: S.roleTip,
                        children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: () => {
                                a.default.open(t, f.GuildSettingsSections.ROLES), n()
                            }
                        })
                    })]
                })
            }
        },
        936965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l, u, i = n("37983"),
                a = n("884691"),
                r = n("77078"),
                d = n("271938"),
                s = n("398604"),
                o = n("322224"),
                c = n("822516"),
                f = n("745049"),
                E = n("782340"),
                S = n("616762");

            function v(e, t) {
                let n = d.default.getId();
                return s.default.getRsvp(e, t, n)
            }

            function g(e, t, n, l) {
                let u = v(e, t);
                null != u || l === f.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }

            function _(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...d
                } = e, [s, o] = a.useState(0), c = v(t.id, null), _ = (null == c ? void 0 : c.response) === f.GuildScheduledEventUserResponses.INTERESTED, N = _ ? f.GuildScheduledEventUserResponses.UNINTERESTED : f.GuildScheduledEventUserResponses.INTERESTED, m = v(t.id, n), h = _ && null == m || (null == m ? void 0 : m.response) === f.GuildScheduledEventUserResponses.INTERESTED, C = [{
                    name: _ ? E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES_UNINTERESTED : E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES_INTERESTED,
                    value: 0
                }, {
                    name: h ? E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE_UNINTERESTED : E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE_INTERESTED,
                    value: 1
                }];
                return (0, i.jsxs)(r.ModalRoot, {
                    ...d,
                    children: [(0, i.jsx)(r.ModalHeader, {
                        children: (0, i.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER
                        })
                    }), (0, i.jsx)(r.ModalContent, {
                        children: (0, i.jsx)(r.RadioGroup, {
                            className: S.responseOptions,
                            value: s,
                            options: C,
                            onChange: e => o(e.value)
                        })
                    }), (0, i.jsxs)(r.ModalFooter, {
                        children: [(0, i.jsx)(r.Button, {
                            onClick: () => {
                                0 === s ? g(t.id, null, l, N) : g(t.id, n, l, N), null == u || u(), d.onClose()
                            },
                            className: S.confirmButton,
                            children: E.default.Messages.OK
                        }), (0, i.jsx)(r.Button, {
                            onClick: d.onClose,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.RED,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function N(e, t, n, l) {
                let u = s.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let a = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u);
                null == a ? (g(e, null, n, f.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : (0, r.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(_, {
                    ...e,
                    event: u,
                    recurrenceId: a,
                    guildId: n,
                    onRsvp: l
                })))
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE"
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("77078"),
                u = n("244201"),
                i = n("558286"),
                a = n("49111");
            let r = "guild-event-modal";
            var d = () => {
                let e = (0, u.useAppContext)(),
                    t = e === a.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: r,
                    contextKey: t,
                    onCloseRequest: () => {
                        i.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(r, t)
                    }
                }
            }
        },
        27978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return r
                },
                useStageParticipantsCount: function() {
                    return d
                },
                useSortedRequestToSpeakParticipants: function() {
                    return s
                },
                useActualStageSpeakerCount: function() {
                    return o
                }
            }), n("222007");
            var l = n("446674"),
                u = n("334572"),
                i = n("488464"),
                a = n("998716");

            function r(e, t) {
                let [n] = (0, l.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], u.isVersionEqual);
                return n
            }

            function d(e, t) {
                return (0, l.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function s(e) {
                let [t] = (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableRequestToSpeakParticipants(e);
                    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], u.isVersionEqual);
                return t
            }

            function o(e) {
                return (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === a.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("913144"),
                u = n("327037"),
                i = n("462274"),
                a = n("535013"),
                r = n("42203"),
                d = n("26989"),
                s = n("713135"),
                o = n("386714");
            async function c(e, t) {
                var n, c, f;
                let E, {
                    withMutualGuilds: S = !1,
                    withMutualFriendsCount: v = !1,
                    friendToken: g,
                    preloadUserBanner: _ = !0,
                    dispatchWait: N = !1,
                    guildId: m,
                    channelId: h
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, i.maybeFetchColors)(t), null != m && !S && (S = !0), null != m && (E = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
                    guildMember: d.default.getMember(m, e),
                    channel: r.default.getChannel(h)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
                let C = s.default.getUserProfile(e),
                    T = s.default.getMutualGuilds(e),
                    p = s.default.getMutualFriendsCount(e),
                    I = s.default.isFetchingProfile(e),
                    D = (null == C ? void 0 : C.profileFetchFailed) || !I && (!Array.isArray(T) && S || null == p && v),
                    G = _ ? o.default : void 0,
                    R = !1;
                if (null != m) {
                    let t = s.default.getGuildMemberProfile(e, m);
                    R = null == t
                }
                if (!D && !R && (I || Date.now() - (null !== (f = null == C ? void 0 : C.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                N ? await l.default.wait(() => (0, u.fetchProfile)(e, {
                    withMutualGuilds: S,
                    withMutualFriendsCount: v,
                    friendToken: g,
                    guildId: m,
                    connectionsRoleId: E
                }, G)) : await (0, u.fetchProfile)(e, {
                    withMutualGuilds: S,
                    withMutualFriendsCount: v,
                    friendToken: g,
                    guildId: m,
                    connectionsRoleId: E
                }, G)
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("845579"),
                u = n("217513");

            function i(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, u.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let i = l.GifAutoPlay.getSetting(),
                    a = n.getBannerURL({
                        canAnimate: i,
                        size: 480
                    });
                if (null == a) return;
                let r = new Image;
                r.src = a
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                a = n("79798"),
                r = n("988268"),
                d = n("888770"),
                s = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: u,
                        nameColor: r,
                        className: s,
                        botType: o,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: E,
                        botVerified: S = !1,
                        style: v,
                        useRemSizes: g = !1,
                        usernameIcon: _
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(s, d.nameTag),
                        style: v,
                        children: [(0, l.jsxs)("span", {
                            className: i(d.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [_, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, l.jsx)(a.default, {
                            type: o,
                            invertColor: u,
                            className: i(E, d.bot),
                            verified: S,
                            useRemSizes: g
                        }) : null]
                    })
                }
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                i = n("696675"),
                a = n("75196"),
                r = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: i,
                            fill: u
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: i,
                            fill: u
                        })]
                    })
                }, i.MicrophoneIcon)
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            }), n("222007")
        }
    }
]);