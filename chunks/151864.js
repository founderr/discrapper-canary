"use strict";
a.r(t), a("653041");
var n, s = a("442837"),
  l = a("570140"),
  i = a("765305");

function r(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let o = {
  hiddenEventsAndStages: []
};
class u extends(n = s.default.PersistedStore) {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (o = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: a
    } = e;
    return !!(null != a && o.hiddenEventsAndStages.includes("stage-".concat(a))) || null != t && o.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return o
  }
}
r(u, "displayName", "LiveChannelNoticesStore"), r(u, "persistKey", "liveChannelNotices_v2"), t.default = new u(l.default, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: a
    } = e;
    null != t ? o.hiddenEventsAndStages.push("event-".concat(t)) : null != a && o.hiddenEventsAndStages.push("stage-".concat(a))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, a = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(a) && (t.status === i.GuildScheduledEventStatus.CANCELED || t.status === i.GuildScheduledEventStatus.COMPLETED) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== a))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, a = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(a) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== a))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, a = "stage-".concat(t.id);
    o.hiddenEventsAndStages.includes(a) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== a))
  }
})