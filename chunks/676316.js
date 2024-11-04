n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    l = n(661869),
    r = n(876215),
    s = n(442837),
    a = n(592125),
    o = n(994752);
let c = '1221458499993600000',
    u = {
        content_type: r.s.LEADERBOARD,
        extra: { type: 'leaderboard_extra' },
        id: c,
        author_id: c,
        author_type: l.i.USER,
        participants: [],
        traits: []
    };
function d(e) {
    let { entries: t, channelId: n } = e,
        l = (0, s.e7)([a.Z], () => a.Z.getChannel(n)),
        r = null == l ? void 0 : l.guild_id,
        c = (0, s.e7)([o.Z], () => null != r && null != o.Z.getLeaderboards(r), [r]);
    return {
        entriesWithLeaderboard: i.useMemo(() => (c ? [u, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
