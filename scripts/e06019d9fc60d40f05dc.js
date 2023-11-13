(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50473"], {
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

            function v(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let S = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: u,
                    botVerified: a,
                    discriminatorClass: d,
                    className: o,
                    usernameClass: c,
                    color: v,
                    botClass: S,
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
                            style: null != v ? {
                                color: v
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: i(E.infoSpacing, d),
                        children: n
                    }) : void 0, null != u && (0, l.jsx)(s.default, {
                        type: u,
                        className: i(E.infoSpacing, S),
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
                } = e, g = (0, a.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), m = g || t || n.isNonUserBot(), h = n.toString(), _ = c.default.getName(n), N = i ? h : null != u ? u : _, p = n.isPomelo() || f;
                if (p || N !== h) {
                    let e = N === h && p && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : N,
                        t = r && e !== "@".concat(h) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(S, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: v(n),
                        showStreamerModeTooltip: g && e !== _,
                        ...E
                    })
                }
                return (0, l.jsx)(o.default, {
                    name: N,
                    botType: v(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: m || N !== h ? null : null != s ? s : n.discriminator,
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
                }, [t]), v = (0, l.useStateFromStores)([a.default], () => a.default.getStageInstanceByChannel(t), [t]), S = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), g = (0, u.useStageParticipantsCount)(t), m = null != v ? S : o, h = (null != v ? g : c) - m.length;
                return {
                    channelId: t,
                    guild: null != E ? E : n,
                    stage: null != v ? v : s,
                    speakers: m,
                    audienceCount: h,
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
                    return h
                },
                useActiveEvent: function() {
                    return _
                },
                useActiveEventsByChannel: function() {
                    return N
                },
                useGuildUpcomingEventsNotice: function() {
                    return p
                },
                useGuildActiveEvent: function() {
                    return C
                },
                useGuildChannelScheduledEvents: function() {
                    return T
                },
                useFirstActiveEventChannel: function() {
                    return I
                },
                useImminentUpcomingGuildEvents: function() {
                    return y
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
                v = n("822516"),
                S = n("745049"),
                g = n("49111");
            let m = [];

            function h(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, i.default, c.default, s.default, a.default, r.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return m;
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

            function _(e) {
                return (0, u.useStateFromStores)([c.default, a.default, s.default], () => {
                    let t = a.default.getChannel(e);
                    if (!s.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function N(e) {
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

            function p(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, a.default, s.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || e.status !== S.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = a.default.getChannel(e.channel_id);
                            return s.default.can(g.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => ({
                        ...e,
                        [t.id]: c.default.hasRsvp(t.id, null)
                    }), {}), [l]);
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

            function C(e) {
                return (0, u.useStateFromStores)([c.default, a.default, s.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = a.default.getChannel(e.channel_id);
                        return s.default.can(g.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function T(e) {
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

            function y(e) {
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
                        } = (0, v.getEventTimeData)(e.scheduled_start_time, e.scheduled_end_time);
                        return e.status !== S.GuildScheduledEventStatus.ACTIVE && t && n < 15
                    }), [i]);
                return a
            }
        },
        473031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("249654"),
                i = n("446674"),
                a = n("922770"),
                r = n("267567"),
                d = n("998716"),
                s = n("834052"),
                o = n("42203"),
                c = n("957255"),
                f = n("945956"),
                E = n("697218"),
                v = n("374021"),
                S = n("398604"),
                g = n("152475"),
                m = n("202358"),
                h = n("598639"),
                _ = n("189443"),
                N = n("841363"),
                p = n("93550"),
                C = n("617347"),
                T = n("369404"),
                I = n("49111");

            function y(e) {
                var t;
                let {
                    guildEvent: n,
                    guildId: y,
                    truncate: G,
                    onActionTaken: D,
                    className: M,
                    isNew: x
                } = e, {
                    id: L,
                    guild_id: A,
                    channel_id: U,
                    creator_id: V,
                    name: F,
                    description: O,
                    entity_type: P,
                    image: R,
                    recurrence_rule: w
                } = n, H = (0, i.useStateFromStores)([S.default], () => S.default.hasRsvp(L, null), [L]), b = (0, i.useStateFromStores)([r.default], () => r.default.isLurking(A), [A]), j = (0, i.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(U), [U]), B = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(U), [U]), k = (0, i.useStateFromStores)([E.default], () => E.default.getUser(V), [V]), {
                    speakers: W
                } = (0, m.default)({
                    id: U,
                    data: {
                        guild: null,
                        instance: j,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: A,
                        instance: j
                    }
                }), Y = (0, i.useStateFromStores)([f.default], () => f.default.getChannelId()), q = (0, S.isGuildScheduledEventActive)(n), z = Y === U && null != Y && q, Z = W.filter(e => e.type === d.StageChannelParticipantTypes.VOICE), K = Z.length, X = (0, i.useStateFromStores)([c.default], () => c.default.can(I.Permissions.CONNECT, B), [B]), J = (0, g.default)(n), {
                    isMember: Q,
                    guild: $
                } = (0, h.default)(A, L), ee = null != n.recurrence_rule ? u.default.fromTimestamp(new Date(n.scheduled_start_time).getTime()) : void 0, et = (0, T.default)({
                    guild: $,
                    channel: B,
                    guildScheduledEvent: n,
                    isActive: q,
                    rsvped: H,
                    recurrenceId: ee,
                    onActionTaken: D
                }), en = (0, a.default)(y), el = b ? void 0 : e => (0, v.openGuildEventDetails)({
                    eventId: L,
                    parentGuildId: y,
                    recurrenceId: e
                });
                return (0, l.jsx)(C.default, {
                    guild: $,
                    channel: B,
                    creator: k,
                    name: F,
                    entityType: P,
                    description: null != O ? O : void 0,
                    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != R ? (0, p.default)(n) : void 0,
                    imageLocation: C.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: q,
                    isUserLurking: b,
                    isJoined: z,
                    isMember: Q,
                    isHub: en,
                    speakers: Z,
                    canConnect: X,
                    speakerCount: K,
                    rsvped: H,
                    canInvite: J,
                    ...et,
                    className: M,
                    onClick: el,
                    truncate: G,
                    isNew: x,
                    guildEventId: L,
                    recurrenceRule: (0, _.recurrenceRuleFromServer)(w),
                    recurrenceId: ee
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
                    return V
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
                v = n("124948"),
                S = n("305961"),
                g = n("660478"),
                m = n("476765"),
                h = n("943232"),
                _ = n("945330"),
                N = n("599110"),
                p = n("449008"),
                C = n("933326"),
                T = n("334683"),
                I = n("534222"),
                y = n("473031"),
                G = n("266763"),
                D = n("842672"),
                M = n("745049"),
                x = n("49111"),
                L = n("133335"),
                A = n("782340"),
                U = n("639480");

            function V(e) {
                let {
                    transitionState: t,
                    onClose: i,
                    guildId: V
                } = e, F = (0, m.useUID)(), O = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(V)), P = (0, T.default)(null == O ? void 0 : O.id), R = (0, I.default)(V), w = u.useRef(g.default.ackMessageId(V, L.ReadStateTypes.GUILD_EVENT)), H = (0, D.default)();
                return u.useEffect(() => {
                    R.forEach(e => C.default.getGuildEventUserCounts(V, e.id, [])), C.default.getGuildEventsForCurrentUser(V)
                }, [R, V]), u.useEffect(() => {
                    let e = S.default.getGuild(V);
                    if (!(null == e ? void 0 : e.hasFeature(x.GuildFeatures.HUB))) return;
                    let {
                        showHubEventsList: t
                    } = f.default.getCurrentConfig({
                        guildId: V,
                        location: "d3755f_1"
                    });
                    if (!t) return;
                    let n = E.default.getDefaultChannel(V);
                    null != n && c.fetchDirectoryEntries(n.id)
                }, [V]), u.useEffect(() => {
                    N.default.track(x.AnalyticEvents.OPEN_MODAL, {
                        type: M.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: V,
                        guild_events_count: R.length
                    })
                }, []), u.useEffect(() => {
                    a(R).map(e => e.creator_id).filter(p.isNotNullish).uniq().forEach(e => {
                        v.default.requestMember(V, e)
                    })
                }, [V, R]), u.useEffect(() => {
                    null != V && (0, o.ackGuildFeature)(V, L.ReadStateTypes.GUILD_EVENT)
                }, [V]), (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-labelledby": F,
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        className: U.header,
                        children: [(0, l.jsx)(h.default, {
                            className: U.icon
                        }), (0, l.jsx)(s.Heading, {
                            id: F,
                            variant: "heading-md/semibold",
                            children: R.length > 0 ? A.default.Messages.GUILD_EVENTS_PLURAL.format({
                                number: R.length
                            }) : A.default.Messages.GUILD_EVENTS
                        }), P && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: U.divider,
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
                                            guildId: V
                                        })
                                    }, H)
                                },
                                innerClassName: U.button,
                                children: A.default.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, l.jsx)(s.Clickable, {
                            onClick: i,
                            className: U.iconButton,
                            "aria-label": A.default.Messages.CLOSE,
                            children: (0, l.jsx)(_.default, {
                                className: U.icon
                            })
                        })]
                    }), (0, l.jsx)(s.ModalContent, {
                        className: U.content,
                        children: R.length > 0 ? R.map(e => (0, l.jsx)(y.default, {
                            guildEvent: e,
                            guildId: V,
                            onActionTaken: i,
                            isNew: null != w.current && r.default.compare(e.id, w.current) > 0
                        }, e.id)) : (0, l.jsx)(G.default, {
                            guildId: V,
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
                    return S
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
                v = n("909199");

            function S(e) {
                let {
                    guildId: t,
                    onClose: n
                } = e, {
                    showHubEventsList: S
                } = r.default.useExperiment({
                    guildId: t,
                    location: "6597ca_1"
                }, {
                    autoTrackExposure: !1
                }), g = (0, u.useStateFromStores)([s.default, o.default], () => {
                    let e = s.default.getGuild(t);
                    return o.default.can(f.Permissions.MANAGE_ROLES, e)
                }, [t]), m = (0, u.useStateFromStores)([s.default], () => {
                    let e = s.default.getGuild(t);
                    return S && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
                }, [t, S]);
                return (0, l.jsxs)("div", {
                    className: v.container,
                    children: [(0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: v.circle,
                            children: (0, l.jsx)(c.default, {
                                height: 40,
                                width: 40,
                                className: v.icon
                            })
                        })
                    }), (0, l.jsx)(i.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: v.title,
                        children: m ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: v.subtitle,
                        children: m ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), g && (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: v.roleTip,
                        children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: () => {
                                a.default.open(t, f.GuildSettingsSections.ROLES), n()
                            }
                        })
                    })]
                })
            }
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
                    withMutualGuilds: v = !1,
                    withMutualFriendsCount: S = !1,
                    friendToken: g,
                    preloadUserBanner: m = !0,
                    dispatchWait: h = !1,
                    guildId: _,
                    channelId: N
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, i.maybeFetchColors)(t), null != _ && !v && (v = !0), null != _ && (E = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
                    guildMember: d.default.getMember(_, e),
                    channel: r.default.getChannel(N)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
                let p = s.default.getUserProfile(e),
                    C = s.default.getMutualGuilds(e),
                    T = s.default.getMutualFriendsCount(e),
                    I = s.default.isFetchingProfile(e),
                    y = (null == p ? void 0 : p.profileFetchFailed) || !I && (!Array.isArray(C) && v || null == T && S),
                    G = m ? o.default : void 0,
                    D = !1;
                if (null != _) {
                    let t = s.default.getGuildMemberProfile(e, _);
                    D = null == t
                }
                if (!y && !D && (I || Date.now() - (null !== (f = null == p ? void 0 : p.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                h ? await l.default.wait(() => (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: _,
                    connectionsRoleId: E
                }, G)) : await (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: _,
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
                        botVerified: v = !1,
                        style: S,
                        useRemSizes: g = !1,
                        usernameIcon: m
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(s, d.nameTag),
                        style: S,
                        children: [(0, l.jsxs)("span", {
                            className: i(d.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [m, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, l.jsx)(a.default, {
                            type: o,
                            invertColor: u,
                            className: i(E, d.bot),
                            verified: v,
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