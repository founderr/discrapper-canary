var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(746916),
    s = n(965638),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    h = n(430824),
    p = n(451478),
    m = n(61634),
    f = n(325257),
    g = n(771557);
t.Z = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        C = t.id,
        v = (0, r.e7)([h.Z], () => h.Z.getGuild(C)),
        _ = (0, a.E)(v),
        x = (0, r.e7)([p.Z], () => p.Z.isFocused()),
        I = (0, r.e7)([u.Z], () => u.Z.isUnavailable(C)),
        b = (0, c.Z)((e) => e.guildId),
        E = (0, m.Z)(C),
        {
            badge: S,
            unread: Z,
            isMentionLowImportance: N
        } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(C),
            isMentionLowImportance: d.default.getIsMentionLowImportance(C),
            unread: d.default.hasUnread(C)
        })),
        y = (0, s.I)(v) && 0 === S,
        T = l.useMemo(
            () =>
                null != n
                    ? n
                    : y
                      ? (0, i.jsx)('div', {
                            className: g.pauseBackground,
                            children: (0, i.jsx)(o.PauseIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: g.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, y]
        );
    return (0, i.jsx)(f.Z, {
        ...e,
        guild: v,
        unavailable: I,
        animatable: x,
        selected: b === C,
        badge: S,
        isMentionLowImportance: N,
        lowerBadge: T,
        unread: Z,
        mediaState: E,
        guildJoinRequestStatus: _
    });
});
