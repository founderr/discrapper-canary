"use strict";
E.r(t), E.d(t, {
  bulkClearRecents: function() {
    return A
  }
});
var s = E("835913"),
  _ = E("570140"),
  a = E("675478"),
  T = E("626135"),
  n = E("981631");
async function A(e, t) {
  await (0, a.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = s.Timestamp.fromDate(new Date), !0), a.UserSettingsDelay.INFREQUENT_USER_ACTION), _.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), T.default.track(n.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}