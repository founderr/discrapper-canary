n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(661869),
    a = n(876215),
    r = n(442837),
    s = n(592125),
    o = n(994752);
let c = '1221458499993600000',
    d = {
        content_type: a.s.LEADERBOARD,
        extra: { type: 'leaderboard_extra' },
        id: c,
        author_id: c,
        author_type: l.i.USER,
        participants: [],
        traits: []
    };
function u(e) {
    let { entries: t, channelId: n } = e,
        l = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        a = null == l ? void 0 : l.guild_id,
        c = (0, r.e7)([o.Z], () => null != a && null != o.Z.getLeaderboards(a), [a]);
    return {
        entriesWithLeaderboard: i.useMemo(() => (c ? [d, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
