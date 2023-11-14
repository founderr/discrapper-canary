(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49004"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                d = n("446674"),
                i = n("913144"),
                r = n("398604"),
                a = n("813006"),
                s = n("730647");
            let c = !1,
                o = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new a.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class v extends d.default.Store {
                isFetching() {
                    return c
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return o[e]
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
            v.displayName = "EventDirectoryStore";
            var N = new v(i.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    c = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    c = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, r.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        d = u.map(l, _);
                    o[t] = d
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    c = !1
                }
            })
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
                d = n("249654"),
                i = n("745049");

            function r(e, t, n, l) {
                let r = u(),
                    a = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: a - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: a
                    };
                if (r.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            d = e.isBetween(u(a).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), a);
                        return n || d && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let c = d.default.extractTimestamp(e.id),
                    o = Math.min((null != n ? n : c) + i.NEW_EVENT_WINDOW_MILLISECONDS, a),
                    E = r.isBetween(c, o);
                if (E && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
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
                d = n("271938"),
                i = n("398604"),
                r = n("49129"),
                a = n("745049");
            let s = {},
                c = {};

            function o(e) {
                let t = {
                    ...s
                };
                delete t[e], s = t;
                let n = {
                    ...c
                };
                delete n[e], c = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, c = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return s[e]
                }
                getAllEventDismissals() {
                    return s
                }
                getUpcomingNoticeSeenTime(e) {
                    return c[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return c
                }
                getState() {
                    return {
                        upcomingEventDismissals: s,
                        upcomingEventSeenTimestamps: c
                    }
                }
            }
            E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
            var f = new E(u.default, {
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
                    (t.status === a.GuildScheduledEventStatus.CANCELED || t.status === a.GuildScheduledEventStatus.COMPLETED) && o(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    o(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = d.default.getId();
                    if (t !== l) return;
                    let u = i.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== a.GuildScheduledEventStatus.SCHEDULED) return;
                    let o = s[n];
                    if (null != o) return;
                    let E = c[n],
                        f = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
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
                        ...c
                    };
                    n[t] = Date.now(), c = n
                }
            })
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getEventException: function() {
                    return i
                }
            });
            var l = n("446674"),
                u = n("398604");

            function d(e, t) {
                let n = (0, l.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return r(n, e)
            }

            function i(e, t) {
                var n, l;
                let d = null !== (l = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return r(d, e)
            }

            function r(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var l = n("627445"),
                u = n.n(l),
                d = n("446674"),
                i = n("299039"),
                r = n("398604"),
                a = n("397680"),
                s = n("822516");

            function c(e, t, n) {
                var l;
                let i = null !== (l = (0, d.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                u(null != i, "Event must be defined"), t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(i);
                let c = (0, a.default)(t, e);
                return E(i, c, t)
            }

            function o(e, t) {
                let n = (0, a.getEventException)(t, e.id);
                return E(e, n, t)
            }

            function E(e, t, n) {
                let l = null != e.recurrence_rule ? (0, s.getRRule)(e.recurrence_rule) : null;
                if (null == l || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let u = new Date((null == t ? void 0 : t.scheduled_start_time) == null ? i.default.extractTimestamp(n) : t.scheduled_start_time),
                    d = (null == t ? void 0 : t.scheduled_end_time) == null ? null : new Date(t.scheduled_end_time);
                return {
                    startTime: u,
                    endTime: d
                }
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                useActiveEvent: function() {
                    return g
                },
                useActiveEventsByChannel: function() {
                    return m
                },
                useGuildUpcomingEventsNotice: function() {
                    return T
                },
                useGuildActiveEvent: function() {
                    return D
                },
                useGuildChannelScheduledEvents: function() {
                    return C
                },
                useFirstActiveEventChannel: function() {
                    return G
                },
                useImminentUpcomingGuildEvents: function() {
                    return p
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                d = n("962199"),
                i = n("42203"),
                r = n("923959"),
                a = n("305961"),
                s = n("957255"),
                c = n("449008"),
                o = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                v = n("822516"),
                N = n("745049"),
                S = n("49111");
            let h = [];

            function I(e, t) {
                return (0, u.useStateFromStoresArray)([a.default, d.default, o.default, s.default, i.default, r.default], () => {
                    let n = a.default.getGuild(e);
                    if (null == n) return h;
                    let l = n.hasFeature(S.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = d.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = o.default.getGuildScheduledEvent(t);
                            return null != n ? n : d.default.getCachedGuildScheduledEventById(t)
                        }).filter(c.isNotNullish)
                    }
                    let f = o.default.getGuildScheduledEventsByIndex(null != t ? t : o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = i.default.getChannel(t);
                        return s.default.can(S.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function g(e) {
                return (0, u.useStateFromStores)([o.default, i.default, s.default], () => {
                    let t = i.default.getChannel(e);
                    if (!s.default.can(S.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function m(e) {
                let t = (0, u.useStateFromStoresArray)([o.default], () => o.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function T(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([o.default, i.default, s.default], () => {
                        let e = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = i.default.getChannel(e.channel_id);
                            return s.default.can(S.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    d = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    a = (0, u.useStateFromStoresObject)([o.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, v.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: o.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != a)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = d[t.id],
                            i = r[t.id],
                            s = null !== (n = a[t.id]) && void 0 !== n && n,
                            c = (0, E.getNextShownUpcomingEventNoticeType)(t, u, i, s);
                        if (null != c) return {
                            upcomingEvent: t,
                            noticeType: c
                        }
                    }
            }

            function D(e) {
                return (0, u.useStateFromStores)([o.default, i.default, s.default], () => {
                    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, o.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = i.default.getChannel(e.channel_id);
                        return s.default.can(S.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([o.default], () => o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function G(e) {
                return (0, u.useStateFromStores)([i.default, o.default], () => {
                    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = i.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return i.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function p(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let d = (0, u.useStateFromStores)([o.default], () => null == e ? [] : o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    i = l.useMemo(() => d.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, v.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== N.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [d]);
                return i
            }
        },
        203811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                d = n("987317"),
                i = n("119184"),
                r = n("476765"),
                a = n("943232"),
                s = n("322224"),
                c = n("534222"),
                o = n("782340"),
                E = n("947448");

            function f(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: f
                } = e, _ = (0, r.useUID)(), v = (0, c.useActiveEvent)(t.id);
                if (null == v) return null;
                let N = () => {
                    d.default.selectVoiceChannel(null), f()
                };
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": _,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: E.content,
                        children: [(0, l.jsx)(i.default, {
                            children: (0, l.jsx)("div", {
                                className: E.iconBackground,
                                children: (0, l.jsx)(a.default, {
                                    height: 40,
                                    width: 40,
                                    className: E.icon
                                })
                            })
                        }), (0, l.jsx)(u.Heading, {
                            id: _,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: E.title,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: E.subtitle,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            color: u.Button.Colors.RED,
                            onClick: () => {
                                s.default.endEvent(v.id, v.guild_id), N()
                            },
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: E.cancelButton,
                            onClick: N,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                d = n.n(u),
                i = n("782340"),
                r = n("53061"),
                a = n("284434"),
                s = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: d(r.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s,
                        className: d(r.sparkleIcon, r.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: d(r.sparkleIcon, r.sparkleTop)
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return r
                },
                UID: function() {
                    return a
                }
            });
            var l = n("995008"),
                u = n.n(l),
                d = n("775560");
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(e)
                },
                r = () => (0, d.useLazyValue)(() => i()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        }
    }
]);