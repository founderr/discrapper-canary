(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44235], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        242735: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                a = n(744564),
                i = n(116404),
                u = n(784426),
                s = n(664625),
                c = n(534681),
                l = n(269300),
                d = n(3155),
                o = n(2590);

            function E(e, t, n, r, a, i, u) {
                try {
                    var s = e[i](u),
                        c = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function u(e) {
                            E(i, r, a, u, s, "next", e)
                        }

                        function s(e) {
                            E(i, r, a, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var h = function(e, t) {
                var n, r, a, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = u.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < a[1]) {
                                            u.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && u.label < a[2]) {
                                            u.label = a[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        a[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };
            const f = {
                startEvent: function(e, t) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: d.p1.ACTIVE
                        }
                    })
                },
                endEvent: function(e, t) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: d.p1.COMPLETED
                        }
                    })
                },
                joinVoiceEvent: function(e, t) {
                    i.default.selectVoiceChannel(t);
                    (0, u.uL)(o.Z5c.CHANNEL(e, t))
                },
                saveEvent: function(e, t, n, a) {
                    var i = d.pg.has(t.entityType) ? t.channelId : null,
                        u = d._U.has(t.entityType) ? t.entityMetadata : null,
                        s = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image;
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT(n, e),
                        body: {
                            name: t.name,
                            description: t.description,
                            image: s,
                            privacy_level: t.privacyLevel,
                            scheduled_start_time: t.scheduledStartTime,
                            scheduled_end_time: t.scheduledEndTime,
                            entity_type: t.entityType,
                            channel_id: i,
                            entity_metadata: u,
                            broadcast_to_directory_channels: a.broadcastToDirectoryChannels,
                            auto_start: t.autoStart
                        }
                    })
                },
                createGuildEvent: function(e, t, n) {
                    return r.ZP.post({
                        url: o.ANM.GUILD_EVENTS_FOR_GUILD(t),
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
                    return _((function() {
                        var n, r;
                        return h(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    n = {
                                        url: o.ANM.GUILD_EVENTS_FOR_GUILD(e),
                                        query: {
                                            with_user_count: t
                                        }
                                    };
                                    return [4, (0, c.Kb)(n)];
                                case 1:
                                    r = i.sent().body;
                                    a.Z.dispatch({
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
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: d.p1.CANCELED
                        }
                    })
                },
                deleteGuildEvent: function(e, t) {
                    return r.ZP.delete({
                        url: o.ANM.GUILD_EVENT(t, e)
                    })
                },
                getGuildEventsForCurrentUser: function(e) {
                    return _((function() {
                        var t;
                        return h(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, r.ZP.get({
                                        url: o.ANM.USER_GUILD_EVENTS,
                                        query: {
                                            guild_ids: [e]
                                        }
                                    })];
                                case 1:
                                    t = n.sent().body;
                                    a.Z.dispatch({
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
                    return _((function() {
                        var n, i, u;
                        return h(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    n = l.ZP.hasRsvp(e, t);
                                    i = s.default.getId();
                                    if (n) return [2];
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 3, , 4]);
                                    a.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: i,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.put({
                                        url: o.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, c.sent()];
                                case 3:
                                    u = c.sent();
                                    a.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: i,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    throw u;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                deleteRsvpForGuildEvent: function(e, t) {
                    return _((function() {
                        var n, i, u;
                        return h(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    n = l.ZP.hasRsvp(e, t);
                                    i = s.default.getId();
                                    if (!n) return [2];
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 3, , 4]);
                                    a.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: i,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.delete({
                                        url: o.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, c.sent()];
                                case 3:
                                    u = c.sent();
                                    a.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: i,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    throw u;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchUsersForGuildEvent: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.rC;
                    return _((function() {
                        var i;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return null == e || null == t ? [2, []] : [4, r.ZP.get({
                                        url: o.ANM.GUILD_EVENT_USERS(t, e),
                                        query: {
                                            limit: n,
                                            with_member: !0
                                        }
                                    })];
                                case 1:
                                    i = u.sent();
                                    a.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                                        guildEventId: e,
                                        rsvpUsers: i.body.users,
                                        guildId: t
                                    });
                                    return [2, i.body.users]
                            }
                        }))
                    }))()
                }
            }
        },
        371188: (e, t, n) => {
            "use strict";
            n.d(t, {
                G3: () => i,
                Ib: () => u,
                ib: () => s,
                ub: () => d,
                v1: () => E,
                me: () => _
            });
            var r = n(730381),
                a = n.n(r);
            n(146464), n(3155);
            var i = 365,
                u = i + 1,
                s = function() {
                    var e = a()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var c = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                l = function(e, t) {
                    return e.diff(t, "days") > 1 ? c(e, t) : e.calendar(t)
                };

            function d(e, t, n) {
                null == n && (n = a()());
                var r = a()(e),
                    i = null != t && "" !== t ? a()(t) : void 0,
                    u = null != t && r.isSame(i, "day");
                return {
                    startDateTimeString: l(r, n),
                    endDateTimeString: null != i ? u ? i.format("LT") : c(i, n) : void 0,
                    currentOrPastEvent: r <= n,
                    upcomingEvent: r <= a()().add(1, "hour"),
                    withinStartWindow: r <= a()().add(15, "minute"),
                    diffMinutes: r.diff(n, "minutes")
                }
            }

            function o(e, t) {
                var n;
                if (null != e) {
                    n = {
                        startDate: a()(e),
                        endDate: void 0
                    };
                    null != t && (n.endDate = a()(t))
                }
                return n
            }

            function E(e) {
                return o(e.scheduledStartTime, e.scheduledEndTime)
            }

            function _(e) {
                return o(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        99271: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(116404),
                u = n(832642),
                s = n(443812),
                c = n(890251),
                l = n(242735),
                d = n(201441),
                o = n(473708),
                E = n(347542),
                _ = n.n(E);

            function h(e) {
                var t = e.channel,
                    n = e.transitionState,
                    E = e.onClose,
                    h = (0, s.Dt)(),
                    f = (0, d.qY)(t.id);
                if (null == f) return null;
                var v = function() {
                    i.default.selectVoiceChannel(null);
                    E()
                };
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": h,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalContent, {
                        className: _().content,
                        children: [(0, r.jsx)(u.Z, {
                            children: (0, r.jsx)("div", {
                                className: _().iconBackground,
                                children: (0, r.jsx)(c.Z, {
                                    height: 40,
                                    width: 40,
                                    className: _().icon
                                })
                            })
                        }), (0, r.jsx)(a.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: _().title,
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: _().subtitle,
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            color: a.Button.Colors.RED,
                            onClick: function() {
                                l.Z.endEvent(f.id, f.guild_id);
                                v()
                            },
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, r.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            className: _().cancelButton,
                            onClick: v,
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                a = (n(667294),
                    n(294184)),
                i = n.n(a),
                u = n(473708),
                s = n(300443),
                c = n.n(s),
                l = n(483683),
                d = n.n(l),
                o = n(63685),
                E = n.n(o);

            function _(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(c().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: E(),
                        className: i()(c().sparkleIcon, c().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: i()(c().sparkleIcon, c().sparkleTop)
                    })]
                })
            }
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => u,
                Dt: () => s,
                FG: () => c
            });
            var r = n(873955),
                a = n.n(r),
                i = n(989824),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a()(e)
                },
                s = function() {
                    return (0, i.Z)((function() {
                        return u()
                    }))
                },
                c = function(e) {
                    return (0, e.children)(s())
                }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                a = {};

            function i(e) {
                var t = (0, r.useRef)(a);
                t.current === a && (t.current = e());
                return t.current
            }
        }
    }
]);