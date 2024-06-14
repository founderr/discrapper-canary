"use strict";
E.r(t), E.d(t, {
  bulkClearRecents: function() {
    return n
  }
});
var s = E("835913"),
  _ = E("570140"),
  T = E("675478"),
  a = E("626135"),
  A = E("981631");
async function n(e, t) {
  await (0, T.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = s.Timestamp.fromDate(new Date), !0), T.UserSettingsDelay.INFREQUENT_USER_ACTION), _.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(A.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}