"use strict";
n.r(t);
var u, l = n("442837"),
  i = n("570140"),
  r = n("314897"),
  d = n("924301"),
  a = n("658041"),
  s = n("765305");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {},
  E = {};

function f(e) {
  let t = {
    ...c
  };
  delete t[e], c = t;
  let n = {
    ...E
  };
  delete n[e], E = n
}
class v extends(u = l.default.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      c = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, E = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return c[e]
  }
  getAllEventDismissals() {
    return c
  }
  getUpcomingNoticeSeenTime(e) {
    return E[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return E
  }
  getState() {
    return {
      upcomingEventDismissals: c,
      upcomingEventSeenTimestamps: E
    }
  }
}
o(v, "displayName", "UpcomingEventNoticesStore"), o(v, "persistKey", "UpcomingEventNotices"), t.default = new v(i.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...c
    };
    n[t] = Date.now(), c = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === s.GuildScheduledEventStatus.CANCELED || t.status === s.GuildScheduledEventStatus.COMPLETED) && f(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    f(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== r.default.getId()) return;
    let u = d.default.getGuildScheduledEvent(n);
    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED || null != c[n]) return;
    let l = E[n];
    if ((0, a.getNextShownUpcomingEventNoticeType)(u, void 0, l, !1) === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...c
      };
      e[n] = Date.now(), c = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = {
      ...E
    };
    n[t] = Date.now(), E = n
  }
})