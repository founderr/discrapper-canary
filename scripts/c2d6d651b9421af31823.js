(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94106"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        588715: function(e, t, n) {},
        690445: function(e, t, n) {},
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: d = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("845579"),
                d = n("662255"),
                i = n("306160");

            function s(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: s,
                    shiftId: r,
                    showIconFirst: o
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !i.SUPPORTS_COPY) return null;
                let E = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(u.MenuItem, {
                    id: E,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, i.copy)(n), null == s || s()
                    },
                    icon: d.default,
                    showIconFirst: o
                }, E)
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                d = n("913144"),
                i = n("398604"),
                s = n("813006"),
                r = n("730647");
            let o = !1,
                c = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new s.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class T extends a.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            T.displayName = "EventDirectoryStore";
            var S = new T(d.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, i.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        a = u.map(l, _);
                    c[t] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return i
                }
            });
            var l = n("866227"),
                u = n.n(l),
                a = n("249654"),
                d = n("745049");

            function i(e, t, n, l) {
                let i = u(),
                    s = new Date(e.scheduled_start_time).getTime(),
                    r = {
                        start: s - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: s
                    };
                if (i.isBetween(r.start, r.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(r.start, r.end),
                            a = e.isBetween(u(s).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), s);
                        return n || a && !l ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = a.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS, s),
                    E = i.isBetween(o, c);
                if (E && null == t && !l) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("271938"),
                d = n("398604"),
                i = n("49129"),
                s = n("745049");
            let r = {},
                o = {};

            function c(e) {
                let t = {
                    ...r
                };
                delete t[e], r = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        r = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return r[e]
                }
                getAllEventDismissals() {
                    return r
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: r,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
            var f = new E(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...r
                    };
                    n[t] = Date.now(), r = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === s.GuildScheduledEventStatus.CANCELED || t.status === s.GuildScheduledEventStatus.COMPLETED) && c(t.id)
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
                    } = e, l = a.default.getId();
                    if (t !== l) return;
                    let u = d.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = r[n];
                    if (null != c) return;
                    let E = o[n],
                        f = (0, i.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...r
                        };
                        e[n] = Date.now(), r = e
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
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("962199"),
                a = n("305961");

            function d(e, t) {
                return (0, l.useStateFromStoresObject)([a.default, u.default], () => {
                    let n = a.default.getGuild(e),
                        l = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: l,
                        guild: n
                    }
                }, [e, t])
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return g
                },
                useActiveEventsByChannel: function() {
                    return m
                },
                useGuildUpcomingEventsNotice: function() {
                    return R
                },
                useGuildActiveEvent: function() {
                    return D
                },
                useGuildChannelScheduledEvents: function() {
                    return M
                },
                useFirstActiveEventChannel: function() {
                    return C
                },
                useImminentUpcomingGuildEvents: function() {
                    return h
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                a = n("962199"),
                d = n("42203"),
                i = n("923959"),
                s = n("305961"),
                r = n("957255"),
                o = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                T = n("822516"),
                S = n("745049"),
                I = n("49111");
            let v = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([s.default, a.default, c.default, r.default, d.default, i.default], () => {
                    let n = s.default.getGuild(e);
                    if (null == n) return v;
                    let l = n.hasFeature(I.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = i.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = a.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : a.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let f = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = d.default.getChannel(t);
                        return r.default.can(I.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function g(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = d.default.getChannel(e);
                    if (!r.default.can(I.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function m(e) {
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

            function R(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, d.default, r.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || e.status !== S.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = d.default.getChannel(e.channel_id);
                            return r.default.can(I.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    i = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    s = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, T.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != s)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = a[t.id],
                            d = i[t.id],
                            r = null !== (n = s[t.id]) && void 0 !== n && n,
                            o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, d, r);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function D(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = d.default.getChannel(e.channel_id);
                        return r.default.can(I.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function M(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([d.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = d.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return d.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function h(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let a = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    d = l.useMemo(() => a.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, T.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== S.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [a]);
                return d
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
        110374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("272030"),
                d = n("901582"),
                i = n("861370"),
                s = n("455933"),
                r = n("248900"),
                o = n("385752"),
                c = n("222971"),
                E = n("601131"),
                f = n("876725"),
                _ = n("367989"),
                T = n("891603"),
                S = n("510692"),
                I = n("49111"),
                v = n("782340");

            function N(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: N,
                    guild: g,
                    analyticsContext: m,
                    isRecurrenceItem: R = !1,
                    onSelect: D
                } = e, M = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), C = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), h = (0, c.default)({
                    guildEventId: t,
                    guild: g,
                    channel: N,
                    recurrenceId: n,
                    isRecurrenceItem: R
                }), p = (0, E.default)(t, g, N), A = (0, S.default)(t, g, N), O = (0, r.default)(t, g.id, n), L = (0, f.default)(t), G = (0, i.default)({
                    id: null != n ? n : t,
                    label: v.default.Messages.COPY_ID_EVENT
                }), U = (0, s.default)(t, g.id, N, n), y = (0, T.default)({
                    guildEventId: t,
                    guildId: g.id,
                    recurrenceId: n
                });
                return (0, l.jsx)(d.default, {
                    context: m,
                    object: I.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": v.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: D,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [U, !R && A, h, !R && p, C, M, O, R && y]
                        }), !R && (0, l.jsx)(u.MenuGroup, {
                            children: L
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: G
                        })]
                    })
                })
            }
        },
        455933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("398351"),
                a = n.n(u),
                d = n("866227"),
                i = n.n(d),
                s = n("730290"),
                r = n("446674"),
                o = n("77078"),
                c = n("49671"),
                E = n("884351"),
                f = n("305961"),
                _ = n("773336"),
                T = n("398604"),
                S = n("466148"),
                I = n("189443"),
                v = n("822516"),
                N = n("745049"),
                g = n("782340");
            let m = "YYYYMMDDTHHmmss",
                R = "YYYY-MM-DDTHH:mm:ss",
                D = /RRULE:.*/;

            function M(e, t, n, u) {
                var d, M, C;
                let h;
                let p = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
                    {
                        startTime: A,
                        endTime: O
                    } = (0, S.default)(null != e ? e : "", u),
                    L = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
                    G = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
                if (p || null == L) return null;
                h = L.entity_type === N.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != n && null != G ? g.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: G.name
                }) : g.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let U = i(L.scheduled_start_time),
                    y = null != L.scheduled_end_time ? i(L.scheduled_end_time) : U,
                    x = null != L.description && "" !== L.description ? E.default.unparse(L.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : "", !0) : "",
                    V = (0, I.recurrenceRuleFromServer)(L.recurrence_rule),
                    P = null != V ? (0, v.getRRule)(V) : null,
                    b = null !== (M = i(A)) && void 0 !== M ? M : U,
                    F = null !== (C = i(null != O ? O : A)) && void 0 !== C ? C : U,
                    w = () => {
                        let e = a();
                        e.createEvent({
                            start: U,
                            end: y,
                            summary: L.name,
                            description: x,
                            location: h,
                            repeating: P
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: g.default.Messages.ADD_TO_CALENDAR,
                    label: g.default.Messages.ADD_TO_CALENDAR,
                    action: w,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            var e;
                            let t = null == P ? void 0 : P.toString(),
                                n = {
                                    text: L.name,
                                    dates: "".concat(U.format(m), "/").concat(y.format(m)),
                                    details: x,
                                    action: "TEMPLATE",
                                    location: h,
                                    recur: null != t ? null === (e = D.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
                                },
                                l = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(n));
                            window.open(l, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.DOWNLOAD_ICS,
                        label: g.default.Messages.DOWNLOAD_ICS,
                        action: w
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_YAHOO,
                        label: g.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: L.name,
                                    st: b.format(m),
                                    et: F.format(m),
                                    desc: x,
                                    in_loc: h
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_OUTLOOK,
                        label: g.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: b.format(R),
                                    enddt: F.format(R),
                                    subject: L.name,
                                    body: x,
                                    location: h,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    })]
                })
            }
        },
        248900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("306160"),
                d = n("598639"),
                i = n("49111"),
                s = n("782340");

            function r(e, t, n) {
                let r = null != n,
                    {
                        isMember: o
                    } = (0, d.default)(t, e);
                if (!o) return null;

                function c() {
                    let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))), (0, u.showToast)((0, u.createToast)(s.default.Messages.COPIED_LINK, u.ToastType.SUCCESS))
                }
                return (0, l.jsx)(u.MenuItem, {
                    id: s.default.Messages.COPY_EVENT_LINK,
                    label: s.default.Messages.COPY_EVENT_LINK,
                    action: r ? void 0 : () => c(!0),
                    children: r && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: s.default.Messages.COPY_RECURRENCE_LINK,
                            label: s.default.Messages.COPY_RECURRENCE_LINK,
                            action: () => c(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: s.default.Messages.COPY_SERIES_LINK,
                            label: s.default.Messages.COPY_SERIES_LINK,
                            action: () => c(!0)
                        })]
                    })
                })
            }
        },
        385752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("299039"),
                s = n("398604"),
                r = n("322224"),
                o = n("397680"),
                c = n("466148"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: f,
                    channel: _
                } = e, T = null != n, {
                    canManageGuildEvent: S
                } = (0, d.useManageResourcePermissions)(null != _ ? _ : f), [I, v] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), N = (0, o.default)(n, null == v ? void 0 : v.id), g = null != v && S(v), m = (null == v ? void 0 : v.recurrence_rule) != null && !T, {
                    startTime: R
                } = (0, c.default)(t, n);
                if (!g || I && !m && !T || T && !T || null == v) return null;
                if (I && T) {
                    var D;
                    if (null == R) return null;
                    let e = new Date(null !== (D = null == N ? void 0 : N.scheduled_start_time) && void 0 !== D ? D : R);
                    if (new Date > e) return null
                }
                let M = () => {
                        if (null != n) {
                            if (null != N) r.default.updateGuildEventException({
                                scheduled_start_time: N.scheduled_start_time,
                                scheduled_end_time: N.scheduled_end_time,
                                is_canceled: !0
                            }, f.id, t, n);
                            else {
                                let e = i.default.extractTimestamp(n);
                                r.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, f.id, t)
                            }
                        }
                    },
                    C = e => {
                        (0, a.openModal)(n => (0, l.jsxs)(a.ConfirmModal, {
                            ...n,
                            header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: m || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
                            cancelText: E.default.Messages.NEVERMIND,
                            onConfirm: () => T && !e ? M() : r.default.deleteGuildEvent(t, f.id),
                            children: [(0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (m || e) && (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: E.default.Messages.DELETE_EVENT,
                    label: E.default.Messages.DELETE_EVENT,
                    action: T ? void 0 : () => C(),
                    color: "danger",
                    children: T && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_THIS_EVENT,
                            label: E.default.Messages.DELETE_THIS_EVENT,
                            action: () => C(),
                            disabled: null == N ? void 0 : N.is_canceled,
                            color: "danger"
                        }), (0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => C(!0),
                            color: "danger"
                        })]
                    })
                })
            }
        },
        222971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("397680"),
                r = n("466148"),
                o = n("842672"),
                c = n("782340");

            function E(e) {
                let {
                    guildEventId: t,
                    guild: E,
                    channel: f,
                    recurrenceId: _,
                    isRecurrenceItem: T
                } = e, {
                    canManageGuildEvent: S
                } = (0, d.useManageResourcePermissions)(null != f ? f : E), I = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(t)), v = S(I), N = (0, o.default)(), g = (0, s.default)(_, null == I ? void 0 : I.id), m = (0, r.default)(t, _);
                if (!v || null == I) return null;
                let R = null != I.recurrence_rule && !T,
                    D = e => {
                        (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("590942").then(n.bind(n, "590942"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guildScheduledEventId: t,
                                guildId: E.id
                            })
                        }, N) : null != _ && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("229798").then(n.bind(n, "229798"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                guildEvent: I,
                                recurrenceId: _
                            })
                        }, N)
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: c.default.Messages.EDIT_EVENT,
                    label: c.default.Messages.EDIT_EVENT,
                    action: R ? void 0 : () => D(!0),
                    children: R && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: c.default.Messages.EDIT_THIS_EVENT,
                            label: c.default.Messages.EDIT_THIS_EVENT,
                            action: () => D(!1),
                            disabled: (null == g ? void 0 : g.is_canceled) || m.startTime.getTime() < Date.now()
                        }), (0, l.jsx)(a.MenuItem, {
                            id: c.default.Messages.EDIT_ALL_EVENTS,
                            label: c.default.Messages.EDIT_ALL_EVENTS,
                            action: () => D(!0),
                            disabled: new Date(I.scheduled_start_time).getTime() < Date.now()
                        })]
                    })
                })
            }
        },
        601131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("244480"),
                s = n("398604"),
                r = n("322224"),
                o = n("745049"),
                c = n("782340");

            function E(e, t, n) {
                let {
                    canManageGuildEvent: E
                } = (0, d.useManageResourcePermissions)(null != n ? n : t), f = (0, u.useStateFromStores)([s.default], () => s.default.isActive(e)), _ = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]), T = E(_);
                if (null == e || !T || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let S = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, i.endStage)(n);
                        return
                    }
                    null != e && r.default.endEvent(e, t.id), (0, a.closeAllModals)()
                };
                return (0, l.jsx)(a.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: S,
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        876725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("377114"),
                i = n("907566"),
                s = n("398604"),
                r = n("782340");

            function o(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(a.MenuItem, {
                    id: "report-event",
                    label: r.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, d.showReportModalForGuildScheduledEvent)(t),
                    icon: i.default,
                    color: "danger"
                })
            }
        },
        367989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("322224"),
                r = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: E
                } = e, f = null != n, {
                    canManageGuildEvent: _
                } = (0, d.useManageResourcePermissions)(null != E ? E : c), [T, S] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isActive(t), i.default.getGuildScheduledEvent(t)]), I = (0, r.default)(n, null == S ? void 0 : S.id), v = null != S && _(S), N = f && (null == I ? void 0 : I.is_canceled) && v;
                return N && (!T || f) ? (0, l.jsx)(a.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == I) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = I;
                        null == e && null == l ? s.default.deleteGuildEventException(c.id, t, n) : s.default.updateGuildEventException({
                            scheduled_start_time: e,
                            scheduled_end_time: l,
                            is_canceled: !1
                        }, c.id, t, n)
                    }
                }) : null
            }
        },
        891603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("267567"),
                i = n("271938"),
                s = n("398604"),
                r = n("397680"),
                o = n("936965"),
                c = n("745049"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    guildId: n,
                    recurrenceId: f
                } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(n), [n]), T = (0, u.useStateFromStores)([i.default], () => i.default.getId()), {
                    rsvped: S,
                    baseRsvp: I,
                    recurrenceRsvp: v
                } = (0, u.useStateFromStoresObject)([s.default], () => ({
                    rsvped: s.default.isInterestedInEventRecurrence(t, f),
                    baseRsvp: s.default.getRsvp(t, null, T),
                    recurrenceRsvp: s.default.getRsvp(t, f, T)
                }), [f, t, T]), N = (0, r.default)(f, t);
                if (_ || (null == N ? void 0 : N.is_canceled)) return null;
                let g = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        l = (null == I ? void 0 : I.response) === c.GuildScheduledEventUserResponses.INTERESTED,
                        u = l ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED;
                    e ? (0, o.updateRsvp)(t, null, n, u) : (0, o.updateRsvp)(t, f, n, u)
                };
                return (0, l.jsxs)(a.MenuItem, {
                    id: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
                    label: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
                    action: void 0,
                    children: [(0, l.jsx)(a.MenuItem, {
                        id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                        label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                        action: () => g(!1)
                    }), (0, l.jsx)(a.MenuItem, {
                        id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                        label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                        action: () => g(!0),
                        disabled: null != v
                    })]
                })
            }
        },
        510692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("534222"),
                r = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: E
                } = (0, d.useManageResourcePermissions)(null != o ? o : t), f = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), _ = E(f), T = null != (0, s.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), S = null != f && (0, i.isGuildScheduledEventActive)(f);
                return _ && !S && !T ? (0, l.jsx)(a.MenuItem, {
                    id: r.default.Messages.START_EVENT,
                    label: r.default.Messages.START_EVENT,
                    action: function() {
                        null != f && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: f
                            })
                        })
                    }
                }) : null
            }
        },
        936965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateRsvp: function() {
                    return S
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var l, u, a = n("37983"),
                d = n("884691"),
                i = n("77078"),
                s = n("271938"),
                r = n("398604"),
                o = n("322224"),
                c = n("822516"),
                E = n("745049"),
                f = n("782340"),
                _ = n("616762");

            function T(e, t) {
                let n = s.default.getId();
                return r.default.getRsvp(e, t, n)
            }

            function S(e, t, n, l) {
                let u = T(e, t);
                null != u || l === E.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE";

            function I(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...s
                } = e, [r, o] = d.useState(0), c = T(t.id, null), I = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, v = I ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, N = v === E.GuildScheduledEventUserResponses.INTERESTED ? f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, a.jsx)(i.ConfirmModal, {
                    ...s,
                    header: N,
                    confirmText: f.default.Messages.OK,
                    cancelText: f.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === r ? S(t.id, null, l, v) : S(t.id, n, l, v), null == u || u(), s.onClose()
                    },
                    confirmButtonColor: i.Button.Colors.BRAND,
                    children: (0, a.jsx)(i.RadioGroup, {
                        className: _.responseOptions,
                        value: r,
                        options: [{
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function v(e, t, n, l) {
                let u = r.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let d = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u),
                    s = T(u.id, d);
                null == d ? (S(e, null, n, E.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != s ? (S(e, d, n, E.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, i.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(I, {
                    ...e,
                    event: u,
                    recurrenceId: d,
                    guildId: n,
                    onRsvp: l
                })))
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("77078"),
                u = n("244201"),
                a = n("558286"),
                d = n("49111");
            let i = "guild-event-modal";
            var s = () => {
                let e = (0, u.useAppContext)(),
                    t = e === d.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(i, t)
                    }
                }
            }
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a() {
                return u.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                return u.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("217145"),
                u = n("429682");

            function a(e) {
                return (0, l.isIFrameModalUserEnabled)() || (0, u.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let l, u;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("446674"),
                d = n("913144"),
                i = n("798609"),
                s = n("42203"),
                r = n("3765");
            let o = {},
                c = {},
                E = {};

            function f(e) {
                delete o[e];
                let t = E[e];
                null != t && delete c[t], delete E[e]
            }
            class _ extends a.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? o[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(o)) {
                        let l = E[t];
                        null != l && (e[l] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == o[n] || o[n].state === r.InteractionState.FAILED) && (null == o[t] || o[t].state === r.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return u
                }
                getIFrameModalKey() {
                    return l
                }
            }
            _.displayName = "InteractionStore";
            var T = new _(d.default, {
                LOGOUT: function() {
                    o = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: l,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: d,
                        onFailure: i
                    } = e;
                    null != n && (c[n] = t, E[t] = n), o[t] = {
                        state: r.InteractionState.QUEUED,
                        data: l,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: d,
                        onFailure: i
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: l
                    } = e;
                    if (null == n) return !1;
                    let u = o[n];
                    if (null == u || u.state !== r.InteractionState.QUEUED) return !1;
                    u.state = r.InteractionState.CREATED, null === (t = u.onCreate) || void 0 === t || t.call(u, l)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let l = o[n];
                    if (null == l) return !1;
                    null === (t = l.onSuccess) || void 0 === t || t.call(l), f(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: l,
                        errorMessage: u
                    } = e;
                    if (null == n) return !1;
                    let a = o[n];
                    if (null == a) return !1;
                    null === (t = a.onFailure) || void 0 === t || t.call(a, l, u), a.data.interactionType === i.InteractionTypes.APPLICATION_COMMAND ? f(n) : o[n] = {
                        ...a,
                        state: r.InteractionState.FAILED,
                        errorCode: l,
                        errorMessage: u
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = o[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), f(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(o)) t.state === r.InteractionState.FAILED && f(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    u = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    l = void 0, u = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    l = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var l, u;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return l
                }
            }), (u = l || (l = {}))[u.QUEUED = 0] = "QUEUED", u[u.CREATED = 1] = "CREATED", u[u.FAILED = 2] = "FAILED"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return v
                },
                inviteUserToStage: function() {
                    return N
                },
                audienceAckRequestToSpeak: function() {
                    return g
                },
                moveSelfToAudience: function() {
                    return m
                },
                setUserSuppress: function() {
                    return R
                },
                moveUserToAudience: function() {
                    return D
                },
                setEveryoneRolePermissionAllowed: function() {
                    return M
                },
                startStage: function() {
                    return C
                },
                editStage: function() {
                    return h
                },
                endStage: function() {
                    return p
                }
            });
            var l = n("627445"),
                u = n.n(l),
                a = n("316693"),
                d = n("872717"),
                i = n("450911");
            n("851387");
            var s = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                f = n("716214"),
                _ = n("230324"),
                T = n("738983"),
                S = n("808422"),
                I = n("49111");

            function v(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(I.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                u(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    i = (0, S.getAudienceRequestToSpeakState)(a);
                return i === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function m(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return u(null != t, "This channel cannot be guildless."), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function R(e, t, n) {
                let l = e.getGuildId();
                return u(null != l, "This channel cannot be guildless."), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function D(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return u(null != n, "This channel cannot be guildless."), R(t, e.id, !0), d.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function M(e, t, n) {
                let l = e.getGuildId();
                u(null != l, "Channel cannot be guildless");
                let d = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: s.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...d
                    };
                n ? (r.allow = a.default.add(r.allow, t), r.deny = a.default.remove(r.deny, t)) : (r.allow = a.default.remove(r.allow, t), r.deny = a.default.add(r.deny, t)), i.default.updatePermissionOverwrite(e.id, r)
            }
            async function C(e, t, n, l) {
                if ("" === t) return;
                let u = o.default.getVoiceChannelId() === e.id;
                !u && (0, f.connectToStage)(e);
                let a = await (0, T.startStageInstance)(e.id, t, n, l);
                return g(e, !1, !0), a
            }
            async function h(e, t, n) {
                if ("" === t) return;
                let l = await (0, T.updateStageInstance)(e.id, t, n);
                return l
            }
            async function p(e) {
                await (0, T.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return f
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                u = n("387111"),
                a = n("991170"),
                d = n("834052"),
                i = n("837979"),
                s = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    d = u.default.getName(e, n, a),
                    i = null != l ? l : t.length;
                return 1 === i && null != a ? d : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: i
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: d,
                    count: i - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function f(e) {
                let t = d.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(s.Permissions.REQUEST_TO_SPEAK, e) ? i.RequestToSpeakPermissionStates.EVERYONE : i.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return d
                },
                endStageInstance: function() {
                    return i
                }
            });
            var l = n("872717"),
                u = n("49111");
            async function a(e, t, n, a, d) {
                let i = await l.default.post({
                    url: u.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: d,
                        send_start_notification: a
                    }
                });
                return i.body
            }
            async function d(e, t, n) {
                let a = await l.default.patch({
                    url: u.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function i(e) {
                return l.default.delete(u.Endpoints.STAGE_INSTANCE(e))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var l, u, a = n("37983");
            n("884691");
            var d = n("414456"),
                i = n.n(d),
                s = n("77078"),
                r = n("36694"),
                o = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("557296");
            (l = u || (u = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: u = "text-normal",
                    textVariant: d = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return E.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return r.default
                    }
                }(n), T = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: i(f.container, T, l),
                    children: [(0, a.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, a.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, a.jsx)(s.Text, {
                        className: f.text,
                        color: u,
                        variant: d,
                        children: t
                    })]
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("35647"),
                d = n("75196"),
                i = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, d.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);