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
                i = n(744564),
                a = n(116404),
                u = n(784426),
                s = n(664625),
                d = n(534681),
                c = n(269300),
                l = n(3155),
                o = n(2590);

            function E(e, t, n, r, i, a, u) {
                try {
                    var s = e[a](u),
                        d = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(d) : Promise.resolve(d).then(r, i)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            E(a, r, i, u, s, "next", e)
                        }

                        function s(e) {
                            E(a, r, i, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var h = function(e, t) {
                var n, r, i, a, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(a);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                a = t.call(e, u)
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
            const f = {
                startEvent: function(e, t) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.ACTIVE
                        }
                    })
                },
                endEvent: function(e, t) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.COMPLETED
                        }
                    })
                },
                joinVoiceEvent: function(e, t) {
                    a.default.selectVoiceChannel(t);
                    (0, u.uL)(o.Z5c.CHANNEL(e, t))
                },
                saveEvent: function(e, t, n, i) {
                    var a = l.pg.has(t.entityType) ? t.channelId : null,
                        u = l._U.has(t.entityType) ? t.entityMetadata : null,
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
                            channel_id: a,
                            entity_metadata: u,
                            broadcast_to_directory_channels: i.broadcastToDirectoryChannels,
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
                        return h(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    n = {
                                        url: o.ANM.GUILD_EVENTS_FOR_GUILD(e),
                                        query: {
                                            with_user_count: t
                                        }
                                    };
                                    return [4, (0, d.Kb)(n)];
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
                        url: o.ANM.GUILD_EVENT(t, e),
                        body: {
                            status: l.p1.CANCELED
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
                    return _((function() {
                        var n, a, u;
                        return h(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    n = c.ZP.hasRsvp(e, t);
                                    a = s.default.getId();
                                    if (n) return [2];
                                    d.label = 1;
                                case 1:
                                    d.trys.push([1, 3, , 4]);
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.put({
                                        url: o.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, d.sent()];
                                case 3:
                                    u = d.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: a,
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
                        var n, a, u;
                        return h(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    n = c.ZP.hasRsvp(e, t);
                                    a = s.default.getId();
                                    if (!n) return [2];
                                    d.label = 1;
                                case 1:
                                    d.trys.push([1, 3, , 4]);
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: a,
                                        guildId: t,
                                        guildEventId: e
                                    });
                                    return [4, r.ZP.delete({
                                        url: o.ANM.USER_GUILD_EVENT(t, e)
                                    })];
                                case 2:
                                    return [2, d.sent()];
                                case 3:
                                    u = d.sent();
                                    i.Z.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: a,
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.rC;
                    return _((function() {
                        var a;
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
                                    a = u.sent();
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
                },
                createGuildEventException: function(e, t, n) {
                    return r.ZP.post({
                        url: o.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
                        body: {
                            original_scheduled_start_time: e.originalScheduledStartTime,
                            scheduled_start_time: e.scheduledStartTime,
                            scheduled_end_time: e.scheduledEndTime,
                            is_canceled: e.isCanceled
                        }
                    })
                },
                updateGuildEventException: function(e, t, n, i) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_EVENT_EXCEPTION(t, n, i),
                        body: {
                            scheduled_start_time: e.scheduledStartTime,
                            scheduled_end_time: e.scheduledEndTime,
                            is_canceled: e.isCanceled
                        }
                    })
                },
                deleteGuildEventException: function(e, t, n) {
                    return r.ZP.delete({
                        url: o.ANM.GUILD_EVENT_EXCEPTION(e, t, n)
                    })
                }
            }
        },
        371188: (e, t, n) => {
            "use strict";
            n.d(t, {
                G3: () => a,
                Ib: () => u,
                ib: () => s,
                ub: () => l,
                v1: () => E,
                me: () => _
            });
            var r = n(730381),
                i = n.n(r);
            n(146464), n(3155);
            var a = 365,
                u = a + 1,
                s = function() {
                    var e = i()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var d = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                c = function(e, t) {
                    return e.diff(t, "days") > 1 ? d(e, t) : e.calendar(t)
                };

            function l(e, t, n) {
                null == n && (n = i()());
                var r = i()(e),
                    a = null != t && "" !== t ? i()(t) : void 0,
                    u = null != t && r.isSame(a, "day");
                return {
                    startDateTimeString: c(r, n),
                    endDateTimeString: null != a ? u ? a.format("LT") : d(a, n) : void 0,
                    currentOrPastEvent: r <= n,
                    upcomingEvent: r <= i()().add(1, "hour"),
                    withinStartWindow: r <= i()().add(15, "minute"),
                    diffMinutes: r.diff(n, "minutes")
                }
            }

            function o(e, t) {
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
                i = (n(667294), n(304548)),
                a = n(116404),
                u = n(832642),
                s = n(443812),
                d = n(890251),
                c = n(242735),
                l = n(201441),
                o = n(473708),
                E = n(347542),
                _ = n.n(E);

            function h(e) {
                var t = e.channel,
                    n = e.transitionState,
                    E = e.onClose,
                    h = (0, s.Dt)(),
                    f = (0, l.qY)(t.id);
                if (null == f) return null;
                var v = function() {
                    a.default.selectVoiceChannel(null);
                    E()
                };
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": h,
                    size: i.ModalSize.SMALL,
                    children: [(0, r.jsxs)(i.ModalContent, {
                        className: _().content,
                        children: [(0, r.jsx)(u.Z, {
                            children: (0, r.jsx)("div", {
                                className: _().iconBackground,
                                children: (0, r.jsx)(d.Z, {
                                    height: 40,
                                    width: 40,
                                    className: _().icon
                                })
                            })
                        }), (0, r.jsx)(i.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: _().title,
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: _().subtitle,
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            color: i.Button.Colors.RED,
                            onClick: function() {
                                c.Z.endEvent(f.id, f.guild_id);
                                v()
                            },
                            children: o.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, r.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
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
                i = (n(667294), n(294184)),
                a = n.n(i),
                u = n(473708),
                s = n(300443),
                d = n.n(s),
                c = n(483683),
                l = n.n(c),
                o = n(63685),
                E = n.n(o);

            function _(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: a()(d().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: E(),
                        className: a()(d().sparkleIcon, d().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: l(),
                        className: a()(d().sparkleIcon, d().sparkleTop)
                    })]
                })
            }
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => u,
                Dt: () => s,
                FG: () => d
            });
            var r = n(873955),
                i = n.n(r),
                a = n(989824),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                s = function() {
                    return (0, a.Z)((function() {
                        return u()
                    }))
                },
                d = function(e) {
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