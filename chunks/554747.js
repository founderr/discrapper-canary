"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  },
  useActiveEvent: function() {
    return v
  },
  useActiveEventsByChannel: function() {
    return D
  },
  useFirstActiveEventChannel: function() {
    return O
  },
  useGuildActiveEvent: function() {
    return G
  },
  useGuildChannelScheduledEvents: function() {
    return L
  },
  useGuildUpcomingEventsNotice: function() {
    return I
  },
  useImminentUpcomingGuildEvents: function() {
    return A
  }
}), l("47120"), l("724458");
var n = l("470079"),
  u = l("442837"),
  a = l("241155"),
  d = l("592125"),
  s = l("984933"),
  i = l("430824"),
  r = l("496675"),
  o = l("70956"),
  E = l("823379"),
  f = l("924301"),
  c = l("658041"),
  N = l("835184"),
  _ = l("79874"),
  S = l("854698"),
  T = l("765305"),
  g = l("981631");
let h = [],
  C = 15 * o.default.Millis.MINUTE;

function m(e, t) {
  return (0, u.useStateFromStoresArray)([i.default, a.default, f.default, r.default, d.default, s.default], () => {
    let l = i.default.getGuild(e);
    if (null == l) return h;
    if (l.hasFeature(g.GuildFeatures.HUB)) {
      var n, u;
      let e = null === (n = s.default.getDefaultChannel(l.id)) || void 0 === n ? void 0 : n.id;
      return (null !== (u = a.default.getEventDirectoryEntries(e)) && void 0 !== u ? u : []).map(e => {
        let t = e.scheduledEventId,
          l = f.default.getGuildScheduledEvent(t);
        return null != l ? l : a.default.getCachedGuildScheduledEventById(t)
      }).filter(E.isNotNullish)
    }
    return f.default.getGuildScheduledEventsByIndex(null != t ? t : f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(l.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let l = d.default.getChannel(t);
      return r.default.can(g.Permissions.VIEW_CHANNEL, l)
    })
  }, [t, e])
}

function v(e) {
  return (0, u.useStateFromStores)([f.default, d.default, r.default], () => {
    let t = d.default.getChannel(e);
    if (!r.default.can(g.Permissions.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
    let l = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return l.length > 0 ? l[0] : null
  }, [e])
}

function D(e) {
  let t = (0, u.useStateFromStoresArray)([f.default], () => f.default.getGuildScheduledEventsForGuild(e), [e]);
  return n.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let l = t.channel_id;
      null != l && e.set(l, t)
    }), e
  }, [t])
}

function I(e) {
  var t, l;
  let n = (t = e, (0, u.useStateFromStoresArray)([f.default, d.default, r.default], () => f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)).filter(e => {
      if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || e.status !== T.GuildScheduledEventStatus.SCHEDULED) return !1;
      if (null == e.channel_id) return !0;
      let t = d.default.getChannel(e.channel_id);
      return r.default.can(g.Permissions.VIEW_CHANNEL, t)
    }), [t])),
    a = (0, u.useStateFromStoresObject)([N.default], () => N.default.getAllEventDismissals()),
    s = (0, u.useStateFromStoresObject)([N.default], () => N.default.getAllUpcomingNoticeSeenTimes()),
    o = (0, u.useStateFromStoresObject)([f.default], () => null == n ? {} : n.reduce((e, t) => {
      let l = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: f.default.isInterestedInEventRecurrence(t.id, l)
      }
    }, {}), [n]),
    E = (0, u.useStateFromStores)([i.default], () => i.default.getGuild(e)),
    _ = null != E && !E.hasFeature(g.GuildFeatures.COMMUNITY) && E.hasFeature(g.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != o && _)
    for (let e = 0; e < n.length; e++) {
      ;
      let t = n[e],
        u = a[t.id],
        d = s[t.id],
        i = null !== (l = o[t.id]) && void 0 !== l && l,
        r = (0, c.getNextShownUpcomingEventNoticeType)(t, u, d, i);
      if (null != r) return {
        upcomingEvent: t,
        noticeType: r
      }
    }
}

function G(e) {
  return (0, u.useStateFromStores)([f.default, d.default, r.default], () => f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || !(0, f.isGuildScheduledEventActive)(e)) return !1;
    if (null == e.channel_id) return !0;
    let t = d.default.getChannel(e.channel_id);
    return r.default.can(g.Permissions.VIEW_CHANNEL, t)
  }), [e])
}

function L(e) {
  return (0, u.useStateFromStores)([f.default], () => f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function O(e) {
  return (0, u.useStateFromStores)([d.default, f.default], () => {
    let t = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => null != d.default.getChannel(e.channel_id));
    return d.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function A(e) {
  let [t, l] = n.useState(() => Date.now());
  n.useEffect(() => {
    let e = setInterval(() => {
      l(Date.now())
    }, C);
    return () => clearInterval(e)
  }, []);
  let a = (0, u.useStateFromStores)([f.default], () => null == e ? [] : f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return n.useMemo(() => a.filter(e => {
    let {
      startTime: t,
      endTime: l
    } = (0, _.getEventSchedule)(e), {
      withinStartWindow: n,
      diffMinutes: u
    } = (0, S.getEventTimeData)(t.toISOString(), null == l ? void 0 : l.toISOString());
    return e.status !== T.GuildScheduledEventStatus.ACTIVE && n && u < 15
  }), [a])
}