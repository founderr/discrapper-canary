n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(735250),
    a = n(470079),
    i = n(99815),
    r = n(442837),
    s = n(481060),
    o = n(594174),
    u = n(5192),
    c = n(689938),
    d = n(881894);
function h(e) {
    let { channel: t, userRows: n, statisticId: r } = e;
    return (0, l.jsx)('div', {
        className: d.container,
        children: (0, l.jsxs)('div', {
            className: d.table,
            children: [
                (0, l.jsxs)('div', {
                    className: d.headerRow,
                    children: [
                        (0, l.jsx)(s.Text, {
                            variant: 'text-xxs/medium',
                            className: d.headerRank,
                            children: '#'
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-xxs/medium',
                            className: d.headerPlayer,
                            children: c.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-xxs/medium',
                            className: d.headerValue,
                            children: (function (e) {
                                if (e === i.E.LOL_TOTAL_KILLS) return c.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
                                return 'Unknown statistic';
                            })(r)
                        })
                    ]
                }),
                n.map((e) =>
                    (0, a.createElement)(m, {
                        ...e,
                        key: e.userId,
                        channel: t
                    })
                )
            ]
        })
    });
}
function m(e) {
    let { userId: t, rank: n, value: a, channel: i } = e,
        c = (0, r.e7)([o.default], () => o.default.getUser(t)),
        h = null == i ? void 0 : i.guild_id,
        m = u.ZP.getName(h, null == i ? void 0 : i.id, c);
    return (0, l.jsxs)('div', {
        className: d.userRow,
        children: [
            (0, l.jsx)(s.Text, {
                variant: 'text-xxs/medium',
                className: d.userRank,
                children: n
            }),
            (0, l.jsxs)('div', {
                className: d.userPlayer,
                children: [
                    (0, l.jsx)(s.Avatar, {
                        src: null == c ? void 0 : c.getAvatarURL(h, 16),
                        size: s.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, l.jsx)(s.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: m
                    })
                ]
            }),
            (0, l.jsx)(s.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: a
            })
        ]
    });
}
