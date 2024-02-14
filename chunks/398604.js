"use strict";
n.r(t), n.d(t, {
  StaticGuildEventIndexes: function() {
    return _
  },
  scheduledEventSort: function() {
    return E
  },
  isGuildScheduledEventActive: function() {
    return m
  },
  isEventUpcoming: function() {
    return y
  },
  isGuildEventEnded: function() {
    return D
  },
  default: function() {
    return U
  }
}), n("424973"), n("222007");
var r = n("917351"),
  i = n.n(r),
  l = n("446674"),
  u = n("407846"),
  a = n("913144"),
  o = n("271938"),
  s = n("26989"),
  d = n("745049");
let _ = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT: e => "".concat(e, "-").concat(_.EVENT),
  GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
  GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING),
  CHANNEL_EVENT: e => "".concat(e, "-").concat(_.EVENT),
  CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
  CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING)
};

function E(e) {
  let {
    id: t,
    scheduled_start_time: n
  } = e, r = m(e) ? "\x00" : "\x01";
  return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
}
let c = new u.default(e => {
    let {
      guild_id: t,
      entity_id: n,
      channel_id: r
    } = e, i = [t];
    return null != n && i.push(n), i.push(_.GUILD_EVENT(t)), null != r && i.push(_.CHANNEL_EVENT(r)), m(e) && (i.push(_.EVENT_ACTIVE), i.push(_.GUILD_EVENT_ACTIVE(t)), null != r && i.push(_.CHANNEL_EVENT_ACTIVE(r))), y(e) && (i.push(_.EVENT_UPCOMING), i.push(_.GUILD_EVENT_UPCOMING(t)), null != r && i.push(_.CHANNEL_EVENT_UPCOMING(r))), i
  }, E),
  I = 0,
  S = [],
  T = "SERIES",
  f = {},
  N = {};

function p(e) {
  c.set(e.id, e), I += 1
}

function A(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  c.delete(e), delete f[e], t && delete N[e], I += 1
}

function R(e) {
  return null != e ? e : T
}

function C(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = e.guild_scheduled_event_id;
  null == f[r] && (f[r] = {});
  let i = R(e.guild_scheduled_event_exception_id);
  null == f[r][i] && (f[r][i] = {}), f[r][i][e.user_id] = e, t && function(e) {
    var t, n;
    let r = R(e.guild_scheduled_event_exception_id),
      i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
      l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
  }(e), n && (I += 1)
}

function L(e) {
  var t, n, r, i;
  let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    u = R(e.guild_scheduled_event_exception_id),
    a = (null === (n = f[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[e.user_id]) != null,
    s = e.user_id === o.default.getId();
  (a || !s) && (null === (i = f[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[u]) || void 0 === r || delete r[e.user_id], function(e) {
    var t, n;
    let r = R(e.guild_scheduled_event_exception_id),
      i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
      l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
  }(e), l && (I += 1))
}

function O(e, t, n) {
  let r = R(t);
  null == N[e] && (N[e] = {}), N[e][r] = n
}

function h(e, t) {
  c.values(_.GUILD_EVENT(e)).forEach(e => A(e.id, t))
}

function P(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return p(t), !0
}

function g(e) {
  let {
    eventException: t
  } = e, n = c.get(t.event_id);
  if (null == n) return !1;
  let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
    i = [...n.guild_scheduled_event_exceptions];
  return r < 0 ? i.push(t) : i[r] = t, p({
    ...n,
    guild_scheduled_event_exceptions: i
  }), !0
}

function m(e) {
  var t;
  return null != e && (t = (null == e ? void 0 : e.status) === d.GuildScheduledEventStatus.ACTIVE, t)
}

function y(e) {
  return !d.GuildScheduledEventStatusDone.has(e.status)
}

function D(e) {
  return null != e && d.GuildScheduledEventStatusDone.has(e.status)
}
class v extends l.default.Store {
  getGuildScheduledEvent(e) {
    var t;
    return null == e ? null : null !== (t = c.get(e)) && void 0 !== t ? t : null
  }
  getGuildEventCountByIndex(e) {
    return c.size(e)
  }
  getGuildScheduledEventsForGuild(e) {
    return null == e ? [] : c.values(e)
  }
  getGuildScheduledEventsByIndex(e) {
    return c.values(e)
  }
  getRsvpVersion() {
    return I
  }
  getRsvp(e, t, n) {
    var r, i;
    if (null == e) return null;
    let l = R(t);
    return null === (i = f[e]) || void 0 === i ? void 0 : null === (r = i[l]) || void 0 === r ? void 0 : r[n]
  }
  isInterestedInEventRecurrence(e, t) {
    let n = o.default.getId(),
      r = this.getRsvp(e, null, n),
      i = this.getRsvp(e, t, n),
      l = (null == r ? void 0 : r.response) === d.GuildScheduledEventUserResponses.INTERESTED,
      u = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.INTERESTED,
      a = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.UNINTERESTED;
    return l && !a || u
  }
  getUserCount(e, t) {
    var n, r, i, l;
    if (null == e) return 0;
    let u = null !== (i = null === (n = N[e]) || void 0 === n ? void 0 : n[T]) && void 0 !== i ? i : 0;
    if (null == t) return u;
    let a = null !== (l = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== l ? l : 0;
    return u - a
  }
  hasUserCount(e, t) {
    var n;
    let r = R(t);
    return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null
  }
  isActive(e) {
    return null != e && m(c.get(e))
  }
  getActiveEventByChannel(e) {
    if (null == e) return;
    let t = this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e));
    return t[0]
  }
  getUsersForGuildEvent(e, t) {
    var n, r;
    if (null == e) return {};
    let i = R(t);
    return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {}
  }
}
v.displayName = "GuildScheduledEventStore";
var U = new v(a.default, {
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t
    } = e;
    return c.clear(), I = 0, f = {}, N = {}, S.forEach(p), t.forEach(e => e.guild_scheduled_events.forEach(e => p(e))), !0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return h(t.id, !1), t.guild_scheduled_events.forEach(e => p(e)), !0
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return h(t.id, !0), !0
  },
  FETCH_GUILD_EVENT: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    p(t)
  },
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t,
      guildScheduledEvents: n
    } = e, r = c.values(_.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
    for (let e of (i.difference(r, l).forEach(e => {
        A(e)
      }), n)) p(e);
    return !0
  },
  GUILD_SCHEDULED_EVENT_CREATE: P,
  GUILD_SCHEDULED_EVENT_UPDATE: P,
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    return A(t.id), !0
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    var t, n;
    let {
      userId: r,
      guildEventId: i,
      guildId: l,
      guildEventExceptionId: u,
      response: a
    } = e, o = R(u), d = null === (n = f[i]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[r];
    null != d && L(d, !1);
    let _ = s.default.getMember(l, r);
    return C({
      user_id: r,
      guild_scheduled_event_id: i,
      member: null != _ ? _ : {
        guildId: l
      },
      guild_scheduled_event_exception_id: u,
      response: a
    }), !0
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
    let {
      userId: t,
      guildEventId: n,
      guildEventExceptionId: r,
      response: i
    } = e;
    L({
      user_id: t,
      guild_scheduled_event_id: n,
      guild_scheduled_event_exception_id: r,
      response: i
    })
  },
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => C(e, !1, !1)), I += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => C(e, !1, !1)), I += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      eventId: t,
      counts: n
    } = e;
    for (let e in O(t, null, n.eventCount), n.recurrenceCounts) O(t, e, n.eventCount - n.recurrenceCounts[e])
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
    let {
      invite: t
    } = e, n = t.guild_scheduled_event;
    return null != n && (p(n), !0)
  },
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: g,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: g,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
    let {
      eventException: t
    } = e, n = c.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
    return p({
      ...n,
      guild_scheduled_event_exceptions: r
    }), !0
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
    let {
      eventId: t
    } = e, n = c.get(t);
    return null != n && (p({
      ...n,
      guild_scheduled_event_exceptions: []
    }), !0)
  },
  LOGOUT: function() {
    return c.clear(), !0
  }
})