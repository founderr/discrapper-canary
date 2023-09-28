(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99271], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        826945: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(496486),
                i = n.n(r),
                a = n(202351),
                _ = n(744564),
                s = n(269300),
                u = n(848285),
                E = n(612831);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function c(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
                var t = function() {
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
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = !1,
                M = {},
                A = {},
                O = {},
                D = function(e) {
                    O[e.guild_scheduled_event.id] = new u.Z(e.guild_scheduled_event.guild);
                    A[e.guild_scheduled_event.id] = e.guild_scheduled_event;
                    return {
                        channelId: e.directory_channel_id,
                        scheduledEventId: e.entity_id,
                        type: E.C2.GUILD_SCHEDULED_EVENT,
                        authorId: e.author_id,
                        createdAt: e.created_at
                    }
                };
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFetching = function() {
                    return p
                };
                r.getEventDirectoryEntries = function(e) {
                    if (null != e) return M[e]
                };
                r.getCachedGuildByEventId = function(e) {
                    var t;
                    return null !== (t = O[e]) && void 0 !== t ? t : void 0
                };
                r.getCachedGuildScheduledEventById = function(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : void 0
                };
                return n
            }(a.ZP.Store);
            U.displayName = "EventDirectoryStore";
            const C = new U(_.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    p = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.entries;
                    p = !1;
                    var r = i().sortBy(I(n), [function(e) {
                            return (0, s.CQ)(e.guild_scheduled_event)
                        }]),
                        a = i().map(r, D);
                    M[t] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    p = !1
                }
            })
        },
        612831: (e, t, n) => {
            "use strict";
            n.d(t, {
                C2: () => r,
                VX: () => i,
                sE: () => a,
                AR: () => _,
                C1: () => o,
                b7: () => c,
                Pp: () => T
            });
            var r, i, a, _, s = n(940060),
                u = n(563135),
                E = n(2590),
                l = n(473708);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
            }(a || (a = {}));
            ! function(e) {
                e[e.ALL = -1] = "ALL";
                e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED";
                e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB";
                e[e.CLASS = 2] = "CLASS";
                e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL";
                e[e.MISC = 5] = "MISC"
            }(_ || (_ = {}));
            var o = "1113200031168729140";

            function c(e) {
                return "883060064561299456" === e ? [{
                    value: _.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: _.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: _.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: _.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : e === o ? [{
                    value: _.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_1
                }, {
                    value: _.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_2
                }, {
                    value: _.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_3
                }, {
                    value: _.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_5
                }] : [{
                    value: _.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: _.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: _.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: _.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function T() {
                var e;
                return d(e = {}, a.CREATE, {
                    id: a.CREATE,
                    code: "2TffvPucqHkN",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                    channels: [],
                    system_channel_id: null
                }), d(e, a.HUB_SCHOOL_CLUB, {
                    id: a.HUB_SCHOOL_CLUB,
                    code: "UMUbvRpRZhS6",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                        type: E.d4z.GUILD_VOICE
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
                        permissions: s.Z.combine(u.ZP.DEFAULT, E.Plq.MANAGE_ROLES, E.Plq.MANAGE_CHANNELS, E.Plq.KICK_MEMBERS, E.Plq.BAN_MEMBERS, E.Plq.MANAGE_NICKNAMES, E.Plq.MANAGE_GUILD_EXPRESSIONS, E.Plq.MANAGE_MESSAGES, E.Plq.SEND_TTS_MESSAGES),
                        color: 3066993
                    }],
                    system_channel_id: "12"
                }), d(e, a.HUB_STUDY, {
                    id: a.HUB_STUDY,
                    code: "2JBhzzca2vfT",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: E.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, a.HUB_CLASS, {
                    id: a.HUB_CLASS,
                    code: "r86WWBwTGspb",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: E.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, a.HUB_SOCIAL, {
                    id: a.HUB_SOCIAL,
                    code: "AvvtXE3mfbCR",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "04",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                        type: E.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "02"
                }), d(e, a.HUB_MAJOR, {
                    id: a.HUB_MAJOR,
                    code: "FhmfDR6Arvsc",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: E.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), d(e, a.HUB_DORM, {
                    id: a.HUB_DORM,
                    code: "fkq8xHfrGE58",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: E.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: E.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: E.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: E.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), e
            }
        },
        242735: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(281110),
                i = n(744564),
                a = n(116404),
                _ = n(784426),
                s = n(664625),
                u = n(534681),
                E = n(269300),
                l = n(3155),
                d = n(2590);

            function o(e, t, n, r, i, a, _) {
                try {
                    var s = e[a](_),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function _(e) {
                            o(a, r, i, _, s, "next", e)
                        }

                        function s(e) {
                            o(a, r, i, _, s, "throw", e)
                        }
                        _(void 0)
                    }))
                }
            }
            var T = function(e, t) {
                var n, r, i, a, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; _;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        _.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        _.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = _.ops.pop();
                                        _.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = _.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            _ = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            _.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && _.label < i[1]) {
                                            _.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && _.label < i[2]) {
                                            _.label = i[2];
                                            _.ops.push(a);
                                            break
                                        }
                                        i[2] && _.ops.pop();
                                        _.trys.pop();
                                        continue
                                }
                                a = t.call(e, _)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
            const I = {
                startEvent: function(e, t) {
                    return r.ZP.patch({
                        url: d.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.ACTIVE
                        }
                    })
                },
                endEvent: function(e, t) {
                    return r.ZP.patch({
                        url: d.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.COMPLETED
                        }
                    })
                },
                joinVoiceEvent: function(e, t) {
                    a.default.selectVoiceChannel(t);
                    (0, _.uL)(d.Z5c.CHANNEL(e, t))
                },
                saveEvent: function(e, t, n, i) {
                    var a = l.pg.has(t.entityType) ? t.channelId : null,
                        _ = l._U.has(t.entityType) ? t.entityMetadata : null,
                        s = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image;
                    return r.ZP.patch({
                        url: d.ANM.GUILD_EVENT(n, e),
                        body: {
                            name: t.name,
                            description: t.description,
                            image: s,
                            privacy_level: t.privacyLevel,
                            scheduled_start_time: t.scheduledStartTime,
                            scheduled_end_time: t.scheduledEndTime,
                            entity_type: t.entityType,
                            channel_id: a,
                            entity_metadata: _,
                            broadcast_to_directory_channels: i.broadcastToDirectoryChannels,
                            auto_start: t.autoStart
                        }
                    })
                },
                createGuildEvent: function(e, t, n) {
                    return r.ZP.post({
                        url: d.ANM.GUILD_EVENTS_FOR_GUILD(t),
                        body: {
                            name: e.name,
                            description: e.description,
                            image: e.image,
                            privacy_level: e.privacyLevel,
                            scheduled_start_time: e.scheduledStartTime,
                            scheduled_end_time: e.scheduledEndTime,
                            entity_type: e.entityType,
                            channel_id: e.channelId,
                            entity_metadata: e.entityMetadata,
                            broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
                            auto_start: e.autoStart
                        }
                    })
                },
                fetchGuildEventsForGuild: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return c((function() {
                        var n, r;
                        return T(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    n = {
                                        url: d.ANM.GUILD_EVENTS_FOR_GUILD(e),
                                        query: {
                                            with_user_count: t
                                        }
                                    };
                                    return [4, (0, u.Kb)(n)];
                                case 1:
                                    r = a.sent().body;
                                    i.Z.dispatch({
                                        type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                                        guildId: e,
                                        guildScheduledEvents: r
                                    });
                                    return [2, r]
                            }
                        }))
                    }))()
                },
                cancelGuildEvent: function(e, t) {
                    return r.ZP.patch({
                        url: d.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.CANCELED
                        }
                    })
                },
                deleteGuildEvent: function(e, t) {
                    return r.ZP.delete({
                        url: d.ANM.GUILD_EVENT(t, e)
                    })
                },
                getGuildEventsForCurrentUser: function(e) {
                    return c((function() {
                        var t;
                        return T(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, r.ZP.get({
                                        url: d.ANM.USER_GUILD_EVENTS,
                                        query: {
                                            guild_ids: [e]
                                        }
                                    })];
                                case 1:
                                    t = n.sent().body;
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                                        guildScheduledEventUsers: t,
                                        guildId: e
                                    });
                                    return [2]
                            }
                        }))
                    }))()
                },
                createRsvpForGuildEvent: function(e, t) {
                    return c((function() {
                        var n, a, _;
                        return T(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    n = E.ZP.hasRsvp(e, t);
                                    a = s.default.getId();
                                    if (n) return [2];
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.put({
                                        url: d.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, u.sent()];
                                case 3:
                                    _ = u.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    throw _;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                deleteRsvpForGuildEvent: function(e, t) {
                    return c((function() {
                        var n, a, _;
                        return T(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    n = E.ZP.hasRsvp(e, t);
                                    a = s.default.getId();
                                    if (!n) return [2];
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.delete({
                                        url: d.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, u.sent()];
                                case 3:
                                    _ = u.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    throw _;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchUsersForGuildEvent: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.rC;
                    return c((function() {
                        var a;
                        return T(this, (function(_) {
                            switch (_.label) {
                                case 0:
                                    return null == e || null == t ? [2, []] : [4, r.ZP.get({
                                        url: d.ANM.GUILD_EVENT_USERS(t, e),
                                        query: {
                                            limit: n,
                                            with_member: !0
                                        }
                                    })];
                                case 1:
                                    a = _.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                                        guildEventId: e,
                                        rsvpUsers: a.body.users,
                                        guildId: t
                                    });
                                    return [2, a.body.users]
                            }
                        }))
                    }))()
                }
            }
        },
        945660: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => V,
                qY: () => H,
                gM: () => Y,
                eF: () => j,
                k5: () => z,
                u1: () => B,
                Vm: () => w,
                sz: () => F
            });
            var r = n(667294),
                i = n(202351),
                a = n(826945),
                _ = n(61209),
                s = n(5544),
                u = n(567403),
                E = n(682776),
                l = n(72580),
                d = n(269300),
                o = n(730381),
                c = n.n(o),
                T = n(842227),
                I = n(3155);

            function L(e, t, n) {
                var r = c()(),
                    i = new Date(e.scheduled_start_time).getTime(),
                    a = {
                        start: i - I.VF,
                        end: i
                    };
                if (r.isBetween(a.start, a.end)) {
                    if (null != t) {
                        var _ = c()(t),
                            s = _.isBetween(a.start, a.end),
                            u = _.isBetween(c()(i).subtract(I.zV, "days"), i);
                        return s || u && !n ? void 0 : I.X_.EVENT_STARTING_SOON
                    }
                    return I.X_.EVENT_STARTING_SOON
                }
                var E = T.default.extractTimestamp(e.id),
                    l = Math.min(E + I.Fc, i);
                if (r.isBetween(E, l) && null == t && !n) return I.X_.NEW_EVENT
            }
            var f = n(744564),
                p = n(664625);

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        A(e, t, n[t])
                    }))
                }
                return e
            }

            function U(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function C(e, t) {
                C = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return C(e, t)
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var t = function() {
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return U(this, n)
                }
            }
            var N = {};
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && C(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    M(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (N = e)
                };
                r.getGuildEventNoticeDismissalTime = function(e) {
                    return N[e]
                };
                r.getAllEventDismissals = function() {
                    return N
                };
                r.getState = function() {
                    return N
                };
                return n
            }(i.ZP.PersistedStore);
            v.displayName = "UpcomingEventNoticesDismissalsStore";
            v.persistKey = "upcomingEventNotices";
            const h = new v(f.Z, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    var t = e.eventId,
                        n = D({}, N);
                    n[t] = Date.now();
                    N = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t = e.guildScheduledEvent;
                    if (t.status === I.p1.CANCELED || t.status === I.p1.COMPLETED) {
                        var n = D({}, N);
                        delete n[t.id];
                        N = n
                    }
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = D({}, N);
                    delete n[t.id];
                    N = n
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t = e.userId,
                        n = e.guildEventId;
                    if (t === p.default.getId()) {
                        var r = d.ZP.getGuildScheduledEvent(n);
                        if (null != r && r.status === I.p1.SCHEDULED) {
                            if (null == N[n]) {
                                if (L(r, void 0, !1) === I.X_.NEW_EVENT) {
                                    var i = D({}, N);
                                    i[n] = Date.now();
                                    N = i
                                }
                            }
                        }
                    }
                }
            });
            var S = n(371188),
                g = n(2590);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            _ = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(_ = (r = n.next()).done); _ = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                _ || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = [];

            function V(e, t) {
                return (0, i.Wu)([u.Z, a.Z, d.ZP, E.Z, _.Z, s.ZP], (function() {
                    var n = u.Z.getGuild(e);
                    if (null == n) return Z;
                    if (n.hasFeature(g.oNc.HUB)) {
                        var r, i, o = null === (r = s.ZP.getDefaultChannel(n.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (i = a.Z.getEventDirectoryEntries(o)) && void 0 !== i ? i : []).map((function(e) {
                            var t = e.scheduledEventId,
                                n = d.ZP.getGuildScheduledEvent(t);
                            return null != n ? n : a.Z.getCachedGuildScheduledEventById(t)
                        })).filter(l.lm)
                    }
                    return d.ZP.getGuildScheduledEventsByIndex(null != t ? t : d.bN.GUILD_EVENT_UPCOMING(n.id)).filter((function(e) {
                        var t = e.channel_id;
                        if (null == t) return !0;
                        var n = _.Z.getChannel(t);
                        return E.Z.can(g.Plq.VIEW_CHANNEL, n)
                    }))
                }), [t, e])
            }

            function H(e) {
                return (0, i.e7)([d.ZP, _.Z, E.Z], (function() {
                    var t = _.Z.getChannel(e);
                    if (!E.Z.can(g.Plq.VIEW_CHANNEL, t)) return null;
                    if (null == (null == t ? void 0 : t.guild_id)) return null;
                    var n = d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_ACTIVE(e));
                    return n.length > 0 ? n[0] : null
                }), [e])
            }

            function Y(e) {
                var t = (0, i.Wu)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEventsForGuild(e)
                }), [e]);
                return r.useMemo((function() {
                    var e = new Map;
                    t.forEach((function(t) {
                        var n = t.channel_id;
                        null != n && e.set(n, t)
                    }));
                    return e
                }), [t])
            }

            function w(e) {
                var t = function(e) {
                        return (0, i.Wu)([d.ZP, _.Z, E.Z], (function() {
                            return d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_UPCOMING(e)).filter((function(e) {
                                if (e.entity_type === I.WX.NONE || e.status !== I.p1.SCHEDULED) return !1;
                                if (null == e.channel_id) return !0;
                                var t = _.Z.getChannel(e.channel_id);
                                return E.Z.can(g.Plq.VIEW_CHANNEL, t)
                            }))
                        }), [e])
                    }(e),
                    n = (0, i.cj)([h], (function() {
                        return h.getAllEventDismissals()
                    })),
                    r = (0, i.cj)([d.ZP], (function() {
                        return null == t ? {} : t.reduce((function(e, t) {
                            return P(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        R(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), R({}, t.id, d.ZP.hasRsvp(t.id, t.guild_id)))
                        }), {})
                    }), [t]);
                if (null != t && null != r)
                    for (var a = 0; a < t.length; a++) {
                        var s, u = t[a],
                            l = L(u, n[u.id], null !== (s = r[u.id]) && void 0 !== s && s);
                        if (null != l) return {
                            upcomingEvent: u,
                            noticeType: l
                        }
                    }
            }

            function z(e) {
                return (0, i.e7)([d.ZP, _.Z, E.Z], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === I.WX.NONE || !(0, d.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var t = _.Z.getChannel(e.channel_id);
                        return E.Z.can(g.Plq.VIEW_CHANNEL, t)
                    }))
                }), [e])
            }

            function B(e) {
                return (0, i.e7)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function j(e) {
                return (0, i.e7)([_.Z, d.ZP], (function() {
                    var t = d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != _.Z.getChannel(e.channel_id)
                    }));
                    return _.Z.getChannel(null == t ? void 0 : t.channel_id)
                }), [e])
            }

            function F(e) {
                var t = b(r.useState((function() {
                        return Date.now()
                    })), 2),
                    n = t[0],
                    a = t[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        a(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var _ = (0, i.e7)([d.ZP], (function() {
                        return null == e ? [] : d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, n]),
                    s = r.useMemo((function() {
                        return _.filter((function(e) {
                            var t = (0, S.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                n = t.withinStartWindow,
                                r = t.diffMinutes;
                            return e.status !== I.p1.ACTIVE && n && r < 15
                        }))
                    }), [_]);
                return s
            }
        },
        371188: (e, t, n) => {
            "use strict";
            n.d(t, {
                G3: () => a,
                Ib: () => _,
                ib: () => s,
                ub: () => l,
                v1: () => o,
                me: () => c
            });
            var r = n(730381),
                i = n.n(r),
                a = (n(3155), 365),
                _ = a + 1,
                s = function() {
                    var e = i()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var u = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                E = function(e, t) {
                    return e.diff(t, "days") > 1 ? u(e, t) : e.calendar(t)
                };

            function l(e, t, n) {
                null == n && (n = i()());
                var r = i()(e),
                    a = null != t && "" !== t ? i()(t) : void 0,
                    _ = null != t && r.isSame(a, "day");
                return {
                    startDateTimeString: E(r, n),
                    endDateTimeString: null != a ? _ ? a.format("LT") : u(a, n) : void 0,
                    currentOrPastEvent: r <= n,
                    upcomingEvent: r <= i()().add(1, "hour"),
                    withinStartWindow: r <= i()().add(15, "minute"),
                    diffMinutes: r.diff(n, "minutes")
                }
            }

            function d(e, t) {
                var n;
                if (null != e) {
                    n = {
                        startDate: i()(e),
                        endDate: void 0
                    };
                    null != t && (n.endDate = i()(t))
                }
                return n
            }

            function o(e) {
                return d(e.scheduledStartTime, e.scheduledEndTime)
            }

            function c(e) {
                return d(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        99271: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => T
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                a = n(116404),
                _ = n(832642),
                s = n(443812),
                u = n(890251),
                E = n(242735),
                l = n(945660),
                d = n(473708),
                o = n(347542),
                c = n.n(o);

            function T(e) {
                var t = e.channel,
                    n = e.transitionState,
                    o = e.onClose,
                    T = (0, s.Dt)(),
                    I = (0, l.qY)(t.id);
                if (null == I) return null;
                var L = function() {
                    a.default.selectVoiceChannel(null);
                    o()
                };
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": T,
                    size: i.ModalSize.SMALL,
                    children: [(0, r.jsxs)(i.ModalContent, {
                        className: c().content,
                        children: [(0, r.jsx)(_.Z, {
                            children: (0, r.jsx)("div", {
                                className: c().iconBackground,
                                children: (0, r.jsx)(u.Z, {
                                    height: 40,
                                    width: 40,
                                    className: c().icon
                                })
                            })
                        }), (0, r.jsx)(i.Heading, {
                            id: T,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: c().title,
                            children: d.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: c().subtitle,
                            children: d.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            color: i.Button.Colors.RED,
                            onClick: function() {
                                E.Z.endEvent(I.id, I.guild_id);
                                L()
                            },
                            children: d.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, r.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: c().cancelButton,
                            onClick: L,
                            children: d.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                _ = n(473708),
                s = n(300443),
                u = n.n(s),
                E = n(483683),
                l = n.n(E),
                d = n(63685),
                o = n.n(d);

            function c(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: a()(u().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: _.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o(),
                        className: a()(u().sparkleIcon, u().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: _.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: l(),
                        className: a()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => _,
                Dt: () => s,
                FG: () => u
            });
            var r = n(873955),
                i = n.n(r),
                a = n(989824),
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                s = function() {
                    return (0, a.Z)((function() {
                        return _()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(s())
                }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294),
                i = {};

            function a(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        }
    }
]);