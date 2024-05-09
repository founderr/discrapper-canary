"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  },
  useActiveEvent: function() {
    return m
  },
  useActiveEventsByChannel: function() {
    return h
  },
  useFirstActiveEventChannel: function() {
    return O
  },
  useGuildActiveEvent: function() {
    return p
  },
  useGuildChannelScheduledEvents: function() {
    return D
  },
  useGuildUpcomingEventsNotice: function() {
    return G
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
  E = n("70956"),
  o = n("823379"),
  c = n("924301"),
  f = n("658041"),
  N = n("835184"),
  S = n("79874"),
  v = n("854698"),
  _ = n("765305"),
  I = n("981631");
let T = [],
  C = 15 * E.default.Millis.MINUTE;

function g(e, t) {
  return (0, l.useStateFromStoresArray)([a.default, i.default, c.default, s.default, r.default, d.default], () => {
    let n = a.default.getGuild(e);
    if (null == n) return T;
    if (n.hasFeature(I.GuildFeatures.HUB)) {
      var u, l;
      let e = null === (u = d.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id;
      return (null !== (l = i.default.getEventDirectoryEntries(e)) && void 0 !== l ? l : []).map(e => {
        let t = e.scheduledEventId,
          n = c.default.getGuildScheduledEvent(t);
        return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
      }).filter(o.isNotNullish)
    }
    return c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = r.default.getChannel(t);
      return s.default.can(I.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function m(e) {
  return (0, l.useStateFromStores)([c.default, r.default, s.default], () => {
    let t = r.default.getChannel(e);
    if (!s.default.can(I.Permissions.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
    let n = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function h(e) {
  let t = (0, l.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]);
  return u.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function G(e) {
  var t, n;
  let u = (t = e, (0, l.useStateFromStoresArray)([c.default, r.default, s.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)).filter(e => {
      if (e.entity_type === _.GuildScheduledEventEntityTypes.NONE || e.status !== _.GuildScheduledEventStatus.SCHEDULED) return !1;
      if (null == e.channel_id) return !0;
      let t = r.default.getChannel(e.channel_id);
      return s.default.can(I.Permissions.VIEW_CHANNEL, t)
    }), [t])),
    i = (0, l.useStateFromStoresObject)([N.default], () => N.default.getAllEventDismissals()),
    d = (0, l.useStateFromStoresObject)([N.default], () => N.default.getAllUpcomingNoticeSeenTimes()),
    E = (0, l.useStateFromStoresObject)([c.default], () => null == u ? {} : u.reduce((e, t) => {
      let n = (0, v.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [u]),
    o = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(e)),
    S = null != o && !o.hasFeature(I.GuildFeatures.COMMUNITY) && o.hasFeature(I.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != u && null != E && S)
    for (let e = 0; e < u.length; e++) {
      ;
      let t = u[e],
        l = i[t.id],
        r = d[t.id],
        a = null !== (n = E[t.id]) && void 0 !== n && n,
        s = (0, f.getNextShownUpcomingEventNoticeType)(t, l, r, a);
      if (null != s) return {
        upcomingEvent: t,
        noticeType: s
      }
    }
}

function p(e) {
  return (0, l.useStateFromStores)([c.default, r.default, s.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === _.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
    if (null == e.channel_id) return !0;
    let t = r.default.getChannel(e.channel_id);
    return s.default.can(I.Permissions.VIEW_CHANNEL, t)
  }), [e])
}

function D(e) {
  return (0, l.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function O(e) {
  return (0, l.useStateFromStores)([r.default, c.default], () => {
    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => null != r.default.getChannel(e.channel_id));
    return r.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function A(e) {
  let [t, n] = u.useState(() => Date.now());
  u.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, C);
    return () => clearInterval(e)
  }, []);
  let i = (0, l.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return u.useMemo(() => i.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, S.getEventSchedule)(e), {
      withinStartWindow: u,
      diffMinutes: l
    } = (0, v.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
    return e.status !== _.GuildScheduledEventStatus.ACTIVE && u && l < 15
  }), [i])
}