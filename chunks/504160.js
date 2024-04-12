"use strict";
a.r(t), a.d(t, {
  hideLiveChannelNotice: function() {
    return s
  },
  hideUpcomingEventNotice: function() {
    return l
  },
  markUpcomingEventNoticeAsSeen: function() {
    return i
  }
});
var n = a("570140");

function s(e) {
  let {
    eventId: t,
    stageId: a
  } = e;
  (null != t || null != a) && n.default.dispatch({
    type: "LIVE_CHANNEL_NOTICE_HIDE",
    eventId: t,
    stageId: a
  })
}

function l(e) {
  n.default.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
    eventId: e
  })
}

function i(e) {
  n.default.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
    guildEventId: e
  })
}