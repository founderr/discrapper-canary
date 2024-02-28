"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("446674"),
  u = n("913144"),
  i = n("271938"),
  a = n("398604"),
  r = n("49129"),
  s = n("745049");
let d = {},
  o = {};

function c(e) {
  let t = {
    ...d
  };
  delete t[e], d = t;
  let n = {
    ...o
  };
  delete n[e], o = n
}
class f extends l.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t, n;
      d = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return d[e]
  }
  getAllEventDismissals() {
    return d
  }
  getUpcomingNoticeSeenTime(e) {
    return o[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return o
  }
  getState() {
    return {
      upcomingEventDismissals: d,
      upcomingEventSeenTimestamps: o
    }
  }
}
f.displayName = "UpcomingEventNoticesStore", f.persistKey = "UpcomingEventNotices";
var E = new f(u.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...d
    };
    n[t] = Date.now(), d = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === s.GuildScheduledEventStatus.CANCELED || t.status === s.GuildScheduledEventStatus.COMPLETED) && c(t.id)
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
      guildEventId: n
    } = e, l = i.default.getId();
    if (t !== l) return;
    let u = a.default.getGuildScheduledEvent(n);
    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED) return;
    let c = d[n];
    if (null != c) return;
    let f = o[n],
      E = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
    if (E === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...d
      };
      e[n] = Date.now(), d = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = {
      ...o
    };
    n[t] = Date.now(), o = n
  }
})