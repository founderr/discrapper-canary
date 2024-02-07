"use strict";
n.r(t), n.d(t, {
  bulkClearRecents: function() {
    return o
  }
});
var s = n("801340"),
  r = n("913144"),
  i = n("872173"),
  a = n("599110"),
  l = n("49111");
async function o(e, t) {
  await (0, i.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = s.Timestamp.fromDate(new Date), !0), i.UserSettingsDelay.INFREQUENT_USER_ACTION), r.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(l.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}