"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  useActiveEvent: function() {
    return M
  },
  useActiveEventsByChannel: function() {
    return h
  },
  useGuildUpcomingEventsNotice: function() {
    return p
  },
  useGuildActiveEvent: function() {
    return D
  },
  useGuildChannelScheduledEvents: function() {
    return R
  },
  useFirstActiveEventChannel: function() {
    return C
  },
  useImminentUpcomingGuildEvents: function() {
    return O
  }
}), n("222007"), n("808653");
var l = n("884691"),
  u = n("446674"),
  a = n("962199"),
  d = n("42203"),
  i = n("923959"),
  s = n("305961"),
  r = n("957255"),
  o = n("718517"),
  c = n("449008"),
  E = n("398604"),
  f = n("49129"),
  _ = n("431934"),
  T = n("466148"),
  S = n("822516"),
  v = n("745049"),
  g = n("49111");
let I = [],
  N = 15 * o.default.Millis.MINUTE;

function m(e, t) {
  return (0, u.useStateFromStoresArray)([s.default, a.default, E.default, r.default, d.default, i.default], () => {
    let n = s.default.getGuild(e);
    if (null == n) return I;
    let l = n.hasFeature(g.GuildFeatures.HUB);
    if (l) {
      var u, o;
      let e = null === (u = i.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
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
      let n = d.default.getChannel(t);
      return r.default.can(g.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function M(e) {
  return (0, u.useStateFromStores)([E.default, d.default, r.default], () => {
    let t = d.default.getChannel(e);
    if (!r.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
    let n = null == t ? void 0 : t.guild_id;
    if (null == n) return null;
    let l = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return l.length > 0 ? l[0] : null
  }, [e])
}

function h(e) {
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
  let l = (t = e, (0, u.useStateFromStoresArray)([E.default, d.default, r.default], () => {
      let e = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
      return e.filter(e => {
        if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || e.status !== v.GuildScheduledEventStatus.SCHEDULED) return !1;
        if (null == e.channel_id) return !0;
        let t = d.default.getChannel(e.channel_id);
        return r.default.can(g.Permissions.VIEW_CHANNEL, t)
      })
    }, [t])),
    a = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllEventDismissals()),
    i = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllUpcomingNoticeSeenTimes()),
    s = (0, u.useStateFromStoresObject)([E.default], () => null == l ? {} : l.reduce((e, t) => {
      let n = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: E.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [l]);
  if (null != l && null != s)
    for (let e = 0; e < l.length; e++) {
      ;
      let t = l[e],
        u = a[t.id],
        d = i[t.id],
        r = null !== (n = s[t.id]) && void 0 !== n && n,
        o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, d, r);
      if (null != o) return {
        upcomingEvent: t,
        noticeType: o
      }
    }
}

function D(e) {
  return (0, u.useStateFromStores)([E.default, d.default, r.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
    return t.find(e => {
      if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || !(0, E.isGuildScheduledEventActive)(e)) return !1;
      if (null == e.channel_id) return !0;
      let t = d.default.getChannel(e.channel_id);
      return r.default.can(g.Permissions.VIEW_CHANNEL, t)
    })
  }, [e])
}

function R(e) {
  return (0, u.useStateFromStores)([E.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function C(e) {
  return (0, u.useStateFromStores)([d.default, E.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
      let t = d.default.getChannel(e.channel_id);
      return null != t
    });
    return d.default.getChannel(null == t ? void 0 : t.channel_id)
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
    d = l.useMemo(() => a.filter(e => {
      let {
        startTime: t,
        endTime: n
      } = (0, T.getEventSchedule)(e), {
        withinStartWindow: l,
        diffMinutes: u
      } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
      return e.status !== v.GuildScheduledEventStatus.ACTIVE && l && u < 15
    }), [a]);
  return d
}