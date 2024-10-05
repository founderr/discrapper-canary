var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(481060),
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
        C = (0, r.e7)([h.Z], () => h.Z.getGuild(g)),
        I = (0, s.E)(C),
        E = (0, r.e7)([p.Z], () => p.Z.isFocused()),
        N = (0, r.e7)([u.Z], () => u.Z.isUnavailable(g)),
        S = (0, c.Z)((e) => e.guildId),
        x = (0, f.Z)(g),
        { badge: v, unread: T } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(g),
            unread: d.default.hasUnread(g)
        })),
        Z = (0, o.I)(C) && 0 === v,
        A = l.useMemo(
            () =>
                null != n
                    ? n
                    : Z
                      ? (0, i.jsx)('div', {
                            className: m.pauseBackground,
                            children: (0, i.jsx)(a.PauseIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: m.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, Z]
        );
    return (0, i.jsx)(_.Z, {
        ...e,
        guild: C,
        unavailable: N,
        animatable: E,
        selected: S === g,
        badge: v,
        lowerBadge: A,
        unread: T,
        mediaState: x,
        guildJoinRequestStatus: I
    });
});
