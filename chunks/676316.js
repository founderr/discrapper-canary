n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(192379),
    l = n(661869),
    r = n(876215),
    a = n(442837),
    s = n(592125),
    o = n(994752),
    c = n(463031);
let d = '1221458499993600000',
    u = {
        content_type: r.s.LEADERBOARD,
        extra: {
            type: 'leaderboard_extra',
            leaderboard_id: c.z
        },
        id: d,
        author_id: d,
        author_type: l.i.USER,
        participants: [],
        traits: []
    };
function h(e) {
    let { entries: t, channelId: n } = e,
        l = (0, a.e7)([s.Z], () => s.Z.getChannel(n)),
        r = null == l ? void 0 : l.guild_id,
        c = (0, a.e7)([o.Z], () => null != r && null != o.Z.getLeaderboards(r), [r]);
    return {
        entriesWithLeaderboard: i.useMemo(() => (c ? [u, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
