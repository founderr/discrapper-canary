var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(746916),
    s = n(965638),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    h = n(430824),
    p = n(451478),
    f = n(61634),
    m = n(325257),
    g = n(941823);
t.Z = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        C = t.id,
        _ = (0, r.e7)([h.Z], () => h.Z.getGuild(C)),
        v = (0, o.E)(_),
        x = (0, r.e7)([p.Z], () => p.Z.isFocused()),
        I = (0, r.e7)([u.Z], () => u.Z.isUnavailable(C)),
        b = (0, c.Z)((e) => e.guildId),
        S = (0, f.Z)(C),
        { badge: E, unread: N } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(C),
            unread: d.default.hasUnread(C)
        })),
        Z = (0, s.I)(_) && 0 === E,
        y = l.useMemo(
            () =>
                null != n
                    ? n
                    : Z
                      ? (0, i.jsx)('div', {
                            className: g.pauseBackground,
                            children: (0, i.jsx)(a.PauseIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: g.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, Z]
        );
    return (0, i.jsx)(m.Z, {
        ...e,
        guild: _,
        unavailable: I,
        animatable: x,
        selected: b === C,
        badge: E,
        lowerBadge: y,
        unread: N,
        mediaState: S,
        guildJoinRequestStatus: v
    });
});
