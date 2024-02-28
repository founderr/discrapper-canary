"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var u = n("446674"),
  l = n("913144"),
  i = n("271938"),
  d = n("398604"),
  r = n("49129"),
  a = n("745049");
let s = {},
  E = {};

function c(e) {
  let t = {
    ...s
  };
  delete t[e], s = t;
  let n = {
    ...E
  };
  delete n[e], E = n
}
class o extends u.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t, n;
      s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, E = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return s[e]
  }
  getAllEventDismissals() {
    return s
  }
  getUpcomingNoticeSeenTime(e) {
    return E[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return E
  }
  getState() {
    return {
      upcomingEventDismissals: s,
      upcomingEventSeenTimestamps: E
    }
  }
}
o.displayName = "UpcomingEventNoticesStore", o.persistKey = "UpcomingEventNotices";
var f = new o(l.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...s
    };
    n[t] = Date.now(), s = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === a.GuildScheduledEventStatus.CANCELED || t.status === a.GuildScheduledEventStatus.COMPLETED) && c(t.id)
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
    } = e, u = i.default.getId();
    if (t !== u) return;
    let l = d.default.getGuildScheduledEvent(n);
    if (null == l || l.status !== a.GuildScheduledEventStatus.SCHEDULED) return;
    let c = s[n];
    if (null != c) return;
    let o = E[n],
      f = (0, r.getNextShownUpcomingEventNoticeType)(l, void 0, o, !1);
    if (f === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...s
      };
      e[n] = Date.now(), s = e
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