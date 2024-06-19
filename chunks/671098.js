e.d(_, {
  n: function() {
    return N
  }
});
var T = e(835913),
  s = e(570140),
  I = e(675478),
  A = e(626135),
  n = e(981631);
async function N(E, _) {
  await (0, I.PS)(E, E => (E.guildRecentsDismissedAt = T.E.fromDate(new Date), !0), I.fy.INFREQUENT_USER_ACTION), s.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: E,
    channelIds: _
  }), A.default.track(n.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}