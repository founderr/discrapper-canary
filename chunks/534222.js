"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  useActiveEvent: function() {
    return I
  },
  useActiveEventsByChannel: function() {
    return _
  },
  useGuildUpcomingEventsNotice: function() {
    return T
  },
  useGuildActiveEvent: function() {
    return x
  },
  useGuildChannelScheduledEvents: function() {
    return D
  },
  useFirstActiveEventChannel: function() {
    return G
  },
  useImminentUpcomingGuildEvents: function() {
    return R
  }
}), n("222007"), n("808653");
var l = n("884691"),
  u = n("446674"),
  i = n("962199"),
  a = n("42203"),
  r = n("923959"),
  s = n("305961"),
  d = n("957255"),
  o = n("718517"),
  c = n("449008"),
  f = n("398604"),
  E = n("49129"),
  v = n("431934"),
  g = n("466148"),
  S = n("822516"),
  h = n("745049"),
  N = n("49111");
let m = [],
  C = 15 * o.default.Millis.MINUTE;

function p(e, t) {
  return (0, u.useStateFromStoresArray)([s.default, i.default, f.default, d.default, a.default, r.default], () => {
    let n = s.default.getGuild(e);
    if (null == n) return m;
    let l = n.hasFeature(N.GuildFeatures.HUB);
    if (l) {
      var u, o;
      let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
        t = null !== (o = i.default.getEventDirectoryEntries(e)) && void 0 !== o ? o : [];
      return t.map(e => {
        let t = e.scheduledEventId,
          n = f.default.getGuildScheduledEvent(t);
        return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
      }).filter(c.isNotNullish)
    }
    let E = f.default.getGuildScheduledEventsByIndex(null != t ? t : f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
    return E.filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = a.default.getChannel(t);
      return d.default.can(N.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function I(e) {
  return (0, u.useStateFromStores)([f.default, a.default, d.default], () => {
    let t = a.default.getChannel(e);
    if (!d.default.can(N.Permissions.VIEW_CHANNEL, t)) return null;
    let n = null == t ? void 0 : t.guild_id;
    if (null == n) return null;
    let l = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return l.length > 0 ? l[0] : null
  }, [e])
}

function _(e) {
  let t = (0, u.useStateFromStoresArray)([f.default], () => f.default.getGuildScheduledEventsForGuild(e), [e]),
    n = l.useMemo(() => {
      let e = new Map;
      return t.forEach(t => {
        let n = t.channel_id;
        null != n && e.set(n, t)
      }), e
    }, [t]);
  return n
}

function T(e) {
  var t, n;
  let l = (t = e, (0, u.useStateFromStoresArray)([f.default, a.default, d.default], () => {
      let e = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
      return e.filter(e => {
        if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || e.status !== h.GuildScheduledEventStatus.SCHEDULED) return !1;
        if (null == e.channel_id) return !0;
        let t = a.default.getChannel(e.channel_id);
        return d.default.can(N.Permissions.VIEW_CHANNEL, t)
      })
    }, [t])),
    i = (0, u.useStateFromStoresObject)([v.default], () => v.default.getAllEventDismissals()),
    r = (0, u.useStateFromStoresObject)([v.default], () => v.default.getAllUpcomingNoticeSeenTimes()),
    s = (0, u.useStateFromStoresObject)([f.default], () => null == l ? {} : l.reduce((e, t) => {
      let n = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: f.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [l]);
  if (null != l && null != s)
    for (let e = 0; e < l.length; e++) {
      ;
      let t = l[e],
        u = i[t.id],
        a = r[t.id],
        d = null !== (n = s[t.id]) && void 0 !== n && n,
        o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, a, d);
      if (null != o) return {
        upcomingEvent: t,
        noticeType: o
      }
    }
}

function x(e) {
  return (0, u.useStateFromStores)([f.default, a.default, d.default], () => {
    let t = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
    return t.find(e => {
      if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || !(0, f.isGuildScheduledEventActive)(e)) return !1;
      if (null == e.channel_id) return !0;
      let t = a.default.getChannel(e.channel_id);
      return d.default.can(N.Permissions.VIEW_CHANNEL, t)
    })
  }, [e])
}

function D(e) {
  return (0, u.useStateFromStores)([f.default], () => f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function G(e) {
  return (0, u.useStateFromStores)([a.default, f.default], () => {
    let t = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
      let t = a.default.getChannel(e.channel_id);
      return null != t
    });
    return a.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function R(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, C);
    return () => clearInterval(e)
  }, []);
  let i = (0, u.useStateFromStores)([f.default], () => null == e ? [] : f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
    a = l.useMemo(() => i.filter(e => {
      let {
        startTime: t,
        endTime: n
      } = (0, g.getEventSchedule)(e), {
        withinStartWindow: l,
        diffMinutes: u
      } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
      return e.status !== h.GuildScheduledEventStatus.ACTIVE && l && u < 15
    }), [i]);
  return a
}