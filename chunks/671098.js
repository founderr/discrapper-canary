"use strict";
E.r(t), E.d(t, {
  bulkClearRecents: function() {
    return n
  }
});
var _ = E("835913"),
  s = E("570140"),
  T = E("675478"),
  a = E("626135"),
  A = E("981631");
async function n(e, t) {
  await (0, T.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = _.Timestamp.fromDate(new Date), !0), T.UserSettingsDelay.INFREQUENT_USER_ACTION), s.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(A.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}