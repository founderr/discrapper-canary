"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80844], {
        826945: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                u = t(744564),
                l = t(269300),
                a = t(848285),
                c = t(612831);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function f(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = _(e);
                    if (n) {
                        var i = _(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return f(this, t)
                }
            }
            var T = !1,
                y = {},
                v = {},
                h = {},
                g = function(e) {
                    h[e.guild_scheduled_event.id] = new a.Z(e.guild_scheduled_event.guild);
                    v[e.guild_scheduled_event.id] = e.guild_scheduled_event;
                    return {
                        channelId: e.directory_channel_id,
                        scheduledEventId: e.entity_id,
                        type: c.C2.GUILD_SCHEDULED_EVENT,
                        authorId: e.author_id,
                        createdAt: e.created_at
                    }
                };
            var A = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(e, n)
                }(t, e);
                var n = I(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.isFetching = function() {
                    return T
                };
                r.getEventDirectoryEntries = function(e) {
                    if (null != e) return y[e]
                };
                r.getCachedGuildByEventId = function(e) {
                    var n;
                    return null !== (n = h[e]) && void 0 !== n ? n : void 0
                };
                r.getCachedGuildScheduledEventById = function(e) {
                    var n;
                    return null !== (n = v[e]) && void 0 !== n ? n : void 0
                };
                r.__getLocalVars = function() {
                    return {
                        fetching: T,
                        eventDirectoryEntries: y,
                        cachedGuildScheduledEvents: v,
                        cachedGuildByEvents: h,
                        eventDirectoryEntryFromServer: g
                    }
                };
                return t
            }(o.ZP.Store);
            A.displayName = "EventDirectoryStore";
            const m = new A(u.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    T = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.entries;
                    T = !1;
                    var r = i().sortBy(p(t), [function(e) {
                            return (0, l.CQ)(e.guild_scheduled_event)
                        }]),
                        o = i().map(r, g);
                    y[n] = o
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    T = !1
                }
            })
        },
        612831: (e, n, t) => {
            t.d(n, {
                C2: () => r,
                VX: () => i,
                sE: () => o,
                AR: () => u,
                C1: () => _,
                b7: () => f,
                Pp: () => E
            });
            var r, i, o, u, l = t(940060),
                a = t(563135),
                c = t(2590),
                s = t(473708);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }! function(e) {
                e[e.GUILD = 0] = "GUILD";
                e[e.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT"
            }(r || (r = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild-templates";
                e.CUSTOMIZE_NEW_GUILD = "customize-new-guild";
                e.CHOOSE_GUILD = "choose-guild";
                e.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild";
                e.CONFIRMATION = "confirmation"
            }(i || (i = {}));
            ! function(e) {
                e.CREATE = "CREATE";
                e.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB";
                e.HUB_STUDY = "HUB_STUDY";
                e.HUB_CLASS = "HUB_CLASS";
                e.HUB_SOCIAL = "HUB_SOCIAL";
                e.HUB_MAJOR = "HUB_MAJOR";
                e.HUB_DORM = "HUB_DORM"
            }(o || (o = {}));
            ! function(e) {
                e[e.ALL = -1] = "ALL";
                e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED";
                e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB";
                e[e.CLASS = 2] = "CLASS";
                e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL";
                e[e.MISC = 5] = "MISC"
            }(u || (u = {}));
            var _ = "1113200031168729140";

            function f(e) {
                return "883060064561299456" === e ? [{
                    value: u.SCHOOL_CLUB,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: u.CLASS,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: u.STUDY_SOCIAL,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: u.MISC,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : e === _ ? [{
                    value: u.SCHOOL_CLUB,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_1
                }, {
                    value: u.CLASS,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_2
                }, {
                    value: u.STUDY_SOCIAL,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_3
                }, {
                    value: u.MISC,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_5
                }] : [{
                    value: u.SCHOOL_CLUB,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: u.CLASS,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: u.STUDY_SOCIAL,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: u.MISC,
                    label: s.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function E() {
                var e;
                return d(e = {}, o.CREATE, {
                        id: o.CREATE,
                        code: "2TffvPucqHkN",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    }), d(e, o.HUB_SCHOOL_CLUB, {
                        id: o.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: c.d4z.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: a.ZP.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: l.Z.combine(a.ZP.DEFAULT, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_CHANNELS, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_NICKNAMES, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.MANAGE_MESSAGES, c.Plq.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    }), d(e, o.HUB_STUDY, {
                        id: o.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.d4z.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }), d(e, o.HUB_CLASS, {
                        id: o.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.d4z.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }), d(e, o.HUB_SOCIAL, {
                        id: o.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: c.d4z.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    }),
                    d(e, o.HUB_MAJOR, {
                        id: o.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.d4z.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }), d(e, o.HUB_DORM, {
                        id: o.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: s.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.d4z.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.d4z.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.d4z.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: s.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.d4z.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }), e
            }
        },
        201521: (e, n, t) => {
            t.d(n, {
                Z: () => l,
                e: () => a
            });
            var r = t(202351),
                i = t(464187),
                o = t(419051),
                u = t(2590);

            function l(e) {
                var n = (0, r.e7)([i.Z], (function() {
                    return i.Z.getGuildId()
                }));
                return null != n ? n : e.getGuildId()
            }

            function a(e) {
                return i.Z.getGuildId() !== u.I_8 ? e.getGuildId() : o.Z.isFavorite(e.id) || e.isThread() && o.Z.isFavorite(e.parent_id) ? u.I_8 : e.getGuildId()
            }
        },
        20170: (e, n, t) => {
            t.d(n, {
                C: () => T,
                u: () => g
            });
            var r = t(940060),
                i = t(105783),
                o = t(703790),
                u = t(567403),
                l = t(888236),
                a = t(404741),
                c = t(185219),
                s = t(322008),
                d = t(2590),
                _ = t(473708);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            E(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            E(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function O(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function T(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = p((function(e, n) {
                    return I(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return null == e ? [2, !0] : [4, v(e, n, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e, n, t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = p((function(e, n, t) {
                    var r, i, o, _, f, E, p, T, y;
                    return I(this, (function(I) {
                        switch (I.label) {
                            case 0:
                                return null == (i = u.Z.getGuild(e)) ? [2, !0] : (o = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(d.oNc.GUILD_ONBOARDING))) ? o && a.Z.shouldFetchPrompts(e) ? [4, (0, l.eM)(e)] : [3, 2] : [2, !0];
                            case 1:
                                I.sent();
                                I.label = 2;
                            case 2:
                                _ = a.Z.getDefaultChannelIds(e);
                                f = O((0, c.d9)(e, _), 2), E = f[0], p = f[1];
                                if (!_.includes(n)) return [2, !0];
                                T = t.removingView && p.length - 1 < s.md;
                                y = (t.removingChat || t.removingView) && E.length - 1 < s.X;
                                return [2, !T && !y]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, n, t) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = p((function(e, n, t) {
                    var u, l, a, c;
                    return I(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (null == (u = e.getGuildId())) return [2, !0];
                                null != t && (n = r.Z.filter(n, r.Z.invert(t)));
                                l = e.permissionOverwrites[u];
                                a = null != l ? r.Z.filter(l.deny, r.Z.invert(l.allow)) : r.Z.deserialize(0);
                                c = {
                                    removingView: r.Z.has(n, d.Plq.VIEW_CHANNEL) && !r.Z.has(a, d.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                e.isForumLikeChannel() ? c.removingChat = r.Z.has(n, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.Z.has(a, d.Plq.SEND_MESSAGES_IN_THREADS) : c.removingChat = r.Z.has(n, d.Plq.SEND_MESSAGES) && !r.Z.has(a, d.Plq.SEND_MESSAGES);
                                return c.removingChat || c.removingView ? [4, v(u, e.id, c)] : [2, !0];
                            case 1:
                                if (!s.sent()) {
                                    i.Z.show({
                                        title: _.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: _.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                i.Z.close();
                                                o.Z.open(u, d.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        888236: (e, n, t) => {
            t.d(n, {
                rj: () => h,
                eM: () => g,
                rK: () => A,
                I1: () => b
            });
            var r = t(281110),
                i = t(744564),
                o = t(396043),
                u = t(664625),
                l = t(21372),
                a = t(567403),
                c = t(652591),
                s = t(661123),
                d = t(404741),
                _ = t(322008),
                f = t(2590),
                E = t(589677);

            function p(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function O(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            p(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            p(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function T(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        I(e, n, t[n])
                    }))
                }
                return e
            }

            function y(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var v = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function h(e) {
                c.default.track(f.rMx.GUILD_ONBOARDING_LOADED, y(T({}, (0, o.hH)(e)), {
                    has_new_prompts: !1,
                    number_of_prompts: 0
                }))
            }

            function g(e) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                });
                return r.ZP.get({
                    url: f.ANM.GUILD_ONBOARDING(e)
                }).then((function(n) {
                    var t = n.body,
                        r = (0, _.cf)(t);
                    return i.Z.dispatch(T({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e
                    }, r)).then((function() {
                        return r.prompts
                    }))
                }), (function(n) {
                    i.Z.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: e
                    });
                    return n
                }))
            }

            function A(e) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = O((function(e) {
                    var n, t, r, i, o, c, _, p;
                    return v(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                t = u.default.getId();
                                i = (0, s.yE)(null !== (r = null === (n = l.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, E.q.COMPLETED_ONBOARDING);
                                if (null == (o = a.Z.getGuild(e)) || !o.hasFeature(f.oNc.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                                c = d.Z.shouldFetchPrompts(e);
                                _ = d.Z.getOnboardingPrompts(e);
                                if (!c && _.length > 0) {
                                    if (_.every((function(e) {
                                            return !e.inOnboarding
                                        }))) {
                                        L(e);
                                        return [2, Promise.resolve()]
                                    }
                                    i || b(e);
                                    return [2, Promise.resolve()]
                                }
                                return [4, g(e)];
                            case 1:
                                p = O.sent();
                                if (Array.isArray(p) && p.every((function(e) {
                                        return !e.inOnboarding
                                    }))) {
                                    L(e);
                                    return [2, Promise.resolve()]
                                }
                                i || b(e);
                                return [2, p]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function L(e) {
                c.default.track(f.rMx.GUILD_ONBOARDING_STEP_VIEWED, y(T({}, (0, o.hH)(e)), {
                    step: -2,
                    required: !0
                }));
                c.default.track(f.rMx.GUILD_ONBOARDING_STEP_COMPLETED, y(T({}, (0, o.hH)(e)), {
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                }))
            }
        },
        322008: (e, n, t) => {
            t.d(n, {
                iU: () => s,
                NE: () => d,
                NO: () => _,
                YW: () => f,
                M$: () => E,
                qm: () => p,
                b3: () => O,
                md: () => I,
                X: () => T,
                fY: () => y,
                l7: () => l,
                FN: () => a,
                Un: () => c,
                RF: () => v,
                ae: () => h,
                yZ: () => g,
                dr: () => A,
                cf: () => b,
                Oq: () => L
            });
            var r = t(110251),
                i = t.n(r),
                o = t(473708);

            function u(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            var l, a, c, s = 100,
                d = 50,
                _ = 100,
                f = 15,
                E = 12,
                p = 50,
                O = 4,
                I = 7,
                T = 5,
                y = 13;
            ! function(e) {
                e[e.CUSTOMIZE = 0] = "CUSTOMIZE";
                e[e.BROWSE = 1] = "BROWSE"
            }(l || (l = {}));
            ! function(e) {
                e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE";
                e[e.DROPDOWN = 1] = "DROPDOWN"
            }(a || (a = {}));
            ! function(e) {
                e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT";
                e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
            }(c || (c = {}));

            function v(e) {
                if (e.options.length > 0) return !1;
                var n = h(),
                    t = (n.id, u(n, ["id"])),
                    r = (e.id, u(e, ["id"]));
                return i()(t, r)
            }

            function h() {
                return {
                    id: String(Date.now()),
                    title: o.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function g(e) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: e,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function A(e) {
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        var n, t, r;
                        return {
                            id: e.id,
                            channel_ids: e.channelIds,
                            role_ids: e.roleIds,
                            emoji: e.emoji,
                            emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                            emoji_name: null === (t = e.emoji) || void 0 === t ? void 0 : t.name,
                            emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
                            title: e.title,
                            description: e.description
                        }
                    })),
                    title: e.title,
                    single_select: e.singleSelect,
                    disabled: e.disabled,
                    required: e.required,
                    in_onboarding: e.inOnboarding,
                    type: e.type
                }
            }

            function m(e) {
                var n;
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        return {
                            id: e.id,
                            channelIds: e.channel_ids,
                            roleIds: e.role_ids,
                            emoji: e.emoji,
                            title: e.title,
                            description: null !== (n = e.description) && void 0 !== n ? n : ""
                        }
                    })),
                    title: e.title,
                    singleSelect: e.single_select,
                    disabled: e.disabled,
                    required: e.required,
                    inOnboarding: e.in_onboarding,
                    type: e.type
                }
            }

            function b(e) {
                var n, t, r;
                return {
                    prompts: e.prompts.map(m),
                    defaultChannelIds: e.default_channel_ids,
                    responses: null !== (n = e.responses) && void 0 !== n ? n : [],
                    mode: e.mode,
                    enabled: e.enabled,
                    onboardingPromptsSeen: null !== (t = e.onboarding_prompts_seen) && void 0 !== t ? t : {},
                    onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
                    belowRequirements: e.below_requirements
                }
            }

            function L(e) {
                return null == e || null == e.id && null == e.name
            }
        },
        404741: (e, n, t) => {
            t.d(n, {
                Z: () => P
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                u = t(744564),
                l = t(861426),
                a = t(61209),
                c = t(53452),
                s = t(102921),
                d = t(734260),
                _ = t(189827),
                f = t(322008);

            function E(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function I(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        p(e, n, t[n])
                    }))
                }
                return e
            }

            function T(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function y(e, n) {
                return !n || "object" !== h(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function v(e, n) {
                v = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return v(e, n)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = O(e);
                    if (n) {
                        var i = O(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return y(this, t)
                }
            }
            var A = {},
                m = {},
                b = {},
                L = !1;

            function M(e, n, t) {
                return e.map((function(e) {
                    return function(e, n, t) {
                        for (var r = !1, i = [], o = 0; o < e.options.length; o++) {
                            var u = e.options[o],
                                l = null == t[u.id];
                            l && (r = !0);
                            i.push(T(I({}, u), {
                                isUnseen: l
                            }))
                        }
                        return T(I({}, e), {
                            options: i,
                            hasNewAnswers: r,
                            isNew: null == n[e.id]
                        })
                    }(e, n, t)
                }))
            }

            function C(e) {
                var n, t, r, i, o, u, l, a, c, s = e.guildId,
                    d = e.updates,
                    _ = null !== (o = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (n = A[s]) || void 0 === n ? void 0 : n.onboardingPromptsSeen) && void 0 !== o ? o : {},
                    f = null !== (l = null !== (u = d.onboardingResponsesSeen) && void 0 !== u ? u : null === (t = A[s]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== l ? l : {},
                    E = M(null !== (c = null !== (a = d.prompts) && void 0 !== a ? a : null === (r = A[s]) || void 0 === r ? void 0 : r.prompts) && void 0 !== c ? c : [], _, f);
                A[s] = T(I({}, A[s], d), {
                    prompts: E
                })
            }

            function D(e, n) {
                if (null != m[e]) {
                    var t = {};
                    Object.keys(m[e]).forEach((function(r) {
                        !n.includes(r) && m[e][r] ? t[r] = !0 : n.includes(r) && !1 === m[e][r] && (t[r] = !1)
                    }));
                    m[e] = t;
                    var r = n.filter((function(e) {
                        return null == t[e] || !0 === t[e]
                    }));
                    Object.keys(t).forEach((function(e) {
                        !0 !== t[e] || n.includes(e) || r.push(e)
                    }));
                    A[e] = T(I({}, A[e]), {
                        responses: r
                    })
                }
            }
            var S = [],
                N = [],
                U = [],
                G = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && v(e, n)
                    }(t, e);
                    var n = g(t);

                    function t() {
                        E(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(a.Z, _.ZP, l.Z)
                    };
                    r.getOnboardingPromptsForOnboarding = function(e) {
                        var n, t;
                        return null !== (t = null === (n = A[e]) || void 0 === n ? void 0 : n.onboardingPrompts) && void 0 !== t ? t : S
                    };
                    r.getOnboardingPrompts = function(e) {
                        var n, t;
                        return null !== (t = null === (n = A[e]) || void 0 === n ? void 0 : n.prompts) && void 0 !== t ? t : S
                    };
                    r.getOnboardingResponses = function(e) {
                        var n, t;
                        if (l.Z.isFullServerPreview(e)) {
                            var r;
                            return Array.from(null !== (r = l.Z.getOnboardingResponses(e)) && void 0 !== r ? r : N)
                        }
                        return null !== (t = null === (n = A[e]) || void 0 === n ? void 0 : n.responses) && void 0 !== t ? t : N
                    };
                    r.getSelectedOptions = function(e) {
                        var n = this.getOnboardingResponses(e);
                        return this.getOnboardingPrompts(e).map((function(e) {
                            return e.options
                        })).flat().filter((function(e) {
                            return n.includes(e.id)
                        }))
                    };
                    r.getOnboardingResponsesForPrompt = function(e, n) {
                        var t = A[e];
                        if (null == t) return N;
                        var r = t.prompts.find((function(e) {
                            return e.id === n
                        }));
                        return null == r ? N : i().intersection(r.options.map((function(e) {
                            return e.id
                        })), this.getOnboardingResponses(e))
                    };
                    r.getEnabledOnboardingPrompts = function(e) {
                        var n, t = A[e];
                        if (l.Z.isFullServerPreview(e)) {
                            var r;
                            return null !== (r = null == t ? void 0 : t.prompts) && void 0 !== r ? r : S
                        }
                        return null != t && t.enabled && null !== (n = t.prompts) && void 0 !== n ? n : S
                    };
                    r.getDefaultChannelIds = function(e) {
                        var n, t;
                        return null !== (t = null === (n = A[e]) || void 0 === n ? void 0 : n.defaultChannelIds) && void 0 !== t ? t : U
                    };
                    r.getEnabled = function(e) {
                        var n, t;
                        return l.Z.isFullServerPreview(e) ? null != A[e] : null !== (t = null === (n = A[e]) || void 0 === n ? void 0 : n.enabled) && void 0 !== t && t
                    };
                    r.getOnboardingPrompt = function(e) {
                        return Object.values(A).map((function(e) {
                            return e.prompts
                        })).flat().find((function(n) {
                            return n.id === e
                        }))
                    };
                    r.isLoading = function() {
                        return L
                    };
                    r.shouldFetchPrompts = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.Millis.HOUR;
                        if (L) return !1;
                        var t = b[e];
                        return null == t || Date.now() - t > n
                    };
                    r.getPendingResponseOptions = function(e) {
                        return m[e]
                    };
                    r.ackIdForGuild = function(e) {
                        var n = this.getEnabledOnboardingPrompts(e),
                            t = "0";
                        n.forEach((function(e) {
                            e.options.forEach((function(e) {
                                s.Z.compare(e.id, t) > 0 && (t = e.id)
                            }));
                            s.Z.compare(e.id, t) > 0 && (t = e.id)
                        }));
                        return t
                    };
                    r.lastFetchedAt = function(e) {
                        return b[e]
                    };
                    r.isAdvancedMode = function(e) {
                        var n;
                        return null != e && (null === (n = A[e]) || void 0 === n ? void 0 : n.mode) === f.Un.ONBOARDING_ADVANCED
                    };
                    r.__getLocalVars = function() {
                        return {
                            onboardingByGuildId: A,
                            pendingOptionChanges: m,
                            lastFetchedAtByGuildId: b,
                            loading: L,
                            EMPTY_PROMPTS: S,
                            EMPTY_RESPONSES: N,
                            EMPTY_DEFAULT_CHANNEL_IDS: U
                        }
                    };
                    return t
                }(o.ZP.Store);
            G.displayName = "GuildOnboardingPromptsStore";
            const P = new G(u.Z, {
                CONNECTION_OPEN: function() {
                    L = !1;
                    A = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    L = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.prompts,
                        r = e.defaultChannelIds,
                        i = e.enabled,
                        o = e.responses,
                        u = e.onboardingPromptsSeen,
                        l = e.onboardingResponsesSeen,
                        a = e.mode,
                        c = e.belowRequirements;
                    L = !1;
                    var s = _.ZP.getOnboardingStatus(n) === _.uX.READY,
                        f = M(t, u, l);
                    A[n] = {
                        enabled: i,
                        mode: a,
                        belowRequirements: c,
                        prompts: f,
                        onboardingPrompts: f.filter((function(e) {
                            return e.inOnboarding
                        })),
                        defaultChannelIds: r.filter((function(e) {
                            return (0, d.s)(n, e)
                        })),
                        responses: s ? [] : o,
                        onboardingPromptsSeen: u,
                        onboardingResponsesSeen: l
                    };
                    s || D(n, o);
                    b[n] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    L = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(e) {
                    var n = e.guildId,
                        t = e.optionId,
                        r = e.selected,
                        o = e.removedOptionIds;
                    if (l.Z.isFullServerPreview(n)) return !0;
                    if (null == A[n]) return !1;
                    null != o && o.length > 0 && i().pullAll(A[n].responses, o);
                    r ? A[n].responses.push(t) : i().pull(A[n].responses, t);
                    null == m[n] && (m[n] = {});
                    m[n][t] = r;
                    null != o && o.forEach((function(e) {
                        return m[n][e] = !1
                    }));
                    m[n] = I({}, m[n]);
                    return !0
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.options,
                        r = e.prompts_seen,
                        i = e.options_seen;
                    D(n, t);
                    var o = A[n];
                    if (null == o) return !1;
                    var u = M(o.prompts, r, i);
                    A[n] = T(I({}, o), {
                        prompts: u,
                        onboardingPrompts: u.filter((function(e) {
                            return e.inOnboarding
                        })),
                        onboardingPromptsSeen: r,
                        onboardingResponsesSeen: i
                    })
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: C,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: C,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.channelIds;
                    A[n] = T(I({}, A[n]), {
                        defaultChannelIds: t
                    })
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
                    var n = e.guildId,
                        t = e.mode,
                        r = A[n];
                    null != r && (r.mode = t)
                }
            })
        },
        347005: (e, n, t) => {
            t.d(n, {
                cP: () => v,
                Fg: () => h,
                C3: () => g,
                gp: () => A,
                Oh: () => m,
                UT: () => b
            });
            var r = t(281110),
                i = t(744564),
                o = t(720419),
                u = t(828439),
                l = t(861426),
                a = t(451458),
                c = t(61209),
                s = t(652591),
                d = t(386531),
                _ = t(185161),
                f = t(689175),
                E = t(848465),
                p = t(2590);

            function O(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function I(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            O(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            O(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var T, y = function(e, n) {
                    var t, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                v = (T = I((function(e) {
                    var n, t;
                    return y(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: p.ANM.GUILD_HOME_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                n = o.sent();
                                t = (0, _.tB)(n.body);
                                i.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                                    guildId: e,
                                    homeSettings: t
                                });
                                return [2, t];
                            case 3:
                                o.sent();
                                i.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                })), function(e) {
                    return T.apply(this, arguments)
                }),
                h = function() {
                    var e = I((function(e) {
                        var n, t;
                        return y(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (l.Z.isFullServerPreview(e)) return [2];
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                                        guildId: e
                                    });
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.get({
                                        url: p.ANM.GUILD_MEMBER_ACTIONS(e),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    n = o.sent();
                                    t = (0, _.rk)(n.body);
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                                        guildId: e,
                                        memberActions: t
                                    });
                                    return [2, t];
                                case 3:
                                    o.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = (function() {
                    var e = I((function(e) {
                        return y(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START",
                                        guildId: e
                                    });
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.delete({
                                        url: p.ANM.GUILD_MEMBER_ACTIONS(e),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    n.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 3:
                                    n.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(), function(e, n) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    i.Z.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: n
                    });
                    if (null != n) {
                        var r = c.Z.getChannel(n),
                            _ = d.Z.getResourceForChannel(e, n);
                        null == e || l.Z.isFullServerPreview(e) || null == r || null == _ || s.default.track(p.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                            guild_id: e,
                            channel_id: r.id,
                            server_guide_channel_type: "resource",
                            channel_action_type: -1
                        });
                        t && (0, a.Kh)(n);
                        o.Z.jumpToMessage({
                            channelId: n,
                            messageId: n,
                            flash: !1,
                            jumpType: u.S.INSTANT
                        })
                    }
                }),
                A = function(e, n) {
                    i.Z.dispatch({
                        type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                        guildId: e,
                        channelId: n
                    });
                    var t = c.Z.getChannel(n),
                        r = d.Z.getActionForChannel(e, n);
                    null == e || l.Z.isFullServerPreview(e) || null == t || null == r || s.default.track(p.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                        guild_id: e,
                        channel_id: t.id,
                        server_guide_channel_type: "member action",
                        channel_action_type: r.actionType
                    });
                    (0, a.Kh)(n)
                },
                m = function(e, n) {
                    i.Z.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: n
                    });
                    if (!l.Z.isFullServerPreview(e)) {
                        var t = c.Z.getChannel(n),
                            o = d.Z.getActionForChannel(e, n);
                        if (null != t && null != o) {
                            var u, a, _ = Object.keys(null !== (u = f.Z.getCompletedActions(e)) && void 0 !== u ? u : {}),
                                E = null !== (a = d.Z.getNewMemberActions(e)) && void 0 !== a ? a : [];
                            s.default.track(p.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_action_type: o.actionType,
                                has_completed_all: E.reduce((function(e, n) {
                                    return e && _.includes(n.channelId)
                                }), !0)
                            })
                        }
                        r.ZP.post({
                            url: p.ANM.GUILD_MEMBER_ACTION_UPDATE(e, n)
                        })
                    }
                };

            function b(e, n) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = I((function(e, n) {
                    var t;
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return null == e ? [2, !1] : (0, E.s)(e) ? (t = d.Z.getSettings(e)) !== d.P ? [3, 2] : [4, v(e)] : [2, !1];
                            case 1:
                                r.sent();
                                t = d.Z.getSettings(e);
                                r.label = 2;
                            case 2:
                                return t === d.P || null == t ? [2, !1] : null != t.newMemberActions && null != t.newMemberActions.find((function(e) {
                                    return e.channelId === n
                                })) ? [2, "todo"] : null != t.resourceChannels && null != t.resourceChannels.find((function(e) {
                                    return e.channelId === n
                                })) ? [2, "resource"] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        185161: (e, n, t) => {
            t.d(n, {
                ZR: () => a,
                W4: () => c,
                Wz: () => s,
                Z3: () => d,
                O9: () => _,
                n: () => f,
                am: () => E,
                Vu: () => p,
                x3: () => O,
                oi: () => r,
                cq: () => I,
                vD: () => T,
                tB: () => y,
                HH: () => v,
                rk: () => h,
                pw: () => g,
                av: () => A,
                uo: () => m,
                k3: () => b,
                kb: () => L
            });
            var r, i = t(61209),
                o = t(72580),
                u = t(563135),
                l = t(2590),
                a = 7,
                c = 300,
                s = 7,
                d = 60,
                _ = 5,
                f = 1,
                E = 30,
                p = 200,
                O = 7;
            ! function(e) {
                e[e.VIEW = 0] = "VIEW";
                e[e.CHAT = 1] = "CHAT"
            }(r || (r = {}));

            function I(e) {
                var n;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function T(e) {
                var n, t;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (n = e.description) && void 0 !== n ? n : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function y(e) {
                if (null == e) return null;
                var n = e.welcome_message,
                    t = e.new_member_actions,
                    r = e.resource_channels,
                    u = e.enabled;
                return {
                    welcomeMessage: {
                        authorIds: n.author_ids,
                        message: n.message
                    },
                    newMemberActions: t.filter((function(e) {
                        return (0, o.lm)(i.Z.getChannel(e.channel_id))
                    })).map(I),
                    resourceChannels: r.filter((function(e) {
                        return (0, o.lm)(i.Z.getChannel(e.channel_id))
                    })).map(T),
                    enabled: u
                }
            }

            function v(e, n) {
                if (null == n) return null;
                var t, r, u, l, a, c, s, d, _, f, E = n.welcomeMessage,
                    p = n.newMemberActions,
                    O = n.resourceChannels,
                    I = n.enabled,
                    T = {
                        author_ids: null !== (t = null == E ? void 0 : E.authorIds) && void 0 !== t ? t : [],
                        message: null !== (r = null == E ? void 0 : E.message) && void 0 !== r ? r : ""
                    },
                    y = (null != p ? p : []).filter((function(e) {
                        return (0, o.lm)(i.Z.getChannel(e.channelId))
                    })).map((function(e) {
                        var n, t, r;
                        return {
                            channel_id: e.channelId,
                            action_type: e.actionType,
                            title: e.title,
                            description: e.description,
                            emoji: {
                                id: null !== (u = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== u ? u : void 0,
                                name: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : void 0,
                                animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                            },
                            icon: null !== (c = e.icon) && void 0 !== c ? c : void 0
                        }
                    })),
                    v = (null != O ? O : []).filter((function(e) {
                        return (0, o.lm)(i.Z.getChannel(e.channelId))
                    })).map((function(e) {
                        var n, t, r;
                        return {
                            channel_id: e.channelId,
                            title: e.title,
                            description: e.description,
                            emoji: {
                                id: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== s ? s : void 0,
                                name: null !== (d = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== d ? d : void 0,
                                animated: null !== (_ = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== _ ? _ : void 0
                            },
                            icon: null !== (f = e.icon) && void 0 !== f ? f : void 0
                        }
                    }));
                return {
                    guild_id: e,
                    welcome_message: T,
                    new_member_actions: y,
                    resource_channels: v,
                    enabled: I
                }
            }
            var h = function(e) {
                if (null == e) return null;
                var n = {};
                for (var t in e.channel_actions) n[t] = e.channel_actions[t].completed;
                return n
            };

            function g(e) {
                return null == e || !(null != e.message && e.message.length > 0) && !(null != e.authorIds && e.authorIds.length > 0)
            }

            function A(e) {
                return null == e || !!g(e.welcomeMessage) && (!(null != e.newMemberActions && e.newMemberActions.length > 0) && !(null != e.resourceChannels && e.resourceChannels.length > 0))
            }

            function m(e) {
                var n, t;
                return null != e && (!!A(e) || !(null == (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) || e.welcomeMessage.message.length < a) && (null != (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) && 0 !== e.welcomeMessage.authorIds.length && !(null == e.newMemberActions || e.newMemberActions.length < 3)))
            }

            function b(e) {
                return e.type === l.d4z.GUILD_TEXT && !u.ZP.canEveryoneRole(l.Plq.SEND_MESSAGES, e) && u.ZP.canEveryoneRole(l.Plq.VIEW_CHANNEL, e)
            }

            function L(e) {
                switch (e.type) {
                    case l.d4z.GUILD_TEXT:
                    case l.d4z.GUILD_ANNOUNCEMENT:
                    case l.d4z.GUILD_FORUM:
                    case l.d4z.GUILD_MEDIA:
                        return u.ZP.canEveryoneRole(l.Plq.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        689175: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(202351),
                i = t(744564);

            function o(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        u(e, n, t[n])
                    }))
                }
                return e
            }

            function c(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function s(e, n) {
                return !n || "object" !== _(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function d(e, n) {
                d = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return d(e, n)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = l(e);
                    if (n) {
                        var i = l(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }
            var E = {},
                p = {},
                O = new Set;
            var I = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && d(e, n)
                }(t, e);
                var n = f(t);

                function t() {
                    o(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getCompletedActions = function(e) {
                    return null == e ? null : p[e]
                };
                r.hasCompletedActionForChannel = function(e, n) {
                    var t = this.getCompletedActions(e);
                    return null != t && null != t[n]
                };
                r.getState = function(e) {
                    return null == e ? {} : {
                        completedActions: p[e],
                        loading: O.has(e)
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        completedActionsByGuild: p,
                        guildsLoading: O
                    }
                };
                return t
            }(r.ZP.Store);
            I.displayName = "GuildOnboardingMemberActionStore";
            const T = new I(i.Z, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    var n = e.guildId;
                    O.add(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    var n = e.memberActions,
                        t = e.guildId;
                    if (null != n) {
                        p[t] = n;
                        O.delete(t)
                    } else p[t] = E
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    var n = e.guildId;
                    O.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    var n = e.guildId;
                    if (null == p[n]) return !1;
                    delete p[n]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    p = c(a({}, p), u({}, n, c(a({}, p[n]), u({}, t, !0))))
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    if (null == p[n.id]) return !1;
                    delete p[n.id]
                }
            })
        },
        134954: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(667294),
                i = t(202351),
                o = t(302685),
                u = t(664731),
                l = {};

            function a(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = (0, i.e7)([u.Z], (function() {
                        return u.Z.getRoleMemberCount(e)
                    }));
                r.useEffect((function() {
                    if (null != e) {
                        var t = l[e];
                        if (!(null != t && n > 0 && Date.now() - t < n)) {
                            l[e] = Date.now();
                            o.E(e)
                        }
                    }
                }), [e, n]);
                return t
            }
        },
        201441: (e, n, t) => {
            t.d(n, {
                ZP: () => T,
                qY: () => y,
                gM: () => v,
                k5: () => h,
                u1: () => g,
                eF: () => A,
                sz: () => m
            });
            var r = t(667294),
                i = t(202351),
                o = t(826945),
                u = t(61209),
                l = t(5544),
                a = t(567403),
                c = t(682776),
                s = t(72580),
                d = t(269300),
                _ = t(371188),
                f = t(3155),
                E = t(2590);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function O(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = [];

            function T(e, n) {
                return (0, i.Wu)([a.Z, o.Z, d.ZP, c.Z, u.Z, l.ZP], (function() {
                    var t = a.Z.getGuild(e);
                    if (null == t) return I;
                    if (t.hasFeature(E.oNc.HUB)) {
                        var r, i, _ = null === (r = l.ZP.getDefaultChannel(t.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (i = o.Z.getEventDirectoryEntries(_)) && void 0 !== i ? i : []).map((function(e) {
                            var n = e.scheduledEventId,
                                t = d.ZP.getGuildScheduledEvent(n);
                            return null != t ? t : o.Z.getCachedGuildScheduledEventById(n)
                        })).filter(s.lm)
                    }
                    return d.ZP.getGuildScheduledEventsByIndex(null != n ? n : d.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e) {
                        var n = e.channel_id;
                        if (null == n) return !0;
                        var t = u.Z.getChannel(n);
                        return c.Z.can(E.Plq.VIEW_CHANNEL, t)
                    }))
                }), [n, e])
            }

            function y(e) {
                return (0, i.e7)([d.ZP, u.Z, c.Z], (function() {
                    var n = u.Z.getChannel(e);
                    if (!c.Z.can(E.Plq.VIEW_CHANNEL, n)) return null;
                    if (null == (null == n ? void 0 : n.guild_id)) return null;
                    var t = d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_ACTIVE(e));
                    return t.length > 0 ? t[0] : null
                }), [e])
            }

            function v(e) {
                var n = (0, i.Wu)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEventsForGuild(e)
                }), [e]);
                return r.useMemo((function() {
                    var e = new Map;
                    n.forEach((function(n) {
                        var t = n.channel_id;
                        null != t && e.set(t, n)
                    }));
                    return e
                }), [n])
            }

            function h(e) {
                return (0, i.e7)([d.ZP, u.Z, c.Z], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === f.WX.NONE || !(0, d.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var n = u.Z.getChannel(e.channel_id);
                        return c.Z.can(E.Plq.VIEW_CHANNEL, n)
                    }))
                }), [e])
            }

            function g(e) {
                return (0, i.e7)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function A(e) {
                return (0, i.e7)([u.Z, d.ZP], (function() {
                    var n = d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != u.Z.getChannel(e.channel_id)
                    }));
                    return u.Z.getChannel(null == n ? void 0 : n.channel_id)
                }), [e])
            }

            function m(e) {
                var n = O(r.useState((function() {
                        return Date.now()
                    })), 2),
                    t = n[0],
                    o = n[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        o(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var u = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, t]),
                    l = r.useMemo((function() {
                        return u.filter((function(e) {
                            var n = (0, _.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                t = n.withinStartWindow,
                                r = n.diffMinutes;
                            return e.status !== f.p1.ACTIVE && t && r < 15
                        }))
                    }), [u]);
                return l
            }
        },
        371188: (e, n, t) => {
            t.d(n, {
                G3: () => o,
                Ib: () => u,
                ib: () => l,
                ub: () => s,
                v1: () => _,
                me: () => f
            });
            var r = t(730381),
                i = t.n(r),
                o = (t(3155), 365),
                u = o + 1,
                l = function() {
                    var e = i()().add(1, "hour"),
                        n = e.hour();
                    e.minutes() >= 30 && (n += 1);
                    return e.hour(n).minutes(0).seconds(0)
                };
            var a = function(e, n) {
                    return e.format(e.get("years") === n.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                c = function(e, n) {
                    return e.diff(n, "days") > 1 ? a(e, n) : e.calendar(n)
                };

            function s(e, n, t) {
                null == t && (t = i()());
                var r = i()(e),
                    o = null != n && "" !== n ? i()(n) : void 0,
                    u = null != n && r.isSame(o, "day");
                return {
                    startDateTimeString: c(r, t),
                    endDateTimeString: null != o ? u ? o.format("LT") : a(o, t) : void 0,
                    currentOrPastEvent: r <= t,
                    upcomingEvent: r <= i()().add(1, "hour"),
                    withinStartWindow: r <= i()().add(15, "minute"),
                    diffMinutes: r.diff(t, "minutes")
                }
            }

            function d(e, n) {
                var t;
                if (null != e) {
                    t = {
                        startDate: i()(e),
                        endDate: void 0
                    };
                    null != n && (t.endDate = i()(n))
                }
                return t
            }

            function _(e) {
                return d(e.scheduledStartTime, e.scheduledEndTime)
            }

            function f(e) {
                return d(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        302685: (e, n, t) => {
            t.d(n, {
                E: () => p,
                H: () => y
            });
            var r = t(5387),
                i = t.n(r),
                o = t(281110),
                u = t(744564),
                l = t(327499),
                a = t(664731),
                c = t(2590);

            function s(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function d(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            s(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            s(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var _ = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function f(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e) {
                    var n, t;
                    return _(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, o.ZP.get({
                                    url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                n = r.sent();
                                t = n.body;
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: t
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = d((function(e) {
                    return _(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return a.Z.shouldFetch(e) ? [4, f(e)] : [3, 2];
                            case 1:
                                n.sent();
                                n.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var I = new(i())({
                maxAge: 1e4
            });

            function T(e, n) {
                return o.ZP.get({
                    url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, n)
                }).then((function(n) {
                    l.Z.requestMembersById(e, n.body, !1);
                    return n.body.length
                }))
            }

            function y(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(n);
                if (!t || null == I.get(r)) {
                    I.set(r, !0);
                    return T(e, n)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(202351),
                i = t(744564);

            function o(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function a(e, n) {
                a = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return a(e, n)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = u(e);
                    if (n) {
                        var i = u(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var d = 12e4,
                _ = {},
                f = {};
            var E = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && a(e, n)
                }(t, e);
                var n = s(t);

                function t() {
                    o(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? _[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var n = f[e];
                    return null == n || Date.now() - n > d
                };
                r.__getLocalVars = function() {
                    return {
                        CACHE_TIME: d,
                        guildRoleMemberCounts: _,
                        guildLastFetchedAt: f
                    }
                };
                return t
            }(r.ZP.Store);
            E.displayName = "GuildRoleMemberCountStore";
            const p = new E(i.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.roleMemberCount;
                    _[n] = t;
                    f[n] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.count,
                        i = _[n];
                    if (null == i) return !1;
                    i[t] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.added,
                        i = _[n];
                    if (null == i) return !1;
                    if (null == i[t]) return !1;
                    var o = Object.keys(r).length;
                    i[t] += o
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = _[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = r[t] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = _[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = Math.max(r[t] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var n = e.guildId,
                        t = e.role;
                    null == _[n] && (_[n] = {});
                    _[n][t.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    delete _[n.id];
                    delete f[n.id]
                }
            })
        },
        189651: (e, n, t) => {
            t.d(n, {
                iD: () => A,
                Zm: () => m,
                mL: () => b,
                zS: () => M,
                og: () => C,
                aq: () => D
            });
            var r = t(744564),
                i = t(396043),
                o = t(784426),
                u = t(61209),
                l = t(5544),
                a = t(21372),
                c = t(567403),
                s = t(682776),
                d = t(715107),
                _ = t(9430),
                f = t(652591),
                E = t(861426),
                p = t(557177),
                O = t(2590),
                I = t(897196);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        y(e, n, t[n])
                    }))
                }
                return e
            }

            function h(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, n) {
                f.default.track(O.rMx.VIEW_AS_ROLES_SELECTED, h(v({
                    num_roles: Object.keys(n.roles).length
                }, (0, i.hH)(e)), {
                    is_viewing_as_member: n.type === p.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: n
                });
                L(e)
            }

            function m(e, n) {
                var t = E.Z.getData(e);
                if (null != t && t.type === n.type) {
                    f.default.track(O.rMx.VIEW_AS_ROLES_SELECTED, h(v({
                        num_roles: Object.keys(t.roles).length
                    }, (0, i.hH)(e)), {
                        is_viewing_as_member: t.type === p.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: v({}, t, n)
                    });
                    L(e)
                }
            }

            function b(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function L(e) {
                var n = d.Z.getChannelId(e),
                    t = u.Z.getChannel(n);
                if (!(null != n && (0, I.AB)(n)) && !s.Z.can(O.Plq.VIEW_CHANNEL, t)) {
                    var r = l.ZP.getDefaultChannel(e);
                    null != r && (0, o.uL)(O.Z5c.CHANNEL(e, r.id))
                }
            }

            function M(e, n, t) {
                var r = new Set(_.Z.getOptedInChannels(e));
                n.forEach((function(e) {
                    return r.add(e)
                }));
                t.forEach((function(e) {
                    return r.delete(e)
                }));
                m(e, {
                    type: p.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function C(e, n) {
                var t = c.Z.getGuild(e);
                if (null != t) {
                    ! function(e, n) {
                        var t = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))),
                            r = Array.from(n);
                        l.ZP.addConditionalChangeListener((function() {
                            var n = a.ZP.getSelfMember(e);
                            if (null == n) return !1;
                            if (r.some((function(e) {
                                    return !n.roles.includes(e)
                                }))) return !0;
                            var i = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !t.includes(e)
                            }));
                            i.length > 0 && M(e, i, []);
                            return !1
                        }))
                    }(e, n);
                    var r = {};
                    n.forEach((function(e) {
                        return r[e] = t.roles[e]
                    }));
                    m(e, {
                        type: p.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function D(e, n) {
                m(e, v({
                    type: p.z.NEW_MEMBER
                }, n))
            }
        },
        451458: (e, n, t) => {
            t.d(n, {
                Kh: () => s,
                ad: () => d,
                gt: () => _,
                jd: () => f
            });
            var r = t(441143),
                i = t.n(r),
                o = t(761953),
                u = t(201521),
                l = t(61209),
                a = t(784426),
                c = t(2590);

            function s(e, n, t) {
                var r = l.Z.getChannel(e);
                if (null != r) {
                    var i = (0, u.e)(r);
                    o.Z.preload(r.guild_id, r.id);
                    (0, a.uL)(c.Z5c.CHANNEL(i, r.id), n, t)
                }
            }

            function d(e, n) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var t = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(t, e.id), void 0, n)
            }

            function _(e, n, t) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var r = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(r, e.id, n), void 0, t)
            }

            function f(e, n, t, r) {
                var i = l.Z.getChannel(e);
                if (null != i) {
                    var o = (0, u.e)(i);
                    (0, a.uL)(c.Z5c.CHANNEL(o, i.id, n), t, r)
                }
            }
        },
        424158: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(730381),
                i = t.n(r),
                o = t(169376);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = l(e);
                    if (n) {
                        var i = l(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }
            var f = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(e, n)
                }(t, e);
                var n = _(t);

                function t(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r;
                    (r = n.call(this)).code = e.code || "";
                    r.temporary = e.temporary || !1;
                    r.revoked = e.revoked || !1;
                    r.uses = e.uses || 0;
                    r.maxUses = e.maxUses || 0;
                    r.maxAge = e.maxAge || 0;
                    r.createdAt = e.createdAt || new Date;
                    r.channel = e.channel;
                    r.guild = e.guild;
                    r.inviter = e.inviter || null;
                    r.targetType = e.targetType || null;
                    r.targetUser = e.targetUser || null;
                    r.targetApplication = e.targetApplication || null;
                    r.type = e.type || null;
                    r.flags = e.flags || 0;
                    return r
                }
                var r = t.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return i()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                t.createFromServer = function(e) {
                    var n;
                    return new t(a(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                u(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i()(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return t
            }(o.Z)
        }
    }
]);