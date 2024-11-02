n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(192379),
    l = n(876215),
    r = n(442837),
    a = n(676316),
    s = n(146282),
    o = n(442853),
    c = n(520951),
    u = n(897674),
    d = n(206583);
let h = new Set([l.s.PLAYED_GAME, l.s.WATCHED_MEDIA, l.s.TOP_GAME, l.s.TOP_ARTIST, l.s.LISTENED_SESSION, l.s.LAUNCHED_ACTIVITY]);
function m(e) {
    let t = (0, u.Z)(d.YN.GLOBAL_FEED);
    (t = (0, o.Z)({
        entries: t,
        channelId: e
    })),
        (t = i.useMemo(() => (null == t ? void 0 : t.filter((e) => h.has(e.content_type))), [t]));
    let { entries: n, filteredIds: l } = (0, c.Z)(t);
    t = n;
    let { entriesWithLeaderboard: m, hasLeaderboardEntry: p } = (0, a.Z)({
        entries: t,
        channelId: e
    });
    return (
        (t = m),
        {
            requestId: (0, r.e7)([s.Z], () => s.Z.getFeedRequestId(d.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: l,
            hasLeaderboardEntry: p
        }
    );
}
