"use strict";
l.r(t);
var n, u = l("442837"),
  a = l("570140"),
  d = l("314897"),
  s = l("924301"),
  i = l("658041"),
  r = l("765305");

function o(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let E = {},
  f = {};

function c(e) {
  let t = {
    ...E
  };
  delete t[e], E = t;
  let l = {
    ...f
  };
  delete l[e], f = l
}
class N extends(n = u.default.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, l;
      E = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, f = null !== (l = e.upcomingEventSeenTimestamps) && void 0 !== l ? l : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return E[e]
  }
  getAllEventDismissals() {
    return E
  }
  getUpcomingNoticeSeenTime(e) {
    return f[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return f
  }
  getState() {
    return {
      upcomingEventDismissals: E,
      upcomingEventSeenTimestamps: f
    }
  }
}
o(N, "displayName", "UpcomingEventNoticesStore"), o(N, "persistKey", "UpcomingEventNotices"), t.default = new N(a.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, l = {
      ...E
    };
    l[t] = Date.now(), E = l
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === r.GuildScheduledEventStatus.CANCELED || t.status === r.GuildScheduledEventStatus.COMPLETED) && c(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    c(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: l
    } = e;
    if (t !== d.default.getId()) return;
    let n = s.default.getGuildScheduledEvent(l);
    if (null == n || n.status !== r.GuildScheduledEventStatus.SCHEDULED || null != E[l]) return;
    let u = f[l];
    if ((0, i.getNextShownUpcomingEventNoticeType)(n, void 0, u, !1) === r.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...E
      };
      e[l] = Date.now(), E = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, l = {
      ...f
    };
    l[t] = Date.now(), f = l
  }
})