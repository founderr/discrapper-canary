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
                    return v
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                i = n("446674"),
                d = n("913144"),
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
            class N extends i.default.Store {
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
            N.displayName = "EventDirectoryStore";
            var v = new N(d.default, {
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
                        i = u.map(l, _);
                    o[t] = i
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
                i = n("249654"),
                d = n("745049");

            function r(e, t, n, l) {
                let r = u(),
                    a = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: a - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: a
                    };
                if (r.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            i = e.isBetween(u(a).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), a);
                        return n || i && !l ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let c = i.default.extractTimestamp(e.id),
                    o = Math.min((null != n ? n : c) + d.NEW_EVENT_WINDOW_MILLISECONDS, a),
                    E = r.isBetween(c, o);
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
                i = n("271938"),
                d = n("398604"),
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
                    } = e, l = i.default.getId();
                    if (t !== l) return;
                    let u = d.default.getGuildScheduledEvent(n);
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
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                useActiveEvent: function() {
                    return h
                },
                useActiveEventsByChannel: function() {
                    return T
                },
                useGuildUpcomingEventsNotice: function() {
                    return g
                },
                useGuildActiveEvent: function() {
                    return m
                },
                useGuildChannelScheduledEvents: function() {
                    return C
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
                d = n("42203"),
                r = n("923959"),
                a = n("305961"),
                s = n("957255"),
                c = n("449008"),
                o = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("822516"),
                N = n("745049"),
                v = n("49111");
            let S = [];

            function I(e, t) {
                return (0, u.useStateFromStoresArray)([a.default, i.default, o.default, s.default, d.default, r.default], () => {
                    let n = a.default.getGuild(e);
                    if (null == n) return S;
                    let l = n.hasFeature(v.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = i.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = o.default.getGuildScheduledEvent(t);
                            return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
                        }).filter(c.isNotNullish)
                    }
                    let f = o.default.getGuildScheduledEventsByIndex(null != t ? t : o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = d.default.getChannel(t);
                        return s.default.can(v.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function h(e) {
                return (0, u.useStateFromStores)([o.default, d.default, s.default], () => {
                    let t = d.default.getChannel(e);
                    if (!s.default.can(v.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function T(e) {
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

            function g(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([o.default, d.default, s.default], () => {
                        let e = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = d.default.getChannel(e.channel_id);
                            return s.default.can(v.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    a = (0, u.useStateFromStoresObject)([o.default], () => null == l ? {} : l.reduce((e, t) => ({
                        ...e,
                        [t.id]: o.default.hasRsvp(t.id, t.guild_id)
                    }), {}), [l]);
                if (null != l && null != a)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = i[t.id],
                            d = r[t.id],
                            s = null !== (n = a[t.id]) && void 0 !== n && n,
                            c = (0, E.getNextShownUpcomingEventNoticeType)(t, u, d, s);
                        if (null != c) return {
                            upcomingEvent: t,
                            noticeType: c
                        }
                    }
            }

            function m(e) {
                return (0, u.useStateFromStores)([o.default, d.default, s.default], () => {
                    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, o.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = d.default.getChannel(e.channel_id);
                        return s.default.can(v.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([o.default], () => o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function D(e) {
                return (0, u.useStateFromStores)([d.default, o.default], () => {
                    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = d.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return d.default.getChannel(null == t ? void 0 : t.channel_id)
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
                let i = (0, u.useStateFromStores)([o.default], () => null == e ? [] : o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    d = l.useMemo(() => i.filter(e => {
                        let {
                            withinStartWindow: t,
                            diffMinutes: n
                        } = (0, _.getEventTimeData)(e.scheduled_start_time, e.scheduled_end_time);
                        return e.status !== N.GuildScheduledEventStatus.ACTIVE && t && n < 15
                    }), [i]);
                return d
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
                i = n("987317"),
                d = n("119184"),
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
                } = e, _ = (0, r.useUID)(), N = (0, c.useActiveEvent)(t.id);
                if (null == N) return null;
                let v = () => {
                    i.default.selectVoiceChannel(null), f()
                };
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": _,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: E.content,
                        children: [(0, l.jsx)(d.default, {
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
                                s.default.endEvent(N.id, N.guild_id), v()
                            },
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: E.cancelButton,
                            onClick: v,
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
                i = n.n(u),
                d = n("782340"),
                r = n("53061"),
                a = n("284434"),
                s = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(r.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s,
                        className: i(r.sparkleIcon, r.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: i(r.sparkleIcon, r.sparkleTop)
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return d
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
                i = n("775560");
            let d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(e)
                },
                r = () => (0, i.useLazyValue)(() => d()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        }
    }
]);