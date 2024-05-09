"use strict";
n.r(t);
var u, l = n("442837"),
  i = n("570140"),
  r = n("314897"),
  d = n("924301"),
  a = n("658041"),
  s = n("765305");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {},
  c = {};

function f(e) {
  let t = {
    ...o
  };
  delete t[e], o = t;
  let n = {
    ...c
  };
  delete n[e], c = n
}
class N extends(u = l.default.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      o = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, c = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return o[e]
  }
  getAllEventDismissals() {
    return o
  }
  getUpcomingNoticeSeenTime(e) {
    return c[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return c
  }
  getState() {
    return {
      upcomingEventDismissals: o,
      upcomingEventSeenTimestamps: c
    }
  }
}
E(N, "displayName", "UpcomingEventNoticesStore"), E(N, "persistKey", "UpcomingEventNotices"), t.default = new N(i.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...o
    };
    n[t] = Date.now(), o = n
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
    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED || null != o[n]) return;
    let l = c[n];
    if ((0, a.getNextShownUpcomingEventNoticeType)(u, void 0, l, !1) === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...o
      };
      e[n] = Date.now(), o = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = {
      ...c
    };
    n[t] = Date.now(), c = n
  }
})