E.d(_, {
    n: function () {
        return T;
    }
});
var s = E(835913),
    n = E(570140),
    t = E(675478),
    r = E(626135),
    a = E(981631);
async function T(e, _) {
    await (0, t.PS)(e, (e) => ((e.guildRecentsDismissedAt = s.E.fromDate(new Date())), !0), t.fy.INFREQUENT_USER_ACTION),
        n.Z.dispatch({
            type: 'BULK_CLEAR_RECENTS',
            guildId: e,
            channelIds: _
        }),
        r.default.track(a.rMx.CHANNEL_LIST_UPDATED, { action_type: 'recents_dismissed' });
}
