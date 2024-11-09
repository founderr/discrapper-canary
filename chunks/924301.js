n.d(t, {
    BQ: function () {
        return P;
    },
    CQ: function () {
        return g;
    },
    Ld: function () {
        return M;
    },
    Z2: function () {
        return k;
    },
    bN: function () {
        return m;
    },
    xt: function () {
        return w;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(759174),
    d = n(570140),
    f = n(314897),
    _ = n(271383),
    h = n(709054),
    p = n(765305);
let m = {
    EVENT: 'event',
    EVENT_ACTIVE: 'active',
    EVENT_UPCOMING: 'event-upcoming',
    GUILD_EVENT: (e) => ''.concat(e, '-').concat(m.EVENT),
    GUILD_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(m.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(m.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => ''.concat(e, '-').concat(m.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(m.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(m.EVENT_UPCOMING)
};
function g(e) {
    let { id: t, scheduled_start_time: n } = e,
        r = w(e) ? '\0' : '\x01';
    return ''.concat(r, '-').concat(new Date(n).getTime(), '-').concat(t);
}
let E = new c.h((e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return null != n && i.push(n), i.push(m.GUILD_EVENT(t)), null != r && i.push(m.CHANNEL_EVENT(r)), w(e) && (i.push(m.EVENT_ACTIVE), i.push(m.GUILD_EVENT_ACTIVE(t)), null != r && i.push(m.CHANNEL_EVENT_ACTIVE(r))), M(e) && (i.push(m.EVENT_UPCOMING), i.push(m.GUILD_EVENT_UPCOMING(t)), null != r && i.push(m.CHANNEL_EVENT_UPCOMING(r))), i;
    }, g),
    v = 0,
    I = [],
    S = 'SERIES',
    T = {},
    b = {};
function y(e) {
    E.set(e.id, e), (v += 1);
}
function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    E.delete(e), delete T[e], t && delete b[e], (v += 1);
}
function N(e) {
    return null != e ? e : S;
}
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == T[r] && (T[r] = {});
    let i = N(e.guild_scheduled_event_exception_id);
    null == T[r][i] && (T[r][i] = {}),
        (T[r][i][e.user_id] = e),
        t &&
            (function (e) {
                var t, n;
                let r = N(e.guild_scheduled_event_exception_id),
                    i = null !== (n = null === (t = b[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                    a = (null != e.guild_scheduled_event_exception_id && e.response === p.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === p.gv.INTERESTED) ? 1 : -1;
                O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + a);
            })(e),
        n && (v += 1);
}
function R(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = N(e.guild_scheduled_event_exception_id),
        o = (null === (n = T[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t[e.user_id]) != null,
        l = e.user_id === f.default.getId();
    (o || !l) &&
        (null === (i = T[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[s]) || void 0 === r || delete r[e.user_id],
        (function (e) {
            var t, n;
            let r = N(e.guild_scheduled_event_exception_id),
                i = null !== (n = null === (t = b[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                a = (null != e.guild_scheduled_event_exception_id && e.response === p.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === p.gv.INTERESTED) ? -1 : 1;
            O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + a);
        })(e),
        a && (v += 1));
}
function O(e, t, n) {
    let r = N(t);
    null == b[e] && (b[e] = {}), (b[e][r] = n);
}
function D(e, t) {
    E.values(m.GUILD_EVENT(e)).forEach((e) => A(e.id, t));
}
function L(e) {
    let { guildScheduledEvent: t } = e;
    return y(t), !0;
}
function x(e) {
    let { eventException: t } = e,
        n = E.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return (
        r < 0 ? i.push(t) : (i[r] = t),
        y({
            ...n,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function w(e) {
    return null != e && (null == e ? void 0 : e.status) === p.p1.ACTIVE;
}
function M(e) {
    return !p.$I.has(e.status);
}
function P(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1000 * t;
}
function k(e) {
    return null != e && p.$I.has(e.status);
}
class U extends (r = u.ZP.Store) {
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null !== (t = E.get(e)) && void 0 !== t ? t : null;
    }
    getGuildEventCountByIndex(e) {
        return E.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : E.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return E.values(e);
    }
    getRsvpVersion() {
        return v;
    }
    getRsvp(e, t, n) {
        var r, i;
        if (null == e) return null;
        let a = N(t);
        return null === (i = T[e]) || void 0 === i ? void 0 : null === (r = i[a]) || void 0 === r ? void 0 : r[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = f.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            a = (null == r ? void 0 : r.response) === p.gv.INTERESTED,
            s = (null == i ? void 0 : i.response) === p.gv.INTERESTED,
            o = (null == i ? void 0 : i.response) === p.gv.UNINTERESTED;
        return (a && !o) || s;
    }
    getUserCount(e, t) {
        var n, r, i, a;
        if (null == e) return 0;
        let s = null !== (i = null === (n = b[e]) || void 0 === n ? void 0 : n[S]) && void 0 !== i ? i : 0;
        return null == t ? s : s - (null !== (a = null === (r = b[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : 0);
    }
    hasUserCount(e, t) {
        var n;
        let r = N(t);
        return (null === (n = b[e]) || void 0 === n ? void 0 : n[r]) != null;
    }
    isActive(e) {
        return null != e && w(E.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(m.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, r;
        if (null == e) return {};
        let i = N(t);
        return null !== (r = null === (n = T[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {};
    }
}
(s = 'GuildScheduledEventStore'),
    (a = 'displayName') in (i = U)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new U(d.Z, {
        CONNECTION_OPEN: function (e) {
            let { guilds: t } = e;
            return E.clear(), (v = 0), (T = {}), (b = {}), I.forEach(y), t.forEach((e) => e.guild_scheduled_events.forEach((e) => y(e))), !0;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return D(t.id, !1), t.guild_scheduled_events.forEach((e) => y(e)), !0;
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return D(t.id, !0), !0;
        },
        FETCH_GUILD_EVENT: function (e) {
            let { guildScheduledEvent: t } = e;
            y(t);
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: t, guildScheduledEvents: n } = e,
                r = E.values(m.GUILD_EVENT(t), !0).map((e) => e.id),
                i = n.map((e) => e.id);
            for (let e of (l()
                .difference(r, i)
                .forEach((e) => {
                    A(e);
                }),
            n))
                y(e);
            return !0;
        },
        GUILD_SCHEDULED_EVENT_CREATE: L,
        GUILD_SCHEDULED_EVENT_UPDATE: L,
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e;
            return A(t.id), !0;
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            var t, n;
            let { userId: r, guildEventId: i, guildId: a, guildEventExceptionId: s, response: o } = e,
                l = N(s),
                u = null === (n = T[i]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[r];
            null != u && R(u, !1);
            let c = _.ZP.getMember(a, r);
            return (
                C({
                    user_id: r,
                    guild_scheduled_event_id: i,
                    member: null != c ? c : void 0,
                    guild_scheduled_event_exception_id: s,
                    response: o
                }),
                !0
            );
        },
        GUILD_SCHEDULED_EVENT_USER_REMOVE: function (e) {
            let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
            R({
                user_id: t,
                guild_scheduled_event_id: n,
                guild_scheduled_event_exception_id: r,
                response: i
            });
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function (e) {
            let { guildScheduledEventUsers: t } = e;
            return t.forEach((e) => C(e, !1, !1)), (v += 1), !0;
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
            let { guildScheduledEventUsers: t } = e;
            return t.forEach((e) => C(e, !1, !1)), (v += 1), !0;
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function (e) {
            let { eventId: t, counts: n } = e;
            O(t, null, n.eventCount),
                h.default.forEachKey(n.recurrenceCounts, (e) => {
                    O(t, e, n.eventCount - n.recurrenceCounts[e]);
                });
        },
        INVITE_RESOLVE_SUCCESS: function (e) {
            let { invite: t } = e,
                n = t.guild_scheduled_event;
            return null != n && (y(n), !0);
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: x,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: x,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
            let { eventException: t } = e,
                n = E.get(t.event_id);
            if (null == n) return !1;
            let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
            return (
                y({
                    ...n,
                    guild_scheduled_event_exceptions: r
                }),
                !0
            );
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
            let { eventId: t } = e,
                n = E.get(t);
            return (
                null != n &&
                (y({
                    ...n,
                    guild_scheduled_event_exceptions: []
                }),
                !0)
            );
        },
        LOGOUT: function () {
            return E.clear(), !0;
        }
    }));
