(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [4750], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        937119: (e, n, t) => {
            "use strict";
            t.d(n, {
                c: () => o
            });
            var r = t(23279),
                _ = t.n(r),
                E = t(281110),
                a = t(744564),
                i = t(612831),
                s = t(2590);

            function u(e, n, t, r, _, E, a) {
                try {
                    var i = e[E](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, _)
            }
            var l, d, T = function(e, n) {
                    var t, r, _, E, a = {
                        label: 0,
                        sent: function() {
                            if (1 & _[0]) throw _[1];
                            return _[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return E = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (E[Symbol.iterator] = function() {
                        return this
                    }), E;

                    function i(E) {
                        return function(i) {
                            return function(E) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (_ = 2 & E[0] ? r.return : E[0] ? r.throw || ((_ = r.return) && _.call(r), 0) : r.next) && !(_ = _.call(r, E[1])).done) return _;
                                    (r = 0, _) && (E = [2 & E[0], _.value]);
                                    switch (E[0]) {
                                        case 0:
                                        case 1:
                                            _ = E;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: E[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = E[1];
                                            E = [0];
                                            continue;
                                        case 7:
                                            E = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(_ = a.trys, _ = _.length > 0 && _[_.length - 1]) && (6 === E[0] || 2 === E[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === E[0] && (!_ || E[1] > _[0] && E[1] < _[3])) {
                                                a.label = E[1];
                                                break
                                            }
                                            if (6 === E[0] && a.label < _[1]) {
                                                a.label = _[1];
                                                _ = E;
                                                break
                                            }
                                            if (_ && a.label < _[2]) {
                                                a.label = _[2];
                                                a.ops.push(E);
                                                break
                                            }
                                            _[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    E = n.call(e, a)
                                } catch (e) {
                                    E = [6, e];
                                    r = 0
                                } finally {
                                    t = _ = 0
                                }
                                if (5 & E[0]) throw E[1];
                                return {
                                    value: E[0] ? E[1] : void 0,
                                    done: !0
                                }
                            }([E, i])
                        }
                    }
                },
                o = _()((d = (l = function(e) {
                        var n;
                        return T(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    a.Z.dispatch({
                                        type: "EVENT_DIRECTORY_FETCH_START"
                                    });
                                    return [4, E.ZP.get({
                                        url: s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                        query: {
                                            type: i.C2.GUILD_SCHEDULED_EVENT
                                        }
                                    })];
                                case 1:
                                    n = t.sent();
                                    a.Z.dispatch({
                                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                        channelId: e,
                                        entries: n.body
                                    });
                                    return [3, 3];
                                case 2:
                                    t.sent();
                                    a.Z.dispatch({
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
                            var _ = l.apply(e, n);

                            function E(e) {
                                u(_, t, r, E, a, "next", e)
                            }

                            function a(e) {
                                u(_, t, r, E, a, "throw", e)
                            }
                            E(void 0)
                        }))
                    }), function(e) {
                    return d.apply(this, arguments)
                }), 200)
        },
        826945: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => D
            });
            var r = t(496486),
                _ = t.n(r),
                E = t(202351),
                a = t(744564),
                i = t(269300),
                s = t(848285),
                u = t(612831);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function o(e, n) {
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

            function c(e) {
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

            function A(e) {
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
                    var t, r = T(e);
                    if (n) {
                        var _ = T(this).constructor;
                        t = Reflect.construct(r, arguments, _)
                    } else t = r.apply(this, arguments);
                    return o(this, t)
                }
            }
            var M = !1,
                O = {},
                C = {},
                U = {},
                G = function(e) {
                    U[e.guild_scheduled_event.id] = new s.Z(e.guild_scheduled_event.guild);
                    C[e.guild_scheduled_event.id] = e.guild_scheduled_event;
                    return {
                        channelId: e.directory_channel_id,
                        scheduledEventId: e.entity_id,
                        type: u.C2.GUILD_SCHEDULED_EVENT,
                        authorId: e.author_id,
                        createdAt: e.created_at
                    }
                };
            var p = function(e) {
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
                var n = A(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.isFetching = function() {
                    return M
                };
                r.getEventDirectoryEntries = function(e) {
                    if (null != e) return O[e]
                };
                r.getCachedGuildByEventId = function(e) {
                    var n;
                    return null !== (n = U[e]) && void 0 !== n ? n : void 0
                };
                r.getCachedGuildScheduledEventById = function(e) {
                    var n;
                    return null !== (n = C[e]) && void 0 !== n ? n : void 0
                };
                r.__getLocalVars = function() {
                    return {
                        fetching: M,
                        eventDirectoryEntries: O,
                        cachedGuildScheduledEvents: C,
                        cachedGuildByEvents: U,
                        eventDirectoryEntryFromServer: G
                    }
                };
                return t
            }(E.ZP.Store);
            p.displayName = "EventDirectoryStore";
            const D = new p(a.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    M = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.entries;
                    M = !1;
                    var r = _().sortBy(c(t), [function(e) {
                            return (0, i.CQ)(e.guild_scheduled_event)
                        }]),
                        E = _().map(r, G);
                    O[n] = E
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    M = !1
                }
            })
        },
        612831: (e, n, t) => {
            "use strict";
            t.d(n, {
                C2: () => r,
                VX: () => _,
                sE: () => E,
                AR: () => a,
                C1: () => T,
                b7: () => o,
                Pp: () => I
            });
            var r, _, E, a, i = t(940060),
                s = t(563135),
                u = t(2590),
                l = t(473708);

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
            }(_ || (_ = {}));
            ! function(e) {
                e.CREATE = "CREATE";
                e.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB";
                e.HUB_STUDY = "HUB_STUDY";
                e.HUB_CLASS = "HUB_CLASS";
                e.HUB_SOCIAL = "HUB_SOCIAL";
                e.HUB_MAJOR = "HUB_MAJOR";
                e.HUB_DORM = "HUB_DORM"
            }(E || (E = {}));
            ! function(e) {
                e[e.ALL = -1] = "ALL";
                e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED";
                e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB";
                e[e.CLASS = 2] = "CLASS";
                e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL";
                e[e.MISC = 5] = "MISC"
            }(a || (a = {}));
            var T = "1113200031168729140";

            function o(e) {
                return "883060064561299456" === e ? [{
                    value: a.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: a.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: a.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: a.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : e === T ? [{
                    value: a.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_1
                }, {
                    value: a.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_2
                }, {
                    value: a.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_3
                }, {
                    value: a.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_TOWN_HALL_5
                }] : [{
                    value: a.SCHOOL_CLUB,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: a.CLASS,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: a.STUDY_SOCIAL,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: a.MISC,
                    label: l.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function I() {
                var e;
                return d(e = {}, E.CREATE, {
                    id: E.CREATE,
                    code: "2TffvPucqHkN",
                    label: l.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                    channels: [],
                    system_channel_id: null
                }), d(e, E.HUB_SCHOOL_CLUB, {
                    id: E.HUB_SCHOOL_CLUB,
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
                        permissions: i.Z.combine(s.ZP.DEFAULT, u.Plq.MANAGE_ROLES, u.Plq.MANAGE_CHANNELS, u.Plq.KICK_MEMBERS, u.Plq.BAN_MEMBERS, u.Plq.MANAGE_NICKNAMES, u.Plq.MANAGE_GUILD_EXPRESSIONS, u.Plq.MANAGE_MESSAGES, u.Plq.SEND_TTS_MESSAGES),
                        color: 3066993
                    }],
                    system_channel_id: "12"
                }), d(e, E.HUB_STUDY, {
                    id: E.HUB_STUDY,
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
                }), d(e, E.HUB_CLASS, {
                    id: E.HUB_CLASS,
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
                }), d(e, E.HUB_SOCIAL, {
                    id: E.HUB_SOCIAL,
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
                }), d(e, E.HUB_MAJOR, {
                    id: E.HUB_MAJOR,
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
                }), d(e, E.HUB_DORM, {
                    id: E.HUB_DORM,
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
                _ = t(202351),
                E = t(787193),
                a = t(5544),
                i = t(567403),
                s = t(682776),
                u = t(2590);
            const l = function(e, n) {
                var t = (0, _.e7)([i.Z], (function() {
                        return i.Z.getGuild(e)
                    }), [e]),
                    l = (0, E.XJ)(t).canCreateGuildEvent,
                    d = (0, _.e7)([a.ZP], (function() {
                        return a.ZP.getChannels(e)[a.Zb]
                    }), [e]),
                    T = r.useMemo((function() {
                        return null != n ? d.filter((function(e) {
                            return e.channel.type === n
                        })) : d
                    }), [d, n]);
                return (0, _.e7)([s.Z], (function() {
                    if (s.Z.can(u.Plq.ADMINISTRATOR, t)) return !0;
                    if (l) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var _, a = T[Symbol.iterator](); !(e = (_ = a.next()).done); e = !0) {
                            var i = _.value.channel;
                            if ((0, E.Gw)(i).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == a.return || a.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return !1
                }), [T, t, l])
            }
        },
        201441: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => M,
                qY: () => O,
                gM: () => C,
                k5: () => U,
                u1: () => G,
                eF: () => p,
                sz: () => D
            });
            var r = t(667294),
                _ = t(202351),
                E = t(826945),
                a = t(61209),
                i = t(5544),
                s = t(567403),
                u = t(682776),
                l = t(72580),
                d = t(269300),
                T = t(371188),
                o = t(3155),
                I = t(2590);

            function c(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function L(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, _, E = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                E.push(r.value);
                                if (n && E.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            _ = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw _
                            }
                        }
                        return E
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = [];

            function M(e, n) {
                return (0, _.Wu)([s.Z, E.Z, d.ZP, u.Z, a.Z, i.ZP], (function() {
                    var t = s.Z.getGuild(e);
                    if (null == t) return A;
                    if (t.hasFeature(I.oNc.HUB)) {
                        var r, _, T = null === (r = i.ZP.getDefaultChannel(t.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (_ = E.Z.getEventDirectoryEntries(T)) && void 0 !== _ ? _ : []).map((function(e) {
                            var n = e.scheduledEventId,
                                t = d.ZP.getGuildScheduledEvent(n);
                            return null != t ? t : E.Z.getCachedGuildScheduledEventById(n)
                        })).filter(l.lm)
                    }
                    return d.ZP.getGuildScheduledEventsByIndex(null != n ? n : d.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e) {
                        var n = e.channel_id;
                        if (null == n) return !0;
                        var t = a.Z.getChannel(n);
                        return u.Z.can(I.Plq.VIEW_CHANNEL, t)
                    }))
                }), [n, e])
            }

            function O(e) {
                return (0, _.e7)([d.ZP, a.Z, u.Z], (function() {
                    var n = a.Z.getChannel(e);
                    if (!u.Z.can(I.Plq.VIEW_CHANNEL, n)) return null;
                    if (null == (null == n ? void 0 : n.guild_id)) return null;
                    var t = d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_ACTIVE(e));
                    return t.length > 0 ? t[0] : null
                }), [e])
            }

            function C(e) {
                var n = (0, _.Wu)([d.ZP], (function() {
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

            function U(e) {
                return (0, _.e7)([d.ZP, a.Z, u.Z], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === o.WX.NONE || !(0, d.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var n = a.Z.getChannel(e.channel_id);
                        return u.Z.can(I.Plq.VIEW_CHANNEL, n)
                    }))
                }), [e])
            }

            function G(e) {
                return (0, _.e7)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function p(e) {
                return (0, _.e7)([a.Z, d.ZP], (function() {
                    var n = d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != a.Z.getChannel(e.channel_id)
                    }));
                    return a.Z.getChannel(null == n ? void 0 : n.channel_id)
                }), [e])
            }

            function D(e) {
                var n = L(r.useState((function() {
                        return Date.now()
                    })), 2),
                    t = n[0],
                    E = n[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        E(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var a = (0, _.e7)([d.ZP], (function() {
                        return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, t]),
                    i = r.useMemo((function() {
                        return a.filter((function(e) {
                            var n = (0, T.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                t = n.withinStartWindow,
                                r = n.diffMinutes;
                            return e.status !== o.p1.ACTIVE && t && r < 15
                        }))
                    }), [a]);
                return i
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
            var r = t(882723),
                _ = t(26468),
                E = t(197307),
                a = t(2590),
                i = "guild-event-modal";
            const s = function() {
                var e = (0, _.bp)() === a.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: e,
                    onCloseRequest: function() {
                        E.l.getState().canCloseModal && (0, r.closeModal)(i, e)
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
                Z: () => a
            });
            var r = t(202351),
                _ = t(567403),
                E = t(2590);

            function a(e) {
                return (0, r.e7)([_.Z], (function() {
                    if (null == e) return !1;
                    var n, t = _.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(E.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => _
            });
            var r = t(2590);

            function _(e, n, t, _) {
                var E = null != t ? t : n;
                return null != E && e.can(r.Plq.CREATE_INSTANT_INVITE, E) || null != n && null != n.vanityURLCode || null != (null == _ ? void 0 : _.invite_code)
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                _ = (t(667294), t(294184)),
                E = t.n(_),
                a = t(473708),
                i = t(347234),
                s = t.n(i),
                u = t(483683),
                l = t.n(u),
                d = t(63685),
                T = t.n(d);

            function o(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: E()(s().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: T(),
                        className: E()(s().sparkleIcon, s().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: l(),
                        className: E()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=385b9399e3327de74861.js.map