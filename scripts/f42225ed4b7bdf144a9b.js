(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [11444], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        937119: (e, n, t) => {
            "use strict";
            t.d(n, {
                c: () => c
            });
            var r = t(23279),
                i = t.n(r),
                a = t(281110),
                _ = t(744564),
                E = t(612831),
                s = t(2590);

            function u(e, n, t, r, i, a, _) {
                try {
                    var E = e[a](_),
                        s = E.value
                } catch (e) {
                    t(e);
                    return
                }
                E.done ? n(s) : Promise.resolve(s).then(r, i)
            }
            var l, o, d = function(e, n) {
                    var t, r, i, a, _ = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: E(0),
                        throw: E(1),
                        return: E(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function E(a) {
                        return function(E) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; _;) try {
                                    if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
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
                                    a = n.call(e, _)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, E])
                        }
                    }
                },
                c = i()((o = (l = function(e) {
                        var n;
                        return d(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    _.Z.dispatch({
                                        type: "EVENT_DIRECTORY_FETCH_START"
                                    });
                                    return [4, a.ZP.get({
                                        url: s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                        query: {
                                            type: E.C2.GUILD_SCHEDULED_EVENT
                                        }
                                    })];
                                case 1:
                                    n = t.sent();
                                    _.Z.dispatch({
                                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                        channelId: e,
                                        entries: n.body
                                    });
                                    return [3, 3];
                                case 2:
                                    t.sent();
                                    _.Z.dispatch({
                                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    },
                    function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var i = l.apply(e, n);

                            function a(e) {
                                u(i, t, r, a, _, "next", e)
                            }

                            function _(e) {
                                u(i, t, r, a, _, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function(e) {
                    return o.apply(this, arguments)
                }), 200)
        },
        826945: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => D
            });
            var r = t(496486),
                i = t.n(r),
                a = t(202351),
                _ = t(744564),
                E = t(269300),
                s = t(848285),
                u = t(612831);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function o(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function c(e, n) {
                return !n || "object" !== L(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function T(e, n) {
                T = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return T(e, n)
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e) {
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
                    var t, r = d(e);
                    if (n) {
                        var i = d(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }
            var O = !1,
                A = {},
                p = {},
                M = {},
                C = function(e) {
                    M[e.guild_scheduled_event.id] = new s.Z(e.guild_scheduled_event.guild);
                    p[e.guild_scheduled_event.id] = e.guild_scheduled_event;
                    return {
                        channelId: e.directory_channel_id,
                        scheduledEventId: e.entity_id,
                        type: u.C2.GUILD_SCHEDULED_EVENT,
                        authorId: e.author_id,
                        createdAt: e.created_at
                    }
                };
            var U = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && T(e, n)
                }(t, e);
                var n = f(t);

                function t() {
                    o(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.isFetching = function() {
                    return O
                };
                r.getEventDirectoryEntries = function(e) {
                    if (null != e) return A[e]
                };
                r.getCachedGuildByEventId = function(e) {
                    var n;
                    return null !== (n = M[e]) && void 0 !== n ? n : void 0
                };
                r.getCachedGuildScheduledEventById = function(e) {
                    var n;
                    return null !== (n = p[e]) && void 0 !== n ? n : void 0
                };
                return t
            }(a.ZP.Store);
            U.displayName = "EventDirectoryStore";
            const D = new U(_.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    O = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.entries;
                    O = !1;
                    var r = i().sortBy(I(t), [function(e) {
                            return (0, E.CQ)(e.guild_scheduled_event)
                        }]),
                        a = i().map(r, C);
                    A[n] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    O = !1
                }
            })
        },
        612831: (e, n, t) => {
            "use strict";
            t.d(n, {
                C2: () => r,
                VX: () => i,
                sE: () => a,
                AR: () => _,
                C1: () => d,
                b7: () => c,
                Pp: () => T
            });
            var r, i, a, _, E = t(940060),
                s = t(563135),
                u = t(2590),
                l = t(473708);

            function o(e, n, t) {
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
            }(a || (a = {}));
            ! function(e) {
                e[e.ALL = -1] = "ALL";
                e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED";
                e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB";
                e[e.CLASS = 2] = "CLASS";
                e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL";
                e[e.MISC = 5] = "MISC"
            }(_ || (_ = {}));
            var d = "1113200031168729140";

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
                }] : e === d ? [{
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
                return o(e = {}, a.CREATE, {
                    id: a.CREATE,
                    code: "2TffvPucqHkN",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                    channels: [],
                    system_channel_id: null
                }), o(e, a.HUB_SCHOOL_CLUB, {
                    id: a.HUB_SCHOOL_CLUB,
                    code: "UMUbvRpRZhS6",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                        type: u.d4z.GUILD_VOICE
                    }],
                    roles: [{
                        id: "00",
                        name: "@everyone",
                        permissions: s.ZP.DEFAULT
                    }, {
                        id: "01",
                        name: "officers (example)",
                        mentionable: !0,
                        hoist: !0,
                        permissions: E.Z.combine(s.ZP.DEFAULT, u.Plq.MANAGE_ROLES, u.Plq.MANAGE_CHANNELS, u.Plq.KICK_MEMBERS, u.Plq.BAN_MEMBERS, u.Plq.MANAGE_NICKNAMES, u.Plq.MANAGE_GUILD_EXPRESSIONS, u.Plq.MANAGE_MESSAGES, u.Plq.SEND_TTS_MESSAGES),
                        color: 3066993
                    }],
                    system_channel_id: "12"
                }), o(e, a.HUB_STUDY, {
                    id: a.HUB_STUDY,
                    code: "2JBhzzca2vfT",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: u.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), o(e, a.HUB_CLASS, {
                    id: a.HUB_CLASS,
                    code: "r86WWBwTGspb",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: u.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), o(e, a.HUB_SOCIAL, {
                    id: a.HUB_SOCIAL,
                    code: "AvvtXE3mfbCR",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "03",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "04",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                        type: u.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "02"
                }), o(e, a.HUB_MAJOR, {
                    id: a.HUB_MAJOR,
                    code: "FhmfDR6Arvsc",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "02",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 1
                        }),
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                            number: 2
                        }),
                        type: u.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), o(e, a.HUB_DORM, {
                    id: a.HUB_DORM,
                    code: "fkq8xHfrGE58",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
                    channels: [{
                        id: "00",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "01",
                        parent_id: "00",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "10",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "11",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "12",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "13",
                        parent_id: "10",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                        type: u.d4z.GUILD_TEXT
                    }, {
                        id: "20",
                        parent_id: null,
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                        type: u.d4z.GUILD_CATEGORY
                    }, {
                        id: "21",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "22",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                        type: u.d4z.GUILD_VOICE
                    }, {
                        id: "23",
                        parent_id: "20",
                        name: l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                        type: u.d4z.GUILD_VOICE
                    }],
                    system_channel_id: "12"
                }), e
            }
        },
        678545: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(667294),
                i = t(202351),
                a = t(787193),
                _ = t(5544),
                E = t(567403),
                s = t(682776),
                u = t(2590);
            const l = function(e, n) {
                var t = (0, i.e7)([E.Z], (function() {
                        return E.Z.getGuild(e)
                    }), [e]),
                    l = (0, a.XJ)(t).canCreateGuildEvent,
                    o = (0, i.e7)([_.ZP], (function() {
                        return _.ZP.getChannels(e)[_.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != n ? o.filter((function(e) {
                            return e.channel.type === n
                        })) : o
                    }), [o, n]);
                return (0, i.e7)([s.Z], (function() {
                    if (s.Z.can(u.Plq.ADMINISTRATOR, t)) return !0;
                    if (l) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, _ = d[Symbol.iterator](); !(e = (i = _.next()).done); e = !0) {
                            var E = i.value.channel;
                            if ((0, a.Gw)(E).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == _.return || _.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return !1
                }), [d, t, l])
            }
        },
        945660: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => H,
                qY: () => V,
                gM: () => Y,
                eF: () => j,
                k5: () => w,
                u1: () => B,
                Vm: () => z,
                sz: () => X
            });
            var r = t(667294),
                i = t(202351),
                a = t(826945),
                _ = t(61209),
                E = t(5544),
                s = t(567403),
                u = t(682776),
                l = t(72580),
                o = t(269300),
                d = t(730381),
                c = t.n(d),
                T = t(842227),
                I = t(3155);

            function L(e, n, t) {
                var r = c()(),
                    i = new Date(e.scheduled_start_time).getTime(),
                    a = {
                        start: i - I.VF,
                        end: i
                    };
                if (r.isBetween(a.start, a.end)) {
                    if (null != n) {
                        var _ = c()(n),
                            E = _.isBetween(a.start, a.end),
                            s = _.isBetween(c()(i).subtract(I.zV, "days"), i);
                        return E || s && !t ? void 0 : I.X_.EVENT_STARTING_SOON
                    }
                    return I.X_.EVENT_STARTING_SOON
                }
                var u = T.default.extractTimestamp(e.id),
                    l = Math.min(u + I.Fc, i);
                if (r.isBetween(u, l) && null == n && !t) return I.X_.NEW_EVENT
            }
            var f = t(744564),
                O = t(664625);

            function A(e, n) {
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

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function C(e) {
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

            function U(e, n) {
                return !n || "object" !== G(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function D(e, n) {
                D = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return D(e, n)
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var t, r = M(e);
                    if (n) {
                        var i = M(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return U(this, t)
                }
            }
            var N = {};
            var v = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && D(e, n)
                }(t, e);
                var n = y(t);

                function t() {
                    A(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
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
                return t
            }(i.ZP.PersistedStore);
            v.displayName = "UpcomingEventNoticesDismissalsStore";
            v.persistKey = "upcomingEventNotices";
            const S = new v(f.Z, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    var n = e.eventId,
                        t = C({}, N);
                    t[n] = Date.now();
                    N = t
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var n = e.guildScheduledEvent;
                    if (n.status === I.p1.CANCELED || n.status === I.p1.COMPLETED) {
                        var t = C({}, N);
                        delete t[n.id];
                        N = t
                    }
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var n = e.guildScheduledEvent,
                        t = C({}, N);
                    delete t[n.id];
                    N = t
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var n = e.userId,
                        t = e.guildEventId;
                    if (n === O.default.getId()) {
                        var r = o.ZP.getGuildScheduledEvent(t);
                        if (null != r && r.status === I.p1.SCHEDULED) {
                            if (null == N[t]) {
                                if (L(r, void 0, !1) === I.X_.NEW_EVENT) {
                                    var i = C({}, N);
                                    i[t] = Date.now();
                                    N = i
                                }
                            }
                        }
                    }
                }
            });
            var g = t(371188),
                R = t(2590);

            function m(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Z(e, n) {
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

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            _ = !0,
                            E = !1;
                        try {
                            for (t = t.call(e); !(_ = (r = t.next()).done); _ = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            E = !0;
                            i = e
                        } finally {
                            try {
                                _ || null == t.return || t.return()
                            } finally {
                                if (E) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = [];

            function H(e, n) {
                return (0, i.Wu)([s.Z, a.Z, o.ZP, u.Z, _.Z, E.ZP], (function() {
                    var t = s.Z.getGuild(e);
                    if (null == t) return b;
                    if (t.hasFeature(R.oNc.HUB)) {
                        var r, i, d = null === (r = E.ZP.getDefaultChannel(t.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (i = a.Z.getEventDirectoryEntries(d)) && void 0 !== i ? i : []).map((function(e) {
                            var n = e.scheduledEventId,
                                t = o.ZP.getGuildScheduledEvent(n);
                            return null != t ? t : a.Z.getCachedGuildScheduledEventById(n)
                        })).filter(l.lm)
                    }
                    return o.ZP.getGuildScheduledEventsByIndex(null != n ? n : o.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e) {
                        var n = e.channel_id;
                        if (null == n) return !0;
                        var t = _.Z.getChannel(n);
                        return u.Z.can(R.Plq.VIEW_CHANNEL, t)
                    }))
                }), [n, e])
            }

            function V(e) {
                return (0, i.e7)([o.ZP, _.Z, u.Z], (function() {
                    var n = _.Z.getChannel(e);
                    if (!u.Z.can(R.Plq.VIEW_CHANNEL, n)) return null;
                    if (null == (null == n ? void 0 : n.guild_id)) return null;
                    var t = o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_ACTIVE(e));
                    return t.length > 0 ? t[0] : null
                }), [e])
            }

            function Y(e) {
                var n = (0, i.Wu)([o.ZP], (function() {
                    return o.ZP.getGuildScheduledEventsForGuild(e)
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

            function z(e) {
                var n = function(e) {
                        return (0, i.Wu)([o.ZP, _.Z, u.Z], (function() {
                            return o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_UPCOMING(e)).filter((function(e) {
                                if (e.entity_type === I.WX.NONE || e.status !== I.p1.SCHEDULED) return !1;
                                if (null == e.channel_id) return !0;
                                var n = _.Z.getChannel(e.channel_id);
                                return u.Z.can(R.Plq.VIEW_CHANNEL, n)
                            }))
                        }), [e])
                    }(e),
                    t = (0, i.cj)([S], (function() {
                        return S.getAllEventDismissals()
                    })),
                    r = (0, i.cj)([o.ZP], (function() {
                        return null == n ? {} : n.reduce((function(e, n) {
                            return Z(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        P(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, e), P({}, n.id, o.ZP.hasRsvp(n.id, n.guild_id)))
                        }), {})
                    }), [n]);
                if (null != n && null != r)
                    for (var a = 0; a < n.length; a++) {
                        var E, s = n[a],
                            l = L(s, t[s.id], null !== (E = r[s.id]) && void 0 !== E && E);
                        if (null != l) return {
                            upcomingEvent: s,
                            noticeType: l
                        }
                    }
            }

            function w(e) {
                return (0, i.e7)([o.ZP, _.Z, u.Z], (function() {
                    return o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === I.WX.NONE || !(0, o.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var n = _.Z.getChannel(e.channel_id);
                        return u.Z.can(R.Plq.VIEW_CHANNEL, n)
                    }))
                }), [e])
            }

            function B(e) {
                return (0,
                    i.e7)([o.ZP], (function() {
                    return o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function j(e) {
                return (0, i.e7)([_.Z, o.ZP], (function() {
                    var n = o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != _.Z.getChannel(e.channel_id)
                    }));
                    return _.Z.getChannel(null == n ? void 0 : n.channel_id)
                }), [e])
            }

            function X(e) {
                var n = h(r.useState((function() {
                        return Date.now()
                    })), 2),
                    t = n[0],
                    a = n[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        a(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var _ = (0, i.e7)([o.ZP], (function() {
                        return null == e ? [] : o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, t]),
                    E = r.useMemo((function() {
                        return _.filter((function(e) {
                            var n = (0, g.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                t = n.withinStartWindow,
                                r = n.diffMinutes;
                            return e.status !== I.p1.ACTIVE && t && r < 15
                        }))
                    }), [_]);
                return E
            }
        },
        197307: (e, n, t) => {
            "use strict";
            t.d(n, {
                l: () => r
            });
            var r = (0, t(38736).Z)((function(e) {
                return {
                    canCloseModal: !0,
                    onUpdateCanCloseModal: function(n) {
                        e({
                            canCloseModal: n
                        })
                    }
                }
            }))
        },
        360703: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(304548),
                i = t(26468),
                a = t(197307),
                _ = t(2590),
                E = "guild-event-modal";
            const s = function() {
                var e = (0, i.bp)() === _.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: E,
                    contextKey: e,
                    onCloseRequest: function() {
                        a.l.getState().canCloseModal && (0, r.closeModal)(E, e)
                    }
                }
            }
        },
        172028: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
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
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => _
            });
            var r = t(202351),
                i = t(567403),
                a = t(2590);

            function _(e) {
                return (0, r.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, t = i.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(a.oNc.HUB)) && void 0 !== n && n
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
                var a = null != t ? t : n;
                return null != a && e.can(r.Plq.CREATE_INSTANT_INVITE, a) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                a = t.n(i),
                _ = t(473708),
                E = t(300443),
                s = t.n(E),
                u = t(483683),
                l = t.n(u),
                o = t(63685),
                d = t.n(o);

            function c(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: a()(s().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: _.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: a()(s().sparkleIcon, s().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: _.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: l(),
                        className: a()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        }
    }
]);