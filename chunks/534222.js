"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  useActiveEvent: function() {
    return h
  },
  useActiveEventsByChannel: function() {
    return M
  },
  useGuildUpcomingEventsNotice: function() {
    return p
  },
  useGuildActiveEvent: function() {
    return C
  },
  useGuildChannelScheduledEvents: function() {
    return R
  },
  useFirstActiveEventChannel: function() {
    return D
  },
  useImminentUpcomingGuildEvents: function() {
    return O
  }
}), n("222007"), n("808653");
var l = n("884691"),
  u = n("446674"),
  a = n("962199"),
  i = n("42203"),
  d = n("923959"),
  r = n("305961"),
  s = n("957255"),
  o = n("718517"),
  c = n("449008"),
  E = n("398604"),
  f = n("49129"),
  _ = n("431934"),
  T = n("466148"),
  v = n("822516"),
  S = n("745049"),
  g = n("49111");
let I = [],
  N = 15 * o.default.Millis.MINUTE;

function m(e, t) {
  return (0, u.useStateFromStoresArray)([r.default, a.default, E.default, s.default, i.default, d.default], () => {
    let n = r.default.getGuild(e);
    if (null == n) return I;
    let l = n.hasFeature(g.GuildFeatures.HUB);
    if (l) {
      var u, o;
      let e = null === (u = d.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
        t = null !== (o = a.default.getEventDirectoryEntries(e)) && void 0 !== o ? o : [];
      return t.map(e => {
        let t = e.scheduledEventId,
          n = E.default.getGuildScheduledEvent(t);
        return null != n ? n : a.default.getCachedGuildScheduledEventById(t)
      }).filter(c.isNotNullish)
    }
    let f = E.default.getGuildScheduledEventsByIndex(null != t ? t : E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
    return f.filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = i.default.getChannel(t);
      return s.default.can(g.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function h(e) {
  return (0, u.useStateFromStores)([E.default, i.default, s.default], () => {
    let t = i.default.getChannel(e);
    if (!s.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
    let n = null == t ? void 0 : t.guild_id;
    if (null == n) return null;
    let l = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return l.length > 0 ? l[0] : null
  }, [e])
}

function M(e) {
  let t = (0, u.useStateFromStoresArray)([E.default], () => E.default.getGuildScheduledEventsForGuild(e), [e]),
    n = l.useMemo(() => {
      let e = new Map;
      return t.forEach(t => {
        let n = t.channel_id;
        null != n && e.set(n, t)
      }), e
    }, [t]);
  return n
}

function p(e) {
  var t, n;
  let l = (t = e, (0, u.useStateFromStoresArray)([E.default, i.default, s.default], () => {
      let e = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
      return e.filter(e => {
        if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || e.status !== S.GuildScheduledEventStatus.SCHEDULED) return !1;
        if (null == e.channel_id) return !0;
        let t = i.default.getChannel(e.channel_id);
        return s.default.can(g.Permissions.VIEW_CHANNEL, t)
      })
    }, [t])),
    a = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllEventDismissals()),
    d = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllUpcomingNoticeSeenTimes()),
    r = (0, u.useStateFromStoresObject)([E.default], () => null == l ? {} : l.reduce((e, t) => {
      let n = (0, v.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: E.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [l]);
  if (null != l && null != r)
    for (let e = 0; e < l.length; e++) {
      ;
      let t = l[e],
        u = a[t.id],
        i = d[t.id],
        s = null !== (n = r[t.id]) && void 0 !== n && n,
        o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, i, s);
      if (null != o) return {
        upcomingEvent: t,
        noticeType: o
      }
    }
}

function C(e) {
  return (0, u.useStateFromStores)([E.default, i.default, s.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
    return t.find(e => {
      if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || !(0, E.isGuildScheduledEventActive)(e)) return !1;
      if (null == e.channel_id) return !0;
      let t = i.default.getChannel(e.channel_id);
      return s.default.can(g.Permissions.VIEW_CHANNEL, t)
    })
  }, [e])
}

function R(e) {
  return (0, u.useStateFromStores)([E.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function D(e) {
  return (0, u.useStateFromStores)([i.default, E.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
      let t = i.default.getChannel(e.channel_id);
      return null != t
    });
    return i.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function O(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, N);
    return () => clearInterval(e)
  }, []);
  let a = (0, u.useStateFromStores)([E.default], () => null == e ? [] : E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
    i = l.useMemo(() => a.filter(e => {
      let {
        startTime: t,
        endTime: n
      } = (0, T.getEventSchedule)(e), {
        withinStartWindow: l,
        diffMinutes: u
      } = (0, v.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
      return e.status !== S.GuildScheduledEventStatus.ACTIVE && l && u < 15
    }), [a]);
  return i
}