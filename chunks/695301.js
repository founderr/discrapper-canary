var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(746916),
    o = n(965638),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    h = n(430824),
    p = n(451478),
    f = n(61634),
    _ = n(325257),
    m = n(941823);
t.Z = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        g = t.id,
        C = (0, a.e7)([h.Z], () => h.Z.getGuild(g)),
        I = (0, s.E)(C),
        E = (0, a.e7)([p.Z], () => p.Z.isFocused()),
        N = (0, a.e7)([u.Z], () => u.Z.isUnavailable(g)),
        x = (0, c.Z)((e) => e.guildId),
        S = (0, f.Z)(g),
        { badge: v, unread: Z } = (0, a.cj)([d.default], () => ({
            badge: d.default.getMentionCount(g),
            unread: d.default.hasUnread(g)
        })),
        T = (0, o.I)(C) && 0 === v,
        b = l.useMemo(
            () =>
                null != n
                    ? n
                    : T
                      ? (0, i.jsx)('div', {
                            className: m.pauseBackground,
                            children: (0, i.jsx)(r.PauseIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: m.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, T]
        );
    return (0, i.jsx)(_.Z, {
        ...e,
        guild: C,
        unavailable: N,
        animatable: E,
        selected: x === g,
        badge: v,
        lowerBadge: b,
        unread: Z,
        mediaState: S,
        guildJoinRequestStatus: I
    });
});
