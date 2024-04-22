"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  },
  useActiveEvent: function() {
    return h
  },
  useActiveEventsByChannel: function() {
    return m
  },
  useFirstActiveEventChannel: function() {
    return O
  },
  useGuildActiveEvent: function() {
    return G
  },
  useGuildChannelScheduledEvents: function() {
    return D
  },
  useGuildUpcomingEventsNotice: function() {
    return p
  },
  useImminentUpcomingGuildEvents: function() {
    return A
  }
}), n("47120"), n("724458");
var u = n("470079"),
  l = n("442837"),
  i = n("241155"),
  r = n("592125"),
  d = n("984933"),
  a = n("430824"),
  s = n("496675"),
  o = n("70956"),
  c = n("823379"),
  E = n("924301"),
  f = n("658041"),
  v = n("835184"),
  N = n("79874"),
  S = n("854698"),
  C = n("765305"),
  _ = n("981631");
let I = [],
  T = 15 * o.default.Millis.MINUTE;

function g(e, t) {
  return (0, l.useStateFromStoresArray)([a.default, i.default, E.default, s.default, r.default, d.default], () => {
    let n = a.default.getGuild(e);
    if (null == n) return I;
    if (n.hasFeature(_.GuildFeatures.HUB)) {
      var u, l;
      let e = null === (u = d.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id;
      return (null !== (l = i.default.getEventDirectoryEntries(e)) && void 0 !== l ? l : []).map(e => {
        let t = e.scheduledEventId,
          n = E.default.getGuildScheduledEvent(t);
        return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
      }).filter(c.isNotNullish)
    }
    return E.default.getGuildScheduledEventsByIndex(null != t ? t : E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = r.default.getChannel(t);
      return s.default.can(_.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function h(e) {
  return (0, l.useStateFromStores)([E.default, r.default, s.default], () => {
    let t = r.default.getChannel(e);
    if (!s.default.can(_.Permissions.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
    let n = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function m(e) {
  let t = (0, l.useStateFromStoresArray)([E.default], () => E.default.getGuildScheduledEventsForGuild(e), [e]);
  return u.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function p(e) {
  var t, n;
  let u = (t = e, (0, l.useStateFromStoresArray)([E.default, r.default, s.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)).filter(e => {
      if (e.entity_type === C.GuildScheduledEventEntityTypes.NONE || e.status !== C.GuildScheduledEventStatus.SCHEDULED) return !1;
      if (null == e.channel_id) return !0;
      let t = r.default.getChannel(e.channel_id);
      return s.default.can(_.Permissions.VIEW_CHANNEL, t)
    }), [t])),
    i = (0, l.useStateFromStoresObject)([v.default], () => v.default.getAllEventDismissals()),
    d = (0, l.useStateFromStoresObject)([v.default], () => v.default.getAllUpcomingNoticeSeenTimes()),
    o = (0, l.useStateFromStoresObject)([E.default], () => null == u ? {} : u.reduce((e, t) => {
      let n = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: E.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [u]),
    c = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(e)),
    N = null != c && !c.hasFeature(_.GuildFeatures.COMMUNITY) && c.hasFeature(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != u && null != o && N)
    for (let e = 0; e < u.length; e++) {
      ;
      let t = u[e],
        l = i[t.id],
        r = d[t.id],
        a = null !== (n = o[t.id]) && void 0 !== n && n,
        s = (0, f.getNextShownUpcomingEventNoticeType)(t, l, r, a);
      if (null != s) return {
        upcomingEvent: t,
        noticeType: s
      }
    }
}

function G(e) {
  return (0, l.useStateFromStores)([E.default, r.default, s.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === C.GuildScheduledEventEntityTypes.NONE || !(0, E.isGuildScheduledEventActive)(e)) return !1;
    if (null == e.channel_id) return !0;
    let t = r.default.getChannel(e.channel_id);
    return s.default.can(_.Permissions.VIEW_CHANNEL, t)
  }), [e])
}

function D(e) {
  return (0, l.useStateFromStores)([E.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function O(e) {
  return (0, l.useStateFromStores)([r.default, E.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => null != r.default.getChannel(e.channel_id));
    return r.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function A(e) {
  let [t, n] = u.useState(() => Date.now());
  u.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, T);
    return () => clearInterval(e)
  }, []);
  let i = (0, l.useStateFromStores)([E.default], () => null == e ? [] : E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return u.useMemo(() => i.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, N.getEventSchedule)(e), {
      withinStartWindow: u,
      diffMinutes: l
    } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
    return e.status !== C.GuildScheduledEventStatus.ACTIVE && u && l < 15
  }), [i])
}