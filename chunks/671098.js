"use strict";
s.r(t), s.d(t, {
  bulkClearRecents: function() {
    return _
  }
});
var a = s("835913"),
  n = s("570140"),
  i = s("675478"),
  E = s("626135"),
  l = s("981631");
async function _(e, t) {
  await (0, i.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = a.Timestamp.fromDate(new Date), !0), i.UserSettingsDelay.INFREQUENT_USER_ACTION), n.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), E.default.track(l.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}