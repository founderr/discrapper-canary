"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  useActiveEvent: function() {
    return g
  },
  useActiveEventsByChannel: function() {
    return p
  },
  useGuildUpcomingEventsNotice: function() {
    return D
  },
  useGuildActiveEvent: function() {
    return m
  },
  useGuildChannelScheduledEvents: function() {
    return G
  },
  useFirstActiveEventChannel: function() {
    return y
  },
  useImminentUpcomingGuildEvents: function() {
    return U
  }
}), n("222007"), n("808653");
var u = n("884691"),
  l = n("446674"),
  i = n("962199"),
  d = n("42203"),
  r = n("923959"),
  a = n("305961"),
  s = n("957255"),
  E = n("718517"),
  c = n("449008"),
  o = n("398604"),
  f = n("49129"),
  _ = n("431934"),
  v = n("466148"),
  S = n("822516"),
  N = n("745049"),
  I = n("49111");
let T = [],
  C = 15 * E.default.Millis.MINUTE;

function h(e, t) {
  return (0, l.useStateFromStoresArray)([a.default, i.default, o.default, s.default, d.default, r.default], () => {
    let n = a.default.getGuild(e);
    if (null == n) return T;
    let u = n.hasFeature(I.GuildFeatures.HUB);
    if (u) {
      var l, E;
      let e = null === (l = r.default.getDefaultChannel(n.id)) || void 0 === l ? void 0 : l.id,
        t = null !== (E = i.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
      return t.map(e => {
        let t = e.scheduledEventId,
          n = o.default.getGuildScheduledEvent(t);
        return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
      }).filter(c.isNotNullish)
    }
    let f = o.default.getGuildScheduledEventsByIndex(null != t ? t : o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
    return f.filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = d.default.getChannel(t);
      return s.default.can(I.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function g(e) {
  return (0, l.useStateFromStores)([o.default, d.default, s.default], () => {
    let t = d.default.getChannel(e);
    if (!s.default.can(I.Permissions.VIEW_CHANNEL, t)) return null;
    let n = null == t ? void 0 : t.guild_id;
    if (null == n) return null;
    let u = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return u.length > 0 ? u[0] : null
  }, [e])
}

function p(e) {
  let t = (0, l.useStateFromStoresArray)([o.default], () => o.default.getGuildScheduledEventsForGuild(e), [e]),
    n = u.useMemo(() => {
      let e = new Map;
      return t.forEach(t => {
        let n = t.channel_id;
        null != n && e.set(n, t)
      }), e
    }, [t]);
  return n
}

function D(e) {
  var t, n;
  let u = (t = e, (0, l.useStateFromStoresArray)([o.default, d.default, s.default], () => {
      let e = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
      return e.filter(e => {
        if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
        if (null == e.channel_id) return !0;
        let t = d.default.getChannel(e.channel_id);
        return s.default.can(I.Permissions.VIEW_CHANNEL, t)
      })
    }, [t])),
    i = (0, l.useStateFromStoresObject)([_.default], () => _.default.getAllEventDismissals()),
    r = (0, l.useStateFromStoresObject)([_.default], () => _.default.getAllUpcomingNoticeSeenTimes()),
    a = (0, l.useStateFromStoresObject)([o.default], () => null == u ? {} : u.reduce((e, t) => {
      let n = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: o.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [u]);
  if (null != u && null != a)
    for (let e = 0; e < u.length; e++) {
      ;
      let t = u[e],
        l = i[t.id],
        d = r[t.id],
        s = null !== (n = a[t.id]) && void 0 !== n && n,
        E = (0, f.getNextShownUpcomingEventNoticeType)(t, l, d, s);
      if (null != E) return {
        upcomingEvent: t,
        noticeType: E
      }
    }
}

function m(e) {
  return (0, l.useStateFromStores)([o.default, d.default, s.default], () => {
    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
    return t.find(e => {
      if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, o.isGuildScheduledEventActive)(e)) return !1;
      if (null == e.channel_id) return !0;
      let t = d.default.getChannel(e.channel_id);
      return s.default.can(I.Permissions.VIEW_CHANNEL, t)
    })
  }, [e])
}

function G(e) {
  return (0, l.useStateFromStores)([o.default], () => o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function y(e) {
  return (0, l.useStateFromStores)([d.default, o.default], () => {
    let t = o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
      let t = d.default.getChannel(e.channel_id);
      return null != t
    });
    return d.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function U(e) {
  let [t, n] = u.useState(() => Date.now());
  u.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, C);
    return () => clearInterval(e)
  }, []);
  let i = (0, l.useStateFromStores)([o.default], () => null == e ? [] : o.default.getGuildScheduledEventsByIndex(o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
    d = u.useMemo(() => i.filter(e => {
      let {
        startTime: t,
        endTime: n
      } = (0, v.getEventSchedule)(e), {
        withinStartWindow: u,
        diffMinutes: l
      } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
      return e.status !== N.GuildScheduledEventStatus.ACTIVE && u && l < 15
    }), [i]);
  return d
}