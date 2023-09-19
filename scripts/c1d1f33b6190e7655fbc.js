(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72982, 40706], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        735885: (e, n, t) => {
            "use strict";
            t.d(n, {
                jN: () => i,
                xf: () => o,
                Ou: () => l
            });
            var r = t(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        826945: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => C
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                l = t(744564),
                a = t(269300),
                u = t(848285),
                s = t(612831);

            function c(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function E(e, n) {
                return !n || "object" !== v(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function _(e, n) {
                _ = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return _(e, n)
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return c(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var t, r = f(e);
                    if (n) {
                        var i = f(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var h = !1,
                O = {},
                g = {},
                y = {},
                A = function(e) {
                    y[e.guild_scheduled_event.id] = new u.Z(e.guild_scheduled_event.guild);
                    g[e.guild_scheduled_event.id] = e.guild_scheduled_event;
                    return {
                        channelId: e.directory_channel_id,
                        scheduledEventId: e.entity_id,
                        type: s.C2.GUILD_SCHEDULED_EVENT,
                        authorId: e.author_id,
                        createdAt: e.created_at
                    }
                };
            var b = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && _(e, n)
                }(t, e);
                var n = T(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.isFetching = function() {
                    return h
                };
                r.getEventDirectoryEntries = function(e) {
                    if (null != e) return O[e]
                };
                r.getCachedGuildByEventId = function(e) {
                    var n;
                    return null !== (n = y[e]) && void 0 !== n ? n : void 0
                };
                r.getCachedGuildScheduledEventById = function(e) {
                    var n;
                    return null !== (n = g[e]) && void 0 !== n ? n : void 0
                };
                r.__getLocalVars = function() {
                    return {
                        fetching: h,
                        eventDirectoryEntries: O,
                        cachedGuildScheduledEvents: g,
                        cachedGuildByEvents: y,
                        eventDirectoryEntryFromServer: A
                    }
                };
                return t
            }(o.ZP.Store);
            b.displayName = "EventDirectoryStore";
            const C = new b(l.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    h = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.entries;
                    h = !1;
                    var r = i().sortBy(p(t), [function(e) {
                            return (0, a.CQ)(e.guild_scheduled_event)
                        }]),
                        o = i().map(r, A);
                    O[n] = o
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    h = !1
                }
            })
        },
        612831: (e, n, t) => {
            "use strict";
            t.d(n, {
                C2: () => r,
                VX: () => i,
                sE: () => o,
                AR: () => l,
                C1: () => f,
                b7: () => E,
                Pp: () => _
            });
            var r, i, o, l, a = t(940060),
                u = t(563135),
                s = t(2590),
                c = t(473708);

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
            }(l || (l = {}));
            var f = "1113200031168729140";

            function E(e) {
                return "883060064561299456" === e ? [{
                    value: l.SCHOOL_CLUB,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: l.CLASS,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: l.STUDY_SOCIAL,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: l.MISC,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : e === f ? [{
                    value: l.SCHOOL_CLUB,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_1
                }, {
                    value: l.CLASS,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_2
                }, {
                    value: l.STUDY_SOCIAL,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_3
                }, {
                    value: l.MISC,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_5
                }] : [{
                    value: l.SCHOOL_CLUB,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: l.CLASS,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: l.STUDY_SOCIAL,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: l.MISC,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function _() {
                var e;
                return d(e = {}, o.CREATE, {
                    id: o.CREATE,
                    code: "2TffvPucqHkN",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                    channels: [],
                    system_channel_id: null
                }), d(e, o.HUB_SCHOOL_CLUB, {
                    id: o.HUB_SCHOOL_CLUB,
                    code: "UMUbvRpRZhS6",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                        type: s.d4z.GUILD_VOICE
                    }],
                    roles: [{
                        id: "00",
                        name: "@everyone",
                        permissions: u.ZP.DEFAULT
                    }, {
                        id: "01",
                        name: "officers (example)",
                        mentionable: !0,
                        hoist: !0,
                        permissions: a.Z.combine(u.ZP.DEFAULT, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.MANAGE_NICKNAMES, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.MANAGE_MESSAGES, s.Plq.SEND_TTS_MESSAGES),
                        color: 3066993
                    }],
                    system_channel_id: "12"
                }), d(e, o.HUB_STUDY, {
                    id: o.HUB_STUDY,
                    code: "2JBhzzca2vfT",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: s.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, o.HUB_CLASS, {
                    id: o.HUB_CLASS,
                    code: "r86WWBwTGspb",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: s.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, o.HUB_SOCIAL, {
                    id: o.HUB_SOCIAL,
                    code: "AvvtXE3mfbCR",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "04",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                        type: s.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "02"
                }), d(e, o.HUB_MAJOR, {
                    id: o.HUB_MAJOR,
                    code: "FhmfDR6Arvsc",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: s.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, o.HUB_DORM, {
                    id: o.HUB_DORM,
                    code: "fkq8xHfrGE58",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: s.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: s.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: s.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: c.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: s.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), e
            }
        },
        774930: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                i = t(409125);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        414306: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s,
                $: () => c
            });
            var r = t(202351),
                i = t(747820),
                o = t(61209),
                l = t(682776),
                a = t(2590),
                u = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function s(e) {
                return (0, r.cj)([o.Z, i.Z, l.Z], (function() {
                    return c(e, o.Z, i.Z, l.Z)
                }), [e])
            }

            function c(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
                    s = n.getChannel(e);
                if (null == s ? void 0 : s.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == s || !t.isChannelGated(s.guild_id, s.id)) return u;
                var c = s.isGuildVocal() ? !r.can(a.Plq.CONNECT, s) : !r.can(a.Plq.VIEW_CHANNEL, s);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: c
                }
            }
        },
        79522: (e, n, t) => {
            "use strict";
            t.d(n, {
                TT: () => l,
                AN: () => a,
                LK: () => u
            });
            var r = t(940060),
                i = t(227202),
                o = t(2590),
                l = o.Plq.VIEW_CHANNEL,
                a = r.Z.combine(l, o.Plq.CONNECT),
                u = r.Z.combine(l, i.yP)
        },
        919810: (e, n, t) => {
            "use strict";
            t.d(n, {
                wg: () => T,
                so: () => h,
                ZP: () => O
            });
            var r = t(202351),
                i = t(15970),
                o = t(766496),
                l = t(61209),
                a = t(5544),
                u = t(567403),
                s = t(682776),
                c = t(563135),
                d = t(269300),
                f = t(3155),
                E = t(2590);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                return "entity_type" in e ? {
                    entityType: e.entity_type,
                    channelId: e.channel_id
                } : e
            }

            function T(e) {
                var n = p(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z], 1),
                    t = n[0],
                    r = v(e),
                    i = r.entityType,
                    o = r.channelId,
                    a = i === f.WX.EXTERNAL;
                if (a) return !0;
                var u = t.getChannel(o);
                return null != u && c.ZP.canEveryoneRole(E.Plq.VIEW_CHANNEL, u)
            }

            function h(e) {
                var n = p(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP, l.Z, u.Z, o.Z], 4),
                    t = n[0],
                    r = n[1],
                    c = n[2],
                    E = n[3];
                if ((0, d.Z2)(e)) return !1;
                var _ = e.guild_id,
                    v = e.channel_id,
                    h = e.entity_type === f.WX.EXTERNAL,
                    O = h ? t.getDefaultChannel(e.guild_id) : r.getChannel(v),
                    g = c.getGuild(_),
                    y = E.getStageInstanceByChannel(v);
                return !!(0,
                    i.b)(s.Z, g, O, y) && (null != O && T(e, [r]))
            }

            function O(e) {
                return (0, r.e7)([a.ZP, l.Z, u.Z, o.Z], (function() {
                    return h(e, [a.ZP, l.Z, u.Z, o.Z])
                }), [e])
            }
        },
        158499: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(202351),
                i = t(826945),
                o = t(567403);

            function l(e, n) {
                return (0, r.cj)([o.Z, i.Z], (function() {
                    var t = o.Z.getGuild(e),
                        r = null != t;
                    null == t && null != n && (t = i.Z.getCachedGuildByEventId(n));
                    return {
                        isMember: r,
                        guild: t
                    }
                }), [e, n])
            }
        },
        619584: (e, n, t) => {
            "use strict";
            t.d(n, {
                Q: () => s,
                T: () => c
            });
            var r = t(202351),
                i = t(61209),
                o = t(563135),
                l = t(269300),
                a = t(3155),
                u = t(2590);

            function s(e, n) {
                return o.ZP.canEveryoneRole(u.Plq.VIEW_CHANNEL, e) || n === a.WX.EXTERNAL
            }

            function c(e, n) {
                return (0, r.e7)([i.Z, l.ZP], (function() {
                    var t = i.Z.getChannel(e),
                        r = l.ZP.getGuildScheduledEvent(n);
                    return s(t, null == r ? void 0 : r.entity_type)
                }), [e, n])
            }
        },
        951687: (e, n, t) => {
            "use strict";
            t.d(n, {
                ku: () => C,
                S0: () => I,
                Lh: () => L,
                ZP: () => S
            });
            var r = t(785893),
                i = t(667294),
                o = t(513328),
                l = t(882723),
                a = t(312682),
                u = t(621329),
                s = t(963881),
                c = t(186440),
                d = t(360686),
                f = t(3155),
                E = t(473708),
                _ = t(13361),
                p = t.n(_);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function T(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        T(e, n, t[n])
                    }))
                }
                return e
            }

            function O(e, n) {
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

            function g(e, n) {
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

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                var n = e.isJoined,
                    t = e.canJoin,
                    r = e.isVoiceChannel;
                return t ? n ? E.Z.Messages.GO_TO_CHANNEL : r ? E.Z.Messages.GUILD_EVENT_JOIN : E.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.Z.Messages.CHANNEL_LOCKED_SHORT
            }

            function b(e) {
                var n = e.text,
                    t = e.disabled,
                    i = e.onJoinClick;
                return (0, r.jsx)(l.Button, {
                    className: p().button,
                    size: l.Button.Sizes.SMALL,
                    onClick: i,
                    color: l.Button.Colors.GREEN,
                    disabled: t,
                    children: n
                })
            }

            function C(e) {
                var n = e.onInviteClick,
                    t = e.canInvite,
                    a = e.isChannelPublic,
                    c = new o.V7,
                    f = y(i.useState(!1), 2),
                    _ = f[0],
                    v = f[1];
                i.useEffect((function() {
                    return function() {
                        c.stop()
                    }
                }), []);
                var T = function(e) {
                    null != n && n(e);
                    v(!0);
                    c.start(1e3, (function() {
                        return v(!1)
                    }))
                };
                return null == n ? null : (0, r.jsx)(l.Tooltip, {
                    text: M(t, a),
                    position: "top",
                    tooltipClassName: p().tooltips,
                    "aria-label": E.Z.Messages.SHARE_LINK,
                    children: function(e) {
                        return t && a ? (0, r.jsxs)(l.Button, O(h({}, e), {
                            className: p().button,
                            innerClassName: p().innerButton,
                            color: l.Button.Colors.PRIMARY,
                            size: l.Button.Sizes.SMALL,
                            onClick: n,
                            children: [(0, r.jsx)(d.Z, {
                                width: 16,
                                height: 16
                            }), E.Z.Messages.SHARE]
                        })) : (0, r.jsxs)(l.Button, O(h({}, e), {
                            className: p().button,
                            innerClassName: p().innerButton,
                            color: l.Button.Colors.PRIMARY,
                            size: l.Button.Sizes.SMALL,
                            disabled: _,
                            look: _ ? l.Button.Looks.OUTLINED : l.Button.Looks.FILLED,
                            onClick: T,
                            children: [_ ? (0, r.jsx)(u.Z, {
                                width: 16,
                                height: 16
                            }) : (0, r.jsx)(s.Z, {
                                width: 16,
                                height: 16
                            }), _ ? E.Z.Messages.COPIED : E.Z.Messages.SHARE]
                        }))
                    }
                })
            }

            function I(e) {
                var n = e.isUserRsvped,
                    t = e.isUserLurking,
                    i = e.onRsvpClick,
                    o = g(e, ["isUserRsvped", "isUserLurking", "onRsvpClick"]),
                    s = n && !t;
                return (0,
                    r.jsxs)(l.Button, O(h({}, o), {
                    className: p().button,
                    innerClassName: p().innerButton,
                    size: l.Button.Sizes.SMALL,
                    onClick: i,
                    color: l.Button.Colors.PRIMARY,
                    look: s ? l.Button.Looks.OUTLINED : l.Button.Looks.FILLED,
                    disabled: t,
                    children: [s ? (0, r.jsx)(u.Z, {
                        width: 16,
                        height: 16
                    }) : (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16
                    }), E.Z.Messages.INDICATE_RSVP]
                }))
            }

            function L(e) {
                return (0, r.jsx)(l.Tooltip, {
                    text: E.Z.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: p().tooltips,
                    "aria-label": E.Z.Messages.SHARE_LINK,
                    children: function(n) {
                        return (0, r.jsx)(I, h({}, n, e))
                    }
                })
            }
            var m = function(e) {
                    return null == e || e
                },
                M = function(e, n) {
                    return m(e) ? E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : m(n) ? E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL
                };

            function S(e) {
                var n = e.isActive,
                    t = e.isUserLurking,
                    i = e.rsvped,
                    o = e.canInvite,
                    a = e.isChannelPublic,
                    u = void 0 === a || a,
                    s = e.entityType,
                    d = e.onContextMenu,
                    _ = e.onJoinClick,
                    v = e.onRsvpClick,
                    T = e.onStartClick,
                    g = e.onInviteClick,
                    y = e.onEndClick,
                    m = e.isJoined,
                    M = void 0 !== m && m,
                    S = void 0 !== _;
                return (0, r.jsxs)("div", {
                    className: p().container,
                    children: [null != d ? (0, r.jsx)(l.Tooltip, {
                        text: E.Z.Messages.MORE,
                        position: "top",
                        "aria-label": E.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(l.Clickable, O(h({}, e), {
                                onClick: d,
                                className: p().iconButton,
                                children: (0, r.jsx)(c.Z, {
                                    width: 20,
                                    height: 20,
                                    className: p().icon
                                })
                            }))
                        }
                    }) : null, (0, r.jsx)(C, {
                        onInviteClick: g,
                        canInvite: o,
                        isChannelPublic: u
                    }), n && s !== f.WX.EXTERNAL ? (0, r.jsx)(b, {
                        text: A({
                            isJoined: M,
                            canJoin: S,
                            isVoiceChannel: s === f.WX.VOICE
                        }),
                        disabled: !S,
                        onJoinClick: _
                    }) : null, t && !n && (0, r.jsx)(L, {
                        isUserRsvped: i,
                        isUserLurking: t
                    }), !t && !n && null != v && (0, r.jsx)(I, {
                        isUserRsvped: i,
                        isUserLurking: t,
                        onRsvpClick: v
                    }), n || null == T ? null : (0, r.jsx)(l.Button, {
                        className: p().button,
                        innerClassName: p().innerButton,
                        size: l.Button.Sizes.SMALL,
                        onClick: T,
                        color: l.Button.Colors.GREEN,
                        children: E.Z.Messages.START
                    }), n && null != y ? (0, r.jsx)(l.Button, {
                        className: p().button,
                        innerClassName: p().innerButton,
                        size: l.Button.Sizes.SMALL,
                        onClick: y,
                        color: l.Button.Colors.PRIMARY,
                        children: E.Z.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        757337: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => me
            });
            var r = t(785893),
                i = t(667294),
                o = t(202351),
                l = t(882723),
                a = t(350403),
                u = t(944522),
                s = t(61209),
                c = t(443812),
                d = t(474236),
                f = t(634080),
                E = t(269300),
                _ = t(919810),
                p = t(158499),
                v = t(619584),
                T = t(205316),
                h = t(951687),
                O = t(699296),
                g = t(26601),
                y = t(294184),
                A = t.n(y),
                b = t(189865),
                C = t(3155),
                I = t(473708),
                L = t(796222),
                m = t.n(L);

            function M(e) {
                var n = e.onClose,
                    t = e.selectedTab,
                    o = e.onTabSelected,
                    a = e.rsvpCount,
                    u = e.hasBanner,
                    s = e.isHub,
                    c = void 0 !== s && s,
                    d = i.useRef(null);
                i.useEffect((function() {
                    var e, n, t;
                    return null === (e = d.current) || void 0 === e || null === (n = e.ref) || void 0 === n || null === (t = n.blur) || void 0 === t ? void 0 : t.call(n)
                }), []);
                var f = I.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: a
                    }),
                    E = [(0, r.jsx)(l.TabBar.Item, {
                        className: m().tabBarItem,
                        id: C.fL.EVENT_INFO,
                        children: I.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                c || E.push((0, r.jsx)(l.TabBar.Item, {
                    className: m().tabBarItem,
                    id: C.fL.RSVP_LIST,
                    children: f
                }, "is-hub"));
                return (0, r.jsxs)("div", {
                    className: m().container,
                    children: [(0, r.jsx)(l.Clickable, {
                        ref: d,
                        onClick: n,
                        className: m().closeButton,
                        "aria-label": I.Z.Messages.CLOSE,
                        children: (0, r.jsx)(b.Z, {
                            className: A()(m().closeIcon, u && m().closeIconBanner)
                        })
                    }), (0, r.jsx)(l.TabBar, {
                        className: m().tabBar,
                        "aria-label": I.Z.Messages.OPTIONS,
                        selectedItem: t,
                        type: "top",
                        onItemSelect: o,
                        children: E
                    })]
                })
            }
            var S = t(667569),
                N = t(924417),
                P = t(21372),
                D = t(567403),
                Z = t(206986),
                U = t(124251),
                G = t(363582),
                R = t(749565),
                j = t(434149),
                w = t(314597),
                x = t(616918),
                k = t(621634),
                H = t(2590),
                V = t(436393),
                B = t.n(V);

            function z(e) {
                var n, t = e.creator,
                    i = e.guildId,
                    a = (0, o.e7)([P.ZP], (function() {
                        return P.ZP.getMember(i, t.id)
                    }), [t, i]);
                return (0,
                    r.jsxs)("div", {
                    className: B().row,
                    children: [(0, r.jsx)(l.Avatar, {
                        size: l.AvatarSizes.SIZE_20,
                        src: t.getAvatarURL(i, 20),
                        "aria-label": null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : R.ZP.getName(t),
                        className: B().icon
                    }), (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: I.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, n;
                                return (0, r.jsx)(l.Clickable, {
                                    onClick: function() {
                                        return (0, N.m)({
                                            userId: t.id,
                                            guildId: i,
                                            analyticsLocation: {
                                                section: H.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                            }
                                        })
                                    },
                                    className: B().creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, r.jsx)(l.NameWithRole, {
                                        name: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : R.ZP.getName(t),
                                        color: null !== (n = null == a ? void 0 : a.colorString) && void 0 !== n ? n : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.guild,
                    t = e.onClick,
                    o = e.onClose,
                    a = i.useCallback((function(e) {
                        null == t || t(e);
                        null != t && (null == o || o(e))
                    }), [t, o]),
                    u = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(U.Z, {
                            guild: n,
                            size: U.Z.Sizes.MINI,
                            active: !0,
                            className: A()(B().guildIcon, B().icon)
                        }), (0, r.jsx)(Z.Z, {
                            guild: n,
                            tooltipPosition: "top",
                            tooltipColor: l.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: B().guildBadge
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: B().linkText,
                            children: n.name
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: B().row,
                    children: null != t ? (0, r.jsx)(l.Clickable, {
                        onClick: a,
                        className: B().clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function F(e) {
                var n = e.userCount,
                    t = e.onClick;
                return (0, r.jsxs)("div", {
                    className: B().row,
                    children: [(0, r.jsx)(G.Z, {
                        width: 20,
                        height: 20,
                        className: B().icon
                    }), (0, r.jsx)(l.Clickable, {
                        onClick: t,
                        className: B().interestedCount,
                        children: (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: I.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: n
                            })
                        })
                    })]
                })
            }

            function X(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    a = e.channel,
                    u = e.headerId,
                    s = e.onClose,
                    c = e.onClickInterestedCount,
                    d = e.isHub,
                    _ = void 0 !== d && d,
                    p = e.containerRef,
                    v = (0, E.xt)(n),
                    T = (0, E.Z2)(n),
                    h = n.user_count,
                    O = n.description,
                    g = (0,
                        o.e7)([D.Z], (function() {
                        return null != D.Z.getGuild(t.id)
                    }), [t.id]),
                    y = i.useCallback((function(e) {
                        e.stopPropagation();
                        null != n && (0, S.B)(n)
                    }), [n]),
                    A = (0, j.Z)(n);
                i.useEffect((function() {
                    f.Z.getGuildEventUserCounts(t.id);
                    f.Z.getGuildEventsForCurrentUser(t.id)
                }), [t.id]);
                return (0, r.jsxs)("div", {
                    ref: p,
                    children: [(0, r.jsxs)("div", {
                        className: B().header,
                        children: [(0, r.jsx)(x.z, {
                            startTime: n.scheduled_start_time,
                            endTime: n.scheduled_end_time,
                            isActive: v,
                            isEnded: T,
                            eventType: n.entity_type
                        }), (0, r.jsx)(l.Heading, {
                            id: u,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: B().title,
                            children: n.name
                        })]
                    }), (0, r.jsxs)("div", {
                        className: B().body,
                        children: [(0, r.jsx)(Y, {
                            guild: t,
                            onClick: g ? y : void 0,
                            onClose: s
                        }), (0, r.jsx)(k.Z, {
                            guildScheduledEvent: n,
                            channel: a,
                            onClose: s
                        }), null != h && (0, r.jsx)(F, {
                            userCount: h,
                            onClick: c
                        }), !_ && null != A && (0, r.jsx)(z, {
                            creator: A,
                            guildId: t.id
                        }, A.id), null != O && (0, r.jsx)("div", {
                            className: B().description,
                            children: (0, r.jsx)(w.Z, {
                                description: O,
                                truncate: !1,
                                guildId: t.id
                            })
                        })]
                    })]
                })
            }
            var J = t(971402),
                W = t(334835),
                q = t(832642),
                K = t(736626),
                Q = t(668929),
                $ = t(664625),
                ee = t(491260),
                ne = t(436154),
                te = t(166337),
                re = t.n(te);

            function ie(e, n, t, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function oe(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            ie(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            ie(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function le(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        le(e, n, t[n])
                    }))
                }
                return e
            }

            function ue(e, n) {
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
            var se = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1],
                                                done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
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
                        }([o, a])
                    }
                }
            };

            function ce(e) {
                var n = e.children;
                return (0, r.jsxs)("div", {
                    className: re().emptyContainer,
                    children: [(0, r.jsx)(q.Z, {
                        children: (0, r.jsx)("div", {
                            className: re().circle,
                            children: (0, r.jsx)(G.Z, {
                                height: 40,
                                width: 40,
                                className: re().icon
                            })
                        })
                    }), n]
                })
            }

            function de() {
                return (0, r.jsx)(ce, {
                    children: (0, r.jsx)(l.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: re().title,
                        children: I.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function fe() {
                return (0, r.jsx)(ce, {
                    children: (0,
                        r.jsx)(l.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: re().errorTitle,
                        children: I.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function Ee(e) {
                var n = e.count;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: re().listRow,
                        children: [(0, r.jsx)("div", {
                            className: A()(re().listRowCircle, re().listAvatar),
                            children: (0, r.jsx)(G.Z, {
                                height: 14,
                                width: 14,
                                className: re().icon
                            })
                        }), (0, r.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: I.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: n
                            })
                        })]
                    })
                })
            }

            function _e(e) {
                var n, t = e.rsvpUser,
                    i = e.onContextMenu,
                    a = t.user,
                    u = null === (n = t.guild_member) || void 0 === n ? void 0 : n.guildId,
                    s = (0, o.e7)([ne.Z, ee.Z, $.default], (function() {
                        return a.id === $.default.getId() ? ne.Z.getStatus() : ee.Z.getStatus(a.id, u)
                    }), [a.id, u]);
                return (0, r.jsx)(l.Popout, {
                    preload: function() {
                        return (0, K.Z)(a.id, a.getAvatarURL(u, 80), {
                            guildId: u
                        })
                    },
                    renderPopout: function(e) {
                        return (0, r.jsx)(Q.Z, ue(ae({}, e), {
                            userId: a.id,
                            guildId: u
                        }))
                    },
                    position: "left",
                    spacing: 16,
                    children: function(e, n) {
                        var o, u, c = n.isShown;
                        return (0, r.jsxs)(l.Clickable, ue(ae({
                            className: A()(re().listRow, re().interactiveRow, le({}, re().selected, c)),
                            onContextMenu: function(e) {
                                return i(e, a)
                            }
                        }, e), {
                            children: [(0, r.jsx)(l.Avatar, {
                                src: a.getAvatarURL(null === (o = t.guild_member) || void 0 === o ? void 0 : o.guildId, 24),
                                "aria-label": a.username,
                                size: l.AvatarSizes.SIZE_24,
                                className: re().listAvatar,
                                status: s
                            }), (0, r.jsx)(W.Z, {
                                user: a,
                                className: re().listName,
                                discriminatorClass: re().listDiscriminator,
                                nick: null === (u = t.guild_member) || void 0 === u ? void 0 : u.nick
                            })]
                        }))
                    }
                })
            }

            function pe(e) {
                var n = e.rsvpUsers,
                    t = e.usersNotShownCount,
                    i = void 0 === t ? 0 : t,
                    o = e.onContextMenu;
                return (0, r.jsxs)(l.ScrollerThin, {
                    className: re().listScroller,
                    children: [n.map((function(e) {
                        return (0, r.jsx)(_e, {
                            rsvpUser: e,
                            onContextMenu: o
                        }, e.user.id)
                    })), i > 0 && (0, r.jsx)(Ee, {
                        count: i
                    })]
                })
            }

            function ve(e) {
                var n = e.children,
                    t = e.style;
                return (0, r.jsx)("div", {
                    className: re().container,
                    style: null != t ? t : {},
                    children: n
                })
            }

            function Te(e) {
                var n = e.children,
                    t = e.height;
                return (0, r.jsx)(ve, {
                    style: {
                        height: t
                    },
                    children: n
                })
            }

            function he(e) {
                var n, i = e.guildEvent,
                    o = e.rsvpUsers,
                    a = e.loading,
                    u = e.error,
                    s = e.containerHeight;
                if (a && 0 === o.length) return (0, r.jsx)(Te, {
                    height: s,
                    children: (0, r.jsx)(l.Spinner, {
                        type: l.Spinner.Type.SPINNING_CIRCLE,
                        className: re().spinner
                    })
                });
                if (null != u && 0 === o.length) return (0, r.jsx)(Te, {
                    height: s,
                    children: (0, r.jsx)(fe, {})
                });
                var c = null !== (n = null == i ? void 0 : i.user_count) && void 0 !== n ? n : 0,
                    d = 0;
                o.length >= C.rC && c > C.rC && (d = Math.max(c - o.length, 0));
                return 0 === o.length ? (0, r.jsx)(Te, {
                    height: s,
                    children: (0, r.jsx)(de, {})
                }) : (0, r.jsx)(ve, {
                    children: (0, r.jsx)(pe, {
                        rsvpUsers: o,
                        onContextMenu: function(e, n) {
                            (0, J.jW)(e, oe((function() {
                                var e, i;
                                return se(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(71575), t.e(49244), t.e(56645), t.e(10848)]).then(t.bind(t, 810848))];
                                        case 1:
                                            e = o.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, ue(ae({}, e), {
                                                    user: n
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        },
                        usersNotShownCount: d
                    })
                })
            }
            var Oe = t(85941),
                ge = t(729962),
                ye = t.n(ge);

            function Ae(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function be(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ce(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        be(e, n, t[n])
                    }))
                }
                return e
            }

            function Ie(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ae(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ae(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Le(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    i = e.channel,
                    l = e.onActionTaken,
                    a = e.isHub,
                    s = e.isMember,
                    c = (0, E.xt)(n),
                    d = (0, o.e7)([E.ZP], (function() {
                        return E.ZP.hasRsvp(n.id, t.id)
                    }), [t.id, n]),
                    f = (0, _.ZP)(n),
                    p = (0, o.e7)([u.Z], (function() {
                        return u.Z.isLurking(t.id)
                    }), [t.id]),
                    T = (0, v.T)(null == i ? void 0 : i.id, n.id),
                    O = (0, Oe.Z)({
                        guild: t,
                        channel: i,
                        guildScheduledEvent: n,
                        isActive: c,
                        rsvped: d,
                        onActionTaken: l
                    }),
                    y = n.entity_type;
                return a ? (0, r.jsx)(g.Z, Ce({
                    isActive: c,
                    isUserLurking: p,
                    rsvped: d,
                    isMember: s,
                    isDetailsView: !0,
                    guildName: null == t ? void 0 : t.name,
                    isChannelPublic: T,
                    canInvite: f
                }, O)) : (0, r.jsx)(h.ZP, Ce({
                    isActive: c,
                    isUserLurking: p,
                    rsvped: d,
                    isChannelPublic: T,
                    canInvite: f,
                    entityType: y
                }, O))
            }
            const me = function(e) {
                var n = e.guildScheduledEventId,
                    t = e.parentGuildId,
                    u = e.transitionState,
                    _ = e.onClose,
                    v = (0, o.e7)([E.ZP], (function() {
                        return E.ZP.getGuildScheduledEvent(n)
                    }), [n]),
                    h = null == v ? void 0 : v.id,
                    g = null == v ? void 0 : v.guild_id,
                    y = (0, p.Z)(g, h),
                    A = y.guild,
                    b = y.isMember,
                    I = (0, a.Z)(t),
                    L = null == v ? void 0 : v.channel_id,
                    m = (0, o.e7)([s.Z], (function() {
                        return s.Z.getChannel(L)
                    }), [L]),
                    S = (0, c.Dt)(),
                    N = Ie(i.useState(C.fL.EVENT_INFO), 2),
                    P = N[0],
                    D = N[1],
                    Z = (0, o.Wu)([E.ZP], (function() {
                        return Object.values(E.ZP.getUsersForGuildEvent(h))
                    }), [h]),
                    U = Ie((0, d.Z)((function() {
                        return f.Z.getGuildEventUsers(null == v ? void 0 : v.id, g)
                    })), 2),
                    G = U[0],
                    R = U[1],
                    j = R.loading,
                    w = R.error;
                i.useEffect((function() {
                    null == v && _()
                }));
                var x = i.useRef(null),
                    k = Ie(i.useState(0), 2),
                    H = k[0],
                    V = k[1];
                i.useLayoutEffect((function() {
                    var e, n;
                    V(null !== (n = null == x || null === (e = x.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0)
                }), [x]);
                if (null == v || null == A || !b && !I) return null;
                var B, z = function(e) {
                        if (e !== P) {
                            e === C.fL.RSVP_LIST && G();
                            D(e)
                        }
                    },
                    Y = null !== (B = null == v ? void 0 : v.user_count) && void 0 !== B ? B : 0,
                    F = {
                        height: H
                    };
                return (0, r.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-labelledby": S,
                    className: ye().root,
                    children: [null != (null == v ? void 0 : v.image) && (0, r.jsx)(O.Z, {
                        source: (0, T.Z)(v),
                        className: ye().banner
                    }), (0, r.jsx)(M, {
                        onClose: _,
                        selectedTab: P,
                        onTabSelected: z,
                        rsvpCount: Y,
                        hasBanner: null != (null == v ? void 0 : v.image),
                        isHub: I
                    }), (0, r.jsx)("div", {
                        className: ye().container,
                        children: (0, r.jsx)(l.ModalContent, {
                            className: ye().contentContainer,
                            style: F,
                            children: (0, r.jsxs)(l.Slides, {
                                activeSlide: P,
                                width: 600,
                                centered: !1,
                                children: [(0, r.jsx)(l.Slide, {
                                    id: C.fL.EVENT_INFO,
                                    children: (0, r.jsx)(X, {
                                        guildEvent: v,
                                        guild: A,
                                        channel: m,
                                        headerId: S,
                                        onClose: _,
                                        onClickInterestedCount: function() {
                                            return z(C.fL.RSVP_LIST)
                                        },
                                        isHub: I,
                                        containerRef: x
                                    })
                                }), (0,
                                    r.jsx)(l.Slide, {
                                    id: C.fL.RSVP_LIST,
                                    children: (0, r.jsx)(he, {
                                        guildEvent: v,
                                        rsvpUsers: Z,
                                        loading: j,
                                        containerHeight: H,
                                        error: w
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(l.ModalFooter, {
                        className: ye().footer,
                        children: (0, r.jsx)(Le, {
                            guildEvent: v,
                            isHub: I,
                            isMember: b,
                            guild: A,
                            channel: m,
                            onActionTaken: _
                        })
                    })]
                })
            }
        },
        26601: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                o = t(186440),
                l = t(951687),
                a = t(473708),
                u = t(757488),
                s = t.n(u);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
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

            function f(e) {
                var n = e.isActive,
                    t = e.isUserLurking,
                    u = e.rsvped,
                    f = e.onContextMenu,
                    E = e.onRsvpClick,
                    _ = e.onGoToGuildClick,
                    p = e.isDetailsView,
                    v = void 0 !== p && p,
                    T = e.isMember,
                    h = e.onJoinGuildClick,
                    O = e.guildName,
                    g = e.onInviteClick,
                    y = e.canInvite,
                    A = e.isChannelPublic;
                return (0, r.jsxs)("div", {
                    className: s().container,
                    children: [null != f ? (0, r.jsx)(i.Tooltip, {
                        text: a.Z.Messages.MORE,
                        position: "top",
                        "aria-label": a.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(i.Clickable, d(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        c(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                onClick: f,
                                className: s().iconButton,
                                children: (0, r.jsx)(o.Z, {
                                    width: 20,
                                    height: 20,
                                    className: s().icon
                                })
                            }))
                        }
                    }) : null, T && (0, r.jsx)(l.ku, {
                        onInviteClick: g,
                        canInvite: y,
                        isChannelPublic: A
                    }), t && !n && (0, r.jsx)(l.Lh, {
                        isUserRsvped: u,
                        isUserLurking: t
                    }), T && !t && !n && null != E && (0, r.jsx)(l.S0, {
                        isUserRsvped: u,
                        isUserLurking: t,
                        onRsvpClick: E
                    }), !T || t || v && !n ? null : (0, r.jsx)(i.Button, {
                        className: s().button,
                        innerClassName: s().innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: _,
                        color: i.Button.Colors.GREEN,
                        children: a.Z.Messages.HUB_EVENTS_GO_TO_GUILD
                    }), T ? null : (0, r.jsx)(i.Button, {
                        className: s().button,
                        innerClassName: s().innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: h,
                        color: i.Button.Colors.GREEN,
                        children: a.Z.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: O
                        })
                    })]
                })
            }
        },
        621634: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = t(667294),
                o = t(882723),
                l = t(599467),
                a = t(605013),
                u = t(81472),
                s = t(3155),
                c = t(436393),
                d = t.n(c);

            function f(e) {
                var n = e.guildScheduledEvent,
                    t = e.channel,
                    c = e.onClose,
                    f = n.entity_type === s.WX.EXTERNAL,
                    E = i.useCallback((function(e) {
                        return (0, a.Qt)(n, c)(e)
                    }), [n, c]),
                    _ = (0, u.u)(n, t);
                if (null == _) return null;
                var p = _.IconComponent,
                    v = _.locationName,
                    T = (0, r.jsxs)(r.Fragment, {
                        children: [null != p && (0, r.jsx)(p, {
                            width: 20,
                            height: 20,
                            className: d().channelIcon
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d().locationText,
                            children: (0, l.m)(v, !0)
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: d().row,
                    children: null != E ? (0, r.jsx)(o.Clickable, {
                        className: f ? d().externalLocation : d().channelLocation,
                        onClick: E,
                        children: T
                    }) : T
                })
            }
        },
        85941: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => P
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                l = t(971402),
                a = t(327499),
                u = t(276985),
                s = t(716371),
                c = t(787193),
                d = t(784426),
                f = t(915840),
                E = t(5544),
                _ = t(567403),
                p = t(682776),
                v = t(652591),
                T = t(691797),
                h = t(242735),
                O = t(919810),
                g = t(619584),
                y = t(371188),
                A = t(3155),
                b = t(2590),
                C = t(473708);

            function I(e, n, t, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function L(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            I(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            I(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        m(e, n, t[n])
                    }))
                }
                return e
            }

            function S(e, n) {
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
            var N = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
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
                        }([o, a])
                    }
                }
            };

            function P(e) {
                var n = e.guild,
                    I = e.channel,
                    m = e.guildScheduledEvent,
                    P = e.isActive,
                    D = e.rsvped,
                    Z = e.onActionTaken,
                    U = function(e) {
                        e.stopPropagation();
                        D ? h.Z.deleteRsvpForGuildEvent(j, x) : h.Z.createRsvpForGuildEvent(j, x)
                    },
                    G = function(e) {
                        e.stopPropagation();
                        var n = E.ZP.getDefaultChannel(x);
                        (0, o.closeAllModals)();
                        (0, d.XU)(x, null == n ? void 0 : n.id)
                    },
                    R = m.scheduled_start_time,
                    j = m.id,
                    w = m.entity_type,
                    x = m.guild_id,
                    k = (0, (0, c.XJ)(null != I ? I : n).canManageGuildEvent)(m),
                    H = (0, O.ZP)(m),
                    V = (0, g.T)(null == I ? void 0 : I.id, m.id),
                    B = (0, y.ub)(R).withinStartWindow,
                    z = (0, i.e7)([p.Z], (function() {
                        return !(null == I ? void 0 : I.isGuildVocal()) || p.Z.can(b.Plq.CONNECT, I)
                    }), [I]),
                    Y = (0, s.J)(x);

                function F() {
                    return (F = L((function(e) {
                        return N(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.stopPropagation();
                                    return [4, a.Z.joinGuild(x)];
                                case 1:
                                    n.sent();
                                    _.Z.addConditionalChangeListener((function() {
                                        if (null == _.Z.getGuild(x)) return !0;
                                        P || U(e);
                                        G(e);
                                        return !1
                                    }));
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return {
                    onDeleteClick: k ? function(e) {
                        e.stopPropagation();
                        k && !P && (0,
                            o.openModal)((function(e) {
                            return (0, r.jsx)(o.ConfirmModal, S(M({}, e), {
                                header: C.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                                confirmText: C.Z.Messages.DELETE,
                                cancelText: C.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return h.Z.deleteGuildEvent(j, x)
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: C.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                                })
                            }))
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation();
                        null != n && (0, l.jW)(e, L((function() {
                            var e, i;
                            return N(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(19887), t.e(71718), t.e(71575), t.e(91406), t.e(93869), t.e(54368), t.e(65278), t.e(56620), t.e(84155)]).then(t.bind(t, 171037))];
                                    case 1:
                                        e = o.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, M({
                                                guildEventId: j,
                                                channel: I,
                                                guild: n
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onJoinClick: z || Y ? function(e) {
                        e.stopPropagation();
                        if (Y) {
                            null == Z || Z();
                            (0, u.hk)(x)
                        } else if (null == I ? void 0 : I.isGuildStageVoice()) {
                            (0, f.Cq)(I);
                            null == Z || Z()
                        } else if (null == I ? void 0 : I.isGuildVoice()) {
                            h.Z.joinVoiceEvent(I.guild_id, I.id);
                            null == Z || Z()
                        }
                    } : void 0,
                    onRsvpClick: U,
                    onStartClick: k && B ? function(e) {
                        e.stopPropagation();
                        (0, o.openModalLazy)(L((function() {
                            var e, n;
                            return N(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(71575), t.e(74544), t.e(1459), t.e(78158)]).then(t.bind(t, 874544))];
                                    case 1:
                                        e = i.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, S(M({}, e), {
                                                event: m,
                                                onSuccess: Z
                                            }))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    onInviteClick: function(e) {
                        e.stopPropagation();
                        if (null != n)
                            if (H && V)(0, o.openModalLazy)(L((function() {
                                var e, i;
                                return N(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(75442), t.e(89005)]).then(t.bind(t, 167551))];
                                        case 1:
                                            e = o.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, S(M({}, e), {
                                                    guild: n,
                                                    channel: I,
                                                    guildScheduledEvent: m,
                                                    source: b.t4x.GUILD_EVENTS
                                                }))
                                            }]
                                    }
                                }))
                            })));
                            else {
                                var i = function(e) {
                                    var n = e.guildId,
                                        t = e.guildEventId;
                                    return "https://discord.com/events/".concat(n, "/").concat(t)
                                }({
                                    guildId: x,
                                    guildEventId: j
                                });
                                (0, T.JG)(i);
                                v.default.track(b.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: x,
                                    guild_scheduled_event_id: j
                                })
                            }
                    },
                    onEndClick: k && w === A.WX.EXTERNAL && P ? function(e) {
                        e.stopPropagation();
                        if (k) {
                            var n = function() {
                                h.Z.endEvent(j, x);
                                (0, o.closeAllModals)()
                            };
                            (0, o.openModal)((function(e) {
                                return (0, r.jsx)(o.ConfirmModal, S(M({}, e), {
                                    header: C.Z.Messages.END_EVENT,
                                    confirmText: C.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                    cancelText: C.Z.Messages.CANCEL,
                                    onConfirm: n,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: C.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                    })
                                }))
                            }))
                        }
                    } : void 0,
                    onJoinGuildClick: function(e) {
                        return F.apply(this, arguments)
                    },
                    onGoToGuildClick: G
                }
            }
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(202351),
                i = t(567403),
                o = t(2590);

            function l(e) {
                return (0, r.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, t = i.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(o.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => i
            });
            var r = t(2590);

            function i(e, n, t, i) {
                var o = null != t ? t : n;
                return null != o && e.can(r.Plq.CREATE_INSTANT_INVITE, o) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        787193: (e, n, t) => {
            "use strict";
            t.d(n, {
                XJ: () => T,
                Gw: () => h,
                Yl: () => O
            });
            var r = t(667294),
                i = t(940060),
                o = t(202351),
                l = t(897436),
                a = t(848285),
                u = (t(5544), t(682776)),
                s = t(473903),
                c = (t(563135), t(79522)),
                d = t(520453);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
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
            var _ = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: function() {
                        return !1
                    },
                    canManageGuildEvent: function() {
                        return !1
                    }
                },
                p = function(e, n, t, r) {
                    if (null == e) return !1;
                    if (t) return !0;
                    if ("creator_id" in e) return r && null != n && e.creator_id === n.id;
                    if ("userId" in e) return r && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var i;
                        return r && null != n && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === n.id
                    }
                    return !1
                },
                v = function(e) {
                    if (null == e) return [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS];
                    var n = c.TT;
                    e.isGuildStageVoice() ? n = c.LK : e.isGuildVoice() && (n = c.AN);
                    return [i.Z.combine(n, d.Pl.CREATE_EVENTS), i.Z.combine(n, d.Pl.MANAGE_EVENTS)]
                },
                T = function(e) {
                    var n = E(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : v(e), 2),
                        t = n[0],
                        i = n[1],
                        l = E((0, o.Wu)([u.Z], (function() {
                            return [u.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(t, e), u.Z.can(i, e)]
                        })), 4),
                        c = l[0],
                        f = l[1],
                        T = l[2],
                        h = l[3],
                        O = (0, o.e7)([s.default], (function() {
                            return s.default.getCurrentUser()
                        })),
                        g = r.useCallback((function(e) {
                            return p(e, O, f, c)
                        }), [c, f, O]),
                        y = r.useCallback((function(e) {
                            return p(e, O, h, T)
                        }), [h, T, O]);
                    return null == e ? _ : {
                        canCreateExpressions: c,
                        canCreateGuildEvent: T,
                        canManageAllExpressions: f,
                        canManageAllEvents: h,
                        canManageGuildExpression: g,
                        canManageGuildEvent: y
                    }
                },
                h = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        r = E(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : v(e), 2),
                        i = r[0],
                        o = r[1],
                        l = n.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        c = n.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        f = n.can(i, e),
                        T = n.can(o, e),
                        h = t.getCurrentUser();
                    return null == e ? _ : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: f,
                        canManageAllExpressions: c,
                        canManageAllEvents: T,
                        canManageGuildExpression: function(e) {
                            return p(e, h, c, l)
                        },
                        canManageGuildEvent: function(e) {
                            return p(e, h, T, f)
                        }
                    }
                },
                O = function(e) {
                    var n = (0, o.e7)([u.Z], (function() {
                            return u.Z.can(d.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, l.JY)(null == e ? void 0 : e.id).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(318715)),
                o = t(785085);

            function l(e) {
                var n = e.children,
                    t = e.confettiLocation;
                return (0, i.ZP)([o.Z], (function() {
                    return o.Z.isEnabled({
                        confettiLocation: t
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: n
                }) : null
            }
        },
        919031: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                i = t(318715),
                o = t(255875),
                l = t(785085);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u() {
                var e = r.useContext(o.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([l.Z], (function() {
                        return l.Z.getState()
                    })),
                    t = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    u = r.useMemo((function() {
                        return {
                            fire: function(r, i, o) {
                                var l, u, s = null != (null == o ? void 0 : o.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                a(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, o.settings) : n,
                                    c = t(s);
                                e(r, i, c, (null !== (l = null == o ? void 0 : o.count) && void 0 !== l ? l : s.confettiCount) * (null !== (u = null == o ? void 0 : o.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == o ? void 0 : o.sprite
                                })
                            }
                        }
                    }), [e, t, n]);
                return u
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                o = t.n(i),
                l = t(473708),
                a = t(347234),
                u = t.n(a),
                s = t(483683),
                c = t.n(s),
                d = t(63685),
                f = t.n(d);

            function E(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: o()(u().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: o()(u().sparkleIcon, u().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c(),
                        className: o()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        18882: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => ue
            });
            var r = t(496486),
                i = t.n(r),
                o = t(842227),
                l = t(202351),
                a = t(744564),
                u = t(656793),
                s = t(382060),
                c = t(61209),
                d = t(567403),
                f = t(179913),
                E = t(715107),
                _ = t(536945),
                p = t(487685),
                v = t(102921);

            function T(e) {
                if (null == e.threadMetadata) return 0;
                var n = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var n, t = null !== (n = f.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.id,
                        r = v.Z.extractTimestamp(t),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + n
            }
            var h = t(897196);

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }

            function b(e, n) {
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

            function C(e, n) {
                return !n || "object" !== L(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function I(e, n) {
                I = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return I(e, n)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var t, r = y(e);
                    if (n) {
                        var i = y(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return C(this, t)
                }
            }
            var M = {},
                S = {},
                N = {},
                P = {},
                D = {},
                Z = {},
                U = null,
                G = {};

            function R() {
                M = {};
                D = {};
                S = {};
                N = {};
                P = {};
                U = E.Z.getChannelId();
                for (var e in G) clearTimeout(G[e]);
                G = {};
                _.Z.forEachGuild((function(e) {
                    w(e)
                }));
                x()
            }

            function j(e) {
                delete M[e];
                delete D[e];
                delete S[e];
                delete N[e];
                delete P[e];
                w(e);
                for (var n in N[e]) H(e, n)
            }

            function w(e) {
                var n = _.Z.getThreadsForGuild(e);
                for (var t in n)
                    for (var r in n[t]) {
                        K(r);
                        var i = c.Z.getChannel(r);
                        if (null != i) {
                            var o = p.Z.joinTimestamp(r);
                            if (null != o) {
                                var l = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = W(i),
                                    u = a.isUnread,
                                    s = a.isRelevant,
                                    d = a.isTimedRelevant;
                                Q(M, i, l, !1);
                                Q(D, i, s ? l : null, !1);
                                Q(S, i, u ? l : null, !1);
                                d && q(i, !0)
                            } else {
                                Q(N, i, i, !1);
                                var E = f.ZP.isForumPostUnread(i.id);
                                Q(P, i, E ? i : null, !1)
                            }
                        }
                    }
            }

            function x() {
                Z = {};
                for (var e in N)
                    for (var n in N[e]) H(e, n)
            }

            function k(e) {
                var n = c.Z.getBasicChannel(e);
                null != n && s.uC.has(n.type) && H(n.guild_id, n.id)
            }

            function H(e, n) {
                var t = c.Z.getChannel(n);
                if (null != t && t.isForumLikeChannel()) {
                    null == Z[e] && (Z[e] = {});
                    Z[e][n] = 0;
                    if (null != N[e] && null != N[e][n]) {
                        var r = d.Z.getGuild(e);
                        if (null != r) {
                            var i = f.ZP.getTrackedAckMessageId(n);
                            if (null == i) {
                                var l = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? l = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (l = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(l)
                            }
                            for (var a in N[e][n]) n === U ? f.ZP.isNewForumThread(a, n, r) && Z[e][n]++ : o.default.compare(a, i) > 0 && !f.ZP.hasOpenedThread(a) && Z[e][n]++
                        }
                    }
                }
            }

            function V(e, n, t) {
                if (null == n) return !1;
                var r = c.Z.getChannel(t),
                    i = p.Z.joinTimestamp(t);
                if (null != r && _.Z.isActive(e, n, t)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            l = W(r),
                            a = l.isUnread,
                            u = l.isRelevant,
                            s = l.isTimedRelevant;
                        Q(M, r, o, !0);
                        Q(D, r, u ? o : null, !0);
                        Q(S, r, a ? o : null, !0);
                        Q(N, r, null, !0);
                        Q(P, r, null, !0);
                        q(r, s)
                    } else {
                        var d = f.ZP.isForumPostUnread(r.id);
                        Q(M, r, null, !0);
                        Q(S, r, null, !0);
                        Q(D, r, null, !0);
                        Q(N, r, r, !0);
                        Q(P, r, d ? r : null, !0);
                        K(r.id)
                    }
                    H(e, n)
                } else {
                    $(M, e, n, t);
                    $(D, e, n, t);
                    $(S, e, n, t);
                    $(N, e, n, t);
                    $(P, e, n, t);
                    K(t);
                    H(e, n)
                }
            }

            function B(e) {
                return V(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function z(e, n) {
                if (null == n) return !1;
                var t = M[e],
                    r = null == t ? null : t[n];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = N[e],
                    l = null == o ? null : o[n];
                if (null != l)
                    for (var a in l)
                        if (l[a].isNSFW()) return !0;
                return !1
            }

            function Y(e) {
                var n = c.Z.getChannel(e.id);
                return !(null == n || !_.Z.isActive(e.guildId, n.parent_id, e.id)) && V(n.guild_id, n.parent_id, n.id)
            }

            function F(e) {
                var n = c.Z.getChannel(e.channelId);
                if (null == n) X();
                else {
                    var t = n.guild_id,
                        r = n.parent_id;
                    if (!s.Ec.has(n.type)) {
                        var i;
                        if (Number(null === (i = Z[t]) || void 0 === i ? void 0 : i[n.id]) > 0) {
                            H(t, n.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(M, n)) {
                        var o = W(n),
                            l = o.isUnread,
                            a = o.isRelevant;
                        q(n, o.isTimedRelevant);
                        var u = ee(S, n),
                            d = ee(D, n);
                        if (l === u && a === d) return !1;
                        var E = M[t][r][n.id],
                            _ = a ? E : null;
                        Q(S, n, l ? E : null, !0);
                        Q(D, n, _, !0);
                        H(t, r)
                    } else {
                        var p = ee(P, n),
                            v = f.ZP.isForumPostUnread(n.id);
                        if (v === p) return !1;
                        Q(P, n, v ? n : null, !0)
                    }
                }
            }

            function X() {
                S = {};
                D = {};
                for (var e in M)
                    for (var n in M[e])
                        for (var t in M[e][n]) {
                            var r = M[e][n][t],
                                i = W(r.channel),
                                o = i.isUnread,
                                l = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && Q(S, r.channel, r, !1);
                            l && Q(D, r.channel, r, !1);
                            q(r.channel, a)
                        }
                P = {};
                for (var u in N)
                    for (var s in N[u])
                        for (var c in N[u][s]) {
                            var d = N[u][s][c];
                            f.ZP.isForumPostUnread(c) && Q(P, d, d, !1)
                        }
                x()
            }

            function J() {
                var e = U;
                if ((U = E.Z.getChannelId()) === e) return !1;
                k(e);
                k(U)
            }

            function W(e) {
                var n = f.ZP.getMentionCount(e.id) > 0,
                    t = f.ZP.hasRelevantUnread(e) && (!p.Z.isMuted(e.id) || n) || (0, u.c)() && n,
                    r = e.hasFlag(h.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && T(e) > Date.now();
                return {
                    isUnread: (i || r) && t,
                    isRelevant: o || r || t,
                    isTimedRelevant: o
                }
            }

            function q(e, n) {
                K(e.id);
                n && function(e) {
                    G[e.id] = setTimeout((function() {
                        var n = c.Z.getChannel(e.id);
                        null != n && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: n
                        })
                    }), T(e) - Date.now() + 1)
                }(e)
            }

            function K(e) {
                if (e in G) {
                    clearTimeout(G[e]);
                    delete G[e]
                }
            }

            function Q(e, n, t, r) {
                var o = n.guild_id,
                    l = n.parent_id,
                    a = n.id;
                if (null != o && null != l && null != a) {
                    o in e || (e[o] = {});
                    l in e[o] || (e[o][l] = {});
                    r && (e[o] = b(A({}, e[o]), g({}, l, A({}, e[o][l]))));
                    if (null === t) {
                        delete e[o][l][a];
                        i().isEmpty(e[o][l]) && delete e[o][l]
                    } else e[o][l][a] = t
                }
            }

            function $(e, n, t, r) {
                if (null != n && null != t && null != r && ne(e, n, t, r)) {
                    e[n] = b(A({}, e[n]), g({}, t, A({}, e[n][t])));
                    delete e[n][t][r];
                    i().isEmpty(e[n][t]) && delete e[n][t]
                }
            }

            function ee(e, n) {
                return ne(e, n.guild_id, n.parent_id, n.id)
            }

            function ne(e, n, t, r) {
                return n in e && t in e[n] && r in e[n][t]
            }
            var te = {},
                re = {},
                ie = {},
                oe = {},
                le = {},
                ae = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && I(e, n)
                    }(t, e);
                    var n = m(t);

                    function t() {
                        O(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(_.Z, c.Z, p.Z, f.ZP);
                        this.syncWith([E.Z], J)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, n) {
                        return e in S && n in S[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, n) {
                        var t;
                        return e in N && null !== (t = N[e][n]) && void 0 !== t ? t : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, n) {
                        var t;
                        return e in M && null !== (t = M[e][n]) && void 0 !== t ? t : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = M[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = S[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, n) {
                        var t;
                        return null !== (t = this.getActiveJoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = D[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, n) {
                        var t;
                        return null !== (t = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== t ? t : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = N[e]) && void 0 !== n ? n : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = P[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, n) {
                        var t;
                        return null !== (t = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var n;
                        return null !== (n = Z[e]) && void 0 !== n ? n : le
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var n = [];
                        for (var t in M)
                            if (t === e || null == e)
                                for (var r in M[t])
                                    for (var i in M[t][r]) n.push(M[t][r][i].channel);
                        return n
                    };
                    r.getNewThreadCount = function(e, n) {
                        var t, r;
                        return null !== (r = null === (t = Z[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, n) {
                        var t, r, o, l;
                        return i().size(null !== (o = null === (t = M[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== o ? o : {}) + i().size(null !== (l = null === (r = N[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== l ? l : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: M,
                            activeJoinedUnreadThreads: S,
                            activeUnjoinedThreads: N,
                            activeUnjoinedUnreadThreads: P,
                            activeJoinedRelevantThreads: D,
                            newThreadCounts: Z,
                            selectedChannelId: U,
                            timers: G,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: oe,
                            NO_NEW_THREADS: le
                        }
                    };
                    return t
                }(l.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const ue = new ae(a.Z, {
                CONNECTION_OPEN: R,
                OVERLAY_INITIALIZE: R,
                THREAD_LIST_SYNC: function(e) {
                    return j(e.guildId)
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                SEARCH_FINISH: R,
                GUILD_CREATE: function(e) {
                    return j(e.guild.id)
                },
                GUILD_DELETE: R,
                CURRENT_USER_UPDATE: R,
                THREAD_CREATE: B,
                THREAD_UPDATE: B,
                THREAD_DELETE: B,
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, l = n[Symbol.iterator](); !(t = (o = l.next()).done); t = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== z(a.guild_id, a.parent_id)) {
                                R();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            t || null == l.return || l.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel,
                        t = !1;
                    if (null != n.guild_id && null != n.parent_id) {
                        if (n.guild_id in M && n.parent_id in M[n.guild_id]) {
                            delete M[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in S && n.parent_id in S[n.guild_id]) {
                            delete S[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in D && n.parent_id in D[n.guild_id]) {
                            Object.keys(D[n.guild_id][n.parent_id]).forEach(K);
                            delete D[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in N && n.parent_id in N[n.guild_id]) {
                            delete N[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in P && n.parent_id in P[n.guild_id]) {
                            delete P[n.guild_id][n.parent_id];
                            t = !0
                        }
                        t && H(n.guild_id, n.parent_id)
                    }
                    return t
                },
                THREAD_MEMBER_UPDATE: Y,
                THREAD_MEMBERS_UPDATE: Y,
                LOAD_MESSAGES_SUCCESS: F,
                MESSAGE_CREATE: F,
                MESSAGE_DELETE: F,
                MESSAGE_DELETE_BULK: F,
                MESSAGE_ACK: F,
                CHANNEL_ACK: F,
                CHANNEL_LOCAL_ACK: F,
                CHANNEL_SELECT: function(e) {
                    F(e);
                    J()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && X()
                },
                WINDOW_FOCUS: X,
                UPDATE_CHANNEL_DIMENSIONS: X,
                DRAWER_OPEN: X,
                DRAWER_CLOSE: X,
                BULK_ACK: X
            })
        },
        225386: (e, n, t) => {
            "use strict";
            t.d(n, {
                tM: () => v,
                NE: () => T,
                ki: () => h,
                Xu: () => O,
                cD: () => g,
                Ek: () => A,
                JQ: () => b,
                C7: () => C,
                tc: () => m,
                kn: () => M,
                $R: () => S,
                RG: () => N,
                xl: () => P,
                Xb: () => Z,
                Y: () => G,
                Gu: () => R
            });
            var r = t(496486),
                i = t.n(r),
                o = t(940060),
                l = t(202351),
                a = t(249139),
                u = t(774930),
                s = t(791707),
                c = t(382060),
                d = t(664625),
                f = t(61209),
                E = t(682776),
                _ = t(18882),
                p = t(2590),
                v = (0, a.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function T(e, n) {
                return y((0, l.e7)([E.Z], (function() {
                    var n = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : o.Z.combine(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                    return E.Z.can(n, e)
                }), [e]), e, n)
            }

            function h(e, n) {
                var t = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : o.Z.combine(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                return y(E.Z.can(t, e), e, n)
            }

            function O(e) {
                var n = (0, l.e7)([E.Z], (function() {
                    return E.Z.can(o.Z.combine(p.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === p.d4z.GUILD_TEXT && y(n, e)
            }

            function g(e) {
                var n = T(e),
                    t = O(e);
                return n || t
            }

            function y(e, n, t) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!c.uC.has(n.type)) return !1;
                if (null != t) {
                    if (t.hasFlag(p.iLy.HAS_THREAD)) return !1;
                    if ((0, s.Z)(t)) return !1
                }
                return !0
            }

            function A(e) {
                var n = (0, l.e7)([f.Z], (function() {
                    return f.Z.getChannel(e.id)
                }), [e]);
                return function(e, n, t) {
                    return !!n.hasFlag(p.iLy.HAS_THREAD) && (null != t && !!e)
                }((0, l.e7)([E.Z], (function() {
                    return E.Z.can(p.Plq.VIEW_CHANNEL, n)
                }), [n]), e, n)
            }

            function b(e) {
                return (0, l.cj)([_.Z, E.Z], (function() {
                    var n = _.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        t = _.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = _.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(t).some((function(e) {
                            return E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        l = i()(n).some((function(e) {
                            return !(e.channel.id in t) && E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(r).some((function(e) {
                            return E.Z.can(p.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || l || a,
                        hasMoreActiveThreads: a || l
                    }
                }))
            }

            function C(e) {
                var n = (0, l.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    t = (0,
                        l.e7)([E.Z], (function() {
                        return null != n && E.Z.can(p.Plq.MANAGE_THREADS, n)
                    }), [n]),
                    r = (0, l.e7)([d.default], (function() {
                        return d.default.getId()
                    }));
                return null != e && null != n && (!!e.isThread() && (!!t || !e.isLockedThread() && e.ownerId === r))
            }

            function I(e, n) {
                return null != e && n.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function L(e, n, t) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? t : n)
            }

            function m(e) {
                var n = (0, l.e7)([E.Z], (function() {
                        return I(e, E.Z)
                    })),
                    t = Z(e);
                return L(e, n, t)
            }

            function M(e) {
                return L(e, I(e, E.Z), U(e))
            }

            function S(e) {
                var n, t = (0, l.e7)([E.Z], (function() {
                    return null != e && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && t)
            }

            function N(e) {
                var n;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function P(e) {
                var n = E.Z.can(p.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !n
            }

            function D(e, n) {
                return null != e && n.can(p.Plq.MANAGE_THREADS, e)
            }

            function Z(e) {
                return (0, l.e7)([E.Z], (function() {
                    return D(e, E.Z)
                }))
            }

            function U(e) {
                return D(e, E.Z)
            }

            function G(e) {
                var n = (0, u.Z)(),
                    t = (0, l.e7)([E.Z], (function() {
                        return E.Z.can(p.Plq.CONNECT, e)
                    })),
                    r = S(e),
                    i = v.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !n && e.isVocalThread() && i && t && r
            }

            function R(e) {
                var n = Z(e);
                return e.isLockedThread() && !n
            }
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                i = (t(667294), t(633878));

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function a(e, n) {
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

            function u(e) {
                var n = e.width,
                    t = void 0 === n ? 20 : n,
                    u = e.height,
                    s = void 0 === u ? 20 : u,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = e.foreground,
                    E = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: f,
                            fill: d,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }
        },
        186440: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                i = (t(667294), t(633878));

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function a(e, n) {
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

            function u(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = e.foreground,
                    E = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: d,
                        className: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                    })
                }))
            }
        },
        360686: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                i = (t(667294), t(633878));

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function a(e, n) {
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

            function u(e) {
                var n = e.width,
                    t = void 0 === n ? 32 : n,
                    u = e.height,
                    s = void 0 === u ? 32 : u,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = a(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(f)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                        fill: d
                    })
                }))
            }
        },
        691797: (e, n, t) => {
            "use strict";
            t.d(n, {
                wS: () => l,
                JG: () => a
            });
            var r = t(482507),
                i = t(120415),
                o = t(310126),
                l = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!l) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        474236: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(667294),
                i = t(347365);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n, t, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function a(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
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
                        }([o, a])
                    }
                }
            };

            function s(e, n) {
                var t, o, s = a(r.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = a(r.useState(null), 2),
                    E = f[0],
                    _ = f[1],
                    p = (o = (t = function() {
                        var t, r, o;
                        return u(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    d(!0);
                                    _(null);
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = l.sent();
                                    d(!1);
                                    _(null);
                                    return [2, t];
                                case 3:
                                    r = l.sent();
                                    o = new i.Hx(r);
                                    null == n || n(o);
                                    _(o);
                                    d(!1);
                                    return [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = t.apply(e, n);

                            function a(e) {
                                l(o, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                l(o, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return o.apply(this, arguments)
                    });
                return [p, {
                    loading: c,
                    error: E
                }]
            }
        }
    }
]);