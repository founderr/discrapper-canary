(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["489"], {
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
                r = n("446674"),
                a = n("77078"),
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
                    botVerified: r,
                    discriminatorClass: d,
                    className: o,
                    usernameClass: c,
                    color: v,
                    botClass: S,
                    showStreamerModeTooltip: g
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(E.info, o),
                    children: [(0, l.jsx)(a.Tooltip, {
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
                        verified: r
                    })]
                })
            };
            var g = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: u,
                    forceUsername: i,
                    showAccountIdentifier: a,
                    overrideDiscriminator: s,
                    forcePomelo: f,
                    ...E
                } = e, g = (0, r.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), m = g || t || n.isNonUserBot(), _ = n.toString(), N = c.default.getName(n), h = i ? _ : null != u ? u : N, p = n.isPomelo() || f;
                if (p || h !== _) {
                    let e = h === _ && p && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : h,
                        t = a && e !== "@".concat(_) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(S, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: v(n),
                        showStreamerModeTooltip: g && e !== N,
                        ...E
                    })
                }
                return (0, l.jsx)(o.default, {
                    name: h,
                    botType: v(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: m || h !== _ ? null : null != s ? s : n.discriminator,
                    ...E
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
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
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M6 10a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        className: a
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
                r = n("913144"),
                a = n("730647"),
                d = n("49111");
            let s = u(async e => {
                try {
                    r.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_START"
                    });
                    let t = await i.default.get({
                        url: d.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
                        query: {
                            type: a.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
                        }
                    });
                    r.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                        channelId: e,
                        entries: t.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                    })
                }
            }, 200)
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return a
                }
            });
            var l = n("866227"),
                u = n.n(l),
                i = n("249654"),
                r = n("745049");

            function a(e, t, n, l) {
                let a = u(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: d - r.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (a.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            i = e.isBetween(u(d).subtract(r.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || i && !l ? void 0 : r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = i.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + r.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    f = a.isBetween(o, c);
                if (f && null == t && !l) return r.UpcomingGuildEventNoticeTypes.NEW_EVENT
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
                r = n("398604"),
                a = n("49129"),
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
                    let u = r.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = s[n];
                    if (null != c) return;
                    let f = o[n],
                        E = (0, a.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
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
                r = n("923959"),
                a = n("305961"),
                d = n("957255"),
                s = n("49111"),
                o = (e, t) => {
                    let n = (0, u.useStateFromStores)([a.default], () => a.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, i.useManageResourcePermissions)(n),
                        c = (0, u.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
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
                r = n("834052"),
                a = n("42203"),
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
                } = e, E = (0, l.useStateFromStores)([d.default, a.default], () => {
                    var e;
                    return d.default.getGuild(null === (e = a.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
                }, [t]), v = (0, l.useStateFromStores)([r.default], () => r.default.getStageInstanceByChannel(t), [t]), S = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), g = (0, u.useStageParticipantsCount)(t), m = null != v ? S : o, _ = (null != v ? g : c) - m.length;
                return {
                    channelId: t,
                    guild: null != E ? E : n,
                    stage: null != v ? v : s,
                    speakers: m,
                    audienceCount: _,
                    context: f
                }
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return r
                }
            });
            var l = n("446674"),
                u = n("398604");

            function i(e, t) {
                let n = (0, l.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return a(n, e)
            }

            function r(e, t) {
                var n, l;
                let i = null !== (l = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return a(i, e)
            }

            function a(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return c
                }
            });
            var l = n("627445"),
                u = n.n(l),
                i = n("446674"),
                r = n("299039"),
                a = n("398604"),
                d = n("397680"),
                s = n("822516");

            function o(e, t, n) {
                var l;
                let r = null !== (l = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                u(null != r, "Event must be defined"), t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(r);
                let o = (0, d.default)(t, e);
                return f(r, o, t)
            }

            function c(e, t) {
                let n = (0, d.getEventException)(t, e.id);
                return f(e, n, t)
            }

            function f(e, t, n) {
                let l = null != e.recurrence_rule ? (0, s.getRRule)(e.recurrence_rule) : null;
                if (null == l || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let u = new Date((null == t ? void 0 : t.scheduled_start_time) == null ? r.default.extractTimestamp(n) : t.scheduled_start_time),
                    i = (null == t ? void 0 : t.scheduled_end_time) == null ? null : new Date(t.scheduled_end_time);
                return {
                    startTime: u,
                    endTime: i
                }
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return h
                },
                useActiveEventsByChannel: function() {
                    return p
                },
                useGuildUpcomingEventsNotice: function() {
                    return C
                },
                useGuildActiveEvent: function() {
                    return T
                },
                useGuildChannelScheduledEvents: function() {
                    return I
                },
                useFirstActiveEventChannel: function() {
                    return D
                },
                useImminentUpcomingGuildEvents: function() {
                    return G
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                i = n("962199"),
                r = n("42203"),
                a = n("923959"),
                d = n("305961"),
                s = n("957255"),
                o = n("449008"),
                c = n("398604"),
                f = n("49129"),
                E = n("431934"),
                v = n("466148"),
                S = n("822516"),
                g = n("745049"),
                m = n("49111");
            let _ = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, i.default, c.default, s.default, r.default, a.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return _;
                    let l = n.hasFeature(m.GuildFeatures.HUB);
                    if (l) {
                        var u, f;
                        let e = null === (u = a.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
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
                        let n = r.default.getChannel(t);
                        return s.default.can(m.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function h(e) {
                return (0, u.useStateFromStores)([c.default, r.default, s.default], () => {
                    let t = r.default.getChannel(e);
                    if (!s.default.can(m.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function p(e) {
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
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, r.default, s.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === g.GuildScheduledEventEntityTypes.NONE || e.status !== g.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = r.default.getChannel(e.channel_id);
                            return s.default.can(m.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllEventDismissals()),
                    a = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllUpcomingNoticeSeenTimes()),
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
                            r = a[t.id],
                            s = null !== (n = d[t.id]) && void 0 !== n && n,
                            o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, r, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function T(e) {
                return (0, u.useStateFromStores)([c.default, r.default, s.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === g.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = r.default.getChannel(e.channel_id);
                        return s.default.can(m.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function I(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function D(e) {
                return (0, u.useStateFromStores)([r.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = r.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return r.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function G(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let i = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    r = l.useMemo(() => i.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, v.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== g.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [i]);
                return r
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
                r = n("267567"),
                a = n("998716"),
                d = n("834052"),
                s = n("42203"),
                o = n("957255"),
                c = n("945956"),
                f = n("697218"),
                E = n("374021"),
                v = n("398604"),
                S = n("152475"),
                g = n("202358"),
                m = n("598639"),
                _ = n("189443"),
                N = n("841363"),
                h = n("822516"),
                p = n("93550"),
                C = n("617347"),
                T = n("369404"),
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
                    id: x,
                    guild_id: L,
                    channel_id: M,
                    creator_id: A,
                    name: V,
                    description: P,
                    entity_type: O,
                    image: F,
                    recurrence_rule: H
                } = n, j = (0, h.getNextRecurrenceIdInEvent)(n), w = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(x, j), [x, j]), b = (0, u.useStateFromStores)([r.default], () => r.default.isLurking(L), [L]), B = (0, u.useStateFromStores)([d.default], () => d.default.getStageInstanceByChannel(M), [M]), k = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(M), [M]), W = (0, u.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
                    speakers: K
                } = (0, g.default)({
                    id: M,
                    data: {
                        guild: null,
                        instance: B,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: L,
                        instance: B
                    }
                }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), q = (0, v.isGuildScheduledEventActive)(n), z = Y === M && null != Y && q, Z = K.filter(e => e.type === a.StageChannelParticipantTypes.VOICE), X = Z.length, J = (0, u.useStateFromStores)([o.default], () => o.default.can(I.Permissions.CONNECT, k), [k]), Q = (0, S.default)(n), {
                    isMember: $,
                    guild: ee
                } = (0, m.default)(L, x), et = (0, T.default)({
                    guild: ee,
                    channel: k,
                    guildScheduledEvent: n,
                    isActive: q,
                    recurrenceId: j,
                    onActionTaken: R
                }), en = (0, i.default)(D), el = b ? void 0 : e => (0, E.openGuildEventDetails)({
                    eventId: x,
                    parentGuildId: D,
                    recurrenceId: e
                });
                return (0, l.jsx)(C.default, {
                    guild: ee,
                    channel: k,
                    creator: W,
                    name: V,
                    entityType: O,
                    description: null != P ? P : void 0,
                    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != F ? (0, p.default)(n) : void 0,
                    imageLocation: C.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: q,
                    isUserLurking: b,
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
                    guildEventId: x,
                    recurrenceRule: (0, _.recurrenceRuleFromServer)(H),
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
                r = n.n(i),
                a = n("249654"),
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
                _ = n("943232"),
                N = n("945330"),
                h = n("599110"),
                p = n("449008"),
                C = n("933326"),
                T = n("334683"),
                I = n("534222"),
                D = n("473031"),
                G = n("266763"),
                R = n("842672"),
                U = n("745049"),
                y = n("49111"),
                x = n("133335"),
                L = n("782340"),
                M = n("639480");

            function A(e) {
                let {
                    transitionState: t,
                    onClose: i,
                    guildId: A
                } = e, V = (0, m.useUID)(), P = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(A)), O = (0, T.default)(null == P ? void 0 : P.id), F = (0, I.default)(A), H = u.useRef(g.default.ackMessageId(A, x.ReadStateTypes.GUILD_EVENT)), j = (0, R.default)();
                return u.useEffect(() => {
                    F.forEach(e => C.default.getGuildEventUserCounts(A, e.id, [])), C.default.getGuildEventsForCurrentUser(A)
                }, [F, A]), u.useEffect(() => {
                    let e = S.default.getGuild(A);
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
                    r(F).map(e => e.creator_id).filter(p.isNotNullish).uniq().forEach(e => {
                        v.default.requestMember(A, e)
                    })
                }, [A, F]), u.useEffect(() => {
                    null != A && (0, o.ackGuildFeature)(A, x.ReadStateTypes.GUILD_EVENT)
                }, [A]), (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-labelledby": V,
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        className: M.header,
                        children: [(0, l.jsx)(_.default, {
                            className: M.icon
                        }), (0, l.jsx)(s.Heading, {
                            id: V,
                            variant: "heading-md/semibold",
                            children: F.length > 0 ? L.default.Messages.GUILD_EVENTS_PLURAL.format({
                                number: F.length
                            }) : L.default.Messages.GUILD_EVENTS
                        }), O && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: M.divider,
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
                                innerClassName: M.button,
                                children: L.default.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, l.jsx)(s.Clickable, {
                            onClick: i,
                            className: M.iconButton,
                            "aria-label": L.default.Messages.CLOSE,
                            children: (0, l.jsx)(N.default, {
                                className: M.icon
                            })
                        })]
                    }), (0, l.jsx)(s.ModalContent, {
                        className: M.content,
                        children: F.length > 0 ? F.map(e => (0, l.jsx)(D.default, {
                            guildEvent: e,
                            guildId: A,
                            onActionTaken: i,
                            isNew: null != H.current && a.default.compare(e.id, H.current) > 0
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
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                r = n("592407"),
                a = n("27978"),
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
                } = a.default.useExperiment({
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
                                r.default.open(t, f.GuildSettingsSections.ROLES), n()
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
                    return _
                }
            }), n("222007");
            var l, u, i = n("37983"),
                r = n("884691"),
                a = n("77078"),
                d = n("271938"),
                s = n("398604"),
                o = n("322224"),
                c = n("822516"),
                f = n("745049"),
                E = n("782340"),
                v = n("616762");

            function S(e, t) {
                let n = d.default.getId();
                return s.default.getRsvp(e, t, n)
            }

            function g(e, t, n, l) {
                let u = S(e, t);
                null != u || l === f.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE";

            function m(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...d
                } = e, [s, o] = r.useState(0), c = S(t.id, null), m = (null == c ? void 0 : c.response) === f.GuildScheduledEventUserResponses.INTERESTED, _ = m ? f.GuildScheduledEventUserResponses.UNINTERESTED : f.GuildScheduledEventUserResponses.INTERESTED, N = _ === f.GuildScheduledEventUserResponses.INTERESTED ? E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(a.ConfirmModal, {
                    ...d,
                    header: N,
                    confirmText: E.default.Messages.OK,
                    cancelText: E.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === s ? g(t.id, null, l, _) : g(t.id, n, l, _), null == u || u(), d.onClose()
                    },
                    confirmButtonColor: a.Button.Colors.BRAND,
                    children: (0, i.jsx)(a.RadioGroup, {
                        className: v.responseOptions,
                        value: s,
                        options: [{
                            name: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function _(e, t, n, l) {
                let u = s.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let r = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u),
                    d = S(u.id, r);
                null == r ? (g(e, null, n, f.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != d ? (g(e, r, n, f.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, a.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(m, {
                    ...e,
                    event: u,
                    recurrenceId: r,
                    guildId: n,
                    onRsvp: l
                })))
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
                r = n("49111");
            let a = "guild-event-modal";
            var d = () => {
                let e = (0, u.useAppContext)(),
                    t = e === r.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: a,
                    contextKey: t,
                    onCloseRequest: () => {
                        i.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(a, t)
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
                    return a
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
                r = n("998716");

            function a(e, t) {
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
                    let t = i.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === r.StageChannelParticipantTypes.VOICE);
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
                r = n("535013"),
                a = n("42203"),
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
                    dispatchWait: _ = !1,
                    guildId: N,
                    channelId: h
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, i.maybeFetchColors)(t), null != N && !v && (v = !0), null != N && (E = null !== (c = null === (n = (0, r.getVisibleConnectionsRole)({
                    guildMember: d.default.getMember(N, e),
                    channel: a.default.getChannel(h)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
                let p = s.default.getUserProfile(e),
                    C = s.default.getMutualGuilds(e),
                    T = s.default.getMutualFriendsCount(e),
                    I = s.default.isFetchingProfile(e),
                    D = (null == p ? void 0 : p.profileFetchFailed) || !I && (!Array.isArray(C) && v || null == T && S),
                    G = m ? o.default : void 0,
                    R = !1;
                if (null != N) {
                    let t = s.default.getGuildMemberProfile(e, N);
                    R = null == t
                }
                if (!D && !R && (I || Date.now() - (null !== (f = null == p ? void 0 : p.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                _ ? await l.default.wait(() => (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: N,
                    connectionsRoleId: E
                }, G)) : await (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: N,
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
                    r = n.getBannerURL({
                        canAnimate: i,
                        size: 480
                    });
                if (null == r) return;
                let a = new Image;
                a.src = r
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                r = n("79798"),
                a = n("988268"),
                d = n("888770"),
                s = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: u,
                        nameColor: a,
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
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [m, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, l.jsx)(r.default, {
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
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                i = n("696675"),
                r = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(a),
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