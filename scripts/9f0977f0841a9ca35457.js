(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72982, 40706, 26945], {
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
                xf: () => l,
                Ou: () => o
            });
            var r = t(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        621647: (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => s
            });
            var r = t(473903),
                i = t(775173),
                l = t(72580),
                o = t(2590);

            function a(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function u(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    t = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case o.d4z.DM:
                        var a = u(e.recipients.map(r.default.getUser).filter(l.lm), 1),
                            s = a[0];
                        return null == s ? null : s.getAvatarURL(void 0, n, t);
                    case o.d4z.GROUP_DM:
                        return i.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: n
                        })
                }
            }
        },
        826945: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => I
            });
            var r = t(496486),
                i = t.n(r),
                l = t(202351),
                o = t(744564),
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

            function p(e, n) {
                p = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return p(e, n)
            }

            function _(e) {
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

            function h(e) {
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
            var g = !1,
                O = {},
                m = {},
                y = {},
                T = function(e) {
                    y[e.guild_scheduled_event.id] = new u.Z(e.guild_scheduled_event.guild);
                    m[e.guild_scheduled_event.id] = e.guild_scheduled_event;
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
                    n && p(e, n)
                }(t, e);
                var n = h(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.isFetching = function() {
                    return g
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
                    return null !== (n = m[e]) && void 0 !== n ? n : void 0
                };
                return t
            }(l.ZP.Store);
            b.displayName = "EventDirectoryStore";
            const I = new b(o.Z, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    g = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.entries;
                    g = !1;
                    var r = i().sortBy(_(t), [function(e) {
                            return (0, a.CQ)(e.guild_scheduled_event)
                        }]),
                        l = i().map(r, T);
                    O[n] = l
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    g = !1
                }
            })
        },
        612831: (e, n, t) => {
            "use strict";
            t.d(n, {
                C2: () => r,
                VX: () => i,
                sE: () => l,
                AR: () => o,
                b7: () => f,
                Pp: () => E
            });
            var r, i, l, o, a = t(940060),
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
            }(l || (l = {}));
            ! function(e) {
                e[e.ALL = -1] = "ALL";
                e[e.UNCATEGORIZED = 0] = "UNCATEGORIZED";
                e[e.SCHOOL_CLUB = 1] = "SCHOOL_CLUB";
                e[e.CLASS = 2] = "CLASS";
                e[e.STUDY_SOCIAL = 3] = "STUDY_SOCIAL";
                e[e.MISC = 5] = "MISC"
            }(o || (o = {}));

            function f(e) {
                return "883060064561299456" === e ? [{
                    value: o.SCHOOL_CLUB,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: o.CLASS,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: o.STUDY_SOCIAL,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: o.MISC,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: o.SCHOOL_CLUB,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: o.CLASS,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: o.STUDY_SOCIAL,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: o.MISC,
                    label: c.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function E() {
                var e;
                return d(e = {}, l.CREATE, {
                    id: l.CREATE,
                    code: "2TffvPucqHkN",
                    label: c.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                    channels: [],
                    system_channel_id: null
                }), d(e, l.HUB_SCHOOL_CLUB, {
                    id: l.HUB_SCHOOL_CLUB,
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
                }), d(e, l.HUB_STUDY, {
                    id: l.HUB_STUDY,
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
                }), d(e, l.HUB_CLASS, {
                    id: l.HUB_CLASS,
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
                }), d(e, l.HUB_SOCIAL, {
                    id: l.HUB_SOCIAL,
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
                }), d(e, l.HUB_MAJOR, {
                    id: l.HUB_MAJOR,
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
                }), d(e, l.HUB_DORM, {
                    id: l.HUB_DORM,
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
                Z: () => l
            });
            var r = t(202351),
                i = t(409125);

            function l() {
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
                l = t(61209),
                o = t(682776),
                a = t(2590),
                u = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function s(e) {
                return (0, r.cj)([l.Z, i.Z, o.Z], (function() {
                    return c(e, l.Z, i.Z, o.Z)
                }), [e])
            }

            function c(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
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
                TT: () => o,
                AN: () => a,
                LK: () => u
            });
            var r = t(940060),
                i = t(227202),
                l = t(2590),
                o = l.Plq.VIEW_CHANNEL,
                a = r.Z.combine(o, l.Plq.CONNECT),
                u = r.Z.combine(o, i.yP)
        },
        919810: (e, n, t) => {
            "use strict";
            t.d(n, {
                wg: () => h,
                so: () => g,
                ZP: () => O
            });
            var r = t(202351),
                i = t(15970),
                l = t(766496),
                o = t(61209),
                a = t(5544),
                u = t(567403),
                s = t(682776),
                c = t(563135),
                d = t(269300),
                f = t(3155),
                E = t(2590);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
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

            function v(e) {
                return "entity_type" in e ? {
                    entityType: e.entity_type,
                    channelId: e.channel_id
                } : e
            }

            function h(e) {
                var n = _(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z], 1),
                    t = n[0],
                    r = v(e),
                    i = r.entityType,
                    l = r.channelId,
                    a = i === f.WX.EXTERNAL;
                if (a) return !0;
                var u = t.getChannel(l);
                return null != u && c.ZP.canEveryoneRole(E.Plq.VIEW_CHANNEL, u)
            }

            function g(e) {
                var n = _(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP, o.Z, u.Z, l.Z], 4),
                    t = n[0],
                    r = n[1],
                    c = n[2],
                    E = n[3];
                if ((0, d.Z2)(e)) return !1;
                var p = e.guild_id,
                    v = e.channel_id,
                    g = e.entity_type === f.WX.EXTERNAL,
                    O = g ? t.getDefaultChannel(e.guild_id) : r.getChannel(v),
                    m = c.getGuild(p),
                    y = E.getStageInstanceByChannel(v);
                return !!(0,
                    i.b)(s.Z, m, O, y) && (null != O && h(e, [r]))
            }

            function O(e) {
                return (0, r.e7)([a.ZP, o.Z, u.Z, l.Z], (function() {
                    return g(e, [a.ZP, o.Z, u.Z, l.Z])
                }), [e])
            }
        },
        434149: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var r = t(667294),
                i = t(202351),
                l = t(327499),
                o = t(473903);

            function a(e) {
                var n = (0, i.e7)([o.default], (function() {
                    return o.default.getUser(null == e ? void 0 : e.creator_id)
                }), [e]);
                r.useEffect((function() {
                    null == n && null != (null == e ? void 0 : e.creator_id) && l.Z.requestMembersById(e.guild_id, e.creator_id)
                }), [e, n]);
                return n
            }
        },
        158499: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                i = t(826945),
                l = t(567403);

            function o(e, n) {
                return (0, r.cj)([l.Z, i.Z], (function() {
                    var t = l.Z.getGuild(e),
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
                l = t(563135),
                o = t(269300),
                a = t(3155),
                u = t(2590);

            function s(e, n) {
                return l.ZP.canEveryoneRole(u.Plq.VIEW_CHANNEL, e) || n === a.WX.EXTERNAL
            }

            function c(e, n) {
                return (0,
                    r.e7)([i.Z, o.ZP], (function() {
                    var t = i.Z.getChannel(e),
                        r = o.ZP.getGuildScheduledEvent(n);
                    return s(t, null == r ? void 0 : r.entity_type)
                }), [e, n])
            }
        },
        951687: (e, n, t) => {
            "use strict";
            t.d(n, {
                ku: () => I,
                S0: () => A,
                Lh: () => C,
                ZP: () => S
            });
            var r = t(785893),
                i = t(667294),
                l = t(513328),
                o = t(304548),
                a = t(414392),
                u = t(621329),
                s = t(316388),
                c = t(154451),
                d = t(859592),
                f = t(3155),
                E = t(473708),
                p = t(326507),
                _ = t.n(p);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        h(e, n, t[n])
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

            function m(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
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
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
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

            function T(e) {
                var n = e.isJoined,
                    t = e.canJoin,
                    r = e.isVoiceChannel;
                return t ? n ? E.Z.Messages.GO_TO_CHANNEL : r ? E.Z.Messages.GUILD_EVENT_JOIN : E.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.Z.Messages.CHANNEL_LOCKED_SHORT
            }

            function b(e) {
                var n = e.text,
                    t = e.disabled,
                    i = e.onJoinClick;
                return (0, r.jsx)(o.Button, {
                    className: _().button,
                    size: o.Button.Sizes.SMALL,
                    onClick: i,
                    color: o.Button.Colors.GREEN,
                    disabled: t,
                    children: n
                })
            }

            function I(e) {
                var n = e.onInviteClick,
                    t = e.canInvite,
                    a = e.isChannelPublic,
                    c = new l.V7,
                    f = y(i.useState(!1), 2),
                    p = f[0],
                    v = f[1];
                i.useEffect((function() {
                    return function() {
                        c.stop()
                    }
                }), []);
                var h = function(e) {
                    null != n && n(e);
                    v(!0);
                    c.start(1e3, (function() {
                        return v(!1)
                    }))
                };
                return null == n ? null : (0, r.jsx)(o.Tooltip, {
                    text: L(t, a),
                    position: "top",
                    tooltipClassName: _().tooltips,
                    "aria-label": E.Z.Messages.SHARE_LINK,
                    children: function(e) {
                        return t && a ? (0, r.jsxs)(o.Button, O(g({}, e), {
                            className: _().button,
                            innerClassName: _().innerButton,
                            color: o.Button.Colors.PRIMARY,
                            size: o.Button.Sizes.SMALL,
                            onClick: n,
                            children: [(0, r.jsx)(d.Z, {
                                width: 16,
                                height: 16
                            }), E.Z.Messages.SHARE]
                        })) : (0, r.jsxs)(o.Button, O(g({}, e), {
                            className: _().button,
                            innerClassName: _().innerButton,
                            color: o.Button.Colors.PRIMARY,
                            size: o.Button.Sizes.SMALL,
                            disabled: p,
                            look: p ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                            onClick: h,
                            children: [p ? (0, r.jsx)(u.Z, {
                                width: 16,
                                height: 16
                            }) : (0, r.jsx)(s.Z, {
                                width: 16,
                                height: 16
                            }), p ? E.Z.Messages.COPIED : E.Z.Messages.SHARE]
                        }))
                    }
                })
            }

            function A(e) {
                var n = e.isUserRsvped,
                    t = e.isUserLurking,
                    i = e.onRsvpClick,
                    l = m(e, ["isUserRsvped", "isUserLurking", "onRsvpClick"]),
                    s = n && !t;
                return (0, r.jsxs)(o.Button, O(g({}, l), {
                    className: _().button,
                    innerClassName: _().innerButton,
                    size: o.Button.Sizes.SMALL,
                    onClick: i,
                    color: o.Button.Colors.PRIMARY,
                    look: s ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
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

            function C(e) {
                return (0, r.jsx)(o.Tooltip, {
                    text: E.Z.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: _().tooltips,
                    "aria-label": E.Z.Messages.SHARE_LINK,
                    children: function(n) {
                        return (0, r.jsx)(A, g({}, n, e))
                    }
                })
            }
            var N = function(e) {
                    return null == e || e
                },
                L = function(e, n) {
                    return N(e) ? E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : N(n) ? E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL
                };

            function S(e) {
                var n = e.isActive,
                    t = e.isUserLurking,
                    i = e.rsvped,
                    l = e.canInvite,
                    a = e.isChannelPublic,
                    u = void 0 === a || a,
                    s = e.entityType,
                    d = e.onContextMenu,
                    p = e.onJoinClick,
                    v = e.onRsvpClick,
                    h = e.onStartClick,
                    m = e.onInviteClick,
                    y = e.onEndClick,
                    N = e.isJoined,
                    L = void 0 !== N && N,
                    S = void 0 !== p;
                return (0, r.jsxs)("div", {
                    className: _().container,
                    children: [null != d ? (0, r.jsx)(o.Tooltip, {
                        text: E.Z.Messages.MORE,
                        position: "top",
                        "aria-label": E.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(o.Clickable, O(g({}, e), {
                                onClick: d,
                                className: _().iconButton,
                                children: (0, r.jsx)(c.Z, {
                                    width: 20,
                                    height: 20,
                                    className: _().icon
                                })
                            }))
                        }
                    }) : null, (0, r.jsx)(I, {
                        onInviteClick: m,
                        canInvite: l,
                        isChannelPublic: u
                    }), n && s !== f.WX.EXTERNAL ? (0, r.jsx)(b, {
                        text: T({
                            isJoined: L,
                            canJoin: S,
                            isVoiceChannel: s === f.WX.VOICE
                        }),
                        disabled: !S,
                        onJoinClick: p
                    }) : null, t && !n && (0, r.jsx)(C, {
                        isUserRsvped: i,
                        isUserLurking: t
                    }), !t && !n && null != v && (0, r.jsx)(A, {
                        isUserRsvped: i,
                        isUserLurking: t,
                        onRsvpClick: v
                    }), n || null == h ? null : (0, r.jsx)(o.Button, {
                        className: _().button,
                        innerClassName: _().innerButton,
                        size: o.Button.Sizes.SMALL,
                        onClick: h,
                        color: o.Button.Colors.GREEN,
                        children: E.Z.Messages.START
                    }), n && null != y ? (0, r.jsx)(o.Button, {
                        className: _().button,
                        innerClassName: _().innerButton,
                        size: o.Button.Sizes.SMALL,
                        onClick: y,
                        color: o.Button.Colors.PRIMARY,
                        children: E.Z.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        605013: (e, n, t) => {
            "use strict";
            t.d(n, {
                Qt: () => D,
                ZP: () => G
            });
            var r = t(785893),
                i = t(667294),
                l = t(294184),
                o = t.n(l),
                a = t(202351),
                u = t(304548),
                s = t(667569),
                c = t(116404),
                d = t(915840),
                f = t(848285),
                E = t(61209),
                p = t(567403),
                _ = t(206986),
                v = t(606483),
                h = t(414392),
                g = t(621329),
                O = t(382840),
                m = t(269300),
                y = t(242735),
                T = t(599467),
                b = t(434149),
                I = t(205316),
                A = t(699296),
                C = t(220109),
                N = t(81472),
                L = t(3155),
                S = t(473708),
                M = t(554715),
                j = t.n(M);

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var D = function(e, n) {
                    switch (null == e ? void 0 : e.entity_type) {
                        case L.WX.STAGE_INSTANCE:
                            return function(e, n) {
                                return function(t) {
                                    var r = E.Z.getChannel(e.channel_id);
                                    if (null != r) {
                                        t.stopPropagation();
                                        (0, d.Cq)(r);
                                        null == n || n(t)
                                    }
                                }
                            }(e, n);
                        case L.WX.VOICE:
                            return function(e, n) {
                                return function(t) {
                                    t.stopPropagation();
                                    c.default.selectVoiceChannel(e.channel_id, !1);
                                    null == n || n(t)
                                }
                            }(e, n)
                    }
                    return function() {}
                },
                Z = function(e, n) {
                    return n && [L.WX.STAGE_INSTANCE, L.WX.VOICE].includes(null == e ? void 0 : e.entity_type)
                },
                U = i.memo((function(e) {
                    var n = e.guild,
                        t = e.guildScheduledEvent,
                        l = e.channel,
                        o = e.isMember,
                        c = (0, a.e7)([p.Z], (function() {
                            return null == n ? null : null !== (e = p.Z.getGuild(n.id)) && void 0 !== e ? e : new f.Z(n);
                            var e
                        }), [n]),
                        d = (0, N.u)(t, l),
                        E = i.useCallback((function(e) {
                            if (o && null != t) {
                                e.stopPropagation();
                                (0, s.B)(t)
                            }
                        }), [o, t]),
                        h = i.useCallback((function(e) {
                            D(t)(e)
                        }), [t]);
                    if (null == c) return null;
                    var g, O = null == d ? void 0 : d.IconComponent,
                        m = (0, r.jsxs)(r.Fragment, {
                            children: [null != O && (0, r.jsx)(O, {
                                width: 16,
                                height: 16,
                                className: j().channelIcon
                            }), (0, r.jsx)(u.Text, {
                                className: j().channelDescription,
                                variant: "text-xs/normal",
                                children: (0, T.m)(null !== (g = null == d ? void 0 : d.locationName) && void 0 !== g ? g : "", !0)
                            })]
                        });
                    return (0, r.jsxs)("div", {
                        className: j().inviteDetailsContainer,
                        children: [(0, r.jsx)(v.Z.Icon, {
                            guild: c,
                            onClick: E
                        }), (0, r.jsxs)("div", {
                            className: j().verticalContainer,
                            children: [(0, r.jsxs)("div", {
                                className: j().guildChannelInfoContainer,
                                children: [(0, r.jsx)(_.Z, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: u.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: j().guildBadge
                                }), (0, r.jsx)(u.Clickable, {
                                    className: j().guildNameClickable,
                                    onClick: E,
                                    children: (0, r.jsx)(u.Heading, {
                                        className: o ? j().guildNameLinkable : j().guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: j().channelInfoContainer,
                                children: Z(t, o) ? (0, r.jsx)(u.Clickable, {
                                    className: j().channelLocationLink,
                                    onClick: h,
                                    children: m
                                }) : m
                            })]
                        })]
                    })
                })),
                R = i.memo((function(e) {
                    var n = e.guildId,
                        t = e.guildScheduledEventId,
                        i = e.isActive,
                        l = e.isEnded,
                        o = e.isMember,
                        s = e.isExternal,
                        c = e.onAcceptInstantInvite,
                        d = e.onTransitionToInviteChannel,
                        f = (0, a.e7)([m.ZP], (function() {
                            return m.ZP.hasRsvp(t, n)
                        }), [n, t]),
                        E = function(e) {
                            e.stopPropagation();
                            o ? i && d() : c()
                        };
                    return o ? i ? (0, r.jsx)(u.Button, {
                        className: j().button,
                        size: u.Button.Sizes.SMALL,
                        onClick: function(e) {
                            s || E(e)
                        },
                        color: s ? u.Button.Colors.TRANSPARENT : u.Button.Colors.GREEN,
                        children: s ? S.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : S.Z.Messages.JOIN_GUILD
                    }) : l ? (0, r.jsx)(u.Button, {
                        className: j().button,
                        size: u.Button.Sizes.SMALL,
                        disabled: !0,
                        color: u.Button.Colors.PRIMARY,
                        look: u.Button.Looks.OUTLINED,
                        children: S.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, r.jsxs)(u.Button, {
                        className: j().button,
                        innerClassName: j().innerButton,
                        size: u.Button.Sizes.SMALL,
                        color: u.Button.Colors.PRIMARY,
                        look: f ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                        onClick: function(e) {
                            e.stopPropagation();
                            f ? y.Z.deleteRsvpForGuildEvent(t, n) : y.Z.createRsvpForGuildEvent(t, n)
                        },
                        children: [f ? (0, r.jsx)(g.Z, {
                            width: 16,
                            height: 16,
                            className: j().buttonIcon
                        }) : (0, r.jsx)(h.Z, {
                            width: 16,
                            height: 16,
                            className: j().buttonIcon
                        }), S.Z.Messages.INDICATE_RSVP]
                    }) : (0, r.jsx)(u.Button, {
                        className: j().button,
                        size: u.Button.Sizes.SMALL,
                        onClick: E,
                        color: u.Button.Colors.GREEN,
                        children: S.Z.Messages.JOIN_GUILD
                    })
                }));
            const G = i.memo((function(e) {
                var n = e.guildScheduledEvent,
                    t = e.guild,
                    l = e.channel,
                    a = e.isMember,
                    s = e.onAcceptInstantInvite,
                    c = e.onTransitionToInviteChannel,
                    d = (0, b.Z)(n),
                    f = i.useCallback((function() {
                        a && null != n && (0, O.bO)({
                            eventId: n.id
                        })
                    }), [a, n]);
                if (null == n) return null;
                var E, p = (0, m.xt)(n),
                    _ = (0, m.Z2)(n),
                    h = n.entity_type === L.WX.EXTERNAL;
                return (0, r.jsx)(v.Z, {
                    className: o()(P({}, j().clickable, a)),
                    children: (0, r.jsxs)(u.Clickable, {
                        onClick: f,
                        children: [null != n.image && (0, r.jsx)(A.Z, {
                            source: (0, I.Z)(n),
                            className: j().banner
                        }), (0, r.jsx)(C.ZP, {
                            userCount: n.user_count,
                            startTime: n.scheduled_start_time,
                            name: n.name,
                            description: null !== (E = n.description) && void 0 !== E ? E : void 0,
                            isActive: p,
                            isEnded: _,
                            descriptionClassName: j().eventDescription,
                            guildId: n.guild_id,
                            creator: d,
                            eventType: n.entity_type
                        }), (0, r.jsxs)("div", {
                            className: j().footerContainer,
                            children: [(0, r.jsx)(U, {
                                guild: t,
                                channel: l,
                                guildScheduledEvent: n,
                                isMember: a
                            }), (0, r.jsx)(R, {
                                isActive: p,
                                isEnded: _,
                                isMember: a,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                onAcceptInstantInvite: s,
                                onTransitionToInviteChannel: c,
                                isExternal: h
                            })]
                        })]
                    })
                })
            }))
        },
        757337: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => Ne
            });
            var r = t(785893),
                i = t(667294),
                l = t(202351),
                o = t(304548),
                a = t(350403),
                u = t(944522),
                s = t(61209),
                c = t(443812),
                d = t(474236),
                f = t(634080),
                E = t(269300),
                p = t(919810),
                _ = t(158499),
                v = t(619584),
                h = t(205316),
                g = t(951687),
                O = t(699296),
                m = t(26601),
                y = t(294184),
                T = t.n(y),
                b = t(189865),
                I = t(3155),
                A = t(473708),
                C = t(422978),
                N = t.n(C);

            function L(e) {
                var n = e.onClose,
                    t = e.selectedTab,
                    l = e.onTabSelected,
                    a = e.rsvpCount,
                    u = e.hasBanner,
                    s = e.isHub,
                    c = void 0 !== s && s,
                    d = i.useRef(null);
                i.useEffect((function() {
                    var e, n, t;
                    return null === (e = d.current) || void 0 === e || null === (n = e.ref) || void 0 === n || null === (t = n.blur) || void 0 === t ? void 0 : t.call(n)
                }), []);
                var f = A.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: a
                    }),
                    E = [(0, r.jsx)(o.TabBar.Item, {
                        className: N().tabBarItem,
                        id: I.fL.EVENT_INFO,
                        children: A.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                c || E.push((0, r.jsx)(o.TabBar.Item, {
                    className: N().tabBarItem,
                    id: I.fL.RSVP_LIST,
                    children: f
                }, "is-hub"));
                return (0, r.jsxs)("div", {
                    className: N().container,
                    children: [(0, r.jsx)(o.Clickable, {
                        ref: d,
                        onClick: n,
                        className: N().closeButton,
                        "aria-label": A.Z.Messages.CLOSE,
                        children: (0, r.jsx)(b.Z, {
                            className: T()(N().closeIcon, u && N().closeIconBanner)
                        })
                    }), (0, r.jsx)(o.TabBar, {
                        className: N().tabBar,
                        "aria-label": A.Z.Messages.OPTIONS,
                        selectedItem: t,
                        type: "top",
                        onItemSelect: l,
                        children: E
                    })]
                })
            }
            var S = t(667569),
                M = t(924417),
                j = t(21372),
                P = t(567403),
                D = t(206986),
                Z = t(124251),
                U = t(816132),
                R = t(749565),
                G = t(434149),
                x = t(314597),
                w = t(616918),
                k = t(621634),
                B = t(2590),
                V = t(68921),
                H = t.n(V);

            function z(e) {
                var n, t = e.creator,
                    i = e.guildId,
                    a = (0, l.e7)([j.ZP], (function() {
                        return j.ZP.getMember(i, t.id)
                    }), [t, i]);
                return (0, r.jsxs)("div", {
                    className: H().row,
                    children: [(0, r.jsx)(o.Avatar, {
                        size: o.AvatarSizes.SIZE_20,
                        src: t.getAvatarURL(i, 20),
                        "aria-label": null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : R.ZP.getName(t),
                        className: H().icon
                    }), (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: A.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, n;
                                return (0, r.jsx)(o.Clickable, {
                                    onClick: function() {
                                        return (0, M.m)({
                                            userId: t.id,
                                            guildId: i,
                                            analyticsLocation: {
                                                section: B.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                            }
                                        })
                                    },
                                    className: H().creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, r.jsx)(o.NameWithRole, {
                                        name: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : R.ZP.getName(t),
                                        color: null !== (n = null == a ? void 0 : a.colorString) && void 0 !== n ? n : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function F(e) {
                var n = e.guild,
                    t = e.onClick,
                    l = e.onClose,
                    a = i.useCallback((function(e) {
                        null == t || t(e);
                        null != t && (null == l || l(e))
                    }), [t, l]),
                    u = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Z.Z, {
                            guild: n,
                            size: Z.Z.Sizes.MINI,
                            active: !0,
                            className: T()(H().guildIcon, H().icon)
                        }), (0, r.jsx)(D.Z, {
                            guild: n,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: H().guildBadge
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: H().linkText,
                            children: n.name
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: H().row,
                    children: null != t ? (0, r.jsx)(o.Clickable, {
                        onClick: a,
                        className: H().clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function Y(e) {
                var n = e.userCount,
                    t = e.onClick;
                return (0, r.jsxs)("div", {
                    className: H().row,
                    children: [(0, r.jsx)(U.Z, {
                        width: 20,
                        height: 20,
                        className: H().icon
                    }), (0, r.jsx)(o.Clickable, {
                        onClick: t,
                        className: H().interestedCount,
                        children: (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: A.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
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
                    p = void 0 !== d && d,
                    _ = e.containerRef,
                    v = (0, E.xt)(n),
                    h = (0, E.Z2)(n),
                    g = n.user_count,
                    O = n.description,
                    m = (0, l.e7)([P.Z], (function() {
                        return null != P.Z.getGuild(t.id)
                    }), [t.id]),
                    y = i.useCallback((function(e) {
                        e.stopPropagation();
                        null != n && (0, S.B)(n)
                    }), [n]),
                    T = (0, G.Z)(n);
                i.useEffect((function() {
                    f.Z.getGuildEventUserCounts(t.id);
                    f.Z.getGuildEventsForCurrentUser(t.id)
                }), [t.id]);
                return (0, r.jsxs)("div", {
                    ref: _,
                    children: [(0, r.jsxs)("div", {
                        className: H().header,
                        children: [(0, r.jsx)(w.z, {
                            startTime: n.scheduled_start_time,
                            endTime: n.scheduled_end_time,
                            isActive: v,
                            isEnded: h,
                            eventType: n.entity_type
                        }), (0, r.jsx)(o.Heading, {
                            id: u,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: H().title,
                            children: n.name
                        })]
                    }), (0, r.jsxs)("div", {
                        className: H().body,
                        children: [(0, r.jsx)(F, {
                            guild: t,
                            onClick: m ? y : void 0,
                            onClose: s
                        }), (0, r.jsx)(k.Z, {
                            guildScheduledEvent: n,
                            channel: a,
                            onClose: s
                        }), null != g && (0, r.jsx)(Y, {
                            userCount: g,
                            onClick: c
                        }), !p && null != T && (0, r.jsx)(z, {
                            creator: T,
                            guildId: t.id
                        }, T.id), null != O && (0, r.jsx)("div", {
                            className: H().description,
                            children: (0, r.jsx)(x.Z, {
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
                Q = t(221667),
                $ = t(664625),
                ee = t(491260),
                ne = t(436154),
                te = t(500972),
                re = t.n(te);

            function ie(e, n, t, r, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function le(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(n, t);

                        function o(e) {
                            ie(l, r, i, o, a, "next", e)
                        }

                        function a(e) {
                            ie(l, r, i, o, a, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function oe(e, n, t) {
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
                        oe(e, n, t[n])
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
                var t, r, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, a])
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
                            children: (0, r.jsx)(U.Z, {
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
                    children: (0, r.jsx)(o.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: re().title,
                        children: A.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function fe() {
                return (0, r.jsx)(ce, {
                    children: (0, r.jsx)(o.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: re().errorTitle,
                        children: A.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function Ee(e) {
                var n = e.count;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: re().listRow,
                        children: [(0, r.jsx)("div", {
                            className: T()(re().listRowCircle, re().listAvatar),
                            children: (0, r.jsx)(U.Z, {
                                height: 14,
                                width: 14,
                                className: re().icon
                            })
                        }), (0, r.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: A.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: n
                            })
                        })]
                    })
                })
            }

            function pe(e) {
                var n, t = e.rsvpUser,
                    i = e.onContextMenu,
                    a = t.user,
                    u = null === (n = t.guild_member) || void 0 === n ? void 0 : n.guildId,
                    s = (0, l.e7)([ne.Z, ee.Z, $.default], (function() {
                        return a.id === $.default.getId() ? ne.Z.getStatus() : ee.Z.getStatus(a.id, u)
                    }), [a.id, u]);
                return (0, r.jsx)(o.Popout, {
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
                        var l, u, c = n.isShown;
                        return (0, r.jsxs)(o.Clickable, ue(ae({
                            className: T()(re().listRow, re().interactiveRow, oe({}, re().selected, c)),
                            onContextMenu: function(e) {
                                return i(e, a)
                            }
                        }, e), {
                            children: [(0, r.jsx)(o.Avatar, {
                                src: a.getAvatarURL(null === (l = t.guild_member) || void 0 === l ? void 0 : l.guildId, 24),
                                "aria-label": a.username,
                                size: o.AvatarSizes.SIZE_24,
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

            function _e(e) {
                var n = e.rsvpUsers,
                    t = e.usersNotShownCount,
                    i = void 0 === t ? 0 : t,
                    l = e.onContextMenu;
                return (0, r.jsxs)(o.ScrollerThin, {
                    className: re().listScroller,
                    children: [n.map((function(e) {
                        return (0, r.jsx)(pe, {
                            rsvpUser: e,
                            onContextMenu: l
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

            function he(e) {
                var n = e.children,
                    t = e.height;
                return (0, r.jsx)(ve, {
                    style: {
                        height: t
                    },
                    children: n
                })
            }

            function ge(e) {
                var n, i = e.guildEvent,
                    l = e.rsvpUsers,
                    a = e.loading,
                    u = e.error,
                    s = e.containerHeight;
                if (a && 0 === l.length) return (0, r.jsx)(he, {
                    height: s,
                    children: (0, r.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE,
                        className: re().spinner
                    })
                });
                if (null != u && 0 === l.length) return (0, r.jsx)(he, {
                    height: s,
                    children: (0, r.jsx)(fe, {})
                });
                var c = null !== (n = null == i ? void 0 : i.user_count) && void 0 !== n ? n : 0,
                    d = 0;
                l.length >= I.rC && c > I.rC && (d = Math.max(c - l.length, 0));
                return 0 === l.length ? (0, r.jsx)(he, {
                    height: s,
                    children: (0, r.jsx)(de, {})
                }) : (0, r.jsx)(ve, {
                    children: (0, r.jsx)(_e, {
                        rsvpUsers: l,
                        onContextMenu: function(e, n) {
                            (0, J.jW)(e, le((function() {
                                var e, i;
                                return se(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(71575), t.e(49244), t.e(56645), t.e(10848)]).then(t.bind(t, 810848))];
                                        case 1:
                                            e = l.sent(), i = e.default;
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
                me = t(754082),
                ye = t.n(me);

            function Te(e, n) {
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

            function Ie(e) {
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

            function Ae(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Te(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Te(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ce(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    i = e.channel,
                    o = e.onActionTaken,
                    a = e.isHub,
                    s = e.isMember,
                    c = (0, E.xt)(n),
                    d = (0, l.e7)([E.ZP], (function() {
                        return E.ZP.hasRsvp(n.id, t.id)
                    }), [t.id, n]),
                    f = (0, p.ZP)(n),
                    _ = (0, l.e7)([u.Z], (function() {
                        return u.Z.isLurking(t.id)
                    }), [t.id]),
                    h = (0, v.T)(null == i ? void 0 : i.id, n.id),
                    O = (0, Oe.Z)({
                        guild: t,
                        channel: i,
                        guildScheduledEvent: n,
                        isActive: c,
                        rsvped: d,
                        onActionTaken: o
                    }),
                    y = n.entity_type;
                return a ? (0, r.jsx)(m.Z, Ie({
                    isActive: c,
                    isUserLurking: _,
                    rsvped: d,
                    isMember: s,
                    isDetailsView: !0,
                    guildName: null == t ? void 0 : t.name,
                    isChannelPublic: h,
                    canInvite: f
                }, O)) : (0, r.jsx)(g.ZP, Ie({
                    isActive: c,
                    isUserLurking: _,
                    rsvped: d,
                    isChannelPublic: h,
                    canInvite: f,
                    entityType: y
                }, O))
            }
            const Ne = function(e) {
                var n = e.guildScheduledEventId,
                    t = e.parentGuildId,
                    u = e.transitionState,
                    p = e.onClose,
                    v = (0, l.e7)([E.ZP], (function() {
                        return E.ZP.getGuildScheduledEvent(n)
                    }), [n]),
                    g = null == v ? void 0 : v.id,
                    m = null == v ? void 0 : v.guild_id,
                    y = (0, _.Z)(m, g),
                    T = y.guild,
                    b = y.isMember,
                    A = (0, a.Z)(t),
                    C = null == v ? void 0 : v.channel_id,
                    N = (0, l.e7)([s.Z], (function() {
                        return s.Z.getChannel(C)
                    }), [C]),
                    S = (0, c.Dt)(),
                    M = Ae(i.useState(I.fL.EVENT_INFO), 2),
                    j = M[0],
                    P = M[1],
                    D = (0, l.Wu)([E.ZP], (function() {
                        return Object.values(E.ZP.getUsersForGuildEvent(g))
                    }), [g]),
                    Z = Ae((0, d.Z)((function() {
                        return f.Z.getGuildEventUsers(null == v ? void 0 : v.id, m)
                    })), 2),
                    U = Z[0],
                    R = Z[1],
                    G = R.loading,
                    x = R.error;
                i.useEffect((function() {
                    null == v && p()
                }));
                var w = i.useRef(null),
                    k = Ae(i.useState(0), 2),
                    B = k[0],
                    V = k[1];
                i.useLayoutEffect((function() {
                    var e, n;
                    V(null !== (n = null == w || null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0)
                }), [w]);
                if (null == v || null == T || !b && !A) return null;
                var H, z = function(e) {
                        if (e !== j) {
                            e === I.fL.RSVP_LIST && U();
                            P(e)
                        }
                    },
                    F = null !== (H = null == v ? void 0 : v.user_count) && void 0 !== H ? H : 0,
                    Y = {
                        height: B
                    };
                return (0, r.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-labelledby": S,
                    className: ye().root,
                    children: [null != (null == v ? void 0 : v.image) && (0, r.jsx)(O.Z, {
                        source: (0, h.Z)(v),
                        className: ye().banner
                    }), (0, r.jsx)(L, {
                        onClose: p,
                        selectedTab: j,
                        onTabSelected: z,
                        rsvpCount: F,
                        hasBanner: null != (null == v ? void 0 : v.image),
                        isHub: A
                    }), (0, r.jsx)("div", {
                        className: ye().container,
                        children: (0, r.jsx)(o.ModalContent, {
                            className: ye().contentContainer,
                            style: Y,
                            children: (0, r.jsxs)(o.Slides, {
                                activeSlide: j,
                                width: 600,
                                centered: !1,
                                children: [(0, r.jsx)(o.Slide, {
                                    id: I.fL.EVENT_INFO,
                                    children: (0, r.jsx)(X, {
                                        guildEvent: v,
                                        guild: T,
                                        channel: N,
                                        headerId: S,
                                        onClose: p,
                                        onClickInterestedCount: function() {
                                            return z(I.fL.RSVP_LIST)
                                        },
                                        isHub: A,
                                        containerRef: w
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: I.fL.RSVP_LIST,
                                    children: (0, r.jsx)(ge, {
                                        guildEvent: v,
                                        rsvpUsers: D,
                                        loading: G,
                                        containerHeight: B,
                                        error: x
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: ye().footer,
                        children: (0, r.jsx)(Ce, {
                            guildEvent: v,
                            isHub: A,
                            isMember: b,
                            guild: T,
                            channel: N,
                            onActionTaken: p
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
                i = (t(667294), t(304548)),
                l = t(154451),
                o = t(951687),
                a = t(473708),
                u = t(379818),
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
                    p = e.onGoToGuildClick,
                    _ = e.isDetailsView,
                    v = void 0 !== _ && _,
                    h = e.isMember,
                    g = e.onJoinGuildClick,
                    O = e.guildName,
                    m = e.onInviteClick,
                    y = e.canInvite,
                    T = e.isChannelPublic;
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
                                children: (0, r.jsx)(l.Z, {
                                    width: 20,
                                    height: 20,
                                    className: s().icon
                                })
                            }))
                        }
                    }) : null, h && (0, r.jsx)(o.ku, {
                        onInviteClick: m,
                        canInvite: y,
                        isChannelPublic: T
                    }), t && !n && (0, r.jsx)(o.Lh, {
                        isUserRsvped: u,
                        isUserLurking: t
                    }), h && !t && !n && null != E && (0, r.jsx)(o.S0, {
                        isUserRsvped: u,
                        isUserLurking: t,
                        onRsvpClick: E
                    }), !h || t || v && !n ? null : (0, r.jsx)(i.Button, {
                        className: s().button,
                        innerClassName: s().innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: p,
                        color: i.Button.Colors.GREEN,
                        children: a.Z.Messages.HUB_EVENTS_GO_TO_GUILD
                    }), h ? null : (0, r.jsx)(i.Button, {
                        className: s().button,
                        innerClassName: s().innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: g,
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
                l = t(304548),
                o = t(599467),
                a = t(605013),
                u = t(81472),
                s = t(3155),
                c = t(68921),
                d = t.n(c);

            function f(e) {
                var n = e.guildScheduledEvent,
                    t = e.channel,
                    c = e.onClose,
                    f = n.entity_type === s.WX.EXTERNAL,
                    E = i.useCallback((function(e) {
                        return (0, a.Qt)(n, c)(e)
                    }), [n, c]),
                    p = (0, u.u)(n, t);
                if (null == p) return null;
                var _ = p.IconComponent,
                    v = p.locationName,
                    h = (0, r.jsxs)(r.Fragment, {
                        children: [null != _ && (0, r.jsx)(_, {
                            width: 20,
                            height: 20,
                            className: d().channelIcon
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d().locationText,
                            children: (0, o.m)(v, !0)
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: d().row,
                    children: null != E ? (0, r.jsx)(l.Clickable, {
                        className: f ? d().externalLocation : d().channelLocation,
                        onClick: E,
                        children: h
                    }) : h
                })
            }
        },
        81472: (e, n, t) => {
            "use strict";
            t.d(n, {
                u: () => o
            });
            var r = t(344832),
                i = t(746103),
                l = t(32421);

            function o(e, n) {
                if (null == e) return null;
                var t, o, a = (0, l.cS)(e);
                if (null != a) {
                    t = i.Z;
                    o = a
                } else {
                    if (null == n) return null;
                    t = (0, r.Th)(n.type);
                    o = n.name
                }
                return {
                    IconComponent: t,
                    locationName: o
                }
            }
        },
        85941: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => j
            });
            var r = t(785893),
                i = (t(667294),
                    t(202351)),
                l = t(304548),
                o = t(971402),
                a = t(327499),
                u = t(276985),
                s = t(716371),
                c = t(787193),
                d = t(784426),
                f = t(915840),
                E = t(5544),
                p = t(567403),
                _ = t(682776),
                v = t(652591),
                h = t(691797),
                g = t(242735),
                O = t(919810),
                m = t(619584),
                y = t(371188),
                T = t(3155),
                b = t(2590),
                I = t(473708);

            function A(e, n, t, r, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function C(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(n, t);

                        function o(e) {
                            A(l, r, i, o, a, "next", e)
                        }

                        function a(e) {
                            A(l, r, i, o, a, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function L(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
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
            var M = function(e, n) {
                var t, r, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, a])
                    }
                }
            };

            function j(e) {
                var n = e.guild,
                    A = e.channel,
                    N = e.guildScheduledEvent,
                    j = e.isActive,
                    P = e.rsvped,
                    D = e.onActionTaken,
                    Z = function(e) {
                        e.stopPropagation();
                        P ? g.Z.deleteRsvpForGuildEvent(G, w) : g.Z.createRsvpForGuildEvent(G, w)
                    },
                    U = function(e) {
                        e.stopPropagation();
                        var n = E.ZP.getDefaultChannel(w);
                        (0, l.closeAllModals)();
                        (0, d.XU)(w, null == n ? void 0 : n.id)
                    },
                    R = N.scheduled_start_time,
                    G = N.id,
                    x = N.entity_type,
                    w = N.guild_id,
                    k = (0, (0, c.XJ)(null != A ? A : n).canManageGuildEvent)(N),
                    B = (0, O.ZP)(N),
                    V = (0,
                        m.T)(null == A ? void 0 : A.id, N.id),
                    H = (0, y.ub)(R).withinStartWindow,
                    z = (0, i.e7)([_.Z], (function() {
                        return !(null == A ? void 0 : A.isGuildVocal()) || _.Z.can(b.Plq.CONNECT, A)
                    }), [A]),
                    F = (0, s.J)(w);

                function Y() {
                    return (Y = C((function(e) {
                        return M(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.stopPropagation();
                                    return [4, a.Z.joinGuild(w)];
                                case 1:
                                    n.sent();
                                    p.Z.addConditionalChangeListener((function() {
                                        if (null == p.Z.getGuild(w)) return !0;
                                        j || Z(e);
                                        U(e);
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
                        k && !j && (0, l.openModal)((function(e) {
                            return (0, r.jsx)(l.ConfirmModal, S(L({}, e), {
                                header: I.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                                confirmText: I.Z.Messages.DELETE,
                                cancelText: I.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return g.Z.deleteGuildEvent(G, w)
                                },
                                children: (0, r.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    children: I.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                                })
                            }))
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation();
                        null != n && (0, o.jW)(e, C((function() {
                            var e, i;
                            return M(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(19887), t.e(71718), t.e(71575), t.e(91406), t.e(43244), t.e(54368), t.e(65278), t.e(45660), t.e(83316)]).then(t.bind(t, 171037))];
                                    case 1:
                                        e = l.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, L({
                                                guildEventId: G,
                                                channel: A,
                                                guild: n
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onJoinClick: z || F ? function(e) {
                        e.stopPropagation();
                        if (F) {
                            null == D || D();
                            (0, u.hk)(w)
                        } else if (null == A ? void 0 : A.isGuildStageVoice()) {
                            (0, f.Cq)(A);
                            null == D || D()
                        } else if (null == A ? void 0 : A.isGuildVoice()) {
                            g.Z.joinVoiceEvent(A.guild_id, A.id);
                            null == D || D()
                        }
                    } : void 0,
                    onRsvpClick: Z,
                    onStartClick: k && H ? function(e) {
                        e.stopPropagation();
                        (0, l.openModalLazy)(C((function() {
                            var e, n;
                            return M(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(71575), t.e(74544), t.e(1459), t.e(78158)]).then(t.bind(t, 874544))];
                                    case 1:
                                        e = i.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, S(L({}, e), {
                                                event: N,
                                                onSuccess: D
                                            }))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    onInviteClick: function(e) {
                        e.stopPropagation();
                        if (null != n)
                            if (B && V)(0, l.openModalLazy)(C((function() {
                                var e, i;
                                return M(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(75442), t.e(89005)]).then(t.bind(t, 167551))];
                                        case 1:
                                            e = l.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, S(L({}, e), {
                                                    guild: n,
                                                    channel: A,
                                                    guildScheduledEvent: N,
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
                                    guildId: w,
                                    guildEventId: G
                                });
                                (0, h.JG)(i);
                                v.default.track(b.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: w,
                                    guild_scheduled_event_id: G
                                })
                            }
                    },
                    onEndClick: k && x === T.WX.EXTERNAL && j ? function(e) {
                        e.stopPropagation();
                        if (k) {
                            var n = function() {
                                g.Z.endEvent(G, w);
                                (0, l.closeAllModals)()
                            };
                            (0, l.openModal)((function(e) {
                                return (0, r.jsx)(l.ConfirmModal, S(L({}, e), {
                                    header: I.Z.Messages.END_EVENT,
                                    confirmText: I.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                    cancelText: I.Z.Messages.CANCEL,
                                    onConfirm: n,
                                    children: (0,
                                        r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        children: I.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                    })
                                }))
                            }))
                        }
                    } : void 0,
                    onJoinGuildClick: function(e) {
                        return Y.apply(this, arguments)
                    },
                    onGoToGuildClick: U
                }
            }
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                i = t(567403),
                l = t(2590);

            function o(e) {
                return (0, r.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, t = i.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(l.oNc.HUB)) && void 0 !== n && n
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
                var l = null != t ? t : n;
                return null != l && e.can(r.Plq.CREATE_INSTANT_INVITE, l) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        787193: (e, n, t) => {
            "use strict";
            t.d(n, {
                XJ: () => h,
                Gw: () => g,
                Yl: () => O
            });
            var r = t(667294),
                i = t(940060),
                l = t(202351),
                o = t(897436),
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
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
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
            var p = {
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
                _ = function(e, n, t, r) {
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
                h = function(e) {
                    var n = E(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : v(e), 2),
                        t = n[0],
                        i = n[1],
                        o = E((0, l.Wu)([u.Z], (function() {
                            return [u.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(t, e), u.Z.can(i, e)]
                        })), 4),
                        c = o[0],
                        f = o[1],
                        h = o[2],
                        g = o[3],
                        O = (0, l.e7)([s.default], (function() {
                            return s.default.getCurrentUser()
                        })),
                        m = r.useCallback((function(e) {
                            return _(e, O, f, c)
                        }), [c, f, O]),
                        y = r.useCallback((function(e) {
                            return _(e, O, g, h)
                        }), [g, h, O]);
                    return null == e ? p : {
                        canCreateExpressions: c,
                        canCreateGuildEvent: h,
                        canManageAllExpressions: f,
                        canManageAllEvents: g,
                        canManageGuildExpression: m,
                        canManageGuildEvent: y
                    }
                },
                g = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        r = E(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : v(e), 2),
                        i = r[0],
                        l = r[1],
                        o = n.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        c = n.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        f = n.can(i, e),
                        h = n.can(l, e),
                        g = t.getCurrentUser();
                    return null == e ? p : {
                        canCreateExpressions: o,
                        canCreateGuildEvent: f,
                        canManageAllExpressions: c,
                        canManageAllEvents: h,
                        canManageGuildExpression: function(e) {
                            return _(e, g, c, o)
                        },
                        canManageGuildEvent: function(e) {
                            return _(e, g, h, f)
                        }
                    }
                },
                O = function(e) {
                    var n = (0, l.e7)([u.Z], (function() {
                            return u.Z.can(d.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, o.JY)(null == e ? void 0 : e.id).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                i = (t(667294), t(318715)),
                l = t(785085);

            function o(e) {
                var n = e.children,
                    t = e.confettiLocation;
                return (0, i.ZP)([l.Z], (function() {
                    return l.Z.isEnabled({
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
                l = t(255875),
                o = t(785085);

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
                var e = r.useContext(l.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([o.Z], (function() {
                        return o.Z.getState()
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
                            fire: function(r, i, l) {
                                var o, u, s = null != (null == l ? void 0 : l.settings) ? function(e) {
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
                                    }({}, n, l.settings) : n,
                                    c = t(s);
                                e(r, i, c, (null !== (o = null == l ? void 0 : l.count) && void 0 !== o ? o : s.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == l ? void 0 : l.sprite
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
                l = t.n(i),
                o = t(473708),
                a = t(300443),
                u = t.n(a),
                s = t(483683),
                c = t.n(s),
                d = t(63685),
                f = t.n(d);

            function E(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: l()(u().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: l()(u().sparkleIcon, u().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c(),
                        className: l()(u().sparkleIcon, u().sparkleTop)
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
                l = t(842227),
                o = t(202351),
                a = t(744564),
                u = t(656793),
                s = t(382060),
                c = t(61209),
                d = t(567403),
                f = t(179913),
                E = t(715107),
                p = t(536945),
                _ = t(487685),
                v = t(102921);

            function h(e) {
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
            var g = t(897196);

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
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

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e) {
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

            function I(e, n) {
                return !n || "object" !== C(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function A(e, n) {
                A = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return A(e, n)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    return I(this, t)
                }
            }
            var L = {},
                S = {},
                M = {},
                j = {},
                P = {},
                D = {},
                Z = null,
                U = {};

            function R() {
                L = {};
                P = {};
                S = {};
                M = {};
                j = {};
                Z = E.Z.getChannelId();
                for (var e in U) clearTimeout(U[e]);
                U = {};
                p.Z.forEachGuild((function(e) {
                    x(e)
                }));
                w()
            }

            function G(e) {
                delete L[e];
                delete P[e];
                delete S[e];
                delete M[e];
                delete j[e];
                x(e);
                for (var n in M[e]) B(e, n)
            }

            function x(e) {
                var n = p.Z.getThreadsForGuild(e);
                for (var t in n)
                    for (var r in n[t]) {
                        K(r);
                        var i = c.Z.getChannel(r);
                        if (null != i) {
                            var l = _.Z.joinTimestamp(r);
                            if (null != l) {
                                var o = {
                                        channel: i,
                                        joinTimestamp: l.getTime()
                                    },
                                    a = W(i),
                                    u = a.isUnread,
                                    s = a.isRelevant,
                                    d = a.isTimedRelevant;
                                Q(L, i, o, !1);
                                Q(P, i, s ? o : null, !1);
                                Q(S, i, u ? o : null, !1);
                                d && q(i, !0)
                            } else {
                                Q(M, i, i, !1);
                                var E = f.ZP.isForumPostUnread(i.id);
                                Q(j, i, E ? i : null, !1)
                            }
                        }
                    }
            }

            function w() {
                D = {};
                for (var e in M)
                    for (var n in M[e]) B(e, n)
            }

            function k(e) {
                var n = c.Z.getBasicChannel(e);
                null != n && s.uC.has(n.type) && B(n.guild_id, n.id)
            }

            function B(e, n) {
                var t = c.Z.getChannel(n);
                if (null != t && t.isForumLikeChannel()) {
                    null == D[e] && (D[e] = {});
                    D[e][n] = 0;
                    if (null != M[e] && null != M[e][n]) {
                        var r = d.Z.getGuild(e);
                        if (null != r) {
                            var i = f.ZP.getTrackedAckMessageId(n);
                            if (null == i) {
                                var o = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? o = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (o = new Date(r.joinedAt).getTime()));
                                i = l.default.fromTimestamp(o)
                            }
                            for (var a in M[e][n]) n === Z ? f.ZP.isNewForumThread(a, n, r) && D[e][n]++ : l.default.compare(a, i) > 0 && !f.ZP.hasOpenedThread(a) && D[e][n]++
                        }
                    }
                }
            }

            function V(e, n, t) {
                if (null == n) return !1;
                var r = c.Z.getChannel(t),
                    i = _.Z.joinTimestamp(t);
                if (null != r && p.Z.isActive(e, n, t)) {
                    if (null != i) {
                        var l = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            o = W(r),
                            a = o.isUnread,
                            u = o.isRelevant,
                            s = o.isTimedRelevant;
                        Q(L, r, l, !0);
                        Q(P, r, u ? l : null, !0);
                        Q(S, r, a ? l : null, !0);
                        Q(M, r, null, !0);
                        Q(j, r, null, !0);
                        q(r, s)
                    } else {
                        var d = f.ZP.isForumPostUnread(r.id);
                        Q(L, r, null, !0);
                        Q(S, r, null, !0);
                        Q(P, r, null, !0);
                        Q(M, r, r, !0);
                        Q(j, r, d ? r : null, !0);
                        K(r.id)
                    }
                    B(e, n)
                } else {
                    $(L, e, n, t);
                    $(P, e, n, t);
                    $(S, e, n, t);
                    $(M, e, n, t);
                    $(j, e, n, t);
                    K(t);
                    B(e, n)
                }
            }

            function H(e) {
                return V(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function z(e, n) {
                if (null == n) return !1;
                var t = L[e],
                    r = null == t ? null : t[n];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var l = M[e],
                    o = null == l ? null : l[n];
                if (null != o)
                    for (var a in o)
                        if (o[a].isNSFW()) return !0;
                return !1
            }

            function F(e) {
                var n = c.Z.getChannel(e.id);
                return !(null == n || !p.Z.isActive(e.guildId, n.parent_id, e.id)) && V(n.guild_id, n.parent_id, n.id)
            }

            function Y(e) {
                var n = c.Z.getChannel(e.channelId);
                if (null == n) X();
                else {
                    var t = n.guild_id,
                        r = n.parent_id;
                    if (!s.Ec.has(n.type)) {
                        var i;
                        if (Number(null === (i = D[t]) || void 0 === i ? void 0 : i[n.id]) > 0) {
                            B(t, n.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(L, n)) {
                        var l = W(n),
                            o = l.isUnread,
                            a = l.isRelevant;
                        q(n, l.isTimedRelevant);
                        var u = ee(S, n),
                            d = ee(P, n);
                        if (o === u && a === d) return !1;
                        var E = L[t][r][n.id],
                            p = a ? E : null;
                        Q(S, n, o ? E : null, !0);
                        Q(P, n, p, !0);
                        B(t, r)
                    } else {
                        var _ = ee(j, n),
                            v = f.ZP.isForumPostUnread(n.id);
                        if (v === _) return !1;
                        Q(j, n, v ? n : null, !0)
                    }
                }
            }

            function X() {
                S = {};
                P = {};
                for (var e in L)
                    for (var n in L[e])
                        for (var t in L[e][n]) {
                            var r = L[e][n][t],
                                i = W(r.channel),
                                l = i.isUnread,
                                o = i.isRelevant,
                                a = i.isTimedRelevant;
                            l && Q(S, r.channel, r, !1);
                            o && Q(P, r.channel, r, !1);
                            q(r.channel, a)
                        }
                j = {};
                for (var u in M)
                    for (var s in M[u])
                        for (var c in M[u][s]) {
                            var d = M[u][s][c];
                            f.ZP.isForumPostUnread(c) && Q(j, d, d, !1)
                        }
                w()
            }

            function J() {
                var e = Z;
                if ((Z = E.Z.getChannelId()) === e) return !1;
                k(e);
                k(Z)
            }

            function W(e) {
                var n = f.ZP.getMentionCount(e.id) > 0,
                    t = f.ZP.hasRelevantUnread(e) && (!_.Z.isMuted(e.id) || n) || (0, u.c)() && n,
                    r = e.hasFlag(g.zZ.PINNED),
                    i = e.isActiveThread(),
                    l = i && h(e) > Date.now();
                return {
                    isUnread: (i || r) && t,
                    isRelevant: l || r || t,
                    isTimedRelevant: l
                }
            }

            function q(e, n) {
                K(e.id);
                n && function(e) {
                    U[e.id] = setTimeout((function() {
                        var n = c.Z.getChannel(e.id);
                        null != n && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: n
                        })
                    }), h(e) - Date.now() + 1)
                }(e)
            }

            function K(e) {
                if (e in U) {
                    clearTimeout(U[e]);
                    delete U[e]
                }
            }

            function Q(e, n, t, r) {
                var l = n.guild_id,
                    o = n.parent_id,
                    a = n.id;
                if (null != l && null != o && null != a) {
                    l in e || (e[l] = {});
                    o in e[l] || (e[l][o] = {});
                    r && (e[l] = b(T({}, e[l]), m({}, o, T({}, e[l][o]))));
                    if (null === t) {
                        delete e[l][o][a];
                        i().isEmpty(e[l][o]) && delete e[l][o]
                    } else e[l][o][a] = t
                }
            }

            function $(e, n, t, r) {
                if (null != n && null != t && null != r && ne(e, n, t, r)) {
                    e[n] = b(T({}, e[n]), m({}, t, T({}, e[n][t])));
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
                le = {},
                oe = {},
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
                        n && A(e, n)
                    }(t, e);
                    var n = N(t);

                    function t() {
                        O(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, c.Z, _.Z, f.ZP);
                        this.syncWith([E.Z], J)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, n) {
                        return e in S && n in S[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, n) {
                        var t;
                        return e in M && null !== (t = M[e][n]) && void 0 !== t ? t : le
                    };
                    r.getActiveJoinedThreadsForParent = function(e, n) {
                        var t;
                        return e in L && null !== (t = L[e][n]) && void 0 !== t ? t : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = L[e]) && void 0 !== n ? n : te
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
                        return null !== (n = P[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, n) {
                        var t;
                        return null !== (t = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== t ? t : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = M[e]) && void 0 !== n ? n : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = j[e]) && void 0 !== n ? n : te
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, n) {
                        var t;
                        return null !== (t = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var n;
                        return null !== (n = D[e]) && void 0 !== n ? n : oe
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var n = [];
                        for (var t in L)
                            if (t === e || null == e)
                                for (var r in L[t])
                                    for (var i in L[t][r]) n.push(L[t][r][i].channel);
                        return n
                    };
                    r.getNewThreadCount = function(e, n) {
                        var t, r;
                        return null !== (r = null === (t = D[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, n) {
                        var t, r, l, o;
                        return i().size(null !== (l = null === (t = L[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== l ? l : {}) + i().size(null !== (o = null === (r = M[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== o ? o : {})
                    };
                    return t
                }(o.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const ue = new ae(a.Z, {
                CONNECTION_OPEN: R,
                OVERLAY_INITIALIZE: R,
                THREAD_LIST_SYNC: function(e) {
                    return G(e.guildId)
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                SEARCH_FINISH: R,
                GUILD_CREATE: function(e) {
                    return G(e.guild.id)
                },
                GUILD_DELETE: R,
                CURRENT_USER_UPDATE: R,
                THREAD_CREATE: H,
                THREAD_UPDATE: H,
                THREAD_DELETE: H,
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var l, o = n[Symbol.iterator](); !(t = (l = o.next()).done); t = !0) {
                            var a = l.value;
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
                            t || null == o.return || o.return()
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
                        if (n.guild_id in L && n.parent_id in L[n.guild_id]) {
                            delete L[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in S && n.parent_id in S[n.guild_id]) {
                            delete S[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in P && n.parent_id in P[n.guild_id]) {
                            Object.keys(P[n.guild_id][n.parent_id]).forEach(K);
                            delete P[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in M && n.parent_id in M[n.guild_id]) {
                            delete M[n.guild_id][n.parent_id];
                            t = !0
                        }
                        if (n.guild_id in j && n.parent_id in j[n.guild_id]) {
                            delete j[n.guild_id][n.parent_id];
                            t = !0
                        }
                        t && B(n.guild_id, n.parent_id)
                    }
                    return t
                },
                THREAD_MEMBER_UPDATE: F,
                THREAD_MEMBERS_UPDATE: F,
                LOAD_MESSAGES_SUCCESS: Y,
                MESSAGE_CREATE: Y,
                MESSAGE_DELETE: Y,
                MESSAGE_DELETE_BULK: Y,
                MESSAGE_ACK: Y,
                CHANNEL_ACK: Y,
                CHANNEL_LOCAL_ACK: Y,
                CHANNEL_SELECT: function(e) {
                    Y(e);
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
                NE: () => h,
                ki: () => g,
                Xu: () => O,
                cD: () => m,
                Ek: () => T,
                JQ: () => b,
                C7: () => I,
                tc: () => N,
                kn: () => L,
                $R: () => S,
                RG: () => M,
                xl: () => j,
                Xb: () => D,
                Y: () => U,
                Gu: () => R
            });
            var r = t(496486),
                i = t.n(r),
                l = t(940060),
                o = t(202351),
                a = t(249139),
                u = t(774930),
                s = t(791707),
                c = t(382060),
                d = t(664625),
                f = t(61209),
                E = t(682776),
                p = t(18882),
                _ = t(2590),
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

            function h(e, n) {
                return y((0, o.e7)([E.Z], (function() {
                    var n = e.isForumLikeChannel() ? _.Plq.SEND_MESSAGES : l.Z.combine(_.Plq.CREATE_PUBLIC_THREADS, _.Plq.READ_MESSAGE_HISTORY);
                    return E.Z.can(n, e)
                }), [e]), e, n)
            }

            function g(e, n) {
                var t = e.isForumLikeChannel() ? _.Plq.SEND_MESSAGES : l.Z.combine(_.Plq.CREATE_PUBLIC_THREADS, _.Plq.READ_MESSAGE_HISTORY);
                return y(E.Z.can(t, e), e, n)
            }

            function O(e) {
                var n = (0, o.e7)([E.Z], (function() {
                    return E.Z.can(l.Z.combine(_.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === _.d4z.GUILD_TEXT && y(n, e)
            }

            function m(e) {
                var n = h(e),
                    t = O(e);
                return n || t
            }

            function y(e, n, t) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!c.uC.has(n.type)) return !1;
                if (null != t) {
                    if (t.hasFlag(_.iLy.HAS_THREAD)) return !1;
                    if ((0, s.Z)(t)) return !1
                }
                return !0
            }

            function T(e) {
                var n = (0, o.e7)([f.Z], (function() {
                    return f.Z.getChannel(e.id)
                }), [e]);
                return function(e, n, t) {
                    return !!n.hasFlag(_.iLy.HAS_THREAD) && (null != t && !!e)
                }((0, o.e7)([E.Z], (function() {
                    return E.Z.can(_.Plq.VIEW_CHANNEL, n)
                }), [n]), e, n)
            }

            function b(e) {
                return (0, o.cj)([p.Z, E.Z], (function() {
                    var n = p.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        t = p.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = p.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        l = i()(t).some((function(e) {
                            return E.Z.can(_.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        o = i()(n).some((function(e) {
                            return !(e.channel.id in t) && E.Z.can(_.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(r).some((function(e) {
                            return E.Z.can(_.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: l || o || a,
                        hasMoreActiveThreads: a || o
                    }
                }))
            }

            function I(e) {
                var n = (0, o.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    t = (0, o.e7)([E.Z], (function() {
                        return null != n && E.Z.can(_.Plq.MANAGE_THREADS, n)
                    }), [n]),
                    r = (0, o.e7)([d.default], (function() {
                        return d.default.getId()
                    }));
                return null != e && null != n && (!!e.isThread() && (!!t || !e.isLockedThread() && e.ownerId === r))
            }

            function A(e, n) {
                return null != e && n.can(_.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function C(e, n, t) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? t : n)
            }

            function N(e) {
                var n = (0, o.e7)([E.Z], (function() {
                        return A(e, E.Z)
                    })),
                    t = D(e);
                return C(e, n, t)
            }

            function L(e) {
                return C(e, A(e, E.Z), Z(e))
            }

            function S(e) {
                var n, t = (0, o.e7)([E.Z], (function() {
                    return null != e && E.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && t)
            }

            function M(e) {
                var n;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && E.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function j(e) {
                var n = E.Z.can(_.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !n
            }

            function P(e, n) {
                return null != e && n.can(_.Plq.MANAGE_THREADS, e)
            }

            function D(e) {
                return (0, o.e7)([E.Z], (function() {
                    return P(e, E.Z)
                }))
            }

            function Z(e) {
                return P(e, E.Z)
            }

            function U(e) {
                var n = (0, u.Z)(),
                    t = (0, o.e7)([E.Z], (function() {
                        return E.Z.can(_.Plq.CONNECT, e)
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
                var n = D(e);
                return e.isLockedThread() && !n
            }
        },
        606483: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => G
            });
            var r = t(785893),
                i = t(667294),
                l = t(294184),
                o = t.n(l),
                a = t(304548),
                u = t(621647),
                s = t(773011),
                c = t(344832),
                d = t(874049),
                f = t(968449),
                E = t(775173),
                p = t(990554),
                _ = t(107364),
                v = t(750203),
                h = t(124251),
                g = t(473708),
                O = t(459890),
                m = t.n(O);

            function y(e, n) {
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

            function I(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function A(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e) {
                    var n = e.text,
                        t = e.extra;
                    return (0, r.jsxs)(a.FormTitle, {
                        className: m().header,
                        children: [n, t]
                    })
                },
                N = function(e) {
                    var n = e.resolving,
                        t = e.children;
                    return (0, r.jsx)("div", {
                        className: m().content,
                        children: n ? (0, r.jsxs)("div", {
                            className: m().resolvingWrapper,
                            children: [(0, r.jsx)("div", {
                                className: m().resolving,
                                children: (0, r.jsx)("div", {
                                    className: m().resolvingBackground
                                })
                            }), (0, r.jsx)("div", {
                                className: m().resolvingFakeButton,
                                children: (0, r.jsx)("div", {
                                    className: m().resolvingBackground
                                })
                            })]
                        }) : t
                    })
                },
                L = function(e) {
                    var n, t = e.application,
                        i = e.guild,
                        l = e.channel,
                        c = e.onClick,
                        d = e.expired,
                        E = void 0 !== d && d,
                        _ = e.user,
                        g = e.className,
                        O = null !== (n = (0, s.ZP)(l)) && void 0 !== n ? n : "",
                        y = f.QK.useSetting();
                    if (E) return (0, r.jsx)("div", {
                        className: m().guildIconExpired
                    });
                    var T = null == i || null != i.icon,
                        b = o()((0, p.l)(m(), "guildIcon", T ? "Image" : "", null != c ? "Joined" : ""), g);
                    return null != t ? (0, r.jsx)(v.Z, {
                        game: t,
                        onClick: c,
                        size: m().applicationIcon,
                        className: b
                    }) : null != i ? (0, r.jsx)(h.Z, {
                        onClick: c,
                        active: !0,
                        guild: i,
                        className: b,
                        animate: y
                    }) : null != l ? (0, r.jsx)(a.Avatar, {
                        onClick: c,
                        src: (0, u.x)(l),
                        size: a.AvatarSizes.SIZE_56,
                        className: b,
                        "aria-label": O
                    }) : null != _ ? (0, r.jsx)(a.Avatar, {
                        onClick: c,
                        src: _.getAvatarURL(null, 56),
                        size: a.AvatarSizes.SIZE_56,
                        className: b,
                        "aria-label": O
                    }) : null
                },
                S = function(e) {
                    var n = e.title,
                        t = e.onClick,
                        i = e.expired,
                        l = e.children,
                        o = (0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: (0, p.l)(m(), "inviteDestination", i ? "Expired" : null != t ? "Joined" : ""),
                            children: n
                        });
                    return (0, r.jsxs)(_.Z, {
                        className: m().guildInfo,
                        direction: _.Z.Direction.VERTICAL,
                        justify: _.Z.Justify.CENTER,
                        children: [null == t ? o : (0, r.jsx)(a.Clickable, {
                            onClick: t,
                            children: o
                        }), (0, r.jsx)(a.Text, {
                            tag: "strong",
                            className: m().guildDetail,
                            variant: "text-sm/normal",
                            children: l
                        })]
                    })
                },
                M = function(e) {
                    var n = e.membersOnline,
                        t = e.members,
                        i = [];
                    null != n && n > 0 && i.push((0, r.jsxs)("div", {
                        className: m().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: m().statusOnline
                        }), (0, r.jsx)("span", {
                            className: m().count,
                            children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }, "onlineCount"));
                    null != t && i.push((0, r.jsxs)("div", {
                        className: m().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: m().statusOffline
                        }), (0, r.jsx)("span", {
                            className: m().count,
                            children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount"));
                    return (0, r.jsx)("div", {
                        className: m().statusCounts,
                        children: i
                    })
                },
                j = function(e) {
                    var n = e.channel,
                        t = e.guild,
                        i = (0, c.KS)(n, t);
                    return null == n || null == i ? null : (0, r.jsxs)("div", {
                        className: m().channel,
                        children: [(0, r.jsx)(i, {
                            className: m().channelIcon,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)("span", {
                            className: m().channelName,
                            children: n.name
                        })]
                    })
                },
                P = function(e) {
                    var n = e.children,
                        t = e.onClick,
                        i = e.className,
                        l = e.isDisabled,
                        u = I(e, ["children", "onClick", "className", "isDisabled"]);
                    return (0, r.jsx)(a.Button, b(function(e) {
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
                    }({}, u), {
                        disabled: l,
                        onClick: t,
                        size: m().buttonSize,
                        className: o()(m().button, i),
                        children: n
                    }))
                };
            P.Colors = a.Button.Colors;
            P.Looks = a.Button.Looks;
            P.defaultProps = {
                className: null,
                isDisabled: !1
            };
            var D = function(e) {
                    var n = e.children,
                        t = e.className,
                        i = e.containerRef;
                    return (0, r.jsx)("div", {
                        ref: i,
                        className: o()(m().wrapper, t),
                        children: n
                    })
                },
                Z = function(e) {
                    var n = e.guild,
                        t = A(i.useState(!1), 2),
                        l = t[0],
                        a = t[1],
                        u = E.ZP.getGuildSplashURL({
                            id: n.id,
                            splash: n.splash,
                            size: 400 * (0, d.x_)()
                        });
                    return null == u ? null : (0, r.jsx)("div", {
                        className: m().inviteSplash,
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: o()(m().inviteSplashImage, T({}, m().inviteSplashImageLoaded, l)),
                            onLoad: function() {
                                return a(!0)
                            }
                        })
                    })
                },
                U = function(e) {
                    var n = e.guild;
                    return (0, r.jsx)("div", {
                        className: m().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: m().guildName,
                            children: n.name
                        })
                    })
                },
                R = function(e) {
                    var n = e.guildTemplate;
                    return (0, r.jsx)("div", {
                        className: m().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: m().guildName,
                            children: n.serializedSourceGuild.name
                        })
                    })
                };
            D.Header = C;
            D.Body = N;
            D.Icon = L;
            D.Info = S;
            D.Data = M;
            D.Channel = j;
            D.Button = P;
            D.GuildSplash = Z;
            D.GuildName = U;
            D.GuildTemplateName = R;
            C.displayName = "InviteButton.Header";
            N.displayName = "InviteButton.Body";
            L.displayName = "InviteButton.Icon";
            S.displayName = "InviteButton.Info";
            M.displayName = "InviteButton.Data";
            j.displayName = "InviteButton.Channel";
            P.displayName = "InviteButton.Button";
            Z.displayName = "InviteButton.GuildSplash";
            U.displayName = "InviteButton.GuildName";
            R.displayName = "InviteButton.GuildTemplateName";
            const G = D
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                l = t(66541),
                o = t(633878);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
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
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const c = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 20 : n,
                    i = e.height,
                    l = void 0 === i ? 20 : i,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = e.foreground,
                    E = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, o.Z)(E)), {
                    width: t,
                    height: l,
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
            }), l.T)
        },
        154451: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                l = t(795308),
                o = t(633878);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
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
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

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

            function f(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const E = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    l = void 0 === i ? 24 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
                    E = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, o.Z)(E)), {
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: u,
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? l.Z.colors.INTERACTIVE_NORMAL : d,
                    E = e.colorClass,
                    p = void 0 === E ? "" : E,
                    _ = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, o.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M3 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        859592: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                l = t(795308),
                o = t(633878);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
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
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

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

            function f(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const E = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 32 : n,
                    i = e.height,
                    l = void 0 === i ? 32 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    s = f(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, o.Z)(s)), {
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? l.Z.colors.INTERACTIVE_NORMAL : d,
                    E = e.colorClass,
                    p = void 0 === E ? "" : E,
                    _ = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, o.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        691797: (e, n, t) => {
            "use strict";
            t.d(n, {
                wS: () => o,
                JG: () => a
            });
            var r = t(482507),
                i = t(120415),
                l = t(310126),
                o = function() {
                    if (i.FB) return null != l.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!o) return !1;
                if (i.FB) {
                    l.ZP.copy(e);
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

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function o(e, n, t, r, i, l, o) {
                try {
                    var a = e[l](o),
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
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = function(e, n) {
                var t, r, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, a])
                    }
                }
            };

            function s(e, n) {
                var t, l, s = a(r.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = a(r.useState(null), 2),
                    E = f[0],
                    p = f[1],
                    _ = (l = (t = function() {
                        var t, r, l;
                        return u(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d(!0);
                                    p(null);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = o.sent();
                                    d(!1);
                                    p(null);
                                    return [2, t];
                                case 3:
                                    r = o.sent();
                                    l = new i.Hx(r);
                                    null == n || n(l);
                                    p(l);
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
                            var l = t.apply(e, n);

                            function a(e) {
                                o(l, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                o(l, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [_, {
                    loading: c,
                    error: E
                }]
            }
        }
    }
]);