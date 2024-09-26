n.d(t, {
    BQ: function () {
        return J;
    },
    CQ: function () {
        return m;
    },
    Ld: function () {
        return $;
    },
    Z2: function () {
        return ee;
    },
    bN: function () {
        return p;
    },
    xt: function () {
        return X;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(759174),
    c = n(570140),
    d = n(314897),
    _ = n(271383),
    E = n(709054),
    f = n(765305);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {
    EVENT: 'event',
    EVENT_ACTIVE: 'active',
    EVENT_UPCOMING: 'event-upcoming',
    GUILD_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    GUILD_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING)
};
function m(e) {
    let { id: t, scheduled_start_time: n } = e,
        r = X(e) ? '\0' : '\x01';
    return ''.concat(r, '-').concat(new Date(n).getTime(), '-').concat(t);
}
let I = (e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return null != n && i.push(n), i.push(p.GUILD_EVENT(t)), null != r && i.push(p.CHANNEL_EVENT(r)), X(e) && (i.push(p.EVENT_ACTIVE), i.push(p.GUILD_EVENT_ACTIVE(t)), null != r && i.push(p.CHANNEL_EVENT_ACTIVE(r))), $(e) && (i.push(p.EVENT_UPCOMING), i.push(p.GUILD_EVENT_UPCOMING(t)), null != r && i.push(p.CHANNEL_EVENT_UPCOMING(r))), i;
    },
    T = new u.h(I, m),
    g = 0,
    S = [],
    A = 'SERIES',
    v = {},
    N = {};
function O(e) {
    T.set(e.id, e), (g += 1);
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    T.delete(e), delete v[e], t && delete N[e], (g += 1);
}
function C(e) {
    return null != e ? e : A;
}
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == v[r] && (v[r] = {});
    let i = C(e.guild_scheduled_event_exception_id);
    null == v[r][i] && (v[r][i] = {}), (v[r][i][e.user_id] = e), t && D(e), n && (g += 1);
}
function L(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = C(e.guild_scheduled_event_exception_id),
        s = (null === (n = v[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[e.user_id]) != null,
        l = e.user_id === d.default.getId();
    (s || !l) && (null === (i = v[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[o]) || void 0 === r || delete r[e.user_id], M(e), a && (g += 1));
}
function b(e, t, n) {
    let r = C(t);
    null == N[e] && (N[e] = {}), (N[e][r] = n);
}
function D(e) {
    var t, n;
    let r = C(e.guild_scheduled_event_exception_id),
        i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
        a = i + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? 1 : -1);
    b(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, a);
}
function M(e) {
    var t, n;
    let r = C(e.guild_scheduled_event_exception_id),
        i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
        a = i + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? -1 : 1);
    b(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, a);
}
function P(e) {
    let { guilds: t } = e;
    return T.clear(), (g = 0), (v = {}), (N = {}), S.forEach(O), t.forEach((e) => e.guild_scheduled_events.forEach((e) => O(e))), !0;
}
function U(e) {
    let { guildScheduledEvent: t } = e;
    O(t);
}
function w(e) {
    let { guildId: t, guildScheduledEvents: n } = e,
        r = T.values(p.GUILD_EVENT(t), !0).map((e) => e.id),
        i = n.map((e) => e.id);
    for (let e of (s()
        .difference(r, i)
        .forEach((e) => {
            R(e);
        }),
    n))
        O(e);
    return !0;
}
function x(e) {
    let { guild: t } = e;
    return k(t.id, !1), t.guild_scheduled_events.forEach((e) => O(e)), !0;
}
function G(e) {
    let { guild: t } = e;
    return k(t.id, !0), !0;
}
function k(e, t) {
    T.values(p.GUILD_EVENT(e)).forEach((e) => R(e.id, t));
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return O(t), !0;
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    return R(t.id), !0;
}
function Z(e) {
    let { eventException: t } = e,
        n = T.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return (
        r < 0 ? i.push(t) : (i[r] = t),
        O({
            ...n,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function V(e) {
    let { eventException: t } = e,
        n = T.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
    return (
        O({
            ...n,
            guild_scheduled_event_exceptions: r
        }),
        !0
    );
}
function H(e) {
    let { eventId: t } = e,
        n = T.get(t);
    return (
        null != n &&
        (O({
            ...n,
            guild_scheduled_event_exceptions: []
        }),
        !0)
    );
}
function Y(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => y(e, !1, !1)), (g += 1), !0;
}
function j(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => y(e, !1, !1)), (g += 1), !0;
}
function W(e) {
    var t, n;
    let { userId: r, guildEventId: i, guildId: a, guildEventExceptionId: o, response: s } = e,
        l = C(o),
        u = null === (n = v[i]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[r];
    null != u && L(u, !1);
    let c = _.ZP.getMember(a, r);
    return (
        y({
            user_id: r,
            guild_scheduled_event_id: i,
            member: null != c ? c : void 0,
            guild_scheduled_event_exception_id: o,
            response: s
        }),
        !0
    );
}
function K(e) {
    let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
    L({
        user_id: t,
        guild_scheduled_event_id: n,
        guild_scheduled_event_exception_id: r,
        response: i
    });
}
function z(e) {
    let { eventId: t, counts: n } = e;
    b(t, null, n.eventCount),
        E.default.forEachKey(n.recurrenceCounts, (e) => {
            b(t, e, n.eventCount - n.recurrenceCounts[e]);
        });
}
function q() {
    return T.clear(), !0;
}
function Q(e) {
    let { invite: t } = e,
        n = t.guild_scheduled_event;
    return null != n && (O(n), !0);
}
function X(e) {
    return null != e && (null == e ? void 0 : e.status) === f.p1.ACTIVE;
}
function $(e) {
    return !f.$I.has(e.status);
}
function J(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1000 * t;
}
function ee(e) {
    return null != e && f.$I.has(e.status);
}
class et extends (r = l.ZP.Store) {
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null !== (t = T.get(e)) && void 0 !== t ? t : null;
    }
    getGuildEventCountByIndex(e) {
        return T.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : T.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return T.values(e);
    }
    getRsvpVersion() {
        return g;
    }
    getRsvp(e, t, n) {
        var r, i;
        if (null == e) return null;
        let a = C(t);
        return null === (i = v[e]) || void 0 === i ? void 0 : null === (r = i[a]) || void 0 === r ? void 0 : r[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = d.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            a = (null == r ? void 0 : r.response) === f.gv.INTERESTED,
            o = (null == i ? void 0 : i.response) === f.gv.INTERESTED,
            s = (null == i ? void 0 : i.response) === f.gv.UNINTERESTED;
        return (a && !s) || o;
    }
    getUserCount(e, t) {
        var n, r, i, a;
        if (null == e) return 0;
        let o = null !== (i = null === (n = N[e]) || void 0 === n ? void 0 : n[A]) && void 0 !== i ? i : 0;
        return null == t ? o : o - (null !== (a = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : 0);
    }
    hasUserCount(e, t) {
        var n;
        let r = C(t);
        return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null;
    }
    isActive(e) {
        return null != e && X(T.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(p.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, r;
        if (null == e) return {};
        let i = C(t);
        return null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {};
    }
}
h(et, 'displayName', 'GuildScheduledEventStore'),
    (t.ZP = new et(c.Z, {
        CONNECTION_OPEN: P,
        GUILD_CREATE: x,
        GUILD_DELETE: G,
        FETCH_GUILD_EVENT: U,
        FETCH_GUILD_EVENTS_FOR_GUILD: w,
        GUILD_SCHEDULED_EVENT_CREATE: B,
        GUILD_SCHEDULED_EVENT_UPDATE: B,
        GUILD_SCHEDULED_EVENT_DELETE: F,
        GUILD_SCHEDULED_EVENT_USER_ADD: W,
        GUILD_SCHEDULED_EVENT_USER_REMOVE: K,
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: Y,
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: j,
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: z,
        INVITE_RESOLVE_SUCCESS: Q,
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: Z,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: Z,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: V,
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: H,
        LOGOUT: q
    }));
